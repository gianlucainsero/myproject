# Manuale CO.GE armonizzata ed ACCRUAL

## 1. Gestione parametrizzazioni e configurazioni iniziali

### 1.1 Verifica attivazione modulo CO.GE

L'attivazione del modulo CO.GE si effettua dall'anno contabile di interesse nel menù:

*180. Servizi economici → 90. Tabelle → 10. Configurazioni → 10. Definizione e operabilità: Parametri generali*

[Screenshot: schermata "Tabelle personalizzazioni modulo finanziaria" con evidenziate le sezioni "Definizioni Comuni" e "Collegamenti attuali con altri moduli applicativi", in particolare il flag "Contabilità Generale" attivato]

### 1.2 Configurazioni generali modulo CO.GE

Ad inizio anno devono essere verificate alcune parametrizzazioni generali, tra cui:

- Gestione conti IVA per scritture di prima nota con IVA detraibile
- Gestione conto cassa (dove vengono effettuate scritture di prima nota dei mandati/reversali)
- Gestione conti per proventi/oneri straordinari
- Gestione conti per ratei/risconti

Tali impostazioni si effettuano dal menù:

*180. Servizi economici → 90. Tabelle → 10. Configurazioni → 00. Definizione e operabilità: CO.GE – CO.ANA – IVA*

[Screenshot: schermata "Definizioni e operabilità - Co.Ge. - Co.Ana. - IVA" con tab CO.GE attiva, sezioni "Conti di default - generale" e "Conti di default - ratei e risconti", e sezione "Modalità creazione primanota"]

### 1.3 Gestione causali operative

Le causali operative rappresentano la tipologia movimenti con cui effettuare la registrazione finanziaria, IVA, di CO.ANA e di CO.GE. Si ricorda infatti che in CWOL ogni movimento può essere associato a vari aspetti, tra cui:

- Finanziaria
- IVA
- CO.ANA
- CO.GE
- Cassa economale

Il menù di gestione delle causali operative è il seguente:

*180. Servizi economici → 90. Tabelle → 20. Strutturali → 120. Tipi di documenti contabili e causali operative*

[Screenshot: schermata "Tipi di documenti contabili e causali operative" con codice tipo documento 90 "Riscossione diretta", evidenziate le opzioni "Valido per Co.Ge." e il campo "Prevista apertura ed eventuale chiusura (in funzione della causale chiusura)"]

Generalmente le causali CO.GE sono definite nel corso del primo esercizio di utilizzo del modulo CO.GE di CWOL.

### 1.4 Gestione Piano dei Conti

Il piano dei conti ministeriale, secondo il D.Lgs 118-2011 o, in alternativa D.Lgs 91-2011, è già presente nei vostri archivi. In caso di necessità di estrazioni e/o aggiunta di ulteriori livelli foglia (livello max.) si può accedere al menù di cui sotto.

Dall'esercizio 2026 il PdC è arricchito con il PdC unico multidimensionale relativo alla contabilità ACCRUAL.

**PIANO DEI CONTI D.LGS 118-2011 o 91-2011 e ACCRUAL**

*180. Servizi economici → 90. Tabelle → 30. Definizione Bilancio → 60. Piano dei conti*

