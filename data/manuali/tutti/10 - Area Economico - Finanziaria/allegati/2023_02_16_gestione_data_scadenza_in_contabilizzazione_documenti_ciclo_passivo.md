# Accettazione e contabilizzazione documenti ciclo passivo – Verifica e gestione data scadenza

**Modulo:** CWOL Financing

## Scopo

Illustrare le modalità operative per:

- Accettazione e contabilizzazione documenti ciclo passivo
- Creazione delle modalità di pagamento e associarle al soggetto fornitore
- Gestire la data scadenza in fase di contabilizzazione dei documenti di ciclo passivo

## Argomenti

**Accettazione e contabilizzazione documenti ciclo passivo**

- Accetta/Rifiuta
  - Elementi a disposizione per decidere
  - Rifiuto
- Verifiche e modifiche in fase di contabilizzazione
- Contabilizza

**Gestione data scadenza in modalità di pagamento**

**Anagrafica soggetti**

**Data scadenza calcolata dalla modalità di pagamento**

## Gestione flussi SDI

Il percorso da seguire per procedere all'accettazione/contabilizzazione dei documenti di ciclo passivo è il seguente:

`180. Servizi Economici` → `10. Finanziaria` → `40. Uscita` → `50. Gestione flussi SDI`

[Diagramma: menu a cascata dell'applicativo che evidenzia il percorso 180. Servizi Economici → 10. Finanziaria → 40. Uscita → 50. Gestione flussi SDI]

## Elementi a disposizione per decidere accettazione

- **Segnalazioni:** l'applicativo effettua alcuni controlli (come da elenco) che vengono segnalati in fase di accettazione
- **Possibilità di consultare il documento in formato XML** per ogni sezione di dati inserita
- **Consultazione CIG** in caso di assenza del CIG in fattura

[Screenshot: schermata "Dati generali del documento" con campo CIG evidenziato e finestra "Elenco dei controlli" che elenca i controlli effettuati sulla fattura elettronica]

L'applicativo effettua i seguenti controlli sulla fattura elettronica:

- Verifica presenza e validità del codice CIG
- Verifica validità del codice CUP (se presente)
- Verifica congruenza fra importo totale e somma delle righe IVA
- Verifica presenza del cliente/fornitore negli archivi dell'ente
- Verifica congruenza fra importo e tipologia documento
- Verifica presenza bollo virtuale
- Verifica della capienza CIG
- Verifica data inizio CIG
- Verifica data inizio CUP
- Verifica data esecutività Impegno

### Elementi da verificare per la correttezza

- **CIG** e **CUP** → verificare la correttezza nelle sezioni: Dati contratto, Dati ordine, Dati convenzione, Dati fatture collegate
- **Impegno** (disponibilità e collegamento con CIG, CUP)
- **IVA**
- **Dati pagamento** (IBAN e scadenza)

[Screenshot: schermata di dettaglio con sezioni "Dati dell'ordine di acquisto" (CUP, CIG), "Dati di riepilogo per aliquota IVA e natura", "Dati relativi al pagamento" con modalità, IBAN e data scadenza evidenziati]

## Accetta/Rifiuta

- **Elementi per decidere** → se non soddisfano i requisiti è possibile procedere al rifiuto della fattura all'interno della sezione **Accetta/Rifiuta**
- **Motivi del rifiuto**
  - 5 motivazioni ministeriali
  - Possibilità di aggiungere le note per chiarire ed approfondire la causa del rifiuto

Le 5 motivazioni ministeriali previste sono:

- a) fattura elettronica riferita ad un'operazione che non è stata posta in essere in favore del soggetto destinatario della trasmissione
- b) omessa o errata indicazione del Codice Identificativo di Gara (CIG) o del Codice Unico di Progetto (CUP)
- c) omessa o errata indicazione del codice di repertorio di cui al decreto del Ministro della salute 21 dicembre 2009
- d) omessa o errata indicazione del codice di Autorizzazione all'Immissione in Commercio (AIC) e del corrispondente quantitativo da riportare in fattura ai sensi del decreto del ministero
- e) omessa o errata indicazione del numero e data della determinazione dirigenziale d'impegno di spesa per le fatture emesse nei confronti delle regioni o degli enti locali

[Screenshot: finestra "Motivazione rifiuto" con template messaggio rifiuto (5 opzioni a)–e)) e campo "Messaggio rifiuto" per note aggiuntive; pulsanti laterali Accetta / Rifiuta / Archivia]

## Verifiche e modifiche in fase di contabilizzazione

- In fase di contabilizzazione è possibile **associare l'impegno prima dell'assegnazione**. Nel caso l'impegno associato a quel CIG è solamente uno, viene assegnato in automatico.
- Il **Settore IVA** viene valorizzato in automatico se tutti gli impegni associati a quel CIG sono collegati ad un capitolo con lo stesso settore IVA.
- **Possibilità di gestire la data scadenza** a seconda della modalità di pagamento inserita e visualizzare la modalità di calcolo utilizzata con i giorni previsti dallo scadenzario.

