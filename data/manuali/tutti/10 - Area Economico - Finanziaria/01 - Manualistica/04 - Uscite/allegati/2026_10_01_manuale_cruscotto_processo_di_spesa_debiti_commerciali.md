# Cruscotto Processo di Spesa Debiti Commerciali

**Software:** Cityware Online

---

## 1. Introduzione

Il **Cruscotto Processo di Spesa Debiti Commerciali** consente di monitorare il ciclo di spesa dei debiti commerciali, cioè il percorso che ogni fattura di acquisto compie dal momento in cui viene ricevuta fino al suo pagamento, e di verificare il rispetto dei tempi previsti dalla normativa (All. 4/2 D.Lgs. 118/2011 punto 5.1-bis).

Il cruscotto è uno strumento di **sola consultazione**: non modifica i documenti di spesa, ma elabora le informazioni già presenti nella procedura (flussi SDI, registrazione, assegnazione, atti di liquidazione, mandati, trasmissione e pagamento) e le restituisce sotto forma di riquadri, tabelle e grafici. Da ogni numero è possibile risalire all'elenco delle fatture che lo compongono.

Il presente manuale descrive i parametri di selezione, le cinque schede di analisi disponibili e il significato degli indicatori calcolati.

---

## 2. Accesso alla funzione

La funzione si raggiunge dal menu principale di Cityware Online seguendo il percorso:

**Servizi Economici → Statistiche → Cruscotto Processo di Spesa Debiti Commerciali**

All'apertura la maschera si presenta divisa in due parti: nella parte superiore i riquadri dei parametri (Selezione fatture, Soglie fasi normative, Filtro per assegnatario) e i pulsanti di comando; nella parte inferiore le schede con i risultati dell'elaborazione.

> [Figura 1 – Maschera principale del cruscotto: interfaccia divisa in riquadri parametri in alto (Selezione fatture, Soglie fasi normative, Filtro per assegnatario) e schede risultati in basso (Posizione nel ciclo, Tempi delle fasi, Delta tra date, Per assegnatario, Diagramma di Gantt)]

In alto a destra sono presenti i pulsanti:

- **Calcola**: esegue l'elaborazione con i parametri impostati e aggiorna tutte le schede. I dati si riferiscono al momento dell'elaborazione: per aggiornarli è sufficiente premere nuovamente Calcola.
- **Tipi documento**: apre/chiude il riquadro per la scelta dei tipi documento da considerare (vedi paragrafo 3.3).
- **Info calcoli**: apre una guida in linea che riepiloga i criteri di calcolo utilizzati dal cruscotto.

> [Figura 2 – Finestra "Info calcoli": guida in linea con sezioni "A cosa serve il cruscotto", "Quali fatture vengono considerate", "Le fasi del procedimento di spesa"]

---

## 3. Parametri di selezione

### 3.1 Selezione fatture

| Campo | Descrizione |
|-------|-------------|
| Data registrazione dal / al | Periodo di registrazione delle fatture di acquisto da analizzare. |
| In scadenza entro gg | Numero di giorni utilizzato per individuare le fatture non pagate "in scadenza" (es. 15 = fatture che scadono entro i prossimi 15 giorni). |
| Solo debiti commerciali | Se selezionato, nel riquadro Tipi documento sono proposti unicamente i tipi documento classificati come debito commerciale. |
| Fatture elaborate | Campo di sola lettura: riporta il numero di fatture considerate nell'ultima elaborazione. |

### 3.2 Soglie fasi normative

Il riquadro **Soglie fasi normative (giorni)** riporta, per ciascuna fase del procedimento, il numero massimo di giorni di calendario previsto. I valori sono proposti in base alla normativa ma possono essere modificati dall'utente per effettuare simulazioni.

| Campo | Fase | Valore di legge (gg) |
|-------|------|----------------------|
| d) Ricezione | Ricezione, smistamento e registrazione | 5 |
| e) Liquidazione | Predisposizione dell'atto di liquidazione | 15 |
| f) Controllo / ordinativi | Controllo ed emissione dell'ordinativo | 8 |
| g) Trasmissione tesoriere | Trasmissione al tesoriere | 2 |
| h) Pagamento tesoriere | Pagamento da parte del tesoriere | 1 |
| Totale d)-g) | Dalla ricezione della fattura all'invio in tesoreria (58 gg per il settore sanitario) | 28 |

