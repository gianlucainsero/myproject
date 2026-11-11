# Pubblicazione trimestrale dei pagamenti (Delibera ANAC 495/2024)

## 1.1 Premessa

Con il presente documento si illustra l'iter operativo da seguire in CWOL per effettuare correttamente l'estrazione dei pagamenti trimestrali ex Art. 4-bis del D.Lgs 33/2013 utile alla pubblicazione in Amministrazione Trasparente secondo le novità normative introdotte dalla delibera ANAC n.495 del 25/09/2024.

## 1.2 Contesto normativo

Le implementazioni apportate alla procedura, si sono rese necessarie per far seguito alle direttive ANAC contenute nella delibera 495/2024 consultabile al seguente link:
https://www.anticorruzione.it/-/delibera-n.-495-del-25-settembre-2024.

Per quello che riguarda l'estrazione dei pagamenti trimestrali da pubblicare nella relativa sezione dell'Amministrazione Trasparente dell'Ente, sinteticamente si può affermare che le novità riguardano alcuni elementi obbligatori, prima assenti, da riportare nei pagamenti pubblicati e la definizione precisa dei piani finanziari da pubblicare.

## 1.3 Operatività in CWOL

La prima fase operativa in CWOL riguarda la parametrizzazione delle estrazioni; successivamente vi sono due tipologie di iter da seguire in base alle proprie esigenze:

- Operatività nel caso in cui l'Ente abbia le procedure Finanziarie e Amministrazione Trasparente integrate (pubblicazione automatica).
- Operatività nel caso in cui l'Ente sia in possesso della sola procedura Finanziaria (estrazione del file da pubblicare).

### 1.3.1 Parametrizzazioni

Le parametrizzazioni sono gestibili dal seguente menù:

**10. Gestione Documentale → 20. Amministrazione trasparente → 50. Parametri →**

[Immagine: Screenshot del menu ad albero di CWOL che mostra il percorso 10. Gestione Documentale → 20. Amministrazione Trasparente → 50. Parametri]

Una volta entrati nella funzione "Parametri" bisogna recarsi nella sezione "Parametri Web", cliccare due volte "Parametri pubblicazione liquidazioni" e selezionare "Sì" nel menù a tendina come sotto indicato:

[Immagine: Screenshot della finestra "Parametri pubblicazione liquidazioni" con il campo "Attiva pubblicazione Pagamenti D.Lgs 97" impostato su "Sì"]

Dopo di che si rendono disponibili due tipologie di configurazioni:

- **Parametri Estrazioni Pagamenti D.Lgs97.**
- **Macro Aggregati da pubblicare.**

[Immagine: Screenshot della schermata Parametri Web con i pulsanti "Parametri Estrazioni Pagamenti D.Lgs97" e "Macro Aggregati da pubblicare" evidenziati a destra]

Nella sezione **Macro Aggregati da pubblicare** l'operatore dovrà impostare i piani finanziari da pubblicare secondo la delibera ANAC 495/2024 (vedi immagine seguente); per effettuare l'operazione basterà cliccare il simbolo "+" in basso a sinistra o il pulsante "Nuovo" in alto a destra:

[Immagine: Screenshot della griglia "Macro Aggregati da pubblicare" con colonne: Piano finanziario, Esclusi pubblicazione Art. 26, Oscuro Art. 26, Valido pubblicazione ex Art. 4-bis, Oscuro Art. 4-bis. Pulsante "Nuovo" evidenziato in alto a destra]

Entrando nella gestione dei piani finanziari già esistenti o nuovi va sottolineato il fatto che riguardo all'oscuramento dei dati dei creditori **non ci sarà possibilità di effettuare modifiche** in quanto l'unica opzione disponibile è fedele alle ultime direttive ANAC:

