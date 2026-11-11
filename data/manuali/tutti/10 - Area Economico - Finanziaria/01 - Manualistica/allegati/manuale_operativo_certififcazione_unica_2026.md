# MANUALE TAB CWOL 2026

## Note informative Certificazione Unica 2026

Il presente documento elenca le fasi operative da adottare per assolvere agli adempimenti riguardanti la stampa e creazione del flusso per la **certificazione unica 2026** - redditi di lavoro dipendente/assimilati, lavoro autonomo/provvigioni, indennità di esproprio e locazioni brevi.

---

## 1. NOVITÀ 2026

Per il periodo d'imposta 2025, i sostituti d'imposta utilizzano la Certificazione unica 2026 (CU) per attestare i redditi di lavoro dipendente e assimilati, i redditi di lavoro autonomo, provvigioni e redditi diversi nonché i corrispettivi derivanti dai contratti di locazioni brevi.

- La Certificazione unica va rilasciata al percettore delle somme, utilizzando il modello **"sintetico"** entro il **16 marzo 2026**. Entro quella stessa data deve essere effettuata, in via telematica, la trasmissione all'Agenzia delle Entrate, utilizzando il modello **"ordinario"**.

- La trasmissione telematica all'Agenzia delle entrate delle certificazioni contenenti **esclusivamente redditi** che derivano da prestazioni di lavoro autonomo rientranti nell'esercizio di arte o professione abituale ovvero alle provvigioni per le prestazioni non occasionali inerenti a rapporti di commissione, di agenzia, di mediazione, di rappresentanza di commercio e di procacciamento di affari deve avvenire entro il **30 aprile 2026**.

- La trasmissione telematica delle certificazioni uniche contenenti esclusivamente redditi esenti o non dichiarabili mediante la dichiarazione dei redditi precompilata, può avvenire entro il termine di presentazione della dichiarazione dei sostituti d'imposta, ossia entro il **2 novembre 2026** (il termine ordinario del 31 ottobre cade di sabato).

---

## 2. IMPOSTAZIONE DI BASE

> **N.B.** Tutte le operazioni vanno effettuate accedendo come anno contabile **2025**

### 2.1 Come cambiare anno contabile

Cliccare su **"Es. Contabile 2026"**: si aprirà una nuova schermata. Nella sezione "Selezione anno contabile", impostare l'anno **2025**.

[Schermata: pulsante "Es.Contabile 2026" nella barra in alto a sinistra]

[Schermata: finestra "Gestione parametri base" con campo "Selezione anno contabile" impostato su 2025, pulsante "Applica"]

---

## 3. CONTROLLI E VERIFICHE

### 3.1 Come verificare le tipologie di ritenute utilizzate

Dal menù delle ritenute effettuare la stampa del **"Riepilogo ritenute nel periodo"** specificando il codice e il tributo della ritenuta, utile per elencare i codici di ritenute utilizzate.

**Percorso menù:** `180. Servizi Economici` → `50. Ritenute` → `70. Stampa Riepilogo ritenute nel periodo`

Selezionare le ritenute **Irpef** e (qualora siano gestite) anche le ritenute **INPS**.

[Schermata: finestra di configurazione con Periodo (Dal Mese/Al Mese), Provenienza, Tipo ritenute da stampare con checkbox IRPEF e INPS selezionate, sezione Riepilogo con "Riepilogo per codice ritenuta" e "Riepilogo per codice tributo"]

Nell'ultima pagina del report vengono elencati i codici ritenuta utilizzati nell'esercizio consentendo di determinare i codici da aggiornare.

**Esempio di output - Riepilogo ritenute da Gennaio a Dicembre:**

| Riepilogo per tributo | Quota esente | Iva | Imponibile | Ritenuta | Detrazioni |
|---|---|---|---|---|---|
| 1040 | 36.519,03 | 25.924,60 | 159.501,93 | 24.595,58 | 0,00 |
| | 12,00 | 0,00 | 12,00 | 0,00 | 0,00 |
| 1045 | 0,00 | 0,00 | 79.067,61 | 3.162,71 | 0,00 |
| **TOTALI** | | | Quota esente: 36.531,03 | | |
| | | | Imponibile: 238.581,54 | | |
| | | | Iva: 25.924,60 | | |
| | | | Totale lordo: 276.368,13 | | |
| | | | Ritenute: 27.759,29 | | |
| | | | Detrazioni: 0,00 | | |

