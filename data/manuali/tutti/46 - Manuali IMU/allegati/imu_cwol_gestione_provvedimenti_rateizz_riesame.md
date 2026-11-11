# IMU – Gestione dell'Imposta Municipale Unica

## 1. Provvedimenti

Si accede ai provvedimenti (accertamenti, liquidazioni, rimborsi, rateizzazioni, cumulo giuridico..) dai richiami in diverse paginazioni con il pulsante **"Provvedimenti"** o da menù:

`70. Tributi → 30. IMU → 60. Gestione Avvisi → 10. Provvedimenti IMU`

[Immagine: percorso di menu per accedere ai provvedimenti IMU]

### Ricerca Provvedimenti

Viene aperta la maschera di selezione per inserire i parametri di ricerca; la ricerca può essere fatta per più specifiche contemporaneamente e poi si va su **"Elenca"**.

[Immagine: maschera di ricerca provvedimenti con campi Anno Provvedim., Prog. soggetto, Tipo provvedimento, Stato del provv., Provvedimento, Causale Specifica, ecc.]

Per le diverse scelte si aprirà la relativa tendina:

**Tipo provvedimento**
- Liquidazione
- Accertamento
- Rimborso
- Rateizzazione
- Liquidaz. - Accertam.
- Cumulo Giuridico
- Sollecito

**Tipo selez. per rateiz.**
- Solo i rateizzati
- Solo i non rateizzati

**Causale Specifica**
- Sospeso per adesione
- Sospeso per sentenza
- Ricalcolato da adesione
- Ricalcolato da sentenza
- Ricalcolato in autotutela

**Stato del provv.**
- Creato
- Verificato
- Stampato
- Sospeso per Ricorso
- Sospeso Definitivamente
- Pagato
- Ruolo
- Ingiunzione
- Ruolo Pagato
- Ingiunzione Pagata
- Pagato Parzialmente
- Sospeso per Dilazione
- Notificato
- Stampato PEC
- Stampato PEC Spese Not.
- Fallimento
- Adesione
- Ricorso
- Ingiunzione Discaricata

**Provvedimento**
- ICI/IMU
- TASI

Il tasto **"Elenca"** propone tutto l'elenco dei provvedimenti secondo i parametri di selezione utilizzati con a destra diversi pulsanti per varie funzioni:

[Immagine: paginazione elenco provvedimenti con colonna di pulsanti a destra]

#### Pulsanti di funzione

**Navigazione**
- **Altra Ricerca**: Effettua una nuova ricerca con nuovi parametri (riporta alla pagina di ingresso)

**Gestione**
- **Nuovo**: Inserisce un nuovo provvedimento
- **Cumulo Giuridico**: Crea il cumulo giuridico sui provvedimenti selezionati
- **Rateizza**: Crea un avviso di rateizzazione sul provvedimento/i selezionati
- **Riesame**: Accede alla pagina del riesame (annullamento, ricalcolo, autotutela)
- **Crea Sollecito**: Calcola gli oneri della riscossione per gli avvisi notificati

**Gestione Ruolo**
- **Nuovo**: Crea il ruolo coattivo sul provvedimento selezionato
- **Cancella**: Cancella il ruolo se non presentato

**Riscossione**
- **Nuova**: Inserisce la riscossione per l'avviso selezionato
- **Ins.Risco.Ruolo**: Inserisce la riscossione del ruolo coattivo
- **Elenco**: Accede alla paginazione delle riscossioni del soggetto selezionato

**Stampa**
- **Stampa Testo**: Stampa il testo del provvedimento selezionato
- **Vis.Documenti**: Visualizza i documenti stampati e/o allegati all'avviso selezionato

### Creare un nuovo provvedimento

> *Attualmente il programma di calcolo del provvedimento percepisce in autonomia cosa deve essere creato per il soggetto, se accertamento/liquidazione o rimborso.*

Se la ricerca è stata effettuata con parametri generici, ossia non specificando il contribuente, con **"Nuovo"** deve essere inserito anche il soggetto. Andrà indicata la matricola, o codice fiscale, o anche parte del cognome e nome (in tal caso, il programma presenterà l'elenco dei soggetti presenti nell'archivio unico dei soggetti per essere selezionato).

