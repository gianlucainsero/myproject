# Operatività Liquidazione Documenti da CWOL

## Introduzione

La liquidazione delle fatture è un procedimento che parte dalla fase di acquisizione delle fatture cartacee/elettroniche e passa attraverso la contabilizzazione delle stesse, generalmente eseguita dal servizio finanziario. Successivamente, il servizio che ha dato esecuzione alla spesa, procede con l'invio dell'Atto di liquidazione alla Ragioneria la quale procede con l'emissione del mandato di pagamento.

L'atto di liquidazione è l'atto finale di un procedimento amministrativo di acquisizione di beni o di servizi e richiede alcune azioni sequenziali, imprescindibili.

Il responsabile dell'Area ordinante o del servizio, dispone la liquidazione delle fatture, che si formalizza con l'atto di liquidazione.

Questo processo cartaceo o digitale, può essere gestito, con l'attivazione di un iter specifico.

---

## Descrizione delle fasi

1. **Acquisizione** dei documenti del ciclo passivo cartacei o elettronici (fatture, note credito, note di debito) tramite porting manuale o da schedulazioni automatiche temporizzate.

2. **Accettazione o rifiuto** dei documenti pervenuti a cura del servizio individuato tramite ufficio di fatturazione o a cura della ragioneria.

3. **Contabilizzazione** dei documenti accettati a cura del servizio finanziario o direttamente dal servizio che effettua l'accettazione.

4. **Assegnazione** della fattura all'Ufficio competente per la predisposizione dell'atto di liquidazione finanziario.

