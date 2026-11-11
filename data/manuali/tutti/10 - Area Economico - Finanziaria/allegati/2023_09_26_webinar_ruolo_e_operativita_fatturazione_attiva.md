# Fatturazione Attiva

## Introduzione

Si ricorda che dal **01/01/2019** è diventata **obbligatoria** l'emissione della **fattura elettronica** nelle operazioni tra privati, a seguito di cessioni di beni e prestazioni di servizi effettuati tra soggetti residenti o stabiliti in Italia. L'obbligo è quindi esteso anche alle Pubbliche Amministrazioni italiane.

[Diagramma: Flusso PA → Fattura Elettronica (XML) → SDI (Sistema di Interscambio) → PA / Imprese / Privati]

---

## Parametrizzazioni

### Tipi documenti contabili e causali operative

**Percorso:** `180. Servizi economici → 90. Tabelle → 20. Strutturali → 120. Tipi documenti contabili e causali operative`

Parametri da configurare:

- **Obbligo iter**
- **Gestione Finanziaria** - Sì
- **Gestione IVA** - ?
- **Gestione CO.GE** - Sì

[Schermata: Tab "Tipi di documenti contabili e causali operative" con campi: Codice tipo documento, Descrizione, Documento di (Entrata), Segno movimento (Positivo), Moduli (Valido per finanziaria, Valido per Co.ANA, Valido per IVA, Valido per economato, Valido solo per ritenute, Valido per Co.Ge.), Definizione (Numero e data protocollo obbligatori, Attiva iter per liquidazione da servizio periferico, Codice bollo di default, Tipo debito/credito), Esportazione a piattaforma SDI/PCC/Spesometro (Codice tipo documento SDI: TD01 - Fattura)]

---

### Tipo movimenti

**Percorso:** `180. Servizi economici → 90. Tabelle → 80. Fatturazione attiva → 20. Tipo movimenti`

Parametri da configurare:

- **Tipologia**
- **Settore IVA**
- **Numerazione documenti**
- **Mod. incasso**
- **Stampa copia di cortesia**
- **Collegamento con PagoPA**
- **Gestione note fisse su stampa**

[Schermata: Tab "Tipo movimenti Fatturazione Attiva" con campi: Progressivo, Validità tipo movimento (Fatturazione entrate), Descrizione, Tipo documento (Fattura), Causale documento (93 - FATTURA (ITER)), Modo num. doc. Fatt. Entrate (Numero protocollo Iva + numero documento), Tipo movimento per conferma, Settore IVA (07 - locazioni immobiliari beni propri), Numeratore Documento, Testo, Cliente generico, Modalità incasso, Ragione sociale (Soggetto), Causale documento spesa, Fatturazione Entrate (Modo incasso: Mediante tesoreria), Atto di riscossione, Accertamento per IVA]

---

### Voci Documento

**Percorso:** `180. Servizi economici → 90. Tabelle → 80. Fatturazione attiva → 10. Voci Documento`

Parametri da configurare:

- **Quantità ed importi default**
- **Assoggettamenti IVA**
- **Operatività su accertamento**
- **Gestione codici statistici**
- **Gestione impegno di rimborso (NC con rimborso)**

[Schermata: Tab "Voci Documento" con campi: Codice Voce, Descrizione Voce (Locazioni), Quantità di default (1,00000), Importo unitario di default (1,00000), Assoggettamento IVA (A - IVA NORMALE ACQ. E VENDITE, Aliquota IVA 22), Assoggettamento IVA Split (SV - IVA SPLIT VENDITE, Aliquota IVA Split 22), Assoggettamento IVA Reverse (69 - N.6.9 INVERSIONE CONTABILE - ALTRI CASI, Aliquota IVA Reverse 22), Assogg. IVA per mov. in Esenz./Agev. (35 - N.3.5 - NON IMPONIBILI - DICH INTENTO, Aliq. IVA Esenz./Agev. NI), Conto Co.Ana, Conto Co.Ge., Centro di costo, Validità per (Fatturazione entrate), Controllo Accertamento (Crea nuovo accertamento da matrice), Tipo Voce T. Sanitaria, Gestione Cod. Statistico (Non previsto), Codice statistico, Fatturazione Entrate Anno 2023 (Accertamento modificabile, Gestione accertamento, Accertamento, Impegno x docum. Rimborso, F.E.: Rif. amministrazione)]

