# Aggiornamento regole OPI valide dal 01.07.2021

## Argomenti

- Aggiornamento regole OPI valide dal 01.07.2021.
- Operatività da seguire nelle varie fasi del mandato informatico dopo l'invio in tesoreria (variazione, annullo e sostituzione).

---

# Descrizione delle modifiche alle regole tecniche e modalità operative

## Data di effettuazione del pagamento

L'ente può dare disposizioni circa la data di effettuazione del pagamento compilando la **data esecuzione pagamento**.

L'ente avvalora il campo **data esecuzione pagamento** posizionandosi nel campo del documento di spesa denominato **"valuta fissa per richiesta pagamento"**.

[Immagine: campo "Valuta fissa richiesta per Pagamento" valorizzato con data 18-07-2020 nel documento di spesa]

Se si intende ordinare perentoriamente la data nella quale deve essere estinto il mandato, nella consapevolezza dei tempi necessari al perfezionamento del pagamento nei confronti del creditore.

## Controllo sul formato del Codice CIG

Attualmente il codice CIG deve essere valorizzato nel caso in cui l'ordinativo di pagamento abbia come natura di debito **"COMMERCIALE"**. In mancanza di tale codice, si deve valorizzare il codice del **motivo di esclusione del codice CIG**, che contiene la descrizione del motivo per il quale il codice appalto non può essere fornito.

Con le nuove regole, sono stati previsti tre possibili formati del codice CIG:

- **CIG**: 7 caratteri numerici seguiti da 3 caratteri numerici e/o alfabetici maiuscoli (valori da A ad F);
- **Smart CIG**: 1 carattere alfabetico maiuscolo (valori da V a Z) seguito da 9 caratteri numerici e/o alfabetici maiuscoli (valori da A ad F);
- **CIG Unico**: 1 carattere alfabetico maiuscolo (valori da A a U) seguito da 9 caratteri numerici e/o alfabetici maiuscoli (valori da A ad F).

Oltre ai controlli formali previsti per il codice CIG, la piattaforma SIOPE+ eseguirà anche un **controllo di esistenza del codice** presso le banche dati degli Enti preposti alla gestione dei CIG.

- `> 40.000€` → CIG ordinario
- `< 40.000€` → CIG «semplificato» (SmartCIG)

## Esclusioni del CIG in fattura

- Accordo tra amm.ni aggiudicatrici
- Acquisto o locazione di terreni o immobili
- Affidamenti in-house
- Prestazioni in amm.ne diretta
- Appalti settori «energia-acqua»
- Attività esposte alla concorrenza (art. 8)
- Concessioni attività in paesi terzi
- Contratti di associazione
- Contratti dell'autorità giudiziaria
- Contratti di difesa
- Contratti con s.a. estera
- Contratti di lavoro
- Diritto esclusivo
- Erogazioni liberalità
- Impresa collegata
- Incarichi di collaborazione
- Joint venture
- Prestazioni socio-sanitarie
- Riassicurazione
- Risarcimenti indennizzi
- Servizi finanziari
- Servizi campagne politiche
- Spese economali
- Sponsorizzazione
- Trasferimento fondi
- Trasporto aereo

## Soppressione dei tipi di pagamento

Le due tipologie di pagamento **"vaglia postale"** e **"vaglia tesoro"**, che possono essere identificate nella tabella delle modalità di pagamento con i codici evidenziati (rispettivamente `9` e `10α`) presenti nella colonna **'Cod.Pag.Risc.Tes.'**, **non possono essere più utilizzate** per l'emissione degli ordinativi di pagamento.

[Immagine: tabella modalità di pagamento con codici "60 Vaglia Postale Ordinario" (9) e "61 Vaglia Tesoro" (10α)]

## Ritenute per accrediti alla Tesoreria Provinciale dello Stato (Tabella A e B)

Per queste due modalità di pagamento (codici `7` e `6` nella colonna 'Cod.Pag.Risc.Tes.') è stata prevista la **rimozione del vincolo** di non poter avere le ritenute associate, previsto nelle Linee guida OPI per gli accrediti in **Tesoreria Provinciale dello Stato Tabella A e B**.

Pertanto, gli ordinativi a favore di una contabilità speciale presso la Tesoreria Provinciale dello Stato a partire da questa data potranno avere ritenute associate ed eseguire il pagamento inserendo una **unica liquidazione**.

