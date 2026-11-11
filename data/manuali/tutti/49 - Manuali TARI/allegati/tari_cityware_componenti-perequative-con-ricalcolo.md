# TARI - Manuale Operativo: Componenti Perequative

## Premessa

Con l'introduzione di questa novità normativa conseguente alla **Delibera ARERA 386/2023** siamo intervenuti ad adeguare l'attuale applicativo Cityware.

Di seguito le indicazioni per le nuove impostazioni delle componenti perequative per la **copertura dei costi di gestione dei rifiuti accidentalmente pescati** e della **copertura delle agevolazioni riconosciute per eventi eccezionali e calamitosi**, che si applicano sia alle utenze domestiche che alle NON domestiche.

---

## 1.1 - Componenti Perequative

### Configurazione Tabella Altri Importi Bollettazione

Per configurare le componenti perequative procedere dal menù:

**Tabelle → Tributi → Altri importi Bollettazione**

[Schermata: menù Tabelle con sottomenù Tributi aperto, voce "Altri importi Bollettazione" evidenziata]

Si aprirà la seguente videata, da cui procedere scegliendo il **Tipo Cespite** e facendo **"Aggiungi"**:

[Schermata: finestra "CITY-TAX Definizione Altri Importi Bollettazione" con barra strumenti e pulsante Aggiungi evidenziato]

[Schermata: finestra di selezione Tipo Cespite con elenco: 1-TASSA RIFIUTI SOLIDI URBANI, 4-PASSI CARRAI, 6-PUBBLICHE AFFISSIONI, 7-PUBBLICHE AFFISSIONI LUTTO, 8-TARES/TARI (selezionato), 9-CANONE UNICO AFFISSIONI]

Entrando nel dettaglio possiamo vedere che oltre all'annualità, alla descrizione ed eventuale applicazione IVA (per ora esente), possiamo indicare l'importo. Inoltre vi è la possibilità di scegliere il **Metodo di Applicazione** della quota Altri Importi, in funzione della tipologia di calcolo.

[Schermata: finestra "CITY-TAX Definizione Altri Importi Bollettazione" con campi: Progressivo, Tipo Cespite (8-TARES/TARI), Anno di riferimento (2024), Descrizione Altri Importi, Aliquota IVA, Importo, Metodo Applicazione Altri Importi (dropdown con opzioni: Utente (Contribuente), Utenza (Denuncia) - NON GESTITO, Punto Conferimento), Tipo Calcolo, Disabilitato]

I singoli campi della configurazione hanno il seguente significato:

| Campo | Descrizione |
|-------|-------------|
| **Tipo Cespite** | Indica il Tipo Cespite di un determinato Servizio che prenderà in carico l'altro importo in fase di calcolo (nel nostro caso TARES/TARI) |
| **Anno di riferimento** | Anno di riferimento dell'Altro Importo |
| **Descrizione** | È possibile editare liberamente la descrizione da attribuire alla voce |
| **Aliquota IVA** | Fisso **ES** (esente IVA). Selezionare dalla lentina l'anno 2024, fare 'cerca' e scegliere 'ES' |
| **Importo** | Indica l'importo da inserire in bollettazione (per le perequative fisso **0,10** per UR1 e **1,50** per UR2) |
| **Metodo Applicazione** | Vedi dettaglio sotto |
| **Tipo Calcolo** | Vedi dettaglio sotto |

#### Metodo Applicazione:

- **Utente**: applica gli importi configurati ad ogni contribuente, presuppone il tipo calcolo 3 su intera annualità per forza (scegliendo questo metodo su Tipo Calcolo comparirà di default il 3)
- **Utenza**: su Cityware **NON** è gestito
- **Punto di conferimento**: applica gli importi configurati ad ogni denuncia in cui è presente il flag "Punto di conferimento" (vedere approfondimento sotto)

#### Tipo Calcolo:

1. **A giorni**: ripartisce per i giorni di validità della denuncia l'importo di ogni 'Altro Importo'
2. **A mesi**: ripartisce per i mesi di validità della denuncia l'importo di ogni 'Altro Importo'
3. **Su intera annualità**: riporta sull'intero anno, a prescindere che la denuncia sia chiusa; questa opzione per le perequative è da usare in caso di tipo Metodo Applicazione per Utente

---

### Configurazione IVA Esente 2024