5. **Predisposizione dell'atto di liquidazione** da parte dell'Ufficio competente, con la redazione provvisoria dell'atto di Liquidazione. L'operatore:
   - a. Inserisce gli allegati nell'atto
   - b. Effettua una prima compilazione (stesura dell'atto) per verificarne la correttezza (modalità di pagamento, Cig etc.)

6. **Controlli**, riscontri amministrativi, contabili e fiscali sull'atto sono a cura del responsabile del servizio competente per la sottoscrizione e, se richiesto, anche a cura del servizio finanziario.

7. **Creazione della stesura definitiva** con contestuale numerazione dell'atto, generazione del documento in formato pdf ed apposizione della firma digitale a cura del servizio/settore che lo emette. La firma digitale rende l'atto non modificabile che viene inviato alla ragioneria. Da questa versione è possibile definire e parametrizzare tipologie di atti di liquidazione con iter e firmatari diversi. Esempi:
   - a. **Tipo L1** redatto da istruttore ed una firma digitale del Rup o Responsabile servizio;
   - b. **Tipo L2** redatto da istruttore con due firme digitali, la prima del Rup e la seconda del Responsabile servizio che approva la spesa. L'atto viene numerato e datato al momento della prima firma;
   - c. **Tipo L3** redatto da istruttore, che produce allegato della bozza dell'atto, prima firma digitale o visto del Rup e firma digitale finale del Responsabile servizio.

8. Il **servizio ragioneria** effettua le verifiche di propria competenza e decide se accettare l'atto, annullarlo o sospenderlo temporaneamente. La fase può essere evasa contestualmente con l'inserimento del visto o in modo separato da soggetti diversi.

9. In caso di **sospensione** dell'atto, il servizio ragioneria o un utente di pari abilitazione ha la facoltà di riattivarlo e di proseguire l'iter con la fase del visto. In caso di **annullamento** l'atto deve essere riproposto in quanto i documenti (fatture, note di credito) ad esso allegati vengono sganciati in modo automatico e sono disponibili per nuove elaborazioni.

10. **Inserimento del visto.** Avviene con numero e data che rimane memorizzato esternamente all'atto firmato digitalmente. Il visto abilita il decreto per l'emissione degli ordinativi.

11. **Emissione degli ordinativi** e predisposizione dei flussi per invio alla piattaforma Siope Plus.

---

## 1. Liquidazione Documenti

L'accesso al nuovo ambiente Citywareonline viene eseguito selezionando la specifica icona CWOL oppure con il link presente sul proprio desktop predisposto dal personale Ced dell'ente. Per l'accesso bisogna inserire il nome utente e la password, solitamente le credenziali sono le stesse utilizzate per l'accesso in Cityware (in alternativa chiedere al personale del servizio CED).

[Schermata di login CWOL con campi Nome Utente, Password, Ente e pulsante Entra]

[Schermata del menu di navigazione: Servizi Economici → 10. Finanziaria → 110. Uffici Periferici → 100. Liquidazione Documenti]

La liquidazione dei documenti in CWOL può avvenire in due modalità:

- a partire dal documento di uscita (all'interno della singola assegnazione);
- tramite la funzione che gestisce gli Atti di liquidazione.

La funzione supporta diverse modalità operative che vanno da una sola firma elettronica o digitale sino a 2 firme digitali, più un eventuale allegato compilato al momento della creazione da parte dell'istruttore.

Le configurazioni relative alla diverse tipologie di atto sono indicate al paragrafo 3.

### 1.1 Gestione Atti di Liquidazione

Per agevolare le performance in fase di ricerca, si consiglia di impostare i **FILTRI DI RICERCA** in funzione dell'iter del documento da visualizzare: si ricorda che l'atto nell'iter formativo può assumere le posizioni sotto indicate:

| Posizione | Descrizione |
|-----------|-------------|
| 10 | Proposta da numerare |
| 15 | Proposta con visto/allegato da numerare |
| 20 | Proposta numerata |
| 30 | Proposta con stesura definitiva |
| 35 | Atto numerato con prima firma digitale |
| 40 | Atto firmato digitalmente dal responsabile ed inviato alla ragioneria |
| 45 | Atto verificato dalla ragioneria |
| 50 | Atto vistato dalla ragioneria |
| 60 | Atto con ordinativo emesso |
| 80 | Proposta sospesa |
| 90 | Proposta annullata |

**Esempio di FILTRI per Atto inserito da numerare:**

[Schermata dei filtri di ricerca con campi: Tipo Organo deliberante, Decreto-Anno, Numero, Proposta da, Posizione Decreto-Da/A, Data Decreto-Dal/Al, Oggetto, Progressivo, RUP Firma, e sezione Dettagli documenti con Inserimento-Anno, Progressivo, Documento-Numero, Data, Fornitore, Beneficiario, CIG]

Per le operatività vedere paragrafo 2.

### 1.2 Inserimento Atto di Liquidazione

Dal menù **Servizi Economici → Finanziaria → Uffici Periferici → Liquidazione documenti →**

Procedere alla creazione di un nuovo atto di liquidazione. Cliccare **Nuovo Atto**.

Per liquidare sarà poi possibile accedere attraverso il menù rapido dei *Recenti*.

[Schermata della pagina Liquidazione Documenti con pulsante Nuovo Atto evidenziato]

Nella maschera verranno proposti in automatico:

- Il tipo Atto
- L'Ufficio
- Il RUP
- Ed il codice testo

Tali dati sono modificabili ad eccezione del codice testo.

Successivamente cliccare **Proposta Atto**.

[Schermata "Selezione parametri" con campi: Tipo Atto (DL), Proposta da, Firmatario RUP, Codice testo, e pulsante Proposta Atto]

Successivamente sarà possibile inserire l'oggetto dell'Atto o altre informazioni extra che verranno salvate nel database.

E' consigliato inserire l'oggetto anche se **NON** obbligatorio.

Successivamente cliccare **Conferma**.

[Schermata con campi Oggetto, Descrizione Extra, Note Finali, Pratiche e pulsante Conferma]

L'atto creato e **NON numerato** sarà visibile al centro della finestra.

Procedere ora alla ricerca dei documenti da liquidare cliccando **Vedi Documenti da Liquidare**.

[Schermata della pagina Liquidazione Documenti con pulsante "Vedi Documenti da Liquidare" evidenziato]

La paginazione presenta la possibilità di ricercare il/i documento/i da liquidare tramite una serie di campi di ricerca (dove è presente il simbolo della lente è possibile cliccare e visualizzare la tabella).

Una volta inseriti i campi cliccare **Elenca**.

[Schermata dei campi di ricerca documenti con pulsante Elenca]

Quindi saranno visualizzati in lista i documenti da liquidare.

Lo **stato verde**, indica la possibilità di procedere alla liquidazione, nel caso di **stato rosso** posizionarsi sopra con tooltip per verificare l'anomalia.

Se tutto ok, selezionare il documento e cliccare:

- **Liquida Intero Documento**: per effettuare una liquidazione totale dell'assegnazione
- **Liquida quota parte doc.**: per effettuare una liquidazione parziale dell'assegnazione

Il bottone **Liquidazione senza fattura** consente di inserire una "liquidazione diretta", ovvero un documento senza assegnazione.

Il bottone **Cambia Atto di Liquidazione** consente di cambiare l'Atto presente al centro della finestra.

[Schermata con lista documenti da liquidare, stati verde/rosso, e pulsanti di liquidazione]

Il documento selezionato in precedenza passerà nella form in basso ed apparirà un messaggio di avvenuta liquidazione.

[Schermata con messaggio "E' stata creata la liquidazione relativa all'assegnazione del 2021_prog.35, riga 1"]

Nel caso si voglia annullare l'operazione e riportare il documento in alto (cancellando l'operazione) sarà possibile selezionare il documento e successivamente cliccare **Elimina**.

[Schermata con pulsante Elimina evidenziato]

Il bottone **Anteprima** consente di avere una prima stampa dell'Atto di liquidazione e di apportare modifiche e personalizzazioni tramite il bottone **Modifica stesura** con il programma di editor ONLYOFFICE; tutte le modifiche effettuate possono essere salvate grazie al bottone **Salva** ed incidono sul testo definitivo dell'Atto.

[Schermata Anteprima Atto di Liquidazione con pulsanti: Ragioneria, Scarica, Ricerca, Salva, Modifica Stesura, Genera allegato istruttore]

Il bottone **Genera allegato istruttore** consente di apporre la firma digitale sull'Atto di liquidazione. Tale funzione viene utilizzata dagli Enti che scelgono un "iter a firma multipla".

Il bottone **Rigenera**, ci da la possibilità di poter tornare alla versione originale del testo dell'Atto senza le modifiche.

Una volta inseriti tutti i documenti che si vogliono liquidare cliccare **Fasi Finali**.

[Schermata con pulsante Fasi Finali evidenziato]

Sarà possibile inserire degli allegati da collegare all'atto e poi procedere alla numerazione dell'Atto tramite il bottone **Numera Atto**.

**Non è possibile numerare un Atto che non contiene documenti.**

[Schermata Riepilogo Importi con tabella Competenza/Residuo/Totali e pulsanti Numera Atto e Allegati]

All'avvenuta numerazione dell'Atto ci sarà un popup che mostra il numero assegnato.

[Popup "Avvenuta numerazione" con messaggio: "Documento tipo AL - Decreto di Liquidazione, Area-Settore-Servizio: 01.07.01.00 - Ufficio Progettazione, Assegnato numero 424 del 22/06/2022"]

Successivamente sarà possibile procedere alla stesura del testo dell'Atto tramite il bottone **Stesura Atto**.

Quindi verrà prodotto il documento formato PDF dell'atto di liquidazione.

Cliccare **Stesura Definitiva**.

[Schermata Stesura Atto con anteprima PDF del "PROVVEDIMENTO DI LIQUIDAZIONE" e pulsante Stesura Definitiva]

Infine è possibile scaricare in formato PDF l'Atto appena redatto.

[Schermata con pulsante Scarica evidenziato]

### 1.3 Metodo Veloce per Inserire e Firmare l'Atto con Iter Istruttore – Firmatario

L'istruttore inserisce l'atto senza numerarlo e vi associa tutti gli allegati di competenza dell'ufficio periferico es. Certificato Regolare Esecuzione, Durc.

Sull'Atto inserito è a posizione 10, cliccando sull'opzione firma, la procedura automaticamente:

1. Numera l'atto chiedendone conferma
2. Produce la stesura definitiva
3. Esegue le funzioni per la firma dell'atto secondo quanto definito dei parametri di personalizzazione

---

## 2. Atti di Liquidazione

### 2.1 Gestione Atti di Liquidazione

Per i filtri di ricerca e le posizioni dell'atto all'interno dell'iter formativo vedere paragrafo 1.1.

L'iter va definito tenendo conto di effettuare la numerazione ove possibile nello stesso momento in cui viene apposta la prima firma digitale in modo da avere la coincidenza della data dell'atto con quella della firma.

Si ricorda che gli estremi del provvedimento amministrativo e il responsabile del provvedimento, sono contenuti all'interno del flusso XML inviato alla Piattaforma Siope+ (nella tabella 10 - sezione Struttura Mandato).

Dal menù **Servizi Economici → Finanziaria → Uffici Periferici → Atti di Liquidazione**

In elenco saranno visibili solo gli Atti della propria struttura organizzativa o, in alternativa se si tratta di un utente globale, tutti gli Atti dell'Ente.

[Schermata del menu di navigazione: Servizi Economici → 10. Finanziaria → 110. Uffici Periferici → 110. Atti di liquidazione]

Selezionando un Atto si attiveranno le varie funzioni tra cui:

- **Anteprima**: si veda sopra
- **Annulla Numero**: consente di annullare il numero dell'Atto
- **Stesura Atto**: se l'Atto è in una posizione consona (20) è possibile fare la stesura definitiva e portarlo a posizione 30.
- **Firma**: Consente di firmare digitalmente gli Atti a posizione 30. In base all'iter scelto dall'Ente l'Atto verrà portato a posizione 35 o 40.
- **Documenti Collegati**: mostra i documenti liquidati con l'Atto
- **Allegati**: gestione allegati all'Atto
- **Totali**: mostra i totali finanziari dell'Atto

[Schermata elenco Atti di Liquidazione con pannello funzioni a destra: Nuovo, Atto Ricorrente, Anteprima, Annulla Numero, Stesura Atto, Firma, Documenti Collegati, Allegati, Visualizza unico documento, Totali, Scarica unico documento]

---

## 3. Tipologia Atto di Liquidazione

La configurazione di base viene fatta sui parametri generali.

[Schermata "Determine di Liquidazione/Riscossione" con parametri: Codice Numeratore per numerazione visto, Verifica Stesso CIG nella Determina, Inserimento Riscossioni senza Atto, Inserimento Liquidazioni senza Atto, Data verifica per documenti senza iter/atto, Firma digitale su atti liq./risc. (Attivata (firma digitale dopo numerazione)), Agg. firmatario stesura definitiva, Label firmatario RUP, Label firmatario proposta]

Sono possibili le seguenti opzioni:

1. **ATTIVATA** (firma digitale dopo numerazione)
2. **ATTIVITA** con controllo utente firmatario
3. **Utilizzo immagine firma**

Ogni tipologia di atto può avere delle particolarità rispetto alle impostazioni di base, quindi l'iter della formazione dell'Atto di liquidazione può essere definito secondo le esigenze operative dell'ente nella tabella degli Organi Deliberanti.

Questo consente di avere tipologie di atti di liquidazione con iter diversi, esempio, un atto di liquidazione per una sola firma digitale prodotto da un determinato servizio ed un atto di liquidazione con testo diverso e 2 firme digitali, prodotto da un servizio diverso.

Dal menù: **Servizi Economici → 120. Modulo Base → 30. Struttura Ente → 20. Organigramma → 110. Organi Deliberanti**

Di seguito sono elencate le configurazioni e le operazioni aggiuntive per le diverse tipologie di Atti di Liquidazione che sono possibili con implementazioni apportate al programma e disponibili da inizio Luglio 2022.

Esse sono:

1. D.L con doppia firma digitale del prefirmatario e firmatario. Non viene verificata la coincidenza dell'utente prefirmatario con il C.F. presente su certificato di firma
2. D.L con doppia firma digitale del prefirmatario e firmatario. Viene verificata la coincidenza dell'utente prefirmatario con il C.F. presente su certificato di firma
3. D.L. con firma elettronica o immagine grafometrica del prefirmatario
4. D.L. con allegato generato dal prefirmatario prima della numerazione
5. D.L. con doppia firma digitale ed allegato generato all'inserimento della proposta dall'istruttore

### 3.1 A.L. con Firma Digitale Prefirmatario (Non Avvengono Controlli sulla Firma del Prefirmatario)

**Configurazione Parametri:**

[Schermata configurazione parametri con campi: Descrizione (D.L. Pref. firma digitale), Richiesta definizione pianta organica (✓), Richiesta numero atto (☐), Salvataggio solo per stampa definitiva (✓), Tipo Organo Deliberante (Atto del dirigente), Descrizione atto obbligatoria (✓), Modo cancellazione testo salvato, Entrata - Crea atto automaticamente (No), ENTRATA - Assegna visto automaticamente (No), SPESA - Crea atto automaticamente (No), SPESA - Assegna visto automaticamente (No)]

**Firme decreto:**

| Parametro | Valore |
|-----------|--------|
| Modalità Pre firma | Attivata con firma digitale dopo la numerazione - p.35 |
| Modalità firma RUP | Attivata con controllo utente firmatario |

La configurazione evidenziata, prevede la firma dei 2 soggetti. Al momento della firma del Responsabile del procedimento o Servizio **NON** viene verificato che il C.F dell'utente corrisponda con il C.F. del certificato presente sulla firma utilizzata.

Una volta che l'utente istruttore avrà creato l'atto ed eventualmente l'allegato tramite il bottone "Genera allegato istruttore", l'utente prefirmatario potrà procedere alla firma digitale senza che venga effettuato un controllo sull'utente che sta effettuando l'operazione.

Se l'utente è dotato di firma remota ARUBA con OTP o della firma remota fornita dalla Camera di Commercio utilizza la funzione: "vai alla firma remota" che consente di firmare direttamente (all'interno di CWOL) tramite codice OTP; in alternativa si deve effettuare la firma esterna con la funzione di scarica tutti, firma e carica tutti.

