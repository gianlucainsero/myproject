// Wrapper minimale per Gemini (API REST, nessuna dipendenza). Per cambiare fornitore basta riscrivere generateJSON.
// Variabili (.env.example): GEMINI_API_KEY (obbligatoria), GEMINI_MODEL (default gemini-2.5-flash),
// GEMINI_THINKING_LEVEL (modelli Gemini 3.x, default "low" = più veloce), GEMINI_THINKING_BUDGET (modelli 2.5)

const API = 'https://generativelanguage.googleapis.com/v1beta/models';

function isConfigured() {
  return Boolean(process.env.GEMINI_API_KEY) && process.env.AI_MOCK !== '1';
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Chiede al modello una risposta JSON conforme a `schema` (formato OpenAPI di Gemini).
 * @param {{system: string, messages: {role:'user'|'assistant', content:string}[], schema: object, temperature?: number}} opts
 */
async function generateJSON({ system, messages, schema, temperature = 0.3 }) {
  const model = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
  const generationConfig = {
    temperature,
    responseMimeType: 'application/json',
    responseSchema: schema,
  };
  // Riduciamo il "ragionamento" interno del modello: risposte molto più rapide in demo.
  if (/gemini-2\.5/.test(model)) {
    const budget = process.env.GEMINI_THINKING_BUDGET ?? (model.includes('flash') ? '0' : '');
    if (budget !== '') generationConfig.thinkingConfig = { thinkingBudget: Number(budget) };
  } else if (/gemini-[3-9]/.test(model)) {
    const level = process.env.GEMINI_THINKING_LEVEL ?? 'low';
    if (level) generationConfig.thinkingConfig = { thinkingLevel: level };
  }

  const body = {
    systemInstruction: { parts: [{ text: system }] },
    contents: messages.map((m) => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] })),
    generationConfig,
  };

  let lastErr;
  for (let attempt = 0; attempt < 3; attempt++) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 45000);
    try {
      const res = await fetch(`${API}/${model}:generateContent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': process.env.GEMINI_API_KEY },
        body: JSON.stringify(body),
        signal: ctrl.signal,
      });
      if (res.status === 429 || res.status >= 500) {
        lastErr = new Error(`Gemini HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`);
        await sleep(1500 * (attempt + 1));
        continue;
      }
      if (!res.ok) {
        const errText = (await res.text()).slice(0, 500);
        // Se il modello non accetta l'impostazione di "thinking", riproviamo senza.
        if (res.status === 400 && generationConfig.thinkingConfig && /thinking/i.test(errText)) {
          console.warn('[ai] il modello non accetta thinkingConfig, riprovo senza:', errText.slice(0, 160));
          delete generationConfig.thinkingConfig;
          continue;
        }
        throw new Error(`Gemini HTTP ${res.status}: ${errText}`);
      }
      const data = await res.json();
      const text = (data.candidates?.[0]?.content?.parts || []).map((p) => p.text || '').join('');
      if (!text) throw new Error(`Gemini: risposta vuota (${data.candidates?.[0]?.finishReason || 'nessun candidato'})`);
      return JSON.parse(text);
    } catch (err) {
      lastErr = err;
      if (err.name !== 'AbortError' && !/HTTP 5|429/.test(err.message)) break;
    } finally {
      clearTimeout(timer);
    }
  }
  throw lastErr;
}

module.exports = { generateJSON, isConfigured };
