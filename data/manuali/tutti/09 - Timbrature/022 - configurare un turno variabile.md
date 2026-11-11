# Configurare un Turno Variabile

Questa è la schermata nella quale si configura un Turno variabile:

[Schermata di configurazione Turni Variabili con tabella vuota, campi "Codice turno" e "Descrizione", e pulsanti F2-Nuovo, F3-Altra Ricerca, Inserisci Riga, Cancella Riga, F7-Cancella Turno, Blocca Turno]

Questa tabella rappresenta una tabella di **"condizioni"**: ogni riga è una condizione che attiva un profilo orario nella Gestione Timbrature.

| Campo | Descrizione |
|-------|-------------|
| **N°** | Numero della riga |
| **Num.Tim.** | Il numero della timbratura che si sta impostando |
| **Entrata/Uscita** | Il tipo di timbratura che si sta impostando |
| **Dalle ore** | Orario di partenza della condizione di timbratura |
| **Alle ore** | Orario di fine della condizione di timbratura |
| **E/O** | Campo che permette di aggiungere ulteriori informazioni alla condizione |
| **Profilo orario** | È il profilo orario che verrà utilizzato in caso che la condizione si riveli *Vera* nella gestione timbrature |
| **Descrizione** | Descrizione del Profilo Orario |

Facendo doppio click su una riga entreremo nel suo dettaglio dove sarà possibile configurare la condizione e il profilo da utilizzare in caso si riveli *Vera*. La configurazione si presenterà in questo modo:

[Schermata di dettaglio riga con campi: Numero Tim., Tipo (Entrata/Uscita), Dalle Ore, Alle Ore, O/E, e seconda sezione con Numero Tim., Tipo, Dalle Ore, Alle Ore, Codice Profilo]

---

## Esempio pratico: Turni dei Vigili

Configuriamo ora il turno variabile. Prendiamo per esempio i vari Turni che possono compiere dei Vigili; come esempio utilizzeremo **4 Turni Orari**:

1. 02:00 alle 08:00
2. 08:00 alle 14:00
3. 14:00 alle 20:00
4. 20:00 alle 02:00

Per prima cosa necessitiamo dei 4 **Profili Orari** sopra elencati, quindi per prima cosa si dovranno configurare i Profili Orari.

> **Fondamentale:** ricordare che la gestione Timbrature leggerà tutta la tabella delle condizioni e appena troverà una condizione *Vera* la applicherà alla timbratura che sta processando. Quindi è anche molto importante l'**ordine** in cui si trovano le condizioni nella tabella.

---

## Configurazione delle condizioni base (tipo O)

Configuriamo le condizioni per i vari orari sopra citati. Ripetiamo questa operazione per tutti i turni:

- Il campo **Num.Tim. 1** in questo caso sarà **1**, questo perché sarà la prima timbratura della giornata.

- Il campo **tipo Timbratura 1** potrà essere sia **Entrata** che **Uscita**. Per rendere le cose più semplici, nelle condizioni basilari solitamente si utilizza il tipo **Entrata**.

- Il campo **Dalle ore 1 / Alle ore 1** è *"sensibile"* alla scelta del tipo di timbratura:
  - In caso scegliessimo **Entrata**, dovremmo scrivere il possibile orario d'entrata del lavoratore, tenendo anche conto di una possibile **Flessibilità**.
  - Se scegliamo **Uscita**, dovremo scrivere il possibile orario d'uscita del lavoratore tenendo conto di una possibile **Flessibilità**.

  **Esempio:** prendendo in considerazione il turno dalle 02:00 alle 08:00 con una Flessibilità di 10 minuti, la Timbratura d'entrata del lavoratore potrà oscillare dalle 01:50 alle 02:10. Quindi nel campo *Dalle ore* scriveremo l'orario minimo ovvero le **01:50** e nel campo *Alle ore* scriveremo l'orario massimo ovvero **02:10**.

- **E/O**: il campo dovrà essere messo su **O**.

- In **profilo orario** dovremo inserire il codice del profilo orario che descrive la condizione che si sta configurando. Per esempio, in questo caso il profilo da scegliere tra quelli configurati sarà quello in cui il Vigile lavora dalle 02:00 alle 08:00.

Il risultato dovrà essere simile a questo:

[Schermata dettaglio con: Codice Turno 6, Descrizione "PROVA TURNO VIGILI", Numero Tim. 1, Tipo Entrata, Dalle Ore 01:50, Alle Ore 02:10, O/E = O, Codice Profilo 25 = "PROVA ORARIO VIGILI 02:00-08:00"]

