# Manuale per Economato - CWOL (Modulo F.06)

## 1. Configurazioni

Per poter utilizzare il modulo Economato in CWOL è necessario configurare alcune tabelle di base:

- Agenti contabili
- Fondi economali
- Conti economali
- Voci movimento
- Tipi movimento
- Abilitazione utenti

**Percorso menu:** `Servizi Economici -> Tabelle -> Economato`

[Schermata: percorso menu Servizi Economici -> Tabelle -> Economato con sottomenu: 10. Agenti Contabili, 20. Fondi Economali, 30. Conti economali, 40. Voci Documento, 50. Tipo movimenti, 60. Abilitazione utenti]

### Tabella "Agenti contabili"

È possibile la gestione di più agenti contabili, ogni agente contabile è collegato ad un utente di login ed anche i tipi movimento sono abilitati ad uno o più utenti.

In alternativa è possibile utilizzare un unico agente contabile denominato **"Cassa Economale"**.

[Schermata: tabella Agenti contabili con colonne Cod, Descrizione, Organigramma, Numeratore, Riporto entrate, Riporto spese, Data ult. stampa]

### Tabella "Fondi economali"

I fondi economali sono collegati all'agente contabile e costituiscono il primo livello di classificazione dei movimenti economali. È possibile definire un importo di massimo scoperto (se si vuole tenere sotto controllo l'inserimento di movimenti di spesa per un certo fondo).

Nella visualizzazione dell'elenco dei fondi viene riportato il totale delle entrate e delle uscite del singolo fondo.

Al singolo fondo vengono associati gli impegni e gli accertamenti dell'anno contabile di esercizio che potranno essere utilizzati nei movimenti economali.

In fase di inserimento è possibile inserire in automatico l'impegno (o l'accertamento) sul relativo fondo senza entrare in gestione della tabella stessa.

[Schermata: tabella Fondi economali con colonne Cod, Descrizione Fondo, Tipo Fondo, Max Scoperto, Tot. Entrata, Tot. Spesa]

### Tabella "Conti economali"

I conti possono essere utilizzati per specificare (a seconda della configurazione) la natura delle spese (Buoni economali, Incassi Biblioteca...) o la provenienza (es. Cassa Contanti, Conto corrente...).

Al singolo conto è possibile collegare un numeratore di entrata ed uno di spesa oppure utilizzare un unico contatore per tutti i conti. Nella schermata di elenco dei conti vengono riportati anche gli importi dei movimenti presenti (Saldo iniziale, Totale entrata, Totale spesa).

[Schermata: tabella Conti economali con colonne Cod, Descrizione conto economale, Num. Entrata, Num. Spesa, Saldo iniziale, Mov. entrata, Mov. spesa, Data stampa]

### Tabella "Voci movimento"

Le voci rappresentano il dettaglio del movimento economale. In particolare è possibile collegare l'impegno di spesa alla singola voce utile per creare il relativo mandato nella fase di rendiconto automatico.

[Schermata: tabella Definizione Voci con colonne Cod, Descrizione voce, Quantità, Importo unit., Tot., e collegamenti a Impegno/accertamento]

### Tabella "Tipi movimento"

I tipi movimento identificano le tipologie di documenti che si possono inserire nel modulo economato e contengono varie opzioni tra cui:

- **Causale** (che definisce se si tratta di un documento di entrata o di uscita)
- **Fondo, Conto** (che definisce la classificazione del documento)
- **Utente/i abilitato/i**
- Ecc...

[Schermata: tabella Tipi movimento con colonne Cod, Validità, Descrizione, Tipo Documento, Causale, Conto economale, Fondo economale, No Rend.]

### Tabella "Abilitazione utenti"

