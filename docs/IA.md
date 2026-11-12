# Strumenti di IA, funzionamento e limiti

Dichiarazione richiesta dal regolamento dell'hackathon.

## IA dentro l'app

| Cosa              | Dettaglio                                                                                                                                                                                                                        |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Fornitore**     | Google Gemini, tramite API REST chiamata **solo dal server**                                                                                                                                                                     |
| **Modello**       | `gemini-3.5-flash` per risposte dell'assistente, microlezioni e quiz; `gemini-3.5-flash-lite` come alternativa più veloce ed economica. Si sceglie con `GEMINI_MODEL`; se non è impostata, il codice usa `gemini-2.5-flash`.     |
| **Dati usati**    | Gemini riceve la domanda, la cronologia recente e gli estratti recuperati dai manuali Palitalsoft dell'area selezionata. L'indice completo contiene oltre 1.500 documenti. L'assistente mostra le fonti quando ne ha utilizzate. |
| **Addestramento** | Nessuno: il modello non viene addestrato né rifinito.                                                                                                                                                                            |

## Limiti

- **Può sbagliare.** Verifica sul manuale i riferimenti mostrati nella risposta.
- **Quota Gemini:** la disponibilità delle risposte dipende dalla quota del progetto Google configurato.
- **Modalità di riserva:** senza chiave, o se Gemini non risponde, l'app risponde con testi costruiti direttamente dai manuali. La riserva consente di continuare la demo con gli estratti disponibili. La risposta è marcata internamente con `mock` o `fallback`.
- **Copertura:** se i manuali non bastano, la risposta lo segnala (`knowledgeGap`) e la lacuna compare nel cruscotto.

## Privacy

L'app invia al servizio la domanda e il contesto della conversazione. Per la demo usa esclusivamente dati fittizi e ometti dati personali, allegati riservati e credenziali. L'interfaccia ricorda questa regola. Operatrice, Comune e pratiche di esempio sono inventati.

## IA usata nello sviluppo

| Strumento                            | Uso                                                        |
| ------------------------------------ | ---------------------------------------------------------- |
| **Codex** (OpenAI)                   | Interfaccia web                                            |
| **Claude** (Anthropic)               | Modulo IA, analisi della challenge, preparazione del pitch |
| **OpenAI** (generazione di immagini) | Immagine illustrativa del municipio                        |

Le scelte di prodotto e il ragionamento sono del team.
