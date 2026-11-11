# Comunicazione n.16/2020 - Operazioni di apertura nuovo esercizio

## A) OPERAZIONI OBBLIGATORIE

### Fase 1 - Apertura Nuovo Esercizio

È la fase che consente di generare e aggiornare le tabelle dei Servizi Economici necessarie per operare con un nuovo Esercizio Finanziario, partendo da uno già esistente.

[Immagine: Screenshot del menu "Apertura bilancio" con percorso: Apertura → Apertura nuovo esercizio → Apertura nuovo esercizio]

I campi della finestra di selezione sono i seguenti:

- **ESERCIZIO DA APRIRE:** È l'esercizio da aprire, generalmente è l'anno successivo a quello di provenienza ma può essere superiore (GESTIBILE MANUALMENTE)
- **COPIA DA ESERCIZIO:** È l'esercizio dal quale sono reperite le tabelle da trasportare nel nuovo anno. Corrisponde sempre all'esercizio corrente, e non è modificabile.
- **ELENCO TABELLE DA APRIRE:**

[Immagine: Finestra "CITY-FINANCING Apertura nuovo esercizio" con parametri generali (Esercizio da aprire: 2021, Copia da esercizio: 2020, Area di provenienza: F - SERVIZI ECONOMICI) e due sezioni: Tabelle generali e Tabella Bilancio]

Qui vengono elencate tutte le tabelle che devono essere riaperte nell'esercizio di destinazione. Queste sono suddivise in due gruppi:

- **Tabelle Generali** (comprende tutte le tabelle base dei Servizi Economici).
- **Tabelle Bilancio** (comprende le tabelle Bilancio Meccanografico e Voci di Bilancio, dove sono memorizzati gli importi di previsione).

Per ogni tabella da riaprire, se risulta già generata nel nuovo anno, compare la data di prima creazione. Quando, oltre alla prima creazione, sono state effettuate delle operazioni di allineamento, viene indicata la data dell'ultimo aggiornamento effettuato.

**Attenzione**, per quanto riguarda le Tabelle Bilancio, è possibile scegliere il tipo di aggiornamento per i movimenti già esistenti:

- **0 - Movimenti esistenti non aggiornati:** i record presenti nell'Esercizio di destinazione non vengono mai aggiornati

  > **IMPOSTARE A 0 NEL CASO IN CUI IL BILANCIO DI PREVISIONE SIA APPROVATO, IN APPROVAZIONE O IN INSERIMENTO STANZIAMENTI**

- **1 - Aggiorna movimenti esistenti (importi di previsione esclusi):** i record presenti nell'esercizio di destinazione vengono aggiornati, tranne gli importi. Gli estremi di assunzione della voce vengono azzerati.

- **2 - Aggiorna movimenti esistenti (importi di previsione inclusi):** i record presenti nell'esercizio di destinazione vengono aggiornati, compresi gli importi di previsione, che vengono **traslati** (vedi Recupero Importi da Esercizio Precedente). Gli estremi di assunzione della voce vengono azzerati.

---

### Fase 2 - Aggiornamento importi residui

[Immagine: Screenshot del percorso menu: Apertura → Apertura nuovo esercizio → Ricalcolo importi Residuo]

**Ricalcolo importi a residuo:** impostare la schermata come da figura e cliccare su **RICALCOLA**: vengono ricalcolati tutti i castelletti dei residui presenti sui vari capitoli (voci di bilancio).

[Immagine: Finestra "CITY-FINANCING Ricalcolo Stanziamento Residuo da Anno Precedente" con impostazioni: Esercizio da aggiornare: 2021, Area di provenienza: F - SERVIZI ECONOMICI, Bilancio da aggiornare: D.L.118/2011. Sezioni: Residuo su Bilancio (con checkbox "Stanziamento Residuo Iniziale", "Totale impegnato a residuo", "Verifica residuo calcolato"), Operazioni su Impegni/Accertamenti, Entrate - Voci di bilancio da elaborare, Spesa - Voci di bilancio da elaborare. Pulsanti: Aggiungi, Modifica, Elimina, Visualizza rapporto, Ricalcola, Chiudi]

---

### Fase 3 – Aggiornamento accertamenti in tabelle ritenute

- Creare i nuovi accertamenti
- Dalle tabelle delle ritenute inserire i nuovi accertamenti creati nelle ritenute e iva split

[Immagine: Screenshot del percorso menu: Tabelle → Clienti/Fornitori → Ritenute]

