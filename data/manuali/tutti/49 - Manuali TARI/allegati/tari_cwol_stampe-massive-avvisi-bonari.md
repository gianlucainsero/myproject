# TARI - Manuale Operativo

## 1.1 - Stampe Massive

Una volta creati massivamente o puntualmente gli Avvisi Bonari, si può procedere a generare i documenti massivamente.

Dal menù: **Tributi → TARI → Stampe → Stampe Massive**

[Schermata del percorso di menu: Tributi > TARI > Stampe > Stampe Massive]

Si aprirà la seguente videata in cui impostare i parametri, ossia i filtri per richiamare i documenti da stampare (sulla sinistra) e i criteri di stampa (a destra):

[Schermata della finestra "Stampa Massiva Avvisi TARI" con pannelli Filtri a sinistra, Criteri di Stampa a destra e pulsante "Elenca Documenti" nella colonna Azioni]

### Impostazione Parametri

La videata è suddivisa in due aree principali:

- **Filtri** (sinistra): parametri per selezionare gli avvisi da stampare
- **Criteri di Stampa** (destra): impostazioni relative a testo, modalità di stampa e formato

### Filtri

[Schermata del pannello "Filtri" con i campi: Id Avviso Da/a, Num. Doc. Da/a, Servizio Emittente, Anno Emissione, Nr.Emissione, Importo Minimo, Tipo invio, pulsante "Includi Stati", Lista Contribuenti, Storna Importi Pagati]

La parte sinistra della videata permette di selezionare gli avvisi da stampare; attraverso la lentina cercare l'emissione relativa.

- **Importo Minimo**: inserendo un importo il sistema permetterà di stampare avvisi con un importo uguale o maggiore a quello indicato.
- **Tipo invio**: permette di scegliere il Tipo invio (in genere cartaceo, mail o PEC). Se non si indica nulla stampa tutti. Le opzioni disponibili sono:
  - Cartaceo
  - Automatico
  - Fax
  - Email
  - SMS
  - PEC
- **Includi Stati**: cliccando su 'Includi Stati' si aprirà una videata in cui sarà possibile selezionare, attraverso la spunta, gli stati degli avvisi che si desidera stampare e poi fare conferma.

[Schermata "Seleziona Stati da includere" con elenco di stati: Creato, Notificato, Revoca Sospensione, Recuperato in Avviso, Ricalcolo a conguaglio, Annullato, Scartato per inesigibilità, Ravveduto, Esito ricorso, Stampato, Pagato, Rateizzato, Evoluto, Inviato a ruolo (AE Riscossioni), Chiuso da nota di credito, Cancellazione dal R.I., Fallimento, Lottizzato, Sospeso, Revoca Rateazione, Rimborsato al contribuente, Emessa nota di credito, Sostituito, Inviato a recupero crediti, Inferiore al minimo, Richiesta ricorso, Adesione]

- **Lista Contribuenti**: permette di filtrare l'elenco dei contribuenti da stampare. Le opzioni disponibili sono:
  - Codici Fiscali
  - Archivio Precompilato
  - Intervallo Nominativo
- **Storna Importi Pagati**: se in un avviso che si sta per stampare è già presente uno o più pagamenti, scegliendo il **Sì** il sistema ne tiene conto e, in fase di generazione del F24, viene stornato l'importo già pagato (es: bollettazione fatta in una determinata data e stampa effettuata diversi mesi dopo, nel frattempo ci potrebbe essere un pagamento spontaneo).

Di seguito un esempio di impostazione filtri:

[Schermata di esempio con filtri impostati: Servizio Emittente = 1, Anno Emissione = 2024, Nr.Emissione = 7 (Avvisi Bonari TARI 2024), Importo Minimo = 0,00, Tipo invio = Cartaceo, Storna Importi Pagati = No]

### Criteri di Stampa

La parte destra della videata permette di selezionare i criteri di stampa: il testo, cosa stampare, il tipo di stampa e il formato.

[Schermata del pannello "Criteri di Stampa" con campi: Testo, Stampa, Tipo Stampa, Formato PDF, e sezione "Opzioni Generazione Flusso" con "Split automatico in più sottoflussi"]

- **Testo**: selezionando l'emissione sui Filtri, viene proposto sui Criteri di stampa un testo (di default se impostato precedentemente nel menù **Tributi → TARI → Parametri di Configurazione → Testi di Default**), che si può cambiare e scegliere attraverso la lentina.
- **Stampa**: indica le varie modalità di stampa:
  - **Solo Documento**: stampa solo il testo senza deleghe di pagamento
  - **Documento + Rate F24**: stampa testo + deleghe F24 relative a ogni singola rata
  - **Documento + F24 Unica Soluzione**: stampa testo + delega F24 in unica soluzione
  - **Documento + Rate + Unica Soluzione**: stampa testo + deleghe F24 relative a ogni singola rata + delega F24 in unica soluzione
  - **Documento + Bollettini PagoPa (singoli o unici)**: stampa testo + bollettino PagoPa relativo all'avviso
  - **Documento + Rate F24 + Bollettini PagoPa**: stampa testo + deleghe F24 relative a ogni singola rata + bollettino PagoPa relativo all'avviso (singolo o unico in base alla pubblicazione)
