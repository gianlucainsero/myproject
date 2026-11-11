# Bilancio di Previsione e Richieste da Servizi

## Argomenti trattati

- Voci di bilancio
- Interrogazioni bilancio
- Gestione richieste di bilancio
- Approvazione/attribuzione richieste
- Stampe e verifiche
- Prospetti e reportistica per previsione e rendicontazione

---

## Voci di Bilancio

### Percorso di navigazione

```
Servizi Economici => Finanziaria => Bilancio e Variazioni => Voci di Bilancio
```

### Interfaccia Voci di Bilancio

[Schermata: Finestra "Voci di Bilancio" con campi Parte (Uscita), Iter Bilancio (Bilancio confermato), Visualizza Importi (Gestione), Capitolo, Descrizione, Classificazione (Missione-Programma, Piano Finanziario), PEG (Assegnatario, Responsabile), Conto Tesoreria, Vincolo, Obiettivo C.d.G., Collegato a (Attribuzioni bilancio), Piano dei Conti, Centro di Costo-Ricavo, Codici Statistici, Linea Strategica C.d.G., Voci, Settore IVA, Includi voci con. Pulsanti a destra: Nuovo, Elenca, Carica, Salva, Reset]

### Elenco Voci di Bilancio

[Schermata: Tabella "Voci di Bilancio" con colonne: Capitolo, Descrizione, Assegnatario, CP-Assestato/RS-Assestato/CS-Assestato, CP-Impegnato/RS-Impegnato, CP-Disp.Impegnare/RS-Disp.Impegnare, CP-Pagato/RS-Pagato/CS-Pagato, CP-Disp.pagare/RS-Disp.pagare/CS-Disp.pagare, Missione Programma, Piano Finanziario, C.to Tes., Piano dei Conti, Centro di Costo Ricavo, Responsabile. Ordina per: Piano Finanziario]

### Operando esercizio contabile

Per operare sull'esercizio contabile corretto (es. 2024), è necessario impostare i parametri base:

[Schermata: Finestra "Gestione parametri base" con campi: Selezione anno contabile (2024), Data elaborazione (05/09/2023), Selezione ente (Comune di Arenzano), Modello Organizzativo (Mod.Org.vo Corrente). Pulsante: Applica]

### Gestione importi di previsione

Selezionare dal menu a tendina **Visualizza Importi** l'opzione **Previsione** per visualizzare le colonne di previsione pluriennale.

[Schermata: Tabella Voci di Bilancio in modalità "Previsione" con colonne: Capitolo, Descrizione, Assegnatario, Ass. Es. Prov., Previsione 2024 (Fondo Plur.Vinc2024, Prev. Totale 2024), Previsione 2025 (Fondo Plur.Vinc2025, Prev. Totale 2025), Previsione 2026 (Fondo Plur.Vinc2026, Prev. Totale 2026), Cassa Previsione]

### Dettaglio gestione importi di previsione

Entrando nel dettaglio di una voce di bilancio, nella tab **Importi di Previsione** è possibile inserire gli importi per ciascun anno:

[Schermata: Dettaglio voce di bilancio con tab "Importi di Previsione". Sezione "Importi (Previsione)" con campi: Residui presunti esercizio precedente, Previsione di competenza definitiva esercizio precedente, Di cui fondo pluriennale vincolato esercizio precedente, Previsione definitiva di cassa esercizio precedente. Tabella con righe per anno (2024, 2025, 2026) e colonne: Competenza esigibile, Fondo pluriennale vincolato, Totale competenza, Programmazione, Di cui spese non ricorrenti, Di cui già impegnato, Previsione di cassa. Sezione P.E.G. con Assegnatario e Responsabile]

### Salvataggio importi

Possibilità di:
- **Aggiorna** – salva le modifiche alla voce corrente
- **Salva e passa a successivo** – salva e passa alla voce di bilancio successiva

### Situazione Capitolo (Parte Uscita)

