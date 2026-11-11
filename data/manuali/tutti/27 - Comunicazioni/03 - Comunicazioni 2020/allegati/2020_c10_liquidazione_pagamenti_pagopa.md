# Comunicazione n.10/2020 – Emissione mandato di pagamento per PAGOPA

## Scopo del documento

Il documento illustra l'operatività, le configurazioni necessarie per una corretta liquidazione del documento di spesa ed emissione del mandato di pagamento per PagoPA.

| Data | Oggetto comunicazione /integrazione | Versione |
|------|-------------------------------------|----------|
| 22.07.2020 | Prima comunicazione | C10 V 0 |
| 26.06.2021 | Aggiornamento per flusso OPI | C10 V 1 |

---

## 1. Verifica/Inserimento nuova modalità di pagamento PagoPA

Per poter eseguire il pagamento con la nuova modalità **PAGOPA**, bisogna verificare ed eseguire le seguenti operazioni:

- verificare se la nuova modalità di pagamento **PAGOPA** è già stata inserita nella tabella della **modalità di riscossione e pagamento**

[Schermata: percorso menu Cityware → Tabelle → Clienti/Fornitori → Modalità Riscossione e Pagamento]

---

## 2. Inserimento nuova modalità di pagamento nell'anagrafica del soggetto debitore

Se la modalità non è presente nell'elenco delle modalità di pagamento:

- selezionare la funzione **"Aggiungi"**

[Schermata: barra strumenti della finestra "CITY-FINANCING Pagamento e Riscossione" con il pulsante "Aggiungi" evidenziato]

quindi selezionare:

**Tesoreria**

Inserire nel campo **"cod. pagamento – Riscossione"** un codice che risulti non essere già stato occupato da altri tipi di modalità di pagamento. (il codice **"70"** è stato utilizzato solo come esempio)

---

## 3. Inserimento nuova modalità di pagamento e codice di avviso di pagamento PAGOPA

Selezionare dall'elenco della **descrizione dei pagamenti**, il tipo **"Avviso PAGOPA"**

Il campo **"Cod. Pag. – Ris. Tesoreria"** viene valorizzato automaticamente con il codice **"16"**.

Per completare l'inserimento, selezionare il bottone **"OK"**

[Schermata: finestra "CITY-FINANCING Pagamento e Riscossione" con i campi: Cod. Pagamento Riscossione = 70, Descrizione Pagto = Pagamento Avviso PAGOPA, campo "Cod. Pag. Tesoreria" con valore 16 evidenziato, e pulsante OK]

- La nuova modalità di pagamento **PAGOPA** deve essere inserita nella sezione **"albo dei pagamenti"** presente nell'anagrafica del soggetto fornitore interessato.

- Nella fase della liquidazione del documento di spesa, dopo aver richiamato la nuova modalità di pagamento per **PAGOPA**, (Es. **"70"**) precedentemente inserita nell'Albo dei pagamenti del soggetto debitore, digitare nell'apposito campo **"Codice Avviso PagoPa"** il numero dell'avviso di pagamento che **non va confuso** con altri codici alfanumerici che possono essere presenti nell'avviso di pagamento. **Ricorda che il campo è esclusivamente numerico pertanto, non vanno inserite lettere.**

Si ricorda inoltre di verificare ed eventualmente indicare il **codice fiscale** nell'anagrafica del soggetto in modo da valorizzare correttamente l'apposito tag (`<5.10.28.1> - codice_identificativo_ente`) in fase di creazione del flusso OPI.

---

## 4. Emissione del mandato di pagamento e del flusso OPI

**Esempio di liquidazione:**

[Schermata: finestra di liquidazione con campi: Importo Lordo = 603,90, Ritenute = 128,90, Saldo = 0; Beneficiario = ORTENZI STEFANO & C SRL; Modalità Pagamento = 70 "Pagamento PAGOPA"; campo "Codice Avviso PagoPa" evidenziato; pulsante "Liquidazione" evidenziato]

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