**Selezionare reincasso/pagamento**

[Immagine: Finestra di gestione ritenuta con campi: Codice interno ritenuta: 13, Descrizione: RITENUTA 1040. Sezione Reincasso/Pagamento con checkbox "Reincasso" selezionata, campo Accertamento con anno 2021, checkbox "Aumenta Accertamento", Soggetto, Prog. Modalità di Reincasso, Codice Pagamento: 12 (RISCOSSIONE PER CASSA). Sezione Pagamento con checkbox "Pagamento", campo Impegno, checkbox "Aumenta Impegno", Soggetto, Prog. Modalità di Pagamento. Tab in basso: Dettaglio, Reincasso/Pagamento Automatico, Altri Parametri]

---

### Fase 4 – Verifica numeratori

I numeratori sono stati creati dalla fase di apertura. Verificare nei numeratori per anno eventuali numerazioni per settore iva e utilizzo di numeratori con barre per fatturazione attiva.

[Immagine: Screenshot del percorso menu: Tabelle → IVA → Definizione Numeratori Documenti]

[Immagine: Finestra "CITY-BASE Definizione Numeratori Documenti" con tabella contenente: DEC LIQ (DECRETI LIQUIDAZIONE), DECRIS (DECRETI INCASSO), IVAFAC (NUMERATORE FATTURE SU REGISTRI), IVAVEN (NUMERATORE IVA VENDITE), PROT0 (NUMERATORE PROTOCOLLO). Colonne: Cod, Codice, Descrizione, Area Comp., Tipologia, Barra, Sett IVA, Reg.IVA. Pulsante "Num.An." evidenziato in alto]

**Confrontare nuovo anno con anno precedente e verificare i numeratori.**

[Immagine: Finestra "CITY-BASE Definizione Numeratori Documenti" con vista per anno. Riga mostrata: Anno 2020, Codice IVAVEN, Area Comp. Serv.Economici, Sett IVA 01, Descrizione NUMERATORE IVA VENDITE, Num.Ult.Doc: 0, Barra: (vuoto). In basso: campo Anno impostato a 2021, campo Codice: IVAVEN, pulsante "Carica"]

#### NUMERATORI PER ANNO

Verificare la tabella (numeratori mandati, reversali, documenti di entrata e spesa, ecc)

[Immagine: Screenshot del percorso menu: Tabelle → Personalizzazioni → Progressivi Annuali]

- **CLICCARE BOTTONE GENERA** (per generare i numeratori)

---

## B) OPERAZIONI FACOLTATIVE (non necessarie per apertura)

### CHIUSURA IMPEGNI/ACCERTAMENTI

**A) Dopo approvazione consuntivo eseguire la chiusura Impegni/Accertamenti:** da CHIUSURA - CHIUSURA IMPEGNI e ACCERTAMENTI: cliccare su "Chiusura" lasciando tutto il resto inalterato: tale funzione permette di evitare di riportare sul 2021 tutti quegli impegni/accertamenti SALDATI (con disponibilità reale a ZERO) alla fine del 2020: gli impegni e accertamenti chiusi rimarranno visibili fino all'esercizio 2020 e non oltre.

Tale funzione potrà essere eseguita anche successivamente soprattutto dopo la chiusura del conto consuntivo.

> **N.B:** Fate attenzione che, nel caso successivamente a questa operazione, dobbiate andare ad annullare una reversale legata ad una di questi accertamenti chiusi, per riaprire tale accertamento dovrete andare in modifica (da gestione accertamenti) e togliere il flag "accertamento chiuso" presente nel foglio "dati aggiuntivi".

---

### CHIUSURA ECONOMATO

Per gli Enti che gestiscono l'economato con Cityware si ricorda che il rendiconto finale del 2020 dovrà essere fatto nell'esercizio 2020 con l'avvertenza di creare **SOLO le LIQUIDAZIONI** e **NON i MANDATI** che verranno poi creati nel 2021 tramite la funzione "emissione mandati di pagamento".

> **IMPORTANTE:** Si ricorda infine che dal 1° gennaio il programma proporrà come default l'esercizio 2021 ma che si potrà comunque lavorare sul 2020 andando opportunamente a cambiare l'esercizio nelle maschere apposite: nel 2020 si potranno pertanto creare ancora sia impegni che accertamenti **che verranno poi trasferiti in automatico nell'esercizio successivo**.