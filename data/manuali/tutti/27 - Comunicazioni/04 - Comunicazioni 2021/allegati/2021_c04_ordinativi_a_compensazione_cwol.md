# Ordinativi a Compensazione CWOL

**Comunicazione n. 04/2021**

**Oggetto:** Ordinativi a compensazione su Cityware Online

**Scopo:** Il documento ha lo scopo di illustrare le operazioni da effettuare nell'ambiente Cityware Online per inserire degli ordinativi a compensazione.

---

## 1. Ordinativi a Compensazione CWOL

### 1.1 Esempio Fattura Attiva in regime Split Payment verso la Pubblica Amministrazione

Verrà esaminato il caso in cui un ente deve emettere una fattura per affitto di un impianto sportivo ad un Comune limitrofo, per un importo di 1000 euro + 220 euro di iva (in regime split payment).

- La prima fase richiede di selezionare il tipo movimento, di indicare il settore iva e la data di emissione della fattura, come mostrato nella figura seguente:

[Schermata: Gestione Documenti Fatturazione Entrate – elenco dei tipi movimento per l'ente, con selezione del tipo "Impianti sportivi (FATTURA)" e parametri di ricerca: Tipo documento Fatt. Entrate, Settore IVA 02 IMPIANTI SPORTIVI, Codice Utente CED, Data documento 01/06/2019]

Premendo sul tasto **'Avanti'**, si richiede l'inserimento del cliente, della modalità di riscossione e dell'ufficio destinatario SDI per l'invio della fattura.

E' possibile inserire ulteriori voci o modificare quella già collegata al tipo movimento selezionato.

In automatico, essendo la fattura emessa verso un ente pubblico, il programma imposta il tipo iva come **split payment**, come evidenziato in figura.

[Schermata: Dettaglio Documento – Cliente: COMUNE DI ANCONA (Cod. 423), Ufficio destinatario SDI: ESOFPR Comune di ancona – rag. Elenco Voci: "Proventi utilizzo impianti sportivi - IVA 22%", Importo 1.220,00. Tipo Iva: Split. Totale Imponibile: 1.000,00, Totale IVA: 220,00, Totale Documento: 1.220,00]

Una volta inseriti tutti i dati necessari alla compilazione della fattura, premendo sul tasto **'Aggiungi'**, si genera la fattura in formato analogico, come sotto riportato.

[Schermata: Fattura analogica – Comune di [omissis], Provincia di AN, Tipo Documento: Fattura, N. 68/2, Data 21-06-2019, Esercizio 2019. Descrizione: "Proventi utilizzo impianti sportivi - IVA 22%". Assegnazione IVA: A - Iva Normale (Split Payment - Art. 17 ter D.P.R. 633/1972). Imponibile: 1.000,00, IVA: 220,00. Totale Documento: 1.220,00. Totale da pagare in lettere: MILLE/00. Scadenza pagamenti: Rata 1 – 30-07-2019 – 500,00; Rata 2 – 29-08-2019 – 500,00]

Entrando nel modulo **"Documenti Entrate"** di cityware.online (raggiungibile da **"Servizi Economici -> Finanziaria -> Entrata"**) selezionando la voce **'solo movimenti fatturazione attiva'** è possibile visionare la fattura appena creata:

[Schermata: Documenti Entrate – griglia di ricerca con filtro "Movimenti solo fatturazione attiva" evidenziato]

La fattura creata precedentemente, documento **2019/1081**, ha l'allegato della fattura creata ed è stata salvata all'interno di Alfresco.

[Schermata: Elenco documenti – documento 2019/11081, Cliente 423 COMU, Data 21/06/2019, Doc. 68/2, Importo Lordo 1.220,00, Tipo documento: Fatture Emesse, con allegato "1. Allegati"]

Andando sulla scheda iva del documento di entrata creato, l'iva risulta compilata automaticamente sul settore impianti sportivi come riportato in figura.

[Schermata: Scheda IVA del documento 2019/1081 – Settore 02 IMPIANTI SPORTIVI, Causale 55 Fattura Emessa, Importo Totale 1.220,00, Totale Imp. 1.000,00, Totale IVA 220,00]

Di seguito si riporta il dettaglio del movimento IVA creato:

[Schermata: Movimenti IVA – Documento nr. 68/2 del 21/06/2019 del soggetto COMUNE DI ANCONA. Tipo documento: 55 Fattura Emessa (RIS-IV->Coge>Inter). Registro: 1 Registro Vendite. Settore IVA: 02 IMPIANTI SPORTIVI. Riga: Imponibile 1.000,00, % IVA 22, Importo IVA 220,00, Descrizione: IVA SPLIT VENDITE. Totale Imp. 1.000,00, Totale IVA 220,00]

Nella scheda **'Assegnazione'**, si crea in automatico l'assegnazione per l'importo imponibile pari a **€1.000**, essendo l'iva in split.

[Schermata: Scheda Assegnazione – Riga 1, Area/Settore/Servizio: U.O.C. ECONOMATO E PROVVEDITORATO, Esito Assegnazione: Chiudi automaticamente, Accertamento 2019/00026, Importo 1.000,00, Data Inizio 21/06/2019]

- A questo punto, va creata un'assegnazione pari a **€220** (cliccando sull'icona **(+)** presente nella sezione "Assegnazione"), come riportato nella figura sottostante.

