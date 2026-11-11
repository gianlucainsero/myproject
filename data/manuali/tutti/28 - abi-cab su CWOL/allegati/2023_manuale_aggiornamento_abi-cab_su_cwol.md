# Manuale per Aggiornamento Tabella ABI - CAB

**Software:** CWOL (Modulo...)

---

## 1. Come scaricare il file ABI – CAB da importare su CWOL

Per poter scaricare il file ABI – CAB da importare, andare sul seguente link:

[https://tesoreria.unicreditbanca.it/tesoreria/abicab/abicab.html](https://tesoreria.unicreditbanca.it/tesoreria/abicab/abicab.html)

Una volta raggiunto il sito, cliccare su **"qui"** per scaricare il file e salvarlo nella cartella **Download** nel proprio PC.

[Schermata: Pagina del sito UniCredit Tesoreria con pulsante "Scarico file ABI-CAB - Per scaricare il file premere qui" e finestra di Esplora File che mostra il file "fileAbiCab" (Cartella compressa, 3.562 KB) nella cartella Download]

> ⚠️ **ATTENZIONE!**
> Il file appena scaricato **non è** quello da importare, in quanto ha un'estensione non supportata da CWOL. È quindi necessario estrarre il file dalla cartella compressa, procedimento spiegato nel prossimo passaggio.

---

## 2. Estrazione del file ABI – CAB compresso

Ponendosi sopra il file appena scaricato, premere il **tasto destro del mouse** e cliccare su **"Estrai tutto"**.

[Schermata: Menu contestuale di Esplora File con l'opzione "Estrai tutto..." evidenziata]

Dal procedimento di estrazione si otterrà il nuovo file **abicab.txt** che sarà quello da importare sulla piattaforma CWOL.

[Schermata: Cartella "fileAbiCab" contenente il file "abicab" (Documento di testo, 45.743 KB)]

---

## 3. Importazione del file ABI – CAB .txt su CWOL

Una volta effettuato l'accesso al portale CWOL Conversioni, al seguente link:

[http://srvdevcwol01/itaConversioni/Start.php](http://srvdevcwol01/itaConversioni/Start.php)

(con le proprie credenziali) andare sul menù e seguire i seguenti passaggi:

**Servizi economici → Modulo base → Tabelle Generali → Istituti di Credito → Importa Abi-Cab Unicredit**

[Schermata: Interfaccia CWOL con menu a cascata aperto che evidenzia il percorso: Servizi Economici → Modulo base → Tabelle Generali → Istituti di Credito → 20. Importa Abi-Cab Unicredit]

Successivamente cliccare su **"Seleziona File Unicredit da Importare"**.

[Schermata: Pagina "Import ABI-CAB da Unicredit" con il pulsante "Seleziona File Unicredit da Importare" evidenziato in rosso. La pagina mostra anche: Upload Max Filesize 500M, Modalità di Importazione (Simulazione), Struttura Descrizione Sportello (Comune / Indirizzo / Sportello)]

Premere sull'icona 📁 per allegare il file precedentemente estratto.

[Schermata: Finestra "Acquisizione File...." con campo "Scegli un file da caricare..." e icona di cartella]

Dalla precedente operazione uscirà una finestra di selezione file, da dove bisogna selezionare il file **abicab** e cliccare su **"Apri"**.

[Schermata: Finestra di dialogo "Apri" di Windows con il file "abicab" selezionato nella cartella Download > fileAbiCab, pulsante "Apri" evidenziato]

---

## 4. Aggiornamento del file ABI – CAB .txt su CWOL

Una volta caricato il file, su **"Modalità di importazione"** scegliere se procedere con:

- **Simulazione**, ovvero una mera verifica del file.
- **Definitivo**, ovvero l'effettivo aggiornamento degli ABI e CAB nel database della piattaforma.

In entrambi i casi, dopo aver selezionato la modalità, per terminare il procedimento, cliccare su **"Inizia"**.

[Schermata: Pagina "Import ABI-CAB da Unicredit" con il file "abicab.txt" caricato, dropdown "Modalità di Importazione" aperto con opzioni "Simulazione" e "Definitivo", e pulsante "Inizia" evidenziato in rosso]

### Note informative presenti nella pagina di importazione:

- Verranno importati tutti i record del file selezionato.
- Se l'ABI e/o il CAB non viene trovato lo **Aggiunge**.
- Se lo trova ma ci sono delle differenze lo **Aggiorna**.
- Tutti quelli non più presenti nel flusso verranno **Disabilitati**.
- Verranno creati dei files .csv gestibili con Excel, Calc ecc. con i campi separati dalla virgola e delimitati dal doppio apice.
- **Attenzione:** L'operazione potrebbe essere lunga; attendere la segnalazione di fine lavoro.

---

### Eventuali Vincoli:

*(Nessuno specificato)*

### Eventuali Criticità:

*(Nessuna specificata)*