# Procedura Economato – CityWare Online (CWOL) Financing

## Modalità di Erogazione

I webinar sono suddivisi per argomenti e hanno una durata massima di 120 minuti, dove i relatori illustrano le novità e le modalità operative dell'argomento trattato.

Le presentazioni saranno registrate ed il link sarà messo a disposizione su wiki.

Su wiki accessibile al link sotto riportato sono disponibili i manuali e la documentazione:

- **Per la manualistica:** `guide:area-economico-finanziaria:manualistica:start [wiki] (nuvolaitalsoft.it)`
- **Per le comunicazioni e la cronologia rilasci:** `guide:area-economico-finanziaria:start [wiki] (nuvolaitalsoft.it)`

---

## Procedura Economato – 31-08-2023

### Argomenti Esposti

- Passaggio e compatibilità tra CW e CWOL
- Impostazioni applicativo
- Gestione movimenti di entrata e uscita
- Prospetti e consultazioni
- Fase rendiconto automatico
- Domande e risposte

### Documentazioni

- [Manuale Economato (PDF)](https://wiki.nuvolaitalsoft.it/lib/exe/fetch.php?media=guide:manuali_entrate:20230205_manuale_economato.pdf)

---

## Passaggio e compatibilità tra CW e CWOL

Essendo il database unico tra CW e CWOL, per utilizzare la versione presente su CWOL del modulo **Cassa Economale** non sono necessarie particolari impostazioni.

L'unica differenza riguarda i **dati fiscali** relativi all'impegno/accertamento del movimento economale: su CWOL viene inserito a livello di **singola riga** (con la stessa modalità del modulo Fatturazione Entrate). Quindi nella fase di passaggio è possibile utilizzare una utility che permette di "trasferire" i dati fiscali dei movimenti di CW dalla testata al dettaglio delle voci per essere considerati nelle stampe di CWOL.

### Percorso utility

**"Aggiorna Imp./Acc. e dati bilancio su dett. mov. economato"**

[Schermata: menu a tendina con percorso: Normalizzazione Archivi → Impeng./Accertamenti → Aggiorna Imp./Acc. e dati bilancio su dett. mov. economato]

---

## Impostazioni applicativo 1

Se l'Ente utilizza già il modulo cassa economale di CW, l'unica impostazione da effettuare riguarda i **tipi movimenti esistenti**, dove occorre specificare il **modello di stampa** da utilizzare.

Sono già presenti dei modelli standard per le entrate e per le uscite che possono essere modificati secondo le esigenze dell'ente.

### Collegamento modello al tipo movimento

[Schermata: finestra "Tipo movimenti Economato" con tab "FE e altro" selezionato. Campo "Codice Testo CW online" con valore `cwFEcon_000Ricevuta_E` e modello associato "Ricevuta Economato Standard Ingresso". Campi visibili: Dati per stampa documento, Legami con emissioni per PagoPA, Opzioni per riscossioni, Estremi Accertamento/Variazione da matrice]

---

## Impostazioni applicativo 2

Per modificare i modelli presenti (o crearne dei nuovi) si utilizza il programma **"Documenti Base"** raggiungibile al seguente percorso:

**110. Amministrazione del Sistema → 60. Gestione Modelli Documenti → 10. Documenti Base**

[Schermata: menu di navigazione con percorso evidenziato: 110. Amministrazione del Sistema → 60. Gestione Modelli Documenti → 10. Documenti Base]

Una volta selezionato il modello da modificare, cliccando sul bottone **"Apri / Visualizza"** viene aperto l'editor **"ONLYOFFICE"** e le modifiche vengono registrate in automatico. Una volta chiuso il modello con il pulsante **"Aggiorna"** vengono confermate.

---

## Gestione movimenti di entrata e uscita

Le informazioni principali dell'applicativo sono presenti nei **movimenti economali**. Il programma di gestione permette di inserire e modificare i movimenti di entrata e uscita a seconda del tipo movimento utilizzato per l'inserimento degli stessi.

### Dettaglio voce di bilancio

Se un impegno/accertamento è collegato ad una voce di bilancio al **4° livello**, è possibile specificare la voce di bilancio al **5° livello** che viene memorizzata nel movimento stesso.

### Allegati documentali

Entrando in modifica del singolo movimento è possibile allegare un qualsiasi file (excel, word, pdf, jpg) utile per specificare il dettaglio dell'entrata o della spesa economale. Il file viene inserito nel **repository documentale di Alfresco** e può essere consultato in qualsiasi momento.

---

## Prospetti e consultazioni

A seguito dell'inserimento dei movimenti economali, si procede con la generazione dei prospetti:

### Stampe principali

| Prospetto | Descrizione |
|-----------|-------------|
| **Giornale di Cassa** | Se lanciata in definitivo, memorizza i progressivi nelle registrazioni |
| **Primanota di Cassa** | Stampa utile alla gestione |
| **Stampe Ministeriali** | Stampe conformi ai formati ministeriali |
| **Distinta di Cassa** | Stampa utile alla gestione |
| **Riepilogo Movimenti per Capitolo** | Permette di avere una situazione contabile alla data per poi procedere con il Rendiconto Automatico |

### Interrogazione Movimenti Economali

La funzione **"Interrogazione Movimenti Economali"** permette di visualizzare in modo sintetico l'andamento del saldo di cassa e di scendere fino al dettaglio del singolo movimento economale.

---

## Fase rendiconto automatico

Periodicamente è possibile lanciare la funzione **"Rendiconto Automatico"** che permette di generare le liquidazioni ed i relativi mandati (nel caso di movimenti di uscita) in relazione agli impegni inseriti nel singolo movimento economale.

### Procedura in fasi

1. **Importazione:** la procedura legge i dati e li inserisce in una tabella temporanea.
2. **Controllo:** successivamente le informazioni possono essere controllate.
3. **Elaborazione:** è possibile elaborare i record per generare i movimenti contabili.

### Esito della procedura

Ultimata la procedura, nei movimenti economali vengono inseriti i **riferimenti contabili** e vengono impostati come **"Rendicontati"**, questo per evitare che vengano considerati di nuovo nell'estrazione.