# Comunicazione n. 16/2018

**Oggetto:** Automatismi in contabilità generale

**Scopo:** Gestione dei ratei e risconti da impegni ed accertamenti

---

## 1. Ricerca contropartita su impegni/accertamenti

La ricerca del conto di co.ge negli impegni/accertamenti è stata ristretta ai soli conti di contropartita presente sulla matrice di correlazione, quindi i conti presenti sulla colonna **DARE** della matrice per gli impegni e i conti presenti sulla colonna **AVERE** per gli accertamenti.

Come esempio, si potrà notare che per gli impegni sul piano finanziario **1.3.2.5.1 Telefonia Fissa** il conto proposto sarà **06.1.2.01.05.001 Telefonia Fissa**.

[Schermata: finestra di ricerca conto Co.Ge. con piano finanziario 1.3.2.5.1 Telefonia Fissa e conto proposto 06.1.2.01.05.001]

Comunque cliccando sul campo **Scelta Tipo Conto** su **Tutti** viene visualizzato anche il conto di debito, come era prima di tale implementazione:

[Schermata: finestra di ricerca conto con albero del piano dei conti e opzione "Tutti" selezionata]

---

## 2. Stampa impegni per anno residuo

La stampa impegni per anno residuo, effettuata con la scelta **solo prospetti riepilogativi**:

[Schermata: finestra parametri di selezione per stampa impegni per anno residuo con opzione "Solo prospetti riepilogativi" selezionata]

è stata modificata al fine di confrontare, per ogni conto del piano dei conti, i totali tra le scritture Co.Ge. e i residui finali o conservati.

[Schermata: prospetto sintetico per conto credito/debito con colonne CONTO CO.GE, DESCRIZIONE CONTO CREDITO/DEBITO, IMP.da FIN, Imp. da COGE, DIFFERENZA]

Ne consegue che la stampa va effettuata in diversi momenti durante la fase di chiusura della Co.Ge. Se si effettua alla fine delle scritture di Co.Ge. vengono evidenziate varie differenze tra le due situazioni.

---

## 3. Automatismi per la gestione dei ratei e risconti

### 3.1 Breve introduzione su ratei e risconti

Un **rateo** è una quota di entrata o uscita futura che misura ricavi o costi già maturati, ma non ancora rilevati, poiché la loro manifestazione finanziaria avrà luogo in esercizi futuri.

- Il **rateo attivo** è la quota di ricavo di competenza dell'esercizio, la cui manifestazione finanziaria avverrà in un esercizio successivo.
- Il **rateo passivo** è la quota di costo di competenza dell'esercizio, che avrà la propria manifestazione finanziaria in un esercizio successivo.

Il **risconto** è una quota di costo o di ricavo non ancora maturata, ma che ha già avuto la sua manifestazione finanziaria.

- Si parla di **risconti attivi** nel caso di un costo già sostenuto, ma da stornare in parte, in quanto parzialmente di competenza dell'esercizio successivo.
- Si parla invece di **risconti passivi** nel caso di un ricavo già conseguito, ma (parzialmente o totalmente) di competenza dell'esercizio successivo.

---

### 3.2 Spesa: Rateo passivo

Il rateo considerato nelle spese è un costo dell'anno successivo che deve essere riportato nell'anno in corso, ad esempio un **affitto pagato alla fine dell'usufrutto dell'immobile**. L'impegno viene preso nell'anno di pagamento quindi liquidato e pagato **ALLA FINE DEL CONTRATTO**.

La **QUOTA** dell'importo dell'impegno è riferito all'anno precedente; questa quota va inserita nell'impegno nell'apposito campo se si vuole utilizzare l'automatismo del rateo.

Se si considera il periodo **01.09.2018 – 31.08.2019** dove la quota matura al termine del contratto quindi nell'esercizio 2019. Essendo noti i termini per l'assunzione dell'impegno, è possibile già alla fine dell'esercizio 2018 o nei primi mesi dell'esercizio 2019, assumere l'impegno nell'esercizio 2019 per l'intero importo esempio di **euro 42.000** indicando la quota di rateo di competenza dell'esercizio 2018, pari ad **euro 14.038,36**.

Il calcolo è agevolato cliccando sulla calcolatrice:

[Schermata: finestra "Calcolo Rateo" con i seguenti campi:]

