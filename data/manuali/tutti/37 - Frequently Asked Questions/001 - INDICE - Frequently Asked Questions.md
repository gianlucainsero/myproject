# Frequently Asked Questions – Area Economico - Finanziaria

## Liquidazione del documento di spesa ed emissione del mandato di pagamento per PagoPA

Per riportare nel flusso OPI (da inviare alla piattaforma SIOPE+) le informazioni dell'avviso PagoPA da liquidare, occorre inserire in fase di liquidazione la modalità di pagamento **"Avviso PAGOPA"** e compilare il relativo campo **"codice IUV"**:

[Schermata: finestra "Liquidazione - Documento n." con i campi "Modalità di pagamento" impostato su "Avviso PAGOPA" e "Codice IUV" evidenziati in rosso]

Per informazioni dettagliate su come inserire la modalità di pagamento "Avviso PAGOPA" fare riferimento alla seguente comunicazione:

> `2020_c10_liquidazione_pagamenti_pagopa.pdf`

---

## Segnalazione di errore in fase di arricchimento di un provvisorio di tesoreria

Se nella fase di arricchimento di un provvisorio di tesoreria viene visualizzato il seguente messaggio di errore:

[Schermata: finestra "Errore lettura flusso" con messaggio "Errore durante la lettura dei dati del flusso da WS: Parametro flusso mancante"]

significa che nell'archivio dei provvisori di tesoreria non è stato valorizzato il campo **"id flusso"**. Questo si verifica nel caso in cui il giornale di cassa (che contiene i provvisori di tesoreria) è stato importato da **cityware client/server**.

### Soluzione: utility di normalizzazione

Per risolvere la problematica, è sufficiente lanciare una utility di cityware per allineare questa informazione, raggiungibile al seguente percorso:

[Schermata: menu "Funzioni di servizio" → "Normalizzazione Archivi" → "Movimenti" → "Normalizza Movimenti Provvisori"]

La funzione può essere lanciata sia in **simulazione** che in **creazione**, ma essendo un'"aggiunta" di dati può essere lanciata anche direttamente in modalità **"creazione"**:

[Schermata: finestra "Normalizza Movimenti Provvisori" con opzione "Creazione" selezionata, campo "Anno" impostato su 2024, e descrizione: "Il programma elabora i soli documenti con provvisori Anziché e cercando la stringa '/PUR/' e '/AUR/' e prendere la stringa che si trova dopo '/URL/' fino al prossimo spazio e scriverla nel campo ID_FLUSSO"]

### Soluzione definitiva: importazione da cwol

L'utility precedente permette di allineare i dati presenti, ma per risolvere **definitivamente** il problema si consiglia di importare il giornale di cassa dalla funzione presente su **cwol** raggiungibile al seguente percorso:

[Schermata: menu cwol → "110. Servizi Economici" → "110. Utility" → "30. Import Giornale di Cassa"]

Una volta lanciato il programma è sufficiente cliccare sul bottone **"Seleziona File XML da Importare"** e successivamente sull'icona del disco per selezionare il file da importare:

[Schermata: finestra "Importazione Giornale Cassa" con pulsante "Seleziona File XML da Importare" e finestra di dialogo "Acquisizione file..." per selezionare il file XML]

Infine cliccare su **"Avvia Importazione"** per importare il giornale di cassa selezionato in precedenza.