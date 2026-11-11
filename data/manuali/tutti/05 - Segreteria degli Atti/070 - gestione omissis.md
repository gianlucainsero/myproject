# GESTIONE OMISSIS

Il termine Omissis viene utilizzato per identificare i dati sensibili all'interno di un documento base che si vogliono omettere dalla visione pubblica del documento.

OnlyOffice permette di avere a disposizione diverse funzionalità a supporto dell'utente. Una di queste funzionalità, è la possibilità appunto di gestire gli OMISSIS nel caso siano presenti dati sensibili all'interno del testo. Questa funzionalità, può essere utilizzata in due modalità:

## Modalità con Carattere Barrato

Durante la stesura del testo con OnlyOffice, è possibile indicare quali sono le parole da omettere durante la creazione dell'atto definitivo semplicemente barrandole. Le parole barrate verranno sostituite con un testo preimpostato che ne indichi l'omissione (come ad esempio **OMISSIS**). Questo metodo risulta molto rapido e semplice e permette di generare un numero di omissis a piacere in base alle esigenze. Come indicato, sarà quindi sufficiente selezionare il dato sensibile e cliccare il bottone relativo all'apposizione della barratura sul testo:

[Immagine: Screenshot dell'editor OnlyOffice con il testo "Il Comune si impegna a donare la somma di € 1.000 a titolo di contributo, al sig. Mario Rossi" con il nome "Mario Rossi" selezionato e barrato tramite il pulsante di formattazione barrato nella barra degli strumenti]

L'applicativo, riconoscendo la presenza del testo barrato, genererà automaticamente due versioni del documento definitivo. La prima versione integrale e la seconda con la presenza degli omissis ad oscurare i dati sensibili. Così da avere una versione divulgabile al pubblico senza dati sensibili.

## Modalità con Variabili

Con questa seconda modalità, è possibile creare delle vere e proprie variabili, consultabili anche all'interno del dettaglio dell'atto, che andranno a sostituire il dato sensibile all'interno del testo. Questa modalità richiede sicuramente un tempo di applicazione leggermente più lungo, ma dà la possibilità di avere nella maschera di dettaglio dell'atto, l'elenco delle variabili per omissis create ed il valore corrispondente. Vediamo nel dettaglio l'applicazione di questo metodo:

Aprendo il testo da redigere, quando ci troviamo in presenza di un dato sensibile, è sufficiente selezionare tale dato ed accedere alla funzione dell'editor **"Plugin"**, cliccare la funzione **"Omissis"**, e selezionare la voce **"Aggiungi variabile"** per inserire la prima variabile di Omissis, come da immagine riportata di seguito:

[Immagine: Screenshot dell'editor OnlyOffice con la scheda "Plugin" attiva, il pulsante "Omissis" evidenziato nella barra degli strumenti, e il pannello laterale "Omissis" con i pulsanti "+ Aggiungi Variabile" e "Ricerca Variabili", oltre a una tabella con colonne "Nome Variabile" e "Valore"]

Avendo cliccato il bottone "Aggiungi variabile", l'editor chiede l'inserimento di due informazioni essenziali:

- **Nome variabile:** Identificativo a piacere da associare a quella specifica tipologia di dato da omettere;
- **Valore:** Parola da omettere.

Riprendendo il testo di esempio riportato nell'immagine precedente, potremmo dare alla nostra variabile il nome "beneficiario" ed impostare il suo valore come "Mario Rossi", semplicemente evidenziando quella parte di testo. Terminato l'inserimento clicchiamo il bottone "Inserisci" come da immagine:

[Immagine: Screenshot del pannello "Omissis" con i campi compilati: "Nome Variabile" = "beneficiario", "Valore" = "Mario Rossi", e il pulsante "Inserisci" evidenziato in blu]

Viene confermato l'inserimento della variabile, che ora troviamo disponibile nell'elenco delle variabili e immediatamente il testo selezionato viene sostituito in questo caso con la variabile `@{$OMISSIS.BENEFICIARIO}@`, ad indicare che quella porzione di testo deve essere omessa con la variabile appena creata. Avendo creato la nostra variabile possiamo proseguire con la stesura del testo e all'occorrenza, dovendo inserire nuovamente il riferimento a Mario Rossi (beneficiario del contributo nel nostro esempio), sarà sufficiente cliccare la variabile nella parte destra della schermata, così da inserirla al posto del nominativo del Beneficiario. In questo modo l'applicativo conoscerà il valore sostituito e saprà che si tratta di un dato sensibile.

Nel caso si debbano oscurare più dati di diversa natura, è possibile creare diverse variabili. Nel caso in cui nel nostro esempio fossero stati presenti due diversi beneficiari, avremmo creato una variabile dedicata ad ognuno, così da diversificare i dati oscurati:

[Immagine: Screenshot dell'editor con il testo che mostra due variabili inserite: "@{$OMISSIS.BENEFICIARIO1}@" e "@{$OMISSIS.BENEFICIARIO2}@", con il pannello laterale che elenca BENEFICIARIO1 = Mario Rossi e BENEFICIARIO2 = Antonio Verdi]

Completato l'inserimento del testo e delle variabili necessarie in relazione ai dati da omettere, uscendo dall'editor si può notare che nella maschera di dettaglio dell'atto, all'interno della scheda **"Omissis"**, vengono in automatico riportati i dati relativi alle variabili create, così da averne sempre nota:

[Immagine: Screenshot della maschera di dettaglio dell'atto con la scheda "Omissis (2)" attiva, che mostra la tabella "Lista Omissis" con le colonne "Nome Variabile" e "Valore", contenente: BENEFICIARIO1 = Mario Rossi, BENEFICIARIO2 = Antonio Verdi]

Da questa schermata è possibile, oltre alla consultazione delle variabili inserite, eliminare, modificare o aggiungerne di nuove da utilizzare all'interno del testo.

---

Utilizzando sia il primo che il secondo metodo, il successivo comportamento della procedura sarà il medesimo, e come anticipato in precedenza, verrà creata una versione integrale del documento ed una comprensiva di omissis per la pubblicazione e divulgazione.