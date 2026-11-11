// Wrapper minimale per Gemini (API REST, nessuna dipendenza). Per cambiare fornitore basta riscrivere generateJSON.
// Variabili .env: GEMINI_API_KEY (obbligatoria), GEMINI_MODEL (default gemini-2.5-flash)

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
  // Su gemini-2.5-flash disattiviamo il "thinking" per avere risposte più rapide in demo.
  const budget = process.env.GEMINI_THINKING_BUDGET ?? (model.includes('2.5-flash') ? '0' : undefined);
  if (budget !== undefined && budget !== '') generationConfig.thinkingConfig = { thinkingBudget: Number(budget) };

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
      if (!res.ok) throw new Error(`Gemini HTTP ${res.status}: ${(await res.text()).slice(0, 500)}`);
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
