# Creazione e modifica di un documento base

## Ricercare un documento base

Accedere alla funzione **[40. Fascicoli Elettronici - 10. Archivi - 160. Documenti Base]**.

Per ricercare un documento base specifico è possibile valorizzare uno o più campi dei campi presenti (Fig. 1):

- Codice
- Descrizione
- Interno/Esterno
- Tipo
- Funzione
- Bozza

[Fig. 1: Maschera per la ricerca di un documento base – mostra i campi di ricerca (Codice, Descrizione, Interno/Esterno, Tipo, Funzione, Bozza) e i pulsanti F2-Nuovo, F4-Elenca, Import]

Per avviare la ricerca cliccare il bottone **[Elenca]** (Fig. 1), se non si valorizza nessun campo cliccando il bottone **[Elenca]** vengono elencati tutti i documenti base presenti (Fig. 2).

[Fig. 2: Elenco dei documenti base estratti – mostra una tabella con colonne Classe, Funzione, Codice, N. Revisione, Data Revisione, Descrizione, Tipo, Data Deploy, Bozza e i pulsanti F2-Nuovo, F3-Altra Ricerca, Export]

## Importare un documento base

È possibile importare un documento base in formato `.xml` e compresso in un file `.zip`. Per procedere cliccare il bottone **[Import]** (Fig. 1) e se i file vengono riconosciuti correttamente viene visualizzato un elenco dei documenti base importabili contenuti nel file `.zip`. Selezionare uno o più documenti base cliccando sul flag della prima colonna, per terminare l'inserimento cliccare il bottone **[Conferma]**.

## Esportare massivamente i documenti base

È possibile esportare tutti i documenti base, compressi in un file con formato `.zip`. Per procedere cliccare il bottone **[Export]** (Fig. 2), verrà scaricato nella cartella predefinita del browser (solitamente "Download") il file `.zip`.

## Creare un documento base

Prima di procedere ad aggiungere un documento base si consiglia sempre di verificare, tramite la ricerca, che non sia già presente.

Per creare un nuovo documento base cliccare il bottone **[Nuovo]** (Fig. 1), se invece si preferisce partire da un documento base già esistente cliccare il bottone **[Copia Da]**, vengono elencati tutti i documenti base presenti, per selezionarne uno fare doppio click con il bottone sinistro del mouse sopra alla riga desiderata.

Valorizzare i seguenti campi (Fig. 3):

- **Codice**: Inserire un codice alfanumerico che non sia già stato utilizzato, utilizzare testo in maiuscolo ed evitare l'utilizzo di caratteri accentati o speciali, al posto dello spazio utilizzare l'underscore `_` (es. Richiesta integrazioni → `RICH_INT`)
- **Descrizione**: Inserire il nome da dare al documento base
- **Classificazione**: Selezionare il tipo di classificazione da assegnare al testo
- **Tipo**: Selezionare **"DOCX"**