- Le soglie modificate vengono **memorizzate per l'utente** a ogni Calcola e sono riproposte alla successiva apertura del cruscotto.
- Il pulsante **Valori di legge** ripristina i tempi previsti dalla normativa.

### 3.3 Tipi documento

Premendo **Tipi documento** si apre il riquadro **Tipologia di documenti da controllare**, che elenca i tipi documento di spesa con codice, codice SDI (TD01, TD02, …), indicazione PCC e classificazione come debito commerciale. Solo i tipi documento spuntati vengono considerati nell'elaborazione delle fatture registrate.

> [Figura 3 – Riquadro "Tipologia di documenti da controllare": elenco con colonne Codice, Cod.SDI, PCC, Deb. Comm., Descrizione; pulsanti Selez. Tutti, Deselez. Tutti; tendina filtro PCC]

- La tendina in alto permette di filtrare l'elenco: **Nessun filtro su PCC**, **Solo quelli NON PCC**, **Solo quelli PCC**.
- Il campo **Selezionati** indica quanti tipi documento sono attualmente spuntati.
- I pulsanti **Selez. Tutti** e **Deselez. Tutti** consentono di spuntare o togliere la spunta a tutti i tipi in un'unica operazione.
- Premendo nuovamente **Tipi documento** il riquadro viene chiuso.

> **Nota:** il filtro sui tipi documento e il periodo di registrazione non si applicano alle fatture ricevute da SDI e non ancora contabilizzate (vedi capitolo 4).

### 3.4 Filtro per assegnatario

Il campo **Assegnatario** permette di limitare l'analisi a una porzione dell'organigramma.

- Una fattura rientra nel filtro se almeno una sua assegnazione appartiene alla struttura scelta o a una struttura dipendente.
- Il filtro vale per tutte le schede del cruscotto.
- Le fatture non ancora assegnate (ricevute da SDI non contabilizzate o contabilizzate e non assegnate) sono visibili solo senza filtro.

---

## 4. Fatture considerate e visibilità

Il cruscotto considera:

- le fatture di acquisto **registrate nel periodo** indicato nei filtri (data registrazione dal / al), limitatamente ai **tipi documento selezionati**;
- tutte le fatture elettroniche **ricevute dal Sistema di Interscambio e non ancora contabilizzate**, a prescindere dalla data di ricezione: sono le stesse proposte dalla gestione dei flussi SDI con la posizione "Da Contabilizzare" e, come lì, limitate agli uffici di fatturazione su cui l'utente è abilitato. Per queste fatture non si applicano il periodo e il filtro sui tipi documento.

Sono invece **esclusi** i documenti annullati e le fatture rifiutate. Le fatture **sospese** (ad esempio per verifica di conformità) sono comprese e segnalate a parte.

**Visibilità:** ogni utente vede le fatture assegnate alla propria area, settore o servizio. Gli utenti abilitati a tutto il ciclo passivo (ad esempio la Ragioneria) vedono tutte le fatture, comprese quelle ricevute da SDI o non ancora assegnate.

Accanto a ogni numero del cruscotto è presente l'icona **Consulta elenco fatture** (icona a tabella): cliccandola si apre l'elenco delle fatture corrispondenti.

- Per il riquadro **Ricevute da SDI, non contabilizzate** l'elenco viene aperto nella **Gestione flussi SDI**.
- Per le fatture registrate l'elenco viene aperto nella gestione **Documenti Uscita**, dalla quale è possibile consultare o intervenire sul singolo documento con le funzioni abituali.

Chiudendo la finestra dell'elenco si torna al cruscotto con i dati dell'ultima elaborazione.

---

## 5. Le fasi del procedimento di spesa

La normativa suddivide il procedimento in fasi, ciascuna con un tempo di riferimento. Il cruscotto misura ogni fase tra le date indicate nella tabella seguente.

| Fase | Da quando a quando | Tempo (gg) |
|------|--------------------|------------|
| d) Ricezione, smistamento e registrazione | Dalla ricezione della fattura all'invio all'ufficio competente | 5 |
| e) Predisposizione dell'atto di liquidazione | Dall'invio all'ufficio alla data dell'atto di liquidazione | 15 |
| f) Controllo ed emissione dell'ordinativo | Dalla data dell'atto all'emissione del mandato di pagamento | 8 |
| g) Trasmissione al tesoriere | Dall'emissione del mandato al suo invio in tesoreria | 2 |
| h) Pagamento da parte del tesoriere | Dall'invio in tesoreria al pagamento al fornitore | 1 |
| Totale fasi d) - g) | Dalla ricezione della fattura all'invio in tesoreria (58 gg per il settore sanitario) | 28 |

