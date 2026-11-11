# Come utilizzare la procedura vincoli per monitorare i fondi PNRR

**Scopo:** Con il seguente documento si comunicano le operazioni da effettuare per la gestione e il monitoraggio dei fondi PNRR attraverso l'utilizzo dei vincoli.

---

## 1. Riferimenti

### 1.1 Ulteriori comunicazioni da leggere

Prima di seguire le istruzioni contenute in questo documento si raccomanda la lettura propedeutica delle seguenti comunicazioni:

- **2019_c08_cruscotto_fondo_pluriennale_vincolato:**
  https://wiki.nuvolaitalsoft.it/lib/exe/fetch.php?media=guide:comunicazioni_2019:2019_c06_vincoli_composizione_avanzo_vincolato_movimenti_cassa_vincolata.pdf

- **2020_c05_rendiconto_2019_adeguamento_prospetti_ed_allegati_per_dettaglio_vincoli:**
  https://wiki.nuvolaitalsoft.it/lib/exe/fetch.php?media=guide:comunicazioni_2020:2020_c05_rendiconto_2019_adeguamento_prospetti_ed_allegati_per_dettaglio_vincoli.pdf

---

## 2. Iter per utilizzare i vincoli in merito ai fondi del PNRR in CWOL

### 2.1 Implementazione fondi PNRR nell'anagrafica vincoli

Per una corretta gestione dei finanziamenti del PNRR si consiglia di definire una struttura a più livelli in cui i "vincoli padre" corrispondono ai fondi PNRR divisi per Missioni (come da tabella 1) e i relativi figli ai progetti che esso finanzia; la stessa struttura si potrà applicare anche ad altre tipologie di finanziamenti. Esempio:

- **Vincolo Padre:** C2.50 Fondo PNRR_M1
  - Vincolo Figlio: C2.50.01 Progetto_X_M1C1
  - Vincolo Figlio: C2.50.02 Progetto_Y_M1C3

- **Vincolo Padre:** C2.60 Fondo PNRR_M3
  - Vincolo Figlio: C2.60.01 Progetto_Z_M3C3

- **Vincolo Padre:** C2.70 Fondo FSR
  - Vincolo Figlio: C2.70.01 Progetto_V

#### Tabella 1: Composizione del PNRR per missioni e componenti (miliardi di euro)

| Missione | PNRR (mld) | Fondo complementare (mld) | Totale (PNRR+FC) | React EU (mld) |
|----------|-----------|--------------------------|-------------------|----------------|
| **M1. DIGITALIZZAZIONE, INNOVAZIONE, COMPETITIVITÀ E CULTURA** | | | | |
| M1C1 - Digitalizzazione, innovazione e sicurezza nella PA | 11,17 | 1,20 | 12,36 | 0,00 |
| M1C2 - Digitalizzazione, innovazione e competitività nel sistema produttivo | 24,20 | 5,88 | 30,18 | 0,80 |
| M1C3 - Turismo e cultura 4.0 | 6,49 | 1,46 | 8,23 | 0,00 |
| **Totale Missione 1** | **41,72** | **8,54** | **50,77** | **0,80** |
| **M2. RIVOLUZIONE VERDE E TRANSIZIONE ECOLOGICA** | | | | |
| M2C1 - Agricoltura sostenibile ed economia circolare | 6,37 | 1,20 | 6,47 | 0,50 |
| M2C2 - Transizione energetica e mobilità sostenibile | 23,19 | 2,40 | 25,59 | 0,28 |
| M2C3 - Efficienza energetica e riqualificazione degli edifici | 15,22 | 6,72 | 21,94 | 0,32 |
| M2C4 - Tutela del territorio e della risorsa idrica | 15,10 | 0,89 | 15,99 | 0,03 |
| **Totale Missione 2** | **79,5** | **11,7** | **91,5** | **1,11** |
| **M3. INFRASTRUTTURE PER UNA MOBILITÀ SOSTENIBILE** | | | | |
| M3C1 - Rete ferroviaria ad alta velocità/capacità | 26,77 | 9,33 | 36,30 | 0,00 |
| M3C2 - Intermodalità e logistica integrata | 0,38 | 2,80 | 3,16 | 0,00 |
| **Totale Missione 3** | **27,13** | **12,1** | **39,5** | **0,00** |
| **M4. ISTRUZIONE E RICERCA** | | | | |
| M4C1 - Potenziamento dell'offerta dei servizi di istruzione: dagli asili nido alle università | 19,44 | 0,00 | 19,44 | 2,49 |
| M4C2 - Dalla ricerca all'impresa | 12,44 | 1,00 | 13,44 | 0,49 |
| **Totale Missione 4** | **30,48** | **1,00** | **32,48** | **2,93** |
| **M5. INCLUSIONE E COESIONE** | | | | |
| M5C1 - Politiche per il lavoro | 6,66 | 0,00 | 6,66 | 5,97 |
| M5C2 - Infrastrutture sociali, famiglie, comunità e terzo settore | 11,17 | 0,13 | 11,30 | 1,28 |
| M5C3 - Interventi speciali per la coesione territoriale | 1,98 | 2,43 | 4,41 | 0,00 |
| **Totale Missione 5** | **19,81** | **2,5** | **22,37** | **7,25** |
| **M6. SALUTE** | | | | |
| M6C1 - Reti di prossimità, strutture e telemedicina per l'assistenza sanitaria territoriale | 7,00 | 0,50 | 7,50 | 1,50 |
| M6C2 - Innovazione, ricerca e digitalizzazione del servizio sanitario nazionale | 8,63 | 2,39 | 11,01 | 0,21 |
| **Totale Missione 6** | **15,63** | **2,9** | **18,51** | **1,71** |
| **TOTALE** | **191,8** | **38,8** | **222,1** | **13,8** |