[Schermata: Assegnazione – Documento nr. 68/2 del 21/06/2019 del soggetto COMUNE DI ANCONA. Importo assegnazione: 220,00. Voce di Bilancio: 3010100 3101 01 012 PROVENTI VENDITA BENI MOBILI DELL'ENTE. Piano Finanziario: 3 1 1 1 999 Proventi da vendita di beni n.a.c. Conto tesoreria: 1C CONTO LIBERO FRUTTIFERO]

- Successivamente, va creata una riscossione (selezionando il tab **Riscossione** e premendo su **(+)**), intestata all'Agenzia delle Entrate, la cui reversale dovrà andare a compensare il mandato di pagamento, anche questo intestato all'Agenzia delle Entrate.

[Schermata: Riscossione – Accertamento 2019/00022, Voce di Bilancio: 3010200 3102 01 161 PROVENTI PASTI ADULTI, Importo Riscossione: 220,00. Versante-Delegato: 2316 AGENZIA DELLE ENTRATE, C.F. 06363991001. Modalità di riscossione: 3 20 COMPENSAZIONE]

Il beneficiario deve essere cambiato, inserendo **Agenzia delle Entrate** ed inserendo come modalità di incasso **COMPENSAZIONE**.

- Il Tesoriere ha inviato il provvisorio da regolarizzare per l'importo di € 1.000, quando viene importato il flusso, lo stesso verrà visualizzato nell'elenco sottostante.

[Schermata: Interrogazione Provvisti – elenco movimenti per creazione impegni e liquidazioni. Il provvisorio 2019/4428 del 07/02/2019, Importo Lordo 1.000,00, Soggetto: COMUNE DI ANCONA, Tipo Sec: CASSA, è evidenziato]

- **Crea da assegnazione:** cliccando sulla matita o sul bottone **"Regolarizza"** nella schermata seguente, è possibile associare il provvisorio con i documenti assegnati (cliccando sul bottone **"Crea da assegnazione"**).

[Schermata: Interrogazione Provvisti – Prov. provvisorio 4428, Anno 2019, Data 01/02/2019, Prog. Cancellato 51426. Versante/Beneficiario: COMUNE DI XXXXXX. Causale: affitto palazzetto. Importo provvisorio: 1.000,00. Bottone "Crea da assegnazione" evidenziato]

Si apre una schermata, dove vengono riportate le assegnazioni create in fase di inserimento della fattura.

Selezionando l'assegnazione con l'importo di 1000 euro i dati vengono riportati nel provvisorio ed è possibile creare la reversale cliccando sul bottone **"Contabilizza"** presente nella seguente schermata:

[Schermata: Interrogazione Provvisti – Movimenti da contabilizzare: Riga 1, Contabilizzano, 2019/00026, Reversale operazione, Impegni, COMUNE DI ANCONA, Importo 1.000,00. Bottone "Contabilizza" evidenziato]

Lanciando l'elaborazione in modalità **"Creazione"** viene creata la riscossione e la relativa reversale:

[Schermata: Elaborazione Movimenti – Tipo elaborazione: Creazione. Tab Entrata attivo. Albo di riscossione: Nuovo/Default. Modo emissione reversali: Ogni Accertamento, be]

La reversale creata è la **n.11**:

[Schermata: Gestione Reversali – Reversale n. 11 del 21/06/2019, Descrizione: Documento Nr. 68/2 del 21-06-2019 Proventi utilizzo impianti sportivi, Importo 1.220,00, Missione/Programma/Titolo: 1.03.21.1.01. Riconciliazioni al modulo nr.11 del 2019: Riga 1, 2019/427, Fornitore: 2 COMUNE DI ANCONA, Doc. 68/2, Importo Lordo 1.000,00, Accertamento 2019/00022]

#### 1.1.1 Operazioni da verificare su CWOL

- Va fatto un mandato a compensazione per l'importo pari a **€ 220** (iva split). Deve essere preso un impegno sul piano finanziario **1.10.3.1.1.** 'Versamento IVA a debito per le gestioni commerciali'.

L'impegno può essere preso a totale per tutto lo split generato da fatture di vendita ad altri Enti, previsto nell'anno. Nell'esempio, l'importo è pari a **€ 50.000**:

[Schermata: Documenti Impegni – Anno/Numero: 2019/00210, Competenza. Voce di Bilancio: 0103110 0103 01 030 IVA A DEBITO. Piano Finanziario: 1 10 3 1 1 (evidenziato in rosso) – Versamento IVA a debito per le gestioni commerciali. Oggetto: versamento iva split commerciale verso altri Comuni. Importo iniziale: 50.000,00. Conto Tesoreria: 1C CONTO LIBERO FRUTTIFERO]

- Bisogna inserire un documento di spesa con liquidazione diretta, intestato all'Agenzia delle Entrate, pari a **€ 220**.

[Schermata: Documenti Uscita – Anno/Progressivo documento: 2019/185, Tipo Documento: 5 Liquidazioni Diretta (Finanz. & Co. Ana). Importo lordo: 220,00. Fornitore: 2316 AGENZIA DELLE ENTRATE, C.F. 06363991001. Modalità di pagamento: 30 Bon. bancario. IBAN: IT000 BANCA D'ITALIA. Descrizione: Iva split affitto impianto sportivo]

La liquidazione diretta è effettuata sull'impegno **2019/210** sul piano finanziario **1.10.3.1.1**.

[Schermata: Documenti Uscita – Scheda Liquidazione: Riga 1, Impegno 2019/00210, Importo Impegno: 50.000,00, Beneficiario: AGENZIA DELLE ENTRATE, Mandato: 2019/12, Data Contab.: 21/06/2019, Data Emissione: 05/06/2020, Piano Finanziario: 1 10 3 1 1, Descrizione: Versamento iva split commerciale verso altri Comuni]

- Posizionarsi nella sezione **'Emissioni Mandati'** e viene emesso il mandato per l'importo di € 220, come riportato nelle seguenti figure.

[Schermata: Emissione Mandati – elenco liquidazioni: Riga 1, Anno 2019, Prog. 179/388, Nominativo beneficiario: TABELLAZZI GIUSEPPE, Modalità Pagamento: Contanti, Numero e Data Documento: 185/06/2019, Importo: 0,00. Bottone "Emetti Mandato" a destra]

[Schermata: Emissione Mandati – finestra "Emetti Mandati": Metodo emissione Mandati: Ogni Impegno, Beneficiario e Modalità di pagamento. Data emissione: 25/06/2021. Tipologia: Mandato. Conferma emissione Mandati negativi: spuntato]

Il mandato creato è il **n. 12**.

- Bisogna creare la reversale d'incasso per **€ 220** a compensazione nei confronti dell'Agenzia delle Entrate.

In maniera analoga alla spesa, nella sezione **'Emissione Reversali'**, selezionare il documento **2019-1081** creato in precedenza.

La reversale creata è la **n. 12**.

[Schermata: Emissione Reversali – elenco: Riga 1, Anno 2019, Prog. 806/1081, Nominativo beneficiario: TABELLAZZI GIUSEPPE, Importo: 220,00. Finestra "Emetti Reversali": Metodo emissione Reversali: Ogni Accertamento, Beneficiario e Modalità di pagamento. Data emissione: 25/06/2021. Tipologia: Reversale]

- Prima di inviare la reversale al Tesoriere, va effettuata la **compensazione del mandato con la reversale**.

Per effettuare questo passaggio, bisogna andare in **'Gestione mandati'**.

Selezionare il mandato da compensare e sulla testata del mandato, tasto destro e selezionare **'compensazione'** come evidenziato in figura.

[Schermata: CITY-FINANCING - Gestione Mandati – Elenco mandati: Riga 1, Data 21/06/2019, Importo mandato: 220,00, Descrizione Ordinativo: Iva split affitto impianto sportivo, Causale contabile: 47.01.1, Anno 2019, Num. Imp. Acc.: 210, Missione/Programma/Titolo/Voce di Bil.: IVA A DEBITO. Menu contestuale tasto destro: Modifica, Cancella, Visualizza, Stampa Nota, **Compensazione Ordinativa** (evidenziato)]

Il programma per la gestione della compensazione propone tutti le reversali che hanno stesso beneficiario del presente nel mandato. In questo caso si genera la schermata seguente:

[Schermata: Cityfinancing - Compensazione Ordinativi – "Ordinativi da Selezionare": N° Reversale 12, Data 21-06-2019, Descrizione: Documento Nr. 145/2 del 21-06-2019 From:423, Nominativo: COMUNE DI ANCONA, Importo Reversale: 220,00. Filtro Beneficiario: 2316. "Ordini/Progresso di Riferimento N° Doc": vuoto. In basso: Importo Ordinativo: 220,00, Totale Movimenti: 0, Differenza: 220,00. Bottone "Conferma Compensazione"]

La compensazione si effettua spostando nel riquadro inferiore la reversale e premendo sul tasto **'Conferma compensazione'**.

#### 1.1.1.1 Rilascio implementazioni al software

La modifica è disponibile a partire dalla **release 7.11** su CWOL – patch del **25.01.2023**.