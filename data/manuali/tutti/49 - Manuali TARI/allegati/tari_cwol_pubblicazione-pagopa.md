# TARI - Manuale Operativo

## 1.1 - Pubblicazione PagoPA

Gli Enti che hanno attivato un servizio ai fini della riscossione TARI con metodo PagoPa, devono procedere alla pubblicazione.

### Prerequisiti fondamentali per la pubblicazione

Affinché la pubblicazione vada a buon fine occorrono due condizioni:

**1.** Che all'interno dell'emissione siano stati indicati al tab **'Sistema dei Pagamenti'** l'intermediario, il Codice Servizio e la Descrizione del Servizio:

[Schermata: Gestione Emissioni - Tab "Sistema dei Pagamenti" con campi evidenziati: Intermediario (es. E-Fil), Codice Servizio (es. 17), Descrizione Servizio (es. Avvisi Bonari TARI 2024). Visibili anche i campi: Conto, Tipo Rif.Cred., Tipo Stampa Avviso PPA, Tipo Stampa Extra PPA, Invio ad AppIO (Default), Tipo Riconciliazione.]

**2.** Che ad ogni **Tipo Voce** sia stato associato il relativo **accertamento contabile**, affinché possa completarsi la rendicontazione automatizzata delle entrate in finanziaria:

[Schermata: Gestione Emissioni - Tab "Accertamenti Contabili". Tabella con colonne: Progr. Interno, Anno Rif., Tipo Voce, Accertamento, Modalità Riconciliazione. Esempi di Tipo Voce: 1-Imponibile, 2-Addizionali, 11-Arrotondamento, 23-Componenti perequative. Colonna Accertamento evidenziata con valori tipo "2024/4 - TARI 2024".]

---

### Pubblicazione Massiva

Dal menù: **Tributi → TARI → Gestione Avvisi → Avvisi Bonari**

[Schermata: Navigazione menù a cascata: 70. Tributi → 40. TARI → 70. Gestione Avvisi → 10. Avvisi Bonari]

Inserire l'emissione di interesse e fare **'Elenca'**.

Selezionare tutti gli avvisi che si vogliono pubblicare attraverso la spunta in alto:

[Schermata: Videata "TARI: Avvisi Bonari" con elenco avvisi. Colonne: Nominativo C.F./P.Iva ProgSogg, Tributo (TARES/TARI), Tipo Avviso (Avviso Bonario Unico 1 - 2024 - 7), Stato (Creato/Stampato), Anno Num. Doc, Dovuto, Riscosso, Residuo. Spunta di selezione in alto a sinistra evidenziata. Pulsante "Attiva Pubblicazione PagoPA Massivo" nel pannello di navigazione a destra.]

Una volta selezionati è possibile azionare la pubblicazione massiva con il bottone **'Avvia Pubblicazione PagoPA Massiva'** (pulsante "Attiva Pubblicazione PagoPA Massivo" nel pannello di navigazione).

Questa procedura invia a pubblicazione le scadenze da pubblicare.

> **Nota:** Il recupero dell'esito della pubblicazione, dello IUV e degli eventuali scarti è affidato allo **schedulatore**.
> Es: se si pubblica il primo pomeriggio intorno alle 14:00 e lo schedulatore gira nel periodo notturno, si vedranno gli esiti l'indomani.

---

### Pubblicazione Puntuale

È possibile effettuare singolarmente una pubblicazione dall'interno dell'avviso andando sul bottone **'Pubblica'**:

[Schermata: Dettaglio Avviso Bonario. Pannello di navigazione a destra con sezione "PagoPA" e pulsante "Pubblica" evidenziato in rosso.]

Nel caso di pubblicazione puntuale il risultato della pubblicazione è restituito **istantaneamente**.

---

### Controllo del PagoPA per un determinato Avviso

Lo stato della pubblicazione delle scadenze per un determinato avviso (pubblicato, IUV, eventuale pagato, ecc.) è tracciato all'interno dell'avviso al tab **PagoPA**:

[Schermata: Dettaglio Avviso con tab "PagoPA" selezionato. Tabella con colonne: Num rata, Stato (es. "5-Pubblicata con IUV"), IUV (es. 0093241001287947), Note. Visibili anche i tab: Dettagli, Voci, Scadenze, Riscossioni, Collegamenti, Note, Stato, PagoPA, Notifiche, Codobbligati.]

---

### Monitoraggio

È possibile monitorare l'andamento di tutte le scadenze trasmesse a Pago PA per una certa emissione dal menù della Gestione pago PA delle emissioni:

**Tributi → Modulo Base → PagoPA → Gestione Tabelle → Emissioni Pago PA**

[Schermata: Navigazione menù a cascata: 70. Tributi → 130. Modulo Base → 50. PagoPa → 10. Gestione Tabelle → 10. Emissioni PagoPA]

In alternativa si può scrivere **'emiss'** sulla ricerca e comparirà il menù desiderato:

[Schermata: Barra di ricerca "Ricerca applicazioni" con testo "emiss" inserito. Risultato evidenziato: "Tributi>Modulo Base>PagoPa>Gestione Tabelle>Emissioni PagoPA"]

In entrambi i casi comparirà la seguente videata:

[Schermata: Videata "Emissioni PagoPA". Tabella con colonne: Anno, Num., Serv. EM., Emissione, Tipo Pendenza (TARI 301/0), Cod. Servizio, Stato Emissione (es. "Niente da pubblicare", "Totale Scadenze:5711 / Pubblicati:5499 / Scartati:52"), Dettagli Scadenze. Pulsanti: lente d'ingrandimento e orologio per riga.]

Andando sul bottone con l'**icona dell'orologio** vengono visualizzate tutte le scadenze e le relative informazioni e stato:

[Schermata: Videata "Scadenze per Pubblicazione". Tabella con colonne: Anno, Numero, Servizio, Descrizione, Stato (es. "5-Pubblicata con IUV", "1-Creata"), Tipo Scadenza (301/0 - TARI), Importo, Chiave Ester, Num Doc, Cod Fisc./P.IVA, IUV, Cod RIF, Info, Bollett, RT, Id. Filtri di ricerca in alto per Anno, Numero, Servizio, Descrizione, Stato (a tendina "TUTTI"), Tipo Scadenza, Importo, Chiave Ester, Num Doc, Cod Fisc./P.IVA, IUV, Cod RIF.]