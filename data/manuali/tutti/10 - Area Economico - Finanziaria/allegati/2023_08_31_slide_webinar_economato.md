# Procedura Economato – CWOL Financing

## Introduzione

Gli incontri di seguito elencati hanno lo scopo di illustrare le operatività dei moduli di City-Financing nel nuovo ambiente web per l'utilizzo delle nuove operatività.

### Modalità di erogazione

I webinar sono suddivisi per argomenti e hanno una durata massima di 120 minuti, dove i relatori illustrano le novità e le modalità operative dell'argomento trattato.

Le presentazioni saranno registrate ed il link sarà messo a disposizione su wiki.

Su wiki accessibile ai link sotto riportati sono disponibili i manuali e la documentazione:

- **Per la manualistica:** `guide:area-economico-finanziaria:manualistica:start [wiki]` (nuvolaitalsoft.it)
- **Per le comunicazioni e la cronologia rilasci:** `guide:area-economico-finanziaria:start [wiki]` (nuvolaitalsoft.it)

---

## Procedura Economato

### Argomenti trattati

- Passaggio e compatibilità tra CW e CWOL
- Impostazioni applicativo
- Gestione movimenti di entrata e uscita
- Prospetti e consultazioni
- Fase rendiconto automatico

### Documentazione di riferimento

Manuale economato: `https://wiki.nuvolaitalsoft.it/lib/exe/fetch.php?media=guide:manuali_entrate:20230205_manuale_economato.pdf`

---

## Passaggio e compatibilità tra CW e CWOL

Essendo il database unico tra CW e CWOL, per utilizzare la versione presente su CWOL del modulo **Cassa Economale** non sono necessarie particolari impostazioni.

L'unica differenza riguarda i **dati fiscali** relativi all'impegno/accertamento del movimento economale: su CWOL viene inserito a livello di singola riga (con la stessa modalità del modulo Fatturazione Entrate). Quindi nella fase di passaggio è possibile utilizzare una utility che permette di "trasferire" i dati fiscali dei movimenti di CW dalla testata al dettaglio delle voci per essere considerati nelle stampe di CWOL.

### Percorso utility

**Utility "Aggiorna Imp./Acc. e dati bilancio su dett. mov. economato":**

```
Normalizzazione Archivi → Impegni/Accertamenti → Aggiorna Imp./Acc. e dati bilancio su dett. mov. economato
```

[Schermata: menu a tendina con percorso Normalizzazione Archivi > Impegni/Accertamenti > Aggiorna Imp./Acc. e dati bilancio su dett. mov. economato]

---

## Impostazioni applicativo

### Impostazione 1 – Collegamento modello al tipo movimento

Se l'Ente utilizza già il modulo cassa economale di CW, l'unica impostazione da effettuare riguarda i **tipi movimenti esistenti** dove occorre specificare il **modello di stampa** da utilizzare.

Sono già presenti dei modelli standard per le entrate e per le uscite che possono essere modificati secondo le esigenze dell'ente.

**Percorso:** `Tipo movimenti Economato → FE e altro`

[Schermata: interfaccia "Tipo movimenti Economato" con tab "FE e altro" attivo, sezione "Dati per stampa documento" con campo "Codice Testo CW online" (es. cwFEcon_000Ricevuta_E) e "Ricevuta Economato Standard Ingresso"]

### Impostazione 2 – Modifica/creazione modelli

Per modificare i modelli presenti (o crearne dei nuovi) si utilizza il programma **"Documenti Base"**.

**Percorso:**

```
110. Amministrazione del Sistema → 60. Gestione Modelli Documenti → 10. Documenti Base
```

[Schermata: menu ad albero con percorso 110. Amministrazione del Sistema > 60. Gestione Modelli Documenti > 10. Documenti Base]

**Procedura di modifica:**

1. Selezionare il modello da modificare
2. Cliccare sul bottone **"Apri / Visualizza"** → viene aperto l'editor **ONLYOFFICE**
3. Le modifiche vengono registrate in automatico
4. Chiudere il modello e cliccare il pulsante **"Aggiorna"** per confermare

---

## Gestione movimenti di entrata e uscita

Le informazioni principali dell'applicativo sono presenti nei **movimenti economali**. Il programma di gestione permette di inserire e modificare i movimenti di entrata e uscita a seconda del tipo movimento utilizzato per l'inserimento degli stessi.

### Dettaglio voce di bilancio

Se un impegno/accertamento è collegato ad una voce di bilancio al **4° livello**, è possibile specificare la voce di bilancio al **5° livello** che viene memorizzata nel movimento stesso.

### Allegati documentali

Entrando in modifica del singolo movimento è possibile allegare un qualsiasi file (**Excel, Word, PDF, JPG**) utile per specificare il dettaglio dell'entrata o della spesa economale. Il file viene inserito nel **repository documentale di Alfresco** e può essere consultato in qualsiasi momento.

---

## Prospetti e consultazioni

A seguito dell'inserimento dei movimenti economali, si procede con la generazione dei prospetti:

| Prospetto / Funzione | Descrizione |
|---|---|
| **Giornale di Cassa** | Se lanciata in definitivo, memorizza i progressivi nelle registrazioni |
| **Primanota di Cassa** | Stampa utile alla gestione |
| **Stampe Ministeriali** | Stampe obbligatorie per adempimenti ministeriali |
| **Distinta di Cassa** | Stampa utile alla gestione |
| **Riepilogo Movimenti per Capitolo** | Situazione contabile alla data, propedeutico al Rendiconto Automatico |
| **Interrogazione Movimenti Economali** | Visualizzazione sintetica dell'andamento del saldo di cassa con drill-down fino al dettaglio del singolo movimento |

---

## Fase rendiconto automatico

Periodicamente è possibile lanciare la funzione **"Rendiconto Automatico"** che permette di generare le liquidazioni ed i relativi mandati (nel caso di movimenti di uscita) in relazione agli impegni inseriti nel singolo movimento economale.

### Procedura in fasi

1. **Importazione:** la procedura legge i dati e li inserisce in una tabella temporanea
2. **Controllo:** le informazioni possono essere verificate manualmente
3. **Elaborazione:** generazione dei movimenti contabili (liquidazioni e mandati)

### Esito della procedura

Ultimata la procedura:

- Nei movimenti economali vengono inseriti i **riferimenti contabili**
- I movimenti vengono impostati come **"Rendicontati"**

> ⚠️ Questo per evitare che vengano considerati di nuovo nell'estrazione successiva.