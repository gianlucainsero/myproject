# Comunicazione n. 14/2018 - Modalità di valorizzazione e visualizzazione della causale descrittiva degli OPI (Ordinativi di Pagamento ed Incasso) - Modifica degli OPI

Jesi, 31/10/2018

---

## 1. Modalità di valorizzazione e visualizzazione della causale descrittiva degli OPI

### Premessa

Dal primo gennaio 2018 è entrata in vigore la normativa riguardante le modalità di trasmissione degli ordinativi di incasso e pagamento secondo le regole del SIOPE+.

Dai portali della Ragioneria Generale dello Stato e della Banca d'Italia è possibile scaricare la relativa documentazione alla quale si farà riferimento nella presente comunicazione. In particolare:

- Regole tecniche per la creazione dei flussi da inviare in Banca d'Italia: **Regole Tecniche OPI v. 1.3.1**
- **Linee Guida v. 1.1** per l'emissione degli ordinativi di pagamento e incasso

Le modalità di composizione della causale descrittiva degli OPI (Ordinativi di Pagamento e Incasso) è stata elencata nella comunicazione n.11 del 05.10.2018.

Con il presente documento si forniscono ulteriori precisazioni in merito alla generazione automatica della causale descrittiva degli OPI (Ordinativo di Pagamento Incasso) che **può essere differenziata tra ordinativi di incasso e quelli di pagamento**.

La scelta si effettua andando a personalizzare le modalità di valorizzazione nelle tabelle di personalizzazione => **definizioni e operabilità - Parametri Generali** come di seguito illustrato.

[Immagine: percorso menu Tabelle > Personalizzazioni > Definizioni e operabilità - Parametri Generali]

nei pannelli di personalizzazione delle entrate ed uscite.

[Immagine: tab con "D.L.118 Entrate" e "D.L.118 Spese" evidenziate]

### Regole tecniche

