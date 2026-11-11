# Pubblicazione trimestrale dei pagamenti (delibera ANAC 495/2024)

Con il presente documento si spiega l'iter operativo da seguire in CWOL per effettuare correttamente l'estrazione dei pagamenti trimestrali utile alla pubblicazione in Amministrazione Trasparente secondo le novità normative introdotte dalla delibera ANAC n.495 del 25/09/2024.

## 1.1 Contesto normativo

Come accennato, le implementazioni apportate alla procedura, si sono rese necessarie per far seguito alle direttive ANAC contenute nella delibera 495/2024 consultabile al seguente link: https://www.anticorruzione.it/-/delibera-n.-495-del-25-settembre-2024.

Per quello che riguarda l'estrazione dei pagamenti trimestrali da pubblicare nella relativa sezione dell'Amministrazione Trasparente dell'Ente, sinteticamente si può affermare che le novità riguardano alcuni elementi obbligatori, prima assenti, da riportare nei pagamenti pubblicati e la definizione precisa dei piani finanziari da pubblicare.

## 1.2 Operatività in CWOL

La prima fase operativa in CWOL riguarda la parametrizzazione delle estrazioni dopo di che vi sono due tipologie di iter da seguire in base alle proprie esigenze:

- Operatività nel caso in cui l'Ente abbia le procedure Finanziarie e Amministrazione Trasparente integrate (pubblicazione automatica).
- Operatività nel caso in cui l'Ente sia in possesso della sola procedura Finanziaria (estrazione del file da pubblicare).

### 1.2.1 Parametrizzazioni

Nel seguente percorso l'operatore potrà indicare i parametri di cui si accennava nel precedente paragrafo:

[Schermata: menu "Applicazioni" → 10. Gestione Documentale → 20. Amministrazione Trasparente → 50. Parametri]

Una volta entrati nella funzione **"Parametri"** bisogna recarsi nella sezione **"Parametri Web"**, cliccare due volte **"Parametri pubblicazione liquidazioni"** e selezionare **"Sì"** nel menù a tendina come sotto indicato:

[Schermata: finestra "Parametri pubblicazione liquidazioni" con i campi "Attiva pubblicazione Sovvenzioni Art.26" impostato su "Sì" e "Attiva pubblicazione Pagamenti D.Lgs.97" impostato su "Sì"]

altre due sezioni specifiche:

- **Parametri Estrazioni Pagamenti D.Lgs97.**
- **Macro Aggregati da pubblicare.**

[Schermata: sezione "Parametri Web" con i pulsanti "Parametri Estrazioni Pagamenti D.Lgs97" e "Macro Aggregati da pubblicare" evidenziati a destra]

Partendo dalla pagina **Macro Aggregati da pubblicare** qui l'operatore dovrà impostare i piani finanziari da pubblicare secondo la delibera ANAC 495/2024; per effettuare l'operazione basterà cliccare il simbolo **"+"** in basso a sinistra o il pulsante **"Nuovo"** in alto a destra:

[Schermata: tabella "Macro Aggregati da pubblicare" con colonne: Piano Finanziario, Oscurato beneficiario Art. 26, Oscurato beneficiario pers. fisiche no Ditta indiv., Valido pubblicazione ex Art. 4-bis, Oscuramento Art. 4-bis. Pulsante "Nuovo" evidenziato in alto a destra]

Entrando nella gestione dei piani finanziari già esistenti o nuovi va sottolineato il fatto che riguardo all'oscuramento dei dati dei creditori **non ci sarà possibilità di effettuare modifiche** in quanto l'unica opzione disponibile è fedele alle ultime direttive ANAC:

[Schermata: finestra "Macro Aggregati da Pubblicare" con campi: Piano Finanziario, Escludi pubblicazione Art. 26 D.Lgs 33/2013, Oscuramento Art.26 (impostato su "No"), Valido per pubblicazione pagamenti ex Art. 4-bis, Oscuramento Art. 4-bis (impostato su "Nominativo omesso Delibera ANAC 495 del 2024"). Tooltip informativo: "Per le persone giuridiche e le ditte individuali viene mostrato il codice fiscale e la ragione sociale; per le persone fisiche il nominativo viene oscurato e sostituito dalla matricola interna e dalla dicitura 'Soggetto privato'"]

Nella pagina **Parametri Estrazioni Pagamenti D.Lgs97** l'operatore si troverà di fronte una serie di parametri che è bene spiegare nel dettaglio:

[Schermata: finestra "Parametri Amministrazione Trasparente" con i campi: Periodicità di generazione (3-Trimestrale), Tipologia importo (2-Importo lordo), Sezione di pubblicazione generale (68 - Pagamenti dell'amministrazione), Sezione di pubblicazione trimestrale (80 - Dati sui pagamenti), Importo soglia (0,00), Anno da esportare (0), Codici qualifiche da escludere nella selezione]

- **Periodicità di generazione:** parametro fisso impostato su **3-Trimestrale**.

- **Tipologia importo:** parametro impostato di default su **2-Importo lordo** (come da normativa) ma si ha la possibilità di modificarlo in **1-Importo al netto di ritenute e IVA Split**.

- **Sezione di pubblicazione generale** e **Sezione di pubblicazione trimestrale:** sono parametri che interessano **solo** chi è anche in possesso della procedura Amministrazione Trasparente e vi vanno indicate le sezioni in cui verranno pubblicati i pagamenti.

- **Importo soglia:** anche questo è un campo valido **solo** per chi ha anche la procedura Amm. Trasp. e permette di inserire un importo sotto al quale i pagamenti verranno esclusi dalla pubblicazione.

- **Anno da esportare:** campo valido **solo** per chi ha anche la procedura Amm. Trasp. Con valore **"0"** verrà esportato automaticamente solo il trimestre dell'anno corrente. Selezionando invece uno delle altre sei annualità disponibili **2020/2025** verranno invece esportati, sempre automaticamente, tutti i trimestri dell'anno scelto.

- **Codici qualifiche da escludere nella selezione:** questa sezione va usata solo nel caso in cui si vogliano escludere i pagamenti di una o più categorie di creditori.

[Schermata: sezione "Codici qualifiche da escludere nella selezione" con elenco di righe "Codice qualifica rapporto" e pulsante per aprire la finestra "Qualifica rapporto tra fornitore ed ente" contenente una tabella con colonne: Codice, Descrizione, Data inizio, Data fine. Esempi di qualifiche: AMMIN. CENTRALE, CLIENTE, CONSORZIO COMUNALE, DIPENDENTE COMUNALE, FORNITORE, LABORATORIO, SOCI PUBBLICI, PRESTATORE D'OPERA OCCASIONALE, PRESTATORE D'OPERA OCCASIONALE, ENTI PUBBLICI, ecc.]

### 1.2.2 Finanziaria e Amministrazione Trasparente integrate

Chi è in possesso di entrambe le procedure, a questo punto potrà usufruire della pubblicazione automatica dei pagamenti ovvero, in base ai parametri impostati, la sezione pubblica dei pagamenti in Amministrazione Trasparente si popolerà automaticamente con i dati provenienti dalla Finanziaria.

L'utente potrà sempre consultare i pagamenti pubblicati tramite la funzione **"Gestione Sezioni"**:

[Schermata: menu "Applicazioni" → 10. Gestione Documentale → 20. Amministrazione Trasparente → 20. Gestione Sezioni]

Qui basterà ricercare la sezione dei pagamenti e cliccarci sopra due volte per visualizzare in dettaglio la lista degli stessi:

[Schermata: tabella "Sezioni Amministrazione Trasparente" con colonne: Codice, Voce, Tipologia contenuto, Ultimo inserimento, Data ins., ultimo ultima modifica, Data ultima modifica. La riga "Dati sui pagamenti" (codice 72, tipo "Elenco documenti (D)") è evidenziata]

### 1.2.3 Solo Finanziaria

Chi invece è in possesso della sola procedura Finanziaria, sempre dopo aver parametrizzato le estrazioni nelle funzioni precedentemente descritte, dovrà recarsi nella funzione **Dati sui Pagamenti Trimestrali** per effettuare le estrazioni da caricare poi sulla propria Amministrazione Trasparente:

[Schermata: menu "Applicazioni" → 180. Servizi Economici → 10. Finanziaria → 70. Elaborazioni Periodiche → 190. Dati sui pagamenti Trimestrale Art. 4-bis d. lgs n. 33/2013]

A questo punto bisogna inserire l'anno, il trimestre da estrarre per poi cliccare **« Elenca »**:

[Schermata: finestra "Dati sui pagamenti Trimestrale Art. 4-bis d. lgs n. 33/2013" con campi "Anno" (impostato su 2025) e "Trimestre" (impostato su 1), pulsante "Elenca" evidenziato a destra]

Verranno quindi estratti i pagamenti per il periodo richiesto con la possibilità di visualizzarli nel dettaglio e di esportarli massivamente nel formato che più si preferisce:

[Schermata: tabella "Elencazione Dati dei pagamenti Trimestrale Art. 4-bis d. lgs n. 33/2013" con colonne: Anno, Trimestre, Tipologia, Importo, C.F./P.IVA del beneficiario, Beneficiario. Esempi di righe con "Liquidità corrente", "Acquisto di beni e di servizi", importi vari, codici fiscali e nomi di beneficiari. A destra pulsanti per esportazione in vari formati (CSV, XLS, XML, PDF) evidenziati]