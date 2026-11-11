# Ordinativi a Compensazione CWOL

**Scopo:** Il documento ha lo scopo di illustrare le operazioni da effettuare nell'ambiente Cityware Online per inserire degli ordinativi a compensazione.

---

## 1. Esempio Fattura Attiva in regime Split Payment verso la Pubblica Amministrazione

Verrà esaminato il caso in cui un ente deve emettere una fattura per affitto di un impianto sportivo ad un Comune limitrofo, per un importo di 1000 euro + 220 euro di iva (in regime split payment).

### Fase 1: Selezione tipo movimento e dati fattura

La prima fase richiede di selezionare il tipo movimento, di indicare il settore iva e la data di emissione della fattura, come mostrato nella figura seguente:

[Figura: Schermata "Gestione Documenti Fatturazione Entrate" con elenco tipi movimento per l'ente. Vengono visualizzati i campi: Tipo Mov., Descrizione Tipo movimento, Tipo Doc., Mov.Conf., Causale documento, Settore IVA. In basso sono presenti i parametri di ricerca: Tipo documento Fatt. Entrate, Settore IVA (02 - IMPIANTI SPORTIVI), Codice Utente (CED - CED POSTGRESQL LOCALE), Data documento (21/06/2019). Pulsanti "Altra Ricerca" e "Avanti" sulla destra.]

Premendo sul tasto **'Avanti'**, si richiede l'inserimento del cliente, della modalità di riscossione e dell'ufficio destinatario SDI per l'invio della fattura.

E' possibile inserire ulteriori voci o modificare quella già collegata al tipo movimento selezionato.

In automatico, essendo la fattura emessa verso un ente pubblico, il programma imposta il tipo iva come **split payment**, come evidenziato in figura.

[Figura: Schermata "Dettaglio Documento" con scheda "Testata" attiva. Cliente: COMUNE DI ANCONA (Codice cliente 423, Partita IVA 00351040423, Persona Giuridica). Ufficio destinatario (SDI): 11 - ESQFRR Comune di ancona - rag. Elenco Voci: Proventi utilizzo impianti sportivi - IVA 22%, Importo 1.220,00, IVA 22%. Campo "Tipo Iva" impostato su "Split" (evidenziato in rosso). Totali: Imponibile 1.000,00, IVA 220,00, Totale documento 1.220,00. Pulsante "Aggiungi" in alto a destra.]

### Fase 2: Generazione della fattura

Una volta inseriti tutti i dati necessari alla compilazione della fattura, premendo sul tasto **'Aggiungi'**, si genera la fattura in formato analogico, come sotto riportato.

[Figura: Fattura analogica del Comune di (Provincia di AN). Tipo Documento: Fattura, Numero Documento: 68/2, Data Documento: 21-06-2019, Esercizio: 2019. Cliente: COMUNE DI (Lgo XXIV Maggio n. 1, 60100 - ANCONA (AN)), Codice Fiscale/Partita IVA: 00351040423. Descrizione: Proventi utilizzo impianti sportivi - IVA 22%, Q.tà 1,00, Prezzo unitario 1.220,00, Imponibile 1.220,00, Cod. IVA A-22. Assoggettamento IVA: A - Iva Normale (Split Payment - Art. 17 ter D.P.R. 633/1972), Imponibile 1.000,00, IVA 22, Imposta 220,00. Totale Imponibili: 1.000,00, Totale Imposte: 220,00. Esente da bollo. Totale Documento: 1.220,00. Totale da pagare in lettere: MILLE/00. TOTALE DA PAGARE €: 1.000,00. Scadenza pagamenti: Rata 1 - 30-07-2019 - 500,00; Rata 2 - 29-08-2019 - 500,00.]

### Fase 3: Verifica nel modulo "Documenti Entrate"

Entrando nel modulo **"Documenti Entrate"** di cityware.online (raggiungibile da **"Servizi Economici -> Finanziaria -> Entrata"**) selezionando la voce **'solo movimenti fatturazione attiva'** è possibile visionare la fattura appena creata:

[Figura: Schermata "Documenti Entrate" con campi di ricerca (Cliente, Anno/Progressivo inserimento, Tipo documento, Importo lordo, Descrizione documento, Numero documento, Numero quietanza, ecc.). Il campo "Includi movimenti" è impostato su "Movimenti solo fatturazione attiva" (evidenziato in giallo). Sezione "Parametri SDI" e "Parametri IVA" visibili.]

La fattura creata precedentemente, documento **2019/1081**, ha l'allegato della fattura creata ed è stata salvata all'interno di **Alfresco**.

[Figura: Elenco documenti con il documento 2019/11081 del 21/06/2019, soggetto COMUNE DI ANCONA, Nr. e Data Documento 68/2 21/06/2019, Descrizione "Proventi utilizzo impianti sportivi", Importo Lordo 1.220,00, Tipo documento "Fatture Emesse (Ris.+Iv.+Cog+Iterr.)". Sotto il documento è visibile "1. Allegati".]

### Fase 4: Scheda IVA

Andando sulla scheda **iva** del documento di entrata creato, l'iva risulta compilata automaticamente sul settore impianti sportivi come riportato in figura.

[Figura: Scheda "IVA" del documento 2019/1081. Riga: Settore 02, Descrizione "IMPIANTI SPORTIVI - 1. Registro Vendite", Codice Causale 55, Descrizione causale "Fattura Emessa (Ris.+Iv.+Cog+Iterr.)", Data Liquidazione 10/12/2026, Importo Totale 1.220,00, Utente mod. CED. Totali: Totale Imp. 1.000,00, Totale IVA 220,00, Differenza 0,00.]

Di seguito si riporta il dettaglio del movimento IVA creato:

[Figura: Finestra "Movimenti IVA - Documento nr. 68/2 del 21/06/2019 del soggetto COMUNE DI ANCONA". Tipo documento: 55 - Fattura Emessa (Ris.+Iv.+Cog+Iterr.). Registro: 1 - Registro Vendite. Tipo eligibilità: Eligibilità immediata. Movimento IVA: Settore IVA 02 - IMPIANTI SPORTIVI. Note per registro IVA: 1081. Riga dettaglio: Imponibile 1.000,00, Assoggettamento 5V, % IVA 22, Importo IVA 220,00, Descrizione assestamento "IVA SPLIT VENDITE", % Indeduc 0,00. Totali: Totale Imp. 1.000,00, Totale IVA 220,00, Differenza 0,00.]

### Fase 5: Scheda Assegnazione

Nella scheda **'Assegnazione'**, si crea in automatico l'assegnazione per l'importo imponibile pari a **€1.000**, essendo l'iva in split.

[Figura: Scheda "Assegnazione" del documento 2019/1081. Riga assegnazione: Num. Riga 0, Area/Settore/Servizio 04.02.02.00 - U.O.C. ECONOMATO E PROVVEDITORATO, Esito Assegnazione "Chiuse automaticamente", Accertamento 2019/00026, Accertato Riscosso 1.000,00, Data Inizio 21/06/2019.]

### Fase 6: Creazione assegnazione per l'IVA split (€220)

A questo punto, va creata un'assegnazione pari a **€220** (cliccando sull'icona **(+)** presente nella sezione "Assegnazione"), come riportato nella figura sottostante.

