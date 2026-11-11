# TARI – GESTIONE DELLA TASSA SUI RIFIUTI

## MANUALE OPERATIVO

---

## 1.1 COMPONENTI PEREQUATIVE

### CONFIGURAZIONE E CALCOLO

La configurazione degli "Altri Importi di bollettazione" si effettua dal menù:

**Tributi → TARI → Parametri di Configurazione → Altri Importi → Definizioni Altri Importi**

[Schermata del percorso di menu: Tributi > TARI > Parametri di Configurazione > Altri Importi > Definizioni Altri Importi]

Gli "Altri Importi" vanno configurati per ogni annualità di riferimento, sia per le **utenze domestiche** che per le **NON domestiche**.

Nel caso delle COMPONENTI PEREQUATIVE, poiché queste sono previste dall'anno 2024, vanno configurate dal 2024, e successivamente le UR3 vanno configurate dal 2025.

Ad ogni voce (UR1, UR2 e UR3) corrisponde una configurazione.

Dal menù di Definizione Altri Importi si aprirà la seguente videata:

[Schermata "Altri Importi" con tabella contenente le voci: ID 3 - Copertura dei costi di gestione dei rifiuti accidentalmente pescati (TARI, TARES/TARI, 2024, Tipo Voce 23, Sottotipo 1, Importo 0,10€, ES, Utente, Su intera annualità); ID 4 - Copertura delle agevolazioni riconosciute per eventi eccezionali calamitosi (TARI, TARES/TARI, 2024, Tipo Voce 23, Sottotipo 2, Importo 1,50€, ES, Utente, Su intera annualità); ID 17 - Componente Perequativa UR1 (TARI, TARES/TARI, 2025, Tipo Voce 23, Sottotipo 1, Importo 0,10€, ES, Utente, Su intera annualità); ID 18 - Componente Perequativa UR2 (TARI, TARES/TARI, 2025, Tipo Voce 23, Sottotipo 2, Importo 1,50€, ES, Utente, Su intera annualità); ID 19 - Componente Perequativa UR3 (TARI, TARES/TARI, 2025, Tipo Voce 23, Sottotipo 3, Importo 6,00€, ES, Utente, A giorni)]

Attraverso la matitina o con doppio click su ciascuna voce, configurare UR1 e UR2, poi dal 2025 configurare la componente UR3.

---

### UR1

[Schermata di configurazione UR1 con i seguenti campi: Descrizione: "Copertura dei costi di gestione dei rifiuti accidentalmente pescati"; Servizio: TARI; Tipo Cespite: TARES/TARI; Anno Riferimento: 2024; Tipo Voce: 23; Sottotipo Voce: 1; Importo: 0,10000; Aliquota IVA: ES; Metodo Applicazione: Punto di conferimento; Tipo Calcolo: A giorni; Applicazione Addizionali: ☐; Applicazione Sanzione: ☐; Applicazione Interessi: ☐; Disabilitato: ☐]

---

### UR2

[Schermata di configurazione UR2 con i seguenti campi: Descrizione: "Copertura delle agevolazioni riconosciute per eventi eccezionali calamitosi"; Servizio: TARI; Tipo Cespite: TARES/TARI; Anno Riferimento: 2024; Tipo Voce: 23; Sottotipo Voce: 2; Importo: 1,50000; Aliquota IVA: ES; Metodo Applicazione: Punto di conferimento; Tipo Calcolo: A giorni; Applicazione Addizionali: ☐; Applicazione Sanzione: ☐; Applicazione Interessi: ☐; Disabilitato: ☐]

---

### UR3

[Schermata di configurazione UR3 con i seguenti campi: Descrizione: "Componente Perequativa UR3"; Servizio: TARI; Tipo Cespite: TARES/TARI; Anno Riferimento: 2025; Tipo Voce: 23; Sottotipo Voce: 3; Importo: 6,00000; Aliquota IVA: ES; Metodo Applicazione: Utente; Tipo Calcolo: A giorni; Applicazione Addizionali: ☐; Applicazione Sanzione: ☐; Applicazione Interessi: ☐; Disabilitato: ☐]

---

### Significato dei singoli campi della configurazione

