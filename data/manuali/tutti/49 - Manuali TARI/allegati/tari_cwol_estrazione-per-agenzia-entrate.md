# TARI - Comunicazione Agenzia Entrate attività rifiuti

Il presente manuale ha lo scopo di descrivere il funzionamento generale della pagina dedicata all'estrazione dei dati catastali dei soggetti per l'Agenzia delle Entrate.

## Punto di menù

Procedere dal menù:

**Tributi → TARI → Flussi verso Enti terzi → Comunicazioni Agenzia Entrate attività rifiuti**

[Schermata del percorso di menu: Tributi > 40. TARI > 130. Flussi verso Enti terzi > 40. Comunicazioni Agenzia Entrate attività rifiuti]

## Struttura Form

Una volta selezionata la scelta dal menù, si aprirà la seguente videata:

[Schermata della form "Comunicazione Agenzia Entrate attività rifiuti" con sezioni: Operazione, Dati identificativi del soggetto obbligato, File da creare]

Alcuni parametri vengono impostati di **DEFAULT**, in particolare:

- il tipo di **OPERAZIONE** (simulazione)
- l'**ANNO SELEZIONE**
- la **DATA CESSAZIONE LIMITE**
- la **DATA OCCUPAZIONE DA** e la **DATA OCCUPAZIONE A**
- il flag **AGGANCIO DIRETTO CATASTO**
- il flag **NON COMUNICARE SENZA ID. CAT.**
- il flag **CREAZIONE FILE TXT x INVIO**
- il flag **EXPORT FORM EXCEL**

### Struttura della form (dettaglio campi)

La form è composta dalle seguenti sezioni:

**Sezione "Operazione":**
- Simulazione / Creazione (radio button)
- Anno Selezione
- Tipo Cespite (con lente di ricerca)
- Altri Tipi Cespite
- Data Cessazione Limite
- Data Occupazione Da / A
- Data Ultima Variazione Da / A
- Incl. Inserite con Occup. Preced. (checkbox)
- Selezione Immobili (dropdown)
- Sempre Aggancio per Indirizzo (checkbox)
- T.Occ.4 x UE senza Sogg. (checkbox)
- Aggancio Diretto Catasto (checkbox)
- Non Comunicare Senza Id.Cat. (checkbox)

**Sezione "Dati identificativi del soggetto obbligato":**
- Codice Fiscale Sogg. Obbligato
- Cognome
- Nome
- Sesso
- Data di Nascita
- Comune / Prov.
- Denominazione
- Comune della Sede Legale / Prov.

**Sezione "File da creare":**
- Creazione File TXT x Invio (checkbox)
- Export Form Excel (checkbox)

## Controlli Parametri

Affinché venga avviata l'estrazione, è necessario che alcuni parametri inseriti dall'utente rispettino le seguenti condizioni:

1. l'**ANNO SELEZIONE** non deve essere uguale a 0;
2. il **1° TIPO CESPITE** non deve essere uguale a 0 (utilizzare la lentina per effettuare la scelta);
3. la **DATA CESSAZIONE** non deve essere uguale a 0;
4. la **DATA OCCUPAZIONE DA** non deve essere maggiore della **DATA OCCUPAZIONE A** (se quest'ultima è valorizzata);
5. la **DATA ULTIMA VARIAZIONE DA** deve essere valorizzata se il flag **INCL. INSERITE CON OCCUP. PRECED.** è selezionato;
6. il **CODICE FISCALE** del soggetto obbligato deve essere valorizzato;
7. tutte le **CATEGORIE D'USO** devono avere la rispettiva **DESTINAZIONE D'USO** valorizzata per l'**ANNO SELEZIONE** indicato.

> **N.B.** Se l'**ANNO** delle **DATE di OCCUPAZIONE DA – A** è diverso dall'**ANNO SELEZIONE** viene mostrato un messaggio di avviso chiedendo all'utente se ignorare il messaggio oppure no.

[Messaggio di avviso: "L'Anno delle Date di Occupazione Limite è diverso dall'Anno di Riferimento. Ignorare l'errore?" con pulsanti Sì / No]

## Elabora Dati

Una volta selezionati i parametri andare su **"Elabora Dati"**.

[Schermata con pulsante "Elabora Dati" evidenziato nella barra laterale destra]

Cliccando questo bottone si può effettuare la ricerca delle denunce tributi da comunicare all'Agenzia Entrate. In particolare:

- Se viene selezionata l'operazione di **CREAZIONE**, oltre all'elaborazione delle informazioni (che già viene eseguita nella **SIMULAZIONE**), vengono importati tutti i dati sostituendo quelli che erano presenti prima di avviare l'estrazione attuale.

- Se viene selezionato il flag **CREAZIONE FILE TXT X INVIO** viene generato un file TXT con i dati catastali, corrispondenti ai parametri inseriti in input dall'utente.

- Se viene selezionato il flag **EXPORT FORM EXCEL** vengono generati dei file di verifica relativi a:
  1. File excel con i dati catastali dei soggetti (senza la testata-record0 e la coda-record9)
  2. File excel con i dati dei cespiti senza UE
  3. File excel con i dati dei soggetti non trovati nel catasto e i dati di più soggetti in catasto con stesso Cod. Fiscale
  4. File excel con i dati dei soggetti senza identificativi catastali

Il Download dei file prodotti (TXT e/o XLS) avviene sottoforma di **file .ZIP**, che viene scaricato nella **cartella 'Download'** in locale.

I parametri inseriti in input dall'utente, compreso il percorso del file .ZIP, vengono importati nella tabella **TDE_AGENSI** del DB.

## Pulisci Campi

Questo bottone consente di reimpostare i parametri ai valori di **DEFAULT** iniziali (come avviene all'apertura della form).

[Schermata con pulsante "Pulisci Campi" evidenziato nella barra laterale destra]

## Storico Invii

Questo bottone consente di aprire la gestione dello Storico Invii.

[Schermata con pulsante "Storico Invii" evidenziato nella barra laterale destra]

### Struttura Form

La videata si presenta come segue:

[Schermata "Storico Invii Agenzia Entrate" con filtri di ricerca e tabella]

Vengono elencati tutti i dati presenti nella tabella **TDE_AGENSI**.

In particolare, è possibile inserire come filtro di ricerca il **COGNOME del SOGGETTO** (sia scritto interamente che parzialmente).

La tabella dello storico invii contiene le seguenti colonne:

| Colonna | Descrizione |
|---------|-------------|
| Prog. | Progressivo |
| Anno | Anno di riferimento |
| Data Invio | Data dell'invio |
| Tipo | Simulazione / Creazione |
| Creato File | Indicatore file creato |
| Cod.Fisc. Sog.Obb. | Codice fiscale soggetto obbligato |
| Cognome Sog. | Cognome soggetto |
| Nome Sog. | Nome soggetto |
| Denominazione | Denominazione |

### Doppio Click nella Tabella Storico Invii

Facendo **doppio click sopra un record** dello storico invii, i rispettivi dati del soggetto obbligato vengono riportati nella videata iniziale dell'Estrazione, nella sezione **'Dati identificativi del soggetto obbligato'**, inoltre vengono valorizzati anche i relativi campi **ANNO SELEZIONE** e **1° TIPO CESPITE** (nella sezione Operazione).

### Cancella Record

È possibile **cancellare un record** dalla tabella dello storico invii cliccando il pulsante **cestino** (🗑️) presente sulla riga del record.

La cancellazione viene riportata anche nel DB.

### Modifica Record

È possibile **modificare i dati di un record** della tabella dello storico invii tramite il pulsante **matita** (✏️) presente sulla riga del record.

Una volta cliccato, viene aperta la seguente pagina con tutti i campi popolati dai dati del record selezionato:

[Schermata di modifica record con campi: Progressivo Invio, Operazione, Anno, Data Invio, Creato File, Nome File inviato, Tipo Cespite, Cod.Fiscale Sog.Obb., Cognome Sog.Obb., Nome Sog.Obb., Sesso, Data Nascita Sog.Obb., Comune Nas. Sog.Obb., Prov. Sog.Obb., Denominazione, Comune Sede Legale, Prov. Sede Leg., Audit]

Con il pulsante **CONFERMA** si aggiornano i dati nella tabella **TDE_AGENSI** del DB e si ritorna all'elenco dello Storico Invii. Mentre con il pulsante **ANNULLA** si annullano le modifiche effettuate.