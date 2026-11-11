# Manuale Autorizzazioni Utente Ruoli Organigramma

**Software:** CWOL - Autorizzazioni - Modulo Base

---

## 1. Premessa

Al momento le autorizzazioni degli utenti vengono rilasciate tramite la configurazione 'Autorizzazioni Utenti'.

Per semplificare la gestione delle autorizzazioni agli utenti "simili" è stato introdotto il rilascio delle autorizzazioni a livello di ruolo (il ruolo di ogni utente viene collegato alla pianta organica tramite la configurazione 'Utenti organigramma e Funzionigramma'). All'utente possono essere assegnati diversi ruoli **ma uno ed uno solo** su ogni ramo della pianta organica.

Esistono poi delle autorizzazioni specifiche per ogni modulo: nel caso dei servizi economici, ad esempio, vi è la possibilità di personalizzare le operatività sul bilancio impegni e sui documenti mediante le tabelle 'Definizione Bilancio e Funzioni per utente'.

> **Nota:** Tale Funzionalità è disponibile solamente su Cityware online mentre il funzionamento su Cityware rimarrà inalterato.

Per attivarla occorre effettuare le seguenti operazioni:

- Definire i ruoli
- Rilasciare le autorizzazioni per ruolo
- Associare gli utenti al ruolo tramite l'Organigramma
- Definire tramite la configurazione 'Definizioni bilancio e Funzioni utente' il reperimento delle autorizzazioni per ruolo

### 1.1 Concetti Generali

La scelta di utilizzare le autorizzazioni per Utente o Ruolo può essere fatta a livello di Applicativo e/o specializzata a livello di utente.

#### A livello di ENTE:

Sulla configurazione 'Impostazioni generali applicativo' è stato aggiunto il parametro che permette di scegliere la modalità di lavoro delle autorizzazioni standard.

[Schermata: Percorso menu - 150. Servizi Economici → 110. Modulo Base → 10. Impostazioni generali → 10. Impostazioni applicativo]

Dove sarà possibile scegliere la modalità standard per l'Applicativo:

[Schermata: Tab "Altro" con campo "Modo gestione autorizzazioni" impostato a "Da utente"]

- **0** = a livello di utente
- **1** = a livello di ruolo

#### A livello di UTENTE:

Tramite la configurazione degli utenti viene specificato se l'utente opera con l'opzione generale dell'Applicativo oppure in maniera personalizzata.

[Schermata: Gestione Utenti → tab "Dati CityWare" → campo "Autorizzazioni" con dropdown "Da ruolo"]

- **0** = come da impostazioni applicativo
- **1** = da utente
- **2** = da ruolo

### 1.2 Tabella Ruoli

La configurazione consente di definire i ruoli all'interno dell'Ente a cui saranno associate le specifiche autorizzazioni.

È disponibile dal seguente percorso:

[Schermata: Percorso menu - 150. Servizi Economici → 110. Modulo Base → 30. Struttura Ente → 20. Organigramma → 60. Ruoli]

E consente di definire i vari ruoli all'interno dell'ente.

[Schermata: Gestione "Ruoli organigramma" con campi Descrizione, Alias, Tipo operatore, e tabella "Utenti associati al Ruolo" con colonne: Codice utente, Desc. agg. Ruolo, Area, Settore, Servizio, Ufficio, Descrizione, Data Inizio, Data Fine, Cod Tipo op., Des. Tipo op.]

#### Nota per Tipo Operatore:

Il tipo di operatore consente di estendere o restringere i controlli sul servizio assegnatario. Se le autorizzazioni vengono reperite per utente il parametro sarà reperito dalla configurazione 'Definizioni Bilancio e funzioni per utente' con le stesse funzionalità.

I due campi possono assumere i seguenti valori:

