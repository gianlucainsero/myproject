# Comunicazione n. 16/2018 – Automatismi in contabilità generale: gestione dei ratei e risconti da impegni ed accertamenti

**Data:** 30/12/2018

---

## Ricerca contropartita su impegni/accertamenti

La ricerca del conto di co.ge negli impegni/accertamenti è stata ristretta ai soli conti di contropartita presenti sulla matrice di correlazione, quindi:

- I conti presenti sulla colonna **DARE** della matrice per gli **impegni**
- I conti presenti sulla colonna **AVERE** per gli **accertamenti**

Come esempio, per gli impegni sul piano finanziario **1.3.2.5.1 Telefonia Fissa**, il conto proposto sarà **06.1.2.01.05.001 Telefonia Fissa**.

[Schermata: finestra "Piano dei conti" con ricerca contropartita per impegno, campo "Scelta Tipo Conto" impostato su "Contropartita"]

Comunque cliccando sul campo **Scelta Tipo Conto** su **Tutti** viene visualizzato anche il conto di debito, come era prima di tale implementazione.

[Schermata: stessa finestra con campo "Scelta Tipo Conto" impostato su "Tutti", che mostra anche il conto di debito]

---

## Stampa impegni per anno residuo

La stampa impegni per anno residuo, effettuata con la scelta **solo prospetti riepilogativi**, è stata modificata al fine di confrontare, per ogni conto del piano dei conti, i totali tra le scritture Co.Ge. e i residui finali o conservati.

[Schermata: finestra "Stampa impegni per anno residuo" con parametri di selezione, campo "Tipo elenco" impostato su "Residui iniziali (Conservati da esercizio precedente)" e campo "Tipo stampa" impostato su "Solo prospetti riepilogativi"]

[Schermata: prospetto riepilogativo "RIEPILOGO SINTETICO PER CONTO CREDITO/DEBITO" con colonne: CONTO CO.GE, DESCRIZIONE CONTO CREDITO/DEBITO, IMP.da FIN, Imp. da COGE, DIFFERENZA]

Ne consegue che la stampa va effettuata in diversi momenti durante la fase di chiusura della Co.Ge. Se si effettua alla fine delle scritture di Co.Ge. vengono evidenziate varie differenze tra le due situazioni.

---

## Automatismi per la gestione dei ratei e risconti

### Breve introduzione su ratei e risconti

Un **rateo** è una quota di entrata o uscita futura che misura ricavi o costi già maturati, ma non ancora rilevati, poiché la loro manifestazione finanziaria avrà luogo in esercizi futuri.

- Il **rateo attivo** è la quota di ricavo di competenza dell'esercizio, la cui manifestazione finanziaria avverrà in un esercizio successivo.
- Il **rateo passivo** è la quota di costo di competenza dell'esercizio, che avrà la propria manifestazione finanziaria in un esercizio successivo.

Il **risconto** è una quota di costo o di ricavo non ancora maturata, ma che ha già avuto la sua manifestazione finanziaria.

- Si parla di **risconti attivi** nel caso di un costo già sostenuto, ma da stornare in parte, in quanto parzialmente di competenza dell'esercizio successivo.
- Si parla invece di **risconti passivi** nel caso di un ricavo già conseguito, ma (parzialmente o totalmente) di competenza dell'esercizio successivo.

---

### Spesa: rateo passivo

Il rateo considerato nelle spese è un costo dell'anno successivo che deve essere riportato nell'anno in corso, ad esempio un **affitto pagato alla fine dell'usufrutto dell'immobile**. L'impegno viene preso nell'anno di pagamento quindi liquidato e pagato **ALLA FINE DEL CONTRATTO**.

La **QUOTA** dell'importo dell'impegno è riferito all'anno precedente; questa quota va inserita nell'impegno nell'apposito campo se si vuole utilizzare l'automatismo del rateo.

#### Esempio pratico

Si considera il periodo **01.09.2018 – 31.08.2019** dove la quota matura al termine del contratto quindi nell'esercizio 2019. Essendo noti i termini per l'assunzione dell'impegno, è possibile già alla fine dell'esercizio 2018 o nei primi mesi dell'esercizio 2019, assumere l'impegno nell'esercizio 2019 per l'intero importo, esempio di **euro 42.000**, indicando la quota di rateo di competenza dell'esercizio 2018, pari ad euro **14.038,36**.