- Tutti i tempi sono espressi in **giorni di calendario**.
- Come data di ricezione si utilizza la data di acquisizione della fattura elettronica dal Sistema di Interscambio; se non disponibile, la data di registrazione.
- Se una fattura è stata assegnata a più uffici o liquidata con più atti o mandati, per ogni passaggio si considera la **data più recente**.

---

## 6. Scheda "Posizione nel ciclo"

La scheda mostra la fotografia attuale delle fatture: ogni fattura viene collocata in **un solo riquadro**, corrispondente all'**ultimo passaggio effettivamente compiuto**. Se un passaggio intermedio non è stato registrato (ad esempio manca la presa in carico ma l'atto di liquidazione è già redatto), la fattura viene comunque posizionata nel passaggio più avanzato raggiunto.

### 6.1 Riga di riepilogo

In alto è riportata una riga di riepilogo con il totale delle **Fatture non pagate** (numero e importo), le **Scadute**, quelle **In scadenza entro N gg** (N = valore del filtro) e quelle **Oltre i tempi della fase**.

### 6.2 Riquadri del ciclo

> [Figura 4 – Posizione nel ciclo – riquadri dalla ricezione all'atto in bozza: sequenza di riquadri con frecce di collegamento: Ricevute da SDI non contabilizzate → Contabilizzate e non assegnate → Assegnate da prendere in carico → In carico atto da redigere → Atto di liquidazione in bozza. Ogni riquadro mostra numero fatture, importo, gg medi fermo, oltre N gg, scadute, in scadenza, sospese]

> [Figura 5 – Posizione nel ciclo – riquadri dall'atto redatto al pagamento: sequenza: Atto redatto in attesa visto → Vistate mandato da emettere → Mandato emesso da trasmettere → Trasmesse in attesa pagamento → Pagate. Ogni riquadro mostra numero, importo, gg medi fermo, oltre N gg, scadute, in scadenza]

| Riquadro | Significato | Fase |
|----------|-------------|------|
| Ricevute da SDI, non contabilizzate | Fatture elettroniche ricevute, ancora da accettare o da contabilizzare. | d) |
| Contabilizzate e non assegnate | Fatture contabilizzate ma non ancora assegnate all'ufficio competente. | d) |
| Assegnate da prendere in carico | Assegnate all'ufficio, che non le ha ancora prese in carico. | e) |
| In carico, atto da redigere | Prese in carico dall'ufficio, in attesa dell'atto di liquidazione. | e) |
| Atto di liquidazione in bozza | L'atto di liquidazione è stato creato ma non ha ancora la data dell'atto. | e) |
| Atto redatto, in attesa visto | Atto di liquidazione con la data dell'atto, in attesa del visto della Ragioneria. | f) |
| Vistate, mandato da emettere | Atto vistato, in attesa dell'emissione del mandato di pagamento. | f) |
| Mandato emesso, da trasmettere | Mandato emesso ma non ancora inviato al tesoriere. | g) |
| Trasmesse, in attesa pagamento | Mandato inviato al tesoriere, pagamento non ancora eseguito. | h) |
| Pagate | Fatture interamente pagate al fornitore. | – |
| Chiuse senza pagamento (abbuonate) | Fatture per le quali il residuo da pagare è stato abbuonato, cioè azzerato senza pagamento. | – |

### 6.3 Indicatori dei riquadri

Per ogni riquadro sono indicati il numero delle fatture e il loro importo complessivo, oltre a:

| Indicatore | Descrizione |
|------------|-------------|
| gg medi fermo | Da quanti giorni, in media, le fatture si trovano in quel passaggio. |
| oltre N gg (fase) | Fatture che hanno superato il tempo previsto per la fase normativa a cui il passaggio appartiene; il conteggio parte dall'inizio della fase (es. per le fatture in attesa dell'atto di liquidazione, dalla data di invio all'ufficio). |
| scadute | Fatture non pagate con data di scadenza già superata. |
| in scadenza | Fatture non pagate che scadono entro il numero di giorni indicato nei filtri. |
| sospese / pag. parziali | Fatture sospese o pagate solo in parte (compaiono solo se presenti). |
| gg medi ciclo (Pagate) | Durata media dell'intero ciclo, dalla ricezione al pagamento. |
| entro scad. / in ritardo (Pagate) | Quante fatture sono state pagate entro la scadenza o in ritardo. |

