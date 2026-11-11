# TARI - Manuale Operativo

## 1.1 Riconciliazioni Riscossioni F24

Nella scelta dei parametri per l'importazione del flusso, si può andare su **"Anteprima"**.

[Schermata: Parametri importazione con Servizio TARI selezionato, checkbox "Gestione automatica eccedenza", Rif. operazione D2023154, File Flusso TARES_D2023154.P01.T00.RE1.RUN, pulsante "Anteprima" evidenziato]

In questo modo è possibile avere una previsione dei movimenti:

[Schermata: Anteprima importazione F24 con tabella "Risultati elaborazione" contenente colonne: Codice Fiscale/Partita IVA, Anno Rif., Rata, Importo, Data Pagamento, ID Operazione, Criterio 1, Criterio 2, Criterio 3, Criterio 4, Stato. I criteri mostrano icone di spunta verde (✓) o croce rossa (✗) a seconda della corrispondenza]

Quando nessun criterio di riconciliazione viene soddisfatto (nessun criterio ha la spunta verde ✓) la riscossione è scartata (⚠️).

In questo caso si dovrà provvedere alla riconciliazione/assegnazione puntuale, accedendo agli scarti. Effettuando la ricerca, è possibile richiamare le riscossioni scartate.

### Accesso al menù

Accedere al menù:

**Tributi → TARI → Riscossioni**

[Schermata: Menu a cascata con percorso Tributi > 40. TARI > 80. Riscossioni evidenziato]

Si apre la seguente pagina di selezione; **selezionare le riscossioni scartate mettendo la spunta su 'Riscossioni non riconciliate'**.

Se si vuole verificare le riscossioni di un flusso specifico, indicare anche il **Riferimento operazione** (nr. flusso lettera maiuscola e i numeri) e cliccare sul pulsante a destra **"Elenca"**.

[Schermata: Pagina di ricerca Riscossioni con campi Soggetto (Nominativo, Cod.Fisc/P.IVA, Matricola), Avviso (Anno, Numero, Tipo Avviso), Emissione (Anno, Numero, Servizio emittente), Riscossione con checkbox "Riscossioni non riconciliate" spuntata, Riferimento operazione D2023133, pulsante "Elenca" evidenziato]

Si aprirà l'elenco sotto riportato:

[Schermata: Elenco riscossioni con colonne ID, Stato, Codice Fiscale/Partita IVA, Data Pagamento, Data Contabile, Data Inserimento, Importo Riscosso, Canale Incasso, Riferimento Operazione. Legenda a destra: Riscossione attualmente scartata (icona triangolo giallo), Riscossione riconciliazione diretta/Riscossione riconciliazione da scarto (icona freccia)]

Cliccando sull'occhietto 👁️ o doppio click all'inizio della riga, si accede alla seguente maschera:

[Schermata: Maschera Riscossioni con campi Id 415227, Anno 2017, Importo 99.00, Data Pagamento 26/05/2017, Cod.Fiscale MG. Sezione "Deleghe F24" con tabella. Pulsante "Associa scadenza avviso" evidenziato a destra]

Il bottone **"Associa scadenza avviso"**, permette di accedere all'Avviso corrispondente, se presente, a cui associare il pagamento temporaneamente scartato.

---

### ESEMPIO 1: Avviso presente e aggancio riscossione

Dall'elenco delle riscossioni non riconciliate posizionarsi su quella da riconciliare e entrare in visualizza o modifica.

[Schermata: Elenco riscossioni con riga evidenziata in giallo (ID 415306) con icona triangolo giallo di scarto]

All'interno della riscossione si visualizzano in alto l'anno e l'importo totale e, più sotto, la riga dei dettagli.

[Schermata: Dettaglio riscossione con Id 415306, Anno 2022, Importo 72.00, Data Pagamento 28/12/2022, Cod.Fiscale. Sezione "Deleghe F24" con due righe (TEFA e 3944). Pulsante "Associa scadenza avviso" evidenziato]

Andare su **"Associa scadenza avviso"**.

Il programma fa un controllo e propone, in base all'anno, l'avviso corrispondente:

[Schermata: Gestione Avvisi con tabella contenente Nominativo, Tributo (TARES/TARI), Tipo Avviso (Avviso Bonario Unico), Stato (Creato ✓), Anno (2022), Num. Doc. (6018), Dovuto (252,00€), Riscosso (0,00€), Residuo (252,00€), Eccedenza (0,00€), Data Avviso (03/02/2023), ID Avviso (263467). Riga evidenziata con Anno 2022]

