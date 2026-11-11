# GESTIONE CHECK_IN

La Struttura Ricettiva sprovvista di un proprio 'Gestionale Presenze', potrebbe utilizzare costantemente il Portale IDS del Comune come proprio Gestionale Presenze.

La pagina che si apre, espone l'elenco degli **'Ultimi Arrivi'**, a partire dall'ultimo censito:

[Screenshot: Pagina principale "Ultimi Arrivi" con barra di ricerca (Identificativo Posizione, Soggiorno, Cognome Nome), pulsanti "Nuovo Soggiorno" (rosso) e "Export Soggiorni" (verde), e tabella con colonne: Soggiorno, Cognome, Nome, Comp., Arrivo, Partenza, Imposta, Pagato, Stato, Esenz./Riduz., Portale Quietura, con pulsanti "Genera Quietura" e "Check-out" per ogni riga]

Vengono elencati in ordine decrescente di arrivo, gli ultimi 200 ospiti censiti, sui quali poter direttamente intervenire in modifica o completamento.

E' altresì possibile richiamare un Soggiorno, alternativamente per:

- **Identificativo Posizione** (E' comodo per risalire ad un soggiorno, per coloro che hanno un Gestionale Presenze e caricano massivamente i Flussi ISTAT marcando ogni Ospite con apposito Id.Posizione in sostituzione del Nominativo per motivi di Privacy);
- **Soggiorno** (E' interessante se si necessita di risalire ad un Soggiorno di cui si conosce già il numero);
- **Cognome Nome** (E' comodo per risalire ad un Soggiorno ricordando il nominativo di un Ospite o solamente il suo Cognome).

L'omonimo bottone rosso in alto, permette di passare al caricamento di un **Nuovo Soggiorno**.

L'omonimo bottone Verde in alto, **Export Soggiorni**, permette di effettuare un Export dettagliato in formato excel, dei Soggiorni di un periodo. La funzione è molto utile per verificare il dettaglio delle posizioni caricate che concorreranno alla determinazione dell'importo complessivo da rendicontare nel periodo selezionato.

---

## Censimento puntuale di un Check-In

Digitando il bottone **Nuovo Soggiorno** in testa alla pagina, o il bottone **(+)** in coda all'Elenco dei Soggiorni, si apre la pagina di dettaglio, di seguito descritta:

[Screenshot: Pagina "REGISTRAZIONE NUOVO SOGGIORNO" con campi: Soggiorno/Soggetto, Stato, Codice Fiscale, Cognome*, Nome*, Estero/Nazione Stato Estero*, Residente/Nazione Stato Estero*, Documento di Identità (Tipo, Numero, Scadenza), Estero/Comune-Stato Rilascio, Tipologia*, CheckIn*, CheckOut*, Gruppo Numero Componenti, Tipo Turismo, Mezzo di Trasporto, Camere Occupate*. Pulsanti: Inserisci, Aggiungi Ospite]

In questa fase operativa del Check-In, vengono applicate **in tempo reale** la maggior parte delle Specifiche del Regolamento Comunale, **garantendo alla Struttura la piena Conformità**, per un rapporto virtuoso dell'Esercente con il Comune, in qualità di responsabile d'Imposta.

Nella fase di Check-in possono essere raggruppati all'interno di un 'Soggiorno', uno o più componenti che fanno parte della medesima registrazione.

L'esempio di seguito rappresentato, riporta un censimento del Check-in singolo, ove:

1. non è obbligatorio il Codice Fiscale perché il sistema se lo calcola dai dati di censimento obbligatori;
2. è possibile recuperare i dati di Check-In da un soggiorno precedente, per un Ospite che ritorna nella stessa Struttura:

[Screenshot: Finestra popup "Ricerca Nominativo" con campi Cognome* e Nome* e pulsante Ricerca, sovrapposta al form di registrazione]

3.

[Screenshot: Form compilato con dati di esempio: Cognome Corti, Nome Alberto, Nazione ALESSANDRIA DELLA ROCCA, Residente ALESSANDRIA DEL CARRIETT, Documento CARTA DI IDENTITÀ, Tipologia ALBERGHI 4/4 STELLE SUPERIOR, CheckIn 01/04/2023, CheckOut 08/04/2023]

---

## Inserimento dei dati e ricerca Comuni

Per ogni soggetto viene registrato il Check-in, attraverso il bottone **INSERISCI**, richiedendo i dati sopra esposti (I dati minimi indispensabili sono marcati con un **'*'** in colore rosso).

Da sottolineare l'obbligatorietà dell'utilizzo della **(Lente)** per l'individuazione dei Comuni e delle Sigle provincia annesse, **ai fini delle conformità richieste dalla Questura e da ISTAT** nelle successive fasi di predisposizione automatica delle schedine Alloggiati e dei flussi ISTAT, come di seguito rappresentato:

[Screenshot: Finestra popup "Elenco Località" con colonne Località, Provincia, Codice e pulsante "Scegli" per ogni riga. Esempio di ricerca "Charv" che mostra: CHARVONNE (AN), CHARVONNE CENTRALE (CZ), CHARVONNE LFLANDESE (MI)]

Digitando il nome del Comune o parte di esso, verranno elencati i Comuni che contengono la striga indicata e selezionando con il bottone **'Scegli'**, il Sistema riporterà il dato sulla pagina di Check-In, come di seguito rappresentato:

[Screenshot: Form aggiornato con Comune CHARVONNE (AN) e Stato Italia selezionati automaticamente]

---

## Inserimento di più componenti e Comuni Esteri

(Stessa operatività nella selezione del Comune di residenza e nel comune di rilascio del documento).

Con l'inserimento del secondo componente (vedi Fig. precedente), per ridurre al massimo i tempi di caricamento del Check-in, il Sistema:

- considera non obbligatoria l'indicazione del Documento di riconoscimento dell'Ospite;
- propone la stessa residenza del primo componente (modificabile);
- propone le stesse date di permanenza del primo componente.

Nel caso di Comuni Esteri, l'operatività è simile, ma è necessario valorizzare l'apposito Check di spunta denominato **'Estero'**, come di seguito rappresentato:

[Screenshot: Form con checkbox "Estero" spuntata, Nazione GERMANIA, e finestra "Elenco Località" con ricerca "Germ" che mostra: GERMANIA (ES), GERMANIA REP. DEMOCRATICA (ES)]

Per ottimizzare i tempi di Check-in, in presenza di una sola ricorrenza il Sistema aggiorna già la pagina di Check-in senza richiedere il bottone **SCEGLI**.

[Screenshot: Form compilato con dati ospite estero: Nazione GERMANIA, Residente ROMA, Cittadinanza ITALIA, Tipologia ALBERGHI 4/4 STELLE SUPERIOR, CheckIn 03/04/2023, CheckOut 05/04/2023]

---

## Controlli del Sistema in fase di Check-In

In particolare, in questa fase, il Sistema controlla:

4. **Comune di Residenza** (E' richiesto per capire se l'Imposta è dovuta, poichè il Sistema accetta indistintamente tutti i Check-In/Out). I **Residenti**, pur essendo registrati, **verranno esentati d'Ufficio**.
5. **Data Arrivo** (Per Default viene proposta la data del giorno, e può essere retro_datata dall'Operatore);
6. **Data Partenza** (Per Default è vuota **e deve** essere valorizzata dall'Operatore);
7. **Tipologia** (Viene esposta la finestra per scelta dei tipi Alloggio/Categorie disponibili c/o la Struttura, che potrebbero essere più di una e potrebbe corrispondere a tariffe diverse)

E' possibile scegliere tipi alloggio/categorie, diversi tra ospiti appartenenti allo stesso Soggiorno.

Digitando il bottone **'Inserisci'**, il Sistema registra il Soggiorno e calcola la tariffa teorica applicabile.

---

## Gestione dei Gruppi Organizzati

La gestione dei Gruppi Organizzati avviene utilizzando la stessa pagina di Check-in, ma valorizzando il seguente Campo **nella fase di Check-in del Referente del Gruppo (il primo della lista)**:

[Screenshot: Campo "Gruppo Organizzato - Numero Componenti" con campo di input]

Ai fini dell'imposta di Soggiorno, sarà sufficiente registrare il solo Referente del Gruppo, indicando il numero dei componenti del Gruppo, poiché il Sistema calcolerà già l'Imposta complessiva teorica.

Tuttavia, se si utilizzano le funzionalità di invio massivo Flussi al Portale Alloggiati della Questura o al Portale ISTAT della regione, **sarà invece necessario** censire tutti i componenti del Gruppo organizzato, sempre all'interno del medesimo Soggiorno del Referente, compresi gli esenti con rispettiva dichiarazione di esenzione.

---

## Tipologia di Check-In e Codifica Ministeriale

Va inoltre precisato che in conformità al Portale Alloggiati della Questura e al portale ISTAT della Regione, il Sistema determina in automatico la tipologia di Check-In:

8. **Singolo** ___ (Normale caricamento del Check-in di un solo componente);
9. **Gruppo** ___ (Normale caricamento del Check-in, con indicazione del numero componenti del Soggiorno, sul Capogruppo, primo censito);
10. **Famiglia** __ (Normale caricamento del Check-in, per più persone, senza valorizzazione del sopra indicato campo di selezione, che rimane sempre riservato ai soli gruppi organizzati).

Tali determinazioni automatiche avranno conseguenze nella preparazione dei Flussi per il Portale Alloggiati della Questura e dei flussi ISTAT per la Regione, che richiedono la seguente codifica ministeriale del Tipo Alloggiato:

| Codice | Tipo Alloggiato |
|--------|-----------------|
| 16 | Ospite Singolo |
| 17 | Capo Famiglia |
| 19 | Familiare |
| 18 | Capo Gruppo |
| 20 | Membro Gruppo |

---

## Pagina post-inserimento e Bottoniera

Con l'Inserimento del Check-in, attraverso il bottone **'Inserisci'**, il Sistema rimane posizionato sulla pagina come segue:

[Screenshot: Pagina "MODIFICA OSPITE DEL SOGGIORNO 169663" con form compilato, campi Imposta (12,00 €), Pagato (0,00 €), e pulsanti Esenzioni/Riduzioni, Rifiuto, Aggiorna, Aggiungi Ospite, Nuovo Soggiorno, Torna Elenco Componenti, Torna Elenco Soggiorni]

In basso, la bottoniera che si accende, permette all'operatore, la massima versatilità per un accesso diretto alle funzioni desiderate, pur rimanendo sulla pagina di censimento dei Check_in:

[Screenshot: Barra pulsanti: Aggiorna (verde), Aggiungi Ospite (giallo), Nuovo Soggiorno (arancione), Torna Elenco Componenti (grigio), Torna Elenco Soggiorni (grigio)]

- Il bottone **AGGIORNA** permette di intervenire in aggiornamento per variazione, sul Check-In appena inserito.
- Il bottone **AGGIUNGI OSPITE** permette di aggiungere un nuovo Ospite all'interno del Soggiorno in corso.
- Il bottone **NUOVO SOGGIORNO** permette di procedere direttamente con un nuovo Soggiorno, rimanendo all'interno della pagina di Check-In, in cui già ci si trova.
- Il bottone **TORNA ELENCO COMPONENTI** permette di tornare all'elenco dei componenti del Soggiorno che si sta trattando.
- Il bottone **TORNA ELENCO SOGGIORNI** permette di tornare direttamente all'elenco generale dei Soggiorni.

---

## Esenzioni/Riduzioni e Rifiuto

I bottoni **Esenzioni/Riduzioni** e **Rifiuto** permettono di trattare un Check-In appena inserito, per la corretta applicazione delle dichiarazioni di Esenzione/Riduzione o Rifiuto dell'Ospite al pagamento dell'IdS.

> **Nota:** Con la Legge 77/2020 l'Esercente non è più Agente Contabile, ma **Responsabile d'Imposta** e pertanto, in caso di Rifiuto dell'Ospite è obbligato a conferire comunque l'Imposta di Soggiorno secondo il Regolamento Comunale.

### Gestione Riduzioni/Esenzioni

Selezionando il bottone **Esenzioni/Riduzioni** all'interno del singolo Check-in inserito, il Sistema apre la seguente pagina di gestione:

[Screenshot: Finestra "Gestione Esenzione/Riduzione" con menu a tendina "Riduzione/Esenzione" contenente opzioni: Accompagnatore Gruppo Organizzato, Assistenza Sanitaria a parenti, Alunni Gruppi organizzati, Disabile, Ex Minimo, Motivi di Lavoro oltre il 5° giorno non consecutivo, Ospiti che hanno pernottato 7 notti in altra struttura (SOGGIORNO CONTINUATIVO), Personale in gruppi turistici scolastici over 65 in Albergo 1,2,3 Stelle, Personale dello Stato in Servizio per Ordine Pubblico, Residenti, Personale dipendente della Struttura, Viaggiatori in Stagione, Turisti in Trattamento con Convalescenza Termale]

Viene esposta la finestra delle possibili tipologie di Esenzione o Riduzione accettabili secondo il regolamento comunale, permettendone la Selezione a scelta dell'Operatore.

Il sistema richiede in forma **NON obbligatoria**, gli estremi di certificazione della tipologia di esenzione dichiarata e attraverso il bottone **'Inserisci'** nel caso di primo inserimento, o **'Aggiorna'** nel caso di rettifica, registra l'Esenzione o riduzione.

[Screenshot: Form "REGISTRAZIONE ESENZIONE/RIDUZIONE - CORTI GIULIO" con campi: Soggiorno/Soggetto 13784/38548, Stato Check-in, Riduzione/Esenzione "Assistenza Sanitaria a parenti", Ospedale* "Carlo Urbani", Giorni permanenza*, Reparto "ortopedia", pulsante Inserisci]

E' bene che l'Esercente conservi sempre (ai fini ispettivi) a corredo di ogni esenzione, la documentazione attestante, ancorchè non richiesta obbligatoriamente e non memorizzata dal Portale IDS, deputato esclusivamente a prenderne atto per il calcolo della tariffa.

---

### Stampa Modello B (Esenzione)

Con la conferma della registrazione in tutti i suoi campi, il Sistema procederà con la stampa della copia cartacea che il Cliente della Struttura dovrà sottoscrivere con apposita firma **(Modello B)**.

[Screenshot: Documento "IMPOSTA DI SOGGIORNO – DICHIARAZIONE PER ESENZIONE (Modello B)" con intestazione Comune di Riccione, dati ospite, struttura, periodo, motivo esenzione, note e campo firma]

L'Esenzione/Riduzione **per Età**, per **Gruppi Organizzati** (se superano il numero previsto), per i **Residenti**, viene registrata dal Sistema **automaticamente** con i dati di Check-In, evitando quindi l'operatività di censimento, sopra descritta.

---

### Gestione del Rifiuto dell'Ospite al pagamento dell'Imposta di Soggiorno

Il Rifiuto al pagamento dell'Imposta, comporta la registrazione da parte della Struttura, nella fase di Check-in, digitando il bottone **'Rifiuto'**.

Si apre quindi la pagina di seguito esposta, per raccogliere i dati minimi, necessaria alla registrazione del Rifiuto al pagamento dell'imposta di soggiorno, analogamente all'Esenzione, con la sola differenza che in questo caso viene richiesto il **Motivo del Rifiuto** al posto del tipo Esenzione.

Alla conferma della registrazione del Rifiuto, in tutti i suoi campi, il Sistema procederà con la stampa della copia cartacea che il Cliente della Struttura dovrà sottoscrivere con apposita firma **(Modello C o D)**.

Il Sistema propone entrambe i modelli PDF, lasciando la facoltà all'Esercente di Stampare:

11. Il **Modello 'C'**, nel caso in cui l'Ospite che rifiuta il pagamento dell'Imposta di Soggiorno, **non intenda sottoscrivere** la dichiarazione di Rifiuto. In questo caso l'Esercente firma la Dichiarazione di seguito rappresentata:
12. Il **Modello 'D'**, nel caso in cui l'Ospite che rifiuta il pagamento dell'Imposta di Soggiorno, e **sottoscrive** la dichiarazione di Rifiuto. In questo caso l'Esercente propone alla firma dell'Ospite la Dichiarazione di seguito rappresentata:

---

## Ricerca e Filtraggio dei Soggiorni

Ritornando sulla pagina principale che elenca i Check_In possiamo vedere che i Soggiorni vengono esposti in elenco, ordinati a partire dall'ultimo censito.

E' comunque possibile selezionare/reperire le Informazioni dall'elenco dei soggiorni, utilizzando uno o più campi di testata, come di seguito riportato:

[Screenshot: Barra di ricerca con campo "Cognome/Nome" attivo e pulsante Cerca, sopra l'elenco Soggiorni filtrato]

Selezionando in questo caso per cognome si ottengono in elenco tutti i soggiorni che contengono un ospite con il Cognome, o parte di esso, indicati.

---

## Fase di Check-Out

La fase di **Check-Out**, consolida il Soggiorno, la data di partenza e conseguentemente gli importi dovuti per la Tassa di Soggiorno. Viene contestualmente emessa la ricevuta di pagamento all'Ospite, che può essere ignorata dall'Esercente che contempla già l'Imposta di Soggiorno sulla ricevuta della camera.

[Screenshot: Elenco Soggiorni con colonna "Stato" che mostra "Check-out" per i soggiorni consolidati, e pulsante "Genera Quietura" (verde) sulla colonna "Portale Quietura"]

Per i Soggiorni che si trovano già in Check-out è possibile al bisogno, ristampare la quietanza, utilizzando l'apposito bottone all'estrema dx di ogni rigo.

E' altresì possibile gestire il Check-out di un singolo Ospite all'interno del Soggiorno, qualora ad esempio abbia necessità di una partenza anticipata:

Digitando il bottone **'Check-out'** sulla singola riga dell'Ospite all'interno del Soggiorno, si ottiene il consolidamento del singolo Check-In come sopra raffigurato, con rispettiva ricevuta:

[Screenshot: Pagina "Componenti del Soggiorno" con elenco ospiti (CORTI CARLO, CORTI GIULIO), colonne: Soggiorno, Soggetto, Cognome, Nome, Arrivo, Partenza, Imposta, Pagato, Stato, Esenz./Rifiuto/Residente, e pulsanti "Check-out" (verde) e "Genera Quietura" per ogni riga]

---

## Vantaggi della Gestione Check-In

In sintesi, la Gestione Check-in, permette di registrare **una volta sola** i Check-In/Out, ottenendo così i seguenti vantaggi:

1. Alimentazione massiva del **Portale Alloggiati della Questura**, ogni 24 ore, senza dover ulteriormente trascrivere puntualmente gli stessi soggetti;
2. Alimentazione del **Portale ISTAT**, con frequenza massima Mensile, senza dover ulteriormente trascrivere puntualmente gli stessi soggetti;
3. **Dichiarazioni periodiche all'Ente**, con calcolo automatico dell'Imposta e di tutti i dettagli che compongono la Dichiarazione, attingendo i dati dai singoli Check-In/Out registrati;
4. **Rendicontazione periodica al Comune**, in base ai Soggiorni caricati, con Pagamento delle somme Dichiarate, attraverso canale F24 o bollettino PAGOPA precompilato in tempo reale alla conferma della Dichiarazione (Il Bonifico viene comunque accettato dall'Ente);
5. **Invio Telematico della Rendicontazione all'Ente**, attraverso i canali standard di Posta elettronica pre-configurati a sistema dall'Ente.