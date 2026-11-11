# Adeguamenti lato City Financing ed IVA

## 1. ADEGUAMENTI LATO CITY FINANCING ED IVA

Considerato che attualmente i registri IVA vengono prodotti in base alla data di registrazione del documento e la liquidazione periodica viene calcolata in base alla esigibilità e cioè in funzione della data di pagamento di una quota o di tutta la fattura, sono state adeguate le funzioni per la gestione di tali prospetti.

Con l'occasione è stato inserito il prospetto di riepilogo dei movimenti IVA che riassume la situazione in essere presso l'Ente.

Le nuove opzioni sul menù sono state disegnate per agevolare la gestione in presenza delle seguenti impostazioni sulla gestione dell'IVA:

[Immagine: Schermata "CITY-FINANCING Definizioni e operabilità" con le impostazioni:
- **Acquisti in esigibilità differita**: Modalità registrazione IVA acquisti → "1 – Registrazione e stampa direttamente sul registro degli acquisti"; Registro unico per provvisori; Settore IVA default → "Registro IVA default"
- **Valorizzazione campo note su movimenti IVA**: Note su movimento su registro provvisorio; Note su movimento di addebito su registro acquisti; Note su movimento di storno su registri provvisori; Note su movimento su registro vendite → $12
- **Vertice Settore IVA con Bilancio** (spuntato); **Gestione pagamenti parziali** → "1 – Viene creato un movimento per ogni pagamento parzi..."]

Si ricorda che tali impostazioni le fatture vengono stampate sul registro IVA sempre dentro i termini di legge, mentre la liquidazione viene calcolata sull'esigibilità dell'IVA derivata dai pagamenti effettuati.

---

## 1.1 MODIFICHE AL MENU PRINCIPALE DEL MODULO IVA

Il menù principale appare alle seguenti opzioni:

[Immagine: Menù principale del modulo IVA con le voci:
- Gestione movimenti IVA
- **Stampe periodiche** ▶
- **Stampe annuali** ▶
- Stampa Movimenti IVA inclusi in Liquidazione IVA
- Stampa Movimenti IVA Acquisti da Liquidare
- Stampa Riepilogo Movimenti IVA
- Gestione Versamenti
- Gestione Saldi
- Allegati IVA
- Esp- Dati x Spesometro
- Stampa- Dati x Spesometro]

Sono stati creati dei sottomenu per distinguere le stampe periodiche da quelle di fine esercizio.

**Stampe annuali:**
- Stampa Liquidazione IVA Annuale
- Stampa Modello F24

**Stampe periodiche:**
- Stampa Registri iva
- Stampa Liquidazione Iva Periodica
- Stampa Registro Riepilogativo

La stampa dei registri è stata separata dalla stampa della liquidazione iva periodica.

Le stampe di verifica sono state spostate nel menu **Funzioni di Servizio**:

**Funzioni di Servizio:**
- Verifica Movimenti IVA
- Verifica Movimenti IVA di Entrata da Autofattura
- Ripristina registro stampato in definitivo
- Normalizza Movimenti Iva Esigibilità Differita

---

## 1.2 STAMPA REGISTRI IVA

Eliminata dal video la richiesta del numero della pagina iniziale, nel mese di gennaio la numerazione viene effettuata sempre a partire da 1, per i mesi successivi viene calcolata a partire dai valori memorizzati nel file dei saldi.

[Immagine: Schermata "CITY-FINANCING Stampa registri iva" con:
- Tabella settori IVA con colonne: Sel, Reg, SETT, Descrizione settore IVA, Data ult. liqu.period., Dichiar. IVA, Prorata IVA, Gr. Elab., Reg. x Liquid.
- **Parametri di selezione**: Periodo movimenti (dal 01-01-2018 al 31-01-2018); Tipo Stampa (Provvisoria / Definitiva / Ristampa); Registro (3 - Registro Acquisti); Data ultima stampa definitiva; Ult.Pag Stampata
- **Parametri di stampa**: Margine sinistro (in cm); Dispositivo di Stampa (Schermo); Scelta Stampante (PDFCreator.pdfcmon)
- Pulsanti: Stampa, Chiudi]

Eliminata la visualizzazione dei registri privi di movimenti nel periodo, in assenza di movimenti il prospetto viene comunque stampato con la struttura evidenziata nell'immagine:

