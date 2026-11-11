# TARI – Configurazione Lotti NEW

## 1.1 Configurazione Lotti NEW

### Impostazione Parametri di selezione

Per procedere con la gestione dei lotti (vedere manuale relativo) occorre prima configurarlo.

La configurazione del lotto è reperibile dal menù:

**Tributi → Gestione Lotti → Configurazione Lotti NEW**

[Schermata: percorso di menu nel software CityWare – Tributi > Gestione Lotti > Configurazione Lotti NEW]

Si aprirà la seguente videata, che permette di ricercare le configurazioni già esistenti per:

- Descrizione
- Classificazione
- Oggetto del messaggio email/PEC (se lotto email o PEC)

[Schermata: videata di ricerca configurazioni lotti con campi Descrizione, Classificazione, Oggetto e pulsanti Nuovo, Elenca, Carica, Salva, Reset]

Cliccando **'Elenca'** vengono mostrate tutte le configurazioni già inserite.

Esempio di selezione dei parametri:

[Schermata: esempio di ricerca con Descrizione = "avviso bonario", Classificazione = "Tributi CityWare"]

E di configurazioni già esistenti:

[Schermata: elenco configurazioni con colonne Descrizione, Classificazione, PEC, Mail, Pt.Cartacea, AppIO, Conf.AppIO, Da Firmare, Da Protocollare, Oggetto, Dis.]

---

### Inserimento nuova configurazione

Dalla videata dell'elenco delle configurazioni, cliccando su **'Nuovo'** è possibile inserire una nuova configurazione lotto:

[Schermata: pulsante "Nuovo" evidenziato nell'elenco configurazioni]

[Schermata: form di nuova configurazione con tutti i campi: Descrizione, Classificazione, Mittente, Template Comunicazione, Validità Legale, PEC, Mail, Pt.Cartacea, AppIO, Invio tramite SEND, Da Firmare, Da Protocollare, Tipo Allegato, Tipo Stampa, Tipo Pag.Bianca, Oggetto mail, editor di testo]

#### Descrizione

Permette di inserire una descrizione/denominazione di una configurazione che si sta per creare (campo di libera editazione, ad esempio *"Avviso Bonario PEC TARI 2024"*).

#### Classificazione

Indicare il modulo di competenza per cui sarà valida la configurazione.

> **⚠️ ATTENZIONE:** per tutto **CWOL TAX** indicare **SEMPRE 'Tributi Cityware'**. La dicitura **'Tributi'** indica i **TRIBUTI ITALSOFT**.

[Schermata: menu a tendina Classificazione con opzioni: Stato Civile, Pratiche, Fiere e Mercati, Ztl, Commercio, Tributi, Codice della Strada, Codice dei Regolamenti, Albo Pretorio, Segreteria, Bdap, Amministrazione Trasparente, Incidenti, Gestione Pratiche Ricorsi, Protocollo, **Tributi CityWare** (selezionato)]

#### Mittente

Permette di scegliere l'indirizzo email/PEC dell'Ente, tra quelli configurati nella gestione web mail.

#### Template Comunicazione

Permette di scegliere un messaggio email/PEC precompilato tra quelli disponibili e/o precedentemente creati nella **'gestione documenti base'**.

Dal menù **Tributi → Documenti Base**:

[Schermata: percorso di menu Tributi > Documenti Base]

Si aprirà la seguente videata:

[Schermata: videata Documenti base con campi Codice, Descrizione, Interno/Esterno, Tipo, Funzione, Bozza e pulsanti F2-Nuovo, F4-Elenca, Import]

Andando su **'Nuovo'** verrà assegnato un codice da sistema; scrivere accanto al codice una descrizione e compilare come da esempio sotto, poi fare **'Aggiungi'**:

[Schermata: esempio di nuovo documento base – Codice: 042048_TEMPLATETARI2024, Descrizione: Template bonario tari 2024, Classificazione: Tributi CityWare, Tipo: XHTML, Funzione: Tributi]

A questo punto vengono abilitati gli altri tab; spostarsi sul tab del **'Testo'**, scrivere il testo e poi fare **'Aggiorna'**. Ritroveremo questo testo standard nel menù a tendina dell'elenco del **Template Comunicazione** così da poterlo eventualmente scegliere.

[Schermata: tab "Testo" con editor di testo ricco (font, dimensioni, formattazione) e pulsante F6-Aggiorna]

#### Validità Legale

Va flaggato nel caso in cui si tratti di atti (avvisi di accertamento) e i soggetti hanno in anagrafica la email. Se flaggato, alcuni indicatori di tipo invio scompariranno, e l'indicatore **'Posta Cartacea'** procederà a prendere in considerazione anche le posizioni in anagrafica di tipo email.

> **Nota:** l'email non è valida per la notifica di atti ma solo per trasmettere l'avviso bonario, per cui in questo caso i soggetti con mail saranno inclusi anche loro nell'invio cartaceo. Con il bonario il flag **Validità Legale NON occorre mai**.

[Schermata: campo Validità Legale con checkbox e indicatori PEC, Pt.Cartacea, Invio tramite SEND]

#### Tipo Spedizione

Il tipo spedizione è reperibile all'interno dell'anagrafica del soggetto al tab **'Contribuente'** e costituisce un campo obbligatorio; a seconda della scelta effettuata verranno presi i contribuenti che hanno in quel campo il tipo corrispondente:

[Schermata: anagrafica soggetti – tab Contribuente con campo "Tipo Spedizione" e menu a tendina con opzioni: Carta, Automatico, Fax, e-mail, SMS, Pec]

- **PEC:** seleziona chi ha in anagrafica il Tipo Spedizione = PEC
- **Mail:** seleziona chi ha in anagrafica il Tipo Spedizione = e-mail
- **Pt.Cartacea:** seleziona chi ha in anagrafica il Tipo Spedizione = Carta (o aggiunge anche chi ha la mail in caso di flag su Validità legale)
- **AppIO:** permette di inviare, per la posizione, anche una notifica su AppIO (al momento disponibile solo per i bonari)
- **Invio tramite SEND:** utilizza il canale SEND (la possibilità è per tutti i documenti)

> **SEND** è il Servizio di Notifiche Digitali, solleva gli Enti da tutti gli adempimenti legati alla gestione delle comunicazioni a valore legale.
>
> Gli Enti non devono fare altro che depositare l'atto da notificare: sarà la piattaforma a occuparsi dell'invio, per via digitale o cartacea, con conseguente risparmio di tempi e costi dell'intero processo (simile a una pubblicazione PagoPa).
>
> È poi SEND che definisce con i propri criteri il metodo di recapito in base alle informazioni che riesce a reperire quello (carta o PEC): l'Ente deve semplicemente inviare la posizione a SEND.

#### Da Firmare

Indica se la posizione deve essere firmata digitalmente prima dell'invio (cartaceo, mail o PEC).

#### Da Protocollare

Indica se la posizione deve essere soggetta a protocollo informatico prima dell'invio (per tutti).

#### Tipo Allegato

Indica da cosa sono costituiti i file che sono presenti nelle posizioni del lotto (es: documento + F24, documento + PagoPA ecc...).

Opzioni disponibili:

- Solo Documento
- Solo F24
- Solo PagoPA
- Documento + F24
- Documento + PagoPA
- F24 + PagoPA
- Documento + F24 + PagoPA
- Nessun Allegato

> **NOTA BENE:** non si può mandare senza allegato, si può mandare senza F24 nel caso di una comunicazione del dettaglio calcolo, ma senza un dovuto.

#### Tipo Stampa

- **Normale**
- **Fronte/Retro**

Nel caso del fronte/retro il lotto deve gestire la pagina bianca.

#### Tipo Pag.Bianca

- **Normale:** la pagina bianca non riporta nessun carattere
- **Codice Ottico:** la pagina bianca riporta un codice ottico composto da barre nere verticali in alto a destra della pagina (per la tipografia)

#### Oggetto mail

Indica l'oggetto del messaggio email/PEC.

> **⚠️ ATTENZIONE:** se il lotto è soggetto a protocollazione, anche se è cartaceo, è **obbligatorio** indicare un Oggetto email/PEC, in quanto per molti fornitori di servizi di protocollazione tale aspetto è obbligatorio e vincolante (in assenza di oggetto, scartano e mandano in errore la richiesta di attribuzione di protocollo e restituiscono un errore di protocollazione).

#### Testo email/PEC

Permette di editare liberamente il messaggio di email/PEC che verrà recapitato al contribuente.

> **⚠️ ATTENZIONE:** se il lotto è soggetto a protocollazione, anche se è cartaceo, è **obbligatorio** indicare un messaggio email/PEC, in quanto per molti fornitori di servizi di protocollazione tale aspetto è obbligatorio e vincolante (in assenza di testo, scartano e mandano in errore la richiesta di attribuzione di protocollo e restituiscono un errore di protocollazione).

---

### Esempi di parametrizzazione/configurazione lotto

#### Esempio 1

[Schermata: configurazione lotto – Esempio 1]

| Campo | Valore |
|-------|--------|
| Id | 12 |
| Descrizione | Avviso Bonario PEC |
| Classificazione | Tributi CityWare |
| Mittente | dev.italsoft@pec.it |
| Template Comunicazione | Selezionare... |
| Validità Legale | ☐ |
| PEC | ☐ |
| Mail | ☑ |
| Pt.Cartacea | ☐ |
| AppIO | ☐ |
| Invio tramite SEND | ☐ |
| Da Firmare | ☐ |
| Da Protocollare | ☐ |
| Tipo Allegato | Documento + F24 |
| Tipo Stampa | Fronte/Retro |
| Tipo Pag.Bianca | Normale |
| Oggetto mail | Avviso Bonario TARI 2023 |

**Testo email/PEC:**

> Gentile Contribuente,
>
> Si allega alla presente l'avviso di pagamento TARI ANNO 2023 con i relativi modelli F24 per eseguire i relativi versamenti.
>
> Distinti Saluti

#### Esempio 2

[Schermata: configurazione lotto – Esempio 2]

| Campo | Valore |
|-------|--------|
| Id | 14 |
| Descrizione | Avviso Bonario cartaceo |
| Classificazione | Tributi CityWare |
| Mittente | (selezionato) |
| Template Comunicazione | Selezionare... |
| Validità Legale | ☐ |
| PEC | ☐ |
| Mail | ☐ |
| Pt.Cartacea | ☑ |
| AppIO | ☑ |
| Invio tramite SEND | ☐ |
| Da Firmare | ☑ |
| Da Protocollare | ☐ |
| Tipo Allegato | Documento + F24 |
| Tipo Stampa | Fronte/Retro |
| Tipo Pag.Bianca | Codice Ottico |
| Oggetto mail | Avviso Bonario TARI 2023 |

**Testo email/PEC:**

> Gentile Contribuente,
>
> Si allega alla presente l'avviso di pagamento TARI ANNO 2023 con i relativi modelli F24 per eseguire i relativi versamenti.
>
> Distinti Saluti

---

Una volta terminata la parametrizzazione, confermare con il bottone **'Aggiungi'**.

[Schermata: pulsante "Aggiungi" evidenziato nel form di configurazione]

---

### Modifica configurazione lotto

È possibile modificare una configurazione lotto selezionando la riga di una configurazione già esistente ed aprendola in modifica (icona **matita**).

[Schermata: elenco configurazioni con icona matita evidenziata sulla riga da modificare]

Una volta terminata la modifica confermare con il bottone **'Aggiorna'**.

[Schermata: form di modifica con pulsante "Aggiorna" evidenziato]

---

### Cancellazione configurazione lotto

È possibile cancellare una configurazione lotto selezionando la riga di una configurazione già esistente ed aprendola in modifica (icona **matita**).

Andare sul bottone **'Cancella'**.

[Schermata: form di configurazione con pulsante "Cancella" evidenziato]

Comparirà la seguente videata, andare su **Conferma**:

[Schermata: dialog di conferma "Confermi la Cancellazione del record?" con pulsanti F5-Conferma e F8-Annulla]