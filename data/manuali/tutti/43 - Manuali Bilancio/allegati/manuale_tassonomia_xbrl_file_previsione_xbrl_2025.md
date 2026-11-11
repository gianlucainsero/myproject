# Manuale Produzione File XBRL Previsione BDAP

**Software:** CWOL - BILANCIO

---

## 1. Premessa

Il presente documento illustra le fasi operative per la creazione dei file in formato XBRL della **PREVISIONE** da inviare alla BDAP.

---

## 2. Fasi Operative

Accedere con l'anno di esercizio a cui si riferisce la previsione. Ad esempio, se si è nel 2024, si dovrà inserire l'anno di esercizio contabile **2025**.

[Schermata: finestra "Gestione parametri base" con campo "Selezione anno contabile" impostato su 2025, data elaborazione 07/10/2024, selezione ente "Comune di Arezzano", modello organizzativo "Mod.Org.vo Corrente" e pulsante "Applica"]

### 2.1 Importazione Tassonomia

Come importare in CWOL la nuova tassonomia:

[Schermata: percorso menu Servizi Economici → 110. Utilità → 160. BDAP → 10. Caricamento Tassonomia]

#### 2.1.1 Importazione file tassonomia

- Cliccare **Download file zip Tassonomie Prev.2025 dal server** (per ottenere il file zip da importare con la tassonomia aggiornata)

[Schermata: finestra "Caricamento File tassonomia per Previsione" con pulsante "Download File zip Tassonomie Prev. 2025 dal server" evidenziato]

#### 2.1.2 Caricamento tassonomia in CWOL

- Cliccare **Acquisisci file zip da elab.**
- Selezionando il file scaricato in precedenza.

[Schermata: finestra "Caricamento File tassonomia per Previsione" con pulsante "Acquisisci file zip da elab." evidenziato]

[Schermata: finestra "Acquisizione File..." con campo "Scegli un file da caricare..." e pulsante di selezione file evidenziato]

[Schermata: cartella "XBRL TEST PREVISIONE 2025" contenente il file "TassonomiaBilancioPrevisione2025_del24..." (cartella compressa, 998 KB)]

#### 2.1.3 Importazione dati Previsione

- Eseguire questa fase per i **3 tipi di file SDB / DCA / IND**
- Selezionare il tipo flusso da elaborare (come esempio di seguito)
- Cliccare **Importa Tasson. Prev. 2025**
- Attendere il completamento dell'importazione

[Schermata: finestra "Caricamento File tassonomia per Previsione" con menu a tendina "Tipo flusso da elaborare" aperto che mostra le opzioni: SDB - Schemi di bilancio, IND - Piano degli indicatori, DCA - Dati contabili analitici. Pulsante "Importa Tasson. Prev. 2025" evidenziato]

[Schermata: finestra "Caricamento tabella XBRL" con barra di avanzamento "Aggiornamento Righe 2820/8"]

#### 2.1.4 Aggiornamento Tipologia Previsione

- Cliccare **Aggiorna Tipol. Prev. 2025**
- Attendere il completamento dell'aggiornamento delle tipologie nella tassonomia.

[Schermata: finestra "Caricamento File tassonomia per Previsione" con pulsante "Aggiorna Tipol. Prev. 2025" evidenziato]

[Schermata: finestra "Aggiornamento tabella TAG" con barra di avanzamento "Aggiornamento XBRL Pacchetti TAG 3/52"]

> ⚠️ **ATTENZIONE: RIPETERE LE OPERAZIONI DI SOPRA PER SDB – IND – DCA**

---

## 3. Creazione File XBRL

Per creare i file XBRL della previsione andare nel seguente menu:

[Schermata: percorso menu 180. Servizi Economici → 10. Finanziaria → 10. Bilancio e Variazioni → 70. Prospetti Bilancio di Previsione finanziario]

### 3.1 Creazione file XBRL

- Per generare i file selezionare la tab **XBRL Prev.**
- Dalla chiave inglese è possibile gestire il codice BDAP dell'ente

[Schermata: finestra "XBRL PREV 2025" con tab "XBRL Prev" selezionata. Sezione "Dati Ente" con: Ragione sociale ente, Codice Fiscale, Codice ente x invio flussi alla BDAP. Sezione "Stampe di controllo valori inseriti nel flusso DCA previsione". Icona chiave inglese evidenziata]

[Schermata: finestra "Modifica Codice BDAP" con campo "Codice BDAP" compilato e pulsanti "Conferma" e "Annulla"]

#### 3.1.1 Funzioni in XBRL

- **Stampe di controllo valori inseriti nel flusso DCA entrate e uscite** (icona stampante)
- **Produzione dei file SDB - IND – DCA** (icone freccia verso il basso)

[Schermata: finestra "XBRL PREV 2025" con:
- Sezione "Stampe di controllo valori inseriti nel flusso DCA previsione" con righe "Dati analitici XBRL - Previsioni Entrate" e "Dati analitici XBRL - Previsioni Uscite" (icone stampante, contrassegnate con 1)
- Sezione "Creazione flussi in formato XBRL x invio Bilancio di Previsione alla BDAP" con righe "SDB - Schemi di bilancio", "IND - Piano degli indicatori", "DCA - Dati contabili analitici" (icone freccia verso il basso, contrassegnate con 2)]

### 3.2 Utilità

**Se non visualizzate i file scaricati:**

I file generati vengono scaricati nella cartella **"download"**. Se non visualizzate il file, verificare le impostazioni del browser (Chrome, FireFox o altri) di avere i permessi di **popup e reindirizzamenti consentiti** per il sito di CWOL.

[Schermata: impostazioni browser con opzione "Popup e reindirizzamenti" impostata su "Consenti"]