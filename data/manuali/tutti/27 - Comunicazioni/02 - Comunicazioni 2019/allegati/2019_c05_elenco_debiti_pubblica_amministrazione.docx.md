# Comunicazione n. 05/2019 - Elenco debiti della Pubblica Amministrazione

**Data:** 11/04/2019

Ai fini della corretta interpretazione dell'art. 33 Dlgs 33/2013 e successive modificazioni, nonché dell'art. 1, comma 867 della legge n. 145/2018, è stato implementato il prospetto prodotto da City Financing riepilogativo dei debiti con 2 opzioni:

## 1. ELENCO DEBITI COMPLESSIVI (Dlgs 33/2013)

Il prospetto riporta il totale dei documenti da pagare al 31/12 dell'esercizio richiesto, **indipendentemente dalla data di scadenza** ma selezionando il periodo di registrazione.

## 2. ELENCO DEBITI SCADUTI (art. 1, comma 867 della legge n. 145/2018)

Produce il prospetto con lo stesso formato del punto precedente ma include solo i documenti da pagare che sono **scaduti alla data di scadenza indicata**.

---

## Modalità Operative

Il programma si richiama nel seguente modo:

[Schermata: Menu principale del software City Financing. Percorso: **Uscite** → **Stampe** → **Documenti** → **Iter documenti x fornitore**]

### Esempio 1

[Schermata: Finestra "CITY-FINANCING Stampa situazione documenti x fornitore". Nella sezione "Parametri di Selezione", alla riga "Tipo Stampa" è selezionato il radio button **"Elenco debiti complessivi Dlgs 33/2013"**. Il campo "Periodo registrazione dal" è impostato con data fine **31-12-2018** (evidenziata in rosso). Altri campi visibili: Matricola soggetto da/al, Ragione sociale da/al, Include documenti da liquidare, Include documenti in liquidazione, Include documenti pagati, Stampa Importi IVA, Stampa Solo Riepilogo, Periodo liquidazione dal/al, Periodo pagamento dal/al, Data documento dal/al, Tipo ordinamento Stampa: "1.- Matricola soggetto".]

### Esempio 2

[Schermata: Finestra "CITY-FINANCING Stampa situazione documenti x fornitore". Nella sezione "Parametri di Selezione", alla riga "Tipo Stampa" è selezionato il radio button **"Elenco debiti scaduti (art. 1, comma 867 della legge n. 45/2018)"**. Il campo "Periodo scadenza dal" è impostato con data fine **31-12-2018** (evidenziata in rosso). Gli altri campi sono analoghi all'Esempio 1.]

---

## Elenco Prodotto

Il risultato dell'operazione produce il seguente report:

**ELENCO DEBITI COMPLESSIVI ALLA DATA DEL 31-12-2018 - D. LGS N.33/2013**

| N. | RAGIONE SOCIALE | INDIRIZZO | ID. FISCALE | POSIZIONI DA LIQUIDARE N. | POSIZIONI DA LIQUIDARE IMPORTO | POSIZIONI IN LIQUIDAZIONE N. | POSIZIONI IN LIQUIDAZIONE IMPORTO | AMMONTARE DEBITO COMPLESSIVO |
|----|----------------|-----------|-------------|--------------------------|-------------------------------|------------------------------|----------------------------------|-------------------------------|
| 1 | ******** | ******** | ******* | 1 | € 2.614,30 | 5 | € 9.850,05 | € 12.464,35 |
| 2 | ******** | ******** | ******* | | € 0,00 | 2 | € 3.325,79 | € 3.325,79 |

---

## Rilascio Implementazioni al software

La modifica è disponibile a partire dalla **release 7.03** con la **patch del 10.04.2019**.