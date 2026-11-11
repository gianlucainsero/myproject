# Definizione Numeri Civici

**Punto di menù:** `Servizi Demografici > Modulo Base > Tabelle Generali > Viario > Numeri Civici`

In questa finestra è necessario censire i numeri civici esistenti (o esistiti) sul territorio. In alcuni programmi (come ad esempio anagrafe o tributi) sarà possibile inserire un civico solo se esiste qui. È quindi consigliabile che sia l'Ufficio Ecografico a gestire questa tabella per caricare solo i civici reali, e non dichiarazioni non corrispondenti alla realtà.

I civici si dividono in **esterni** ed **interni**. Ad ogni esterno possono corrispondere uno o più interni che sono gestibili cliccando sul pulsante **Interni** avendo un esterno selezionato.

## Finestra Numeri Civici

La finestra si presenta con i seguenti campi di ricerca:

- Toponimo
- Nome della via
- Codice via da / a
- Progressivo da / a
- Numero civico da / a
- Sottonumero da / a
- Solo civici attivi (checkbox)
- Codice Ente (combo)

[Schermata della finestra "Numeri civici" con campi di ricerca a sinistra e pulsanti operativi a destra: Nuovo, Elenca, Parametri Ricerca, Carica, Salva, Reset]

Per cercare una determinata via è possibile utilizzare i campi di ricerca elencati oppure cliccare direttamente su **→ Elenca** per vedere tutte le vie presenti in tabella.

## Aggiungere un nuovo civico

Per aggiungere un nuovo civico è sufficiente cliccare il bottone **→ Nuovo**, e si aprirà la finestra di inserimento con i campi richiesti:

[Schermata della finestra di inserimento nuovo civico con i campi: Progressivo, Codice via, Numero civico, Sottonumero (Comp.1, Comp.2, Comp.3), Tipo, Agibilità, Senza fissa dimora, Data inizio, Data fine, Cod.Immobile, Progressivo originale, Verifica. Pulsanti: Aggiungi, Altra Ricerca]

### Progressivo

Univoco, si incrementa automaticamente.

### Codice Via

La via a cui appartiene il civico.

### Numero Civico

La parte numerica del civico. (Se ad esempio abbiamo come indirizzo "Via Roma 40/C", qui scrivete **40**)

### Sottonumero

Nell'esempio "Via Roma 40/C", qui scrivete **C**.

Al momento dell'inserimento possono essere indicati fino a **3 sotto-componenti** del sottonumero che vengono poi concatenati secondo la modalità specificata nelle **Impostazioni Applicativo**.

Questi 3 campi possono essere utilizzati in vario modo a seconda dei criteri di numerazione che ha adottato l'ente, in modo da destinare ogni campo a un uso specifico.

**Esempio di utilizzo dei 3 campi che compongono il sottonumero:**

| Indirizzo | Comp.1 | Comp.2 | Comp.3 | Note |
|-----------|--------|--------|--------|------|
| Via Roma 40/C | C | | | il normale sottonumero verrà caricato nel 1° componente |
| Via Roma 111 ^2 | | ^2 | | esempio reale di Comune che ha voluto differenziare il numero attribuito ai passi carrai. Sfruttò il secondo componente per caricare i soli numeri dei passi carrai. |
| Via Cassia Km. 18.700 | | | Km. 18.700 | sfruttò il terzo componente per caricare gli altri casi. |

### Tipo

Tipologia del numero civico esterno. Fa riferimento a una tabella esterna che potete predisporre per differenziare "abitazione" da "negozio" da "scuola" ecc… cliccando l'apposita "lentina".

[Schermata della finestra "Tipo civico" con tabella contenente: Id, Descrizione tipo civico, Passo carrabile, Abitazione, Utente mod., Data mod. Esempi di tipi: Passo carrabile, Accesso Immobile, Abitazione, Magazzino, Att.Commerciale (Negozio), Laboratorio, Uffici privati, Chiosco, Stabilimento Opificio, Stazione servizio, Locale Pubblico (bar), Circolo privato, Scuola]

### Agibilità

