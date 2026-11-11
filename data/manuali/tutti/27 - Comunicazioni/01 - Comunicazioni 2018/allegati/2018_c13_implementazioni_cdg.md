# Comunicazione n. 13/2018 – Implementazioni C.d.G

**Oggetto:** Implementazioni C.d.G
**Scopo:** Implementazioni sulla modalità di calcolo del peso delle singole Attività sulla Realizzazione dell'obiettivo.

---

## 1. Implementazioni sulla modalità di calcolo del peso delle singole Attività sulla Realizzazione dell'obiettivo

Nella gestione **'Attività'** è stata inserita la possibilità di calcolare in modo proporzionale il peso effettivo delle singole attività sull'obiettivo rispetto al peso assegnato alla singola attività.

La % viene calcolata in proporzione ai mesi in cui l'attività è stata eseguita e ciò si applica solo se non viene indicato il flag di eseguito ed opera come segue:

| Attività | Eseguito | Mesi previsti | Mesi effettivi | Peso % attribuita | Note |
|----------|----------|---------------|----------------|-------------------|------|
| 1 | No | 1 2 3 4 5 (m. 5) | 3 – 4 – 5 (m.3) | 20 | 3/5 = 12 |
| 2 | No | 1 2 3 4 5 (m. 5) | 4 – 5 (m.2) | 20 | 2/5 = 8 |
| 3 | NO | 1 2 3 4 5 (m. 5) | 1 2 3 4 5 (m. 5) | 10 | 5/5 = 10 (Tutto) |
| 4 | NO | 1 2 3 4 5 (m. 5) | 1 2 3 4 5 6 (m. 6) | 10 | 6/5 = 10 (MAX 5/5 = 20) |
| 5 | Si | 5 6 7 8 9 (m. 5) | 8 – 9 - 10 - 11 | 40 | 40 (Sempre max, Non ricalcolato) |
| | | | | **100** | **80** |

Quando l'attività viene indicata come 'eseguita', viene attribuito sempre tutto il peso assegnato indipendentemente dai mesi in cui è stata effettuata. Se l'attività viene eseguita in un tempo maggiore, il peso ricalcolato è sempre uguale a quello assegnato.

Andando ad inserire il periodo di esecuzione delle attività, il programma ricalcolerà in modo automatico il peso sull'obiettivo in modo tale da evidenziare durante l'anno il vero stato di esecuzione.

### 1.1.1 Caso con calcolo in base ai mesi di elaborazione

[Schermata del programma: griglia "Attività" con colonne Gen-Dic, flag Eseguito, righe "Previsto" ed "Effettivo", colonne Peso e Peso Ric. Le prime due righe mostrano pesi ricalcolati a 12,00 e 8,00 rispettivamente, le successive a 10,00]

Si nota che non essendo spuntato il flag eseguito, i pesi vengono ricalcolati in base alla reale esecuzione dell'attività. Quindi nella prima riga il peso di 20, relativo a 5 mesi previsti, essendo i mesi effettivi pari a 3 si ha un peso ricalcolato sull'obiettivo di 12 pari ai 3/5. In modo analogo anche per la seconda riga, si ottiene un peso ricalcolato sull'obiettivo pari ai 2/5 del peso assegnato.

### 1.1.2 Attività eseguita con spunta

[Schermata del programma: riga "Gestione variazioni di bilancio e storni di risorse" con flag Eseguito spuntato, mesi effettivi 8-9-10-11, Peso 40,00 e Peso Ric. 40,00]

In questo caso anche se l'attività è stata eseguita per soli 4 mesi, siccome è presente la spunta **Eseguito**, il peso ricalcolato attribuito all'obiettivo è pari al peso assegnato.

Nell'esempio si può notare che al momento della realizzazione dell'obiettivo le attività non sono tutte eseguite e si ha una percentuale di esecuzione dell'**80%** dovuto dalla somma del peso ricalcolato delle attività precedentemente illustrate.

[Schermata del programma: finestra "CDSI-BUDGET Scheda Sintetica" con sezione "Obiettivo Proposto e non Approvato", grafico a torta "Distribuzione dei pesi dell'obiettivo" e indicatori "Stato Obiettivo" con valore 80,00]

Inoltre, se non si vuole riproporzionare il peso sull'obiettivo su ogni singola attività, c'è la possibilità di indicare se effettuare le riproporzioni oppure tener conto solo della spunta di attività eseguita:

[Schermata del programma: finestra "CDSI-BUDGET Dettaglio Attività" con campo "Tipo Calcolo" a select con opzioni: "Calcolo proporzionale" e "Calcolo solo se attività eseguita"]

Mettendo nella select **tipo calcolo** **'Calcolo solo se attività eseguita'**, il funzionamento rimane come prima della nuova implementazione ed il peso non viene ricalcolato.

---

## 2. Implementazioni sulla valutazione della produttività per la performance individuale

È stata implementata la possibilità di dare valutazioni ai singoli dipendenti in modo personalizzabile per ogni singolo ente. Gli elementi delle valutazioni ed il range di valutazione vanno preddisposti con il supporto del Sistemista Pal, in funzione del sistema di misurazione della performance dell'ente. In questo modo ogni ente può valutare in modo conforme alle direttive interne il proprio personale.

[Schermata del programma: "Elenco valutazioni per dipendente – Anno 2017" con colonne Dipendente, Gr/Fas/Pos, Sez, Tipologia, Punteggio, Valutazione descrittiva. Esempio: ROSSI FRANCA, Dipendente, Sez C, con voci come "Contributo del singolo alla realizzazione degli obiettivi di sviluppo e/o miglioramento", "Capacità tecnica operativa e gestionali", "Qualità della prestazione individuale", "Integrazione con il gruppo", "Flessibilità organizzativa", ciascuna con punteggio 7,00 e valutazione "buono"]

Le valutazioni possono essere **descrittive** e/o **numerica** con l'attribuzione di un punteggio. Lo scopo è quello di produrre la scheda di valutazione individuale per ogni dipendente:

[Schermata del programma: "SCHEDA DI VALUTAZIONE PERFORMANCE INDIVIDUALE – PERSONALE NON DIRIGENTE (art. 9 c.2 D.lgs. 150/2009)" con sezioni: SEZIONE A (Informazioni Valutato), SEZIONE B (Valutazione grado di raggiungimento degli obiettivi) con tabella obiettivi e pesi, SEZIONE C (Valutazione dell'apporto individuale alla performance del settore/servizio di appartenenza), SEZIONE D (Valutazione delle competenze e dei comportamenti organizzativi e professionali)]

La scheda di valutazione individuale è **parametrica** e viene personalizzata in base all'esigenza di ogni singolo ente.

---

### Rilascio Implementazioni al software

- La modifica è disponibile a partire dalla **release 7.01**.

### Rilascio implementazioni al software (titolo4)

- La modifica è disponibile a partire dalla **release 7.11** su CWOL – patch del 25.01.2023.

---

**Eventuali vincoli:** *(nessuno)*

**Eventuali criticità:** *(nessuna)*