# Protocollazione con Halley Cloud

L'esigenza è quella di evidenziare le differenze che sono state apportate in Cityware Online per permettere la protocollazione con **Halley Cloud**. Le principali differenze si concentrano nella protocollazione in partenza (dai gestionali di back office) verso i destinatari esterni e non ultimo di un documento formale (protocollo interno) verso altri uffici destinatari all'interno dell'organigramma comunale (**news rispetto al precedente metodo E-lios**); per questi ultimi, grazie all'interoperabilità tra i metodi web service Halley e le soluzioni Palitalsoft siamo in grado di identificare gli uffici destinatari in uso presso il protocollo Halley per fare in modo che tali protocolli interni siano visibili e accessibili a tutti gli utenti membri dell'ufficio di destinazione. Si potrà inoltre creare un fascicolo elettronico caricandolo dal Protocollo Informatico Halley (**news rispetto al precedente metodo E-lios**).

## Invio in automatico della Comunicazione

La comunicazione viene ora inviata automaticamente da Halley Cloud in concomitanza con la protocollazione in uscita, il bottone **[Invia Comunicazione]** è stato quindi **rimosso**.

Per protocollare e inviare la relativa comunicazione cliccare il bottone **[+]** (Fig. 1)

[Fig. 1: Maschera "In Partenza" con tab Dati Principali, Destinatari, Allegati, Comunicazione, Note, Dati Aggiuntivi, Pubblicazione Articolo, Assegnazioni. Campo "Protocollo N." vuoto, campo "Anno" vuoto, bottone [+] evidenziato in rosso, campo "Data Protocollo" vuoto. Riepilogo Destinatari con indirizzo PEC.]

Dopo aver scelto l'operazione da effettuare tra **[Protocolla Partenza]** e **[Documento Formale]** ed aver selezionato gli allegati necessari viene visualizzata una nuova schermata di riepilogo del protocollo in partenza (Fig. 2) che contiene:

- Elenco dei destinatari
- Oggetto del protocollo
- Numero della pratica e Numero del Passo
- Testo della comunicazione da inviare
- Elenco degli allegati

**A differenza del precedente metodo E-Lios** con il click sul bottone **[+]** (Fig. 1) non viene assegnato il numero del protocollo in uscita, quest'ultimo viene assegnato una volta cliccato il bottone **[Conferma]** (Fig. 2). Quando il protocollo viene inviato anche le variabili presenti sia nell'**"Oggetto del protocollo"** che nel **"Testo della comunicazione da inviare"** assumono i corretti valori.

[Fig. 2: Maschera "Gestione Mail" per l'invio del protocollo in uscita e della relativa comunicazione. Mostra: tabella destinatari con indirizzo PEC e nome, campo Oggetto con variabili (Prot. N.@{$NUMPROT}@ del data - NOME COGNOME), campi Pratica e Passo, editor di testo con corpo della comunicazione, tabella allegati con Nome File, Descrizione e Dimensione. Bottone F5-Conferma in alto a destra.]

## Stato della Comunicazione e spunte di Accettazione e Consegna

Nel precedente metodo E-Lios era possibile consultare lo *stato della comunicazione*, la **spunta di avvenuta accettazione** e la **spunta avvenuta consegna** (Fig. 3).

[Fig. 3: Tabella "Passi Procedimento" con colonne Seq, Passo, Aperto, Chiuso, Eseguito il, Temp, Scadenza, N. Protocollo/Id Documento in Partenza, Protocollo in Arrivo, Responsabile, Tipo, Stato, Stato Comun., O. Nella riga di esempio sono visibili le spunte di accettazione e consegna (due icone a forma di spunta) evidenziate in un riquadro rosso.]

Allo stato attuale non vengono più visualizzate queste informazioni nella tab **Passi**, per consultarle è necessario accedere alla tab **"Comunicazione"** presente nel dettaglio del passo e cliccare il bottone **[Verifica Invio Mail]** (Fig. 4)

[Fig. 4: Dettaglio del passo con tab "Comunicazione" selezionata. Sezione "In Partenza" con Riepilogo Destinatari, campi Protocollo N., Anno, Data Protocollo, bottone "Gestione Protocollo". Sezione "In Arrivo" con campi Utente, Codice Fiscale, E-mail, Protocollo N., Anno, Data Protocollo, Data Risposta, Ora Risposta, Tipo Risposta, Note. Bottone "Verifica Invio Mail" evidenziato.]

Viene visualizzata una finestra con le informazioni relative alla data di accettazione ed a quella di consegna (Fig. 5)

[Fig. 5: Finestra di dialogo "Verifica Invio" con tabella contenente colonne: Oggetto, Accettato, Consegnato. Esempio di riga: "CONSEGNA: Prot. N.18090 del 14-08-2024 - ROSSI MARIO - Rilascio certificato destinazione urbanistica n. 2024/65 - Città di DEMO" con spunta e data "il 14/08/2024" sia per Accettato che per Consegnato.]