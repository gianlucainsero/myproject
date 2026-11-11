# Manuale Produzione File XBRL Rendiconto BDAP

**Software:** CWOL - BILANCIO

---

## 1. Premessa

Il presente documento illustra le fasi operative per la creazione dei file in formato XBRL del rendiconto da inviare alla BDAP.

### 1.1 Requisiti

Avere la versione di CWOL aggiornata almeno da metà gennaio 2026, con le patch automatiche attivate avete tutte le ultime correzioni/adeguamenti normativi.

---

## 2. Fasi Operative

Accedere con anno di esercizio a cui si riferisce il rendiconto.

[Schermata: finestra "Gestione parametri base" con selezione anno contabile, data elaborazione, selezione ente e modello organizzativo. In alto a destra è visibile l'indicatore "Es.Contabile 2024 - Utente: CED"]

### 2.1 Aggiornamento automatico tassonomia

1) Andare nel menu **Prospetti bilancio rendiconto della gestione**

[Schermata: menu ad albero "Applicazioni" con percorso evidenziato: Servizi Economici > Finanziaria > Bilancio e Variazioni > **Prospetti Rendiconto della gestione**]

2) Andare nel sottomenu **tab XBRL Rend**

[Schermata: interfaccia con tab "XBRL Rend" selezionata (evidenziata in rosso). Sotto si vede la griglia "XBRL REND 2026" con sezioni "Dati Ente" (Ragione sociale, Codice Fiscale, Codice ente x invio flussi alla BDAP) e "Dati Analitici - verifica dati su impegni/accertamenti di competenza e pagamenti/incassi a residuo" con opzioni: Eredita piano finanziario, Valorizza dati transazione elementare, Valorizza Codice missione e programma]

3) Dare conferma in questo avviso sotto, significa che è uscita una nuova tassonomia e dobbiamo aggiornare quella che abbiamo. In seguito farà tutto in automatico il programma.

[Schermata: finestra di dialogo "Attenzione" con messaggio: "La tassonomia XBRL risulta non aggiornata rispetto a quella di default, si consiglia di aggiornare alla nuova versione. Continuare?" con pulsanti F5-Conferma e F8-Annulla]

A seguito dell'operazione completata verrà un avviso dove dice che il programma ha eseguito l'aggiornamento.

---

## 3. Creazione file XBRL

Per creare i file XBRL:

[Schermata: menu ad albero con percorso evidenziato: 180. Servizi Economici > 10. Finanziaria > 10. Bilancio e Variazioni > **80. Prospetti Rendiconto della gestione**]

### 3.1 Utilità file XBRL

- Per generare i file selezionare la tab **XBRL Rend**.
- Dalla chiave inglese è possibile gestire il codice BDAP dell'ente.

[Schermata: tab "XBRL Rend" con griglia "XBRL REND 2023" e sezione "Dati Ente". A destra della riga "Codice ente x invio flussi alla BDAP" è presente un'icona a forma di chiave inglese (evidenziata in rosso). Sotto, finestra di dialogo "Modifica Codice BDAP" con campo "Codice BDAP" e pulsanti Conferma/Annulla]

### 3.2 Funzioni in XBRL

- **Stampa per verificare anomalie** ①
- **Funzioni per aggiornare in automatico le anomalie** ②
- **Produzione delle stampe dettagliate dei DCA** ③
- **Produzione dei file SDB - IND – DCA** ④

[Schermata: griglia "XBRL REND 2023" con colonne Descrizione, Stampa, Scarica, Compila, Data Comp. Le icone sono raggruppate in quattro blocchi numerati:
- ①: icone di stampa (stampante) per le stampe di controllo valori inseriti nel flusso DCA per rendiconto (Entrate - Stanziamenti, Entrate - Accertato e Riscosso, Spese - Stanziamenti, Spese - Impegno e Pagato, Totale registrazioni stato patrimoniale, Totale registrazioni conto economico)
- ②: icone a forma di chiave inglese per le funzioni di aggiornamento automatico (Stampa impegni/accertamenti da aggiornare manualmente, Stampa pagamenti/incassi da aggiornare manualmente, Stampa Registrazioni co.ge. da aggiornare manualmente)
- ③: icone di stampa per le stampe di controllo valori inseriti nel flusso DCA
- ④: icone di download (freccia verso il basso) per la creazione flussi in formato XBRL: SDB - Schemi di bilancio, IND - Piano degli indicatori, DCA - Dati contabili analitici]

#### 3.2.1 Controlli Pre-Schemi

I controlli pre-schemi servono per verificare se ci sono dei disallineamenti al livello della transazione elementare nelle liquidazioni o riscossioni. Il programma controlla se è stato ereditato correttamente il piano finanziario, COFOG e transazione UE dall'impegno/accertamento.

Se è tutto ok esce fuori comunque l'avviso che segnala che non vi sono trovate differenze o anomalie.

[Schermata: finestra "Controlli Pre Schemi" con messaggio: "Transazione elementare nelle liquidazioni / riscossioni: Nessun errore riscontrato. differenze piano finanziario tra impegno e liquidazione: Nessun errore riscontrato. differenze di COFOG tra liquidazioni e impegno: Nessun errore riscontrato"]

#### 3.2.2 Nuova gestione dati dalle stampe salvate da settembre 2025

Al momento della creazione del file SDB/DCA avremo questo avviso.

[Schermata: finestra "Attenzione" con messaggio: "Per la costruzione del file XBRL vengono utilizzati i dati presenti nelle stampe salvate nel database (il salvataggio può essere effettuato dalla tab Rendiconti dopo aver prodotto una stampa; qualora non siano presenti stampe salvate nel database i valori sono ricalcolati in base ai dati presenti in archivio. Vuoi proseguire?" con pulsanti F5-Conferma e F8-Annulla]

#### 3.2.3 POP-UP CHROME / FIREFOX

**Se non visualizzate i file scaricati:**

I file generati vengono scaricati nella cartella "download". Se non visualizzate il file verificare le impostazioni del browser (Chrome, FireFox o altri) di avere i permessi di popup e reindirizzamenti consentiti per il sito di CWOL.

[Schermata: impostazioni browser con opzione "Popup e reindirizzamenti" impostata su "Consenti"]