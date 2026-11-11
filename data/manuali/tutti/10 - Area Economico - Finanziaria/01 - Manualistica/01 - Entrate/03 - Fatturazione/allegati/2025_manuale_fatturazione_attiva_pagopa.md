# Fatturazione Elettronica Attiva - PagoPA

## 1. Attivazione Modulo Adesione PagoPA e Censimento Servizi E-FIL

Per la pubblicazione delle scadenze in PagoPA procedere come di seguito:

1. **Verificare l'adesione al progetto PagoPA.**
   Accertarsi che l'Ente risulti correttamente registrato e abilitato al sistema PagoPA.

2. **Verificare i servizi interni dell'Ente per i quali è stata richiesta l'adesione a PagoPA** (es. estratto conto E-fil).

   [Screenshot: Tabella "Servizi di Incasso Implementati" con elenco di servizi come Violazioni Codice della Strada, Diritti di Istruzione, Canoni Locazione Orti Urbani, Concessioni Cimiteriali, Tariffe Cimiteriali, Diritti Funebri, ecc., con relative competenze di ufficio]

3. **Per ciascun servizio censito, verificare:**
   - Il modulo interno utilizzato per la pubblicazione del pagamento;
   - La modalità di rendicontazione al cliente.

4. **Produrre un riepilogo dei servizi per i quali è prevista:**
   - La compilazione della fattura elettronica, oppure
   - La generazione dell'avviso di pagamento (ricevuta non elettronica) in CWOL.

---

## 2. Impostazioni Tabelle Parametri e Collegamenti

### 2.1 Gestione del Catalogo Accertamenti Presenti sul Portale PagoPA di E-FIL

Per usufruire della riconciliazione automatica degli incassi sugli accertamenti relativi ai versamenti effettuati tramite PagoPA, è necessario seguire i passaggi di seguito riportati.

#### 2.1.1 Accesso alla sezione "Accertamenti"

Accedere al **Menù Accertamenti** seguendo il percorso sottoindicato:

`180. Servizi Economici` → `10. Finanziaria` → `30. Entrata` → `20. Accertamenti`

[Screenshot: Percorso di menu a cascata che evidenzia il percorso fino alla voce "20. Accertamenti"]

Inserire i parametri di ricerca e cliccare sul pulsante **"Elenca"** per visualizzare l'elenco degli accertamenti disponibili.

[Screenshot: Schermata "Accertamenti" con campi di ricerca (Anno/Numero, Competenza/Residui, Classificazione, ecc.) e pulsante "Elenca" evidenziato]

#### 2.1.2 Selezione e modifica dell'accertamento

Dall'elenco visualizzato, **entrare in modifica** sull'accertamento da associare.

[Screenshot: Elenco accertamenti anno 2022 con colonne: Anno/Prog, Piano Finanziario, Voce di Bilancio, Oggetto, Impegno, Importo Iniziale, Tipo, Classificazione, CIG, Codice CIG, Estremi Atti]

Per avviare l'associazione, cliccare sul pulsante: **"Caricamento Accertamento su Catalogo E-Fil"**

[Screenshot: Scheda dettaglio accertamento con pulsante "Caricamento accertamento su Catalogo E-Fil" evidenziato in basso a destra]

#### 2.1.3 Associazione dell'accertamento al servizio

Dopo aver cliccato il pulsante, si aprirà una nuova schermata con l'elenco dei servizi presenti su **E-Fil**.

I due pulsanti seguenti diventano attivi solo dopo aver selezionato un servizio dall'elenco:

- **Visualizza Accertamento/i Associati a Servizio** → Visualizza l'elenco degli accertamenti già collegati al servizio selezionato.
- **Associa Accertamento/i a Servizio** → Inserisce l'accertamento nel catalogo E-Fil e lo associa al servizio selezionato.

Se l'accertamento è già associato, il sistema segnalerà che l'operazione non può essere eseguita.

[Screenshot: Finestra "Caricamento accertamenti su Catalogo E-Fil" con elenco servizi (Codice Servizio, Descrizione Servizio) e pulsanti "Visualizza Accertamento/i Associati a Servizio" e "Associa Accertamento/i a Servizio"]

#### 2.1.4 Verifica dell'associazione

Dopo l'associazione, cliccare nuovamente su **"Visualizza Accertamento/i Associati a Servizio"** per verificare che l'accertamento sia stato correttamente aggiunto.

