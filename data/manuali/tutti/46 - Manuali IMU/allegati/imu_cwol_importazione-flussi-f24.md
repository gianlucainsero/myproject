# IMU – Gestione dell'Imposta Municipale Unica

## Manuale Operativo

### Premessa

Il presente manuale ha lo scopo di illustrare il caricamento dei flussi F24 per IMU.

Prima di procedere all'importazione dei flussi F24 occorre scaricarli dal sito dell'Agenzia delle Entrate (siatel). Su download compariranno le cartelle `.zip` con l'indicazione del numero del flusso (esempio `2021086`).

Si procederà a scompattare le cartelle per ottenere il file da importare in formato `.RUN`.

Selezionare e decomprimere il file `.zip` con la funzione **"Estrai qui"** con il tasto destro del mouse:

[Immagine: finestra di Esplora File con file .zip selezionati e menu contestuale con opzione "Estrai qui" evidenziata]

Si otterrà il file `.RUN` da importare:

[Immagine: file con estensione .RUN visibile nella cartella, es. IMU_...D2022141.P01.T00.RUN]

---

## 1.1 - Caricamento Flusso F24

Per il caricamento dei Flussi F24 il menù è condiviso per IMU e TARI.

Il caricamento dei flussi F24 IMU/TASI viene fatto dal percorso:

**Tributi → Gestione pagamenti → Importazione flussi F24**

[Immagine: menu a tendina del software con percorso Tributi > 120. Gestione pagamenti > 10. Importazione flussi F24 evidenziato]

Si aprirà la videata dei **Parametri di Importazione** da selezionare:

[Immagine: schermata "Importazione Flusso F24" con campo "Servizio" (menu a tendina), campo "File Flusso", e pulsanti "Flussi importati" e "Elabora"]

### Scelta del tipo di Servizio

Dal menu a tendina **Servizio** scegliere il tipo di servizio. Le opzioni disponibili sono:

- TARI
- IMU
- Recupero Crediti
- CDS
- IDS

[Immagine: menu a tendina "Servizio" con opzioni TARI, IMU, Recupero Crediti, CDS, IDS]

Selezionando **IMU** si aprirà la seguente videata:

[Immagine: schermata Parametri Importazione con Servizio impostato su IMU, due checkbox e campi Rif. operazione e File Flusso]

### Parametri di importazione IMU

| Parametro | Descrizione |
|-----------|-------------|
| **Servizio** | Selezionare **IMU** dal menu a tendina |
| **Aggancio Anagr.Contrib. se risulta due anagrafiche presenti Cod.Fiscale uguale** | Mettere il flag per far in modo di agganciare la riscossione ad uno dei due soggetti, se lo stesso contribuente è presente nel database due volte con lo stesso codice fiscale |
| **Utilizzo aggancio per Codice Fiscale anche per Persone Giuridiche** | Mettere il flag per far in modo di agganciare la riscossione alla persona giuridica anche se ha pagato con il Codice Fiscale |
| **Rif. operazione** | Anno e numero del flusso (es. `22141`) |
| **File Flusso** | Percorso del file `.RUN` da importare |

### Selezione del file da importare

Prelevare il Flusso F24 da importare cliccando il simbolo del **dischetto** (icona a destra del campo "File Flusso"):

[Immagine: campo "File Flusso" con icona del dischetto evidenziata]

Si aprirà in automatico la cartella del proprio PC posizionata sui download, da cui andare a cercare il flusso F24 da importare.

[Immagine: finestra di dialogo "Apri" con cartella Download aperta]

Selezionare il file con estensione `.RUN` presente nella cartella del PC e con il pulsante **"Apri"** riportarlo nel campo **"File Flusso"**:

[Immagine: finestra "Apri" con file .RUN selezionato e pulsante "Apri" evidenziato]

### Compilazione del campo Rif. Operazione

Compilare il campo **Rif. Operazione**, che corrisponde all'anno e al numero del flusso presente nel nome del file stesso.

Esempio: per il file `IMU_...D2022141.P01.T00.RUN`, il Rif. operazione sarà `22141`.

[Immagine: campo "Rif. operazione" compilato con valore "22141"]

### Elaborazione

Procedere al caricamento del flusso col tasto **ELABORA**:

[Immagine: pulsante "Elabora" evidenziato a destra della schermata]

Al termine dell'elaborazione, il programma rilascerà il seguente messaggio:

> **Elaborazione completata**
> Elaborazione del file di flusso completata.

### Report di elaborazione (file .xlsx)

Contestualmente verrà scaricato (in alto a destra del PC) un file `.xlsx` con il nome nel formato:

`ReportImportF24_IMU_[data]_[rif.operazione]_[...]_[nome_file].xlsx`

[Immagine: cronologia download del browser con file .xlsx scaricato]

