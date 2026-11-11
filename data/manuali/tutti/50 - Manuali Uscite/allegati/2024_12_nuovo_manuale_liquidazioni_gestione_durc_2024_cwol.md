# Liquidazione documenti / Atti di liquidazione / Gestione DURC

## Argomenti trattati

- Inserimento Atto di liquidazione e ricerca documenti da liquidare.
- Operatività disponibili:
  - Liquida Intero documento (assegnazione)
  - Modifica Liquida quota parte del documento
  - Liquidazione senza fattura per creazione del documento fittizio, documento equivalente o fattura analogica.
- Fasi finali per modifica stesura proposta e genera proposta. Inserimento Allegati all'atto.
- Liquidazioni con controllo DURC sul soggetto: gestione e inserimento Durc.

---

## Modalità di accesso

**PERCORSO MENU:**

`180. Servizi Economici` → `10. Finanziaria` → `110. Uffici Periferici` → `100. Liquidazione Documenti`

---

## Inserimento atto di liquidazione

### Creazione del nuovo atto

Procedere alla creazione di un nuovo atto di liquidazione. Cliccare **Nuovo Atto**.

[Schermata: finestra "Operazioni su Atto" con pulsante "Nuovo Atto" evidenziato; finestra "Selezione parametri" con campi: Tipo Atto (es. "Decreto di Liquidazione"), Proposta da (es. 01/07/01 - Ufficio Progettazione), Firmatario RUP (es. A.VASATURO - ADELE VASATURO), Codice testo (es. cvfAttiLiq_463 - Atto di Liquidazione AdSP Mar Tirreno Centrale), e pulsante "Proposta Atto"]

Tali dati sono modificabili ad eccezione del **codice testo**. Successivamente cliccare **Proposta Atto**.

### Inserimento oggetto e informazioni extra

Successivamente sarà possibile inserire l'oggetto dell'Atto o altre informazioni extra che verranno salvate nel database.

> **Nota:** È consigliato inserire l'oggetto anche se NON obbligatorio.

[Schermata: finestra "Atti di liquidazione" con campi: Tipo Documento (AL - Decreto di Liquidazione), Numeratore (LIQUID/422), Parte (Uscita), Decreto-Anno (2022), Numero (0), Data Decreto, Proposta da (01/07/01 - Ufficio Progettazione), Disabilitato. Tab "Oggetto" con campi: Oggetto, Descrizione Extra, Note finali. Tab "Dettaglio". Sezione "Pratiche" con "Titolario pratiche". Pulsanti: "Conferma", "Torna Elenco"]

Successivamente cliccare **Conferma**.

### Atto creato

L'atto creato e **NON numerato** sarà visibile al centro della finestra.

[Schermata: finestra "Gestione Liquidazioni/Riscossioni" con barra centrale che mostra: Atto AL 2022 0, Servizio assegnatario 01 07 01 00 Ufficio Progettazione. Colonna destra con pulsanti: "Anteprima", "Fasi Finali", "Allegati al decreto", "Vedi documenti da Liquidare", "Liquida intero documento", "Modifica/Liquida quota parte doc.", "Liquidazione senza fattura", "Allegati al documento", "Cambia decreto Liquidazione"]

---

## Vedi Documenti da Liquidare

### Ricerca documenti

Procedere alla ricerca dei documenti da liquidare cliccando **Vedi Documenti da Liquidare**.

[Schermata: colonna destra con pulsante "Vedi documenti da Liquidare" evidenziato nella sezione "Ricerca documenti"]

### Campi di ricerca

La paginazione presenta la possibilità di ricercare il/i documento/i da liquidare tramite una serie di campi di ricerca (dove è presente il simbolo della lente è possibile cliccare e visualizzare la tabella).

Una volta inseriti i campi Cliccare **Elenca**.