Nella stessa schermata è possibile modificare i flag:

- **Attivo**
- **Abilitato**
- **Default** (fondamentale per stabilire quale accertamento deve essere utilizzato in fase di pubblicazione)

> **Nota:** Il flag *Default* è particolarmente rilevante per i servizi di tipo *spontaneo*, cioè quelli per i quali lo IUV viene generato direttamente dal portale E-Fil.

[Screenshot: Finestra "Accertamenti E-Fil" con colonne Codice, Descrizione, Periodo, Attivo, Abilitato, Default e flag evidenziati]

#### 2.1.5 Impostazione dell'accertamento di Default

Per impostare un nuovo accertamento come **Default**:

1. Cliccare accanto alla casella vuota (il cursore diventerà una mano).
2. Selezionare la riga dell'accertamento da impostare come nuovo **Default**.

Il sistema disattiverà automaticamente il flag **Default** sull'accertamento precedente, poiché per ciascun servizio può esistere un **solo** accertamento di Default.

[Screenshot: Tabella "Accertamenti E-Fil" con riga selezionata e flag Default attivato su una sola riga]

### 2.2 Mappatura dell'Accertamento

Il numero dell'accertamento e sotto accertamento è memorizzato su una stringa alfanumerica, quindi, deve essere comunicato agli intermediari con la mappatura che segue:

**Anno, numero impegni, sub1, sub2, sub3, sub4** → `AAAA/00000.000.00.00.00` (riempiendo solo i campi maggiori di 0)

Esempi di mappatura da comunicare all'intermediario e da gestire nella creazione delle scadenze in attesa di incasso nella tabella `CITYWARE_S_BWE_PENDDET`:

| Numero Accertamento | Modalità di comunicazione |
|---|---|
| 2020/1 | 2020/00001 |
| 2019/50.2 | 2019/00050.002 |
| 2020/30.10.1 | 2020/00030.010.01 |
| 2020/30.10.5.1 | 2020/00030.010.05.01 |
| 2020/30.10.5.3.1 | 2020/0030.010.05.03.01 |

---

## 3. Definizione dei Servizi di Fatturazione Attiva Collegati a PagoPA

### 3.1 Creazione Servizio lato CWOL.PAGOPA - Premessa

Il modulo di 'Fatturazione attiva' della suite applicativa CWOL utilizza il modulo **CWOL.PAGOPA** per la connessione con l'intermediario che gestisce i servizi di PagoPa. Questo 'middleware' è un modulo applicativo dedicato alla tracciatura e il monitoraggio di tutti gli eventi da e verso il Nodo dei Pagamenti-SPC di AgID che riguardano l'Ente.

CWOL.PAGOPA è quindi in grado di interoperare con l'intermediario tecnologico scelto dall'Ente, attraverso un connettore software specifico che viene quindi personalizzato di volta in volta; avviene, cioè, una mappatura di tutte le chiamate "primitive" o servizi (WS) messe a disposizione dalla piattaforma dell'intermediario, così da lasciare al backoffice un'unica modalità di interfacciamento verso il nodo PagoPA. Grazie allo sviluppo di tale connettore, si garantisce all'Ente il funzionamento del Middleware che potrà contare quindi su una gestione del nodo integrata nel proprio applicativo. Tutti i dati che vanno in pubblicazione e/o che transitano per il nodo vengono storicizzati così come tutte le configurazioni dei servizi/entrate e le varie ricevute di pubblicazione/accettazione che l'intermediario è formalmente obbligato a fornire all'Ente.