[Screenshot: schermata "Piano dei Conti" con struttura ad albero dei conti (01 Attivo, 02 Passivo, 03 Conti d'ordine, 05 Componenti positivi della gestione, ecc.) e colonne Codice, Descrizione, Tipo Conto, Validità, Dare/Avere, Anno Inizio, Foglia Co.Ge., Foglia Co.Ana., Bil.Ref.]

### 1.5 Gestione Modelli contabili

In CWOL è possibile gestire in modo personalizzato vari modelli contabili. Di default sono pre-forniti i modelli del D.LGS 118-2011 o del DPR 97-2003 e di ACCRUAL.

Il menù per la gestione dei modelli è il seguente:

*180. Servizi economici → 90. Tabelle → 130. Contabilità generale → 10. Modelli*

[Screenshot: schermata "Modelli Prospetti" con elenco "Bilancio DPR 97/2003" e "Bilancio ACCRUAL"]

Ogni modello deve essere associato ai propri prospetti e deve essere classificato tra:

- **Rendiconto**: modello classico per rendiconto
- **Budget**: modello per il bilancio di previsione/budget in forma economica (ha 3 colonne pari a 3 annualità)
- **Conto economico ACCRUAL**: modello classico per il rendiconto ACCRUAL

[Screenshot: schermata "Modelli Prospetti" con descrizione "Bilancio DPR 97/2003", Tipo Modello "Rendiconto", e prospetti associati: Conto economico D.P.R. 97/2003, Stato patrimoniale attivo DPR 97/2003, Stato patrimoniale passivo DPR 97/2003]

### 1.6 Gestione prospetti

In CWOL è possibile gestire in modo personalizzato vari prospetti contabili (conto economico e stato patrimoniale). Di default sono pre-forniti i prospetti relativi ai modelli del D.LGS 118-2011 e del DPR 97-2003 e di ACCRUAL.

*180. Servizi economici → 90. Tabelle → 130. Contabilità generale → 20. Prospetti*

Dopo aver inserito il nome del prospetto è necessario inserire tutte le righe che esso contiene (ovvero tutte le macro-voci che si vogliono gestire).

[Screenshot: schermata "Prospetti Ministeriali" con descrizione "Conto economico D.P.R. 97/2003", Tipologia Prospetto "Conto Economico", e struttura ad albero con lettere A, B, C e righe numerate (A/1 Ricavi delle vendite e delle prestazioni, A/2 Variazione della rimanenza, ecc.)]

Ogni singola riga ha alcune caratteristiche, si segnalano in rosso quelle fondamentali:

[Screenshot: schermata di dettaglio riga prospetto con campi Lettera, Rif.1, Rif.2, Rif.3, Rif.4, Desc. Struttura, Di cui, Totale/Parziale, Livello, Note1, Note2, Anno Inizio (2025), Anno Fine (2999), Ordine (20), e sezione Personalizzazione con Grassetto, Corsivo, Funzione, Senza Riferimenti (Lettera...), Senza Importo, Tipo Riga, Livello Riga, Gestione Riga, Colore Sfondo]

### 1.7 Gestione modelli di stampa

I modelli di stampa sono pre-forniti ed al momento non modificabili in quanto serve una gestione particolare del PDF (ovvero il PDF è lavorato per essere collegato ai singoli modelli).

*180. Servizi economici → 90. Tabelle → 130. Contabilità generale → 30. Modelli di stampa*

### 1.8 Gestione tabella di raccordo tra piano dei conti e prospetti

Una volta inserito il piano dei conti ed i modelli/prospetti è necessario inserire il raccordo tra le due parti. Ovvero deve essere compilata una tabella che per ogni PdC di livello foglia (terminale) deve esplicare in quale riga del prospetto deve essere convogliata.

Il menù della tabella raccordi è il seguente:

*180. Servizi economici → 90. Tabelle → 130. Contabilità generale → 40. Gestione Raccordi*

Per ogni raccordo devono essere indicati:

- Piano dei conti
- Modello
- Riga del prospetto

[Screenshot: schermata "Raccordi" con campi Piano Conti, Modello (Bilancio DPR 97/2003), Struttura Prospetti]

### 1.9 Configurazione conti cassa vincolati e liberi

Nella scritture di contabilità generale è possibile tenere distinta la cassa libera dalla cassa vincolata. Se si vogliono avere le scritture di prima nota differenziate in due PdC differenti si deve compilare la tabella dei conti tesoreria inserendo, in alternativa tra loro, il conto cassa libera o il conto cassa vincolata.

Per il D.Lgs 118-2011 o D.Lgs 91-2011 i conti sono i seguenti:

- **01.3.4.01.01.01.001** = cassa libera
- **01.3.4.01.01.01.002** = cassa vincolata

*180. Servizi economici → 90. Tabelle → 20. Strutturali → 10. Conti di tesoreria*

[Screenshot: schermata "Conti di tesoreria" con codice conto tesoreria C1 "Conto libero fruttifero", Tipo contabilità "Fruttifero", Destinazione "Libero", e campi Conto cassa e Codice cassa entrata evidenziati]

## 2. Logica di base della contabilità generale di CWOL

### 2.1 Premessa

Il modulo della CO.GE è totalmente integrato in CWOL e può essere utilizzato in sincronia alla gestione delle contabilità finanziaria oppure in modo isolato. La seconda modalità (*modo isolato*) fa perdere gran parte degli automatismi.

### 2.2 Logica di base delle registrazioni di prima nota

#### 2.2.1 Modalità di registrazione della prima nota

CWOL consente di effettuare la registrazione di prima nota derivata dalla contabilità finanziaria in momenti diversi, in base alle esigenze.

Sostanzialmente si segnalano due momenti in cui può essere effettuata la registrazione di prima nota:

- **Dall'accertamento / impegno**: la registrazione del costo/ricavo e del debito/credito viene rilevata in fase di accertamento/impegno
- **Da dettaglio documenti finanziaria**: la registrazione del costo/ricavo e del debito/credito viene rilevata in fase di assegnazione o riscossione/liquidazione del documento.

La scelta dell'origine della prima nota deve essere effettuata a livello di accertamento/impegno.

[Screenshot: schermata "Accertamenti" con sezione "Registrazioni in Co.Ge." e campo "Origine della Prima Nota" con menu a tendina aperto che mostra le opzioni: "Da Accertamenti in sede di Chiusura Esercizio", "Da Accertamenti a richiesta dell'Operatore", "Da Accertamenti in sede di Assunzione", "Da dettaglio Documenti Finanziaria", "Contestuale inserimento Accertamenti"]

La contabilità armonizzata ci suggerisce di muoverci in modo differente tra entrata ed uscita:

- **ENTRATA**: registrazioni a partire dall'accertamento
- **USCITA**: registrazioni a partire dal dettaglio documenti finanziaria

#### 2.2.2 Reperimento conti del PdC per registrazioni prima nota

Trattandosi di una registrazione di partita doppia si ritiene opportuno indicare come vengono reperiti i conti del PdC.

Nell'accertamento / impegno deve tassativamente essere indicato il conto relativo alla dimensione economica (ricavo/costo)

[Screenshot: schermata "Accertamenti" con tab "Co.Ge. - Co.Ana." e campo "Conto Co.Ge." valorizzato con 05.2.2.01.35.001 "Oneri da autorizzazioni"]

Nella tabella del piano finanziario deve essere indicato il conto relativo alla dimensione patrimoniale (credito/debito)

[Screenshot: schermata "Piano Finanziario - Entrata" con sezione "Contabilità Generale da movimenti Competenza", campo "Conto Debiti/Crediti" valorizzato con 01.3.2.02.01.02.001 "Ricavi derivanti dalla vendita di servizi" e campo "Tipo Documento" con 501 "FATTURE DA EMETTERE"]

### 2.3 Pillole informative sulla CO.GE in CWOL

Di seguito si elencano alcune pillole informative sull'utilizzo della CO.GE in CWOL:

- **Non è possibile effettuare registrazioni di prima nota massive** (*quelle derivanti dalla finanziaria*) **in contemporanea tra due utenti.**

  Non è quindi possibile che Tizio esegua le registrazioni di prima nota delle reversali e Caio, nello stesso momento, esegua le registrazioni di prima nota dei mandati. È però possibile aprire un'altra sessione di CWOL su un altro browser e continuare con altre operazioni (es: inserimento fatture, inserimento impegni/accertamenti, etc..)

- **Durante le elaborazioni delle prime note massive** (*quelle derivanti dalla finanziaria*) **non è possibile chiudere la sessione browser** (ovvero chiudere con la X in alto a destra).

  Se viene chiusa la pagina WEB l'elaborazione si interrompe bruscamente con il rischio di registrazioni di prima nota errate.

- **Per ogni elaborazione massiva** (prime note derivanti dalla finanziaria) **è vivamente consigliabile utilizzare range di periodi brevi** (1/2 mesi max).

- **Ogniqualvolta si ha un dubbio sul conto del PdC da utilizzare e/o sulla modalità di gestione si consiglia di fare riferimento alla CO.GE degli esercizi precedenti.**

  Per esempio se si deve valorizzare il conto CO.GE dell'impegno XXX si consiglia di vedere quale sia il capitolo dell'impegno XXX e poi visualizzare il conto CO.GE degli impegni dell'anno N-1 sempre riferiti a quel determinato capitolo.

## 3. Apertura esercizio contabile

### 3.1 Premessa

Dopo la configurazione e la parametrizzazione delle tabelle eseguita come descritto al paragrafo 1, prima di iniziare con le registrazioni di prima nota riferite all'anno N si rende necessario ri-aprire i conti patrimoniali alla data 01-01-N. La riapertura dei saldi patrimoniali avviene tramite un apposito programma che leggendo i saldi al 31-12-N-1 riapre i saldi al 01-01-N.

### 3.2 Gestione programma apertura esercizio

Il programma si trova al menù:

*180. Servizi economici → 60. Contabilità generale → 50. Funzioni di servizio → 10. Apertura esercizio economico-patrimoniale*

In primis deve essere verificato che il programma mostri l'esercizio corretto (esempio: siamo al 15-02-2027 e ci apprestiamo a voler effettuare le scritture di prima nota del rendiconto 2026, l'esercizio che deve essere mostrato è il 2025)

Di seguito le configurazioni da seguire per l'apertura dell'esercizio (ATTENZIONE: tutte le date vanno modificate in base all'esercizio che si sta chiudendo)

[Screenshot: schermata "Apertura Esercizio Economico-Patrimoniale" con Tipo Operazione "Definitiva", Esercizio da Chiudere 2025, sezioni CHIUSURA e APERTURA con date, causali (5041 Chiusura Stato Patrimoniale, 5042 Apertura Stato Patrimoniale), conti patrimonio attivo/passivo, e sezioni Chiusura Conto Economico con causale 5043]

NB: Le configurazioni di cui sotto possono variare da Ente ad Ente; per eventuali dubbi si consiglia di contattare il servizio assistenza.

L'operazione di apertura esercizio genera un report con il saldo dei conti:

[Screenshot: report con colonne Data reg., Causale/Provenienza Rif.Fin., Codice e descrizione Conto, DARE, AVERE, Tipologia errore, con elenco conti patrimoniali attivi (immobilizzazioni, crediti, ecc.)]

## 4. Configurazioni per registrazioni prima nota

### 4.1 Parametrizzazioni generali prima nota

Prima di eseguire le prime note automatizzate, ovvero quelle derivanti da movimenti finanziari, deve essere utilizzato il programma "Impostazione regole x creazione prima nota D.L. 118" che si trova al menù:

*180. Servizi economici → 60. Contabilità generale → 50. Funzioni di servizio → 20. Impostazione regole x creazione prima nota D.L. 118*

Tale programma si tratta di una funzione di utilità che consente di mappare e configurare tutte le tabelle che sono necessarie alla generazione delle prime note derivanti dalle scritture di finanziaria. Su ogni "regola" è presente un'information che spiega il suo funzionamento.

**N.B.** Si tratta di parametrizzazioni molto importanti per il regolare funzionamento delle registrazioni "automatizzate"; al tempo stesso si raccomanda la massima attenzione nel loro utilizzo in quanto una scorretta parametrizzazione può inficiare su tutte le registrazioni di prima nota.

Le regole da eseguire sono le seguenti:

**1_1**: consente di ereditare le configurazioni dall'esercizio precedente:

[Screenshot: schermata "Regole Prima Nota Co.Ge." con tab "Piano Finanziario" e regola "1_1: Eredita da Esercizio Precedente" selezionata, pulsante "Esegui Fase Selezionata"]

**1_2**: valorizza il flag creazione sul piano finanziario (si ricorda che in base al piano finanziario si può generare la prima nota da impegni/accertamento o da documento) (lasciare impostazione STANDARD)

[Screenshot: schermata con regola "1_2: Valorizza Flag della Modalità di Creazione" e campo "Valorizzazione: Standard"]

**1_3**: valorizza nel piano finanziario la causale da impostare sugli accertamenti/impegni (utilizzare le causali dello screenshot)

[Screenshot: schermata con regola "1_3: Valorizza Causali" e campi "Causali per Movimenti di Entrata: 5001 Prima nota da accertamenti" e "Causali per Movimenti di Uscita: 5002 Prima nota da impegni"]

**1_4**: valorizza i conti da utilizzare nelle registrazioni di uscita legate al "fatture da ricevere" (residuo conservato non associato a documenti) (lasciare impostazione STANDARD)

[Screenshot: schermata con regola "1_4: Valorizza Parametri per Residui" e campo "Conto Co.Ge. Fatture da Ricevere/Emettere: 02.4.8.01.01.01.001 Fatture da ricevere"]

**2_1**: valorizza flag "conto cliente/fornitore" (lasciare impostazione STANDARD)

[Screenshot: schermata con tab "Piano dei Conti" e regola "2_1: Valorizza Flag Conto Cliente/Fornitore", Valorizzazione: Standard]

**3_1**: Creazione schede per anno corrente (lasciare impostazione STANDARD)

[Screenshot: schermata con tab "Movimenti Co.Ge." e regola "3_1: Creazione schede e anno corrente"]

**3_2**: eredita da pagamenti/incassi (lasciare impostazione STANDARD)

[Screenshot: schermata con regola "3_2: Eredità da pagamenti/incassi"]

**3_3**: eredita da piano finanziario (lasciare impostazione STANDARD)

[Screenshot: schermata con regola "3_3: Eredità da piano finanziario"]

**3_4**: consente di valorizzare un determinato conto CO.GE in determinati impegni (in base al piano finanziario) o in determinati accertamenti (in base al piano finanziario).

[Screenshot: schermata con regola "3_4: Valorizza Conto co.ge." e campi "Conto transito acquisti Titolo 2-52" e "Conto transito vendite Titolo 4-54", con filtri su PIANO FINANZIARIO Parte Entrata/Uscita e Competenza/Residuo]

Tale regola viene utilizzata per valorizzare i cd. CONTI TRANSITO utilizzati per il dialogo con GIES

### 4.2 Aggiornamento dati da matrice di correlazione

**ATTENZIONE**: tale funzionalità deve essere utilizzata soltanto dagli Enti che intendono redigere una contabilità economico-patrimoniale (CO.GE) secondo le modalità definite dalla Ragioneria Generale dello Stato e che quindi:

- NON adottano un piano dei conti personalizzato
- NON adottano regole di registrazione prima nota personalizzate
- NON adottano deroghe alla matrice di correlazione

La funzionalità "aggiornamento" si trova al menù:

*180. Servizi economici → 110. Utilità → 150. Normalizzazioni → 10. Riclassificazione tabelle contabili*

Selezionare archivio "Aggiornamento dati da matrice di correlazione"

[Screenshot: schermata "Normalizzazioni Archivio" con sezione archivio "Aggiornamento dati da matrice di correlazione" e opzioni: Piani finanziari, Bilancio, Impegni/Accertamenti, Liquidazioni/Riscossioni]

Il programma consente di impostare i conti patrimoniali ed economici presenti nella matrice di correlazione su:

- Piano finanziario
- Bilancio
- Impegni/accertamenti
- Liquidazioni/riscossioni

In ogni caso viene effettuata la sovrascrittura dei dati già presenti nel database. Si tratta di una operazione non reversibile.

## 5. Gestione prima nota

### 5.1 Premessa

In CWOL sono gestibili due tipologie di registrazioni:

- Registrazioni manuali inserite dall'utente
- Registrazioni massive derivate dalla contabilità finanziaria

La caratteristica principale di CWOL è la modalità di gestione biunivoca tra CONTABILITÀ FINANZIARIA e CONTABILITÀ GENERALE.

Infatti in ogni registrazione massiva è possibile visualizzare i dati finanziari che l'hanno generata:

[Screenshot: schermata "Movimenti Prima Nota" con tab "Collegamento CO.FI" evidenziata, che mostra Numero Documento, Provvedimento, AA Nr Mandato]

Dalla gestione della CO.FI è possibile interrogare la presenza di una eventuale prima nota:

[Screenshot: schermata "Documenti" con pulsante "Collegamento prima nota" evidenziato e finestra popup "Movimenti Prima Nota" con elenco registrazioni]

### 5.2 Registrazioni manuali

I movimenti di prima nota sono interrogabili dal seguente menù:

*180. Servizi economici → 60. Contabilità generale → 10. Movimenti prima nota*

Da tale programma è possibile inserire una nuova registrazione manuale oppure ricercare registrazioni già esistenti (sia inserite dall'utente che massive derivate dalla finanziaria)

[Screenshot: schermata "Movimenti Prima Nota" con campi di ricerca: Data Registrazione, Data Competenza, Tipo Movimento, Provenienza Movimenti, Tipo documento, Codice soggetto, Descrizione Movimento, Importo, Riferimenti Conto Economico/Patrimoniale, Codici Statistici, Riferimenti Finanziari, Classificazione di Bilancio]

Si sottolinea la possibilità di ricercare i movimenti di prima nota in base al movimento finanziario che lo ha generato

[Screenshot: sezione "Riferimenti Finanziari" con campi Accertamento, Numero Documento, AA Nr Reversale]

L'inserimento di una registrazione manuale si presenta come un classico inserimento di una partita doppia. La registrazione deve avere un saldo DARE-AVERE = 0,00 e deve contenere almeno 2 righe (1 in dare e 1 in avere). Non ci sono limiti massimi di righe.

[Screenshot: schermata "Movimenti Prima Nota" con tab "Dettagli" e righe di registrazione con colonne Riga, Conto, Dare, Avere, Descrizione Riga, e totali con Differenza 0,00]

### 5.3 Registrazioni massive collegate a movimenti di finanziaria

Nel corso degli anni sono stati sviluppati ed implementati programmi che consentono di effettuare una registrazione di contabilità economico-patrimoniale partendo da un movimento finanziario (cd. *prima nota automatizzata*)

I programmi massivi si trovano al menù:

*180. Servizi economici → 60. Contabilità generale → 40. Creazione prima nota*

e sono i seguenti:

- 10. Prima Nota da Impegni-Accertamenti
- 20. Prima Nota da Documenti
- 30. Prima Nota da Mandati
- 40. Prima Nota da Reversali
- 50. Prima Nota da Fatturazione Attiva

La prima nota da fatturazione attiva non viene utilizzata, in quanto le registrazioni di prima nota relative agli avvisi di pagamenti sono effettuate da "Documenti".

#### 5.3.1 Prima nota da impegni/accertamenti

[Screenshot: schermata "Crea Prima Nota da Impegni/Accertamenti" con Tipo Operazione "Definitiva", Parte "ENTRATA", campi Titolo Da/a, Tipologia 1 Da/a, Tipologia 2 Da/a, Categoria Da/a, Livello 5 Da/a, Anno/n° Accertamento, Data Ultima Modifica, Modalità di creazione "1 - Per importo accertamento", Modalità di Output "XLS Sintetico"]

Le modalità di creazione da utilizzare sono le seguenti:

- **1- Per importo accertamento/impegno**: consente di effettuare la registrazione di prima nota partendo dall'accertamento/impegno (la scrittura viene effettuata secondo la disp. Operativa)
- **3- Per importo residuo conservato**: consente di effettuare la registrazione di prima nota del residuo conservato che non è associato ad alcun documento (la scrittura viene effettuata secondo la disp. reale)
- **4- Per importo variazioni/riduzioni**: consente di effettuare la registrazione di prima nota relativa alle variazioni negative/positive di accertamenti/impegni a residui (si registrano le insussistenze del passivo/attivo) e le sopravvenienze attive
- **5/6- Per la gestione automatizzata di ratei/risconti** (al momento non utilizzate negli anni 2023 e 2024)

Per gli accertamenti devono essere eseguite le modalità **1** e **4**.
Per gli impegni devono essere eseguite le modalità **1, 3, 4**

Per le modalità 3-4-5-6 vengono richieste ulteriori informazioni:

- **Causale contabile**: si rimanda al paragrafo 1.3; in dettaglio utilizzare le seguenti causali, che sono già state utilizzate nel 2023 e nel 2024:

[Screenshot: schermata con Parte "ENTRATA", Modalità di creazione "4 - Per importo variazioni/riduzioni", Causale Contabile "5003 Prima nota da variazioni - accertamenti", Insussistenze dell'attivo "09.1.2.01.01.001", Sopravvenienze attive "09.2.3.99.99.001"]

[Screenshot: schermata con Parte "SPESA", Modalità di creazione "3 - Per importo residuo conservato", Causale Contabile "5006 Prima nota da variazione + impegni"]

[Screenshot: schermata con Parte "SPESA", Modalità di creazione "4 - Per importo variazioni/riduzioni", Causale Contabile "5006 Prima nota da variazione + impegni", Insussistenze del passivo "09.2.2.01.01.001"]

- **Conto del PdC**: si rimanda al paragrafo 1.2; in dettaglio utilizzare le seguenti causali, che sono già state utilizzate nel 2023 e nel 2024:

[Screenshot: schermata con Parte "ENTRATA", Modalità di creazione "4 - Per importo variazioni/riduzioni", Causale Contabile "5003 Prima nota da variazioni - acce...", Insussistenze dell'attivo "09.1.2.01.01.001", Sopravvenienze attive "09.2.3.99.99.001"]

[Screenshot: schermata con Parte "SPESA", Modalità di creazione "4 - Per importo variazioni/riduzioni", Causale Contabile "5006 Prima nota da variazione + impegni", Insussistenze del passivo "09.2.2.01.01.001"]

#### 5.3.2 Prima nota da documenti

[Screenshot: schermata "Crea Prima Nota da Documenti" con Tipo Operazione "Definitiva", Parte "SPESA", Data Registrazione, flag "Aggiorna registrazioni co.ge. esistenti", Competenza/Residuo "Entrambe", Riferimento contropartita "Da impegni/accertamenti"]

Si rammenta di selezionare la parte ENTRATA/SPESA.

Il flag "aggiorna registrazioni CO.GE esistenti" consente di sovra-scrivere eventuali prime note già esistenti.

#### 5.3.3 Prima nota da mandati

[Screenshot: schermata "Creazione Prima Nota da Mandati" con Tipo Operazione "Definitiva", Parte "SPESA", Periodo emissione, e campo "Modalità di creazione" valorizzato con "1 - Fornitore totalizzato, Cassa per totale ordinativo"]

Si rammenta di utilizzare sempre la "modalità di creazione = 1-fornitore totalizzato, cassa per totale ordinativo"

Il flag "aggiorna registrazioni CO.GE esistenti" consente di sovra-scrivere eventuali prime note già esistenti.

#### 5.3.4 Prima nota da reversali

[Screenshot: schermata "Creazione Prima Nota da Reversali" con Tipo Operazione "Definitiva", Parte "ENTRATA", flag "Verifica registrazioni co.ge. esistenti" attivo, e campo "Modalità di creazione" valorizzato con "1 - Fornitore totalizzato, Cassa per totale ordinativo"]

Si rammenta di utilizzare sempre la "modalità di creazione = 1-fornitore totalizzato, cassa per totale ordinativo"

## 6. Gestione prospetti

### 6.1 Visualizzazione prospetti contabili

La visualizzazione dei prospetti contabili avviene dal seguente menù:

*180. Servizi economici → 60. Contabilità generale → 60. Prospetti CEP → Gestione prospetti FEP*

In primis si richiede di selezionare:

- Il modello contabile (es: D.Lgs 118-2011 o DPR 97-2003 o ACCRUAL)
- Il prospetto (es: stato patrimoniale attivo, stato patrimoniale passivo o conto economico)

[Screenshot: schermata "Gestione Prospetti" con Modello "Bilancio DPR 97/2003", Prospetto "Conto economico D.P.R. 97/2003", Da Data, A Data, e pulsante "Ricarica 2025"]

Successivamente cliccando su "Ricarica" vengono aggiornate le singole macro-voci in base alle registrazioni di prima nota presenti in archivio

[Screenshot: prospetto con colonne Lettera, RIF.1, RIF.2, RIF.3, Descrizione, 2025, 2024, con struttura del conto economico (A) COMPONENTI POSITIVI DELLA GESTIONE, A/1 Proventi da tributi, ecc.) e pannello laterale "Gestione dati Lettura 2025 + storico"]

Spiegazione delle principali funzioni:

| Funzione | Descrizione |
|----------|-------------|
| Icona dettaglio PdC | Consente la visualizzazione del dettaglio delle prime note divise per piano dei conti |
| Icona dettaglio analitico | Consente la visualizzazione del dettaglio analitico delle prime note |
| Ricarica 2025 | Aggiornamento/refresh dei dati visualizzati a video dell'anno contabile in corso |
| Ricarica 2025 e 2024 | Aggiornamento/refresh dei dati visualizzati a video sia dell'anno contabile in corso che dell'anno precedente. Utile per eventuali confronti infrannuali (es: situazione al 30/06/N vs 30/06/N-1) |
| F2 - Stampa | Consente di effettuare la stampa in formato PDF dei prospetti |
| Salva Estrazione | Consente di storicizzare nel database i dati di un determinato range temporale |
| Storico Salvataggi | Consente di visualizzare lo storico dei salvataggi storicizzati |

## 7. Gestione casi particolari

### 7.1 Partite di giro entrata – uscita

Le partite di giro (titolo E.09 e U.07) seguono una logica di contabilità generale particolare. L'entrata del titolo 9 effettua la registrazione a partire dall'accertamento mentre l'uscita del titolo 7 NON effettua alcuna prima nota (né da impegni né da documento). Tutte le partite di giro, indipendentemente dalla casistica, seguono la logica dell'Esempio.

Ecco le registrazioni classiche delle partite di giro:

- ACCERTAMENTO TITOLO E.09: *"credito X @ debito Y"*
- REVERSALE SU E.09: *"cassa a credito X"*
- IMPEGNO TITOLO U.07: *nessuna registrazione*
- MANDATO SU U.07: *"debito Y @ cassa"*.

**Esempio:**

Registrazione reincasso IVA split payment e conseguente pagamento all'Erario.

- **Accertamento su titolo E.09**

[Screenshot: schermata "Elenco Accertamenti" con accertamento 2025/00023, Piano Finanziario 9.01.01.02.001, Capitolo-Articolo 9010102.00043.0015, Oggetto "IVA SPLIT PAYMENT ANNO 2025 (autoalimentato)", Importo Originario 1.380.735,57]

Registrazione in CO.GE del tipo "Credito @ Debito"

[Screenshot: schermata "Movimenti Prima Nota" con tab "Dettagli" e righe: 1) 01.3.2.08.04.99.001 Crediti diversi DARE 1.380.735,57; 2) 02.4.5.05.04.01.002 Debito per scissione IVA da pa... AVERE 1.380.735,57]

- **Reversali su titolo E.09**

[Screenshot: schermata "Movimenti Prima Nota" con tab "Dettagli" e righe: 1) 01.3.2.08.04.99.001 Crediti diversi AVERE 330,00; 2) 01.3.4.01.01.01.001 Istituto tesoriere/cassiere DARE 330,00]

