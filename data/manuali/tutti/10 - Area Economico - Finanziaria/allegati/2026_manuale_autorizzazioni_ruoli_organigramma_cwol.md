# Autorizzazioni utente, ruoli e organigramma

## Argomenti trattati

- Autorizzazioni per ruolo in CWOL: concetti generali, attivazione e tabelle di gestione.
- Definizione bilancio e funzioni per utente, login e cambio ruolo.
- Eccezioni su richieste, impegni, documenti, CIG/CUP e tipo operatore RUP, con esempi.

---

## Premessa: autorizzazioni per ruolo

### Autorizzazioni per ruolo
- Per semplificare la gestione degli utenti «simili», le autorizzazioni sono rilasciate a livello di ruolo.
- Il ruolo è collegato alla pianta organica tramite «Utenti Organigramma e Funzionigramma».
- Un utente può avere più ruoli, anche sullo stesso livello dell'organigramma.

### Specifiche per modulo
- Ogni modulo ha autorizzazioni dedicate.
- Servizi economici: operatività su bilancio, impegni e documenti personalizzabile con «Definizione bilancio e funzioni per utente».

> In CWOL (Cityware online) si accede solo tramite ruolo.

---

## Legenda: i livelli di autorizzazione L, G e C

Ogni autorizzazione (FBI, BTA, FES, ...) si rilascia con un livello: questa legenda vale per tutto il manuale.

| Livello | Nome | Descrizione | Esempio |
|---------|------|-------------|---------|
| **L** | Lettura | Consente di vedere i dati, senza modificarli | BTA-42 = L per consultare i CIG |
| **G** | Gestione | Consente di inserire e modificare, senza cancellare | BTA/19 o BTA/21 (almeno G) per aggiornare l'anagrafica soggetto |
| **C** | Gestione + cancellazione | Come G, con in più la possibilità di cancellare | FBI/4 = C per gestire e cancellare le richieste di bilancio |

> «Almeno G» significa G oppure C. Senza alcun livello la funzione non è autorizzata.

---

## Come attivare le autorizzazioni per ruolo

1. **Definire i ruoli** — Tabella «Ruoli»
2. **Rilasciare le autorizzazioni per ruolo** — Tabella «Autorizzazioni Ruoli»
3. **Associare gli utenti al ruolo tramite l'organigramma** — Tabella «Utenti Organigramma e Funzionigramma»
4. **Definire il reperimento delle autorizzazioni per ruolo** — Tabella «Definizione bilancio e funzioni per utente»

---

## Concetti generali: impostazione a livello di ente

In CWOL l'applicativo lavora con le autorizzazioni a livello di ruolo.

**Percorso:** Servizi Economici › Modulo Base › Impostazioni generali

**Tabella «Impostazioni generali applicativo»** (tab *Altro*):

**Modo gestione autorizzazioni**
- Valore da impostare: **1 = a livello di ruolo**

[Schermata: menu di navigazione con percorso Servizi Economici › Modulo Base › Impostazioni generali e tabella «Impostazioni generali applicativo» con campo «Modo gestione autorizzazioni»]

---

## Concetti generali: impostazione a livello di utente

**Campo «Autorizzazioni» nella tabella utenti**
- Indica come l'utente reperisce le autorizzazioni:
  - **0** = come da impostazioni applicativo (per ruolo)
  - **2** = da ruolo

> La scheda utente si trova nel tab «Dati CityWare», campo «Autorizzazioni». In CWOL si usa solo l'accesso per ruolo.

[Schermata: Gestione Utenti, tab «Dati CityWare» con campo «Autorizzazioni» impostato su «Da ruolo»]

---

## Tabella ruoli: percorso di accesso

**A cosa serve**
- Definisce i ruoli all'interno dell'ente.
- A ogni ruolo vengono associate le specifiche autorizzazioni.

**Percorso**
- Servizi Economici › Modulo Base › Struttura Ente › Organigramma › Ruoli

[Schermata: menu di navigazione con percorso Servizi Economici › Modulo Base › Struttura Ente › Organigramma › Ruoli]

---

## Tabella ruoli: definizione di un ruolo

La scheda riporta descrizione, alias e tipo operatore del ruolo, con l'elenco degli utenti associati.

[Schermata: scheda «Ruoli organigramma» con campi Descrizione, Alias, Tipo operatore e griglia «Utenti associati al Ruolo»]