| Campo | Descrizione |
|-------|-------------|
| **Descrizione** | È possibile editare liberamente la descrizione da attribuire alla voce |
| **Servizio** | Indica il Servizio che prenderà in carico l'altro importo in fase di calcolo altri Importi |
| **Tipo Cespite** | Indica il Tipo Cespite di un determinato Servizio che prenderà in carico l'altro importo in fase di calcolo |
| **Anno di riferimento** | Anno di riferimento dell'Altro Importo |
| **Tipo Voce** | Indica il tipo voce che verrà attribuito al determinato 'Altro Importo' (per le perequative sempre **23**) |
| **Sottotipo Voce** | Indica l'eventuale SOTTOTIPO VOCE del determinato TIPO VOCE, che viene attribuito agli 'Altri Importi' (per le perequative **1** per UR1, **2** per UR2 e **3** per UR3) |
| **Importo** | Indica l'importo da inserire in bollettazione (per le perequative fisso **0,10** per UR1 e **1,50** per UR2) |
| **Aliquota IVA** | Fisso **ES** (esente IVA) |

---

### Metodo Applicazione

[Schermata a tendina con opzioni: Utente, Utenza, Punto di conferimento]

- **Utente**: applica gli importi configurati ad ogni contribuente (presuppone il tipo calcolo 3 su intera annualità per forza)
- **Utenza**: applica gli importi configurati ad ogni denuncia
- **Punto di conferimento**: applica gli importi configurati ad ogni denuncia in cui è presente il flag "Punto di conferimento" (vedere approfondimento sotto)

---

### Tipo Calcolo

[Schermata a tendina con opzioni: A giorni, A mesi, Su intera annualità]

- **A giorni**: ripartisce per i giorni di validità della denuncia l'importo di ogni 'Altro Importo'
- **A mesi**: ripartisce per i mesi di validità della denuncia l'importo di ogni 'Altro Importo'
- **Su intera annualità**: riporta sull'intero anno, a prescindere che la denuncia sia chiusa; questa opzione per le perequative è da usare in caso di tipo Metodo Applicazione per Utente

---

### Campi aggiuntivi

- **Applicazione Addizionali**: se flaggato, calcola la quota TEFA sull' 'Altro Importo'
- **Applicazione Sanzione**: se flaggato, calcola le sanzioni in fase accertativa sull' 'Altro Importo'
- **Applicazione Interessi**: se flaggato, calcola gli interessi in fase accertativa sull' 'Altro Importo'
- **Disabilitato**: se flaggato, la riga di altro importo non viene presa in considerazione

> **NB**: Per le perequative, rispetto a questi ultimi 4 campi **NON** va flaggato nulla.

---

## 1.2 PUNTO DI CONFERIMENTO

### Associazione massiva CON e SENZA flag