- **Impegno su titolo U.07**

*NESSUNA SCRITTURA*

- **Mandato su titolo U.07**

[Screenshot: schermata "Movimenti Prima Nota" con tab "Dettagli" e righe: 1) 02.4.5.05.04.01.002 Debito per scissione IVA da pa... DARE 451.071,12; 2) 01.3.4.01.01.01.001 Istituto tesoriere/cassiere AVERE 451.071,12]

## 8. Esempi errori generazione prima nota massiva

Di seguito si propongono alcuni esempi non esaustivi degli errori che si possono incontrare nell'elaborazione delle prime note massive (derivate dalla finanziaria).

### 8.1 Caso 1: conto per contropartita non presente

**ERRORE:**

[Screenshot: report "Crea Prima Nota da Impegni - ELENCO MOVIMENTI SCARTATI" con colonne E/S, Anno, Nr. Documento, Imp-Acc, Man-Rev, Piano Finanziario, Errore Riscontrato, con errori "Conto x contropartita non presente su impegno"]

**RISOLUZIONE:**

Inserire il conto CO.GE di costo nell'impegno:

[Screenshot: schermata "Impegni" con tab "Co.Ge. - Co.Ana." e campo "Conto Co.Ge." evidenziato da valorizzare]

### 8.2 Caso 2: Il documento è privo di liquidazione e di assegnazione

