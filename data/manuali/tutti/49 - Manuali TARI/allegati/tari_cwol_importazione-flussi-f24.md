# TARI – Manuale Operativo

## 1.1 Premessa

Il presente manuale ha lo scopo di illustrare il caricamento dei flussi F24 per TARI.

Prima di procedere all'importazione dei flussi F24 occorre scaricarli dal sito dell'Agenzia delle Entrate (Siatel). Su download compariranno le cartelle `.zip` con l'indicazione del numero del flusso (esempio `2021086`).

Si procederà a scompattare le cartelle per ottenere il file da importare in formato `.RUN`.

Selezionare e decomprimere il file `.zip` con la funzione **"Estrai qui"** con il tasto destro del mouse:

[Immagine: menu contestuale di Windows con 7-Zip > Estrai qui evidenziato]

Si otterrà il file `.RUN` da importare:

[Immagine: file TARES_...D2023154.P01.T00.RE1.RUN]

---

## 2.1 Caricamento Flusso F24

Per il caricamento dei Flussi F24 il menù è condiviso per IMU e TARI.

Il caricamento dei flussi F24 TARI viene fatto dal percorso:

**Tributi → Gestione pagamenti → Importazione flussi F24**

[Immagine: menu a tendina del software con percorso Tributi > 140. Gestione pagamenti > 10. Importazione flussi F24 evidenziato]

Si aprirà la videata dei **Parametri di Importazione** da selezionare:

[Immagine: schermata "Importazione Flusso F24" con campo Servizio (Selezionare...) e File Flusso, pulsanti "Flussi importati" e "Elabora"]

### Selezione del Servizio

Scegliere il tipo di Servizio dal menu a tendina:

[Immagine: dropdown "Servizio" con opzioni: Selezionare..., TARI, IMU, Recupero Crediti, CDS, IDS]

Selezionando **TARI** si aprirà la seguente videata:

### Parametri di Importazione

- Selezionare il file del flusso da importare cliccando il simbolo del **dischetto**; una volta selezionato il file, in automatico viene riportato il **Rif. Operazione** di 8 cifre (il campo Rif. Operazione **NON è editabile**).
- Mettere il Flag su **"Gestione automatica eccedenza"**: questo consente di spalmare ad esempio l'eventuale versato in più della 1ª rata sulle altre successive, evidenziando alla fine un'eccedenza reale.

[Immagine: schermata Parametri importazione con Servizio=TARI, Gestione automatica eccedenza spuntato, Modalità Ripartizione=Codice Tributo, Rif. operazione=D2023014, File Flusso selezionato. Pulsanti: Anteprima, Elabora]

### Modalità Ripartizione

- **a. Automatica**: riclassifica/ripartisce il pagamento sulle voci in maniera proporzionale
- **b. Codice Tributo**: riclassifica/ripartisce il pagamento in funzione del codice tributo attribuito alle voci

Una volta scelti i parametri si può andare su **"Anteprima"** per avere una previsione dei movimenti.

### Anteprima

[Immagine: schermata "Anteprima importazione F24" con tabella Risultati elaborazione contenente colonne: Codice Fiscale/Partita IVA, Anno Rif., Rata, Importo, Data Pagamento, ID Operazione, Criterio 1-4, Stato. Messaggio "Elaborazione completata - Elaborazione del file di flusso completata."]

A destra compare la **legenda** che illustra i criteri di aggancio effettuati dal programma, con in fondo i **totalizzatori**:

[Immagine: legenda criteri di riconciliazione:
- Criterio n°1 - Ricerca per: ID Operazione
- Criterio n°2 - Ricerca per: Codice Fiscale, Anno Riferimento, Numero Rata, Importo
- Criterio n°3 - Ricerca per: Codice Fiscale, Anno Riferimento, Numero Rata
- Criterio n°4 - Ricerca per: Codice Fiscale, Anno Riferimento, Importo
Totalizzazioni: 3944=16.110,45€, 3945=196,00€, 3946=2.152,00€, TEFA=184,25€, TOTALE=18.642,70€]

### Conferma / Elabora

Dall'Anteprima per importare i flussi andare su **"Conferma"**.

Nel caso in cui sia stata fatta l'Anteprima e si faccia poi Conferma, il programma durante l'importazione restituisce il seguente messaggio:

[Immagine: popup "Scrittura riscossioni - Riscossioni elaborate 15 di 55 (27%)"]

In alternativa si ritorna indietro al menù iniziale andando su **"Nuova Importazione"** e una volta scelti i parametri sopra indicati andare su **"Elabora"** per caricare definitivamente i flussi F24 senza Anteprima.

Nel caso in cui si faccia **"Elabora"** dalla videata iniziale, il programma durante l'importazione restituisce il seguente messaggio:

[Immagine: popup "Elaborazione flusso F24 - Riscossioni elaborate: 13 di 38 (34%)"]

E al termine l'ulteriore messaggio:

[Immagine: popup "Elaborazione completata - Elaborazione del file di flusso completata."]

### Esportazione in Excel

È possibile esportare il file del flusso in Excel andando su **"Esporta in XLS"**.