- **Tipo Stampa**: opzioni disponibili:
  - Normale
  - Fronte/Retro
- **Formato PDF**: se flaggato viene generato subito in pdf (non è editabile), altrimenti viene generato in word (editabile, per cui eventualmente modificabile).
- **F24 editabile**: se flaggato dà la possibilità di editare il modello F24.
- **Split automatico in più sottoflussi**: se flaggato crea blocchi da un numero fisso di 500 avvisi ciascuno, per permettere una stampa più agevole.

Di seguito un esempio di impostazione di criteri di stampa:

[Schermata di esempio con criteri impostati: Testo = Avviso Bonario TARI 2023, Stampa = Documento + Rate + Unica Soluzione, Tipo Stampa = Fronte/Retro, Tipo Pag.Bianca = Normale, Formato PDF non selezionato, F24 Editabile non selezionato, Split automatico non selezionato]

### Consultazione Documenti

Dalla videata delle stampe massive andare su **'Elenca Documenti'**.

[Schermata con pulsante "Elenca Documenti" evidenziato nella colonna Azioni]

Comparirà sotto l'elenco degli avvisi creati che andranno in stampa, il nr. totale degli avvisi e l'importo totale.

[Schermata con elenco documenti (colonne: Num. Doc., Matricola, Nominativo, Importo, Data Emissione, Stato, Tipo Spedizione) e riepilogo in basso: N. Avvisi: 2336, Totale: 1.901.368,00 €]

Posizionandosi su uno dei documenti e andando su **'Anteprima Documento'**:

[Schermata con pulsante "Anteprima Documento" evidenziato nella colonna Operazioni]

È possibile vedere le anteprime, sia del testo che del modello F24, in base alla corrispondente modalità di 'Stampa' scelta nei criteri di stampa.

La prima riga permette di visualizzare l'anteprima del solo testo:

