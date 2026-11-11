# Operatività sul nuovo esercizio per recupero valori esercizio precedente – Fase 2

## Scopo del documento

Il documento illustra le operazioni da eseguire per trasportare nel nuovo esercizio i valori residui provenienti dall'esercizio precedente. Tutte le operatività da effettuarsi precedentemente per l'apertura del nuovo esercizio sono descritte nella comunicazione 05/2021.

| Data | Oggetto comunicazione /integrazione | Versione |
|------|--------------------------------------|----------|
| 2020 | Prima comunicazione | C16 V1 |
| 07.01.2022 | Revisione Operazioni di apertura nuovo esercizio | C16 V2 |

---

## 1. OPERAZIONI OBBLIGATORIE

### 1.1 Riferimenti a comunicazione collegata

Le operatività da effettuare precedentemente a quelle qui indicate sono nella comunicazione C_05/2021.

### 1.2 Operazioni obbligatorie da eseguire precedentemente

Prima di poter eseguire le operazioni indicate in questo documento occorre aver eseguito le operazioni indicate nella comunicazione C_05/2021 indicate ai paragrafi 1 e 2 del documento indicato sopra.

### 1.3 Aggiornamento importi residui

Una volta effettuate le operazioni indicate precedentemente, sarà possibile procedere con l'aggiornamento degli importi residui.

Questo calcolo permette di aggiornare il residuo sul nuovo anno contabile, riferito allo stanziamento residuo iniziale e al totale impegnato/accertato a residuo. Attraverso questa operazione, il bilancio gli importi sul bilancio (che si stia operando in esercizio provvisorio o con il bilancio di previsione confermato non è influente per questa operazione) saranno aggiornati, e sarà possibile iniziare ad operare sul nuovo anno.

Seguire il percorso sotto indicato:

[Schermata: Menu "Apertura" → "Apertura Bilancio Armonizzato" → "Apertura nuovo esercizio" → "Ricalcolo importi Residuo"]

La schermata si presenta già con i seguenti flag impostati, di conseguenza sarà necessario soltanto premere il bottone **"Ricalcola"**.

L'unico flag non selezionato è quello relativo alla chiusura degli impegni: questa operazione andrà effettuata dopo la fase del rendiconto, quindi non va selezionato in questa fase.