**Aliquota IVA**: fisso **ES** (esente IVA). Selezionare dalla lentina l'anno 2024, fare 'cerca' e scegliere 'ES' come da videata sotto:

[Schermata: finestra "Aliquote IVA per anno" con elenco di aliquote per anno e pannello di Selezione con Anno=2024 e pulsante Cerca]

Nel caso in cui non si sia ancora aperta l'annualità 2024, facendo 'cerca' non si troverà nulla; procedere a inserire l'aliquota IVA di riferimento per l'anno: dalla videata andare su **'Aggiungi'**:

[Schermata: finestra "Aliquote IVA per anno" con pulsante Aggiungi evidenziato nella barra strumenti]

Compilare come sotto e fare **OK**:

[Schermata: finestra "Aliquote IVA per anno" con campi compilati: Anno=2024, Aliquota IVA=ES, Disabilitato non spuntato, pulsante OK evidenziato]

---

### Configurazione Codice Tributo

Dal menù: **Tabelle → Tributi → Codici Tributo**

[Schermata: menù Tabelle → Tributi con voce "Codici Tributo" evidenziata]

Si aprirà la seguente videata: cercare il tributo tramite la selezione descritta sotto e andare su **'Cerca'**:

[Schermata: finestra "CITY-TAX Codici Tributo" con barra strumenti e pannello di Selezione: Per Codice selezionato, Tipo Voce=Tutti, campo di ricerca con "UR", pulsante Cerca]

Se il tributo (come si presume) **NON** è presente andare su **Aggiungi**, compilare come sotto e fare **OK**:

**UR1:**

[Schermata: finestra "CITY-TAX Codici Tributo" con campi: Codice Tributo=UR1, Descrizione=COPERTURA DEI COSTI DI GESTIONE, Tipo Voce=T - Tributo da Riscuotere, Data Revisione=22-04-2024, Descrizione Competenza 1=UR1, Stampi Nr.Rata su F24 e Stampi Nr.Immobili su F24 non spuntati]

Seguire lo stesso procedimento per **UR2**:

[Schermata: finestra "CITY-TAX Codici Tributo" con campi: Codice Tributo=UR2, Descrizione=COPERTURA DELLE AGEVOLAZIONI, Tipo Voce=T - Tributo da Riscuotere, Data Revisione=22-04-2024, Descrizione Competenza 1=UR2]

---

### Inserimento Causali Atto

Dal menù: **Tabelle → Tributi → Altro → Causali Atti**

[Schermata: menù Tabelle → Tributi → Altro → Causali Atti evidenziato]

Si aprirà la seguente videata:

[Schermata: finestra "CITY-TAX Definizione Causali Atti Tributari" con elenco causali esistenti (1-OMESSA DENUNCIA, 2-INFEDELE DENUNCIA, 3-OMESSO VERSAMENTO, 1001-ERRORE DI CALCOLO, 1002-URGENZA LUTTO, 1003-AUTOTUTELA, ecc.)]

Andare su **'Aggiungi'** e compilare come sotto:

**UR1:**

| Campo | Valore |
|-------|--------|
| Codice Causale | 1006 |
| Descrizione | UR1 |
| Descrizione dettagliata | copertura dei costi di gestione dei rifiuti accidentalmente pescati |

[Schermata: finestra "CITY-TAX Definizione Causali Atti Tributari" con Codice Causale=1006, Descrizione=UR1, Descrizione dettagliata="copertura dei costi di gestione dei rifiuti accidentalmente pescati"]

**UR2:**

| Campo | Valore |
|-------|--------|
| Codice Causale | 1007 |
| Descrizione | UR2 |
| Descrizione dettagliata | copertura delle agevolazioni riconosciute per eventi eccezionali e calamitosi |

[Schermata: finestra "CITY-TAX Definizione Causali Atti Tributari" con Codice Causale=1007, Descrizione=UR2, Descrizione dettagliata="copertura delle agevolazioni riconosciute per eventi eccezionali e calamitosi."]

---

## 2.1 - Metodo Applicazione per Utente (annuale, senza gestione del tempo)

### Configurazione UR1

[Schermata: finestra "CITY-TAX Definizione Altri Importi Bollettazione" con: Tipo Cespite=8 TARES/TARI, Anno di riferimento=2024, Descrizione="Copertura dei costi di gestione dei rifiuti accidentalmente pescati", Aliquota IVA=ES, Importo=0.10, Metodo Applicazione=Utente (Contribuente), Tipo Calcolo=3]

