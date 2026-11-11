# MANUALE TAB CWOL 2025 – Certificazione Unica 2025

**Software:** CWOL CU 2025

Il presente documento elenca le fasi operative da adottare per assolvere agli adempimenti riguardanti la stampa e creazione del flusso per la **certificazione unica 2025** – redditi di lavoro dipendente/assimilati, lavoro autonomo/provvigioni, indennità di esproprio e locazioni brevi.

> **Requisito:** Per poter eseguire la stampa delle CU 2025 bisogna avere la **versione 08.02**.

---

## 1. NOVITÀ 2025

Per il periodo d'imposta 2024, i sostituti d'imposta utilizzano la Certificazione unica 2025 (CU) per attestare i redditi di lavoro dipendente e assimilati, i redditi di lavoro autonomo, provvigioni e redditi diversi nonché i corrispettivi derivanti dai contratti di locazioni brevi.

**Scadenze:**

- La Certificazione unica va rilasciata al percettore delle somme, utilizzando il modello **"sintetico"** entro il **17 marzo 2025** (il termine ordinario del 16 marzo cade di domenica). Entro quella stessa data deve essere effettuata, in via telematica, la trasmissione all'Agenzia delle Entrate, utilizzando il modello **"ordinario"**.
- La trasmissione telematica all'Agenzia delle Entrate delle certificazioni contenenti esclusivamente redditi che derivano da prestazioni di lavoro autonomo rientranti nell'esercizio di arte o professione abituale deve avvenire entro il **31 marzo 2025**.
- La trasmissione telematica delle certificazioni uniche contenenti esclusivamente redditi esenti o non dichiarabili mediante la dichiarazione dei redditi precompilata, può avvenire entro il termine di presentazione della dichiarazione dei sostituti d'imposta, ossia entro il **31 ottobre 2025**.

**Novità normativa – D.Lgs. n. 1/2024:**

Con l'approvazione del Decreto Legislativo n. 1/2024, il sistema fiscale italiano è stato semplificato: dal 2025 i contribuenti in **regime forfettario** e di **vantaggio** non riceveranno più la Certificazione Unica (CU) dai loro committenti. Questo cambiamento si inserisce nel più ampio processo di digitalizzazione e semplificazione degli adempimenti fiscali, già avviato con l'introduzione della fatturazione elettronica obbligatoria per i forfettari dal 1° gennaio 2024.

**Modifiche al modello:**

- **Punto 6:** è stato eliminato il codice esenzione 24 e sono stati introdotti:
  - **Codice 25** – "nel caso di indennità non assoggettate a ritenuta d'acconto corrisposte ai soggetti in regime forfettario"
  - **Codice 26** – "nel caso di indennità non assoggettate a ritenuta d'acconto corrisposte ai soggetti in regime fiscale di vantaggio"

- **Punto 31 – Tipo rapporto:** inserire il codice tipo rapporto indicato nel flusso Uniemens relativo ai contributi pagati alla Gestione separata INPS:
  - **13** – Associati in partecipazione con apporto di solo lavoro (non possono essere attivati nuovi rapporti da 01/01/2017)
  - **09** – Rapporti di lavoro autonomo occasionale (art. 44 legge 326/2003 – Reddito ai fini fiscali indicato nella certificazione lavoro autonomo, provvigioni e redditi diversi). Il presente codice non può essere utilizzato per i rapporti di lavoro sportivo di cui al D.lgs. 36/2021 per il quale deve essere utilizzato quanto illustrato nel punto 2.3 sezione 3 bis
  - **07** – Venditore porta a porta (Reddito ai fini fiscali indicato nella certificazione lavoro autonomo, provvigioni e redditi diversi)
  - **D1** – Sportivo dilettante senza copertura assicurativa quota IVS collegato a tipo rapporto D2
  - **D2** – Sportivo dilettante senza copertura assicurativa quota prestazioni collegato a tipo rapporto D1
  - **D3** – Sportivo dilettante con copertura assicurativa
  - **D4** – Amministrativo gestionale ASD senza copertura assicurativa quota IVS collegato a tipo rapporto D5
  - **D5** – Amministrativo gestionale ASD senza copertura assicurativa quota prestazioni collegato a tipo rapporto D4
  - **D6** – Amministrativo gestionale ASD con copertura assicurativa
  - **D7** – Sportivo dilettante impiegato pubblico

