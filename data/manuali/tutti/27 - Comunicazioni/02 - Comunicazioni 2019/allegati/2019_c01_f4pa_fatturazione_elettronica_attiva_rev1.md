# Fatturazione Elettronica tra Privati e PagoPA

**Comunicazione n. 01/2019**

| Data | Oggetto Revisione | Versione |
|------|-------------------|----------|
| 10-01-2019 | Prima comunicazione | C01/2019 |
| | Revisione | |

**Scopo:** Circolare del 30 aprile 2018 Agenzia delle Entrate (regole tecniche)

---

## 1. Normativa di Riferimento

### 1.1 Fatturazione Elettronica tra Privati

- Legge 205/2017 (legge di bilancio dello stato 2018)
- Circolare del 30 aprile 2018 Agenzia delle Entrate (regole tecniche)

### 1.2 Adesione PagoPA

[https://www.agid.gov.it/it/piattaforme/pagopa/adesione-pa](https://www.agid.gov.it/it/piattaforme/pagopa/adesione-pa)

L'obbligo di fatturazione elettronica viene esteso al B2B dalla manovra dello scorso anno, legge 205/2017, e l'Agenzia delle Entrate ha pubblicato le regole tecniche con la circolare del 30 aprile 2018.

Dall'obbligo di emissione della fattura in formato elettronico sono esonerati solo i soggetti di minori dimensioni che si avvalgono del cosiddetto *"regime di vantaggio"* previsto dall'art. 27 comma 3 del Decreto Legge n. 98/11 o del *"regime forfettario"* previsto dalla Legge n. 190/14.

L'intento del governo di estendere l'obbligatorietà della fatturazione elettronica tra privati a partire dal 2019 rappresenta uno dei più importanti tentativi di lotta all'evasione fiscale. È in effetti questo uno dei motivi fondamentali per i quali l'Italia ha chiesto alla Commissione Europea di poter introdurre nell'ordinamento nazionale l'obbligo di emettere fatture elettroniche anche nel settore privato, come già fatto con successo verso la Pubblica Amministrazione, in parziale deroga a quanto contenuto nella Direttiva 2006/112/CE in materia di IVA.

Ecco con precisione come è stata motivata tale richiesta:

- incrementare capacità dell'Amministrazione Finanziaria di prevenire e contrastare l'evasione fiscale e, soprattutto, le frodi IVA, il cui gap è particolarmente elevato nel nostro paese;
- aumentare la semplificazione fiscale;
- ridurre il numero degli adempimenti fiscali, grazie ad una maggiore quantità di dati a disposizione dell'Amministrazione Finanziaria.

### 1.3 Primo Gennaio 2019

L'emissione della fattura elettronica da opzione diverrà obbligatoria per le operazioni effettuate nei confronti di altri privati e/o titolari di partita IVA, a condizione che le cessioni di beni e le prestazioni di servizi siano poste in essere tra soggetti residenti o stabiliti nel territorio dello Stato.

La fatturazione elettronica consiste nell'utilizzare gli standard previsti per la FatturaPA per tutte le operazioni intercorrenti tra i titolari di partita IVA e la Pubblica Amministrazione, ed ora anche per la formazione (XML), trasmissione e ricezione, tramite il Sistema di Interscambio, della fattura elettronica tra privati e la successiva conservazione digitale per dieci anni.

In caso di inosservanza dell'obbligo di fatturazione elettronica tra gli operatori privati va ricordato che l'eventuale emissione della fattura in formato cartaceo è da ritenersi inesistente e il documento come non emesso.

Dall'obbligo di emissione della fattura in formato elettronico sono esonerati solo i soggetti di minori dimensioni che si avvalgono del cosiddetto *"regime di vantaggio"* previsto dall'art. 27 comma 3 del Decreto Legge n. 98/11 o del *"regime forfettario"* previsto dalla Legge n. 190/14.

Con riferimento alle predette scadenze di decorrenza dell'obbligo di emissione della fattura elettronica si ricorda che, in caso di inosservanza dell'obbligo trovano applicazione le previste dall'articolo 6 del Decreto Legislativo n. 417/97 che dispongono una sanzione amministrativa compresa tra il novanta e il centottanta per cento dell'imposta relativa all'imponibile non correttamente documentato o registrato nel corso dell'esercizio.

---

### 1.3.1 Chi è coinvolto nell'obbligo di fatturazione elettronica?

L'obbligo riguarda tutti i soggetti residenti, stabiliti nel territorio dello Stato, a esclusione solo di coloro che sono in regime di vantaggio e minimi. Rientrano, quindi, nell'obbligo sia le fatture emesse a soggetti IVA (B2B), sia quelle per i consumatori finali (B2C).

### 1.3.2 Quale formato deve essere utilizzato?

Il formato della fattura elettronica deve essere XML conforme all'allegato A del Provvedimento del Direttore dell'Agenzia delle Entrate n. 89757 del 30 aprile 2018, potrà contenere allegati (in forma binaria base 64) e la dimensione massima non deve superare i 5 MB.

### 1.3.3 Come si tramettono le fatture elettroniche a SDI?

I canali che Pal Informatica supporta per trasmettere e ricevere le fatture elettroniche tramite il SdI sono essenzialmente due:

- **FTP**, per poter trasportare più file fino a un massimo di 150 MB (quindi più fatture contemporaneamente);
- **PEC**, che può trasportare più file fino a un massimo di 30 MB (quindi più fatture in una unica PEC).

È utile ricordare che per il primo canale è necessario accreditarsi e sottoscrivere un apposito accordo di servizio con Sogei, nel caso di impiego della PEC non è richiesto l'accreditamento. Gli Enti che intendono attivare il canale FTP possono contattare il supporto scrivendo un'email a f4pa@palinformatica.it con oggetto 'Attivazione canale FTP'.

### 1.3.4 In che modo vengono indirizzate le fatture al cessionario o committente?

Nel processo di fatturazione elettronica tra privati, per inoltrare la fattura elettronica al cessionario/committente occorre valorizzare il tag `<Codice Destinatario>` oppure il campo `<PECDestinatario>`.

**Esempio flusso con Codice Destinatario:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<p:FatturaElettronica xsi:schemaLocation="http://ivaservizi.agenzia...
http://www.fatturapa.gov.it/export/fatturazione/sdi/fatturapa/...
xmlns:p="http://ivaservizi.agenziaentrate.gov.it/docs/xsd/fatture/v1.2">
  <FatturaElettronicaHeader>
    <DatiTrasmissione>
      <IdTrasmittente>
        <IdPaese>IT</IdPaese>
        <IdCodice>01234567890</IdCodice>
      </IdTrasmittente>
      <ProgressivoInvio>00001</ProgressivoInvio>
      <FormatoTrasmissione>FPA12</FormatoTrasmissione>
      <CodiceDestinatario>AAAAAA</CodiceDestinatario>
    </DatiTrasmissione>
    <CedentePrestatore>
      <DatiAnagrafici>
        <IdFiscaleIVA>
          <IdPaese>IT</IdPaese>
          <IdCodice>01234567890</IdCodice>
        </IdFiscaleIVA>
```

**Esempio flusso con PEC:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<p:FatturaElettronica xsi:schemaLocation="http://ivaservizi.agenziaentrate...
http://www.fatturapa.gov.it/export/fatturazione/sdi/fatturapa/v1.2/S...
xmlns:p="http://ivaservizi.agenziaentrate.gov.it/docs/xsd/fatture/v1.2">
  <FatturaElettronicaHeader>
    <DatiTrasmissione>
      <IdTrasmittente>
        <IdPaese>IT</IdPaese>
        <IdCodice>01234567890</IdCodice>
      </IdTrasmittente>
      <ProgressivoInvio>00001</ProgressivoInvio>
      <FormatoTrasmissione>FPR12</FormatoTrasmissione>
      <CodiceDestinatario>0000000</CodiceDestinatario>
      <PECDestinatario>betagamma@pec.it</PECDestinatario>
    </DatiTrasmissione>
    <CedentePrestatore>
      <DatiAnagrafici>
        <IdFiscaleIVA>
          <IdPaese>IT</IdPaese>
          <IdCodice>01234567890</IdCodice>
        </IdFiscaleIVA>
```

Si ricorda che le pubbliche amministrazioni hanno i codici ufficio di fatturazione elettronica (Codice Destinatario) di **6 posizioni** mentre tutte le altre aziende/Enti hanno un codice destinatario di **7 posizioni**.

### 1.3.5 Consumatore finale senza PEC e codice destinatario?

In questi casi si inserisce il solo codice convenzionale **"0000000"** e SDI rende disponibile la fattura elettronica al cessionario/committente nella sua area riservata del sito web dell'Agenzia delle Entrate, rilevando però che, se quest'ultimo è un consumatore finale, si dovrà recapitare una copia informatica oppure analogica della fattura elettronica.

### 1.3.6 Come si aggiorna sull'anagrafico clienti la modalità di invio delle fatture?

Sull'anagrafico clienti devono essere specificate le modalità di comunicazione che il singolo cliente ha scelto per la ricezione delle fatture elettroniche e che ha espressamente comunicato all'Ente. La scelta va inserita selezionando il cliente da aggiornare e quindi l'icona **Uff.F.E.** presente nella tool bar del cliente.

[Immagine: Anagrafica Soggetti con icona Uff.F.E. evidenziata nella toolbar]

La funzione consente di selezionare una delle 4 modalità di comunicazione possibili.

Si fa presente che il codice ufficio di fatturazione assegnato ai privati è di **7 posizioni**, mentre quello assegnato agli EE/PP è di **6 posizioni**.

- La prima opzione (**FPA12**) è riservata alle pubbliche amministrazioni e richiede il codice ufficio.
- Le altre opzioni (**FPR12**) sono riservate ai privati che hanno accreditato il canale, richiesto l'invio delle fatture tramite PEC o che non hanno fatto nessuna richiesta.

[Immagine: Tabella Uffici per Fatturazione Elettronica con opzioni FPA12, FPR12, Consumatore finale]

Contestualmente all'aggiornamento delle modalità di invio della fattura a SDI si consiglia di aggiornare anche le eventuali modalità di comunicazione diretta tra Ente e cliente presente nella form di residenza.

In tale form può essere inserito l'indirizzo mail del cliente o la PEC.

In futuro il programma di fatturazione attiva contestuale userà questi indirizzi mail per l'invio della fattura cartacea al cliente che è un consumatore finale e non ha indicato nessun canale per l'invio delle fatture elettroniche.

[Immagine: Form di residenza con campi Indirizzo e-mail e E-mail PEC evidenziati]

### 1.3.7 Tutti i clienti privati che non hanno indicato nessun canale, vanno aggiornati manualmente?

Dato che nella maggior parte dei casi i destinatari delle fatture saranno consumatori finali che non hanno inviato nessuna comunicazione, la PAL ha creato una funzione per l'inserimento automatico della tipologia 'consumatore finale privo di canale e di PEC'.

La funzione si trova nel menu delle funzioni di servizio **distribuita con la patch del 10.01.2019**.

[Immagine: Menu Utility - Anagrafica clienti fornitori - Genera albo uffici per fatturazione attiva]

La funzione presenta la videata con i seguenti parametri di selezione.

Per accedere al programma l'operatore deve avere l'autorizzazione **BTA/19**.

[Immagine: Utility Genera albo uffici per fatturazione attiva con parametri di selezione]

Su tutti i clienti, per i quali non è stata inserita nessuna modalità di comunicazione con SDI, viene creata automaticamente la modalità **Utente Finale**, quindi le fatture elettroniche emesse saranno inviate con il codice Ufficio Destinazione uguale a **'0000000'** come indicato al punto 4.

Sull'anagrafico clienti la form sarà compilata come sotto indicato:

[Immagine: Tabella Uffici per Fatturazione Elettronica con Consumatore finale selezionato e Codice Ufficio 0000000]

Nel momento in cui il cliente comunicherà una modalità diversa la situazione deve essere aggiornata manualmente.

### 1.3.8 Cosa ha fatto Pal Informatica per la fatturazione attiva e PagoPA?

Pal Informatica ha realizzato il modulo di fatturazione elettronica **'F4PA_Entrate'** in ambiente web sulla suite Cityware.Online che permette di assolvere agli obblighi di fatturazione elettronica tra PA e privati ed è compliance con PagoPA per la pubblicazione delle richieste di pagamento sul nodo.

Il nuovo modulo di fatturazione **F4PA_Entrate**, all'interno della suite Cityware.Online, assolve alle funzioni di calcolo della fattura e registrazione della stessa sulla contabilità IVA dell'Ente, gestendo in maniera univoca la numerazione dei documenti per tutti i verticali della suite stessa: (esempio City Fee, Fiera e Mercati) e tramite flussi concordati l'importazione da altri moduli che generano fatture attive.

[Diagramma: F4PA Attiva - Moduli coinvolti: Modulo City Fee SAD/affitti etc, Gestione fiere e mercati, Entrate da Financing, Fatture da City Tax → Calcolo e generazione fattura]

[Diagramma: Flusso architetturale - Moduli Fee, Fiere e mercati, Financing, TAX → Genera fattura → XML → SDI; Genera fattura → PDF; Genera fattura → IVA, Repository, Riscossione, Scadenza IUV, Portal]

### 1.3.9 Come attivare il modulo di fatturazione F4PA_Entrate integrata con PagoPA?

Per l'attivazione sono stati predisposte delle slide che illustrano il percorso da seguire; la procedura può essere attivata sia:

- per l'invio a SDI delle fatture emesse a privati e pubbliche amministrazioni
- per la pubblicazione delle scadenze di pagamento a PagoPA.

In sintesi procedere come di seguito:

1. Verificare adesione al progetto PagoPA. La suite di Cityware.Online (CWOL) è integrata con i servizi messi a disposizione da E-Fil.
2. Verificare i servizi interni dell'Ente per i quali è stata richiesta l'adesione a PagoPA. Esempio estratto da un contratto E-fil Ente.

[Immagine: Tabella "Servizi di Incasso Implementati" con elenco servizi: Violazioni codice della strada, Diritti di segreteria, Canoni locazione orti urbani, Concessioni cimiteriali, Tariffe cimiteriali, Diritti funebri, Alloggiamenti temporanei, Bando casa, ecc.]

3. Per ogni servizio di PagoPA verificare il modulo interno utilizzato per la pubblicazione di pagamento e la modalità di rendicontazione al cliente; in caso di rendicontazione con fattura la modalità utilizzata e come viene inviata a SDI.
4. Produrre un riepilogo dei servizi interni che devono inviare le fatture a SDI e la pubblicazione degli avvisi di pagamento. Vedi esempio allegato in calce.
5. In base al risultato del censimento individuare quali entrate vanno gestite con i moduli di City Fee e/o F4PA_Entrate. Se la gestione dell'entrata non è informatizzata valutare la possibilità di gestione con i moduli F4PA_Entrate o City Fee.
6. Richiedere l'installazione o l'aggiornamento della suite Cityware.Online pianificando le attività con il commerciale di riferimento.
7. In funzione ai moduli di Cityware utilizzati (Fee, F4PA_Entrate) pianificare la formazione e l'attivazione.
8. Se l'Ente emette fatture attive in esenzione di IVA si ricorda l'applicazione del bollo virtuale sui documenti emessi. (Vedere precedente comunicazione n. 3/2018 e n. 7/2018 disponibile su cloud.apra.it)
9. Verificare l'impostazione dei numeratori delle fatture emesse.

### 1.3.10 Ai fini della riconciliazione degli incassi cosa devo fare prima di emettere un avviso di pagamento o fattura con PagoPA?

Gli automatismi per la riconciliazione degli incassi sono previsti solo se si usa **E-fil** come provider di PagoPA.

Per usufruire della riconciliazione degli incassi sugli accertamenti in modo automatico per i soli versamenti che i clienti fanno tramite PagoPA occorre prima definire il **catalogo degli accertamenti** sull'ambiente web di PagoPA e in un secondo momento associare gli accertamenti del catalogo con i servizi di riscossione attivati con E-fil, vedi tabella al punto 9.

Quest'operazione può essere fatta sull'ambiente web di PagoPA o direttamente su Cityware.

Per l'operatività sul portale PagoPA di E-fil fare riferimento al manuale apposito: 'SV-M003-P049-01-SpecificaWebServiceP_PGestioneFinanziaria-v02' prodotto da E-fil.

### 1.3.11 Cosa ha fatto PAL per agevolare la gestione del catalogo accertamenti presenti sul portale PagoPA di E-fil?

Al fine di agevolare la gestione del catalogo sull'applicativo Cityware nella gestione degli accertamenti è possibile aggiornare anche il catalogo E-fil selezionando dapprima l'accertamento interessato agli incassi di PagoPA quindi l'icona **Acc.EFIL**.

La funzione Acc.EFIL richiama i servizi esposti sul portale PagoPA che consentono dapprima di inserire l'accertamento nel catalogo di E-fil quindi includere l'accertamento in uno dei servizi di riscossione attivati sul portale.

[Immagine: Gestione Accertamenti Cityware con icona Acc.EFIL evidenziata nella toolbar]

Una volta selezionata l'icona Acc.EFIL appare la seguente videata:

[Immagine: Associazione accertamenti ai Servizi di Incasso con elenco servizi disponibili e checkbox per assegnazione]

Le operatività per attivare la funzione quindi inserire gli accertamenti nel catalogo sono illustrate nel filmato 'Provvisori arricchiti Catalogo' e richiamabile da link su wiki. (filmato in sede di produzione)

Si ricorda che l'**End point** da mettere sulle configurazioni iniziali, sia per l'arricchimento che per la gestione del catalogo, va richiesto ad E-fil.

[Immagine: Configurazione endpoint - Endpoint x Arricchimento Flussi, Id Applicazione, Codice Ente, Endpoint Gestione Catalogo]

### 1.3.12 Come si fa a consultare la documentazione filmata su wiki?

All'indirizzo [http://wikidev.apra.it/itaguide/doku.php?id=guide:area-economico-finanziaria:start](http://wikidev.apra.it/itaguide/doku.php?id=guide:area-economico-finanziaria:start) potete consultare tutta la documentazione filmata suddivisa per i vari moduli e funzione della finanziaria.

### 1.3.13 Per la fatturazione attiva (F4PA attiva) cosa posso continuare a fare sull'applicativo Cityware (CW)?

La gestione dei tipi di movimento e delle voci di fatturazione è utilizzabile sia nell'applicativo CW che CWOL.

Il programma di fatturazione attiva presente sulla suite Cityware è utilizzabile nel modo attuale senza il collegamento con il portale PagoPA e senza la possibilità di inviare a SDI le fatture emesse a privati.

### 1.3.14 Per la fatturazione attiva (F4PA attiva) che cosa è disponibile solo sull'applicativo Cityware.Online (CWOL)?

Le funzioni che seguono sono disponibili solo sul nuovo programma presente su CWOL, tali funzioni sono utilizzabili sia dall'emissione di fatture in modo contestuale all'interno del modulo Financing che richiamabile a servizi da verticali all'interno della suite di Cityware che esterni.

Tali funzioni sono:

- la creazione e pubblicazione delle scadenze sul portale PagoPA
- la stampa dell'avviso di pagamento con i riferimenti allo IUV per la pagabilità sui circuiti abilitati
- l'invio delle fatture emesse a privati attraverso il canale SDI
- il salvataggio del documento emesso su repository locale Alfresco per la successiva consultazione ed invio in conservazione
- per i moduli applicativi diversi da city financing i servizi di:
  1. aggiornamento anagrafica unica archivio clienti o inserimento nuovo soggetto
  2. calcolo fattura e/o ricevuta e restituzione dati contabili del documento generato
  3. numerazioni fatture
  4. gestione registri IVA
  5. invio fatture a SDI con o senza firma digitale
  6. creazione del testo fattura in formato pdf e salvataggio su alfresco
  7. restituzione del testo della fattura in pdf su layout predefinito per l'invio al cliente
  8. invio diretto al cliente con le modalità indicate sull'anagrafico (dalla versione 1.2)

### 1.3.15 Come si fa ad emettere un avviso di pagamento con le scadenze pubblicate su PagoPA?

La modalità operativa è documentata nel supporto filmato 'Emissione avviso di pagamento con PagoPA' presente sul sito (filmato in sede di produzione).

**Come si fa ad emettere una fattura ad un privato?**

La procedura è documentata nel supporto filmato 'Inserimento Fattura' presente sul sito: [http://wikidev.apra.it/itaguide/doku.php?id=guide:area-economico-finanziaria:start](http://wikidev.apra.it/itaguide/doku.php?id=guide:area-economico-finanziaria:start)

Nella release 1 del modulo F4PA_attiva contestuale devono essere richieste in modo manuale selezionando le opzioni sulla side bar le funzioni di:

- Pubblicazione sul portale PagoPA dell'avviso di pagamento o Fattura e restituzione IUV
- Stampa ricevuta e bollettino PagoPA per le date di scadenza
- Firma digitale della fattura indirizzata ad una Pubblica amministrazione
- Invio a SdI

[Immagine: Interfaccia CWOL Documenti Fatturazione Entrate con side bar contenente pulsanti: PagoPA pubblica, PagoPA bollettini, Crea flusso SDI, Firma, Invio]

### 1.3.16 I documenti emessi da CWOL sono visibili e gestibili da CW?

Sì. I due applicativi utilizzano lo stesso database quindi i documenti emessi su CWOL possono essere riscossi tramite le funzioni di arricchimento provvisori presenti su CW che consentono di creare automaticamente la riscossione ed emettere reversale di incasso.

Per l'operatività vedere apposito manuale.

Si ricorda che per le operatività su CWOL le autorizzazioni utenti sono gestite da CW.

### 1.3.17 Quando ho attivato CWOL da dove effettuo il cambio password per gli utenti?

Al momento dell'installazione di CWOL gli utenti di CW vengono trasferiti anche su CWOL con l'accesso ai menù predefiniti.

Il cambio password dei singoli utenti deve essere effettuato tramite le funzioni presenti su CWOL affinché i due ambienti vengano aggiornati contemporaneamente.

### 1.3.18 Come devono essere numerate le fatture emesse da CWOL?

La numerazione delle fatture emesse deve essere progressiva e non è possibile inviare al Sistema di Interscambio (SDI) più fatture che presentino lo stesso numero (es: due fatture con numero "1").

Qualora l'Ente emetta fatture su più settori IVA la registrazione delle fatture sul registro IVA deve corrispondere al numero di fattura emessa (all'interno del tipo movimento utilizzare **"modalità 2"**) quindi occorre definire delle numerazioni progressive seriali utilizzando numeratori con la "barra".

**Esempio:**

L'Ente emette fatture attive su tre settori rilevanti ai fini IVA:

- Trasporti (T)
- Parcheggi (P)
- Affitti (A)

Le fatture dei tre settori saranno così numerate:

| Settore | Numeratore IVA | Numero fatture e Registro IVA |
|---------|---------------|-------------------------------|
| Trasporti | ../T | 1/T, 2/T, .., n/T |
| Parcheggi | ../P | 1/P, 2/P, .., n/P |
| Affitti | ../A | 1/A, 2/A, .., n/A |

### 1.3.19 Esempio Fattura Attiva in regime Split Payment verso la pubblica amministrazione

Verrà esaminato il caso in cui un ente deve emettere una fattura per affitto di un impianto sportivo ad un Comune limitrofo, per un importo di 1000 euro + 220 euro di IVA (in regime split payment).

#### Fase 1: Selezione tipo movimento

La prima fase richiede di selezionare il tipo movimento, di indicare il settore IVA e la data di emissione della fattura.

[Immagine: Gestione Documenti Fatturazione Entrate - Tipi Movimento per Utenza con elenco: Impianti sportivi (FATTURA), Impianti sportivi (compens), Fattura Emessa, ecc. Parametri di ricerca: Tipo documento Fatt. Entrate, Settore IVA 02 - IMPIANTI SPORTIVI, Ufficio destinatario (SDI) 11 - ESORRR Comune di ancona - rag, Codice Utente CED, Data documento 21/06/2019]

Premendo sul tasto **'Avanti'**, si richiede l'inserimento del cliente, della modalità di riscossione e dell'ufficio destinatario SDI per l'invio della fattura.

È possibile inserire ulteriori voci o modificare quella già collegata al tipo movimento selezionato.

In automatico, essendo la fattura emessa verso un ente pubblico, il programma imposta il tipo IVA come **split payment**, come evidenziato in figura.

[Immagine: Dettaglio Documento - Cliente: COMUNE DI ANCONA, P.IVA 00351640423, Persona Giuridica; Modalità riscossione: 16 - 101 Contanti con scadenzario; Ufficio destinatario SDI: 11 - ESORRR Comune di ancona - rag; Elenco Voci: Proventi utilizzo impianti sportivi - IVA 22%, Quantità 1, Importo unitario 1.220,00, IVA 22%, Importo 1.220,00; Tipo Iva: Split; Totale Imponibile 1.000,00; Totale IVA 220,00; Totale documento 1.220,00]

#### Fase 2: Generazione fattura analogica

Una volta inseriti tutti i dati necessari alla compilazione della fattura, premendo sul tasto **'Aggiungi'**, si genera la fattura in formato analogico.

[Immagine: Fattura analogica - Comune di [oscurato], Provincia di AN, Piazza Carducci 4; Tipo Documento: Fattura; Numero Documento: 68/2; Data Documento: 21-06-2019; Esercizio: 2019; Ragione Sociale: COMUNE DI [oscurato]; Descrizione: Proventi utilizzo impianti sportivi - IVA 22%; Q.tà: 1,00; Prezzo unitario: 1.220,00; Imponibile: 1.220,00; Cod. IVA: A-22; Assoggettamento IVA: A - IVA Normale (Split Payment - Art. 17 ter D.P.R. 633/1972); Imponibile: 1.000,00; IVA: 22; Imposta: 220,00; Totale Imponibile: 1.000,00; Totale Imposta: 220,00; Bolo: Esente da bollo; TOTALE DOCUMENTO: 1.220,00; TOTALE DA PAGARE: 1.000,00; SCADENZA PAGAMENTI: Rata 1 - 30-07-2019 - 500,00; Rata 2 - 29-08-2019 - 500,00]

#### Fase 3: Verifica in Cityware

Andando in Cityware, nella sezione 'documenti entrate', selezionando la voce **'solo movimenti fatturazione attiva'** è possibile visionare la fattura creata in Cityware Online.

[Immagine: Documenti Entrata - filtro "Includi Movimenti: Movimenti Solo Fatturazione Attiva"]

La fattura creata precedentemente, documento **2019/1081**, evidenziata in rosso, ha l'allegato della fattura creata ed è stata salvata all'interno di Alfresco.

[Immagine: Elenco Documenti Entrata con documento 2019/1081 evidenziato - Proventi utilizzo impianti sportivi, Importo Lordo 1.220,00, Saldo da Riscuotere 1.220,00]

#### Fase 4: Scheda IVA

Andando sulla scheda IVA del documento di entrata creato, l'IVA risulta compilata automaticamente sul settore impianti sportivi.

[Immagine: Scheda IVA - Settore IVA: 02 IMPIANTI SPORTIVI; Registro Vendite; Riga 1: Imponibile 1.000,00, Aliq 22, Importo IVA 220,00, Descrizione: IVA SPLIT VENDITE]

#### Fase 5: Assegnazione imponibile

Nella scheda **'Assegnazione'**, si crea in automatico l'assegnazione per l'importo imponibile pari a **€1.000**, essendo l'IVA in split.

[Immagine: Scheda Assegnazione - Area-Settore-Servizio: 04 02 02 00 U.O.C. ECONOMATO E PROVVEDITORATO; Esito Assegnazione: Inviata; Accertamento: 2019 00026; Imp. Assegnato/Filtri: 1.000,00; Tot Assegnato: 1.000,00]

#### Fase 6: Assegnazione IVA split

A questo punto, va creata un'assegnazione pari a **€220**.

[Immagine: Scheda Assegnazione - Area-Settore-Servizio: 04 02 02 00 U.O.C. ECONOMATO E PROVVE; Accertamento: 2019 00026; Meccan. - Voce di Bilancio: 3010100 3101 01 012; Piano Finanziario: 3 1 1 1 999 Proventi da vendita di beni n.a.c.; IMPORTO ASS.: 220,00; Da Riscuotere: 220,00]

#### Fase 7: Riscossione intestata all'Agenzia delle Entrate

Successivamente, va creata una riscossione, intestata all'**Agenzia delle Entrate**, la cui reversale dovrà andare a compensare il mandato di pagamento, anche questo intestato all'Agenzia delle Entrate.

[Immagine: Scheda Riscossione - Accertamento: 2019 00026; Meccan. - Voce di Bilancio: 3010100 3101 01 012; Codice Bollo: 26 Bollo a Carico dell'Ente (x Tesor); Piano Finanziario: 3 1 1 1 999 Proventi da vendita di beni n.a.c.; Importo Riscossione: 220,00]

Il beneficiario deve essere cambiato, inserendo **Agenzia delle Entrate** ed inserendo come modalità di incasso **COMPENSAZIONE**.

[Immagine: Dati Contabili - Versante-Delegato: 2316 AGENZIA DELLE ENTRATE, P.IVA 06363391001; Modalità Incasso: 3 20 COMPENSAZIONE]

#### Fase 8: Importazione provvisorio dal Tesoriere

Il Tesoriere ha inviato il provvisorio da regolarizzare per l'importo di € 1.000, quando viene importato il flusso, lo stesso verrà visualizzato nell'elenco sottostante.

[Immagine: Provvisori di Entrata da Regolarizzare - Provvisorio 51426/E, Anno/Prog: 2019 4420, Data: 01-02-2019, Causale: Atto palazzetto, Anagrafico: COMUNE DI [oscurato], Lordo Regolarizzato: 1.000,00]

#### Fase 9: Associazione provvisorio

Premendo tasto destro, selezionando **'Associa con Documenti Assegnati'**, è possibile associare il provvisorio con i documenti assegnati.

[Immagine: Menu contestuale con opzione "Associa con Documenti Assegnati" evidenziata]

Si apre la seguente schermata, dove vengono riportate le assegnazioni create in fase di inserimento della fattura.

[Immagine: Emissione Reversali - Due assegnazioni: 2019 1081/423 COMUNE DI ANCONA 68/2 Proventi utilizzo impianti sportivi Importo 1.000,00 Accertamento test NF; 2019 1081/423 COMUNE DI ANCONA 68/2 Proventi utilizzo impianti sportivi Importo 220,00 Accertamento test NF; Provvisorio da Tesoreria: Anno/N° 2019 4420 del 01-02-2019 Importo 1.000,00; Da Regolarizzare: 1.000,00]

Trascinando in basso l'assegnazione relativa al provvisorio e premendo il tasto **'emetti reversale'**, si emette la reversale pari a € 1.000.

[Immagine: Emissione Reversali - Assegnazione trascinata in basso (1.000,00); Dialogo Emissione Reversali: Modo emissione Reversali: 5 - Ogni Accertamento, Beneficiario e Modalità di...; Data emissione: 21-06-2019; Reversale: Giacconto]

La reversale creata è la **n.11**.

[Immagine: Gestione Reversali - Reversale n. 11, Data Emiss: 21-06-2019, Importo reversale: 1.000,00, Descrizione Ordinato: Documento Nr. 68/2 del 21-06-2019 Proventi utilizzo impianti sportivi, Conto (S/Stanze): 1C, Num. Imp. Acc.: 2019 / 00026 Accertamento test NF, Totale Impagato e Categoria: 3.01.00 3101.01.012 PROVENTI VENDITA BENI MOBILI DE; Riscossione: 2019 1081 2 423 COMUNE DI ANCONA 68/2 Proventi utilizzo impianti sportivi Importo 1.000,00]

#### Fase 10: Mandato a compensazione IVA split

Va fatto un mandato a compensazione per l'importo pari a **€ 220** (IVA split).

Deve essere preso un impegno sul piano finanziario **1.10.3.1.1.** 'Versamento IVA a debito per le gestioni commerciali'.

L'impegno può essere preso a totale per tutto lo split generato da fatture di vendita ad altri Enti, previsto nell'anno. Nell'esempio, l'importo è pari a € 50.000:

[Immagine: Dettaglio Impegno - Impegno (anno/N°): 2019 00210; Voce di Bilancio: 0103110 0103 19 130 IVA A DEBITO; Tipo impegno: O IMP. PER SPESA OBBLIGATORIA; Oggetto: Versamento iva split commerciale verso altri Comuni; Importo iniziale: 50.000,00; Piano Finanziario: 1 10 3 1 1 Versamenti IVA a debito per le gestioni commerciali]

#### Fase 11: Documento di spesa con liquidazione diretta

Bisogna inserire un documento di spesa con liquidazione diretta, intestato all'Agenzia delle Entrate, pari a € 220.

[Immagine: Testata Documenti - Tipo Documento: 5 Liquidazioni Dirette (Finanz & Co. Ana); Importo Lordo: 220,00; Saldo: 220,00; Tipo Documento Spesa: Analogico; Beneficiario: 2316 AGENZIA DELLE ENTRATE, P.Iva 06363391001; Mod. di Pagamento: 4 91 Compensazione]

La liquidazione diretta è effettuata sull'impegno **2019/210** sul piano finanziario **1.10.3.1.1.**

[Immagine: Liquidazione - Impegno: 2019 00210 Versamento iva split commerciale verso; Meccan. - Voce di Bilancio: 0103110 0103 19 130; Piano Finanziario: 1 10 3 1 1 Versamenti IVA a debito per le gestioni commerciali; Importo Liquidazione: 220,00; Ritenute: 0]

#### Fase 12: Emissione mandato

Posizionarsi nella sezione **'Emissioni Mandati'** e viene emesso il mandato per l'importo di € 220.

[Immagine: Emissione Mandati - Mandato: 2019 1/052316 AGENZIA DELLE ENTRATE 21-06-2019 Iva split affitto impianto sportivo Importo 220,00 2019 / 00210 0,00 Versamento iva split comm; Dialogo Emissione Mandati: Modo emissione Mandati: 0 - Ogni Liquidazione; Notifica: Emessi mandati dal n. 12 al n. 12]

Il mandato creato è il **n. 12**.

#### Fase 13: Reversale d'incasso a compensazione

Bisogna creare la reversale d'incasso per € 220 a compensazione nei confronti dell'Agenzia delle Entrate.

In maniera analoga alla spesa, nella sezione **'Emissione Reversali'**, selezionare il documento **2019-1081** creato in precedenza.

La reversale creata è la **n. 12**.

[Immagine: Emissione Reversali - Selezione documento 2019 1081/1 PALITALSOFT SRL 62/2 Proventi utilizzo impianti sportivi Importo 91,50; Dialogo: Modo emissione Reversali: 5 - Ogni Accertamento, Beneficiario e Modalità di...; Notifica: Emesse reversali dal n. 12 al n. 12; Totale riscossione selezionato: 220,00]

#### Fase 14: Compensazione mandato con reversale

Prima di inviare la reversale al Tesoriere, va effettuata la compensazione del mandato con la reversale.

Per effettuare questo passaggio, bisogna andare in **'Gestione mandati'**.

Selezionare il mandato da compensare e sulla testata del mandato, tasto destro e selezionare **'compensazione'**.

[Immagine: Gestione Mandati - Mandato n. 12, Data Emiss: 21-06-2019, Importo mandato: 220,00, Descrizione Ordinato: Iva split affitto impianto sportivo, Conto (S/Stanze): 1C, Num. Imp. Acc.: 2019 / 00210; Menu contestuale con "Compensazione Ordinati" evidenziato]

Il programma per la gestione della compensazione propone tutte le reversali che hanno stesso beneficiario del presente nel mandato.

[Immagine: Compensazione Ordinati - Ordinati da Selezionare: N. 12, Data: 21-06-2019, Descrizione Reversale: Documento Nr. 68/2 del 21-06-2019 Proventi utilizzo impianti sportivi, Nominativo Intestatario/Delegato: 2316 AGENZIA DELLE ENTRATE / COMUNE DI ANCONA, Importo Reversale: 220,00; Beneficiario: 2316; Importo Ordinato: 220,00; Totale Movimenti: 0; Differenza: 220,00; Pulsante "Conferma Compensazione"]

La compensazione si effettua spostando nel riquadro inferiore la reversale e premendo sul tasto **'Conferma compensazione'**.

---

## Allegato 1 (fac simile rilevazioni servizi interni con entrate proprie)

| AREA | SERVIZIO | TIPOLOGIA RISCOSSIONE | NR. MOV ANNUALI | INFORMATIZZATO (SI/NO) | SERVIZIO RILEVANTE IVA (SI/No) | MODULO SOFTWARE | PAGO PA (SI/NO) | NOTE | AZIONI | ATTIVAZIONE PAGO PA |
|------|----------|----------------------|-----------------|----------------------|-------------------------------|-----------------|-----------------|------|--------|---------------------|
| DEMOGRAFICI | ANAGRAFE | RILASCIO CARTA IDENTITA' | | | | | | | | |
| SERVIZI ALLA PERSONA | SDI | MENSA | | | | | | | | |
| | | TRASPORTO | 3.000 | SI | Corrispettivo | FEE | SI | | | |
| | | ASILO | 2.400 | SI | Fattura | FEE | SI | | | |
| | | AFFITTI | | | | | | | | |
| | | CORSI EXTRASCOLASTICI | | | | | | | | |
| | | SOGGIORNI STAGIONALI | | | | | | | | |
| | | IMPIANTI SPORTIVI | 200 | SI | Fattura Attiva | FINANCING | NO | | Attivare PagoPA | SI |
| | | TEATRI (ABBONAMENTI) | | | | | | | | |
| | | MUSEI (ABBONAMENTI) | | | | | | | | |
| | SSA | ASSISTENZA DOMICILIARE | | | | | | | | |
| | | CASE RIPOSO | | | | | | | | |
| CONTABILE | | | | | | | | | | |
| ENTRATE TRIBUTARIE | TRIBUTI | OCCUPAZIONE SUOLO PUBBLICO | | | | | | | | |
| | | DIRITTI DI AFFISSIONE | | | | | | | | |
| | | ACCERTAMENTI | | | | | | | | |
| | | GESTIONE COATTIVO | | | | | | | | |
| | | MERCATI E FIERE | | | | | | | | |
| | | PASSI CARRAI | | | | | | | | |
| POLIZIA MUNICIPALE | VV.UU. | INFRAZIONI | | SI | | | | | | |
| UFFICIO TECNICO | URBANISTICA | DIRITTI DI TRANSITO | | | | | | | | |
| | | DIRITTI PRATICHE SISMICHE | | | | | | | | |
| | | CONCESSIONI SPAZI AREE PUBBLICHE | | | | | | | | |
| | | ONERI CONCESSIONI | | | | | | | | |
| | LL.PP. | ONERI URBANIZZAZIONE | | | | | | | | |
| SUAP | SUAP | DIRITTI SUAP | | | | | | | | |
| SEGRETERIA | SEGRETERIA | DIRITTI DI SEGRETERIA | | | | | | | | |
| | | DIRITTI DI ROGITO | | | | | | | | |
| CIMITERI | | ACQUISTO LOCULI | | | | | | | | |
| | | CONCESSIONI CIMITERIALI | | | | | | | | |
| | | LUCI VOTIVE | | | | | | | | |
| BIBLIOTECA | BIBLIOTECA | SERVIZI BIBLIOTECARI | | | | | | | | |
| ALTRO | | DIRITTI DI ISTRUTTORIA | | | | | | | | |
| | | SANZIONI AMMINISTRATIVE | | | | | | | | |
| | | RECUPERI | | | | | | | | |

---

### 1.3.19.1 Rilascio implementazioni al software (titolo4)

La modifica è disponibile a partire dalla **release 7.11 su CWOL – patch del 25.01.2023**

| EVENTUALI VINCOLI: | |
|---|---|
| | |

| EVENTUALI CRITICITÀ: | |
|---|---|
| | |