[Immagine: form Dettaglio Provvedimento IC/IMU con sezione Soggetto]

In automatico il programma presenta l'anno contabile come anno dell'accertamento, ma il campo è editabile.

[Immagine: campo Anno Provv. editabile]

La **data del provvedimento** è obbligatoria, ed è la data fino a quando verranno calcolati gli interessi. Specificare il **tipo provvedimento IMU o TASI** e il **tipo calcolo delle sanzioni** (tabella dove vengono inserite le specifiche aliquote e altri parametri per il calcolo). Premere il tasto **Elabora Provvedimento**.

Una volta fatto **"Elabora Provvedimento"** il programma presenta i dettagli del provvedimento che si andrà a creare.

Viene esposto il calcolo con gli importi calcolati dal programma (tab **Dett. Provvedimento**):

[Immagine: tab Dett. Provvedimento con Imp.Dovuta, Imp.Versata, Diff., sanzioni, interessi, spese di notifica, TOT. PROVVEDIMENTO]

Nel tab del **Riepilogo Calcoli** viene riportato automaticamente quello che viene dalla quadratura totale per l'anno, sia il dovuto che il versato e le differenze:

[Immagine: tab Riepilogo Calcoli con colonne Acconto, Saldo, TOTALI e righe Dovuto, Versato, Arrotond.Pagamento, Differenze, Accert. Rimb. emessi/pagati, Ruoli, Ingiunzioni, Differenze da corrispondere]

Nel tab **Interessi** sono indicati gli interessi per periodo:

[Immagine: tab Interessi con righe Prog., Tipo Int., Num. rata, IMPONIBILE, Perc. annua, N.giorni, INTERESSI, DT Iniz., DT Fine]

Il tab **Legami** espone gli immobili oggetto dell'accertamento e contiene tutte le informazioni derivanti dalla quadratura (sono dei dati memorizzati nell'accertamento):

[Immagine: tab Legami con colonna Quadratura: Anno-Cod.Prv, Caratter., Indirizzo, CAT, CL, IMPONIBILE, Acconto Saldo, Dovuto Impon.to Mig., Mese pos, ecc.]

Con il tasto **"Aggiungi"** viene creato l'avviso.

[Immagine: messaggio "Salvataggio Provvedimento Eseguito Correttamente! Anno 2021 Num. 13"]

### Stampa Testo

Selezionare il provvedimento creato e premere il tasto a destra **"Stampa Testo"**; se non compare un testo di default selezionarlo dalla lente.

[Immagine: finestra Stampa Testi con campo Testo, Pagamento, Data Protocollo, Numero Protocollo]

Attraverso la lente si accede all'elenco dei testi presenti in archivio:

[Immagine: finestra Risultato Ricerca con elenco documenti (Accertamento Cedola IMU, AnnullamentoAvvisoAcc, Avvisi IMU, ecc.)]

Sceglierlo con doppio click e premere il tasto **"Stampa"**.

[Immagine: finestra Stampa Testi con testo selezionato "IMU Accertamento" e menu a tendina Pagamento "Solo Documento"]

Comparirà la videata della stampa in corso.

[Immagine: finestra Stampa in corso - Conversione del documento in PDF]

A seconda della scelta effettuata in fase di stampa (**Solo Documento** o **Documento + F24**) verrà creato il testo dell'accertamento in pdf o in pdf + f24 relativo.

[Immagine: Visualizzatore Documenti con file pdf e docx]

### Inserimento Data di Notifica

Quando viene inserita la data di notifica, automaticamente viene scritta anche la data di scadenza in base ai giorni specificati nella tabella del sistema sanzionatorio utilizzata, relativa all'anno dell'avviso.

[Immagine: form con DT Notifica e DT Scadenza compilate automaticamente]

---

## 2. Rateizzazioni

Per inserire una rateizzazione deve essere prima inserita una **emissione** che specifica i parametri di calcolo.

### Tabella delle Emissioni

Dal menù `Tributi → modulo base → impostazioni generali → Gestione Emissioni`

[Immagine: percorso di menu per Gestione Emissioni]

Si aprirà la videata della gestione delle emissioni.

