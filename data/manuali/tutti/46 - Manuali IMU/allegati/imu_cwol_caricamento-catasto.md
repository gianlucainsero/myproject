# Caricamento Forniture Catasto

## 1. Scaricamento delle forniture da Sister

Provvedere a scaricare le forniture da Sister. Dopo aver scaricato i file, si potrebbe avere una situazione simile a questa di esempio:

| Nome file | Data | Stato |
|-----------|------|-------|
| Aggiornamento Terreni per Registrazione | 01/07/2024 10.50 | RISPOSTA CONSULTABILE |
| Completa Terreni | 01/07/2024 10.50 | RISPOSTA CONSULTABILE |
| Aggiornamento Fabbricati per Registrazione | 01/07/2024 10.48 | RISPOSTA CONSULTABILE |
| Completa Fabbricati | 01/07/2024 10.47 | RISPOSTA CONSULTA |

> **⚠️ Importante:** Vanno importate **solo le forniture degli 'Aggiornamenti'** non la 'Completa'. Quest'ultima si fa solo all'avvio di CWOL. La richiesta di estrazione in Sister va fatta mettendo come data il giorno successivo all'ultima richiesta fatta.

La cartella contenente i dati catastali da importare si presenta come nell'esempio:

📁 `H769_1727762_1`

---

## 2. Importazione globale dei dati catastali

Per procedere con l'importazione dei dati catastali, selezionare la voce di menù **"Importazione globale"**:

**Percorso menù:**
`Tributi → Territorio e Catasto → Catasto → 10. Importazione Globale`

Si aprirà la finestra di CWOL di scelta del file da importare e altri parametri da selezionare.

### 2.1 Selezione del file ZIP

La selezione del file `.zip` da importare viene effettuata cliccando sull'icona 📁 (non decomprimere il file) e scegliendolo dalla cartella del PC dove è stato salvato, con doppio click.

Una volta selezionato il file, la procedura visualizza i singoli file contenuti nel file compresso:

| Tipo importazione | File |
|-------------------|------|
| Importazione Soggetti | `H7691727762_1.SOG` |
| Importazione Titolarità | `H7691727762_1.TIT` |
| Importazione unità Immob. cat.urb. | `H7691727762_1.FAB` |

La procedura rimanda il messaggio:

> ⚠️ **Attenzione:** Archivio caricato correttamente, pronto per Importazione

### 2.2 Opzioni di importazione

Prima di procedere con l'importazione, si possono effettuare due scelte:

- **☐ Aggiorna DTEFF_INI se Null**
  Accendendo questo flag, se la data efficacia iniziale presenta un valore Null, la procedura provvederà ad aggiornarla inserendo lo stesso valore della data inizio validità.

- **☐ Esporta automaticamente i Risultati in formato Excel**
  Accendendo questo flag, verranno generati i file Excel relativi all'importazione.

Dopo aver scelto le opzioni, premere il tasto **"Importa"**, presente a destra nella videata.

Al termine, la procedura rimanda il messaggio di fine importazione:

> ✅ **Success:** Importazione Catasto terminata

---

## 3. Controllo della Titolarità

Procedere con il Controllo della Titolarità.

**Percorso menù:**
`Tributi → Territorio e Catasto → Catasto → 20. Controllo Titolarità`

Si aprirà la finestra di CWOL con le seguenti opzioni:

- **Modalità:** ○ Simulazione / ● Aggiornamento
- **☑ Esporta i risultati in formato Excel**
- **📄 Avvia Aggiornamento Controllo Titolarità**

### 3.1 Opzione "Esporta i risultati in formato Excel"

L'opzione "Esporta i risultati in formato Excel" provvederà ad estrarre i soggetti interessati dal controllo producendo un elenco Excel.

### 3.2 Esecuzione in modalità "Aggiornamento"

Selezionando la modalità **"Aggiornamento"**, e cliccando su **"Avvia Aggiornamento Controllo Titolarità"**, la procedura proporrà il seguente messaggio di attenzione:

> ⚠️ **Attenzione:** Procedendo in modalità Aggiornamento, verranno aggiornati i dati Titolarità! Continuare?

Cliccare su **"Conferma"** per procedere.

Al termine dell'aggiornamento si avrà un messaggio di fine elaborazione:

> ⚠️ **Attenzione:** Elaborazione Terminata

### 3.3 Effetti dell'aggiornamento

Eseguendo la procedura in modalità "Aggiornamento", in **"Catasto"** (menù `Tributi → Territorio e Catasto → Catasto → Catasto`), verranno impostate:

- L'iconcina della **casetta** 🏠 per gli immobili
- L'iconcina del **piccone** ⛏ per i terreni

---

## 4. Aggiornamento Data Fine Immobili

Finita l'elaborazione precedente, procedere con l'aggiornamento della data fine immobili. Questo aggiornamento riguarda gli immobili che sono stati oggetto di **cessazione/demolizione**.

**Percorso menù:**
`Tributi → Territorio e Catasto → Catasto → 30. Aggiornamento Data Fine Immobili prese da Righe Cessione C...`

### 4.1 Modalità di esecuzione

Procedere in:

- **"Simulazione"** se si vuole estrarre il file per un controllo preventivo
- **"Aggiornamento"** se si vuole chiudere definitivamente la riga in catasto

Cliccare nel pulsante **"Avvia Simulazione Aggiornamento Data Cessazione Immobili"** o **"Avvia Aggiornamento Data Cessazione Immobili"** a seconda della modalità scelta.

### 4.2 Opzione "Esporta i risultati in formato Excel"

L'opzione "Esporta i risultati in formato Excel" provvederà ad estrarre i soggetti interessati dall'aggiornamento producendo un elenco Excel.

### 4.3 Esecuzione in modalità "Aggiornamento"

Scegliendo **"Avvia Aggiornamento Data Cessazione Immobili"**, la procedura proporrà il seguente messaggio di attenzione:

> ⚠️ **Attenzione:** Procedendo in modalità Aggiornamento, verranno aggiornati i dati Data Fine Immobili prese da Righe Cessione C! Continuare?

Cliccare su **"Conferma"** per procedere.

Al termine dell'aggiornamento si avrà un messaggio di fine elaborazione:

> ⚠️ **Attenzione:** Elaborazione Terminata

### 4.4 Effetti dell'aggiornamento

Selezionando la modalità **"Aggiornamento"**, la procedura andrà a impostare in **"Catasto"**, nella sezione **"Fabbricati"**:

- La **Data inizio Efficacia** della demolizione per l'immobile che è stato oggetto di demolizione/cessazione (lo si può riconoscere dai valori a zero nel campo rendita, consistenza, categoria)
- Contemporaneamente la stessa data andrà a **chiudere la riga fabbricato** con progressivo precedente sempre dello stesso immobile

---

## 5. Completamento

A questo punto la procedura di importazione dei dati catastali è **ultimata**.