[Schermata "Gestione firma - Allegato istruttore" con pulsante "Vai alla Firma Remota"]

1. Quando il prefirmatario appone la sua firma **NON** avviene il controllo utente dalla struttura organizzativa e sul C.F. presente nel certificato di firma.
2. Il controllo è invece presente nel momento della firma del RUP.

### 3.2 A.L. con Firma Digitale Prefirmatario e Controllo Utente Prefirmatario

**Configurazione Parametri:**

[Schermata configurazione parametri con campi: Descrizione (D.L. Pref. firma digitale controllata), Richiesta definizione pianta organica (✓), Richiesta numero atto (☐), Salvataggio solo per stampa definitiva (✓), Tipo Organo Deliberante (Atto del dirigente), Descrizione atto obbligatoria (✓), Modo cancellazione testo salvato, Entrata - Crea atto automaticamente (No), ENTRATA - Assegna visto automaticamente (No), SPESA - Crea atto automaticamente (No), SPESA - Assegna visto automaticamente (No)]

**Firme decreto:**

| Parametro | Valore |
|-----------|--------|
| Modalità Pre firma | Attivata con firma digitale dopo la numerazione (con controllo utente firmatario) - p.35 |
| Modalità firma RUP | Non attivata |

La Modalità di firma del Rup viene reperita sulle configurazioni generali e non del singolo Atto.