Una volta configurate tutte le condizioni, quindi tutti gli orari sopra citati, dovremo ottenere una tabella simile a questa:

| N° | Num.Tim. | Entrata/Uscita | Dalle Ore | Alle Ore | E/O | Num.Tim. | Entrata/Uscita | Dalle Ore | Alle Ore | Profilo Orario | Descrizione |
|----|----------|----------------|-----------|----------|-----|----------|----------------|-----------|----------|----------------|-------------|
| 1 | 1 | ENTRATA | 01:50 | 02:10 | O | 0 | ENTRATA | 00:00 | 00:00 | 25 | PROVA ORARIO VIGILI 02:00-08:00 |
| 2 | 1 | ENTRATA | 07:50 | 08:10 | O | 0 | ENTRATA | 00:00 | 00:00 | 22 | PROVA ORARIO VIGILI 08:00-14:00 |
| 3 | 1 | ENTRATA | 13:50 | 14:10 | O | 0 | ENTRATA | 00:00 | 00:00 | 23 | PROVA ORARIO VIGILI 14:00-20:00 |
| 4 | 1 | ENTRATA | 19:50 | 20:10 | O | 0 | ENTRATA | 00:00 | 00:00 | 24 | PROVA ORARIO VIGILI 20:00-02:00 |
| 5 | 0 | 0 | 00:00 | 00:00 | 0 | 0 | 0 | 00:00 | 00:00 | 0 | |
| 6 | 0 | 0 | 00:00 | 00:00 | 0 | 0 | 0 | 00:00 | 00:00 | 0 | |
| 7 | 0 | 0 | 00:00 | 00:00 | 0 | 0 | 0 | 00:00 | 00:00 | 0 | |

---

## Configurazione delle condizioni combinate (tipo E)

Consideriamo ora per esempio che il vigile svolga il turno di lavoro dalle **20:00 alle 02:00** e il giorno dopo torni a lavoro e svolga un altro turno ad esempio dalle **14:00 alle 20:00**. Il programma deve essere configurato in modo da capire che per questo giorno debba utilizzare il profilo orario che va dalle 14:00 alle 20:00 e non quello che va dalle 20:00 alle 02:00.

Avendo solo le condizioni precedentemente configurate, alla lettura della tabella il programma troverà come prima condizione vera la **N1**, ovvero quella che presenta la prima Timbratura della giornata dalle ore 01:50 alle ore 02:10. Questo porterebbe ad un errore, quindi dobbiamo configurare altre condizioni.

Configuriamo le condizioni che serviranno al caso sopra presentato, tenendo conto che la **prima timbratura della giornata sarà equivalente all'orario d'uscita della timbratura del giorno precedente**, dato che l'orario di lavoro di quel turno finisce nel giorno successivo.

> **Fondamentale:** l'ordine in cui le condizioni si trovano. Nel caso che le condizioni "elaborate" (quelle che stiamo per configurare) si trovino in fondo alla tabella, non verranno mai visualizzate dal programma perché troverà prima di loro almeno una condizione *Vera*. Quindi bisogna inserire tali condizioni **per prime**.

Per fare ciò si utilizza il bottone **inserisci riga**. Quando ci verrà richiesto di inserire il numero della riga, dobbiamo inserire il valore della riga interessata **-1**. Quindi se vogliamo inserire una nuova riga al N°2, dopo aver premuto il bottone *inserisci riga* immetteremo nel campo di richiesta il valore **1**, così otterremo una nuova riga al posto 2.

### Parametri della condizione combinata:

- Il campo **Num.Tim. 1** sarà di nuovo **1**.

- Il **tipo Timbratura 1** sarà **Entrata**.

- Il campo **Dalle ore 1 / Alle ore 1** sarà equivalente all'orario d'uscita del turno del giorno precedente tenendo conto di una possibile **Flessibilità**. Prendendo in considerazione il turno dalle 20:00 alle 02:00 con una Flessibilità di 10 minuti, la Timbratura d'uscita del lavoratore potrà oscillare dalle 01:50 alle 02:10. Quindi nel campo *Dalle ore* scriveremo l'orario minimo ovvero le **01:50** e nel campo *Alle ore* scriveremo l'orario massimo ovvero **02:10**.

- **E/O**: il campo dovrà essere messo su **E**.

- Il **Num.Tim. 2** sarà di nuovo **2**, perché sarà la seconda timbratura della giornata.

- Il **tipo Timbratura 2** sarà **Entrata**.

