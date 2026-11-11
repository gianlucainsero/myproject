# Adeguamento Flusso OPI Standard 1.8.1

**Verifica del beneficiario per le modalità di pagamento: Bonifico SEPA, Ordinario e Istantaneo**

---

## Documentazione di riferimento

Il Gruppo di Lavoro standard OPI ha definito le modifiche che sono state pubblicate sul sito dell'AgID unitamente alla seguente ulteriore documentazione di riferimento:

- Regole Tecniche OPI versione 1.8.1
- Schemi XSD OPI versione 1.8.1
- Vademecum OPI versione 1.8.1

**Link:** https://www.agid.gov.it/it/piattaforme/siope/standard-opi-gruppo-lavoro

Le modifiche allo standard OPI sono finalizzate a rafforzare la correttezza e affidabilità dei pagamenti eseguiti dalla Pubblica Amministrazione e gli standard di sicurezza previsti per i **bonifici SEPA ordinari e istantanei**.

---

## Breve Introduzione

- **VoP**: identifica il servizio di verifica del beneficiario che la banca tesoriera esegue prima di autorizzare un bonifico (*Verification of Payee*).
- **PSP**: identifica il prestatore di servizi di pagamento, è il soggetto che gestisce i pagamenti elettronici (banche, Poste, istituti di moneta elettronica). I Prestatori di Servizi di Pagamento PSP offrono un servizio di bonifico istantaneo. Il servizio di bonifico istantaneo è disponibile 24 ore su 24 e 7 giorni su 7, il trasferimento di fondi tra pagatore e beneficiario avviene entro il termine massimo di 10 secondi.

La banca tesoriera e i soggetti PSP hanno l'obbligo di attivazione del servizio di verifica **VoP** per gli ordinativi di pagamento trasmessi dagli Enti ai Tesorieri/Cassieri, attraverso la piattaforma SIOPE+, relativamente agli ordini di bonifico SEPA sia istantanei che ordinari.

Il servizio prevede che il **PSP del pagatore**, prima di eseguire un bonifico, verifichi con il **PSP del beneficiario** la corrispondenza tra il titolare del conto identificato dall'IBAN e il beneficiario del pagamento, comunicando l'esito della verifica.

---

## Nuove Regole OPI

### Decorrenza 30/11/2026

Per gli ordinativi di pagamento trasmessi dagli Enti ai Tesorieri/Cassieri, attraverso la piattaforma SIOPE+, su richiesta dell'ente, la Banca Tesoriera effettuerà il controllo sulla congruità tra l'IBAN e il nominativo del beneficiario indicati dall'ente e quello effettivamente associato al titolare del conto dal PSP del beneficiario, relativamente agli ordini di **bonifico SEPA sia istantanei che ordinari**.

---

## Regole operative

- La verifica viene svolta a valle della trasmissione dell'ordinativo inviato con il flusso OPI, durante la fase di acquisizione dello stesso da parte della BT e sulla base di specifiche informazioni che l'ente fornisce all'interno dell'ordinativo.
- La verifica effettuata dal cassiere/tesoriere (BT) avviene sul singolo beneficiario contenuto nell'ordinativo di pagamento con riferimento ai bonifici SEPA in euro istantanei e ordinari, tramite lo schema **"VoP"** (*Verification of Payee*) definito dal Consiglio Europeo dei Pagamenti.
- L'ente ha comunque facoltà di rinunciare al servizio, in coerenza con quanto previsto dal Regolamento (UE) n. 260/2012 in materia, indicando questa informazione nell'ordinativo di pagamento inviato con il flusso OPI.

---

## Aggiornamento applicativo

### Creazione flusso OPI per SIOPE+

Il programma per la creazione del flusso OPI viene aggiornato sulla base delle regole tecniche OPI che sono state approvate. Il tracciato del flusso OPI viene integrato con la nuova struttura facoltativa **servizio_VoP** inserita all'interno della struttura **sepa_credit_transfer**.

La modalità operativa del programma per la creazione del flusso OPI comunque non cambia ed è sempre con lo stesso percorso di menù dell'applicativo.