[Schermata: Finestra "Situazione Capitolo Parte Uscita Anno 2024" con tab: Definizione, Importi 2024, Pluriennale 2024-2025-2026, Importi 2023, Pluriennale 2023-2024-2025, Cassa, Note. Pulsanti: Navigatore, Attribuzioni, Analitico. Sezione "Anno Corrente - Stanziamento Competenza" con Previsione Iniziale, Variazioni Positive (+), Variazioni Negative (-), Assestato. Sezione "Anno Corrente - Risultati della Gestione" con Competenza e Residui]

### Vista Pluriennale

[Schermata: Tab "Pluriennale 2024-2025-2026" con colonne per anno (2024, 2025, 2026) e righe: Stanziamento Competenza, Variazioni, Assestato, Fondo Pluriennale Vincolato, Variazioni FPV, Assestato FPV, Assestato Totale, Assestato Competenza]

---

## Interrogazioni Bilancio

- Andiamo ad analizzare in dettaglio
- Passando alla consultazione e gestione in procedura CWOL per verificare le voci di bilancio

---

## Gestione Richieste di Bilancio

### Percorso di navigazione

```
Servizi Economici => Finanziaria => Richieste su Bilancio => Richieste per bilancio di previsione
```

### Premessa: Autorizzazioni

Le autorizzazioni necessarie si configurano nella sezione **Servizi Economici** del profilo utente, modulo **FBI - BILANCIO PREVISIONE CONSUNTIVO & RIEPILOGHI**.

[Schermata: Finestra "Autorizzazioni" con tab "SERVIZI ECONOMICI" selezionata. Modulo FBI attivo. Tabella con colonne: PROG, FBI, DESCRIZIONE, AUT, DESCRIZIONE, DESCRIZIONE ESTESA. Righe rilevanti: 5 - Esito su richieste attive (C - Gestione e Cancellazione), 6 - Voci del Bilancio (C - Gestione e Cancellazione)]

#### Utente Verificatore

- Indica chi sarà l'Utente che dovrà verificare la Richiesta.
- Deve essere abilitato alla Struttura Organizzativa Assegnata alla Richiesta come Verificatore (**FBI-5** deve essere **"C"** o **"G"**).

#### Esito Richiesta

- Se si è abilitato alla Struttura Organizzativa Assegnata alla Richiesta come Verificatore (**FBI-5** deve essere **"C"** o **"G"**) è possibile assegnare questo dato.
- La Richiesta potrà essere **"Approvata"**, **"Sospesa"** o **"Respinta"**.
- Automaticamente verrà assegnata la **"Data della Verifica"** (quella odierna).
- Se data già esistente viene chiesto se sovrascriverla mentre se l'Esito è **"Da Verificare"** verrà sempre azzerata.
- L'Esito non sarà più modificabile se la Richiesta risulta **Stampata in Elenco e Firmata**.

#### Iter Attribuzione

- Se si è abilitato alla Struttura Organizzativa Assegnata alla Richiesta come Attribuitore (**FBI-27** deve essere **"C"** o **"G"**) è possibile assegnare questo dato.
- È possibile far creare in Automatico gli Impegni/Accertamenti, a fronte dell'Attribuzione selezionata.

### Elenco Richieste di Bilancio

[Schermata: Finestra "Richieste per Bilancio Prev." con filtri: Parte (Uscita), Progressivo della Richiesta, Capitolo, Missione-Programma, Piano Finanziario, Oggetto della Richiesta, Codice soggetto, Scheda (Tutte), Stampata in Elenco, Assegnatario, Richiesta Inserita dal/al, Utente Verificatore, Esito Richiesta (Tutti), Data della Verifica dal/al, Obiettivo C.d.G., Iter Attribuzione (Tutti), Vincolo, Raggrupp. Doc., Tipologia Forn.]

### Esito Richiesta

L'**Esito richiesta** definisce lo stato in cui si trova la richiesta, in base a cui possono o **NON** possono essere effettuati determinati iter successivi.

Valori disponibili:

| Esito | Descrizione |
|-------|-------------|
| Tutti | Visualizza tutte le richieste |
| Da Verificare | Richieste in attesa di verifica |
| Approvata | Richieste approvate |
| Sospesa | Richieste sospese |
| Respinta | Richieste respinte |
| Solo Approvata ed Attribuita | Solo richieste approvate e già attribuite |
| Solo Approvata e Non Attribuita | Solo richieste approvate ma non ancora attribuite |