Una volta che l'utente istruttore avrà creato l'atto e l'allegato tramite il bottone "Genera allegato istruttore", l'utente prefirmatario potrà procedere alla firma digitale con un controllo sull'utente che sta effettuando l'operazione.

1. Quando il prefirmatario appone la sua firma avviene il controllo utente dalla struttura organizzativa e sul C.F. presente nel certificato di firma.
2. Il controllo al momento della firma del Rup viene fatto in base ai parametri impostati nella tabella dei parametri generali, che all'esempio indicato al paragrafo 3, **NON** prevede il controllo.

### 3.3 A.L. con Firma Elettronica Grafometrica Prefirmatario su Stesura Definitiva con Controllo Utente Prefirmatario

**Configurazione Parametri:**

[Schermata configurazione parametri con campi: Descrizione (D.L. Pref. stesura definitiva), Richiesta definizione pianta organica (✓), Richiesta numero atto (☐), Salvataggio solo per stampa definitiva (✓), Tipo Organo Deliberante (Atto del dirigente), Descrizione atto obbligatoria (✓), Modo cancellazione testo salvato, Entrata - Crea atto automaticamente (No), ENTRATA - Assegna visto automaticamente (No), SPESA - Crea atto automaticamente (No), SPESA - Assegna visto automaticamente (No)]