[Schermata: percorso di menu dell'applicativo con voce "140. Creazione flusso OPI per SIOPE+" evidenziata]

L'attivazione del servizio VoP (verifica del beneficiario) è stata gestita con l'inserimento di due nuovi campi, **'Verifica beneficiario'** e **'id beneficiario'**, inseriti nel programma di gestione **Clienti / Fornitori**, nella sezione **Albo pagamenti**.

Il dato per la verifica beneficiario viene valorizzato dall'ente per indicare alla propria BT se eseguire o meno la verifica (VoP) sul singolo beneficiario, contenuto nell'ordinativo di pagamento, quando il tipo di pagamento assume il valore **"SEPA CREDIT TRANSFER"** o **"SEPA INSTANT CREDIT TRANSFER"**.

### Albo dei pagamenti

Il programma è stato aggiornato con l'inserimento del campo **'Id_beneficiario'** e del campo **'Verifica beneficiario'**. Quest'ultimo, nella prima fase dell'aggiornamento dell'applicativo, assumerà come default **'Sì'** ma può essere modificato con uno dei valori disponibili in elenco.

[Schermata: finestra "Albo Pagamenti" con tab "Beneficiario" attiva, campi IBAN, ABI, CAB, Codice SWIFT, e i nuovi campi "Verifica beneficiario" (a tendina con valori SI, SI CLOSE MATCH, NO) e "Id_Beneficiario" evidenziati in rosso]

---

## Modalità operativa

### Albo dei pagamenti

Selezionando l'icona **ℹ** presente nel campo **'verifica beneficiario'** viene visualizzata l'informativa per i valori che possono essere selezionati.

[Schermata: finestra "Informazione" con tabella riepilogativa dei valori del campo Verifica beneficiario (VoP) per bonifici ordinari e istantanei: NO, SI, SI Close Match, Id_Beneficiario con relative descrizioni]

---

## Modalità operativa e verifica esito

### Campo 'Verifica beneficiario'

Il campo **'Verifica beneficiario'** può assumere i seguenti valori:

- **"SI"**: la verifica del beneficiario è richiesta e l'ordinativo è avviato al pagamento dalla BT solo se la verifica restituisce l'esito di **"esatta corrispondenza"** (*match*).
- **"SI CLOSE MATCH"**: la verifica del beneficiario è richiesta e l'ordinativo è avviato al pagamento dalla BT sia se la verifica restituisce l'esito di **"esatta corrispondenza"** (*match*), sia se la verifica restituisce l'esito di **"parziale corrispondenza"** (*close match*).
- **"NO"**: la verifica del beneficiario non è richiesta (*opt-out*).

### Riepilogo

- Quando il dato per la verifica beneficiario è valorizzato a **"NO"** la BT **non** effettua la VoP.
- Quando il dato per la verifica beneficiario è valorizzato con **"SI"** o con **"SI CLOSE MATCH"**, la BT effettua la verifica di corrispondenza tra il nominativo e l'IBAN del beneficiario con i dati associati all'intestatario di quel conto di pagamento, inviando apposita richiesta **VoP** al PSP presso il quale è detenuto il conto di pagamento del beneficiario, in conformità con quanto previsto dallo schema del Consiglio Europeo dei pagamenti (EPC).

In base ai diversi possibili esiti della *VoP*, la BT gestisce l'ordinativo di pagamento come di seguito indicato.

### Esiti della verifica VoP (verifica su anagrafica)

In presenza di esito:

- **Match** – Esatta corrispondenza: l'ordinativo di pagamento è acquisito e avviato al pagamento. La BT trasmette un messaggio di esito applicativo dell'OPI di **"ACQUISITO"** contenente l'esito della *VoP* eseguita.
- **No Match** – Non corrispondenza: l'ordinativo di pagamento è scartato e la BT trasmette un messaggio di esito applicativo dell'OPI di **"NON ACQUISITO"** contenente l'esito della *VoP* eseguita.
- **Close Match** – Corrispondenza parziale: l'ordinativo di pagamento:
  - è **acquisito e avviato al pagamento** se il controllo del beneficiario è stato valorizzato con **"SI CLOSE MATCH"**. In tal caso il messaggio di esito applicativo dell'OPI di **"ACQUISITO"** prodotto dalla BT contiene l'esito della verifica *VoP* eseguita e l'indicazione dell'anagrafica associata all'IBAN come ricevuta dal PSP del beneficiario.
  - Se il controllo del beneficiario è stato valorizzato con **"SI"** e abbiamo una non corrispondenza o corrispondenza parziale, il messaggio di esito applicativo dell'OPI di **"NON ACQUISITO"** prodotto dalla BT contiene l'esito della verifica *VoP* eseguita e l'indicazione dell'anagrafica associata all'IBAN come ricevuta dal PSP del beneficiario.
- **Verifica non possibile / non applicabile (NOAP** – *Verification check not possible / not applicable**)**: l'ordinativo di pagamento viene scartato e la BT trasmette un messaggio di esito applicativo dell'OPI di **"NON ACQUISITO"** contenente l'esito della verifica *VoP* eseguita.
- **Errori tecnici nell'esecuzione della VoP**: l'ordinativo di pagamento viene scartato e la BT trasmette un messaggio di esito applicativo dell'OPI di **"NON ACQUISITO"** contenente l'esito della verifica *VoP* eseguita.

> **Nota:** Nel caso di scarto dell'ordinativo di pagamento, l'ente può ritrasmettere l'ordinativo aggiornando le informazioni anagrafiche del beneficiario e indicare nuovamente se effettuare o meno la verifica.

### Campo 'id beneficiario'

Nel caso di beneficiario **persona giuridica**, l'ente può richiedere alla propria BT – in qualità del PSP del pagatore – che il servizio di verifica sia effettuato tra il codice IBAN e un **codice identificativo del beneficiario** (es. codice fiscale, partita IVA) anziché sulla sua anagrafica, a condizione che esso sia supportato dal PSP del beneficiario. Il codice deve essere inserito nel campo **'id beneficiario'** dell'albo dei pagamenti del soggetto fornitore.

[Schermata: dettaglio dei campi "Verifica beneficiario" (a tendina) e "Id_Beneficiario" (campo di testo) evidenziati in rosso]

A tal fine, l'ente – oltre a compilare il campo **verifica beneficiario** – può:

- **Valorizzare il codice identificativo del beneficiario**. In questo caso **non è previsto** l'esito di Corrispondenza parziale (*Close Match*).

Se tale codice identificativo è supportato dal PSP del beneficiario, in base all'esito della *VoP*, la BT gestisce l'ordinativo di pagamento come di seguito indicato, sia nel caso in cui il dato di **verifica beneficiario** sia valorizzato con **"SI"**, sia con **"SI CLOSE MATCH"**.

In presenza di esito:

- **Match** – Esatta corrispondenza: l'ordinativo di pagamento è acquisito e avviato al pagamento. La BT trasmette un messaggio di esito applicativo dell'OPI di **"ACQUISITO"** contenente l'esito della *VoP* eseguita.
- **No Match** – Non corrispondenza: l'ordinativo di pagamento è scartato e la BT trasmette un messaggio di esito applicativo dell'OPI di **"NON ACQUISITO"** contenente l'esito della *VoP* eseguita.
- **No Match / Verifica non possibile non applicabile (NOAP** – *Verification check not possible / not applicable**)**: l'ordinativo di pagamento viene scartato e la BT trasmette un messaggio di esito applicativo dell'OPI di **"NON ACQUISITO"** contenente l'esito della verifica *VoP* eseguita.
- **Errori tecnici nell'esecuzione della VoP**: l'ordinativo di pagamento viene scartato e la BT trasmette un messaggio di esito applicativo dell'OPI di **"NON ACQUISITO"** contenente l'esito della verifica *VoP* eseguita.

Qualora il **codice identificativo del beneficiario**, indicato dall'ente nell'ordinativo di pagamento, **non sia supportato** dal PSP del beneficiario, la verifica sarà effettuata sull'anagrafica del beneficiario e seguirà il processo precedentemente descritto.