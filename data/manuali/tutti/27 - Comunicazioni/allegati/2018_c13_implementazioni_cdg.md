# Comunicazione n. 13/2018 – Implementazioni C.d.G.

**Data:** 02/11/2018

---

## 1.0 Implementazioni sulla modalità di calcolo del peso delle singole Attività sulla Realizzazione dell'obiettivo

Nella gestione **'Attività'** è stata inserita la possibilità di calcolare in modo proporzionale il peso effettivo delle singole attività sull'obiettivo rispetto al peso assegnato alla singola attività.

La % viene calcolata in proporzione ai mesi in cui l'attività è stata eseguita e ciò si applica **solo se non viene indicato il flag di eseguito** ed opera come segue:

| Attività | Eseguito | Mesi previsti | Mesi effettivi | Peso % attribuita | Note |
|----------|----------|---------------|----------------|-------------------|------|
| 1 | No | 1 2 3 4 5 (m. 5) | 3 – 4 – 5 (m. 3) | 20 | 3/5 = 12 |
| 2 | No | 1 2 3 4 5 (m. 5) | 4 – 5 (m. 2) | 20 | 2/5 = 8 |
| 3 | NO | 1 2 3 4 5 (m. 5) | 1 2 3 4 5 (m. 5) | 10 | 5/5 = 10 → Tutto |
| 4 | NO | 1 2 3 4 5 (m. 5) | 1 2 3 4 5 6 (m. 6) | 10 | 6/5 = 10 → MAX 5/5 = 20 |
| 5 | Si | 5 6 7 8 9 (m. 5) | 8 – 9 – 10 – 11 | 40 | Sempre max. Non ricalcolato |
| | | | **Totale** | **100** | **80** |

Quando l'attività viene indicata come **'eseguita'**, viene attribuito sempre tutto il peso assegnato indipendentemente dai mesi in cui è stata effettuata. Se l'attività viene eseguita in un tempo maggiore, il peso ricalcolato è sempre uguale a quello assegnato.

Andando ad inserire il periodo di esecuzione delle attività, il programma ricalcolerà in modo automatico il peso sull'obiettivo in modo tale da evidenziare durante l'anno il vero stato di esecuzione.

### 1) Caso con calcolo in base ai mesi di elaborazione

[Schermata del programma: griglia "Attività" con colonne Previsto/Effettivo per ogni mese (Gen–Dic), colonne "Peso" e "Peso Ric." a destra. Le celle mensili sono colorate in verde/giallo per indicare l'esecuzione. Flag "Eseguito" non spuntato. Pesi ricalcolati: 12,00 / 8,00 / 10,00 / 10,00]

Si nota che non essendo spuntato il flag **eseguito** i pesi vengono ricalcolati in base alla reale esecuzione dell'attività. Quindi nella prima riga il peso di 20, relativo a 5 mesi previsti, essendo i mesi effettivi pari a 3 si ha un peso ricalcolato sull'obiettivo di **12** pari ai 3/5. In modo analogo anche per la seconda riga, si ottiene un peso ricalcolato sull'obiettivo pari ai **2/5** del peso assegnato.

### 2) Attività eseguita con spunta

[Schermata del programma: riga attività "Gestione variazioni di bilancio e storni di risorse" con flag "Eseguito" spuntato (checkmark verde), mesi effettivi 8–9–10–11, Peso: 40,00, Peso Ric.: 40,00]

In questo caso anche se l'attività è stata eseguita per soli 4 mesi, siccome è presente la spunta **Eseguito**, il peso ricalcolato attribuito all'obiettivo è pari al peso assegnato.

Nell'esempio si può notare che al momento della realizzazione dell'obiettivo le attività non sono tutte eseguite e si ha una **percentuale di esecuzione dell'80%** dovuto dalla somma del peso ricalcolato delle attività precedentemente illustrate.

[Schermata: finestra "Obiettivo Programmato e non Apprezzato" con grafico a torta "Distribuzione dei pesi dell'obiettivo", indicatori a quadrante per "Esecuzione", "E. Esec. Obiettivo", "E. Esec. Attività" e "E. Esec. Attività" con valore 80,00]

### Opzione di calcolo del peso

Se non si vuole riproporzionare il peso sull'obiettivo su ogni singola attività, c'è la possibilità di indicare se effettuare le riproporzioni oppure tener conto solo della spunta di attività eseguita:

[Schermata: finestra "CITY-BUDGET Dettaglio Attività" con campo "Tipo Calcolo" a tendina con opzioni: "Calcolo proporzionale" e "Calcolo solo se attività eseguita"]

Mettendo nella select **Tipo Calcolo** → **'Calcolo solo se attività eseguita'**, il funzionamento rimane come prima della nuova implementazione ed il peso non viene ricalcolato.

---

## 2.0 Implementazioni sulla valutazione della produttività per la performance individuale

È stata implementata la possibilità di dare valutazioni ai singoli dipendenti in modo **personalizzabile per ogni singolo ente**. Gli elementi delle valutazioni ed il range di valutazione vanno pre-disposti con il supporto del Sistemista PAL, in funzione del sistema di misurazione della performance dell'ente. In questo modo ogni ente può valutare in modo conforme alle direttive interne il proprio personale.

[Schermata: "Elenco valutazioni per dipendente. Anno 2017" – tabella con colonne: Dipendente, Liv./Pos. Resp., Sez., Tipologia, Punteggio, Valutazione descrittiva. Esempio: ROSSI FRANCA, Dirigente 0,00, C – Contributo del singolo alla realizzazione degli obiettivi di sviluppo e/o miglioramento, Punteggio 7,00, Valutazione "buono". Sezioni: SEZIONE B – VALUTAZIONE GRADI DI RAGGIUNGIMENTO DEGLI OBIETTIVI; SEZIONE C – VALUTAZIONE DEL RAPPORTO INDIVIDUALE ALLA PERFORMANCE DEL...; SEZIONE D – VALUTAZIONE DELLE COMPETENZE E DEI COMPORTAMENTI]

Le valutazioni possono essere **descrittive** e/o **numerica** con l'attribuzione di un punteggio. Lo scopo è quello di produrre la **scheda di valutazione individuale** per ogni dipendente:

[Schermata: "SCHEDA DI VALUTAZIONE PERFORMANCE INDIVIDUALE – PERSONALE NON DIRIGENTE (art. 5 c.2 D.Lgs. 150/2009)" – documento strutturato con: SEZIONE A – IDENTIFICAZIONE VALUTATO (Cognome e Nome, Mese, Posizione Organizzativa, Settore, Dirigente, Responsabile); SEZIONE B – VALUTAZIONE GRADO DI RAGGIUNGIMENTO OBIETTIVI (tabella con N. Ord., Codice Ob., Descrizione Obiettivo, Valutazione, Punteggio, Punteggio ponderato); SEZIONE C – VALUTAZIONE DEL COMPORTAMENTO INDIVIDUALE E DELLA PERFORMANCE DEL SERVIZIO/UFFICIO DI APPARTENENZA; SEZIONE D – VALUTAZIONE DELLE COMPETENZE E DEI COMPORTAMENTI ORGANIZZATIVI E PROFESSIONALI; Data di compilazione, Firma del valutatore]

La scheda di valutazione individuale è **parametrica** e viene personalizzata in base all'esigenza di ogni singolo ente.

---

## Rilascio Implementazioni al software

La modifica è disponibile a partire dalla **release 7.01**.