La tabella abilitazione utenti permette di abilitare o meno la visione/gestione ad un utente di una o più tipologia di movimento (questa associazione può essere fatta anche dal singolo tipo movimento specificando l'elenco degli utenti abilitati).

[Schermata: tabella Abilitazione utenti con selezione utente e elenco tipi movimenti con checkbox di abilitazione]

---

## 2. Movimenti Economali

Il programma permette la gestione (inserimento, modifica e stampa) dei movimenti della cassa economale.

**Percorso menu:** `Servizi Economici -> Economato -> Movimenti Economali`

[Schermata: percorso menu Servizi Economici -> Economato -> 10. Movimenti Economali]

### Ricerca movimenti

Dalla toolbar cliccare **"Altra Ricerca"** per ricercare un movimento in base a dei filtri specifici.

[Schermata: elenco Movimenti Economali con pulsante "Altra Ricerca" nella toolbar]

Tra i parametri di ricerca troviamo anche la voce di bilancio, l'impegno/accertamento e la posizione del movimento.

[Schermata: finestra di ricerca con campi: Parte, Data bolletta dal/al, Numero bolletta dal/al, Cod. Cliente, Agente Contabile, Conto Economale, Fondo Economale, Tipo Movimento, Voce di Bilancio, Anno/Num.Imp./Acc., Posizione movimento (Da Rendicontare / Da Rendicontare / Non interessa rendiconto / Rendicontato), Anno e Progressivo, Solo documenti provvisori]

### Stampa ricevuta

Dalla toolbar (dopo aver selezionato un movimento) cliccare **"Stampa"** per produrre la stampa della ricevuta a seconda del modello collegato al tipo movimento.

[Schermata: anteprima di stampa ricevuta economale con intestazione documento, dati soggetto, piano finanziario e causale]

### Inserimento nuovo movimento

Dalla toolbar cliccare **"Nuovo"** per inserire un nuovo movimento.

[Schermata: elenco movimenti con pulsante "Nuovo" evidenziato nella toolbar]

Una volta cliccato il bottone **Nuovo**, si aprirà una nuova schermata dove potremo procedere all'inserimento di un nuovo movimento. Il primo campo da compilare è il **"Tipo Movimento"**.

[Schermata: form nuovo movimento con campi Data Documento, Tipo Movimento, Descrizione, Anno/Prog., Num. Ricevuta, e sezioni Dettagli Documento, Dettagli Voci, Riferimenti Economato, Altri Dati]

#### Dettagli Documento

Una volta selezionato il tipo movimento vengono impostate le varie sezioni tra cui la parte (entrata o uscita), il progressivo interno e solo dopo aver aggiunto il movimento il campo **"Num. Ricevuta"**.

La **data del documento** è modificabile (per inserire dei movimenti pregressi) ed il soggetto può essere presente nell'archivio dei soggetti o inserito solo a livello descrittivo (selezionando **"Altro soggetto"**).

[Schermata: sezione Dettagli Documento con campi Data Documento, Tipo Movimento, Descrizione, Parte, Anno/Prog., Num. Ricevuta, Soggetto (Soggetto presente in anagrafica / Altro soggetto), Cod. Fiscale, Persona, Sede Legale/Res.]

#### Dettaglio Voci

Nella sezione **"Dettaglio Voci"** è possibile modificare la descrizione della voce, l'importo e riportare l'accertamento (o l'impegno) che permette la compilazione automatica del **"piano finanziario"** e della **"voce di Bilancio"**.

[Schermata: sezione Dettaglio Voci con tabella: Riga, Progressivo, Descrizione, Quantità, Importo unit., % Scont., IVA, Importo, Accertamento Anno e N°, Piano Finanziario, Voce di Bilancio]

#### Riferimenti Economato

Nella sezione **"Riferimenti Economato"** vengono riportati i dati relativi alla classificazione del movimento che si sta inserendo ed è possibile specificare un codice statistico utile per delle estrazioni.

[Schermata: sezione Riferimenti Economato con campi Cod. Statistico, Conto Economale, Fondo Economale, Agente Contabile, Movimento Provvisorio]

#### Altri Dati

Infine la sezione **"Altri Dati"** viene popolata automaticamente a seconda dello stato del movimento stesso (posizione, riferimento su stampa giornale di cassa, estremi liquidazione...).

[Schermata: sezione Altri Dati con campi Posizione Movimento, Giornale di Cassa, Estremi Liquidazione, Giornale per Conto]

---

## 3. Interrogazione Movimenti Economali

L'interrogazione movimenti è un cruscotto che permette di avere una visione globale di tutti i fondi ed i conti gestiti, ma anche di scendere nel dettaglio dei movimenti di un mese ed arrivare al dettaglio dei movimenti di un singolo giorno di quel mese.

**Percorso menu:** `Servizi Economici -> Economato -> Interrogazione Movimenti Economali`

[Schermata: percorso menu Servizi Economici -> Economato -> 20. Interrogazione Movimenti Economali]

[Schermata: cruscotto interrogazione con struttura ad albero (Movimenti Economali -> fondi -> conti), dettaglio mensile con Totali Entrate, Totale Uscite, Saldo, e grafico a barre mensile (Entrate/Uscite/Saldo)]

Cliccando sull'icona **occhio** in corrispondenza della riga del singolo mese viene aperta una finestra con l'elenco dei giorni del mese.

[Schermata: elenco giorni del mese con colonne Totali Entrate, Totale Uscite, Saldo]

Cliccando sull'icona **occhio** in corrispondenza della riga del singolo giorno si possono visualizzare i movimenti di quel giorno.

---

## 4. Stampe

Oltre alla stampa della ricevuta economale che può essere lanciata direttamente dall'elenco dei movimenti o entrando in visualizzazione o modifica di un movimento, il modulo economato prevede le seguenti stampe:

- Primanota di Cassa
- Elenco movimenti
- Giornale di Cassa
- Riepilogo Movimenti per Capitolo
- Stampe Ministeriali
- Distinta di Cassa

**Percorso menu:** `Servizi Economici -> Economato -> Stampe`

[Schermata: percorso menu con sottomenu: 10. Primanota di Cassa, 20. Elenco movimenti, 30. Giornale di Cassa, 40. Riepilogo Movimenti per Capitolo, 50. Stampe Ministeriali, 60. Distinta di Cassa]

### "Primanota di Cassa"

Dalla toolbar cliccare **"Stampa"** per produrre un riepilogo in un certo intervallo di date dei movimenti presenti ed i relativi saldi.

[Schermata: form Stampa Primanota di Cassa con campi Agente Contabile, Periodo Registrazione Dal/Al, Tipo Movimenti (di Cassa), Data Stampa, sezioni Conti (Conto 1-5) e Tipi Movimenti (Tipo 1-5), checkbox Stampa riepilogo parametri e Stampa descrizione movimenti]

### "Elenco Movimenti"

Dalla toolbar cliccare **"Stampa"** per produrre un elenco dei movimenti divisi tra entrate e uscite di un certo intervallo di date ed ulteriori filtri di ricerca.

[Schermata: form Stampa Elenco Movimenti con campi Parte (Entrata/Uscita), Periodo Registrazione Dal/Al, Data Stampa, Tipo Movimento, Voce Tipo Movimento, sezione Dettagli di stampa (Dettaglio Movimenti, Dettaglio Voce Tipo Mov., Riepilogo Movimenti per GG, Riepilogo Movimenti per CC)]

### "Giornale di Cassa"

Dalla toolbar cliccare **"Stampa"** per produrre la stampa richiesta. Se lanciata in **"Definitiva"** permette di riportare nei singoli movimenti il numero del giornale di cassa generato.

[Schermata: form Stampa Giornale di Cassa con campi Agente Contabile, Data Ultima Stampa, Riporto Entrate, Riporto Uscite, Periodo Registrazione Dal/Al, Data Stampa, Tipo Stampa (Prova/Definitiva), sezione Conti (Conto 1-5), checkbox Stampa riepilogo per conto, Stampa riepilogo per cod. statistico 1/2, Modello Stampa, sezione Firme (Firma Riga 1/2/3)]

### "Riepilogo Movimenti per Capitolo"

Dalla toolbar cliccare **"Stampa"** per produrre la stampa dei movimenti economali presenti in archivio ma divisa per capitoli.

Sono presenti anche le sezioni **"Intestazioni"** e **"Selezione"** per poter riportare dei titoli nella parte superiore della stampa e per selezionare solo alcuni capitoli invece di riportarli tutti.

[Schermata: form Stampa Movimenti per Capitolo con tab Generali/Intestazioni/Selezione. Tab Generali: Parte, Periodo Registrazione, Fondo Economale, Parametri di stampa (Dettaglio Movimenti, Stampa Riepilogo, Effettua Rendiconto Manuale, Includi Movimenti Provvisori, Stampa Solo Rendicontati, Movimenti senza Voci Bilancio), sezione Conti Economali. Tab Intestazioni: Data Stampa, Intestazione Stampa, Firme. Tab Selezione: Voce Bilancio da/a, Imp/Acc. Da, Capo Pagina]

### "Stampe Ministeriali"

Dalla toolbar cliccare **"Stampa"** per produrre i modelli ministeriali **21** e **23**.

[Schermata: form Stampe Ministeriali con campi Modello Ministeriale (Mod. 21/23), Agente Contabile, Periodo Registrazione Dal/Al, Data Stampa, Dettagli di stampa (Dettaglio Movimenti, Stampa Riepilogo, Includi Mov. Provvisori, Stampa Mov. Non Rendicontati), sezione Conti Economali]

### "Distinta di Cassa"

Dopo aver compilato i dati richiesti:

- Agente contabile
- Data distinta
- Saldo in Conto corrente
- Numero di banconote e monete nei diversi pezzi

Dalla toolbar cliccare **"Conferma"** per produrre la stampa della distinta di cassa.

[Schermata: form Distinta di Cassa con campi Agente Contabile, Data Distinta, SALDO DI C/C, e tabella con righe per ogni taglio di banconote/monete (Banconote da € 500, € 200, € 100, € 50, € 20, € 10, € 5, Monete da € 2, € 1, 50c, 20c, 10c, 5c, 2c, 1c), TOTALI E IN DEPOSITO, SALDO CONTABILE, DIFFERENZA]

---

## 5. Rendiconto Automatico

La funzione permette di creare le liquidazioni ed i mandati relativi ai movimenti economali.

- Può essere lanciata periodicamente (solitamente trimestralmente o mensilmente)
- Il programma seleziona solo i tipi movimento che **NON** hanno il flag **"escludi da rendiconto"** impostato
- Una volta lanciato in definitivo, imposta i movimenti come **"rendicontati"**

**Percorso menu:** `Servizi Economici -> Economato -> Elaborazioni Periodiche -> Rendiconto Automatico`

[Schermata: percorso menu Servizi Economici -> Economato -> 40. Elaborazioni Periodiche -> 10. Rendiconto Automatico]

### Procedura

1. Dalla toolbar cliccare **"Importa"** per importare i dati dei movimenti da elaborare.

[Schermata: finestra Rendiconto da creare e pagamenti economali con pulsante "Importa" evidenziato nella toolbar, tabella con colonne Anno, Prog., Agente contabile, Causale, Accertamento/Impegno, Soggetto, Progressivo ricevuta, Voce, Lotto, Causale, Data, Importo]

2. Una volta verificati i dati proposti, dalla toolbar cliccare **"Elabora"** per creare le liquidazioni ed i mandati relativi ai movimenti economali.

[Schermata: finestra Elaborazione Mandati con parametri: Tipo elaborazione (Entrambe/Entrate/Uscite), Tipo documento, Anno fattura/beni/servizio, Mod. emissione mandati (Ogni conto tesoriere, accertamento, beneficiario e modalità di riscossione), Unificazione mandati per cliente, Data elaborazione, Stampa movimenti creati, Annulla movimenti, pulsante "Elabora"]