In quanto all'operatività in CWOL bisogna accedere alla funzione **190. Servizi Economici/10. Finanziaria/10. Bilancio e Variazioni/30. Vincoli**:

- Selezionare **C2 – Vincoli derivanti da trasferimenti** e cliccare **Nuovo Sottolivello**;
- In questa fase va inserito il "vincolo padre" a cui verranno agganciati tutti i singoli progetti ("vincoli figli") quindi nella schermata a seguire compilare i campi ricordandosi di iniziare il **Codice del Vincolo** con "C2" e di inserire nei campi descritti:

[Schermata: Anagrafica Vincoli - Inserimento vincolo padre. Struttura del Vincolo: AVANZO - C) PARTE VINCOLATA > C2 - Vincoli derivanti da trasferimenti > C2.50 - FONDO PNRR_M1_DIGITALIZZAZIONE, INNOVAZIONE, COMPETITIVITÀ E CULTURA. Campi: Codice del Vincolo: C2.50; Descrizione: FONDO PNRR_M1_DIGITALIZZAZIONE, INNOVAZIONE, COMPETITIVITÀ E CULTURA; Descrizione per stampe: M1: DIGITALIZZAZIONE, INNOVAZIONE, COMPETITIVITÀ E CULTURA; Parte: Non specificato; Dettagli Destinazione Vincolo: Vincoli derivanti da trasferimenti; Controllo su Gestionale: Libero; Conto Tesoreria: (campo ricerca); Anagrafica Operativa dal: 2022 al 0; Saldo Iniziale Competenza: 0,00; Saldo Iniziale Cassa: 0,00; Anno Inizio Competenza: 0; Anno Inizio Cassa: 0]

- Una volta completato l'inserimento cliccare **Aggiorna**;

- Cliccare poi **Torna Elenco**, selezionare la riga del "vincolo padre" appena inserito e cliccare **Nuovo Sottolivello**. In questo caso si raccomanda di riportare nel **Codice del Vincolo** la denominazione del vincolo padre (nell'esempio che vi riportiamo C2.50) e nella **Descrizione** il codice della missione e componente (vedi tabella 1) di cui il contributo PNRR per il progetto in questione fa parte. Si ricorda che ad ogni "vincolo figlio" dovrà corrispondere un singolo progetto.

[Schermata: Anagrafica Vincoli - Inserimento vincolo figlio. Struttura del Vincolo: AVANZO - C) PARTE VINCOLATA > C2 - Vincoli derivanti da trasferimenti > C2.50 - FONDO PNRR_M1_DIGITALIZZAZIONE, INNOVAZIONE, COMPETITIVITÀ E CULTURA > C2.50.01 - M1C3_Ristrutturazione Palazzo della Pieve. Campi: Codice del Vincolo: C2.50.01; Descrizione: M1C3_Ristrutturazione Palazzo della Pieve; Dettagli Destinazione Vincolo: Vincoli derivanti da trasferimenti; Controllo su Gestionale: Libero; Anagrafica Operativa dal: 2022 al 0]

---

### 2.2 Gestione dei capitoli

Per quello che riguarda le entrate si consiglia di inserire un capitolo per tipologia di finanziamento da PNRR mentre per le spese andrà assunto un capitolo per progetto. Esempi:

