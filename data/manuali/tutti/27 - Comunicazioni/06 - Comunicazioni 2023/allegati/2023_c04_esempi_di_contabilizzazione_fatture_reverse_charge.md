# Modalità Contabilizzazione Reverse Charge

## 1. Acquisti da San Marino

Si ricorda che a partire dal 01/07/2022 le fatture ricevute da San Marino saranno cartacee/elettroniche in base alla tipologia di prestazione:

- **Vendita di beni:** obbligo fattura elettronica con o senza IVA esposta
- **Vendita di servizi:** NON vi è l'obbligo della fattura elettronica, il cedente sammarinese può continuare ad inviare fatture cartacee.

### 1.1 Fattura cartacea/elettronica senza IVA esposta dal Cedente/Prestatore

#### Fattura di acquisto beni - elettronica (in ambito IVA COMMERCIALE)

**1. Registrazione Fattura passiva da documento elettronico**

- Utilizzare una causale operativa che preveda solo FINANZIARIA, NO IVA (es: liquidazione diretta – NO ITER)
- Non verrà generata autofattura automatica
- Tipologia documento SDI: TD01
- Al fornitore emesso ordinativo di pagamento per il solo importo dell'imponibile.

Di seguito si propone un esempio di causale operativa da utilizzare:

[Schermata software: Causale operativa "Fattura REVERSE CHARGE ESTERO" - Codice tipo documento 400, Documento di Uscita, Segno movimento Positivo, Valido per finanziaria ✓, Tipo debito/credito (Siope+) Commerciale, Codice tipo documento (codifica SDI) TD01 - Fattura]

**2. Registrazione Autofattura attiva**

- Obbligo autofattura elettronica
- Utilizzare una causale solo IVA, NO FINANZIARIA
- Tipo documento SDI: TD19 inserito nel ciclo attivo che genera un documento speculare nel passivo (come autofattura delle split vendite)
- Registro Vendite Autofatture estere con numerazione progressiva standard (quindi numero documento uguale al protocollo IVA)
- Iva commerciale: scopo comunicazione a SdI e compensata con fattura acquisto
- Allegare alla fattura attiva TD19 la copia di cortesia del documento elettronico in arrivo da SdI

Di seguito si propone un esempio di causale operativa da utilizzare:

[Schermata software: Causale "Autofattura attiva REVERSE (estero)" - Codice tipo documento 401, Documento di Entrata, Valido per IVA ✓, Tipo debito/credito (Siope+) Commerciale, Codice tipo documento (codifica SDI) TD19 - Integrazione/autofattura per acquisto di beni es art.17 c.2 DPR 633/72]

[Schermata software: Causale "Autofattura passiva REVERSE (estero)" - Codice tipo documento 403, Documento di Uscita, Valido per IVA ✓, Registro IVA V - Autofattura vendite estero (reverse), Tipo importo immesso per calcolo IVA: Digitsato imponibile => calcola l'IVA dall'aliquota, Codice numeratore per calcolo protocollo IVA: IVAAUT - Registro IVA autofatture vendite, Causale spesa per registrazione automatica IVA Split/Reverse Charge: 403 - Autofattura passiva REVERSE (estero), Escludi da comunicazione liquidazione periodica IVA ✓, Metodo gestione IVA Split/Reverse: Standard]

Il registro IVA da utilizzare nella causale precedente è da impostare come segue:

[Schermata software: Registro IVA - Codice V, Descrizione "Autofattura vendite estero (reverse)", Tipo registro IVA: Vendite, Registro incluso in liquidazione IVA ✓, Flag stampa totale documento: Totale imponibile e IVA]

La causale dell'autofattura passiva che si creerà in automatico dovrà essere impostata come segue:

[Schermata software: Causale "Autofattura passiva REVERSE (estero)" - Codice tipo documento 403, Documento di Uscita, Valido per IVA ✓, Tipo debito/credito (Siope+) Commerciale, Codice tipo documento (codifica SDI) TD01 - Fattura]

