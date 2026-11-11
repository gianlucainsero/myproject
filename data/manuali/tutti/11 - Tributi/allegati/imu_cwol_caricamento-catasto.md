# Caricamento Forniture Catasto

## 1. Importazione dei dati catastali

Il file contenente i dati catastali si presenta come un archivio `.zip` (es. `H769_1727762_1`).

Per procedere con l'importazione dei dati catastali, selezionare la voce di menù:

**Tributi → Territorio e Catasto → Catasto → 10. Importazione Globale**

[Schermata: percorso di menu a cascata nel CWOL con evidenziazione della voce "10. Importazione Globale"]

Si aprirà la finestra di CWOL di scelta del file da importare e altri parametri da selezionare.

[Schermata: finestra "Importazione Catasto" con campo "File ZIP", checkbox "Aggiorna DTEFF_INI se Null", checkbox "Esporta automaticamente i Risultati in formato Excel" e pulsante "Importa"]

### 1.1 Selezione del file

La selezione del file `.zip` da importare viene effettuata cliccando sull'icona 📁 (non decomprimere il file) e scegliendolo dalla cartella del PC dove è stato salvato, con doppio click.

### 1.2 Ordine di caricamento

Vanno caricati per primi i dati **"base"** (ovvero la situazione catastale fino ad una certa data) del catasto fabbricato e terreni, poi si può procedere ad importare gli **"aggiornamenti"** successivi (ovvero tutte le variazioni intervenute da quella certa data in avanti).

### 1.3 Verifica del contenuto

Una volta selezionato il file, la procedura visualizza i singoli file contenuti nel file compresso:

[Schermata: finestra "Importazione Catasto" con il file ZIP selezionato e i tre file interni visualizzati: Importazione Soggetti (H7691727762_1.SOG), Importazione Titolarità (H7691727762_1.TIT), Importazione unità Immob. cat.urb. (H7691727762_1.FAB)]

La procedura rimanda il messaggio per avvisare che i dati sono pronti per essere importati:

> **Attenzione:** Archivio caricato correttamente, pronto per Importazione

### 1.4 Opzioni prima dell'importazione

Prima di procedere con l'importazione, si possono effettuare due scelte:

- **Aggiorna DTEFF_INI se Null** — Accendendo questo flag, se la data efficacia iniziale presenta un valore Null, la procedura provvederà ad aggiornarla inserendo lo stesso valore della data inizio validità.

- **Esporta automaticamente i Risultati in formato Excel** — Accendendo questo flag, verranno generati i file Excel relativi all'importazione.

### 1.5 Esecuzione dell'importazione

Dopo aver scelto le opzioni, premere il tasto **"Importa"**, presente a destra nella videata.

Al termine, la procedura rimanda il messaggio di fine importazione:

> **Success:** Importazione Catasto terminata

---

## 2. Controllo della Titolarità

Procedere, a questo punto, con il Controllo della Titolarità selezionando la voce di menù:

**Tributi → Territorio e Catasto → Catasto → 20. Controllo Titolarità**

[Schermata: percorso di menu a cascata con evidenziazione della voce "20. Controllo Titolarità"]

Si aprirà la finestra di CWOL "Controllo Titolarità" con le seguenti opzioni:

- **Modalità:** Simulazione / Aggiornamento
- **Esporta i risultati in formato Excel** (checkbox)
- Pulsante **"Avvia Aggiornamento Controllo Titolarità"**

### 2.1 Esportazione risultati

L'opzione **"Esporta i risultati in formato Excel"** provvederà ad estrarre i soggetti interessati dal controllo producendo un elenco Excel.

### 2.2 Esecuzione in modalità Aggiornamento

Selezionando la modalità **"Aggiornamento"**, e cliccando su **"Avvia Aggiornamento Controllo Titolarità"**, la procedura proporrà il seguente messaggio di attenzione:

> **Attenzione:** Procedendo in modalità Aggiornamento, verranno aggiornati i dati Titolarità! Continuare?

Cliccare su **"Conferma"** per procedere.

Al termine dell'aggiornamento si avrà un messaggio di fine elaborazione:

> **Attenzione:** Elaborazione Terminata

### 2.3 Effetti dell'aggiornamento

Eseguendo la procedura in modalità "Aggiornamento", in **"Catasto"** (menù **Tributi → Territorio e Catasto → Catasto → Catasto**), verranno impostate:

- L'iconcina della **casetta** (🏠) per gli immobili
- L'iconcina del **piccone** (⛏) per i terreni

nella colonna "Titolarità" della griglia dei soggetti.

[Schermata: griglia "Soggetti" con colonna "Titolarità" che mostra icone di casetta e piccone accanto ai soggetti]

---

## 3. Aggiornamento Data Fine Immobili (Cessazione/Demolizione)

Finita l'elaborazione precedente, procedere con l'aggiornamento della data fine immobili. Questo aggiornamento riguarda gli immobili che sono stati oggetto di **cessazione/demolizione**.

Selezionare la voce di menù:

**Tributi → Territorio e Catasto → Catasto → 30. Aggiornamento Data Fine Immobili prese da Righe Cessazione C**

[Schermata: percorso di menu a cascata con evidenziazione della voce "30. Aggiornamento Data Fine Immobili prese da Righe Cessazione C"]

### 3.1 Modalità di esecuzione

Procedere in:

- **"Simulazione"** — se si vuole estrarre il file per un controllo preventivo
- **"Aggiornamento"** — se si vuole chiudere definitivamente la riga in catasto

Cliccando nel pulsante **"Avvia Simulazione Aggiornamento Data Cessazione Immobili"** o **"Avvia Aggiornamento Data Cessazione Immobili"** a seconda della modalità scelta.

[Schermata: finestra "Aggiornamento Data Fine Immobili prese da Righe Cessazione C" con radio button Modalità (Simulazione/Aggiornamento), checkbox "Esporta i risultati in formato Excel" e pulsante di avvio]

### 3.2 Esportazione risultati

L'opzione **"Esporta i risultati in formato Excel"** provvederà ad estrarre i soggetti interessati dall'aggiornamento producendo un elenco Excel.

### 3.3 Conferma aggiornamento

Scegliendo **"Avvia Aggiornamento.."** la procedura proporrà il seguente messaggio di attenzione:

> **Attenzione:** Procedendo in modalità Aggiornamento, verranno aggiornati i dati Data Fine Immobili prese da Righe Cessazione C! Continuare?

Cliccare su **"Conferma"** per procedere.

Al termine dell'aggiornamento si avrà un messaggio di fine elaborazione:

> **Attenzione:** Elaborazione Terminata

### 3.4 Effetti dell'aggiornamento

Selezionando la modalità **"Aggiornamento"**, la procedura andrà a impostare in **"Catasto"**, nella sezione **"Fabbricati"**:

- La **Data inizio Efficacia** della demolizione per l'immobile che è stato oggetto di demolizione/cessazione (lo si può riconoscere dai valori a zero nel campo rendita, consistenza, categoria)
- Contemporaneamente la stessa data andrà a **chiudere la riga fabbricato** con progressivo precedente sempre dello stesso immobile

[Schermata: griglia "Fabbricati" con colonne N.o, Pr., Sezione, Sez., Fog., Num., Sub., Den., Z.C., Categ., Cl., Consist., Superf., Rend.Euro, Metrici, Docfa, Indir., ID.Immob., Efficacia. Evidenziati i campi "Pr." e "Efficacia" che mostrano le date di chiusura e i progressivi]

---

A questo punto la procedura di importazione dei dati catastali è ultimata.