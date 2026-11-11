# Piano annuale Flussi di cassa

## Normativa di riferimento

### Art. 6 co. 1 e 2 del D.L. n. 155/2024

> «[…] le amministrazioni pubbliche, tra cui gli enti locali e i loro enti strumentali, hanno l'obbligo di adottare, **entro il 28 febbraio di ciascun anno**, un piano annuale dei flussi di cassa, contenente un cronoprogramma dei pagamenti e degli incassi relativi all'esercizio di riferimento […]»

**Riferimenti utili:**

- **Decreto legge:** [https://www.gazzettaufficiale.it/eli/id/2024-10-19/24G00175/SG](https://www.gazzettaufficiale.it/eli/id/2024-10-19/24G00175/SG)
- **Modello ufficiale (sito Arconet):** [https://www.rgs.mef.gov.it/VERSIONE-I/e_government/amministrazioni_pubbliche/arconet/](https://www.rgs.mef.gov.it/VERSIONE-I/e_government/amministrazioni_pubbliche/arconet/)
- **Manuale operativo di CWOL:** [https://wiki.nuvolaitalsoft.it/lib/exe/fetch.php?media=guide:manuali_bilancio:20250218_manuale_flussi_di_cassa.pdf](https://wiki.nuvolaitalsoft.it/lib/exe/fetch.php?media=guide:manuali_bilancio:20250218_manuale_flussi_di_cassa.pdf)

---

## Verifica disponibilità programma

Disponibile da **mercoledì 19-02-2025**, quindi:

- Aggiornamento CWOL >= 19-02-2025
- Patch del 19-02-2025 (anche con aggiornamento CWOL < 19-02-2025)

In generale è disponibile per tutti coloro che riescono ad accedere al seguente menù:

```
180. Servizi economici
    10. Finanziaria
        10. Bilancio e Variazioni
            120. Piano annuale flussi di cassa
```

---

## Gestione Piano annuale flussi di cassa

### Iter operativo di gestione

La gestione del Piano annuale dei flussi di cassa consta di **tre fasi**:

- **FASE 1: Parametrizzazione estrazione** → scelta del dataset (*livello di estrazione*) e degli altri parametri generali;
- **FASE 2: Gestione** → si ha la possibilità di interrogare e/o modificare i dati estratti dalla procedura;
- **FASE 3: Estrazione del modello in formato XLSX** → si ha la possibilità di estrarre in formato XLSX i dati elaborati nella fase 2. Viene data la possibilità di fare estrazioni a livello differente.

---

### FASE 1: Parametrizzazione estrazione

Parametri disponibili:

- **Anno**
- **Data estrazione**
- **Includi variazioni bilancio provvisorie**
- **Atto di assunzione**
- **Note**
- **Dataset estrazione**
- **Modalità di calcolo valori**
- **Escludi elementi vuoti da dataset**

[Schermata: finestra "Dettaglio estrazione flussi di cassa" con i campi: Anno estrazione (2025), Data estrazione (20/02/2025), checkbox "Includi variazioni di bilancio provvisorie", Dataset estrazione (Dati richiesti per modello ministeriale), Modalità calcolo valori trimestrali cassa (Previsionale (Previsione a fine anno riproporzionata)), Escludi elementi vuoti da dataset (Escludi vuoti), Atto di Assunzione (Tipo: GM, Delibera di Giunta, n. 10 del 20/02/2025), campo Note]

---

### FASE 2: Gestione (1)

- Sono **modificabili** tutti i record (*livello di PF / voce di bilancio*) in cui compare l'icona della **matita**
- Si ha la possibilità di **interrogare** una porzione di bilancio o la singola voce di bilancio
- Possibilità di inserire alcuni **dati aggiuntivi** (fondo cassa iniziale, quota vincolata) e di effettuare un'**anteprima del modello** prima della generazione del file ufficiale
- Consente di **creare il modello in formato XLSX**. Il livello di dettaglio è *bottom-up* (*dal basso verso l'alto*) assunzione
- I modelli prodotti a partire da una determinata elaborazione sono salvati sul **documentale Alfresco**

---

### FASE 2: Gestione (2) – Operatività

- **Data utilizzata per incassi/pagamenti:**
  - OPI a regolarizzazione di provvisorio: **DATA PROVVISORIO**
  - OPI standard: **DATA VALUTA TESORIA** (*data effettivo pagamento/incasso*)

- Gli incassi/pagamenti sono inseriti sempre nella **riga del PF di 5° livello**.

- In alcune righe compare la dicitura «*Restante parte di…*»; è stata inserita per completezza di calcolo e perché ritenuta utile per avere una rappresentazione integrale dei dati.

[Schermata: struttura ad albero del Piano Finanziario (es. 2 - Trasferimenti correnti → 2.1 → 2.1.1 → 2.1.1.1 → 2.1.1.1.1 → 2.1.1.1.1.001) e tabella corrispondente con codici E.02, E.02.01, E.02.01.01, E.02.01.01.01, E.02.01.01.01.001, ecc. Le righe foglia (5° livello) mostrano icone di occhio e matita]

---

### FASE 2: Gestione (3) – Operatività

- Le singole righe sono **modificabili solo se vi sono effettivamente dati**

[Schermata: griglia "Dataset estrazione" con colonne: Piano finanziario/Voce di bilancio, Descrizione, Stato riga, e dati per Primo trimestre 2025 / Dati a tutto il secondo trimestre 2025 / Dati a tutto il terzo trimestre 2025 / Dati a tutto il quarto trimestre 2025 (sotto-colonne: Dati SIOPE 2023, Previsioni di cassa). Esempio evidenziato: riga E.03.01.01.01.001 con "NO" (non modificabile) vs riga E.03.01.01.01.004 con "SÌ" (modificabile, con icone occhio e matita)]

---

### FASE 2: Gestione (4) – Operatività

- **Gestione somme vincolate** → viene utilizzata la gestione vincoli di CWOL

Quali vincoli? Quelli che rispettano **contemporaneamente** questi requisiti:

1. Vincoli con **radice C** (*tutti i livelli foglia del vincolo C*) → **PARTE VINCOLATA**
2. Vincoli dove sono **attività i controlli della cassa vincolata** (*conto tesoreria inserito in anagrafica vincoli*)
3. Conto di tesoreria inserito al punto 2 deve essere **vincolato**

> **NB:** Tutte le somme vincolate possono essere **modificate manualmente** mediante la funzione di anteprima del modello

- È possibile **delegare la modifica delle previsioni** ai Responsabili degli Uffici periferici

[Schermata: finestra "Piano annuale flussi di cassa" con campi Piano Finanziario (1 1 1 1 1), Voce di bilancio (0101101 0101 101 01), checkbox "Riga elaborata in modalità definitiva", e griglia dati per i quattro trimestri 2025 con colonne Dati SIOPE 2023 e Previsioni di cassa]

---

### FASE 3: Estrazione modello in formato XLSX (1)

- È possibile selezionare il **livello di dettaglio** utilizzando una logica *bottom-up* (*dal basso verso l'alto*) con riferimento al dataset scelto nella fase 1.
- Il modello può essere salvato nel **documentale Alfresco**

**Tabella di compatibilità Dataset / Modello:**

| DATASET | MODELLO VOCE BILANCIO | MODELLO PF 5° LIVELLO | MOD. MINISTERIALE |
|---|---|---|---|
| Mod. ministeriale | **No** | **No** | Sì |
| Mod. PF 5° livello | **No** | Sì | Sì |
| Mod. voce di bilancio | Sì | Sì | Sì |

*Esempio:*

[Schermata: menu a tendina "Tipo modello" con opzioni: Modello ministeriale, Modello piano finanziario fino al 5° livello, Modello come da dataset estrazione. Sotto: griglia Excel con pulsanti "Scarica" e "Salva in file-box", e pannello laterale con pulsanti "Salva" (1) e "Torna" (2)]

---

### FASE 3: Estrazione modello in formato XLSX (2)

- Un determinato dataset può avere **N estrazioni** fatte su livelli diversi.
- Tutte le estrazioni salvate sono successivamente **visualizzabili scaricandole da Alfresco**
- **Non è possibile cancellare** un'estrazione che contenga un modello salvato su Alfresco
- È possibile scaricare il modello XLSX e modificarlo in locale, tuttavia tale prassi è **sconsigliata** perché disallinea il dataset di CWOL con il modello ufficiale

[Schermata: file Excel aperto con foglio "stampafFlussiCassa_20250219_180954", tab con intestazioni: Codice SIOPE, Descrizione, Primo trimestre 2025 (Dati SIOPE 2023 / Previsioni di cassa), Secondo trimestre 2025 (Dati SIOPE 2023 / Previsioni di cassa). Riga 4: FONDO DI CASSA ALL'INIZIO DELL'ANNO (123.456.789,00 / 654,00), riga 5: di cui con vincolo di cassa (654,00). Evidenziata la scheda "Revisioni" con pulsante "Rimuovi protezione foglio"]

---

## Novità future

È in corso di analisi la possibilità di **importare in CWOL il file XML** scaricabile dal sito **SIOPE** ([www.siope.it](https://www.siope.it)) che contiene gli incassi ed i pagamenti effettivi dell'Ente.

Seguiranno comunicazioni di aggiornamento.

[Schermata: sito SIOPE con mappa dell'Italia e form di ricerca per ente (Provincia, Codice ente, Classificazione, Regione, Provincia)]