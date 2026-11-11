# Modulo Economato – cityware.online (CWOL)

## Scopo

Illustrare le modalità operative per l'utilizzo del modulo economato di cityware.online:

- Configurazione tabelle di base
- Gestione movimenti economali
- Interrogazione movimenti
- Stampe
- Rendiconto automatico

### Argomenti

1. Tabelle di base
2. Movimenti economali
3. Stampe
4. Rendiconto automatico

---

## 1. Tabelle di base

Per poter utilizzare il modulo economato devono essere configurate le tabelle di base (raggiungibili da **"Servizi Economici -> Tabelle -> Economato"**) che contengono i parametri di funzionamento dell'applicativo:

- Agenti contabili
- Fondi economali
- Conti economali
- Voci movimento
- Tipi movimento
- Abilitazione utenti

### Tabella Agenti Contabili

Il modulo economato permette la gestione di più agenti contabili, ogni agente contabile è collegato ad un utente di login ed anche i tipi movimento sono abilitati ad uno o più utente.

[Schermata: Tabella Agenti Contabili con colonne Cod., Descrizione, Organigramma, Numeratore, Riporto entrata, Riporto spese, Data ult. stampa. Esempio: Cod. 1 – CASSA ECONOMALE – Organigramma: 01 26 02 03 ECO: Servizio Cassa Economale – Numeratore: ECOGIO]

### Tabella Fondi Economali

I fondi economali sono collegati all'agente contabile e costituiscono il primo livello di classificazione dei movimenti economali. È possibile definire un importo di massimo scoperto (se si vuole tenere sotto controllo l'inserimento di movimenti di spesa per un certo fondo).

Nella visualizzazione dell'elenco dei fondi viene riportato il totale delle entrate e delle uscite del singolo fondo.