[Schermata: Elenco "Richieste Bilancio di Previsione 2024" con colonne: Numero, Piano Finanziario Capitolo, Descrizione Capitolo, Oggetto della Richiesta, Esito Richiesta (con icone: Approvata ✓ verde, Da Verificare ⚠ giallo), 2024 richiesto/f.do plur./attribuito, 2025 richiesto/f.do plur./attribuito, 2026 richiesto/f.do plur./attribuito, Assegnatario]

---

### Inserimento di una nuova richiesta

1. Cliccare il bottone **"Nuovo"**
2. Inserire **Scheda**
3. Inserire il **Capitolo** (utilizzando ricerca)
4. Inserire la **descrizione richiesta** (Oggetto richiesta)
5. L'**utente verificatore** è valorizzato in automatico con il responsabile del servizio (può essere modificato e gestito in base alle autorizzazioni)
6. L'**esito della richiesta** si valorizza in automatico come **"Da Verificare"** in inserimento (un utente con autorizzazione FBI05 può inserirla direttamente approvata e si valorizza anche la data di verifica)
7. Procedere poi a valorizzare gli **importi della richiesta**

[Schermata: Form "Richieste per Bilancio Prev." con campi: Progressivo Richiesta (27), Scheda (VARIABILI - Spese Variabili), Capitolo (Uscita 0107103 0107 03 04 - Carta, cancelleria e stampati), Assegnato a (01 02 03 00 - Ufficio anagrafe), Oggetto richiesta (Richiesta di bilancio per esercizio 2024), Obiettivo C.d.G., Codice soggetto. Sezione "Richiesta": Utente Verificatore (CED), Esito della Richiesta (Da Verificare), Data della Verifica, Motivazioni Esito Dettagliate, Stampata in Elenco. Sezione "Importi RICHIESTI" con colonne Anno 2024, Anno 2025, Anno 2026 e righe: Competenza, di cui Uscite non Ricorrenti, Fondo pluriennale, Totale, Cassa]

### Duplicazione di una richiesta

Nella toolbar è presente la funzione per **duplicare** una richiesta presente in elenco.

- È possibile scegliere se reperire importi per i vari anni
- La richiesta duplicata è sempre creata con esito **"da verificare"**

[Schermata: Pulsante "Duplica Richiesta" e finestra "DUPLICAZIONE DELLA RICHIESTA" con messaggio informativo e checkbox: Duplica Importi Anno 2024, Duplica Importi Anno 2025, Duplica Importi Anno 2026. Pulsanti: Conferma, Annulla]

---

### Approvazione della richiesta

L'approvazione della richiesta può essere effettuata in due modi:

#### Metodo 1: Modifica manuale in gestione

Entrare in gestione della richiesta e modificare manualmente l'esito in **"Approvata"**. Verrà valorizzata anche la data verifica.

[Schermata: Dettaglio richiesta con Esito della Richiesta impostato su "Approvata" e Data della Verifica valorizzata (06/09/2023)]

#### Metodo 2: Bottone "Approva Richiesta"

Selezionare la richiesta/e dall'elenco e poi utilizzare il bottone **"Approva Richiesta"**.

[Schermata: Pulsante "Approva Richiesta" e finestra "Fine Lavoro" con messaggio: "Terminato l'Aggiornamento dell'Esito di 1 Richieste di Bilancio da parte del Verificatore"]

Dopo l'approvazione, la richiesta si presenta con esito **Approvata** (icona ✓ verde) nell'elenco.

---

### Sospensione / Respinta della richiesta

La Sospensione/Respinta della richiesta può essere effettuata in due modi:

#### Metodo 1: Modifica manuale in gestione

Entrare in gestione e modificare manualmente l'esito in **"Sospesa/Respinta"**. Verrà valorizzata anche la data verifica.

> **È possibile inserire la motivazione** nel campo "Motivazioni Esito Dettagliate".

[Schermata: Dettaglio richiesta con Esito della Richiesta impostato su "Sospesa" e campo "Motivazioni Esito Dettagliate" compilato con "motivazione"]

