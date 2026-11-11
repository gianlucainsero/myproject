# Gestione Testi Moduli CityTax

## 1.1 Gestione Testi

La gestione dei testi moduli CityTax si trova al menù **Tributi → Documenti Base**.

[Schermata del menu Applicazioni con percorso: 70. Tributi → 160. Documenti Base]

Si aprirà la seguente videata:

[Schermata "Documenti base" con campi: Codice, Descrizione, Interno/Esterno, Tipo, Funzione, Bozza e bottoni: F2-Nuovo, F4-Elenco, Import]

---

### Nuovo Inserimento

[Schermata "Documenti base" con il bottone F2-Nuovo evidenziato]

Facendo click sul bottone **'Nuovo'** è possibile caricare un nuovo testo.

Il caricamento del nuovo testo prevede:

a. Inserimento dati descrittivi del testo
b. Inserimento del modello

#### a. Inserimento dati descrittivi

[Schermata di inserimento dati descrittivi con campi: Codice, Descrizione, Classificazione (Tributi CityWare), Revisione, Data Revisione, Bozza, Data Scadenza, Tipo, Funzione e bottoni: F5-Aggiungi, Copia da..., F3-Altra Ricerca]

**Codice:** di default viene presentato sempre il codice Ente. È possibile effettuare una codicizzazione libera, purché il codice non possieda spazi.

- **Es. di un codice corretto:** `Avviso_Bonario_2024`
- **Es. di un codice errato:** `Avviso Bonario 2024`

**Descrizione:** editazione libera e senza vincoli da parte dell'utente.

**Classificazione:** sempre **Tributi Cityware** (viene presentata di default).

**Tipo:** per i testi Tributi usare sempre **DOCX**.

**Funzione:**

| Funzione | Utilizzo |
|----------|----------|
| Tributi | Se TARI, CUP, IDS |
| IMU/TASI | Se modulo IMU |

Nell'immagine di seguito, lo standard da seguire per l'inserimento dei dati descrittivi di un testo Tributi:

[Schermata esempio dati descrittivi: Codice "Avviso_Bonario_2024", Descrizione "TARI 2024", Classificazione "Tributi CityWare", Revisione 1, Data Revisione 06/09/2024, Tipo "DOCX", Funzione "Tributi"]

Fare click su **"Aggiungi"** per confermare i dati descrittivi.

A questo punto comparirà sulla destra una bottoniera per inserire il modello.

---

#### b. Inserimento del modello

##### Nuovo modello

[Schermata con bottoniera: F6-Aggiorna, Apri/Visualizza, Sostituisci, F7-Cancella, F3-Altra Ricerca, F9-Torna Elenco, Versioni Precedenti, Export]

Cliccando **Apri/Visualizza** si apre il file ancora vuoto, dove l'utente può inserire ex-novo l'intero testo:

[Schermata editor ONLYOFFICE con documento vuoto "prova testo"]

##### Modello già preimpostato

Per inserire un modello già preimpostato, cliccare il bottone **"Sostituisci"**.

[Schermata con bottone "Sostituisci" evidenziato nella bottoniera]

Si aprirà la seguente videata:

[Finestra "Acquisizione File...." con campo "Scegli un file da caricare..." e icona di ricerca]

Cercare il file attraverso l'iconcina a destra e con doppio click caricarlo.

[Finestra "Sostituzione" con messaggio "File caricato correttamente."]

Il file così caricato, è ora consultabile, gestibile e modificabile cliccando il bottone **"Apri/Visualizza"**.

[Schermata con bottone "Apri/Visualizza" evidenziato]

Si aprirà il modello caricato esternamente:

[Schermata editor ONLYOFFICE con modello TARI 2024 contenente intestazione Comune di Palitalsoft, variabili di stampa come @{DOC_TRI:avv_matricola_avviso}@, @{CONTR:contr_codfis_piva}@, ecc.]

> **Nota:** La funzione di "Sostituzione" è sempre utilizzabile in ogni momento, per caricare un modello impostato esternamente.