**Firme decreto:**

| Parametro | Valore |
|-----------|--------|
| Modalità Pre firma | Stesura definitiva dopo la numerazione - p.30 |
| Modalità firma RUP | Non attivata |

Prevede che il programma applichi l'immagine elettronica della firma al momento della stesura definitiva che avviene dopo la numerazione.

La Modalità di firma del Rup nell'esempio, viene reperita sulle configurazioni generali e non del singolo Atto.

Si procede alla numerazione dell'atto come spiegato nel precedente paragrafo.

Successivamente procederemo con la stesura definitiva del Atto.

Viene prodotto il documento che riporta la firma elettronica grafometrica del prefirmatario applicata al testo in fase di stesura definitiva, con controllo utente.

A seguire il Rup/responsabile del servizio procederà con la firma finale dell'Atto con i controlli previsti nei parametri generali.

### 3.4 A.L. con Allegato Generato dal Prefirmatario Prima della Numerazione

**Configurazione Parametri:**

[Schermata configurazione parametri con campi: Descrizione (D.L. Pref. stesura proposta con allegato), Richiesta definizione pianta organica (✓), Richiesta numero atto (☐), Salvataggio solo per stampa definitiva (✓), Tipo Organo Deliberante (Atto del dirigente), Descrizione atto obbligatoria (✓), Modo cancellazione testo salvato, Entrata - Crea atto automaticamente (No), ENTRATA - Assegna visto automaticamente (No), SPESA - Crea atto automaticamente (No), SPESA - Assegna visto automaticamente (No)]