In caso di applicazione della componente perequativa con Metodo "Punto di conferimento" è possibile (se non si è fatto puntualmente al momento dell'inserimento puntuale delle denunce) associare massivamente il flag "Punto di conferimento" alle denunce individuate, secondo una certa classe/uso tariffaria.

L'associazione massiva dei "Punti di conferimento" si effettua dal menù:

**Tributi → TARI → Parametri di Configurazione → Altri Importi → Associazioni Punti di Conferimento**

[Schermata del percorso di menu: Tributi > TARI > Parametri di Configurazione > Altri Importi > Associazioni Punti di Conferimento]

Si aprirà la seguente videata:

[Schermata "Aggiornamento Massivo Punto Conferimento" con campi: Tipo Cespite (a tendina), Anno Riferimento, Data Cessazione Limite, Aggiungi Punto Conferimento (toggle), Classe (a tendina), Usi (tabella con checkbox), e pulsanti "Controlla Denunce" e "Aggiorna Denunce"]

#### Descrizione dei campi

| Campo | Descrizione |
|-------|-------------|
| **Tipo Cespite** | Indica il Tipo Cespite di un determinato Servizio a cui alle rispettive denunce va associato il Punto di Conferimento |
| **Anno Riferimento** | Indica l'anno di cui va considerato il tariffario |
| **Data Cessazione Limite** | Indica la data oltre la quale le denunce andranno aggiornate; il sistema aggiornerà le denunce da quella data in poi (comunque, anche in presenza di cessazione) |
| **Aggiungi Punto di Conferimento** | Mettendo il flag il punto di conferimento sarà aggiunto sulle denunce |
| **Classe** | Indica la classe tariffaria a cui va associato il flag del Punto di conferimento |
| **Usi** | Indica gli usi legati alla certa classe tariffaria scelta; selezionare con il flag gli usi alle cui denunce va associato il flag "Punto di conferimento" |

[Schermata di esempio con: Tipo Cespite: TARES/TARI; Anno Riferimento: 2025; Data Cessazione Limite: 01/01/2025; Aggiungi Punto Conferimento: ☑; Classe: UTENZE DOMESTICHE; Usi selezionati: 1 - ABITAZIONI CIVILI, 2 - CASE SPARSE LONTANE DAL PERIMETRO, 3 - CASE SPARSE LONTANE DAL PERIMETRO]

> **NB**: in generale il Punto di conferimento si associa agli usi **NON pertinenza**

#### Operazioni

Il bottone **"Controlla Denunce"** mostra quante denunce saranno aggiornate:

[Schermata risultato: "Denunce da aggiornare: 3114"]

Il bottone **"Aggiorna Denunce"** **mette** il flag "Punto di conferimento" alle denunce:

[Schermata risultato: "Denunce aggiornate: 3114"]

Crea inoltre un file excel delle denunce aggiornate con il punto di conferimento:

[Icona file Excel: "denunce_aggiunte_pconf_20...xlsx" - 4,3 kB]

Il file ha all'interno l'indicazione dei progsogg e delle denunce aggiornate:

| PROGSOGG | PROGDEN |
|----------|---------|
| 23498 | 17 |
| 23498 | 18 |

---

### Associazione massiva SENZA flag

[Schermata "Aggiornamento Massivo Punto Conferimento" con: Tipo Cespite: TARES/TARI; Anno Riferimento: 2025; Data Cessazione Limite: 01/01/2025; Aggiungi Punto Conferimento: ☐ (NON flaggato); Classe: UTENZE DOMESTICHE; Usi selezionati: 1, 2, 3]

**Aggiungi Punto di Conferimento**: NON mettendo il flag, il punto di conferimento sarà **tolto** da tutte le denunce indicate.

Il bottone **"Controlla Denunce"** mostra a quante denunce il punto di conferimento sarà **rimosso**:

[Schermata risultato: "Denunce da aggiornare: 3114"]

Il bottone **"Aggiorna Denunce"** **toglie** il flag "Punto di conferimento" alle denunce:

[Schermata risultato: "Denunce aggiornate: 3114"]

E crea un file excel delle denunce a cui il punto di conferimento è stato **rimosso**:

[Icona file Excel: "denunce_rimosse_pconf_20251023_1131.xlsx" - 62,3 kB]

---

### Visualizzazione del Punto di Conferimento

Una volta inserito il Punto di conferimento, questo sarà visibile dalla denuncia già esternamente, dalla testata:

[Schermata elenco denunce con colonna "PUNTO DI CONFERIMENTO" evidenziata, con segnalatore grafico (icona) visibile nelle righe delle denunce]

Posizionandosi sul segnalatore grafico appare il tooltip "Punto di conferimento".

L'associazione va fatta anche per le utenze **NON domestiche**.

---

### Associazione puntuale

È possibile attribuire alla denuncia il Punto di Conferimento anche puntualmente, entrando in denuncia in modifica e mettendo il flag su Punto di Conferimento:

[Schermata di modifica denuncia con campo "Punto di conferimento" ☑ evidenziato in basso nella sezione Dati Generali]

Dal menù della ricerca delle denunce è inoltre possibile effettuare una ricerca di tutti i Punti di conferimento, selezionando con il flag e facendo **Elenca**:

[Schermata di ricerca denunce con campo "Punto di conferimento" ☑ nella sezione "Classificazione" e pulsante "Elenca" evidenziato]

---

## 2.1 BOLLETTAZIONE

In fase di bollettazione dello specifico anno di riferimento, le voci degli Altri Importi vengono considerate in funzione dell'Anno di riferimento indicato in configurazione.

Nello specifico il calcolo avviene:

- In base al **Metodo Applicazione** definito in configurazione
- In base al **Tipo Calcolo** definito in configurazione

Nell'avviso creato, al tab **'Voci'**, viene scritta apposita riga:

[Schermata tab "Voci" dell'avviso con righe evidenziate: "Componente perequativa UR1" (0,10€), "Componente perequativa UR2" (1,50€), "Componente perequativa UR3" (6,00€), oltre alle voci di Imponibile tassa, TEFA, Altri Importi e Arrotondamento]