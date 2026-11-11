# Manuale Gestione Prospetti Rendiconto

**Software:** CWOL - BILANCIO

---

## 1. Premessa

Il presente documento illustra le fasi operative per la gestione e la creazione dei prospetti al rendiconto di gestione in CWOL (aggiornati al DM 2 agosto 2022).

---

## 2. Fasi Operative

La funzione per gestire e produrre i prospetti è rappresentata in un cruscotto, diviso fra le 2 fasi, da cui è possibile accedere tramite il percorso di seguito:

**80 - Prospetti Rendiconto della Gestione**

[Schermata: percorso di navigazione nel menu del software — 10. Finanziaria → 10. Bilancio e Variazioni → 80. Prospetti Rendiconto della Gestione]

Una volta nel cruscotto posso utilizzare le varie funzioni:

[Schermata: Cruscotto Rendiconto della Gestione Anno 2023 con tabella dei prospetti e colonne Stamp, Scarica, Compila, Data Comp., Utente Comp., Data Prod., Utente Prod.]

### Funzioni disponibili nel cruscotto

| Icona / Pulsante | Funzione | Descrizione |
|---|---|---|
| 🖨️ (Stampa) | **Produce il prospetto** | Al momento della chiusura dello stesso, c'è la possibilità del salvataggio (nel documentale di Alfresco) con l'informazione della data e dell'operatore. |
| ⬇️ (Scarica) | **Riproduce il prospetto dell'ultimo salvataggio effettuato** | Al momento di un nuovo salvataggio, il precedente viene "disabilitato", rimane salvato nel documentale. |
| 🔧 (Compila) | **Permette inserimento** | Con questa funzione possono essere gestite le informazioni extra contabili, o per visualizzare le informazioni gestite in altre parti della procedura (tipo vincol, FPV, ecc...) |
| 📋 (Gestione) | **Permette gestione del prospetto** | Con questa funzione è possibile gestire il prospetto, accedendo direttamente all'inserimento dei dati o alla compilazione del prospetto. |
| **Stampa Completa** | **Permette di effettuare il prospetto di tutti gli allegati** | Al momento della chiusura, se viene effettuato il salvataggio della stampa effettua la verifica delle quadrature. |
| **Storico Prospetti** | **Permette di effettuare le stampe salvate in precedenza** | Selezionando il prospetto desiderato, cliccando nella funzione saranno elencate le stampe salvate in precedenza e disabilitate. |

---

## 2.1 Prospetti Rendiconto della Gestione

### 2.1.1 Cruscotto

Nella gestione del cruscotto sono presenti tutti i prospetti del rendiconto di gestione.

[Schermata: Cruscotto Rendiconto della Gestione Anno 2023 — tabella completa con sezioni: Verifiche e Quadratura, Entrate, Spese, Quadri Riassuntivi, Allegati (All. a) Risultato di Amministrazione, All. a/1 Elenco Risorse Accantonate, All. a/2 Elenco Risorse Vincolate, All. a/3 Elenco Risorse Investimenti, All. b) Composizione per missione e programma del FPV, All. c) Composizione dell'accantonamento FCDE, All. d) Prospetto delle Entrate di bilancio per Titoli, Tipologie e Categorie, All. f) Accertamenti pluriennali, All. g) Impegni pluriennali, All. h) Costi per Missione, All. i) Utilizzo UE, All. k) Funzioni deleghe)]

### 2.1.2 Verifica e quadratura

Questa funzione effettua il controllo della quadratura, è possibile salvare il prospetto. Saranno evidenziate tutte le verifiche, riportando anche le differenze a 0.

[Schermata: Verifiche e Quadratura — tabella con colonne: E/S, Mecc., Voce bil., descrizione, Impeg./Accert., Pagato/Riscos., Differenze]

Esempi di verifiche effettuate:

- **Voci con pagamento/scosso competenza maggiore di impegnato/accertato competenza**
- **Totale accertato partite di giro entrate diverso da totale impegnato partite di giro spesa**
- **Importo riportato nel prospetto di composizione del Fondo Crediti dubbia Esigibilità diverso dall'importo presente** (confronto FCDE Prospetto vs FCDE Vincoli)
- **Confronto risorse accantonate stanziate nel bilancio dell'esercizio da prospetto con Totale colonna C allegato A/1**

### 2.1.3 Gestione prospetti

I prospetti con la sola icona della stampante prendono le informazioni in automatico dalla finanziaria.

#### Gestione Entrate e Spese

Nella gestione entrate e spese, la funzione del **compila** permette di completare e inserire i dati extra contabili, che poi sono utilizzati nei vari prospetti. Viene indicato dove le informazioni saranno riportate.

**Entrate — Dati complementari al Bilancio (Importi Conto Consuntivo):**