**Firme decreto:**

| Parametro | Valore |
|-----------|--------|
| Modalità Pre firma | Stesura proposta con allegato prima della numerazione - p.15 |
| Modalità firma RUP | Non attivata |

Prima della numerazione viene effettuata una stesura della proposta da parte dell'utente preposto al controllo, che ne verifica la completezza e la rispondenza dei dati contabili con quelli cartacei, produce un allegato che viene annesso alla bozza di Atto in itinere.

La Modalità di firma del Rup viene reperita sulle configurazioni generali e non del singolo Atto.

Nell'Atto di liquidazione avviene la stesura proposta da parte del prefirmatario con l'aggiunta di un allegato e con controllo utente.

Una volta generata, verrà creato un allegato.

[Popup "Info: Creato Allegato con firma proponente stesura"]

Vedremo l'atto con l'allegato dall'elenco degli atti.

L'allegato è consultabile tramite la "graffetta":

[Schermata "Gestione allegati" con elenco allegati e colonna Nome file]

### 3.5 A.L. con Doppia Firma Digitale ed Allegato Generato all'Inserimento della Proposta dall'Istruttore

**Configurazione Parametri:**

[Schermata configurazione parametri con campi: Descrizione (D.L. Pref. proposta allegato firmato dig.), Richiesta definizione pianta organica (✓), Richiesta numero atto (☐), Salvataggio solo per stampa definitiva (✓), Tipo Organo Deliberante (Atto del dirigente), Descrizione atto obbligatoria (✓), Modo cancellazione testo salvato, Entrata - Crea atto automaticamente (No), ENTRATA - Assegna visto automaticamente (No), SPESA - Crea atto automaticamente (No), SPESA - Assegna visto automaticamente (No)]

