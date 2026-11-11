# Importazione Dati

I dati già trasmessi all'ANAC attraverso il sistema SIMOG sono scaricabili in formato `.CSV` tramite il sito [http://portaletrasparenza.avcp.it](http://portaletrasparenza.avcp.it) inserendo come criteri di filtro il codice fiscale dell'amministrazione e l'anno di riferimento (VEDI: *Come scaricare i dati dal portale AVCP*).

I dati scaricati possono essere importati automaticamente nel software attraverso la funzione **IMPORTAZIONI – Flussi interoperabilità**.

La procedura si compone di **2 fasi**: caricamento e importazione.

## Fase 1 – Caricamento

Per caricare un flusso è necessario selezionare la tipologia dei dati da importare. Attraverso questa scheda si possono importare vari flussi dati, tra cui:

- Flussi del portale trasparenza ANAC
- Flussi **STANDARD XML** generati da qualsiasi software, purché creati e validati secondo le regole L.190/2012.

In base alla selezione potrebbero essere disponibili ulteriori opzioni da selezionare.

[Interfaccia "Flussi interoperabilità": campi "Tipo tracciato" (es. Flusso CSV Cityware PAL), "Ufficio", "File", e opzioni a tendina come "Crea una revisione nei CIG già presenti", "Forza denominazione Ente con quella configurata", "Importa tutti i nuovi CIG in una singola raccolta". Pulsante ESEGUI.]

È possibile inoltre associare un particolare **Ufficio/Gruppo** all'importazione così da facilitare la successiva gestione da parte degli utenti.

Infine è necessario selezionare il file del flusso da importare, premendo sul dischetto 📁 e avviare la procedura di caricamento premendo sul pulsante **ESEGUI**.

Terminato il caricamento, nella tabella **"Importazioni"** verrà visualizzata una riga con:

- Data del caricamento
- Tipologia
- Ufficio
- Numero di righe caricate

[Tabella "Importazioni" con colonne: Data, Tipo flusso, Ufficio, Num. righe. Esempio di righe: "25/01/2022 17:00:35 – Flusso CSV Cityware PAL (CSVCityware) – 10 righe", "25/01/2022 16:34:53 – Flusso CSV Cityware PAL (CSVCityware) – 659 righe", ecc.]

## Fase 2 – Importazione

Per importare un dato nel software, è necessario aprire prima uno dei caricamenti facendo **doppio click** sulla riga corrispondente. Viene visualizzato l'elenco di tutti gli affidamenti presenti nel file caricato.

Sono presenti **4 colonne**:

| Colonna | Descrizione |
|---------|-------------|
| Selezione | Checkbox per la selezione della riga |
| Identificativo | Riporta il CIG che si sta caricando |
| Esito Importaz. | Indica se una riga è stata già importata oppure no |
| Descrizione | Descrizione della raccolta |

[Interfaccia "Record importati" con colonne: Selec, Identificativo, Esito importaz., Descrizione. Pulsanti in alto a destra: "Seleziona visualizzati", "Deseleziona tutto", "Importa selezionati", "Torna alla lista dei flussi".]

Con i bottoni in alto a destra è possibile:

- **Seleziona visualizzati** – Selezionare tutte le righe visualizzate
- **Deseleziona tutto** – Deselezionare tutte le righe visualizzate
- **Importa selezionati** – Importare le righe selezionate
- **Torna alla lista dei flussi** – Tornare alla lista dei flussi

## Scheda "APPALTIPA"

La scheda **"APPALTIPA"** consente di importare tutti i CIG provenienti dai moduli **Lavori Pubblici** e **Gare** così da garantire l'interoperabilità fra le varie applicazioni dei moduli itaEngine.

[Interfaccia scheda "AppaltiPA" con opzioni: "Verifica affidamento per AppaltiPA", "Seleziona CIG", "Importa tutti i nuovi CIG in una singola raccolta (per anno)", "Importa selezionati". Tabella "Record importati" con colonne: Selec, Identificativo, Soggetto, Anno 1^ raccolta, Anno esq. cig, Data esq. cig, Esito importaz.]

> **ATTENZIONE:** Dopo aver eseguito una operazione di importazione, eseguire la procedura di Validazione utilizzando il bottone **"Validazione Contratti"** così da verificare istantaneamente i dati da completare.

## Scheda "NuvolaPA L.190 v.10"

L'ultima scheda **"NuvolaPA L.190 v.10"** viene utilizzata in fase di avvio per la conversione dati dall'applicativo L.190/2012 versione 1.100 visualizzazioni.