[Immagine: pulsanti "Nuova importazione", "Flussi importati", "Esporta in XLS" (evidenziato)]

Il file viene salvato in automatico (cliccare in alto a destra del proprio PC):

[Immagine: barra download del browser con file ReportImportF24_D2023133_20240226_122828.xlsx]

Oppure si può andare nella cartella **Download** del proprio PC:

[Immagine: cartella Download di Windows con file ReportImportF24_D2023133_20240226_122828 evidenziato]

Il file Excel generato ha **due linguette** in basso:
- **Riscossioni riconciliate**
- **Riscossioni non riconciliate**

Contiene l'indicazione delle riscossioni inserite e di quelle non riconciliate, in termini di Codice Fiscale, Soggetto Annorif, importo, Data pagamento, ID operazione, ecc., e indica i vari criteri che **NON** sono stati superati nel caso delle non riconciliate:

[Immagine: foglio Excel "Riscossioni non riconciliate" con colonne: Codice Fiscale, Soggetto, Anno Rif., Rateaz., Importo, DI. Pagamento, ID Operazione, Righe Flusso, Criterio 1, Criterio 2, Criterio 3. Valori criteri: "Non superato", "Non validato"]

---

## 2.2 Verifica del Flusso Importato

Per verificare che il flusso sia stato importato correttamente, procedere dal menù:

**Tributi → Gestione pagamenti → Importazione flussi F24**

Cliccare il tasto **"Flussi importati"**.

[Immagine: schermata Parametri importazione con pulsante "Flussi importati" evidenziato]

Si aprirà lo **storico delle importazioni**:

[Immagine: tabella "Storico Importazioni Files" con colonne: Progressivo File, Data File, Cod. Modulo, Nome Archivio, Archivio Destinaz., Descrizione Imp., Importo rif., Rec. letti, Rec. scritti, Modificato da, Modificato il. Righe con codici modulo TBO, TIC, TCA]

Per visualizzare il tracciato andare su 👁️, per modificarlo ✏️, per cancellarlo 🗑️, utilizzando i relativi comandi.

Per esportare i flussi in un file Excel per un controllo, andare sul pulsante **esporta** in basso a sinistra, e il file verrà scaricato nel Download del browser o nella cartella Download del proprio PC.

[Immagine: file Excel scaricato con colonne: PROFILO, CODMODULO, DES_GE60, ARC_DEST, ARC_SORG, DTFILESORC, DMFILSORG, NRECLETTI, NRECSCRIT, CODUTE, DATAOPER, TIMEOPER, IMPORTO_IF, UUID, SERVIZIO]

### Filtro per TARI

Se si vogliono visualizzare solo quelli importati della TARI, dallo Storico Importazioni cliccare il pulsante **"Altra Ricerca"**.

[Immagine: pulsante "Altra Ricerca" evidenziato nella schermata Storico Importazioni Files]

Indicare nel **Codice Modulo** il codice **TBO** per la TARI e cliccare su **"Elenca"**.

[Immagine: campo Codice Modulo con valore "TBO" e pulsante "Elenca"]

La videata mostrerà i soli flussi F24 TARI importati:

[Immagine: tabella filtrata con soli record con Cod. Modulo = TBO]

Per vedere solo un flusso valorizzare oltre al modulo TBO, anche la **data del file**, e poi fare **"Elenca"**:

[Immagine: Codice Modulo=TBO, Data File=13/05/2023, pulsante Elenca]

Verrà mostrato l'unico file corrispondente.

---

## 2.3 Verifica del Contenuto del Flusso

Il programma permette anche di vedere quello che c'è all'interno del flusso F24 importato.

Dalla finestra iniziale di selezione dei parametri di importazione, cliccare sul pulsante **"Flussi Importati"**.

[Immagine: schermata Parametri importazione con Servizio=TARI, Gestione automatica eccedenza spuntato, pulsante "Flussi importati" evidenziato]

Si aprirà la schermata dello Storico Importazioni del paragrafo precedente, selezionare una delle righe corrispondente al flusso importato e andare su **"Visualizza Dettaglio"**.

[Immagine: riga selezionata nello Storico Importazioni Files (Progressivo 1700, TBO) con pulsante "Visualizza Dettaglio" evidenziato]

Si potrà accedere alla **decodifica del flusso importato** con l'indicazione dei dati in esso contenuti suddivisi in base ai vari tipi record.

[Immagine: schermata "Visualizzazione Tipi Record da F24" con tab: Tipo Rec. G1 (attivo), Tipo Rec. G2, Tipo Rec. G3, Tipo Rec. G4, Tipo Rec. G5, Tipo Rec. G6. Tabella con colonne: Tipo, Dt.Forn., Pr.Forn., DT.Ripart., Pr.Ripart., DT.Bonifico, Pr.Det., Pr.Det., Ente-Tipo Valuta, C.F., DT.Risc., Ente, Tributo, Rata, Anno, Imp.Deb., Imp.Cred., Ravv., Acc., Saldo, N.Fabb.]

Per visualizzare le pagine successive andare in basso e scorrere con le **freccette**.

Per poterlo estrarre in Excel andare sul tasto **'esporta'** in basso a sinistra.