**ERRORE:**

[Screenshot: report "Crea Prima Nota da Documenti - ELENCO MOVIMENTI SCARTATI" con errori "Il Documento è privo di Liquidazione e di Assegnazione"]

**RISOLUZIONE**

Non si tratta di un errore, è normale che non venga effettuata la registrazione di prima nota.

### 8.3 Caso 3: Assegnazione priva di impegno

**ERRORE**

[Screenshot: report "Crea Prima Nota da Documenti - ELENCO MOVIMENTI SCARTATI" con errori "Assegnazione priva di impegno"]

**RISOLUZIONE**

Non si tratta di un errore, è normale che non venga effettuata la registrazione di prima nota.

### 8.4 Caso 4: Impegno XXX prevede la creazione della registrazione in CO.GE non da documenti

**ERRORE**

[Screenshot: report "Crea Prima Nota da Documenti - ELENCO MOVIMENTI SCARTATI" con errori "Impegno 2025 - 00571 prevede la Creazione della Registrazione in CO.GE non da Documenti" e "Conto x contropartita non presente su impegno 2025 - 00571"]

Tale errore si ha quando in un documento di uscita vengono utilizzate N liquidazioni che sono collegati ad impegni del titolo U.01 (prima nota da documenti) e dal titolo U.07 (prima nota non gestita).

