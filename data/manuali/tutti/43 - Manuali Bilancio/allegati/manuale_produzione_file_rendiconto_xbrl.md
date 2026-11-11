# Manuale Produzione File XBRL Rendiconto BDAP

**Software:** CWOL - BILANCIO

---

## 1. Premessa

Il presente documento illustra le fasi operative per la creazione dei file in formato XBRL del rendiconto da inviare alla BDAP.

---

## 2. Fasi Operative

Accedere con l'anno di esercizio a cui si riferisce il rendiconto.

[Immagine: Schermata di accesso con selezione anno contabile (es. 2024), data elaborazione, ente e modello organizzativo nella finestra "Gestione parametri base"]

### 2.1 Importazione tassonomia

- Come importare in CWOL la nuova tassonomia

[Immagine: Percorso di navigazione menu: 180. Servizi Economici → 110. Utilità → 160. BDAP → 10. Caricamento Tassonomia]

#### 2.1.1 Importazione file tassonomia

- Cliccare **Scarica File Tassonomia** (per ottenere il file zip da importare con la tassonomia aggiornata)

[Immagine: Schermata "Caricamento file tassonomia per Rendiconto" con pulsante "Scarica File Tassonomia" evidenziato]

#### 2.1.2 Caricamento tassonomia in CWOL

- Cliccare **Carica Tassonomia Rend.**
- Selezionando il file scaricato in precedenza.

[Immagine: Schermata con pulsante "Carica Tassonomia Rend." evidenziato e finestra "Acquisizione File...." con campo "Scegli un file da caricare..."]

#### 2.1.3 Importazione dati rendiconto

- Eseguire questa fase per i **3 tipi di file SDB / DCA / IND**
- Selezionare il tipo di file (come esempio di seguito)
- Cliccare **Importa Dati Rend.**
- Attendere il completamento dell'importazione

[Immagine: Schermata con menu a tendina "Tipo" con opzioni SDB, IND, DCA e pulsante "Importa Dati Rend." evidenziato. Finestra di progresso "Caricamento tabella XBRL - Aggiornamento Righe 2820/8"]

#### 2.1.4 Aggiornamento Tipologia Rendiconto

- Cliccare **Aggiorna Tipologie Rend.**
- Attendere il completamento dell'importazione

[Immagine: Schermata con pulsante "Aggiorna Tipologie Rend." evidenziato. Finestra di progresso "Aggiornamento tabella TAG - Aggiornamento XBRL Pacchetti TAG 3/52"]

> ⚠️ **ATTENZIONE:** RIPETERE LE OPERAZIONI DI SOPRA PER SDB – IND – DCA

---

## 3. Creazione File XBRL

- Per creare i file XBRL

[Immagine: Percorso di navigazione menu: 180. Servizi Economici → 10. Finanziaria → 10. Bilancio e Variazioni → 80. Prospetti Rendiconto della gestione]

### 3.1 Creazione file XBRL

- Per generare i file selezionare la tab **XBRL Rend.**
- Dalla chiave inglese è possibile gestire il codice BDAP dell'ente

[Immagine: Schermata "XBRL REND. 2023" con tab "XBRL Rend" selezionata, sezione "Dati Ente" con Ragione sociale, Codice Fiscale, Codice ente x invio flussi alla BDAP e icona chiave inglese evidenziata. Finestra "Modifica Codice BDAP" con campo Codice BDAP e pulsanti Conferma/Annulla]

#### 3.1.1 Funzioni in XBRL

- **Stampa** per verificare anomalie **(1)**
- **Funzioni per aggiornare in automatico le anomalie** **(2)**
- **Produzione delle stampe dettagliate dei DCA** **(3)**
- **Produzione dei file SDB - IND – DCA** **(4)**

[Immagine: Schermata "XBRL REND. 2023" con struttura ad albero delle funzioni:
- Dati Ente (Ragione sociale, Codice Fiscale, Codice ente x invio flussi alla BDAP)
- Dati Analitici (verifica dati su impegni/accertamenti, eredità piano finanziario, valorizzazione transazione, lavorazione Codice missione, Stampa impegni/accertamenti, Stampa pagamenti/incassi, Stampa Registrazioni co.ge., Stampe di controllo valori inseriti nel flusso DCA)
- Errori - Accertamenti e Riscosso totalizzato al 5° livello del piano finanziario
- Spese - Stanziamenti di bilancio totalizzati al 4° livello del piano finanziario
- Spese - Impegnato e Pagato totalizzato al 5° livello del piano finanziario
- Totale registrazioni stato patrimoniale per conto
- Totale registrazioni conto economico per missione, programma e conto
- Creazione flussi in formato XBRL x invio Rendiconto della gestione alla BDAP (SDB - Schemi di bilancio, IND - Piano degli indicatori, DCA - Dati contabili analitici)]

> ⚠️ **ATTENZIONE:** La creazione del file DCA sarà rilasciata a breve in CWOL, non è variato rispetto allo scorso anno, se avete urgenza di generarlo potete operare da Cityware client.

> ⚠️ **ATTENZIONE:** I file sono estratti in formato XBRL, è necessario convertirli in zip prima di importarli nella BDAP.

---

## 3.2 Utilità

### Se non visualizzate i file scaricati:

I file generati vengono scaricati nella cartella **"download"**. Se non visualizzate il file, verificare le impostazioni del browser (Chrome, FireFox o altri) di avere i permessi di **popup** e **reindirizzamenti** consentiti per il sito di CWOL.

[Immagine: Impostazioni browser con voce "Popup e reindirizzamenti" impostata su "Consenti"]