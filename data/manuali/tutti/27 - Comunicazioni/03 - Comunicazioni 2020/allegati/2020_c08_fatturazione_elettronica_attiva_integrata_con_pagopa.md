# Fatturazione elettronica attiva integrata con PagoPA

**Comunicazione n. 08/2020**

**Scopo:** Il documento illustra l'operatività e le configurazioni necessarie per effettuare la pubblicazione delle richieste di pagamento al nodo PagoPA della fatturazione attiva.

---

## 1. Attivazione modulo, adesione PagoPA e censimento servizi con E-fil

Per la pubblicazione delle scadenze in PagoPA procedere come di seguito:

1. Verificare adesione al progetto PagoPA.
2. Verificare i servizi interni dell'Ente per i quali è stata richiesta l'adesione a PagoPA (estratto conto E-fil).

[Schema: Elenco "Servizi di Incasso Implementati" con tabella contenente servizi come Violazioni Codice della Strada, Coattivo Ruoli, Diritti di Istruttoria, Canoni Locazione, Concessioni Cimiteriali, Tariffe Cimiteriali, Diritti Funebri, Alloggiamenti Temporanei, Bando Casa, ecc.]

3. Per i servizi censiti, verificare il modulo interno utilizzato per la pubblicazione di pagamento e la modalità di rendicontazione al cliente.
4. Produrre riepilogo per quelli in cui è prevista la compilazione della fattura elettronica o avviso di pagamento (ricevuta non elettronica) in cw-online.

---

## 2. Impostazioni tabelle parametri e collegamenti

### 2.1 Gestione del catalogo accertamenti presenti sul portale PagoPA di E-fil

Per usufruire della riconciliazione degli incassi sugli accertamenti in modo automatico per i soli versamenti che i clienti fanno tramite PagoPA occorre prima definire il catalogo degli accertamenti sull'ambiente web di PagoPA e in un secondo momento associare gli accertamenti del catalogo con i servizi di riscossione attivati con E-fil.

Quest'operazione può essere fatta sull'ambiente web di E-Fil o direttamente su Cityware.

Al fine di agevolare la gestione del catalogo sull'applicativo Cityware nella gestione degli accertamenti è possibile aggiornare anche il catalogo E-fil selezionando dapprima l'accertamento interessato agli incassi di PagoPA quindi l'icona **Acc.EFIL**.

La funzione Acc.EFIL richiama i servizi esposti sul portale PagoPA che consentono dapprima di inserire l'accertamento nel catalogo di E-fil quindi includere l'accertamento in uno dei servizi di riscossione attivati sul portale.

[Schermata: Gestione Accertamenti City-Financing con icona Acc.EFIL evidenziata]

[Schermata: Videata "Assunzione Accertamento al Servizio di Incasso" con elenco servizi e checkbox per Abilitato/Disabilitato]

Le operatività per attivare la funzione e quindi inserire gli accertamenti nel catalogo sono illustrate nel filmato 'Provvisori arricchiti Catalogo' richiamabile da link su wiki (filmato in sede di produzione).

Si ricorda che l'End point da mettere sulle configurazioni iniziali (**Tabelle > Personalizzazioni > Definizione e operatività – Parametri Generali > Tab Tesoreria**), sia per l'arricchimento che per la gestione del catalogo, va richiesto ad E-fil.

[Schermata: Tab Tesoreria con campi Endpoint e Arricchimento Flussi, Id Applicazione, Codice Ente, Endpoint Gestione Catalogo]

### 2.2 Configurazione parametri per arricchimento provvisori con intermediario Next Step Solution

Come per l'intermediario E-fil, anche per Next Step Solution è necessario configurare l'End point da mettere sulle configurazioni iniziali (**Tabelle > Personalizzazioni > Definizione e operatività – Parametri Generali > Tab Tesoreria**), per l'arricchimento va richiesto a Next Step Solution.