[Immagine: form Emissioni con campi Servizio Emittente, Modulo bollettazione, Anno Emissione, Numero Emissione, Tipo Emissione, Natura credito, Descrizione]

Solitamente nella ricerca si inserisce il servizio emittente, cliccando sulla lente si accede alla tabella dei servizi; in questo caso scegliere quello inerente all'IMU (doppio click).

[Immagine: finestra Servizi emittenti documenti con elenco TARI, IMU, TASI, COSAP, IDS, AFFISSIONI, MERCATI, CUP]

Una volta scelto il servizio, con il tasto **Elenca** si accede alla paginazione delle emissioni. Se non esistono per l'anno di interesse, premere il tasto **"Nuovo"** (o il tasto **+** in basso a sinistra).

[Immagine: paginazione Gestione Emissioni con elenco emissioni e pulsante Nuovo]

L'emissione deve avere configurati una serie di parametri:

- **Tipo** (in questo caso è rateizzazione)
- **Anno**
- **Servizio emittente**
- **Descrizione parlante**
- **Data di creazione**
- **Arrotondamento**
- **Numero max rate** (in fase di creazione della rateizzazione è possibile cambiarle all'occorrenza)
- **Giorni scadenza rate**
- **Tipo calcolo Date Scadenza** (cadenza al 1° del mese o cadenza a fine mese)
- **Modalità di calcolo di interesse sulle rate**
- **Data inizio di decorrenza** (del calcolo degli interessi)

[Immagine: form Dettaglio Emissione con sezione Scadenza Rate: Num. max rate, Tipo calcolo date, Dt.scad. rata 1-4, Giorni Scadenza Rate, Tipo calcolo Date Scadenza, % da versare in acconto, Importo Fideiussione, Modalità calcolo inter. rate, % Tasso interesse, Dt inizio decorrenza, Imp.minimo riscout., Definizione Interessi]

**Tipo calcolo tassi interesse:**
- a scalare (rate costanti)

**Definizione interessi:**
andando sulla lente e selezionando **Giorni a tasso legale** si aprirà la tabella degli interessi per anno, su totale o su rate.

[Immagine: tabella Giorni a Tasso Legale con colonne Tasso %, Dal, Al (es. 2,50% dal 01-01-2004 al 31-12-2006; 5,50% dal 01-01-2007 al 31-12-2007; ... 0,01% dal 01-01-2021 al 31-12-2021)]

### Creazione Avviso di Rateizzazione

Selezionare uno o più provvedimenti dalla paginazione dei provvedimenti e premere il tasto **"Rateizza"**.

[Immagine: elenco provvedimenti con pulsante Rateizza evidenziato]

Viene proposto l'elenco delle emissioni di tipo rateizzazione da utilizzare, permettendo di scegliere (doppio click).

[Immagine: finestra Gestione Emissioni con elenco emissioni di tipo Rateizzazione]

Una volta scelta l'emissione viene proposto il provvedimento con l'anno corrente editabile.

[Immagine: form Dettaglio Provvedimento IC/IMU con Anno Provv. editabile e sezione Rateizzazioni]

Vengono riportati gli estremi dell'avviso o degli avvisi inclusi.

Andando su **"Rateizza provvedimento"** viene calcolata la rateizzazione e prima della conferma vengono mostrate le rate (la data di scadenza della prima rata coincide con la data del provvedimento), con la possibilità di mettere un numero rate diverso da conteggiare rispetto a quelle messe in tabella.

[Immagine: tab Scadenze con elenco rate (Rata n°1, Rata n°2, ecc.) con Tipo Scadenza, Prg. Fattura, Imponibile rata, Inter.maturati, Importo rata, e totali TOTALE IMPONIBILE, TOTALE INTERESSI, TOTALE ARROTONDAM., TOTALE DOCUMENTO; campi N.rate e Gior. scad.]

Per confermare fare **"Aggiungi"** e comparirà il seguente messaggio:

[Immagine: messaggio "Salvataggio Provvedimento Eseguito Correttamente! Anno 2022 Num. 1"]

Il provvedimento di rateizzazione creato è legato al vecchio avviso tramite anno e progressivo.

[Immagine: elenco provvedimenti con riga Rateizzato collegata a Prov. di rateizz. Anno-Prog. (es. 2024 8)]

### Inserimento manuale di una riscossione di rateizzazione

Entrare in modifica nel provvedimento di rateizzazione e posizionarsi nel tab delle **scadenze**. Andare nell'icona dell'inserimento della riscossione.

[Immagine: tab Scadenze con colonna Inse. Risco. e icona di inserimento]

Si aprirà il dettaglio della riscossione. Mettere la data del pagamento e premere il tasto **"Aggiungi"**.

[Immagine: form Dettaglio Riscossione con Anno riferimento, DT versamento, Tipo versamento (Rateizzazione), calendario, e campi Prog. Proved., Pr.Fattura, Num.Rata, Imponibile, Interessi, Tot.calcol., TOTALE, Differenza, Proven. versam.]

La scadenza risulterà pagata.

[Immagine: tab Scadenze con Rata n°1 marcata come Pagata (spunta verde)]

Entrare in modifica del provvedimento e cambiare lo stato in **"pagato parzialmente"** (nel caso di riscossione agganciata in automatico lo stato viene cambiato da solo, senza intervenire a mano).

Nel tab **RISCOSSIONI** sarà presente la riscossione appena inserita/agganciata e a mano a mano che vengono inseriti i pagamenti viene aggiornato il residuo:

[Immagine: tab Riscossioni Rate con colonne Anno, DT Versam., Num.Rata, Importo Totale, e totali TOTALE DOCUMENTO, TOTALE PAGATO, RESIDUO DA PAGARE]

### Cancellazione di un provvedimento di rateizzazione

La cancellazione di un provvedimento di rateizzazione è possibile **solo se non sono presenti riscossioni agganciate**.

Posizionarsi sulla riga del provvedimento e andare sul pulsante della cancellazione.

[Immagine: elenco provvedimenti con icona cestino evidenziata]

Comparirà la seguente videata:

[Immagine: finestra Attenzione con messaggio "Eliminando un Provvedimento di Rateizzazione, tutti i Provvedimenti Collegati vengono riportati allo stato di 'STAMPATO' e tutte Scadenze relative vengono Eliminate! Confermi la cancellazione del provvedimento Anno:2022 Progressivo:1?" con pulsanti F5-Conferma e F8-Annulla]

---

## 3. Riesame Provvedimento

Il tasto **"Riesame"** riassume diversi tipi di attività sul provvedimento emesso e notificato.

Selezionare il provvedimento in interesse e premere il tasto **"Riesame"**.

[Immagine: elenco provvedimenti con pulsante Riesame evidenziato]

Si apre la finestra con tre diverse opzioni:

[Immagine: finestra Selezionare operazione con radio button Annullamento, Ricalcolo, Autotutela e pulsante Conferma]

### Annullamento

La scelta **"Annullamento"** mette la data di annullamento che cambia stato all'avviso e propone la classica form per stampare il testo.

[Immagine: finestra Selezionare operazione con Annullamento selezionato e data 14/07/2022]

È possibile attraverso la lente cercare il testo e stampare l'annullamento.

[Immagine: finestra Stampa Testi con testo "Annullamento Avvisi Accertamenti" e pulsante Stampa]

Diversamente si può anche solo annullarlo e stamparlo successivamente selezionando il provvedimento annullato e andando su **"Stampa"**.

Lo stato del provvedimento passerà ad **ANNULLATO**.

[Immagine: elenco provvedimenti con Stato Provvedimento "Annullato"]

### Ricalcolo

Il ricalcolo prevede il ricalcolo dell'avviso quando questo è stato notificato, senza per forza dover creare un'autotutela, ma ha comunque lo stesso risultato.

[Immagine: finestra Selezionare operazione con Ricalcolo selezionato]

Confermando il ricalcolo comparirà questa domanda alla quale dare di nuovo Conferma:

[Immagine: finestra Attenzione con messaggio "Il Provvedimento che si sta per Sospendere NON presenta un'Autotutela! Continuare?" con pulsanti F5-Conferma e F8-Annulla]

Alla conferma si aprirà la classica form per il calcolo dell'avviso di accertamento.

[Immagine: form Dettaglio Provvedimento con tab Dett.Provvedimento e importi ricalcolati]

Con il tasto **"Aggiungi"** comparirà la seguente videata:

[Immagine: messaggio "Salvataggio Provvedimento Eseguito Correttamente! Anno 2019 Num. 222"]

Il precedente provvedimento viene **sospeso definitivamente** e viene creato un nuovo avviso collegato al precedente.

[Immagine: elenco provvedimenti con riga precedente in stato "Sospeso Definitivamente" e nuovo avviso collegato tramite progressivo (es. 2019-222)]

### Autotutela

[Immagine: finestra Selezionare operazione con Autotutela selezionato]

Si aprirà il dettaglio dell'autotutela.

[Immagine: form Dettaglio Autotutela con campi Anno Provvedimento, Numero Provvedimento, Tipo Autotutela (Annullamento Totale), Data Autotutela, Numero Autotutela, Firma, Data Protocollo Richiesta, Numero Protocollo Richiesta, Data Stampa, Data Notifica, Data Definizione, Esito (In corso di Definizione)]

**Esito** disponibile:
- In corso di Definizione
- Accolta
- Non Accolta

**Tipo Autotutela** disponibile:
- Annullamento Totale
- Annullamento Parziale
- Non Definito

#### Tipo autotutela Annullamento totale (in corso di definizione)

Facendo **"Aggiungi"** l'atto viene automaticamente passato ad uno stato **"Sospeso per Ricorso"** per permettere l'istruttoria.

[Immagine: elenco provvedimenti con Stato "Sospeso per Ricorso", icona autotutela e indicatore posizione]

Per rientrare nell'autotutela e apportare le modifiche una volta accolta o meno l'istanza, andare sull'icona dell'autotutela e inserire i dati con data ed esito.

[Immagine: form Dettaglio Autotutela con Data Definizione e Esito "Accolta" selezionato, pulsante Aggiorna]

Se esito **"ACCOLTA"**, cliccando il tasto **"Aggiorna"**, il provvedimento passa da uno stato "Sospeso per Ricorso" ad uno stato **"Sospeso Definitivamente"**.

[Immagine: elenco provvedimenti con Stato "Sospeso Definitivamente"]

#### Tipo autotutela Annullamento Parziale (in corso di definizione)

Come avviene per l'annullamento totale, scegliendo **Annullamento Parziale** e facendo **"Aggiungi"** l'atto viene automaticamente passato ad uno stato **"Sospeso per Ricorso"** per permettere l'istruttoria.

[Immagine: form Dettaglio Autotutela con Tipo Autotutela "Annullamento Parziale" e pulsante Aggiungi]

Per rientrare nell'autotutela e apportare le modifiche una volta accolta o meno l'istanza, andare sull'icona dell'autotutela.

[Immagine: form Dettaglio Autotutela con Data Definizione e Esito "Accolta", pulsante Aggiorna]

Se esito **"ACCOLTA"**, cliccando il tasto **"Aggiorna"** il programma si predispone per la creazione di un nuovo avviso che sospende definitivamente quello originario e ricalcola in base alle modifiche apportate sulla banca dati.

[Immagine: finestra Avviso con messaggio "Vuoi Procedere alla creazione del provvedimento?" e pulsanti Crea Provvedimento / Annulla]

Andando su **"Crea Provvedimento"** viene presentata la videata del nuovo provvedimento.

[Immagine: form Dettaglio Provvedimento IC/IMU con tab Dett.Provvedimento e importi ricalcolati]

Facendo **"Aggiungi"** viene creato un altro avviso di accertamento.

[Immagine: messaggio "Salvataggio Provvedimento Eseguito Correttamente! Anno 2019 Num. 222"]

Tale avviso è collegato al precedente attraverso il nuovo progressivo.

[Immagine: elenco provvedimenti con riga precedente "Sospeso Definitivamente" collegata al nuovo avviso tramite progressivo]

Se esito **"NON ACCOLTA"**, cliccando il tasto **"Aggiorna"** il provvedimento ritorna allo stato **notificato**.

[Immagine: elenco provvedimenti con Stato "Notificato"]