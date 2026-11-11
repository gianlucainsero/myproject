# TARI – Gestione della Tassa sui Rifiuti

## Manuale Operativo

---

## Premessa

La procedura di aggiornamento storico componenti permette di aggiornare la storicizzazione dei componenti famiglia del contribuente con il dato presente in anagrafe, ai fini dell'applicazione della relativa tariffa per il calcolo.

In particolare, questo programma consente di creare/aggiornare lo storico dei componenti famiglia sulle denunce dei contribuenti residenti reperendo i dati dall'Anagrafe.

Per ogni denuncia che risponde ai criteri di selezione, vengono cercate in Anagrafe eventuali variazioni al numero dei componenti del nucleo familiare intervenute nel periodo selezionato e in base a ciò vengono creati o aggiornati i numeri di componenti del nucleo familiare nei vari periodi.

**Se si utilizza CWOL PEOPLE**, il dato è già a disposizione dell'ufficio tributi che può procedere direttamente ad aggiornare lo storico componenti con la procedura di seguito descritta.

**Se si utilizza altro fornitore di anagrafe**, è necessario che sia avvenuto l'interscambio dati tra i due applicativi attraverso il popolamento, da parte del fornitore SW Anagrafe, dei file IMPANA e della relativa importazione in CWOL.

---

## 1.1 – Aggiornamento Storico Componenti

### Definizione parametri

La procedura di aggiornamento storico componenti va eseguita dal menù:

**Tributi → TARI → Elaborazioni da Anagrafe → Creazione Storico Componenti Famiglia su Denunce**

[Schermata: percorso di menu nel software CWOL – Tributi > TARI > Elaborazioni da Anagrafe > Creazione Storico Componenti Famiglia su Denunce]

Si aprirà la seguente videata in cui impostare i parametri:

[Schermata: videata "Creazione Storico Componenti Famiglia su Denunce" con i campi: Modalità (Simulazione/Aggiornamento), Archivio Precompilato, Tipo Cespite, Classe, Denunce Cessate dopo il, Variazioni Anagrafe Dal-Al, Controllo Livello Ubicaz., Denunce da Elaborare, Azzeera Stor. no Abit.Princip., Stampe da produrre]

---

#### Parametri disponibili

**Simulazione/Aggiornamento:** la simulazione produce solamente dei file di controllo (xls su "File Riepilogo"), ma non aggiorna effettivamente lo storico componenti, mentre l'aggiornamento, oltre a file di controllo, aggiorna realmente i dati dello storico componenti.

**Archivio Precompilato:** permette di elaborare solamente alcune matricole già individuate ed incluse in un archivio precompilato scelto e precedentemente creato. Indica quindi se i contribuenti per cui aggiornare lo storico componenti vanno reperiti da un archivio di soggetti precaricati. In questo caso, se si è scelto di reperire i contribuenti da un archivio di soggetti precompilato, selezionare tale archivio (attraverso la lentina) a cui aggiornare lo storico componenti. Tra i soggetti presenti nell'archivio precompilato, verranno effettivamente elaborati solo quelli che risultano presenti nell'Anagrafico Contribuenti Tributi con relativa denuncia del Tipo Cespite scelto. Quindi, se l'estrazione che aveva generato l'archivio precompilato era avvenuta secondo criteri che includevano anche soggetti non Contribuenti, tali soggetti verranno ignorati.

**Tipo Cespite:** indica il Tipo Cespite di un determinato Servizio di cui ai relativi intestatari della dichiarazione verrà aggiornato lo storico.

**Classe:** vanno selezionate le classi e gli usi per le cui relative denunce si vuole aggiornare lo storico componenti. Questo perché, in linea generale, **vanno identificate le sole denunce relative ad utenze domestiche** di cui aggiornare lo storico componenti (la tariffa non domestica non dipende dai componenti). È possibile spuntare anche le singole categorie d'uso per escludere o includere le relative denunce indipendentemente dalla classe di appartenenza (alcuni usi possono avere una tariffa fissa, non dipendente dai componenti).

**Denunce Cessate dopo il:** immettere la data a partire dalla quale verranno aggiornate le denunce cessate.

> **Es:** immettendo 31/12/2023, saranno aggiornate (oltre ovviamente alle denunce attive) le denunce cessate dopo il 31/12/2023, mentre quelle cessate entro quella data non saranno aggiornate. **Se non si specifica nessuna data, tutte le denunce, sia attive che cessate, verranno aggiornate.**

**Variazioni Anagrafe Dal-Al:** Sono le date iniziale e finale del periodo per cui reperire il numero componenti famiglia. Se sulla denuncia sono presenti nello storico componenti dei periodi anteriori al periodo indicato essi resteranno invariati, mentre eventuali periodi posteriori alla data iniziale immessa verranno sostituiti con quelli reperiti in Anagrafe.

---

#### Controllo Livello Ubicazione

| Opzione | Descrizione |
|---------|-------------|
| **Nessun Controllo** | Non viene effettuato nessun controllo tra l'ubicazione delle denunce e l'indirizzo di residenza attuale in Anagrafe |
| **Solo con numero civico esterno** | Il confronto tra ubicazione denunce e residenza Anagrafe viene fatto basandosi su Via, Numero civico e Sottonumero. Se risulta diversità, lo storico componenti non viene aggiornato. |
| **Con nr. esterno e nr. interno** | Il confronto tra ubicazione denunce e residenza Anagrafe viene fatto basandosi su Via, Numero civico, Sottonumero, Scala e Interno. Se risulta diversità, lo storico componenti non viene aggiornato. |

---

#### Denunce da Elaborare