### Configurazione UR2

[Schermata: finestra "CITY-TAX Definizione Altri Importi Bollettazione" con: Tipo Cespite=8 TARES/TARI, Anno di riferimento=2024, Descrizione="Copertura delle agevolazioni riconosciute per eventi eccezionali e...", Aliquota IVA=ES, Importo=1.50, Metodo Applicazione=Utente (Contribuente), Tipo Calcolo=3]

Con questa modalità, che consigliamo, la procedura produrrà al termine delle varie elaborazioni un documento dove le due quote perequative verranno indicate nel dettaglio del documento stesso come **"righe di ruolo"** e quindi imputate in un'unica volta, a prescindere dal numero e dalla tipologia di utenze a carico del contribuente per l'intero anno solare.

---

## Creazione Quote Perequative

### Gestione SINGOLA

Dal menù: **Gestione → Agevolazioni per Collaborazione Attiva**

[Schermata: menù Gestione con voce "Agevolazioni per Collaborazione Attiva" evidenziata]

Si aprirà la seguente videata contenente tutte le agevolazioni, qui si possono inserire le perequazioni per ogni singolo utente in modo puntuale.

Mettere l'anno **2024** (e/o anche il nome del contribuente a cui applicare le perequative), fare **'Cerca'** e se **NON** presenti, andare su **'Aggiungi'**:

[Schermata: finestra "CITY-TAX Agevolazioni per collaborazione attiva" con elenco vuoto e pannello di ricerca: Anno=2024, pulsante Cerca]

Dalla videata che si apre cercare il contribuente (se NON presente inserirlo come nuovo soggetto), riportarlo in videata e cercare dalla lentina il codice tributo precedentemente configurato:

[Schermata: finestra "CITY-TAX Agevolazioni per collaborazione attiva" con campi: Contribuente (lentina), Anno Emissione/Riferimento=2024, Tipo Agevolazione="Importo fisso a storno", Tipo Recupero Agevolazione="Riga dettaglio documento", Importo Fisso da Stornare=0,00, Aliquota IVA, Codice Tributo (lentina), Causale Atto]

Cercare i codici **UR1** e **UR2** già configurati:

[Schermata: finestra "CITY-TAX Codici Tributo" con risultati: UR1-COPERTURA DEI COSTI DI GESTIONE, UR2-COPERTURA DELLE AGEVOLAZIONI, Tipo Voce=T - Tributo da Riscuotere]

Con doppio click riportare il Codice tributo sulla videata e attraverso le lentine selezionare le informazioni, già inserite precedentemente, come sotto e fare **OK**:

[Schermata: finestra "CITY-TAX Agevolazioni per collaborazione attiva" compilata con: Anno=2024, Tipo Agevolazione="Importo fisso a storno", Tipo Recupero="Riga dettaglio documento", Importo Fisso da Stornare=0.10, Aliquota IVA=ES, Codice Tributo=UR1 COPERTURA DEI COSTI DI GESTIONE, Causale Atto=1006 UR1]

Dando OK comparirà la seguente domanda a cui va risposto **Sì**:

> **CITYWARE**: "L'importo da stornare dovrebbe avere segno negativo. Si è sicuri di volerlo memorizzare con segno positivo?"
>
> **[Sì]** [No]

Ripetere la stessa operatività per **UR2**:

[Schermata: finestra "CITY-TAX Agevolazioni per collaborazione attiva" compilata con: Importo Fisso da Stornare=1.50, Aliquota IVA=ES, Codice Tributo=UR2 COPERTURA DELLE AGEVOLAZIONI, Causale Atto=1007 UR2]

Ora il menù delle Agevolazioni risulta popolato per le perequative del contribuente singolo:

[Schermata: elenco agevolazioni con due righe: Riga dettaglio doc/Importo fisso a storn: 2024, 0, 0.10 e Riga dettaglio doc/Importo fisso a storn: 2024, 0, 1.50]

La quota potrà essere richiamata anche dai classici menù esistenti, ad esempio a partire da quello del **'Contribuente'**, presente in molte finestre dell'applicativo.

[Schermata: finestra "CITY-TAX Denunce Tributi" con menù contestuale del Contribuente aperto, voce "Agevolazioni collaborazione attiva" evidenziata]