---

##### Conferma dell'inserimento

In entrambe le modalità (**nuovo modello** o **modello già preimpostato**), confermare l'inserimento definitivamente cliccando il bottone **"Aggiorna"**:

[Schermata con bottone F6-Aggiorna evidenziato]

---

### Nuovo Inserimento in Duplicazione

Per duplicare un testo, cliccare il bottone **"Nuovo"**.

[Schermata "Documenti base" con bottone F2-Nuovo evidenziato]

All'apertura della videata dei dati descrittivi, cliccare su **'Copia da'**:

[Schermata dati descrittivi con bottone "Copia da..." evidenziato]

Una volta cliccato il bottone "Copia da", il programma chiede di scegliere il testo già presente nel programma di cui effettuare la copia: sceglierlo con **doppio click**.

[Finestra "Risultato Ricerca" con elenco documenti: DenunciaCessazione, DenunciaIniziale, DenunciaSubentro, DenunciaTrasferimento, DenunciaVariazione, annullamentoBonario, tassaRifiuti, CWTrimborso_imu, RATEIZZAZIONE_IMU_8084, RIMBORSO_IMU_8081, TestoAccertamento, testoCumuloTari, CWTannullamento]

Una volta scelto, il programma precompila i dati descrittivi in base a quelli presenti sul testo origine. L'utente dovrà solo personalizzare il **Codice**.

[Schermata con dati precompilati: Descrizione "Avviso di annullamento Bonario", Classificazione "Tributi CityWare", Tipo "DOCX", Funzione "Tributi", campo Codice vuoto da compilare]

Una volta scritto il codice, confermare l'inserimento in duplicazione con il bottone **"Aggiungi"**.

[Schermata con Codice "Avviso_annullamento" e bottone F5-Aggiungi evidenziato]

Una volta terminato l'inserimento in duplicazione, cliccando il bottone "Apri/Visualizza" sarà presente il modello di testo duplicato, uguale al testo origine.

[Schermata editor ONLYOFFICE con modello duplicato contenente variabili di stampa]

---

## 1.2 Modifica di un Testo

Per modificare un testo, andare sull'elenco dei testi:

[Schermata "Documenti base" con bottone F4-Elenco evidenziato]

Scegliere il modello dall'elenco testi con **doppio click**.

[Schermata elenco documenti con colonne: Classe, Funzione, Codice, N. Revisione, Data Revisione, Descrizione, Tipo, Data Deploy, Bozza. Esempi: TRIBUTI-CW / TRIBUTI / 042048_ / 2 / 16/09/2024 / Invito al contraddittorio per omessa denuncia tari PROVA / DOCX]

Per effettuare la modifica cliccare sul bottone **Apri/Visualizza**:

[Schermata con bottone "Apri / Visualizza" evidenziato nella bottoniera]

Il modello si apre ed è possibile editarlo:

[Schermata editor ONLYOFFICE con modello "Avviso_BonarioDenuncia_Default" aperto]

Mentre il modello è aperto è possibile effettuare qualunque modifica, operando come se fosse un file di Word.

Le modifiche apportate vengono salvate **istantaneamente** appena si inizia a editare il testo:

[Schermata editor con messaggio "Tutte le modifiche sono state salvate" e esempio di testo con variabili di stampa come @{DOC_TRI:avv_data_avv@, @{DOC_TRI:avv_annoti@, @{SAVV_SCA:avv_sca_datasca@, ecc.]

Una volta terminate le modifiche chiudere il modello con la **'X'** e cliccare poi su **'Aggiorna'**.

[Schermata editor ONLYOFFICE con pulsante X di chiusura evidenziato]

[Schermata con bottone F6-Aggiorna evidenziato]

---

### Tracciatura delle Versioni e Ripristino della Versione Precedente

Ogni volta che, dopo aver modificato il testo si clicca su **'Aggiorna'**, la versione del testo viene storicizzata ed è consultabile al bottone **"Versioni precedenti"**.

[Schermata con bottone "Versioni Precedenti" evidenziato nella bottoniera]

Comparirà l'elenco delle versioni:

[Finestra "Risultato Ricerca" → "Elenco Versioni" con colonne: Data Rev., Num., Codice, Descrizione, Tipo. Esempi: 06/09/2024 / 7 / Avviso_TardivaDenuncia_Defa / DOCX; 06/09/2024 / 6 / ...; 06/09/2024 / 5 / ...; 23/01/2024 / 3 / ...; 23/01/2024 / 2 / ...]

Per ripristinare una versione precedente, fare **doppio click** sulla versione precedente; comparirà la seguente videata con un messaggio:

[Schermata con intestazione "TESTO IN USO: VERSIONE N. 4" e messaggio "Versione Precedente: È stato caricato il testo della versione 4. Prestare attenzione."]

Chiudere il messaggio con la **'X'**, poi confermare il ripristino della versione precedente cliccando **"Aggiorna"**:

[Schermata con bottone F6-Aggiorna evidenziato e intestazione "TESTO IN USO: VERSIONE N. 4"]

Comparirà la richiesta di conferma (confermare con il **'SI'**):

[Finestra "Attenzione" con messaggio: "È stata caricata la versione 4. Aggiornando verrà creata una nuova versione con le modifiche apportate. Continuare col salvataggio?" e pulsanti SI / NO]

---

## 1.3 Cancellazione di un Testo

Per eliminare un testo, andare sull'elenco dei testi con **'Elenca'**:

[Schermata "Documenti base" con bottone F4-Elenco evidenziato]

Scegliere il modello dall'elenco testi con **doppio click**.

[Schermata elenco documenti con vari testi TRIBUTI-CW]

Per effettuare la cancellazione cliccare sul bottone **'Cancella'**:

[Schermata con bottone F7-Cancella evidenziato nella bottoniera]

Comparirà la seguente videata:

[Finestra "Cancellazione" con messaggio "Confermi la Cancellazione?" e pulsanti F5-Conferma / F8-Annulla]

Confermare la cancellazione con il bottone **Conferma**.

---

## 1.4 Testi Default

Il software è fornito con i modelli di testo default, già precompilati di tutte le variabili.

### Moduli TARI/CUP

I moduli TARI/CUP sono forniti con:

- 1 modello di testo default per ogni tipo avviso (modello per avviso bonario, modello per accertamento, ecc).
- Lo standard con cui sono caricati i testi default è: **Tipo imposta + Tipo avviso + dicitura "Default"** (es. TARI Accertamento OPV Default).
- Lo standard di codice è `cwt_TipoImposta_TipoAvviso` (es. `cwt_TARI_Accertamento_OPV`).
- I testi default, quando modificati, migliorati, integrati da Palitalsoft, sono rilasciati con gli aggiornamenti di CWOL.

### Moduli IMU

I moduli IMU sono forniti con:

- 1 modello di testo default per ogni tipo avviso (modello per avviso annullamento, modello per accertamento, ecc).
- Lo standard con cui sono caricati i testi default è: **Tipo imposta + Tipo avviso** (es. IMU rateizzazione).
- Lo standard di codice è `cwt_TipoImposta_TipoAvviso` (es. `cwt_IMU_rateizzazione`).
- I testi default, quando modificati, migliorati, integrati da Palitalsoft, sono rilasciati con gli aggiornamenti di CWOL.

### Metodo di utilizzo dei testi default

Il testo default costituisce una base già preimpostata delle variabili di stampa.

L'utente dovrà avere cura esclusivamente di:

- Crearsi il suo testo in **duplicazione del default** (**mai modificare direttamente il default**);
- Inserire nel modello i riferimenti all'Ente (logo e denominazione), i riferimenti regolamentari dell'Ente, ecc.
- Il testo nel momento in cui l'Ente lo personalizza, può essere integrato di frasi fisse di testo ulteriori.