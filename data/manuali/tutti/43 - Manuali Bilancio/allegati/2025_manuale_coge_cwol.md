# Manuale CO.GE

## 1. Gestione Parametrizzazioni e Configurazioni Iniziali

### 1.1 Verifica Attivazione Modulo CO.GE

L'attivazione del modulo CO.GE si effettua dall'anno contabile di interesse nel menù:

**180. Servizi economici → 90. Tabelle → 10. Configurazioni → 10. Definizione e operabilità: Parametri generali**

[Schermata: Tabella personalizzazioni modulo finanziaria con tab "Generale" selezionato, sezione "Collegamenti attivi con altri moduli applicativi" con "Contabilità Generale: Sì" evidenziato in rosso]

### 1.2 Configurazioni Generali Modulo CO.GE

Ad inizio anno devono essere verificate alcune parametrizzazioni generali, tra cui:

- Gestione conti IVA per scritture di prima nota con IVA detraibile
- Gestione conto cassa (dove vengono effettuate scritture di prima nota dei mandati/reversali)
- Gestione conti per proventi/oneri straordinari
- Gestione conti per ratei/risconti

Tali impostazioni si effettuano dal menù:

**180. Servizi economici → 90. Tabelle → 10. Configurazioni → 00. Definizione e operabilità: CO.GE – CO.ANA – IVA**

[Schermata: Definizioni e operabilità - Co.Ge. - Co.Ana. - IVA con tab CO.GE attiva, sezione "Conti Default" con sottotab "Conti di default - generale" e "Conti di default - ratei e risconti", sezione "Modalità creazione primanota" e "Utilizzo codici piano dei conti"]

### 1.3 Gestione Causali Operative

Le causali operative rappresentano la tipologia movimenti con cui effettuare la registrazione finanziaria, IVA, di CO.ANA e di CO.GE. Si ricorda infatti che in CWOL ogni movimento può essere associato a vari aspetti, tra cui:

- Finanziaria
- IVA
- CO.ANA
- CO.GE
- Cassa economale

Il menù di gestione delle causali operative è il seguente:

**180. Servizi economici → 90. Tabelle → 20. Strutturali → 120. Tipi di documenti contabili e causali operative**

[Schermata: Tipi di documenti contabili e causali operative con Codice tipo documento "50", Descrizione "Riscossione diretta", Documento di "Entrata", Segno movimento "Positivo", sezione Moduli con "Valido per Co.Ge." spuntato, tab "Co.Ge./Co.Ana." con causali 5008 "Prima nota da reversali"]

Generalmente le causali CO.GE sono definite nel corso del primo esercizio di utilizzo del modulo CO.GE di CWOL.

### 1.4 Gestione Piano dei Conti

Il piano dei conti ministeriale, secondo il D.Lgs 118-2011 o, in alternativa D.Lgs 91-2011, è già presente nei vostri archivi. In caso di necessità di estrazioni e/o aggiunta di ulteriori livelli foglia (terminali) si può accedere al seguente menù:

**PIANO DEI CONTI D.LGS 118-2011 o 91-2011**

**180. Servizi economici → 90. Tabelle → 30. Definizione Bilancio → 50. Piano dei conti**

