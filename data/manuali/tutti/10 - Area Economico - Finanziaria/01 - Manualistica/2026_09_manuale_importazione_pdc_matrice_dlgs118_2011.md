# Importazione PDC e Matrice di Correlazione D.Lgs. 118/2011

**Software:** Cityware Online

---

## 1. Introduzione

La funzione **Importazione PdC e Matrice di correlazione D.Lgs 118-2011** consente di allineare le tabelle contabili dell'Ente agli aggiornamenti normativi del Piano dei Conti integrato previsto dal D.Lgs. 118/2011 (armonizzazione dei sistemi contabili) e della relativa Matrice di correlazione.

Gli aggiornamenti vengono letti da fogli Excel ufficiali distribuiti insieme all'applicativo (file risorsa); l'operatore non deve quindi caricare alcun file, ma solo impostare i parametri di importazione e scegliere se effettuare una simulazione o l'aggiornamento effettivo dei dati.

La funzione è suddivisa in due sezioni indipendenti:

- **Importa aggiornamenti Piano dei conti da Foglio Excel**: aggiorna il Piano dei Conti economico-patrimoniale (inserimento nuovi conti, modifica descrizioni, chiusura conti soppressi);
- **Importa Matrice di correlazione da Foglio Excel**: elabora l'intero contenuto della Matrice di correlazione sull'esercizio contabile corrente, aggiornando le righe esistenti e aggiungendo quelle mancanti.

---

## 2. Accesso alla funzione

La funzione si raggiunge dal menu principale seguendo il percorso:

**Servizi Economici → Utilità → Importazioni → Importazione PdC e Matrice di correlazione D.Lgs 118-2011**

All'apertura, la funzione viene visualizzata in una nuova scheda dell'applicativo. Prima di procedere, verificare in alto a destra che l'**Esercizio Contabile** selezionato sia quello su cui si intende applicare gli aggiornamenti.

> **N.B.** – Per gli esercizi contabili 2026 e 2027 è sufficiente lanciare la funzione di utilità dal solo **ESERCIZIO 2026**. Verranno comunque effettuate le modifiche anche nell'esercizio 2027 in quanto i file risorsa contengono le modifiche di entrambi gli esercizi contabili.

---

## 3. Importa Aggiornamenti Piano dei Conti da Foglio Excel

La prima sezione della maschera gestisce l'aggiornamento del Piano dei Conti a partire dal file Excel ufficiale.

Il campo **File risorsa** riporta il nome del file Excel utilizzato per l'importazione, ad esempio `All-6_Piano_dei_conti_integrato-dal-2027_rev.xls`. Il file è distribuito nelle risorse dell'applicativo e viene aggiornato con i rilasci del software: non è modificabile dalla maschera.

Prima di lanciare l'esecuzione occorre verificare che i campi evidenziati in rosso siano già compilati.

> **N.B.** – L'applicativo, in caso di univocità, reperisce in automatico tali codifiche. Ogni ente può avere una sua codifica per cui potrebbe non corrispondere esattamente con la schermata sotto indicata es. Attivo può avere 01, 11, ecc.

[Schermata della maschera di importazione con i campi: File risorsa, Ricodifica primo livello Piano Patrimoniale (1-Attivo, 2-Passivo, 3-Conti d'ordine), Ricodifica primo livello Piano Economico (1-Componenti positivi della gestione, 2-Componenti negativi della gestione, 3-Proventi e oneri finanziari, 4-Rettifiche di Valore di attivita' Finanziarie, 5-Proventi e oneri straordinari), Foglio Piano patrimoniale, Foglio Piano economico, e i pulsanti SIMULA/ESEGUI]

### 3.1 Modalità di esecuzione

Prima di avviare l'importazione è necessario selezionare una delle due modalità:

- **SIMULA (Non aggiorna i dati)**: esegue l'elaborazione senza registrare alcuna modifica, consentendo di verificare in anticipo gli aggiornamenti che verrebbero applicati;
- **ESEGUI (aggiorna i dati)**: applica effettivamente gli aggiornamenti al Piano dei Conti.

