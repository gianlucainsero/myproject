# Conta Accessi

Nella gestione dell'amministrazione trasparente è presente una particolare funzione che consente di tenere traccia del numero di accessi riferito ad ogni sezione dell'amministrazione trasparente.

Grazie a tale funzione, tramite il punto di menu **"Gestione Sezioni"**, è possibile visualizzare il numero di accessi per ogni sezione dell'amministrazione trasparente con due modalità diverse:

## Conteggio su una Singola Sezione

1. Per operare il conteggio su una singola sezione è possibile accedere alla sezione di interesse cliccando, sulla relativa riga, l'icona a forma di **matita** o l'icona a forma di **occhio**: facendo accesso in questo modo alla singola sezione dell'amministrazione trasparente, nel pannello di destra verrà mostrato il pulsante **"Conta Accessi"** e cliccandoci sopra comparirà un piccolo pannello tramite il quale impostare l'anno di riferimento per il conteggio; una volta data **"Conferma"** verrà mostrato un ulteriore pannello riportante il conteggio degli accessi, operati sulla singola sezione per l'anno di riferimento.

[Immagine: Elenco delle sezioni dell'amministrazione trasparente con icone di modifica (matita) e visualizzazione (occhio) sulla sinistra di ogni riga. Esempi di sezioni: "Atti amministrativi generali", "Documenti di programmazione strategico-gestionale", "Statuti e leggi regionali", "Codice disciplinare e codice di condotta", "Regolamenti", "Modulistica", "Oneri informativi per cittadini e imprese", "Scadenzario obblighi amministrativi".]

[Immagine: Pannello di dettaglio sezione "Atti generali" con campo "Conteggio Accessi - Dettaglio Sezione" contenente il campo "Anno: 2025" e pulsanti "Annulla" e "Conferma".]

[Immagine: Pannello di dettaglio sezione con risultato "Conteggio Accessi" che mostra: "Numero di accessi per l'anno 2025: 114".]

## Conteggio Massivo

2. Per operare un conteggio massivo, accedendo al punto di menu **"Gestione Sezioni"**, nel pannello di destra comparirà il pulsante **"Conta Accessi"**: cliccandoci sopra il programma proporrà un piccolo pannello tramite il quale sarà possibile parametrizzare l'estrazione del conto accessi; la parametrizzazione riguarderà in particolare il **livello delle sezioni** per i quali si intende ottenere il conto degli accessi e l'**anno di riferimento**.

I livelli individuano la posizione gerarchica di una singola sezione all'interno dell'alberatura di amministrazione trasparente, laddove **"1"** rappresenta il livello apicale; dunque il pannello per la parametrizzazione dell'estrazione del conto accessi chiede di indicare quanto "profonda" debba essere l'estrazione, infatti:

- impostando un'estrazione di **livello 1** verranno considerate solo le sezioni apicali
- impostando ad esempio il **livello 5** il programma produrrà un'estrazione del conto accessi riferito alle sezioni di livello da 1 a 5

L'estrazione così impostata produrrà un **file di tipo CSV (Excel)**, che verrà scaricato sul computer dell'operatore, in modo che possa essere consultato e gestito in autonomia.

[Immagine: Elenco "Sezioni Amministrazione Trasparente" con struttura gerarchica (colonne: Liv., Ord., Sezione, Tipologia contenuto, Utente inserimento, Data ins., Utente ultima modifica, Data ultima modifica, Sezione Abilitata). A destra, pannello con pulsante "Conta Accessi" evidenziato. In sovrimpressione, finestra "Conteggio Accessi - Amministrazione Trasparente" con campi "Numero livelli: 5" e "Anno: 2025" e pulsanti "Annulla" e "Conferma".]

### Esempio di output CSV

| Sezione | Livello | ID Sezione | Cod. Sezione | Cod. Sezione Padre | Accessi |
|---------|---------|------------|--------------|--------------------|---------|
| Disposizioni generali | 1 | 50 | 50 | | 655 |
| Piano triennale per la prevenzione della corruzione e della trasparenza | 2 | 7 | 7 | 50 | 147 |
| Prevenzione della Corruzione | 3 | 194 | 194 | 7 | 0 |
| Archivio | 3 | 240 | 240 | 7 | 0 |
| Atti generali | 2 | 86 | 86 | 50 | 402 |
| Riferimenti normativi su organizzazione e attività | 3 | 90 | 90 | 86 | 106 |
| Atti amministrativi generali | 3 | 173 | 173 | 86 | 124 |
| Documenti di programmazione strategico-gestionale | 3 | 182 | 182 | 86 | 117 |
| Statuti e leggi regionali | 3 | 89 | 89 | 86 | 97 |
| Codice disciplinare e codice di condotta | 3 | 92 | 92 | 86 | 145 |
| Regolamenti | 3 | 6 | 6 | 86 | 1533 |
| Modulistica | 3 | 5 | 5 | 86 | 610 |
| Oneri informativi per cittadini e imprese | 2 | 128 | 128 | 50 | 82 |
| Scadenzario obblighi amministrativi | 3 | 93 | 93 | 128 | 86 |
| Oneri informativi per cittadini ed imprese | 3 | 39 | 39 | 128 | 81 |
| Burocrazia zero | 2 | 94 | 94 | 50 | 78 |
| Attestazioni OIV o struttura analoga | 2 | 209 | 209 | 50 | 0 |
| Organizzazione | 1 | 51 | 51 | | 839 |
| Titolari di incarichi politici, di amministrazione, di direzione o di governo | 2 | 40 | 40 | 51 | 1232 |
| Commissario Prefettizio | 3 | 120 | 120 | 40 | 0 |
| Archivio | 4 | 161 | 161 | 120 | 0 |
| Sub Commissario | 3 | 133 | 133 | 40 | 0 |
| Archivio | 4 | 162 | 162 | 133 | 0 |
| Sindaco | 3 | 41 | 41 | 40 | 1113 |
| Archivio | 4 | 163 | 163 | 41 | 140 |
| Vicesindaco | 3 | 117 | 117 | 40 | 628 |

## Visualizzazione sul Portale Pubblico

Accedendo alle varie sezioni di trasparenza dal **portale pubblico**, per ogni sezione verrà riportato il conteggio degli accessi per l'anno in corso.

[Immagine: Pagina del portale pubblico "Amministrazione Trasparente" con breadcrumb "Home > Amministrazione Trasparente > Disposizioni generali". In fondo alla sezione "Disposizioni generali" è visibile l'indicazione "Numero accessi: 654 (2025)".]