[Schermata software: Causale 403 - Registro IVA A - Autofattura acquisti estero (reverse), Tipo importo immesso per calcolo IVA: Digitsato imponibile => calcola l'IVA dall'aliquota, Codice numeratore per calcolo protocollo IVA: REGAVS - NUMERATORE AUTOFATTURE DA VENDITA SPLIT, Causale entrata per registrazione automatica IVA Split/Reverse Charge: 0, Metodo gestione IVA Split/Reverse: Standard]

Il registro IVA da utilizzare nella causale precedente è da impostare come segue:

[Schermata software: Registro IVA - Codice A, Descrizione "Autofattura acquisti estero (reverse)", Tipo registro IVA: Acquisti, Registro incluso in liquidazione IVA ✓, Flag stampa totale documento: Totale imponibile e IVA]

---

#### Fattura acquisto servizi – elettronica (in ambito IVA COMMERCIALE)

**1. Registrazione Fattura passiva da documento elettronico: Come sopra**

- Utilizzare una causale operativa che preveda solo FINANZIARIA, NO IVA (es: liquidazione diretta – NO ITER)
- Non verrà generata autofattura automatica
- Tipologia documento SDI: TD01
- Al fornitore emesso ordinativo di pagamento per il solo importo dell'imponibile.

Di seguito si propone un esempio di causale operativa da utilizzare:

[Schermata software: Causale "Fattura REVERSE CHARGE ESTERO" - Codice tipo documento 400, Documento di Uscita, Valido per finanziaria ✓, Tipo debito/credito (Siope+) Commerciale, Codice tipo documento (codifica SDI) TD01 - Fattura]

**2. Registrazione Autofattura attiva: come sopra ma autofattura di tipo TD17**

- Obbligo autofattura elettronica
- Utilizzare una causale solo IVA, NO FINANZIARIA
- Tipo documento SDI: TD17 inserito nel ciclo attivo che genera un documento speculare nel passivo (come autofattura dello split vendite)
- Registro Autofatture estere con numerazione progressiva standard (quindi numero documento uguale al protocollo IVA)
- Iva commerciale: scopo comunicazione a SdI e compensata con fattura acquisto
- Allegare alla fattura attiva TD17 la copia di cortesia del documento elettronico in arrivo da SdI