| Voce | Importo | Destinazione |
|---|---|---|
| Recupero disavanzo di amministrazione per AA-1 | 100,00 | Verifica equilibri |
| Utilizzo avanzo di amministrazione per sp. Correnti | 1.000.000,00 | Quadro Generale e Verifica equilibri |
| Di cui per estinzione anticipata di prestiti | 300,00 | Verifica equilibri |
| Utilizzo avanzo di amministrazione per sp. Invest. | 2.000.000,00 | Quadro Generale, Verifica equilibri e Allegato 5 |
| Fondo di Cassa al primo Gennaio (effettivo) | 123.456.789,00 | Quadro Generale |
| Entrate Titoli 1-2-3, Di cui estinzione anticipata | 600,00 | Verifica Equilibri |
| Entrate di parte capitale a spese correnti | 700,00 | Verifica Equilibri |
| Di cui per estinzione anticipata di prestiti | 800,00 | Verifica Equilibri |
| Entrate di parte corrente destinate a spese di inv. | 900,00 | Verifica Equilibri |
| Entrate da accensione di prestiti | 0,00 | Verifica Equilibri |
| di cui Utilizzo Fondo Anticipazioni di liquidità | 1.100,00 | Quadro Generale |
| di cui Fondo Plur. vinc. in c/capitale fin.da debito | 1.200,00 | Quadro Generale |

**Spese — Dati complementari al Bilancio (Importi Conto Consuntivo):**

| Voce | Importo | Destinazione |
|---|---|---|
| Spese Titolo 2: di cui: Fondo Pluriennale vincolato in conto capitale finanziato da debito | 0,00 | Quadro Generale Riassuntivo |
| Spese Titolo 4: Fondo anticipazione liquidità | 0,00 | Quadro Generale Riassuntivo, Verifica Equilibri |

#### Verifica Equilibri

[Schermata: Verifica Equilibri — Conto Consuntivo con colonne Competenza 2023, righe da A) a G) con formule di calcolo]

Formule principali:

- **B) Entrate Titoli 1.00 - 2.00 - 3.00** = (+)
- **G) Somma finale** = (G=A+AA+Q)+B+C-D-D1-D2-E-E1-F1-F2

#### All. a) Risultato di amministrazione

Il prospetto si valorizza in automatico per la parte del risultato di amministrazione.

[Schermata: Dati complementari al Bilancio — tab "Risultato di Amministrazione" con Tabella Dimostrativa del risultato di amministrazione: Residui, Competenza, Totali]

La composizione del risultato di amministrazione è collegata alla gestione dei vincoli. In automatico viene valorizzata la parte di avanzo disponibile.

[Schermata: tab "Composizione del Risultato di Amministrazione" con sezioni: Parte accantonata (B), Parte vincolata (C), Parte destinata agli investimenti (D), Totale parte disponibile (E=A-B-C-D)]

#### All. A1/A2/A3

Permette di accedere alla gestione dei vincoli.

[Schermata: Anagrafica Vincoli — tabella con colonne: Descrizione, Destinazione Vincolo, Dettaglio Destinazione. Pulsanti: Nuovo Sottolivello, Altra Ricerca, Situazione Competenza, Situazione di Cassa]

Destinazioni vincolo disponibili:

- B - AVANZO - B) PARTE ACCANTONATA
- C - AVANZO - C) PARTE VINCOLATA
- D - AVANZO - D) PARTE DESTINATA AGLI INVESTIMENTI
- E - AVANZO - E) PARTE DISPONIBILE
- F - ALTRA DESTINAZIONE ESCLUSA DA COMPOSIZIONE AVANZO

#### All. b) Composizione per missione e programma del FPV

Utilizzare la funzione di **ricalcola importi** per valorizzare il prospetto. Nel prospetto è stato distinto il totale per titolo 1 e 2.

[Schermata: Composizione FPV 2023 — griglia per Missione (Miss. 1-18) e Titolo (Titolo 1, Titolo 2), con pulsanti "Aggiorna" e "Ricalcola importi"]

#### All. c) Composizione dell'accantonato FCDE

Permette di accedere alla gestione del prospetto.

[Schermata: FCDE Rendiconto — tabella "Composizione Accantonamento al Fondo Crediti Dubbia Esigibilità" con colonne: Tipologia, Denominazione, Residui attivi formatisi nell'esercizio, Residui attivi degli esercizi precedenti, Totali residui attivi, Importo fondo. Pulsanti: Salva, Parametri, Calcolo colonne A, B, C, Elabora Trend Storico, Calcolo colonne D, E, Stampa all.C, Export xls Rendic.]

#### All. f) Accertamenti pluriennali – All. g) Impegni pluriennali – All. h) Costi per missione

Permette di accedere alla gestione del prospetto.

[Schermata: Riepilogo accertamenti pluriennali per titolo e tipologia — tabella con colonne: Titolo/Tipologia, Anno successivo, Secondo anno, Accertamenti, Accertamenti, Anni successivi. Pulsanti: Aggiorna, Ricalcola importi]

---

### 2.1.4 Prospetti stampati in CWOL, gestiti in Cityware

I prospetti di seguito sono presenti nel cruscotto e devono essere stampati da CWOL; soltanto la loro gestione al momento è in Cityware.

[Schermata: sezione del cruscotto con: Stampa Parametri Deficit Strutturali, Allegato B al Rendiconto della gestione, Stampa Parametri Deficit Strutturali, Piano degli Indicatori (Indicatori sintetici, Indicatori analitici concernenti la composizione delle entrate, Indicatori analitici concernenti la composizione delle spese, Indicatori concernenti la capacità di pagare spese)]