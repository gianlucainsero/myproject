# Note e Relazioni di Cityware.Online (CWOL)

## 1. Premessa

Il presente documento ha l'obiettivo di illustrare il funzionamento delle note e delle relazioni presenti nell'applicativo di Cityware.Online (di seguito *CWOL*).

> **N.B.** Le note/relazioni di CWOL sono sottoposte a specifica licenza d'uso e possono essere utilizzate soltanto previo accordo commerciale o, in alternativa, se già previste espressamente nel contratto tra le parti (Ente-Palitalsoft).

## 2. Funzionalità comuni a tutte le note/relazioni

Tutte le note/relazioni presenti nell'applicativo hanno una struttura ad albero (*tree list*) standard che viene proposta di default da Palitalsoft. La struttura ad albero è composta da un elenco di paragrafi e sottoparagrafi standard che sono completamente modificabili e/o personalizzabili dall'utente utilizzatore.

I paragrafi/sottoparagrafi sono classificati come:

- **paragrafi/sottoparagrafi modificabili dall'utente** (*NON read-only = modificabili*): si tratta di sezioni che contengono parti testuali standard o vuote che possono essere modificate ed implementate dall'utente.
- **paragrafi/sottoparagrafi NON modificabili dall'utente** (*read-only = solo lettura*): si tratta di sezioni che contengono valori numerici che non possono essere modificate dall'utente per evitare la compromissione dei dati rispetto ai prospetti ufficiali gestiti in CWOL.

> **N.B.** Le sezioni NON modificabili vengono ricalcolate ad ogni apertura delle note/relazioni (ovvero i dati numerici si aggiornano in automatico ad ogni apertura della singola relazione). Tuttavia se i dati sono stati storicizzati e salvati nel database attraverso la gestione dei Cruscotti Bilancio (Previsione e Rendiconto) i dati vengono reperiti dai prospetti salvati.

Riepilogando la modalità di reperimento dei dati è la seguente:

1. Prospetto archiviato con flag "prospetto definitivo"
2. Prospetto archiviato
3. Ricalcolo valori da archivio.

