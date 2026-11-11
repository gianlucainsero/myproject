# Configurazione dei Parametri

Con la presente guida viene mostrato come sia possibile impostare alcuni parametri di CityWareOnLine per integrare la gestione degli atti di segreteria con le pubblicazioni in amministrazione trasparente. Successivamente, la presente guida mostrerà come operare la gestione di un singolo atto per il quale sia prevista la pubblicazione su uno o più rami di trasparenza che richiedano l'impostazione di dati aggiuntivi, in funzione dell'integrazione precedentemente impostata.

## Impostazione del ramo di default per la pubblicazione

Per ogni tipologia di atto all'interno di CWOL è possibile indicare quale sia il ramo di trasparenza su cui gli atti di una certa tipologia debbano essere pubblicati di default: tale impostazione può essere operata accedendo al menu **"Gestione Documentale - Gestione Segreteria - Archivi - Organi/Tipi Determine"**, accedendo al dettaglio dell'organo che si intende gestire (Delibera di Giunta, Delibera di Consiglio, Determina…) ed accedendo alla **TAB "Trasparenza"**.

All'interno della TAB "Trasparenza", il dato saliente rispetto all'impostazione del ramo di default per la pubblicazione di atti riferiti alla tipologia selezionata è appunto quello riferito al campo **"Default pubblicazione Amm.Trasp."**, per il quale si dovrà cliccare sulla lente corrispondente, selezionare il ramo da associare come default ed attivare la spunta del campo **"Attiva scrittura in sezioni"**.

[Schermata TAB "Trasparenza" con campi: Atto non pubblicabile, Tipo pubblicazione esterna, Tipo Documento Amm. Trasp., Default pubblicazione Amm.Trasp., Attiva scrittura in sezioni, Pubblicazione Amm. Trasp. Obbligatoria, Opzioni WEB(Interne), Opzioni WEB(Esterne)]

## Parametri aggiuntivi nella TAB "Trasparenza"

Nella stessa schermata proposta nella TAB "Trasparenza" è possibile attivare ed impostare una serie di altri campi che vengono dettagliati di seguito:

- **Atto non pubblicabile:** attivando questo parametro, per tutti gli atti della tipologia così impostata non sarà possibile operare la pubblicazione

- **Permetti omissione pubblicazione in Albo Pretorio:** attivando questo parametro, per tutti gli atti della tipologia così impostata sarà possibile indicare di volta in volta se l'atto debba essere pubblicato all'albo o meno

- **Tipo pubblicazione esterna:** tramite l'impostazione di questo parametro sarà possibile indicare al programma quale versione del testo dell'atto far comparire in pubblicazione scegliendo tra le seguenti opzioni:
  - *Originale:* il testo finale dell'atto (PDF), eventualmente firmato digitalmente (P7M)
  - *Copia:* copia del testo finale dell'atto, prodotta automaticamente dal programma alla generazione del testo definitivo
  - *Corpo:* solo testo base dell'atto, privo di intestazione e chiusura
  - *PDF:* file PDF completo di tutte le parti integranti e sostanziali dell'atto, prodotto automaticamente dal sistema

- **Tipo Documento Amm. Trasp.:** tramite questo campo sarà possibile indicare un tipo di documento tra quelli riferiti alle pubblicazioni in trasparenza, così da creare un legame tra l'organo che si sta gestendo ed i rami di trasparenza per i quali lo stesso tipo di documento sia indicato come default. Una volta operato tale collegamento, durante la fase istruttoria di un atto la cui tipologia sia stata collegata ad un certo tipo di documento, sarà possibile cliccare sul pulsante **"Pubblicazioni Automatiche"** (nella TAB "Pubblicazioni") per scegliere uno o più rami tra quelli impostati di default come associati allo stesso tipo di documento. Per l'impostazione dei "Tipi documento" di trasparenza ed eventuali dati aggiuntivi ad essi associati, si rimanda alla guida dedicata.

- **Pubblicazione Amm. Trasp. Obbligatoria:** attivando questo parametro, per tutti gli atti della tipologia così impostata sarà obbligatorio indicare almeno un ramo di pubblicazione in trasparenza, laddove non già previsto come impostazione di default

---

# Pubblicazioni da Segreteria

Per agevolare il processo di pubblicazione in Amministrazione Trasparente, in Cityware.online è presente un automatismo che nel passo d'iter che prevede la pubblicazione all'Albo, inserisce le corrispondenti voci anche in Amministrazione Trasparente.

## Pubblicazioni automatiche da organo Atto

Come evidenziato precedentemente, dall'anagrafica degli Organi è possibile specificare - nella tab Trasparenza - i parametri necessari per la pubblicazione automatica.

Vanno specificati: il tipo documento, la sezione di destinazione della pubblicazione e se attivare l'effettiva scrittura in Trasparenza.

[Schermata TAB "Trasparenza" con parametri di pubblicazione automatica: Tipo pubblicazione esterna, Tipo Documento Amm. Trasp., Default pubblicazione Amm.Trasp., Attiva scrittura in sezioni]

La sezione verrà così riportata anche nella gestione del singolo Atto, in funzione di quanto impostato per la corrispondente tipologia.

[Schermata gestione singolo Atto con tab "Pubblicazioni" e tabella "Amministrazione Trasparente" con sezione di destinazione, tipo, data inizio e data fine]