Selezionata la modalità, premere il pulsante **Importa aggiornamenti Piano dei Conti** per avviare l'elaborazione.

### 3.2 Logica di aggiornamento

Per ciascuna riga, in base al tipo di aggiornamento indicato nel file, il programma esegue le operazioni seguenti:

| Tipo di aggiornamento | Operazione eseguita |
|---|---|
| Nuovo inserimento | Crea il nuovo conto nel Piano dei Conti (tabella `FEP_PIANO_CONTI`) e il relativo raccordo con i prospetti (tabella `FEP_RACCORDO`). |
| Modifica descrizione | Aggiorna la descrizione del conto esistente. |
| Cancellazione | Chiude il conto impostando l'anno di fine validità (`ANNO_FINE`) all'esercizio precedente a quello corrente. Il conto non viene eliminato fisicamente. |

### 3.3 Esito dell'elaborazione

Al termine dell'elaborazione il programma mostra due finestre di riepilogo, una per il **Piano Economico** e una per il **Piano Patrimoniale**. In modalità SIMULA le finestre riportano la dicitura `-- SIMULAZIONE --` e i valori indicano le operazioni che verrebbero eseguite, senza che alcun dato sia stato modificato.

Le voci riportate nel riepilogo sono le seguenti:

| Voce del riepilogo | Significato |
|---|---|
| Totale variazioni lette da file Excel | Numero di righe di variazione lette dal foglio del file Excel (le annualità considerate sono indicate nel messaggio). |
| Conti da aggiungere | Nuovi conti che vengono inseriti nel Piano dei Conti. |
| Conti da aggiornare | Conti esistenti di cui viene modificata la descrizione. |
| Conti da chiudere | Conti soppressi, che vengono chiusi con anno fine pari all'esercizio precedente. |
| Raccordi individuati (da creare in ESEGUI) | Raccordi che vengono creati per i nuovi conti quando si esegue l'importazione in modalità ESEGUI. |
| Raccordi da disabilitare (chiusura conto) | Raccordi collegati ai conti chiusi, che vengono disabilitati. |

Inoltre scaricherà un file Excel con il dettaglio delle operazioni sopra indicate.

Chiudere le finestre di riepilogo con il pulsante **X** in alto a destra.

---

## 4. Importa Matrice di Correlazione da Foglio Excel

La seconda sezione della maschera importa la Matrice di correlazione dal file risorsa indicato, ad esempio `Matrice_di_transizione_Enti_dlgs_n_118-dal-2026.xls`.

Anche in questo caso occorre selezionare la modalità **SIMULA (Non aggiorna i dati)** oppure **ESEGUI (aggiorna i dati)** e premere il pulsante **Importa Matrice di correlazione**.

### 4.1 Esito dell'elaborazione

Al termine viene mostrata la finestra di riepilogo **Importa Matr. di corr. da foglio Excel** (con la dicitura `-- SIMULAZIONE --` se si è scelta la modalità SIMULA), che riporta:

| Voce del riepilogo | Significato |
|---|---|
| Totale Matr. di corr. lette da file Excel | Numero di righe della Matrice di correlazione lette dal file. |
| Matr. di corr. da aggiornare | Righe già presenti sull'esercizio corrente, che vengono aggiornate. |
| Matr. di corr. da aggiungere | Righe non presenti, che vengono inserite. |

Inoltre scaricherà un file Excel con il dettaglio delle operazioni sopra indicate.

---

## 5. Procedura operativa consigliata

1. Verificare che l'esercizio contabile selezionato sia quello corretto.
2. Controllare i codici di ricodifica del primo livello (devono corrispondere con il PdC dell'Ente).
3. Selezionare **SIMULA** e premere **Importa aggiornamenti Piano dei Conti**; verificare nelle finestre di riepilogo il numero di conti da aggiungere, aggiornare e chiudere.
4. Se l'esito è corretto, selezionare **ESEGUI** e premere nuovamente **Importa aggiornamenti Piano dei Conti**.
5. Ripetere gli stessi passaggi (prima **SIMULA**, poi **ESEGUI**) nella sezione **Importa Matrice di correlazione da Foglio Excel**.