| Campo | Valore |
|-------|--------|
| Periodo Rateo | Dal 01-09-2018 Al 31-12-2018 |
| Periodo Competenza | Dal 01-01-2019 Al 31-08-2019 |
| Giorni Periodo Rateo | 122 |
| Giorni Periodo Competenza | 243 |
| Totale giorni periodo | 365 |
| Importo impegno | € 42.000,00 |
| Formula | / 365 * 122 = |
| Importo Rateo | € 14.038,36 |

Tale importo va inserito nell'impegno nell'apposito campo, cliccando su **conferma** viene riportato nell'apposito campo.

[Schermata: form "Registrazioni in Co.Ge." dell'impegno 2019/00072 con campo "Importo Rateo-Risconto" valorizzato a 14.038,36 e campo "Ratei-Risconti" impostato su "2=Rateo"]

Nella creazione prima nota da impegni è stata aggiunta l'opzione:

> **5 – Apertura rateo anno corrente e chiusura su anno successivo**

Questa funzione, effettuata nell'esercizio di apertura (2018 nel caso), elabora gli impegni dell'anno successivo che hanno l'importo rateo valorizzato, in modo tale da produrre:
- la scrittura in **competenza 2018** per l'apertura rateo
- la scrittura in **competenza anno 2019** per la chiusura dello stesso rateo.

L'opzione chiede la data di registrazione della prima nota per l'anno successivo, il default è **02.01.esercizio+1**, mentre quella di apertura è impostata al **31.12 dell'esercizio corrente**.

[Schermata: finestra "Creazione Prima Nota da Impegni/Accertamenti" con opzione 5 selezionata, causali contabili 7000/7001 e date di competenza]

Le scritture prodotte saranno:

| Data reg. | Progr. | Causale | Conto | DARE | AVERE |
|-----------|--------|---------|-------|------|-------|
| 31-12-2018 | 252271 | 7000 Apertura Ratei passivi | 02.5.1.03.01.01.001 Banche da debito vs altri costi | | 14.038,36 |
| 31-12-2018 | 252271 | 14 - Ratei | 06.1.3.01.01.001 Locazione di beni immobili | 14.038,36 | |
| 02-01-2019 | 252278 | 7011 Chiusura Ratei passivi | 02.5.1.03.01.01.001 Banche da debito vs altri costi | 14.038,36 | |
| 02-01-2019 | 252278 | 14 - Ratei | 06.1.3.01.01.001 Locazione di beni immobili | | 14.038,36 |

Le 2 registrazioni create sono memorizzate sul record dell'impegno elaborato. Quindi, nell'esercizio 2019, sull'impegno **2019/00072** sono registrati i progressivi delle scritture negli esercizi 2018 e 2019:

[Schermata: form impegno 2019/00072 con campi "Scrittura Rateo 2018" = 252277 e "Scrittura Rateo 2019" = 252278]

---

### 3.3 Entrate: Rateo attivo

Per le entrate il comportamento è in modo **DUALE** delle spese.

Il rateo considerato nelle Entrate è un ricavo dell'anno successivo che deve essere riportato nell'anno in corso. Ad esempio un affitto incassato alla fine dell'usufrutto **30.05.2019** dell'impianto sportivo, l'accertamento verrà preso nell'anno di incasso pari a **12.000,00** quindi riscosso e incassato nell'anno successivo ma una parte dell'accertamento pari a **7.054,94 euro** è riferito all'anno precedente; questa quota va inserita nell'accertamento nell'apposito campo, mediante il tasto calcola si ottiene l'importo.

[Schermata: finestra "Calcolo Rateo" con i seguenti campi:]

| Campo | Valore |
|-------|--------|
| Periodo Rateo | Dal 01-06-2018 Al 31-12-2018 |
| Periodo Competenza | Dal 01-01-2019 Al 30-05-2019 |
| Giorni Periodo Rateo | 214 |
| Giorni Periodo Competenza | 150 |
| Totale giorni periodo | 364 |
| Importo accertamento | € 12.000,00 |
| Formula | / 364 * 214 = |
| Importo Rateo | € 7.054,94 |

Quindi cliccando su **conferma** si ottiene:

[Schermata: form "Registrazioni in Co.Ge." dell'accertamento con campo "Importo Rateo-Risconto" = 7.054,94 e "Ratei-Risconti" = "2=Rateo"]

Nella creazione prima nota da accertamenti è stata aggiunta l'opzione:

> **5 – Apertura rateo anno corrente e chiusura su anno successivo**

Questa funzione elabora gli accertamenti dell'anno successivo che hanno l'importo rateo valorizzato in modo tale da produrre:
- la scrittura in **competenza 2018** per l'apertura rateo
- la scrittura in **competenza anno 2019** per la chiusura del stesso rateo.

L'opzione chiede la data di registrazione della prima nota per l'anno successivo, il default è **02.01.esercizio+1**, mentre quella di apertura è impostata al **31.12 dell'esercizio corrente**.

[Schermata: finestra "Creazione Prima Nota da Impegni/Accertamenti" con opzione 5, causali 7010/7011 e date di competenza]

Le scritture prodotte sono:

| Data reg. | Progr. | Causale | Conto | DARE | AVERE |
|-----------|--------|---------|-------|------|-------|
| 31-12-2018 | 252279 | 7010 Apertura Ratei attivi | 01.4.1.01.01.01.001 Banche attivi | 7.054,94 | |
| 31-12-2018 | 252279 | 14 - Ratei | 05.2.4.02.02.001 Locazioni di altri beni immobili | | 7.054,94 |
| 02-01-2019 | 252280 | 7011 Chiusura Ratei attivi | 01.4.1.01.01.01.001 Banche attivi | | 7.054,94 |
| 02-01-2019 | 252280 | 14 - Ratei | 05.2.4.02.02.001 Locazioni di altri beni immobili | 7.054,94 | |

Le 2 registrazioni create sono memorizzate sul record dell'accertamento elaborato. Quindi nell'accertamento **2019/00014**, sono registrati i progressivi delle scritture negli esercizi 2018 e 2019:

[Schermata: form accertamento 2019/00014 con "Scrittura Rateo 2018" = 252279 e "Scrittura Rateo 2019" = 252280]

---

## 4. Risconto

I **risconti attivi** sono spese la cui competenza interessa oltre l'esercizio corrente anche esercizi futuri, mentre il **risconto passivo** è un'entrata la cui competenza interessa oltre l'esercizio corrente anche esercizi futuri.

### 4.1 Spese: Risconto attivo

Il Risconto attivo è una spesa effettuata nell'anno corrente che però va a cavallo di due anni, ad esempio l'assicurazione di un'automobile di **1.200,00 €** con periodo di competenza dal **01.09.2018 al 31.08.2019**, quindi il costo dell'anno va diminuito della parte relativa all'anno successivo.

[Schermata: form "Dettaglio Impegno" 2018/00166 con piano finanziario "Premi di assicurazione per responsabilità civile verso terzi" e tab "CO.GE" evidenziato]

L'importo del rateo è gestito sugli impegni nella form dedicata alla Co.Ge. Mediante il tasto **calcola** viene proposto l'importo da inserire.

[Schermata: finestra "Calcolo risconto" con i seguenti campi:]

| Campo | Valore |
|-------|--------|
| Periodo Competenza | Dal 01-09-2018 Al 31-12-2018 |
| Periodo Risconto | Dal 01-01-2019 Al 31-08-2019 |
| Giorni Periodo Competenza | 122 |
| Giorni Periodo Risconto | 243 |
| Totale giorni periodo | 365 |
| Importo impegno | € 1.200,00 |
| Formula | / 365 * 243 = |
| Importo Risconto | € 798,90 |

La quota da riscontare va inserita nell'impegno nell'apposito campo, cliccando su **conferma** viene riportata in automatico.

[Schermata: form "Registrazioni in Co.Ge." dell'impegno 2018/00166 con "Ratei-Risconti" = "1=Risconto" e "Importo Rateo-Risconto" = 798,90]

Nella creazione prima nota da impegni è stata aggiunta l'opzione:

> **6 – Apertura risconto attivo anno corrente chiusura anno successivo**

L'opzione chiede la data di registrazione della prima nota per l'anno successivo, il default è **02.01.esercizio+1**, mentre quella di apertura è impostata al **31.12 dell'esercizio corrente**.

Le 2 registrazioni create sono memorizzate sul record dell'impegno elaborato.

[Schermata: finestra "Creazione Prima Nota da Impegni/Accertamenti" con opzione 6, causali 5405/5415 e date di competenza]

Il programma elabora tutti gli impegni **2018/xxxx** che hanno l'importo risconto valorizzato.

Le scritture prodotte sono:

| Data reg. | Progr. | Causale | Conto | DARE | AVERE |
|-----------|--------|---------|-------|------|-------|
| 31-12-2018 | 252281 | 5405 Risconti Attivi / Beni Passe... | 01.4.2.01.01.01.001 Banche attivi | | 798,90 |
| 31-12-2018 | 252281 | 15 - Risconti | 06.1.9.03.01.003 Premi di assicurazione per resp. civ... | 798,90 | |
| 02-01-2019 | 252282 | 5415 Risconti Attivi / Beni Passe... | 01.4.2.01.01.01.001 Banche attivi | 798,90 | |
| 02-01-2019 | 252282 | 15 - Risconti | 06.1.9.03.01.003 Premi di assicurazione per resp. civ... | | 798,90 |

Le 2 registrazioni create sono memorizzate sul record dell'impegno elaborato. Quindi nell'impegno **2018/00166** dell'esercizio corrente sono registrati i progressivi delle scritture negli esercizi 2018 e 2019:

[Schermata: form impegno 2018/00166 con "Scrittura Risconto 2018" = 252281 e "Scrittura Risconto 2019" = 252282]

---

### 4.2 Entrata: Risconto passivo

Per le entrate il comportamento è il **DUALE** delle spese.

Il Risconto passivo è un'entrata effettuata nell'anno corrente che però va a cavallo di due anni o più anni, ad esempio l'incasso di un affitto di **12.000** incassato anticipatamente al primo settembre: il ricavo riguarda fino a dicembre l'anno corrente e fino ad agosto dell'anno successivo, quindi il ricavo dell'anno pari a 12.000 va diminuito della parte relativa all'anno successivo. La gestione dell'importo avviene sull'accertamento nella form di Co.Ge. e per il calcolo si può utilizzare la funzione apposita (calcolatrice).

[Schermata: finestra "Calcolo risconto" con i seguenti campi:]

| Campo | Valore |
|-------|--------|
| Periodo Competenza | Dal 01-09-2018 Al 31-12-2018 |
| Periodo Risconto | Dal 01-01-2019 Al 31-08-2019 |
| Giorni Periodo Competenza | 122 |
| Giorni Periodo Risconto | 243 |
| Totale giorni periodo | 365 |
| Importo accertamento | € 12.000,00 |
| Formula | / 365 * 243 = |
| Importo Risconto | € 7.989,04 |

Cliccando su **conferma** viene inserito l'importo sul campo specifico.

[Schermata: form "Registrazioni in Co.Ge." dell'accertamento 2018/00021 con "Ratei-Risconti" = "1=Risconto" e "Importo Rateo-Risconto" = 7.989,04]

Nella creazione prima nota da accertamenti è stata aggiunta l'opzione:

> **6 – Apertura risconto attivo anno corrente chiusura anno successivo**

L'opzione chiede la data di registrazione della prima nota per l'anno successivo, il default è **02.01.esercizio+1**, mentre quella di apertura è impostata al **31.12 dell'esercizio corrente**.

[Schermata: finestra "Creazione Prima Nota da Impegni/Accertamenti" con opzione 6, causali 5405/5415 e date di competenza]

Se la scelta è **6** il programma elabora tutti gli accertamenti **2018/xxxx** che hanno l'importo risconto valorizzato.

Le scritture prodotte sono:

| Data reg. | Progr. | Causale | Conto | DARE | AVERE |
|-----------|--------|---------|-------|------|-------|
| 31-12-2018 | 252283 | 5405 Risconti Passivi / IMOBILIARI | 02.5.2.09.01.01.001 Altri risconti passivi | | 7.989,04 |
| 31-12-2018 | 252283 | 15 - Risconti | 05.2.4.02.02.001 Locazioni di altri beni immobili | 7.989,04 | |
| 02-01-2019 | 252284 | 5415 Risconti Passivi / IMOBILIARI | 02.5.2.09.01.01.001 Altri risconti passivi | 7.989,04 | |
| 02-01-2019 | 252284 | 15 - Risconti | 05.2.4.02.02.001 Locazioni di altri beni immobili | | 7.989,04 |

Le 2 registrazioni create sono memorizzate sul record dell'accertamento elaborato, nell'esercizio corrente. Quindi nell'accertamento **2018/00021**, sono registrati i progressivi delle scritture negli esercizi 2018 e 2019:

[Schermata: form accertamento 2018/00021 con "Scrittura Risconto 2018" = 252283 e "Scrittura Risconto 2019" = 252284]

---

## Rilascio implementazioni al software

- La modifica è disponibile a partire dalla **release 7.02** ed è stata distribuita con gli aggiornamenti di **dicembre 2018**.
- La modifica è disponibile a partire dalla **release 7.11** su CWOL – patch del **25.01.2023**.