Per verificare se un prospetto è stato archiviato o meno basta consultare i Cruscotti Bilancio (*per dettagli si rimanda all'implementazione del 15 settembre 2025 presente nella cronologia rilasci*):

- `180. Servizi economici → 10. Finanziaria → 10. Bilancio e Variazioni → 70. Prospetti Bilancio Previsione`
- `180. Servizi economici → 10. Finanziaria → 10. Bilancio e Variazioni → 90. Prospetti Rendiconto Gestione`

[Immagine: schermata Cruscotto Bilancio con evidenziate le colonne "Data salvataggio" e "Def" per verificare l'archiviazione dei prospetti]

All'apertura della singola tipologia di nota/relazione la paginazione viene pre-filtrata con le relazioni valide nel determinato esercizio contabile.

[Immagine: elenco relazioni pre-filtrate per anno contabile 2026 con indicatore "Es.Contabili 2026" in alto a destra]

Non è possibile editare una relazione in un anno contabile che non è quello di appartenenza (es: editare una relazione del 2025 da anno contabile 2026).

[Immagine: messaggio di attenzione "Non è possibile modificare la relazione in questo esercizio contabile. La relazione può essere modificata soltanto nell'esercizio 2025"]

### 2.1 Gestione e personalizzazione della struttura ad albero

Come precedentemente detto, ogni nota/relazione è composta da una struttura ad albero di default che si presenta come segue:

[Immagine: struttura ad albero "Elementi Relazione" con colonne: Paragrafo, Compilato, Utente, Ultimo aggiornamento, Agg., Abilita]

Ciascuna riga della struttura ad albero corrisponde ad un paragrafo ed è composto dai seguenti elementi:

| Icona/Elemento | Descrizione |
|---|---|
| 👁️ (occhio) | Questa icona permette di entrare nel paragrafo in sola visualizzazione |
| ✏️ (matita) | Questa icona permette di entrare in modifica nel paragrafo. Si aprirà la visualizzazione tramite ONLYOFFICE e sarà possibile effettuare tutte le modifiche desiderate. |
| 🔒 (lucchetto) | Questa icona indica che il paragrafo in questione è in *read only*, per cui la sezione NON è modificabile. Fa riferimento a paragrafi in cui sono presenti prospetti e dati compilati automaticamente. |
| ▼ Titolo (freccia) | Titolo del paragrafo con icona della freccia: sono presenti dei sottoparagrafi e la sezione è stata espansa |
| ○ Titolo (cerchio) | Titolo del paragrafo con icona del cerchio: il paragrafo è di livello foglia (*ovvero ultimo livello*) |
| ☑️ Compilato | Il flag relativo alla colonna 'Compilato' è una facilitazione per l'utente, quando un paragrafo è stato compilato e gestito è possibile utilizzare questo flag per avere "a colpo d'occhio" la situazione della relazione e sapere quali paragrafi devono ancora essere verificati e quali sono già stati verificati dall'utente. |
| Utente | Questa colonna indica qual è stato l'ultimo utente che ha effettuato l'ultima modifica al paragrafo |
| Ultimo aggiornamento | Questa colonna indica la data in cui è stato effettuato l'ultima modifica al paragrafo |
| Agg. | La colonna Agg. indica che al paragrafo è stata fatta una modifica, per cui è necessario effettuare il salvataggio complessivo mediante la bottoniera laterale (button "Aggiorna"), altrimenti non verrà salvata la modifica in questione. |
| ☑️ Abilita | Il flag 'Abilita' indica se un paragrafo è attivo o meno, e quindi se sarà compreso nella stampa complessiva della relazione. Questo permette all'utente di scegliere comodamente quali paragrafi includere non includere nella stampa finale. Per escludere un paragrafo basta deselezionare il flag. |

#### 2.1.1 Personalizzazione della struttura

Ciascuna struttura ad albero proposta di default è personalizzabile dall'utente. Le modifiche possibili sono le seguenti:

- aggiungere nuove sezioni
- modificare sezioni già esistenti
- eliminare sezioni già esistenti

La personalizzazione è permessa grazie ai bottoni presenti nella parte in basso a sinistra della paginazione:

[Immagine: barra in basso a sinistra della struttura ad albero con icone +, matita, cestino e ingranaggio evidenziate in rosso]

**Bottone `+` (Inserisci nuova sezione)**

Il bottone `+` permette di inserire una nuova sezione; in primis va selezionato il paragrafo dove si vuole inserire la nuova sezione e poi va premuto il bottone.

Successivamente si aprirà la schermata seguente dove è possibile indicare:

- **Titolo sezione**: scrivere come si vuole intitolare la sezione;
- **Elemento "padre"**: sotto quale paragrafo si vuole creare la nuova sezione, può essere quello selezionato (che viene proposto di default) o può essere scelto tramite il menù a tendina in cui vengono visualizzati tutti i paragrafi presenti nella struttura. La gerarchia è indicata dai trattini prima del titolo;
- **Ordinamento**: è possibile scegliere se inserire la nuova sezione sotto l'elemento padre o in un altro ordine.

[Immagine: finestra "Sezione Personalizzata" con campi Titolo Sezione, Elemento "padre", Ordinamento e pulsante "F5 - Aggiungi"]

[Immagine: struttura ad albero aggiornata con nuova sezione "Nuova sezione custom" inserita con tag "CUSTOM" e flag "Agg." attivo]

**Bottone ✏️ (Modifica sezione)**

Il bottone ✏️ permette di modificare sia le nuove sezioni *custom* sia già presenti nella struttura di default. Non è possibile modificare il titolo delle sezioni standard ma è possibile spostarle 'geograficamente' all'interno della struttura di default (ovvero cambiare posizione).

Entrando in modifica di una determinata sezione verrà aperto l'editor testuale OnlyOffice che consente di implementare/modificare la sezione aggiungendo parti testuali, immagini e tabelle.

Qualora si voglia tornare al contenuto di default proposto da Palitalsoft è sufficiente cliccare sul button **"Rigenera da default"**.

[Immagine: editor OnlyOffice con pulsante "Rigenera da default" evidenziato in alto a destra]

> **NB:** il button "Rigenera da default" comporta la perdita di tutti i dati modificati manualmente, ovvero la loro sovrascrittura.

**Bottone 🗑️ (Elimina sezione)**

Il bottone 🗑️ permette la cancellazione delle sezioni, sia delle *custom* che delle standard.

Non è possibile eliminare la sezione "Copertina" in quanto si tratta della sezione primaria dell'intera struttura ad albero.

#### 2.1.2 Integrazione Controllo di Gestione per il DUP

A partire dal Luglio 2026 (DUP 2027-2029) è stata introdotta la possibilità di integrare la reportistica del Controllo di Gestione all'interno di una sezione personalizzata del DUP.

La funzionalità si attiva al verificarsi di due condizioni:

- Modulo Controllo di Gestione attivo
- Acquisto Integrazione CdG nel modulo DUP (*fare riferimento al proprio commerciale di riferimento*)

Per integrare la reportistica del CdG è sufficiente creare una nuova sezione personalizzabile e cliccare su **"Integra Report CdG"**.

[Immagine: finestra "Sezione Personalizzata" con pulsante "Integra Report CdG" evidenziato in rosso]

Successivamente verrà richiesto di selezionare il Report da integrare ed inglobare nella sezione (*selezionare il report mediante doppio click*):

[Immagine: finestra "Prospetti" con elenco classificazioni e report disponibili, es. "Performance - approvazione", "DUP - Nota di Aggiornamento", ecc.]

Sono selezionabili soltanto Report in formato **DOCX** (no PDF).

### 2.2 Funzionamento della relazione

#### 2.2.1 Bottoniera paginazione iniziale

Nella paginazione delle relazioni abbiamo la bottoniera laterale che è presente nella pagina iniziale di apertura del programma con la lista degli eventuali record già presenti, che è composta dai seguenti bottoni:

| Bottone | Descrizione |
|---|---|
| **Nuovo** | Il bottone "Nuovo" permette di creare un nuovo record e quindi una nuova relazione. Possono essere presenti più record per una stessa annualità. |
| **Duplica** | Il bottone "Duplica" permette di duplicare una relazione già esistente, in questo modo è possibile poi modificare e implementarla ulteriormente rispetto a quella di origine. E' possibile la duplicazione anche da un anno a quello successivo (per esempio se si vuole duplicare la relazione del Bilancio Previsione 2025 sul 2026 è necessario accedere all'esercizio contabile 2026 e poi selezionare la relazione al BP 2025 e cliccare "Duplica") |

> **NB:** Si ricorda che Palitalsoft ha in carico l'aggiornamento periodico delle strutture di default delle relazioni. Utilizzare la funzione "Duplica" potrebbe impedire di utilizzare la struttura più aggiornata ma consente di fruire di una struttura personalizzata in precedenza.

**Esempio:**

Di seguito si propongono le strutture di default proposte da Palitalsoft per la nota integrativa al Bilancio di previsione dalle annualità 2025 fino al 2030.

| Nr. tipo relaz. | Tipo relazione | Inizio validità | Fine validità | Nr. sezioni default |
|---|---|---|---|---|
| 1 | Relazione al BdP | 2025 | 2026 | 50 |
| 2 | Relazione al BdP | 2027 | 2030 | 65 |

Nel 2025 l'utente crea una nuova relazione; di default viene proposta la struttura della relazione Nr. 1 che ha 50 sezioni. L'utente nel corso della fase di bilancio di previsione modifica la struttura aggiungendo 5 sezioni custom (totale sezioni della relazione al BdP 2025: 55).

Nell'annualità 2026 (BdP 2026-2028) l'utente ha di fronte due possibilità:

- Utilizzare la funzione **"Nuovo"** → verrà creata una struttura con 65 sezioni (viene utilizzata la relazione Nr. 2)
- Utilizzare la funzione **"Duplica"** → viene duplicata la struttura della relazione customizzata che quindi avrà 55 sezioni.

#### 2.2.2 Bottoniera della relazione

Nel momento in cui si è all'interno della nota/relazione la bottoniera laterale si presenta come segue:

| Bottone | Descrizione |
|---|---|
| **Aggiungi** | Il bottone "Aggiungi" si presenta solamente quando si crea una nuova nota/relazione e deve essere salvata e quindi aggiunta per la prima volta. |
| **Aggiorna** | Il bottone "Aggiorna" permette di salvare le modifiche effettuate nella relazione. E' necessario utilizzarlo tutte le volte che si apportano modifiche alla relazione altrimenti non verranno salvate. |
| **Cancella** | Il bottone "Cancella" permette di eliminare totalmente la relazione in cui si sta operando. |
| **Torna elenco** | Il bottone "Torna elenco" permette di tornare alla paginazione iniziale dove sono elencate tutte le relazioni già esistenti. |
| **Crea versione Docx** | Il bottone "Crea versione Docx" permette di creare una prima anteprima che verrà visualizzata tramite ONLYOFFICE. Sarà poi possibile salvare tale anteprima per effettuare una prima storicizzazione dei dati. |

Una volta premuto il bottone "Crea versione Docx" il programma presenta un popup "Sommario Relazione" con:

- Un messaggio informativo: *"INFO: L'inclusione del sommario comporterà tempi di attesa più lunghi (circa 10 min.)"*
- Un flag **"Includi sommario"** per scegliere se includere o meno il sommario (ovvero l'indice del documento completo)
- Pulsanti **"Conferma"** e **"Annulla"**

### 2.3 Gestione stampa relazione

La visualizzazione dell'anteprima della stampa che si genera tramite il bottone **"Crea versione Docx"** si presenta come segue:

[Immagine: finestra "Gestione Stampa Relazioni" con anteprima ONLYOFFICE a sinistra e bottoni laterali a destra: Rigenera, Annulla Docx, Scarica, Ricarica, Salva, Modifica Stesura, Genera Versione Definitiva]

I bottoni laterali permettono di gestire la relazione:

| Bottone | Descrizione |
|---|---|
| **Rigenera** | Il bottone "Rigenera" permette di rigenerare il documento, tornando alla versione di default che deriva dalla risoluzione dei dati presenti nei paragrafi della struttura ad albero. Le eventuali modifiche effettuate a seguito dell'anteprima verranno perdute. |
| **Annulla Docx** | Il bottone "Annulla Docx" permette di annullare la stampa in versione docx precedentemente salvata nel database e consente di ritornare alla modifica delle sezioni. Anche in questo caso se si sceglie di tornare indietro e annullare il docx le modifiche fatte dall'anteprima in ONLYOFFICE verranno perdute. |
| **Scarica** | Il bottone "Scarica" permette di effettuare il download della relazione nel proprio computer locale. |
| **Ricarica** | Il bottone "Ricarica" permette di ricaricare un file all'interno della procedura. Se si è quindi in possesso di un file docx che si vuole importare in procedura è possibile farlo tramite questo bottone. |
| **Salva** | Il bottone "Salva" permette di salvare la stampa e cristallizzare i dati quando viene effettuata per la prima volta. Questo bottone va utilizzato inoltre ogni volta che vengono effettuate modifiche dalla fase di anteprima tramite ONLYOFFICE. |
| **Modifica stesura** | Il bottone "Modifica stesura" permette di modificare il documento tramite ONLYOFFICE dalla fase di anteprima. Si aprirà una nuova finestra di ONLYOFFICE in cui sarà possibile effettuare qualsiasi tipo di modifica alla relazione, anche alle sezioni che erano di sola visualizzazione perché contenevano dati numerici. Modificando la relazione in questo punto si genera un disallineamento con i dati presenti nelle singole sezioni impedendo in un futuro una corretta duplicazione della relazione stessa (ovvero la relazione può essere duplicata ma non conterrà i dati inseriti tramite il bottone "Modifica stesura"). |
| **Genera versione definitiva** | Il bottone "Genera versione definitiva" permette di rendere definitiva la stampa e crea una versione in PDF dell'anteprima attualmente salvata. |

Una volta effettuate e salvate le stampe sia in docx che in PDF, la paginazione viene visualizzata come segue:

[Immagine: elenco relazioni con colonne UUID_docx e UUID_pdf, con icone di download per entrambe le versioni]

Tramite le icone è possibile scaricare entrambe le versioni sul proprio computer locale.

Dopo aver fatto la stampa definitiva in PDF, entrando nel record della relazione si presenta la schermata di sola lettura, in cui non è più possibile effettuare modifiche.

[Immagine: finestra "Gestione Stampa Relazioni" in sola lettura con soli bottoni "Annulla Versione Definitiva" e "Scarica" disponibili]

Tramite il bottone **"Annulla Versione Definitiva"** è possibile annullare la stampa definitiva in PDF e tornare alla situazione della stampa in docx.

## 3. Relazioni disponibili

Attualmente nella procedura CWOL sono disponibili 4 relazioni:

- Documento unico di programmazione (DUP)
- Nota integrativa al bilancio di previsione
- Relazione al rendiconto di gestione
- Nota integrativa alla contabilità economico patrimoniale

Queste relazioni sono disponibili seguendo questo percorso:

`180. Servizi Economici → 10. Finanziaria → 100. Relazioni e Note →`

- `10. Documento unico di programmazione (DUP)`
- `20. Nota integrativa al Bilancio di Previsione`
- `30. Relazione al Rendiconto di Gestione`
- `40. Nota integrativa alla contabilità economico patrimoniale`

[Immagine: menu a cascata con percorso 180. Servizi Economici → 10. Finanziaria → 100. Relazioni e Note → sottomenu con le 4 relazioni disponibili]