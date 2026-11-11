# Caricamento accertamento su Catalogo Efil

## 1. Accesso al menu Accertamenti

Dal menù navigare nel seguente percorso:

**Servizi Economici → Finanziaria → Entrata → Accertamenti**

[Schermata: percorso di navigazione nel menu CED Home con i sottomenu Finanziaria ed Entrata espansi, evidenziando la voce "20. Accertamenti"]

## 2. Ricerca e visualizzazione degli accertamenti

Inserire i parametri di ricerca e cliccare sul bottone **"Elenca"** dalla toolbar per visualizzare l'elenco degli accertamenti.

[Schermata: pagina "Accertamenti" con i campi di ricerca (Anno/Numero, Competenza/Residui/Pluriennali, Voce di Bilancio, Classificazione, Piano Finanziario, Codice Identificativo GAE, Importo Iniziale da/a) e la toolbar con il pulsante "Elenca" evidenziato]

## 3. Entrare in modifica dell'accertamento

Dalla paginazione cliccare sull'icona **matita** (modifica) per entrare in modifica dell'accertamento da associare.

[Schermata: elenco accertamenti con colonna di paginazione a sinistra, icona matita evidenziata in una riga]

## 4. Avviare il caricamento su Catalogo Efil

Per associare l'accertamento, cliccare sul bottone **"Caricamento accertamento su Catalogo Efil"** presente nella toolbar della schermata di modifica.

[Schermata: pagina di modifica accertamento con i dettagli (Anno/Numero, Competenza, Voce di Bilancio, Classificazione, Oggetto, Importo Iniziale, ecc.) e il pulsante "Caricamento accertamento su Catalogo Efil" evidenziato nella toolbar a destra]

## 5. Elenco servizi Efil

Una volta cliccato il bottone **"Caricamento accertamento su Catalogo Efil"**, si aprirà una nuova schermata con l'elenco dei servizi presenti su Efil.

Nella toolbar sono presenti **2 bottoni** utilizzabili dopo aver selezionato un servizio tra quelli presenti nell'elenco:

- **Visualizza Accertamento/i Associati a Servizio**
- **Associa Accertamento/i a Servizio**

[Schermata: finestra "Caricamento accertamenti su Catalogo Efil" con tabella servizi (Codice Servizio, Descrizione Servizio) e i due pulsanti nella toolbar a destra]

## 6. Visualizzare gli accertamenti associati a un servizio

Selezionando un Servizio e cliccando sul bottone **"Visualizza Accertamento/i Associati a Servizio"**:

Viene visualizzato un elenco con gli accertamenti attualmente collegati a quel servizio.

[Schermata: finestra "Accertamenti EFIL" con colonne Codice, Descrizione, Periodo, Attivo, Abilitato, Default; esempio con accertamenti come "CIE - QUOTA STATO", "CIE - QUOTA COMUNE"]

## 7. Associare un accertamento a un servizio

Selezionando un Servizio e cliccando sul bottone **"Associa Accertamento/i a Servizio"**:

- Viene inserito l'accertamento sul catalogo Efil e associato al Servizio selezionato.
- Se l'accertamento era **già associato** al Servizio viene visualizzata una segnalazione che l'operazione non può essere eseguita.

[Schermata: finestra con messaggio "Esito Associazione accertamento" e notifica "Accertamento associato correttamente"]

## 8. Verifica e modifica dei flag di associazione

Cliccando di nuovo sul bottone **"Visualizza Accertamento/i Associati a Servizio"**:

Viene visualizzato l'elenco con gli accertamenti associati a quel servizio e in particolare l'accertamento appena associato.

Nella stessa schermata è possibile modificare i flag:

- **Attivo**
- **Abilitato**
- **Default** ← *soprattutto questo*

Il flag **"Default"** serve a definire quale accertamento deve essere utilizzato in fase di pubblicazione. Questo vale principalmente per i **servizi di tipo spontaneo**, cioè per i quali lo **IUV** viene generato direttamente dal portale Efil.

[Schermata: finestra "Accertamenti EFIL" con l'accertamento appena associato evidenziato e le colonne Attivo, Abilitato, Default con checkbox]

## 9. Modificare l'accertamento di Default

Per modificare l'accertamento di default associato ad un servizio è sufficiente cliccare a fianco della casella vuota (quando il cursore si trasforma in una mano) in corrispondenza della riga dell'accertamento da impostare come nuovo **Default**.

In automatico il programma:

1. Elimina il flag dalla riga in cui era impostato in precedenza
2. Lo imposta in quella selezionata

> **Nota:** Può esistere solo **un accertamento di Default per servizio**.

[Schermata: finestra "Accertamenti EFIL" con il flag "Default" spostato sulla riga dell'accertamento selezionato (2022-00005), mentre viene rimosso dalla riga precedente]