# DOCKER NEXTSTEP

**A cosa serve?** Controllare il collegamento alle **visure MCTC**, riavviarlo o cambiare la password della VPN.

**Requisiti?** Avere il docker di NextStep configurato. *Non lo avete? L'attivazione viene fatta dal nostro backoffice!*

---

## DOVE SI TROVA

Dai **tre puntini** seguire il percorso:

▶ **Codice della Strada** ▶ **Amministrazione CDS** ▶ **Parametri Ente**

[Schermata: menu a cascata con percorso 30. Polizia Locale → 10. Codice della Strada → 140. Amministrazione CDS → 10. Parametri Ente]

Da qui ci sposteremo nei seguenti tab: **Percorsi** ▶ **Visure**. Infine, cliccare sul tasto **[Configura]** per aprire la tabella dei Parametri MCTC.

[Schermata: tab "Parametri Ente" con sottotab "Percorsi" selezionato, sotto-tab "Visure" evidenziato e pulsante "Configura" in basso a destra]

Si apre il pannello della Docker MCTC con lo **Stato Docker** in alto e i pulsanti:

### Legenda pulsanti

- **[Aggiorna Stato]**: rilegge lo stato
- **[Riavvia Docker]**: riavvia il collegamento
- **[Cambia Credenziali]**: cambia utente e password della VPN
- **[Torna]**: chiude il pannello

> **NOTA:** Non vedete lo Stato Docker e i pulsanti? Significa che usate ancora il vecchio sistema. Il passaggio al nuovo lo attiva il nostro backoffice!

[Schermata: pannello "Parametri MCTC" con Stato Docker "FUNZIONANTE" in alto a sinistra, tabella parametri (TIPO_COMMERCIALE, VPNUSER, VPNPASSWORD, MATRICOLA, CODICESEGRETO, GGIMPORTVISURA, ENDPOINT, NAMESPACE, TIMEOUT, CHECKPWDVPN) e pulsanti a destra: Torna, Riavvia Docker, Cambia Credenziali, Aggiorna Stato, Config. NextStep]

---

## STATO DOCKER

| Stato | Cosa fare |
|-------|-----------|
| **FUNZIONANTE** (verde) | Niente, è tutto a posto |
| **VPN CONNESSA - SERVIZIO MCTC NON RAGGIUNGIBILE** | Normale dopo un riavvio o un cambio password. Se dura più di 2 minuti: **[Aggiorna Stato]**, poi **[Riavvia Docker]** |
| **PASSWORD ERRATA** | **[Cambia Credenziali]** |
| **CONNESSIONE NON DISPONIBILE** | Contattare l'assistenza |
| **STATO NON DISPONIBILE: ...** | Contattare l'assistenza indicando il testo |

---

## CAMBIARE LA PASSWORD DELLA VPN

### Quando fare il cambio della password della VPN?

1. Quando la password è scaduta o è stata cambiata di recente
2. Quando lo stato del docker è `PASSWORD ERRATA`
3. Quando compare il messaggio: *"Prima di procedere effettuare il cambio password della VPN"*

### Come si cambia la password della VPN?

1. Cliccare su **[Cambia Credenziali]** — *Questo perché non è possibile modificare l'utente e la password VPN direttamente dalle righe!*
2. Controllare l'**Utente VPN** (già compilato, di solito `COM.XXXX`)
3. Inserire la nuova **Password VPN** e cliccare su **[Conferma]**

[Schermata: finestra modale "Cambia credenziali Docker MCTC" con campi "Utente VPN" e "Password VPN" e pulsanti "Conferma" / "Annulla"]

Se va a buon fine compare *"Credenziali aggiornate correttamente"* e lo stato torna **FUNZIONANTE** in 1-2 minuti, senza dover riaprire il pannello.

> **CASO POSSIBILE:** Se lo stato del docker è **FUNZIONANTE** ma non è possibile visurare le targhe, bisogna contattare l'assistenza!

### Se compare "Cambio credenziali non riuscito"

Le credenziali precedenti restano attive. Cosa fare in questo caso? Messaggi possibili:

- **HTTP 422**: indica che la password è stata rifiutata. Si può riprovare a cambiare la password con il **[Cambia Credenziali]**
- **HTTP 401 / 403 / 404**: in questo caso bisogna segnarsi il codice e riferirlo al servizio di assistenza
- **Servizio non raggiungibile**: Riprovare tra qualche minuto

---

## CASI FREQUENTI

- Dopo il cambio credenziali, può succedere che la motorizzazione non istanzi correttamente la connessione e lo stato della docker indica **"VPN CONNESSA - SERVIZIO MCTC NON RAGGIUNGIBILE"**.

  **Che fare?** In questi casi si riavvia tramite il pulsante apposito: **[Riavvia DOCKER]**

- **"SERVIZIO MCTC NON RAGGIUNGIBILE"** per più di 2 minuti. **Cosa fare?** Cliccare su **[Aggiorna Stato]**, poi **[Riavvia Docker]**

Se abbiamo riavviato, bisogna aspettare qualche minuto. Se tutto è ok, dopo pochi secondi lo stato verrà aggiornato in automatico a **FUNZIONANTE**.

In caso compaia a schermo l'alert: *"Riavvio Docker non riuscito"*, segnatevi il testo e il codice del messaggio e contattate l'assistenza.

---

## RIAVVIARE LA DOCKER

> ⚠️ **ATTENZIONE:** durante il riavvio le visure non funzionano

Per eseguire il riavvio, cliccare sul tasto **[Riavvia Docker]**. Lo stato resta *"SERVIZIO MCTC NON RAGGIUNGIBILE"* per circa **15-35 secondi**. Attendere il cambio di stato. Se tutto è ok, dopo pochi secondi lo stato verrà aggiornato in automatico a **FUNZIONANTE**.

In caso compaia a schermo l'alert: **"RIAVVIO DOCKER NON RIUSCITO"**, annotate codice e testo e contattate l'assistenza.