[Schermata: finestra di ricerca con campi: Fornitore, Numero documento, Anno/Progressivo inserimento, Tipo documento, Impegno: Anno/Numero, Servizio assegnatario, Utente assegnatario, Codice statistico, Data documento (Da/A), Data registrazione (Da/A), Dt. Scad. (Da/A), Esito (Entrambe), checkbox "Includi assegnazioni con DPR 207/2010". Pulsanti: "Elenca", "Carica", "Salva", "Reset"]

### Risultati della ricerca

Quindi saranno visualizzati in lista i documenti da liquidare.

- Lo **stato verde** indica la possibilità di procedere alla liquidazione.
- Nel caso di **stato rosso** posizionarsi sopra con tooltip per verificare l'anomalia.

Se tutto ok, selezionare il documento e cliccare:

- **Liquida Intero Documento**: per effettuare una liquidazione totale dell'assegnazione
- **Modifica/Liquida quota parte doc.**: per effettuare una liquidazione parziale dell'assegnazione
- **Liquidazione senza fattura**: consente di inserire una "liquidazione diretta", ovvero un documento non presente da Sdi. Quindi un documento equivalente o Fattura analogica.

> Il bottone **Cambia Atto di Liquidazione** consente di cambiare l'Atto presente al centro della finestra e resetta tutti i filtri di ricerca documenti.

---

## 1 - Liquida intero documento

Per effettuare una liquidazione totale dell'assegnazione.

[Schermata: lista documenti con stato verde, documento selezionato (TIM S.P.A.), pulsante "Liquida intero documento" evidenziato nella colonna destra. Popup "Resoconto Liquidazione": "E' stata creata la Liquidazione relativa all'assegnazione del 2022, prog.30, riga 1"]

---

## 2 - Modifica/Liquida quota parte doc

Per effettuare una liquidazione parziale dell'assegnazione, o modificare alcuni dei campi già prestabiliti.

[Schermata: documento selezionato con stato verde, pulsante "Modifica/Liquida quota parte doc." evidenziato nella colonna destra]

### Schermata di pre-liquidazione

Si apre una schermata di pre liquidazione dove devo andare a modificare o confermare i dati presentati da programma.

[Schermata: finestra "Liquidazione - Documento nr. SF00143861 di 427,00€ del 30/04/2024 del soggetto ENEL SOLE SRL" con tab: Dettaglio, Altri dati, Ritenute Liq., Provvigioni, Opere pubbliche. Campi: Impegno (2024 00258 - Acquisto vestiario DPI), Disponibilità (883,99), Voce di bilancio (1005103 1005 103 06 - Vestiario), Piano Finanziario (1 3 1 2 4 - Vestiario), Codice Cofog (4 5 - Trasporti), Transazione UE (8 - Per le Spese non correlate ai Finanziamenti), Importo (427,74), Ritenute (77,13%), Beneficiario-Delegato (24137 - ENEL SOLE SRL), Modalità di pagamento (1 20 - Conto corrente bancario 30 gg da data acquisizione), IBAN. Pulsanti: "Aggiungi", "Torna Documento", "Situazione Impegno", "Situazione Voce di bilancio", "Navigatore"]

**Procedura:**

1. Premere prima il bottone **Aggiungi** per confermare i dati
2. Poi **Aggiorna** per aggiornare il documento finale agganciato alla liquidazione

### Risultato finale

Risultato finale dopo aver confermato e aggiornato il documento.

[Schermata: Popup "Resoconto Liquidazione": "E' stata creata la Liquidazione relativa all'assegnazione del 2022, prog.30, riga 1"]

---

## 3 - Liquidazione senza fattura (documento fittizio)

Consente di inserire una "liquidazione diretta", ovvero un documento non presente da Sdi. Quindi un documento equivalente o Fattura analogica.

### Creazione del documento

Dopo aver premuto su **Liquidazione senza fattura** si aprirà una nuova schermata per andare a creare inizialmente il documento. Qui inseriamo il tipo documento di liquidazione diretta già prestabilito dall'ente.

