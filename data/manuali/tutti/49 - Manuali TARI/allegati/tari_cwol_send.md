# TARI - Manuale Operativo: Sistema SEND

## 1.1 Premessa

Il sistema SEND è utilizzato per:

- SOLLECITI
- ACCERTAMENTI OMESSO VERSAMENTO o OMESSA e INFEDELE DENUNCIA

Il sistema SEND **ad oggi NON** è utilizzato per:

- AVVISI BONARI – non sono soggetti a costo di notifica
- INVITO AL CONTRADDITORIO – si tratta di atti istruttori, ma essendo un preavviso di atto NON è soggetto a costo di notifica

## 2.1 Configurazione SEND

### Impostazione parametri emissione

Dal menù delle emissioni:

`70. Tributi → 50. TARI → 10. Parametri di Configurazione → 50. Emissioni`

[Schermata: percorso di menu per accedere alle Emissioni TARI]

Impostare su **Dati Emissione** come modalità di gestione notifica **SEND**:

[Schermata: tab "Dati Emissione" con campo "Modalità Gestione Notifica" impostato su "SEND"]

Spostarsi poi sul tab **SEND**. Scegliere l'intermediario, il codice del servizio e la descrizione, e fare **Aggiorna**.

[Schermata: tab SEND con campi Intermediario (es. "Next Step Solution"), Codice Servizio (0), Descrizione Servizio, e pulsante "Aggiorna"]

Nel procedere all'elaborazione degli avvisi, dopo aver scelto il nome dell'emissione e fatto **'Elenca'**, l'anteprima dell'avviso comparirà come di seguito:

[Schermata: anteprima avviso con dettagli voci – Imponibile tassa, TEFA, Sanzione per omesso versamento, Interessi, Spese di notifica a 0,00€]

L'avviso avrà queste caratteristiche:

1. L'importo è sempre centesimale e mai arrotondato
2. Le spese di notifica iniziali sono sempre a zero
3. Si può notificare solo se il canale di incasso è **PagoPa** perché SEND lo utilizza per aggiornare le spese

Sotto un esempio di atto generato con SEND, che andrà pubblicato su PagoPa:

[Schermata: atto generato con SEND – Avviso di Accertamento Parziale o Mancato Pagamento, con dettaglio voci e spese di notifica a 0,00€]

### Testi SEND

I testi SEND hanno le seguenti caratteristiche:

- Hanno la dicitura che indica al contribuente che troverà le spese dopo la notifica
- Le spese di notifica sono a zero ed è indicata la norma attraverso cui Send applica tali spese
- È presente il paragrafo dove viene spiegato Send e come il servizio applica le spese di notifica

Di seguito un esempio di testi di tipo SEND:

[Schermata: elenco documenti di tipo SEND – cwt_CUP_SEND_Accertamenti, cwt_CUP_SEND_Avviso_Bonari, cwt_CUP_SEND_Omessi_Parz, cwt_CUP_SEND_Rateizzazione, cwt_CUP_SEND_Rimborso_De, cwt_TARI_SEND_Avviso_Bonar]

### Stampa massiva

Dal menù `Tributi → TARI → Stampe → Stampe Massive`

[Schermata: percorso di menu per Stampe Massive]

Impostare i parametri mettendo sempre come formato **PDF/A**:

[Schermata: criteri di stampa con Formato PDF selezionato come "PDF/A", Tipo Pag.Bianca "Normale", Fronte/Retro "Normale"]

Il bollettino stampato è configurato con l'indicazione che l'importo può subire variazioni:

[Schermata: bollettino con nota "L'importo è aggiornato automaticamente dal sistema e potrebbe subire variazioni per eventuali sgrevi, note di credito, indennità di mora, sanzioni o interessi, ecc."]

### Configurazione Lotto SEND

Dal menù `Tributi → TARI → Stampe → Stampe Massive`

[Schermata: percorso di menu per Configurazione Lotti]

Di seguito un esempio di configurazione di lotto SEND:

[Schermata: Configurazione lotti con campi: Descrizione "NOTIFICA ACCERTAMENTI SEND", Classificazione "Tributi CityWare", Mittente (vuoto), Template Comunicazione, Validità Legale (non spuntato), Salta Verifica su Soggetto (non spuntato), Invio tramite SEND (spuntato), Da Firmare (spuntato), Da Protocollare (spuntato), Tipo Allegato "Documento + PagoPA", Tipo Stampa "Fronte/Retro", Tipo Pag.Bianca "Normale", Oggetto mail (vuoto)]

Si può osservare che:

- Il **Mittente NON** è necessario (in caso di pec sarà SEND)
- Sono invece obbligatorie la **firma digitale** del file pdf e la **protocollazione** (anno e nr. protocollo)
- L'**Oggetto** e testo della mail **NON** sono necessari, in quanto Send invia un proforma

### Creazione Lotto SEND

Terminata la stampa si valida il flusso e si va a generare il lotto, attribuendo al flusso il lotto di tipo SEND.

Dal menù delle Stampe:

`70. Tributi → 50. TARI → 100. Stampe → 30. Creazione Lotti Invio`

[Schermata: percorso di menu per Creazione Lotti Invio]