## Aggiungere voci di pubblicazione

Per aggiungere ulteriori rami, oltre a quello legato all'organo, se presente, cliccare sul tasto **"Tutte le sezioni"** o sul tasto **"Pubblicazioni automatiche"**, nella tabella *Amministrazione Trasparente*;

[Schermata tab "Pubblicazioni" con pulsanti "Pubblicazioni automatiche" e "Tutte le sezioni" e messaggio verde di pubblicazione automatica nel ramo "Provvedimenti dirigenti amministrativi (D.Lgs. n. 33/2013, art. 23)"]

si aprirà l'albero dell'Amministrazione Trasparente (nel caso di "Tutte le sezioni") o i soli rami preferenziali per la tipologia gestita (nel caso di "Pubblicazioni Automatiche"): così sarà possibile selezionare la/le sezione/i di pubblicazione da aggiungere a quella principale. La politica dei permessi è la stessa applicata nella Gestione Sezioni.

[Schermata albero dell'Amministrazione Trasparente con struttura gerarchica: Disposizioni generali, Piano triennale per la prevenzione della corruzione e della trasparenza, Atti generali, Organizzazione, Titolari di incarichi politici, di amministrazione, di direzione o di governo, ecc.]

### Dati aggiuntivi obbligatori

Se la sezione scelta presenta un **tipo documento di default** il sistema chiederà se si vogliono compilare i relativi dati aggiuntivi:

[Finestra di dialogo "Attenzione": "Si desidera specificare i dati aggiuntivi per la pubblicazione nella sezione inserita?" con pulsanti F5-Conferma e F8-Annulla]

Nel caso in cui la compilazione è obbligatoria, il sistema lo segnalerà e non permetterà l'inserimento fino a quando tutti i dati non saranno compilati correttamente.

[Schermata dati aggiuntivi con campi: Tipologia, Provvedimento numero, ID Struttura, Struttura responsabile, ID Responsabile, Responsabile del provvedimento, Data del provvedimento, Eventuale spesa prevista, Estremi, Scelta del contraente, Note, Anno]

[Finestra di errore "Errore di validazione" con elenco campi obbligatori mancanti: ID Struttura, Struttura responsabile, Responsabile del provvedimento, Data del provvedimento]

Se si tenterà di chiudere la finestra senza aver inserito la pubblicazione il sistema lo segnalerà e chiederà di confermare l'operazione:

[Finestra di dialogo "Attenzione" con errore di validazione e messaggio "Se si chiude la finestra la sezione di pubblicazione non verrà inserita. Confermare la chiusura?" con pulsanti F5-Conferma e F8-Annulla]

## Gestione della voce di pubblicazione

Nel momento in cui il ramo di destinazione è stato inserito è possibile gestire la voce e tutti i dati mostrati sono esattamente quelli che verranno pubblicati nel ramo stesso.

Fino a quando la pubblicazione non è stata effettuata si potranno apportare modifiche. Se la pubblicazione è stata effettuata (lo si può vedere dalle date di pubblicazione) non si potrà più modificare e comparirà in corrispondenza della riga riferita ad ogni ramo impostato per la pubblicazione un'icona a forma di mappamondo: cliccandoci sopra si verrà re-indirizzati al link di pubblicazione corrispondente.

## Gestione dei Rami Aggiuntivi

È possibile inserire la pubblicazione anche nel ramo aggiuntivo di una pubblicazione già effettuata. Per poterlo fare, cliccare sulla lente corrispondente alla riga della sezione desiderata. Si aprirà la ricerca nella sezione che permetterà di scegliere la pubblicazione.

[Schermata "Ricerca Documenti in Amministrazione Trasparente" con colonna "Sezione indice", "Voce" e "Data ultima inc."]

Una volta scelta la pubblicazione, recarsi nella tab. **Rami Aggiuntivi** e selezionare quello desiderato.

[Schermata tab "Rami aggiuntivi" con voce selezionata e date di pubblicazione]

Si riporta un esempio di due pubblicazioni:

1. Pubblicazione nella sezione principale
2. Pubblicazione nel ramo aggiuntivo di una pubblicazione già inserita

[Schermata tabella "Amministrazione Trasparente" con due righe: ID 10 - "Piano triennale per la prevenzione della corruzione e della Trasparenza" e ID 479 - "Atti delle amministrazioni aggiudicatrici e degli... » Fornitura di fornitura di libri, cd, dvd, audioliob... » Liquidazioni"]

## Gestione della voce

In questa sezione è possibile già gestire la voce di pubblicazione.

Si potranno quindi definire descrizione aggiuntiva, dati aggiuntivi, rami aggiuntivi e ulteriori allegati (si ricorda che i documenti che verranno pubblicati all'Albo Pretorio verranno riportati anche nella voce).

## Ripubblicare un atto in Trasparenza

Se si intende ripubblicare un atto o effettuare la pubblicazione in un nuovo ramo, si può accedere all'atto tramite i menu di manutenzione, rintracciare l'atto in questione, aggiungere i rami precedentemente tralasciati e cliccare sul bottone a destra **Pubblica in A.T.**

[Schermata Menu Funzioni con pulsanti: F3-Altra Ricerca, Ritorna, Principali (Pubblica, Duplica Dati, Principali), Componi Atto PDF, Altre, Pubblica in A.T.]