| Opzione | Descrizione |
|---------|-------------|
| **Tutte** | Non viene effettuato alcun controllo sul flag di Aggiornamento Massivo Storico Componenti |
| **Solo Aggiornabili Massivamente** | Vengono elaborate solo le denunce aggiornabili massivamente, cioè quelle con il flag *No Aggiornamento Massivo* NON spuntato. |
| **Solo NON Aggiornabili Massivamente** | Vengono elaborate solo le denunce NON aggiornabili massivamente, cioè quelle con il flag *No Aggiornamento Massivo* spuntato. Questa opzione andrebbe selezionata solo in situazioni molto particolari. |

Per quanto riguarda il flag **"No Aggiornamento Massivo"** qui richiamato, questo è consultabile e gestibile all'interno della denuncia:

[Schermata: sezione "Dati Generali" della denuncia con il campo "No Agg.Massivo" evidenziato]

---

#### Azzeera storico NO Abitazione Principale

Specifica se, per le denunce NON impostate come Abitazione Principale, lo storico componenti va svuotato (nel caso non lo fosse già) invece di essere creato/aggiornato come per le denunce che sono Abitazione Principale.

L'indicazione di "Abitazione Principale" è consultabile e gestibile in denuncia alla sezione "dati generali" con apposito flag **"Abitazione Principale"**:

[Schermata: sezione "Dati Generali" della denuncia con il flag "Abitazione Principale" evidenziato]

---

#### Esempio di parametrizzazione

[Schermata: esempio di compilazione dei parametri con Tipo Cespite "TARES/TARI", Classe "1 - UTENZE DOMESTICHE" selezionata, Denunce Cessate dopo il "31/12/2023", Variazioni Anagrafe Dal "01/01/2023" Al "31/12/2024", Controllo Livello Ubicaz. "Nessun Controllo", Denunce da Elaborare "Solo Aggiornabili Massivamente"]

> **NB:** prima di avviare la Simulazione/Creazione andare sul **'+'** della scelta della classe ed espandere la videata indicando gli usi per cui procedere all'aggiornamento:

[Schermata: espansione della classe "1 - UTENZE DOMESTICHE" con gli usi: 1-ABITAZIONI, CANTINE; 2-PERTINENZE ETC; 3-PENS.ISSE RID. 70%]

---

### Simulazione/Aggiornamento storico numero componenti famiglia

Una volta scelti i parametri andare su **"Avvia Simulazione Storico Numero Componenti Famiglia"** (se si è selezionata la scelta 'Aggiornamento' il pulsante a destra si chiamerà **"Avvia Aggiornamento Storico Numero Componenti Famiglia"**).

Comparirà la seguente videata:

[Schermata: finestra "Calcolo Storico Componenti Famiglia" con tabella "Eventi Disponibili" contenente righe con Id, Messaggio, Data mod., Ora mod.]

A questo punto, posizionandosi sulla prima riga facendola diventare gialla, sotto comparirà l'elaborazione in corso:

[Schermata: finestra "Calcolo Storico Componenti Famiglia" con la prima riga evidenziata in giallo e in basso il "Dettaglio Evento" con messaggi tipo "Storico Componenti Inserito (Prog.sogg/Prog.den): 3163/3"]

Una volta terminata l'elaborazione verrà restituito il seguente messaggio:

[Schermata: finestra "Calcolo Storico Componenti Famiglia" con messaggio "Conclusione Positiva – Elaborazione in Simulazione Completata --> Nome File di riepilogo --> /dati/ita/Sviluppo/Tributi/BO/testi"]

---

### Visualizzazione dei file di riepilogo

Si può chiudere la videata con la crocetta in alto, dalla videata della definizione dei parametri andare sul pulsante **"Visualizza Files Riepilogo"** e poi su **"Scarica"**.

[Schermata: finestra "Visualizzatore Documenti" con elenco file "StoricoCompFamiglia_..." e pulsante "Scarica" evidenziato]

Il file xlsx verrà salvato nei download:

> 📄 `StoricoCompFamiglia_02022024_242384488_SIMU.xlsx`

---

### Struttura del file StoricoCompFamiglia

Il file `StoricoCompFamiglia` è strutturato secondo **tre prospetti**:

| Prospetto | Descrizione |
|-----------|-------------|
| **Componenti Ricalcolati** | Espone i soggetti e le denunce a cui è stato aggiornato lo storico componenti. |
| **Componenti Esistenti Ricalcolati** | Espone i soggetti e le denunce con la situazione preesistente dello storico componenti. |
| **Ubicazioni Diverse** | Espone l'elenco delle denunce non elaborate a motivo dell'ubicazione diversa dalla residenza attuale dell'Anagrafe (in questo caso ci sono probabili disallineamenti tra cambio di residenza in Anagrafe e data decorrenza della denuncia). |

---

### Consultazione dello storico aggiornato

Il dato dello storico componenti aggiornato è consultabile in denuncia, cliccando il bottone **"Storico"**:

[Schermata: sezione "Dati Generali" della denuncia con il pulsante "Storico" evidenziato]

Si aprirà la finestra "Storico Componenti" con la tabella dei periodi:

| Dal | Al | Componenti | Esterni | |
|-----|-----|-----------|---------|---|
| 09-04-2019 | 31-07-2019 | 3 | 0 | ✗ |
| 01-08-2019 | 31-12-2019 | 4 | 0 | ✗ |
| 01-01-2020 | 02-01-2021 | 4 | 0 | ✗ |
| 03-01-2021 | 07-07-2022 | 5 | 0 | ✗ |
| 08-07-2022 | | 6 | 0 | ✗ |

[Schermata: finestra "Storico Componenti" con tabella dei periodi e pulsanti "Chiudi" e "Calcola da APR"]