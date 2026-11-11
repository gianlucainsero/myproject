# Esportazione XML ANAC

Dopo aver provveduto al caricamento dei dati e validazione attraverso la funzione presente nel software, è possibile esportare i dati secondo le specifiche tecniche nel formato XML. La funzione di esportazione dati AVCP consente all'ente di produrre i file conformi all'XSD.

Prima di premere su **"AVVIA ELABORAZIONE"** è necessario controllare attentamente **"l'URL di pubblicazione"**. Questa informazione è fondamentale perché viene comunicata, assieme al flusso xml, tramite l'apposito modulo predisposto dall'AVCP; gli enti che pubblicano i file XML direttamente sui propri server, dovranno inserire in questo spazio l'indirizzo url che punti correttamente al server di pubblicazione.

> **ATTENZIONE:** La piattaforma, **non effettua automaticamente l'upload**; al termine dell'elaborazione verrà visualizzato un box di riepilogo da cui sarà possibile scaricare, in un unico file ZIP, tutti i file XML generati per l'anno selezionato. Tali file dovranno poi essere caricati sul sistema che pubblica il sito istituzionale dell'Ente.

Al contrario, per chi utilizza la pubblicazione tramite il modulo **"Portale della Trasparenza"**, l'upload sul server di pubblicazione verrà effettuato automaticamente senza che l'utente debba eseguire nessuna procedura.

In entrambi i casi, **DEVE ESSERE EFFETTUATA LA COMUNICAZIONE DI AVVENUTA PUBBLICAZIONE ALL'ANAC** ai sensi della normativa vigente, al fine di non incorrere nelle sanzioni previste.

## Modifica dei valori nel flusso XML

Nella fase di esportazione, è possibile impostare anche la modifica di alcuni valori nel flusso XML; questa operazione può essere utile per mantenere la congruenza tra i campi:

- **Data di prima pubblicazione**
- **Data dell'ultimo aggiornamento**

che nelle operazioni di modifica potrebbero essere stati caricati con dei valori successivi alla data di pubblicazione del file indice del flusso XML.

Tale condizione, pur non rappresentando una violazione delle specifiche tecniche del flusso XML, rappresenta comunque una situazione anomala rilevabile da AVCP durante i controlli automatici.

In questo caso è possibile sovrascrivere i valori dei due campi, allineandoli alla **Data di pubblicazione del file indice del flusso XML**.

Le opzioni consentono di eseguire questa operazione **solo per i valori superiori** oppure **per tutti i valori**.

> **NOTA:** La modifica dei valori avviene **solo nel flusso XML esportato e nei report generati insieme al flusso** (HTML, XLS, ODS, PDF). **Nell'archivio del software i dati non subiscono nessuna variazione.**

## Riepilogo delle elaborazioni generate

Nella parte bassa della pagina si trova un riepilogo delle elaborazioni generate in precedenza.

> **NOTA:** Le elaborazioni sono suddivise per annualità, ogni elaborazione di una annualità sovrascrive la precedente garantendo quindi la consistenza dei dati. A fianco dell'annualità è riportata la data in cui l'elaborazione è stata generata.

Cliccando sulle varie icone, verrà avviato il download della corrispondente tipologia di file (ZIP, ODS, EXCEL, PDF); l'icona della colonna XML consente di visualizzare una finestra con l'URL completo (url più file indice) da comunicare, attraverso le modalità previste, all'ANAC ai fini dell'adempimento degli obblighi di legge previsti.

Premendo sul bottone **"Apri pagina XML INDICE"** verrà visualizzata una nuova finestra con l'url indicato.

[Immagine: finestra "URL XML INDICE" che mostra l'URL completo da comunicare all'ANAC nel formato `http://[server]/avcp/[anno]_01.xml` e il pulsante "Apri pagina XML INDICE"]