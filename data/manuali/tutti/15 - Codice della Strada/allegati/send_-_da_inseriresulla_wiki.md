# SEND - CDS: Invio digitale notifiche

## Introduzione

### SEND

SEND - Servizio Notifiche Digitali - (anche nota come Piattaforma Notifiche Digitali) nasce per innovare la comunicazione tra Stato e cittadini. Il servizio offre agli enti pubblici un sistema più efficiente e sicuro di invio delle comunicazioni, sollevando le amministrazioni dalla gestione dell'intero processo di notificazione. Gli enti mittenti devono solo depositare l'atto da notificare sulla piattaforma che si occuperà dell'invio, per via digitale o analogica.

## Attivazione

### Parametri

Per l'attivazione degli invii SEND su CDS, sono necessari i seguenti parametri da impostare nella sezione **Parametri Ente -> Impostazioni -> Parametri PagoPA**:

| # | Parametro | Valore |
|---|-----------|--------|
| 27 | ATTIVASEND | 1 |
| 28 | ANNOEMI_SEND | 2024 |
| 29 | NUMEMI_SEND | 3 |
| 30 | IDBOL_SERE | 71 |

- **ATTIVASEND**: Parametro di attivazione funzioni
- **ANNOEMI_SEND**: Parametro anno emissione (Va configurata sul Manager pagamenti)
- **NUMEMI_SEND**: Parametro numero emissione (Va configurata sul Manager pagamenti)
- **IDBOL_SERE**: Parametro IDBOL_SERE (Va configurata sul Manager pagamenti)

## Funzionamento

### Creazione verbali

Per poter spedire un verbale con Send sono indispensabili i seguenti dati:

- Cognome
- Nome
- Codice Fiscale
- Indirizzo (Via – Comune – Cap)
- PEC ove disponibile.

### Stampe verbali

#### Selezione Verbali – Generazione Flusso

Dopo aver attivato il parametro SEND, nella scheda "Stampe Verbali" comparirà il tasto **"Genera Flusso SEND"**.

Il tasto in questione servirà per la generazione di flussi PND.

[Schermata: Scheda "Stampe Verbali" con filtri di ricerca (Tipo Verbale, Nazione, Targa, Articolo, Punti, Cancellati, Anno, Serie, Data Inizio/Fine Infrazione, Città, PEC, Nazione) e griglia dei verbali selezionabili. A destra è visibile il pulsante "Genera Flusso SEND" evidenziato in rosso.]

### Scheda Flusso

La scheda Flusso è arricchita da nuove funzioni specifiche per l'utilizzo SEND.

Per iniziare, sono presenti diversi tasti funzione:

[Schermata: Scheda "Genera Flusso" con intestazione (Identificativo File, Anno, N. Record, Annullati, Data Trasmissione, Importa IUN, Importa CIP) e griglia con colonne Prog, N. Reg. verbale, Anno, N. Record, Cognome, Nome, C.F., Data Notifica, Tipo Notifica, IUN, Token, Note. A destra i pulsanti: Genera PDF, Firma Doc SEND, Trasmetti SEND, Annulla Flusso, Stampa Flusso, Chiudi Flusso.]

- **Stampe SEND**: Prepara pdf dei verbali e dei bollettini in formato PDF/A

  > **N.B.** La generazione dei verbali segue le regole impostate su **Parametri Ente -> Parametri FastMail**. I Modelli bollettino dovranno essere selezionati in questa pagina (Selezionare **"Bollettino PPA"** per utilizzo SEND).

  È anche possibile dividere i pdf in cartelle separate con la spunta **"Non dividere zip pdf per verbale"**.

[Schermata: Pannello di configurazione stampa con campi: Specifica Data Postalizzazione, Fissa Pag. CCP, Campo Ordine, PEC, Allega anche file pdf nella pec, "Non dividere zip pdf per verbale" (evidenziato in rosso), Non Allegare Bollettino PEC. Sotto: Parametri Ricerca ZIP con Offset Orizzontale/Verticale, Modello (PPPT), Cod. Modelli Punti, Bollettino (PPA - AVVISO ANALOGICO PAG), Impagina per (FronteRetro).]

- **Firma Doc SEND**: Permette di firmare i documenti esportati con "Stampe SEND" in 2 modalità
  - Firma online con OPT
  - Carica PDF Firmati

- **Trasmetti SEND**: Tasto che avvia la trasmissione dei documenti verso la piattaforma SEND. Se la trasmissione andrà a buon fine sarà popolata la colonna **"TOKEN"** nella griglia.

- **Importa IUN**: Funzione che richiama l'importazione degli IUN e li associa al verbale. Se la procedura è andata a buon fine e gli IUN sono disponibili la colonna **"IUN"** nella griglia sarà popolata.

Nella griglia sono presenti colonne specifiche per l'utilizzo SEND:

- **IUN**: Colonna dove è presente lo IUN una volta importato (Identificativo Univoco Notifica)
- **Token**: Colonna dove è presente il token di invio.
- **Note**: Su note vengono riportati eventuali errori di trasmissione (Es. Cod. Fis. Non valido ecc…)

## Ricezione Atti opponibili e conferme di notifica

La ricezione degli esiti di notifica e degli atti opponibili può avvenire in due modi:

- **Automatico**: Procedura notturna che scarica gli esiti

  > **N.B.** Richiedere l'attivazione della funzionalità a Palitalsoft

- **Manuale**: dalla pagina **Notifiche Send** (30-10-30-90-40) è possibile inserire un periodo di invio delle notifiche, e cliccando il tasto **"Stato Notifiche"** gli esiti di notifica verranno registrati.

[Schermata: Pagina "Notifiche Send" con filtri "Data dal" e "Data al", griglia con colonne Prog, Verbale, Anno, N. Reg., Data Notifica, Tipo Notifica, Esito Notifica, Note, Esito, Prog. A destra i pulsanti "Stato Notifiche" e "Stampa".]