[Schermata "Visualizzatore Documenti" con anteprima PDF del testo dell'avviso TARI]

La seconda riga permette con doppio click (o click sull'occhietto) di visualizzare il modello F24:

[Schermata "Visualizzatore Documenti" con anteprima del Modello F24 - Delega di Pagamento Unificato]

Per tornare alla videata principale, chiudere con la X in alto.

### Generazione stampe massive

Per procedere alla stampa massiva degli avvisi andare su **'Avvia Generazione Massiva'**.

[Schermata con pulsante "Avvia Generazione Massiva" evidenziato nella colonna Operazioni]

Alla comparsa del seguente messaggio andare su **'Conferma'**:

[Finestra di dialogo "Generazione" con messaggio "Vuoi proseguire con la generazione dei documenti?" e pulsanti Conferma/Annulla]

Dopo pochi istanti dall'inizio dell'elaborazione, la procedura mostrerà l'**'Elenco Flussi'**, dove sarà visibile lo stato dell'elaborazione nella colonna 'Stato'. Selezionando il flusso (riga gialla) e cliccando su **'Stato Elaborazione'** sarà possibile visualizzare i dettagli.

[Schermata "Elenco Flussi" con colonne: Id, Codice, Anno, Record Trasmessi, Stato, Generato, Data Creaz., Validato. Pulsante "Stato Elaborazione" evidenziato]

Fino a quando nella colonna 'Stato' è presente il simbolo dell'elaborazione in corso restare in attesa (potrebbe occorrere parecchio tempo in base al numero dei Record Trasmessi).

[Schermata "Allinea Rendicontazioni Async" con dettagli evento: Login Effettuato, Inizio Stampa Massiva]

A fine elaborazione comparirà, sulla colonna 'Generato', l'icona di "flusso generato":

[Schermata "Elenco Flussi" con icona di flusso generato nella colonna Generato]

Cliccando su **'Stato Elaborazione'** è possibile visualizzare l'inizio e il buon fine dell'esito.

[Schermata "Allinea Rendicontazioni Async" con eventi: Inizio, Conclusione Positiva (Stato Flusso Aggiornato), Conclusione Positiva (Generazione Completata con successo)]

Se durante l'elaborazione ci fossero anomalie, al termine comparirà un segnale di pericolo:

[Schermata "Elenco Flussi" con icona di triangolo di avvertimento nella colonna Stato per un flusso]

Selezionando la riga corrispondente (riga gialla) e facendo doppio click sulla riga, verranno indicati i soggetti che presentano anomalie (esempio sotto):

[Finestra "Attenzione" con messaggio: "Sono state riscontrate le seguenti anomalie nel flusso: ID: ..., Codice Errore: -2, Descrizione: Errore Conversione PDF/A del documento: file non adatto alla conversione. Escluderle automaticamente?" con pulsanti Escludi/Annulla]

Facendo invece doppio click sull'icona del triangolino:

[Schermata "Elenco Flussi" con icona triangolo di avvertimento evidenziata]

Verrà data la possibilità di provare a generare di nuovo i documenti con le anomalie:

[Finestra "Generazione" con messaggio "Provare a rigenerare Documenti Corrotti?" e pulsanti Conferma/Annulla]

Per visualizzare i soggetti del flusso elaborato (andato a buon fine) fare doppio click sull'icona del "flusso generato":

[Schermata "Elenco Flussi" con icona flusso generato evidenziata]

Comparirà l'elenco dei soggetti presenti nel flusso. Per ogni soggetto è possibile visualizzare i documenti generati, cliccando sull'icona dell'Anteprima.

[Schermata "Dettaglio Flussi" con elenco soggetti (colonne: ID, Nome Flusso, Num. Doc., Matricola, Nominativo, Importo, Anteprima, Stato Doc., Stato F24) e icone di anteprima]

Avremo sia il testo del documento che il modello F24 (se si è scelta questa opzione di stampa).

[Schermata "Visualizzatore Documenti" con file Documento_280792.docx e F24_280792.pdf, anteprima del documento]

Ritornare nell'Elenco Flussi chiudendo le videate con la X.

### Cancellazione flusso

Per cancellare il flusso generato (**e non ancora validato**), cliccare nella riga corrispondente in modo da evidenziarlo in giallo, quindi click su **'Cancella Flusso'**.

[Schermata "Elenco Flussi" con pulsante "Cancella Flusso" evidenziato nella colonna Operazioni]

Comparirà il messaggio di cancellazione, cliccare su **'Conferma'** per procedere:

[Finestra "Cancellazione" con messaggio "Una volta cancellato il flusso non sarà possibile recuperarlo. Continuare?" e pulsanti Conferma/Annulla]

Una volta confermata la cancellazione, la riga del flusso scompare.

### Validazione flusso

Se l'esito della generazione massiva è andato a buon fine e non ci sono anomalie si può procedere a validare il flusso: evidenziare la riga corrispondente al flusso da validare e cliccare su **'Validazione Flusso'**.

[Schermata "Elenco Flussi" con pulsante "Validazione Flusso" evidenziato nella colonna Operazioni]

Comparirà il messaggio di validazione, cliccare su **'Conferma'** per procedere:

[Finestra "Validazione" con messaggio "Vuoi proseguire con la validazione del flusso? non sarà più possibile cancellarlo." e pulsanti Conferma/Annulla]

Confermando la validazione il flusso risulterà **'Validato'**.

[Schermata "Elenco Flussi" con colonna Validato che mostra l'icona di spunta verde per i flussi validati]

Il flusso validato è pronto per essere processato nella gestione lotti, ai fini dell'invio sul territorio, in forma cartacea o digitale (PEC, mail, ecc..).

I files (es: documento + F24) di un flusso validato e non annullato, vengono associati alle singole posizioni e possono essere visualizzati attraverso la ricerca di ogni singolo soggetto.

Evidenziare l'avviso (riga gialla) e fare doppio click:

[Schermata "TARI: Avvisi Bonari" con elenco avvisi e stato "Stampato" evidenziato]

Andare poi su **Visualizza Documenti**:

[Schermata dettaglio avviso con pulsante "Visualizza Documenti" evidenziato nella colonna Stampa]

Troviamo associati i file del documento e del F24 (doppio click per visualizzare):

[Schermata "Recupero Avvisi" con tab Allegati contenente i file DOCUMENTO280792 e F24280792]

### Annullamento flusso validato

Un flusso già validato **NON** può essere cancellato ma solo **annullato**; posizionarsi sulla riga del flusso e cliccare su **'Annulla Flusso'**.

[Schermata "Elenco Flussi" con flusso validato evidenziato e pulsante "Annulla Flusso" nella colonna Operazioni]

Comparirà la seguente videata:

[Finestra "Annullamento" con messaggio "Vuoi proseguire con l'Annullamento del flusso? Una volta annullato diventerà inutilizzabile." e pulsanti Conferma/Annulla]

Alla conferma dell'annullamento comparirà la seguente videata con l'indicazione di flusso annullato:

[Schermata "Elenco Flussi" con colonna Annullato che mostra l'icona del cestino rosso per il flusso annullato]