---

### Gestione MASSIVA (da fare la prima volta all'avvio delle perequative)

Dal menù: **Gestione → Agevolazioni per Collaborazione Attiva**

[Schermata: menù Gestione con voce "Agevolazioni per Collaborazione Attiva" evidenziata]

Dalla videata che compare, anziché fare Aggiungi come nella gestione puntuale/singola, andare su **Creazione Pereq. massiva** (per popolare l'archivio):

[Schermata: finestra "CITY-TAX Agevolazioni per collaborazione attiva" con pulsante "Cr.Pereq." evidenziato nella barra strumenti]

Si aprirà la seguente videata: facendo un click su **'Cerca Importi Bollettazione'** i campi verranno in parte compilati, terminare la compilazione degli altri campi attraverso le lentine come sotto, e andare su **Creazione Perequazioni**:

[Schermata: finestra "CITY-TAX Creazione Componenti Perequative Tari" con: Tipo Cespite=8 TARES/TARI, Anno Riferimento=2024, pulsante "Cerca Importi Bollettazione", Importo Fisso Perequative=0.10, Aliquota IVA=ES, Codice Tributo=UR1 COPERTURA DEI COSTI DI GESTIONE, Causale Alto=1006 UR1, Importo Fisso Perequative=1.50, Aliquota IVA=ES, Codice Tributo 2=UR2 COPERTURA DELLE AGEVOLAZIONI, Causale Alto 2=1007 UR2, Export Formato Excel spuntato, pulsante "Creazione Perequazioni" evidenziato]

---

## 3.1 - Metodo Applicazione per Punto di Conferimento (con gestione del tempo)

Questa modalità più complessa permette ampio margine di manovra; l'applicazione delle relative quote/agevolazioni vengono imputate **per denuncia**, attraverso un nuovo apposito flag denominato **'Punto di conferimento'**.

In base alla presenza o meno di questo flag la procedura potrà calcolare la quota indicata in tabella, ripartendola in questo caso in funzione del tempo (cadenza giornaliera, mensile o altro).

Con questa opzione potremmo applicare tutti i criteri possibili, per ora ci siamo limitati ad individuare una procedura massiva che ci permetta di aggiornare il flag in funzione della categoria d'uso specifica.

### Punto di Conferimento

#### Associazione massiva

In caso di applicazione della componente perequativa con Metodo "Punto di conferimento" è possibile associare massivamente il flag "Punto di conferimento" alle denunce individuate secondo una certa classe/uso tariffaria.

L'associazione massiva dei "Punti di conferimento" si effettua dal menù: **Tributi → Classi**

[Schermata: menù Tabelle → Tributi → Classi]

Posizionarsi sulla classe di interesse e andare sull'icona indicata per aggiornare il Punto di conferimento:

[Schermata: finestra "CITY-TAX Definizione Classi Cespiti" con elenco classi (2024, 1-UTENZE DOMESTICHE, 2-UTENZE NON DOMESTICHE) e pulsante "Perequ..." evidenziato nella barra strumenti]

[Schermata: finestra di selezione con: Per Descrizione selezionato, Tipo Cespite=8-TARES/TARI, Anno=2024, "Vedo anche disabilitati" spuntato, pulsante Cerca]

Selezionare poi la categoria d'uso a cui associare il Punto di conferimento (o più di una); in generale il Punto di conferimento si associa agli usi **NON pertinenza**.

Andare su **'Aggiorna Flag'** per associare il Punto di conferimento:

[Schermata: finestra "CITY-TAX Aggiornamento Punto di Conferimento nelle Denunce" con elenco usi (ABITAZIONI CIVILI, CASE SPARSE LONTANE DAL PERIMETRO, ecc.), pannello Selezione con Tipo Cespite=8-TARES/TARI, Anno=2024, Classe=1, "Denunce cessate dopo il 31122023", pulsanti "Aggiorna Flag" (evidenziato) e "Elimina Flag"]

In caso di errori o ripensamenti è possibile anche procedere con **"Elimina Flag"**.

#### Associazione puntuale

È possibile attribuire alla denuncia il Punto di Conferimento anche puntualmente; entrare in denuncia in modifica e mettere il flag su **Punto di Conferimento**:

[Schermata: finestra "CITY-TAX Denunce Tributi" in modifica con flag "Punto di Conferimento" evidenziato nella sezione Dati]

Sulla base di quanto indicato in denuncia (quindi escludendo le denunce senza Punto di conferimento) gli importi verranno ripartiti in funzione del tempo, come detto inizialmente.

**Esempio di calcolo su denuncia cessata il 30/09/2024:**

[Schermata: elenco denunce con data cessazione 30-09-2024 evidenziata in giallo]

Gli importi sono inferiori a quelli della quota annua:

[Schermata: finestra "CITY-TAX Ruoli Riscossione Tributi" con importi perequativi ridotti: UR1=0.07, UR2=1.12 per denunce parziali rispetto ai valori annui di 0.10 e 1.50]

Terminata l'assegnazione del flag Punto di conferimento, procedere come sopra con la **creazione delle quote perequative (PUNTUALE O MASSIVA)** dal menu Agevolazioni (pag.10 o pag.14), per popolarlo.

Appena avvenuto l'inserimento come sopra, la fase successiva riguarderà la creazione dei documenti di riscossione per poter bollettare tali quote insieme a tutto ciò che veniva incluso in precedenza.

---

## Bollettazione

In fase di bollettazione dello specifico anno di riferimento, le voci degli Altri Importi vengono considerate in funzione dell'**Anno di riferimento** indicato in configurazione.

Nello specifico il calcolo avviene:

- In base al **Metodo Applicazione** definito in configurazione
- In base al **Tipo Calcolo** definito in configurazione

**Esempio di creazione del documento di riscossione:**

[Schermata: finestra "CITY-TAX Dettaglio Documento Riscossione" con: Emissione=1/2024/7 "Avvisi Bonari TARI 2024", Numero documento=1, Totale Documento=111,00, righe: 1-T-P-2024-3944-104,49-ES-5,22-109,71; 2-G-R-2024-UR1-0,10-ES-0,10; 3-G-R-2024-UR2-1,50-ES-1,50]

---

## 4.1 - Creazione e Ricalcolo Documento con Quote Perequative

### Creazione Nuovo Documento

Nell'inserimento di un nuovo utente e una nuova denuncia può risultare utile creare a corredo singolarmente/allo sportello il nuovo documento senza dover attendere l'elaborazione massiva.

Una volta inserita la nuova denuncia andare su **'Crea Documento'**:

[Schermata: finestra "CITY-TAX Denunce Tributi" con pulsante "Crea doc." evidenziato nella barra strumenti]

Scegliere l'emissione e a questo punto se la nuova denuncia **NON** è punto di conferimento o non è assoggettabile alla quota perequativa, è possibile operare come di consueto facendo OK e viene creato il documento:

[Schermata: finestra "CITY-TAX Creazione Documento Riscossione" con: Emissione=1/2024/2 "TARI 2024 + IUR", Data Creazione=11-07-2024, Nr.Rate=4, Anno Riferimento=2024, Tipo Metodo=1, ruoli da includere nel documento, pulsanti OK e "Crea Perequazioni"]

Diversamente occorre procedere inserendo la quota perequativa, per farlo andare su **Crea Perequazioni** (sia metodo calcolo per utente che per punto di conferimento):

[Schermata: finestra "CITY-TAX Creazione Documento Riscossione" con pulsante "Crea Perequazioni" evidenziato]

Dalla videata che si aprirà premere il pulsante in alto **Cr. Perequative**:

[Schermata: finestra "CITY-TAX Perequative Tari - Contribuente: ABBADINI EMIDIO Denuncia Nr. 1" con pulsante "Cr.Pereq." evidenziato nella barra strumenti]

Si aprirà la seguente videata: completarla dove necessario e poi premere il bottone **Creazione Perequazioni**:

[Schermata: finestra "CITY-TAX Creazione Componenti Perequative Tari - Contribuente: ABBA..." con: Tipo Cespite=TARI, Anno Riferimento=2024, pulsante "Cerca Importi Bollettazione", Importo Fisso Perequative=0.10, Aliquota IVA=ES, Codice Tributo=UR1, Causale Alto=1007 UR1, Importo Fisso Perequative=1.50, Aliquota IVA=ES, Codice Tributo 2=UR2, Causale Alto 2=1008 UR2, pulsante "Creazione Perequazioni" evidenziato]

Alla domanda rispondere **Sì**:

> **CityWare**: "ATTENZIONE!! Si sta per Creare importi per perequazioni Confermi?"
>
> **[Sì]** [No]

Verranno create le righe relative alle perequative:

[Schermata: finestra "CITY-TAX Perequative Tari - Contribuente: ABB..." con due righe create: Riga dettaglio doc/Importo fisso a storn: 2024, 1, 0.10 e Riga dettaglio doc/Importo fisso a storn: 2024, 1, 1.50]

Chiudere con la **'X'** per tornare alla videata precedente e fare **OK**:

[Schermata: finestra "CITY-TAX Creazione Documento Riscossione - Contribuente" con pulsante OK evidenziato]

Il documento risulta creato:

[Schermata: finestra "CITY-TAX Documenti Riscossione Tributi" con documento creato per ABB..., Serv=1, Anno=2024, Num=21962, Nr.Rate=4, Imp.Totale=77,00]

---

### Ricalcolo

Posizionarsi sulla denuncia riferita al documento già creato (denuncia cessata) e in alto andare su **Documento**:

[Schermata: finestra "CITY-TAX Denunce Tributi" con pulsante "Documento" evidenziato nella barra strumenti]

Dalla videata che si apre andare su **'Ricalcola'**:

[Schermata: finestra "CITY-TAX Documenti Riscossione Tributi" con pulsante "Ricalcola" evidenziato nella barra strumenti]

Nella videata che si aprirà mettere, in base all'operatività, la spunta su **semplice** o **con nota di credito**. Lasciare sempre il flag **'inclusione denunce non riscosse'** e fare click su **'Crea Perequazioni'**:

[Schermata: finestra "CITY-TAX Ricalcolo documento 21962" con: Modalità Ricalcolo="Con Nota di Credito" selezionato, Emissione=1/2024/2 TARI 2024+IUR, Causale Alto=0, Dati Documento Ricalcolato: Emissione=1/2024/2 TARI 2024+IUR, Differenza Minima=0.00, Tipo Metodo=1, "Inclusione Den. non Riscosse" spuntato, pulsante "Crea Perequazioni" evidenziato]

Dalla videata che si aprirà andare sul pulsante in alto **'Cr. Perequazioni'**:

[Schermata: finestra "CITY-TAX Perequative Tari - Contribuente: ABBADINI EMIDIO" con due righe esistenti e pulsante "Cr.Pereq." evidenziato]

Fare in basso **'Creazione Perequazioni'**:

[Schermata: finestra "CITY-TAX Creazione Componenti Perequative Tari - Contribuente:" con: Tipo Cespite=TARI, Anno Riferimento=2024, Importo Fisso Perequative=0.10, Aliquota IVA=ES, Codice Tributo=UR1, Causale Alto=1007 UR1, Importo Fisso Perequative=1.50, Aliquota IVA=ES, Codice Tributo 2=UR2, Causale Alto 2=1008 UR2, pulsante "Creazione Perequazioni" evidenziato]

Alla domanda rispondere **Sì**:

> **CityWare**: "ATTENZIONE!! Si sta RICALCOLANDO gli importi per perequazioni per il soggetto ABBADINI EMIDIO Confermi?"
>
> **[Sì]** [No]

Verranno disabilitate tutte le quote perequative presenti in precedenza (in questo caso le prime 2) e verranno ricalcolate quelle nuove:

[Schermata: finestra "CITY-TAX Agevolazioni per collaborazione attiva" con 6 righe: le prime 2 con Recupero in Doc.=21962 (disabilitate), le successive 4 con nuovi importi ricalcolati: 0.05, 0.75, 0.05, 0.75]

Chiudere con la **'X'**, tornare alla videata iniziale e dare **OK**:

[Schermata: finestra "CITY-TAX Ricalcolo documento 21962" con pulsante OK evidenziato]

Il documento risulta creato:

[Schermata: finestra "CITY-TAX Dettaglio Documento Riscossione" con: Emissione=1/2024/2 TARI 2024+IUR, Numero documento=21964, Totale Documento=99,00, righe: 1-T-P-2024-3944-57,21-ES-2,86-60,07; 2-G-R-2024-UR1-0,05-ES-0,05; 3-G-R-2024-UR2-0,75-ES-0,75; 4-G-R-2024-UR1-0,05-ES-0,05; 5-G-R-2024-UR2-0,75-ES-0,75]