[Schermata: finestra "Documenti Uscita" con campi: Data di registrazione (05/12/2024), Tipo documento (3 - Liquidazione diretta (solo fin)), Impegno (2024 00005 - ANAS - CANONI CONCESSIONE ATTRAVERSAM. STRADALI), Voce di bilancio (0904103 0904 10... - Altre spese sostenute per utilizzo di beni di terzi n.a.c.), Atto di liquidazione (Nuovo/Default, DL 2024 0), Area-Settore-Servizio (01 02 01 00 - Ufficio commercio - SUAP). Pulsante "Continua"]

### Campi della testata

Inseriamo i seguenti campi prima di andare nel tab della liquidazione:

1. **Descrizione del documento**
2. **Importo Lordo**
3. **Modalità di pagamento**
4. **Data Scadenza**

[Schermata: finestra "Documenti Uscita" con campi compilati: Data di registrazione (05/12/2024), Tipo Documento (3 - Liquidazione diretta (solo fin)), Anno/Progressivo documento (2024 1304), Descrizione (ANAS - CANONI CONCESSIONE ATTRAVERSAM. STRADALI...), Importo lordo (0,00), Ritenute (0,00), Saldo (0,00). Tab: Testata, Liquidazione, Abbuoni/PCC, Altri dati. Fornitore: Soggetto (900 - ANAS SPA), Codice Fiscale (80208450587), Persona (Giuridica), Modalità di pagamento (campo evidenziato), Data Scadenza. Pulsanti: "Aggiungi", "Altra Ricerca"]

### Modalità di pagamento

Scegliere una modalità di pagamento tra quelle presentate, oppure impostarne una di **default**, in modo tale che al prossimo pagamento sullo stesso fornitore sarà reperito il primo metodo di pagamento di default disponibile.

[Schermata: finestra "Albo Pagamenti" con tabella: Prog. 1 - Pagamento - Codice 20 - Conto corrente bancario 30 gg (Default), ABI/CAB 01005/03200 - BANCA NAZIONALE DEL LAVORO FILIALE DI ROMA, IBAN IT77P01005032000000000004; Prog. 3 - Pagamento - Codice 70 - Avviso PAGOPA; Prog. 4 - Pagamento - Codice 99 - Altri codici pagamento da sistema. Pulsante "Nuovo"]

### Tab Liquidazione

Una volta inseriti tutti i dati sulla testata del documento possiamo premere il tab **LIQUIDAZIONE**.

Controlliamo che tutti i campi inseriti nella schermata sottostante siano ok poi premiamo il bottone **AGGIUNGI**.

[Schermata: finestra con tab "Liquidazione" attivo. Campi: Impegno (2024 00005 - ANAS - CANONI CONCESSIONE ATTRAVERSAM. STRADALI), Disponibilità (6.680,77), Voce di bilancio (0904103 0904 103 06), Piano Finanziario (1 3 2 7 999), Codice Cofog (6 3 - Approvvigionamento idrico), Transazione UE (4 - Per le Spese Finite da trasferire), Importo (1.000,00), Ritenute (0,00%), Beneficiario-Delegato (900 - ANAS SPA), Modalità di pagamento (1 20 - Conto corrente bancario 30 gg da data acquisizione), IBAN. Pulsante "Aggiungi" evidenziato]

### Conferma inserimento documento

Una volta confermata e aggiunta la liquidazione possiamo premere il bottone **Aggiungi** per confermare l'inserimento del documento nel programma in definitivo.

[Schermata: finestra "Documenti Uscita" con dati compilati e tab "Liquidazione" con record: 2024 00002 - TEST STATO EVASIONE ORDINI - Importo Liquidato 0,07 - Beneficiario 900 ANAS SPA. Popup "Creazione documento": "E' stato creato il documento con anno: 2024 - progressivo: 1304". Pulsante "Aggiungi" evidenziato]

---

## Fasi Finali

### Avviso conferma liquidazione

Il documento/assegnazione selezionato in precedenza passerà nella form in basso ed apparirà un messaggio di avvenuta liquidazione.

