# Elenco debiti della Pubblica Amministrazione

**Comunicazione n. 05/2019**

**Scopo:** Implementazione del prospetto prodotto da City Financing riepilogativo dei debiti

---

Ai fini della corretta interpretazione dell'art. 33 Dlgs 33/2013 e successive modificazioni, nonchè dell'art. 1, comma 867 della legge n. 145/2018, abbiamo implementato il prospetto prodotto da City Financing riepilogativo dei debiti con 2 opzioni:

1. **ELENCO DEBITI COMPLESSIVI (Dlgs 33/2013)**
   Il prospetto riporta il totale dei documenti da pagare al 31/12 dell'esercizio richiesto, **indipendentemente dalla data di scadenza** ma selezionando il periodo di registrazione.

2. **ELENCO DEBITI SCADUTI (art. 1, comma 867 della legge n. 145/2018)**
   Produce il prospetto con lo stesso formato del punto precedente ma include solo i documenti da pagare che sono **scaduti alla data di scadenza indicata**.

---

## 1. MODALITÀ OPERATIVE

Il programma si richiama nel seguente modo:

[Schermata: Menu del software City Financing con percorso: **Uscite** → **Stampe** → **Impegni** → **Documenti** → **Documenti x fornitore**]

---

### Esempio 1

[Schermata: Finestra "CITY-FINANCING Stampa situazione documenti x fornitore" con i Parametri di Selezione. È selezionato il radio button **"Elenco debiti complessivi Dlgs 33/2013"**. Il campo "Periodo registrazione dal" è impostato con data di fine **31-12-2018** (evidenziata in rosso). Sono presenti i campi: Matricola soggetto da/al, Ragione sociale da/al, checkbox "Includi documenti da liquidare", "Includi documenti in liquidazione", "Includi documenti pagati", "Stampa Importi IVA", "Stampa Solo Riepilogo", Periodo liquidazione, Periodo pagamento, Periodo registrazione, Data documento, Tipo ordinamento Stampa.]

---

### Esempio 2

[Schermata: Finestra "CITY-FINANCING Stampa situazione documenti x fornitore" con i Parametri di Selezione. È selezionato il radio button **"Elenco debiti scaduti (art. 1, comma 867 della legge n. 45/2018)"**. Il campo "Periodo scadenza dal" è impostato con data di fine **31-12-2018** (evidenziata in rosso). Sono presenti i medesimi campi dell'Esempio 1.]

---

## 1.1.1 ELENCO PRODOTTO

Il risultato dell'operazione produce il seguente report:

**ELENCO DEBITI COMPLESSIVI ALLA DATA DEL 31-12-2018 - D. LGS N.33/2013**

| N. | RAGIONE SOCIALE | INDIRIZZO | ID. FISCALE | POSIZIONI DA LIQUIDARE N. | POSIZIONI DA LIQUIDARE IMPORTO | POSIZIONI IN LIQUIDAZIONE N. | POSIZIONI IN LIQUIDAZIONE IMPORTO | AMMONTARE DEBITO COMPLESSIVO |
|----|----------------|-----------|-------------|--------------------------|-------------------------------|------------------------------|----------------------------------|------------------------------|
| 1 | ****** | ****** | ****** | 1 | € 2.614,50 | 5 | € 9.850,05 | € 12.464,55 |
| 2 | ****** | ****** | ****** | | € 0,00 | 2 | € 5.325,79 | € 5.325,79 |

---

## Rilascio implementazioni al software

La modifica è disponibile a partire dalla **release 7.11 su CWOL – patch del 25.01.2023**

### EVENTUALI VINCOLI:

*(Nessun vincolo indicato)*

### EVENTUALI CRITICITÀ:

*(Nessuna criticità indicata)*