[Screenshot: schermata di contabilizzazione con campi "Impegno" (es. 2022 00339.006), "Settore IVA" valorizzato da tabella di default, e sezione "Associazione con modalità pagamento soggetto e recapito" con "Data Scadenza calcolata" e "Modalita' calcolo scadenza"]

## Contabilizza

In fase di contabilizzazione vengono riproposti:

- **Nella testata** la data scadenza reperita dalla modalità di pagamento inserita
- **Nell'assegnazione** l'impegno inserito in contabilizzazione, con la possibilità di verificare anche la situazione impegno e la situazione capitolo

[Screenshot: schermata "Documenti Uscita" con tab Testata (campo Data Scadenza evidenziato) e tab Assegnazione (colonne Data scadenza e Impegno evidenziate)]

## Gestione data scadenza in modalità di pagamento

È possibile creare una modalità di pagamento al fine di gestire in fase di contabilizzazione la data scadenza come da accordi con il fornitore.

Per inserire una modalità di pagamento occorre seguire il percorso:

`Servizi Economici` → `Tabelle` → `Clienti/Fornitori` → `Modalità riscossione e pagamento`

[Screenshot: schermata "Pagamento e Riscossione" con campi Tipologia, Descrizione, campi richiesti, IBAN e sezione "Scadenza" con menu a tendina "Partenza per calcolo scadenza"]

Le opzioni disponibili per il campo **Partenza per calcolo scadenza** sono:

- Data di emissione del documento
- Calcolo scadenza a decorrere dalla data del protocollo
- Calcolo scadenza a decorrere dalla data di Registrazione
- Calcolo scadenza a decorrere dalla data acquisizione
- Scadenza fissa presente nel documento in ingresso da SDI
- Nessun calcolo automatico (inserita manualmente - casi particolari)

### Esempi di configurazione

- **Scadenza a 30 gg** → Partenza per calcolo scadenza: *Calcolo scadenza a decorrere dalla data acquisizione*; Giorni da aggiungere per rata 1: `30`
- **Scadenza fissa** → Partenza per calcolo scadenza: *Scadenza fissa presente nel documento in ingresso da SDI*

[Screenshot: due configurazioni di modalità di pagamento a confronto: "Conto corrente bancario 30 gg" (calcolo da data acquisizione, 30 giorni) e "Conto corrente bancario (CON SCADENZA DA SDI)" (scadenza fissa da SDI)]

## Anagrafica soggetti

- Creare la modalità di pagamento
- Cercare il soggetto in Anagrafica seguendo il percorso `Servizi Economici` → `Tabelle` → `Clienti/Fornitori` → `Clienti/Fornitori`
- Inserire in **Albo Pagamenti** le modalità di pagamento per la gestione della data scadenza

[Screenshot: scheda "Fornitore/Cliente" con tab "Albo Pagamenti" attiva; tabella con righe Pagamento (cod. 20 "Conto corrente bancario 30 gg", cod. 103 "Conto corrente bancario (CON SCADENZA DA SDI)") e Riscossione, con colonne ABI/CAB, Numero C.C., IBAN]

## Data scadenza calcolata dalla modalità di pagamento

- Affinché la data scadenza venga gestita in modo corretto e rispondente agli accordi assunti con il fornitore, si raccomanda di **adeguare le regole di calcolo della scadenza** nelle modalità di pagamento utilizzate nell'albo pagamenti di ogni soggetto.
- Si raccomanda quindi di verificare e, al bisogno, adeguare l'albo dei pagamenti aggiungendo tra le modalità presenti quella che prevede la **conservazione della scadenza fissa** presente nel documento ricevuto dal fornitore. Il calcolo della scadenza a **30 gg dalla data di acquisizione** va utilizzato quando non sono definite regole precise, o il fornitore non indica una data fissa.
- **Non può superare i 60 gg** dalla data di consegna del flusso da SDI.
- **Non può essere gestita liberamente** in quanto viene comunicata all'area RGS (ex PCC) e va ad incidere nel calcolo dei tempi medi pagamento.

> Perciò, gestire la data scadenza attraverso le modalità di pagamento consentirà una corretta sincronizzazione con l'area RGS.

## Come attivare la procedura su CWOL?

### Predisposizione ambiente – Stima Impegno

- Configurare i parametri di contabilizzazione automatica documenti in base agli automatismi che l'ente ritiene opportuno attivare
- Formazione su applicativo che sarà valutata in base alle esigenze di ogni ente con una stima media di circa **3 giorni** tutto compreso

### Pianificazione e programmazione

- Riferirsi al commerciale di riferimento per quantificare la formazione ed il tuning per l'attivazione o la migrazione del modulo
- A seguito conferma anche via mail saranno pianificate le attività su ogni ente secondo le singole esigenze