Per associare la riscossione all'avviso desiderato andare a sinistra sul tasto **+**, si aprirà il dettaglio della scadenza dell'avviso:

[Schermata: Gestione Avvisi con riga espansa tramite tasto "+". Sezione "Dettaglio Scadenze" con tabella: Rata n°1, Data Scadenza 28-02-2023, Importo Totale 252,00€, Imponibile 0,00€, Arrotondamento -0,33€, Interessi 0,00€, Residuo 252,00€, ID operazione]

Fare doppio click sulla riga di dettaglio, comparirà la seguente videata:

[Schermata: Dialog "Attenzione" con messaggio "Confermi l'associazione con la scadenza selezionata?" e pulsanti "Conferma" e "Annulla"]

Dando la Conferma comparirà il seguente messaggio:

[Schermata: Dialog "Associazione completata" con messaggio "La scadenza selezionata è stata associata alla riscossione corrente con successo."]

La riscossione risulterà associata all'avviso:

[Schermata: Dettaglio riscossione aggiornata con Id 415311, Anno 2022, Importo 126,00. Sezione "Movimenti" con riga: Id 444163, Tipo movimento "Riscossione, riconciliazione diretta", Avviso 263467, Scadenza 440815, Numero rata 1, Data scadenza 28/02/2023, Dovuto 252,00€, Riscosso 126,00€, Residuo 126,00€, Data conferma 28/12/2022]

- Facendo **"torna a elenco"** si ritorna sull'elenco delle riscossioni scartate
- Facendo **"altra ricerca"** si ritorna alla videata della ricerca generica delle riscossioni, con in alto l'intestazione del soggetto a cui è stata riconciliata la riscossione

Attraverso i dati del soggetto, facendo la ricerca tra gli avvisi, si può verificare che la riscossione è ora agganciata all'Avviso.

[Schermata: Gestione Avvisi con avviso aggiornato: Dovuto 252,00€, Riscosso 126,00€, Residuo 126,00€]

---

### ESEMPIO 2: Avviso NON presente, trasferimento della riscossione da un soggetto ad un altro

Nel caso in cui, facendo 'Associa scadenza avviso', **l'avviso non sia presente** (quindi non è possibile riconciliare la riscossione), si avrà la seguente videata non compilata:

[Schermata: Gestione Avvisi con tabella vuota (nessun avviso trovato). Pulsante "Altra Ricerca" evidenziato nella colonna Navigazione a destra]

A questo punto occorre fare ulteriori controlli per capire come mai non siano presenti avvisi, ad esempio la riscossione è stata effettuata erroneamente con un **CF o P.IVA diverso** da quello che fa capo all'avviso in CWOL.

Una volta trovato il soggetto di destinazione della riscossione, dopo aver fatto 'Associa scadenza avviso', partendo dalla videata bianca che compare, andare sul pulsante a destra **'Altra Ricerca'**.

[Schermata: Pagina di ricerca con campi Soggetto (Nominativo, Cod.Fisc/P.IVA, Matricola), Avviso (Id Avviso DA/A, Anno 2022, Nr. Documento DA/A, Tipo Avviso, Stato, Data Annullamento/Creazione/Evoluzione/Notifica/Pagamento/Sospensione/Stampa DA/A), Emissione (Servizio Emittente, Anno Emissione, Nr.Emissione). Pulsanti "Altra Ricerca" ed "Elenca" evidenziati nella colonna Navigazione]

Il sistema rimane sull'anno della riscossione; ripulire il campo se necessario e scegliere i parametri di ricerca dell'avviso, in questo caso il **codice fiscale corretto**, fare **"Elenca"** per ricercare gli avvisi a cui associare la riscossione. Una volta identificato, procedere ad associare come già descritto sopra.

---

### ESEMPIO 3: Avviso NON presente, trasferimento della riscossione da un anno all'altro

Nel caso in cui, facendo 'Associa scadenza avviso', **l'avviso non sia presente** (quindi non è possibile riconciliare la riscossione), si avrà la seguente videata non compilata:

[Schermata: Gestione Avvisi con tabella vuota. Pulsante "Altra Ricerca" evidenziato nella colonna Navigazione a destra]

A questo punto occorre fare ulteriori controlli per capire come mai non siano presenti avvisi, ad esempio la riscossione è stata effettuata erroneamente con un **F24 compilato dal contribuente a mano** e con l'indicazione dell'**anno sbagliato**, per cui la riscossione ha un anno diverso da quello dell'avviso in CWOL.

