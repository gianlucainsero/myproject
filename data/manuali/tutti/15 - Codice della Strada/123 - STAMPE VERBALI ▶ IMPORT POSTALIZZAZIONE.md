# STAMPE VERBALI ▶ IMPORT POSTALIZZAZIONE

## Introduzione

Per verificare se ci sono file di conferma produzione (postalizzazioni) da controllare e importare, dai **tre puntini** seguire il percorso:

**▶ Codice della Strada ▶ Stampe ▶ Verbali**

Aprire la scheda **Flussi Stampa** e cliccare sul pulsante **[Controlla Tipografia]**, sulla destra.

[Screenshot: interfaccia "Stampa Verbali" con la scheda "Flussi di Stampa" attiva. La tabella mostra colonne: Identificativo Flusso, Anno, Progr., Data, N. Verbali, N. Annullati, Data Invio, Data Stampa, Data Spedizione, Data Annullamento, Ufficio Spedizione, Spedizione Prevista. A destra sono presenti i pulsanti: Riemera Flusso, Annulla Flusso, Stampa, Controlla Tipografia (evidenziato in arancione).]

Si apre automaticamente la sezione **Import Postalizzazioni**.

[Screenshot: scheda "Import Postalizzazioni" con campi: Origine File, Destinazione File, Nome File. Pulsanti a destra: Vuota, Leggi, Scarica, Stampa. Tabella con colonne: Cod., Err., Id Lotto, Prog., Tipo Ricc., Verb., Anno, Cod. Azienda, Cod. Ente, File immagine, Data Stampa, Data Elaboraz., Avviso Verbale, Avviso Cartolina, Note. In basso la tabella "Note".]

## Come leggere eventuali file disponibili

Cliccare sul pulsante **[Leggi]**, sulla destra:

Se non c'è nulla di nuovo da importare, la tabella **Risultato della Ricerca** sarà bianca, vuota.

[Screenshot: finestra popup "Risultato Ricerca" con tabella "Selezionare il file" (colonne: File, Descrizione) vuota. Il pulsante "Leggi" è evidenziato in arancione.]

Se, invece, sul server FTP della tipografia ci sono dei file in attesa di essere ricevuti, compariranno una o più righe nel risultato della lettura.

## Come importare i file

Se ci sono più file `.txt` da importare, selezionarli **uno alla volta** con un doppio clic sulla riga.

[Screenshot: finestra "Risultato Ricerca" con due file elencati nella tabella "Selezionare il file": FMI.00000..._PDF.zip.TXT (evidenziato in giallo) e FMI.00000..._PDF.zip.TXT. Pulsante "Leggi" evidenziato a destra.]

La tabella si riempie con le informazioni sugli atti contenuti nel flusso. Eventuali segnalazioni compaiono nella tabella **Note** sottostante.

[Screenshot: tabella popolata con righe di dati (colonne: Cod., Err., Id Lotto, Prog., Tipo Ricc., Verb., Anno, Cod. Azienda, File immagine, Data Stampa, Data Elaboraz., Avviso Verbale, Avviso Cartolina, Note). In alto un messaggio popup "Info: Operazione terminata con successo. Controlla la tabella e poi esegui lo scarico." In basso la tabella "Note" con messaggio "eventuali segnalazioni verranno riportate in questa tabella" (evidenziata in rosso).]

Dopo aver controllato la tabella **Note**, cliccare su **[Scarica]**, sulla destra, per completare lo scarico.

[Screenshot: finestra popup "SCARICO FILE" con messaggio "Operazione eseguita con successo". Il pulsante "Scarica" è evidenziato in arancione.]

Rientrare nel lotto corrispondente e controllare che le colonne (**Avviso Verbale** e **Avviso Cartoline**) di ogni riga siano state popolate con numeri.

> **NOTA:** Quelli annullati avranno questi due campi vuoti.

## Come svuotare la tabella

Dopo lo scarico, cliccare su **[Vuota]** e confermare con **Sì**: la tabella sarà pronta per la ricezione successiva.

[Screenshot: finestra popup "Attenzione" con messaggio "Vuoi vuotare la lista?" e pulsanti "Sì" e "No". Il pulsante "Vuota" è evidenziato in arancione.]

> **Nota:** Prima di svuotare la tabella, è possibile stampare un riepilogo cliccando su **[Stampa]**.

## Info utili

- Riaprendo la scheda **Flussi Stampa**, la colonna **Data Stampa** (accanto a **Data Invio**) riporterà la data su sfondo **verde** per i flussi scaricati.

[Screenshot: tabella "Flussi di Stampa" con la colonna "Data Stampa" evidenziata in arancione, contenente celle con sfondo verde.]

- ⚠️ **Prima ricevere i file degli esiti di notifica, bisogna gestire le conferme produzioni.** Altrimenti, si rischia che le notifiche non vengano "agganciate" ai relativi atti.