[Diagramma: Schema Funzionale del Modulo PagoPA - Mostra l'architettura con: Back Office CWOL (Economico-Finanziaria, Tributi/Servizi/CdS, Riscossione), Modulo PagoPA (Scadenze, Pagamenti, Storicizzazione), interconnessione con E-FIL, NSS, MPay verso il NODO dei Pagamenti-SPC PagoPA, che a sua volta si collega a PSP/Modelli 3 e 1, e Front Office Cityware.online per il cittadino]

### 3.1 Personalizzazione del Middleware PagoPA su CWOL

La configurazione del middleware PagoPA relativa al singolo intermediario è raggiungibile al seguente percorso:

`150. Servizi Economici` → `120. Modulo Base` → `50. PagoPA` → `20. Intermediari` → `10. Gestione Intermediari`

[Screenshot: Percorso di menu a cascata che evidenzia il percorso fino a "10. Gestione Intermediari"]

Di seguito si riportano degli esempi delle schermate di configurazione con i dati richiesti dal singolo intermediario.

#### 3.1.1 Mappatura con E-fil

[Screenshot: Schermata di configurazione "E-fil" con campi: Progressivo, Aux Digit, Id Gestionale, Application Code, Ente Creditore, Genera IUV, Cartella Pubblicazione, Cartella Cancellazione, Cartella Arricchite, Cartella Rendicontazione, Cartella Rts, Cartella Ricevute, Host Sftp, User Sftp, Password Sftp, Id Applicazione, Filter, Certificato Sftp, Id Fornitore ZZ, Id Applicazione ZZ, Punto Vendita ZZ, Sportello ZZ, Uri CWOL Pagopa]

#### 3.1.2 Mappatura con Next Step Solution

[Screenshot: Schermata di configurazione "Next Step Solution" con campi: Progressivo, URL Web services, Uri CWOL Pagopa, Id Connettore, Versione Connettore, Identificativo, Username, Password, Codice Fiscale ente]

#### 3.1.3 Mappatura con Mpay

[Screenshot: Schermata di configurazione "Mpay" con campi: Progressivo, Aux Digit, Id Gestionale, Application Code, Ente Creditore, Genera IUV, Url Pagamento, Url Notifica, Url Contro/notifica, Uri CWOL Pagopa, Portale ID, EncryptIV, EncryptKey, Host Sftp, User Sftp, Password Sftp, Cod.Ente Beneficiario, Beneficiario, GLN Ente, Certificato Sftp]

### 3.2 Storicizzazione Puntuale delle Scadenze con IUV su CWOL

A fronte di ogni IUV pubblicato (scadenza) viene creato un record sulle tabelle `CITYWARE_S_BWE_PENDEN` e per ogni accertamento legato allo IUV vengono creati tanti record di dettaglio nella tabella `CITYWARE_S_BWE_PENDDET`.

[Screenshot: Schermata "Servizi Rendicontazioni" con campi: Id, Tipo scadenza (Fatturazione attiva), Sottotipo scadenza, Servizio Emittente, Intermediario (E-Fil), Codice Servizio, Tipo riferimento creditore]

### 3.3 Creazione Emissione e Servizio Emittente da CWOL

Per poter procedere con la pubblicazione di una scadenza sul nodo PagoPA è necessario creare (per ogni Anno di Esercizio) una emissione per ogni servizio codificato dall'intermediario. La funzione per gestire le emissioni su CWOL è presente nel seguente menu:

`180. Servizi Economici` → `60. PagoPA` → `10. Gestione Tabelle` → `10. Emissioni PagoPA`

[Screenshot: Percorso di menu a cascata che evidenzia "10. Emissioni PagoPA"]

Cliccando sul bottone **"Nuovo"** presente sul menu di destra è possibile inserire una Nuova Emissione.

Nel campo **"Servizio Emittente"** bisogna indicare il servizio generico **"Fatturazione Entrate"**, se non è presente nella lista occorre inserirlo utilizzando il bottone "Nuovo".

[Screenshot: Campo "Servizio Emittente" e finestra "Servizi emittenti documenti" con ID, Descrizione (Fatturazione Entrate), Modulo bollettamento (FA - FATTURAZIONE ATTIVA)]

### 3.4 Definizione Tipo Movimento per PagoPA

Percorso: `150. Servizi Economici` → `80. Fatturazione Attiva` → `20. Tipo movimenti`

[Screenshot: Percorso di menu a cascata che evidenzia "20. Tipo movimenti" sotto "80. Fatturazione Attiva"]

Impostare modo incasso **"Avviso IUV+Bollettino"**.

[Screenshot: Schermata "Tipo movimenti Fatturazione Attiva" con sezione "Fatturazione Entrate" e campo "Modo incasso" impostato su "Avviso IUV + bollettino" evidenziato]

Inserire il legame con emissione per PagoPA creata in precedenza.

[Screenshot: Sezione "Legame con emissioni per PagoPA" con campo "Emissione" valorizzato con il riferimento all'emissione creata]

---

## 4. Fasi Fattura: Creazione Nodo e Pubblicazione PagoPA

Dopo la creazione del documento selezionare il movimento e cliccare **"PagoPA Pubblica"**.

[Screenshot: Elenco documenti fatturazione attiva con pulsante "PagoPA pubblica" evidenziato nel menu a destra]

Tramite il collegamento web service, viene restituito l'esito della pubblicazione e il relativo identificativa posizione **"IUV"** e il bollettino.

[Screenshot: Finestra "Stampa bollettino PagoPA" con anteprima PDF del bollettino e popup "Esito pubblicazione" contenente: CodiceRiferimentoCreditore, IdentificativoPosizione (IUV), Esito (Ok), Messaggio]

### 4.1 Esempio Bollettino

[Screenshot: Esempio di bollettino PagoPA "Avviso di Pagamento" con intestazione Ente Creditore (Comune di Riccione), logo PagoPA, sezione "Quanto e quando pagare" con importo e scadenza, sezione "Dove pagare" con canali online e territoriali, QR code, Codice CBILL, Codice Avviso, e dati del destinatario]

Nel documento ora risulterà l'icona che indica l'avvenuta pubblicazione della scadenza.

[Screenshot: Elenco documenti con icona di pubblicazione PagoPA visibile nella colonna dedicata]

Dopo la pubblicazione dovranno essere effettuate tutte le altre fasi:

- Invio documento analogico (nel caso di ricevuta no iva)
- Creazione flusso (con gli allegati, PDF documento analogico e bollettino PagoPa)
- Firma flusso nel caso di fattura ad Ente Pubblico
- Invio flusso allo SDI

Nel documentale sarà possibile visualizzare tutti gli allegati, stampa PDF analogico, bollettino PagoPA e gli esiti.

Il documento analogico creato sarà integrato con il logo di PagoPA.

[Screenshot: Estratto del documento analogico con sezione "Scadenza Pagamenti" contenente tabella con Rata, Data, Importo, IUV e logo PagoPA]

---

## 5. Regolarizzazione Provvisori Arricchiti

Per Regolarizzare i provvisori bisogna andare nel seguente menù:

`180. Servizi Economici` → `10. Finanziaria` → `30. Entrata` → `90. Regolarizzazione provvisori da tesoreria`

[Screenshot: Percorso di menu a cascata che evidenzia "90. Regolarizzazione provvisori da tesoreria"]

Nella schermata che si aprirà selezionare uno o più provvisori e poi cliccare **Regolarizza**.

[Screenshot: Elenco provvisori con colonne (Anno, Prog, Descrizione, Importo Credito, Importo Esig., Stato, Soggetto, ecc.) e pulsante "Regolarizza" evidenziato nel menu a destra]

Premere il pulsante **+** ed aggiungere un nuovo movimento.

[Screenshot: Sezione "Movimenti da contabilizzare" con elenco movimenti e pulsante "+" evidenziato in basso a sinistra]

Una volta selezionato uno o più movimenti da contabilizzare e cliccare il bottone **Contabilizza**.

[Screenshot: Elenco movimenti con pulsante "Contabilizza" evidenziato nel menu a destra]

Cliccare il pulsante **Elabora**.

[Screenshot: Finestra "Elaborazione Movimenti" con parametri di creazione (Tipo elaborazione: Creazione, tab Entrata) e pulsante "Elabora"]

> **Nota:** Nel caso in cui nel provvisorio siano presenti più IUV, e ve ne siano alcuni derivanti da procedura di fatturazione attiva, il provvisorio sarà regolarizzato in modo **parziale**. La procedura produrrà un elenco di documenti, sarà poi premura dell'operatore procedere alla regolarizzazione collegandoli alle assegnazioni presenti in finanziaria.

---

## 6. Regolarizzazione Provvisori con Documenti Entrata

Partendo sempre dalla regolarizzazione del provvisorio, utilizzare **"Associa con documento Assegnato"** o **"Associa con Documento Risc/Liq"**.

[Screenshot: Pulsanti "Associa con Documenti Assegnati" e "Associa con Documenti Allegati" nel menu a destra della schermata di regolarizzazione]

Ricercare la fattura o la ricevuta e fare doppio click sulla stessa.

[Screenshot: Finestra "Documenti Entrate" con elenco documenti (Anno/Prog, Data Registrazione, Soggetto, No. Docum., Data Docum., Descrizione documento) e pulsante "Nuovo" nel menu a destra]