[Fig. 3: Maschera per l'inserimento di un documento base – mostra i campi Codice, Descrizione, Classificazione, Revisione, Data Revisione, Bozza, Data Scadenza, Tipo, Funzione e i pulsanti F5-Aggiungi, Copia da, F3-Altra Ricerca]

Cliccare il bottone **[Aggiungi]** (Fig. 3) per confermare l'inserimento, vengono visualizzati dei nuovi bottoni (Fig. 4) sulla colonna di destra cliccare il bottone **[Apri / Visualizza]**.

[Fig. 4: Maschera per la modifica dei documenti base – mostra i tab Dati, Testo, Intestazione Pagina, Intestazione e Piè Pagina, Dati Aggiuntivi e i pulsanti F6-Aggiorna, Apri / Visualizza, Sostituisci, F7-Cancella, F3-Altra Ricerca, F9-Torna Elenco, Versioni Precedenti, Export]

## OnlyOffice

Il testo viene aperto con **"OnlyOffice"** (Fig. 5), una suite per ufficio online sicura e altamente compatibile con i formati MS Office, tra cui appunto i DOCX, che permette di creare e personalizzare il testo.

[Fig. 5: OnlyOffice – mostra l'interfaccia dell'editor di testo online con barra dei menu (File, Home, Inserisci, Layout di Pagina, Riferimenti, Collaborazione, Plugin) e barra di formattazione]

## Il dizionario e le variabili

Una volta aperto il testo che si intende modificare tramite l'editor di testo "OnlyOffice" cliccare, nella barra del menù in alto, la voce **"Plugin"** o **"Componenti"** (Fig. 6) e successivamente il bottone **[Dizionario]** che permette l'inserimento delle variabili.

[Fig. 6: Barra del menù di OnlyOffice – mostra la barra dei plugin con icone per Macro, Dizionario, Highlight, Mandelley, OCR, Photo, Speech, Thesaurus, Translator, YouTube, Zoho]

Cliccando il bottone **[Dizionario]** il sistema visualizza un pannello (Fig. 7) tramite il quale è possibile ricercare e selezionare la variabile che si intende inserire nel testo. È possibile anche filtrare i dati presenti in ciascuna delle tre colonne semplicemente digitando la chiave di ricerca nell'intestazione della colonna desiderata. Per navigare all'interno delle varie categorie è possibile utilizzare i bottoni **[>]** e **[<]** posizionati nella prima colonna.

Una volta individuata la variabile che si intende inserire nel testo, basta selezionarla con un click per caricarla nel punto in cui il cursore è posizionato ma è possibile trattarla come una qualsiasi altra parte del testo; è dunque possibile tagliarla, copiarla ed incollarla in altri punti del testo o formattarla col carattere, la dimensione ed ogni altra caratteristica specifica (grassetto, corsivo, ecc.).

[Fig. 7: Dizionario delle variabili – mostra un pannello con tre colonne (Codice, Variabile, Descrizione) e categorie come PRABASE, PRARICHIESTA, PRAPASSO, PRATIP, PRAAGGIUNTI, PRASOGGETTI, PRAANAVAR, PRAPRATICAB, RICHESTA_ALLEG, RICHESTA_ALLE, PASCO_ALLE, FASCICOLO_SOCI, FASCICOLO_SOGGETTO, PASCO_DESTINATARI]

Le variabili sono delle stringhe di testo standardizzate e per lo più predefinite, attraverso le quali il sistema completa il documento base selezionato sostituendole automaticamente con i corrispettivi dati, questi ultimi vengono presi direttamente dal sistema, dai fascicoli elettronici, ecc.

La variabile è composta da una stringa alfanumerica (solitamente `nometabella.nomecampo` o in alternativa `nometabella.specifica.nomecampo`) preceduta dal simbolo `$` e racchiusa prima tra parentesi graffe `{ }` e poi tra chiocciole `@ @`, ad esempio la variabile da utilizzare per l'oggetto del fascicolo elettronico è:

```
@{$PRABASE.GESOGG}@
```

La sostituzione delle variabili con i relativi dati corrispondenti avviene nel momento in cui, dopo aver inserito tra gli allegati di un passo il documento base desiderato, si clicca il bottone con l'ingranaggio per visualizzarne l'anteprima o lo si trasforma in PDF.

### Esempio di utilizzo delle variabili in un testo base

Ipotizzando di voler inserire in un testo i dati di varie figure (es. Esibente, Tecnico, ecc.), le variabili evitano il lavoro manuale di dover ricercare ed inserire ogni volta tutti i dati necessari (es. "Cognome", "Nome", "Codice Fiscale", ecc.), utilizzando le variabili infatti si va a strutturare una sola volta il documento base che potrà essere riutilizzato per qualsiasi fascicolo elettronico svolgendo il lavoro sopra citato in automatico.

Nell'esempio sopra citato è possibile infatti strutturare un documento base tipo:

```
Il sottoscritto @{$PRASOGGETTI.SOGGETTO0001.DESNOM}@, C.F.
@{$PRASOGGETTI.SOGGETTO0001.DESFIS}@, nato il
@{$PRASOGGETTI.SOGGETTO0001.DESNASDAT}@ a
@{$PRASOGGETTI.SOGGETTO0001.DESNASCIT}@ prov.
(@{$PRASOGGETTI.SOGGETTO0001.DESNASPROV}@) e residente all'indirizzo
@{$PRASOGGETTI.SOGGETTO0001.DESIND}@ n. @{$PRASOGGETTI.SOGGETTO0001.DESCIV}@ nel
comune di @{$PRASOGGETTI.SOGGETTO0001.DESCIT}@ prov.
(@{$PRASOGGETTI.SOGGETTO0001.DESPRO}@)

INCARICA / AFFIDA

l'architetto @{$PRASOGGETTI.SOGGETTO0007.DESNOM}@ con studio tecnico in
@{$PRASOGGETTI.SOGGETTO0007.DESCIT}@ prov.
(@{$PRASOGGETTI.SOGGETTO0007.DESPRO}@), all'indirizzo
@{$PRASOGGETTI.SOGGETTO0007.DESIND}@ n. @{$PRASOGGETTI.SOGGETTO0007.DESCIV}@, ecc.
```

Utilizzando questo testo in un passo, al momento della visualizzazione dell'anteprima o della generazione del PDF le variabili vengono sostituite dal relativo testo, generando ad esempio:

> Il sottoscritto **Rossi Mario**, C.F. **RSSMRA12A34B567C**, nato il **01/01/1950** a **Roma** prov. **RM** e residente all'indirizzo **Piazza Giacomo Leopardi** n. **1** nel comune di **Milano** prov. **(MI)**
>
> INCARICA / AFFIDA
>
> l'architetto **Bianchi Luigi** con studio tecnico in **Torino** prov. **(TO)**, all'indirizzo **Corso Giuseppe Mazzini** n. **2**, ecc.

Nel documento base originale è possibile notare la presenza di variabili molto simili ma che fanno riferimento a dati diversi, ad esempio tra le variabili `@{$PRASOGGETTI.SOGGETTO0001.DESNOM}@` e `@{$PRASOGGETTI.SOGGETTO0007.DESNOM}@` la differenza è nel numero centrale dove **0001** identifica l'**esibente** e **00007** il **tecnico professionista**.

### Variabili personalizzate

Se si desidera è possibile creare una variabile personalizzata, presenti nel dizionario sotto la voce **"PRAANAVAR - Tabella Gestione Variabili"** (Fig. 7) tramite la seguente guida *[Creazione e modifica di una variabile personalizzata]*.

> ⚠️ **ATTENZIONE**: La variabile PRAANAVAR deve **SEMPRE** essere posizionata all'inizio della riga, non deve contenere testo né prima né dopo. Deve essere quindi preceduta e seguita da un "a capo" (es.
>
> ```
> Dati catastali:
> @{$PRAANAVAR.IMMOBILIPRATICA}@
> Indirizzo dell'immobile: Via… )
> ```

## Sostituzione di un documento base

È possibile sostituire un documento base con un file `.docx` presente nel proprio computer. Ricercare il documento base desiderato tramite la ricerca (Fig. 1), accedere al dettaglio del testo base tramite il doppio click con il tasto sinistro del mouse sulla riga desiderata e cliccare il bottone **[Sostituisci]** (Fig. 4). Nella finestra per la selezione del file cliccare il bottone con il **floppy disk** 💾, selezionare il file `.docx` da caricare e confermare cliccando il bottone **[Apri]**, un messaggio nuova lista elenca tutte le versioni presenti per il testo base selezionato (Fig. 8), tramite il doppio click con il tasto sinistro del mouse sulla riga desiderata è possibile selezionare un'altra versione del file, il messaggio *"File caricato correttamente."* confermerà l'avvenuta sostituzione.

## Ripristino di una versione precedente (XHTML)

Quando si modifica un documento base, in formato XHTML, si crea uno storico delle versioni, questo permette ad esempio di poter recuperare una versione più vecchia che magari era stata modificata per errore. Per procedere ricercare il documento base desiderato tramite la ricerca (Fig. 1), accedere al dettaglio del testo base tramite il doppio click con il tasto sinistro del mouse sulla riga desiderata e cliccare il bottone **[Versioni Precedenti]** (Fig. 4). Una nuova lista elenca tutte le versioni presenti per il testo base selezionato (Fig. 8), tramite il doppio click con il tasto sinistro del mouse sulla riga desiderata è possibile selezionare un'altra versione del file, il messaggio *"È stato caricato il testo della versione 1. Prestare attenzione.."* confermerà l'avvenuta selezione.

[Fig. 8: Elenco delle versioni precedenti – mostra una finestra "Risultato Ricerca" con tabella "Elenco Versioni" contenente colonne Data Rev., Num., Codice, Descrizione, Tipo e tre versioni DOCX]

È possibile cliccare sulla tab **"Testo"** per apportare le modifiche desiderate, finché non si provvederà a salvare la nuova versione del testo, cliccando il bottone **[Aggiorna]**, al di sotto del campo **"Descrizione"** viene visualizzata in rosso **"TESTO IN USO: VERSIONE N. …"** (Fig. 9) con indicato il numero della versione selezionata.

[Fig. 9: Esempio di selezione di una versione precedente – mostra la maschera di modifica con indicazione in rosso "TESTO IN USO: VERSIONE N. 1" sotto il campo Descrizione]

## Esportare singolarmente un documento base

È possibile esportare anche singolarmente un documento base, per procedere ricercare il documento base desiderato tramite la ricerca (Fig. 1), accedere al dettaglio del testo base tramite il doppio click con il tasto sinistro del mouse sulla riga desiderata e cliccare il bottone **[Export]** (Fig. 4). Viene scaricato nella cartella predefinita del browser (solitamente "Download") il file `.zip` contenente il documento base desiderato in formato `.xml`.

## Eliminare un documento base

È possibile eliminare un documento base, in due modi:

- Ricercare il documento base desiderato tramite la ricerca (Fig. 1), cliccare sopra alla riga del testo base desiderato e cliccare il bottone con il **cestino** 🗑️, nel messaggio di conferma che viene visualizzato cliccare il bottone **[Conferma]**
- Ricercare il documento base desiderato tramite la ricerca (Fig. 1), accedere al dettaglio tramite doppio click con il tasto sinistro del mouse sulla riga desiderata e cliccare il bottone **[Cancella]** (Fig. 4), nel messaggio di conferma che viene visualizzato cliccare il bottone **[Conferma]**