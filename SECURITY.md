# Sicurezza

Orienta è un **prototipo** nato per un hackathon, non un prodotto in produzione.

## Regole del progetto

- **Nessun dato personale reale.** Usa solo dati inventati per demo e test, e non inserirne mai nell'assistente.
- **Mai committare segreti.** Chiavi API, password e stringhe di connessione vanno nel file locale `.env.example` (nel `.gitignore`) o nelle variabili d'ambiente. `env.template` è solo un modello.
- **L'IA si chiama solo dal server**, mai dal browser.

## Segnalare un problema

Apri una [issue](https://github.com/gianlucainsero/myproject/issues) nel repository, senza includere chiavi o dati sensibili. Se la segnalazione contiene informazioni riservate, contatta direttamente il team.

## Prima di andare in produzione

Segui [PROD_CHECKLIST.md](PROD_CHECKLIST.md): rimuovere le pagine di esempio di Hackathon Starter, configurare i cookie di sessione, aggiungere logging e una pipeline di deploy. Per problemi del framework di base: [Hackathon Starter](https://github.com/sahat/hackathon-starter/issues).