| Riepilogo per ritenuta | Quota esente | Iva | Imponibile | Ritenuta | Detrazioni |
|---|---|---|---|---|---|
| 40 - ritenuta 1040 (A) | 0,00 | 25.924,60 | 122.982,90 | 24.595,58 | 0,00 |
| 44 - IRPEF REGIME FORFETTARIO | 36.519,03 | 0,00 | 36.519,03 | 0,00 | 0,00 |
| 1 - Spese esenti ex art. 15 | 12,00 | 0,00 | 12,00 | 0,00 | 0,00 |
| 45 - Contributi a imprese 1045 | 0,00 | 0,00 | 79.067,61 | 3.162,71 | 0,00 |

---

### 3.2 Come modificare i codici delle ritenute

**Percorso menù:** `180. Servizi Economici` → `90. Tabelle` → `50. Ritenute`

Selezionare la ritenuta da modificare (pulsante "Modifica").

[Schermata: tabella "Ritenute" con colonne Cod.Rit., Cod.Trib., Descrizione ritenuta, Tipo Ritenuta, Aliquota, % ass. lordo, % sul benef.]

Entrare in modifica del **tipo ritenuta** e porre attenzione ai seguenti campi:

- **"Comunicazione ai fornitori"**: parametro necessario per la compilazione della CU con quel codice ritenuta

[Schermata: sezione "Parametri per certificazioni annuali" con campo "Comunicazione ai fornitori" impostato su "Modello 'Certificazione unica'"]

Per quanto riguarda i codici di ritenute **non rientranti nella CU** (ad esempio il codice 45) il tipo comunicazione va impostato con **lettera personalizzata**.

> **Consiglio:** Copiare le impostazioni nei codici ritenute, verificandoli dall'esercizio precedente (2024).

---

### 3.3 Come modificare la tipologia di Ritenuta Regime Forfettari per non effettuare l'invio della CU

Con l'approvazione del **Decreto Legislativo n. 1/2024**, il sistema fiscale italiano è stato semplificato con una misura attesa da tempo: dal **2025** i contribuenti in regime forfettario e di vantaggio **non riceveranno più la Certificazione Unica (CU)** dai loro committenti. Questo cambiamento si inserisce nel più ampio processo di digitalizzazione e semplificazione degli adempimenti fiscali, già avviato con l'introduzione della fatturazione elettronica obbligatoria per i forfettari dal 1° gennaio 2024.

Per non effettuare l'invio delle comunicazioni ai forfettari modificare l'impostazione della ritenuta selezionando il parametro come di seguito:

[Schermata: sezione "Parametri per certificazioni annuali" con campo "Comunicazione ai fornitori" impostato su **"Non previsto"**]

---

### 3.4 Aggiornamento codici ritenute previdenziali – INPS

Il modello della certificazione unica prevede apposite caselle per l'esposizione delle ritenute previdenziali.

Nelle istruzioni per la compilazione viene indicato che in questa sezione **si deve indicare l'importo dei contributi previdenziali dovuti** in relazione ai redditi contrassegnati al punto 1 dal codice **"C"** nonché ai redditi annui superiori a euro 5.000 derivanti dalle attività contrassegnate al punto 1 dai codici **"M"**, **"M1"** e **"V"** (vedi elenco parziale della tabella causali):

- **C)** Utili derivanti da contratti di associazione in partecipazione e da contratti di cointeressenza, quando l'apporto è costituito esclusivamente dalla prestazione di lavoro
- **M)** Prestazioni di lavoro autonomo non esercitate abitualmente
- **M1)** Redditi derivanti dall'assunzione di obblighi di fare, di non fare o permettere
- **V)** Provvigioni corrisposte a incaricato per le vendite a domicilio; provvigioni corrisposte a incaricato per la vendita porta a porta e per la vendita ambulante di giornali quotidiani e periodici (L. 25 febbraio 1987, n. 67)

