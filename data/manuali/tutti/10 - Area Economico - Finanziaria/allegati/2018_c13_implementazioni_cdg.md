# Comunicazione n. 13/2018 – Implementazioni C.d.G.

Jesi, 02/11/2018

---

## 1.0 Implementazioni sulla modalità di calcolo del peso delle singole Attività sulla Realizzazione dell'obiettivo

Nella gestione **'Attività'** è stata inserita la possibilità di calcolare in modo proporzionale il peso effettivo delle singole attività sull'obiettivo rispetto al peso assegnato alla singola attività.

La **%** viene calcolata in proporzione ai mesi in cui l'attività è stata eseguita e ciò si applica **solo se non viene indicato il flag di eseguito** ed opera come segue:

| Attività | Eseguito | Mesi previsti | Mesi effettivi | Peso | % attribuita | Note |
|----------|----------|---------------|----------------|------|--------------|------|
| 1 | No | 1 2 3 4 5 (m. 5) | 3 – 4 – 5 (m. 3) | 20 | 3/5 = 12 | |
| 2 | No | 1 2 3 4 5 (m. 5) | 4 – 5 (m. 2) | 20 | 2/5 = 8 | |
| 3 | NO | 1 2 3 4 5 (m. 5) | 1 2 3 4 5 (m. 5) | 10 | 5/5 = 10 | Tutto |
| 4 | NO | 1 2 3 4 5 (m. 5) | 1 2 3 4 5 6 (m. 6) | 10 | 6/5 = 10 | MAX 5/5 = 20 |
| 5 | Si | 5 6 7 8 9 (m. 5) | 8 – 9 – 10 – 11 | 40 | 40 | Sempre max. Non ricalcolato |
| | | | | **100** | **80** | |

### Regola di calcolo

$$\text{Peso ricalcolato} = \text{Peso assegnato} \times \frac{\text{Mesi effettivi}}{\text{Mesi previsti}}$$

- Quando l'attività viene indicata come **'eseguita'**, viene attribuito sempre tutto il peso assegnato indipendentemente dai mesi in cui è stata effettuata.
- Se l'attività viene eseguita in un tempo maggiore, il peso ricalcolato è sempre uguale a quello assegnato (valore massimo = peso assegnato).

Andando ad inserire il periodo di esecuzione delle attività, il programma ricalcolerà in modo automatico il peso sull'obiettivo in modo tale da evidenziare durante l'anno il vero stato di esecuzione.

### 1) Caso con calcolo in base ai mesi di elaborazione

[Schermata: Gestione Attività con colonne "Previsto" ed "Effettivo" per ogni mese (Gen–Dic), con celle colorate (giallo/verde) a indicare i mesi previsti e effettivi. Colonne a destra: "Peso" e "Peso Ric." con valori 20,00→12,00; 20,00→8,00; 10,00→10,00; 10,00→10,00. Flag "Eseguito" non spuntato.]

Si nota che non essendo spuntato il flag eseguito i pesi vengono ricalcolati in base alla reale esecuzione dell'attività. Quindi nella prima riga il peso di 20, relativo a 5 mesi previsti, essendo i mesi effettivi pari a 3 si ha un peso ricalcolato sull'obiettivo di **12** pari ai **3/5**, in modo analogo anche per la seconda riga, si ottiene un peso ricalcolato sull'obiettivo pari ai **2/5** del peso assegnato.

### 2) Attività eseguita con spunta

[Schermata: Riga attività "Gestione variazioni di bilancio e storni di risorse" con flag "Eseguito" spuntato (checkmark), mesi effettivi 8-9-10-11, Peso: 40,00, Peso Ric.: 40,00.]

In questo caso anche se l'attività è stata eseguita per soli 4 mesi, siccome è presente la spunta **Eseguito**, il peso ricalcolato attribuito all'obiettivo è pari al peso assegnato.

Nell'esempio si può notare che al momento della realizzazione dell'obiettivo le attività non sono tutte eseguite e si ha una **percentuale di esecuzione dell'80%** dovuto dalla somma del peso ricalcolato delle attività precedentemente illustrate.

[Schermata: Scheda "Obiettivo Programmato e non Apprezzato" con codice 2007, indicatore percentuale 80,00%, grafico a torta "Distribuzione dei pesi dell'obiettivo" e indicatori a tachimetro per "1° Liv. Obiettivo" con valori 0,00 e 80,00.]

### Opzione di calcolo

Se non si vuole riproporzionare il peso sull'obiettivo su ogni singola attività, c'è la possibilità di indicare se effettuare le riproporzioni oppure tener conto solo della spunta di attività eseguita:

[Schermata: Finestra "CITY-BUDGET Dettagli Attività" con campo "Tipo Calcolo" a tendina con opzioni: "Calcolo proporzionale" e "Calcolo solo se attività eseguita".]

Mettendo nella select **tipo calcolo** l'opzione **'Calcolo solo se attività eseguita'**, il funzionamento rimane come prima della nuova implementazione ed il peso non viene ricalcolato.

---

## 2.0 Implementazioni sulla valutazione della produttività per la performance individuale

È stata implementata la possibilità di dare valutazioni ai singoli dipendenti in modo **personalizzabile per ogni singolo ente**. Gli elementi delle valutazioni ed il range di valutazione vanno preddisposti con il supporto del Sistemista, in funzione del sistema di misurazione della performance dell'ente. In questo modo ogni ente può valutare in modo conforme alle direttive interne il proprio personale.

[Schermata: "Elenco valutazioni per dipendente. Anno 2017" con colonne: Dipendente, Liv./Fas./Ing., Sez., Tipologia, Punteggio, Valutazione descrittiva. Esempio: ROSSI FRANCA – Dirigente – C – "Contributo del singolo alla realizzazione degli obiettivi di sviluppo e/o miglioramento" – 7,00 – "Medio contributo".]

Le valutazioni possono essere **descrittive** e/o **numerica** con l'attribuzione di un punteggio. Lo scopo è quello di produrre la **scheda di valutazione individuale** per ogni dipendente:

[Schermata: "Scheda di Valutazione Performance Individuale – Personale Non Dirigente" con sezioni: Identificazione valutato (codice, nome, qualifica, ente), Sezione A – Valutazione grado di raggiungimento degli obiettivi (tabella con obiettivi, peso, punteggio), Sezione B – Valutazione del comportamento individuale e della performance nel contesto di appartenenza, Sezione C – Valutazione delle competenze e dei comportamenti organizzativi e professionali.]

La scheda di valutazione individuale è **parametrica** e viene personalizzata in base all'esigenza di ogni singolo ente.

---

## Rilascio Implementazioni al software

La modifica è disponibile a partire dalla **release 7.01**.