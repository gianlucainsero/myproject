# Manuale Produzione File XBRL Rendiconto BDAP

**Software:** CWOL - BILANCIO

---

## 1. Premessa

Il presente documento illustra le fasi operative per la creazione dei file in formato XBRL del rendiconto da inviare alla BDAP.

---

## 2. Fasi Operative

Accedere con anno di esercizio a cui si riferisce il rendiconto.

[Immagine: Schermata di gestione parametri base con selezione anno contabile 2024, selezione ente e modello organizzativo]

### 2.1 Importazione Tassonomia

- Come importare in CWOL la nuova tassonomia

[Immagine: Menu di navigazione con percorso: Servizi Economici → Utilità → Importazioni → 160. BDAP → 10. Caricamento Tassonomia]

#### 2.1.1 Importazione file tassonomia

- Cliccare **Scarica file tassonomia** (per ottenere il file zip da importare con la tassonomia aggiornata)

[Immagine: Barra strumenti con pulsante "Scarica File Tassonomia" evidenziato]

#### 2.1.2 Caricamento tassonomia in CWOL

- Cliccare **Carica file tassonomia rendiconto**
- Selezionando il file scaricato in precedenza

[Immagine: Barra strumenti con pulsante "Carica Tassonomia Rend." evidenziato e finestra "Acquisizione File" con campo "Scegli un file da caricare..."]

#### 2.1.3 Importazione dati rendiconto

- Eseguire questa fase per i **3 tipi di file SDB / DCA / IND**
- Selezionare il tipo di file (come esempio di seguito)
- Cliccare **Importa dati rendiconto**
- Attendere il completamento dell'importazione

[Immagine: Menu a tendina con opzioni SDB, IND, DCA e pulsante "Importa Dati Rend." evidenziato. Finestra "Caricamento tabella XBRL" con messaggio "Aggiornamento Righe 2820/8"]

#### 2.1.4 Aggiornamento Tipologia Rendiconto

- Cliccare **Aggiorna tipologia rendiconto**
- Attendere il completamento dell'importazione

[Immagine: Pulsante "Aggiorna Tipologie Rend." evidenziato. Finestra "Aggiornamento tabella TAG" con messaggio "Aggiornamento XBRL Pacchetti TAG 3/52"]

> ⚠️ **ATTENZIONE:** RIPETERE LE OPERAZIONI DI SOPRA PER SDB – IND – DCA

---

## 3. Creazione File XBRL

- Per creare i file XBRL

[Immagine: Menu di navigazione con percorso: Servizi Economici → Finanziaria → Bilancio e Variazioni → 80. Prospetti Rendiconto della gestione]

### 3.1 Creazione file XBRL

- Per generare i file selezionare la tab **XBRL Rend.**
- Dalla chiave inglese è possibile gestire il codice BDAP dell'ente

[Immagine: Tab "XBRL Rend" selezionata con dati ente (Ragione sociale, Codice Fiscale, Codice ente x invio flussi alla BDAP) e icona chiave inglese per modifica Codice BDAP]

#### 3.1.1 Funzioni in XBRL

- **Stampa** per verificare anomalie **(1)**
- **Funzioni** per aggiornare in automatico le anomalie **(2)**
- **Produzione** della stampa dettagliate dei DCA **(3)**
- **Produzione** dei file SDB - IND – DCA **(4)**

[Immagine: Tabella XBRL REND con sezioni: Dati Ente, Dati Analitici, Stampe di controllo valori inseriti nel flusso DCA per rendiconto, Creazione flussi in formato XBRL. Numeri 1-4 evidenziano le rispettive funzioni]

Al momento della creazione, nel caso di **cantabilità semplificata** selezionare l'opzione per non valorizzare C.E., costi per missione ecc....

[Immagine: Finestra "Parametri Aggiuntivi" con opzione "SDB: Non valorizzare prospetti del conto economico, conto del patrimonio, costi per missione e dati analitici per conto" con checkbox]

> ⚠️ **ATTENZIONE:** I FILE SONO CREATI IN FORMATO ZIP E SALVATI NELLA CARTELLA "DOWNLOAD"

### 3.2 Utilità

**Nel caso non vengono scaricati i file nel download:**

Se non visualizzate il file verificare le impostazioni del browser (Chrome, FireFox o altri) di avere i permessi di **popup** e **reindirizzamenti consentiti** per il sito di CWOL.

[Immagine: Impostazioni browser con "Popup e reindirizzamenti" impostato su "Consenti"]