[Diagramma: Relazione tra capitoli di entrata e capitoli di spesa]

- **Capitolo Entrata con risorse PNRR_M1, vincolo C2.50** → **Capitolo Spesa progetto "x" finanziato da risorse PNRR_M1C1, vincolo C2.50.01**
- **Capitolo Entrata con risorse PNRR_M1, vincolo C2.50** → **Capitolo Spesa progetto "y" finanziato da risorse PNRR_M1C3, vincolo C2.50.02**
- **Capitolo Entrata con risorse PNRR_M3, vincolo C2.60** → **Capitolo Spesa progetto "z" finanziato da risorse PNRR_M3C1, vincolo C2.60.01**
- **Capitolo Entrata con risorse PNRR_M5, vincolo C2.70** → **Capitolo Spesa progetto "v" finanziato da risorse PNRR_M5C1, vincolo C2.70.01**

Mentre nei capitoli di Entrata sarà quindi **FONDAMENTALE** inserire il vincolo di appartenenza, per i capitoli di spesa il discorso cambia nel momento in cui il finanziamento del progetto sia misto (ad esempio un finanziamento da PNRR e un cofinanziamento comunale) e quindi in questo caso non è corretto collegare l'uscita in toto al vincolo.

Per l'inserimento dei capitoli collegati ai vincoli seguire l'iter successivo:

- Accedere alla funzione **190. Servizi Economici/10. Finanziaria/10. Bilancio e Variazioni/10. Voci di Bilancio** e cliccare **Nuovo**;
- Porre particolare attenzione all'inserimento del vincolo corretto:

[Schermata: Voci di Bilancio - Inserimento capitolo. Parte: Entrata; Voce Bil.: 2010101 00000 00 00; Definizione - Piano Finanziario: 2 1 1 1 0% Trasferimenti correnti da Amministrazioni Centrali; Descrizione: Finanziamento da PNRR_Missione_1. Tab Classificazione e Statistiche: Vincolo: C2.50 FONDO PNRR_M1_DIGITALIZZAZIONE, INNOVAZIONE, COMPETITIVITÀ E CULTURA; Influisce su avanzo di competenza: Sì, influisce]

---

### 2.3 Gestione di accertamenti e impegni

Il collegamento tra capitoli e vincoli è di particolare importanza in quanto poi, nel momento in cui l'Ente avrà a disposizione i finanziamenti e quindi dovrà accertare le risorse o, per quello che riguarda le uscite, una volta decisa la programmazione delle spese, dovrà creare impegni, entrambe le operazioni avranno il campo del vincolo già compilato in automatico se il vincolo è già stato inserito nel capitolo.

Come ribadito nel paragrafo precedente questo discorso varrà **SEMPRE** per le entrate mentre molto meno per le uscite a causa della possibile diversità delle fonti di finanziamento dei capitoli. Nel caso in cui però un impegno sarà finanziato da un fondo PNRR basterà inserirvi il relativo vincolo nel campo apposito:

[Schermata: Impegni - Tab Vincoli. Anno/Numero: 2022; Voce Bil.: 00000000 00000 000 00; Tab Vincoli attiva: Collegamento con Vincoli: Su un Unico Vincolo; Vincolo: C2.50.01 M1C3_Ristrutturazione Palazzo della Pieve; Disponibilità Operativa: 0,00. Sezione: Finanziato dai seguenti Accertamenti appartenenti allo stesso Vincolo. Pulsante: Collega un Nuovo Accertamento]

---

### 2.4 Programmazione dei progetti

Per quello che riguarda invece la programmazione delle spese per la finalizzazione del progetto potrebbe risultare utile inserire il cronoprogramma di un'opera. Per questa parte della procedura si rimanda al seguente documento:

- **2019_c02_implementazioni_gestione_schede_monitoraggio_fpv:**
  https://wiki.nuvolaitalsoft.it/lib/exe/fetch.php?media=guide:comunicazioni_2019:2019_c02_implementazioni_gestione_schede_monitoraggio_fpv.docx.pdf

---

### 2.5 Consultazioni da scheda vincolo

Provvedere ad una corretta gestione dell'anagrafica vincoli riguardanti i fondi PNRR facilita poi la consultazione delle varie movimentazioni avvenute per quel vincolo; se lo schema ad albero illustrato nei paragrafi è stato costruito bene si potranno infatti consultare i movimenti o del singolo progetto o di un'intera fonte di finanziamento. Nella colonna a destra della scheda vincolo (sia "padre" che "figlio") si possono scegliere infatti una serie di opzioni che supporteranno l'utente nella visualizzazione ad esempio della situazione di competenza con i relativi movimenti sull'avanzo, la situazione di cassa con i dati sul pagato e l'incassato relativo ad uno quello specifico vincolo o movimenti del vincolo nell'Allegato A2.