[Schermata: "Ricalcolo Stanziamento Residuo da Anno Precedente" con sezioni: Impostazioni e Elaborazione (Esercizio da aggiornare, Area di provenienza, Bilancio da aggiornare), Residuo su Bilancio (Stanziamento Residuo Iniziale, Totale impegnato a residuo, Verifica residuo calcolato), Operazioni su Impegni/Accertamenti (Apertura schede con residuo da anno precedente, Chiusura impegni/accertamenti nell'anno precedente senza residuo), Entrata - Voci di bilancio da elaborare, Spesa - Voci di bilancio da elaborare. Pulsanti: Visualizza rapporto, Ricalcola, Chiudi]

### 1.4 Verifiche importi in esercizio provvisorio

Una volta aver effettuato il ricalcolo del residuo come spiegato nel punto precedente, si può procedere con le altre operazioni iniziali.

Se si sta operando in esercizio provvisorio, e quindi il bilancio di previsione non è ancora stato confermato, è possibile che effettuando delle verifiche tra l'ammontare di impegni/accertamenti e i castelletti dei capitoli si verifichino degli scostamenti.

Tutti gli accertamenti/impegni che sono stati presi negli esercizi precedenti a valere nell'anno corrente (e nei successivi) sono presenti negli archivi. Di conseguenza, gli scostamenti possono verificarsi in base al momento in cui tali accertamenti/impegni sono stati inseriti nella procedura. La discriminante è da ricercarsi nella fase della Replica Tabelle e Struttura Bilancio (vedi documento C_05/2022, paragrafo 1.2), in quanto il programma opera come sotto:

- Se tali accertamenti/impegni sono stati assunti nell'anno contabile **X** a valere nell'anno contabile **X+1, +2, +3** etc., **prima** della fase della Replica Tabelle e Struttura Bilancio, **NON** trovando tali strutture di base pronte, **NON** sono stati in grado di aggiornarsi automaticamente sul castelletto del capitolo di riferimento.

- Se tali accertamenti/impegni sono stati assunti nell'anno contabile **X** a valere nell'anno contabile **X+1, +2, +3** etc., **successivamente** alla fase della Replica Tabelle e Struttura Bilancio, trovando tali strutture di base pronte, **sono** stati in grado di aggiornarsi automaticamente sul castelletto del capitolo di riferimento.

Di conseguenza, possono anche verificarsi situazioni intermedie, in cui una parte degli accertamenti/impegni sono aggiornati, altri no. La motivazione è da ricercare nella spiegazione appena sopra.

Per ovviare e risolvere gli eventuali scostamenti, sarà quindi necessario andare ad aggiornare manualmente i castelletti.

Seguendo il percorso da **City Financing – Funzioni di Servizio – Ricalcolo Progressivi**, impostare la schermata come indicato sotto:

[Schermata: "Ricalcolo Progressivi" con: Parte (ENTRATA/SPESE), modalità Aggiornamento/Simulazione, flag selezionati: "Ricalcola progressivi su accertamenti", "Ricalcola progressivi su voci di bilancio", "Ricalcola stanziamento residuo su bilancio". Campi: Titolo (dal 0 al 9), Tipologia 1 (dal 0 al 99), Tipologia 2 (dal 0 al 99), Categoria (dal 0 al 99), Livello 5 (dal 0 al 999), Anno/accertamento. Tab: Documenti, Voci e Imp/Acc, Mandati/Reversali. Pulsanti: Calcola, Chiudi]

### 1.5 Aggiornamento accertamenti in tabelle ritenute

Un'altra operazione da effettuare all'inizio del nuovo esercizio è quella che ci permette di andare ad aggiornare la tabella delle ritenute. È infatti necessario assumere dei nuovi accertamenti, di competenza del nuovo anno contabile, che andranno agganciati nelle tabelle sotto indicate. Tali accertamenti saranno la destinazione automatiche delle diverse tipologie di ritenute inserite nel programma.

Dopo la creazione degli accertamenti, seguire il seguente percorso:

[Schermata: Menu "Tabelle" → "Clienti/Fornitori" → "Ritenute"]

Selezionare le tipologie di ritenute di riferimento e entrando in modifica spostarsi sulla tab **"Reincasso\Pagamento Automatico"**. Come indicato nell'immagine, inserire l'accertamento assunto precedentemente. Selezionare il flag **"Reincasso"** per permettere al programma di effettuare l'automatismo e anche il flag **"Aumenta accertamento"**, in questo modo l'importo dell'accertamento inserito si alimenterà automaticamente ad ogni nuovo reincasso.

[Schermata: Tab "Reincasso\Pagamento Automatico" con: Codice interno ritenuta (13), Descrizione (RITENUTA 1040), flag "Reincasso" selezionato, campo Accertamento (2021), flag "Aumenta Accertamento" selezionato, Soggetto, Prog. Modalità di Reincasso, Codice Pagamento (12 - RISCOSSIONE PER CASSA). Sezione Pagamento con: flag "Pagamento", Impegno, Aumenta Impegno, Soggetto, Prog. Modalità di Pagamento]

### 1.6 Verifica numeratori

I numeratori sotto indicati sono quelli riferiti ai documenti. La relativa tabella è stata aggiornata durante la fase Replica Tabelle e Struttura Bilancio (vedi documento C_05/2022, paragrafo 1.2), di conseguenza è opportuno effettuare un semplice controllo.

Seguendo il percorso sotto indicato, selezionare poi il bottone evidenziato in alto **"Num. Ann."** per verificare la giusta numerazione.

[Schermata: Menu "Tabelle" → "Fatturazione Attiva" → "Definizione Numeratori Documenti" e "Numeratori Documenti per Anno"]

[Schermata: "Definizione Numeratori Documenti" con elenco documenti (DECLIQ, DECRIS, IVACAC, IAVEN, PROTO) e pulsanti "Num.Ann." e "Apri anno"]

Sarà sufficiente utilizzare il bottone **"Apri anno"** per verificare la corretta apertura. Fare attenzione alle barre, verificando che l'eventuale utilizzo sia stato riportato anche nel nuovo anno: è possibile effettuare un controllo rapido rispetto all'annualità precedente semplicemente modificando l'anno dal campo in basso a destra.

[Schermata: "Definizione Numeratori Documenti" con tabella (Anno, Codice, Area Comp., Sett.IVA, Descrizione, Num.Ultimo Doc., Barra) e campo "Anno" in basso a destra impostato su 2021]

#### 1.6.1 Numeratori per anno

Come ultima cosa, verificare la tabella dei progressivi annuali, seguendo il percorso sottostante.

[Schermata: Menu "Tabelle" → "Personalizzazioni" → "Progressivi Annuali"]

Sarà sufficiente cliccare una sola volta il bottone **"Genera"** evidenziato sotto:

[Schermata: "Progressivi Annuali" con tabella (Dis., Anno, Descrizione tabella, Prg.Ini., Ultimo Doc., Data operazione) e pulsanti: Chiudi, Aggiungi, Modifica, Cancella, Help, **Genera**. In basso: Entrambe/S/E, "Vedo anche disabilitati", Cerca]

---

## 2. Dati da inviare in tesoreria

### 2.1 Invio prospetto di bilancio esercizio provvisorio - gestione provvisoria – definitivo

Per inviare alla tesoreria il prospetto di Bilancio per quanto riguarda l'esercizio provvisorio – gestione provvisoria – esercizio definitivo, la stampa è la seguente:

**Cityfinancing – Finanziaria - Bilancio**

[Schermata: Menu "Bilancio D.L.118" → "Stampa Prospetti di Bilancio da inviare al Tesoriere (in esercizio provvisorio)"]

Il programma in base all'impostazione dell'iter di bilancio, seleziona automaticamente la spunta della stampa dell'allegato 8/3 in modo corretto.

Nel caso sottostante si tratta di esercizio provvisorio. Se il bilancio non venisse approvato entro la data ultima di approvazione del bilancio si andrà in gestione provvisoria.

Se il bilancio di previsione fosse già approvato, uscirà l'opzione "definitivo".

Effettuare la stampa dell'allegato 8/3, come evidenziato sotto:

[Schermata: "Stampa prospetti di bilancio da inviare al tesoriere (in esercizio provvisorio)" con: flag "Stampa allegato 8/3" selezionato, Data e Numero Protocollo (21-01-2022), Comunicazione in vigenza di: Esercizio provvisorio / Gestione provvisoria. Sezione "Comunicazioni al Tesoriere" con Impostazioni di stampa. Pulsanti: Stampa, Chiudi]

### 2.2 Invio situazione dei residui

Per inviare alla tesoreria la situazione aggiornata dei residui, è possibile utilizzare la stampa seguente:

[Schermata: Menu "Bilancio D.L.118" → "Stampa Elenco Residui da inviare al Tesoriere"]

È possibile considerare i residui presunti da esercizio precedente (presenti sul bilancio di previsione), o i residui iniziali, ovvero i residui effettivi su cui lavorare all'inizio del nuovo anno contabile.

**Concordare con la propria tesoreria quale tipologia di residui devono essere inviati.** Si ricorda che va comunicato il residuo iniziale a rendiconto approvato.

[Schermata: "Stampa prospetti di bilancio da inviare al tesoriere" con: flag "Stampa Elenco dei Residui Presunti", "Stampa Importo Residui", radio button "Residui presunti da Es.Precedente" / "Residui Iniziale". Sezione "Comunicazioni al Tesoriere" con Impostazioni di stampa. Pulsanti: Stampa, Chiudi]

---

## 3. Operare in esercizio provvisorio

All'inizio del nuovo anno contabile, se non è stato ancora confermato e approvato il bilancio di previsione, si opererà conseguentemente in esercizio provvisorio.

I flag riferiti al bilancio di previsione, sono raggiungibili attraverso il seguente percorso: **Tabelle – Personalizzazioni - Definizione e Operabilità - Parametri Generali**

[Schermata: "Definizioni e operabilità" tab "Generali" con sezione "Flag generali": Bil. previsione inserito, Bil. previsione confermato, Bil. var. di Consiglio, Bil. variazione al PEG, Bil. verbale chiusura stampato, Bil. conto consuntivo stampato. Menu a tendina "Nessun controllo sulla Cassa". Tab in basso: Generali, Iva, Dop 194 Entrate, Dop 194 Spese, Codice Statistico, Tesoreria, D.L.118 Entrate, D.L.118 Spese, Fatt Elettronica e RUF]

Di conseguenza, finché non verranno selezionati i flag evidenziati, il programma in automatico opererà in **Esercizio Provvisorio**.

È necessario modificare solo un paio di informazioni:

1. Sempre da **Definizioni e operabilità**, nella tab **"Tesoreria"** inserire la data ultima per l'approvazione del bilancio provvisorio. In questo modo alla tesoreria sarà chiaro che state operando in esercizio provvisorio.

[Schermata: Tab "Tesoreria" con: Collegamento con tesoreria (TRACCIATO XML STANDARD - SIOPE+), Firma Digitale, Data termine x approv. bilancio (31-03-2022), Tipo invio flussi, Codice Iva Default, Codice Spese Default, Tipo tesoreria (Unica/Mista), Modo gestione password certificati, Invia pianta organica, Importazione Flussi Provinciali Ascolto. Sezione "Personalizzazione modo validazione campo" con elenchi "Controlli fino ai 20.000" e "Controlli oltre ai 20.000"]

Verificare che la data inserita sia riportata correttamente nell'esportazione dei mandati e reversali per la tesoreria.

[Schermata: "Scarico Mandati e Reversali per Tesoreria" con: Tracciato XML STANDARD - SIOPE+, sezione Mandati Da Inviare, sezione Mandati da Sostituire/Annullare/Notificare/Veriere, tab Mandati/Reversali, campo "Data x approvazione bilancio" (31-03-2022), Percorso archivi da creare. Pulsanti: Visualizza rapporto, Visualizza errori, Contenuto, Crea, Chiudi]

2. In quanto provvisorio, l'esercizio è sottoposto al controllo dei dodicesimi. È quindi possibile attivare il controllo, sempre da **Definizione e Operabilità - Parametri Generali**, come indicato sotto:

[Schermata: Tab "Dop 194 Spese" con: Class. livello 1/2/3 dopo il Titolo di Spesa, Lunghezza codici, Elenco Alto da Voce di Bilancio, Aggiornamento residuo, **Controllo Dodicesimi** (menu a tendina con opzioni: 0 = controllo non attivo, 1 = controllo attivo in gestione impegni, 2 = controllo attivo in Emissione Mandati), Imposti di Previsione, Escludi totale portafoglio, Controlli quadratura Previsioni, Controllo Modello DURC, Modo Gestione Ritenute, Emissione Mandati]

È possibile decidere se attivare il controllo dalla gestione impegni o solamente nel momento dell'emissione dei mandati.

---

## 4. Operare in esercizio definitivo

Una volta approvato il bilancio di previsione, seguire sempre il percorso indicato precedentemente e valorizzare il flag **"Bil. Previsione confermato"**.

[Schermata: "Definizioni e operabilità" tab "Generali" con flag "Bil. previsione confermato" selezionato. Menu a tendina con opzioni: "Nessun controllo sulla Cassa", "Controllo dispon. di cassa in emissione Mandati", "Controllo dispon. di cassa in emissione Liquidazioni e Mandati"]

Sarà ora possibile operare in esercizio definitivo. Dal menù a tendina è possibile selezionare la tipologia di controllo da effettuare sulla cassa.

---

## 5. Chiusura anno contabile precedente

Inseriamo in questa comunicazione anche questa ultima operazione, nonostante non sia relativa all'operatività da svolgere nel primo periodo dell'inizio del nuovo anno contabile.

Nella fase di rendiconto relativo all'anno contabile da poco concluso, i flag che ci interessano sono i seguenti:

[Schermata: "Definizioni e operabilità" tab "Generali" con flag evidenziati: "Bil. verbale chiusura stampato" e "Bil. conto consuntivo stampato"]

Il primo flag, ovvero **Bil. Verbale chiusura stampato**, permette ancora di effettuare determinate operazioni sull'anno contabile precedente. Tali operazioni sono:

- Possibilità di modificare alcuni documenti, soltanto coloro che hanno una causale solo IVA e/o solo Ritenute e/o solo Co.Ge.
- Possibilità di effettuare variazioni su impegni e/o accertamenti.
- **NON** è possibile inserire nuovi documenti, modificare quelli che hanno una causale che risponde a quelle precedentemente descritte, creare nuovi impegni/accertamenti, effettuare mandati/reversali.

Con il secondo flag, ovvero **Bil. Conto Consuntivo stampato**, non è più possibile effettuare NESSUN tipo di operazione.

Una volta valorizzati i flag di interesse, il programma guiderà l'utente, permettendogli di effettuare solo le operazioni autorizzate.

> **N.B.:** queste impostazioni dovranno essere effettuate dall'anno contabile precedente, non da quello in corso.

---

## 6. OPERAZIONI FACOLTATIVE (non necessarie per apertura)

### Chiusura Impegni/Accertamenti

A) Dopo approvazione consuntivo eseguire la chiusura Impegni/Accertamenti: da **CHIUSURA - CHIUSURA IMPEGNI e ACCERTAMENTI**: cliccare su **"Chiusura"** lasciando tutto il resto inalterato: tale funzione permette di evitare di riportare sul nuovo anno tutti quegli impegni/accertamenti SALDATI (con disponibilità reale a ZERO) alla fine dell'anno contabile N: gli impegni e accertamenti chiusi rimarranno visibili fino all'esercizio N e non oltre.

Tale funzione potrà essere eseguita anche successivamente soprattutto dopo la chiusura del conto consuntivo.

> **N.B.:** Fate attenzione che, nel caso successivamente a questa operazione, dobbiate andare ad annullare una reversale legata ad una di questi accertamenti chiusi, per riaprire tale accertamento dovrete andare in modifica (da gestione accertamenti) e togliere il flag "accertamento chiuso" presente nel foglio "dati aggiuntivi".

### Chiusura Economato

Per gli Enti che gestiscono l'economato con Cityware si ricorda che il rendiconto finale dell'anno contabile N dovrà essere fatto nell'esercizio N con l'avvertenza di creare **SOLO le LIQUIDAZIONI** e **NON i MANDATI** che verranno poi creati nell'anno N+1 tramite la funzione "emissione mandati di pagamento".

### IMPORTANTE

Si ricorda infine che dal 1° gennaio il programma proporrà come default il nuovo anno contabile ma che si potrà comunque lavorare sull'anno contabile precedente andando opportunamente a cambiare l'esercizio nelle maschere apposite: nel 2020 si potranno pertanto creare ancora sia impegni che accertamenti **che verranno poi trasferiti in automatico nell'esercizio successivo**.