**Firme decreto:**

| Parametro | Valore |
|-----------|--------|
| Modalità Pre firma | Stesura proposta con allegato con firma digitale prima della numerazione - p.15 |
| Modalità firma RUP | Non attivata |

Con questa opzione l'istruttore produce la stesura provvisoria della bozza di Atto non numerato, che può contenere la firma dell'istruttore.

L'allegato viene inserito automaticamente tra gli allegati della nascente determina di liquidazione.

Il prefirmatario produce un secondo allegato che firma digitalmente ed allega alla determina.

L'Atto di liquidazione contiene 2 allegati, quello dell'istruttore (non firmato digitalmente) e quello del prefirmatario firmato digitalmente.

Al momento della firma digitale del prefirmatario avviene un controllo utente.

La procedura memorizza in automatico l'allegato firmato dal prefirmatario.

[Popup "Info: Creato Allegato con firma proponente stesura"]

Vedremo la proposta di atto con l'allegato dall'elenco degli atti.

L'allegato è consultabile tramite la "graffetta":

[Schermata "Gestione allegati" con elenco allegati]

Il responsabile del servizio effettua:

1. numerazione
2. stesura definitiva
3. Firma digitale

Per la firma digitale valgono i controlli dell'utente firmatario specificati negli altri casi.

---

## 4. Relazione tra CIG e Motivo Esclusione CIG con Documenti e A.L.

Le nuove misure di controllo prevedono:

### 4.1 Accettazione Documento

**CIG:**

Al momento dell'accettazione la procedura mostra se il documento in entrata contiene il CIG, si rammenta che la mancanza del CIG è un motivo valido per rifiutare la fattura.

In presenza di CIG ne viene mostrato il codice, la presenza della descrizione indica che tale CIG è presente negli archivi di CWOL, se il codice CIG è assente l'utente ha la possibilità di inserire il CIG nella tabella. Sul CIG indicato viene controllato:

- la **capienza**, controllando l'imponibile della fattura con l'importo ancora disponibile sul CIG
- la **validità del CIG**. Se la data fattura è posteriore alla data fine del CIG ne viene data segnalazione di WARNING.

[Schermata "Dati generali del documento da XML" con campi: Data acquisizione, Identificativo documento, Tipologia documento, Numero documento, CIG, Causale, Nome flusso, Codice ufficio fatturazione, Data documento, Importo totale documento, Valuta]

### 4.2 Contabilizzazione e Assegnazione Documento

**CIG:**

Valgono le stesse regole indicate nell'accettazione.

**MOTIVO ESCLUSIONE CIG (in assenza di CIG):**

Nella contabilizzazione del documento di spesa, in fase di ASSEGNAZIONE deve essere indicato un motivo valido alla data di registrazione. **CONTROLLO BLOCCANTE**

Attualmente il motivo di esclusione è presente sull'impegno, se sull'impegno è presente un motivo di esclusione non più valido deve essere sostituito con uno valido alla data e viene sostituito con quello presente sull'impegno.

