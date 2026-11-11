# IMU – Gestione dell'Imposta Municipale Unica

## Manuale Operativo

---

## 1. Estrazioni

### 1.1 Provvedimenti Emissi

#### Estrazione dei provvedimenti emessi

Dal menù **Tributi → IMU → Gestione Avvisi**, andare sulla paginazione dei provvedimenti IMU.

[Schermata: percorso di navigazione nel menu Tributi → IMU → Gestione Avvisi → 10. Provvedimenti IMU]

Dalla paginazione dei provvedimenti è possibile fare la ricerca per diversi parametri:

[Schermata: form di ricerca provvedimenti IMU con campi: Anno Provvedim. da/a, Prog. Provvedim. da/a, Prog. soggetto, Partita IVA, Tipo provvedimento, Tipo selez. per rateiz., Causale Specifica, Numero Provv. da/a, Cod. Identificativo da/a, Nominativo, Cod. fiscale, Stato del provv., Data Provv. da/a, Data Notifica da/a, Provvedimento, Elementi di Classificazione (Elemento 1, Elemento 2), pulsante "Elenca"]

Per le diverse scelte si aprirà la relativa tendina:

**Tipo provvedimento:**
- --- tutti ---
- Liquidazione
- Accertamento
- Rimborso
- Rateizzazione
- Liquidaz. - Accertam.
- Cumulo Giuridico
- Sollecito

**Tipo selez. per rateiz.:**
- --- tutti ---
- Solo i rateizzati
- Solo i non rateizzati

**Causale Specifica:**
- ---tutti---
- Sospeso per adesione
- Sospeso per sentenza
- Ricalcolato da adesione
- Ricalcolato da sentenza
- Ricalcolato in autotutela

**Stato del provv.:**
- --- tutti ---
- Creato
- Verificato
- Stampato
- Sospeso per Ricorso
- Sospeso Definitivamente
- Pagato
- Ruolo
- Ingiunzione
- Ruolo Pagato
- Ingiunzione Pagata
- Pagato Parzialmente
- Sospeso per Dilazione
- Notificato
- Stampato PEC
- Stampato PEC Spese Not.
- Fallimento
- Adesione
- Ricorso
- Ingiunzione Discaricata

**Provvedimento:**
- --- tutti ---
- ICI/IMU
- TASI

Una volta decisi i parametri andare su **"Elenca"**.

[Schermata: form di ricerca con parametri selezionati: Tipo provvedimento = "Liquidaz. - Accertam.", Tipo selez. per rateiz. = "Solo i non rateizzati", Provvedimento = "ICI/IMU", pulsante "Elenca" evidenziato]

Si aprirà la videata dell'Elenco dei provvedimenti che rispetta i parametri di ricerca selezionati.

[Schermata: tabella "Elenco dei provvedimenti" con colonne: Anno, Tipo Provvedim., Codice Fiscale – Partita IVA, Nominativo – Ragione sociale, Dt Notifica, Dt Scadenza, Prov. di rateizz., Anno - Prog., Num. Prov. - Cod. Id., Stato Provvedimento, Autotutela, TOT. TOT. con AGENVIAZ., Note, Pos., Cod.Class., PagoP., Dis.]

Andando sull'iconcina in basso a sinistra **"Stampa Elenco"**, viene presentata una form per scegliere ulteriori parametri; andare poi su **"Stampa"** per generare l'estrazione.

[Schermata: form "Stampa Provvedimenti" con opzioni: Stampa Provv. Sospesi Def. (checkbox), Stampa Provv. Rateizzati (checkbox), Stampa provvedimenti (dropdown: Tutti/Attivi/Annullati/Tutti), Codice Utente Elaborazione (dropdown), Codice Utente Inserimento (dropdown), Tipo Estrazione (dropdown: Completa/Sintetica), Tipo File (dropdown: PDF/EXCEL), pulsante "Stampa"]

**Stampa provvedimenti:**
- Tutti
- Attivi
- Annullati
- Tutti

**Tipo Estrazione:**
- Completa
- Sintetica

**Tipo File:**
- PDF
- EXCEL

L'estrazione completa prevede tutti i campi del file in interesse.
L'estrazione sintetica prevede solo i dati salienti.

Il risultato può essere elaborato in **Excel** o in **PDF**. L'Excel viene scaricato subito, del PDF viene invece fatta l'anteprima con possibilità di fare il download.

