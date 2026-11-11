# Comunicazione n.09/2020 – Comunicazione data scadenza documenti alla Piattaforma Siope Plus

**Data:** 03/07/2020

## Scopo del documento

Il documento affronta la gestione della data di scadenza sui documenti del ciclo passivo e come quest'ultima viene comunicata alla Piattaforma Crediti Commerciali mediante l'invio di ordinativi di pagamento tramite la Piattaforma SIOPE+.

> **Nota:** L'applicativo Cityware a partire dal 01/01/2018 comunica tramite flusso OPI la data scadenza dei documenti del ciclo passivo, divenuta poi obbligatoria a partire dal 01/07/2020.

## Riferimenti normativi

L'art 50 "Disposizioni in materia di tempi di pagamento dei debiti commerciali della P.A." del recente DL 124/2019 prevede che:

> «3. Entro il 1° gennaio 2021 le amministrazioni pubbliche di cui all'articolo 1, comma 2, della legge 31 dicembre 2009, n. 196, che si avvalgono dell'Ordinativo Informatico di Pagamento (OPI) di cui all'articolo 14, comma 8-bis, della medesima legge n. 196 del 2009, sono tenute ad inserire nello stesso Ordinativo la data di scadenza della fattura. Conseguentemente, a decorrere dalla suddetta data, per le medesime amministrazioni viene meno l'obbligo di comunicazione mensile di cui all'articolo 7-bis, comma 4, del decreto-legge 8 aprile 2013, n. 35, convertito, con modificazioni, dalla legge 6 giugno 2013, n. 64.»

La data di entrata in vigore della norma in questione è stata **anticipata al 1° luglio 2020**, come previsto dall'articolo 1, comma 855 della Legge di bilancio 2020.

## Gestione della data di scadenza in Cityware e Cityware Online

In sede di contabilizzazione dei documenti elettronici sul campo **'Data scadenza'** viene indicata la data di scadenza indicata dal fornitore sul documento stesso. Qualora tale data non sia esatta occorre **cancellare il valore** indicato in modo che il programma effettui il ricalcolo con le regole definite all'interno della modalità di pagamento associata al soggetto per quella fattura.

[Schermata: Dati relativi al pagamento – Condizioni di pagamento: TP02 (pagamento completo). Dettaglio pagamento con Modalità MP05 (bonifico), Data scadenza pagamento: 2019-04-26 (26 Aprile 2019), Importo: 48,30, Codice IBAN: IT45T03069845611000000004236. Tabella con colonne: Modalità pagamento, Istituto finanziario, IBAN, BIC, Importo, Data scadenza. Valore Data scadenza evidenziato: 26/04/2019]

In sede di contabilizzazione viene mostrata la data presente nel documento con possibilità di cancellazione e ricalcolo. La scelta della data di scadenza da utilizzare è molto importante e va effettuata nel rispetto degli obblighi assunti con il fornitore (es. utenze con scadenze fisse) e nel rispetto delle regole dettate dalla PCC.

[Schermata: Scheda di contabilizzazione con tab "Altri dati" attiva. Campi visibili: Fornitore/Soggetto 22194 ENI GAS E LUCE SPA, Codice Fiscale 12300020158, Persona Giuridica, Modalità di pagamento 3/20 Conto corrente bancario, Soggetto 3435 BANCA FARMAFACTORING SPA, Cab 1600, Direzione Generale Via Domenichino 5 Milano. Campi evidenziati in rosso: Data Acquisizione 30/03/2019 e Data Scadenza 26/04/2019]

## Inserimento data scadenza nel flusso xml da inviare a SIOPE+

L'applicativo Cityware è compliance dal Gennaio 2018 (data di partenza dei primi Enti con il progetto SIOPE+) con le nuove normative che prevedono l'obbligo di inserire nell'ordinativo la data di scadenza del documento del ciclo passivo.

A partire dal 01/01/2018 all'interno del flusso xml inviato alla Piattaforma SIOPE+ viene valorizzato il tag `<motivo_scadenza_siope>` con il valore **"CORRETTA_SCAD_FATTURA"** che consente di aggiornare la scadenza in PCC con quella inserita dall'utente nell'applicativo Cityware o Cityware Online (campo "data scadenza").

### Regole Tecniche v. 1.5, pag. 40

| Rif. | Tag | Tipo | Occ. | Descrizione |
|------|-----|------|------|-------------|
| 4.7.7.3.2.7.4 | `motivo_scadenza_siope` | an | 0..1 | Indica la ragione che determina la scadenza del pagamento. Può assumere i seguenti valori: **"SCAD_FATTURA"**: se la scadenza coincide con quella indicata o ricavabile dalla fattura; **"CORRETTA_SCAD_FATTURA"**: se la data è stata variata perché nella fattura è stata indicata una non corretta; **"SOSP_DECORRENZA_TERMINI"**: se la data è stata variata a seguito di sospensione dei termini di scadenza indicati nella fattura |

## Contenuto flussi – data scadenza

**Data scadenza Pagamento Siope.**

Alla piattaforma SIOPE PLUS sulla quota dei documenti pagati viene sempre comunicato:

- Gli estremi della fattura assegnati da SDI e dal fornitore
- L'importo pagato (parziale o totale)
- La data di scadenza indicata al momento dell'inserimento
- Si ricorda che la data di scadenza va calcolata **a 30 giorni dalla data di acquisizione da Sdi** (verificare modalità di calcolo impostate sulle modalità di pagamento del fornitore)
- La modifica della data di scadenza va fatta **solo ove necessario** (pagamento concordato con fornitore) e la data inserita viene comunicata con la motivazione `CORRETTA_SCAD_FATTURA`

## Esempio

[Schermata: Scheda documento con Dati Identificativi: Documento Nr. 1 del 25-06-2020, Descrizione Documento "Fattura". IMPORTO LORDO 30.500,00, RITENUTE 5.500,00, Dettaglio Ritenute spuntato, SALDO 0. Fornitore: Soggetto 67670 FONDAZIONE CASA DI RIPOSO *A. CONT, P.Iva 02021970427, Persona G. Prg. Modalità di Pagamento 1, 30 Bonifico C/Corrente altri Istituti, IBAN IT06W0503537615415571700007, 5035 VENETO BANCA, 37615 Ag Sera S. Quirico Stazione, C/C 415571700007. Protocollo Nr. 5 del 25-06-2020, Riga RUF 0, Dt. Acquisizione 25-06-2020, Dt. Scadenza 25-07-2020 (evidenziato in giallo), Escluso da calc. Tempi medi non spuntato]

### Dettaglio flusso xml

```xml
<tipo_documento_siope_a>ANALOGICO</tipo_documento_siope_a>
<tipo_documento_analogico_siope>FATT_ANALOGICA</tipo_documento_analogico_siope>
<codice_fiscale_emittente_siope>06655971007</codice_fiscale_emittente_siope>
<anno_emissione_fattura_siope>2020</anno_emissione_fattura_siope>
- <dati_fattura_siope>
    <numero_fattura_siope>1</numero_fattura_siope>
    <importo_siope>30500.00</importo_siope>
    <data_scadenza_pagam_siope>2020-07-25</data_scadenza_pagam_siope>
    <motivo_scadenza_siope>CORRETTA_SCAD_FATTURA</motivo_scadenza_siope>
    <natura_spesa_siope>CORRENTE</natura_spesa_siope>
</dati_fattura_siope>
```