[Immagine: Screenshot della finestra "Macro Aggregati da Pubblicare" con i campi: Piano Finanziario, Escludi pubblicazione Art. 26 D.Lgs 33/2013, Oscuro Art.26 (impostato su "No"), Valido per pubblicazione pagamenti ex Art. 4-bis, Oscuro Art. 4-bis (impostato su "Nominativo omesso Delibera ANAC 495 del 2024"). Tooltip informativo: "Per le persone giuridiche e le ditte individuali viene mostrato il codice fiscale e la ragione sociale; per le persone fisiche il nominativo viene oscurato e sostituito dalla matricola interna e dalla dicitura 'Soggetto privato'"]

> **N.B.** Nei prossimi aggiornamenti sarà disponibile una funzione di utilità che popolerà automaticamente la tabella dei macroaggregati in base a quanto espressamente dalla delibera ANAC 495/2024. Per attivare il popolamento sarà sufficiente cliccare sul button **"Carica Macro Aggregati automaticamente (Delib. 495)"**:

[Immagine: Screenshot della finestra di conferma "Procedere con il caricamento automatico di Macro Aggregati (Delib. ANAC 495)? Questa operazione aggiunge i Macro Aggregati esistenti e inserisce i nuovi." con pulsanti F5-Conferma e F8-Annulla. Il pulsante "Carica Macro Aggregati automaticamente (Delib. 495)" è evidenziato a destra]

Si ricorda che eventuali macro aggregati inseriti in precedenza **non saranno sovrascritti** dalla funzione di popolamento massivo.

Nella sezione **Parametri Estrazioni Pagamenti D.Lgs97** l'operatore potrà gestire le seguenti parametrizzazioni:

[Immagine: Screenshot della schermata "Parametri Estrazioni Pagamenti D.Lgs97" con i campi: Periodicità di generazione (3-Trimestrale), Tipologia importo (Importo lordo), Sezione di pubblicazione generale (60 - Pagamenti dell'amministrazione), Sezione di pubblicazione trimestrale (60 - Dati sui pagamenti), Importo soglia, Anno da esportare, Codici qualifica da escludere nella selezione]

- **Periodicità di generazione:** parametro fisso impostato su 3-Trimestrale.
- **Tipologia importo:** parametro impostato di default su 2-Importo lordo (come da normativa) ma si ha la possibilità di modificarlo in 1-Importo al netto di ritenute e IVA Split.
- **Sezione di pubblicazione generale** e **Sezione di pubblicazione trimestrale:** sono parametri che interessano **solo** chi è anche in possesso della procedura Amministrazione Trasparente e vi vanno indicate le sezioni in cui verranno pubblicati i pagamenti.
- **Importo soglia:** anche questo è un campo valido **solo** per chi ha anche la nostra Amm. Trasp. e permette di inserire un importo sotto al quale i pagamenti verranno esclusi dalla pubblicazione.
- **Anno da esportare:** campo valido **solo** per chi ha anche la nostra Amm. Trasp.. Con valore "0" verrà esportato automaticamente solo il trimestre dell'anno corrente. Selezionando invece uno delle altre sei annualità disponibili 2020/2025 verranno invece esportati, sempre automaticamente, tutti i trimestri dell'anno scelto.
- **Codici qualifiche da escludere nella selezione:** questa sezione va usata solo nel caso in cui si vogliano escludere i pagamenti di una o più categorie di creditori.

[Immagine: Screenshot della sezione "Codici qualifica da escludere nella selezione" con griglia di codici qualifica (rapporto 1-8) e finestra di selezione "Qualifica rapporto: Da escludere dal calcolo" con elenco di qualifiche come AGRICOLTORI, ALTRI, CONSULENZE COMUNALI, DIPENDENTI COMUNALI, FORNITORI, LIBERI PROFESSIONISTI, NON RILEVABILI, PRESTAZIONI OPERAIO, PRESTAZIONI D'OPERA VOLONTARI, ecc.]

### 1.3.2 Estrazione pagamenti per Amm.ne Trasparente Palitalsoft

Per chi dispone di entrambe le procedure è disponibile la **pubblicazione automatica** dei pagamenti in Amministrazione Trasparente: le relative sezioni si popoleranno con i dati provenienti dalla Finanziaria in base ai parametri precedentemente impostati. L'attivazione **non è immediata** dopo aver configurato tutti i parametri: la pubblicazione partirà solo dopo l'abilitazione dell'automatismo schedulato.

A partire dal **20 ottobre** si procederà all'attivazione progressiva dell'automatismo per tutti gli enti che hanno il modulo di Amministrazione Trasparente.

Una volta attivato l'automatismo, l'utente potrà sempre consultare i pagamenti pubblicati tramite la funzione **"Gestione Sezioni"**:

**10. Gestione Documentale → 20. Amministrazione Trasparente → 20. Gestione Sezioni**

[Immagine: Screenshot del menu ad albero con percorso 10. Gestione Documentale → 20. Amministrazione Trasparente → 20. Gestione Sezioni evidenziato]

Qui basterà ricercare le sezioni dedicate ai pagamenti e cliccarci sopra due volte per visualizzare in dettaglio la lista degli stessi:

[Immagine: Screenshot della finestra "Sezioni Amministrazione Trasparente" con elenco sezioni: "Pagamenti dell'amministrazione" (Liv. 1, Ord. 200), "Dati sui pagamenti" (Liv. 2, Ord. 10), "Dati sui pagamenti Trimestrale Art. 4-bis d. lgs. n. 33/2013" (Liv. 2, Ord. 20)]

- **Dati sui pagamenti:** pubblicazione generale con aggiornamento automatico giornaliero dei dati sui pagamenti con formato esportabile in CSV e PDF.
- **Dati sui pagamenti Trimestrale Art. 4-bis d.lgs. n. 33/2013:** estrazione trimestrale che verrà pubblicata il **6° giorno successivo alla scadenza del trimestre** e resa disponibile nei formati CSV, XLSX e PDF. Si è scelto il 6° giorno per fornire ai vari enti delle giornate utili all'eventuale chiusura delle operazioni legate al trimestre che sarà oggetto di pubblicazione. Il sistema organizzerà automaticamente le pubblicazioni creando sottosezioni per anno per facilitarne la consultazione e l'archiviazione.

### 1.3.3 Solo Finanziaria

Per chi è in possesso della sola procedura Finanziaria, sempre dopo aver parametrizzato le estrazioni nelle funzioni precedentemente descritte, dovrà recarsi nella funzione **"Dati sui Pagamenti Trimestrali"** presente al seguente menù:

**180. Servizi economici → 10. Finanziaria → 70. Elaborazione periodiche → 40. Dati sui pagamenti trimestrali**

per effettuare le estrazioni da caricare poi sulla propria Amministrazione Trasparente.

[Immagine: Screenshot del menu ad albero con percorso 180. Servizi Economici → 10. Finanziaria → 70. Elaborazioni Periodiche → 40. Dati sui pagamenti trimestrali Art. 4-bis d. lgs. n. 33/2013 evidenziato]

Successivamente selezionare il trimestre che si desidera estrarre e cliccare su **"Elenca"**:

[Immagine: Screenshot della finestra "Dati sui pagamenti Trimestrale Art. 4-bis d. lgs. n. 33/2013" con campi Anno (2025) e Trimestre (1) e pulsante "Elenca" evidenziato a destra]

Verranno quindi visualizzati a video i pagamenti per il periodo richiesto con la possibilità di esportarli massivamente nel formato che più si preferisce tra **PDF**, **CSV** e **XLSX**.

[Immagine: Screenshot della griglia "Estrazione Dati sui pagamenti Trimestrale Art. 4-bis d. lgs. n. 33/2013" con colonne: Anno, Trimestre, Categoria, Descrizione, Importo, C.F./P.IVA Beneficiario, Beneficiario. Pulsanti di esportazione XLSX, CSV, PDF evidenziati a destra]