---

### Abilitazioni utenti

**Percorso:** `180. Servizi economici → 90. Tabelle → 80. Fatturazione attiva → 40. Abilitazioni utenti`

[Schermata: Tab "Abilitazione utenti" con griglia Tipi movimenti contenente: Prog, Descrizione, Tipo documento, Dis., Validità. Esempi di movimenti: LOCAZIONI (Fattura), SERVIZI VARI (Fattura), GSE (Fattura), ASSISTENZA DOMICILIARE (Ricevuta), EDILIZIA PRIVATA (Ricevuta), PAESAGGIO (Ricevuta), AMBIENTE (Ricevuta), COMMERCIO (Ricevuta), DEMOGRAFICI STATO CIVILE (Ricevuta), CDU e Demanio (Ricevuta), OSAP (Ricevuta), DEMOGRAFICI ANAGRAFE (Ricevuta), ROTTURA SUOLO (Ricevuta), SERVIZI VARI - Nota Credito emessa (Fattura), LOCAZIONI - Nota di credito (Fattura)]

---

### Dati fatturazione elettronica per soggetto

**Percorso:** `180. Servizi economici → 90. Tabelle → 80. Fatturazione attiva → 50. Dati fatturazione elettronica per soggetto`

Oppure, in alternativa:

`180. Servizi economici → 90. Tabelle → 60. Clienti/fornitori → 70. Clienti/fornitori`

[Schermata: Tab "Uffici per fatturazione elettronica" con campi: Soggetto, Descrizione, Formato trasmissione (Verso Amministrazioni pubbliche (FPA12)), Codice ufficio, Default per Ragioneria, Default per Tributi, Default per Acquedotto, Default per Servizi, Altri dati Cedente/Prestatore (Titolo 1.2.1.3.4, Riferimento Amministrazione 1.2.6)]

---

### Parametrizzazioni PagoPA

#### Intermediari

**Percorso:** `180. Servizi economici → 120. Modulo base → 50. PagoPA → 20. Intermediari`

Il **Middleware PagoPA** (o *Manager PagoPA*) offre un'interfaccia standard ai propri client astraendo le varie differenze tecniche degli intermediari attualmente presenti sul mercato.

[Diagramma: Flusso Applicative → Manager PagoPA → Intermediario → Nodo PagoPA. Passi: 1) L'applicativo invia la posizione arricchita di ripartizione degli accertamenti al manager; 2) Il manager invia all'intermediario corrente la posizione nel formato richiesto; 3) Il manager scarica i pagamenti dall'intermediario. L'applicativo della finanziaria recupera gli IUV pagati dal manager arricchiti di ripartizione degli accertamenti]

**Elenco intermediari disponibili:**

| N. | Intermediario |
|----|---------------|
| 10 | Gestione Intermediari |
| 20 | E-Fil |
| 30 | Next Step Solution |
| 40 | MPay |
| 50 | JPPA-Maggioli |
| 60 | MyPay |
| 70 | Iris |
| 80 | Liguria Digitale |
| 90 | UrbiPay |
| 100 | Italriscossioni |
| 110 | Alto Agide Riscossioni |
| 120 | PmPay PA Digitale |
| 130 | PmPay PA Digitale Rest |
| 140 | Valle d'Aosta |
| 150 | Dedagroup |
| 160 | SillFI - Firenze |
| 170 | Siscom |
| 180 | Regione Basilicata |
| 190 | PmPay Eremind |
| 200 | BPM |
| 210 | APKappa |

---

#### Emissioni

**Percorso:** `180. Servizi economici → 120. Modulo base → 50. PagoPA → 10. Gestione tabelle → 10. Emissioni`

**PAGAMENTO CON AVVISO (modello 3)**

Un programma si interfaccia con l'intermediario e richiede la pubblicazione di una pendenza specificando:

- I dati del destinatario
- La scadenza
- L'importo da pagare

L'intermediario restituisce il codice **IUV** (Identificativo Unico Versamento).

