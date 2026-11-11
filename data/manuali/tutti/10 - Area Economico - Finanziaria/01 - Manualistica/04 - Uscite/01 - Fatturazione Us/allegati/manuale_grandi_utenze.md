# Contabilizzazione automatica fatture elettroniche emesse da gestori utenza

**Software:** CWOL E MODULO (F.00, F.01)

---

## 1. Inserimento della regola sul fornitore

Dal menù:

**Servizi Economici -> Tabelle -> Clienti/Fornitori -> Clienti/Fornitori**

Nella schermata a sinistra, dopo aver selezionato l'apposita voce del menù, è possibile ricercare un fornitore con i vari parametri di ricerca e successivamente proseguire attraverso il bottone **Elenca**.

Una volta scelto il fornitore, cliccare su **Fornitore/Clienti** e successivamente sulla **Parametrizzazione contabilizzazione automatica dei flussi SDI**.

Una volta posizionati sulla tab "Parametrizzazione contabilizzazione automatica dei flussi SDI", cliccare sul **+** per aggiungere la nuova regola.

Si inserisca:
- Il tipo di regola (**Valido per**)
- Gli assoggettamenti Iva con i relativi aliquote o esenzioni.

Per capire se il software del fornitore genera le fatture secondo uno di formati indicati è sufficiente aprire un documento e verificare la presenza della sezione indicata nel paragrafo successivo.

### 1.1 Dettaglio Regole per la contabilizzazione delle fatture elettroniche

Cliccando sul bottone di **"info"** è possibile vedere in dettaglio quali sono le regole dove il programma fa il controllo sul POD o sul numero di contratto.

Esistono le seguenti modalità:

1. Codice POD (altri dati gestionali)
2. Codice contratto
3. Codice POD (codifica articolo)
4. Codice POD (Causale documento)
5. Codice POD (Descrizione Linee Dettaglio)
6. Numero Linee Contratto
7. Numero Linee Contratto
8. Identificativo ordine di acquisto

All'interno di ogni modalità ci sono diverse possibilità dove il software del fornitore può indicare il POD/numero di contratto.

[Immagine: Dettaglio Regole per contabilizzazione fatture elettroniche - mostra le tab con le diverse modalità di riconoscimento POD/contratto e i dati relativi alle linee di dettaglio della fornitura]

---

## 2. Associazione Codice POD/numero di contratto con i dati finanziari

Dal menù:

**Servizi Economici -> Tabelle -> Configurazioni -> Tabella Gestione Parametri per creazione automatica movimenti**

Una volta selezionato l'apposita voce del menù, la schermata presenta una lista di parametri per la creazione automatica dei movimenti. In questo specifico caso scegliamo il **7 - "Flussi di fatturazione utenze"** con il doppio click.

Selezionando il parametro, si clicca successivamente sul bottone **"Definizione Raggruppamenti"**.

Appare la lista di parametri già presenti.

Se si volesse aggiungere un nuovo codice di raggruppamento è possibile scegliere tra **"Duplica"** o **"Nuovo"**.

### 2.1 Creazione del raggruppamento

#### 2.1.1 Pannello 1 - Dettaglio

Nella presente videata vanno inseriti **obbligatoriamente** i seguenti parametri:

- **Tipologia del flusso:** 7 Flussi di fatturazione utenze (in automatico si valorizza anche il campo Entrata/Uscita con Uscita)
- **Codice:** si consiglia di utilizzare una sigla iniziale per differenziare le diverse tipologie di utenze
- **Descrizione:** si consiglia di indicare l'indirizzo di ubicazione della fornitura
- **Operazioni su impegni:** impostare `0 = nessuna operazione`, l'impegno specificato è spiegato nel paragrafo 2.1.2
- **Creazioni liquidazioni:** è possibile inserire uno dei seguenti valori:
  - **Creazione liquidazione** (consigliabile in cui la fase di liquidazione di questi documenti non è delegata agli uffici periferici)
  - **Creazione Testata/Assoggettamento/Co.Ana** (da utilizzare nel caso in cui la fase di liquidazione viene effettuata dagli uffici periferici)

Per la creazione dei mandati invece questo campo risulta **facoltativo**.

#### 2.1.2 Pannello 2 - Parametri aggiuntivi per la Fatture Utenze

In questo pannello è **obbligatorio**:

- **Codice Pod/Numero contratto:** inserimento del codice POD/numero di contratto secondo il formato utilizzato dal fornitore nei flussi inviati mediante SDI
- **Soggetto:** selezionare il soggetto a cui precedentemente è stata impostata la regola (paragrafo 1)
- **Prog pag/ris:** inserire la modalità di pagamento contenente le stesse coordinate di pagamento indicate dal fornitore nei flussi inviati tramite SDI
- **Causali:** inserire gli stessi codici causali utilizzati per il caricamento manuale delle fatture, note di credito. Facoltativo risulta il caricamento delle causali con fatture ad importo a zero
- **Settore Iva:** il campo è obbligatorio se la causale prevede anche la creazione della registrazione iva
- **Descrizione:** specificare la descrizione da utilizzare in fase di creazione del documento in finanziaria. Prevista anche la gestione di alcune variabili come il periodo di consumi e il POD