[Immagine: Prospetto di registro IVA vuoto con intestazioni: Registrazione (Data, Numero), Documento (Numero, Data), Nominativo, Assogettamento / Note, I.V.A. (Imponibile, %, Importo). Al centro del foglio la scritta "NESSUN DOCUMENTO PRESENTE" con linee diagonali di cancellatura.]

---

## 1.3 STAMPA LIQUIDAZIONE PERIODICA

Si fa notare che, con la modalità 1 di gestione dei documenti ad esigibilità differita, il registro iva viene stampato in base alla data di protocollo **(1)** mentre la liquidazione viene calcolata sulla data di pagamento **(2)**.

Nell'esempio si evidenzia come un documento di maggio 2017 diventi esigibile al pagamento che può essere effettuato anche oltre i termini di legge di registrazione della stessa sul registro degli acquisti.

[Immagine: Schermata dettaglio documento IVA con:
- Data Registrazione: 11-05-2017; Tipo Documento: 103 (TD01) - Fattura Esigibilità differita; Identificativo SDI: 70639219
- Documento: Nr. 39 del 08-05-2017; Descrizione: Servizi Socioli FIAT DUCATO BH 064 L...
- IMPORTO LORDO: 31,50; RITENUTE: 16,50; SALDO
- Tipo esigibilità: 1 - Registrazione e stampa direttamente sul registro degli acquisti
- Settore IVA: 98 ALTRE ATTIVITA' NON RILEVANTI (pcc)
- **Stampa Registro**: Data Nr Protocollo: 11-05-2017, 300 → annotato con "1"
- **Liquidazione**: Data Liq. definitiva: 11-04-2018 → annotato con "2"
- Riga IVA: Imponibile 75,00; % IVA 22; Importo IVA 16,50; Descrizione: QUOTA NON RILEVANTE SERV.IVA (PCC)]

Aggiunta la possibilità di effettuare la stampa per tutti i settori presenti in archivio effettuando la selezione dei singoli settori o mediante l'apposito pulsante.

Eliminato il controllo sulla selezione dei settori per gruppo di elaborazione.

Eliminata dal video la richiesta del numero della pagina iniziale, se nel settore è stato indicato il registro per liquidazione viene calcolata a partire dai valori memorizzati nel file dei saldi, in caso contrario si assume sempre 1.

[Immagine: Schermata "CITY-FINANCING Stampa liquidazione periodica" con:
- Tabella settori con pulsanti "Deseleziona tutto" e "Seleziona tutto"
- **Parametri di selezione**: Periodo movimenti (dal 01-01-2018 al 31-01-2018); checkbox "Non stampare dettaglio assoggettamenti per registro"
- **Parametri di stampa**: Margine sinistro (in cm); Dispositivo di Stampa (Schermo); Scelta Stampante (PDFCreator.pdfcmon)
- Pulsanti: Stampa, Chiudi]

---

## 1.4 STAMPA MOVIMENTI IVA DA LIQUIDARE

Effettuate le seguenti modifiche alla selezione dei movimenti da includere in stampa:

- Aggiunta selezione per **data protocollo iva** (al posto della data di registrazione del documento)
- Aggiunta inclusione dei movimenti a partire dal flag **"incluso in liquidazione iva"** presente nella tabella dei registri per settore.

Consente di ottenere l'elenco dei documenti registrati nel registro degli acquisti ma in attesa di pagamento e quindi di essere inclusi nella liquidazione iva periodica.

[Immagine: Schermata "CITY-FINANCING Stampa Movimenti IVA Acquisti da Liquidare" con:
- **Parametri di selezione**: Settore IVA (01 - MENSE SCOLASTICHE); Registro IVA (TUTTI); Periodo Protocollo IVA (dal ___ al 31-12-2017); Stampa solo totali (checkbox); Qualifica (0 - TUTTI); Causali (1, 2, 3, 4, 5)
- Sotto: prospetto "MOVIMENTI IVA DA LIQUIDARE DAL AL 31-12-2017" con colonne: S/S, Anno/Prog., Data Reg., Data / Nr. Prot. IVA, Soggetto Estremi Documento, Tipo documento, Imponibile, %, Imposta, Totale]

---

## 1.5 STAMPA RIEPILOGO MOVIMENTI IVA

Nuova funzione che riepiloga in sintesi la situazione dei documenti IVA in essere presso l'Ente.