#### Metodo 2: Bottoni "Sospendi Richiesta" / "Respingi Richiesta"

Selezionare la richiesta/e dall'elenco e poi utilizzare i bottoni **"Sospendi Richiesta"** o **"Respingi Richiesta"**.

[Schermata: Elenco richieste con esito "Sospesa" (icona ⚠ arancione) e "Respinta" (icona ✗ rossa)]

---

### Attribuzione importo richiesta

L'attribuzione della richiesta può essere effettuata entrando in gestione in una richiesta **approvata** e gestendo la tab **"Attribuzione"** valorizzando il campo **iter attribuzione**. Cliccando su **"Attribuisci importi"**.

> **Operazione consentita soltanto a utenti con autorizzazione: FBI-27 deve essere "C" o "G"**

[Schermata: Dettaglio richiesta con tab "Attribuzione" attiva. Campi: Iter Attribuzione (Attribuita: Non crea Impegni/Accertamenti Automatici), pulsante "Attribuisci gli stessi Importi della Richiesta", Motivazioni Attribuzione, Vincolo, Raggrupp. Doc., Tipologia Forn. Sezione "Importi ATTRIBUZIONE" con colonne Anno 2024, 2025, 2026 e righe: Attribuzione a competenza, di cui Uscite non Ricorrenti, Attribuzione a fondo pluriennale, Totale, Variazioni Definitive su Attribuzione, Assestato su Attribuzione, Cassa]

#### Attribuzione da elenco

È possibile attribuire selezionando la richiesta/e poi utilizzando il bottone **"Attribuisci Importo Richiesto"**.

[Schermata: Pulsante "Attribuisci Importo Richiesto" e finestra "ITER ATTRIBUZIONE" con messaggio: "Le Attribuzioni saranno create senza la validità per la creazione automatica degli Accertamenti/Impegni, a fronte dell'Attribuzione. Vuoi che le Attribuzioni siano valide per la creazione automatica degli Accertamenti/Impegni?" Pulsanti: No, Sì, Annulla. Finestra "Fine Lavoro": "Terminato l'Aggiornamento dell'Attribuzione di 1 Richieste di Bilancio da parte dell'Attribuitore"]

Dopo l'attribuzione, la richiesta si presenta con esito **"Approvata ed Attribuita"** (icona ✓ verde + carrello).

#### Effetto dell'attribuzione sul bilancio

L'attribuzione **valorizza gli importi di previsione nel capitolo** (sovrascrivendo importi presenti).

[Schermata: Finestra "Situazione Capitolo Parte Uscita Anno 2024" con tab "Pluriennale 2024-2025-2026" evidenziata. Stanziamento Competenza: 2024 = 1.000,00, 2025 = 2.000,00, 2026 = 3.000,00]

---

### Togliere importi attribuiti sul bilancio

#### Metodo 1: In gestione della richiesta

È possibile agire in gestione della richiesta per riportarla come **"Da attribuire"**.

[Schermata: Dettaglio richiesta con tab "Attribuzione", campo "Iter Attribuzione" impostato su "Da Attribuire". Finestra "Attenzione": "E' stata tolta l'Attribuzione, ma esistevano i seguenti Importi Attribuiti, che ora sono stati azzerati: Anno 2024 - Attribuito Competenza: 1.500,00; Anno 2024 - Attribuito di cui Uscite non Ricorrenti: 1.500,00; Anno 2025 - Attribuito Competenza: 1.500,00; Anno 2025 - Attribuito di cui Uscite non Ricorrenti: 1.500,00; Anno 2026 - Attribuito Competenza: 1.500,00; Anno 2026 - Attribuito di cui Uscite non Ricorrenti: 1.500,00"]

#### Metodo 2: Bottone "Togli gli Importi Attribuiti sul Bilancio"

È possibile togliere l'attribuzione selezionando la richiesta/e poi utilizzando il bottone **"Togli gli Importi Attribuiti sul Bilancio"**.