---

## 2. IMPOSTAZIONE DI BASE

> **N.B.** Tutte le operazioni vanno effettuate accedendo come **anno contabile 2024**.

[Immagine: Videata "Gestione parametri base" con Selezione anno contabile impostato su 2024, Data elaborazione, Selezione ente e Modello Organizzativo]

---

## 3. CONTROLLI E VERIFICHE

### 3.1 Come verificare le tipologie di ritenute utilizzate

Dal menu delle ritenute effettuare la stampa del **"Riepilogo ritenute nel periodo"** specificando il codice e il tributo della ritenuta, utile per elencare i codici di ritenute utilizzate.

Percorso menu: `180. Servizi Economici` → `50. Ritenute` → `70. Stampa Riepilogo ritenute nel periodo`

Selezionare le ritenute **IRPEF** e (qualora siano gestite) anche le ritenute **INPS**.

[Immagine: Videata di configurazione del report con campi Periodo (Dal Mese/Al Mese), Provenienza, Tipo ritenute da stampare con checkbox IRPEF e INPS selezionate, e Riepilogo con opzioni "Riepilogo per codice ritenuta" e "Riepilogo per codice tributo"]

Nell'ultima pagina del report vengono elencati i codici ritenuta utilizzati nell'esercizio consentendo di determinare i codici da aggiornare.

[Immagine: Report "Riepilogo ritenute da Gennaio a Dicembre" con tabella riepilogo per tributo e riepilogo per ritenuta, contenente codici 1040, 1045, 40, 44, 45, 1 con relative colonne Quota esente, IVA, Imponibile, Ritenuta, Detrazioni]

### 3.2 Come modificare i codici delle ritenute

Percorso menu: `180. Servizi Economici` → `90. Tabelle` → `50. Ritenute` → `30. Ritenute`

Selezionare la ritenuta da modificare.

[Immagine: Tabella "Ritenute" con colonne Cod.Rit., Cod.Trib., Descrizione ritenuta, Tipo Ritenuta, Aliquota, % ass. lordo, % sul benef. e pulsante MODIFICA]

Entrare in modifica del **tipo ritenuta** e porre attenzione ai seguenti campi:

- **"Comunicazione ai fornitori"**: parametro necessario per la compilazione della CU con quel codice ritenuta.

[Immagine: Videata di modifica ritenuta con sezione "Parametri per certificazioni annuali" dove il campo "Comunicazione ai fornitori" è impostato su "Modello 'Certificazione unica'"]

Per quanto riguarda i codici di ritenute **non rientranti nella CU** (ad esempio il codice 45) il tipo comunicazione va impostato con **lettera personalizzata**.

> **Consiglio:** Copiare le impostazioni nei codici ritenute, verificandoli dall'esercizio precedente (2023).

### 3.3 Come modificare la tipologia di ritenuta Regime Forfettari per non effettuare l'invio della CU

Con l'approvazione del Decreto Legislativo n. 1/2024, dal 2025 i contribuenti in regime forfettario e di vantaggio non riceveranno più la Certificazione Unica (CU) dai loro committenti.

Per non effettuare l'invio delle comunicazioni ai forfettari, modificare l'impostazione della ritenuta selezionando il parametro come di seguito:

[Immagine: Sezione "Parametri per certificazioni annuali" con campo "Comunicazione ai fornitori" impostato su **"Non previsto"**]

### 3.4 Aggiornamento codici ritenute previdenziali – INPS

Il modello della certificazione unica prevede apposite caselle per l'esposizione delle ritenute previdenziali.

