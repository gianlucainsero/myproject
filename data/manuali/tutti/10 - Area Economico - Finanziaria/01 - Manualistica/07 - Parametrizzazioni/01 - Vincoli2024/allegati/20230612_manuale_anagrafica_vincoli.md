# Manuale Gestione Anagrafica Vincoli

**Scopo del documento:** Le fasi di seguito illustrate mostrano l'operatività per la gestione dei vincoli in CWOL.

---

## 1. Manuale Vincoli

### 1.1 Gestione anagrafica vincoli

Dal menù:

**Servizi Economici → Finanziaria → Bilancio e variazioni → Vincoli**

Dalla voce di menu sopra indicata si accede alla schermata dell'anagrafica vincoli.

[Schermata anagrafica vincoli con struttura ad albero dei vincoli, colonne: Descrizione, Tipologia, Destinatario, Conto di gestione, Anno, Importo]

A questo punto è possibile ricercare il vincolo interessato fino al livello foglia, ovvero ultimo livello indicato dal pallino.

Per inserire un nuovo vincolo occorre selezionare il livello superiore e fare **"Nuovo Sottolivello"**.

Per consultare invece la situazione di un vincolo esistente occorre selezionarlo e fare **Situazione Competenza** o **Situazione Cassa** a seconda delle esigenze.

---

#### 1.1.1 Situazione Competenza

Attraverso il bottone **SITUAZIONE COMPETENZA** si ha evidenza dell'avanzo applicato al bilancio, ad esempio se sono state fatte variazioni di bilancio su quel vincolo verranno mostrate alla riga 2.2.

La riga 1, valore iniziale, sarà reperito dal movimento di chiusura dell'anno precedente (vedi paragrafo 1.1.3 per approfondimenti).

Vengono mostrati inoltre **impegni** e **accertamenti** collegati al vincolo:

- Gli **impegni** vengono mostrati alla **riga 6** se finanziati da avanzo e alla **riga 10** se finanziati da entrate
- Gli **accertamenti** vengono mostrati alla **riga 9**

Entrando nel dettaglio delle righe degli accertamenti o impegni attraverso il bottone della seconda colonna è poi possibile consultare il dettaglio e la situazione impegni/accertamenti.

La **riga 7** "Utilizzo su impegni promiscui" riguarda movimenti caricati manualmente.

È possibile inserire dei movimenti manuali attraverso il bottone **MOVIMENTAZIONI ANNUALI** dopo aver selezionato il vincolo interessato.

A questo punto fare **Aggiungi**.

Indicare il **"Tipo Variazione"** (es. se riguarda una somma da altro vincolo indicare n.6) e specificare l'importo.

Dopo aver inserito tutte le informazioni necessarie fare **Aggiungi**.

Nella schermata di sinistra la lista delle possibili movimentazioni manuali da inserire.

**Tipi di Variazione disponibili:**

| N. | Descrizione |
|----|-------------|
| 1 | Utilizzato su Bilancio di Previsione Quota Corrente |
| 2 | Utilizzato su Bilancio di Previsione Quota Capitale |
| 3 | Conto conservativo: importo utilizzato per copertura disavanzo |
| 4 | Conto conservativo: importo aggiunto per saldo FCDE |
| 5 | Conto conservativo: importo diminuito per saldo FCDE |
| 6 | Trasferito ad altri vincoli |
| 8 | Utilizzato su impegni promiscui |
| 11 | Riduzione FCDE applicate al bilancio a seguito eliminazione residui |
| 17 | Somme Accantonate流 al Rendiconto 2021 |
| 18 | Minori Entrate |
| 19 | Minori Spese |
| 20 | Importo aggiuntivo - No Equilibri |
| 21 | Importo detratto - No Equilibri |
| 100 | Cassa Proveniente da altri vincoli |
| 101 | Cassa Trasferita ad altri vincoli |
| 500 | Accantonamenti Competenza + Allegati |
| 501 | Accantonamento Residuo + Allegati |
| 503 | Applicazione avanzo da previsione |

È anche possibile consultare l'anagrafica vincoli di anni diversi rispetto all'esercizio contabile in cui si è, restando all'interno della schermata, selezionando l'**"Anno Rif."**.

Per ogni riga è possibile consultarne il dettaglio attraverso l'apposito bottone evidenziato in rosso nella schermata di sinistra.

---

#### 1.1.2 Situazione Cassa

Attraverso il bottone **SITUAZIONE CASSA** invece è possibile consultare l'incassato e il pagato o i trasferimenti da/a altri vincoli. Di conseguenza verrà calcolato il **saldo cassa di fine anno**.

La situazione cassa dà anche riscontro di quale è il **conto tesoreria** inserito in quegli ordinativi o reversali collegati a quel vincolo.

