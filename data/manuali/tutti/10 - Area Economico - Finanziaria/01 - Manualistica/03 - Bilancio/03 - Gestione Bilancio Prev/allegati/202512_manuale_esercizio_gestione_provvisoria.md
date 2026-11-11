# Esercizio-Gestione Provvisoria

## 1. Premessa

Nel caso in cui il bilancio di previsione annuale non sia approvato entro il 31 dicembre dell'anno precedente, l'Ente è gestito in **esercizio provvisorio** (nel caso in cui siano stati rinviati i termini di approvazione del bilancio di previsione, con le modalità previste dalla legge) o in **gestione provvisoria** (negli altri casi).

Il presente documento ha l'obiettivo di illustrare il funzionamento della gestione dell'esercizio provvisorio o della gestione provvisoria in caso di mancata approvazione del Bilancio di Previsione entro i termini previsti dalla legge.

## 2. Parametrizzazioni Generali

### 2.1 Parametrizzazioni Bilancio

Per la corretta gestione del bilancio di previsione sono previsti due flag:

**Percorso:** `180. Servizi economici → 90. Tabelle → 10. Configurazioni → 10. Definizione e operabilità: Parametri Generali – tab "Iter"`

- **BILANCIO PREVISIONE INSERITO** = Non è possibile modificare gli importi delle voci di bilancio e non è più possibile effettuare richieste di bilancio. L'inserimento del flag comporta l'esecuzione automatica della funzione "verifiche e quadratura" del bilancio di previsione.

- **BILANCIO PREVISIONE CONFERMATO** = L'importo assegnato sulla voce di bilancio diventa operativo. L'inserimento del flag comporta l'esecuzione automatica della funzione "verifiche e quadratura" del bilancio di previsione.

> ⚠️ **In caso di esercizio provvisorio questo flag NON deve essere messo.**

[Screenshot: Tabella personalizzazioni modulo finanziaria – tab "Iter" con flag "Bilancio previsione inserito" spuntato e "Bilancio previsione confermato" non spuntato]

### 2.2 Attivazione Controllo Dodicesimi

Il controllo può essere attivato da:

**Percorso:** `180. Servizi economici → 90. Tabelle → 10. Configurazioni → 10. Definizione e operabilità: Parametri Generali – tab "Altri parametri spese"`

[Screenshot: Tabella personalizzazioni modulo finanziaria – tab "Altri parametri spese" con campo "Controllo Dodicesimi" impostato su "Controllo attivo in gestione imp."]

Si ricorda che il controllo dei dodicesimi è attivabile soltanto per la gestione delle **uscite** (non attivabile in entrata).

Se si vuole escludere una determinata voce di bilancio dal controllo dei dodicesimi è sufficiente inserire questo flag:

[Screenshot: Schermata "Voci di Bilancio" con flag "Non soggetto a controllo dodicesimi" spuntato nella sezione "Funzioni delegate dalla regione"]

### 2.3 Data Termine Approvazione Bilancio

Nel campo indicato nello screenshot va inserita la data ultima di approvazione del Bilancio di Previsione. In caso di differimento dell'approvazione ci va inserita tale data.

**Percorso:** `180. Servizi economici → 90. Tabelle → 10. Configurazioni → 10. Definizione e operabilità: Parametri Generali – tab "Tesoreria"`

[Screenshot: Tabella personalizzazioni modulo finanziaria – tab "Tesoreria" con campo "Data termine per approvazione bilancio" impostato su 28/02/2026]

Di seguito la spiegazione di come viene utilizzata la "data termine per approvazione bilancio" (per il dettaglio si rinvia al paragrafo 3):

- **ESERCIZIO PROVVISORIO:** `01-01-N < data inserimento impegno < data termine approv.`
- **GESTIONE PROVVISORIA:** `data inserimento impegno > data termine approv`

Si ricorda inoltre che all'interno del flusso OPI sono presenti particolari tag che indicano alla Tesoreria la presenza o meno dell'esercizio/gestione provvisoria.

## 3. Modalità di Effettuazione del Controllo dei Dodicesimi

Il controllo agisce in modo distinto a seconda della tipologia di Ente:

- **ENTI TERRITORIALI** (es: Comuni, Province, Regioni): controllo applicato a livello di **MISSIONE-PROGRAMMA-TITOLO**
- **ENTI NON TERRITORIALI** (es: AdSP, Autorità Amm.ve): controllo applicato a livello di **singola voce di bilancio**

### 3.1 Gestione Enti Territoriali

Generalmente gli Enti territoriali gestiscono un bilancio di previsione triennale. Il controllo dei dodicesimi viene effettuato sull'annualità in esame dell'ultimo bilancio di previsione triennale approvato.

> ⚠️ Si ricorda che i calcoli dei dodicesimi vengono effettuati a livello di **MISSIONE-PROGRAMMA-TITOLO**.

Per verificare tale stanziamento è sufficiente accedere al programma "Voci di bilancio", ricercare per la determinata missione-programma-titolo, selezionare tutte le voci e cliccare su "Situazione voce di bilancio".

[Screenshot: Schermata "Voci di Bilancio" con finestra "Situazione voce di bilancio – Anno 2025" visualizzata, contenente colonne Importi/Previsioni, Impegni, Incassi/Pagamenti e pulsanti "Situazione voce di bilancio"]

**Esempio:**

| Parametro | Valore |
|-----------|--------|
| Annualità in corso | 2026 |
| Bilancio di previsione in corso | 2026-2028 (NON approvato) |
| Ultimo bilancio di previsione approvato | 2025-2027 |
| Data termine approvazione | 28-02-2026 |

Per i controlli dei dodicesimi viene utilizzato lo **stanziamento assestato della 2° annualità** del bilancio di previsione 2025-2027 (il 2026 presente nel triennale 2025-2027).

Di seguito la spiegazione di come viene utilizzata la "data termine per approvazione bilancio" per gli Enti territoriali:

- **ESERCIZIO PROVVISORIO:** `01-01-N < data inserimento impegno < data termine approv.` → **viene utilizzato lo stanziamento dell'esercizio N presente nell'ultimo Bilancio di previsione approvato**
- **GESTIONE PROVVISORIA:** `data inserimento impegno > data termine approv.`

### 3.2 Gestione Enti Non Territoriali

Negli Enti non territoriali che gestiscono un bilancio di previsione annuale il controllo viene effettuato sull'annualità N o N-1 in base alla data di fine autorizzazione dell'esercizio provvisorio.

> ⚠️ Si ricorda che i calcoli dei dodicesimi vengono effettuati a livello di **singola VOCE DI BILANCIO**.

Di seguito la spiegazione di come viene utilizzata la "data termine per approvazione bilancio" per gli Enti NON territoriali:

- **ESERCIZIO PROVVISORIO:** `01-01-N < data inserimento impegno < data termine approv.` → **viene utilizzato lo stanziamento dell'esercizio N**
- **GESTIONE PROVVISORIA:** `data inserimento impegno > data termine approv.` → **viene utilizzato lo stanziamento assestato dell'esercizio N-1**

## 4. Modalità di Inserimento Impegno

La gestione dell'esercizio provvisorio con conseguente calcolo dei dodicesimi è attiva per:

- Inserimento puntuale degli Impegni (*partendo dalla finanziaria..*)
- Inserimento impegni da determine/delibere (*partendo dagli atti amministrativi..*)

Dal solo inserimento puntuale è possibile utilizzare il flag **"Escluso da Controllo Dodicesimi"** che consente, per determinate spese previste per legge, di escludere il determinato impegno dalla gestione dei dodicesimi. Resta intesa la permanenza del controllo sullo stanziamento della singola voce di bilancio.

[Screenshot: Schermata "Impegni" con flag "Escluso da Controllo Dodicesimi" spuntato nella sezione "Classificazione Impegno"]

### 4.1 Focus Date su Inserimento Impegno

Per la determinazione del mese in cui ci si trova per poter applicare il calcolo dei dodicesimi viene utilizzata la **data di elaborazione contabile**.

Nell'esempio di cui sotto, trovandoci a Febbraio, il calcolo sarà il seguente:

$$(\text{stanziamento assestato} / 12) \times 2$$

[Screenshot: Finestra "Gestione parametri base" con campo "Data elaborazione" impostato su 02/02/2026]

Per individuare l'esercizio o la gestione provvisoria viene invece controllata la **data del giorno** (ovvero la data effettiva di calendario) indipendentemente dalla data elaborazione.