---

## Tipo operatore: estendere o restringere i controlli

Estende o restringe i controlli sul servizio assegnatario.

| Valore | Effetto |
|--------|---------|
| **0 = Generico** | Nessun controllo particolare: l'utente opera sui servizi autorizzati con le autorizzazioni proprie |
| **1 = RUP** | Accertamenti/impegni, documenti, CIG e CUP: l'operatività è ristretta ai casi in cui l'utente è il RUP, sui servizi abilitati |
| **2 = Dirigente** | Nessun controllo particolare. Con bilancio annuale abilita, in lista impegni, il bottone «Riepilogo degli impegni selezionati per Assegnatario» (serve almeno FBI/6 = L); per gli altri tipi operatore il bottone è nascosto |
| **3 = Operatore Ragioneria** | Le autorizzazioni del ramo di default si estendono a tutti i servizi (ragioneria associata a un servizio, ma operativa su tutto il bilancio) |

[Schermata: bottone «Riepilogo degli impegni selezionati per Assegnatario», abilitato per il tipo operatore Dirigente]

---

## Autorizzazioni per ruolo

Definisce le autorizzazioni sui vari moduli per singolo ruolo.

**Percorso del menu:** Servizi Economici › Modulo Base › Struttura Ente › Organigramma › Autorizzazioni Ruoli

[Schermata: scheda «Autorizzazioni Ruoli» con tab dei vari moduli (Modulo Base, Atti Amministrativi, Servizi Economici, ecc.) e griglia autorizzazioni FES con livelli AUT]

---

## Utenti Organigramma e Funzionigramma

Abbina gli utenti all'organigramma e al ruolo, in base alle rispettive mansioni.

**Percorso del menu:** Servizi Economici › Modulo Base › Struttura Ente › Organigramma › Utenti Organigramma e Funzionigramma

**Per ogni utente:** codice dell'organigramma e ruolo.

[Schermata: scheda «Utenti Organigramma e Funzionigramma» con codice utente, aut. reperite da, data inizio/fine, servizio richiedente, ruolo, codice tipo operatività]

---

## Tipo operatività specifica dell'utente

**Codice Tipo Operatività**
- Indica il tipo di operatività su:
  - inserimento dei documenti
  - visualizzazione di accertamenti e impegni
  - operazioni su atti di riscossione e liquidazione
- Si basa sulla tabella «Codice Tipo Operatività».

[Schermata: tabella «Tipi Operatività su ciclo passivo-attivo» con campi operatività entrate/uscite e funzioni obbligatorie]

---

## Definizione bilancio e funzioni per utente

Personalizza l'operatività sui Servizi Economici; con il ruolo reperisce le autorizzazioni dall'organigramma.

**Percorso:** Servizi Economici › Tabelle › Configurazioni › Definizione Bilancio e Funzioni per Utente

1. Scelta del reperimento delle autorizzazioni.
2. Navigazione su bilancio: solo voci assegnate tramite Utenti-Organigramma.

[Schermata: scheda «Definizione bilancio per Utente» con campi Autorizzazioni, Navigazione su Bilancio, Modo navigazione su richieste di bilancio, Visibilità su ciclo attivo/passivo]

---

## Campi della tabella «Definizione bilancio e funzioni»

Tabella **FTA_AUTUTE**. Con le autorizzazioni per ruolo, «Navigazione su bilancio» ammette solo il valore **1**.

| Campo | Funzionalità |
|-------|--------------|
| **Navigazione su bilancio** | Stabilisce se l'utente può vedere e/o gestire bilancio, impegni e documenti. Per ruolo vale solo **1** = voci, impegni e documenti assegnati all'area-settore-servizio dell'utente (Utenti Organigramma) |
| **Modo navigazione su richieste di bilancio** | Restringe la visualizzazione delle richieste. **0** = tutto il bilancio; **1** = solo voci assegnate ai servizi a cui l'utente è associato tramite «Utenti Organigramma e Funzionigramma» |
| **Visibilità su ciclo attivo** | Estende, in sola visualizzazione, le autorizzazioni sul ciclo attivo (accertamenti, atti di riscossione, documenti, reversali). **0** = come navigazione su bilancio; **1** = tutti gli accertamenti e le reversali, anche con navigazione parziale |
| **Visibilità su ciclo passivo** | Come sopra, per il ciclo passivo: impegni, atti di liquidazione, documenti e mandati |