[Schermata software: Causale "Autofattura attiva REVERSE TD17 (estero)" - Codice tipo documento 402, Documento di Entrata, Valido per IVA ✓, Codice tipo documento (codifica SDI) TD17 - Integrazione/autofattura per acquisto servizi dall'estero]

[Schermata software: Causale 402 - Registro IVA V - Autofattura vendite estero (reverse), Tipo importo immesso per calcolo IVA: Digitsato imponibile => calcola l'IVA dall'aliquota, Codice numeratore per calcolo protocollo IVA: IVAAUT - Registro IVA autofatture vendite, Causale spesa per registrazione automatica IVA Split/Reverse Charge: 403 - Autofattura passiva REVERSE (estero), Escludi da comunicazione liquidazione periodica IVA ✓, Metodo gestione IVA Split/Reverse: Standard]

Il registro IVA da utilizzare nella causale precedente è da impostare come segue:

[Schermata software: Registro IVA - Codice V, Descrizione "Autofattura vendite estero (reverse)", Tipo registro IVA: Vendite, Registro incluso in liquidazione IVA ✓, Flag stampa totale documento: Totale imponibile e IVA]

La causale dell'autofattura passiva che si creerà in automatico dovrà essere impostata come segue:

[Schermata software: Causale "Autofattura passiva REVERSE (estero)" - Codice tipo documento 403, Documento di Uscita, Valido per IVA ✓, Codice tipo documento (codifica SDI) TD01 - Fattura]

[Schermata software: Causale 403 - Registro IVA A - Autofattura acquisti estero (reverse), Tipo importo immesso per calcolo IVA: Digitsato imponibile => calcola l'IVA dall'aliquota, Codice numeratore per calcolo protocollo IVA: REGAVS - NUMERATORE AUTOFATTURE DA VENDITA SPLIT, Metodo gestione IVA Split/Reverse: Standard]

Il registro IVA da utilizzare nella causale precedente è da impostare come segue:

[Schermata software: Registro IVA - Codice A, Descrizione "Autofattura acquisti estero (reverse)", Tipo registro IVA: Acquisti, Registro incluso in liquidazione IVA ✓, Flag stampa totale documento: Totale imponibile e IVA]

---

#### Fattura di acquisto beni - elettronica (in ambito IVA ISTITUZIONALE)

**1. Registrazione Fattura passiva da documento elettronico**

- Utilizzare una causale solo FINANZIARIA, NO IVA (liquidazione diretta – NO ITER)
- Non verrà generata autofattura automatica
- Tipologia SDI: TD01
- Al fornitore emesso ordinativo di pagamento per il solo importo dell'imponibile.

Di seguito si propone un esempio di causale operativa da utilizzare:

[Schermata software: Causale "Fattura REVERSE CHARGE ESTERO" - Codice tipo documento 400, Documento di Uscita, Valido per finanziaria ✓, Tipo debito/credito (Siope+) Commerciale, Codice tipo documento (codifica SDI) TD01 - Fattura]

**2. Registrazione Autofattura attiva**

- Obbligo autofattura elettronica
- Utilizzare una causale solo IVA, NO FINANZIARIA
- Tipo documento SDI: TD19 inserito nel ciclo attivo che genera un documento speculare nel passivo (come autofattura dello split vendite)
- Registro Autofatture estere con numerazione progressiva standard (quindi numero documento uguale al protocollo IVA)
- Allegare alla fattura attiva TD19 la copia di cortesia del documento elettronico in arrivo da SdI
- Versamento dell'IVA con F24 EP, codice tributo 622E
- Presentare modello INTRA12

[Schermata software: Causale "Autofattura attiva REVERSE (estero)" - Codice tipo documento 401, Documento di Entrata, Valido per IVA ✓, Codice tipo documento (codifica SDI) TD19 - Integrazione/autofattura per acquisto di beni es art.17 c.2 DPR 633/72]

[Schermata software: Causale 401 - Registro IVA V - Autofattura vendite estero (reverse), Tipo importo immesso per calcolo IVA: Digitsato imponibile => calcola l'IVA dall'aliquota, Codice numeratore per calcolo protocollo IVA: IVAAUT - Registro IVA autofatture vendite, Causale spesa per registrazione automatica IVA Split/Reverse Charge: 403 - Autofattura passiva REVERSE (estero), Escludi da comunicazione liquidazione periodica IVA ✓, Metodo gestione IVA Split/Reverse: Standard]

Il registro IVA da utilizzare nella causale precedente è da impostare come segue:

[Schermata software: Registro IVA - Codice V, Descrizione "Autofattura vendite estero (reverse)", Tipo registro IVA: Vendite, Registro incluso in liquidazione IVA ✓, Flag stampa totale documento: Totale imponibile e IVA]

La causale dell'autofattura passiva che si creerà in automatico dovrà essere impostata come segue:

[Schermata software: Causale "Autofattura passiva REVERSE (estero)" - Codice tipo documento 403, Documento di Uscita, Valido per IVA ✓, Codice tipo documento (codifica SDI) TD01 - Fattura]

[Schermata software: Causale 403 - Registro IVA A - Autofattura acquisti estero (reverse), Tipo importo immesso per calcolo IVA: Digitsato imponibile => calcola l'IVA dall'aliquota, Codice numeratore per calcolo protocollo IVA: REGAVS - NUMERATORE AUTOFATTURE DA VENDITA SPLIT, Metodo gestione IVA Split/Reverse: Standard]

Il registro IVA da utilizzare nella causale precedente è da impostare come segue:

[Schermata software: Registro IVA - Codice A, Descrizione "Autofattura acquisti estero (reverse)", Tipo registro IVA: Acquisti, Registro incluso in liquidazione IVA ✓, Flag stampa totale documento: Totale imponibile e IVA]

---

#### Fattura acquisto servizi – elettronica (in ambito IVA ISTITUZIONALE)

**1. Registrazione Fattura passiva da documento elettronico:**

- Utilizzare una causale solo FINANZIARIA, NO IVA (liquidazione diretta – NO ITER)
- Non verrà generata autofattura automatica
- Tipologia SDI: TD01
- Al fornitore emesso ordinativo di pagamento per il solo importo dell'imponibile.

Di seguito si propone un esempio di causale operativa da utilizzare:

[Schermata software: Causale "Fattura REVERSE CHARGE ESTERO" - Codice tipo documento 400, Documento di Uscita, Valido per finanziaria ✓, Tipo debito/credito (Siope+) Commerciale, Codice tipo documento (codifica SDI) TD01 - Fattura]

**2. Registrazione Autofattura attiva: come sopra ma autofattura di tipo TD17**

- Obbligo autofattura elettronica
- Utilizzare una causale solo IVA, NO FINANZIARIA
- Tipo documento SDI: TD17 inserito nel ciclo attivo che genera un documento speculare nel passivo (come autofattura dello split vendite)
- Registro Autofatture estere con numerazione progressiva standard (quindi numero documento uguale al protocollo IVA)
- Allegare alla fattura attiva TD19 la copia di cortesia del documento elettronico in arrivo da SdI
- Versamento dell'IVA con F24 EP, codice tributo 622E
- Presentare modello INTRA12

Di seguito si propone un esempio di causale operativa da utilizzare:

[Schermata software: Causale "Autofattura attiva REVERSE TD17 (estero)" - Codice tipo documento 402, Documento di Entrata, Valido per IVA ✓, Codice tipo documento (codifica SDI) TD17 - Integrazione/autofattura per acquisto servizi dall'estero]

[Schermata software: Causale 402 - Registro IVA V - Autofattura vendite estero (reverse), Tipo importo immesso per calcolo IVA: Digitsato imponibile => calcola l'IVA dall'aliquota, Codice numeratore per calcolo protocollo IVA: IVAAUT - Registro IVA autofatture vendite, Causale spesa per registrazione automatica IVA Split/Reverse Charge: 403 - Autofattura passiva REVERSE (estero), Escludi da comunicazione liquidazione periodica IVA ✓, Metodo gestione IVA Split/Reverse: Standard]

Il registro IVA da utilizzare nella causale precedente è da impostare come segue:

[Schermata software: Registro IVA - Codice V, Descrizione "Autofattura vendite estero (reverse)", Tipo registro IVA: Vendite, Registro incluso in liquidazione IVA ✓, Flag stampa totale documento: Totale imponibile e IVA]

La causale dell'autofattura passiva che si creerà in automatico dovrà essere impostata come segue:

[Schermata software: Causale "Autofattura passiva REVERSE (estero)" - Codice tipo documento 403, Documento di Uscita, Valido per IVA ✓, Codice tipo documento (codifica SDI) TD01 - Fattura]

[Schermata software: Causale 403 - Registro IVA A - Autofattura acquisti estero (reverse), Tipo importo immesso per calcolo IVA: Digitsato imponibile => calcola l'IVA dall'aliquota, Codice numeratore per calcolo protocollo IVA: REGAVS - NUMERATORE AUTOFATTURE DA VENDITA SPLIT, Metodo gestione IVA Split/Reverse: Standard]

Il registro IVA da utilizzare nella causale precedente è da impostare come segue:

[Schermata software: Registro IVA - Codice A, Descrizione "Autofattura acquisti estero (reverse)", Tipo registro IVA: Acquisti, Registro incluso in liquidazione IVA ✓, Flag stampa totale documento: Totale imponibile e IVA]

---

### 1.2 Fattura cartacea con IVA esposta dal Cedente/Prestatore (utilizzo TD28)

Il soggetto passivo IVA residente o stabilito in Italia, che riceve una fattura cartacea con addebito di imposta da soggetto residente nella Repubblica di San Marino, deve predisporre un file con Tipo Documento TD28 e inviarlo tramite SDI.

Entrato a pieno regime dal 1° luglio 2022 (dopo una fase transitoria partita il 1° ottobre 2021), l'asse della fattura elettronica Italia-San Marino si arricchisce adesso di un altro elemento fondamentale. Si tratta della gestione delle fatture cartacee ricevute dagli operatori italiani tramite l'introduzione del nuovo tipo documento TD28.

**1. Registrazione Fattura passiva da documento cartaceo**

- Utilizzare una causale FINANZIARIA, con IVA, con ITER
- Esigibilità immediata
- NO autofattura automatica
- Reg. acquisti standard in funzione del servizio (istituzionale, commerciale)
- NO tipologia SDI

a) Registrata su reg. Acquisti standard (esigib. Immediata), NO SPLIT, pagamento intero al fornitore (imponibile + IVA)

b) Utilizzare assoggettamento ad hoc (es. IVA esposta San Marino)

