# Cruscotto Documenti – CWOL

## 1. Introduzione

Il **Cruscotto Documenti** è uno strumento di analisi e monitoraggio che fornisce, in un'unica maschera, una visione sintetica dello stato dei documenti contabili dell'Ente, sia per la parte **Entrata** (documenti attivi, incassi) sia per la parte **Uscita** (documenti passivi, pagamenti).

La funzione consente di:

- individuare rapidamente i documenti non incassati/non pagati in scadenza o già scaduti, suddivisi per fasce di giorni;
- verificare lo stato di incasso/pagamento dei documenti rispetto alla data di scadenza;
- analizzare l'andamento mensile di cassa (mandati, reversali e saldo);
- individuare i clienti/fornitori con i maggiori valori di fatturato nell'anno;
- consultare gli indicatori di sintesi (assegnato, incassato/pagato rispetto all'emesso/ricevuto);
- gestire le comunicazioni di scadenza e gli avvisi di tardivo pagamento.

Tutti i dati sono calcolati con riferimento all'**esercizio contabile in uso** e alla **data odierna**.

### 1.1 Accesso alla funzione

La funzione è disponibile dal menu principale al percorso:

**Servizi Economici → Statistiche → Cruscotto Documenti**

All'apertura la maschera si presenta in modalità **Entrata** (scheda "Cruscotto Documenti Entrata") con la scheda **Cruscotto Decisionale** attiva; è possibile poi dal flag apposito passare alla parte Uscita. Per visualizzare i dati è necessario premere il pulsante **Carica Dati**: durante l'elaborazione compare la finestra *"Calcolo Dati per Cruscotto in corso…"*, che indica la fase di calcolo in esecuzione.

[Immagine: schermata della maschera Cruscotto Documenti Entrata con i pulsanti "Entrata", "Apri Filtri Assegnatari", "0 Filtrati su 58", schede "Cruscotto Decisionale", "Comunicazioni", "Avv. Tardivo pagamento" e pulsante "Carica Dati"]

### 1.2 Struttura della maschera

Nella parte alta della maschera sono presenti i comandi generali, validi per tutte le schede:

| Elemento | Descrizione |
|----------|-------------|
| Entrata / Uscita | Selettore che imposta la parte di bilancio da analizzare. Il titolo della scheda diventa rispettivamente "Cruscotto Documenti Entrata" o "Cruscotto Documenti Uscita". |
| Apri / Nascondi Filtri Assegnatari | Mostra o nasconde l'elenco degli Assegnatari (uffici/settori) su cui filtrare i documenti. |
| Filtrati su N | Contatore che riporta quanti Assegnatari sono selezionati come filtro rispetto al totale disponibile (es. "0 Filtrati su 8"). |
| Più Filtri / Meno Filtri | Mostra o nasconde i parametri aggiuntivi di controllo per Tipologia di documenti |
| Applica Filtri | Ricalcola il cruscotto applicando la selezione Entrata/Uscita e i filtri impostati. |

La maschera è organizzata nelle seguenti schede:

| Scheda | Entrata | Uscita | Contenuto |
|--------|---------|--------|-----------|
| Cruscotto Decisionale | Sì | Sì | Riquadri di sintesi con scadenze, stato incassi/pagamenti, cassa, clienti/fornitori e indicatori. |
| Comunicazioni | Sì | No | Riepilogo delle comunicazioni di scadenza per data. |

Ogni riquadro del cruscotto dispone, nella barra del titolo, del pulsante **Informazioni** (icona "i"), che apre una finestra con la descrizione dei criteri di calcolo, e del pulsante **–** per comprimere il riquadro. Alcuni riquadri dispongono inoltre dei pulsanti **Zoom** (ingrandimento del grafico) e **Tabella** (visualizzazione dei dati in forma tabellare).

---

## 2. Filtri di selezione

### 2.1 Selezione Entrata / Uscita

Dal selettore in alto a sinistra si sceglie se analizzare i documenti di **Entrata** o di **Uscita**. Dopo aver cambiato la selezione premere **Applica Filtri** per ricalcolare i dati del cruscotto. I contenuti dei riquadri si adeguano automaticamente alla scelta, secondo la tabella seguente:

| Riquadro | Entrata | Uscita |
|----------|---------|--------|
| Scadenze | Documenti in Scadenza e/o Scaduti e non Incassati ad Oggi | Documenti in Scadenza e/o Scaduti e non Pagati ad Oggi |
| Stato | Stato Incassi | Stato Pagamenti |
| Soggetti | Clienti con Maggiori Valori delle Fatture nell'Anno | Fornitori con Maggiori Valori delle Fatture nell'Anno |
| Indicatori | Assegnato Vs Emesso; Incassato Vs Emesso | Assegnato Vs Ricevuto; Pagato Vs Ricevuto |
| Filtro tipologie | Filtro su SDI | Filtro su PCC |

### 2.2 Filtri Assegnatari

Premendo **Apri Filtri Assegnatari** viene visualizzato l'elenco degli Assegnatari configurati per l'Ente (codice e descrizione del settore/ufficio). È possibile spuntare uno o più Assegnatari per limitare l'analisi ai soli documenti a loro assegnati; i pulsanti **Selez. Tutti** e **Deselez. Tutti** permettono di selezionare o deselezionare l'intero elenco.

Il numero di Assegnatari selezionati viene riportato nel contatore **Filtrati su N**. Se nessun Assegnatario è selezionato, l'analisi viene effettuata su tutti i documenti. Premere **Nascondi Filtri Assegnatari** per chiudere l'elenco.

[Immagine: pannello "Assegnatari" con elenco di settori (01, 01.01, 01.02, 01.03, 01.06, 01.07) e pulsanti "Selez. Tutti" / "Deselez. Tutti"]

### 2.3 Più Filtri: tipologia di documenti da controllare

Il pulsante **Più Filtri** apre la sezione dei parametri aggiuntivi, contenente il riquadro **Tipologia di Documenti da controllare**, che elenca i tipi documento disponibili per la parte selezionata (codice, eventuale tipo documento SDI e descrizione). Il campo **Tot.** indica il numero di tipologie selezionate.

Il menu a tendina consente di restringere le tipologie considerate:

| Parte | Opzioni disponibili | Significato |
|-------|---------------------|-------------|
| Entrata | Nessun Filtro su SDI / Solo quelli NON SDI / Solo quelli SDI | Considera tutti i documenti, solo quelli non transitati da SDI oppure solo quelli transitati da SDI. |
| Uscita | Nessun Filtro su PCC / Solo quelli NON PCC / Solo quelli PCC | Considera tutti i documenti, solo quelli non soggetti a PCC oppure solo quelli che transitano in PCC. |

Le singole tipologie possono essere incluse o escluse tramite la relativa casella di spunta, oppure in blocco con **Selez. Tutti** / **Deselez. Tutti**. Premere **Meno Filtri** per chiudere la sezione e **Applica Filtri** per rendere effettive le modifiche.

[Immagine: sezione "Più Filtri di Controllo" con riquadro "Tipologia di Documenti da controllare", menu a tendina "Solo quelli PCC", colonna "Tipo" con valori PCC e descrizioni (Fattura Elettronica PA/PA con Differita, Fattura Elettronica PA/PA con Immediata, Nota Credito Fattura PA/PA - Var. Iva Diff., ecc.) e pulsante "Applica Filtri"]

---

## 3. Cruscotto Decisionale

La scheda **Cruscotto Decisionale** riepiloga la situazione dei documenti dell'esercizio attraverso cinque riquadri.

Di seguito sono descritti con riferimento alla parte **Entrata**; per la parte **Uscita** valgono le stesse regole, sostituendo "incassato" con "pagato" e "clienti" con "fornitori".

[Immagine: vista d'insieme della scheda Cruscotto Decisionale con i cinque riquadri: "Documenti in Scadenza e/o Scaduti e non Pagati ad Oggi", "Stato Pagamenti", "Situazione di Cassa per Mese", "Fornitori con Maggiori Valori delle Fatture nell'Anno", "Indicatori"]

### 3.1 Documenti in Scadenza e/o Scaduti e non Incassati ad Oggi

Il riquadro mostra i documenti **non incassati (anche parzialmente)** suddivisi per fasce di giorni rispetto alla data odierna, riportata al centro nel box **Oggi**:

- **a sinistra** i documenti già **scaduti**, ordinati dai più remoti: Totali, Oltre 31 gg, da 16 a 30 gg, da 6 a 15 gg, da 1 a 5 gg;
- **al centro** i documenti in scadenza **oggi**;
- **a destra** i documenti in **scadenza** nei prossimi giorni, ordinati dai più imminenti: da 1 a 5 gg, da 6 a 15 gg, da 16 a 30 gg, Oltre 31 gg, Totali.

Per ciascuna fascia sono indicati il **numero** dei documenti e l'**importo** complessivo. Il colore del box indica il livello di urgenza: più tende al rosso, più è necessario provvedere all'incasso (o al pagamento).

[Immagine: riquadro "Documenti in Scadenza e/o Scaduti e non Pagati ad Oggi" con box colorati (Totali, Otre 31 gg, 16-30 gg, 6-15 gg, 1-5 gg) a sinistra, box "Oggi 28/09/2026" al centro, e box simmetrici a destra per documenti in scadenza]

Comandi disponibili nel riquadro:

| Comando | Funzione |
|---------|----------|
| Pulsante **Tabella** accanto a ogni box | Apre la lista dei documenti della fascia (es. "Consulta lista già scaduti da 16/30 gg", "Consulta lista in scadenza fra 1/5 gg", "Consulta lista totale già scaduti"). |
| **← Scadute da** | Apre la finestra "Cambio Periodo" per modificare gli intervalli di giorni (Periodo 1, 2, 3 e Oltre) delle fasce dei documenti scaduti. Confermare con **Conferma Cambio Periodo**. |
| **in Scadenza →** | Apre la stessa finestra per modificare gli intervalli di giorni delle fasce dei documenti in scadenza. |
| **Salva param.** | Salva i parametri dei giorni di scadenza impostati, che verranno riproposti ai successivi accessi. |
| **ITER DOCUMENTI SCADUTI AD OGGI** | Solo per la parte Entrata: consente di consultare l'iter dei documenti scaduti alla data odierna. |

#### 3.1.1 Lista dei documenti

Premendo il pulsante **Tabella** di una fascia si apre la finestra **Documenti Entrata / Documenti Uscita** con l'elenco dei documenti corrispondenti (Anno/Progr. inserimento, Data registrazione, Soggetto, Numero e data documento, Descrizione, stato Iter e Liquidazione, Importo lordo, ecc.). Le colonne possono essere filtrate tramite i campi di ricerca posti sotto le intestazioni.

Dal pannello laterale della finestra sono disponibili le principali azioni sui documenti: **Nuovo**, **Altra Ricerca**, **Allegati documento**, **Allegati DURC**, **Contabilità generale**, **Visualizza unità documentale**, **Crea doc. e Impegno**, **Duplica documento**, **Cambio Causale**, **Cambio Data Registrazione**.

[Immagine: finestra "Documenti Uscita" con colonna Anno/Progr. Inserimento, Data Registrazione, Soggetto, Nr. Docum., Data Docum., Descrizione documento, Iter, Liquidazione e pannello laterale con azioni "Nuovo", "Altra Ricerca", "Allegati documento"]

#### 3.1.2 Criteri di calcolo

- Se il documento è privo di data di scadenza, viene considerato "oltre la data di scadenza" (ultimo box prima dei Totali).

### 3.2 Stato Incassi / Stato Pagamenti

Il riquadro controlla lo stato di incasso (o di pagamento) dei documenti rispetto alla scadenza. I dati sono rappresentati in un **grafico a torta** e in una **tabella** con quattro situazioni, per ciascuna delle quali sono riportati numero, importo e percentuali:

| Situazione | Descrizione |
|------------|-------------|
| Incassati nell'Anno Entro la Scadenza | Documenti incassati nell'anno (anche parzialmente) entro la data di scadenza. |
| Incassati nell'Anno Dopo la Scadenza | Documenti incassati nell'anno (anche parzialmente) dopo la data di scadenza. |
| Non Incassati e Non Scaduti ad Oggi | Documenti non ancora incassati con scadenza non ancora raggiunta. |
| Non Incassati e Scaduti ad Oggi | Documenti non incassati con scadenza superata. |

Il menu **Valore su Grafico** permette di rappresentare nel grafico il **Numero** o l'**Importo** dei documenti. Il pulsante **Tabella** accanto a ciascuna riga apre la lista dei documenti corrispondenti; il pulsante **Zoom** ingrandisce il grafico.

**Criteri di calcolo:** per i documenti non incassati sono considerati "entro la scadenza" quelli con data di scadenza nell'anno e "oltre la scadenza" quelli con data di scadenza successiva alla data odierna (o al 31 dicembre per gli esercizi precedenti). Se manca la data di scadenza il documento viene considerato oltre la scadenza. È considerata anche la quota abbuonata e/o azzerata manualmente.

[Immagine: riquadro "Stato Pagamenti" con grafico a torta (prevalentemente giallo) e tabella con quattro righe: "Pagati nell'Anno Entro la Scadenza" (5, 3,65%, 1,62%), "Pagati nell'Anno Dopo la Scadenza" (0, 0,00%), "Non Pagati e Non Scaduti ad Oggi" (0, 0,00%), "Non Pagati e Scaduti ad Oggi" (132, 96,35%, 98,98%) con importi corrispondenti]

### 3.3 Situazione di Cassa per Mese

Il **grafico a barre** riporta, per ciascun mese dell'esercizio, i **Mandati**, le **Reversali** e il relativo **Saldo** di cassa.

Sono disponibili le seguenti opzioni:

- **Valore su Grafico**: visualizza il **Numero** o l'**Importo**;
- **del Periodo selezionato / Progressivo (somma precedenti)**: mostra il valore del singolo mese oppure l'andamento progressivo, sommando anche i mesi precedenti.

I pulsanti **Tabella** e **Zoom** consentono rispettivamente di visualizzare i dati in forma tabellare e di ingrandire il grafico.

[Immagine: grafico a barre "Situazione di Cassa per Mese" con legenda Reversali (verde), Mandati (rosa), Saldo (azzurro) e asse orizzontale con mesi Gen-Dic. Asse verticale da -500 a 500. Barre visibili per Apr, Mag, Giu con valori positivi e negativi]

### 3.4 Clienti / Fornitori con maggiori valori delle fatture nell'anno

Il riquadro elenca i documenti con data compresa nell'esercizio corrente raggruppati per **Cliente** (Entrata) o **Fornitore** (Uscita), ordinati a partire dai valori più alti. Il numero tra parentesi nel titolo indica quanti soggetti hanno movimenti nell'anno.

| Colonna | Descrizione |
|---------|-------------|
| Codice / Ragione Sociale | Identificativo e denominazione del soggetto. |
| Numero | Numero di documenti dell'anno. |
| Importo Doc. | Importo complessivo fatturato. |
| Incassato / Pagato | Importo già incassato (Entrata) o pagato (Uscita). |
| Da Incassare / Da Pagare | Importo residuo. |
| Importo Medio | Rapporto tra importo e numero documenti. |
| Vis | Pulsante per visualizzare l'elenco dei documenti del soggetto. |

Facendo clic sull'intestazione di colonna è possibile ordinare i soggetti per numero di fatture, fatturato più alto, importo medio più alto, incassato/pagato più alto o importo da incassare/pagare più alto. È considerata anche la quota abbuonata e/o azzerata manualmente. In fondo all'elenco sono presenti i comandi di **paginazione** e la scelta del numero di righe per pagina (10, 20, 50, 100, Tutte).

[Immagine: tabella "Fornitori (5) con Maggiori Valori delle Fatture nell'Anno" con colonne Codice, Ragione Sociale, Numero, Importo Doc., Pagato, Da Pagare, Importo Medio. Esempi: 101718 PALITALSOFT S.R.L. (8 doc, 3.538,00, 402,00, 3.116,00, 442,25), 94471 REPROPRINT SRL (1 doc, 122,00, 0,00, 122,00, 122,00), ecc.]

### 3.5 Indicatori

Il riquadro presenta due **grafici a lancetta** con la relativa percentuale:

| Grafico | Entrata | Uscita |
|---------|---------|--------|
| Primo | Assegnato Vs Emesso nell'Anno | Assegnato Vs Ricevuto nell'Anno |
| Secondo | Incassato Vs Emesso nell'Anno | Pagato Vs Ricevuto nell'Anno |

Nel valore incassato/pagato **non vengono considerati gli abbuoni**.

[Immagine: riquadro "Indicatori" con due grafici a lancetta (gauge): "Assegnato Vs Ricevuto nell'Anno" al 25,31% e "Pagato Vs Ricevuto nell'Anno" al 18,37%. I grafici mostrano una scala da rosso (sinistra) a verde (destra) con lancetta arancione]

---

## 4. Scheda Comunicazioni

La scheda, disponibile **solo per la parte Entrata**, riepiloga le comunicazioni relative ai documenti in scadenza.

Nella parte superiore si impostano i filtri:

| Campo | Descrizione |
|-------|-------------|
| Data scadenza dal / al | Intervallo delle date di scadenza da considerare (proposto per default il mese corrente). |
| Tipo | Tipologia di comunicazione. |
| Carica Dati | Esegue la ricerca con i filtri impostati. |

La griglia **Comunicazioni** riporta, per ciascuna **Data scadenza**, il **Numero comunicazioni** e il **Numero totale documenti** interessati.

---

## Vincoli e Criticità

### Eventuali vincoli:

- I dati sono calcolati con riferimento all'esercizio contabile in uso e alla data odierna.
- Le modifiche alla selezione Entrata/Uscita, agli Assegnatari e alle tipologie di documento hanno effetto solo dopo aver premuto **Applica Filtri**.
- La scheda Comunicazioni è disponibile solo per la parte Entrata.
- Le azioni disponibili nella finestra Documenti dipendono dalle abilitazioni dell'utente.

### Eventuali criticità:

- Il calcolo del cruscotto può richiedere alcuni secondi, in funzione del volume dei documenti dell'Ente.
- Nei valori incassato/pagato degli **Indicatori** non sono considerati gli abbuoni, mentre negli altri riquadri è considerata anche la quota abbuonata/azzerata manualmente: i valori possono quindi non coincidere.