# Manuale Associazione Accertamenti a Catalogo Efil

## 1. Caricamento Accertamento su Catalogo Efil

### 1.1 Accesso alla funzione

Dal menù:

**Servizi Economici → Finanziaria → Entrata → Accertamenti**

Inserire i parametri di ricerca e cliccare sul bottone **"Elenca"** dalla toolbar per visualizzare l'elenco degli accertamenti.

[Schermata: menu a cascata del software con percorso Servizi Economici > Finanziaria > Entrata > Accertamenti evidenziato]

[Schermata: pagina "Accertamenti" con campi di ricerca (Anno/Numero, Competenza/Residui/Pluriennali, Voce di Bilancio, Classificazione, Codice Identificativo GAE, Importo Iniziale da/a) e pulsante "Elenca" evidenziato in rosso]

### 1.2 Entrare in modifica dell'accertamento

Dalla paginazione cliccare sull'icona **matita** per entrare in modifica dell'accertamento da associare.

[Schermata: elenco accertamenti con colonna di modifica (icona matita) evidenziata]

### 1.3 Avviare il caricamento su Catalogo Efil

Per associare l'accertamento, cliccare sul bottone **"Caricamento accertamento su Catalogo Efil"** presente nella toolbar della schermata di modifica.

[Schermata: schermata di modifica accertamento con pulsante "Caricamento accertamento su Catalogo Efil" evidenziato in rosso nella toolbar a destra]

### 1.4 Selezione del Servizio Efil

Una volta cliccato il bottone "Caricamento accertamento su Catalogo Efil", si aprirà una nuova schermata con l'elenco dei servizi presenti su Efil. Nella toolbar sono presenti **2 bottoni** utilizzabili dopo aver selezionato un servizio tra quelli presenti nell'elenco:

- **Visualizza Accertamento/i Associati a Servizio**
- **Associa Accertamento/i a Servizio**

[Schermata: finestra "Caricamento accertamenti su Catalogo Efil" con elenco servizi (Codice Servizio, Descrizione Servizio) e i due pulsanti nella toolbar]

### 1.5 Visualizzare gli accertamenti associati a un servizio

Selezionando un Servizio e cliccando sul bottone **"Visualizza Accertamento/i Associati a Servizio"**:

Viene visualizzato un elenco con gli accertamenti attualmente collegati a quel servizio.

[Schermata: finestra "Accertamenti EFIL" con colonne Codice, Descrizione, Periodo, Attivo, Abilitato, Default]

### 1.6 Associare l'accertamento al servizio

Selezionando un Servizio e cliccando sul bottone **"Associa Accertamento/i a Servizio"**:

- Viene inserito l'accertamento sul catalogo Efil e associato al Servizio selezionato.
- Se l'accertamento era **già associato** al Servizio, viene visualizzata una segnalazione che l'operazione non può essere eseguita.

[Schermata: messaggio "Esito Associazione accertamento" con notifica "Accertamento associato correttamente"]

### 1.7 Verifica e modifica dei flag di associazione

Cliccando di nuovo sul bottone **"Visualizza Accertamento/i Associati a Servizio"**:

Viene visualizzato l'elenco con gli accertamenti associati a quel servizio e in particolare l'accertamento appena associato.

Nella stessa schermata è possibile modificare i flag:

- **Attivo**
- **Abilitato**
- **Default** ← il più importante

Il flag **"Default"** serve a definire quale accertamento deve essere utilizzato in fase di pubblicazione. Questo vale principalmente per i **servizi di tipo spontaneo**, cioè per i quali lo **IUV viene generato direttamente dal portale Efil**.

[Schermata: elenco "Accertamenti EFIL" con colonne Codice, Descrizione, Periodo, Attivo, Abilitato, Default; l'accertamento appena associato è evidenziato]

### 1.8 Impostare l'accertamento di Default

Per modificare l'accertamento di default associato ad un servizio è sufficiente cliccare a fianco della casella vuota (quando il cursore si trasforma in una mano) in corrispondenza della riga dell'accertamento da impostare come nuovo **Default**.

In automatico il programma:

1. Elimina il flag dalla riga in cui era impostato in precedenza
2. Lo imposta in quella selezionata

> **Nota:** Può esistere solo **un accertamento di Default per servizio**.

[Schermata: elenco "Accertamenti EFIL" con il flag "Default" spostato sulla riga dell'accertamento selezionato (2022-00005), evidenziato da una freccia rossa]