c) Tipologia IVA:
- **Iva istituzionale:** importo iva pagato al fornitore
- **Iva commerciale:** iva pagata al fornitore ed in liquidazione, poi compensata con autofattura manuale (no automatismo classico dello split commerciale)

**2. Registrazione Autofattura attiva**

- Causale solo IVA, NO FINANZIARIA
- Tipo documento SDI: TD28
- Registro Autofatture estere con numerazione progressiva standard (quindi numero documento diverso da numero protocollo IVA):
  - **Iva istituzionale:** solo a scopo comunicazione a SdI
  - **Iva commerciale:** scopo comunicazione a SdI e compensata con fattura acquista
- Allegare alla fattura attiva di tipo TD28 un tipo allegato 14 (documento cartaceo sammarinese)

La causale andrà impostata come di seguente:

[Schermata software: Causale "Autofattura attiva REVERSE TD28 (estero)" - Codice tipo documento 405, Documento di Entrata, Valido per IVA ✓, Tipo debito/credito (Siope+) Commerciale, Codice tipo documento (codifica SDI) TD28 - Acquisti da San Marino con IVA (fatture cartacee), Registro unico documenti: Sì, Modo calcolo numero protocollo: Al momento dell'inserimento del documento]

[Schermata software: Causale 405 - Registro IVA V - Autofattura vendite estero (reverse), Tipo importo immesso per calcolo IVA: Digitsato imponibile => calcola l'IVA dall'aliquota, Codice numeratore per calcolo protocollo IVA: IVAAUT - Registro IVA autofatture vendite, Escludi da comunicazione liquidazione periodica IVA ✓, Metodo gestione IVA Split/Reverse: Standard]

---

## 2. Acquisti Intra UE

### Fattura di acquisto beni e servizi (in ambito IVA COMMERCIALE)

**1. Registrazione Fattura passiva da documento elettronico**

- Utilizzare una causale operativa che preveda solo FINANZIARIA, NO IVA (es: liquidazione diretta – NO ITER)
- Non verrà generata autofattura automatica
- Tipologia documento SDI: TD01
- Al fornitore emesso ordinativo di pagamento per il solo importo dell'imponibile.

Di seguito si propone un esempio di causale operativa da utilizzare:

[Schermata software: Causale "Fattura REVERSE CHARGE ESTERO" - Codice tipo documento 400, Documento di Uscita, Valido per finanziaria ✓, Tipo debito/credito (Siope+) Commerciale, Codice tipo documento (codifica SDI) TD01 - Fattura]

**2. Registrazione Autofattura attiva**

- Obbligo autofattura elettronica
- Utilizzare una causale solo IVA, NO FINANZIARIA
- Tipo documento SDI: inserito nel ciclo attivo che genera un documento speculare nel passivo (come autofattura dello split vendite)
  - **TD17:** integrazione fattura per acquisto di servizi da soggetti UE
  - **TD18:** integrazione fatture per acquisto di beni intracomunitario
  - **TD19:** integrazione fattura per acquisto di beni di soggetti UE, già presenti nel territorio italiano
- Registro Autofatture estere con numerazione progressiva standard (quindi numero documento uguale al protocollo IVA)
- Iva commerciale
- Allegare alla fattura attiva TD17/18/19 la copia di cortesia del documento elettronico in arrivo da SdI

Operare con le stesse causali utilizzate nel resto del documento, scegliere in base alla tipologia di "Tipo documento SDI" necessario.

### Fattura acquisto servizi – elettronica (in ambito IVA ISTITUZIONALE)

**1. Registrazione Fattura passiva da documento elettronico/cartaceo: Come sopra**

- Utilizzare una causale operativa che preveda solo FINANZIARIA, NO IVA (es: liquidazione diretta – NO ITER)
- Non verrà generata autofattura automatica
- Tipologia documento SDI: TD01
- Al fornitore emesso ordinativo di pagamento per il solo importo dell'imponibile.

Di seguito si propone un esempio di causale operativa da utilizzare:

[Schermata software: Causale "Fattura REVERSE CHARGE ESTERO" - Codice tipo documento 400, Documento di Uscita, Valido per finanziaria ✓, Tipo debito/credito (Siope+) Commerciale, Codice tipo documento (codifica SDI) TD01 - Fattura]

**2. Registrazione Autofattura attiva: come sopra ma IVA da versare con F24EP con codice 622E, da presentare tramite modello INTRA12**

- Obbligo autofattura elettronica
- Utilizzare una causale solo IVA, NO FINANZIARIA
- Tipo documento SDI: inserito nel ciclo attivo che genera un documento speculare nel passivo (come autofattura dello split vendite)
  - **TD17:** integrazione fattura per acquisto di servizi da soggetti UE
  - **TD18:** integrazione fatture per acquisto di beni intracomunitario
  - **TD19:** integrazione fattura per acquisto di beni di soggetti UE, già presenti nel territorio italiano
- Registro Autofatture estere con numerazione progressiva standard (quindi numero documento uguale al protocollo IVA)
- Iva commerciale
- Allegare alla fattura attiva TD17/18/19 la copia di cortesia del documento elettronico in arrivo da SdI

Operare con le stesse causali utilizzate nel resto del documento, scegliere in base alla tipologia di "Tipo documento SDI" necessario.

---

## 3. Acquisti EXTRA UE

### Fattura di acquisto servizi generici e NON – elettronica/cartacea (in ambito IVA COMMERCIALE)

**1. Registrazione Fattura passiva da documento cartaceo/elettronico**

- Utilizzare una causale operativa che preveda solo FINANZIARIA, NO IVA (es: liquidazione diretta – NO ITER)
- Non verrà generata autofattura automatica
- Tipologia documento SDI: TD01
- Al fornitore emesso ordinativo di pagamento per il solo importo dell'imponibile.

Di seguito si propone un esempio di causale operativa da utilizzare:

[Schermata software: Causale "Fattura REVERSE CHARGE ESTERO" - Codice tipo documento 400, Documento di Uscita, Valido per finanziaria ✓, Tipo debito/credito (Siope+) Commerciale, Codice tipo documento (codifica SDI) TD01 - Fattura]

**2. Registrazione Autofattura attiva**

- Obbligo autofattura elettronica
- Utilizzare una causale solo IVA, NO FINANZIARIA
- Tipo documento SDI: TD17 inserito nel ciclo attivo che genera un documento speculare nel passivo (come autofattura dello split vendite)
- Registro Autofatture estere con numerazione progressiva standard (quindi numero documento uguale al protocollo IVA)
- Iva commerciale

Di seguito si propone un esempio di causale operativa da utilizzare:

[Schermata software: Causale "Autofattura attiva REVERSE TD17 (estero)" - Codice tipo documento 402, Documento di Entrata, Valido per IVA ✓, Codice tipo documento (codifica SDI) TD17 - Integrazione/autofattura per acquisto servizi dall'estero]

[Schermata software: Causale 402 - Registro IVA V - Autofattura vendite estero (reverse), Tipo importo immesso per calcolo IVA: Digitsato imponibile => calcola l'IVA dall'aliquota, Codice numeratore per calcolo protocollo IVA: IVAAUT - Registro IVA autofatture vendite, Causale spesa per registrazione automatica IVA Split/Reverse Charge: 403 - Autofattura passiva REVERSE (estero), Escludi da comunicazione liquidazione periodica IVA ✓, Metodo gestione IVA Split/Reverse: Standard]

Il registro IVA da utilizzare nella causale precedente è da impostare come segue:

[Schermata software: Registro IVA - Codice V, Descrizione "Autofattura vendite estero (reverse)", Tipo registro IVA: Vendite, Registro incluso in liquidazione IVA ✓, Flag stampa totale documento: Totale imponibile e IVA]

La causale dell'autofattura passiva che si creerà in automatico dovrà essere impostata come segue:

[Schermata software: Causale "Autofattura passiva REVERSE (estero)" - Codice tipo documento 403, Documento di Uscita, Valido per IVA ✓, Codice tipo documento (codifica SDI) TD01 - Fattura]

[Schermata software: Causale 403 - Registro IVA A - Autofattura acquisti estero (reverse), Tipo importo immesso per calcolo IVA: Digitsato imponibile => calcola l'IVA dall'aliquota, Codice numeratore per calcolo protocollo IVA: REGAVS - NUMERATORE AUTOFATTURE DA VENDITA SPLIT, Metodo gestione IVA Split/Reverse: Standard]

Il registro IVA da utilizzare nella causale precedente è da impostare come segue:

[Schermata software: Registro IVA - Codice A, Descrizione "Autofattura acquisti estero (reverse)", Tipo registro IVA: Acquisti, Registro incluso in liquidazione IVA ✓, Flag stampa totale documento: Totale imponibile e IVA]

---

### Fattura di acquisto da soggetti EXTRA EU di BENI presenti in Italia – elettronica/cartacea (in ambito IVA COMMERCIALE)

**1. Registrazione Fattura passiva da documento cartaceo/elettronico**

- Utilizzare una causale operativa che preveda solo FINANZIARIA, NO IVA (es: liquidazione diretta – NO ITER)
- Non verrà generata autofattura automatica
- Tipologia documento SDI: TD01
- Al fornitore emesso ordinativo di pagamento per il solo importo dell'imponibile.

Di seguito si propone un esempio di causale operativa da utilizzare:

[Schermata software: Causale "Fattura REVERSE CHARGE ESTERO" - Codice tipo documento 400, Documento di Uscita, Valido per finanziaria ✓, Tipo debito/credito (Siope+) Commerciale, Codice tipo documento (codifica SDI) TD01 - Fattura]

**2. Registrazione Autofattura attiva**

- Obbligo autofattura elettronica
- Utilizzare una causale solo IVA, NO FINANZIARIA
- Tipo documento SDI: TD19 inserito nel ciclo attivo che genera un documento speculare nel passivo (come autofattura dello split vendite)
- Registro Autofatture estere con numerazione progressiva standard (quindi numero documento uguale al protocollo IVA)
- Iva commerciale

Di seguito si propone un esempio di causale operativa da utilizzare:

[Schermata software: Causale "Autofattura attiva REVERSE (estero)" - Codice tipo documento 401, Documento di Entrata, Valido per IVA ✓, Codice tipo documento (codifica SDI) TD19 - Integrazione/autofattura per acquisto di beni es art.17 c.2 DPR 633/72]

[Schermata software: Causale 401 - Registro IVA V - Autofattura vendite estero (reverse), Tipo importo immesso per calcolo IVA: Digitsato imponibile => calcola l'IVA dall'aliquota, Codice numeratore per calcolo protocollo IVA: IVAAUT - Registro IVA autofatture vendite, Causale spesa per registrazione automatica IVA Split/Reverse Charge: 403 - Autofattura passiva REVERSE (estero), Escludi da comunicazione liquidazione periodica IVA ✓, Metodo gestione IVA Split/Reverse: Standard]

Il registro IVA da utilizzare nella causale precedente è da impostare come segue:

[Schermata software: Registro IVA - Codice V, Descrizione "Autofattura vendite estero (reverse)", Tipo registro IVA: Vendite, Registro incluso in liquidazione IVA ✓, Flag stampa totale documento: Totale imponibile e IVA]

La causale dell'autofattura passiva che si creerà in automatico dovrà essere impostata come segue:

[Schermata software: Causale "Autofattura passiva REVERSE (estero)" - Codice tipo documento 403, Documento di Uscita, Valido per IVA ✓, Codice tipo documento (codifica SDI) TD01 - Fattura]

[Schermata software: Causale 403 - Registro IVA A - Autofattura acquisti estero (reverse), Tipo importo immesso per calcolo IVA: Digitsato imponibile => calcola l'IVA dall'aliquota, Codice numeratore per calcolo protocollo IVA: REGAVS - NUMERATORE AUTOFATTURE DA VENDITA SPLIT, Metodo gestione IVA Split/Reverse: Standard]

Il registro IVA da utilizzare nella causale precedente è da impostare come segue:

[Schermata software: Registro IVA - Codice A, Descrizione "Autofattura acquisti estero (reverse)", Tipo registro IVA: Acquisti, Registro incluso in liquidazione IVA ✓, Flag stampa totale documento: Totale imponibile e IVA]

---

### Fattura di acquisto da soggetti EXTRA EU di BENI presenti in Italia - elettronica/cartacea (in ambito IVA ISTITUZIONALE)

**1. Registrazione Fattura passiva da documento elettronico/cartaceo:**

- Utilizzare una causale operativa che preveda solo FINANZIARIA, NO IVA (es: liquidazione diretta – NO ITER)
- Non verrà generata autofattura automatica
- Tipologia documento SDI: TD01
- Al fornitore emesso ordinativo di pagamento per il solo importo dell'imponibile.

Di seguito si propone un esempio di causale operativa da utilizzare:

[Schermata software: Causale "Fattura REVERSE CHARGE ESTERO" - Codice tipo documento 400, Documento di Uscita, Valido per finanziaria ✓, Tipo debito/credito (Siope+) Commerciale, Codice tipo documento (codifica SDI) TD01 - Fattura]

**2. Registrazione Autofattura attiva:**

- Obbligo autofattura elettronica
- Utilizzare una causale solo IVA, NO FINANZIARIA
- Tipo documento SDI: TD19 inserito nel ciclo attivo che genera un documento speculare nel passivo (come autofattura delle split vendite)
- Registro Autofatture estere con numerazione progressiva standard (quindi numero documento uguale al protocollo IVA)
- Iva istituzionale: da versare con F24EP con codice 622E, da presentare tramite modello INTRA12

Di seguito si propone un esempio di causale operativa da utilizzare:

[Schermata software: Causale "Autofattura attiva REVERSE (estero)" - Codice tipo documento 401, Documento di Entrata, Valido per IVA ✓, Codice tipo documento (codifica SDI) TD19 - Integrazione/autofattura per acquisto di beni es art.17 c.2 DPR 633/72]

[Schermata software: Causale 401 - Registro IVA V - Autofattura vendite estero (reverse), Tipo importo immesso per calcolo IVA: Digitsato imponibile => calcola l'IVA dall'aliquota, Codice numeratore per calcolo protocollo IVA: IVAAUT - Registro IVA autofatture vendite, Causale spesa per registrazione automatica IVA Split/Reverse Charge: 403 - Autofattura passiva REVERSE (estero), Escludi da comunicazione liquidazione periodica IVA ✓, Metodo gestione IVA Split/Reverse: Standard]

Il registro IVA da utilizzare nella causale precedente è da impostare come segue:

[Schermata software: Registro IVA - Codice V, Descrizione "Autofattura vendite estero (reverse)", Tipo registro IVA: Vendite, Registro incluso in liquidazione IVA ✓, Flag stampa totale documento: Totale imponibile e IVA]

La causale dell'autofattura passiva che si creerà in automatico dovrà essere impostata come segue:

[Schermata software: Causale "Autofattura passiva REVERSE (estero)" - Codice tipo documento 403, Documento di Uscita, Valido per IVA ✓, Codice tipo documento (codifica SDI) TD01 - Fattura]

[Schermata software: Causale 403 - Registro IVA A - Autofattura acquisti estero (reverse), Tipo importo immesso per calcolo IVA: Digitsato imponibile => calcola l'IVA dall'aliquota, Codice numeratore per calcolo protocollo IVA: REGAVS - NUMERATORE AUTOFATTURE DA VENDITA SPLIT, Metodo gestione IVA Split/Reverse: Standard]

Il registro IVA da utilizzare nella causale precedente è da impostare come segue:

[Schermata software: Registro IVA - Codice A, Descrizione "Autofattura acquisti estero (reverse)", Tipo registro IVA: Acquisti, Registro incluso in liquidazione IVA ✓, Flag stampa totale documento: Totale imponibile e IVA]

---

## 4. Rilascio implementazioni al software

La modifica è disponibile a partire dalla **release 7.11 su CWOL** – patch del 25.01.2023