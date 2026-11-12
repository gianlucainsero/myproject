const assert = require('node:assert/strict');
const { askAssistant } = require('../ai');
const demo = require('../controllers/comunepilot-demo');

describe('Livelli dell’assistente Orienta', () => {
  let previousMock;

  before(() => {
    previousMock = process.env.AI_MOCK;
    process.env.AI_MOCK = '1';
  });

  after(() => {
    if (previousMock === undefined) delete process.env.AI_MOCK;
    else process.env.AI_MOCK = previousMock;
  });

  it('dà i passaggi direttamente quando tipo e obiettivo sono già chiari', async () => {
    const reply = await askAssistant({ message: 'Come apro una tornata per le elezioni amministrative in Cityware? Non so da dove partire.' });
    assert.equal(reply.level, 1);
    assert.equal(reply.question, null);
    assert.deepEqual(reply.choices, []);
    assert.ok(reply.steps.some((step) => /NUOVO/i.test(step)));
    assert.ok(reply.sources.some((source) => /Elezioni Amministrative/i.test(source.section || '')));
  });

  it('chiarisce il tipo di consultazione e passa al livello 1 dopo la scelta', async () => {
    const message = 'Sono un operatore comunale. Devo aprire una tornata elettorale. Quale procedura seguo?';
    const guide = await askAssistant({ message });
    assert.equal(guide.level, 2);
    assert.match(guide.question, /tipo di consultazione/i);
    assert.ok(guide.choices.length >= 2);
    assert.deepEqual(guide.steps, []);
    const choice = guide.choices.find((item) => /amministrative/i.test(item));
    assert.ok(choice);
    const reply = await askAssistant({
      message: choice,
      history: [
        { role: 'user', content: message },
        { role: 'assistant', content: guide.question },
      ],
    });
    assert.equal(reply.level, 1);
    assert.equal(reply.question, null);
    assert.ok(reply.steps.length >= 2);
    assert.ok(reply.sources.some((source) => /Elezioni Amministrative/i.test(source.section || '')));
  });

  it('mantiene il livello 1 per una procedura chiara chiesta per la prima volta', async () => {
    const reply = await askAssistant({ message: 'È la prima volta e non so come rilasciare una carta d’identità elettronica in Cityware.' });
    assert.equal(reply.level, 1);
    assert.equal(reply.question, null);
  });

  it('mantiene il ticket per l’errore di stampa che blocca l’ufficio', async () => {
    const reply = await askAssistant({ message: 'Errore nella stampa delle liste sezionali. L’ufficio è bloccato.' });
    assert.equal(reply.level, 3);
    assert.equal(reply.ticket.type, 'bug');
    assert.equal(reply.ticket.priority, 'alta');
  });

  it('usa il livello 1 anche nelle risposte dimostrative per le amministrative', async () => {
    const message = 'Devo aprire una tornata elettorale. Quale procedura seguo?';
    const guide = await demo.askAssistant({ message, history: [] });
    assert.equal(guide.level, 2);
    const reply = await demo.askAssistant({
      message: guide.choices[0],
      history: [
        { role: 'user', content: message },
        { role: 'assistant', content: guide.question },
      ],
    });
    assert.equal(reply.level, 1);
    assert.equal(reply.question, null);
    const other = await demo.askAssistant({ message: guide.choices[1], history: [] });
    assert.equal(other.level, 3);
  });
});