**Campi Facoltativi:**
- Codici statistici
- Assegnatario
- Conto Co.ana
- Centri di costo

L'assegnatario, il conto co.Ana e il centro di costo viene inserito automaticamente quando si inserisce l'impegno.

#### 2.1.3 Aggiornamento massivo Fornitore - Impegno

Con la seguente funzione **"Aggiornamento Massivo"** si è in grado di modificare il soggetto/fornitore o solo l'impegno collegato ai pod.

Quindi cliccando sul bottone segnalato, comparirà la selezione dei fornitori.

1. Si inserisce il fornitore già presente nelle tabelle che occorre modificare, cliccando su **cerca**, compariranno tutti i POD.
2. Si inserisce il nuovo fornitore che andrà a sostituire l'attuale, cliccando il bottone **aggiorna**.
3. Se si vuole modificare solo l'impegno e lasciare il fornitore, basterà inserire nei campi "impegno" l'attuale e quello nuovo, lasciando sempre lo stesso fornitore.

#### 2.1.4 Funzione Duplicazione Massiva

---

## 3. Elaborazione flussi

Per le elaborazioni massive la procedura è composta da due fasi:

1. Importazione dei flussi nell'archivio transitorio
2. Elaborazione dei documenti (contabilizzazione) in simulazione ed in definitivo

Dopo l'importazione dei movimenti nell'archivio transitorio è possibile effettuare delle modifiche ai singoli documenti.

### 3.1 Import in archivio transitorio

Dal menù:

**Servizi Economici -> Finanziaria -> Elaborazioni periodiche -> Creazione movimenti da flussi di fatturazione utenze**

Cliccando sul bottone **"Importa"**, si apre la finestra di importazione che presenta solo i fornitori a cui è stata attivata la regola (paragrafo 1).

Successivamente si seleziona il soggetto per l'importazione e si inserisca la data e il periodo di consumi. Il calcolo della data scadenza è reso consistente dalla modalità di pagamento.

Scelti questi parametri, si clicca sul bottone **"Importa"** per portare le fatture nell'archivio transitorio.

Si elaborano solo i documenti importati in alfresco nel periodo indicato a video e che sono nello stato **da accettare/rifiutata** oppure **su accettata per decorrenza termine**.

Non vengono importati i documenti per i quali è stata riscontrata almeno una delle seguenti anomalie:

- Il documento non contiene nessun riferimento al codice pod/contratto
- Il documento contiene il riferimento a 2 o più codici pod/contratti
- Documento soggetto a reverse charge
- L'importo del documento è uguale a zero
- Il documento è soggetto a split solo parzialmente
- Codice pod/ non censito nella tabella descritta al paragrafo 2 o il codice pod/contratto è presente in tabella ma risulta associato ad una matricola di un fornitore diversa da quella selezionata a video

In questi casi le fatture devono essere accettate e contabilizzate manualmente dalla sezione **Gestione Flussi SDI**.

### 3.2 Elaborazione dei documenti (contabilizzazione) in simulazione e in definitivo

Cliccando sul bottone **"Elabora"**, si apre la seguente finestra dove è possibile effettuare l'elaborazione in **simulazione** o in **definitivo**.

Per quelle impostazioni che prevedono la creazione della liquidazione è opportuno inserire il tipo di atto di assunzione, il numero e la data dell'atto.

Nello stesso modo in cui vengono riportati gli errori nella fase di importazione, anche nell'elaborazione il programma effettua un ulteriore controllo.

> **Consiglio:** si consiglia sempre di usare prima la modalità **simulazione in elabora**, poi passare a **creazione**.

### 3.3 Documenti Uscita

Dopo aver contabilizzato in modo massivo, le fatture si trovano in "Documenti Uscita" come accedere per le fatture accettate e contabilizzate manualmente.

Dal menù:

**Servizi Economici -> Finanziaria -> Uscita -> Documenti Uscita**

---

## Riepilogo operazioni automatiche

Per i documenti privi di errori vengono effettuate le seguenti operazioni automatiche:

- Inserimento della testata del documento
- Inserimento del movimento di assegnazione al servizio se previsto dalla causale inserita nella tabella descritta alla sezione 2.2.2
- Inserimento della scheda iva con gli importi estratti dal riepilogo dell'iva presente nel documento inviato dal fornitore
- Inserimento della scheda ritenute se il documento è soggetto a split. Il codice ritenuta viene reperito automaticamente dalla tabella in funzione del tipo iva commerciale/istituzionale indicato nel settore iva associato ad ogni fattura
- Inserimento della liquidazione se previsto nelle indicazioni viste nel paragrafo 2.2.1
- Inserimento del mandato se previsto nelle indicazioni viste nel paragrafo 2.2.1
- Creazione, se il documento è soggetto a split, del movimento di autofattura in entrata con la stessa modalità prevista per il caricamento manuale dei documenti
- Se il documento risulta nello stato "da accettare", creazione del file di accettazione da inviare a SDI