### Modalità operativa attuale

Per l'emissione dell'ordinativo dovevano essere inserite **due righe di liquidazione**:

- La **prima riga** con l'importo netto e con la modalità di pagamento "Tesoreria Provinciale dello Stato".
- La **seconda riga** con l'importo della ritenuta e la modalità di pagamento più appropriata, di solito "Compensazione".

### Nuova modalità operativa

Per l'emissione dell'ordinativo può essere inserita una **unica riga di liquidazione** con l'importo lordo, l'importo della ritenuta e con la modalità di pagamento "Tesoreria Provinciale dello Stato".

[Immagine: form con IMPORTO LORDO 357,00, RITENUTE 32,45 e singola riga di liquidazione]

## Regolarizzazione dei sospesi in uscita (debiti commerciali)

Per i soliti debiti commerciali, al fine di consentire una puntuale regolarizzazione del sospeso da parte della piattaforma PCC, è stato inserito il **vincolo di inserire per ogni mandato un solo sospeso di uscita**.

In questo modo viene permesso al sistema PCC di associare al mandato la **data effettiva** in cui la banca ha provveduto a pagare il fornitore, al posto della data del mandato di regolarizzazione.

[Immagine: form provvisori con una sola riga di sospeso (Nr. Provvisorio 155, Importo 357,00)]

## Mandati che collegano reversali con le ritenute

È stato **rimosso il vincolo** di non poter associare le ritenute, previsto nelle Linee guida OPI per il tipo di pagamento tramite **"ACCREDITO CONTO CORRENTE POSTALE"** (codice `5` nella colonna 'Cod.Pag.Risc.Tes.').

Pertanto, a partire da tale data, anche questo tipo di pagamento potrà essere utilizzato per la liquidazione delle spese anche nel caso di ritenute associate.

[Immagine: form liquidazione con sezione "Ritenute Lig." valorizzata e reversale di rivalsa collegata]

## Verifica aggiornamento software (Cityware Online)

Per Enti che operano tramite Cityware Online con collegamento diretto con Banca d'Italia, si consiglia di verificare che la **data di aggiornamento del software sia posteriore al 22.04.2021**, al fine di avere a disposizione i controlli che SIOPE Plus attiverà dal 01.07.2021.

Per verificare la data di aggiornamento: aprire il **Pannello di Controllo** e controllare la voce "Versione build".

Nel caso in cui si voglia aggiornare il software, contattare `sistemi@cityware.online` per concordare un appuntamento per effettuare l'attività.

---

# Operatività nelle varie fasi del mandato informatico dopo l'invio in tesoreria (variazione, annullo e sostituzione)

Gli OPI sono costituiti da mandati di pagamento e reversali d'incasso: ogni mandato di pagamento o reversale di incasso elettronica contiene una sola **"disposizione"** relativa a un unico beneficiario/versante.

L'applicativo Cityware invia in tesoreria ordinativi **monobeneficiari e monoposizione** (un soggetto con un'unica riga).

Cityfinancing raggruppa in automatico più documenti negativi e positivi che rispettano i criteri della transazione elementare e di lavorazione presso la Tesoreria, generando un unico ordinativo che possiede i requisiti per essere raggruppato su una unica riga al momento della creazione del flusso OPI. Questo al fine di evitare un ordinativo per ogni documento.

## Univocità controllate all'emissione dell'ordinativo

Al momento dell'emissione dell'ordinativo, **Cityware controlla** che vengano rispettate le seguenti univocità:

1. Tipo Debito\Credito SIOPE
2. Transazione elementare (piano finanziario, Cofog, transazione UE)
3. Impegno Spesa
4. Beneficiario
5. Modalità di pagamento del beneficiario (IBAN)
6. CUP (Codice Unico Progetto)
7. CIG (Codice Identificativo Gara o motivo esenzione)
8. Decreto di liquidazione
9. Conto di Tesoreria, Bolli e Spese

Tali controlli fanno sì che Cityware accorpi per la Tesoreria tutti gli ordinativi che sono assimilabili creando al suo interno un **OPI multi-riga**.

### Esempio: ordinativo di pagamento multi-riga

[Immagine: situazione su archivi Cityfinancing con mandato unico e tre righe di liquidazione verso lo stesso beneficiario (TELECOM ITALIA S.P.A.)]

