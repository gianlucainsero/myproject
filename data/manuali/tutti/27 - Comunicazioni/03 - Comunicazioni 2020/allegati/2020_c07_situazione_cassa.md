# Comunicazione n. 07/2020 - Situazione di Cassa

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

## Accesso alla funzionalità

La nuova funzionalità è disponibile su **Cityware Online** e raggiungibile dal seguente menù:

**MENU → 150. Servizi Economici → 100. Statistiche → 35. Situazione di Cassa alla Data**

[Schermata del percorso di menu: MENU > 150. Servizi Economici > 100. Statistiche > 35. Situazione di Cassa alla Data]

---

## 1. Situazione di Cassa alla Data

La Situazione di Cassa ad una certa Data ricostruisce i saldi al momento richiesto. I Mandati e le Reversali utilizzati come base di calcolo sono quelli inclusi nell'esercizio contabile a cui si è collegati e con data compresa dal 1° gennaio dell'esercizio fino alla data selezionata **(A)**.

È possibile applicare il filtro delle Date sulla **"Data di Emissione"** o sulla **"Data Valuta"** **(B)**.

[Schermata: campo "Situazione dal 01-01-2019 al 31/12/2019" (A), dropdown "Selezionare per" con opzioni "Data Emissione" e "Data Valuta" (B), pulsante "Calcola Situazione di Cassa alla Data" (C)]

Per avviare il Calcolo, utilizzare **"Calcola Situazione di Cassa alla data"** **(C)**.

### Aggiunto nuovo tipo di selezione: 'Data effettiva movimentazione di cassa'

[Schermata: dropdown "Selezionare per" con opzioni "Data Emissione", "Data Valuta", "Data Effettiva Movimentazione Cassa"]

Per questo tipo di selezione il software si comporta in maniera differente per calcolare il saldo delle entrate rispetto alle uscite. I movimenti inclusi nel calcolo possono essere riassunti nella seguente tabella:

| Parte | Movimenti inclusi nel calcolo |
|-------|-------------------------------|
| Entrate | Vengono elaborati tutti i provvisori di entrata provenienti dalla tesoreria relativi all'esercizio contabile a cui si è collegati aventi data provvisorio compresa nel periodo indicato a video |
| Uscite | Vengono elaborati i provvisori di uscita provenienti dalla tesoreria relativi all'esercizio contabile a cui si è collegati aventi data provvisorio compresa nel periodo indicato a video. Al totale dei movimenti precedenti vengono sommati gli importi "netti" dei mandati che non risultano essere a copertura di provvisori e/o a compensazione |

Per tutte le opzioni (Data Emissione, Data Valuta, Data Effettiva Movimentazione Cassa) gli ordinativi in sostituzione di altri vengono esclusi dal calcolo in quanto come movimentazione di cassa viene presa quella dell'ordinativo iniziale che è stato poi sostituito.

Per avviare il Calcolo, utilizzare **"Calcola Situazione di Cassa alla data"** **(C)**.

Dopo aver avviato il calcolo in base al tipo di selezione scelta si attiva uno dei seguenti bottoni che consente di esportare la lista dei movimenti utilizzati per il calcolo:

- **Scarica Reversali e Mandati utilizzati per il Calcolo** → Per tipo simulazione 'Data emissione' e/o 'Data Valuta'
- **Scarica Provvisori ed Ordinativi utilizzati per il Calcolo** → Per tipo simulazione 'Data Effettiva movimentazione di Cassa'

---

### 1.1 Riepilogo Generale

Viene mostrata la situazione di cassa alla data selezionata.

[Schermata: Tab "Riepilogo Generale" con tabella GESTIONE (RESIDUI, COMPETENZA, TOTALI) contenente: Fondo di Cassa al 1° Gennaio, RISCOSSIONI (+), PAGAMENTI (-), Saldo di Cassa al 31 Dicembre (=)]

Cliccando in **"Esporta XLSX"** si esportano i dati in formato Excel.

---

### 1.2 Riepilogo per Conto di Tesoreria

Il riepilogo per conto di tesoreria è disponibile **solo per i tipi selezione per 'data emissione' e 'data valuta'**.

[Schermata: Tab "Riepiloghi Per Conto Tesoreria" con dropdown "Riepilogo Mensile del Conto" (A) e tabella "Riepilogo per Conto di Tesoreria" con sezioni per ogni conto (es. 01 Contabilità Infurtifera Libera, 02 Contabilità Fruttifera Libera, 04 Contabilità Infurtifera Vincolata) con colonne RESIDUI, COMPETENZA, SALDO]