[Immagine: Schermata "CITY-FINANCING Stampa Riepilogo Movimenti IVA" con:
- **Parametri di selezione**: Settore IVA (* - TUTTI); Registro IVA (TUTTI); Periodo Movimenti (dal ___ al 31-12-2017)
- **Parametri di stampa**: Dispositivo di Stampa (Schermo); Scelta Stampante (PDFCreator.pdfcmon)
- Pulsanti: Stampa, Chiudi]

La nuova stampa elabora i movimenti compresi nel periodo selezionato a video, vengono evidenziati i seguenti totali:

- documenti registrati nel periodo e non inclusi in liquidazione
- documenti registrati nel periodo e inclusi nella liquidazione dello stesso periodo
- documenti registrati in precedenza e inclusi nella liquidazione del periodo

[Immagine: Esempio di output "STAMPA RIEPILOGO MOVIMENTI IVA NEL PERIODO DAL 01-01-2018 AL 21-05-2018" con:
- **MOVIMENTI IVA REGISTRATI NEL PERIODO E NON LIQUIDATI (da pagare)**: Riepilogo movim. registrati nell'anno 2018 → Iva Normale A 22: Imponibile 2.224,00; IVA detraibile 709,28; IVA indetraibile 0,00; Totale 2.933,28
- **MOVIMENTI IVA INCLUSI IN LIQUIDAZIONE**:
  - Movimenti registrati prima del 01-01-2018 → QUOTA NON RILEVANTE SERV.IVA (PCC) S 22: Imponibile 840,51; IVA detraibile 0,00; IVA indetraibile 184,91; Totale 1.025,42
  - Movimenti registrati dal 01-01-2018 al 21-05-2018 → Iva Normale A 22 (1.219,30 / 268,25 / 0,00 / 1.487,55); IVA SPLIT SP 22 (300,00 / 66,00 / 0,00 / 366,00); Fuori Campo IVA S ES (22,00 / 0,00 / 0,00 / 22,00); Tot. (1.541,30 / 334,25 / 0,00 / 1.875,55)
- **TOTALE MOVIMENTI**: Iva Normale A 22; QUOTA NON RILEVANTE SERV.IVA (PCC) S 22; IVA SPLIT SP 22; Tot. (2.381,51 / 334,25 / 184,91 / 2.900,97); Pro-rata detraibile 80,00 → 267,40]

---

## 1.6 COMUNICAZIONE LIQUIDAZIONI PERIODICHE

Effettuato adeguamento del software come da provvedimento dell'agenzia delle Entrate del 21/03/2018.

Tale provvedimento ha introdotto il nuovo modello di comunicazione con le seguenti novità:

- **Rigo VP1**: aggiunta casella "operazioni straordinarie"
- **Rigo VP13**: aggiunta casella "metodo"

Per maggiori dettagli sui nuovi campi si consiglia di consultare il documento con le istruzioni per la compilazione allegato al decreto.

[Immagine: Schermata "CITY-FINANCING Liquidazione IVA Periodica" – "COMUNICAZIONE LIQUIDAZIONI PERIODICHE IVA" con:
- VP1: Periodo Riferimento (01 Gennaio); Subforniture (checkbox); Eventi eccezionali (checkbox); **Operazioni Straordinarie** (campo numerico) → annotato con cerchio rosso
- VP2: Totale operazioni attive (al netto dell'IVA) → pulsante esportazione .xls (cerchio rosso)
- VP3: Totale operazioni passive (al netto dell'IVA) → pulsante esportazione .xls (cerchio rosso)
- VP4: IVA esigibile (Debiti) → pulsante esportazione .xls (cerchio rosso)
- VP5: IVA detratta (Crediti) → pulsante esportazione .xls (cerchio rosso)
- VP6: IVA dovuta (o a credito)
- VP7: Debito periodo precedente non superiore 25,82 euro]

Aggiunti pulsanti di esportazione in formato `.xls` dei documenti elaborati nel calcolo degli importi relativi alle caselle VP2, VP3, VP4 e VP5.

Per ogni documento esportato, vengono estratti tutti i dati registrati in iva, nell'ultima colonna viene poi evidenziato l'importo utilizzato nel calcolo della corrispondente casella (al netto di eventuale pro-rata, ventilazione, etc.)

---

## 1.6.1 Distribuzione implementazioni

Le implementazioni sopra indicate sono in distribuzione con l'aggiornamento al modulo cityfinancing (patch) pubblicato nella settimana che termina il **18.05.2018**.

## 1.6.2 Rilascio implementazioni al software (titolo4)

La modifica è disponibile a partire dalla **release 7.11** su CWOL – patch del **25.01.2023**.