#### Scheda Vincolo con opzioni di consultazione:

[Schermata: Anagrafica Vincoli - Scheda vincolo C2.50.01 M1C3_Ristrutturazione Palazzo della Pieve. Colonna opzioni a destra: Altra Ricerca, Aggiorna, Situazione Competenza, Situazione di Cassa, Situazione del Bilancio, Movimentazioni Annuali, Avanzo Libero, Stampa Allegati al Bilancio, Eliminazione Residui Finanziati da Entrate Vincolate, Cancellazione, Torna Elenco]

#### Situazione competenza:

[Schermata: Situazione Competenza per C2.50.01 - M1C3_Ristrutturazione Palazzo della Pieve (Anno 2022). Tabella con colonne: Riga, Titolo, Dati contabili, Importi, Parte Corrente, Parte Capitale, Provenienza/Formula. Righe principali: 1-VALORE INIZIALE AL 01-01-2022; 2-AVANZO APPLICATO AL BILANCIO di cui: 2.1-Da previsione iniziale, 2.2-Da variazione di Bilancio; 5-AVANZO NON APPLICATO AL BILANCIO; 6-IMPEGNI PLURI COMP.2A (CP,RS,RP,FP) Finanziati; 7-UTILIZZO su IMPEGNI COMPETENZA senza VINCOLO; 8-AVANZO APPLICATO AL BILANCIO e NON UTILIZZATO; 9-ENTRATE da ACCERTAMENTI COMP.2A; 10-IMPEGNI PLURI COMP.2A (CP,RS,RP,FP) Finanziati; 11-ECONOMIE su IMPEGNI COMPETENZA senza VINCOLO; 12-AVANZO DA STANZIAMENTO Missione 20; 13-AVANZO GENERATO DALLA GESTIONE DI COMPETENZA; 14-CANCELLAZIONE RESIDUI PASSIVI INSUSSISTENZA (-); 15-CANCELLAZIONE RESIDUI ATTIVI INSUSSISTENZA (+); 16-INCREMENTO RESIDUI ATTIVI VARIAZIONI POSITIVE; 17-AVANZO GENERATO dalla GESTIONE RESIDUI; 18-ECONOMIE su IMPEGNI FPV (FP,DC) Titolo 1; 19-ECONOMIE su IMPEGNI FPV (FP,DC) Titolo 2; 20-ECONOMIE su IMPEGNI FPV (FP,DC) Titolo 3; 21-SOMME TRASFERITE ad ALTRI VINCOLI; 22-SOMME PROVENIENTI da ALTRI VINCOLI; 23-SOMME UTILIZZATE per COPERTURA DISAVANZO (-); 24-SOMME AGGIUNTE da SALDO FCDCDE; 25-SOMME SOTTRATTE da SALDO FCDCDE. Pulsanti a destra: Movimentazioni Annuali, Esp. Situazione Competenza, Esp. Situazione Equilibri, Allegato al Bilancio di Previsione, Allegato al Rendiconto]

#### Situazione di cassa:

[Schermata: Situazione di Cassa per C2.50.01 - M1C3_Ristrutturazione Palazzo della Pieve (Anno 2022). Tabella con colonne: Riga, Titolo, Dati contabili, Totale Vincolo, Saldo su conto del vincolo, Somme su altri conti, Provenienza/Formula. Righe: 1-CASSA DISPONIBILE AL 01-01-2022; 2-INCASSATO da Riscossione; 3-PAGATO da Ordinativo; 4-SOMME DISTINTE - PROVENIENTI da altri VINCOLI; 5-SOMME NEGATIVE - TRASFERITE ad altri VINCOLI; 6-SALDO CASSA AL 14/07/2022. Sezione DETTAGLIO CONTI DI TESORERIA con colonne: Conto, Descrizione, Dati, Saldo Iniziale, Entrate, Uscite, Saldo. Pulsanti a destra: Movimentazioni Annuali, Stampa Ordinativi]

#### Consultazione e stampa allegati al bilancio:

[Schermata: Allegati al Bilancio. Campi: Bilancio: Rendiconto; Tipo Allegato: Quote Vincolate; Versione Ufficiale (checkbox). Pulsanti: Esporta in XLSX, Crea Report PDF]