[Figura: Finestra "Assegnazione - Documento nr. 68/2 del 21/06/2019 del soggetto COMUNE DI ANCONA". Importi: Saldo da Assegnare 0,00, Disponibilità su impegno 15.276,00, Importo assegnazione 220,00, Totale Liquidato 1.220,00, Da liquidare -1.000,00. Esito assegnazione: "Inviata al servizio". Area/Settore/Servizio: 04 02 02 00 - U.O.C. ECONOMATO E PROVVEDITORATO. Voce di Bilancio: 3010100 3101 01 012 - PROVENTI VENDITA BENI MOBILI DELL'ENTE. Piano Finanziario: 3 1 1 1 999 - Proventi da vendita di beni n.a.c. Conto tesoreria: 1C - CONTO LIBERO FRUTTIFERO.]

### Fase 7: Creazione riscossione intestata all'Agenzia delle Entrate

Successivamente, va creata una riscossione (selezionando il tab **Riscossione** e premendo su **(+)**), intestata all'**Agenzia delle Entrate**, la cui reversale dovrà andare a compensare il mandato di pagamento, anche questo intestato all'Agenzia delle Entrate.

[Figura: Finestra "Riscossione" con tab "Dettaglio" attivo. Accertamento: 2019/00022 - Accertamento automaticamente per incasso generico. Voce di Bilancio: 3010200 3102 01 161 - PROVENTI PASTI ADULTI. Piano Finanziario: 3 1 2 1 8 - Entrate da mense. Importo Riscossione: 220,00. Versante-Delegato: 2316 - AGENZIA DELLE ENTRATE (Codice Fiscale 0636391001). Modalità di riscossione: 3 20 - COMPENSAZIONE.]

Il beneficiario deve essere cambiato, inserendo **Agenzia delle Entrate** ed inserendo come modalità di incasso **COMPENSAZIONE**.

### Fase 8: Importazione provvisorio dal Tesoriere

Il Tesoriere ha inviato il provvisorio da regolarizzare per l'importo di € 1.000, quando viene importato il flusso, lo stesso verrà visualizzato nell'elenco sottostante.

[Figura: Schermata "Interrogazione Provvisori" con elenco movimenti provvisori. Il provvisorio 2019/4425 del 01/02/2019, tipo "Afflusso provvisorio", Importo Lordo 1.000,00, Importo Reg. 1.000,00, Stato "Da Registrare", Tipo Esec. "Manuale", Soggetto "COMUNE DI XXXXXX", Tipo Banc. "CASSA". Pulsanti sulla destra: "Altra Ricerca", "Regolarizza", "Visualizza Movimenti da Contabilizzare".]

### Fase 9: Crea da assegnazione

Cliccando sulla matita o sul bottone **"Regolarizza"** nella schermata seguente, è possibile associare il provvisorio con i documenti assegnati (cliccando sul bottone **"Crea da assegnazione"**).

[Figura: Schermata "Interrogazione Provvisori" con dettaglio provvisorio 4425/2019. Data valuta: 20/07/2018, Stato: "Da Registrare", Versante/Beneficiario: COMUNE DI XXXXXX, Causale: "affitto palazzetto", Tipo esecuzione: CASSA, Tipo contabilità: FRUTTIFERO, Destinatario: LIBERA, Importo provvisorio: 1.000,00, Totale associato: 1.000,00, Differenza: 0,00. Pulsante "Crea da assegnazione" evidenziato in basso a destra.]

Si apre una schermata, dove vengono riportate le assegnazioni create in fase di inserimento della fattura. Selezionando l'assegnazione con l'importo di 1000 euro i dati vengono riportati nel provvisorio ed è possibile creare la reversale cliccando sul bottone **"Contabilizza"** presente nella seguente schermata:

[Figura: Schermata con dettaglio provvisorio e pulsante "Contabilizza" evidenziato in giallo. In basso: Movimenti da contabilizzare - Anno/Num. Prog. 2019/00028, Oper. Principale "Riscossione accertamento", Soggetto "COMUNE DI ANCONA", Importo 1.000,00, Causa Man/Rev. "Creazione Riscossione/Liquid...".]

### Fase 10: Elaborazione e creazione reversale

Lanciando l'elaborazione in modalità **"Creazione"** viene creata la riscossione e la relativa reversale:

[Figura: Finestra "Elaborazione Movimenti". Parametri di creazione: Tipo elaborazione "Creazione". Tab "Entrata" attivo. Atto di riscossione: "Nuovo" selezionato. Area-Settore-Servizio: vuoto. Modo emissione reversali: "Ogni Accertamento, be...". Pulsante "Elabora" sulla destra.]

La reversale creata è la **n. 11**:

[Figura: Schermata "Gestione Reversali" con reversale n. 11 del 21/06/2019, Descrizione Ordinativo "Documento Nr. 68/2 del 21-06-2019 Proventi utilizzo impianti sportivi", Disc. "0", Conto "0", Importo 1.221,00, Missione/Programma/Titolo/Fondo/Voce di Bilancio "3102.21.160 - PROVENTI PASTI ADULTI", Tipo emissione "Per ogni Accertamento, Clienti, Inviato". Dettaglio: Anno/Prog. 2019/427, Fornitore "2 - COMUNE DI ANCONA", Importo 1.000,00, Accertamento 2019/00022.]

---

## 1.1 Operazioni da verificare su CWOL

### Mandato a compensazione per l'IVA split (€220)

Va fatto un mandato a compensazione per l'importo pari a **€ 220** (iva split). Deve essere preso un impegno sul piano finanziario **1.10.3.1.1.** 'Versamento IVA a debito per le gestioni commerciali'.

L'impegno può essere preso a totale per tutto lo split generato da fatture di vendita ad altri Enti, previsto nell'anno. Nell'esempio, l'importo è pari a **€ 50.000**:

[Figura: Schermata "Documenti Impegni" - APP CENTER. Anno/Numero: 2019/00210, Competenza: 2019. Voce di Bilancio: 0103110 0103 01 030 - IVA A DEBITO. Disponibilità ad impegnare: 342.211,38. Classificazione Impegno: Piano Finanziario "1 10 3 1 1 - Versamenti IVA a debito per le gestioni commerciali" (evidenziato in rosso). Oggetto: "Versamento iva split commerciale verso altri Comuni". Importo iniziale: 50.000,00. Conto Tesoreria: 1C - CONTO LIBERO FRUTTIFERO.]

### Documento di spesa con liquidazione diretta

Bisogna inserire un documento di spesa con liquidazione diretta, intestato all'**Agenzia delle Entrate**, pari a **€ 220**.

[Figura: Schermata "Documenti Uscita" - APP CENTER. Anno/Progressivo documento: 2019/185. Tipo Documento: 5 - Liquidazioni Dirette (Finanz. & Co. Ana). Importo lordo: 220,00. Fornitore: 2316 - AGENZIA DELLE ENTRATE (Codice Fiscale 0636391001, Persona Giuridica). Modalità di pagamento: 30 - Bon. bancario. IBAN: IT000 BANCA D'ITALIA, CAB 3228, AGENDA FISCALE DELLE ENTRATE, VIA MILANO, 60 G. ROMA.]

La liquidazione diretta è effettuata sull'impegno **2019/210** sul piano finanziario **1.10.3.1.1.**.

[Figura: Scheda "Liquidazione" del documento uscita 2019/185. Riga: Impegno 2019/00210, Importo Impegno 50.000,00, Importo Liquidazione 220,00, Beneficiario "2316 - AGENZIA DELLE ENTRATE", Mandato "12 - 2019", Data Contabilità 21/06/2019, Area "04 - 02 - 07 - 00 - U.O.C. ENTRATE", Piano Finanziario "1 10 3 1 1 - Versamento iva split commerciale verso altri Comuni".]

### Emissione mandato

Posizionarsi nella sezione **'Emissioni Mandati'** e viene emesso il mandato per l'importo di € 220, come riportato nelle seguenti figure.

[Figura: Schermata "Emissione Mandati" con elenco liquidazioni. Riga selezionata: Anno 2019, Prog. 185, Nominativo beneficiario "T'ABRUZZI GIUSEPPE", Modalità Pagamento "Contanti", Numero e Data Documento "185/2019", Importo 220,00. Pulsanti sulla destra: "Altra Ricerca", "Visualizza errori Mandanti", "Emetti Mandato".]

[Figura: Finestra popup "Emissione Mandati". Modo emissione Mandati: "Ogni Impegno, Beneficiario e Modalità di pagamento". Emissione Mandati per determina Liquidazione: deselezionato. Data emissione: 25/06/2021. Tipologia: "Mandato". Conferma emissione Mandato negativo: deselezionato. Pulsanti "Conferma" e "Annulla".]

Il mandato creato è il **n. 12**.

### Reversale d'incasso a compensazione

Bisogna creare la reversale d'incasso per € 220 a compensazione nei confronti dell'Agenzia delle Entrate.

In maniera analoga alla spesa, nella sezione **'Emissione Reversali'**, selezionare il documento **2019-1081** creato in precedenza.

La reversale creata è la **n. 12**.

[Figura: Schermata "Emissione Reversali" con finestra popup "Emissione Reversali". Modo emissione Reversali: "Ogni Accertamento, Beneficiario e Modalità di pagamento". Emissione Reversali per determina Riscossione: deselezionato. Data emissione: 25/06/2021. Tipologia: "Reversale". Conferma emissione Reversale negativo: deselezionato. Pulsanti "Conferma" e "Annulla".]

### Compensazione mandato con reversale

Prima di inviare la reversale al Tesoriere, va effettuata la compensazione del mandato con la reversale.

Per effettuare questo passaggio, bisogna andare in **'Gestione mandati'**. Selezionare il mandato da compensare e sulla testata del mandato, tasto destro e selezionare **'compensazione'** come evidenziato in figura.

[Figura: Schermata "CITY-FINANCING - Gestione Mandati". Elenco mandati con il mandato n. 12 del 27/06/2019, Importo mandato 220,00, Descrizione Ordinativo "Iva split affitto impianto sportivo", Piano/Soggetto "0.015", Num. Imp. Acc. "2019", Missione/Programma/Titolo/Voce di Bil. "IVA A DEBITO - 0103.11.10". Menu contestuale aperto con tasto destro: Modifica, Cancella, Visualizza, Stampa Nota, **Compensazione Ordinativa** (evidenziato in rosso). In basso: Liquidazione - Mandato Numero 12, Progressivo 2019-185, Nominativo "2316 - AGENZIA DELLE ENTRATE", Importo 220,00.]

Il programma per la gestione della compensazione propone tutte le reversali che hanno stesso beneficiario del presente nel mandato. In questo caso si genera la schermata seguente:

[Figura: Finestra "Cityfinancing - Compensazione Ordinativi". Sezione "Ordinativi da Selezionare": Reversale n. 12 del 29-06-2019, Descrizione "Documento Nr. 145/2 del 21-06-2019 Proven...", Nominativo "COMUNE DI ANCONA - 2316 - COMUNE DI ANCONA", Importo Reversale 220,00. Sezione "Ordinativi da compensare" (riquadro inferiore) vuota. In basso: Importo Ordinativo 220,00, Totale Movimenti 0, Differenza 220,00, pulsante "Conferma Compensazione".]

La compensazione si effettua spostando nel riquadro inferiore la reversale e premendo sul tasto **'Conferma compensazione'**.

---

## 1.1.1 Rilascio implementazioni al software

La modifica è disponibile a partire dalla **release 7.11** su CWOL – patch del **25.01.2023**.