> **Nota:** Per la successiva regolarizzazione dei provvisori PagoPA relativi a documenti emessi dal modulo fatturazione attiva si ricorda di effettuare le parametrizzazioni standard per attivare le funzionalità relative alla «Regolarizzazione Provvisori da Tesoreria».

---

#### Collegamento PagoPA nel Tipo movimenti

**Percorso:** `180. Servizi economici → 90. Tabelle → 80. Fatturazione attiva → 20. Tipo movimenti`

Per collegare il tipo movimento a PagoPA:

1. Nella sezione **Fatturazione Entrate**, impostare **Modo incasso** = `Avviso IUV + bollettino`
2. Nella tab **FE e altro**, nella sezione **Legami con emissioni per PagoPA**, impostare **Emissione** (codice emissione PagoPA)
3. Configurare **Default per creazione automatica modalità di incasso** (es. Riscossione)

[Schermata: Due pannelli affiancati. Sinistra: "Definizione Tipi" con Modo incasso evidenziato "Avviso IUV + bollettino". Destra: tab "FE e altro" con sezione "Legami con emissioni per PagoPA" e campo Emissione evidenziato]

---

## Operatività

### Accesso al modulo

**Percorso:** `180. Servizi economici → 10. Finanziaria → 110. Uffici Periferici → 30. Fatturazione attiva`

[Schermata: Griglia "Gestione Documenti Fatturazione Entrate" con colonne: Anno/Prg, Descrizione Soggetto, Nr. e Data documento, cop.doc, Pos. flusso SDI, PagoPA, Scad, Descrizione documento, Importo, Tipo movimento, Causale operative, Reverse, IVA, UUID documento. Pulsanti a destra: Nuovo, Altra Ricerca, Conferma Provvisorio, Documento Analogico, PagoPA pubblica, PagoPA bollettini, Rimuovi PagoPA, Crea flusso FE per SDI, Visualizza flusso, Firma, Invia, Scarica Flusso, Invio Doc. Analogico, Stampa estratto conto]

---

### Creazione documento

1. **Selezione tipologia movimento**
2. **Scelta data documento**

[Schermata: Griglia "Tipi Movimento per Utente" con colonne: Tipo mov., Descrizione Tipo movimento, Tipo Doc., Mov.Conf., Causale documento, Settore IVA. In basso: Parametri di Ricerca con Tipo documento Fatt. Entrate, Settore IVA, Codice Utente, Data documento]

---

### Selezione voci documento

Se le **voci documento ≥ 5**, la selezione avviene tramite **griglia facilitata**.

[Schermata: Griglia "Voci per Tipo Movimento" con colonne: Prog. Voce, Descrizione Voce, Importo default. Esempi: SERVIZI VARI (1,00000), Locazioni (1,00000), Servizio assistenza domiciliare (1,00000), RECUPERO SPESE BOLLO (2,00000), AUTORIZZAZIONE COMMERCIO (1,00000)]

---

### Struttura del documento

Il documento di fatturazione attiva è composto da:

- **Anagrafica soggetto** (sezione Cliente: Codice cliente, Partita IVA, Persona Fisica, Prog. Modalità riscossione, Ufficio destinatario SDI, Sede Legale/Res., Numero e Data documento, Descrizione doc.)
- **Corpo documento + Allegati** (Elenco Voci: Riga, Progressivo Voce, Descrizione, Quantità, Importo Unitario, % Sconto, IVA, Importo, Accertamento Anno e N°, Codice Tipo, Codice Valore, Tp.Dato)
- **Bollo ed IVA** (Tipo Iva, Quietanza Nr., Note su Stampa, Bolli, Competenza dal/al, Totale Imponibile, Totale IVA, Totale no IVA, Totale documento)

---

### Focus su 'dettaglio voci'

Nelle voci documento è possibile inserire i **Codici Articolo** conformi alle specifiche tecniche SDI:

| Campo | Riferimento XML | Descrizione |
|-------|----------------|-------------|
| Codice Tipo | 2.2.1.3.1 `<CodiceTipo>` | Indica la tipologia di codice articolo (es. TARIC, CPV, EAN, SSC, ...) |
| Codice Valore | 2.2.1.3.2 `<CodiceValore>` | Indica il valore del codice articolo corrispondente alla tipologia riportata in `<CodiceTipo>` |