[Schermata: Piano dei Conti con struttura gerarchica: 01-Attivo, 02-Passivo, 03-Conti d'ordine, 05-Componenti positivi della gestione (con sotto-voci OS.1-OS.7), 06-Componenti negativi della gestione, 07-Proventi e oneri finanziari, 08-Rettifiche di valore di attività finanziarie, 09-Proventi e oneri straordinari, 11-Conto esterno]

**PIANO DEI CONTI ACCRUAL**

**180. Servizi economici → 90. Tabelle → 30. Definizione Bilancio → 70. Piano dei conti ACCRUAL**

[Schermata: Piano dei Conti ACCRUAL con struttura: 01-Attivo, 02-Passivo, 03-Conti d'ordine, 05-Componenti positivi della gestione, 06-Componenti negativi della gestione, 07-Proventi e oneri finanziari, 08-Rettifiche di valore di attività finanziarie, 09-Proventi e oneri straordinari, 10-Conto esterno, 11-Attività non correnti, 12-Passività non correnti, 13-Patrimonio netto, 14-Attività correnti, 15-Passività correnti, 16-Ricavi e ricavi della gestione operativa, 17-Costi e oneri della gestione operativa, 18-Rettifiche di valore di attività e passività, 19-Ricavi e costi della gestione finanziaria, 20-Ricavi/proventi e costi/oneri della gestione straordinaria, 21-Importo di esercizio]

### 1.5 Gestione Modelli Contabili

In CWOL è possibile gestire in modo personalizzato vari modelli contabili. Di default sono pre-forniti i modelli del D.LGS 118-2011 o del DPR 97-2003 e di ACCRUAL.

Il menù per la gestione dei modelli è il seguente:

**180. Servizi economici → 90. Tabelle → 130. Contabilità generale → 10. Modelli**

[Schermata: Modelli Prospetti con elenco: "Bilancio DPR 97/2003" e "Bilancio ACCRUAL"]

Ogni modello deve essere associato ai propri prospetti e deve essere classificato tra:

- **Rendiconto**: modello classico per rendiconto
- **Budget**: modello per il bilancio di previsione/budget in forma economica (ha 3 colonne pari a 3 annualità)
- **Conto economico ACCRUAL**: modello classico per il rendiconto ACCRUAL

[Schermata: Dettaglio modello "Bilancio DPR 97/2003" con Tipo Modello "Rendiconto", Modello Default spuntato, e Prospetti Associati: 1-Conto economico D.P.R. 97/2003, 2-Stato patrimoniale attivo DPR 97/2003, 3-Stato patrimoniale passivo DPR 97/2003]

### 1.6 Gestione Prospetti

In CWOL è possibile gestire in modo personalizzato vari prospetti contabili (conto economico e stato patrimoniale). Di default sono pre-forniti i prospetti relativi ai modelli del D.LGS 118-2011 e del DPR 97-2003 e di ACCRUAL.

**180. Servizi economici → 90. Tabelle → 130. Contabilità generale → 20. Prospetti**

Dopo aver inserito il nome del prospetto è necessario inserire tutte le righe che esso contiene (ovvero tutte le macro-voci che si vogliono gestire).

[Schermata: Prospetti Ministeriali con Descrizione "Conto economico D.P.R. 97/2003", Tipologia Prospetto "Conto Economico", e Struttura Prospetti con colonne: Lettera, Rif.1, Rif.2, Rif.3, Rif.4, Desc. Struttura. Esempi di righe: A-1 "Ricavi delle vendite e delle prestazioni", A-2 "Variazione delle rimanenze dei prodotti in corso di lavorazione", B-6 "Per materie prime, sussidiarie, consumabili e merci", ecc.]

Ogni singola riga ha alcune caratteristiche, si segnalano in rosso quelle fondamentali:

[Schermata: Dettaglio riga prospetto con campi: Lettera "A", Rif.1 "1", Desc. Struttura "Ricavi delle vendite e delle prestazioni (*)", Di cui, Totale/Parziale, Livello "0", Note1, Note2, Anno Inizio "2025", Anno Fine "2999", Ordine "20". Sezione Personalizzazione con: Grassetto, Corsivo, Funzione, Senza Riferimenti (Lettera..), Senza Lettera, No Rif1, No Rif2, No Rif3, No Rif4, Senza Importo, Rientra n volte, Tipo Riga "Dettaglio", Livello Riga, Gestione Riga, Colore Sfondo]

### 1.7 Gestione Modelli di Stampa

I modelli di stampa sono pre-forniti ed al momento non modificabili in quanto serve una gestione particolare del PDF (ovvero il PDF ha lavorato per essere collegato ai singoli modelli).

**180. Servizi economici → 90. Tabelle → 130. Contabilità generale → 30. Modelli di stampa**

### 1.8 Gestione Tabella di Raccordo tra Piano dei Conti e Prospetti

Una volta inserito il piano dei conti ed i modelli/prospetti è necessario inserire il raccordo tra le due parti. Ovvero deve essere compilata una tabella che per ogni PdC di livello foglia (terminale) deve esplicare in quale riga del prospetto deve essere convogliata.

Il menù della tabella raccordi è il seguente:

**180. Servizi economici → 90. Tabelle → 130. Contabilità generale → 40. Gestione Raccordi**

Per ogni raccordo devono essere indicati:

- Piano dei conti
- Modello
- Riga del prospetto

[Schermata: Raccordi con campi: Piano Conti (campo di ricerca), Modello "Bilancio DPR 97/2003", Struttura Prospetti (campo di ricerca)]

### 1.9 Configurazione Conti Cassa Vincolati e Liberi

Nella scritture di contabilità generale è possibile tenere distinta la cassa libera dalla cassa vincolata. Se si vogliono avere le scritture di prima nota differenziate in due PdC differenti si deve compilare la tabella dei conti tesoreria inserendo, in alternativa tra loro, il conto cassa libera o il conto cassa vincolata.

Per il D.Lgs 118-2011 o D.Lgs 91-2011 i conti sono i seguenti:

- **01.3.4.01.01.01.001** = cassa libera
- **01.3.4.01.01.01.002** = cassa vincolata

**180. Servizi economici → 90. Tabelle → 20. Strutturali → 10. Conti di tesoreria**

[Schermata: Conti di tesoreria con Codice conto tesoreria "C1", Descrizione "Conto libero fruttifero", Tipo contabilità "Fruttifero", Destinazione "Libero", Saldo iniziale € "0,00", Conto cassa (campo evidenziato in rosso), Codice cassa entrata (campo evidenziato in rosso), Servizio Richiedente. Sezione "Codifica Tesoreria" con Numeratore Mandati e Numeratore Reversali]

## 2. Logica di Base della Contabilità Generale di CWOL

### 2.1 Premessa

Il modulo della CO.GE è totalmente integrato in CWOL e può essere utilizzato in sincronia alla gestione delle contabilità finanziaria oppure in modo isolato. La seconda modalità (*modo isolato*) fa perdere gran parte degli automatismi.

### 2.2 Logica di Base delle Registrazioni di Prima Nota

#### 2.2.1 Modalità di registrazione della prima nota

CWOL consente di effettuare la registrazione di prima nota derivata dalla contabilità finanziaria in momenti diversi, in base alle esigenze.

Sostanzialmente si segnalano due momenti in cui può essere effettuata la registrazione di prima nota:

- **Dall'accertamento / impegno**: la registrazione del costo/ricavo e del debito/credito viene rilevata in fase di accertamento/impegno
- **Da dettaglio documenti finanziaria**: la registrazione del costo/ricavo e del debito/credito viene rilevata in fase di assegnazione o riscossione/liquidazione del documento.

La scelta dell'origine della prima nota deve essere effettuata a livello di accertamento/impegno.

[Schermata: Accertamento con tab "Co.Ge. - Co.Ana." attiva, sezione "Registrazioni in Co.Ge." con campo "Origine della Prima Nota" a tendina che mostra le opzioni: "Da Accertamenti in Sede di Chiusura Esercizio", "Non Prevista", "Da Accertamenti in Sede di Assunzione", "Da Accertamenti in sede di Assunzione" (evidenziato in rosso), "Da dettaglio Documenti Finanziaria" (evidenziato in rosso)]

La contabilità armonizzata ci suggerisce di muoverci in modo differente tra entrata ed uscita:

- **ENTRATA**: registrazioni a partire dall'accertamento
- **USCITA**: registrazioni a partire dal dettaglio documenti finanziaria

> **Negli esercizi 2023 e 2024 è stata seguita la logica armonizzata di cui sopra**

#### 2.2.2 Reperimento conti del PdC per registrazioni prima nota

Trattandosi di una registrazione di partita doppia si ritiene opportuno indicare come vengono reperiti i conti del PdC.

Nell'accertamento / impegno deve tassativamente essere indicato il conto relativo alla **dimensione economica** (ricavo/costo)

[Schermata: Accertamento con tab "Co.Ge. - Co.Ana." attiva, campo "Conto Co.Ge." valorizzato con "05.2.2.01.35.001" - "Cavi di autorizzazioni", campo "Iva da Residui" con "Standard: si rileva l'intero importo del residuo conservato", campo "Ratei / Risconti" con "Nessuno"]

Nella tabella del piano finanziario deve essere indicato il conto relativo alla **dimensione patrimoniale** (credito/debito)

[Schermata: Piano Finanziario - Entrata, Parte ENTRATA - Anno 2025, con livelli: 1° Livello "3 Entrate extratributarie", 2° Livello "1 Vendita di beni e servizi e proventi derivanti dalla gestione dei beni", 3° Livello "2 Entrate dalla vendita e dall'erogazione di servizi", 4° Livello "1 Entrate dalla vendita di servizi", 5° Livello "35 Proventi da autorizzazioni". Sezione "Contabilità Generale da movimenti Competenza" con "Modalità Creazione Prima Nota" = "Da Accertamento in sede di Chiusura Esercizio", "Conto Debiti/Crediti" = "01.3.2.02.01.02.001" - "Crediti derivanti dalla vendita di servizi" (evidenziato in rosso)]

### 2.3 Pillole Informative sulla CO.GE in CWOL

Di seguito si elencano alcune pillole informative sull'utilizzo della CO.GE in CWOL:

- **Non è possibile effettuare registrazioni di prima nota massive** (*quelle derivanti dalla finanziaria*) **in contemporanea tra due utenti.**

  Non è quindi possibile che Tizio esegua le registrazioni di prima nota delle reversali e Caio, nello stesso momento, esegua le registrazioni di prima nota dei mandati.

- **Durante le elaborazioni delle prime note massive** (*quelle derivanti dalla finanziaria*) **non è possibile chiudere la sessione browser** (ovvero chiudere con la X in alto a destra).

  Se viene chiusa la pagina WEB l'elaborazione si interrompe bruscamente con il rischio di registrazioni di prima nota errate.

- **Per ogni elaborazione massiva** (prime note derivanti dalla finanziaria) **è vivamente consigliabile utilizzare range di periodi brevi (1/2 mesi max).**

- **Ogniqualvolta si ha un dubbio sul conto del PdC da utilizzare e/o sulla modalità di gestione si consiglia di fare riferimento alla CO.GE degli esercizi 2023 e 2024** perché in entrambi i casi è stata quadrata con le logiche utilizzate dall'AdSP MTC.

  Per esempio se si deve valorizzare il conto CO.GE dell'impegno XXX si consiglia di vedere quale sia il capitolo dell'impegno XXX e poi visualizzare il conto CO.GE degli impegni dell'anno N-1 sempre riferiti a quel determinato capitolo.

## 3. Apertura Esercizio Contabile

### 3.1 Premessa

Dopo la configurazione e la parametrizzazione delle tabelle eseguita come descritto al paragrafo 1, prima di iniziare con le registrazioni di prima nota riferite all'anno N si rende necessario ri-aprire i conti patrimoniali alla data 01-01-N. La riapertura dei saldi patrimoniali avviene tramite un apposito programma che leggendo i saldi al 31-12-N-1 riapre i saldi al 01-01-N.

### 3.2 Gestione Programma Apertura Esercizio

Il programma si trova al menù:

**180. Servizi economici → 60. Contabilità generale → 50. Funzioni di servizio → 10. Apertura esercizio economico-patrimoniale**

In primis deve essere verificato che il programma mostri l'esercizio corretto (esempio: siamo al 15-02-2027 e ci apprestiamo a voler effettuare le scritture di prima nota del rendiconto 2026, l'esercizio che deve essere mostrato è il 2025)

Di seguito le configurazioni da seguire per l'apertura dell'esercizio (**ATTENZIONE: tutte le date vanno modificate in base all'esercizio che si sta chiudendo**)

[Schermata: Apertura Esercizio Economico-Patrimoniale con:
- Tipo Operazione: Simulazione / Definitiva (selezionato Definitiva)
- Esercizio da Chiudere: 2025
- Sezione CHIUSURA: Data Registrazione 01/01/2026, Data Competenza 31/12/2025, Chiusura Patrimonio: No/Sì (Sì selezionato), Causale 5050, Conto Patrimonio Attivo 11.2.1.001 "Bilancio chiusura", Conto Patrimonio Passivo 11.2.1.001 "Bilancio chiusura", Movimenti Dettagliati su Singole Schede: No/Sì (Sì selezionato), Codici Statistici: No/Sì (Sì selezionato), Chiusura Conto Economico: No/Sì (Sì selezionato), Chiusura Conti d'Ordine: No/Sì (Sì selezionato)
- Sezione APERTURA: Data Registrazione 01/01/2026, Data Competenza 01/01/2026, Causale 5051, Conto Patrimonio Attivo 11.2.1.002 "Bilancio apertura", Conto Patrimonio Passivo 11.2.1.002 "Bilancio apertura", Movimenti Dettagliati su Singole Schede: No/Sì (Sì selezionato)]

L'operazione di apertura esercizio genera un report con il saldo dei conti:

[Schermata: LISTA PRIMANOTA - AdSP del Mar Tirreno Centrale, Es.: 2024, DATA: 16-06-2025. Colonne: Data reg., Causale/Provenienza Rif. Fin., Codice e descrizione Conto, Descrizione riga, DARE, AVERE, Tipologia errore. Esempi di righe con conti patrimoniali: 01.2.1.02.01.01.001 "Costi di ricerca e sviluppo", 01.2.1.03.07.01.001 "Acquisto software", 01.2.1.04.01.01.001 "Concessioni, licenze, marchi e diritti simili", ecc.]

## 4. Configurazioni per Registrazioni Prima Nota

### 4.1 Parametrizzazioni Generali Prima Nota

Prima di eseguire le prime note automatizzate, ovvero quelle derivanti da movimenti finanziari, deve essere utilizzato il programma **"Impostazione regole x creazione prima nota D.L. 118"** che si trova al menù:

**180. Servizi economici → 60. Contabilità generale → 50. Funzioni di servizio → 20. Impostazione regole x creazione prima nota D.L. 118**

Tale programma si tratta di una funzione di utilità che consente di mappare e configurare tutte le tabelle che sono necessarie alla generazione delle prime note derivanti dalle scritture di finanziaria. Su ogni "regola" è presente un'information che spiega il suo funzionamento.

> **N.B.** Si tratta di parametrizzazioni molto importanti per il regolare funzionamento delle registrazioni "automatizzate"; al tempo stesso si raccomanda la massima attenzione nel loro utilizzo in quanto una scorretta parametrizzazione può inficiare su tutte le registrazioni di prima nota.

Le regole da eseguire sono le seguenti:

**1_1**: consente di ereditare le configurazioni dall'esercizio precedente:

[Schermata: Regole Prima Nota Co.Ge. con tab "Piano Finanziario" attiva, regola "1_1. Eredita da Esercizio Precedente" spuntata, sezione "Impostazione regole per creazione Co.Ge. da Dettaglio Finanziario" con "1_1.2. Valorizza Flag della Modalità di Creazione" e "Regole Prima Nota per Co.Ge. da Co.Ge." = "Gruppo Predefinito", sezione "Impostazione Causali per Creazione Prima Nota Co.Ge." con "1_1.3. Valorizza Causali" (Causali per Movimenti di Entrata: 0, Causali per Movimenti di Uscita: 0), sezione "Impostazione Parametri per Fatture da Ricevere/Residui Conservati" con "1_1.4. Valorizza Parametri per Residui"]

**1_2**: valorizza il flag creazione sul piano finanziario (si ricorda che in base al piano finanziario si può generare la prima nota da impegni/accertamento o da documento) (lasciare impostazione STANDARD)

[Schermata: Regole Prima Nota Co.Ge. con tab "Piano Finanziario" attiva, regola "1_2. Valorizza Flag della Modalità di Creazione" spuntata, "Modalità Creazione Prima Nota Co.Ge." = "Gruppo Predefinito", "Valorizzazione" = "Standard"]

**1_3**: valorizza nel piano finanziario la causale da impostare sugli accertamenti/impegni (utilizzare le causali dello screenshot)

[Schermata: Regole Prima Nota Co.Ge. con tab "Piano Finanziario" attiva, regola "1_3. Valorizza Causali" spuntata, "Causali per Movimenti di Entrata" = "5001" - "Prima nota da accertamenti", "Causali per Movimenti di Uscita" = "5002" - "Prima nota da impegni"]

**1_4**: valorizza i conti da utilizzare nelle registrazioni di uscita legate al "fatture da ricevere" (residuo conservato non associato a documenti) (lasciare impostazione STANDARD)

[Schermata: Regole Prima Nota Co.Ge. con tab "Piano Finanziario" attiva, regola "1_4. Valorizza Parametri per Residui" spuntata, "Modalità Registrazione Fatture da Ricevere" = "2= Conti per la registrazione del Costo/Ricavo e dell'Iva vengono reperiti dalle tab...", "Conto Co.Ge. Fatture da Ricevere/Emettere" = "02.4.8.01.01.01.001" - "Fatture da ricevere", "Conto Co.Ge. Iva su Fatt.da Ricevere/Emettere" (vuoto), "Valorizzazione" = "Standard"]

**2_1**: valorizza flag "conto cliente/fornitore" (lasciare impostazione STANDARD)

[Schermata: Regole Prima Nota Co.Ge. con tab "Piano dei Conti" attiva, regola "2_1. Valorizza Flag 'Conto Cliente/Fornitore'" spuntata, "Valorizzazione" = "Standard", "Conto Contabilità Generale Da" (vuoto), "Conto Contabilità Generale A" (vuoto), "Valore da assegnare al flag" = "No/Sì" (No selezionato), "Operazioni consentite in matrice di correlazione" con "2_2. Cancellazione movimenti personalizzati su matrice di correlazione" e "2_3. Accoda movimenti personalizzati su matrice di correlazione" con "Acconto/rimborso personalizzato su matrice di correlazione" = "Conto Economico - Dare"]

**3_1**: Creazione schede per anno corrente (lasciare impostazione STANDARD)

[Schermata: Regole Prima Nota Co.Ge. con tab "Accertamenti ed Impegni" attiva, regola "3_1. Creazione schede x anno corrente" spuntata, sezione "Impostazione regole Trasferimento da N° Scheda" con "Stampa impignoramenti da aggiornare manualmente", regola "3_2. Eredita da pagamenti/incassi" spuntata, sezione "Regole creazione prima nota" con "Regole Prima Nota per Co.Ge." (vuoto), nota: "La procedura consente di ereditare sugli impegni/accertamenti la modalità di creazione della prima nota presente sul corrispondente piano finanziario. Prima di procedere con questa operazione occorre quindi aver eseguito la fase 1.1 di valorizzazione del corrispondente campo della tabella del piano finanziario."]

**3_2**: eredita da pagamenti/incassi (lasciare impostazione STANDARD)

[Schermata: Regole Prima Nota Co.Ge. con tab "Accertamenti ed Impegni" attiva, regola "3_2. Eredita da pagamenti/incassi" spuntata, sezione "Regole creazione prima nota" con "Regole Prima Nota per Co.Ge." (vuoto)]

**3_3**: eredita da piano finanziario (lasciare impostazione STANDARD)

[Schermata: Regole Prima Nota Co.Ge. con tab "Accertamenti ed Impegni" attiva, regola "3_3. Eredita da piano finanziario" spuntata, sezione "Regole creazione prima nota" con "Regole Prima Nota per Co.Ge." (vuoto), sezione "Impostazione conti conto transito/parziale" con "3_4. valorizza Conti co.ge." (non spuntato), "Aggiorna conto co.ge. su impegni/accertamenti" e "Aggiorna conto co.ge. su liquidazioni/riscossioni"]

**3_4**: consente di valorizzare un determinato conto CO.GE in determinati impegni (in base al piano finanziario) o in determinati accertamenti (in base al piano finanziario).

Tale regola viene utilizzata per valorizzare i cd. **CONTI TRANSITO** utilizzati per il dialogo con GIES

[Schermata: Regole Prima Nota Co.Ge. con tab "Accertamenti ed Impegni" attiva, regola "3_4. valorizza Conti co.ge." spuntata, "Aggiorna conto co.ge. su impegni/accertamenti" spuntato, "Aggiorna conto co.ge. su liquidazioni/riscossioni" spuntato, "Codice Conto" = "01.2.2.02.12.00.001" - "Conto transito acquisti titolo 2.02" (evidenziato in rosso), sezione "Filtri su PIANO FINANZIARIO" con ENTRATA (Titolo: 0 a 0, Tipologia1: 0 a 0, Tipologia2: 0 a 0, Categoria: 0 a 0, 5° Livello: 0 a 0) e USCITA (Titolo: 2 a 2, Macro Aggregato: 2 a 2, 3° Livello: 0 a 0, 4° Livello: 0 a 0, 5° Livello: 0 a 0)]

[Schermata: Regole Prima Nota Co.Ge. con tab "Movimenti CO.GE" attiva, regola "3_4. valorizza Conti co.ge." spuntata, "Codice Conto" = "01.2.2.02.12.00.001" - "Conto transito vendite titolo 4.04" (evidenziato in rosso), sezione "Filtri su PIANO FINANZIARIO" con ENTRATA (Titolo: 4 a 4, Tipologia1: 4 a 4, Tipologia2: 0 a 0, Categoria: 0 a 0, 5° Livello: 0 a 0) e USCITA (Titolo: 0 a 0, Macro Aggregato: 0 a 0, 3° Livello: 0 a 0, 4° Livello: 0 a 0, 5° Livello: 0 a 0)]

### 4.2 Aggiornamento Dati da Matrice di Correlazione

> **ATTENZIONE**: tale funzionalità deve essere utilizzata soltanto dagli Enti che intendono redigere una contabilità economico-patrimoniale (CO.GE) secondo le modalità definite dalla Ragioneria Generale dello Stato e che quindi:
> - NON adottano un piano dei conti personalizzato
> - NON adottano regole di registrazione prima nota personalizzate
> - NON adottano deroghe alla matrice di correlazione

La funzionalità "aggiornamento" si trova al menù:

**180. Servizi economici → 110. Utilità → 150. Normalizzazioni → 10. Riclassificazione tabelle contabili**

*Selezione archivio "Aggiornamento dati da matrice di correlazione"*

[Schermata: Normalizzazioni Archivio con "Seleziona archivio" = "Aggiornamento dati da matrice di correlazione", tab "Aggiornamento" attiva con opzioni: "Piani Finanziari", "Effettua verifica sui conti a partire dal livello: 5", "Bilancio", "Impegni / Accertamenti", "Aggiorna Conti CO.ANA (come il conto CO.GE)", "Liquidazioni / Riscossioni". Tab "Pagamenti/incassi" disponibile. Pulsanti: "Aggiornamento" / "Simulazione" (Simulazione selezionato), pulsante "Normalizza"]

Il programma consente di impostare i conti patrimoniali ed economici presenti nella matrice di correlazione su:

- Piano finanziario
- Bilancio
- Impegni/accertamenti
- Liquidazioni/riscossioni

In ogni caso viene effettuata la sovrascrittura dei dati già presenti nel database. Si tratta di una operazione **non reversibile**.

## 5. Gestione Prima Nota

### 5.1 Premessa

In CWOL sono gestibili due tipologie di registrazioni:

- Registrazioni manuali inserite dall'utente
- Registrazioni massive derivate dalla contabilità finanziaria

La caratteristica principale di CWOL è la modalità di gestione biunivoca tra CONTABILITÀ FINANZIARIA e CONTABILITÀ GENERALE.

Infatti in ogni registrazione massiva è possibile visualizzare i dati finanziari che l'hanno generata:

[Schermata: Movimenti Prima Nota con Data Registrazione 30/12/2024, Provenienza Movimenti "2 - Da documento di Spesa/Entrata (movimento apertura)", Tipo documento "50 - Liquidazione diretta", Descrizione Movimento "Provv. N. 142 del 29/10/2024 (Y1) - Commissioni SDD SALDO DOCUM.033037089 DEL 30.10.2024 TELEPASS S.P.A.". Tab "Collegamento CO.FI" attiva con Numero Documento 2024 2590, AA Nr Mandato 0]

Dalla gestione della CO.FI è possibile interrogare la presenza di una eventuale prima nota:

[Schermata: Documenti con colonna "CO.GE" evidenziata in rosso, pulsante "Crea/Verifica prima nota" evidenziato in rosso, finestra "Movimenti Prima Nota" con riga di registrazione]

### 5.2 Registrazioni Manuali

I movimenti di prima nota sono interrogabili dal seguente menù:

**180. Servizi economici → 60. Contabilità generale → 10. Movimenti prima nota**

Da tale programma è possibile inserire una nuova registrazione manuale oppure ricercare registrazioni già esistenti (sia inserite dall'utente che massive derivate dalla finanziaria)

[Schermata: Movimenti Prima Nota con filtri di ricerca: Data Registrazione dal/al, Provenienza Movimenti, Tipo documento, Codice soggetto, Descrizione Movimento, Importo da/a, Riferimenti Conto Economico/Patrimoniale, Codici Statistici, Riferimenti Finanziari (Accertamento, Numero Documento, AA Nr Reversale), Classificazione di Bilancio (Piano Finanziario)]

Si sottolinea la possibilità di ricercare i movimenti di prima nota in base al movimento finanziario che lo ha generato

[Schermata: Movimenti Prima Nota con sezione "Riferimenti Finanziari" evidenziata in rosso contenente: Accertamento, Numero Documento, AA Nr Reversale]

L'inserimento di una registrazione manuale si presenta come un classico inserimento di una partita doppia. La registrazione deve avere un saldo **DARE-AVERE = 0,00** e deve contenere almeno 2 righe (1 in dare e 1 in avere). Non ci sono limiti massimi di righe.

[Schermata: Inserimento Registrazione Prima Nota con Data Registrazione 21/05/2025, Provenienza Movimenti "5 - Registrazione inserita manualmente non associata a variazioni finanziarie", Tipo documento "5005 - Scrittura diretta", tab "Dettaglio" con righe: 1-Conto "06.1.10.01.01.01.001" DARE 7.000,00, 2-Conto "02.4.2.01.01.01.001" AVERE 7.000,00. Totali: DARE 7.000,00, AVERE 7.000,00, Differenza 0,00]

### 5.3 Registrazioni Massive Collegate a Movimenti di Finanziaria

Nel corso degli anni sono stati sviluppati ed implementati programmi che consentono di effettuare una registrazione di contabilità economico-patrimoniale partendo da un movimento finanziario (*cd. prima nota automatizzata*)

I programmi massivi si trovano al menù:

**180. Servizi economici → 60. Contabilità generale → 40. Creazione prima nota**

e sono i seguenti:

- 10. Prima Nota da Impegni/Accertamenti
- 20. Prima Nota da Documenti
- 30. Prima Nota da Mandati
- 40. Prima Nota da Reversali
- 50. Prima Nota da Fatturazione Attiva

La prima nota da fatturazione attiva non viene utilizzata, in quanto le registrazioni di prima nota relative agli avvisi di pagamenti sono effettuate da "Documenti".

#### 5.3.1 Prima nota da impegni/accertamenti

[Schermata: Crea Prima Nota da Impegni/Accertamenti con Tipo Operazione: Simulazione/Definitiva (Definitiva selezionato), Parte: ENTRATA, Titolo Da/a, Tipologia 1 Da/a, Tipologia 2 Da/a, Categoria Da/a, Livello 5 Da/a, Anno/n° Accertamento dal 2025 al 2025, Data Ultima Modifica dal/al, Modalità di creazione: "1 - Per importo accertamento", Modalità di Output: "XLS Sintetico"]

Le modalità di creazione da utilizzare sono le seguenti:

- **1 - Per importo accertamento/impegno**: consente di effettuare la registrazione di prima nota partendo dall'accertamento/impegno (la scrittura viene effettuata secondo la disp. Operativa)
- **3 - Per importo residuo conservato**: consente di effettuare la registrazione di prima nota del residuo conservato che non è associato ad alcun documento (la scrittura viene effettuata secondo la disp. reale)
- **4 - Per importo variazioni/riduzioni**: consente di effettuare la registrazione di prima nota relativa alle variazioni negative/positive di accertamenti/impegni a residui (si registrano le insussistenze del passivo/attivo) e le sopravvenienze attive
- **5/6 - Per la gestione automatizzata di ratei/risconti** (al momento non utilizzate negli anni 2023 e 2024)

**Per gli accertamenti devono essere eseguite le modalità 1 e 4.**

**Per gli impegni devono essere eseguite le modalità 1, 3, 4**

Per le modalità 3-4-5-6 vengono richieste ulteriori informazioni:

- **Causale contabile**: si rimanda al paragrafo 1.3; in dettaglio utilizzare le seguenti causali, che sono già state utilizzate nel 2023 e nel 2024:

[Schermata: Crea Prima Nota da Impegni/Accertamenti - Parte ENTRATA, Modalità di creazione: "4 - Per importo variazioni/riduzioni", Causale Contabile: "5003" - "Prima nota da variazioni - accertamenti", Insussistenze dell'attivo: "09.1.2.01.01.001", Sopravvenienze attive: "09.2.3.99.99.001" - "Altre sopravvenienze attive"]

[Schermata: Crea Prima Nota da Impegni/Accertamenti - Parte SPESA, Modalità di creazione: "3 - Per importo residuo conservato", Causale Contabile: "5006" - "Prima nota da variazione + impeg"]

[Schermata: Crea Prima Nota da Impegni/Accertamenti - Parte SPESA, Modalità di creazione: "4 - Per importo variazioni/riduzioni", Causale Contabile: "5006" - "Prima nota da variazione + impegni", Insussistenze del passivo: "09.2.2.01.01.001" - "Insussistenze del passivo"]

- **Conto del PdC**: si rimanda al paragrafo 1.2; in dettaglio utilizzare le seguenti causali, che sono già state utilizzate nel 2023 e nel 2024:

[Schermata: Crea Prima Nota da Impegni/Accertamenti - Parte ENTRATA, Modalità di creazione: "4 - Per importo variazioni/riduzioni", Causale Contabile: "5003" - "Prima nota da variazioni - accer", Insussistenze dell'attivo: "09.1.2.01.01.001" - "Insussistenze dell'atti", Sopravvenienze attive: "09.2.3.99.99.001" - "Altre sopravvenienze"]

[Schermata: Crea Prima Nota da Impegni/Accertamenti - Parte SPESA, Modalità di creazione: "4 - Per importo variazioni/riduzioni", Causale Contabile: "5006" - "Prima nota da variazione + impegni", Insussistenze del passivo: "09.2.2.01.01.001" - "Insussistenze del passivo"]

#### 5.3.2 Prima nota da documenti

[Schermata: Crea Prima Nota da Documenti con Tipo Operazione: Simulazione/Definitiva (Definitiva selezionato), Parte: SPESA, Data Registrazione 01/06/2025 al 21/06/2025, Anno/Progressivo Inserimento, Anno/n° impegno, Competenza \ Residuo: Entrambe, Missione/Programma/Titolo/Macro Aggregati/Livello 3-4-5 Da/a, Reperimento contropartita: "Da impegni/accertamenti", Elenco Documenti Anni Precedenti non registrati in CO.GE: Data Registrazione 01/01/2024 al 31/12/2024, Modalità di Output: "XLS Sintetico"]

Si rammenta di selezionare la parte ENTRATA/SPESA. **Se viene proseguita la logica utilizzata nel 2023 e nel 2024 devono essere effettuate soltanto le registrazioni legate alla SPESA** (l'entrata fa registrazione da accertamento).

Il flag "aggiorna registrazioni CO.GE esistenti" consente di sovra-scrivere eventuali prime note già esistenti.

#### 5.3.3 Prima nota da mandati

[Schermata: Creazione Prima Nota da Mandati con Tipo Operazione: Simulazione/Definitiva (Definitiva selezionato), Parte: SPESA, "Aggiorna registrazioni co.ge. esistenti" (non spuntato), Periodo emissione dal 01/06/2025 al 21/06/2025, Numero Mandato da/a, Conto Tesoreria da/a, Numero Giroconto da/a, Causale Contabile, Descrizione su Riga Tesoreria: "1 = valorizzazione da ragione sociale cliente/fornitore", Descrizione su altre righe: "0 = nessuna valorizzazione automatica", Descrizione movimento: "0 = N. ordinativo + n. giroconto", **Modalità di creazione: "1 - Fornitore totalizzato, Cassa per totale ordinativo"** (evidenziato in rosso), Modalità di Output: "XLS Sintetico"]

Si rammenta di utilizzare sempre la **"modalità di creazione = 1-fornitore totalizzato, cassa per totale ordinativo"**

Il flag "aggiorna registrazioni CO.GE esistenti" consente di sovra-scrivere eventuali prime note già esistenti.

#### 5.3.4 Prima nota da reversali

[Schermata: Creazione Prima Nota da Reversali con Tipo Operazione: Simulazione/Definitiva (Definitiva selezionato), Parte: ENTRATA, "Verifica registrazioni co.ge. esistenti" (spuntato), Periodo emissione dal 01/06/2025 al 21/06/2025, Numero Reversale da/a, Conto Tesoreria da/a, Numero Giroconto da/a, Causale Contabile, Descrizione su Riga Tesoreria: "0 = nessuna valorizzazione automatica", Descrizione su altre righe: "0 = nessuna valorizzazione automatica", Descrizione movimento: "0 = N. ordinativo + n. giroconto", **Modalità di creazione: "1 - Fornitore totalizzato, Cassa per totale ordinativo"** (evidenziato in rosso), Modalità di Output: "XLS Sintetico"]

Si rammenta di utilizzare sempre la **"modalità di creazione = 1-fornitore totalizzato, cassa per totale ordinativo"**

## 6. Gestione Modelli Contabili e Prospetti

### 6.1 Visualizzazione Prospetti Contabili

La visualizzazione dei prospetti contabili avviene dal seguente menù:

**180. Servizi economici → 60. Contabilità generale → 60. Prospetti CEP → Gestione prospetti FEP**

In primis si richiede di selezionare:

- Il modello contabile (es: D.Lgs 118-2011 o DPR 97-2003 o ACCRUAL)
- Il prospetto (es: stato patrimoniale attivo, stato patrimoniale passivo o conto economico)

[Schermata: Gestione Prospetti con filtri: Modello "Bilancio DPR 97/2003" (evidenziato in rosso), Prospetto "Conto economico D.P.R. 97/2003" (evidenziato in rosso), Da Data 01/01/2025, A Data 31/12/2025, "Stampa solo anno corrente" (non spuntato)]

Successivamente cliccando su "Ricarica" vengono aggiornate le singole macro-voci in base alle registrazioni di prima nota presenti in archivio

[Schermata: Prospetti con struttura del Conto Economico D.P.R. 97/2003, colonne per anni 2025 e 2024, pulsante "Ricarica" evidenziato in rosso, righe: A) VALORE DELLA PRODUZIONE, 1 Ricavi delle vendite e delle prestazioni, 2 Variazione delle rimanenze, 3 Variazione dei lavori in corso su ordinazione, 4 Incrementi di immobilizzazioni per lavori interni, 5 Altri ricavi e proventi (a-f), 99 Totale valore della produzione (A), B) COSTI DELLA PRODUZIONE, 6 Per materie prime, 7 Per servizi, 8 Per godimento beni di terzi, 9 Per il personale (a-c), ecc.]

Spiegazione delle principali funzioni:

| Funzione | Descrizione |
|----------|-------------|
| [Icona dettaglio PdC] | Consente la visualizzazione del dettaglio delle prime note divise per piano dei conti |
| [Icona dettaglio analitico] | Consente la visualizzazione del dettaglio analitico delle prime note |
| Ricarica | Aggiornamento/refresh dei dati visualizzati a video |
| F2 - Stampa | Consente di effettuare la stampa in formato PDF dei prospetti |
| Salva Estrazione | Consente di storicizzare nel database i dati di un determinato range temporale |
| Storico Salvataggi | Consente di visualizzare lo storico dei salvataggi storicizzati |

## 7. Gestione Casi Particolari

### 7.1 Partite di Giro Entrata – Uscita

Le partite di giro (titolo E.09 e U.07) seguono una logica di contabilità generale particolare. L'entrata del titolo 9 effettua la registrazione a partire dall'accertamento mentre l'uscita del titolo 7 NON effettua alcuna prima nota (né da impegni né da documento). Tutte le partite di giro, indipendentemente dalla casistica, seguono la logica dell'Esempio.

Ecco le registrazioni classiche delle partite di giro:

| Movimento | Registrazione CO.GE |
|-----------|-------------------|
| ACCERTAMENTO TITOLO E.09 | credito X @ debito Y |
| REVERSALE SU E.09 | cassa a credito X |
| IMPEGNO TITOLO U.07 | *nessuna registrazione* |
| MANDATO SU U.07 | debito Y @ cassa |

**Esempio:**

Registrazione reincasso IVA split payment e conseguente pagamento all'Erario.

- **Accertamento su titolo E.09**

[Schermata: Elenco Accertamenti con Accertamento 2025/00023, Piano Finanziario "9.01.01.02.02.001", Capitolo-Articolo "9010102.00043.0015", Oggetto "IVA SPLIT PAYMENT ANNO 2025 (autoalimentato)", Importo Originario 1.380.735,57, Tipo "Acc", Classificazione "Definitivo"]

Registrazione in CO.GE del tipo "Credito @ Debito"

[Schermata: Movimenti Prima Nota con Data Registrazione 23/01/2025, Provenienza Movimenti "1 - Da impegno/accertamento (Disponibilità operativa)", Tipo documento "5001 - Prima nota da accertamenti", Descrizione "IVA SPLIT PAYMENT ANNO 2025 (autoalimentato)". Dettaglio: Riga 1 - Conto "01.3.2.08.04.99.001" DARE 1.380.735,57 "Crediti diversi", Riga 2 - Conto "02.4.5.05.04.01.002" AVERE 1.380.735,57 "Debito per scissione IVA da pa...". Totali: DARE 1.380.735,57, AVERE 1.380.735,57, Differenza 0,00]

- **Reversali su titolo E.09**

[Schermata: Movimenti Prima Nota con Data Registrazione 17/06/2025, Provenienza Movimenti "3 - Da mandato/reversale (movimento di chiusura)", Tipo documento "5008 - Prima nota da reversali", Descrizione "Reversale Nr. 1695/0". Dettaglio: Riga 1 - Conto "01.3.2.08.04.99.001" AVERE 330,00 "Crediti diversi" (IVA SRL), Riga 2 - Conto "01.3.4.01.01.01.001" DARE 330,00 "Istituto tesoriere/cassiere" (Mandato n. 739 del 17-06-2025 IVA Split Issuazionale - Documento n. 000010PA del 09-06-2025). Totali: DARE 330,00, AVERE 330,00, Differenza 0,00]

- **Impegno su titolo U.07**

***NESSUNA SCRITTURA***

- **Mandato su titolo U.07**

[Schermata: Movimenti Prima Nota con Data Registrazione 08/05/2025, Provenienza Movimenti "3 - Da mandato/reversale (movimento di chiusura)", Tipo documento "5007 - Prima nota da mandati", Descrizione "Mandato Nr. 543/0". Dettaglio: Riga 1 - Conto "02.4.5.05.04.01.002" DARE 451.071,12 "Debito per scissione IVA da pa..." (TESORERIA PROVINCIALE DELLO STATO), Riga 2 - Conto "01.3.4.01.01.01.001" AVERE 451.071,12 "Istituto tesoriere/cassiere" (TESORERIA PROVINCIALE DELLO STATO). Totali: DARE 451.071,12, AVERE 451.071,12, Differenza 0,00]

## 8. Esempi Errori Generazione Prima Nota Massiva

Di seguito si propongono alcuni esempi non esaustivi degli errori che si possono incontrare nell'elaborazione delle prime note massive (*derivate dalla finanziaria*).

### 8.1 Caso 1: Conto per Contropartita Non Presente

**ERRORE:**

[Schermata: Report "Crea Prima Nota da Impegni - ELENCO MOVIMENTI SCARTATI" con colonne: E-S, Anno, Nr. Documento, Imp-Acc, Man-Rev, Piano Finanziario, Errore Riscontrato. Esempi: S 2025 00037 1.01.01.02.999 "Conto x contropartita non presente su impegno", S 2025 00153 1.01.01.02.999 "Conto x contropartita non presente su impegno", S 2025 00289 1.01.01.02.999 "Conto x contropartita non presente su impegno"]

**RISOLUZIONE:**

Inserire il conto CO.GE di costo nell'impegno:

[Schermata: Impegno 2025 00037, Capitolo-Articolo "1309101 00010 0017 - Oneri derivanti dalla Legge 626/1994", tab "Co.Ge. - Co.Ana." attiva, sezione "Registrazioni in Co.Ge." con "Origine della Prima Nota" = "Da dettaglio Documenti Finanziaria", campo "Conto Co.Ge." evidenziato in rosso (campo vuoto da valorizzare)]

### 8.2 Caso 2: Il Documento è Privo di Liquidazione e di Assegnazione

**ERRORE:**

[Schermata: Report "Crea Prima Nota da Documenti - ELENCO MOVIMENTI SCARTATI" con errori "Il Documento è privo di Liquidazione e di Assegnazione" per documenti 1074, 1075, 1076, 1077, 1087, 1088]

**RISOLUZIONE:**

Non si tratta di un errore, è normale che non venga effettuata la registrazione di prima nota.

### 8.3 Caso 3: Assegnazione Priva di Impegno

**ERRORE:**

[Schermata: Report "Crea Prima Nota da Documenti - ELENCO MOVIMENTI SCARTATI" con errori "Assegnazione priva di impegno" per documenti 1078, 1079]

**RISOLUZIONE:**

Non si tratta di un errore, è normale che non venga effettuata la registrazione di prima nota.

### 8.4 Caso 4: Impegno XXX Prevede la Creazione della Registrazione in CO.GE Non da Documenti

**ERRORE:**

[Schermata: Report "Crea Prima Nota da Documenti - ELENCO MOVIMENTI SCARTATI" con errori misti: "Impegno 2025 - 00571 prevede la Creazione della Registrazione in CO.GE non da Documenti", "Conto x contropartita non presente su impegno 2025 - 00572", ecc. per documenti 1068, 1069, 1084]

Tale errore si ha quando in un documento di uscita vengono utilizzate N liquidazioni che sono collegati ad impegni del titolo U.01 (prima nota da documenti) e dal titolo U.07 (prima nota non gestita).

**Sono da considerare solo i documenti con impegni di competenza dell'anno**

**RISOLUZIONE:**

Andare in gestione documenti e richiamare il documento di uscita (es: 2025-1068); successivamente entrare in modifica e cliccare su "Contabilità generale"; il programma in automatico tenterà di inserire la registrazione soltanto per la quota parte relativa agli impegni del titolo U.01

[Schermata: Gestione documenti con Anno/Progressivo documento 2025 1068, pulsante "Contabilità generale" evidenziato in rosso nel pannello laterale, finestra "Movimenti Prima Nota" con tab "Collegamento CO.FI" e righe di registrazione]

## 9. Operazioni di Quadratura CO.GE – CO.FI

### 9.1 Premessa

In linea generale l'obiettivo è quello di riconciliare i dati della contabilità finanziaria con quelli della contabilità economico patrimoniale; in particolare si tratta di una riconciliazione dei crediti con i residui attivi e dei debiti con i residui passivi.

### 9.2 Stampa Verifica CO.GE – CO.FI per Quadratura Debiti-Crediti

Come supporto operativo per raggiungere l'obiettivo di quadratura tra CO.FI e CO.GE si suggerisce di utilizzare la presente stampa:

**180. Servizi economici → 10. Finanziaria → 80. Riaccertamento → 30. Cruscotto Allegati Riaccertamento**

Successivamente selezionare la stampa *"Residui attivi conservati al 31 dicembre AAAA provenienti dalla gestione di competenza"* o *"Residui passivi conservati al 31 dicembre AAAA provenienti dalla gestione di competenza"* in base all'esigenza di quadratura crediti/debiti e cliccare sull'icona della chiave inglese.

[Schermata: Cruscotto Riaccertamento con elenco prospetti: Entrata (Minori residui attivi riaccertati insussistenti, Minori residui attivi riaccertati inesigibili, Economie su accertamenti di competenza 2025, Maggiori residui attivi riaccertati, Residui attivi reimputati, Residui attivi conservati al 31 dicembre 2025 provenienti dalla gestione dei residui, **Residui attivi conservati al 31 dicembre 2025 provenienti dalla gestione di competenza** - chiave inglese evidenziata), Uscite (Minori residui passivi riaccertati, Economie su impegni di competenza 2025, Residui passivi reimputati non coperti da FPV, Residui passivi reimputati coperti da FPV, Residui passivi conservati al 31 dicembre 2025 provenienti dalla gestione dei residui, **Residui passivi conservati al 31 dicembre 2025 provenienti dalla gestione di competenza** - chiave inglese evidenziata)]

Come parametri di input selezionare:

- **Anno da**: vuoto
- **Anno a**: anno del rendiconto che si sta chiudendo
- **Riepilogo CO.FI – CO.GE**: sì
- **Tipo elenco**: residui conservati

[Schermata: Stampa Riaccertamenti con: Parte "Entrata", Anno da (vuoto) a "2025" (evidenziato in rosso), Tipo elenco "Residui conservati" (evidenziato in rosso), "Riepilogo CO.FI - CO.GE" spuntato (evidenziato in rosso), pulsante "Crea Report PDF" evidenziato in rosso]

Successivamente cliccare su "Crea report PDF" per ottenere a video la stampa di riepilogo.

**Come leggere la stampa?**

[Schermata: RIEPILOGO SINTETICO PER CONTO CREDITO/DEBITO con colonne: Conto CO.GE, Descrizione Conto credito/debito, Imp. da FIN, Imp. da CO.GE, Differenza. Esempi: 02.4.3.02.99.06.001 "Debiti per Trasferimenti correnti a altre imprese" 379.051,00 / 379.051,00 / 0,00; 02.4.5.01.99.01.001 "Imposte, tasse e proventi assimilati a carico dell'ente n.a.c." 1.045,75 / 1.045,75 / 0,00; ecc. Totale Generale: 705.700.648,63 / 436.148.921,71 / 269.551.726,92]

Nella colonna **"Imp. da FIN"** viene mostrato l'importo del residuo finanziario esposto sotto forma di conto di contabilità generale. Il collegamento tra il conto della contabilità generale ed il piano finanziario di 5° livello avviene tramite la tabella del piano finanziario.

Nella colonna **"Imp. da CO.GE"** viene mostrato l'importo del saldo del determinato conto di contabilità generale.

Per ottenere una quadratura tra CO.FI e CO.GE è necessario che gli importi delle due colonne coincidano e che la colonna **"Differenza"** sia pari a **0,00**

Si propongono alcuni esempi:

[Schermata: RIEPILOGO SINTETICO PER CONTO CREDITO/DEBITO con riga: 02.4.3.02.99.06.001 "Debiti per Trasferimenti correnti a altre imprese" Imp. da FIN: 379.051,00, Imp. da CO.GE: 379.051,00, Differenza: 0,00]

La stampa ci sta dando le seguenti informazioni:

- Il residuo finanziario collegato al conto *"02.4.3.02.99.06.001 – Debiti per trasferimenti correnti a altre imprese"* è pari ad euro 379.051,00. Il collegamento tra il conto della contabilità generale ed il piano finanziario di 5° livello avviene tramite la tabella del piano finanziario:

[Schermata: Piano Finanziario - Parte USCITA - Anno 2025 con livelli: 1° Livello "1 Spese correnti", 2° Livello "4 Trasferimenti correnti", 3° Livello "3 Trasferimenti correnti a imprese", 4° Livello "99 Trasferimenti correnti a altre imprese", 5° Livello "999 Trasferimenti correnti a altre imprese" (evidenziato in rosso). Sezione "Contabilità Generale da movimenti Competenza" con "Modalità Creazione Prima Nota" = "Da impegno in sede di Chiusura Esercizio", "Conto Debiti/Crediti" = "02.4.3.02.99.06.001" - "Debiti per Trasferimenti correnti a altre imprese" (evidenziato in rosso), "Tipo Documento" = "3000 - Prima nota da impegno NEW"]

- Il saldo contabile del conto *"02.4.3.02.99.06.001 – Debiti per trasferimenti correnti a altre imprese"* è pari ad euro 379.051,00. L'informazione si può desumere tramite l'interrogazione per conto foglia.

Per visualizzare i piani finanziari di 5° livello associati ad un determinato conto CO.GE si suggerisce di utilizzare la seguente stampa:

**180. Servizi economici → 60. Contabilità generale → 70. Stampe → 30. Stampa verifica CO.GE – Finanziaria**

Successivamente indicare il conto CO.GE di cui si vogliono individuare i piani finanziari di 5° livello associati

[Schermata: Stampa Verifica Co.Ge. - Finanziaria con: Tipo Collegamento "- TUTTI -", Riga "*", Codice Conto - Da: "02.4.3.02.99.06.001" - "Debiti per Trasferimenti correnti a altre imprese" (evidenziato in rosso), Codice Conto - A: "02.4.3.02.99.06.001" - "Debiti per Trasferimenti correnti a altre imprese" (evidenziato in rosso), Periodo registrazione dal 01/01/2025 al 31/12/2025, Periodo competenza dal 01/01/2025 al 31/12/2025, Tipo Movimento E-S: "Tutte", "Escludi movimenti di chiusura" spuntato, "Escludi movimenti di apertura" spuntato, Tipo Stampa: Sintetica/Dettagliata/Voce Bilancio]

### 9.3 Quadratura Conto Economico

Per la quadratura del conto economico si suggerisce la stampa:

**180. Servizi economici → 60. Contabilità generale → 70. Stampe → 30. Stampa verifica CO.GE – Finanziaria**

Indicando il conto CO.GE di ricavo/costo e poi il dettaglio per "Voce di bilancio"

[Schermata: Stampa Verifica Co.Ge. - Finanziaria con: Tipo Collegamento "- TUTTI -", Riga "*", Codice Conto - Da: "06.1.2.01.05.001" - "Telefonia fissa" (evidenziato in rosso), Codice Conto - A: "06.1.2.01.05.001" - "Telefonia fissa" (evidenziato in rosso), Periodo registrazione dal 01/01/2025 al 31/12/2025, Periodo competenza dal 01/01/2025 al 31/12/2025, Tipo Movimento E-S: "Tutte", "Escludi movimenti di chiusura" spuntato, "Escludi movimenti di apertura" spuntato, Tipo Stampa: Sintetica / Dettagliata / **Voce Bilancio** (selezionato, evidenziato in rosso)]