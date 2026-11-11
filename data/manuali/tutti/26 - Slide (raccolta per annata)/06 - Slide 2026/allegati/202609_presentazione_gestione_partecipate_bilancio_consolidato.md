# Gestione Partecipate e Bilancio Consolidato

**Modulo CWOL** — Censimento delle partecipazioni, determinazione del GAP e redazione del bilancio consolidato dell'Ente capogruppo

---

## 1. Introduzione e obiettivi

### 1.1 Finalità del modulo — Due obiettivi complementari

#### Monitoraggio delle partecipate

Quote di possesso dirette e indirette, organi e incarichi, compagine sociale, servizi erogati e affidati, procedure concorsuali, bilanci civilistici.

Assolve la revisione periodica entro il 31-12 prevista dall'art. 20 del TUSP e l'asseverazione crediti-debiti (art. 11 co. 6, D.Lgs. 118/2011).

#### Bilancio consolidato dell'Ente

Determinazione del GAP, definizione del perimetro, acquisizione dei bilanci, riduzioni proporzionali, elisione dei movimenti infragruppo.

Si conclude con il salvataggio del consolidato definitivo e la generazione del file XBRL per BDAP.

> I due ambiti sono collegati: anagrafiche e bilanci raccolti nella sezione Partecipate costituiscono la base di calcolo del Bilancio Consolidato.

### 1.2 Ambito normativo — Riferimenti normativi

| Riferimento | Descrizione |
|---|---|
| **D.Lgs. 118/2011** | Armonizzazione dei sistemi contabili: cornice generale entro cui opera il modulo. |
| **Allegato n. 4/4** | Principio contabile sul bilancio consolidato: individuazione del GAP, criteri di inclusione ed esclusione dal perimetro, consolidamento integrale o proporzionale. |
| **Allegato n. 11** | Schema di Conto Economico e Stato Patrimoniale secondo cui viene redatto il consolidato prodotto da CWOL. |
| **TUSP** | Testo Unico in materia di società a partecipazione pubblica (D.Lgs. n. 175/2016): regola costituzione, acquisto e gestione delle partecipazioni societarie delle amministrazioni pubbliche. L'art. 20 prevede la revisione periodica dell'assetto complessivo, con scadenza al 31-12 di ogni esercizio. |

---

## 2. Parametrizzazioni e configurazioni iniziali

**Percorso:** `180. Servizi economici → 160. Gestione Partecipate → 10. Archivi di sistema`

### 2.0 Archivi di sistema — Dieci archivi da predisporre

#### Precaricati da Palitalsoft ed implementabili

| N. | Archivio |
|---|---|
| 10 | Tipi Partecipazione |
| 20 | Parametri calcolo GAP |
| 30 | Parametri calcolo Perimetro |
| 40 | Parametri calcolo Soglia |
| 50 | Prospetti — **non modificabile** |
| 100 | Forme giuridiche |

#### Da valorizzare a cura dell'Ente

| N. | Archivio |
|---|---|
| 60 | Raggruppamenti |
| 70 | Tipi Incarico |
| 80 | Tipologie compensi |
| 90 | Servizi pubblici |

> Gli archivi liberi vanno compilati prima delle relative sezioni dell'anagrafica partecipata: incarichi, compensi e servizi pubblici li richiamano direttamente.

### 2.1 Tipi Partecipazione — I tre macro-soggetti del GAP

Secondo l'Allegato n. 4/4 al D.Lgs. 118/2011 esistono tre tipologie di soggetti. Ogni partecipata censita in anagrafica è associata ad un tipo, richiamato poi dai parametri di calcolo GAP per differenziare le soglie di rilevanza.

| Tipo | Descrizione |
|---|---|
| **Enti strumentali** | Controllati o partecipati |
| **Organismi strumentali** | Privi di personalità giuridica |
| **Società** | Controllate o partecipate |

