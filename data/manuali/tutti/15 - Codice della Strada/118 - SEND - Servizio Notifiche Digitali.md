# SEND - Servizio Notifiche Digitali

**REQUISITI:** servizio SEND attivo

## Introduzione

**SEND - Servizio Notifiche Digitali** - (anche nota come Piattaforma Notifiche Digitali) nasce per innovare la comunicazione tra Stato e cittadini. Il servizio offre agli enti pubblici un sistema più efficiente e sicuro di invio delle comunicazioni, sollevando le amministrazioni dalla gestione dell'intero processo di notificazione. Gli enti mittenti devono solo depositare l'atto da notificare sulla piattaforma che si occuperà dell'invio per via digitale o analogica.

Con Send **NON** è possibile spedire i verbali a soggetti esteri in quanto non hanno un Codice Fiscale (o una partita iva) e quindi non possono essere identificati da SEND per la notifica.

## Funzionamento

### Info Generali - Iter

Per poter spedire un verbale con Send, è indispensabile indicare i seguenti dati sulla **Scheda del Verbale**:

- **Cognome e Nome**
- **Codice Fiscale** o **Partita IVA**
- **Indirizzo completo di residenza** (Via/Piazza – Comune – Cap)
- **Indirizzo PEC** ove disponibile.

## Stampe Verbali CDS | Genera Flusso SEND

### Selezione Verbali e Generazione Flusso

**REQUISITI:** servizio SEND attivo

Dopo aver effettuato la **selezione dei verbali**, premere il tasto **[Genera Flusso SEND]** per confermare la generazione del flusso PND.

> **NB:** prima della creazione di un flusso vengono sempre annullati le posizioni degli IUV per crearne di nuove.

> ⚠️ Prima di selezionare i verbali per stamparli consigliamo di effettuare lo scarico dei pagamenti!

- Prima di generare il lotto, con **STAMPA DI PROVA** possiamo vedere un'anteprima di come uscirebbe impaginato!

### Storico Flussi di Stampa

Generato il lotto di tipo SEND, andare nel sotto tab **'Flussi di Stampa'**.

Qui avremmo lo storico di tutti i flussi di stampa che sono stati creati nell'ente, verranno visualizzati in ordine cronologico decrescente assieme alle loro informazioni principali (ad esempio: data di creazione del flusso, data di invio del flusso, ecc).

Il lotto di stampa più recente lo troveremo sempre in alto.

### Gestione Flusso

#### INFO IMPORTANTI

> La generazione dei verbali segue le regole impostate nei **Parametri dell'Ente -> Tab "Gestione" -> Parametri FastMail**
>
> I Modelli bollettino dovranno essere selezionati in questa pagina (Selezionare **"Bollettino PPA"** per utilizzo SEND).

Sono presenti diversi tasti nella bottoniera di destra, specifiche per l'utilizzo di SEND.

Vediamoli ora nel dettaglio:

#### STEP 1 | Creazione dei pdf

Con **[Stampe SEND]** prepareremo i pdf dei verbali e dei bollettini in formato PDF/A.

#### STEP 2 | Firma digitale

Con il pulsante **[Firma Doc SEND]** firmeremo digitalmente i documenti pdf (creati con il bottone "Stampe SEND") in due modalità:

- **[Firma online con OTP]** (standard PAdES)
- **[Carica PDF Firmati]** (standard PAdES)

#### STEP 3 | Trasmissione

Dopo aver firmato gli atti, cliccare sul bottone **[Trasmetti SEND]** per avviare la trasmissione dei documenti verso la piattaforma SEND.

**Se la trasmissione andrà a buon fine sarà popolata la colonna "TOKEN" nella griglia.**

## Utilità

È possibile dividere i pdf in cartelle separate attivando con la spunta "Non dividere zip pdf per verbale". Ogni cartella rappresenterà un verbale diverso.

> Il parametro è attivo con la presenza della spunta bianca su sfondo blu.

## Altri Comandi - Importa IUN

**Importa IUN:** Funzione che richiama l'importazione degli IUN e li associa al verbale. Se la procedura è andata a buon fine e gli IUN sono disponibili la colonna "IUN" nella griglia sarà popolata.

Nella griglia sono presenti colonne specifiche per l'utilizzo SEND:

- **IUN:** Colonna dove è presente lo IUN una volta importato (Identificativo Univoco Notifica)
- **Token:** Colonna dove è presente il token di invio.
- **Note:** Su note vengono riportati eventuali errori di trasmissione (Es. Cod. Fis. Non valido ecc…)

## FAQ REQUEST - Le domande più frequenti

Domande frequenti:

- Come annullare un verbale all'interno del lotto?