Esempio: `Codice Tipo = PALCOM`, `Codice Valore = EF123456-23`

---

### Focus su gestione 'IVA'

Tipologie di IVA disponibili:

- **Normale**
- **Split**
- **Reverse**
- **Esenzione/IVA Agevolata**

**Esenzione/IVA agevolata:**

> Esempio → **Dichiarazione di intento**: esportatori abituali che intendono acquistare o importare senza applicazione dell'IVA (gestione da 'Anagrafico soggetti')

[Schermata: Sezione "Lettere d'intento" con campi: Periodo Validità lett.Int. (Dal 01/01/2023 Al 31/12/2023), Importo Plafond (60.000,00), Numero protocollo AE, Data protocollo AE (29/12/2022)]

---

### Scadenzario

**Percorso di gestione:** Mod. riscossione

Lo scadenzario è **obbligatorio** per l'integrazione con PagoPA.

[Schermata: Tab "Scadenze" con Elenco Scadenze: Riga, Data Scadenza, Importo Rata, Data documento, Nr. docum., Data Inser., Codice IUV, Stato PagoPA, Data Pagam. PagoPA, Utente mod., Data mod.]

---

### Altri dati FE (Fatturazione Elettronica)

Tab per l'inserimento di dati aggiuntivi conformi alle **Specifiche tecniche vers. 1.7.1**:

| Riferimento XML | Tipo | Descrizione |
|----------------|------|-------------|
| 2.1.2 `<DatiOrdineAcquisto>` | - | Blocco contenente le informazioni relative all'ordine di acquisto |
| 2.1.2.1 `<RiferimentoNumeroLinea>` | xs:integer | Linea di dettaglio della fattura a cui si fa riferimento |
| 2.1.2.2 `<IdDocumento>` | xs:normalizedString | Numero del documento |
| 2.1.2.3 `<Data>` | xs:date | Data del documento (formato ISO 8601:2004) |
| 2.1.2.4 `<NumItem>` | xs:normalizedString | Identificativo della singola voce all'interno del documento |
| 2.1.2.5 `<CodiceCommessaConvenzione>` | xs:normalizedString | Codice della commessa o della convenzione |
| 2.1.2.6 `<CodiceCUP>` | xs:normalizedString | Codice gestito dal CIPE che caratterizza ogni progetto di investimento pubblico |
| 2.1.2.7 `<CodiceCIG>` | xs:normalizedString | Codice Identificativo della Gara |

---

### Codici Statistici - Doc.coll.

Tab per la gestione di:

- **Codici Statistici** (Codice statistico 1)
- **Data scadenza documento**
- **Estremi Fatt. da Stornare** (Anno, Numero, Descrizione)
- **Codice concessione**
- **Deposito fideiussione**

I codici statistici si configurano anche nelle **Voci documento** (campo "Codice statistico" nella tabella Voci Documento).

---

### Pulsanti operativi

| Pulsante | Funzione |
|----------|----------|
| **Nuovo** | Inserire nuovo documento |
| **Altra Ricerca** | Tornare ai filtri di ricerca |
| **Conferma Provvisorio** | Confermare un documento provvisorio |
| **Documento Analogico** | Aprire la copia PDF del documento (visualizzata da Alfresco) |
| **PagoPA pubblica** | Pubblicare la scadenza su PagoPA |
| **PagoPA bollettini** | Aprire la copia PDF del bollettino |
| **Rimuovi PagoPA** | Rimuovere pubblicazione PagoPA |
| **Crea flusso FE per SDI** | Creare flusso XML per SdI |
| **Visualizza flusso** | Aprire il flusso XML su foglio di stile SdI |
| **Firma** | Firmare il flusso XML prima dell'invio a SdI |
| **Invia** | Inviare il flusso XML a SdI |
| **Scarica Flusso** | Scaricare in locale il flusso XML |
| **Invio Doc. Analogico** | Inviare al destinatario il documento di fatt. attiva |
| **Stampa estratto conto** | Stampare Estratto Conto del Soggetto |
| **Vis. Documentale** | Visualizzare unità documentaria |
| **Importa flusso GSE** | Importare il flusso XML proveniente dal GSE (vedi Comunicazione n. 04/2020) |