Sono da considerare solo i documenti con impegni di competenza dell'anno

**RISOLUZIONE**

Andare in gestione documenti e richiamare il documento di uscita (es: 2025-1068); successivamente entrare in modifica e cliccare su "Contabilità generale"; il programma in automatico tenterà di inserire la registrazione soltanto per la quota parte relativa agli impegni del titolo U.01

[Screenshot: schermata "Documenti Uscita" con pulsante "Contabilità generale" evidenziato e finestra "Movimenti Prima Nota" con tab "Dettagli"]

## 9. Operazioni di quadratura CO.GE – CO.FI

### 9.1 Premessa

In linea generale l'obiettivo della contabilità economico-patrimoniale armonizzata (D.Lgs 118-2011 e 91-2011) è quello di riconciliare i dati della contabilità finanziaria con quelli della contabilità economico patrimoniale; in particolare si tratta di una riconciliazione dei crediti con i residui attivi e dei debiti con i residui passivi.

### 9.2 Stampa verifica CO.GE – CO.FI per quadratura debiti-crediti

Come supporto operativo per raggiungere l'obiettivo di quadratura tra CO.FI e CO.GE si suggerisce di utilizzare la presente stampa:

*180. Servizi economici → 10. Finanziaria → 80. Riaccertamento → 30. Cruscotto Allegati Riaccertamento*