Non obbligatoria. Indica l'agibilità (se applicabile, attraverso la scelta combo, tra **agibile**, **non agibile** e **parzialmente agibile**) dell'edificio. L'anagrafe può essere personalizzata per impedire il caricamento delle domande di residenza su edifici non agibili.

### Senza fissa dimora

Questo campo va spuntato se si tratta di un civico fittizio, per imputare i residenti senza fissa dimora. I programmi di anagrafe leggeranno l'informazione da qui.

### Data Inizio

Indica la data di assegnazione del civico.

### Data Fine

Indica la data di cessazione del civico. Ovviamente i civici attivi hanno il campo "Data Fine" vuoto.

Un civico può cessare per vari motivi, comunemente perché cambia denominazione. Se quindi "Via Roma 40/C" diventa "Via Roma 66" nell'ambito di una rinumerazione, occorre caricare la data della delibera di modifica, come data di fine per "Via Roma 40/C" e data di inizio per "Via Roma 66".

> **NB:** Possono esistere più civici esterni con stessa via, numero e sottonumero, purché solo uno risulti non cessato e non vi siano sovrapposizioni tra date inizio e fine.

### Cod.Immobile

Campo a disposizione per imputare manualmente il codice identificativo utilizzato dall'archivio **SIT** per identificare l'immobile.

### Progressivo Originale

I civici che non hanno cambiato denominazione, hanno questo campo = al "progressivo". Prendiamo come esempio "Via Roma 40/C" e "Via Roma 66" hanno ovviamente due progressivi diversi. Supponiamo che il primo "Via Roma 40/C" sia progressivo=1200, mentre il progressivo di "Via Roma 66" sia 8700. Nel campo "Progressivo originale" occorre mettere su tutte le denominazioni del civico nel tempo, lo stesso codice: **1200** nell'esempio:

| Progressivo | Indirizzo | Data Inizio | Data Fine | Progressivo Originale |
|-------------|-----------|-------------|-----------|----------------------|
| 1200 | Via Roma 40/C | 01/01/1900 | 31/03/2009 | 1200 |
| 8700 | Via Roma 66 | 01/04/2009 | | 1200 |

### Verifica

Spesso il viario è il risultato di conversioni di archivi precedenti, caricati sulla base di dichiarazioni dei cittadini e altre fonti senza una vera e propria verifica. In questa logica, se il comune decide di controllare (anche solo parte di una via), questa parte può essere utile per spuntare il "verificato" in modo da ricordarsi che si tratta di un civico riscontrato nella realtà, e magari indicare la data della verifica. (Una volta messo il flag al campo anche la data sarà editabile)

[Schermata del campo "Verifica" con checkbox "Verificato" e campo data "In data"]

## Aggiungere un interno al civico

1. Selezioniamo con un click la via associata al numero civico 45 → **Interni**

[Schermata della tabella dei civici con il pulsante "Interni" evidenziato nella colonna di destra]

2. Si aprirà la finestra dei 'numeri civici interni' → **Nuovo**

[Schermata della finestra "Numeri civici interni" con tabella vuota e pulsante Nuovo evidenziato]

3. Inserire il numero o la lettera dell'interno scegliendolo tramite la "lentina" (se non presente in tabella aggiungerlo sempre con il bottone **Nuovo**, sarà necessario inserire semplicemente il valore, quindi lettera o numero) e il **Tipo di civico** → **Aggiungi**

[Schermata della finestra di inserimento interno con campi: Progressivo n.civico, Scala, Interno (con lente), Piano, Tipo (con lente), Agibilità, Cod.Immobile, Data inizio, Data fine, Verifica. Pulsante Aggiungi evidenziato]

4. Una volta eseguite queste operazioni, aggiornando la tabella dei civici, in quel civico sarà presente una **spunta** che indica che il civico presenta degli interni.

[Schermata della tabella dei civici aggiornata con una spunta verde nella colonna "Interni" per il civico modificato]

## Rinumerazione Civica o problemi di numerazione

Abbiamo descritto in **Rinumerazione Civica** le modalità per modificare 111 visualizzazioni.