Nelle linee guida viene esplicitata la struttura da adottare nella valorizzazione della causale degli ordinativi (nell'immagine viene riportato un estratto delle regole tecniche).

[Immagine: Estratto delle regole tecniche - Sezione 4.14 "Tracciabilità dei flussi finanziari"]

> **4.14 Tracciabilità dei flussi finanziari**
>
> L'Autorità Nazionale Anti Corruzione, con la Delibera n. 556 del 31 maggio 2017, ha provveduto all'aggiornamento della determinazione n. 4 del 7 luglio 2011 che definiva le linee guida in merito alla tracciabilità dei flussi finanziari.
>
> Al paragrafo 3.2 di tale nuova norma, l'ANAC ha ribadito - ai sensi dell'articolo 185, comma 2 del TUEL (che enumera le informazioni del mandato di pagamento) - il fatto che *[....] in caso di pagamenti assoggettati agli obblighi di tracciabilità, la causale del pagamento dovrà riportare il codice CIG e, ove necessario, il codice CUP. Si rammenta che il mandato di pagamento, ai sensi del comma 3 dell'art. 185, è controllato, per quanto attiene alla sussistenza dell'impegno e della liquidazione, dal servizio finanziario, che provvede altresì alle operazioni di contabilizzazione e di trasmissione al tesoriere [...]*.
>
> Poiché nelle procedure interbancarie di trasferimento fondi non è prevista la possibilità di inserire in modo strutturato l'informazione relativa a CIG e CUP (se presente), tali dati dovranno essere veicolati nella causale del SEPA Credit Transfer.
>
> Come riportato dall'art. 185, comma 2 del TUEL, l'indicazione della causale del pagamento è un elemento essenziale dell'ordinativo, che è legittimato e firmato digitalmente dall'Ente. La BT che è tenuta a effettuare i controlli previsti dal TUEL e quelli previsti dalla normativa SIOPE, non può alterare la causale del pagamento o altro dato che identifica l'ordinativo già firmato dal responsabile dell'Ente.
>
> Pertanto, l'elemento `<causale>` della struttura `<informazioni_beneficiario>`, nei casi sottoposti agli obblighi di tracciabilità, dovrà avere la seguente forma:
>
> `"CIG"<valore CIG>["CUP"<valore CUP>]" "<motivo del pagamento>`
>
> Nel seguito si riportano due esempi di valorizzazione della causale del mandato, nelle due versioni con e senza codice CUP:
>
> **CIG12345ABCDE CUP129G09000030002 SALDO FATTURA N. 123/2017**
>
> **CIG12345ABCDE SALDO FATTURA N. 123/2017**
>
> *versione 1.1 - giugno 2018 — Pag. 43 di 58*

### Implementazioni al software

**Personalizzazione:** Per consentire la personalizzazione della modalità di valorizzazione della causale descrittiva nella finestra di gestione dei parametri generali è stato aggiunto il flag evidenziato nell'immagine che consente di selezionare la modalità di valorizzazione della descrizione dei mandati.

[Immagine: campo "Modo valorizzazione descrizione mandato" con menu a tendina "0=Standard (cig, cup, nr e data documento, descrizione documento)"]

Tale flag (e l'analogo flag inserito nel pannello dei parametri di entrata) può assumere uno dei seguenti valori:

- **0 = Standard** (cig, cup, nr e data documento, descrizione documento) — impostazione di default che produce il risultato indicato nelle linee guida e nel documento n.11 del 05.10.2018.
- **1 = Da descrizione impegno/accertamento.** La causale descrittiva viene assunta uguale a quella dell'accertamento se trattasi di incasso, uguale a quella dell'impegno se trattasi di pagamento.

La modifica consente all'Ente di utilizzare una **risoluzione promiscua**, selezionando ad esempio il tipo **'0'** per gli ordinativi di pagamento (in modo da avere evidenza del CIG e degli estremi di documenti pagati) ed il tipo **1** per le reversali di incasso.

**Visualizzazione della causale descrittiva:** La causale descrittiva è quella memorizzata nel campo 'Descrizione Ordinativo', viene visualizzata nella ricerca ed è modificabile dall'utente.

**Visualizzazione dell'Accertamento o Impegno di riferimento dell'OPI:** Nella form di paginazione degli OPI a destra della descrizione dell'ordinativo è stata inserita la visualizzazione dell'accertamento o dell'impegno di riferimento. Le info relative alla distinta sono state spostate verso destra, sono visualizzabili utilizzando lo scorrimento della barra in basso. Questo agevola il tracciamento dell'OPI quando la causale è valorizzata con il CIG ed i riferimenti ai documenti inclusi.

[Immagine: schermata "CITY-FINANCING Gestione Mandati" con griglia superiore che mostra colonne: Nr Mandato, Data Emiss., Importo mandato, Descrizione Ordinativo, Conto (S/Conc), Num. Imp./Acc., Missione/Programma e Titolo, Voce di Sp. e Art. Nella griglia inferiore "Liquidazioni - Mandato Numero 5320" sono visibili: Prog., Nominativo Intestatario/Delegato, Nr. e Data documento, Descrizione Documento, Lordo - Fidei - Netto]

Nell'immagine sopra viene riportato un esempio di ordinativi emessi con la modalità richiesta dallo standard SIOPE+. Come si può notare nella griglia superiore è stata introdotta la visualizzazione del numero e della descrizione dell'impegno.

**Modifica della descrizione dell'OPI:** La causale è modificabile nella gestione del dettaglio dell'ordinativo come di seguito illustrato. Si ricorda che la modifica della causale dell'ordinativo non è sempre possibile in quanto è un elemento distintivo dell'ordinativo e viene controllata dalla banca tesoriere in sede di accettazione delle variazioni. Alcune regole sulla gestione della causale sono riportate nel paragrafo che segue.

[Immagine: schermata "CITY-FINANCING Gestione Dettaglio Mandati" con campi: Nr. Mandato, Tipo Emissione, Data Emissione, Modo di Emissione, Meccanografico, Descrizione Mandato (campo editabile), Importo Mandato, Distinte Globali, Distinte a Conto, Distinte per Conto, Data Inserimento, Esito Invio]

### Rilascio Implementazioni al software

La modifica è disponibile a partire dalla **release 7.02** e viene distribuita con la **patch** rilasciata il giorno 30/10/2018.

---

## 2. Modifica degli OPI

Attualmente sono disponibili due modalità per la comunicazione con la piattaforma SIOPE Plus:

- comunicazione diretta con interfaccia fornita dalla Pal Informatica
- comunicazione con utilizzo piattaforma fornita dall'intermediario

L'obiettivo del presente documento è quello di **rendere chiara e ben definita l'operatività da seguire nei casi di variazione, annullo e sostituzione degli OPI in funzione della loro posizione presente in tesoreria** (Vedi allegato n. 1 in calce alla presente comunicazione).

Le soluzioni per l'invio degli ordinativi (OPI) a Banca d'Italia (Piattaforma SIOPE+) possono avvenire in **modalità diretta** oppure in **modalità con intermediario**.

### 1. Invio OPI in Modalità diretta

Il sistema di invio dei flussi è sincronizzato pertanto l'utente è più guidato rispetto alle decisioni da prendere per le operazioni di variazione, di annullo e di sostituzione. Le informazioni presenti negli ordinativi che **non sono modificabili** dopo l'esecuzione del pagamento e della riscossione in tesoreria (OPI in posizione di eseguito); quando l'ordinativo è eseguito sono:

- "Descrizione del ordinativo" (causale)
- "Soggetto beneficiario"
- "Iban"
- "Importo ordinativo"

I criteri operativi da applicare per le variazioni, gli annulli e le sostituzioni, restano gli stessi utilizzati per l'invio del flusso con modalità intermediario.

### 2. Invio OPI con Intermediario

L'operatore prima di procedere con le operazioni di variazione, annullo o sostituzione su OPI firmati ed inviati a BKIT deve **accertarsi dello stato dell'ordinativo in tesoreria**.

Se non è stata eseguita l'importazione del giornale di cassa lo stato del flusso potrebbe non essere aggiornato e quindi l'operatore prima di eseguire qualsiasi tipo di operazione si dovrà accertare dello stato dell'ordinativo in Banca Tesoriera.

#### In banca tesoreria stato "Non Acquisito" (messaggio di KO dalla Tesoreria)

Non occorre eseguire la variazione ma **escludere gli ordinativi dal flusso**, apportare le modifiche agli ordinativi ed eseguire un nuovo invio del flusso operando dal BO di Cityware.

#### In banca tesoreria stato "Acquisito" (quindi non ancora eseguito)

Si può effettuare sia la variazione che l'annullo.

**Operazione "Variazione"**

Possono essere variati tutti i dati dell'OPI ma bisogna tenere in conto che il mandato è, sì, monobeneficiario e monoposizione, ma la singola riga del flusso che contiene l'importo totale a favore del beneficiario (importo beneficiario 5.10.2 pag. 41 Regole Tecniche v1.4) può essere il risultato di diversi documenti che corrispondono allo stesso criterio di aggregazione al momento della creazione lato Cityware. Questa operatività comporta la riduzione degli OPI emessi ma se la modifica comporta la variazione dei dati che devono essere univoci (Vedi allegato n. 2 in calce alla presente documentazione), occorre eseguire l'annullo dell'intero ordinativo, effettuare le modifiche nelle righe delle singole liquidazioni e rieseguire la funzione di emissione degli ordinativi che in automatico stabilisce quanti ne devono essere emessi.

**Operazione "Annullo"**

L'annullo parziale dell'ordinativo non è previsto. L'annullo dell'ordinativo deve essere sempre completo.

Lato Cityware l'annullo deve ripristinare tutte le componenti dell'OPI tra quelli da pagare o da incassare con possibilità di modificare tutti i dati della singola posizione, compreso beneficiario e IBAN.

#### In banca tesoreria stato "Eseguito" (quindi ordinativo pagato o riscosso)

Sono ammesse le operazioni di variazione e sostituzione ma **non l'annullo**:

**Operazione "Variazione"**

- È consentita solo la modifica dei dati relativi ai **riferimenti contabili**
- Non possono essere modificati i dati del **"beneficiario"**, **"importo"**, **"descrizione dell'ordinativo"** (causale descrittiva), **"modalità di pagamento"** (IBAN), **"codice bollo"**, **"codice spese"**
- A seguito della variazione lo stato dell'ordinativo assume la posizione "Da variare"; per trasmettere successivamente la variazione in Tesoreria è necessario ricreare il flusso.

**Operazione "Sostituzione"**

- È consentita solo la modifica dei dati relativi ai **riferimenti contabili**
- Vengono riemessi uno o più OPI il cui importo totale deve corrispondere con l'importo dell'OPI sostituito
- Non possono essere modificati i dati del **"beneficiario"**, **"importo totale del beneficiario"**, **"descrizione dell'ordinativo"** (causale descrittiva), **"modalità di pagamento"** (IBAN), **"codice bollo"**, **"codice spese"**
- In caso di suddivisione dell'ordinativo in più ordinativi con impegni/accertamenti diversi e singoli importi diversi, la somma totale degli importi deve quadrare con il totale dell'importo dell'ordinativo sostituito.

**Operazione "Annullo"**

L'annullo dell'ordinativo **non può essere effettuato** quando lo stato è eseguito.

---

## Allegati

### Allegato n. 1 – State diagram del processo di invio del flusso OPI

(pag. 15 Linee Guida OPI v. 1.4)

[Diagramma di stato del processo di invio del flusso OPI: Il flusso parte dallo stato "Emesso" (da procedure interne ente) → "upload flusso" → "Accettato SIOPE+" → "download flusso (banca)" → "Ricevuto Banca" (Controlli banca) → da cui si dirama in "Accettato Banca" (flusso OK) o "Rifiutato Banca" (flusso errato). Da "Accettato SIOPE+" può anche andare a "Rifiutato SIOPE+" (errore HTTP) in caso di "errore su upload flusso (ente)". Gli stati terminali sono raggiunti tramite "download messaggio conferma ricezione flusso (ente)" o "download messaggio rifiuto flusso (ente)".]

### Allegato n. 2 – Elementi per aggregazione documenti

(Slides PPT distribuite durante la formazione per SIOPE+)

**Elementi x aggregazione documenti**

Vengono controllate le seguenti univocità:

1. Tipo Debito/Credito SIOPE
2. Transazione elementare (piano finanziario, Cofog, transazione UE)
3. Impegno Spesa
4. Beneficiario
5. Modalità di pagamento del beneficiario (IBAN)
6. CUP (codice unico progetto)
7. CIG (Codice identificativo Gara o motivo esenzione)
8. Decreto di liquidazione
9. Conto di Tesoreria, Bolli e Spese