[Schermata: anteprima PDF dell'estrazione con barra strumenti: Protocolla, Scarica, Apri nel sistema, Salva in file-box]

---

### 1.2 Provvedimenti Oggetto di Variazioni

#### Estrazione dei provvedimenti oggetto di variazioni

È possibile estrarre le variazioni dei provvedimenti emessi:

Dal menù **Tributi → IMU → Estrazioni → Stampa Variazioni Provvedimenti**

[Schermata: percorso di navigazione nel menu Tributi → IMU → 100. Estrazioni → 50. Stampa Variazioni Provvedimenti]

Si aprirà la seguente videata attraverso la quale sarà possibile scegliere i parametri in interesse:

[Schermata: form "Stampa Testi" con campi: Tipo Stampa (dropdown: Stampa Ricalcoli / Stampa Rateizzati / Stampa Annullati), IMU/TASI (dropdown), Data Notifica Da/a, Data Notif. Nuovo Provv. Da/a, pulsante "Stampa"]

---

#### Stampa RICALCOLI

Estrae tutti gli accertamenti notificati entro un range che sono stati sospesi per generare un altro provvedimento in sostituzione. L'estrazione conterrà gli elementi del provvedimento di origine e quelli del provvedimento in sostituzione.

I parametri di selezione sono per date di notifica:

| Parametro | Descrizione |
|-----------|-------------|
| Tipo Stampa | Stampa Ricalcoli |
| IMU/TASI | IMU |
| Data Notifica Da | [data] a [data] |
| Data Notif. Nuovo Provv. Da | [data] a [data] |

[Schermata: form con Tipo Stampa = "Stampa Ricalcoli", IMU/TASI = "IMU", campi Data Notifica Da/a e Data Notif. Nuovo Provv. Da/a, pulsante "Stampa"]

---

#### Stampa RATEIZZATI

Estrae tutti gli accertamenti notificati entro un range che sono stati sospesi per generare un provvedimento di rateizzazione. L'estrazione conterrà gli elementi del provvedimento di origine e quelli della rateizzazione.

I parametri di selezione sono per date di notifica:

| Parametro | Descrizione |
|-----------|-------------|
| Tipo Stampa | Stampa Rateizzati |
| IMU/TASI | IMU |
| Data Notifica Da | [data] a [data] |
| Data Notif. Rateizz. | [data] a [data] |

[Schermata: form con Tipo Stampa = "Stampa Rateizzati", IMU/TASI = "IMU", campi Data Notifica Da/a e Data Notif. Rateizz. Da/a, pulsante "Stampa"]

---

#### Stampa ANNULLATI

Estrae gli accertamenti che sono stati o sospesi definitivamente senza un ricalcolo o annullati.

I parametri di selezione sono per date di notifica:

| Parametro | Descrizione |
|-----------|-------------|
| Tipo Stampa | Stampa Annullati |
| IMU/TASI | IMU |
| Data Notifica Da | [data] a [data] |
| Data Annullamento | [data] a [data] |

[Schermata: form con Tipo Stampa = "Stampa Annullati", IMU/TASI = "IMU", campi Data Notifica Da/a e Data Annullamento Da/a, pulsante "Stampa"]

---

### 1.3 Provvedimenti Scaduti

#### Estrazione dei provvedimenti scaduti

È possibile estrarre i provvedimenti scaduti:

Dal menù **Tributi → IMU → Estrazioni → Stampa Provvedimenti Scaduti**

[Schermata: percorso di navigazione nel menu Tributi → IMU → 100. Estrazioni → 40. Stampa Provvedimenti Scaduti]

Si aprirà la videata per impostare i parametri di selezione:

[Schermata: form "Stampa Provvedimenti ICI/IMU Scaduti" con campi: Anno Rif. Da/a, Tipo Tributo (dropdown: TUTTI), Data Provvedimento (da 01/01/2019 a 31/12/2019), Data Notifica da/a, Data Scadenza, Tolleranza Imp. Versato, Tolleranza Giorni per Tardivo, Numero Provv. Da/a, Codice Testo, Ordinamento di Stampa (dropdown: Nessun Ordinamento), checkbox "Prov. stampati da 90g senza Dt Scad. e notificati da 60g. senza Dt. Scad.", Creazione Ruoli (dropdown: NO). Sezione destra: Provvedimenti NON PAGATI (checkbox Liquidazioni, Accertamenti), Provvedimenti PAGATI TARDIVAMENTE (checkbox Liquidazioni, Accertamenti), Provvedimenti PAGATI PARZIALMENTE (checkbox Liquidazioni, Accertamenti, Rateizzazioni). Pulsanti: Verifica, Elenca]

Le selezioni per la tolleranza hanno senso se vengono fatte le scelte di stampare i provvedimenti pagati parzialmente e/o tardivamente.

| Parametro | Descrizione |
|-----------|-------------|
| Tolleranza Imp. Versato | Tolleranza per importi versati parzialmente |
| Tolleranza Giorni per Tardivo | Tolleranza in giorni per pagamenti tardivi |

**Provvedimenti PAGATI PARZIALMENTE:**
- ☑ Liquidazioni
- ☑ Accertamenti
- ☐ Rateizzazioni

**Provvedimenti PAGATI TARDIVAMENTE:**
- ☑ Liquidazioni
- ☑ Accertamenti

Con il pulsante **"Elenca"** si visualizzano in basso i provvedimenti oggetto dell'estrazione.

[Schermata: tabella "ELENCO Provvedimenti" con colonne: Cod. Fisc.-part. IVA, Cognome, Nome, Anno Pr., Prog., Dt Prov., Dt Notif., Dt Scaden., Tp P., Tot Provv., Imp. Pagato]

Una volta impostati i parametri, andando sul pulsante **"Verifica"** si genera un Excel (in download) che elenca i provvedimenti che potranno essere inviati a riscossione coattiva perché non pagati ad una certa data.

[Schermata: finestra di download con file "ProvvedimentiScaduti.xlsx" e link "Apri file"]