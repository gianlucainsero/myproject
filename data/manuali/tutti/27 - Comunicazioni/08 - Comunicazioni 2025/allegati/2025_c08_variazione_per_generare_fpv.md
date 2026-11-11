# Operazioni per generare variazione di bilancio e creare FPV, schede di programmazione e impegni di tipo FP (finanziati da bilancio)

**Comunicazione n.08/2025**

**Scopo:** Il documento illustra le fasi da seguire per generare la variazione di bilancio e creare FPV, l'inserimento delle schede di programmazione e gli impegni nell'anno successivo di tipo FP (finanziati da bilancio).

---

## 1. Operatività su Bilancio

### 1.1 Inserimento variazione

Inserire la variazione nell'Anno N, ridurre nella voce di uscita l'importo di competenza e contestualmente aumentare l'importo di FPV, valorizzare in positivo la quota nella competenza anno N+1.

In entrata, su FPV aumentare competenza anno N+1.

**Es.**

Selezionare il tipo di operazione da effettuare in Uscita:

**2 - "Storno tra uscite"**

1. Diminuire importo in competenza
2. Aumentare l'importo FPV
3. Aumentare importo competenza anno N+1

[Schermata: Variazioni di Bilancio Anno 2025 – Tipo di Variazione: 2 "Storno tra Uscite", Parte: Uscita, Voce di bilancio: 0102101.0102.101.06. Nella sezione COMPETENZA: 2025-Negative = 5.000,00 (punto 1), 2026-Positive = 5.000,00 (punto 3). Nella sezione Fondo Pluriennale Vincolato: 2025-Positive = 5.000,00 (punto 2)]

Selezionare il tipo di operazione da effettuare in Entrata sul capitolo di FPV:

**1 - "Storno tra entrate"**

1. Aumentare importo competenza anno N+1

[Schermata: Variazioni di Bilancio Anno 2025 – Tipo di Variazione: 1 "Storno tra Entrate", Parte: Entrata, Voce di bilancio: 0000000.00000.00.07 (FPV-E-1). Nella sezione COMPETENZA: 2026-Positive = 5.000,00 (punto 1)]

#### Situazione della variazione:

**ANNO N (2025):**

[Schermata: Riepilogo Variazione di Bilancio - COMPETENZA, Anno 2025. Tabella con colonne: Totale Aumento, Totale Diminuz., Differenza. Righe: E) Av-FPV: 0,00 / 0,00 / 0,00; Entrata: 0,00 / 0,00 / 0,00; U) Uscita: 0,00 / 5.000,00 / -5.000,00; FPV: 5.000,00 / 0,00 / 5.000,00. Totale Entrata-Uscita: 0,00]

**ANNO N+1 (2026):**

[Schermata: Riepilogo Variazione di Bilancio - COMPETENZA, Anno 2026. Tabella con colonne: Totale Aumento, Totale Diminuz., Differenza. Righe: E) Av-FPV: 5.000,00 / 0,00 / 5.000,00; Entrata: 0,00 / 0,00 / 0,00; U) Uscita: 5.000,00 / 0,00 / 5.000,00; FPV: 0,00 / 0,00 / 0,00. Totale Entrata-Uscita: 0,00]

---

### 1.2 Situazione interrogazione voce di bilancio

È possibile verificare la diminuzione della quota di competenza e l'aumento della quota FPV nell'interrogazione della voce di bilancio.

[Schermata: Situazione Voce di bilancio Parte Uscita Anno 2025. Uscita P.F. 1.1.1.1.4, Voce di bilancio 0102101.01. Tab "Importi 2025". Sezione "Anno Corrente - Stanziamento Competenza": Previsione Iniziale = 55.410,57; Variazioni Negative (-) = 5.000,00; Assestato = 50.410,57. Sezione "Anno Corrente - Fondo Pluriennale Vincolato": Previsione Iniziale = 12.284,54; Variazioni Positive (+) = 5.000,00; Assestato = 17.284,54. Assestato Totale = 67.695,11]

E la relativa quota presente ora in competenza N+1:

[Schermata: Situazione Voce di bilancio Parte Uscita Anno 2025. Uscita P.F. 1.1.1.1.4, Voce di bilancio 0102101.0102.101.06, Bilancio confermato. Tab "Pluriennale 2025-2026-2027". Colonne 2025, 2026, 2027. Righe: Stanziamento Competenza: 55.410,57 / 55.410,57 / 55.410,57; Variazioni: -5.000,00 / 5.000,00 / 0,00; Assestato: 50.410,57 / 60.410,57 / 55.410,57; Fondo Pluriennale Vincolato: 12.284,54 / 12.284,54 / 12.284,54; Variazioni FPV: 5.000,00 / 0,00 / 0,00; Assestato FPV: 17.284,54 / 12.284,54 / 12.284,54; Assestato Totale: 67.695,11 / 72.695,11 / 67.695,11. Assestato Competenza: 50.410,57 / 60.410,57 / 55.410,57; Impegnato Totale: 0,00 / 0,00 / 0,00; Economie (FP e DC): 0,00 / 0,00 / 0,00; Disponibilità ad impegnare: 50.410,57 (100%) / 60.410,57 (100%) / 55.410,57 (100%)]

---

## 2. Operatività su Impegni

### 2.1 Inserimento Opera/Attività

L'opera o attività è il cronoprogramma in cui sono inserite le schede di programmazione per la gestione dell'FPV. In un'opera possono essere inserite più schede.