[Schermata: Tab Tesoreria con campo "Importazione Flusso Provvisori Arricchiti" impostato su "1 - NextStep"]

[Schermata: Tab WS e input provvisori arricchiti con campi Endpoint, Identificativo Connettore, Codice Fiscale, Versione, Identificativo, Username, Password]

### 2.3 Come consultare la documentazione filmata su wiki

All'indirizzo [https://wiki.nuvolaitalsoft.it/doku.php?id=guide:area-economico-finanziaria:start](https://wiki.nuvolaitalsoft.it/doku.php?id=guide:area-economico-finanziaria:start) potete consultare tutta la documentazione filmata suddivisa per i vari moduli e funzione della finanziaria, tra i quali il filmato **Provvisori Arricchiti - Catalogo**.

### 2.4 Mappatura dell'accertamento

Il numero dell'accertamento e sotto accertamento è memorizzato su una stringa alfanumerica quindi deve essere comunicato agli intermediari con la mappatura che segue:

**Anno, numero impegni, sub1, sub2, sub3, sub4 → AAAA/00000.000.00.00.00** (riempiendo solo i campi maggiori di 0)

Esempi di mappatura da comunicare all'intermediario e da gestire nella creazione delle scadenze in attesa di incasso nella tabella `CITYWARE_S_BWE_PENDDET`:

| Numero Accertamento | Modalità di comunicazione |
|---|---|
| 2020/1 | 2020/00001 |
| 2019/50.2 | 2019/00050.002 |
| 2020/30.10.1 | 2020/00030.010.01 |
| 2020/30.10.5.1 | 2020/00030.010.05.01 |
| 2020/30.10.5.3.1 | 2020/0030.010.05.03.01 |

---

## 3. Definizione dei servizi di fatturazione attiva collegati a PagoPA

### 3.1 Creazione servizio lato CWOL.PAGOPA – Premessa

Il modulo di 'Fatturazione attiva' della suite applicativa CWOL utilizza il modulo **CWOL.PAGOPA** per la connessione con l'intermediario che gestisce i servizi di PagoPA.

Questo 'middleware' è un modulo applicativo dedicato alla tracciatura e il monitoraggio di tutti gli eventi da e verso il Nodo dei Pagamenti-SPC di AgID che riguardano l'Ente.

CWOL.PAGOPA è quindi in grado di interoperare con l'intermediario tecnologico scelto dall'Ente, attraverso un connettore software specifico che viene personalizzato di volta in volta; avviene cioè una mappatura di tutte le chiamate "primitive" o servizi (WS) messe a disposizione dalla piattaforma dell'intermediario, così da lasciare al backoffice un'unica modalità di interfacciamento verso il nodo PagoPA. Grazie allo sviluppo di tale connettore, si garantisce all'Ente il funzionamento del Middleware che potrà contare quindi su una gestione del nodo integrata nel proprio applicativo. Tutti i dati che vanno in pubblicazione e/o che transitano per il nodo vengono storicizzati così come tutte le configurazioni dei servizi/entrate e le varie ricevute di pubblicazione/accettazione che l'intermediario è formalmente obbligato a fornire all'Ente.

In questo contesto con AdSP Genova, si tratta quindi di realizzare il connettore specifico per il Polo dei Pagamenti Regione Liguria, interfacciando i servizi necessari alle esigenze contestuali di interoperabilità con il nodo nazionale dei pagamenti.

[Schema logico CWOL.PAGOPA: Diagramma di flusso funzionale che mostra il Modulo PagoPA con componenti Economico-Finanziaria, Tributi/Servizi/CDS/Entrate, Riscossione, collegati al NODO dei Pagamenti-SPC (PagoPA) tramite intermediari E-FIL, NSS, MPay, con flussi verso Tesoreria, P.S.P., e Front Office/Back Office Cityware.online]

### 3.2 Personalizzazione del middleware PagoPA su CWOL

La configurazione del middleware PagoPA relativa al singolo intermediario è raggiungibile al seguente percorso:

**150. Servizi Economici > 120. Modulo Base > 50. PagoPA > 20. Intermediari > 20. E-Fil / 30. Next Step Solution / 40. MPay / 50. JPFA-Maggioli**

Di seguito si riportano degli esempi delle schermate di configurazione con i dati richiesti dal singolo intermediario.

#### 3.2.1 Mappatura con E-fil

[Schermata: Configurazione E-fil con campi: Progressivo, Aux Digit, Id Gestionale, Application Code, Ente Creditore, Genera IUV, Cartella Pubblicazione, Cartella Cancellazione, Cartella Arricchimento, Cartella Rendicontazione, Cartella Rt, Cartella Ricevute, Host Sftp, User Sftp, Password Sftp, Id Applicazione, Filter, Certificato Sftp, Id Fornitore ZZ, Id Applicazione ZZ, Punto Vendita ZZ, Sportello ZZ, Uri CWOL Pagopa]

#### 3.2.2 Mappatura con Next Step Solution

[Schermata: Configurazione Next Step Solution con campi: Progressivo, URL Web services, Uri CWOL Pagopa, Id Connettore, Versione Connettore, Identificativo, Username, Password, Codice Fiscale ente]

#### 3.2.3 Mappatura con Mpay

[Schermata: Configurazione Mpay con campi: Progressivo, Aux Digit, Id Gestionale, Application Code, Ente Creditore, Genera IUV, Url Pagamento, Url Notifica, Url Contronotifica, Url CWOL Pagopa, Portale ID, EncryptIV, EncryptKey, Host Sftp, User Sftp, Password Sftp, Cod.Ente Beneficiario, Beneficiario, GLN Ente, Certificato Sftp]

### 3.3 Storicizzazione puntuale delle scadenze con IUV su CWOL

A fronte di ogni IUV pubblicato (scadenza) viene creato un record sulla tabella `CITYWARE_S_BWE_PENDEN` e per ogni accertamento legato allo IUV vengono creati tanti record di dettaglio nella tabella `CITYWARE_S_BWE_PENDDET`.

[Schermata: Tracciato tabella CITYWARE_S_BWE_PENDDET con colonne: PROGETTAB, CODICE, DESCRIZIONE, IMPORTO, IDPENDEN, PROGINT, IDVOCOSTO, COGNOME, NOME, CODFISCALE, QUANTITA, IVA, CAUSALEIMPORTO, ANNOCOMP, CODUTE, DATAOPER, TIMEOPER, FLAG_DIS, PARVALORE (x7), PARVINOME (x7), RIFPROGRESSIVO]

### 3.4 Creazione Emissione e Servizio Emittente da CWOL

Per poter procedere con la pubblicazione di una scadenza sul nodo PagoPA è necessario creare (per ogni Anno di Esercizio) una emissione per ogni servizio codificato dall'intermediario. La funzione per gestire le emissioni su CWOL è presente nel seguente menu:

**150. Servizi Economici > 120. Modulo Base > 50. PagoPA > 10. Gestione Tabelle > 10. Emissioni**

Cliccando sul bottone **"Nuovo"** presente sul menu di destra è possibile inserire una nuova Emissione.

[Schermata: Servizi Rendicontazioni con campi: Id, Disabilitato, Tipo scadenza (Fatturazione attiva), Sottotipo scadenza, Servizio Emittente, Intermediario (E-Fil), Codice Servizio, Tipo riferimento creditore]

Nel campo **"Servizio Emittente"** bisogna indicare il servizio generico **"Fatturazione Entrate"**, se non è presente nella lista occorre inserirlo utilizzando il bottone **"Nuovo"**.

[Schermata: Servizi emittenti documenti con ID 81, Descrizione "Fatturazione Entrate", Modulo bollettazione FFA]

Compilare i campi:

- **"Codice Servizio"** = secondo la codifica data dall'intermediario in fase di ricognizione dei servizi da attivare presso l'ente
- **"Tipo riferimento creditore"** = codice che identifica l'ente presso l'intermediario

