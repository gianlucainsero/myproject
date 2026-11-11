# Manuale per Invio Avvisi di Pagamento

**Software:** Modulo CWOL Financing

---

## 1. Configurazioni

Per poter utilizzare la funzione "Invio Avvisi di Pagamento/Riscossione" dai moduli "Gestione Mandati/reversali" è necessario configurare i seguenti parametri:

- Testo base;
- Parametri mail;
- Cliente/fornitore.

### 1.1 Impostazione dei testi di default

Dal menù:

**Servizi economici → Tabelle → Configurazioni → Testi e default per stampe parametriche**

[Schermata: menu a tendina con percorso Servizi Economici → Tabelle → Configurazioni → Testi e default per stampe parametriche]

Impostare, se non presenti, i testi di default per l'invio degli avvisi cliccando sulla lentina e selezionando il testo corretto.

[Schermata: finestra "Testi e Default per stampe parametriche" con i campi "Testi per avvisi di pagamento e riscossione" evidenziati in rosso: "Testo per avvisi di Riscossione" e "Testo per avvisi di Pagamento - cod.CwPag_005 → Avviso di pagamento"]

### 1.2 Scelta della modalità di invio

Successivamente scegliere la modalità con cui il programma deve operare:

- **"Mista"**: se si vogliono inviare sia le mail che creare il PDF dell'avviso;
- **"Solo invio Mail"**: se si vuole soltanto inviare la mail dell'avviso ai soggetti che hanno specificato l'indirizzo.

[Schermata: finestra "Testi per avvisi di pagamento e riscossione" con menu a tendina "Tipologia Invio avvisi" impostato su "Mista"]

### 1.3 Parametri e-mail

Successivamente impostare i parametri per l'invio della mail andando su:

**Servizi economici → Modulo Base → Tabelle generali → Parametri e-mail → Parametri e-mail.**

[Schermata: menu a tendina con percorso Servizi Economici → Modulo Base → Tabelle generali → Parametri e-mail]

I dati obbligatori da inserire sono:

- **Contesto applicativo** → valorizzare con «avviso di pagamento»
- **Area** → valorizzare con «servizi economici»
- **Modo invio email** → è suggerito valorizzare con «account». In tal caso è necessario specificare l'account (sullo specifico campo «account») con il quale verrà effettuato l'invio delle mail. Il programma automaticamente, cliccando sulla lentina, vi proporrà tutti gli account configurati nell'applicativo.
- **Oggetto** → indicare l'oggetto di default della mail (es. Avviso di pagamento)
- **Corpo** → scrivere il corpo che comporrà la mail (es. In allegato l'avviso di pagamento)

Infine, fare **«Aggiungi»**.

[Schermata: finestra "Parametri E-mail" con i campi Contesto applicativo, Area, Modo invio email, Oggetto e Corpo compilati]

### 1.4 Configurazione anagrafica Cliente/Fornitore

Affinché l'avviso venga inviato correttamente è necessario che sull'anagrafica del soggetto a cui è riferito il mandato sia presente la mail e il campo **«tipo spedizione»** sia impostato su **«e-mail»**.

[Schermata: anagrafica soggetto con tab "Contatti" evidenziata, campi "Indirizzo e-mail" e "Tipo Spedizione" impostato su "e-Mail"]

---

## 2. Modalità Operativa

### 2.1 Accesso alla Gestione Mandati

Dal menu:

**Servizi economici → Finanziaria → Uscita → Gestione Mandati**

[Schermata: menu a tendina con percorso Servizi Economici → Finanziaria → Uscita → Gestione Mandati]

### 2.2 Selezione dei mandati

Una volta ottenuto l'elenco, selezionare i mandati che si desidera inviare (uno o più) e cliccare su **«invia Avviso di pagamento»**.

[Schermata: elenco mandati con colonna di selezione e pulsante "Invia Avvisi di pagamento" evidenziato sulla barra laterale destra]

### 2.3 Scelta della modalità di invio

Il programma proporrà un'ulteriore maschera in cui l'utente potrà scegliere se:

- Inviare solamente le mail
- Creare solo il PDF dell'avviso
- Entrambe

**N.B.** = L'invio delle mail verrà effettuato solamente per quei soggetti che hanno specificato l'indirizzo e che hanno come modalità di spedizione «MAIL»; il PDF verrà creato se il soggetto ha configurata come modalità di spedizione = "Carta".

[Schermata: finestra di dialogo "Scegliere la modalità di invio degli avvisi" con tre pulsanti: "Solo Stampa", "Solo Invio", "Entrambe" e "Annulla"]

### 2.4 Note operative

**ATTENZIONE!**

- Se si seleziona un **solo mandato**, il programma propone la schermata dell'invio, dove si può visualizzare in anteprima l'avviso in formato PDF.
- Se si seleziona **più di un mandato**, il programma non effettua un'anteprima dell'allegato ma procede subito con l'operazione di invio, al termine della quale verrà dato il messaggio di conferma.
- Se nell'anagrafica del soggetto **non è presente la mail** o il campo «tipo spedizione» **non è impostato correttamente**, il programma non effettua nessuno invio.

[Schermata: finestra "Invio avvisi di pagamento" con campi Da, A, Allegato (PDF), Oggetto, Corpo e pulsante "Conferma"]

### 2.5 Conferma dell'operazione

Al termine dell'operazione, in tutti i mandati il cui avviso di pagamento è stato inviato, verrà aggiunta l'iconcina della mail.

[Schermata: messaggio "Elaborazione terminata" e icona email aggiunta nella colonna Mail dell'elenco mandati]

---

> Per gli avvisi di riscossione valgono le stesse configurazioni e le stesse modalità operative lato entrate.