[Schermata: documento TIM S.P.A. spostato nella form inferiore con messaggio "Resoconto Liquidazione: E' stata creata la Liquidazione relativa all'assegnazione del 2022, prog.30, riga 1"]

### Eliminazione liquidazione

Nel caso si voglia annullare l'operazione e riportare il documento in alto (cancellando l'operazione) sarà possibile selezionare il documento e successivamente cliccare **Elimina**.

[Schermata: documento selezionato nella form inferiore (TIM S.P.A. - Fattura Aprile 22), pulsante "Elimina" evidenziato nella sezione "Liquidazioni" in basso a destra]

### Stesura proposta

Una volta inseriti tutti i documenti che si vogliono liquidare cliccare **Fasi Finali**.

[Schermata: pulsante "Fasi Finali" evidenziato nella colonna destra. Finestra "Riepilogo Importi" con: Tipo Atto (DL - Decreto Liquidazione Con Firma Digitale), Area-Settore-Servizio (01 02 01 00 - Ufficio commercio - SUAP), Anno e numero Atto (2024 0). Tabella riepilogo: Liquidazioni da pagare (14 righe, 4.626,45), Liquidazioni pagate (0, 0,00), Totale Liquidazioni (14, 4.626,45). Pulsante "Stesura Proposta" evidenziato]

Procedere alla stesura del testo dell'Atto tramite il bottone **Stesura proposta**.

### Inserimento Allegati al decreto

Per inserire gli allegati all'atto da liquidazione documenti selezioniamo il bottone **Allegati all'atto** nella colonna a destra.