- Il campo **Dalle ore 2 / Alle ore 2** sarà equivalente all'orario d'uscita del turno del giorno che si sta configurando tenendo conto di una possibile **Flessibilità**. Prendendo in considerazione il turno dalle 14:00 alle 20:00 con una Flessibilità di 10 minuti, la Timbratura d'uscita del lavoratore potrà oscillare dalle 19:50 alle 20:10. Quindi nel campo *Dalle ore* scriveremo l'orario minimo ovvero le **19:50** e nel campo *Alle ore* scriveremo l'orario massimo ovvero **20:10**.

- In **profilo orario** dovremo inserire il codice del profilo orario che descrive la condizione che si sta configurando. In questo caso il profilo da scegliere tra quelli configurati sarà quello in cui il Vigile lavora dalle 14:00 alle 20:00.

Il risultato dovrà essere simile a questo:

[Schermata dettaglio con: Codice Turno 6, Descrizione "PROVA TURNO VIGILI", Numero Tim. 1, Tipo Entrata, Dalle Ore 01:50, Alle Ore 02:10, O/E = E, Numero Tim. 2, Tipo Entrata, Dalle Ore 19:50, Alle Ore 20:10, Codice Profilo 23 = "PROVA ORARIO VIGILI 14:00-20:00"]

---

## Combinazioni complete

Dovremo ripetere questa configurazione per ogni possibile **combinazione di turni** del vigile. Ad esempio, sempre partendo dal turno delle 20:00 alle 02:00, abbiamo 3 possibili combinazioni: il giorno dopo il vigile potrebbe lavorare dalle 08:00 alle 14:00, dalle 14:00 alle 20:00 (condizione appena configurata) o dalle 20:00 alle 02:00.

Fatte tutte le possibili combinazioni dovremmo avere un risultato simile a questo:

| N° | Num.Tim. | Entrata/Uscita | Dalle Ore | Alle Ore | E/O | Num.Tim. | Entrata/Uscita | Dalle Ore | Alle Ore | Profilo Orario | Descrizione |
|----|----------|----------------|-----------|----------|-----|----------|----------------|-----------|----------|----------------|-------------|
| 1 | 1 | ENTRATA | 01:50 | 02:10 | E | 2 | ENTRATA | 07:50 | 08:10 | 25 | PROVA ORARIO VIGILI 02:00-08:00 |
| 2 | 1 | ENTRATA | 01:50 | 02:10 | E | 2 | ENTRATA | 13:50 | 14:10 | 22 | PROVA ORARIO VIGILI 08:00-14:00 |
| 3 | 1 | ENTRATA | 01:50 | 02:10 | E | 2 | ENTRATA | 19:50 | 20:10 | 23 | PROVA ORARIO VIGILI 14:00-20:00 |
| 4 | 1 | ENTRATA | 01:50 | 02:10 | O | 0 | ENTRATA | 00:00 | 00:00 | 25 | PROVA ORARIO VIGILI 02:00-08:00 |
| 5 | 1 | ENTRATA | 07:50 | 08:10 | O | 0 | ENTRATA | 00:00 | 00:00 | 22 | PROVA ORARIO VIGILI 08:00-14:00 |
| 6 | 1 | ENTRATA | 13:50 | 14:10 | O | 0 | ENTRATA | 00:00 | 00:00 | 23 | PROVA ORARIO VIGILI 14:00-20:00 |
| 7 | 1 | ENTRATA | 19:50 | 20:10 | O | 0 | ENTRATA | 00:00 | 00:00 | 24 | PROVA ORARIO VIGILI 20:00-02:00 |
| 8 | 0 | 0 | 00:00 | 00:00 | 0 | 0 | 0 | 00:00 | 00:00 | 0 | |

---

## Riepilogo della logica di configurazione

1. **Condizioni semplici (E/O = O):** si usano quando la prima timbratura della giornata corrisponde all'entrata del turno stesso. Si configura una sola timbratura (Num.Tim. 1) con il tipo Entrata e l'orario di inizio turno (± flessibilità).

2. **Condizioni combinate (E/O = E):** si usano quando il turno precedente finisce nel giorno successivo. Si configurano **due timbrature**:
   - **Num.Tim. 1:** l'orario di uscita del turno del giorno precedente (± flessibilità)
   - **Num.Tim. 2:** l'orario di uscita del turno del giorno corrente (± flessibilità)

3. **Ordine delle condizioni:** le condizioni combinate (tipo E) devono essere inserite **prima** delle condizioni semplici (tipo O) nella tabella, altrimenti non verranno mai valutate.