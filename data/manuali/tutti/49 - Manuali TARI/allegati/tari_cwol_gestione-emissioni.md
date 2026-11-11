# TARI – Manuale Operativo

## 1.1 Gestione Emissioni

Le Emissioni sono gestite tramite il menù:

**Tributi → TARI → Parametri di configurazione → Emissioni**

[Schermata del menù di navigazione: Tributi → TARI → Parametri di Configurazione → Emissioni]

Si aprirà la videata di gestione delle emissioni; inserendo i parametri di ricerca e facendo poi **"Elenca"** è possibile effettuare la ricerca delle emissioni già esistenti.

[Schermata "Gestione Emissioni" con campi di ricerca: Servizio Emittente, Modulo bollettazione, Anno Emissione, Numero Emissione, Tipo Emissione, Natura credito, Descrizione. Pulsanti: Nuovo, Elenca, Carica, Salva, Reset]

---

### Creazione Nuova Emissione

Per creare una nuova Emissione dal menu della Gestione Emissioni andare su **"Nuovo"**.

[Schermata Gestione Emissioni con pulsante "Nuovo" evidenziato]

Si aprirà la videata di configurazione della nuova emissione.

[Schermata di configurazione nuova emissione con campi: Tipo Scadenza, Tipo, Modulo, Ente, Anno, Servizio Emittente, Num.Emissione, Descrizione, Numeratore Doc.]

#### Parametri principali

- **Tipo Scadenza:** per il pago PA (scegliere `301/0 - TARI`)

Della Sezione delle Emissioni compilare i vari campi:

- **Tipo:** in base all'attività che si deve eseguire scegliere dal menù a tendina:
  - *Riscossione diretta gestita dall'ente con denuncia* (es: attività di BOLLETTAZIONE, OMESSA/INFEDELE DENUNCIA)
  - *Provvedimento* (es: attività di ACCERTAMENTO OPV o SOLLECITO)
  - *Rateizzazione* (es: attività di RATEIZZAZIONE)

- **Ente:** mettere il proprio Comune
- **Anno:** indicare l'anno
- **Servizio Emittente:** utilizzare la lentina come strumento di ricerca e scegliere **TARI**
- **Num.Emissione:** mette il primo numero di emissione libero per l'anno indicato
- **Descrizione:** campo descrittivo dell'emissione
- **Numeratore Doc.:** utilizzare la lentina (scegliere ad esempio **TARI-generico**)

---

### Dati Emissione

**Tipo Avviso:** scegliere dal menù a tendina il tipo di avviso che si vuole generare.

[Schermata tab "Dati Emissione" con menù a tendina "Tipo Avviso" aperto. Opzioni disponibili: Avviso Bonario Acconto, Avviso Bonario Saldo, Avviso Bonario Unico, Avviso Bonario Ricalcolo, Ravvedimento Operoso, Sollecito, Rateizzazione, Avviso di Accertamento Parziale o Mancato Pagamento, Avviso di Accertamento Omessa Denuncia, Avviso di Accertamento Infeconde Denuncia, Avviso di Accertamento Omessa e Infeconde Denuncia, Avviso di Accertamento Tardiva Denuncia, Ruolo Coattivo, Avviso di Rimborso, Avviso di Rottamazione, Avviso del Cumulo Giuridico]

Una volta scelto il **Tipo Avviso** si apriranno sotto gli ulteriori campi con i parametri da compilare.

[Schermata con Tipo Avviso "Sollecito" selezionato e campi aggiuntivi: Anno Rif., Servizio, Generali (Tipo Cespite, Classe Tributo), Emissione (Servizio Rendicontazione), Regole di Calcolo (Importo minimo riscuotibile, Spese di Notifica, Spese di Notifica PEC), Arrotondamenti (Tipo Arrotondamento, Arrotondamento rata), Scadenze (Termini di adempimento, Avviso dalla data notifica)]

---

### Sistema dei Pagamenti

*(per pago PA e per le rendicontazioni contabili)*

**Intermediario:** scegliendo l'intermediario, in base alla scelta vengono proposti i parametri.