Aprire l'elenco dei flussi con **Elenca**, posizionarsi sul proprio flusso e scegliere la configurazione precedentemente creata, andare poi su **Crea Lotto**.

[Schermata: Elenco Flussi con Configurazione Lotto "NOTIFICA ACCERTAMENTI CON SEND", elenco flussi con ID e anno, pulsante "Crea Lotto"]

Terminata la creazione del lotto, procedere dalla gestione dei lotti con la firma e la protocollazione:

Dal menù:

`70. Tributi → 50. TARI → 110. Gestione Lotti → 50. Gestione Lotti`

[Schermata: percorso di menu per Gestione Lotti]

Cercare dall'elenco dei lotti creati quello in interesse.

[Schermata: elenco lotti con nome "NOTIFICA ACCERTAMENTI CON SEN dev.palitalsoft@pec.it", tipo "Invio SEND", stato "Creato", pulsante "Firma"]

Procedere poi con la protocollazione.

Il lotto firmato e protocollato va convalidato col bottone **'convalida lotto'**.

A quel punto non ci sono più operazioni manuali da effettuare ma è tutto schedulato, ci sono una serie di schedulatori che lavorano e che completano la procedura, in particolare:

1. Uno schedulatore invia le posizioni del lotto convalidato a SEND
2. SEND individua il canale, individua il costo, aggiorna i bollettini e reperisce la data
3. Un ulteriore schedulatore restituisce gli esiti al servizio di origine (ossia a Cityware on line)

**Esempio di atto notificato con sistema Send:**

[Schermata: dettaglio avviso notificato – Sollecito, ID Avviso 77281, Dovuto 2163,00, Spese di notifica 2,00€]

È inserita la notifica:

[Schermata: tab Notifiche con stato "Consegnato" e data notifica 21/09/2025]

L'importo del bollettino **2.161,00** diventa **2.163,00**:

[Schermata: bollettino PagoPA con importo aggiornato a 2.161,00 Euro e nota sulle variazioni automatiche]

Man mano che tornano gli esiti, questi si vedono sul lotto:

[Schermata: dettaglio lotto con elenco soggetti, stati "Inviato in attesa di lotti", "Inviato", "Firmato PAdes", "Inviato Da Nooff SEND"]

### Emissioni SEND

Dal menù:

`70. Tributi → 160. Modulo Base → 100. Send → 10. Gestione Tabelle → 10. Emissioni Send`

[Schermata: percorso di menu per Emissioni Send]

Si aprirà la seguente videata, da cui fare **Elenca**:

[Schermata: schermata Emissioni Send con filtri Tipi scadenza, Anno Emissione, Numero Emissione, Servizio Emissione, Codice Servizio, Descrizione Emissione, Intermediario Send, e pulsante "Elenca"]

Si aprirà l'elenco delle emissioni SEND:

[Schermata: elenco emissioni SEND con colonne Anno, Num., Serv.Emiss., Emissione, Tipo Scadenza, Costo Servizio, Stato Emissione, Notifiche]

Andando sulle notifiche si vedrà il soggetto con le spese attribuite:

[Schermata: dettaglio Notifica con ID 1247, Tipo Notifica 301, Emissione Anno 2023, Num 8, Importo 2313,00000, Costo Notif. 2,00000]

In caso di qualunque tipologia di notifica, SEND **non** notifica direttamente il documento vero e proprio:

[Schermata: elenco soggetti e documenti associati alla notifica]

ma arriva al contribuente un altro documento come da esempio sotto:

[Schermata: documento "AVVISO DI AVVENUTA RICEZIONE" del servizio SEND – Servizio Notifiche Digitali, con codice univoco, codice fiscale, istruzioni per accedere ai documenti online tramite QR code o portale PagoPA, e istruzioni per ritiro copia sul territorio]

Il vero documento oggetto di notifica si scarica:

1. Scansionando il QR code
2. Accedendo sul portale Send
3. Recandosi presso un CAF

### Certificazione della notifica effettuata

Send stesso attesta la notifica attraverso **'l'attestazione opponibile a terzi'**.

Dal menù delle emissioni Send cliccare sulla bustina delle notifiche, cercare il soggetto, andare su **atti opponibili**:

[Schermata: schermata Notifiche con elenco soggetti e pulsante "Atti Opponibili"]

Comparirà l'attestazione:

[Schermata: documento "Attestazione opponibile a terzi: notifica digitale" – Ai sensi dell'art. 26, comma 11, del decreto-legge 76/2020 s.m.i., la PagoPA S.p.A. nella sua qualità di gestore ex lege della Piattaforma Notifiche Digitali di cui allo stesso art. 26 (anche nota come SEND - Servizio Notifiche Digitali), con ogni valore legale per l'opponibilità a terzi, ATTESTA CHE: gli atti di cui alla notifica identificata con IUN XXXYK-KQWT-GPDL-202503-Y-1 sono stati gestiti come segue: Nome e Cognome/Ragione Sociale, Codice Fiscale, Domicilio digitale, Tipologia di domicilio digitale. Il relativo avviso di avvenuta ricezione in formato elettronico è stato consegnato in data 13/03/2025 22:55 al domicilio digitale indicato immediatamente sopra la presente data. Firmato digitalmente da PagoPA S.p.A.]