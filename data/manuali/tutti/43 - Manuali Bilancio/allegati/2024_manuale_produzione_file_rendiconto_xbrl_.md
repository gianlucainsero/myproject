# MANUALE PRODUZIONE FILE XBRL RENDICONTO BDAP

**Software:** CWOL-BILANCIO

---

## 1. Premessa

Il presente documento illustra le fasi operative per la creazione dei file in formato XBRL del rendiconto da inviare alla BDAP.

---

## 2. Fasi Operative

Accedere con l'anno di esercizio a cui si riferisce il rendiconto.

[Schermata: interfaccia CWOL con selezione anno contabile (es. 2024), ente e modello organizzativo nella finestra "Gestione parametri base"]

### 2.1 Importazione tassonomia

- Come importare in CWOL la nuova tassonomia

[Schermata: menu a cascata del software con percorso: 180. Servizi Economici → 110. Utilità → 160. BDAP → 10. Caricamento Tassonomia]

#### 2.1.1 Importazione file tassonomia

- Cliccare **Scarica file tassonomia** (per ottenere il file zip da importare con la tassonomia aggiornata)

[Schermata: barra strumenti della pagina "Caricamento file tassonomia per Rendiconto" con pulsante "Scarica File Tassonomia" evidenziato]

#### 2.1.2 Caricamento tassonomia in CWOL

- Cliccare **Carica file tassonomia rendiconto**
- Selezionando il file scaricato in precedenza

[Schermata: pulsante "Carica Tassonomia Rend." evidenziato nella barra strumenti]

[Schermata: finestra "Acquisizione File..." con campo "Scegli un file da caricare..."]

#### 2.1.3 Importazione dati rendiconto

- Eseguire questa fase per i **3 tipi di file SDB / DCA / IND**
- Selezionare il tipo di file (come esempio di seguito)
- Cliccare **Importa dati rendiconto**
- Attendere il completamento dell'importazione

[Schermata: menu a tendina "Tipo" con opzioni SDB, IND, DCA; pulsante "Importa Dati Rend." evidenziato]

[Schermata: finestra "Caricamento tabella XBRL" con messaggio "Aggiornamento Righe 2820/8"]

#### 2.1.4 Aggiornamento Tipologia Rendiconto

- Cliccare **Aggiorna tipologia rendiconto**
- Attendere il completamento dell'importazione

[Schermata: pulsante "Aggiorna Tipologie Rend." evidenziato nella barra strumenti]

[Schermata: finestra "Aggiornamento tabella TAG" con messaggio "Aggiornamento XBRL Pacchetti TAG 3/52"]

> ⚠️ **ATTENZIONE:** RIPETERE LE OPERAZIONI DI SOPRA PER **SDB – IND – DCA**

---

## 3. Creazione file XBRL

- Per creare i file XBRL

[Schermata: menu a cascata con percorso: 180. Servizi Economici → 10. Finanziaria → 10. Bilancio e Variazioni → 80. Prospetti Rendiconto della gestione]

### 3.1 Creazione file XBRL

- Per generare i file selezionare la tab **XBRL Rend.**
- Dalla chiave inglese è possibile gestire il codice BDAP dell'ente

[Schermata: tab "XBRL Rend" selezionata; tabella con Dati Ente (Ragione sociale, Codice Fiscale, Codice ente x invio flussi alla BDAP); icona chiave inglese evidenziata]

[Schermata: finestra "Modifica Codice BDAP" con campo "Codice BDAP" (es. 7715429) e pulsanti Conferma/Annulla]

#### 3.1.1 Funzioni in XBRL

- **Stampa per verificare anomalie** ①
- **Funzioni per aggiornare in automatico le anomalie** ②
- **Produzione della stampa dettagliata dei DCA** ③
- **Produzione dei file SDB - IND – DCA** ④

[Schermata: tabella "XBRL REND 2023" con colonne Descrizione, Stampa, Scarica, Compila, Data Comp. Le funzioni sono raggruppate in sezioni: Dati Ente, Dati Analitici, Stampe di controllo valori inseriti nel flusso DCA per rendiconto, Creazione flussi in formato XBRL x invio Rendiconto della gestione alla BDAP. I pulsanti sono contrassegnati con icone ①②③④]

Al momento della creazione, nel caso di **cantabilità semplificata** selezionare l'opzione per non valorizzare C.E., costi per missione ecc....

[Schermata: finestra "Parametri Aggiuntivi" con checkbox "SDB: Non valorizzare prospetti del conto economico, conto del patrimonio, costi per missione e dati analitici per conto" e pulsanti Conferma/Annulla]

> ⚠️ **ATTENZIONE:** I FILE SONO CREATI IN FORMATO **ZIP** E SALVATI NELLA CARTELLA **"DOWNLOAD"**

---

## 3.2 Utilità

**Nel caso non vengano scaricati i file nel download:**

Se non visualizzate il file verificare le impostazioni del browser (Chrome, FireFox o altri) di avere i permessi di **popup e reindirizzamenti consentiti** per il sito di CWOL.

[Schermata: impostazioni browser con opzione "Popup e reindirizzamenti" impostata su "Consenti"]