> [Figura 6 – Posizione nel ciclo – riquadro "Chiuse senza pagamento" e indicatori sospese/pagamenti parziali]

---

## 7. Scheda "Tempi delle fasi"

Per ciascuna fase normativa viene misurato il tempo effettivamente impiegato, confrontandolo con la soglia impostata.

> [Figura 7 – Scheda "Tempi delle fasi": tabella con colonne Fase, Da, A, Soglia gg, Concluse, gg medi, gg min, gg max, Entro soglia, Oltre soglia, % entro, In corso oltre soglia, Non calcolabili. Riga finale "Totale d)-g: ricezione / invio in tesoreria (max 28 gg; 58 sanitari)"]

| Colonna | Descrizione |
|---------|-------------|
| Fase / Da / A | Fase normativa e date di inizio e fine utilizzate per la misurazione. |
| Soglia gg | Tempo previsto per la fase (dai parametri Soglie fasi normative). |
| Concluse | Fatture che hanno completato la fase (entrambe le date valorizzate); su queste si calcolano i giorni medi, minimi e massimi. |
| gg medi / gg min / gg max | Durata media, minima e massima della fase. |
| Entro soglia / Oltre soglia | Quante fatture hanno rispettato o superato il tempo previsto. |
| % entro | Percentuale di fatture concluse entro la soglia (evidenziata in rosso se inferiore all'80%). |
| In corso oltre soglia | Fatture che non hanno ancora completato la fase (data finale non presente) e hanno già superato il tempo previsto ad oggi. |
| Non calcolabili | Fatture per le quali manca la data iniziale della fase ma è presente quella finale (passaggio saltato o dato non registrato). |

L'ultima riga, **Pagamento rispetto alla scadenza**, confronta la data di pagamento con la data di scadenza: un valore negativo indica un pagamento effettuato prima della scadenza.

---

## 8. Scheda "Delta tra date"

La scheda permette di misurare liberamente il tempo trascorso tra due momenti del ciclo a scelta.

1. Selezionare la **Data A** (data iniziale) e la **Data B** (data finale) dalle rispettive tendine.
2. Scegliere l'**Ambito**: Tutte le fatture, Solo non pagate, Solo pagate.
3. Indicare la **Soglia gg** di confronto.
4. Premere **Calcola Delta**.

> [Figura 8 – Scheda "Delta tra date" dopo Calcola Delta: riquadri Calcolate, gg medi, gg min/max, Entro 30 gg, Oltre 30 gg, Manca data B, Manca data A; sotto distribuzione per fasce di giorni]

Il delta è calcolato come **Data B – Data A** in giorni di calendario. Vengono mostrati:

- **Calcolate**: numero di fatture con entrambe le date;
- **gg medi** e **gg min / max**;
- **Entro / Oltre N gg**: fatture entro od oltre la soglia indicata;
- **Manca data A / Manca data B**: fatture prive di una delle due date (le fatture senza nessuna delle due date sono escluse);
- **Distribuzione per fasce di giorni** (< 0, 0, 1-5, 6-10, 11-15, 16-30, 31-60, 61-90, > 90 gg).

---

## 9. Scheda "Per assegnatario"

La scheda riepiloga le fatture per struttura assegnataria, al livello di organigramma scelto nella tendina **Raggruppa per** (Livello 1 - Area, Livello 2 - Settore, Livello 3 - Servizio, Livello 4 - Ufficio).

> [Figura 9 – Scheda "Per assegnatario": tabella con colonne Assegnatario, Fatture, Importo, Non pagate (Nr, Importo, Scadute, In scad., Oltre tempi), Posizione delle non pagate (Da prendere in carico, Atto da redigere, Atto in bozza, Attesa visto, Mandato da emettere, Da trasmettere, Attesa pagamento), Pagate (Nr, In ritardo, % puntualità, gg medi ciclo)]

Per ogni struttura sono indicati:

- numero e importo complessivo delle fatture;
- per le **non pagate**: numero, importo, quante sono scadute, in scadenza e oltre i tempi;
- la **posizione delle non pagate** nel ciclo;
- per le **pagate**: numero, quante in ritardo rispetto alla scadenza, la percentuale di puntualità e la durata media del ciclo.

In fondo all'elenco è presente la riga **Non assegnate**, che raccoglie le fatture ricevute da SDI non contabilizzate, contabilizzate e non assegnate o senza organigramma.

> **Nota:** una fattura assegnata a più strutture viene conteggiata in ciascuna di esse: per questo la somma delle righe può superare il totale delle fatture.

**Pulsanti di esportazione:**

- **Esporta riepilogo**: produce in Excel la tabella visualizzata;
- **Esporta dettaglio fatture**: produce l'elenco delle fatture (rispettando il filtro per assegnatario) con fornitore, posizione nel ciclo, assegnatari, tutte le date del ciclo e gli indicatori.

---

## 10. Scheda "Diagramma di Gantt"

La scheda mostra i tempi effettivi delle fasi a confronto con quelli di legge, disposti in sequenza lungo una linea del tempo espressa in giorni.

### 10.1 Ricerca singola fattura

Nel riquadro **Ricerca singola fattura** è possibile cercare una fattura per **Numero documento** oppure per **anno** e **progressivo**, quindi premere **Cerca**. Per la fattura trovata, per ogni fase sono indicati durata, esito e giorni di sforamento.

> [Figura 10 – Diagramma di Gantt – ricerca singola fattura e scelta dell'indicatore: campo Numero documento, campi anno/progressivo, pulsanti Cerca e Pulisci; sotto Riepilogo generale con tendina Indicatore e pulsante "come si legge"]

### 10.2 Riepilogo generale

Il riquadro **Riepilogo generale** rappresenta, per ogni fase:

- la **barra grigia**: tempo previsto dalla legge;
- la **barra colorata**: tempo effettivo, **verde** se entro i termini, **rossa** se oltre;
- a destra l'esito (✔ fase nei termini, ✘ fase fuori termini), il rapporto effettivo / legge, il numero di fatture concluse e la percentuale entro i termini.

Il tempo effettivo è calcolato con l'**Indicatore** scelto nella tendina: **Tempo medio**, **Tempo mediano**, **90% delle fatture entro** (tempo entro cui rientra il 90% delle fatture) o **Tempo massimo**.

> [Figura 11 – Diagramma di Gantt – confronto tempi effettivi e di legge per fase: barre orizzontali per fase d), e), f), g) con barra grigia (legge) e barra colorata (effettivo); a destra esito ✔/✘, rapporto effettivo/legge, numero fatture concluse, % entro]

