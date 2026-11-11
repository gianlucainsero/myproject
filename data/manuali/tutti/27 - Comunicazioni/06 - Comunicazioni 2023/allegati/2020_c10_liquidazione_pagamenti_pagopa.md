# Emissione mandato di pagamento per PAGOPA

**Comunicazione n. 10/2020**

**Scopo:** Il documento illustra l'operatività, le configurazioni necessarie per una corretta liquidazione del documento di spesa ed emissione del mandato di pagamento per PagoPA.

---

## 1. Verifica / Inserimento nuova modalità di pagamento PagoPA

Per poter eseguire il pagamento con la nuova modalità **PAGOPA**, bisogna verificare ed eseguire le seguenti operazioni:

- verificare se la nuova modalità di pagamento **PAGOPA** è già stata inserita nella tabella della modalità di riscossione e pagamento

[Schermata: menu "Tabelle" → "Clienti/Fornitori" → "Modalità Riscossione e Pagamento"]

---

## 2. Inserimento nuova modalità di pagamento nell'anagrafica del soggetto debitore

Se la modalità non è presente nell'elenco delle modalità di pagamento:

- selezionare la funzione **"Aggiungi"**

[Schermata: barra strumenti della finestra "Pagamento e Riscossione" con pulsante "Aggiungi" evidenziato]

quindi selezionare la scheda **"Tesoreria"**

Inserire nel campo **"cod. pagamento – Riscossione"** un codice che risulti non essere già stato occupato da altri tipi di modalità di pagamento. (il codice "70" è stato utilizzato solo come esempio)

---

## 3. Inserimento nuova modalità di pagamento e codice di avviso di pagamento PAGOPA

Selezionare dall'elenco della **descrizione dei pagamenti**, il tipo **"Avviso PAGOPA"**.

Il campo **"Cod. Pag. – Ris. Tesoreria"** viene valorizzato automaticamente con il codice **"16"**.

Per completare l'inserimento, selezionare il bottone **"OK"**.

[Schermata: finestra "Pagamento e Riscossione" con campo "Cod. Pagamento Riscossione" valorizzato a 70, descrizione "Pagamento Avviso PAGOPA", e menu a tendina "Descrizione Pagamento" con voce "Avviso PAGOPA" selezionata. Campo "Cod. Pag. Ris. Tesoreria" valorizzato a 16. Pulsante "OK" evidenziato.]

- La nuova modalità di pagamento **PAGOPA** deve essere inserita nella sezione **"albo dei pagamenti"** presente nell'anagrafica del soggetto fornitore interessato.

- Nella fase della liquidazione del documento di spesa, dopo aver richiamato la nuova modalità di pagamento per **PAGOPA**, (Es."70") precedentemente inserita nell'Albo dei pagamenti del soggetto debitore, digitare nell'apposito campo **"Codice Avviso PagoPa"** il numero dell'avviso di pagamento che non va confuso con altri codici alfanumerici che possono essere presenti nell'avviso di pagamento. **Ricorda che il campo è esclusivamente numerico pertanto, non vanno inserite lettere.**

---

## 4. Emissione del mandato di pagamento e del flusso OPI

**Esempio di liquidazione:**

[Schermata: finestra di liquidazione con:
- Importo Lordo: 603,90
- Ritenute: 108,90
- Saldo: 0
- Beneficiario/Delegato: 641 - ORTENZI STEFANO & C SRL
- Partita IVA: 01269831009
- Modalità Pagamento: 70 - Pagamento PAGOPA (evidenziato)
- Campo "Codice Avviso PagoPa" (evidenziato, vuoto)
- Causale: "Manutenzione ordinaria e riparazione di mobili e arredi"
- Pulsante "Liquidazione" evidenziato]

Quindi, si procede con l'operatività di sempre fino ad arrivare alla emissione del mandato di pagamento e la generazione del relativo flusso OPI.

Le informazioni aggiuntive per PAGOPA sono inserite nel flusso OPI per essere inviate alla piattaforma **SIOPE+**.

### Esempio della struttura parziale dati con le informazioni aggiuntive del flusso OPI:

```xml
<tipo_pagamento>AVVISO PAGOPA</tipo_pagamento>
<informazioni_aggiuntive>
  <avviso_pagoPA>
    <codice_identificativo_ente>02143010367</codice_identificativo_ente>
    <numero_avviso>12544589289</numero_avviso>
  </avviso_pagoPA>
</informazioni_aggiuntive>
```

### Rilascio implementazioni al software

La modifica è disponibile a partire dalla **release 7.11** su **CWOL** – patch del **25.01.2023**.