Una volta trovato l'anno di destinazione della riscossione, dopo aver fatto 'Associa scadenza avviso', partendo dalla videata bianca che compare, andare sul pulsante a destra **'Altra Ricerca'**.

[Schermata: Pagina di ricerca con campo Anno impostato a 2022 (evidenziato in rosso). Pulsante "Elenca" evidenziato nella colonna Navigazione]

Il sistema rimane sull'anno della riscossione; ripulire il campo se necessario e scegliere i parametri di ricerca dell'avviso, in questo caso il **codice fiscale e l'anno corretto** o anche solo il codice fiscale e fare **"Elenca"**, per ricercare e visualizzare gli avvisi a cui associare la riscossione. Una volta identificato, procedere ad associare come già descritto sopra.

---

## 1.2 Trasferimento Riscossione

Nel caso in cui ci si accorge di aver associato la riscossione all'avviso sbagliato e si ha esigenza di sganciarla per ripristinare la situazione precedente, è possibile trasferire la riscossione erroneamente associata.

Dalla videata della **Gestione avvisi**, richiamare l'avviso a cui è stata associata la riscossione (attraverso i parametri di ricerca, ad esempio il Codice Fiscale o la matricola del contribuente, ecc) e andare poi su **"Elenca"**.

[Schermata: Gestione Avvisi con campi di ricerca Soggetto (Nominativo, Cod.Fisc/P.IVA, Matricola 18514), Avviso (Id Avviso DA/A, Anno, Nr. Documento DA/A, Tipo Avviso, Stato, varie date), Emissione. Pulsante "Elenca" evidenziato]

Dopo aver individuato l'avviso a cui sganciare la riscossione entrare in modifica o doppio click:

[Schermata: Elenco avvisi con più righe. Riga evidenziata in rosso: TARES/TARI, Avviso Bonario Unico, Creato ✓, Anno 2022, Num. Doc. 6018, Dovuto 252,00€, Riscosso 126,00€, Residuo 126,00€]

Andare sul **tab delle riscossioni** e fare doppio click sulla riga della riscossione per entrare:

[Schermata: Dettaglio avviso con tab attivi: Dettaglio, Voci, Scadenze, **Riscossioni** (evidenziato), Collegamenti, Note, Stato, PagoPA, Notifiche, Coodbligati. Sezione "Dettaglio Riscossioni" con riga: Rata n°1, Canale Incasso F24, Dovuto 252,00€, Riscosso 126,00€, Residuo 126,00€, Eccedenza 0,00€, Data Scadenza 28-02-2023, Data Pagamento 28-12-2022, Data Conferma 28-12-2022, Riferimento D2023014]

Si aprirà la videata che mostra la riscossione:

[Schermata: Maschera Riscossioni con Id 415311, Anno 2022, Importo 126.00, Data Pagamento 28/12/2022, Cod.Fiscale. Sezione "Movimenti" con riga: Id 444163, Tipo movimento "Riscossione, riconciliazione diretta", Avviso 263467, Scadenza 440815, Numero rata 1, Data scadenza 28/02/2023, Dovuto 252,00€, Riscosso 126,00€, Residuo 126,00€, Data conferma 28/12/2022]

Posizionandosi sulla riga e facendola diventare **gialla** comparirà a destra, oltre al pulsante già presente "Torna Elenco", anche il pulsante **"Trasferimento"**.

[Schermata: Stessa maschera con riga movimenti evidenziata in giallo. Pulsante "Trasferimento" evidenziato a destra sotto "Torna Elenco"]

Cliccando su **"Trasferimento"** comparirà la seguente videata con le due scelte:

[Schermata: Dialog "Attenzione" con messaggio "Vuoi trasferire su una scadenza o collocare a scarto?" e pulsanti "Scarto" e "Scadenza"]

- Scegliendo **"Scarto"** la riscossione verrà riposizionata tra quelle non riconciliate:

[Schermata: Dialog "INFO" con messaggio "Riscossione collocata correttamente a scarto"]

- Scegliendo **"Scadenza"** si aprirà di nuovo la pagina degli avvisi del contribuente e da lì si potrà procedere o ad associare la riscossione ad un altro avviso sempre dello stesso contribuente oppure andando su **altra ricerca** si potrà cercare sempre con i parametri di ricerca, l'avviso a cui trasferire la riscossione. Selezionandolo comparirà la seguente videata:

[Schermata: Dialog "Attenzione" con messaggio "Confermi il trasferimento sulla scadenza selezionata?" e pulsanti "Conferma" e "Annulla"]

A quel punto dare **conferma** per fare il trasferimento o fare **annulla** per annullare l'operazione.