Al singolo fondo vengono associati gli impegni e gli accertamenti dell'anno contabile di esercizio che potranno essere utilizzati nei movimenti economali. In fase di inserimento è possibile inserire in automatico l'impegno (o l'accertamento) sul relativo fondo senza entrare in gestione della tabella stessa.

[Schermata: Tabella Fondi Economali con colonne Cod., Descrizione Fondo, Tipo Fondo, Max Scoperto, Tot. Entrata, Tot. Spesa. Esempi: Cod. 1 – CASSA Economale x Anticipazioni Spese – Anticipazioni di cassa; Cod. 2 – FONDO da Incassi fotocopie – Incassi agente contabile]

### Tabella Conti Economali

I conti possono essere utilizzati per specificare (a seconda della configurazione) la natura delle spese (Buoni economali, Incassi Biblioteca…) o la provenienza (es. Cassa Contanti, Conto corrente…).

Al singolo conto è possibile collegare un numeratore di entrata ed uno di spesa oppure utilizzare un unico contatore per tutti i conti. Nella schermata di elenco dei conti vengono riportati anche gli importi dei movimenti presenti (Saldo iniziale, Totale entrata, Totale spesa).

[Schermata: Tabella Conti Economali con colonne Cod., Descrizione conto economale, Num. Entrata, Num. Spesa, Saldo iniziale, Mov. entrata, Mov. spesa, Data stampa. Esempi: C1 – Conto ANTICIPAZIONI ECONOMO (ECOGENT/ECOSPE); C2 – Conto INCASSI VARI (ECOFO/ECOFOS)]

### Tabella Voci Movimento

Le voci rappresentano il dettaglio del movimento economale. In particolare è possibile collegare l'impegno di spesa alla singola voce utile per creare il relativo mandato nella fase di rendiconto automatico.

[Schermata: Definizione Voci con colonne Cod., Validità, Descrizione voce, Quantità, Fissa, Importo unit., Fisso, Ass., IVA, As.Spl, IVA Sc., As.Rev., IVA Re., Ass.Es., IVA Es., Anno N° Acc. Fatt.Entrate, Anno N° Acc. Economale. Esempi: Cod. 14 – E – Costituzione fondo di cassa; Cod. 15 – E – Incasso proventi servizio fotocopie; Cod. 16 – E – Pagamento…; Cod. 17 – E – Versamento in Tesoreria]

### Tabella Tipi Movimento

I tipi movimento identificano le tipologie di documenti che si possono inserire nel modulo economato e contengono varie opzioni tra cui:

- **Causale** (che definisce se si tratta di un documento di entrata o di uscita)
- **Fondo, Conto** (che definisce la classificazione del documento)
- **Utente/i abilitato/i**
- Ecc…

[Schermata: Tabella Tipi Movimenti con colonne Cod., Validità, Descrizione, Tipo Documento, Causale, Conto economale, Fondo economale, No Rend. Esempi: Cod. 8 – Anticipazione Economale – Definitivo (Ricevuta) – 305 Entrata Economale – C1 – Fondo 1; Cod. 9 – Incassi da ENTRATE Varie Fotocopie – 305 Entrata Economale – C2 – Fondo 2; Cod. 10 – Pagamento con FONDI ANTICIPAZIONE – 300 Spesa Economale – C1 – Fondo 1; Cod. 11 – Versamento Economale entrate varie – 300 Spesa Economale – C2 – Fondo 2; Cod. 24 – Versamento saldo – 300 Spesa Economale – C1 – Fondo 1 – No Rend. ✓]

### Tabella Abilitazione Utenti

La tabella abilitazione utenti permette di abilitare o meno la visione/gestione ad un utente di una o più tipologia di movimento (questa associazione può essere fatta anche dal singolo tipo movimento specificando l'elenco degli utenti abilitati).

[Schermata: Abilitazione utenti con campo Utente (es. CED – UTENTE AMMINISTRATORE) e tabella Tipi movimenti con colonne Sel., Prog., Descrizione, Tipo documento, Dis., Validità. Esempi: 24 – Versamento saldo; 11 – Versamento Economale entrate varie; 10 – Pagamento con FONDI ANTICIPAZIONE; 9 – Incassi da ENTRATE Varie Fotocopie; 8 – Anticipazione Economale – tutti Definitivo (Ricevuta) – Validità: Economato]

---

## 2. Movimenti Economali

Il programma permette la gestione (inserimento, modifica e stampa) dei movimenti della cassa economale.

Come per tutte le tabelle di CWOL la schermata iniziale visualizza l'elenco dei movimenti presenti (relativi all'anno di esercizio corrente) e permette la ricerca, l'inserimento e la modifica degli stessi.

### Movimenti economali – Elenco

[Schermata: Elenco Movimenti Economali con colonne E/U, Anno/Prg., Descrizione Soggetto, N° Bolletta, Data Bolletta, Desc. Documento, Imp. Lordo, Fondo Economale, Conto Economale. Pulsanti: Nuovo, Altra Ricerca. Esempi di movimenti: pagamenti a fornitori, costituzione fondo di cassa, versamenti in tesoreria, incassi fotocopie, ecc.]

### Movimenti economali – Stampa ricevuta

Selezionando un movimento dall'elenco e cliccando sul bottone **«Stampa»** il programma produce la stampa della ricevuta a seconda del modello collegato al tipo movimento.

[Schermata: Visualizzatore Documenti con ricevuta di esempio: "MOVIMENTO DI ENTRATA n. 1 del 19/01/2022", Esercizio 2022, Voce di Entrata, Piano Finanziario, Conto C1, Causale: Costituzione fondo di cassa ANNO 2022, Totale Ricevuta € 999,00. Pulsante "Stampa" evidenziato in alto a destra.]

### Movimenti economali – Ricerca

Tra i parametri di ricerca troviamo anche la voce di bilancio, l'impegno/accertamento e la posizione del movimento.

[Schermata: Pannello ricerca con campi: Parte (Tutte), Data bolletta dal/al, Numero bolletta dal/al, Cod. Cliente, Agente Contabile, Conto Economale, Fondo Economale, Tipo Movimento, Voci di Bilancio, Anno/Num. Imp./Acc., Posizione movimento (Da Rendicontare / Non interessa rendiconto / Rendicontato), Anno e Progressivo, Solo documenti provvisori]

### Movimenti economali – Inserimento

**Fase 1 – Selezione tipo movimento:**

In fase di apertura la schermata risulta vuota finché non si seleziona il tipo movimento dalla lista o inserendo il codice (se conosciuto).

[Schermata: Schermata vuota con campi: Data Documento, Tipo Movimento (con ricerca), Tipo Documento, Descrizione, Anno/Prg., Num. Ricevuta. Tab: Dettagli Documento, Dettaglio Voci, Riferimenti Economato, Altri Dati. Sezione Soggetto con: Soggetto presente in anagrafico, Codice Cliente, Modalità Pagamento, Sede Legale/Res.]

**Fase 2 – Compilazione intestazione:**

Una volta selezionato il tipo movimento vengono impostate le varie sezioni tra cui la parte (entrata o uscita), il progressivo interno e solo dopo aver aggiunto il movimento il campo «Num. Ricevuta».

La data del documento è modificabile (per inserire dei movimenti pregressi) ed il soggetto può essere presente nell'archivio dei soggetti o inserito solo a livello descrittivo (selezionando «Altro soggetto»).

[Schermata: Ricevuta ENTRATA – Data Documento: 31/01/2023, Tipo Movimento: 8 – Anticipazione Economale, Tipo Documento: 305 Entrata Economale, Anno/Prg.: 2022/6144, Num. Ricevuta (vuoto – Ultimo emesso: 2). Sezione Soggetto con dropdown: "Soggetto presente in anagrafico" / "Altro soggetto"]

**Fase 3 – Dettaglio Voci:**

Nella sezione «Dettaglio Voci» è possibile modificare la descrizione della voce, l'importo e riportare l'accertamento (o l'impegno) che permette la compilazione automatica del piano finanziario e della voce di costo.

[Schermata: Tab "Dettaglio Voci" con Elenco Voci: Riga 1, Progressivo Voce 14, Descrizione: Costituzione fondo di cassa, Quantità: 1,00, Importo Unità: 1,00, Importo: 1,00. Colonne: Accertamento Anno e N°, Piano Finanziario, Voci di Bilancio. Totali: Totale Imponibile 1,00, Totale IVA 0,00, Totale documento 1,00]

**Fase 4 – Riferimenti Economato e Altri Dati:**

Nella sezione «Riferimenti Economato» vengono riportati i dati relativi alla classificazione del movimento che si sta inserendo ed è possibile specificare un codice statistico utile per delle estrazioni.

Infine la sezione «Altri Dati» viene popolata automaticamente a seconda dello stato del movimento stesso (posizione, riferimento su stampa giornale di cassa, estremi liquidazione…).

[Schermata sinistra – Riferimenti Economato: Cod. Statistici (Codice Statistico), Conto Economale: C1 – Conto ANTICIPAZIONI ECONOMO, Fondo Economale: 1 – CASSA Economale x Anticipazioni Spese, Agente Contabile: 1 – DELFINO LAURA ECONOMO COM.LE - CASSA ECONON, Movimento Provvisorio (checkbox)]

[Schermata destra – Altri Dati: Posizione Movimento, Giornale di Cassa, Estremi Liquidazione, Giornale per Conto]

### Movimenti economali – Interrogazione

L'interrogazione movimenti è un cruscotto che permette di avere una visione globale di tutti i fondi ed i conti gestiti, ma anche di scendere nel dettaglio dei movimenti di un mese ed arrivare al dettaglio dei movimenti di un singolo giorno di quel mese.

[Schermata: Interrogazione Movimenti Economali – Cruscotto con struttura ad albero: 1 CASSA Economale x Anticipazioni Spese > C1 Conto ANTICIPAZIONI ECONOMO; 2 FONDO da Incassi fotocopie > C2 Conto INCASSI VARI. Tabella "Riepilogo Mensile" con colonne: Totale Entrate, Totale Uscite, Saldo per ogni mese (Gennaio–Dicembre). Grafico a barre con Entrate (verde), Uscite (rosso), Saldo (blu) per mese. Dettaglio giornaliero (es. gennaio 2022) con colonne: Totale Entrate, Totale Uscite, Saldo per ogni giorno del mese.]

---

## 3. Stampe

Oltre alla stampa della ricevuta economale che può essere lanciata direttamente dall'elenco dei movimenti o entrando in visualizzazione o modifica di un movimento, il modulo economato prevede le seguenti stampe:

- Primanota di Cassa
- Elenco movimenti
- Giornale di Cassa
- Riepilogo Movimenti per Capitolo
- Stampe Ministeriali
- Distinta di Cassa

### Descrizione Stampe

| Stampa | Descrizione |
|--------|-------------|
| **Primanota di Cassa** | Produce un riepilogo in un certo intervallo di date dei movimenti presenti ed i relativi saldi |
| **Elenco movimenti** | Estrazione dei movimenti di entrata ed uscita presenti in archivio |
| **Riepilogo Movimenti per Capitolo** | Estrazione dei movimenti di entrata ed uscita presenti in archivio, riepilogati per capitolo |
| **Giornale di Cassa** | Se lanciata in definitivo permette di riportare nei singoli movimenti il numero del giornale di cassa generato |
| **Stampe Ministeriali** | Permettono di generare i modelli 21 e 23 utili alla fine di ogni anno contabile |
| **Distinta di Cassa** | Inserendo il numero di banconote e di monete presenti nella cassa contanti economale permette di effettuare una fotografia della situazione da una certa data memorizzando queste informazioni |

---

## 4. Rendiconto automatico

La funzione permette di creare le liquidazioni ed i mandati relativi ai movimenti economali.

- Può essere lanciata periodicamente (solitamente trimestralmente o mensilmente)
- Il programma seleziona solo i tipi movimento che **NON** hanno il flag «escludi da rendiconto» impostato
- Una volta lanciato in definitivo, imposta i movimenti come «rendicontati»

---

## Come attivare la procedura su CWOL

### Predisposizione ambiente

1) **Impostazione tabelle di base** (se non già utilizzato in cityware):
   - Agenti contabili
   - Fondi economali
   - Conti economali
   - Voci movimento
   - Tipi movimento
   - Abilitazione utenti

2) **Personalizzazione modello Ricevuta economale** per le varie tipologie (Entrata, Uscita, ecc..)

3) **Formazione su utilizzo applicativo Economato**

### Pianificazione e programmazione

- Richiedere al commerciale di riferimento per la formazione ed il tuning per l'attivazione o la migrazione del modulo
- A seguito conferma da parte del commerciale saranno pianificate le attività su ogni ente secondo le priorità indicate

### Stima Impegno

| Attività | Tempo stimato |
|----------|---------------|
| Impostazione tabelle di base (attività al punto 1) | circa 1/2 gg |
| Personalizzazione modello Ricevuta (attività al punto 2) | circa 1 gg |
| Formazione su applicativo (attività al punto 3) | circa 1 gg |