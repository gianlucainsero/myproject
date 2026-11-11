# Accesso Unitario - Decodifica dati XML

## Decodifica dati XML

Questa funzione serve a codificare all'interno della tab **[Dati aggiuntivi]** tutte le informazioni che se pur presenti nel modello SUAP e contenuti nel file XML, non venivano acquisite. Una volta *mappati* i dati aggiuntivi potranno essere sfruttati per ottenere report, effettuare controlli mirati o riprodurre in stampa nei testi.

La codifica va fatta tramite la funzione **[40. Fascicoli Elettronici - 70. Utilità - Decodifica dati XML]**

Entrare nella funzione e cliccare il bottone **[Nuovo]** (Fig. 1). Valorizzare i 3 campi editabili (Sezione; Nome dato; Descrizione) e cliccare il bottone **[Aggiungi]** per salvare le modifiche; il risultato si aggiorna e la lista (Fig. 2) elenca di volta in volta i dati messi in gestione.

[Fig. 1: Maschera per inserire un nuovo dato aggiuntivo da codificare — Mostra i campi: Tipo (Accesso Unitario Emilia Romagna), Dato aggiuntivo, Sezione, Nome dato*, Descrizione* e i pulsanti Aggiungi, Altra Ricerca, Elabora dati richieste acquisite]

[Fig. 2: Lista con i dati aggiuntivi da codificare — Tabella con colonne: Provenienza, Campo aggiuntivo, Sezione, Nome, Descrizione, Ultima mod., Data mod. Esempi di righe: "Accesso Unitario / 00000000__di002 / 00000000 / di002 / Superficie (alimentare) di vendita mq / ITALSOFT / 12:38:20 - 05/12/2022"]

Il significato dei 3 campi da editare (Fig. 1) è il seguente:

- **Sezione:** Occorre prendere il valore del tag `<href>` che segue il titolo della maschera (Fig. 3)

[Fig. 3: Esempio di un file XML — Struttura XML con tag: `<DichiarazioneDinamica>`, `<titolo>Dichiarazione relativa al settore merceologico</titolo>`, `<href>H0100000</href>`, `<campoHref>`, `<nome>di002</nome>`, `<contatore>1</contatore>`, `<descrizione>non alimentare</descrizione>`, `<riga>111</riga>`, `<posizione>1</posizione>`, `<molteplicita>0</molteplicita>`, `<tipo>N</tipo>`, `<controllo>T</controllo>`, `<valore>2</valore>`, `<valoreUtente>2</valoreUtente>`, `<lunghezza>10</lunghezza>`, `<edit>S</edit>`, `<CampoXmlMod/>`]

- **Nome dato:** Il tag da leggere è `<nome>`
- **Descrizione:** Il tag usato dal sistema per mostrare il dato nel pdf è `<descrizione>` (Fig. 3).

## Individuare i dati aggiuntivi da codificare

I modelli SUAP firmati sono divisi in sezioni, il titolo (nell'esempio di Fig. 4 "DICHIARAZIONE DEL SETTORE DI ATTIVITA' DELL'AZIENDA SUBENTRANTE") può essere ricercato nel file PDF utilizzando il comando da tastiera **CTRL+F**; si suggerisce di usare la stringa (Fig. 4 evidenziata nel riquadro blu) che nel file xml corrisponde al tag `<descrizione>`, è possibile ricercarla come specificato sopra.

Consultando il file xml è possibile anche individuare gli altri tag che interessano la codifica ad esempio il nome e la sezione (href).

[Fig. 4: Esempio di una porzione di file pdf di una pratica SUAP — Mostra la sezione "DICHIARAZIONE DEL SETTORE DI ATTIVITÀ DELL'AZIENDA SUBENTRANTE" con checkbox: "alimentare []", "non alimentare [X]" (evidenziato in blu), "alimentare con somministrazione di alimenti e bevande []"]

**Per individuare i dati aggiuntivi da codificare è sufficiente copiare le descrizioni comprese nei tag illustrati e successivamente incollarle nei rispettivi campi:**

- **Sezione**
- **Nome dato**
- **Descrizione:** Questa merita una precisazione, in quanto come si vede dall'esempio (Fig. 2) la descrizione usata è un mix *"Settore attività: non alimentare"* tra il titolo della sezione (Fig. 4) e il campo descrizione stessa (Fig. 3 e fig. 4); si consiglia di codificare la descrizione in maniera che sia oggettivamente utile, senza il rischio di creare dubbi o interpretazioni a chi utilizza tali informazioni.

## Elabora dati richieste acquisite

Il comando **[Elabora dati richieste acquisite]** (Fig. 1 e fig. 2) consente di verificare se i dati aggiuntivi, che sono stati codificati sono già presenti nelle pratiche SUAP (nel file xml), in questo modo vengono valorizzati con la descrizione scelta come ogni altro dato aggiuntivo codificato in modo predefinito dal gestionale, per poi essere utilizzato nel modo più opportuno.

## Dati aggiuntivi nei Fascicoli

Il risultato dell'elaborazione descritta al precedente punto 1.2, mostra nella tab **[Dati Aggiuntivi]** il nuovo campo codificato con la descrizione scelta.

[Fig. 5: tab "Dati Aggiuntivi" — Tabella con colonne: Provenienza, Descrizione. Esempi di righe: "Pratica / DICHIARANTE_RESIDENZAVIA / MONTEROTONDO 16", "Pratica / IMPRESA_COGNOME_NOME / SABA DI SABA NISAR", "Pratica / IMPRESA_CODICEFISCALE_CRI / NSR5BA89C67Z236M", "Pratica / Settore attività: non alimentare / Sì" (evidenziato in giallo)]

## Dati aggiuntivi nei report e stampe

Il codice di ogni dato aggiuntivo codificato, da usare sia nei report che nelle stampe, è il campo **[Dato aggiuntivo]** e non modificabile (Fig. 1 in giallo) rappresenta l'unione di **Sezione** e **Nome dato** con 3 underscore (`___`) per la concatenazione.