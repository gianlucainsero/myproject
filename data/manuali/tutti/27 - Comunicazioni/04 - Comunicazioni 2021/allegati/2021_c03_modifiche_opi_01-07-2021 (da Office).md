# Modifiche delle regole tecniche OPI in vigore dal 01.07.2021

**Comunicazione n. 03/2021**

**Oggetto:** Aggiornamento regole tecniche OPI in vigore dal 01.07.2021

**Scopo:** Informare gli utenti sulle modifiche alle regole tecniche OPI e modalità operative in vigore dal 01.07.2021.

---

## 1.1 Descrizione delle modifiche alle regole tecniche e modalità operative

### 1.1.1 Data di effettuazione del pagamento

L'ente può dare disposizioni circa la data di effettuazione del pagamento compilando la **data esecuzione pagamento**.

L'ente avvalora il campo **data esecuzione pagamento** posizionandosi nel campo del documento di spesa denominato **"valuta fissa per richiesta pagamento"**.

[Screenshot: interfaccia software Cityware Online con campo "Valuta fissa richiesta per Pagamento" evidenziato, contenente la data 18-07-2020, nel contesto di un documento di spesa con Codice Spesa 76 "ESENTE DA SPESE"]

Se intende ordinare perentoriamente la data nella quale deve essere estinto il mandato, nella consapevolezza dei tempi necessari al perfezionamento del pagamento nei confronti del creditore.

---

### 1.1.2 Controllo sul formato del Codice CIG

Attualmente il codice CIG deve essere valorizzato nel caso in cui l'ordinativo di pagamento abbia come natura di debito **"COMMERCIALE"**. In mancanza di tale codice, si deve valorizzare il codice del **motivo di esclusione del codice CIG**, che contiene la descrizione del motivo per il quale il codice appalto non può essere fornito.

Con le nuove regole, sono stati previsti **tre possibili formati** del codice CIG:

- **CIG:** 7 caratteri numerici seguiti da 3 caratteri numerici e/o alfabetici maiuscoli (valori da A ad F);
- **Smart CIG:** 1 carattere alfabetico maiuscolo (valori da V a Z) seguito da 9 caratteri numerici e/o alfabetici maiuscoli (valori da A ad F);
- **CIG Unico:** 1 carattere alfabetico maiuscolo (valori da A a U) seguito da 9 caratteri numerici e/o alfabetici maiuscoli (valori da A ad F).

Oltre ai controlli formali previsti per il codice CIG, la piattaforma **SIOPE+** eseguirà anche un **controllo di esistenza** del codice presso le banche dati degli Enti preposti alla gestione dei CIG.

---

### 1.1.3 Soppressione dei tipi di pagamento

Le due tipologie di pagamento **"vaglia postale"** e **"vaglia tesoro"** non possono essere più utilizzate per l'emissione degli ordinativi di pagamento.

---

### 1.1.4 Ritenute per accrediti alla Tesoreria Provinciale dello Stato (Tabella A e B)

È stata prevista la **rimozione del vincolo** di non poter avere le ritenute associate, previsto nelle Linee guida OPI per gli accrediti in **Tesoreria Provinciale dello Stato Tabella A e B**. Pertanto, gli ordinativi a favore di una contabilità speciale presso la Tesoreria Provinciale dello Stato a partire da questa data potranno avere ritenute associate ed eseguire il pagamento inserendo una **unica liquidazione**.

#### Modalità operativa attuale (prima)

Per l'emissione dell'ordinativo, dovevano essere inserite **due righe di liquidazione**:

- **La prima riga** con l'importo netto e con la modalità di pagamento **"Tesoreria Provinciale dello Stato"**.

[Screenshot: tabella liquidazioni con riga 1, Anno 2020, Impegno 00159, Importo Liquidato 324,55, Beneficiario ACQUANET SRL, modalità "Tesoreria Provinciale dello Stato"]

- **La seconda riga** con l'importo della ritenuta e la modalità di pagamento appropriata, di solito **"Compensazione"**.

[Screenshot: tabella liquidazioni con riga 2, Anno 2020, Impegno 00159, Importo Liquidato 32,45, Beneficiario ACQUANET SRL, modalità "Compensazione"]

#### Nuova modalità operativa (dal 01.07.2021)

Per l'emissione dell'ordinativo, può essere inserita **una unica riga di liquidazione** con l'importo lordo, l'importo della ritenuta e con la modalità di pagamento **"Tesoreria Provinciale dello Stato"**.

[Screenshot: interfaccia con campi IMPORTO LORDO (357,00), RITENUTE (32,45), SALDO (0), e riga di liquidazione unica con Importo Liquidato 357,00 e ritenuta 32,45, Beneficiario ACQUANET SRL, modalità "Tesoreria Provinciale dello Stato"]

---

### 1.1.5 Regolarizzazione dei sospesi in uscita (debiti commerciali)

Per i soliti debiti commerciali, al fine di consentire una puntuale regolarizzazione del sospeso da parte della piattaforma **PCC**, è stato inserito il vincolo di inserire **per ogni mandato un solo sospeso di uscita**.

Esempio per la regolarizzazione di un sospeso, per un solo mandato di pagamento:

[Screenshot: interfaccia con IMPORTO LORDO 357,00, RITENUTE 0, SALDO 0, e tabella sospesi con riga: N. Provvisorio 1, N. Ebita 10.05.2017, Importo Provvisorio 357,00. Pulsanti "Nuova riga" e "Cancella riga" visibili]

In questo modo, viene permesso al sistema PCC di associare al mandato la **data effettiva** in cui la banca ha provveduto a pagare il fornitore al posto della data del mandato di regolarizzazione.

---

### 1.1.6 Mandati che collegano reversali con le ritenute

È stato rimosso il vincolo di non poter associare le ritenute, previsto nelle Linee guida OPI per il tipo di pagamento tramite **"ACCREDITO CONTO CORRENTE POSTALE"**. Pertanto, a partire da tale data, anche questo tipo di pagamento potrà essere utilizzato per la liquidazione delle spese anche nel caso di **ritenute associate**.

---

### 1.1.6.1 Rilascio implementazioni al software (titolo 4)

Per Enti che operano tramite **Cityware Online** con collegamento diretto con Banca d'Italia, si consiglia di verificare che la data di aggiornamento del software sia posteriore al **22.04.2021**, al fine di avere a disposizione i controlli che SIOPE Plus attiverà dal 01.07.2021.

Per verificare la data di aggiornamento:

[Screenshot: barra superiore dell'interfaccia Cityware Online con indicazione "Es.Contabile 2021 Utente: CED" e icone di navigazione; sotto, finestra "Pannello di Controllo" con versione build "test:20190521 del 2019-05-28 11:13:12 (elenco catch)" e pulsanti: Gestisci il tuo Profilo, Firma un Documento, Permessi Menù, Gestione Portlet, Verifica un Documento, Gestione Parametri]

Nel caso in cui si voglia aggiornare il software contattare **sistemi@cityware.online** per concordare un appuntamento per effettuare l'attività.

La modifica è disponibile a partire dalla **release 7.11 su CWOL – patch del 25.01.2023**.

---

**Eventuali vincoli:** *(nessuno specificato)*

**Eventuali criticità:** *(nessuna specificata)*