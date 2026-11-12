# Fonti, licenze e crediti

## Contenuti e dati

| Risorsa                                                                                                    | Origine                             | Note                                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Manuali Cityware Online** (`data/manuali/`, 1.532 file Markdown) e relativi indici (`data/index-*.json`) | Palitalsoft                         | Forniti per l'hackathon. Sono la **sola base di conoscenza** dell'assistente. Proprietà di Palitalsoft, **non** coperti dalla licenza MIT. |
| **Logo Palitalsoft** (`public/palitalsoft.png`)                                                            | Materiale dell'hackathon            | Marchio di Palitalsoft.                                                                                                                    |
| **Operatrice, Comune di Vallechiara, ticket e punteggi di esempio**                                        | Inventati dal team                  | Nessun dato personale reale.                                                                                                               |
| **Indicatori del cruscotto**                                                                               | Dati della sessione + dati simulati | Servono solo a mostrare il prodotto.                                                                                                       |

Prima di rendere pubblico il repository, chiedere al team e agli organizzatori conferma del permesso di distribuire i manuali Palitalsoft e i relativi indici.

## Software di partenza

- **[Hackathon Starter](https://github.com/sahat/hackathon-starter)** di Sahat Yalkabov e contributori, licenza MIT. Orienta ne usa struttura, autenticazione e configurazione. Il README originale è in [HACKATHON-STARTER.md](HACKATHON-STARTER.md), lo storico in [CHANGELOG-hackathon-starter.md](CHANGELOG-hackathon-starter.md).

## Librerie principali

Tutte con licenza open source; l'elenco completo con le versioni è in `package.json`.

| Libreria                                                                                           | Uso                                      |
| -------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| [Express](https://expressjs.com) 5                                                                 | Server web                               |
| [Mongoose](https://mongoosejs.com) / MongoDB                                                       | Dati                                     |
| [Pug](https://pugjs.org)                                                                           | Pagine                                   |
| [Bootstrap](https://getbootstrap.com) 5                                                            | Base dell'interfaccia                    |
| [Font Awesome Free](https://fontawesome.com)                                                       | Icone                                    |
| [Passport](https://www.passportjs.org)                                                             | Accesso e account (da Hackathon Starter) |
| [Mocha](https://mochajs.org), [Chai](https://www.chaijs.com), [Playwright](https://playwright.dev) | Test                                     |

## Font

[Titillium Web](https://fonts.google.com/specimen/Titillium+Web) (titoli) e [Inter](https://fonts.google.com/specimen/Inter) (testi), da Google Fonts, licenza SIL Open Font License.

## Tecniche e API

- **Ricerca nei manuali:** algoritmo **BM25** (Robertson e Zaragoza, _The Probabilistic Relevance Framework: BM25 and Beyond_, 2009), implementato in `ai/search.js`.
- **Modello:** [Google Gemini API](https://ai.google.dev/gemini-api/docs), usata via REST con risposte JSON strutturate.

## Immagini e identità visiva

- **Logo e identità Orienta** (`public/orienta-mark.svg`, palette, tipografia, diagrammi): Mattia. Vedi [design/](design/).
- **Immagine illustrativa del municipio** (`public/municipio.webp`): generata con OpenAI.
- **Microlezione CIE** (`public/cie-microlezione.mp4`, `public/cie-poster.webp`): video di 21 secondi con testo a schermo. Autore da confermare con il team.

## Strumenti di IA

Elenco completo, con funzione e limiti, in [IA.md](IA.md).