In presenza di ritenute inserite con tali causali, si devono verificare i codici ritenuta utilizzati per evidenziare le ritenute previdenziali (nell'esempio il codice 82) ed impostare il **flag tipo comunicazione uguale a 2** (come indicato nella fase precedente).

A questo punto occorre verificare le singole liquidazioni per verificare che ogni rigo di ritenuta previdenziale sia associato alla **stessa causale** del corrispondente rigo di Irpef.

[Schermata: tabella ritenute con colonne Codice Ritenuta, Descrizione Ritenuta, Imponibile, Ritenute a carico beneficiario, Ritenute a carico ente, Totale Ritenute, Esente, Detrazioni]

> ⚠️ **N.B.** Se in un documento sono presenti due ritenute, di cui una INPS, per essere riportate correttamente nella CU, le ritenute INPS devono essere impostate con la **stessa configurazione** delle altre ritenute presenti nel documento.

---

### 3.5 Aggiornamento modalità di compilazione parte espropri

Compilazione del modello per la parte degli espropri. Il programma della compilazione della CU separa le somme che vengono indicate nelle colonne **131** relative agli espropri e **135** relative al risarcimento del danno con la personalizzazione della tabella ritenute.

[Schermata: modifica ritenuta con Codice tributo per ritenuta "52", Descrizione "Indennità di esproprio", sezione "Dati per 770" con Codice quadro "5R - Indennità di esproprio" e menu a tendina "Espropri - Tipo Imponibile" con opzioni: Indennità di esproprio, Altre indennità, Risarcimento del danno, Interessi]

Si riporta di seguito l'immagine del modello interessato e le istruzioni relative.

[Diagramma: Sezione "Somme corrisposte a titolo di indennità di esproprio, altre indennità e interessi" con colonne: INDENNITÀ DI ESPROPRIO E RISARCIMENTO DEL DANNO (Somme corrisposte 131, Ritenute operate 132) e ALTRE INDENNITÀ E INTERESSI (Somme corrisposte 133, Ritenute operate 134). Seconda riga: INDENNITÀ DI ESPROPRIO E RISARCIMENTO DEL DANNO (Somme corrisposte 135, Ritenute operate 136) e ALTRE INDENNITÀ E INTERESSI (Somme corrisposte 137, Ritenute operate 138)]

#### Somme corrisposte a titolo di indennità di esproprio

La sezione deve essere utilizzata per indicare le somme a titolo di indennità di esproprio e di somme percepite a seguito di cessioni volontarie nel corso di procedimenti espropriativi, nonché di somme comunque dovute per effetto di acquisizioni coattive conseguenti ad occupazioni d'urgenza, con riferimento ad aree destinate alla realizzazione di opere pubbliche o di infrastrutture urbane all'interno di zone omogenee di tipo A, B, C e D di cui al D.M. 2 aprile 1968, definite dagli strumenti urbanistici ovvero ad interventi di edilizia residenziale pubblica ed economica e popolare di cui alla L. 18 aprile 1962, n. 167 (art. 11 L. 30 dicembre 1991, n. 413).

Dovranno inoltre essere indicate le somme corrisposte per occupazione temporanea, risarcimento danni da occupazione acquisitiva, nonché le indennità di occupazione e gli interessi comunque dovuti (art. 11 L. 30 dicembre 1991, n. 413).

Nella sezione andranno indicate le suddette somme che siano state corrisposte nel 2019, indipendentemente dalla data del provvedimento sottostante.

- Nei **punti 131 e 135** indicare tutte le somme corrisposte a titolo di indennità di esproprio e di risarcimento del danno.
- Nei **punti 132 e 136** indicare l'ammontare delle ritenute operate a titolo di imposta nella misura del **20 per cento** (con facoltà del contribuente di optare, in sede di dichiarazione annuale dei redditi, per la tassazione ordinaria; nel qual caso la ritenuta si considera effettuata a titolo di acconto).
- Nei **punti 133 e 137** indicare tutte le somme corrisposte a titolo di altre indennità e di interessi.
- Nei **punti 134 e 138** indicare l'ammontare delle ritenute operate sulle somme corrisposte a titolo di altre indennità ed interessi.

---

### 3.6 Lista controllo ritenute pagate

Dal menù delle ritenute effettuare le seguenti stampe di controllo.

**Percorso menù:** `180. Servizi Economici` → `50. Ritenute` → `20. Lista di Controllo Ritenute pagate` e `80. Verifica Movimenti Ritenute`

#### Fase 1: Verifica movimenti ritenute

Eseguire il programma **verifica movimenti ritenute** (compilando la videata nella maniera seguente):

[Schermata: "Verifica Movimenti Ritenute" con checkbox "Abilita Verifica Ritenute Iniziali" (non spuntata), "Abilita Verifica Ritenute da liquidazioni pagate" (spuntata), Data Registrazione dal/al, Data Mandato dal 01/01/2024 al 31/12/2024]

#### Fase 2: Lista di controllo ritenute

Eseguire il programma **lista di controllo ritenute** (compilando la videata nella maniera seguente):

[Schermata: "Lista di controllo Ritenute Pagate" con "Selezione Soggetto" = "Fornitore su Documento", "Tipo ritenute da controllare" = "Irpef e previdenziali"]

---

### 3.7 Lista controllo percipienti

Lanciare la seguente stampa per ottenere la lista di controllo dei percepimenti per i quali verrà stampato il modello sintetico della Certificazione Unica:

**Percorso menù:** `180. Servizi Economici` → `50. Ritenute` → `40. Certificazione Unica` → `10. Stampa lista di controllo percipienti`

[Schermata: report "CERTIFICAZIONE UNICA 2024 - RIEPILOGO RITENUTE ELABORATE" con colonne: NR, Codice Fiscale/Partita Iva, Matricola, Lordo, Cau Cod.Riten, Imponibile, Riten. (Acconti)/Riten. (Imposta), Altro Esente, Ril. Prev. CE/Ente, Ril. Prev. C/Ente, Espropri (Indennità/Lordo/Interessi/Ritenute)]

---

## 4. STAMPA CERTIFICAZIONI

**Percorso menù:** `180. Servizi Economici` → `50. Ritenute` → `40. Certificazione Unica` → `20. Stampa Modello Sintetico (Da consegnare ai percipienti)`

Per procedere alla stampa si deve premere **'Estrai'** dopo aver compilato i campi obbligatori:

- Mail;
- Cognome, nome e codice fiscale;

[Schermata: "Certificazione Unica Modello Sintetico" con sezione Dati Ente (Descrizione, Cod. Fiscale, Cod. Attività, Indirizzo, Località, CAP, Provincia, Telefono, Mail), Dati Firmatario comunicazione (Cognome e Nome, Nome, Codice Fiscale, Codice Carica), Dati intermediario, Invio da intermediario, Modo Selezione x Data, Selezione Soggetto, Tipo Ordinamento, Riepilogo ritenute stampate (checkbox spuntata), Selezione Fornitori]

Dopodiché fare **"Estrai"**.

In questo modo vengono elencate le certificazioni da stampare.

[Schermata: "Elenco percipienti" con colonne: Nr.Riga, Codice Fiscale, Cognome e Nome/Ragione Sociale, SEL, Tipo Invio, Nr.-Prot.Entratel, Prog.Cu. Entratel, CAU, Cod. Esen.Cat. Part., Esenti Ecc., C.Fisc. Ente Previd., Rag. Sociale Ente Previd., Cod. Adenere, Categorie Part., Riep.]

**Verificare:**

1. Che la colonna **causale** sia valorizzata correttamente (per redditi di lavoro autonomo/assimilati). Per agevolare il controllo è possibile cliccare sul titolo della colonna stessa ed averne l'ordinamento alfabetico. Se si devono fare delle modifiche, fare le modifiche sui documenti di spesa e rieseguire il programma di stampa.
2. Per ritenute **INPS** nel caso si debba compilare la sezione dei dati previdenziali inserire i dati dell'ente previdenziale a cui è stato fatto il versamento (per dettagli consultare le istruzioni per la compilazione della certificazione unica).
3. Se necessario, compilare il campo **Categorie Particolari** (per dettagli consultare le istruzioni per la compilazione della certificazione unica).
4. Se necessario, compilare il campo **Eventi eccezionali** (per dettagli consultare le istruzioni per la compilazione della certificazione unica).

Infine, premere **'Stampa'** per stampare le certificazioni.

> **NOTA:** le certificazioni stampate vengono anche salvate nel documentale (in tal caso occorre cliccare su **"stampa definitiva"**)

---

## 5. CREAZIONE FLUSSO DA INVIARE ALL'AGENZIA DELLE ENTRATE

**Percorso menù:** `180. Servizi Economici` → `50. Ritenute` → `40. Certificazione Unica` → `30. Creazione Flusso da inviare ad Entratel`

Cliccare il pulsante **Estrai**.

Premendo **'Estrai'**, come per la funzione di stampa, viene visualizzato l'elenco delle certificazioni pronto per essere inserite nel flusso.

Premendo **'Crea'** verrà creato il flusso nella cartella specificata. Tale flusso dovrà essere spedito come da istruzioni dell'Agenzia delle Entrate.

[Schermata: "Elenco percipienti" con colonne: Nr.Riga, Codice Fiscale, Cognome e Nome/Ragione Sociale, SEL, Tipo Invio, Nr.-Prot. Entratel, Prog.Cu. Entratel, CAU, Cod. Esen.Cat. Part., Esenti Ecc., C.Fisc. Ente Previd., Rag. Sociale Ente Previd., Cod. Adenere, Categorie Part., Riep.Prev., C/OPerc., Prog.Si. Pulsanti: "Crea", "Seleziona Tutti", "Elimina Tutti", "Seleziona Righe Percipienti"]

---

## 6. COMUNICAZIONE CON LETTERA PERSONALIZZATA

È stata implementata su CWOL la possibilità di stampare il modello 770 – Certificazioni a fornitori.

Il parametro necessario da impostare sulla tabella delle ritenute affinché venga prodotta tale stampa è:

**"Comunicazione a fornitori" = "Lettera personalizzata"** (Esempio ritenuta 1045)

[Schermata: modifica ritenuta con Codice interno ritenuta "45", Codice tributo "1045", sezione "Parametri per certificazioni annuali" con "Comunicazione ai fornitori" = "Lettera personalizzata", Dati per 770 con Codice quadro "5F - Redditi di capitale, compensi per avviamento commerciale, contributi da enti pubbl."]

Il punto a Menù da seguire per effettuare la stampa è il seguente:

**Percorso menù:** `180. Servizi Economici` → `50. Ritenute` → `30. Stampa Comunicazione ai fornitori delle ritenute operate`

[Schermata: finestra di stampa con Modo Selezione x Data, Tipo ritenuta da stampare "IRPEF", Selezione Fornitori, Selezione Soggetto "Fornitore su documento", Riepilogo ritenute stampate (spuntato), Data stampa, pulsanti "Stampa" e "Stampa Definitiva"]

---

## 7. ANNULLO/SOSTITUZIONE CERTIFICAZIONI INVIATE

In questo paragrafo vengono descritte le operazioni da fare per annullare e/o sostituire delle certificazioni già inviate ed **acquisite** dall'Agenzia delle Entrate.

Per procedere con l'operazione è necessario essere in possesso del **numero protocollo** rilasciato dall'agenzia delle entrate relativo alle certificazioni da annullare/sostituire.

[Schermata: "ELENCO CERTIFICAZIONI ACQUISITE E/O SCARTATE" con colonne: Esito, Protocollo telematico, Progressivo certificazione, Codice fiscale percipiente. Esempio: esito "acquisito", protocollo "15022616101540969 000025", progressivo "00025"]

Per procedere con l'annullo/sostituzione, eseguire il programma di **creazione flusso** e nella videata che elenca le certificazioni da includere nel flusso:

Effettuare le seguenti operazioni:

1. Selezionare il percipiente di cui si vuole fare l'annullamento e/o la sostituzione
2. Scegliere il tipo di operazione (**Annullo** / **Sostituzione**)
3. Riportare il **numero protocollo** e il **progressivo certificazione** assegnato dall'Agenzia delle Entrate

[Schermata: "Elenco percipienti" con colonna "Tipo Invio" a menu a tendina con opzioni: "Primo Invio", "Annullo", "Sostituzione". Esempio: riga 2 con "Annullo" selezionato, campi Nr.-Prot.Entratel e Prog.Cu. Entratel da compilare]

> ⚠️ **Nota sulla creazione dei flussi:** Entratel **non accetta** flussi che contengono contemporaneamente annulli/sostituzioni e l'invio di prime certificazioni.

---

## 8. CASI PARTICOLARI

### 8.1 Compensi non assoggettati a ritenuta d'acconto

Nel caso si abbia la casistica di corrisposti ai soggetti che applicano in regime fiscale di vantaggio per l'imprenditoria giovanile e lavoratori in mobilità, previsto dall'**articolo 27 D.L. 98/2011** (c.d. "CONTRIBUENTI MINIMI").

Caricare nella tabella ritenute un codice ritenuta apposita come da esempio sottostante:

[Schermata: modifica ritenuta con Codice tributo per ritenuta "MIN", Descrizione "Certificazione minimi", Tipo ritenuta "IRPEF", Aliquota "0,00%", sezione "Parametri per certificazioni annuali" con "Comunicazione ai fornitori" = "Modello 'Certificazione unica'", Dati per 770 con Codice quadro "5C - Lavoro autonomo, provvigioni e redditi diversi", Causale quadro "A - Prestazioni di lavoro autonomo rientranti nell'esercizio di arte o professione"]

Richiamare in modifica da **'Documenti spesa'** la fattura e riportare il codice creato sia sulla parte **'Ritenute iniziali'** (fig.1) che sulla parte **'ritenute liq'** (fig.2) facendo attenzione in quest'ultima parte di indicare la **data pagamento**.

[Schermata: Documento di spesa con Importo lordo, Ritenute, Dettaglio Ritenute (spuntato), tabella ritenute con codice "MIN" e descrizione "Minimi"]

---

### 8.2 Inserimento di un percipiente non agganciato ad un pagamento presente in contabilità

In questo caso è necessario creare un apposito **"tipo documento"** e successivamente caricare il documento in **Documenti spesa**.

Procedere nel seguente modo:

Aprire il programma **"Tipi documenti contabili e causali operative"** seguendo il percorso indicato di seguito.

**Percorso menù:** `180. Servizi Economici` → `90. Tabelle` → `20. Strutturali` → `120. Tipi di documenti contabili e causali operative`

Fare **'Nuovo'** e compilare la videata come da esempio sottostante:

[Schermata: "Tipi di documenti contabili e causali operative" con Codice tipo documento "29", Descrizione "Inserimento solo ritenute", Documento di "Uscita", Segno movimento "Positivo", checkbox "Valido solo per ritenute" spuntata]

Procedere poi alla registrazione di un **'Documento di spesa'** usando il tipo documento appena creato e facendo attenzione ad inserire come **data registrazione** la data in cui il compenso è stato erogato.

[Schermata: "Documenti Uscita" con Data di registrazione, Tipo documento "29 - Inserimento solo ritenute", campi Impegno e Capitolo]

Procedere alla registrazione della testata e del dettaglio ritenute (in particolare ricordare di valorizzare anche il campo **"Data pagamento"** inserendo una data compresa nell'esercizio corrente).

[Schermata: Documento di spesa con tabella "Ritenute liquidazione" contenente: Codice Ritenuta "40", Descrizione "Ritenuta 1040 (A)", Imponibile, Ritenute a carico beneficiario, Ritenute a carico ente, Totale Ritenute, Esente, Detrazioni, IVA, **Data Pagamento** (campo evidenziato), Causale Modello 770 "5A"]