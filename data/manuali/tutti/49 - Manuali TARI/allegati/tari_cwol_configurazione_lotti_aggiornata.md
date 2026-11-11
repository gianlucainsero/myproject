# TARI - Configurazione Lotti

## 1.1 Configurazione Lotti

### Impostazione Parametri di selezione

Per procedere con la creazione del lotto (vedere manuale relativo) occorre prima configurarlo.

La configurazione del lotto è reperibile dal menù:

**Tributi → TARI → Gestione Lotti → Configurazione Lotti**

[Schermata: percorso di menu a cascata nel software CityWare Online, con il percorso Tributi > TARI > Gestione Lotti > Configurazione Lotti evidenziato]

Si aprirà la seguente videata, che permette di ricercare le configurazioni già esistenti per:

- Descrizione
- Classificazione
- Oggetto del messaggio email/PEC (se lotto email o PEC)

[Schermata: videata di ricerca "Configurazione lotti" con campi Descrizione, Classificazione (menu a tendina con "Tributi CityWare" selezionato), Oggetto, e pulsanti "Nuovo" e "Elenca"]

Cliccando **'Elenca'** vengono mostrate tutte le configurazioni già inserite.

Esempio di selezione dei parametri:

[Schermata: campo Descrizione con valore "avviso bonario", Classificazione "Tributi CityWare"]

e di configurazioni già esistenti:

[Schermata: tabella "Configurazioni" con colonne: Configurazioni (icone matita/cestino), Descrizione, Classificazione, PEC, Mail, Pt.Cartacea, AppIO, Conf.AppIO, Da Firmare, Da Protocollare, Oggetto, Dis. Vengono mostrate righe come "Avviso Bonario PEC", "Avviso Bonario e-mail", "Avviso Bonario cartaceo", "Avviso Bonario" con classificazione TRIBUTI-CW]

---

### Inserimento nuova configurazione

Dalla videata dell'elenco delle configurazioni, cliccando su **'Nuovo'** comparirà la videata in cui sarà possibile inserire una nuova configurazione lotto:

[Schermata: videata di inserimento nuova configurazione con campi: Descrizione, Classificazione (Tributi CityWare), Mittente, Template Comunicazione, Validità Legale, Salta Verifica su Soggetto, checkbox PEC/Mail/Pt.Cartacea/AppIO/Invio tramite SEND, Da Firmare, Da Protocollare, Tipo Allegato, Tipo Stampa, Tipo Pag.Bianca, Oggetto mail, editor di testo per il messaggio]

**Descrizione:** permette di inserire una descrizione/denominazione di una configurazione che si sta per creare (campo di libera editazione, ad esempio "Avviso Bonario PEC TARI 2024")

**Classificazione:** indicare il modulo di competenza per cui sarà valida la configurazione (**per tutto CWOL TAX indicare SEMPRE 'Tributi Cityware'**). ⚠️ **ATTENZIONE:** la dicitura 'Tributi' indica i TRIBUTI ITALSOFT

[Schermata: menu a tendina Classificazione con opzioni: Stato Civile, Pratiche, Fiere e Mercati, Ztl, Commercio, Tributi, Codice della Strada, Codice dei Regolamenti, Albo Pretorio, Segreteria, Bdap, Amministrazione Trasparente, Incidenti, Gestione Pratiche Ricorsi, Protocollo, **Tributi CityWare** (evidenziato)]

**Mittente:** permette di scegliere l'indirizzo email/PEC dell'Ente, tra quelli configurati nella gestione web mail

**Template Comunicazione:** permette di scegliere un messaggio email/PEC precompilato tra quelli disponibili e/o precedentemente creati nella 'gestione documenti base'. Non è un campo obbligatorio.

[Schermata: menu a tendina Template Comunicazione con opzioni: "Tassa rifiuti base XHTML", "Tassa rifiuti base XHTML", "Template bonario tari 2024"]

Dal menù **Tributi → Documenti Base**

[Schermata: percorso di menu Tributi > Documenti Base (170. Documenti Base evidenziato)]

Si aprirà la seguente videata:

[Schermata: videata "Documenti base" con campi Codice, Descrizione, Interno/Estererno, Tipo, Funzione, Bozza e pulsanti F2-Nuovo, F4-Elenco, Import]

