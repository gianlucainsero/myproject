# Comunicazione n. 8/2018 - Implementazioni modulo IVA

**Data:** 18/05/2018

## Adeguamenti lato City Financing ed IVA

Considerato che attualmente i registri IVA vengono prodotti in base alla data di registrazione del documento e la liquidazione periodica viene calcolata in base alla esigibilità e cioè in funzione della data di pagamento di una quota o di tutta la fattura, sono state adeguate le funzioni per la gestione di tali prospetti.

Con l'occasione è stato inserito il prospetto di riepilogo dei movimenti IVA che riassume la situazione in essere presso l'Ente.

Le nuove opzioni sul menù sono state disegnate per agevolare la gestione in presenza delle seguenti impostazioni sulla gestione dell'IVA:

[Schermata: Configurazione IVA - mostra i campi "Acquisti in esigibilità differita", "Modalità registrazioni IVA acquisti" impostato su "1 - Registrazione e stampa direttamente sul registro degli acquisti", "Settore IVA default", "Registrazione IVA default", "Registrazione univo per provvisori", sezione "Valorizzazione campo note su movimenti IVA", "Verifica Settore IVA con Bilancio", "Gestione pagamenti parziali" impostato su "1 - Viene creato un movimento per ogni pagamento parziale", e "Stampe periodiche e annuali"]

> **Nota:** Tali impostazioni fanno sì che le fatture vengano stampate sul registro IVA sempre dentro i termini di legge, mentre la liquidazione viene calcolata sull'esigibilità dell'IVA derivata dai pagamenti effettuati.

---

## 1) Modifiche al menu principale del modulo IVA

Il menù principale appare alle seguenti opzioni:

[Schermata: Menu principale modulo IVA con voci: Gestione movimenti IVA, Stampe periodiche (sottomenu), Stampe annuali (sottomenu), Stampa Movimenti IVA inclusi in Liquidazione IVA, Stampa Movimenti IVA Acquisti da Liquidare, Stampa Riepilogo Movimenti IVA, Gestione Versamenti, Gestione Saldi, Allegati IVA, Esp- Dati x Spesometro, Stampa- Dati x Spesometro]

Sono stati creati dei sottomenu per distinguere le stampe periodiche da quelle di fine esercizio.

### Sottomenu "Stampe annuali":
- Stampa Liquidazione IVA Annuale
- Stampa Modello F24

### Sottomenu "Stampe periodiche":
- Stampa Registri IVA
- Stampa Liquidazione IVA Periodica
- Stampa Registro Riepilogativo

La stampa dei registri è stata separata dalla stampa della liquidazione IVA periodica.

### Sottomenu "Funzioni di Servizio":
- Verifica Movimenti IVA
- Verifica Movimenti IVA di Entrata da Autofattura
- Ripristina registro stampato in definitivo
- Normalizza Movimenti Iva Esigibilità Differita

Le stampe di verifica sono state spostate nel menu funzioni di servizio.

---

## 2) Stampa registri IVA

Eliminata dal video la richiesta del numero della pagina iniziale:
- Nel mese di **gennaio** la numerazione viene effettuata sempre a partire da **1**
- Per i **mesi successivi** viene calcolata a partire dai valori memorizzati nel file dei saldi

[Schermata: Finestra "CITY-FINANCING Stampa registri iva" con tabella dei settori IVA (colonne: Sel, Reg, SETT, Descrizione settore IVA, Data ult. liq. period., Dichiar. IVA, Prorata IVA, Gr. Elab., Reg. x Liquid.) e parametri di selezione (Periodo movimenti, Tipo Stampa: Provvisoria/Definitiva/Ristampa, Registro) e parametri di stampa (Margine sinistro, Dispositivo di Stampa, Scelta Stampante)]

Eliminata la visualizzazione dei registri privi di movimenti nel periodo. In assenza di movimenti il prospetto viene comunque stampato con la seguente struttura:

| Registrazione | | Documento | | | | | I.V.A. | |
|---|---|---|---|---|---|---|---|---|
| Data | Numero | Numero | Data | Nominativo | Assoggettamento / Note | Imponibile | % | Importo |

**NESSUN DOCUMENTO PRESENTE**

---

## 3) Stampa liquidazione periodica

Si fa notare che, con la **modalità 1** di gestione dei documenti ad esigibilità differita:
- Il **registro IVA** viene stampato in base alla **data di protocollo** (1)
- La **liquidazione** viene calcolata sulla **data di pagamento** (2)

Nell'esempio si evidenzia come un documento di maggio 2017 diventi esigibile al pagamento che può essere effettuato anche oltre i termini di legge di registrazione della stessa sul registro degli acquisti.