La situazione di Partenza è il **"Saldo Iniziale dell'Anno"** (al 1° gennaio) del Conto stesso.

Cliccando in **"Esporta XLSX"** si esportano i dati in formato Excel.

Selezionando uno specifico Conto di Tesoreria **(A)** si ottiene il Riepilogo dello stesso.

[Schermata: dropdown con elenco conti: 01) Contabilità Infurtifera Libera, 02) Contabilità Fruttifera Libera, 04) Contabilità Infurtifera Vincolata, 11) Infurtifera Libera - Accr.Tes.Prov.Stato Tab.A, 12) Infurtifera Libera - Accr.Tes.Prov.Stato Tab.B]

[Schermata: Riepilogo per Mese del Conto: 01) Contabilità Infurtifera Libera con sezioni mensili (Gennaio, Febbraio, Marzo, Aprile) con colonne RESIDUI, COMPETENZA, SALDO]

Cliccando in **"Esporta XLSX"** si esportano i dati in formato Excel.

---

### 1.3 Riepilogo per Destinazione e Tipo di Contabilità

L'opzione è disponibile **solo per il tipo di selezione 'Data effettiva movimentazione di cassa'**.

#### Determinazione della Destinazione

La **destinazione** viene determinata nella seguente maniera:

- **Per i provvisori della tesoreria**: la destinazione viene reperita dal giornale di cassa fornito dalla tesoreria e ricevuto tramite sistema SiopePlus.

  Rif. regole tecniche OPI tag `<destinazione>`

  | Rif. | Campo | Tipo | Occ. | Descrizione |
  |------|-------|------|------|-------------|
  | 36.3.19 | destinazione | an | 0..1 | Può assumere i valori "LIBERA" o "VINCOLATA" (tale informazione può essere sostituita dall'imputazione sui conti di evidenza). |

- **Per i mandati**: l'informazione viene reperita dall'indicazione presente sulla tabella dei conti di tesoreria relativamente al conto su cui il mandato è stato emesso.

[Schermata: Tabella conti di tesoreria con campi "Codice conto tesoreria: 01", "Descrizione conto tesoreria: Contabilità Infurtifera Libera", "Classe conto: Infurtifero", "Tipo conto: Libero"]

#### Determinazione del Tipo di Contabilità

Il **tipo di contabilità** viene determinato nella seguente maniera:

- **Per i provvisori della tesoreria**: viene reperito dall'apposita informazione presente nel giornale di cassa fornito dalla tesoreria e ricevuto tramite sistema SiopePlus.

  (rif. regole tecniche OPI tag `<tipo_contabilità>`)

  | Rif. | Campo | Tipo | Occ. | Descrizione |
  |------|-------|------|------|-------------|
  | 36.3.18 | tipo_contabilita | an | 0..1 | Può assumere i seguenti valori: "FRUTTIFERO", "INFRUTTIFERO" |

- **Per i mandati**: l'informazione viene reperita dall'indicazione presente sulla tabella dei conti di tesoreria relativamente al conto su cui il mandato è stato emesso.

[Schermata: Tabella conti di tesoreria con "Classe conto: Infurtifero", "Tipo conto: Libero"]

#### Struttura del Riepilogo

Il Riepilogo contiene dapprima i **totali generali (A)** e poi i **totali per le varie combinazioni di tipo contabilità/destinazione (B)**.

[Schermata: Tabella "Riepilogo SALDI per Tipo" con colonne LIBERA, VINCOLATA, INFRUTTIFERA, FRUTTIFERA (A) e sezioni per combinazioni: LIBERA, LIBERA/FRUTTIFERA, LIBERA/INFRUTTIFERA, VINCOLATA/INFRUTTIFERA (B) con colonne RESIDUI, COMPETENZA, SALDO]

I saldi iniziali per le varie combinazioni tipo di contabilità/destinazione vengono calcolati facendo la somma del saldo cassa iniziale presente sulla tabella dei conti di tesoreria distinguendo i vari conti per le varie tipologie/destinazioni.

Cliccando in **"Esporta XLSX"** si esportano i dati in formato Excel.

Selezionando una specifica Combinazione di Tipo contabilità/Destinazione **(A)** si ottiene il Riepilogo per mese della combinazione selezionata.

[Schermata: dropdown "Riepilogo Mensile Destinazione/Tipo Contabilità" con opzioni: LIBERA/FRUTTIFERA, LIBERA/INFRUTTIFERA, VINCOLATA/INFRUTTIFERA (A)]

[Schermata: Riepilogo per Mese del Tipo Contabilità: LIBERA / FRUTTIFERA con sezioni mensili (Gennaio, Febbraio, Marzo, Aprile, Giugno) con colonne RESIDUI, COMPETENZA, SALDO]

La situazione di Partenza è la somma dei **"Saldi Iniziale dell'Anno"** (al 1° gennaio) desunta dalla tabella dei conti di tesoreria e sommati in base alla combinazione tipo contabilità/destinazione scelta.

Cliccando in **"Esporta XLSX"** si esportano i dati in formato Excel.

---

### 1.4 Riepilogo per Giorno

[Schermata: Tab "Riepilogo Per Giorno" con "Fondo di Cassa al 1° Gennaio" e sezioni giornaliere (es. Mercoledì 09-01-2019, Mercoledì 16-01-2019, Venerdì 18-01-2019, Martedì 22-01-2019) con colonne RESIDUI, COMPETENZA, SALDO]

La situazione di Partenza è il **"Fondo Iniziale di Cassa"**.

Cliccando in **"Esporta XLSX"** si esportano i dati in formato Excel.

---

### 1.5 Riepilogo per Mese

[Schermata: Tab "Riepilogo Per Mese" con "Fondo di Cassa al 1° Gennaio" e sezioni mensili (Gennaio, Febbraio, Marzo) con colonne RESIDUI, COMPETENZA, SALDO]

La situazione di Partenza è il **"Fondo Iniziale di Cassa"**.

Cliccando in **"Esporta XLSX"** si esportano i dati in formato Excel.

---

### 1.6 Grafici

È possibile visualizzare i dati come **"Grafico a Linee"** o **"Grafico a Barre"**, selezionabile dalla lista **"Tipo"**, come pure il tipo di dato **"per Mese"** o **"per Conto"**, selezionabile dalla lista **"Valori"**.

Qualora si scelga come valore "per Mese" appare una nuova lista, dalla quale è possibile selezionare il singolo Conto di Tesoreria di cui si intende visualizzare la rappresentazione grafica Mensile.

[Schermata: liste a tendina "Tipo" (Grafico a Linee / Grafico a Barre) e "Valori" (per Mese / per Conto), con ulteriore dropdown per selezione Conto di Tesoreria]

[Grafico a Linee: "SITUAZIONE DI CASSA - Riepilogo per Mese" con serie ENTRATE (verde), USCITE (rosso), SALDO (azzurro) su asse X da Fondo di Cassa a Dicembre]

[Grafico a Barre: "SITUAZIONE DI CASSA - Riepilogo per Mese" con serie ENTRATE (verde), USCITE (rosso), SALDO (azzurro) su asse X da Fondo di Cassa a Dicembre]

Cliccando in **"Esporta XLSX"** si esportano i dati in formato Excel.

Cliccando in **"Dati del Grafico"** vengono visualizzati in forma tabellare i valori esposti graficamente.

[Schermata: finestra "Dati del Grafico in forma Tabellare" con tabella Mese, Riscossioni, Pagamenti, Saldo]

[Schermata: finestra "Dati del Grafico in forma Tabellare" con tabella "Riepilogo per Conto di Tesoreria" con colonne Conto di Tesoreria, Saldo Iniziale, Riscossioni, Pagamenti, Saldo]

---

### 1.7 Simulazione Andamento da Media Periodo

Una volta calcolata la Situazione di Cassa è possibile fare una Simulazione partendo dalla Media Calcolata ad un certo mese. Per ottenerla, indicare il **"Mese Finale per Calcolo Media" (A)** e quindi avviare la **"Simulazione con Calcolo Media ad un Mese" (B)**.

Il software utilizzerà la media degli incassi e pagamenti per mese (calcolata da inizio anno fino al mese selezionato) e utilizzerà tali valori dal mese successivo preso come mese finale per simulare i flussi di cassa fino a fine anno.

La simulazione verrà esposta in forma grafica:

[Grafico a Linee: "Simulazione con Calcolo della Media a Giugno" con serie ENTRATE (verde), USCITE (rosso), SALDO (azzurro) da F.do Cassa 1 Gen a Dicembre]

Oppure in formato tabellare:

[Schermata: finestra "Dati del Grafico in forma Tabellare" con tabella "Simulazione per Mese" con colonne Mese, Riscossioni, Pagamenti, Saldo. Note: (*) Mese utilizzato per il Calcolo della Media, (=) Mese con i Valori della Media Calcolata]

---

### 1.8 Simulazione Andamento da Scostamento Anno Precedente

Una volta calcolata la Situazione di Cassa è ora possibile fare una Simulazione del saldo di cassa partendo dallo scostamento delle entrate rispetto all'anno precedente.

Per ottenerla, indicare il **"Mese Finale per Calcolo Media"** (che di seguito chiameremo "mese compiuto") **(A)** e quindi avviare la **"Simulazione con Calcolo Media ad un Mese" (B)**.

#### Modalità di calcolo per la simulazione:

**Entrate:**

1. Si utilizzano le entrate reali sino all'ultimo mese compiuto.
2. Si calcola la % delle entrate del periodo elaborato rispetto a quelle dello stesso periodo dell'anno precedente.

   **Esempio** con elaborazione su valori reali da gennaio a maggio 2020:
   - Entrate gennaio-maggio 2020 = 350.000
   - Entrate Gennaio-Maggio 2019 = 800.000
   - % 2020 su 2019 = 350.000 / 800.000 = **0.375**

3. Si stimano le Entrate per i mesi mancanti (dal mese compiuto) sino alla fine dell'anno applicando alle entrate reali dell'anno precedente la % di riduzione/aumento calcolata nel primo periodo.

   **Esempio:** entrate luglio 2019 = 400.000 → quota 2020 = 400.000 × 0.375 = **150.000**

**Uscite:**

1. Si utilizzano le spese dell'anno corrente sino all'ultimo mese compiuto.
2. Si utilizzano le stesse spese dell'anno precedente per i mesi mancanti dal mese compiuto alla fine dell'anno.

La simulazione verrà esposta in forma grafica:

[Grafico a Linee: "Simulazione Su Scostamento Valori Anno Precedente a Giugno (Scost. 0.2265 Perc.Var. -77,35%)" con serie ENTRATE (verde), USCITE (rosso), SALDO (azzurro)]

Oppure in formato tabellare:

[Schermata: finestra "Dati del Grafico in forma Tabellare" con tabella "Simulazione per Mese" con colonne Mese, Provvisori Entrata, Provvisori Uscita + Ordinativi, Saldo. Note: (*) Mese utilizzato per il Calcolo della Simulazione, (=) Mese con i Valori della Simulazione (calcolati)]

È possibile inoltre visualizzare i valori ed i criteri di calcolo mediante l'apposito bottone **"Valori del Calcolo"**.

[Schermata: finestra "Valori Simulazione andamento da Scostamento Anno Precedente" con:
- Sezione ENTRATA: Elenco dei Mesi con Valori considerati per il Calcolo (colonne: Mese, Anno Precedente, Anno Corrente, Differenza)
- Sezione VALORE DELLO SCOSTAMENTO: Coefficiente e Percentuale
- Sezione RICALCOLATI: Mesi mancanti con Anno Precedente, Coefficiente, Val. Simulazione, (= Imp.Anno Prec.)]

Cliccando in **"Esporta XLSX"** si esportano i dati in formato Excel.

#### Altro esempio

[Grafico a Linee: "Simulazione Su Scostamento Valori Anno Precedente a Settembre (Scost. 0,7877)" con serie ENTRATE (verde), USCITE (rosso), SALDO (azzurro) su asse X da F.do Cassa 1 Gen a Dicembre]

---

## 2. Allegato A

Promemoria per inserimento saldi iniziali di cassa.

### 2.1 Inserimento Fondo di Cassa al 1° Gennaio dell'Esercizio

Dalla **stampa del rendiconto** selezionare **'Valori Extra Bilancio'**.

[Schermata: finestra di stampa rendiconto con checkbox "Valori Extra Bilancio" selezionata, e pannello "Importi Conto Consuntivo" con campo "Fondo di Cassa al primo Gennaio (definitivo): 1.000.000,00"]

### 2.2 Inserimento Fondo di Cassa al 1° Gennaio per Conto

Dalla **'Tabella dei conti di tesoreria'**.

[Schermata: Tabella conti di tesoreria con campi: "Codice conto tesoreria: 01", "Descrizione conto tesoreria: Contabilità Infurtifera Libera", "Classe conto: Infurtifero", "Tipo conto: Libero", "Saldo iniziale €: 300.000,00"]

---

## Rilascio implementazioni al software

La modifica è disponibile in **Cityware Online**.