Andando su **'Nuovo'** verrà assegnato un codice da sistema; scrivere accanto al codice una descrizione e compilare come da esempio sotto, poi fare **'Aggiungi'**

[Schermata: documento base in creazione con Codice "042048_TEMPLATETARI2024", Descrizione "Template bonario tari 2024", tab Dati attivo con Classificazione "Tributi CityWare", Tipo "XHTML", Funzione "Tributi", pulsante F5:Aggiungi evidenziato]

A questo punto vengono abilitati gli altri tab; spostarsi sul tab del **'Testo'**, scrivere il testo e poi fare **'Aggiorna'**.

Ritroveremo questo testo standard nel menù a tendina dell'elenco del Template Comunicazione così da poterlo eventualmente scegliere.

[Schermata: tab "Testo" attivo con editor di testo contenente: "Buongiorno, / prova / Ufficio Tributi." e pulsante F6:Aggiorna evidenziato]

---

**Validità Legale:** va flaggato nel caso in cui si tratti di atti (avvisi di accertamento) e i soggetti hanno in anagrafica la email. Se flaggato, alcuni indicatori di tipo invio scompariranno, e l'indicatore 'Posta Cartacea' procederà a prendere in considerazione anche le posizioni in anagrafica di tipo email (l'email non è valida per la notifica di atti ma solo per trasmettere l'avviso bonario, per cui in questo caso i soggetti con mail saranno inclusi anche loro nell'invio cartaceo (con il bonario il flag Validità Legale **NON** occorre mai).

[Schermata: checkbox "Validità Legale" spuntata, con sotto le opzioni PEC, Pt.Cartacea, Invio tramite SEND]

**Salta Verifica su Soggetto:** fa sì che il tipo spedizione sia quello impostato sulla configurazione del lotto, **anziché** quello all'interno dell'anagrafica soggetto.

[Schermata: checkbox "Salta Verifica su Soggetto" spuntata con opzioni: PEC, Mail, Pt.Cartacea, AppIO, Invio tramite SEND]

Il tipo spedizione è reperibile all'interno dell'anagrafica del soggetto al tab **'Contribuente'** e costituisce un campo obbligatorio; a seconda della scelta effettuata verranno presi i contribuenti che hanno in quel campo il tipo corrispondente:

[Schermata: anagrafica soggetto al tab "Contribuente" con campo "Tipo Spedizione" impostato su "Carta" e menu a tendina con opzioni: Carta, Automatico, Fax, Pec, Fonte, e-mail, SMS, PEC]

---

**Tipi di spedizione disponibili:**

- **PEC:** seleziona chi ha in anagrafica il Tipo Spedizione = PEC
- **Mail:** seleziona chi ha in anagrafica il Tipo Spedizione = e-mail
- **Pt.Cartacea:** seleziona chi ha in anagrafica il Tipo Spedizione = Carta (o aggiunge anche chi ha la mail in caso di flag su Validità legale)
- **AppIO:** permette di inviare, per la posizione, anche una notifica su AppIO (al momento disponibile solo per i bonari)
- **Invio tramite SEND:** utilizza il canale SEND (la possibilità è per tutti i documenti)

> **SEND** è il Servizio di Notifiche Digitali, solleva gli Enti da tutti gli adempimenti legati alla gestione delle comunicazioni a valore legale.
>
> Gli Enti non devono fare altro che depositare l'atto da notificare: sarà la piattaforma a occuparsi dell'invio, per via digitale o cartacea, con conseguente risparmio di tempi e costi dell'intero processo (simile a una pubblicazione PagoPa).
>
> E' poi SEND che definisce con i propri criteri il metodo di recapito in base alle informazioni che riesce a reperire quello (carta o PEC): l'Ente deve semplicemente inviare la posizione a SEND.

**Da Firmare:** indica se la posizione deve essere firmata digitalmente prima dell'invio (cartaceo mail o pec)

**Da Protocollare:** indica se la posizione deve essere soggetta a protocollo informatico prima dell'invio (per tutti)

---

**Tipo Allegato:** indica da cosa sono costituiti i file che sono presenti nelle posizioni del lotto (es: documento + F24, documento + PagoPA ecc..)

Opzioni disponibili:

- Solo Documento
- Solo F24
- Solo PagoPA
- Documento + F24
- Documento + PagoPA
- F24 + PagoPA
- Documento + F24 + PagoPA
- Nessun Allegato

