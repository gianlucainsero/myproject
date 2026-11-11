# Conservazione Fatture Elettroniche e RUF

**Software:** CWOL

---

## 1. Premessa

In questo manuale viene descritto come procedere con l'**invio in conservazione** dei seguenti documenti tramite Cityware:

- Fatture passive
- Fatture attive
- RUF

Attualmente è in corso lo sviluppo dell'invio in conservazione da CWOL, che si trova in **fase di test**.

### 1.1 Requisiti

Per poter effettuare l'invio in conservazione, l'utente deve essere in possesso della seguente autorizzazione:

- **BDG/4**

In assenza di questa autorizzazione, il sistema mostrerà un messaggio di errore.

[Immagine: messaggio di errore "Riversamento in sostitutiva BGD/4"]

In tal caso, è necessario richiedere l'abilitazione aprendo un ticket all'indirizzo 📧 cityfinancing@palitalsoft.it

---

## 2. Fase Operativa

### 2.1 Accesso al Modulo

Una volta effettuato l'accesso a Cityware, andare nel punto di menu:

**City-Base → Modulo Base**

[Immagine: menu laterale Cityware con la voce "CITY-BASE Modulo base" evidenziata]

Nella schermata successiva selezionare la voce: **Riversamento massivo documenti**

[Immagine: menu "Funzioni di servizio" con la voce "Riversamento massivo documenti" evidenziata]

### 2.2 Selezione Parametri di Invio

Nella finestra di riversamento:

1. **Selezionare il tipo documento** dall'apposito elenco (es. Fatture Passive, Fatture Attive, RUF).

   [Immagine: campo "Tipo documento" con menu a tendina contenente:
   - 1 - Fattura (Passiva) - Standard Parer
   - 2 - Fattura (Attiva) Standard Parer
   - 9 - Repertorio annuale (RUF) - PARER
   - 100 - PARER - Determine]

2. **Impostare la data fine elaborazione.**

   [Immagine: campo "Data fine elaborazione" con campo di input vuoto]

> **N.B.** Se, per esempio, è necessario inviare le fatture dell'anno 2024, è **fortemente raccomandato non impostare** come data di elaborazione il 31/12/2024, ma effettuare invii con un periodo massimo di **3 mesi per volta**.
>
> Questo perché, con un unico invio su un periodo troppo esteso, il programma può andare in errore.

### 2.3 Invio o Simulazione

Selezionare quindi una delle due modalità:

- **Invio**
  Esegue il processo e **invia effettivamente** i documenti in conservazione.

- **Simulazione Invio**
  Esegue l'intero processo di controllo, ma **non invia** alcun documento in conservazione. Utile per verificare eventuali anomalie prima dell'invio reale.

Una volta impostati i filtri desiderati, premere il pulsante:

**Effettua riversamento**

[Immagine: pulsante "Effettua riversamento"]

### 2.4 Verifica Documenti Selezionati

Dopo l'avvio dell'elaborazione, si aprirà una tabella con l'elenco dei **documenti trovati** per il periodo selezionato.

Da qui è possibile verificare che il numero e il tipo di documenti siano coerenti con le attese.

[Immagine: finestra "Riversamento massivo documenti" con indicatore "Versamento documenti in corso. 15/403"]

### 2.5 Esito Invio

Una volta che tutti i documenti sono stati elaborati/inviati, si aprirà una **schermata di esito**, in cui verrà indicato:

- esito positivo/negativo,
- eventuali errori riscontrati,
- eventuali documenti non inviati.

In presenza di **esiti negativi** o di errori durante la fase di invio o simulazione, è necessario aprire un ticket all'indirizzo:

📧 cityfinancing@palitalsoft.it