Successivamente selezionare la stampa *"Residui attivi conservati al 31 dicembre AAAA provenienti dalla gestione di competenza"* o *"Residui passivi conservati al 31 dicembre AAAA provenienti dalla gestione di competenza"* in base all'esigenza di quadratura crediti/debiti e cliccare sull'icona della chiave inglese.

[Screenshot: schermata "Cruscotto Riaccertamento" con sezione "Prospetti da Allegare al Riaccertamento 2025", gruppi Entrata e Uscita, e icone chiave inglese evidenziate per i residui conservati provenienti dalla gestione di competenza]

Come parametri di input selezionare:

- Anno da: vuoto
- Anno a: anno del rendiconto che si sta chiudendo
- Riepilogo CO.FI – CO.GE: sì
- Tipo elenco: residui conservati

[Screenshot: schermata "Stampa Riaccertamenti" con Parte "Entrata", Anno da vuoto, Anno a 2025, Tipo elenco "Residui conservati", flag "Riepilogo CO.FI - CO.GE" attivo, pulsante "Crea Report PDF"]

Successivamente cliccare su "Crea report PDF" per ottenere a video la stampa di riepilogo.

[Screenshot: report "RIEPILOGO SINTETICO PER CONTO CREDITO/DEBITO" con colonne Conto CO.GE, Descrizione Conto credito/debito, Imp. da FIN, Imp. da CO.GE, Differenza, e righe di conti patrimoniali]

**Come leggere la stampa?**

Nella colonna "Imp. da FIN" viene mostrato l'importo del residuo finanziario esposto sotto forma di conto di contabilità generale. Il collegamento tra il conto della contabilità generale ed il piano finanziario di 5° livello avviene tramite la tabella del piano finanziario.

Nella colonna "Imp. da CO.GE" viene mostrato l'importo del saldo del determinato conto di contabilità generale.

Per ottenere una quadratura tra CO.FI e CO.GE è necessario che gli importi delle due colonne coincidano e che la colonna "Differenza" sia pari a 0,00

Si propongono alcuni esempi:

| Conto CO.GE | Descrizione Conto credito/debito | Imp. da FIN | Imp. da CO.GE | Differenza |
|-------------|----------------------------------|-------------|---------------|------------|
| 02.4.3.02.99.06.001 | Debiti per Trasferimenti correnti a altre imprese | 379.051,00 | 379.051,00 | 0,00 |

La stampa ci sta dando le seguenti informazioni:

- Il residuo finanziario collegato al conto *"02.4.3.02.99.06.001 – Debiti per trasferimenti correnti a altre imprese"* è pari ad euro 379.051,00. Il collegamento tra il conto della contabilità generale ed il piano finanziario di 5° livello avviene tramite la tabella del piano finanziario:

[Screenshot: schermata "Piano Finanziario - Parte USCITA - Anno 2025" con livelli 1-5 (Spese correnti > Trasferimenti correnti > Trasferimenti correnti a imprese > Trasferimenti correnti a altre imprese > Trasferimenti correnti a altre imprese) e sezione "Contabilità Generale da movimenti Competenza" con campo "Conto Debiti/Crediti" valorizzato con 02.4.3.02.99.06.001]

- Il saldo contabile del conto *"02.4.3.02.99.06.001 – Debiti per trasferimenti correnti a altre imprese"* è pari ad euro 379.051,00. L'informazione si può desumere tramite l'interrogazione per conto foglia.

Per visualizzare i piani finanziari di 5° livello associati ad un determinato conto CO.GE si suggerisce di utilizzare la seguente stampa:

*180. Servizi economici → 60. Contabilità generale → 70. Stampe → 30. Stampa verifica CO.GE – Finanziaria*

Successivamente indicare il conto CO.GE di cui si vogliono individuare i piani finanziari di 5° livello associati

[Screenshot: schermata "Stampa Verifica Co.Ge. - Finanziaria" con Tipo Collegamento "Riga", Codice Conto - Da e A valorizzati con 02.4.3.02.99.06.001, Periodo registrazione e competenza, Tipo Movimento E/S "Tutte", Tipo Stampa "Dettagliata"]

### 9.3 Quadratura conto economico

Per la quadratura del conto economico si suggerisce la stampa

*180. Servizi economici → 60. Contabilità generale → 70. Stampe → 30. Stampa verifica CO.GE – Finanziaria*

Indicando il conto CO.GE di ricavo/costo e poi il dettaglio per "Voce di bilancio"

[Screenshot: schermata "Stampa Verifica Co.Ge. - Finanziaria" con Tipo Collegamento "Riga", Codice Conto - Da e A valorizzati con 06.1.2.01.05.001 "Telefono fisso", Tipo Stampa "Voce Bilancio" selezionato]

## 10. ACCRUAL: il nuovo modulo di CWOL

### 10.1 Premessa

A partire da Marzo 2026 la suite CWOL è stata arricchita dal nuovo modulo ACCRUAL.

Il modulo ACCRUAL è sottoposto a licenza d'uso e collegato ad esso sono state create due proposte commerciali:

- **PI_26-000073** (Adeguamento Piattaforma ACCRUAL): La fornitura ha ad oggetto l'adeguamento tecnologico ed evolutivo del software CWOL al fine di consentire all'Ente di disporre di strumenti informatici idonei a supportare la transizione verso modelli di contabilità basati sul principio della competenza economica (ACCRUAL).
- **PI_26-0000030** (Servizio fase pilota ACCRUAL): si tratta di un supporto tecnico-professionale volto all'espletamento degli obblighi normativi relativa alla Fase Pilota.

### 10.2 Gestione Piano dei Conti

Il piano dei conti multidimensionale unico, valido per tutte le Amministrazioni Pubbliche incluse nella Riforma PNRR 1.15 (cd. *Riforma ACCRUAL*) è stato integrato con il PdC armonizzato già in uso e si trova al menù:

*180. Servizi economici → 90. Tabelle → 30. Definizione Bilancio → 60. Piano dei conti*

[Screenshot: schermata "Piano dei Conti" con struttura ad albero e colonne Codice, Descrizione, Tipo Conto, Normativa, Segmento, PdC, Validità, Dare/Avere, Anno Inizio, Anno Fine, Foglia Co.Ge., Foglia Co.Ana., Bil.Ref., con righe ACCRUAL evidenziate]