---

## Login utente: ruolo di default

**All'accesso al software**
- Se le autorizzazioni sono reperite dal ruolo, il programma reperisce il ruolo di default dell'utente e lo mostra in alto a destra.
- L'utente lavora con le autorizzazioni associate al ruolo visualizzato.

[Schermata: barra superiore con «Utente: XDIRIGENTE - Ruolo: dirigente SETTORE» in alto a destra]

---

## Cambio ruolo e ruolo di default

1. Cliccare sul ruolo corrente.
2. Scegliere il nuovo ruolo.

> Il cambio ruolo serve per esigenze di servizio e/o deleghe, quando l'utente è associato a più ruoli.

**Come si determina il ruolo di default**
- È quello dell'associazione marcata come default in «Utenti Organigramma».
- In mancanza, se l'utente è associato a un solo servizio, è il ruolo di quel servizio.

[Schermata: finestra «Gestione parametri base» con menu a tendina «Ruolo» e scheda «Utenti Organigramma» con checkbox «Servizio di default»]

---

## Consigli per definire i ruoli

Esempi di ruoli presi dal manuale: un ruolo per ogni tipo di operatività, con il tipo operatore coerente.

| Ruolo | Tipo operatore | Operatività |
|-------|----------------|-------------|
| **XUFFICIO** | Generico | Responsabile ufficio: lettura di bilancio e impegni, operatività sui documenti (es. atti di liquidazione) |
| **XDIRIGENTE** | Dirigente | Navigazione su bilancio = 1; atti di liquidazione, verifica budget e approvazione richieste sul proprio settore |
| **XRUP** | RUP | Impegni e documenti legati ai CIG di cui è RUP; riepilogo CIG ed estrazioni su Excel |
| **XRUPL** | RUP | Autorizzazione minima: sola consultazione della situazione CIG (BTA-42 e BTA-43 in lettura) |

### In pratica
- Dare a ogni ruolo solo le autorizzazioni necessarie.
- Con lo stesso ruolo su più servizi le autorizzazioni si sommano: per operatività specifiche su un servizio usare un ruolo dedicato.
- Per deleghe o esigenze di servizio assegnare più ruoli all'utente, che cambia ruolo dal login.

---

## Eccezioni: dove si estende o si restringe la visibilità

Oltre ai controlli standard sull'organigramma, alcuni flag modificano la visibilità. L = lettura, G = gestione senza cancellazione, C = gestione con cancellazione.

| Oggetto | Autorizzazione controllata | Estensione della visibilità |
|---------|----------------------------|------------------------------|
| **Richieste di bilancio** | FBI/4 (L, G, C); FBI/5 verifica; FBI/27 attribuzione | Modo navigazione su richieste di bilancio |
| **Voci di bilancio** | FBI/6 (L, G, C) | Navigazione su bilancio |
| **Accertamenti e impegni** | FES/1 accertamenti; FES/11 impegni | Visibilità su ciclo attivo / passivo |
| **Atti di riscossione e liquidazione** | Vedi manuale Liquidazioni | OPE_CICLOA riscossione; OPE_CICLOP liquidazione |
| **Documenti** | FES/12-13-15 | OPE_CICLOA entrate; OPE_CICLOP uscite |
| **Estratto conto** | Come i documenti | STAMPA_ECCLI entrate; STAMPA_ECFOR uscite |
| **CIG e CUP** | BTA/42 (CIG); BTA/43 (CUP) | OPE_CICLOP |

---

## Anagrafica soggetti: aggiornamento da servizi web

### Funzionalità
- Consente di inserire o aggiornare in anagrafe soggetti i dati del soggetto e la residenza delle persone ricercate negli archivi interessati.
- L'aggiornamento avviene solo dopo conferma dell'operatore.
- Per il ws connettore VIES l'utente deve essere autorizzato alla gestione dei soggetti.

### A cosa servono le autorizzazioni
- Vedere e usare il bottone VAT.
- Gestire i gruppi impresa e i gruppi IVA.
- Il ws interno (atd_parws) non è soggetto a controllo di autorizzazione.

> Sempre obbligatorie: **BTA/38** (mostra l'opzione) e **BTA/37** (abilita l'aggiornamento).