| Valore | Descrizione |
|--------|-------------|
| **0 = Generico** | Nessun controllo particolare (l'utente opera sui servizi autorizzati con le autorizzazioni proprie) |
| **1 = RUP** | Gestione Accertamenti/impegni, documenti, cig e CUP viene ristretta l'operatività solo dove l'utente è individuato come rup sui servizi abilitati |
| **2 = Dirigente** | Nessun controllo particolare sulle autorizzazioni e servizi come 0. Il tipo operatore=2 serve per gli enti con bilancio annuale (vedere tabella 'Definizione e operabilità – parametri generali' flag 'Gestione bilancio' = annuale) per attivare, in lista impegni, la funzione "Riepilogo degli Impegni selezionati per Assegnatario". Oltre ad avere il tipo operatore = Dirigente, per essere visibile l'utente deve avere anche FBI/6 almeno = 'L'. Per gli altri tipi operatori è nascosta; con Bilancio annuale il bottone è nascosto. |
| **3 = Operatore Ragioneria** | Se le autorizzazioni sono per ruolo: si assumono le autorizzazioni presenti sul ramo della pianta organica definito come default e si estendono a tutti i servizi (caso ragioneria associato ad un area-settore servizio ma che può operare su tutto il bilancio). Se le autorizzazioni sono per utente: prendono le autorizzazioni da estendere vengono reperite da 'Definizione Bilancio e funzioni per utente' |

Vedi esempi nel paragrafo 'Esempi tipo operatore'.

### 1.3 Autorizzazioni per Ruolo

È la configurazione che consente di definire le autorizzazioni per ruolo (corrispondente a 'Autorizzazioni Utenti' nel caso in cui le autorizzazioni vengono reperite per utente).

È possibile raggiungerla tramite il seguente percorso:

[Schermata: Percorso menu - 150. Servizi Economici → 110. Modulo Base → 30. Struttura Ente → 20. Organigramma → 60. Ruoli → 70. Autorizzazioni Ruoli]

Permette di definire le autorizzazioni sui vari moduli per singolo ruolo.

[Schermata: Tabella autorizzazioni per ruolo con tab: MODULO BASE, ATTI AMMINISTRATIVI, DEMOGRAFICI, SERVIZI ECONOMICI, CONTROLLO DI GESTIONE, SERVIZI A DOMANDA INDIVIDUALE, TRIBUTI LOCALI. Sotto tab SERVIZI ECONOMICI: sottomenu con moduli (FAC-ACQUISTI, FBA-BILANCIO ARMONIZZATO, FBI-BILANCIO PREVISIONE, FBM-INVENTARIO BENI MOBILI, FCA-CONTAB.ANALITICA, ecc.) e tabella con colonne PROG, DESCRIZIONE, AUT, DESCRIZIONE]

### 1.4 Utenti Organigramma e Funzionigramma

È la configurazione che consente di abbinare gli utenti all'organigramma ed al ruolo in base alle proprie mansioni.

È raggiungibile tramite il seguente percorso:

[Schermata: Percorso menu - 150. Servizi Economici → 110. Modulo Base → 30. Struttura Ente → 20. Organigramma → 100. Utenti Organigramma e Funzionigramma]

E permette di abbinare, per ogni utente, il codice dell'organigramma ed il relativo ruolo.

[Schermata: "Utenti Organigramma e Funzionigramma" con campi: Codice utente, Aut. reperite da (Ruolo), Data Inizio, Data Fine, Servizio Richiedente (Area/Settore/Servizio/Ufficio), Servizio di default, Ruolo, Descrizione aggiuntiva ruolo, Prog. Ruolo, Codice Ruolo, Codice Tipo Operatività]

Consente inoltre di indicare il tipo operatività sull'inserimento dei documenti, visualizzazione accertamenti-impegni e operazioni su atti di riscossione/liquidazioni in base alla configurazione 'Codice Tipo Operatività'.

[Schermata: "Tipi Operatività su ciclo passivo-attivo" con sezioni: Operatività Utente Entrate (Operaz. su Accertamenti, Operazioni su Riscossioni, Num. Accert. x Assegnaz, Reg. Entrata in CO.ANA) e Operatività Utente Uscite (Operazioni su Impegni, Operatività ciclo passivo, Operazioni su Liquidazioni, Num. Impegno x Assegnaz, Reg. Uscita in CO.ANA)]

Nel caso di autorizzazioni per Utente tale informazioni vengono reperite 'vecchia maniera' e cioè mediante la configurazione 'Definizione bilancio e funzioni per utente'.

### 1.5 Definizione Bilancio e Funzioni per Utente

Consente di personalizzare i criteri per l'operatività dei vari utenti sul modulo servizi Economici.

È raggiungibile tramite il seguente percorso:

[Schermata: Percorso menu - 80. Servizi Economici → 90. Tabelle → 10. Configurazioni → 40. Operatività specifiche per Utente]

E consente di definire le varie possibilità di lavoro dei singoli utenti.

[Schermata: "Definizione bilancio per Utente" con campi: Utente operatore, Autorizzazioni (Da ruolo), Navigazione su Bilancio, Modo navigazione su richieste di bilancio, Visibilità su ciclo attivo, Visibilità su ciclo passivo, Modifica testo non consentita, Uscita: controllo congruenza fornitore, N° Giorni avviso per documento in scadenza, Doc. in scadenza da visualizzare, Vis.Esiti Import.Batch flussi SDI, Situazione cliente, Situazione fornitore]

**1** – Scelta reperimento autorizzazioni

**2** – Navigazione su bilancio (solo voci assegnate tramite utenti-Organigramma): indica di reperire il ruolo tramite l'organigramma

#### Riepilogo campi presenti sulla configurazione 'Definizione bilancio e funzioni per utente' e significato

| Nome Campo | Funzionalità |
|------------|--------------|
| **Navigazione su bilancio** | E' la modalità base con cui si stabilisce se l'utente può vedere e/o gestire bilancio, gli impegni, i documenti. Per quanto riguarda il bilancio il flag testato è solo questo mentre per le richieste, gli impegni e i documenti ci possono essere dei restringimenti/eccezioni descritti sui campi successivi. **0** = Navigazione su tutto il bilancio. **1** = Solo voci, impegni, documenti assegnati all'area-settore-servizio a cui l'utente è collegato tramite 'Definizione bilancio e funzioni per utente'. **2** = tramite funzionigramma cityware client (la lista dei servizi a cui l'utente è autorizzato viene reperita tramite la tabella Servizi - Disponibile dal programma 'Definizione Bilancio e Funzioni per utente') |
| **Modo navigazione su richieste di bilancio** | Specifica il restringimento sulla visualizzazione delle richieste di bilancio. **0** = tutto il bilancio. **1** = solo voci assegnate ai servizi a cui l'utente è associato tramite 'Utenti Organigramma e Funzionigramma' |
| **Visibilità su ciclo attivo** | Consente di estendere le autorizzazioni dell'utente (in sola visualizzazione) sulle varie fasi del ciclo attivo: Accertamenti, atti riscossione, documenti reversali). **0** = come navigazione su bilancio. **1** = Visualizzazione di tutti gli accertamenti e le reversali. Nel caso in cui l'utente abbia il flag 'Navigazione su Bilancio = 1 (parziale) e questo flag vale 1-'Tutti gli accertamenti' consente all'utente di vedere tutte le entrate pur avendo una navigazione parziale su bilancio. Per dettagli vedere i paragrafi eccezioni su accertamenti/impegni, liquidazioni e documenti più in basso |
| **Visibilità su ciclo passivo** | Vedi sopra – solo che questo serve per impegni atti di liquidazione documenti - mandati |
| **Modifica testo non consentita** | L'utente non è autorizzato a modificare il testo dell'Atto di Riscossione/Liquidazione |
| **Uscita: controllo congruenza fornitore** | In fase di liquidazione fatture viene attivato il controllo sulla congruenza del codice soggetto presente in fattura con quello presente sull'Impegno |
| **Numero Giorni avviso per documento in scadenza** | Numero di giorni da prendere in considerazione per il calcolo del periodo di preavviso dei documenti in scadenza. Se valorizzato abilita l'apertura automatica della finestra di interrogazione dei documenti scaduti. |
| **Documenti in scadenza da visualizzare** | Consente di scegliere se visualizzare o meno le fattura già liquidate all'apertura dello scadenziario. **0** = Solo documenti da liquidare. **1** = documenti da liquidare e liquidati |
| **Vis. Esiti Import. Batch flussi SDI** | Il flag consente di personalizzare la visualizzazione degli esiti di scarto da importazione massiva per fatturazione elettronica: **0** = Nessun automatismo, la finestra va richiamata dall'operatore. **1** = Emette messaggio di avvertimento se vi sono degli scarti da visualizzare. **2** = Apre automaticamente la finestra di visualizzazione degli scarti |
| **Situazione cliente** | Consente all'utente di estendere la visualizzazione dei documenti per cliente (Estratto Conto) anche se l'utente ha una visibilità parziale sul Bilancio. **0** = solo documenti assegnati ai servizi a cui l'utente è associato tramite Utente Organigramma e Funzionigramma. **1** = tutti anche se utente con modo navigazione bilancio parziale |
| **Situazione Fornitore** | Come sopra solo che utilizzato per documenti per fornitore |

### 1.6 Login Utente e Scelta Ruolo

Al momento dell'accesso al software, nel caso in cui le autorizzazioni dell'utente che effettua il login risultano essere reperite dal Ruolo, il programma reperisce il ruolo di default dell'utente e lo mostra nella parte in alto a Dx della videata.

[Schermata: Barra superiore con indicazione "Utente: XDIRIGENTE - Ruolo: dirigente SETTORE"]

E l'utente lavorerà assumendo le autorizzazioni associate al ruolo visualizzato.

Nel caso in cui l'utente, per esigenze di servizio e/o deleghe, risulti associato a più ruoli è possibile cambiare il ruolo con cui lavorare cliccando sul ruolo corrente.

[Schermata: Barra "Utente: XDIRIGENTE - Ruolo: dirigente SETTORE" con freccia indicante il click sul ruolo]

Scegliendo il nuovo ruolo:

[Schermata: "Gestione parametri base" con dropdown Ruolo contenente: "2 - dirigente SETTORE", "Nessun ruolo selezionato", "2 - dirigente SETTORE", "9 - RUP" e pulsante "Applica"]

Il ruolo di default viene reperito dall'associazione dell'utente sulla configurazione Utenti Organigramma definito come default.

[Schermata: "Utenti Organigramma e Funzionigramma" con checkbox "Servizio di default" spuntata]

O in mancanza di esso se l'utente risulta associato ad uno ed un solo servizio viene reperito il ruolo presente sull'unico servizio associato.

### 1.7 Eccezioni

#### 1.7.1 Eccezioni su richieste di bilancio

Autorizzazione controllate per accesso:

- (solita logica L = Lettura, G = Gestione -senza cancellazione, C = Gestione + cancellazione)
- per verifica
- per attribuzione

Controlli in base all'organigramma sono pilotati dalla 'Navigazione su Bilancio' presente nella configurazione 'Definizione Bilancio e funzioni per utente' con possibilità di specializzarli in base al parametro 'Modo navigazione su richieste di bilancio' (presente sulla stessa configurazione).

**Esempio:**

[Schermata: "Definizione bilancio per Utente" con Navigazione su Bilancio = "Tutto il bilancio" e Modo navigazione su richieste di bilancio = "Solo voci assegnate ai servizi a cui l'utente è associato tramite Utente Organ."]

L'utente sarà autorizzato ad operare su tutto il bilancio ma potrà visualizzare/operare sulle richieste del proprio servizio.

#### 1.7.2 Eccezioni su Voci di Bilancio

Autorizzazione controllate per accesso (L = Lettura, G = Gestione -senza cancellazione, C = Gestione + cancellazione). Per la visualizzazione l'utente deve essere autorizzato al servizio assegnatario o responsabile mentre per la modifica può avvenire solo se l'utente è autorizzato al servizio Assegnatario della voce di bilancio.

#### 1.7.3 Eccezioni Accertamenti/Impegni

Autorizzazione controllate per accesso Accertamenti e Impegni.

Vengono visualizzati sulla lista gli impegni o accertamenti a cui l'utente è autorizzato come:

| Ruolo nell'impegno/accertamento |
|----------------------------------|
| Assegnatario dell'impegno |
| Assegnatario della voce di bilancio |
| Responsabile delle voci di bilancio |

La visibilità può essere estesa in base ai seguenti parametri presenti nella configurazione 'Definizione bilancio e Funzioni per utente'.

**Esempio:**

[Schermata: "Definizione bilancio per Utente" con Navigazione su Bilancio = "Solo voci assegnate ai servizi a cui l'utente è associato tramite Utente Organ." e Visibilità su ciclo passivo = "Tutti gli impegni, documenti e o..."]

Nell'esempio soprariportato l'utente autorizzato ad una porzione di Bilancio (Navigazione su Bilancio = solo voci assegnate) vedrebbe tutti gli impegni (Visibilità ciclo passivo = 'Tutti gli impegni').

Che consentono di visualizzare tutti gli impegni/accertamenti anche se l'utente è associato ad una porzione della pianta organica.

**Ristringere la visibilità in base al tipo operatore RUP:**

Se l'utente è associato al tipo operatore RUP prevale su tutto e viene applicato l'ulteriore filtro su campo RUP del CIG a cui gli impegni sono associati. In parole semplici se un utente è di tipo RUP può visualizzare solo gli impegni agganciati a CIG su cui l'utente stesso è RUP. Campo codice utente RUP = `<utente connesso>` (sempre dei servizi a cui è autorizzato).

Per accedere in modifica l'utente deve essere invece autorizzato al servizio assegnatario dell'impegno ed inoltre occorre testare il tipo dell'accertamento/impegni (Provvisorio o definitivo).

Se la navigazione è da impostazione solo voci assegnate secondo il nuovo organigramma, altrimenti reperire i valori da:

[Schermata: Pulsante "Riepilogo degli Impegni selezionati per Assegnatario"]

Vedi note per tipo operatore per attivare il bottone.

#### 1.7.4 Eccezioni Atti di Liquidazioni

Autorizzazione controllate per accesso in base al tipo operatività:

[Schermata: "Operatività Utente Uscite" con dropdown "Operazioni su Liquidazioni" contenente: 0 - Non consentita liquidazione, 1 - Assegnazione determina al documento (Modifica Testata, impegno e co.ana non consentiti), 2 - Assegnazione determina al documento e Co.Ana (Modifica Testata e impegno non consentita), 3 - Operatività su documento (Co.Ana non consentita), 4 - Operatività su documento e Co.Ana., 5 - Operatività su Liquidazione (Modifica Testata e co.ana non consentita), 6 - Operatività su Liquidazione e Co.Ana. (Modifica Testata non consentita)]

Oltre alla navigabilità su bilancio restringere la visibilità **per le sole uscite** in base al tipo operatore RUP.

Se l'utente è associato al tipo operatore RUP prevale su tutto e viene applicato l'ulteriore filtro sul campo rup degli atti di liquidazione. In parole semplici se un utente è di tipo RUP può visualizzare solo le liquidazioni su cui è definito come RUP sui servizi autorizzati.

#### 1.7.5 Eccezioni Documenti

Autorizzazione controllate per accesso -13-15.

Vengono visualizzati sulla lista i documenti a cui l'utente è autorizzato reperendo i servizi nella seguente maniera:

| Criterio di reperimento servizio |
|----------------------------------|
| Assegnatario dell'impegno presente sulla riscossione/Liquidazione |
| **oppure** Assegnatario dell'impegno presente sull'assegnazione o in mancanza dell'impegno sull'assegnazione l'area/settore/servizio dell'assegnazione stessa |

Oltre alla navigabilità su bilancio estendere in base alle configurazioni nell'operatività specifica per utente:

[Schermata: "Visibilità su ciclo passivo e attivo" con dropdown Visibilità su ciclo attivo = "Come navigazione su bilancio" e Visibilità su ciclo passivo con opzioni "Come navigazione su bilancio" / "Tutti gli impegni, documenti e ordinativi"]

[Tooltip: "Tutti gli impegni, documenti e ordinativi" consente di estendere la SOLA visualizzazione degli impegni, documenti e ordinativi indipendentemente dalla Navigazione del bilancio. Un esempio potrebbe essere l'utente che per esigenze particolari opera su una porzione di bilancio ma ha la necessità di dover visualizzare gli impegni e/o documenti di tutto l'ente.]

**Esempio:** un utente potrebbe essere associato ad un ramo della pianta organica ed avere la visibilità di tutti i documenti in base ai parametri sopraindicati.

**Ristringere la visibilità in base al tipo operatore RUP:**

Se l'utente è associato al tipo operatore RUP viene applicato l'ulteriore filtro su campo RUP del CIG a cui gli impegni associati ai documenti sono associati. In parole semplici se un utente è di tipo RUP può visualizzare solo i documenti associati ad impegni agganciati a CIG su cui l'utente stesso è RUP. Per il reperimento degli impegni vale la logica precedente (Impegno presente su liquidazione oppure su Assegnazione).

In dettaglio atto, se l'operatore è di tipo RUP il campo del codice utente Rup o Firmatario dirigente di una liquidazione non è modificabile.

#### 1.7.6 Eccezioni Estratto Conto

Oltre alla navigabilità su bilancio è possibile estendere la visibilità in base alle seguenti configurazioni:

[Schermata: "Visibilità su cruscotto documenti" con Situazione cliente = "Solo documenti assegnati ai servizi a cui l'utente è associato tramite Utente Organ. e Funz. (BOR, UTEORG)" e Situazione fornitore con dropdown "Tutti"]

Come documenti: esempio utente potrebbe essere associato ad un ramo della pianta organica ma fare l'estratto conto di tutti i documenti assegnati a qualsiasi ufficio o area dell'organigramma.

#### 1.7.7 Eccezioni CIG e CUP

Autorizzazione controllate per accesso BTA_42 CIG e BTA/43 (CUP).

Estendere inoltre la visibilità in base al seguente parametro:

[Schermata: Parametro di estensione visibilità]

Che consentono di visualizzare tutti gli impegni/accertamenti anche se l'utente è associato ad una porzione della pianta organica.

### 1.8 Riepilogo con Esempi

| REPERIM. AUTORIZZAZIONI: Ruolo o Utente | NAVIGAZIONE SU BILANCIO | SERVIZI | AUTORIZZAZIONI | OPERATIVITA' SU CICLO ATTIVO/PASSIVO | NOTE |
|---|---|---|---|---|---|
| Utente | Null (record di Funzionigramma nuovo non trovato) | nessuno | nessuna | nessuna | Messaggio 'Utente non abilitato in quanto non definito sulla tabella Definizioni Bilancio e Funzioni Utente' |
| Utente | 0 = Tutto il bilancio | Tutti, tutto il bilancio | Dal singolo utente | Dipende da configurazione entrata e uscita | Per compatibilità con Cityware |
| Utente | 1 = solo voci assegnate Utenti Organigramma Funzionigramma nuovo CWOL | **NON POSSIBILE**, configurazione valida solo se le autorizzazioni sono reperite da Ruolo | | | |
| Utente | 2 = da Organigramma di cityware omnis | Funzionigramma Cityware omnis | Dal singolo utente | Funzionigramma cityware omnis | Per compatibilità con Cityware |
| Ruolo | Null (record di operatività Funzionigramma nuovo non trovato) | nessuno | nessuno | nessuno | Msg come punto 1 |
| Ruolo | 0 = Tutto il bilancio | **NON POSSIBILE**: Bloccato da controlli. Per compatibilità con Cityware Online | | | |
| Ruolo | 1 = solo voci assegnate Utenti Organigramma Funzionigramma nuovo CWOL | Uffici e aree dell'organigramma CWOL con ruolo selezionato sui parametri di sessione (se tipo operatore ragioneria = Tutti i servizi, tutto il bilancio) | Quelle del ruolo associato nell'organigramma CWOL | Autorizzazioni operatività specifiche per utente reperita da organigramma Funzionigramma nuovo CWOL in base al servizio e il tipo operatività impostato. | CWOL |
| Ruolo | 2 = da funzionigramma di cityware omnis | **NON POSSIBILE**, impostazione 2: Bloccato poiché valido solo se autorizzato da utente | | | |

#### 1.8.1 Configurazione ideale da RUOLO

[Schermata: "Definizione bilancio per Utente" con Autorizzazioni = "Da ruolo", Navigazione su Bilancio = "Solo voci assegnate ai servizi a cui l'utente è associato tramite Utente Organ.", Modo navigazione su richieste di bilancio = "Solo voci assegnate ai servizi a cui l'utente è associato tramite Utente Organ."]

#### 1.8.2 Esempio da ruolo n.1

**Scelta ruolo**

Utente XRUP associato a 3 servizi e nessuno di default.

[Schermata: "Utenti Organigramma e Funzionigramma" con utente XRUP associato a: Area 01 Settore 30 Servizio 10 Ufficio 01 (Ruolo 8), Area 01 Settore 40 Servizio 01 Ufficio 01 (Ruolo 9), Area 01 Settore 40 Servizio 10 Ufficio 30 (Ruolo 9)]

Nessun servizio definito come default: all'apertura delle pagine CWOL verrà visualizzato il messaggio che non è stato possibile assegnare il ruolo di default e l'utente potrà scegliere tra il ruolo 8 e 9.

Se sceglie il ruolo 8 potrà lavorare con l'autorizzazione del ruolo 8 sul servizio 01.30.10.01; se invece sceglierà il ruolo 9 potrà lavorare sui servizi 01.40.01.10 e 01.10.10.30.

#### 1.8.3 Esempio 2

**Esempi con tipo operatore**

| UTENTE | RUOLO | TIPO OPERATORE | SERVIZIO ASSOCIATO | AUTORIZZAZIONI MINIMA RICHIESTA | ESITO | NOTE |
|--------|-------|----------------|--------------------|---------------------------------|-------|------|
| FRANCESCO | XRUP | RUP | 01.40.01.01 (vede solo i cig su cui è definito come RUP) | FBI-4: G + FBI-6: L se fa richieste; BTA-42: L per CIG; BTA-43: L per CUP; Modo NAV BILANCIO su utente: 2 (voci utente) o 4 (accesso tramite codice voce) | Vede tutti gli impegni e i documenti del servizio cui è associato e associati ai CIG cui è definito come RUP | Utilizza riepilogo CIG ed estrazioni su excel con i dati. Per le richieste di bilancio utilizza i codici o la paginazione in funzione dell'accesso al bilancio. |
| MARIO | XUFFICIO | NON SPECIFICATO (Resp. Ufficio) | 01.40.01.01 (è quello su cui opera con le autorizzazioni del ruolo) | Lettura bilancio, impegni e operatività su documenti (tipo atti di liquidazione). | Opera con le autorizzazioni possedute | Sostituire "non specificato" con "generico" e specificare che l'utente opera con le autorizzazioni e le funzioni proprie. |
| MARIO | XUFFICIO | NON SPECIFICATO (Resp. Ufficio) | 01.40.10.10 (è quello su cui opera con le autorizzazioni del ruolo) | A parità di CODICE ruolo i servizi associati si sommano. QUINDI SI HA L'ACCESSO CON LE STESSE AUTORIZZAZIONI SU TUTTI I SERVIZI ASSOCIATI | | Nelle consultazioni utilizza la consultazione budget per Dirigenti sopra indicato. |
| LUCIA | XDIRIGENTE | DIRIGENTE | 01.40.01.01 | Deve avere almeno Modo nav bilancio: 1 o in alternativa 0 se globale | Opera con le autorizzazioni possedute. | |
| LUCIA | XDIRIGENTE | DIRIGENTE | 01.40.10.10 | | | |
| ROSSI | XDIRIGENTE | DIRIGENTE | 01.30.05.00 | Nav. Bilancio: 1 e autorizzazioni per operare nel settore con atti di liquidazione, verifica budget e approva richieste. | | Deve essere possibile solo su questo settore |
| ROSSI | XRUPL (autorizzazione minima per consultare situazione CIG) | RUP | 01.30.01.00 | BTA-42: L per CIG; BTA-43: L per CUP; Modo NAV BILANCIO su utente: 2 (voci utente) o 4 (accesso tramite codice voce) | Non pagina bilancio, non pagina impegni. Vede il riepilogo degli impegni e i documenti associati ai CIG cui è definito come RUP del servizio 01.30.01.00 | Utilizza riepilogo CIG ed estrazioni su excel con i dati. L'utente deve dire il ruolo con cui intende operare dopo l'accesso al sistema |
| ROSSI | XUFFICIO | NON SPECIFICATO | 01.30.05.10 | SERVE A DEFINIRE operatività specifiche per un singolo servizio | | Ese. Assunzione impegni per il servizio, mentre si ha la consultazione su tutto il settore 01.30.05. |