**NB**: Il piano dei conti multidimensionale viene aggiornato periodicamente a seguito di modifiche normative.

È possibile dettagliare maggiormente il PdC aggiungendo ulteriori livelli del segmento B e scegliendo come validità su Bilancio "ACCRUAL (cod. interno)"

[Screenshot: schermata "Piano dei Conti ACCRUAL" con Codice 1.1.1.1.1.99, Descrizione "Diritti di brevetto europei", Validità su Bilancio "ACCRUAL (cod interno)", Validità Conto "Sia Co.Ge. che Co.Ana.", Tipo Conto "Attività", Movimento "Si Dare che Avere"]

### 10.3 Gestione modello di raccordo

La determina del Ragioniere generale dello Stato n. 129 del 25 luglio 202 ha introdotto lo strumento del modello di raccordo che consente la riclassificazione dei dati contabili di ciascuna amministrazione secondo le voci del Piano dei conti unico. Sono previste 5 versioni differenti del modello di raccordo in base al Piano dei conti in uso presso ogni PA.

L'importazione del modello di raccordo, differenziata in base alla tipologia Ente, può essere effettuata utilizzando l'apposito programma:

*180. Servizi economici → 110. Utilità → 180. Importazioni → 100. Importazione modello di raccordo ACCRUAL*

[Screenshot: schermata "Importazione modello di raccordo ACCRUAL" con campo "Tipo File" e menu a tendina con opzioni: 1) Per le amministrazioni centrali incluse nel bilancio dello Stato (ministeri); 2a) Le Regioni, le Province autonome di Trento e di Bolzano, le città metropolitane, le province e i comuni; 2b) Gli enti locali diversi da quelli di cui alla lettera b) e gli enti strumentali in contabilità finanziaria; 3) Gli enti pubblici non territoriali in contabilità finanziaria; 4) Gli enti e le aziende del servizio sanitario nazionale]

**NB**: Prima di effettuare l'importazione scegliere adeguatamente la tipologia di file in base all'Ente.

Viene proposta di default l'importazione del modello di raccordo con il segmento B al fine di garantire a tutti gli Enti informazioni contabili a maggior valore aggiunto e consentendo a tutti gli stakeholders di avere dati più analitici.

Una volta importato il file, tutti i dati inseriti possono essere consultabili dal programma:

*180. Servizi economici → 90. Tabelle → 30. Definizione Bilancio → 80. Modello di raccordo ACCRUAL*

[Screenshot: schermata "Modello di raccordo ACCRUAL" con colonne Tipo, Cod. PdC, Descrizione Cod. PdC, Cod. PdC ACCRUAL, Descrizione Cod. PdC ACCRUAL, Tipologia, Utente, e pulsanti F2 - Nuovo, F3 - Alta Ricerca, F6 - Duplica]

Si ricorda che in caso di personalizzazione del Piano dei conti armonizzato (ovvero quello attualmente in uso secondo il D.Lgs 118-2011 o D.Lgs 91-2011) sarà necessario aggiungere delle righe di raccordo ACCRUAL personalizzate in quanto nell'importazione standard del modello di raccordo saranno valorizzate soltanto le righe riferite al Piano dei conti istituzionale previsto dalla normativa.

È prevista la funzione "Duplica" che consente di duplicare il modello di raccordo da un esercizio contabile all'altro (sia in avanti che indietro rispetto all'esercizio in corso).

[Screenshot: schermata con finestra "Duplicazione" con campi "Anno da Duplicare" e "Anno in cui duplicare", e pulsanti "Conferma" e "Annulla"]

### 10.4 Valorizzazione conto ACCRUAL su movimenti prima nota

Per la sola Fase Pilota ACCRUAL è possibile valorizzare l'attributo del Piano dei conti ACCRUAL sulle registrazioni di prima nota già esistenti mediante l'utilizzo di un programma massivo:

*180. Servizi economici → 60. Contabilità generale → 40. Funzioni di servizio → 30. Valorizza conto ACCRUAL su movimenti di prima nota*

[Screenshot: schermata "Valorizza conto ACCRUAL su mov. Prima Nota" con Tipo Operazione "Definitiva", Data Registrazione, Data Competenza, Tipo documento, Provenienza Movimenti, Progressivo Prima Nota, e flag "Aggiorna registrazioni co.ge. esistenti"]

Sono previste due modalità operative:

- **SIMULAZIONE**: viene effettuata la simulazione dell'operazione senza la scrittura dei dati sul database. Sono prodotti 2 file di output, uno contenente gli errori con la motivazione dello scarto ed uno con i dati corretti che il programma avrebbe eseguito.

- **DEFINITIVA**: il programma esegue l'operazione con la scrittura dei dati sul database. Vengono prodotti 2 file di output, uno contenente gli errori con la motivazione dello scarto ed uno con i dati correttamente eseguiti.

*Esempio output delle prime note scartate*

[Screenshot: file XLSX con colonne E/S, Anno Esercizio, Progressivo PN, Riga PN, Codice Piano Conti, Importo DARE, Importo AVERE, Motivo Scarto, con errori "OK raccordo - Record non inserito per mancata quadratura PN (verificare Riga PN 16)"]

*Esempio output delle prime note corrette*

[Screenshot: file XLSX con colonne Progressivo PN, Riga PN, E/S, Codice Piano Conti, Descrizione PdC Armonizzato, Piano dei Conti Accrual, Descrizione PdC Accrual, Importo DARE, Importo AVERE, Descrizione Movimento, con dati valorizzati]

È possibile sovra-scrivere i dati aggiungendo il flag:

[Screenshot: schermata "Valorizza conto ACCRUAL su mov. Prima Nota" con flag "Aggiorna registrazioni co.ge. esistenti" evidenziato]

### 10.5 Valorizzazione modello di raccordo ACCRUAL in XLSX

Al fine di verificare la bontà del lavoro svolto riguardante la riclassificazione contabile prevista per la Fase Pilota è possibile valorizzare il modello XLSX della Determina RGS n. 129 del 25-07-2025 sfruttando i dati dei movimenti di prima nota armonizzata già registrati in CWOL

*180. Servizi economici → 60. Contabilità generale → 40. Funzioni di servizio → 50. Valorizza modello di raccordo ACCRUAL in XLSX*

Scegliere la tipologia di modello di raccordo e cliccare su "Estrazione XLSX"

[Screenshot: schermata "Valorizza modello di raccordo ACCRUAL in XLSX" con campo "Tipologia modello di raccordo" e menu a tendina con le 5 tipologie, pulsante "Estrazione xlsx"]

Il programma genera un file XLSX identico a quello scaricabile dal sito: https://accrual.rgs.mef.gov.it/it/fase_pilota/Modelli-di-raccordo/

*Output XLSX:*