Una volta inserita la prima emissione (collegata al primo Codice Servizio) procedere con le altre.

### 3.5 Creazione Emissione e Servizio Emittente da CW

I servizi emittenti sono raggiungibili dal seguente menu del Modulo Base di CW:

**Modulo Base > Tabelle generali > Servizi emittenti documenti**

Se non presente, creare un Servizio emittente collegato al modulo bollettazione **FFA**, di seguito un esempio di caricamento:

[Schermata: Servizi emittenti documenti City-Base con Cod. servizio Id. bollettino 01, Descrizione "Fatturazione Attiva", Descrizione breve "F4PA Attiva", Modulo bollettazione FFA, Modalità Registrazione "0 - No IVA"]

Successivamente è necessario creare una emissione per ogni servizio per cui pubblicare una scadenza, selezionare la voce **"Emissioni"** presente nel seguente menu del Modulo Base:

**Modulo Base > Tabelle generali > Emissioni**

Aggiungere emissione:

- Selezionare il tab **PagoPA**
- Identificativo scadenza **"81 fatturazione attiva"**
- Intermediario **"E-fil"**
- Cod. servizio (censito in E-fil)
- Rif. Creditore (rilasciato da E-fil)

[Schermata: Dettaglio emissione City-Base con Servizio 99 "Fatturazione attiva", Modulo FFA, Anno 2020, Tab PAGOPA con Identificativo Scadenza "81 - Fatturazione attiva", Intermediario E-Fil, Cod. Servizio 33, Rif. Creditore 255, PAGO PA: Sì]

### 3.6 Definizione tipo movimento per PagoPA

Percorso: **150. Servizi Economici > 80. Fatturazione Attiva > 20. Tipo movimenti**

[Schermata: Menu di navigazione per Tipo movimenti Fatturazione Attiva]

Impostare modo incasso **"Avviso IUV+Bollettino"**.

[Schermata: Tipo movimenti Fatturazione Attiva con campo "Modo incasso" impostato su "Avviso IUV + Bollettino"]

Inserire il legame con emissione per PagoPA creata in precedenza.

[Schermata: Tab "FE e altro" con sezione "Legame con emissioni per PagoPA" con campo Emissione collegato]

---

## 4. Fasi fattura: creazione nodo e pubblicazione PagoPA

Dopo la creazione del documento selezionare il movimento e cliccare **"PagoPA Pubblica"**.

[Schermata: Gestione Documenti Fatturazione Entrate con pulsante "PagoPA pubblica" evidenziato nel menu di destra]

Tramite il collegamento web service, viene restituito l'esito della pubblicazione e il relativo identificativo posizione **"IUV"** e il bollettino.

[Schermata: Finestra "Esito pubblicazione" con campi: CodiceRiferimentoCreditore, IdentificativoPosizione, Esito (Ok), Messaggio; in background anteprima bollettino PagoPA]

**Esempio bollettino:**

[Esempio di bollettino PagoPA "Avviso di Pagamento" con intestazione Comune di Riccione, Ente Creditore, Destinatario Avviso, Dettagli del pagamento, sezione "Quanto e quando pagare" con importo e scadenza, sezione "Dove pagare", QR Code, Codice CBILL, Codice Avviso, Rata]

Nel documento ora risulterà l'icona che indica l'avvenuta pubblicazione della scadenza.

[Schermata: Elenco documenti con icona di pubblicazione PagoPA evidenziata nella colonna dedicata]

Dopo la pubblicazione dovranno essere effettuate tutte le altre fasi:

- Invio documento analogico (nel caso di ricevuta no iva)
- Creazione flusso (con gli allegati, PDF documento analogico e bollettino PagoPA)
- Firma flusso nel caso di fattura ad Ente Pubblico
- Invio flusso allo SDI

Nel documentale sarà possibile visualizzare tutti gli allegati, stampa PDF analogico, bollettino PagoPA e gli esiti.