---

## Integrazione con PagoPA

### Pubblicazione scadenza

La pubblicazione su PagoPA può essere effettuata in due modi:

1. **Dalla finestra del Documento Analogico**: cliccare il pulsante **PagoPA pubblica** nella finestra di anteprima PDF.
2. **Dalla griglia documenti**: selezionare il documento e cliccare il pulsante **PagoPA pubblica** nella barra laterale.

> ⚠️ Se il tipo documento prevede la pubblicazione su PagoPA ma la funzione non è stata lanciata, viene visualizzato un avviso: *"Il tipo documento prevede la pubblicazione su PagoPA ma la funzione PagoPA pubblica non è stata lanciata."*

### Verifica stato PagoPA

Nella griglia documenti, la colonna **PagoPA** mostra lo stato di pubblicazione. La colonna **Scad** mostra la scadenza.

Cliccando sull'icona PagoPA nella griglia si accede all'**Elenco Scadenze** con: Riga, Data Scadenza, Importo Rata, Data documento, Nr. docum., Data Inser., Codice IUV, Stato PagoPA, Data Pagam. PagoPA, Utente mod.

---

## Colloquio con SdI

### Configurazione propedeutica

Come attività propedeutica si ricorda di configurare il **canale di spedizione** da:

`180. Servizi economici → 90. Tabelle → 80. Fatturazione elettronica → 40. Altri parametri → 10. Parametri generali`

### Stati del flusso SDI

Nella griglia documenti, la colonna **Pos. flusso SDI** mostra lo stato di avanzamento:

- `0` = Da creare
- `1` = Creato da firmare/inviare
- `1a` = Creato da firmare
- `1b` = Creato da inviare
- `2` = Firmato da inviare
- `3` = Inviato allo SDI
- `4` = Rifiutato da SDI
- `5` = Scartato da SDI, esito NS
- `6` = Mancata consegna al destinatario, esito MC
- `7` = Impossibilità di recapito, esito AT
- `8` = Consegnato al destinatario
- `9` = Fattura GSE
- `10` = Accettata per decorrenza termini
- `11` = Accettata
- `12` = Con anomalie: rifiuti, scarti, non consegnati

### Pulsanti per il colloquio SDI

- **Crea flusso FE per SDI**: genera il file XML
- **Visualizza flusso**: apre il flusso XML nel foglio di stile SdI
- **Firma**: firma digitalmente il flusso XML
- **Invia**: trasmette il flusso a SdI
- **Scarica Flusso**: scarica il file XML in locale

---

## Interoperabilità con software esterni

### Architettura di integrazione

[Diagramma: Flusso di interoperabilità. Software esterni (Fee, Fiere e mercati, Financing, TAX) → Genera fattura → Output: XML → SDI, PDF → Repository. La fattura generata si collega a: IVA, Repository, Riscossione, Scadenza IUV, Portal, Fee]

### Import fatture create da altri software

**Percorso:** `180. Servizi economici → 110. Utilità → 40. Fatturazione attiva → 10. Acquisizione fatture da flussi FE / 20. Invio massivo SdI`

### Dialogo con protocollo

Il modulo fatturazione attiva dialoga con il protocollo per:

- Invio file XML a SdI
- Invio copia di cortesia PDF via PEC

### Metodo WS 'Ricevi Fattura'

Consente l'import di documenti da software esterni tramite Web Service.

---

## Come attivare la procedura su CWOL

### Predisposizione ambiente per fatturazione attiva

- Configurazioni e parametrizzazioni (causali operative, tipologie movimenti, layout testi per copia di cortesia, canale di spedizione, etc.) in base alle esigenze del Cliente;
- Configurazione integrazione con PagoPA ed eventuali interoperabilità con software terzi.

### Pianificazione e programmazione

- Contattare il commerciale di riferimento per quantificare la formazione adeguata ed il tuning per l'attivazione del modulo o delle interoperabilità;
- A seguito conferma saranno pianificate le attività con i tecnici Palitalsoft.