### 4.3 Liquidazione

**CIG:**

Vengono ripetuti i controlli dell'accettazione e contabilizzazione con segnalazione **non bloccante**.

**MOTIVO ESCLUSIONE CIG:**

Vengono eseguiti i controlli della contabilizzazione con segnalazione **non bloccante**.

Messaggio di **WARNING** non bloccante per permettere all'ufficio periferico di poter continuare con le operazioni, ma in caso di WARNING dovrà essere comunicato alla ragioneria.

### 4.4 Visto Ragioneria su A.L.

**CIG:**

Vengono ripetuti i controlli precedenti, con controlli **bloccanti** e possibilità di modificare il documento dove si presenta l'anomalia.

**MOTIVO ESCLUSIONE CIG:**

Vengono ripetuti i controlli fatti in fase di assegnazione, in caso di anomalia il **CONTROLLO è BLOCCANTE** se il motivo esclusione CIG non corrisponde con i controlli di cui sopra.

Viene presentato il documento/i per permettere la correzione con un motivo valido alla data attuale.

L'eventuale motivo no CIG corretto viene sostituito anche nell'impegno.

---

## Come Attivare la Gestione su CWOL – Parte 1

La procedura presente su CWOL per la modifica del testo di atti, opera integrata con il programma di videoscrittura ONLYOFFICE, che consente di modificare il testo generato in automatico dalla procedura e lo salva nel repository documentale 'Alfresco' per la consultazione ed il futuro invio in conservazione sia nel caso in cui l'atto è firmato in maniera cartacea o nel caso sia firmato in maniera digitale.

Per attivare la Gestione su CWOL occorre concordare con il servizio di assistenza il supporto per:

1. Definire i template dei Testi da utilizzare per ogni tipologia di Atto
2. Parametrizzare nelle tabelle Generali la tipologia ed il template di default

[Schermata "Testi e parametri per atti di liquidazione" con campi: Testo da utilizzare in CWonline, Tipo atto di liquidazione, e sezione "Testi e parametri per atti di riscossione"]

3. In presenza di più tipologie di atto, riportare sulla struttura organizzativa la tipologia di atto in uso e il relativo testo

[Schermata struttura organizzativa con tab "Utenti Organigramma" e sezioni "Determine Riscossioni" e "Determine Liquidazione" con campi Testo da utilizzare e Tipo atto di liquidazione]

4. In funzione dell'iter o degli iter che l'Ente intende adottare, parametrizzare sui Parametri Generali le modalità di firma e gli attori interessati

[Schermata "Determine di Liquidazione/Riscossione" con parametri: Codice Numeratore per numerazione visto, Verifica Stesso CIG nella Determina, Inserimento Riscossioni senza Atto, Inserimento Liquidazioni senza Atto, Data verifica per documenti senza iter/atto, Firma digitale su atti liq./risc., Agg. firmatario stesura definitiva, Label firmatario RUP, Label firmatario proposta]

---

## Come Attivare la Gestione su CWOL – Parte 2

5. Verificare il sistema di firma in uso; se si usa l'immagine della firma elettronica scansionare l'immagine e memorizzarla dietro i singoli utenti, se si usa la firma digitale verificare le firme di tutti gli operatori interessati a firmare

[Schermata "Immagine" con campi: Immagine, Larghezza (220.00000), Altezza (114.00000), pulsante Rimuovi, e anteprima immagine firma]

6. Testo operativo su CWOL per verificare tutte le fasi di produzione dell'Atto di liquidazione

7. Al bisogno pianificare la formazione per le diverse tipologie di utenti che intervengono nella produzione:
   - a. Istruttore che crea la proposta di Atto e vi appongono tutti gli allegati
   - b. Soggetti che verificano, numerano e firmano l'Atto
   - c. Ragioneria per la presa in carico e visto contabile