---

## Anagrafica soggetti: autorizzazioni necessarie

| Autorizzazione | Effetto |
|----------------|---------|
| **BTA/38** (sempre obbligatoria) | Mostra l'opzione nella side bar di destra e la consultazione con evidenza delle differenze, senza possibilità di aggiornare |
| **BTA/37** (sempre obbligatoria) | Abilita l'aggiornamento delle anagrafiche di destinazione, subordinato alle autorizzazioni seguenti |
| **BTA/19 o BTA/21** (almeno G) | Aggiornano l'anagrafica soggetto di base (ne basta una), perché il soggetto proviene da ws |
| **BTA/21 oppure FTA/11** | Aggiornano l'indirizzo sul fornitore/cliente (TBA_RESID, FTA_RESID): una vale in alternativa all'altra |
| **BTA/16** | Valida codice fiscale o partita IVA (anche nelle verifiche massive). Se manca: «validazione non possibile, utente non autorizzato (BTA/16)» |
| **BTA/33** | Consente la modifica anche se il soggetto è residente. Il controllo della partita IVA aggiorna la ragione sociale (persone giuridiche e ditte individuali), mai nome e cognome |

---

## Bottone Connettore P.Iva Vies VAT: cosa cambia con le autorizzazioni

**Bottone nella barra dei comandi di Clienti/Fornitori**

**Comportamento a video**
- Senza BTA/38: l'opzione e il bottone non compaiono nella side bar di destra.
- Con BTA/38: si apre la form di consultazione, con le differenze evidenziate e senza possibilità di aggiornare.
- Con BTA/38 e BTA/37: l'aggiornamento è abilitato, nei limiti delle autorizzazioni successive.

**Percorso:** Servizi economici › Tabelle › Clienti/Fornitori › Clienti/Fornitori

> Per usare il connettore VIES l'utente deve essere autorizzato alla gestione dei soggetti. BTA/38 e BTA/37 sono sempre obbligatorie.

[Schermata: side bar «Connettori Partita IVA» con bottone «Connettore P.Iva Vies VAT»]

---

## Aggiornamento di un soggetto: dati e conferme

**Come leggere la form**
- A sinistra i dati presenti nel programma, a destra quelli ottenuti dal VIES.
- Aggiornamento anagrafica: BTA/19 o BTA/21 (almeno G).
- Aggiornamento indirizzo: BTA/21 oppure FTA/11.
- Validazione con la conferma: BTA/16, altrimenti messaggio di utente non autorizzato.

Confermando, il programma aggiorna ragione sociale e indirizzo con i dati del VIES.

[Schermata: form «Verifica Partita Iva VIES VAT C.E.» con colonne dati programma vs dati VIES e checkbox di conferma aggiornamento]

---

## Inserimento di un nuovo soggetto da Vies VAT

**Come si inserisce**
- Per un soggetto non presente: inserire partita IVA e stato, poi «Cerca».
- Il bottone «Crea nuovo soggetto da dati Vies VAT C.E.» crea l'anagrafica con i dati reperiti.
- Sono inclusi località, CAP e numero civico.
- Serve l'autorizzazione alla gestione dei soggetti.

[Schermata: form «Verifica Partita Iva VIES VAT C.E.» con campi Partita IVA, Stato, bottone «Cerca» e «Crea nuovo Soggetto da dati Vies VAT C.E.»]

---

## Gruppi IVA: bottone «Partecip.Gruppo IVA»

**Nuovo bottone in Clienti/Fornitori**
- Selezionato un soggetto, registra il collegamento al gruppo IVA.
- Valgono le autorizzazioni dell'anagrafica soggetti.

**Icone nel codice fiscale**
- **Ancora**: gruppo IVA collegato al soggetto.
- **Quadratino tratteggiato**: partecipate collegate al gruppo.

Esempio: HERA SPA è il gruppo IVA, HERA COMM SRLS la partecipata.

[Schermata: bottone «Partecip.Gruppo IVA» e griglia «Gruppi IVA» con icone ancora e quadratino tratteggiato]

---

## Eccezioni: richieste e voci di bilancio

### Richieste di bilancio
- Controlli: FBI/4 (L, G, C), FBI/5 per la verifica, FBI/27 per l'attribuzione.
- Regolati da «Navigazione su Bilancio», specializzabile con «Modo navigazione su richieste di bilancio».

