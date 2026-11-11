# Comunicazione n. 07/2020 - Situazione di cassa

## Scopo del documento

**Emergenza COVID19.**

In questo periodo di emergenza gli enti locali stanno subendo delle particolari sofferenze di liquidità dovute alle mancate entrate dei principali tributi.

Con lo scopo di fornire un ausilio per monitorare la situazione di cassa è stato realizzato un cruscotto che consente di monitorare e simulare i flussi di cassa dell'Ente.

| Data | Oggetto comunicazione /integrazione | Versione |
|------|--------------------------------------|----------|
| 13/06/2020 | Prima comunicazione | C07 V0 |
| 08/09/2020 | Selezione per data effettiva movimentazione di cassa | C07 V1 |
| | Riepilogo per tipo di contabilità /destinazione delle somme | |
| | Simulazione andamento di cassa rispetto allo scostamento delle entrate rispetto all'anno precedente | |

---

## Accesso alla funzionalità

La nuova funzionalità è disponibile su **Cityware Online** e raggiungibile dal seguente menù:

**MENU → 150. Servizi Economici → 100. Statistiche → 35. Situazione di Cassa alla Data**

---

## 1. Situazione di Cassa alla Data

La Situazione di Cassa ad una certa Data ricostruisce i saldi al momento richiesto. I Mandati e le Reversali utilizzati come base di calcolo sono quelli inclusi nell'esercizio contabile a cui si è collegati e con data compresa dal 1° gennaio dell'esercizio fino alla data selezionata **(A)**.

È possibile applicare il filtro delle Date sulla **"Data di Emissione"** o sulla **"Data Valuta"** **(B)**.

Per avviare il Calcolo, utilizzare **"Calcola Situazione di Cassa alla data"** **(C)**.

### Aggiunto nuovo tipo di selezione: 'Data effettiva movimentazione di cassa'

Per questo tipo di selezione il software si comporta in maniera differente per calcolare il saldo delle entrate rispetto alle uscite.

I movimenti inclusi nel calcolo possono essere riassunti nella seguente tabella:

| Parte | Movimenti inclusi nel calcolo |
|-------|-------------------------------|
| Entrate | Vengono elaborati tutti i provvisori di entrata provenienti dalla tesoreria relativi all'esercizio contabile a cui si è collegati aventi data provvisorio compresa nel periodo indicato a video |
| Uscite | Vengono elaborati i provvisori di uscita provenienti dalla tesoreria relativi all'esercizio contabile a cui si è collegati aventi data provvisorio compresa nel periodo indicato a video. Al totale dei movimenti precedenti vengono sommati gli importi "netti" dei mandati che non risultano essere a copertura di provvisori e/o a compensazione |

Per tutte le opzioni, gli ordinativi in sostituzione di altri vengono esclusi dal calcolo in quanto come movimentazione di cassa viene presa quella dell'ordinativo iniziale che è stato poi sostituito.

Per avviare il Calcolo, utilizzare **"Calcola Situazione di Cassa alla data"** **(C)**.

Dopo aver avviato il calcolo in base al tipo di selezione scelta si attiva uno dei seguenti bottoni che consente di esportare la lista dei movimenti utilizzati per il calcolo:

- **Scarica Reversali e Mandati utilizzati per il Calcolo** → Per tipo simulazione 'Data emissione' e/o 'Data Valuta'
- **Scarica Provvisori ed Ordinativi utilizzati per il Calcolo** → Per tipo simulazione 'Data Effettiva movimentazione di Cassa'

---

### 1.1 Riepilogo Generale

Viene mostrata la situazione di cassa alla data selezionata.

**Esempio di output:**

| | GESTIONE | | |
|---|---|---|---|
| | RESIDUI | COMPETENZA | TOTALI |
| Fondo di Cassa al 1° Gennaio | | | 11.817.012,35 |
| RISCOSSIONI (+) | 1.678.889,71 | 755.074,90 | 2.433.964,61 |
| PAGAMENTI (-) | 3.945.422,37 | 2.533.924,20 | 6.479.346,57 |
| Saldo di Cassa al 31 Dicembre (+) | | | 7.771.630,39 |

Cliccando in **"Esporta XLSX"** si esportano i dati in formato Excel.

---

### 1.2 Riepilogo per Conto di Tesoreria

Il riepilogo per conto di tesoreria è disponibile **solo per i tipi selezione per 'data emissione' e 'data valuta'**.

La situazione di Partenza è il **"Saldo Iniziale dell'Anno"** (al 1° gennaio) del Conto stesso.

Cliccando in **"Esporta XLSX"** si esportano i dati in formato Excel.