> ⚠️ **NOTA BENE:** non si può mandare senza allegato, si può mandare senza F24 nel caso di una comunicazione del dettaglio calcolo, ma senza un dovuto.

---

**Tipo Stampa:**

- Normale
- Fronte/Retro

Nel caso del fronte/retro il lotto deve gestire la pagina bianca.

**Tipo Pag.Bianca:**

- **Normale:** la pagina bianca non riporta nessun carattere
- **Codice ottico:** la pagina bianca riporta un codice ottico composto da barre nere verticali in alto a destra della pagina (per la tipografia)

---

**Oggetto mail:** indica l'oggetto del messaggio email/PEC

> ⚠️ **ATTENZIONE:** se il lotto è soggetto a protocollazione, anche se è cartaceo, è obbligatorio indicare un **oggetto email/PEC**, in quanto per molti fornitori di servizi di protocollazione tale aspetto è obbligatorio e vincolante (in assenza di oggetto, scartano e mandano in errore la richiesta di attribuzione di protocollo e restituiscono un errore di protocollazione).

---

**Testo email/PEC:** permette di editare liberamente il messaggio di email/PEC che verrà recapitato al contribuente.

> ⚠️ **ATTENZIONE:** se il lotto è soggetto a protocollazione, anche se è cartaceo, è obbligatorio indicare un **messaggio email/PEC**, in quanto per molti fornitori di servizi di protocollazione tale aspetto è obbligatorio e vincolante (in assenza di testo, scartano e mandano in errore la richiesta di attribuzione di protocollo e restituiscono un errore di protocollazione).

---

### Esempi di parametrizzazione/configurazione lotto

#### Esempio 1

[Schermata: configurazione lotto con: Id 12, Descrizione "Avviso Bonario PEC", Classificazione "Tributi CityWare", Mittente "dev.italsoft@pec.it", Validità Legale non spuntato, Salta Verifica su Soggetto spuntato, Mail spuntato, Tipo Allegato "Documento + F24", Tipo Stampa "Fronte/Retro", Tipo Pag.Bianca "Normale", Oggetto mail "Avviso Bonario 2023", testo: "Gentile Contribuente, / Si allega alla presente l'avviso di pagamento TARI ANNO 2023 con i relativi modelli F24 per eseguire i relativi versamenti. / Distinti Saluti"]

#### Esempio 2

[Schermata: configurazione lotto con: Id 14, Descrizione "Avviso Bonario cartaceo", Classificazione "Tributi CityWare", Mittente vuoto, Salta Verifica su Soggetto spuntato, Pt.Cartacea spuntato, AppIO spuntato, Da Protocollare spuntato, Tipo Allegato "Documento + F24", Tipo Stampa "Fronte/Retro", Tipo Pag.Bianca "Codice Ottico", Oggetto mail "Avviso Bonario TARI 2023", testo: "Gentile Contribuente, / Si allega alla presente l'avviso di pagamento TARI ANNO 2023 con i relativi modelli F24 per eseguire i relativi versamenti."]

---

Una volta terminata la parametrizzazione, confermare con il bottone **'Aggiungi'**:

[Schermata: configurazione lotto completata con pulsante "Aggiungi" evidenziato]

---

### Modifica configurazione lotto

È possibile modificare una configurazione lotto selezionando la riga di una configurazione già esistente ed aprendola in modifica (matitina).

[Schermata: tabella configurazioni con icona matita evidenziata sulla riga "Avviso Bonario cartaceo"]

Una volta terminata la modifica confermare con il bottone **'Aggiorna'**

[Schermata: configurazione lotto in modifica con pulsante "Aggiorna" evidenziato, mostra anche pulsante "Cancella"]

---

### Cancellazione configurazione lotto

È possibile cancellare una configurazione lotto selezionando la riga di una configurazione già esistente e andando sul cestino:

[Schermata: tabella configurazioni con icona cestino evidenziata sulla riga "Avviso Bonario cartaceo"]

oppure entrarci aprendola in modifica (matitina) e andare sul bottone **'Cancella'**

[Schermata: configurazione lotto in modifica con pulsante "Cancella" evidenziato]

Comparirà la seguente videata, andare su **Conferma**

[Schermata: finestra di dialogo "Cancellazione" con messaggio "Confermi la Cancellazione del record?" e pulsanti F5-Conferma e F8-Annulla]