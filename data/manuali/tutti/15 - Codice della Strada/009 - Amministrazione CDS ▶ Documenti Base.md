# Amministrazione CDS ▶ Documenti Base

## Introduzione

Dai **tre puntini** e seguendo il percorso:

▶ **Codice della Strada** ▶ **Amministrazione CDS** ▶ *Documenti Base*

[Schermata del menu di navigazione con il percorso: 30. Polizia Locale → 10. Codice della Strada → 140. Amministrazione CDS → 20. Documenti Base]

Seguendo il percorso sopra indicato ci ritroveremo in una schermata iniziale da cui potremmo impostare eventuali filtri, attraverso i campi appositi, per scremare il risultato della ricerca all'interno dell'elenco con tutti i documenti creati. Possiamo ricercare un documento attraverso il **Codice** o per una parte della **Descrizione**.

- Con **[Nuovo]** potremmo inserire un nuovo documento
- Con **[Elenca]** potremmo navigare all'interno di una sorta di archivio con **tutti** i documenti creati (ci saranno anche le intestazioni che abbiamo creato in **Modelli Pagina**!)

[Schermata di ricerca con campi: Codice, Descrizione, Interno/Esterno, Tipo, Funzione, Bozza. Pulsanti: F2-Nuovo, F4-Elenca, Import. Nota: "Questi campi permettono di filtrare la ricerca all'interno dell'elenco di documenti per una prima scrematura, ma potremmo sempre importarne dopo essere entrati nell'elenco con 'Elenca'"]

Da qui possiamo:

- **Tornare indietro** con **[Altra Ricerca]** (NOTA: se stiamo creando un nuovo Documento e torniamo indietro senza prima salvare gli interventi con **[Aggiorna]**, tutto quello che abbiamo inserito saranno persi!)
- **Visualizzare** un testo già esistente ed eventualmente modificarlo, salvando poi l'intervento con **[Aggiorna]**
- **Creare** un nuovo testo con **[Nuovo]**, il quale ci aprirà il template vuoto per poter inserire un nuovo documento

[Schermata dell'elenco documenti con colonne: Classe, Funzione, Codice, N. Revisione, Data Revisione, Descrizione, Tipo, Data Deploy, Bozza. Pulsanti: F2-Nuovo, F3-Altra Ricerca, Export]

Con il Comando **[→ Export]** potremmo esportare tutti i documenti presenti in elenco in una cartella zip (se sono stati impostati filtri prima di entrare nell'elenco, verranno esportati i documenti che rispettano i filtri di ricerca).

[Schermata con notifica "Documenti esportati: 37" e file zip scaricato (es. "docs-1743434651.zip")]

---

## Come Creare un Nuovo Documento

Con **[Nuovo]** potremmo creare un nuovo documento. Il programma ci aprirà in automatico un template da compilare.

Impostiamo un **Nome** per identificare il documento nel campo Nome e una **Descrizione** che riassuma la funzione del documento.

### Sottoscheda "Dati"

Se stiamo creando un documento inerente al CDS, imposteremo:

- **Classificazione:** Codice della Strada
- **Tipo:** XHTML
- **Funzione:** scegliere la categoria in base alla funzione del documento che si sta creando, aprendo il menù a tendina attraverso il **[v]**. Di solito, se è una lettera generica impostiamo la funzione **STAMPE VARIE**

Le opzioni disponibili nel menu a tendina "Funzione" sono:

- SOLLECITI PAGAMENTO
- STAMPE VERBALI
- SANZIONI ACCESSORIE
- ULTIMI AVVISI
- DIFFIDA LEGALE
- STAMPE VARIE

Una volta che abbiamo impostato queste prime informazioni, possiamo confermare l'inserimento del documento con **[Aggiungi]** per poter cominciare a personalizzarlo.

[Schermata sottoscheda "Dati" con campi: Codice, Descrizione, Classificazione (Codice della Strada), Revisione, Data Revisione, Bozza, Data Scadenza, Tipo (XHTML), Funzione (menu a tendina)]

### Sottoscheda "Imposta Pagina"

Spostandoci nella sottoscheda **"Imposta Pagina"**, potremmo definire:

- L'**orientamento** del documento (Verticale / Orizzontale)
- Il **formato** (il formato standard di una pagina è l'**A4**)
- Eventuali **margini** (Superiore, Sinistro, Inferiore, Destro, Intestazione, Piè Pagina — tutti in mm)

[Schermata sottoscheda "Imposta Pagina" con opzioni: Verticale/Orizzontale, Formato A4, Margini in mm]

### Sottoscheda "Intestazione e Piè di Pagina"

Nella sottoscheda **"Intestazione e Piè di Pagina"** potremmo impostare un'intestazione che abbiamo configurato in **Modelli Pagina** per poterlo utilizzare in questo modello oppure con **PERSONALIZZATA** potremmo impostarne una esclusiva solo per questo documento.

Le opzioni disponibili nel menu a tendina "Modello Documento" includono:

- Personalizzato
- Città e responsabile
- Modello Verbale CDS
- Intestazione Stampe CDS
- MODELLO SUAP SOLO PIE' DI PAGINA
- Modello Suap con Indirizzo
- Modello suap indirizzo+comune
- Modello CDS senza Intestazione
- Modello Verbale CDR
- Intestazione Stampe CDR

Nell'esempio lo lasceremo bianco perché andremo ad impostarlo direttamente nella sottoscheda "Testo".

[Schermata sottoscheda "Intestazione e Piè di Pagina" con menu a tendina "Modello Documento" e campi per Famiglia font, Interlinea, e area di testo per Intestazione e Piè di Pagina]

### Sottoscheda "Testo"

Nella sottoscheda **"Testo"** andremo a scrivere il contenuto del documento.

> ⚠️ **Ricordiamo che il dizionario dei Documenti Vari è diverso da quello dei modelli usati per le violazioni al Codice della Strada**

[Schermata editor di testo con barra degli strumenti: Famiglia font, Dimensioni, B/I/U/S, allineamento, interlinea, e pulsanti per: inserire tabella, interruzione di pagina, collegamenti/immagini/variabili]

**Strumenti disponibili nell'editor:**

- **Inserire una tabella** — utile per impostare il testo all'interno della pagina
- **Inserire un'interruzione di pagina** — il documento può avere più di una facciata
- **Inserire collegamenti, immagini o una variabile**

---

## Altre Informazioni Utili

- Ogni tipo di modifica apportata ad un documento, per essere sovrascritto sopra quello vecchio, deve essere confermato con il comando **[Aggiorna]**