Selezionando uno specifico **Conto di Tesoreria (A)** si ottiene il Riepilogo dello stesso.

**Esempio di riepilogo per conto:**

| Conto di Tesoreria | Saldo Iniziale | Riscossioni | Pagamenti | Saldo |
|---|---|---|---|---|
| 01) Contabilità Infurtifera Libera | 0,00 | 56.267,05 | 5.709,85 | 50.557,20 |
| 02) Contabilità Fruttifera Libera | 1.000,55 | 2.346.045,26 | 5.886.034,25 | -3.538.988,44 |
| 04) Contabilità Infurtifera Vincolata | 0,00 | 0,00 | 56.009,40 | -56.009,40 |
| 11) Infurtifera Libera - Accr.Tes.Prov.Stato Tab.A | 0,00 | 0,00 | 233.049,61 | -233.049,61 |
| 12) Infurtifera Libera - Accr.Tes.Prov.Stato Tab.B | 0,00 | 0,00 | 173,84 | -173,84 |
| **Totale** | | **2.402.312,31** | **6.180.976,95** | |

Selezionando un conto specifico si ottiene il **Riepilogo per Mese** del conto selezionato, con dettaglio per ogni mese (Gennaio, Febbraio, Marzo, ecc.) con colonne RESIDUI, COMPETENZA e SALDO.

Cliccando in **"Esporta XLSX"** si esportano i dati in formato Excel.

---

### 1.3 Riepilogo per Destinazione e Tipo di Contabilità

L'opzione è disponibile **solo per il tipo di selezione 'Data effettiva movimentazione di cassa'**.

#### Determinazione della Destinazione

La **destinazione** viene determinata nella seguente maniera:

- **Per i provvisori della tesoreria:** la destinazione viene reperita dal giornale di cassa fornito dalla tesoreria e ricevuto tramite sistema SiopePlus.
  - Rif. regole tecniche OPI tag `<destinazione>`
  - Campo 36.3.19: Può assumere i valori **"LIBERA"** o **"VINCOLATA"** (tale informazione può essere sostituita dall'imputazione sui conti di evidenza).

- **Per i mandati:** l'informazione viene reperita dall'indicazione presente sulla tabella dei conti di tesoreria relativamente al conto su cui il mandato è stato emesso.
  - Esempio: Codice conto tesoreria "01" → Classe conto: "Infurtifero" → Tipo conto: "Libero"

#### Determinazione del Tipo di Contabilità

Il **tipo di contabilità** viene determinato nella seguente maniera:

- **Per i provvisori della tesoreria:** viene reperito dall'apposita informazione presente nel giornale di cassa fornito dalla tesoreria e ricevuto tramite sistema SiopePlus.
  - Rif. regole tecniche OPI tag `<tipo_contabilità>`
  - Campo 36.3.18: Può assumere i seguenti valori: **"FRUTTIFERO"** / **"INFRUTTIFERO"**

- **Per i mandati:** l'informazione viene reperita dall'indicazione presente sulla tabella dei conti di tesoreria relativamente al conto su cui il mandato è stato emesso.
  - Esempio: Codice conto tesoreria "01" → Classe conto: "Infurtifero" → Tipo conto: "Libero"

#### Struttura del Riepilogo

Il Riepilogo contiene dapprima i **totali generali (A)** e poi i **totali per le varie combinazioni di tipo contabilità/destinazione (B)**.

**Esempio di output:**

| Riepilogo SALDI per Tipo | LIBERA | VINCOLATA | INFRUTTIFERA | FRUTTIFERA |
|---|---|---|---|---|
| Saldo Iniziale | 0,00 | 0,00 | 0,00 | 0,00 |
| PROVVISORI ENTRATA (+) | 2.249.327,05 | 0,00 | 685.844,05 | 1.563.483,00 |
| PROVVISORI USCITA + ORDINATIVI (-) | 4.848.234,76 | 23.820,67 | 30.287,32 | 3.598.220,92 |
| Saldo al 31 Dicembre (=) | -2.598.907,71 | -23.820,67 | 655.556,73 | -2.034.737,92 |

I saldi iniziali per le varie combinazioni tipo di contabilità/destinazione vengono calcolati facendo la somma del saldo cassa iniziale presente sulla tabella dei conti di tesoreria distinguendo i vari conti per le varie tipologie/destinazioni.

Cliccando in **"Esporta XLSX"** si esportano i dati in formato Excel.

Selezionando una specifica **Combinazione di Tipo contabilità/Destinazione (A)** si ottiene il Riepilogo per mese della combinazione selezionata.

La situazione di Partenza è la somma dei **"Saldi Iniziale dell'Anno"** (al 1° gennaio) desunta dalla tabella dei conti di tesoreria e sommati in base alla combinazione tipo contabilità/destinazione scelta.

Cliccando in **"Esporta XLSX"** si esportano i dati in formato Excel.

---

### 1.4 Riepilogo per Giorno

La situazione di Partenza è il **"Fondo Iniziale di Cassa"**.

Cliccando in **"Esporta XLSX"** si esportano i dati in formato Excel.

**Esempio di output:**

| Data | | RESIDUI | COMPETENZA | SALDO |
|---|---|---|---|---|
| Mercoledì 09-01-2019 | Saldo Iniziale | | | 11.817.012,35 |
| | RISCOSSIONI (+) | 0,00 | 0,00 | 0,00 |
| | PAGAMENTI (-) | 2.850,87 | 0,00 | 2.850,87 |
| | Saldo al 09-01-2019 (=) | | | 11.814.161,48 |

---

### 1.5 Riepilogo per Mese

La situazione di Partenza è il **"Fondo Iniziale di Cassa"**.

Cliccando in **"Esporta XLSX"** si esportano i dati in formato Excel.

**Esempio di output:**

| Mese | | RESIDUI | COMPETENZA | SALDO |
|---|---|---|---|---|
| Gennaio | Saldo Iniziale | | | 11.817.012,35 |
| | RISCOSSIONI (+) | 1.165.376,04 | 104.853,26 | 1.270.229,30 |
| | PAGAMENTI (-) | 1.656.086,19 | 206.414,66 | 1.862.500,85 |
| | Saldo al 31 Gennaio (=) | | | 11.224.740,80 |

---

### 1.6 Grafici

È possibile visualizzare i dati come **"Grafico a Linee"** o **"Grafico a Barre"**, selezionabile dalla lista **"Tipo"**, come pure il tipo di dato **"per Mese"** o **"per Conto"**, selezionabile dalla lista **"Valori"**.

Qualora si scelga come valore "per Mese" appare una nuova lista, dalla quale è possibile selezionare il singolo Conto di Tesoreria di cui si intende visualizzare la rappresentazione grafica Mensile.

[Grafico a Linee: Situazione di Cassa - Riepilogo per Mese, con linee per ENTRATE, USCITE e SALDO]

[Grafico a Barre: Situazione di Cassa - Riepilogo per Mese, con barre per ENTRATE, USCITE e SALDO]

Cliccando in **"Esporta XLSX"** si esportano i dati in formato Excel.

Cliccando in **"Dati del Grafico"** vengono visualizzati in forma tabellare i valori esposti graficamente.

**Esempio - Dati del Grafico in forma Tabellare (per Mese):**

| Mese | Riscossioni | Pagamenti | Saldo |
|---|---|---|---|
| Fondo di Cassa | 0,00 | 0,00 | 11.817.012,35 |
| Gennaio | 1.270.229,30 | 1.862.500,85 | 11.224.740,80 |
| Febbraio | 620.321,09 | 1.911.849,16 | 9.933.212,73 |
| Marzo | 437.465,82 | 1.622.291,60 | 8.748.386,95 |
| Aprile | 89.730,20 | 967.825,96 | 7.870.291,19 |
| Giugno | 11.000,00 | 68.625,10 | 7.812.666,09 |
| Luglio | 0,00 | 73,80 | 7.812.592,29 |
| Ottobre | 1.805,62 | 43.437,44 | 7.770.960,47 |
| Novembre | 3.390,58 | 2.742,66 | 7.771.608,39 |
| Dicembre | 22,00 | 0,00 | 7.771.630,39 |
| **Totale** | **2.433.964,61** | **6.479.346,57** | |

**Esempio - Dati del Grafico in forma Tabellare (per Conto di Tesoreria):**

| Conto di Tesoreria | Saldo Iniziale | Riscossioni | Pagamenti | Saldo |
|---|---|---|---|---|
| 01) Contabilità Infurtifera Libera | 0,00 | 56.267,05 | 5.709,85 | 50.557,20 |
| 02) Contabilità Fruttifera Libera | 1.000,55 | 2.346.045,26 | 5.886.034,25 | -3.538.988,44 |
| 04) Contabilità Infurtifera Vincolata | 0,00 | 0,00 | 56.009,40 | -56.009,40 |
| 11) Infurtifera Libera - Accr.Tes.Prov.Stato Tab.A | 0,00 | 0,00 | 233.049,61 | -233.049,61 |
| 11) Infurtifera Libera - Accr.Tes.Prov.Stato Tab.B | 0,00 | 0,00 | 173,84 | -173,84 |
| **Totale** | | **2.402.312,31** | **6.180.976,95** | |