[Schermata tab "Sistema dei Pagamenti" con menù a tendina "Intermediario" aperto. Opzioni: E-Fil, Next Step Solution, E-Fil F24ZZ, MPay Marche, Alto Adige Riscossioni, JPPA Maggioli, Next Step Solution CDS, MyPay, Liguria Digitale, Iris, Italariscossioni, UrbiPay PA Adriatica Rest, Argeeta, PMPay PA Adriatica Soap, Extra PagoPA, VDA - Valle d'Aosta, Dedagroup, SILFI, SisCom]

- **Codice Servizio:** lo dà l'Ente
- **Descrizione Servizio:** campo facoltativo
- **Conto:** non è necessario perché è associato al Servizio e all'Intermediario

[Schermata "Sistema dei Pagamenti" con Intermediario "E-Fil" selezionato e campi: Codice Servizio, Descrizione Servizio, Conto, Tipo Rif.Cred., Tipo Stampa Avviso PPA, Tipo Stampa Extra PPA, Invio ad AppIO (Default), Tipo Riconciliazione. Pulsante "Aggiungi" evidenziato]

---

### Conferma Creazione

Una volta scelti tutti i parametri andare su **"Aggiungi"** e l'Emissione risulterà creata.

[Messaggio di conferma: "Eseguito – Creazione eseguita con successo"]

---

### Accertamenti Contabili

Una volta effettuata l'elaborazione degli avvisi e popolata l'emissione, se si deve effettuare una pubblicazione pago PA, dall'elenco delle emissioni posizionarsi su quella di interesse, entrare in modifica attraverso la **matitina**.

[Schermata elenco Emissioni con colonna "Tipo", "Data Creazione", "Id Bollettino", "Anno Emissione", "Numero". Evidenziata la matitina per entrare in modifica]

Comparirà in aggiunta il tab degli **Accertamenti Contabili**.

Entrare in modifica in ogni riga con la matitina:

[Schermata con tab "Accertamenti Contabili" attivo. Tabella con colonne: Progr. Interno, Anno Rif., Tipo Voce, Accertamento, Modalità Riconciliazione, Settore Iva, Assogettamento Iva, Aliquota Iva, Id Emissione, Id. Evidenziata la matitina per modifica riga]

Indicare il **codice dell'Accertamento Contabile**: utilizzare la lentina del campo dove è indicato **"Accertamento NON valorizzato"**.

[Schermata "Riferimenti contabili-fiscali Emissione" con campo Prog.Accertamento evidenziato con testo "Accertamento NON Valorizzato" e icona lentina]

Scegliere dall'elenco con **doppio click**.

[Schermata "Accertamenti Rendicontazioni" con elenco: Id, Descrizione, Anno, Num., Cod.Acc. Esempi: "TARI 2021 OMESSA DENUNCIA", "RECUPERO EVASIONE/OMISSIONE CUP 2021", "TEST CUP SANZIONI", "ACC.TO CONTABILE TARI 2023", "TEST CUP IMPONIBILE", "CUP 2024", "TARI 2024"]

Il campo del **Codice dell'Accertamento Contabile** si valorizza.

[Schermata "Riferimenti contabili-fiscali Emissione" con Prog.Accertamento valorizzato: "3 TARI 2021 OMESSA DENUNCIA" e Cod.Accertamento: "2021/987"]

---

### Enti Beneficiari

In fondo, se sono configurati gli Enti beneficiari, indicare per ogni voce chi è il beneficiario:

- Le voci di **TEFA** vanno indicate con beneficiario **Provincia**
- Tutte le altre con beneficiario **Comune**

[Schermata con campo "Ente Beneficiario" a tendina con opzioni: Selezionare, Comune di, Provincia di]

---

### Cancellazione Emissione

> ⚠️ **Nota:** L'emissione può essere cancellata **solo se è vuota**. In alternativa occorre prima rimuovere tutti gli avvisi in essa contenuti. A loro volta gli avvisi devono essere in stato **'creato'** e non devono avere una pubblicazione pago PA.