[Schermata: Dettaglio documento IVA con DI Registrazione 11-05-2017, Tipo Documento 103 (TD01) - Fattura Esigibilità differita, IDENTIFICATIVO SDI 70639219, Dati Identificativi (Documento Nr. 39 del 06-05-2017), IMPORTO LORDO 91,50, RITENUTE 16,50, SALDO. Sezione Liquidazione con Data Liq. definitiva 11-04-2018. Tabella movimenti con righe: Non Soggetto ad IVA, QUOTA NON RILEVANTE SERV.IVA (PCC) con imponibile 75,00 e IVA 16,50 al 22%]

### Modifiche alla selezione settori:

- Aggiunta la possibilità di effettuare la stampa per **tutti i settori** presenti in archivio effettuando la selezione dei singoli settori o mediante l'apposito pulsante **"Seleziona tutto"**
- Eliminato il controllo sulla selezione dei settori per gruppo di elaborazione

[Schermata: Finestra "CITY-FINANCING Stampa liquidazione periodica" con tabella settori e pulsanti "Deseleziona tutto" e "Seleziona tutto", parametri di selezione (Periodo movimenti, checkbox "Non stampare dettaglio assoggettamenti per registro") e parametri di stampa]

### Numerazione pagine:

Eliminata dal video la richiesta del numero della pagina iniziale:
- Se nel settore è stato indicato il **registro per liquidazione**, viene calcolata a partire dai valori memorizzati nel file dei saldi
- In caso contrario si assume sempre **1**

---

## 4) Stampa movimenti IVA da liquidare

Effettuate le seguenti modifiche alla selezione dei movimenti da includere in stampa:

- Aggiunta selezione per **data protocollo IVA** (al posto della data di registrazione del documento)
- Aggiunta inclusione dei movimenti a partire dal flag **"incluso in liquidazione IVA"** presente nella tabella dei registri per settore

Consente di ottenere l'elenco dei documenti registrati nel registro degli acquisti ma in attesa di pagamento e quindi di essere inclusi nella liquidazione IVA periodica.

[Schermata: Finestra "CITY-FINANCING Stampa Movimenti IVA Acquisti da Liquidare" con Parametri di selezione: Settore IVA (01 - MENSE SCOLASTICHE), Registro IVA (TUTTI), Periodo Protocollo IVA (dal ___ al 31-12-2017), checkbox "Stampa solo totali", Qualifica (0 - TUTTI), Causali (1, 2, 3, 4, 5)]

### Esempio di output:

**MOVIMENTI IVA DA LIQUIDARE DAL AL 31-12-2017**

Settore: 01 MENSE SCOLASTICHE | Registro: 3 Registro Acquisti

| E/S | Anno/Prog. | Data Reg. | Data / Nr. Prot. IVA | Soggetto Documento | Tipo documento | Imponibile | % | Imposta | Totale |
|---|---|---|---|---|---|---|---|---|---|
| | 2014/7494 | 02-07-2014 | 02-07-2014 N. 23 | SSD S.R.L. n° Pre-fatt. del 01-07-2014 | 103- | 645,27 | | 141,96 | 787,23 |
| | | | | | | 645,27 | A 22 | 141,96 | 787,23 |
| S | 2014/10000 | 02-09-2014 | 02-09-2014 N. 26 | SSD S.R.L. n° pre-fatt. del 01-08-2014 | 103- | 645,27 | | 141,96 | 787,23 |
| | | | | | | 645,27 | A 22 | 141,96 | 787,23 |
| S | 2014/10007 | 04-09-2014 | 04-09-2014 N. 27 | SSD S.R.L. n° pre-fatt. del 01-09-2014 | 103- | 645,27 | | 141,96 | 787,23 |
| | | | | | | 645,27 | A 22 | 141,96 | 787,23 |
| S | 2014/12214 | 23-10-2014 | 23-10-2014 N. 28 | SSD S.R.L. n° pre-fatt. del 01-10-2014 | 103- | 645,27 | | 141,96 | 787,23 |

---

## 5) Stampa Riepilogo Movimenti IVA

**Nuova funzione** che riepiloga in sintesi la situazione dei documenti IVA in essere presso l'Ente.

[Schermata: Finestra "CITY-FINANCING Stampa Riepilogo Movimenti IVA" con Parametri di selezione: Settore IVA (* - TUTTI), Registro IVA (TUTTI), Periodo Movimenti (dal ___ al 31-12-2017) e Parametri di stampa: Dispositivo di Stampa (Schermo), Scelta Stampante (PDFCreator.pdfcmon)]

La nuova stampa elabora i movimenti compresi nel periodo selezionato a video. Vengono evidenziati i seguenti totali:

- Documenti registrati nel periodo e **non inclusi** in liquidazione
- Documenti registrati nel periodo e **inclusi** nella liquidazione dello stesso periodo
- Documenti registrati **in precedenza** e inclusi nella liquidazione del periodo

### Esempio di output:

**STAMPA RIEPILOGO MOVIMENTI IVA NEL PERIODO DAL 01-01-2018 AL 21-05-2018**

Settore: 01 MENSE SCOLASTICHE | Registro: 3 Registro Acquisti

#### MOVIMENTI IVA REGISTRATI NEL PERIODO E NON LIQUIDATI (da pagare)

Riepilogo movim. registrati nell'anno 2018:

| Assoggettamento/Aliquota | Imponibile | IVA detraibile | IVA indetraibile | Totale |
|---|---|---|---|---|
| Iva Normale A 22 | 2.224,00 | 709,28 | 0,00 | 2.933,28 |
| **Tot.** | **2.224,00** | **709,28** | **0,00** | **2.933,28** |

#### MOVIMENTI IVA INCLUSI IN LIQUIDAZIONE

Movimenti registrati prima del 01-01-2018:

| Assoggettamento/Aliquota | Imponibile | IVA detraibile | IVA indetraibile | Totale |
|---|---|---|---|---|
| QUOTA NON RILEVANTE SERV.IVA (PCC) S 22 | 940,91 | 0,00 | 184,91 | 1.025,42 |
| **Tot.** | **940,91** | **0,00** | **184,91** | **1.025,42** |

Movimenti registrati dal 01-01-2018 al 21-05-2018:

| Assoggettamento/Aliquota | Imponibile | IVA detraibile | IVA indetraibile | Totale |
|---|---|---|---|---|
| Iva Normale A 22 | 1.219,00 | 268,28 | 0,00 | 1.487,55 |
| IVA SPLIT SP 22 | 300,00 | 66,00 | 0,00 | 366,00 |
| Fuori Campo IVA E ES | 22,00 | 0,00 | 0,00 | 22,00 |
| **Tot.** | **1.541,00** | **334,28** | **0,00** | **1.875,55** |

#### TOTALE MOVIMENTI

| Assoggettamento/Aliquota | Imponibile | IVA detraibile | IVA indetraibile | Totale |
|---|---|---|---|---|
| Iva Normale A 22 | 1.219,00 | 268,28 | 0,00 | 1.487,55 |
| Fuori Campo IVA E ES | 22,00 | 0,00 | 0,00 | 22,00 |
| QUOTA NON RILEVANTE SERV.IVA (PCC) S 22 | 940,91 | 0,00 | 184,91 | 1.025,42 |
| IVA SPLIT SP 22 | 300,00 | 66,00 | 0,00 | 366,00 |
| **Tot.** | **2.381,91** | **334,28** | **184,91** | **2.900,97** |

Pro-rata detraibile: 50,00 | IVA detraibile: 267,42

---

## 6) Comunicazione liquidazioni periodiche IVA

Effettuato adeguamento del software come da **provvedimento dell'Agenzia delle Entrate del 21/03/2018**.

Tale provvedimento ha introdotto il nuovo modello di comunicazione con le seguenti novità:

- **Rigo VP1:** aggiunta casella "operazioni straordinarie"
- **Rigo VP13:** aggiunta casella "metodo"

Per maggiori dettagli sui nuovi campi si consiglia di consultare il documento con le istruzioni per la compilazione allegato al decreto.

[Schermata: Finestra "CITY-FINANCING Liquidazione IVA Periodica" - Comunicazione Liquidazioni Periodiche IVA con righi: VP1 (Periodo Riferimento 01 Gennaio, Subforniture, Eventi eccezionali, Operazioni Straordinarie), VP2 (Totale operazioni attive al netto dell'IVA), VP3 (Totale operazioni passive al netto dell'IVA), VP4 (IVA esigibile - Debiti/Crediti), VP5 (IVA detratta - Debiti/Crediti), VP6 (IVA dovuta o a credito), VP7 (Debito periodo precedente non superiore 25,82 euro). Pulsanti di esportazione .xls evidenziati per VP2, VP3, VP4, VP5]

### Esportazione documenti

Aggiunti **pulsanti di esportazione in formato .xls** dei documenti elaborati nel calcolo degli importi relativi alle caselle **VP2, VP3, VP4 e VP5**.

Per ogni documento esportato:
- Vengono estratti tutti i dati registrati in IVA
- Nell'ultima colonna viene evidenziato l'importo utilizzato nel calcolo della corrispondente casella (al netto di eventuale pro-rata, ventilazione, etc.)

---

## Distribuzione implementazioni

Le implementazioni sopra indicate sono in distribuzione con l'aggiornamento al modulo **cityfinancing** (patch) pubblicato nella settimana che termina il **18.05.2018**.