---

### 1.7 Simulazione Andamento da Media Periodo

Una volta calcolata la Situazione di Cassa è possibile fare una Simulazione partendo dalla Media Calcolata ad un certo mese. Per ottenerla, indicare il **"Mese Finale per Calcolo Media" (A)** e quindi avviare la **"Simulazione con Calcolo Media ad un Mese" (B)**.

Il software utilizzerà la media degli incassi e pagamenti per mese (calcolata da inizio anno fino al mese selezionato) e utilizzerà tali valori dal mese successivo preso come mese finale per simulare i flussi di cassa fino a fine anno.

La simulazione verrà esposta in forma grafica:

[Grafico a Linee: Simulazione con Calcolo della Media a Giugno, con linee per ENTRATE, USCITE e SALDO]

Oppure in formato tabellare:

| Mese | Riscossioni | Pagamenti | Saldo |
|---|---|---|---|
| Fondo di Cassa | 0,00 | 0,00 | 11.817.012,35 |
| Gennaio (*) | 1.270.229,30 | 1.862.500,85 | 11.224.740,80 |
| Febbraio (*) | 620.321,09 | 1.911.849,16 | 9.933.212,73 |
| Marzo (*) | 437.465,82 | 1.622.291,60 | 8.748.386,95 |
| Aprile (*) | 89.730,20 | 967.825,96 | 7.870.291,19 |
| Maggio (*) | 11.000,00 | 68.625,10 | 7.812.666,09 |
| Giugno (*) | 0,00 | 0,00 | 7.812.666,09 |
| Luglio (=) | 404.791,07 | 1.072.182,11 | 7.145.275,05 |
| Agosto (=) | 404.791,07 | 1.072.182,11 | 6.477.884,01 |
| Settembre (=) | 404.791,07 | 1.072.182,11 | 5.810.492,97 |
| Ottobre (=) | 404.791,07 | 1.072.182,11 | 5.143.101,93 |
| Novembre (=) | 404.791,07 | 1.072.182,11 | 4.475.710,89 |
| Dicembre (=) | 404.791,07 | 1.072.182,11 | 3.808.319,85 |
| **Totale** | **4.857.492,83** | **12.866.185,33** | |

> (*) Mese utilizzato per il Calcolo della Media
> (=) Mese con i valori della Media Calcolata

---

### 1.8 Simulazione Andamento da Scostamento Anno Precedente

Una volta calcolata la Situazione di Cassa è ora possibile fare una Simulazione del saldo di cassa partendo dallo scostamento delle entrate rispetto all'anno precedente.

Per ottenerla, indicare il **"Mese Finale per Calcolo Media"** (che di seguito chiameremo **"mese compiuto"**) **(A)** e quindi avviare la **"Simulazione con Calcolo Media ad un Mese" (B)**.

#### Modalità di calcolo per effettuare la simulazione:

**Entrate:**

1. Si utilizzano le entrate reali sino all'ultimo mese compiuto.
2. Si calcola la % delle entrate del periodo elaborato rispetto a quelle dello stesso periodo dell'anno precedente.

   **Esempio** con elaborazione su valori reali da gennaio a maggio 2020:
   - Entrate gennaio-maggio 2020 = 350.000
   - Entrate Gennaio-Maggio 2019 = 800.000
   - % 2020 su 2019 = 350.000 / 800.000 = **0,375**

3. Si stimano le Entrate per i mesi mancanti (dal mese compiuto) sino alla fine dell'anno applicando alle entrate reali dell'anno precedente la % di riduzione/aumento calcolata nel primo periodo.

   **Esempio:** entrate luglio 2019 = 400.000 → quota 2020 = 400.000 × 0,375 = **150.000**

**Uscite:**

1. Si utilizzano le spese dell'anno corrente sino all'ultimo mese compiuto.
2. Si utilizzano le stesse spese dell'anno precedente per i mesi mancanti dal mese compiuto alla fine dell'anno.

La simulazione verrà esposta in forma grafica:

[Grafico a Linee: Simulazione Su Scostamento Valori Anno Precedente a Giugno (Scost. 0,2265 Perc.Var. -77,35%), con linee per ENTRATE, USCITE e SALDO]

Oppure in formato tabellare:

| Mese | Provvisori Entrata | Provvisori Uscita + Ordinativi | Saldo |
|---|---|---|---|
| F.do Cassa 1 Gen | 0,00 | 0,00 | 11.817.012,35 |
| Gennaio (*) | 488.189,34 | 873.583,37 | 11.601.617,32 |
| Febbraio (*) | 495.681,29 | 1.042.270,18 | 10.135.022,43 |
| Marzo (*) | 966.914,92 | 1.263.109,00 | 9.828.428,95 |
| Aprile (*) | 358.943,90 | 891.582,88 | 9.295.788,97 |
| Maggio (*) | 0,00 | 87.625,10 | 9.208.163,87 |
| Giugno (*) | 133.028,48 | 3.128.721,90 | 6.246.470,45 |
| Luglio (=) | 113.549,03 | 843.289,43 | 5.614.730,05 |
| Agosto (=) | 168.697,78 | 1.035.891,00 | 4.847.606,12 |
| Settembre (=) | 132.664,54 | 1.225.119,46 | 3.965.151,20 |
| Ottobre (=) | 114.592,71 | 1.620.982,00 | 2.258.749,92 |
| Novembre (=) | 1.086.761,93 | 1.802.384,62 | 1.613.747,13 |
| **Totale** | **3.998.976,49** | **14.302.441,71** | |

> (*) Mese utilizzato per il Calcolo della Simulazione
> (=) Mese con i Valori della Simulazione (calcolati)

È possibile inoltre visualizzare i valori ed i criteri di calcolo mediante l'apposito bottone **'Valori del Calcolo'**.

**Esempio - Valori Simulazione andamento da Scostamento Anno Precedente:**

**ENTRATA: Elenco dei Mesi con Valori considerati per il Calcolo**

| Mese | Anno Precedente | Anno Corrente | Differenza |
|---|---|---|---|
| Gennaio | 2.291.875,48 | 488.189,34 | -1.833.687,14 |
| Febbraio | 497.281,19 | 495.681,29 | -21.599,90 |
| Marzo | 945.010,29 | 966.914,92 | 21.904,23 |
| Aprile | 531.298,63 | 358.942,90 | -272.325,13 |
| Maggio | 992.352,91 | 0,00 | -992.352,91 |
| Giugno | 6.681.132,50 | 0,00 | -6.681.132,50 |
| **TOTALE** | **9.928.920,40** | **2.249.327,05** | **-7.679.593,35** |

Rapportando il Totale dell'Anno Corrente con quello dell'Anno Precedente, per i 6 Mesi considerati, si ottiene il seguente Coefficiente di Scostamento, da applicare ai mesi successivi:

| VALORE DELLO SCOSTAMENTO | Coefficiente | Percentuale |
|---|---|---|
| | 0,2265 | -77,35% |

**RICALCOLATI:**

| Mese | Anno Precedente | Coefficiente | Val. Simulazione | (= Imp.Anno Prec.) | USCITE |
|---|---|---|---|---|---|
| Luglio | 501.322,58 | 0,2265 | 133.558,45 | 1.128.721,90 | |
| Agosto | 601.306,97 | 0,2265 | 113.549,03 | 843.289,43 | |
| Settembre | 744.802,56 | 0,2265 | 168.697,78 | 1.035.891,00 | |
| Ottobre | 585.715,42 | 0,2265 | 132.664,54 | 1.225.119,46 | |
| Novembre | 505.742,84 | 0,2265 | 114.592,71 | 1.620.982,00 | |
| Dicembre | 4.798.065,92 | 0,2265 | 1.086.761,93 | 1.802.384,62 | |

Cliccando in **"Esporta XLSX"** si esportano i dati in formato Excel.

**Altro esempio:**

[Grafico a Linee: Simulazione Su Scostamento Valori Anno Precedente a Settembre (Scost. 0,7877), con linee per ENTRATE, USCITE e SALDO]

---

## 2. Allegato A

Promemoria per inserimento saldi iniziali di cassa.

### 2.1 Inserimento Fondo di Cassa al 1° Gennaio dell'Esercizio

Dalla **stampa del rendiconto** selezionare **'Valori Extra Bilancio'**.

[Schermata: finestra di stampa rendiconto con sezione "Importi Conto Consuntivo" evidenziata, campo "Fondo di Cassa al primo Gennaio (definitivo)" con valore 1.000.000,00]

### 2.2 Inserimento Fondo di Cassa al 1° Gennaio per Conto

Dalla **'Tabella dei conti di tesoreria'**.

[Schermata: form di modifica conto di tesoreria con campi: Codice conto tesoreria "01", Descrizione "Contabilità Infurtifera Libera", Classe conto "Infurtifero", Tipo conto "Libero", Saldo iniziale € "300.000,00"]

---

## Rilascio implementazioni al software

La modifica è disponibile in **Cityware Online**.