## Tipologie di operazioni sugli ordinativi

Le tipologie di operazioni che possono essere effettuate sugli ordinativi di pagamento e incasso sono **4**:

1. **INSERIMENTO** = identifica l'emissione di nuovo ordinativo
2. **ANNULLO** = identifica l'operazione di annullamento di un ordinativo
3. **VARIAZIONE** = identifica l'operazione di modifica dei dati di un ordinativo
4. **SOSTITUZIONE** = identifica l'operazione per la rettifica dei dati finanziari di un ordinativo

## Tipologie di controlli con la Piattaforma SIOPE+

Nell'ambito del colloquio con la Piattaforma SIOPE+ esistono **2 tipologie di controlli**:

1. **CONTROLLI SU FLUSSO OPI** = sono controlli che vengono effettuati da Banca d'Italia e dalla Banca Tesoriera a livello di flusso XML e prevedono l'accettazione o lo scarto dell'intero flusso.
2. **CONTROLLI SU SINGOLI OPI** = sono controlli che vengono effettuati dalla Banca Tesoriera a livello di singolo ordinativo e prevedono l'accettazione o lo scarto del singolo OPI.

## Iter standard di un OPI

[Diagramma di flusso: Iter standard di un OPI. Il flusso parte da "Emissione OPI" → "Firma OPI" → "Invio flusso a BKIT". BKIT effettua il "Controllo formale su flusso": con esito ACK KO si va a "Rifiutato SIOPE+" (correggere errori formali su flusso), con ACK OK si va ad "Accettato SIOPE+". La BT scarica il flusso da SIOPE+ e effettua il "Controllo formale BT su flusso": ACK KO → "Rifiutato Banca", ACK OK → "Accettato Banca". La BT lavora il flusso e effettua il "Controllo di merito BT su singoli OPI": ACK KO → "OPI Non Acquisito", ACK OK → "OPI Acquisito" → "OPI eseguito/variato/sostituito". Legenda: ACK = Acknowledge = messaggio di ricezione; BT = Banca Tesoriera; BKIT = Banca d'Italia.]

### Operazioni ammesse in base allo stato dell'OPI

| Situazione OPI in Tesoreria | Operazioni ammesse |
|---|---|
| OPI Accettato (Ricevuto) | ANNULLO |
| OPI Non Acquisito | NUOVO INSERIMENTO |
| OPI Acquisito | VARIAZIONE, ANNULLO |
| OPI Eseguito | VARIAZIONE (*), SOSTITUZIONE |

[Diagrammi di flusso: quattro varianti dello stesso iter con evidenziazione in giallo dello stato raggiunto e riquadro giallo con l'operazione ammessa: "Flusso accettato Banca – OPI Ricevuto" → ANNULLO; "OPI Non Acquisito" → NUOVO INSERIMENTO; "OPI Acquisito e non ancora eseguito" → VARIAZIONE, ANNULLO; "OPI Eseguito" → VARIAZIONE (*), SOSTITUZIONE.]

---

# Controlli su flusso OPI

I flussi OPI sono sottoposti a diversi livelli di controllo prima di essere eseguiti o regolarizzati da parte della Banca Tesoreria.

Per agevolare l'operatività dell'Ente, vengono spiegati i controlli presenti nell'iter di gestione dei flussi in modo che gli operatori della ragioneria riescano ad individuare a quale livello si è verificato un eventuale 'scarto' del flusso OPI per poi poter agire in modo adeguato e correggere l'errore.

## Livello di controllo: Cityfinancing

Al momento della creazione del flusso XML, il programma di contabilità effettua **preventivamente** i controlli che impedirebbero al flusso di essere elaborato dalla Tesoreria.

Tali controlli sono gestibili da **'Tabelle' → 'Personalizzazioni' → 'Definizioni e operabilità: Parametri generali'**, sezione **Tesoreria**.

[Immagine: finestra "Definizioni e operabilità" con tab "Tesoreria" selezionata, contenente "Controlli Fissi su Ordinativi" e "Controlli Attivabili su Ordinativi"]

### Esempio: controllo presenza bollo in caso di ordinativi a regolarizzazione di provvisori

[Immagine: elenco anomalie riscontrate con mandato 2018/5375 scartato per "Causale esenzione bollo non valida, per la regolarizzazione di provvisori/sospesi la causale deve essere DOCUMENTO A REGOLARIZZAZIONE DI PROVVISORI/SOSPESI"]

Dopo aver segnalato l'errore tramite pop-up ("Sono stati riscontrati degli errori negli ordinativi selezionati. Continuare?"), Cityware permette di effettuare due operazioni:

1. Premendo **'Sì'** viene data la possibilità di creare un flusso XML che conterrà soltanto gli ordinativi corretti escludendo l'ordinativo errato (n. 5375).
2. Al contrario, annullando l'operazione, si ha la possibilità di correggere l'anomalia e riproporre la stessa selezione.

[Immagine: form liquidazione con campo "Codice Bollo" valorizzato con 10 "ESENTE BOLLO - AMM.NE PUBBLICA"]

### Esempi di ulteriori anomalie bloccanti

- **Mandato 2020/77**: "Non consentito specificare importo ritenute senza la relativa reversale a copertura." → verificare la sezione "Ritenute Lig." e collegare la reversale.
- **Mandato 2020/1**: "Importo ritenute su liquidazione diverso da totale reversali di rimborso." → controllare che l'importo ritenute coincida con il totale reversali di rivalsa.
- **Mandato 2020/66**: "Codice fiscale obbligatorio per Documenti commerciali analogici." → per documenti con Tipo Documento Siope Plus "Analogica" è obbligatorio il codice fiscale.

## Operatività: caricamento flusso OPI

Se non è disponibile per la firma, il flusso sarà presente tra i **'Flussi scartati'** ed è importante verificare il motivo dello scarto.

La presenza dell'errore su un **solo ordinativo** provoca lo **scarto totale del flusso**, indipendentemente dalla numerosità degli ordinativi presenti nel flusso stesso.

[Immagine: elenco flussi scartati con errore "QUAD - 042 - La Data Esecuzione pagamento indicata non è valida. Va indicata una data futura."]

Dopo aver verificato che il flusso è stato scartato, occorre tornare in Cityware e **cancellare l'intero pacchetto** (menu *Funzioni di servizio → Esportazioni per Tesoreria → Mandati/Reversali*, pulsante **Cancella**).

In questo modo tutti gli ordinativi presenti nel flusso torneranno nella situazione iniziale di **non inviati in tesoreria**.

A questo punto per l'operatore della ragioneria si presentano due possibilità:

1. Se vi è urgenza di inviare il flusso con gli ordinativi corretti, è possibile ricreare il flusso XML escludendo gli ordinativi in errore.
2. Correggere gli ordinativi in errore e ricreare il flusso con tutti gli ordinativi presenti in origine.

## Livello di controllo: Banca d'Italia

La **Piattaforma SIOPE+** gestita da Banca d'Italia **non effettua controlli di merito** sui flussi XML ma si limita a verificare la **correttezza formale** dei flussi rispetto alle Regole Tecniche OPI e li inoltra al destinatario, limitandosi a bloccare e restituire al mittente esclusivamente i flussi che impediscono di identificare correttamente mittente e destinatario del flusso o di verificarne il contenuto (**validazione XML**).

## Livello controllo: Banca Tesoriera

**(1)** Dopo aver ricevuto il messaggio di **'ACK OK'** da parte di Banca d'Italia, i singoli ordinativi del flusso passano nello stato **ACCETTATO SIOPE+**. In questo momento gli ordinativi vengono resi disponibili alla Banca Tesoriera che li scarica dalla Piattaforma SIOPE+.

Al momento dello scarico degli OPI dalla Piattaforma SIOPE+, la Tesoreria verifica che questi siano firmati correttamente e gli ordinativi passano allo stato **RICEVUTO**. Durante questa fase la Tesoreria **non effettua controlli di merito** e il flusso stesso non può essere considerato in lavorazione.

**(2)** Successivamente, l'ordinativo passerà in lavorazione e la Banca Tesoriera effettuerà il proprio **controllo di merito** su tutti i dati dei **singoli ordinativi**.

**(3)** Gli esiti di tale controllo sono due e sono tra loro alternativi:

- **Controllo OK** → ordinativo passa in stato **ACQUISITO**: l'ordinativo ha superato il controllo di merito della Tesoreria ed è pronto per essere eseguito/regolarizzato (i tempi di esecuzione possono variare in base alla Tesoreria).
- **Controllo KO** → ordinativo passa in stato **NON ACQUISITO**: l'ordinativo non ha superato il controllo di merito della Tesoreria e quindi è stato scartato dalla stessa.

---

# Gestione degli ordinativi in base allo stato

## Ordinativo ACQUISITO

Se l'ordinativo è in stato **ACQUISITO** significa che verrà eseguito/regolarizzato dal Tesoriere a breve termine.

Qualora l'operatore della ragioneria si accorga di dover modificare alcuni dati, è possibile intervenire sull'ordinativo in due modi:

### VARIAZIONE

Potenzialmente sono modificabili **tutti i campi** a patto che le modifiche riguardino **tutte le righe dell'ordinativo**.

[Immagine: menu contestuale riga liquidazione con voce "Variazione" selezionata]

### ANNULLO

Un ordinativo **non può essere annullato parzialmente**. Inoltre, se l'ordinativo è multi-riga (= ci sono più riscossioni/liquidazioni) e si vogliono apportare modifiche ad **alcune righe (ma non a tutte)** è necessario eseguire l'**annullo** dell'ordinativo. Una volta inviato l'annullo, le liquidazioni/riscossioni torneranno attive e si potranno effettuare le modifiche; successivamente, sarà il programma di emissione dei mandati a decidere quanti ordinativi generare.

## Ordinativo NON ACQUISITO

Se l'ordinativo è in stato **NON ACQUISITO**, l'operatore deve innanzitutto **verificare il motivo dello scarto**.

**Come visualizzare il motivo dello scarto?** Cliccare sull'icona di dettaglio (elenco) per i dettagli dello scarto.

[Immagine: dashboard Tesoreria con riquadri "Inserimenti non accettati", "Variazioni non accettate", ecc.; dettaglio evento con messaggio "CODICE CCGE - CCGU NON AMMESSO"]

### Motivo dello scarto comprensibile (es: IBAN errato)

L'operatore della ragioneria può in autonomia **escludere l'ordinativo dal pacchetto** (**non cancellare l'intero pacchetto**); una volta escluso l'ordinativo dal pacchetto, questo tornerà nella situazione iniziale di non inviato e sarà possibile effettuare le dovute modifiche andando a richiamare il singolo ordinativo.

Successivamente l'ordinativo dovrà essere re-inviato come **NUOVO INSERIMENTO** (**no variazione, no annullo, no sostituzione**).

### Motivo dello scarto incomprensibile (es: errore con codice alfanumerico)

L'operatore della ragioneria deve **contattare il Tesoriere** e chiedere maggiori informazioni riguardo lo scarto. Una volta individuato il motivo dello scarto, la procedura da seguire è la stessa descritta in precedenza.

Successivamente l'ordinativo dovrà essere re-inviato come **NUOVO INSERIMENTO** (**no variazione, no sostituzione, no annullo**).

> **Nota di supporto:** in entrambe le situazioni è possibile richiedere supporto previo ticket a `cityfinancing@palinformatica.it`. Nel caso di errore incomprensibile, il supporto può intervenire solo dopo che l'Ente abbia compreso il motivo dell'errore.

## Ordinativo ESEGUITO

Se l'ordinativo si trova in stato di **ESEGUITO** significa che la Tesoreria ha riscosso/pagato l'ordinativo e quindi è già stata effettuata la transazione monetaria.

Considerato che gli ordinativi eseguiti sono ordinativi formalmente 'chiusi', **prima di procedere con modifiche di alcun genere è necessario accertarsi con la Tesoreria che accettino tali modifiche**.

Naturalmente ad ordinativo eseguito i **campi modificabili sono soltanto i riferimenti contabili** (accertamento/impegno).

Per modificare i riferimenti contabili di un ordinativo eseguito è possibile operare in due modi a seconda dei casi:

### VARIAZIONE (*)

Utilizzare tale operazione quando si decide di modificare l'impegno/accertamento su **tutte le righe** (naturalmente su tutte le righe avremo lo stesso nuovo accertamento/impegno).

[Immagine: menu contestuale con voce "Cambia Impegno" selezionata]

### SOSTITUZIONE

Utilizzare tale operazione quando l'ordinativo lato Cityware è **multi-riga** e si vogliono modificare i riferimenti contabili **solo di alcune righe**.

[Immagine: menu contestuale con voce "Sostituzione" selezionata]

**Procedura di sostituzione:**

1. Selezionare le righe da sostituire e confermare (pulsanti "Nuova Riga" / "Conferma").
2. Confermata e completata la procedura per la sostituzione, il programma elimina a mano a mano le righe di dettaglio sostituite e genera le nuove liquidazioni per le righe dell'ordinativo sostituito.
3. **Prima di emettere i nuovi ordinativi sostituti**, bisogna modificare nelle nuove liquidazioni generate la modalità di pagamento presente con quella di **'sostituzione'**.

Nella tabella delle modalità di pagamento (*Tabelle → Clienti/Fornitori → Modalità Riscossione e Pagamento*), questo tipo di modalità di pagamento, se inserita precedentemente, può essere identificata con il codice presente nel campo **'Cod.Pag.Risc.Tes.'** (es. codice `17` per "Sostituzione").

## Operazioni su ordinativi a copertura di provvisori

Alcune regole cambiano quando gli ordinativi sono a copertura di provvisori. Se in tesoreria lo stato dell'ordinativo è **'eseguito'**, in questo caso può essere eseguita la **'variazione'** di tutti i dati in modo univoco che compongono l'ordinativo. Inoltre, può essere eseguito **'l'annullo'**, ma **non la 'sostituzione'** dell'ordinativo. Si consiglia comunque di concordare prima con la propria banca tesoriera le operazioni da eseguire.

## Iter standard di un OPI (eventi mandato)

Di seguito viene presentato l'iter standard di un ordinativo di pagamento e incasso:

| Evento Mandato | Data/Ora | Operatore |
|---|---|---|
| INSERIMENTO - CARICATO | 05/04/2018 10:41:24 | |
| INSERIMENTO - VISTATO | 05/04/2018 10:52:16 | |
| INSERIMENTO - FIRMATO | 05/04/2018 11:55:15 | |
| INSERIMENTO - INVIATO | 05/04/2018 11:55:16 | Sistema |
| INSERIMENTO - ACK OK | 05/04/2018 12:00:58 | Banca D'Italia |
| INSERIMENTO - RICEVUTO | 05/04/2018 12:02:54 | |
| INSERIMENTO - MARCATURA EFFETTUATA | 05/04/2018 12:08:58 | Sistema |
| INSERIMENTO - ACQUISITO | 05/04/2018 13:41:28 | |
| INSERIMENTO - ESEGUITO | 13/04/2018 20:37:18 | 4.988,43 € |

---

# Compensazione tra ordinativi

Dal 01/01/2019 la compensazione tra ordinativi viene effettuata a partire dalla **testata del mandato**.

La scelta di tale modifica è stata effettuata in quanto nelle Regole Tecniche OPI il collegamento tra reversale e mandato è su quest'ultimo.

In tal modo è diventato possibile associare ad un mandato più reversali **ma non viceversa**.

## Compensazioni multiple

Per effettuare **compensazioni multiple** (= compensare un mandato con due o più reversali) è necessario impostare in **Tabelle → Personalizzazioni → Def. e operabilità: Parametri generali → label 'Tesoreria'** il seguente flag:

- ☑ **Consente compensazione revers. multipla**

## Procedura di compensazione

1. Richiamare la **testata del mandato** e selezionare dal menu contestuale la voce **"Compensazione Ordinativi"**.
2. Il programma visualizzerà in automatico tutte le **reversali non ancora inviate** che riportano lo stesso soggetto presente nel mandato.
3. Le reversali visualizzate devono essere **selezionate e trascinate** fino a che il campo **'importo differenza'** nella form sottostante sia uguale a **zero**.
4. La compensazione tra mandati di pagamento e reversali di incasso deve essere **sempre di pari importo**.
5. La compensazione si conclude con la selezione del bottone **'Conferma compensazione'**.

## Errore da evitare: doppia compensazione

**Non bisogna** incorrere nell'errore di eseguire la funzione di compensazione tra ordinativi se nel mandato di pagamento che si va a compensare è presente un **importo ritenuta**, in quanto in questo caso esiste **già il collegamento con la reversale** nella sezione delle **'Ritenute liquidate'**.

Compensando l'ordinativo con la reversale, il risultato sarebbe una **doppia compensazione** ed il flusso OPI verrebbe **scartato**.