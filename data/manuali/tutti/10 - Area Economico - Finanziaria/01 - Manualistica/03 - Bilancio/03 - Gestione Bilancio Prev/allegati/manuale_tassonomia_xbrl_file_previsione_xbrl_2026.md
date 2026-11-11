# Manuale Produzione File XBRL Previsione BDAP

**Software:** CWOL - BILANCIO

---

## 1. Premessa

Il presente documento illustra le fasi operative per la creazione dei file in formato XBRL della **PREVISIONE** da inviare alla BDAP.

---

## 2. Fasi Operative

Accedere con l'anno di esercizio a cui si riferisce la previsione. Ad esempio, se si è nel 2025, dovrà essere inserito l'anno di esercizio contabile **2026**.

[Schermata: Gestione parametri base – Selezione anno contabile impostato su 2026, con pulsante "Applica"]

### 2.1 Aggiornamento automatico tassonomia

1) Andare nel menu **Prospetti Bilancio di Previsione Finanziario**:

   Percorso: `10. Finanziaria` → `10. Bilancio e Variazioni` → `70. Prospetti Bilancio di Previsione finanziario`

[Schermata: Menu a cascata con percorso evidenziato]

2) Andare nel sottomenu **tab XBRL Prev**

[Schermata: Barra dei tab con "Previsione", "XBRL Prev", "Pubblicazione bilancio" – tab "XBRL Prev" selezionato]

3) Dare conferma nell'avviso che appare: significa che è uscita una nuova tassonomia e dobbiamo aggiornare quella che abbiamo. In seguito farà tutto in automatico il programma.

[Schermata: Finestra di dialogo "Attenzione" con messaggio: *"La tassonomia XBRL risulta non aggiornata rispetto a quella di default, si consiglia di aggiornare alla nuova versione. Continuare?"* – Pulsanti: F5-Conferma / F8-Annulla]

A seguito dell'operazione completata verrà un avviso dove dice che il programma ha eseguito l'aggiornamento.

---

## 3. Creazione file XBRL

Per creare i file XBRL della previsione andare nel seguente menu:

Percorso: `10. Finanziaria` → `10. Bilancio e Variazioni` → `70. Prospetti Bilancio di Previsione finanziario`

[Schermata: Menu a cascata con percorso evidenziato]

### 3.1 Creazione file XBRL

- Per generare i file selezionare la tab **XBRL Prev**.
- Dalla **chiave inglese** è possibile gestire il codice BDAP dell'ente.

[Schermata: Tab "XBRL PREV 2025" con sezione "Dati Ente" (Ragione sociale ente, Codice Fiscale, Codice ente x invio flussi alla BDAP) e icona chiave inglese evidenziata]

[Schermata: Finestra "Modifica Codice BDAP" con campo di inserimento codice e pulsanti Conferma / Annulla]

#### 3.1.1 Funzioni in XBRL

- **Stampe di controllo valori inseriti nel flusso DCA entrate e uscite** → (1)
- **Produzione dei file SDB – IND – DCA** → (2)

[Schermata: Tab "XBRL PREV 2025" con struttura:
- **Dati Ente**: Ragione sociale ente, Codice Fiscale, Codice ente x invio flussi alla BDAP
- **Stampe di controllo valori inseriti nel flusso DCA previsione**:
  - Dati analitici XBRL - Previsioni Entrate (icona Stampa) → **(1)**
  - Dati analitici XBRL - Previsioni Uscite (icona Stampa) → **(1)**
- **Creazione flussi in formato XBRL x invio Bilancio di Previsione alla BDAP**:
  - SDB - Schemi di bilancio (icona Scarica) → **(2)**
  - IND - Piano degli indicatori (icona Scarica) → **(2)**
  - DCA - Dati contabili analitici (icona Scarica) → **(2)**
]

#### 3.1.2 Implementazione rilasciata da settembre 2025

Al momento della creazione del file SDB avremo questo avviso:

[Schermata: Finestra di dialogo "Attenzione" con messaggio: *"Per la costruzione del file XBRL vengono utilizzati i dati presenti nelle stampe salvate nel database (il salvataggio può essere effettuato dalla tab 'Previsione' dopo aver prodotto una stampa); qualora non siano presenti stampe salvate nel database i valori sono ricalcolati in base ai dati presenti in archivio. Vuoi proseguire?"* – Pulsanti: F5-Conferma / F8-Annulla]

### 3.2 Utilità

**Se non visualizzate i file scaricati:**

I file generati vengono scaricati nella cartella **"download"**. Se non visualizzate il file, verificare le impostazioni del browser (Chrome, FireFox o altri) di avere i permessi di **popup** e **reindirizzamenti consentiti** per il sito di CWOL.

[Schermata: Impostazioni browser – "Pop-up e reindirizzamenti" impostato su "Consenti"]