[Schermata: procedura in 7 passaggi per l'inserimento allegati:
1. Pulsante "Allegati all'atto" nella colonna destra
2. Pulsante "Nuovo" nella finestra "Gestione allegati"
3. Pulsante "Importa"
4. Finestra "Carica documento" con campo "Caricare il documento" e icona cartella
5. Selezione file dal file system (es. ENEL ENERGIA DURC_(prot. 42108005_scad. 21-05-2024))
6. Pulsante "Conferma" nella finestra "Carica documento"
7. Pulsante "Aggiungi" per salvare l'allegato]

### Modifica stesura

Per apportare modifiche e personalizzazioni utilizzare il bottone **Modifica stesura** con il programma di editor **ONLYOFFICE**; tutte le modifiche effettuate possono essere salvate grazie al bottone **Salva** ed incidono sul testo definitivo dell'Atto.

[Schermata: anteprima PDF dell'atto "LIQUIDAZIONE DI SPESA" con intestazione STEMA ENTE, Nr. @{$LIQATT.NUM_DL}@ del @{$LIQATT.DATAINS_DL}@, Servizio/Ufficio: 01.02.01.00 - Ufficio commercio - SUAP. Testo con: CONSIDERATO, ACCERTATO, DATO ATTO, ATTESTATO, DISPONE LA LIQUIDAZIONE, ORDINA. Oggetto: TEST ATTO DI LIQUIDAZIONE GRANDI UTENZE X FABRIANO. Pulsanti colonna destra: "Rigenera", "Scarica", "Ricarica", "Salva", "Salva ed esci", "Modifica Stesura" (evidenziato), "Genera proposta"]

In questa nuova scheda del browser possiamo effettuare le modifiche al testo come se fosse un documento Word. Una volta completate le modifiche chiudiamo con la X la scheda ONLYOFFICE.

Successivamente il programma torna alla schermata del testo dell'atto in pdf con le modifiche apportate.

[Schermata: editor ONLYOFFICE aperto in una nuova scheda del browser con interfaccia simile a Word (menu: File, Home, Inserisci, Layout di Pagina, Riferimenti, Collaborazione, Visualizza, Plugin). Documento "LIQUIDAZIONE DI SPESA" editabile con formattazione testo, stili (Normal, Titolo 1, Titolo 2, Titolo 3), strumenti di formattazione]

### Rigenera stesura proposta

Il bottone **Rigenera** ci dà la possibilità di poter tornare alla versione originale del testo dell'Atto senza le modifiche.

> ⚠️ **ATTENZIONE!!** Se usata dopo le modifiche fatte al testo, poi le perderemo e dovremmo rimodificare il testo di nuovo.

[Schermata: finestra "Stesura atto" con anteprima PDF e pulsante "Rigenera" evidenziato nella colonna destra]

### Genera proposta (posizione da 10 a 15)

Una volta ritornati alla schermata precedente del programma vedrete prodotto con le modifiche il documento formato PDF dell'atto di liquidazione.

Per completare le fasi finali, Cliccare **Genera Proposta**.

> Questa funzione è l'ultima da usare per **portare l'atto da posizione 10 a 15**.

[Schermata: anteprima PDF dell'atto con pulsante "Genera proposta" evidenziato nella colonna destra]

---

## Liquidazioni con DURC - Gestione e inserimento

Per chi ha il controllo del DURC attivo è necessario inserire il **Durc** nel soggetto **PRIMA** di effettuare la Liquidazione del documento.

### Inserimento DURC nell'anagrafica

Andiamo nell'anagrafica del fornitore, cerchiamo il fornitore e selezioniamo rendendo la riga arancione, successivamente selezioniamo il bottone **Durc**, poi selezioniamo il bottone **Nuovo**.

[Schermata: anagrafica fornitori con riga selezionata (24188 - 3G ITALIA SRL - Giuridica). Colonna destra con pulsanti: "Altra Ricerca", "Uffici FE", "Durc" (evidenziato), "Allegati". Finestra "Certificati DURC richiesti" con tabella vuota e pulsante "Nuovo" evidenziato]

### Compilazione dati DURC

Inseriamo una **data rilascio** e selezioniamo il bottone **Calcola 120 giorni**. Infine per salvare il record premiamo il bottone **Aggiungi**.

[Schermata: finestra "Certificati DURC richiesti" con campi: Soggetto (24188 - 3G ITALIA SRL), Codici Enti (Codice INPS, Codice INAIL, Codice Cassa Edile), Servizio Richiedente (Certificati DURC richiesti - Ufficio commercio - SUAP), Posizione contributiva (Regolare), Descrizione NOTE, Data Rilascio (1 - campo data), Data cessazione validità (2 - calcolata), Calcola 120 giorni (pulsante), Codice unico progetto, Codice identificativo gara. Pulsante "Aggiungi" (3) evidenziato]

### Inserimento allegato DURC

Una volta inserito il record andremo a selezionare il progressivo **Durc** inserito e premiamo sul bottone **Allegati** per inserire l'allegato Durc scaricato dal sito INAIL. Da qui seguirà la procedura di inserimento allegati che già conosciamo.

[Schermata: finestra "Certificati DURC richiesti" con record inserito (Prog. 144 - 3G ITALIA SRL - 01 02 01 00 - Ufficio commercio - SUAP). Pulsante "Allegati" evidenziato. Sotto: finestra "Gestione allegati" con Prog. Durc 144, Soggetto 24188, elenco allegati con file "TELECOM ITALIA SPA Durc scad. 10-0..." e pulsante "Nuovo"]

### Esempio di liquidazione con DURC

Esempio di una liquidazione con DURC inserito nel soggetto **prima** della liquidazione:

[Schermata: messaggio "Resoconto Liquidazione: E' stata creata la Liquidazione relativa all'assegnazione 2024 / 356 / r.3 con progressivo DURC 144". Finestra "Liquidazione - Documento nr. 1 di 122,00€ del 29/05/2024 del soggetto 3G ITALIA SRL" con: Importo (42,70), Ritenute (7,70%), Beneficiario-Delegato (24188 - 3G ITALIA SRL), Modalità di pagamento (1 20 - Conto corrente bancario 30 gg da data acquisizione), IBAN, campo DURC (144) evidenziato con Data rilascio/cessazione (30/11/2024 / 30/03/2025). Pulsante "Aggiorna" evidenziato]