Nelle istruzioni per la compilazione viene indicato che in questa sezione **si deve indicare l'importo dei contributi previdenziali dovuti in relazione ai redditi contrassegnati al punto 1 dal codice "C" nonché ai redditi annui superiori a euro 5.000 derivanti dalle attività contrassegnate al punto 1 dai codici "M", "M1" e "V"** (vedi elenco parziale della tabella causali):

- **C)** Utili derivanti da contratti di associazione in partecipazione e da contratti di cointeressenza, quando l'apporto è costituito esclusivamente dalla prestazione di lavoro
- **M)** Prestazioni di lavoro autonomo non esercitate abitualmente
- **M1)** Redditi derivanti dall'assunzione di obblighi di fare, di non fare o permettere
- **V)** Provvigioni corrisposte a incaricato per le vendite a domicilio; provvigioni corrisposte a incaricato per la vendita porta a porta e per la vendita ambulante di giornali quotidiani e periodici (L. 25 febbraio 1987, n. 67)

In presenza di ritenute inserite con tali causali, si devono verificare i codici ritenuta utilizzati per evidenziare le ritenute previdenziali (nell'esempio il codice 82) ed impostare il flag tipo comunicazione uguale a **2** (come indicato nella fase precedente).

A questo punto occorre verificare le singole liquidazioni per verificare che ogni rigo di ritenuta previdenziale sia associato alla stessa causale del corrispondente rigo di Irpef.

[Immagine: Tabella ritenute con codice 40 "ritenuta 1040 (A)", imponibile 2.750,00, ritenute a carico beneficiario 550,00, totale ritenute 550,00, esente 739,20]

### 3.5 Aggiornamento modalità di compilazione parte espropri

Compilazione del modello per la parte degli espropri. Il programma della compilazione della CU separa le somme che vengono indicate nelle colonne **131** relative agli espropri e **135** relative al risarcimento del danno con la personalizzazione della tabella ritenute.

[Immagine: Videata di modifica ritenuta con codice tributo per ritenuta "52", descrizione "Indennità di esproprio", sezione "Certificazione unica lavoro Autonomo" con Tipo Ritenuta impostato su "Indennità di esproprio" e menu a tendina con opzioni: Indennità di esproprio, Altre indennità, Risarcimento del danno, Interessi]

Si riporta di seguito l'immagine del modello interessato e le istruzioni relative.

[Immagine: Modello CU sezione "Somme corrisposte a titolo di indennità di esproprio, altre indennità e interessi" con colonne: INDENNITÀ DI ESPROPRIO E RISARCIMENTO DEL DANNO (punti 131, 132, 135, 136) e ALTRE INDENNITÀ E INTERESSI (punti 133, 134, 137, 138)]

#### Somme corrisposte a titolo di indennità di esproprio

La sezione deve essere utilizzata per indicare le somme a titolo di indennità di esproprio e di somme percepite a seguito di cessioni volontarie nel corso di procedimenti espropriativi, nonché di somme comunque dovute per effetto di acquisizioni coattive conseguenti ad occupazioni d'urgenza, con riferimento ad aree destinate alla realizzazione di opere pubbliche o di infrastrutture urbane all'interno di zone omogenee di tipo A, B, C e D di cui al D.M. 2 aprile 1968, definite dagli strumenti urbanistici ovvero ad interventi di edilizia residenziale pubblica ed economica e popolare di cui alla L. 18 aprile 1962, n. 167 (art. 11 L. 30 dicembre 1991, n. 413).

Dovranno inoltre essere indicate le somme corrisposte per occupazione temporanea, risarcimento danni da occupazione acquisitiva, nonché le indennità di occupazione e gli interessi comunque dovuti (art. 11 L. 30 dicembre 1991, n. 413).

Nella sezione andranno indicate le suddette somme che siano state corrisposte nel 2019, indipendentemente dalla data del provvedimento sottostante.

**Compilazione dei punti:**

| Punto | Descrizione |
|-------|-------------|
| **131 e 135** | Tutte le somme corrisposte a titolo di indennità di esproprio e di risarcimento del danno |
| **132 e 136** | Ammontare delle ritenute operate a titolo di imposta nella misura del **20%** (con facoltà del contribuente di optare, in sede di dichiarazione annuale dei redditi, per la tassazione ordinaria; nel qual caso la ritenuta si considera effettuata a titolo di acconto) |
| **133 e 137** | Tutte le somme corrisposte a titolo di altre indennità e di interessi |
| **134 e 138** | Ammontare delle ritenute operate sulle somme corrisposte a titolo di altre indennità ed interessi |

### 3.6 Lista controllo ritenute pagate

Dal menù delle ritenute effettuare le seguenti stampe di controllo.

Percorso menu: `180. Servizi Economici` → `50. Ritenute` → `20. Lista di Controllo Ritenute pagate` / `80. Verifica Movimenti Ritenute`

#### Fase 1: Verifica movimenti ritenute

Eseguire il programma **verifica movimenti ritenute** (compilando la videata nella maniera seguente):

[Immagine: Videata "Verifica Movimenti Ritenute" con checkbox "Abilita Verifica Ritenute Iniziali" (non spuntata), "Abilita Verifica Ritenute da liquidazioni pagate" (spuntata), Data Registrazione dal/al 31/12/2024, Data Mandato dal 01/01/2024 al 31/12/2024]

#### Fase 2: Lista di controllo ritenute

Eseguire il programma **lista di controllo ritenute** (compilando la videata nella maniera seguente):

[Immagine: Videata "Lista di controllo Ritenute Pagate" con Selezione Soggetto impostato su "Fornitore su Documento" e Tipo ritenute da controllare impostato su "Irpef e previdenziali"]

### 3.7 Lista Controllo Percipienti

Lanciare la seguente stampa per ottenere la lista di controllo dei percepimenti per i quali verrà stampato il modello sintetico della Certificazione Unica:

Percorso menu: `180. Servizi Economici` → `50. Ritenute` → `40. Certificazione Unica` → `10. Stampa lista di controllo percipienti`

[Immagine: Report "CERTIFICAZIONE UNICA 2024 - RIEPILOGO RITENUTE ELABORATE" con colonne NR, Codice Fiscale/Partita IVA, Matricola, Lotto, Cod. Class., Imponibile, Riten. (Acconto), Riten. (Imposta), Esente Esente, Rit. Prev. C/Ente, Rit. Prev. C/Dip, e colonne Importi per Indennità Lotto, Altre Ind. Lotto, Ris. Danno Lotto, Interessi Lotto]

---

## 4. STAMPA CERTIFICAZIONI

Percorso menu: `180. Servizi Economici` → `50. Ritenute` → `40. Certificazione Unica` → `20. Stampa Modello Sintetico (Da consegnare ai percipienti)`

Per procedere alla stampa si deve premere **'Estrai'** dopo aver compilato i campi obbligatori:

- **Mail**
- **Cognome, nome e codice fiscale**

[Immagine: Videata "Certificazione unica Modello Sintetico" con sezioni Dati Ente, Dati Firmatario comunicazione, Dati intermediario, e campi di selezione (Modo Selezione x Data, Selezione Soggetto, Tipo Ordinamento, Riepilogo ritenute stampate, Selezione Fornitori)]

Dopodiché fare **"Estrai"**.

In questo modo vengono elencate le certificazioni da stampare come da videata seguente:

[Immagine: Videata "Elenco percipienti" con colonne Nr. Riga, Cod. Fiscale/Sociale, Cognome e Nome, SEL, Tipo Invio, Nr. Prot.Entratel, Prog. Cu. Entratel, Cau, Cod. Esen, Cat. Partic, Eventi Ecc., C. Fisc. Ente Previd., Rag. Sociale Ente Previd., Cod. Azienda, Categ., Rif.]

**Verificare:**

1. Che la colonna **causale** sia valorizzata correttamente (per redditi di lavoro autonomo/assimilati). Per agevolare il controllo è possibile cliccare sul titolo della colonna stessa ed averne l'ordinamento alfabetico. Se si devono fare delle modifiche, fare le modifiche sui documenti di spesa e rieseguire il programma di stampa.
2. Per ritenute **INPS** nel caso si debba compilare la sezione dei dati previdenziali inserire i dati dell'ente previdenziale a cui è stato fatto il versamento (per dettagli consultare le istruzioni per la compilazione della certificazione unica).
3. Se necessario, compilare il campo **Categorie Particolari** (per dettagli consultare le istruzioni per la compilazione della certificazione unica).
4. Se necessario, compilare il campo **Eventi eccezionali** (per dettagli consultare le istruzioni per la compilazione della certificazione unica).

Infine, premere **'Stampa'** per stampare le certificazioni.

> **NOTA:** Le certificazioni stampate vengono anche salvate nel documentale (in tal caso occorre cliccare su **"stampa definitiva"**).

---

## 5. CREAZIONE FLUSSO DA INVIARE ALL'AGENZIA DELLE ENTRATE

Percorso menu: `180. Servizi Economici` → `50. Ritenute` → `40. Certificazione Unica` → `30. Creazione Flusso da inviare ad Entratel`

Cliccare il pulsante **Estrai**.

Premendo **'Estrai'**, come per la funzione di stampa, viene visualizzato l'elenco delle certificazioni pronto per essere inserite nel flusso.

Premendo **'Crea'** verrà creato il flusso nella cartella specificata. Tale flusso dovrà essere spedito come da istruzioni dell'Agenzia delle Entrate.

[Immagine: Videata "Elenco percipienti" con pulsante "Crea" evidenziato e colonne Nr. Riga, Cod. Fiscale/Sociale, Cognome e Nome, SEL, Tipo Invio, Nr. Prot.E, Prog. Cu. E, CAU, Cod. Esen, Cat. Partic, Eventi Ecc., C. Fisc. Entr., Rag. Sociale, Cod. Azien., Categ., Rif., Prev. C/Dip, C/Fisc. Ente, Prog. St]

---

## 6. COMUNICAZIONE CON LETTERA PERSONALIZZATA

È stata implementata su CWOL la possibilità di stampare il modello 770 – Certificazioni a fornitori.

Il parametro necessario da impostare sulla tabella delle ritenute affinché venga prodotta tale stampa è **"Comunicazione a fornitori" = "Lettera personalizzata"** (Esempio ritenuta 1045).

[Immagine: Videata di modifica ritenuta con codice tributo "1045", descrizione "Contributi a imprese 1045", sezione "Parametri per certificazioni annuali" con campo "Comunicazione ai fornitori" impostato su **"Lettera personalizzata"**]

Il punto a Menù da seguire per effettuare la stampa è il seguente:

Percorso menu: `180. Servizi Economici` → `50. Ritenute` → `30. Stampa Comunicazione ai fornitori delle ritenute operate`

[Immagine: Videata di stampa con campi Modo Selezione x Data, Data Emissione Mandato, Tipo ritenuta da stampare (IRPEF), Selezione Fornitori, Tipo Ordinamento, Selezione Soggetto, Riepilogo ritenute stampate, Codice Testo, Data stampa, e pulsanti Stampa / Stampa Definitiva]

---

## 7. ANNULLO/SOSTITUZIONE CERTIFICAZIONI INVIATE

In questo paragrafo vengono descritte le operazioni da fare per annullare e/o sostituire delle certificazioni già inviate ed **acquisite** dall'Agenzia delle Entrate.

Per procedere con l'operazione è necessario essere in possesso del **numero protocollo** rilasciato dall'Agenzia delle Entrate relativo alle certificazioni da annullare/sostituire.

[Immagine: Documento "AGENZIA DELLE ENTRATE - Certificazione Unica - ELENCO CERTIFICAZIONI ACQUISITE E/O SCARTATE" con colonne Esito, Protocollo telematico, Progressivo certificazione, Codice fiscale percipiente]

Per procedere con l'annullo/sostituzione, eseguire il programma di **creazione flusso** e nella videata che elenca le certificazioni da includere nel flusso:

[Immagine: Videata "Certificazione unica - Crea flusso" con Elenco percipienti e colonna "Tipo Invio" con menu a tendina contenente opzioni: Primo Invio, Annulla, Sostituzione]

Effettuare le seguenti operazioni:

1. Selezionare il percipiente di cui si vuole fare l'annullamento e/o la sostituzione
2. Scegliere il tipo di operazione (**Annulla** / **Sostituzione**)
3. Riportare il **numero protocollo** e il **progressivo certificazione** assegnato dall'Agenzia delle Entrate

> **Nota sulla creazione dei flussi:** Entratel **non accetta** flussi contenenti sia annulli/sostituzioni che invio di prime certificazioni.

---

## 8. CASI PARTICOLARI

### 8.1 Compensi non assoggettati a ritenuta d'acconto

Nel caso si abbia la casistica di corrisposti ai soggetti che applicano in regime fiscale di vantaggio per l'imprenditoria giovanile e lavoratori in mobilità, previsto dall'articolo 27 D.L. 98/2011 (c.d. **"CONTRIBUENTI MINIMI"**).

Caricare nella tabella ritenute un codice ritenuta apposita come da esempio sottostante:

[Immagine: Videata di modifica ritenuta con codice tributo "MIN", descrizione "Certificazione minimi", Tipo ritenuta IRPEF, Aliquota 0,00%, sezione "Certificazione unica lavoro Autonomo" con Tipo Ritenuta "A titolo di acconto (Casella 9)" e Tipo Esente "Altre somme esenti (Casella 7)"]

Richiamare in modifica da **'Documenti spesa'** la fattura e riportare il codice creato sia sulla parte **'Ritenute iniziali'** (fig.1) che sulla parte **'ritenute liq'** (fig.2) facendo attenzione in quest'ultima parte di indicare la **data pagamento**.

[Immagine: Videata documento di spesa con tabella ritenute contenente codici 40 (ritenuta) e 94 (Cassa), e finestra "Ritenute liquidazione" con riga "Altre ritenute" con imponibile 12,00]

### 8.2 Inserimento di un percipiente non agganciato ad un pagamento presente in contabilità

In questo caso è necessario creare un apposito **'tipo documento'** e caricare poi un documento in documenti spesa.

**Procedere in questo modo:**

Aprire il programma **'tipi documenti e causali operative'** presente nella maniera sottoindicata:

Percorso menu: `180. Servizi Economici` → `20. Strutturali` → `120. Tipi di documenti contabili e causali operative`

Fare **'Nuovo'** e compilare la videata come da esempio sottostante:

[Immagine: Videata "Tipi di documenti contabili e causali operative" con Codice tipo documento "29", Descrizione "Inserimento solo ritenute", Documento di movimento "Uscita", Segno movimento "Positivo", e checkbox "Valido solo per ritenute" spuntata]

Procedere poi alla registrazione di un **'Documento di spesa'** usando il tipo documento appena creato e facendo attenzione ad inserire come **data registrazione** la data in cui il compenso è stato erogato.

[Immagine: Videata "Documenti Uscita" con Data di registrazione, Tipo documento "29 - Inserimento solo ritenute", sezione Impegno con campo Impegno e Capitolo]

Procedere alla registrazione della **testata** e del **dettaglio ritenute** (in particolare ricordare di valorizzare anche il campo **"Data pagamento"** inserendo una data compresa nell'esercizio corrente).

[Immagine: Videata documento di spesa con tabella ritenute contenente codice 40 "ritenuta 1040 (A)", imponibile 100,00, ritenute a carico beneficiario 20,00, totale ritenute 20,00, e colonna "Data Pagamento" evidenziata]