### Voci di bilancio
- Controllo: FBI/6 (L, G, C).
- Visualizzazione: serve l'autorizzazione al servizio assegnatario o responsabile.
- Modifica: solo se autorizzati al servizio assegnatario della voce.

> Esempio: l'utente opera su tutto il bilancio, ma visualizza e opera solo sulle richieste del proprio servizio.

[Schermata: scheda «Definizione bilancio per Utente» con Navigazione su Bilancio = Tutto il bilancio e Modo navigazione su richieste = Solo voci assegnate]

---

## Eccezioni: accertamenti e impegni

### Visibilità in lista (FES/1 e FES/11)
- Sono visualizzati gli accertamenti/impegni per cui l'utente è autorizzato come:
  - assegnatario dell'impegno
  - assegnatario della voce di bilancio
  - responsabile delle voci di bilancio
- I flag «Visibilità su ciclo attivo/passivo» estendono la visibilità.

> Esempio: utente con navigazione parziale (solo voci assegnate) che vede tutti gli impegni grazie a «Visibilità ciclo passivo = Tutti gli impegni».

### Modifica
- L'utente deve essere autorizzato al servizio assegnatario dell'impegno; si verifica anche il tipo di accertamento/impegno (provvisorio o definitivo).
- OPE_ACCER / OPE_IMPEG: da BOR_UTEORG (MODO_NAVBI = 1, FTA_AUTUFF).

[Schermata: scheda «Definizione bilancio per Utente» con Visibilità su ciclo attivo/passivo]

---

## Eccezioni: restrizione per tipo operatore RUP

Se l'utente è di tipo RUP (BOR_RUOLI.DIRIGENTE = 1) e non ha OPE_CICLOP = 1, questo filtro prevale su tutto.

| Oggetto | Filtro applicato | In parole semplici |
|---------|------------------|--------------------|
| **Impegni** | BTA_CIG.CODUTE_RUP = utente connesso | Vede solo gli impegni agganciati ai CIG di cui è RUP, sui servizi a cui è autorizzato |
| **Atti di liquidazione (solo uscite)** | FES_LIQATT.CODUTE_DL = utente connesso | Vede solo le liquidazioni in cui è definito come RUP. Nel dettaglio atto, CODUTE_DL non è modificabile |
| **Documenti** | BTA_CIG.CODUTE_RUP, sui CIG degli impegni associati | Vede solo i documenti associati a impegni agganciati ai CIG di cui è RUP (impegno su liquidazione o su assegnazione) |
| **CIG** | BTA_CIG.CODUTE_RUP = utente connesso | Vede solo i CIG di cui è RUP |

---

## Eccezioni: atti di liquidazione e documenti

### Atti di riscossione e liquidazione
- Oltre alla navigabilità su bilancio, la sola visibilità si estende con:
  - OPE_CICLOA per gli atti di riscossione
  - OPE_CICLOP per gli atti di liquidazione
- Per le sole uscite si può restringere con il tipo operatore RUP.

### Documenti (FES/12-13-15)
- Sono visualizzati i documenti dei servizi dell'utente, reperiti dall'assegnatario dell'impegno su riscossione/liquidazione oppure su assegnazione (in mancanza, dall'area/settore/servizio dell'assegnazione).
- Estensione: OPE_CICLOA per le entrate, OPE_CICLOP per le uscite.
- Esempio: un utente associato a un ramo della pianta organica può vedere tutti i documenti.

---

## Eccezioni: estratto conto, CIG e CUP

### Estratto conto
- Oltre alla navigabilità su bilancio, la visibilità si estende con:
  - STAMPA_ECCLI per le entrate
  - STAMPA_ECFOR per le uscite
- Come per i documenti: un utente associato a un ramo della pianta organica può fare l'estratto conto di tutto.

### CIG e CUP
- Controlli di accesso: BTA/42 (CIG) e BTA/43 (CUP).
- Il flag OPE_CICLOP estende la visibilità a tutti gli impegni/accertamenti, anche se l'utente è associato a una porzione della pianta organica.
- Con tipo operatore RUP vede solo i CIG di cui è RUP.

---

## Riepilogo: autorizzazioni per ruolo