[Screenshot: file XLSX "PIANO DEI CONTI INTEGRATO per gli enti pubblici territoriali ex Dlgs 118 del 2011 (aggiornamento del 2023) - Allegato n. 6/2 al D.Lgs 118/2011 - PIANO ECONOMICO" con colonne LIVELLO, Descrizione, CODICE, e sezioni "Voci del Piano dei conti unico, Segmento A, raccordate con le voci del Piano dei conti vigente" e "SALDO CONTABILE 2023"]

### 10.6 Gestione prime note ACCRUAL

#### 10.6.1 Premessa

Dal programma "Movimenti prima nota" è possibile gestire le registrazioni di prima nota ACCRUAL.

Per la Fase Pilota si avranno due tipologie di registrazioni di prima nota:

- registrazioni di prima nota armonizzata con riclassificazione del PdC ACCRUAL (generate singolarmente o mediante l'utilizzo del programma descritto al par. 10.4) **[Registrazione tipo 2]**
- registrazioni di prima nota ACCRUAL (generate puntualmente per integrare/rettificare le prime note riclassificate) **[Registrazione tipo 1]**

Per distinguere queste tipologie di prime note è stato infatti introdotto il flag "Validità movimento" sia nelle causali operative che nelle registrazioni di prima nota.

*Focus causali operative*

*180. Servizi economici → 90. Tabelle → 20. Strutturali → 120. Tipi di documenti contabili e causali operative*

[Screenshot: schermata "Tipi di documenti contabili e causali operative" con codice tipo documento 21 "Fatture esig. differita (Iva+iva) TDO1", sezione "Co.Ge./Co.Ana." e campo "Validità registrazione" con menu a tendina: "Registrazione armonizzata", "Registrazione ACCRUAL", "Registrazione armonizzata ed ACCRUAL"]

*Focus registrazioni di prima nota*

*180. Servizi economici → 60. Contabilità Generale → 10. Strutturali → 120. Tipi di documenti contabili e causali operative*

[Screenshot: schermata "Movimenti Prima Nota" con Provenienza Movimenti "5 - Registrazione diretta (extracontabile) non associata alla contabilità finanziaria", Tipo documento "699 Registrazione diretta CO.GE. - ACCRUAL", e campo "Validità movimento" valorizzato con "1 - Registrazione ACCRUAL"]

*Esempio registrazione di tipo "1-Registrazione ACCRUAL"*

[Screenshot: schermata "Movimenti Prima Nota" con Validità movimento "1 - Registrazione ACCRUAL", tab "Dettaglio ACCRUAL" attiva, e righe: 1) 7.1.1 Costi per acquisto di materie... DARE 900,00, Segmento A "7.1 - Costi per acquisto di materie pri..."; 2) 5.7.1 Debiti correnti verso fornitor... AVERE 900,00, Segmento A "5.7 - Debiti correnti verso fornitori"]

*Esempio registrazione di tipo "2-Reg. armonizzata ed ACCRUAL"*

[Screenshot: schermata "Movimenti Prima Nota" con Validità movimento "2 - Reg. armonizzata ed ACCRUAL", tab "Dettaglio ACCRUAL" attiva, e righe: 1) 7.3.1.9 Spese di rappresentanza, pubbl... DARE 1.683,60, Segmento A "7.3.1 - Acquisti di servizi non sanitari"; 2) 5.7.10 Debiti correnti verso fornitor... AVERE 1.683,60, Segmento A "5.7 - Debiti correnti verso fornitori"]

#### 10.6.2 Inserimento prima nota ACCRUAL

Per l'inserimento di una prima nota di tipo **"1-Registrazione ACCRUAL"** è sufficiente cliccare su "Nuovo" da Movimenti prima nota e selezionare una causale che preveda solo la gestione ACCRUAL. Nelle righe di dettaglio verrà mostrato soltanto i codici conto appartenenti al Piano dei conti multidimensionale unico:

[Screenshot: schermata "Movimenti Prima Nota" con Validità movimento "1 - Registrazione ACCRUAL" e finestra "Piano dei Conti ACCRUAL" con struttura ad albero dei conti ACCRUAL (1 Attività, 2 Passività, 3 Patrimonio netto, 4 Passività correnti, 5 Attività correnti, ecc.)]

Per l'inserimento di una prima nota di tipo **"2-Reg. armonizzata ed ACCRUAL"** è sufficiente cliccare su "Nuovo" da Movimenti prima nota e selezionare una causale che preveda la doppia gestione armonizzata-ACCRUAL. Si dovranno compilare soltanto le righe di dettaglio della contabilità armonizzata. Le righe di dettaglio ACCRUAL sono compilate automaticamente mediante l'utilizzo del modello di raccordo.

I campi ACCRUAL sono infatti di sola lettura e non modificabili dall'utente.

[Screenshot: schermata "Movimenti Prima Nota" con Validità movimento "2 - Reg. armonizzata ed ACCRUAL", tab "Dettaglio ACCRUAL" con righe compilate automaticamente e campo "Mod. Racc." con icona per visualizzare il modello di raccordo]

[Screenshot: finestra "Modello di raccordo ACCRUAL" con colonne Tipo, Cod. PdC, Descrizione Cod. PdC, Cod. PdC ACCRUAL, Descrizione Cod. PdC ACCRUAL, e righe di raccordo (es. 06.1.2.01.02.004 Pubblicità → 7.3.1.9 Spese di rappresentanza, pubblicità e org...)]

### 10.7 XBRL ACCRUAL

Ai sensi dell'articolo 3, comma 3, del Decreto MEF 23 dicembre 2024, le amministrazioni trasmettono per via telematica alla RGS gli schemi di bilancio relativi all'esercizio 2025, elaborati per la fase pilota della Riforma 1.15 del PNRR (Riforma ACCRUAL), attraverso protocolli di interoperabilità analoghi a quelli in uso per la trasmissione di dati contabili e di bilancio alla Banca Dati Unitaria delle Amministrazioni pubbliche (BDAP) "adottando il linguaggio standard per la comunicazione di informazioni economiche e finanziarie *eXtensible Business Reporting Language* (XBRL)", secondo le tassonomie e le istruzioni tecniche "disponibili su apposito allegato tecnico".

È in linea su Area RGS il canale "Riforma della contabilità Accrual", dedicato alla Riforma 1.15 del PNRR e, specificamente, al servizio di trasmissione telematica, nell'ambito della fase pilota, degli schemi di bilancio 2025 alla Ragioneria Generale dello Stato.

Per la generazione del file XBRL utilizzare il programma disponibile al seguente menù:

*180. Servizi economici → 60. Contabilità Generale → 40. Funzioni di servizio → 40. ACCRUAL → 30. Creazione XBRL ACCRUAL*

[Screenshot: schermata "Creazione XBRL Accrual" con Modello "Bilancio ACCRUAL", sezione "Flussi XBRL Accrual - PNRR Riforma 1.15" con descrizione "Creazione flussi in formato XBRL x invio Contabilità Accrual - PNRR Riforma 1.15" e pulsante "Creazione"]