[Screenshot: griglia "Tipo Partecipazione FEP" con codici ES (ENTE STRUMENTALE), OS (ORGANISMO STRUMENTALE), SC (SOCIETA')]

### 2.2 Parametri calcolo GAP — Calcolo GAP

Si tratta di un calcolo automatico che in base alle tabelle di parametrizzazioni include o esclude un determinato soggetto dal GAP (Gruppo Amministrazione Pubblica).

| Condizione | Esito |
|---|---|
| Procedure concorsuali attive | **ESCLUSA** |
| Società controllata | **INCLUSA** |
| Società in house | **INCLUSA** |
| Applicazione della % per il calcolo | **DIPENDE** |

[Screenshot: griglia "Parametri GAP" con codici ES-PM0, OS-PM0, SC-PM0, SC-PM01 e relativi valori, flag quotata e tipo partecipazione]

### 2.3 – 2.4 Perimetro e Soglia — Calcolo perimetro di consolidamento

Il perimetro di consolidamento è un **sottoinsieme del GAP**: identifica gli enti che dovranno essere inseriti nel bilancio consolidato dell'Ente.

**Enti del GAP esclusi dal perimetro nei casi di:**

- A. irrilevanza;
- B. impossibilità di reperire le informazioni necessarie al consolidamento.

#### Soglie di calcolo

| Soglia | Parametri | Descrizione |
|---|---|---|
| **3%** | P1 · P2 · P3 | Soglie ordinarie su Totale Attivo, Patrimonio Netto e Ricavi della gestione caratteristica. Basta che uno dei tre parametri risulti superiore: il controllo include o esclude la partecipazione in automatico. |
| **1%** | PI | Soglia di partecipazione irrilevante, verificata prima del controllo sui parametri. |
| **10%** | PT1 · PT2 · PT3 | Soglie maggiorate sugli stessi tre aggregati per soggetti altrimenti esclusi. Controllo "soft": genera un warning che suggerisce all'Ente di revisionare la scelta. |

Il confronto tra l'incidenza percentuale di ciascuna partecipata e i corrispondenti valori dell'Ente determina l'inclusione o l'esclusione dal perimetro.

I **Parametri calcolo Soglia** indicano, per ogni esercizio, quali righe dei prospetti dell'Ente rappresentano i tre aggregati usati come denominatore.

---

## 3. Gestione Partecipate

**Percorso:** `180. Servizi economici → 160. Gestione Partecipate → 20. Partecipate`

### 3.1 Anagrafica Partecipate — La scheda del soggetto partecipato

[Screenshot: griglia "Anagrafe Partecipate" con elenco soggetti (Conero autotrasporti SPA, Parking Torre sud Srl, Fondazione Teatri Valltesina, Società della salute, Società edilizia Sociale S.c.r.l, Società partecipata, Fondazione, Consorzio)]

#### Identificazione

Codice, Ragione Sociale, Codice Fiscale, Partita IVA, Tipo Partecipazione, Forma Giuridica.

#### Possesso

% diretta, indiretta e totale; il pulsante **Gestione indirette** censisce le catene di possesso.

#### Flag qualificanti

Totale partecipazione pubblica, Quotata, In House, Soggetto Controllato.

### 3.2 Gestione della partecipata — Sei sottosezioni di monitoraggio

| Sottosezione | Contenuto |
|---|---|
| **Incarichi** | Nominativo, tipo incarico e compenso degli organi di amministrazione e controllo |
| **Compagine sociale** | Quote e tipologia degli altri soci della partecipata |
| **Servizi erogati** | Codice Ateco e percentuale delle attività effettivamente svolte |
| **Servizi affidati** | Servizio pubblico, missione, durata e attività degli affidamenti dell'Ente |
| **Procedure concorsuali** | Se attive, diventano motivo automatico di esclusione dal GAP |
| **Bilancio partecipata** | Bilanci civilistici e consolidati, digitati in griglia o importati da XLSX |

### 3.3 Gestione Bilancio Ente — Tre modi per caricare il bilancio dell'Ente

L'Ente capogruppo valorizza i medesimi prospetti previsti per le partecipate, secondo lo schema dell'Allegato n. 11 al D.Lgs. 118/2011.

| Metodo | Priorità | Descrizione |
|---|---|---|
| **Importa dati CO.GE.** | Consigliato | Riprende automaticamente i saldi della Contabilità Generale armonizzata. Disponibile solo se la CO.GE. è tenuta su CWOL. |
| **Import da XLSX** | Alternativa | Caricamento tramite il modello standard scaricabile dalla procedura. |
| **Inserimento manuale** | Alternativa | Digitazione diretta degli importi nelle griglie dei prospetti. |

---

## 4. Bilancio Consolidato

**Percorso:** `180. Servizi economici → 160. Gestione Partecipate → 30. Bilancio consolidato`

### 4.1 Iter operativo — Le otto fasi del consolidamento

1. **Verifica degli archivi di sistema** — Tabelle di configurazione complete e coerenti
2. **Anagrafica e bilanci delle partecipate** — Inserimento manuale o import da XLSX
3. **Bilancio dell'Ente capogruppo** — Import CO.GE., XLSX o inserimento manuale
4. **Definizione di GAP e Perimetro** — Calcolo automatico, esiti modificabili dall'utente
5. **Scritture di preconsolidamento e infragruppo** — Elisione dei rapporti reciproci infragruppo
6. **Riduzioni proporzionali** — Applicazione delle quote di possesso ai bilanci
7. **Salvataggio e verifica** — Controllo del dettaglio per singolo soggetto
8. **Creazione del file XBRL** — Trasmissione alla BDAP

### 4.2.1 Scheda GAP — Calcolo GAP

La procedura valuta ciascun soggetto e assegna il primo motivo che risulta verificato.

| # | Condizione | Esito |
|---|---|---|
| 1 | Procedura concorsuale attiva a carico del soggetto | **ESCLUSIONE** |
| 2 | Soggetto controllato dall'Ente — controllo e coordinamento | **INCLUSIONE** |
| 3 | Organismo in house — affidatario diretto di servizi pubblici | **INCLUSIONE** |
| 4 | Confronto tra % possesso totale e soglia dei Parametri calcolo GAP | **DIPENDE** |

[Screenshot: griglia "GAP e Perimetro di Consolidamento" con tab GAP contenente Ragione Sociale, % Partecipazione, % Partecipazione Tot., Tipologia Partecipazione, Motivo Inclusione. Pulsanti: Calcola GAP, Calcola Perimetro, Stampa, Spiegazione Calcolo]

### 4.2.2 Perimetro di Consolidamento — Calcolo Perimetro

#### Controllo Parametri

Incidenza di Attivo, Patrimonio Netto e Ricavi rispetto all'Ente, confrontata con P1/P2/P3.

#### Partecipazione Irrilevante

Esclusi per % possesso sotto la soglia PI o per impossibilità nel reperire i dati di bilancio.

#### Perimetro definitivo

Elenco dei soggetti da consolidare con tipologia e motivo di inclusione:

- **Integrale** — soggetti controllati
- **Proporzionale** — in house e parametri di rilevanza

[Screenshot: griglia "GAP e Perimetro di Consolidamento" con tab "Controllo Parametri" contenente Ragione Sociale, Incidenza Attivo %, Incidenza Patrimonio Netto %, Ricavi Gestione Caratteristica, Motivo esclusione, Motivo Inclusione]

### 4.3 Movimenti Infragruppo — Due tipologie di scrittura

Occorre elidere i rapporti reciproci di credito/debito e costo/ricavo tra Ente e partecipate.

| Tipologia | Incidenza | Visibilità |
|---|---|---|
| **Pre-consolidamento** | Incidono per il **100%** dell'importo registrato | Visibili nella colonna "Scritture Preconsolidamento" delle Riduzioni Proporzionali |
| **Infragruppo** | Incidono in base alla **% di possesso** | Visibili dal programma Bilancio Consolidato – dettaglio per soggetto |

[Screenshot: finestra "Movimenti Prima Nota" con campo "Tipologia scrittura" a tendina con opzioni: "Scrittura pre consolidamento" e "Scrittura infragruppo"]

### 4.4 Riduzioni Proporzionali — Il calcolo del valore da consolidare

Per i soggetti a consolidamento proporzionale, il pulsante **Calcola** applica a ogni voce di bilancio la percentuale di possesso totale dell'Ente.

**Valore da consolidare:**

$$\text{Valore da Consolidare} = (\text{Importo di Bilancio} + \text{Scritture di Preconsolidamento}) \times \% \text{ Possesso Totale}$$

**Riduzione proporzionale — quota non di competenza dell'Ente:**

$$\text{Riduzione Proporzionale} = (\text{Importo di Bilancio} + \text{Scritture di Preconsolidamento}) - \text{Valore da Consolidare}$$

[Screenshot: griglia "Riduzioni Proporzionali" con colonne per Importo di Bilancio, Scritture Preconsolidamento, Riduzione Proporzionale, Valore da Consolidare]

### 4.5 – 4.7 Chiusura del processo — Salvataggio, stampe e XBRL

#### Salvataggio definitivo

Rende i dati disponibili per le stampe ufficiali e per l'XBRL. Il sistema blocca il salvataggio se qualche soggetto proporzionale non ha le riduzioni calcolate.

#### Stampe prospetti

Stato Patrimoniale Attivo, Stato Patrimoniale Passivo e Conto Economico secondo l'Allegato n. 11 al D.Lgs. 118/2011.

#### Creazione XBRL

Indicare l'esercizio di lavoro e la tassonomia di riferimento, quindi confermare con **Genera XBRL** per la trasmissione a BDAP.

> ⚠️ **Attenzione:** Se per l'esercizio corrente esiste già un bilancio consolidato definitivo, confermando il salvataggio quello esistente viene cancellato e ricreato con i valori aggiornati.

---

## 5. Utilità — Verifica e intervento manuale

### Consolidato per soggetto

Per ogni voce dei tre prospetti, il totale consolidato affiancato dalla scomposizione per singolo soggetto incluso nel perimetro. Da qui sono disponibili anche salvataggio e stampe.

### Consolidato manuale

Intervento diretto sui valori definitivi con confronto tra esercizio corrente e precedente; il pulsante **Proponi anno precedente** ne riprende i dati come base. Richiede autorizzazione ad hoc.

[Screenshot: griglia "Bilancio Consolidato" con prospetto Conto Economico e colonne di dettaglio per singolo soggetto (Parking Torre sud Srl, Società della salute, Società edilizia Sociale S.c.r.l, Consorzio, Fondazione Teatri Valltesina, Società partecipata). Pulsanti: Salva, Stampa, Dettaglio FEP]

---

## Domande e risposte

**Serve avere la Contabilità Generale su CWOL?**

No. L'import automatico dei saldi CO.GE. è disponibile solo in quel caso, ma il bilancio dell'Ente può essere caricato da XLSX o inserito a mano.

**Gli esiti di GAP e Perimetro sono vincolanti?**

No. Il calcolo è automatico e tracciato dalla Spiegazione Calcolo, ma inclusione, esclusione e tipologia di consolidamento restano modificabili dall'operatore.

**Si può rifare il consolidato dopo il salvataggio definitivo?**

Sì. Confermando un nuovo salvataggio il consolidato esistente per l'esercizio viene cancellato e ricreato con i valori aggiornati.