Il documento analogico creato sarà integrato con il logo di PagoPA.

[Schermata: Documento analogico con sezione "SCADENZA PAGAMENTI" contenente Rata, Data, Importo, IUV e logo PagoPA]

---

## 5. Regolarizzazione provvisori arricchiti

Dalla gestione provvisori è possibile selezionare la provenienza **"Provvisorio Arricchito"**.

[Schermata: Provvisori di Entrata da Regolarizzare con filtro "Provenienza Provvisorio" impostato su "Provvisori Arricchiti"]

Tasto destro cliccare **"Completa"**.

[Schermata: Menu contestuale con opzioni: Completa, Completa Multiplo, Associa con Scadenziario Attivo, Associa con Documenti in Risc/Liq., Associa con Documenti Assegnati, Assegna Provenienza, Apri Provvisorio, Visualizza, Totale Paginazione]

Cliccare nel bottone **"WS"** per richiamare la procedura E-fil e reperire le informazioni dell'accertamento e del soggetto.

[Schermata: Provvisori da Tesoreria con pulsante "WS" evidenziato]

Il soggetto, per completare il provvisorio, sarà reperito con la seguente priorità:

- Dallo **IUV**, se codificato in anagrafica cliente/fornitore
- Dall'**accertamento** (soggetto generico associato)
- In modo **manuale**, soggetto di default come illustrato di seguito

[Schermata: Finestra "Assegna Soggetto" con campo "Soggetto di Default" e finestra "IMPOSTA SOGGETTO DI DEFAULT" con campi Nominativo, Cod.Pag.Ris, Persona F/G, Soggetto/Ditta Individuale, Soggetto/Beneficiario/Vincolo]

Procedere poi alla conferma.

[Schermata: Provvisori da Tesoreria con dati compilati e pulsante "Conferma" evidenziato]

Elaborare per procedere alla creazione della riscossione e della reversale.

[Schermata: Provvisori di Entrata da Regolarizzare con pulsante "Elab" evidenziato]

[Schermata: Elaborazione movimenti con Parametri di creazione: Riscossione selezionato, Simulazione deselezionato, pulsante "Elabora" evidenziato]

Nel caso in cui nel provvisorio siano presenti più IUV, e ve ne siano alcuni derivanti da procedura di fatturazione attiva, il provvisorio sarà regolarizzato in modo parziale. La procedura produrrà un elenco di documenti, sarà poi premura dell'operatore procedere alla regolarizzazione collegandoli alle assegnazioni presenti in finanziaria.

---

## 6. Regolarizzazione provvisori con documenti entrata

Partendo sempre dalla regolarizzazione del provvisorio, utilizzare **"Associa con documento Assegnato"** o **"Associa con Documento Risc/Liq"**.

[Schermata: Menu contestuale con opzioni "Associa con Documenti in Risc/Liq." e "Associa con Documenti Assegnati" evidenziate]

Ricercare la fattura o la ricevuta con i vari elementi di selezione proposti.

[Schermata: Emissione Reversali con filtri di ricerca: Anno/Progress, Anno/N° accertamento, Cliente, numero e data documento, Area/Settore/Servizio, Tipo Movimento, Data registrazione, Data inserimento, Data scadenza, Data quietanza, Utente inserimento]

Sarà visualizzato il movimento da collegare al provvisorio, cliccare **"seleziona"**.

[Schermata: Emissione Reversali con elenco movimenti e menu contestuale con "Seleziona" e "Seleziona globale"]

Con il documento nella parte inferiore sarà possibile scegliere di creare la sola riscossione o emettere anche la reversale.

[Schermata: Emissione Reversali con pulsanti "Emetti Riscossione" e "Crea Riscossione ed Emetti Reversale" evidenziati]

---

## Rilascio implementazioni al software

La modifica è disponibile a partire dalla **release 7.13 su CWOL – patch del 16.01.2024**.