# Manuale per Invio Avvisi di Pagamento

**Software:** Modulo CWOL FINANCING

---

## 1. Configurazioni

Per poter utilizzare la funzione "Invio Avvisi di Pagamento/Riscossione" dai moduli "Gestione Mandati/reversali" è necessario configurare i seguenti parametri:

- Testo base;
- Parametri mail;
- Cliente/fornitore.

### 1.1 Configurazione Testo Base

Dal menù:

**Servizi economici → Tabelle → Configurazioni → Testi e default per stampe parametriche**

[Schermata del menu di navigazione con percorso evidenziato: Servizi Economici → Tabelle → Configurazioni → Testi e default per stampe parametriche]

Impostare, se non presente, i testi di default per l'invio degli avvisi cliccando sulla lentina e selezionando il testo corretto.

[Schermata "Testi e Default per stampe parametriche" con i campi "Testo per avvisi di Riscossione" e "Testo per avvisi di Pagamento" evidenziati in rosso]

Successivamente scegliere la modalità con cui il programma deve operare:

- **"Mista"**: se si vogliono inviare sia le mail che creare il PDF dell'avviso;
- **"Solo invio Mail"**: se si vuole soltanto inviare la mail dell'avviso ai soggetti che hanno specificato l'indirizzo.

[Schermata "Testi per avvisi di pagamento e riscossione" con il menu a tendina "Tipologia Invio avvisi" impostato su "Mista"]

### 1.2 Configurazione Parametri Mail

Successivamente impostare i parametri per l'invio della mail andando su:

**Servizi economici → Modulo Base → Tabelle generali → Parametri e-mail → Parametri e-mail.**

[Schermata del menu di navigazione con percorso evidenziato: Servizi Economici → Modulo Base → Tabelle generali → Parametri E-mail]

I dati obbligatori da inserire sono:

- **Contesto applicativo** → valorizzare con «avviso di pagamento»
- **Area** → valorizzare con «servizi economici»
- **Modo invio email** → è suggerito valorizzare con «account». In tal caso è necessario specificare l'account (sullo specifico campo «account») con il quale verrà effettuato l'invio delle mail. Il programma automaticamente, cliccando sulla lentina, vi proporrà tutti gli account configurati nell'applicativo.
- **Oggetto** → indicare l'oggetto di default della mail (es. Avviso di pagamento)
- **Corpo** → scrivere il corpo che comporrà la mail (es. In allegato l'avviso di pagamento)

Infine, fare **«Aggiungi»**.

[Schermata "Parametri E-mail" con i campi Contesto applicativo, Area, Modo invio email, Oggetto e Corpo evidenziati]

### 1.3 Configurazione Cliente/Fornitore

Affinché l'avviso venga inviato correttamente è necessario che sull'anagrafica del soggetto a cui è riferito il mandato sia presente la mail e il campo **«tipo spedizione»** sia impostato su **«e-mail»**.

[Schermata anagrafica soggetto con tab "Recapiti" evidenziata, campo "Indirizzo e-mail" e "Tipo Spedizione" impostato su "e-Mail"]

---

## 2. Modalità Operativa

Dal menu:

**Servizi economici → Finanziaria → Uscita → Gestione Mandati**

[Schermata del menu di navigazione con percorso evidenziato: Servizi Economici → Finanziaria → Uscita → Gestione Mandati]

Una volta ottenuto l'elenco, selezionare i mandati che si desidera inviare (uno o più) e cliccare su **«invia Avviso di pagamento»**.

[Schermata "Gestione Mandati" con elenco mandati e pulsante "Invia Avvisi di pagamento" evidenziato]

Il programma proporrà un'ulteriore maschera in cui l'utente potrà scegliere se:

- Inviare solamente le mail
- Creare solo il PDF dell'avviso
- Entrambe

> **N.B.** = L'invio delle mail verrà effettuato solamente per quei soggetti che hanno specificato l'indirizzo e che hanno come modalità di spedizione «MAIL»; il PDF verrà creato se il soggetto ha configurata come modalità di spedizione = "Carta".

[Schermata di scelta modalità invio con tre pulsanti: "Solo Stampa", "Solo Invio", "Entrambe" e "Annulla"]

### Attenzione!

- Se si seleziona un **solo mandato**, il programma propone la schermata dell'invio, dove si può visualizzare in anteprima l'avviso in formato PDF.
- Se si seleziona **più di un mandato**, il programma non effettua un'anteprima dell'allegato ma procede subito con l'operazione di invio, al termine della quale verrà dato il messaggio "Elaborazione terminata".
- Se nell'anagrafica del soggetto **non è presente la mail** o il campo «tipo spedizione» **non è impostato correttamente**, il programma non effettua nessuno invio.

[Schermata "Invio avvisi di pagamento" con anteprima PDF e campi Oggetto, Corpo, e pulsante "Conferma"]

Al termine dell'operazione, in tutti i mandati il cui avviso di pagamento è stato inviato, verrà aggiunta l'iconcina della mail.

Per gli avvisi di riscossione valgono le stesse configurazioni e le stesse modalità operative lato entrate.