Reperimento autorizzazioni (BOR_UTENTI.FLAG_GESAUT) = Ruolo.

| Navigazione su bilancio (MODO_NAVBI) | Servizi | Autorizzazioni | Operatività su ciclo attivo/passivo | Note |
|--------------------------------------|---------|----------------|--------------------------------------|------|
| **Null** (record FTA_AUTUTE non trovato) | Nessuno | Nessuna | Nessuna | Utente non abilitato: non definito su «Definizione bilancio e funzioni utente» |
| **0 = tutto il bilancio** | NON POSSIBILE: bloccato dai controlli su FTA_AUTUTE, con messaggio sulle pagine CWF | | | |
| **1 = solo voci assegnate (BOR_UTEORG)** | BOR_UTEORG con il ruolo selezionato nei parametri di sessione (se BOR_RUOLI.DIRIGENTE = 3: tutti i servizi) | BOR_AUTRUO con il ruolo selezionato nei parametri di sessione | FTA_AUTUFF reperita da BOR_UTEORG.ID_AUTUFF, in base al servizio | |
| **2 = da organigramma** | NON POSSIBILE: bloccato dai controlli su FTA_AUTUTE, con messaggio sulle pagine CWF | | | |

---

## Esempio 1: scelta del ruolo

**Utente XRUP: associato a 3 servizi, nessuno di default**
- Nessun servizio è definito come default: all'apertura delle pagine CWF compare il messaggio che non è stato possibile assegnare il ruolo di default e l'utente sceglie tra il ruolo 8 e il ruolo 9.
- Ruolo 8: lavora con le autorizzazioni del ruolo 8 sul servizio 01.30.10.01.
- Ruolo 9: lavora sui servizi 01.40.01.10 e 01.10.10.30.

[Schermata: griglia «Utenti Organigramma e Funzionigramma» con utente XRUP su tre servizi e codici ruolo 8 e 9]

---

## Esempio 2: utenti, ruoli e tipo operatore (1/2)

| Utente / Ruolo | Tipo operatore e servizio | Autorizzazioni minime richieste | Esito e note |
|----------------|---------------------------|----------------------------------|--------------|
| **FRANCESCO — XRUP** | RUP — Servizio 01.40.01.01 | FBI-4: G; FBI-6: L (se fa richieste); BTA-42: L (CIG); BTA-43: L (CUP) | Vede impegni e documenti del servizio associati ai CIG di cui è RUP. Usa riepilogo CIG ed estrazioni su Excel; per le richieste di bilancio usa i codici o la paginazione, in base all'accesso al bilancio |
| **MARIO — XUFFICIO** | Generico (Resp. Ufficio) — Servizi 01.40.01.01 e 01.40.10.10 | Lettura bilancio e impegni; operatività su documenti (es. atti di liquidazione) | Opera con le autorizzazioni e le funzioni proprie. A parità di codice ruolo i servizi associati si sommano: stesse autorizzazioni su tutti. Nelle consultazioni usa la consultazione budget per Dirigenti |
| **LUCIA — XDIRIGENTE** | Dirigente — Servizi 01.40.01.01 e 01.40.10.10 | Navigazione su bilancio = 1 | Opera con le autorizzazioni possedute |

---

## Esempio 2: utenti, ruoli e tipo operatore (2/2)

| Utente / Ruolo | Tipo operatore e servizio | Autorizzazioni minime richieste | Esito e note |
|----------------|---------------------------|----------------------------------|--------------|
| **ROSSI — XDIRIGENTE** | Dirigente — Servizio 01.30.05.00 | Nav. bilancio 1 e autorizzazioni per operare nel settore con atti di liquidazione, verifica budget e approvazione richieste | Operatività consentita solo su questo settore |
| **ROSSI — XRUPL** | RUP — Servizio 01.30.01.00 | BTA-42: L (CIG); BTA-43: L (CUP). XRUPL è l'autorizzazione minima per consultare la situazione CIG | Niente pagina bilancio né impegni: vede il riepilogo di impegni e documenti associati ai CIG di cui è RUP. Dopo l'accesso deve indicare il ruolo con cui intende operare |
| **ROSSI — XUFFICIO** | Generico — Servizio 01.30.05.10 | Serve a definire operatività specifiche per un singolo servizio | Es.: assunzione impegni per il servizio, con consultazione su tutto il settore 01.30.05 |