Anche in questo caso sulla destra possiamo selezionare un diverso anno rispetto all'esercizio contabile in cui siamo per consultare la situazione cassa di esercizi diversi.

Anche nella Situazione di Cassa è possibile procedere al caricamento di due tipologie di movimentazioni manuali attraverso il bottone **MOVIMENTAZIONI ANNUALI**.

È possibile scegliere tra **"Tipo Variazione"**, ovvero cassa proveniente da/trasferita a altri vincoli. Inserire l'importo e il conto tesoreria.

---

#### 1.1.3 Avanzo Libero

Attraverso il bottone **AVANZO LIBERO** è possibile procedere alla chiusura dei saldi. Occorre per questo spostarsi all'anno precedente.

Una volta cliccato su **Avanzo Libero** il programma mostrerà la schermata di sinistra così da avere un riepilogo dei totali di:

- Parte accantonata
- Parte vincolata
- Investimenti
- Disponibile

così da avere la possibilità di confrontarli con quelli del risultato di amministrazione e, se corretti, procedere con la storicizzazione.

Per procedere alla chiusura dei saldi premere il bottone **STORICIZZA SALDI**.

È possibile procedere alla chiusura saldi per:

- **Competenza e Cassa**
- **SOLO competenza**
- **SOLO cassa**

È quindi possibile procedere in modo disgiunto per la chiusura dei saldi di cassa rispetto a quelli di competenza.

A questo punto i saldi finali dell'anno precedente verranno riportati come saldi iniziali dell'anno corrente.

---

#### 1.1.4 Stampe allegati al bilancio

Attraverso il bottone **STAMPE ALLEGATI AL BILANCIO** è possibile procedere alle stampe degli allegati **a/1)**, **a/2)** e **a/3)**.

È inoltre possibile scegliere se **a previsione** o **a rendiconto**.

Inserendo la spunta in **Versione Ufficiale** la stampa PDF o l'esportazione dell'excel, a seconda della scelta, produrrà gli allegati al bilancio ufficiali. Senza la spunta invece il programma restituisce la stampa più dettagliata.

**Opzioni disponibili nella finestra "Allegati al Bilancio":**

- **Bilancio:** Previsione / Rendiconto
- **Tipo Allegato:** Quote Accantonate / Quote Vincolate / Quote Destinate agli Investimenti
- **Versione Ufficiale:** (checkbox)
- **Esporta in XLSX** / **Crea Report PDF** / **Allegati al Bilancio**

[Schermata esempio di stampa allegato a/1) quote accantonate nella versione ufficiale - Elenco analitico delle risorse accantonate nel risultato di amministrazione presuntivo]

[Schermata esempio di stampa allegato a/1) senza flag versione ufficiale - versione più dettagliata con suddivisione per capitoli]

---

### 1.2 Inserimento vincolo su impegno

Dal menù:

**Servizi Economici → Finanziaria → Uscita → Impegni**

Entrare in modifica dell'impegno interessato.

Andare nella tab **VINCOLI** ed inserire in **Collegamento con Vincoli** → **"Su un unico Vincolo"**. Dopo di che inserire il vincolo nella riga sottostante.

È possibile collegare l'impegno ad un **accertamento**, se finanziato da entrate. In questo caso fare **+** nella parte **"Finanziato dai seguenti accertamenti appartenenti allo stesso Vincolo"** ed inserire i riferimenti dell'accertamento.

In questo modo inserendo l'accertamento collegato, ritornando nella scheda del vincolo, l'impegno comparirà alla **riga 10** come finanziato da entrate.

---

### 1.3 Inserimento vincolo su accertamento

Dal menù:

**Servizi Economici → Finanziaria → Entrata → Accertamenti**

Entrando in modifica dell'accertamento inserire il **Collegamento con Vincoli** nella tab **VINCOLI**.

Nel caso di accertamento i casi possibili sono 4:

- **Nessun vincolo**
- **Unico Vincolo**
- **Frazionamento per intero** (collegato a più vincoli e l'accertamento è vincolato per l'intero importo)
- **Frazionamento Parziale** (collegato a più vincoli ma l'accertamento è vincolato solo per una parte dell'importo)

---

### 1.4 Inserimento vincolo su voce di bilancio

Dal menù:

**Servizi Economici → Finanziaria → Bilancio e variazioni → Voci di bilancio**

Entrando in modifica della voce di bilancio inserire nella tab **"Classificazione e Statistiche"** il vincolo.

> ⚠️ **ATTENZIONE!**
> Il vincolo va inserito nella voce di bilancio **solamente** nel caso in cui tutti gli impegni o accertamenti creati dalla voce di bilancio in questione devono essere collegati a quel vincolo. Questo perché inserendo il vincolo nella voce di bilancio verrà riportato in automatico in tutti gli impegni/accertamenti creati successivamente con quella voce di bilancio.