Il calcolo è agevolato cliccando sulla calcolatrice:

[Schermata: finestra "Calcolo Rateo" con campi: Periodo Rateo (Dal 01-09-2018 Al 31-12-2018, Giorni Periodo Rateo: 122), Periodo Competenza (Dal 01-01-2019 Al 31-08-2019, Giorni Periodo Competenza: 243), Totale giorni periodo: 365, Importo impegno: € 42.000,00, formula: / 365 * 122 =, Importo Rateo: € 14.038,36]

**Formula di calcolo del rateo:**

$$\text{Importo Rateo} = \frac{\text{Importo impegno}}{\text{Totale giorni periodo}} \times \text{Giorni Periodo Rateo}$$

$$\text{Importo Rateo} = \frac{42.000{,}00}{365} \times 122 = 14.038{,}36$$

Tale importo va inserito nell'impegno nell'apposito campo; cliccando su **Conferma** viene riportato nell'apposito campo.

[Schermata: form "Registrazioni in Co.Ge." dell'impegno 2019/00072 con campo "Ratei-Risconti" impostato su "2=Rateo" e "Importo Rateo-Risconto" valorizzato a 14.038,36]

#### Creazione prima nota da impegni – Opzione 5

Nella creazione prima nota da impegni è stata aggiunta l'opzione:

> **5 – Apertura rateo anno corrente e chiusura su anno successivo**

Questa funzione, effettuata nell'esercizio di apertura (2018 nel caso), elabora gli impegni dell'anno successivo che hanno l'importo rateo valorizzato, in modo tale da produrre:

- La scrittura in **competenza 2018** per l'apertura rateo
- La scrittura in **competenza anno 2019** per la chiusura dello stesso rateo

L'opzione chiede la data di registrazione della prima nota per l'anno successivo; il default è **02.01.esercizio+1**, mentre quella di apertura è impostata al **31.12** dell'esercizio corrente.

[Schermata: finestra "Creazione Prima Nota da Impegni/Accertamenti" con Modalità di creazione impostata su "5 - Apertura rateo anno corrente e chiusura anno successivo", causali contabili 7000 e 7001, date competenza E.s. Corrente: 31-12-2018 e E.s. Succ.: 02-01-2019]

#### Scritture prodotte

| Data reg. | Progr. | Causale/Provenienza | Rif. Fin. | Codice e descrizione Conto | DARE | AVERE |
|-----------|--------|---------------------|-----------|----------------------------|------|-------|
| 31-12-2018 | 252277 | 7000 Apertura Ratei passivi | 14 - Ratei Imp. 2019-00072 | 02.1.3.03.01.01.001 Ratei da debito su altri costi | 14.038,36 | |
| | | | | 06.1.3.01.01.001 Locazioni di beni immobili | | 14.038,36 |
| | | | | **Totale per data registrazione = 31-12-2018** | **14.038,36** | **14.038,36** |
| 02-01-2019 | 252278 | 7011 Apertura Ratei passivi | 14 - Ratei Imp. 2019-00072 | 02.1.3.03.01.01.001 Ratei da debito su altri costi | | 14.038,36 |
| | | | | 06.1.3.01.01.001 Locazioni di beni immobili | 14.038,36 | |
| | | | | **Totale per data registrazione = 02-01-2019** | **14.038,36** | **14.038,36** |

Le 2 registrazioni create sono memorizzate sul record dell'impegno elaborato. Quindi, nell'esercizio 2019, sull'impegno **2019/00072** sono registrati i progressivi delle scritture negli esercizi 2018 e 2019:

[Schermata: form "Registrazioni in Co.Ge." dell'impegno 2019/00072 con campi "Scrittura Rateo 2018: 252277" e "Scrittura Rateo 2019: 252278"]

---

### Entrate: rateo attivo

Per le entrate il comportamento è in modo **DUALE** delle spese.

Il rateo considerato nelle Entrate è un ricavo dell'anno successivo che deve essere riportato nell'anno in corso. Ad esempio un affitto incassato alla fine dell'usufrutto **30.05.2019** dell'impianto sportivo: l'accertamento verrà preso nell'anno di incasso pari a **12.000,00**, quindi riscosso e incassato nell'anno successivo, ma una parte dell'accertamento pari a **7.054,94 euro** è riferito all'anno precedente. Questa quota va inserita nell'accertamento nell'apposito campo, mediante il tasto calcola si ottiene l'importo.

[Schermata: finestra "Calcolo Rateo" con campi: Periodo Rateo (Dal 01-06-2018 Al 31-12-2018, Giorni Periodo Rateo: 214), Periodo Competenza (Dal 01-01-2019 Al 30-05-2019, Giorni Periodo Competenza: 150), Totale giorni periodo: 364, Importo accertamento: € 12.000,00, formula: / 364 * 214 =, Importo Rateo: € 7.054,94]

**Formula di calcolo del rateo attivo:**

$$\text{Importo Rateo} = \frac{\text{Importo accertamento}}{\text{Totale giorni periodo}} \times \text{Giorni Periodo Rateo}$$

$$\text{Importo Rateo} = \frac{12.000{,}00}{364} \times 214 = 7.054{,}94$$

Quindi cliccando su **Conferma** si ottiene:

[Schermata: form "Registrazioni in Co.Ge." dell'accertamento con campo "Ratei-Risconti" impostato su "2=Rateo" e "Importo Rateo-Risconto" valorizzato a 7.054,94]

#### Creazione prima nota da accertamenti – Opzione 5

Nella creazione prima nota da accertamenti è stata aggiunta l'opzione:

> **5 – Apertura rateo anno corrente e chiusura su anno successivo**

Questa funzione elabora gli accertamenti dell'anno successivo che hanno l'importo rateo valorizzato in modo tale da produrre:

- La scrittura in **competenza 2018** per l'apertura rateo
- La scrittura in **competenza anno 2019** per la chiusura dello stesso rateo

L'opzione chiede la data di registrazione della prima nota per l'anno successivo; il default è **02.01.esercizio+1**, mentre quella di apertura è impostata al **31.12** dell'esercizio corrente.

[Schermata: finestra "Creazione Prima Nota da Impegni/Accertamenti" con Modalità di creazione impostata su "5 - Apertura rateo anno corrente e chiusura anno successivo", causali contabili 7012 e 7011, date competenza E.s. Corrente: 31-12-2018 e E.s. Succ.: 02-01-2019]

#### Scritture prodotte

| Data reg. | Progr. | Causale/Provenienza | Rif. Fin. | Codice e descrizione Conto | DARE | AVERE |
|-----------|--------|---------------------|-----------|----------------------------|------|-------|
| 31-12-2018 | 252279 | 7010 Apertura Ratei attivi | 14 - Ratei Acc. 2019-00014 | 01.4.1.01.01.01.001 Ratei attivi | 7.054,94 | |
| | | | | 05.2.4.02.02.001 Locazioni di altri beni immobili | | 7.054,94 |
| | | | | **Totale per data registrazione = 31-12-2018** | **7.054,94** | **7.054,94** |
| 02-01-2019 | 252280 | 7011 Apertura Ratei attivi | 14 - Ratei Acc. 2019-00014 | 01.4.1.01.01.01.001 Ratei attivi | | 7.054,94 |
| | | | | 05.2.4.02.02.001 Locazioni di altri beni immobili | 7.054,94 | |
| | | | | **Totale per data registrazione = 02-01-2019** | **7.054,94** | **7.054,94** |

Le 2 registrazioni create sono memorizzate sul record dell'accertamento elaborato. Quindi nell'accertamento **2019/00014**, sono registrati i progressivi delle scritture negli esercizi 2018 e 2019:

[Schermata: form "Registrazioni in Co.Ge." dell'accertamento 2019/00014 con campi "Scrittura Rateo 2018: 252279" e "Scrittura Rateo 2019: 252280"]

---

## Risconto

I **risconti attivi** sono spese la cui competenza interessa oltre l'esercizio corrente anche esercizi futuri, mentre il **risconto passivo** è un'entrata la cui competenza interessa oltre l'esercizio corrente anche esercizi futuri.

---

### Spese: Risconto attivo

Il Risconto attivo è una spesa effettuata nell'anno corrente che però va a cavallo di due anni. Ad esempio l'assicurazione di un'automobile di **1.200,00 €** con periodo di competenza dal **01.09.2018 al 31.08.2019**, quindi il costo dell'anno va diminuito della parte relativa all'anno successivo.

[Schermata: form "Dettaglio Impegno" 2018/00166 con dati: Capitolo 1202110, Importo iniziale € 1.200,00, Oggetto "Canone assicurazione auto vigili", tab "CO.GE-CO.ANA." selezionata]

L'importo del risconto è gestito sugli impegni nella form dedicata alla Co.Ge. Mediante il tasto **calcola** viene proposto l'importo da inserire.

[Schermata: finestra "Calcolo risconto" con campi: Periodo Competenza (Dal 01-09-2018 Al 31-12-2018, Giorni Periodo Competenza: 122), Periodo Risconto (Dal 01-01-2019 Al 31-08-2019, Giorni Periodo Risconto: 243), Totale giorni periodo: 365, Importo impegno: € 1.200,00, formula: / 365 * 243 =, Importo Risconto: € 798,90]

**Formula di calcolo del risconto:**

$$\text{Importo Risconto} = \frac{\text{Importo impegno}}{\text{Totale giorni periodo}} \times \text{Giorni Periodo Risconto}$$

$$\text{Importo Risconto} = \frac{1.200{,}00}{365} \times 243 = 798{,}90$$

La quota da riscontare va inserita nell'impegno nell'apposito campo; cliccando su **Conferma** viene riportata in automatico.

[Schermata: form "Registrazioni in Co.Ge." dell'impegno 2018/00166 con campo "Ratei-Risconti" impostato su "1=Risconto" e "Importo Rateo-Risconto" valorizzato a 798,90]

#### Creazione prima nota da impegni – Opzione 6

Nella creazione prima nota da impegni è stata aggiunta l'opzione:

> **6 – Apertura risconto attivo anno corrente chiusura anno successivo**

L'opzione chiede la data di registrazione della prima nota per l'anno successivo; il default è **02.01.esercizio+1**, mentre quella di apertura è impostata al **31.12** dell'esercizio corrente.

Le 2 registrazioni create sono memorizzate sul record dell'impegno elaborato.

[Schermata: finestra "Creazione Prima Nota da Impegni/Accertamenti" con Modalità di creazione impostata su "6 - Apertura risconto attivo anno corrente e chiusura anno successivo", causali contabili 5405 e 5415, date competenza E.s. Corrente: 31-12-2018 e E.s. Succ.: 02-01-2019]

Il programma elabora tutti gli impegni **2018/xxxx** che hanno l'importo risconto valorizzato.

#### Scritture prodotte

| Data reg. | Progr. | Causale/Provenienza | Rif. Fin. | Codice e descrizione Conto | DARE | AVERE |
|-----------|--------|---------------------|-----------|----------------------------|------|-------|
| 31-12-2018 | 252281 | 5405 Risconti Attivi / Ratei Passivi INIZIALI | 21 - Risconti Imp. 2018-00166 | 01.9.03.01.01.001 Risconti attivi | 798,90 | |
| | | | | 06.1.9.03.01.003 Premi di assicurazione per responsabilità civ... | | 798,90 |
| | | | | **Totale per data registrazione = 31-12-2018** | **798,90** | **798,90** |
| 02-01-2019 | 252282 | 5415 Risconti Attivi / Ratei Passivi FINALI | 21 - Risconti Imp. 2018-00166 | 01.9.03.01.01.001 Risconti attivi | | 798,90 |
| | | | | 06.1.9.03.01.003 Premi di assicurazione per responsabilità civ... | 798,90 | |
| | | | | **Totale per data registrazione = 02-01-2019** | **798,90** | **798,90** |

Le 2 registrazioni create sono memorizzate sul record dell'impegno elaborato. Quindi nell'impegno **2018/00166** dell'esercizio corrente sono registrati i progressivi delle scritture negli esercizi 2018 e 2019:

[Schermata: form "Registrazioni in Co.Ge." dell'impegno 2018/00166 con campi "Scrittura Risconto 2018: 252281" e "Scrittura Risconto 2019: 252282"]

---

### Entrata: Risconto passivo

Per le entrate il comportamento è il **DUALE** delle spese.

Il Risconto passivo è un'entrata effettuata nell'anno corrente che però va a cavallo di due anni o più anni. Ad esempio l'incasso di un affitto di **12.000** incassato anticipatamente al primo settembre: il ricavo riguarda fino a dicembre l'anno corrente, fino ad agosto dell'anno successivo, quindi il ricavo dell'anno pari a 12.000 va diminuito della parte relativa all'anno successivo.

La gestione dell'importo avviene sull'accertamento nella form di Co.Ge. e per il calcolo si può utilizzare la funzione apposita (calcolatrice).

[Schermata: finestra "Calcolo risconto" con campi: Periodo Competenza (Dal 01-09-2018 Al 31-12-2018, Giorni Periodo Competenza: 122), Periodo Risconto (Dal 01-01-2019 Al 31-08-2019, Giorni Periodo Risconto: 243), Totale giorni periodo: 365, Importo accertamento: € 12.000,00, formula: / 365 * 243 =, Importo Risconto: € 7.989,04]

**Formula di calcolo del risconto passivo:**

$$\text{Importo Risconto} = \frac{\text{Importo accertamento}}{\text{Totale giorni periodo}} \times \text{Giorni Periodo Risconto}$$

$$\text{Importo Risconto} = \frac{12.000{,}00}{365} \times 243 = 7.989{,}04$$

Cliccando su **Conferma** viene inserito l'importo sul campo specifico.

[Schermata: form "Registrazioni in Co.Ge." dell'accertamento 2018/00021 con campo "Ratei-Risconti" impostato su "1=Risconto" e "Importo Rateo-Risconto" valorizzato a 7.989,04]

#### Creazione prima nota da accertamenti – Opzione 6

Nella creazione prima nota da accertamenti è stata aggiunta l'opzione:

> **6 – Apertura risconto attivo anno corrente chiusura anno successivo**

L'opzione chiede la data di registrazione della prima nota per l'anno successivo; il default è **02.01.esercizio+1**, mentre quella di apertura è impostata al **31.12** dell'esercizio corrente.

[Schermata: finestra "Creazione Prima Nota da Impegni/Accertamenti" con Modalità di creazione impostata su "6 - Apertura risconto attivo anno corrente e chiusura anno successivo", causali contabili 5405 e 5415, data competenza E.s. Corrente: 31-12-2018 e E.s. Succ.: 02-01-2019]

Se la scelta è **6**, il programma elabora tutti gli accertamenti **2018/xxxx** che hanno l'importo risconto valorizzato.

#### Scritture prodotte

| Data reg. | Progr. | Causale/Provenienza | Rif. Fin. | Codice e descrizione Conto | DARE | AVERE |
|-----------|--------|---------------------|-----------|----------------------------|------|-------|
| 31-12-2018 | 252283 | 5400 Risconti Passivi / INIZIALI | 21 - Risconti Acc. 2018-00021 | 02.5.2.09.01.01.001 Altri risconti passivi | | 7.989,04 |
| | | | | 05.2.4.02.02.001 Locazioni di altri beni immobili | 7.989,04 | |
| | | | | **Totale per data registrazione = 31-12-2018** | **7.989,04** | **7.989,04** |
| 02-01-2019 | 252284 | 5410 Risconti Passivi / INIZIALI | 21 - Risconti Acc. 2018-00021 | 02.5.2.09.01.01.001 Altri risconti passivi | 7.989,04 | |
| | | | | 05.2.4.02.02.001 Locazioni di altri beni immobili | | 7.989,04 |
| | | | | **Totale per data registrazione = 02-01-2019** | **7.989,04** | **7.989,04** |

Le 2 registrazioni create sono memorizzate sul record dell'accertamento elaborato, nell'esercizio corrente. Quindi nell'accertamento **2018/00021**, sono registrati i progressivi delle scritture negli esercizi 2018 e 2019:

[Schermata: form "Registrazioni in Co.Ge." dell'accertamento 2018/00021 con campi "Scrittura Risconto 2018: 252283" e "Scrittura Risconto 2019: 252284"]

---

## Rilascio implementazioni al software

La modifica è disponibile a partire dalla **release 7.02** ed è stata distribuita con gli aggiornamenti di dicembre 2018.