[Schermata: Pulsante "Togli gli Importi Attribuiti sul Bilancio" e finestra "TOGLI IMPORTI ATTRIBUITI SULLE RICHIESTE SELEZIONATE" con messaggio: "Verranno tolti tutti gli Importi Attribuiti sulle Voci di Bilancio delle Richieste di Bilancio selezionate e l'Iter Attribuzione verra' riportato allo stato: Da Attribuire; la Motivazione Attribuzione verra' cancellata. Attenzione! L'operazione e' irreversibile. Vuoi procedere a togliere gli Importi Attribuiti sulle Voci di Bilancio?" Pulsanti: Continua, Annulla]

---

### Stampare elenco richieste

Per stampare l'elenco delle richieste, selezionare dall'elenco le richieste e cliccare il bottone **"Stampa Lista delle Richieste"**.

[Schermata: Elenco richieste con esiti vari (Approvata, Approvata ed Attribuita) e pulsante "Stampa Lista delle Richieste"]

[Schermata: Documento stampato "ELENCO RICHIESTE di BILANCIO 2024 al 06-09-2023 - Parte USCITA" con colonne: Piano Finanziario Capitolo, Assegnato a, Scheda, Numero, Descrizione, Verificatore, Esito Verifica, Data Verifica, Richiesto 2024/2025/2026, Non Ric. 2024/2025/2026, Attrib. 2024/2025/2026, Non Ric.A. 2024/2025/2026, Cassa 2024/2025/2026, Cass. Attr. 2024/2025/2026. Riepilogo TOTALE RICHIESTE per anno con colonne: Richiesto, Non Ricorr., Attribuito, Non Ricorr.A, Cassa, Cassa Attribuito]

---

### Estrazione elenco richieste

Per esportare l'elenco in formato Excel, utilizzare il pulsante di esportazione nella toolbar (icona foglio Excel).

[Schermata: Toolbar con icone (Nuovo, Modifica, Esporta Excel, Stampa, Aggiorna, Impostazioni) e finestra "Configurazione export Excel" con tabella: Campo origine, Descrizione, Larghezza, Formato, Stile Titolo, Stile Colonna, Ord. Pulsanti: Inserisci tutti, Rimuovi tutti, Carica, Salva, Estrai]

---

## Statistiche Bilancio da Richieste

### Percorso di navigazione

```
Servizi economici => Statistiche => Statistiche su bilancio
```

### Configurazione statistiche

[Schermata: Finestra "Statistiche Codici Bilancio DL118 - Uscita" con sezioni: Filtri di Selezione (Missione, Programma, Titolo, Macro Aggregato, Livelli 3-5, fino a Capitolo, Assegnatario, Responsabile, Solo se Senza Vincolo, Vincolo), Periodi di Riferimento Gestibili (Situazione alla Data Attuale, Situaz. alla Data, Situazioni Archiviate nel DWHL), Importi da Estrarre (1ª Colonna: Richieste Bil.Prev. Appr., 2ª Colonna: Richieste Bil.Prev. Appr. AA+1, 3ª Colonna: Richieste Bil.Prev. Appr. AA+2, 4ª-20ª Colonna: Non Gestito). Pulsanti: Carica Parametri da Estrazione salvata, Gestione Parametri di Estrazione, Elenca]

### Risultati statistiche

[Schermata: Tabella "Statistiche Codici Bilancio DL118 - Uscita" con colonne: Missione - Programma - Titolo, Graf., Data Estrazione, Richieste Bil.Prev. Appr., Richieste Bil.Prev. Appr. AA+1, Richieste Bil.Prev. Appr. AA+2. Righe per Missione (1-Servizi istituzionali, 3-Ordine pubblico e sicurezza, 4-Istruzione e diritto allo studio, 5-Tutela e valorizzazione beni culturali, 6-Politiche giovanili, 7-Turismo, 8-Assetto del territorio, 9-Sviluppo sostenibile, 10-Trasporti, 11-Soccorso civile, 12-Diritti sociali, 13-Tutela della salute, 14-Sviluppo economico, 17-Energia, 18-Relazioni con altre autonomie, 20-Fondi e accantonamenti, 50-Debito pubblico, 99-Servizi per conto di terzi). Pulsanti: Salva Parametri Estrazione, Esporta XLSX, Olap, Grafici x Missione, Altra Selezione]