La riga del **Totale d)-g)** confronta il percorso dalla ricezione all'invio in tesoreria con il termine complessivo (linee tratteggiate). Sotto il grafico è riportato l'esito del **Pagamento rispetto alla scadenza**, con il numero di fatture pagate in ritardo e di quelle non pagate già scadute.

> [Figura 12 – Diagramma di Gantt – totale d)-g) e pagamento rispetto alla scadenza: barra rossa per totale effettivo vs linea tratteggiata legge; sotto riga "Pagamento rispetto alla scadenza: Tempo medio 7.2 gg prima della scadenza su 1214 fatture pagate; pagate in ritardo: 407; non pagate già scadute: 545"]

Passando il mouse sulle barre compaiono i dettagli; cliccandole si apre l'elenco delle fatture.

In fondo alla scheda, con i pulsanti **Mostra**, si aprono il dettaglio **Fatture per fase** e l'elenco delle **10 fatture con il ciclo più lungo**.

---

## Eventuali vincoli

- La visibilità delle fatture dipende dalle autorizzazioni dell'utente nella gestione documenti di spesa: gli utenti non abilitati all'intero ciclo passivo vedono solo le fatture assegnate alle proprie strutture e non vedono quelle ricevute da SDI o non assegnate.
- Le fatture ricevute da SDI e non contabilizzate sono limitate agli uffici di fatturazione su cui l'utente è abilitato e non sono soggette a periodo e filtro tipi documento.
- Le fatture non ancora assegnate sono visibili solo se non è impostato il Filtro per assegnatario.
- I dati non si aggiornano automaticamente: riflettono la situazione al momento dell'ultimo Calcola.