Si può aprire direttamente con doppio click oppure andare nella cartella **Download** del proprio PC.

Il file `.xlsx` contiene l'indicazione delle riscossioni inserite, in termini di:

- Anno
- Progsogg
- Cognome
- Nome
- Tipo versamento
- Importo
- Data pagamento
- Distinzione delle riscossioni per tipo di tributo (colonna S e seguenti)

[Immagine: tabella Excel con colonne Anno, Progsogg, Cognome, Nome, CodFis, Bollettino, IdOperazione, Tipo vers., Importo, Dt Pagamento, Dt Ripartizione, Dt Bonifico, ecc.]

Nella **colonna Q** si troveranno eventuali **soggetti non decodificati**:

| Colonna Q |
|-----------|
| Err. Decodifica Versante |
| SOGGETTO NON TROVATO! |
| SOGGETTO NON TROVATO! |

Mentre nella **colonna AP** si troverà un'altra segnalazione relativa ai **provvedimenti non trovati**:

| Colonna AP |
|------------|
| Prow. |
| 2012/200 |
| 2013/162 |
| 2014/174 |

---

## 1.2 - Verifica del Flusso Importato

Per verificare che il flusso sia stato importato correttamente, procedere dal menù:

**Tributi → Gestione pagamenti → Importazione flussi F24**

Cliccare il tasto **"Flussi importati"**:

[Immagine: pulsante "Flussi importati" evidenziato a destra della schermata Parametri Importazione]

Si aprirà lo **storico delle importazioni**:

[Immagine: schermata "Storico Importazioni Files" con tabella contenente colonne: Progressivo, Data File, Cod. Modulo, Nome Archivio, Archivio Dest., Descrizione, Importo file, Rec. letti, Rec. scritti, Modificato da, Modificato il]

### Azioni disponibili sullo storico

| Icona | Funzione |
|-------|----------|
| 👁 (occhio) | Visualizzare il tracciato |
| ✏ (matita) | Modificare il tracciato |
| 🗑 (cestino) | Cancellare il tracciato |

Per esportare i flussi in un file Excel per un controllo, andare sul pulsante **esporta** in basso a sinistra, e il file verrà scaricato nel Download del browser o nella cartella Download del proprio PC.

[Immagine: file Excel esportato nella cartella Download]

### Filtro per IMU

Se si vogliono visualizzare solo quelli importati dell'IMU, dallo Storico Importazioni cliccare il pulsante **"Altra Ricerca"**:

[Immagine: pulsante "Altra Ricerca" evidenziato a destra dello Storico Importazioni]

Indicare nel campo **Codice Modulo** il codice **TIC** per l'IMU e cliccare su **"Elenca"**:

[Immagine: campo "Codice Modulo" con valore "TIC" e pulsante "Elenca"]

La videata mostrerà i soli flussi F24 IMU importati:

[Immagine: Storico Importazioni filtrato con soli record con Cod. Modulo = TIC]

Per vedere solo un flusso, valorizzare oltre al modulo **TIC**, anche la **data del file**, e poi fare **"Elenca"**:

[Immagine: campo "Codice Modulo" = TIC e campo "Data File" = 28/05/2022, pulsante "Elenca"]

Verrà mostrato l'unico file corrispondente.

---

## 1.3 - Verifica del Contenuto del Flusso

Il programma permette anche di vedere quello che c'è all'interno del flusso F24 importato.

Cliccare sul pulsante **"Flussi Importati"**:

[Immagine: pulsante "Flussi importati" nella schermata Parametri Importazione]

Si aprirà la schermata dello **Storico Importazioni** del paragrafo precedente. Selezionare una delle righe corrispondente al flusso importato e andare su **"Visualizza Dettaglio"**:

[Immagine: pulsante "Visualizza Dettaglio" evidenziato a destra dello Storico Importazioni]

Si potrà accedere alla **decodifica del flusso importato** con l'indicazione dei dati in esso contenuti suddivisi in base ai vari tipi record:

[Immagine: schermata "Visualizzazione Tipi Record da F24" con tab a scomparsa per Tipo Rec. G1, G2, G3, G4, G5, G9 e tabella dati con colonne: Tipo, Dt.Perm., Pr.Perm., Dt.Ripart., Pr.Ripart., Dt.Bonific., Pr.Del., Ente - Tipo Valuta, C.F., Dt.Risc., Ente, Tributo, Rata, Anno, Imp.Deb, Imp.Cre, Ravv., Acc., Saldi, N.Fabbr., Del.]

Per visualizzare le pagine successive andare in basso e scorrere con le **freccette** di paginazione.

Per poterlo estrarre in Excel andare sul tasto **esporta** in basso a sinistra.

[Immagine: pulsante esporta in basso a sinistra della schermata di visualizzazione dettagli]