**Percorso di navigazione:**

- Servizi Economici
- Finanziaria
- Bilancio e Variazioni
- FPV
- Cronoprogrammi

Cliccare **"Nuovo"**

> Si consiglia di inserire come identificativo e nella descrizione l'anno nella parte iniziale, per facilitare la ricerca.

[Schermata: Finestra Cronoprogrammi. Campi: Identificativo cronoprogramma = "2025_Descrizione"; Tipo programmazione = "Attività non soggette a CIG per Programmazione"; Progr. interno = 103; Descrizione = "2025_Descrizione". Tab "Anagrafica" attiva con: Stato = Desiderata; Codice Unico Progetto; Codice Identificativo Gara; Importo Approvato = 0,00; Anno Iniziale = 2025; Anno Fine = 0; Data progetto esecutivo; Data concess. finanz.; Data aggiud. appalto]

Ora in elenco sarà presente la nostra opera:

[Schermata: Elenco Cronoprogrammi. La riga con Progr. 103, Id Crono "2025_Descrizione", Descrizione "2025_Descrizione", Anno inizio 2025 è evidenziata]

---

### 2.2 Inserimento Scheda di programmazione

La scheda di programmazione fornisce le informazioni contabili: voce di bilancio uscita, quota FPV impegni ed eventuali operazioni collegate agli impegni presenti.

Per inserire la scheda entrare in gestione dell'opera, posizionarsi su **dettaglio cronoprogramma** e cliccare **+**

[Schermata: Finestra Cronoprogrammi in gestione. Tab "Dettaglio Cronoprogramma" attiva. Sezione "Importi cronoprogramma" con colonne: Anno, Somma disp., Uscite finanziate, Integrazione, Scheda, AA Chiu, Dis. Pulsante "+" evidenziato in basso a sinistra]

- Togliere la spunta in **dettaglio previsione somma**, nel caso non si voglia inserire il finanziamento in entrata.
- Inserire l'importo del finanziamento.

Inserire la voce di bilancio.

Inserire l'importo nel cronoprogramma:

- L'importo in tal caso va inserito nell'anno successivo (2026), è quota in entrata che finanzia la spesa; l'impegno infatti sarà poi preso nel pluriennale 2026 finanziato da FPV.

[Schermata: Finestra "Cronoprogramma uscita voce di bilancio 0102101.0102.101.06 - Indennità ed altri compensi, esclusi i rimborsi spesa per missione, corrisposti al personale a tempo indeterminato". Campi: Anno Entrata = 2025; Importo del Finanziamento = 5.000,00 €; Scheda = 782; Totale Cronoprogramma Spesa = 5.000,00; Differenza = 0,00; Opera = 2025_Descrizione; Progressivo = 103. Sezione "Dettaglio cronoprogramma uscite bilancio": Voce di bilancio 0102101.0102.101.06; Colonna 2026 = 5.000,00 (evidenziato)]

Procedere poi ad **aggiornare** per l'inserimento della scheda nell'opera.

[Schermata: Finestra Cronoprogrammi aggiornata. Sezione "Importi cronoprogramma" mostra la riga: Anno 2025, Somma disp. 5.000,00, Uscite finanziate 0102101.0102.101.06, Scheda 782, Anno 2 = 5.000,00. Pulsante "Aggiorna" evidenziato in alto a destra]

---

### 2.3 Inserimento impegno

Da **impegni, gestione di competenza** inserire un nuovo impegno:

- Selezionare impegno da inserire **2026** (finanziato da FPV)
- Selezionare la scheda di programmazione in elenco o utilizzare altri parametri per la ricerca

[Schermata: Finestra "Cronoprogramma per monitoraggio schede FPV". Elenco con riga: Voce di bilancio 0102101.0102.101.06 (Indennità ed altri compensi, esclusi i rimborsi...), AA iniz. 2025, Imp. impegnabile 0,00, Imp. impegnato 0,00, Imp. economie 0,00, FPV Fine Anno 0,00, Descrizione Finanziamento "Descrizione". Pulsante "Nuovo" in alto a destra]

[Schermata: Finestra "Parametri per il Caricamento di un Nuovo IMPEGNO". Tipo di Movimento da Creare = Impegno; Competenza/Residui = Competenza. Checkbox "Crea nell'Esercizio 2026" spuntata (evidenziata). Scheda Programmazione = 782, Descrizione "2025_Descrizione" (evidenziata). Pulsanti "Avanti" e "Annulla"]

Procedere con **"Avanti"**

La scheda di programmazione crea l'impegno con tipo provenienza **FP** (finanziato da FPV a bilancio) e l'anno di provenienza dell'FPV.

[Schermata: Impegno generato. Anno/Numero = 2026; Competenza; Voce di bilancio 0102101.0102.101.06; Disponibilità ad impegnare = 60.410,57. Tab "Classificazione Impegno": Missione/Programma = 1/2 (Segreteria generale); Piano Finanziario = 1/1/1/4; Transazione U.E. = 8; Classificaz. impegno = D (Impegni/Accertamenti definitivi); Atto di Assunzione = DT (Determina); Oggetto = "Impegno FPV"; Importo iniziale = 5.000,00. Sezione in basso: Provenienza = FP-Da fondo pluriennale in sede di previsione; Scheda Programmazione = 782 (2025_Descrizione); FPV: Anno Provenienza = 2025; Modalità Inserimento = Gestione Manualmente]