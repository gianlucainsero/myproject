# Comunicazione n.10/2019 - Operazioni di apertura nuovo esercizio

Jesi 24/12/2019

---

## 1) PRIMA FASE: da eseguirsi dall'esercizio 2019

**Apertura e aggiornamento esercizio 2020:** serve per aggiornare le tabelle della finanziaria (iva, ritenute, ecc) in modo che tutte le impostazioni fatte sul 2019 vengano copiate anche sul 2020; viene aggiornata anche l'anagrafica dei capitoli in modo che i capitoli creati nel 2019 (da variazioni) siano copiati (se non già fatto prima) sul 2020; gli altri, soprattutto se già approvato il bilancio 2020-2022, rimarranno invariati; se si volesse invece aggiornare anche le anagrafiche dei capitoli sul 2020 basta impostare a **"1"** l'ultimo flag della sezione **"Aggiorna movimenti esistenti"** della videata che vedete sotto.

**Come procedere:** posizionarsi nell'esercizio anno 2019 scegliere > **APERTURA - APERTURA BILANCIO DL118 - APERTURA NUOVO ESERCIZIO - Apertura nuovo esercizio**.

Impostare la schermata che appare nel seguente modo (vedi figura sotto - **TUTTE LE TABELLE DEVONO AVERE LA SPUNTA**) e cliccare su **"APERTURA"**.

[Schermata: CITY-FINANCING Apertura nuovo esercizio - Parametri generali: Esercizio da aprire: 2020, Copia da esercizio: 2019, Area di provenienza: F - SERVIZI ECONOMICI. Tabelle generali con tutte le spunte attive (BII, NRD_AN, PROGR, TABAFP, TABAMP, TABACD, TABAPC, TABAPC, TABAMC, CLABPL, CONTES, FINAVI). Tabelle Bilancio: Movimenti esistenti non aggiornati, BILAD - Voci di Bilancio DL118/2011. Pulsanti: Apertura, Chiudi]

Alla fine dell'elaborazione (che durerà alcuni minuti) verrà prodotta la stampa con i risultati dell'aggiornamento.

---

## 2) SECONDA FASE: da effettuarsi dall'esercizio 2019: CHIUSURA IMPEGNI/ACCERTAMENTI

**A)** Eseguire la chiusura Impegni/Accertamenti: da **CHIUSURA - CHIUSURA IMPEGNI e ACCERTAMENTI**: cliccare su **"Chiusura"** lasciando tutto il resto inalterato: tale funzione permette di evitare di riportare sul 2020 tutti quegli impegni/accertamenti **SALDATI** (con disponibilità reale a ZERO) alla fine del 2019: gli impegni e accertamenti chiusi rimarranno visibili fino all'esercizio 2019 e non oltre.

Tale funzione potrà essere eseguita anche successivamente soprattutto dopo la chiusura del conto consuntivo.

> **N.B:** Fate attenzione che, nel caso successivamente a questa operazione, dobbiate andare ad annullare una reversale legata ad una di questi accertamenti chiusi, per riaprire tale accertamento dovrete andare in modifica (da gestione accertamenti) e togliere il flag **"accertamento chiuso"** presente nel foglio **"dati aggiuntivi"**.

---

## 3) TERZA FASE: da eseguirsi dall'esercizio 2019: CHIUSURA ECONOMATO

Per gli Enti che gestiscono l'economato con Cityware ricordo che il rendiconto finale del 2019 dovrà essere fatto nell'esercizio 2019 con l'avvertenza di far creare **SOLO le LIQUIDAZIONI** e **NON i MANDATI** che verranno poi creati nel 2020 tramite la funzione **"emissione mandati di pagamento"**.

---

## 4) QUARTA FASE: da eseguirsi dall'esercizio 2020: AGGIORNAMENTO PIANO DEI CONTI, PIANO FINANZIARIO E MATRICE DI CORRELAZIONE

Questa fase (da fare sul 2020) permette di allineare il PDC, IL PF e la matrice di correlazione con gli ultimi aggiornamenti previsti dalla normativa (Arconet) e aggiornare pertanto i Piani Finanziari sul sistema Cityware:

### 1) Verifica codifica Piano dei conti utilizzato ed importazione

Occorre **verificare la codifica adottata sul piano dei conti** per la contabilità economico patrimoniale. La codifica dei conti **deve essere rispettata** con quella che trovate nella tabella piano dei conti (del 2019) presente nel menù **tabelle – contabilità**.

Se in tale tabella sono presenti codici dal **01 al 09** la schermata sotto non deve essere variata e si deve solo cliccare su **IMPORTA**; se invece i codici della tabella piano dei conti sono diversi, nella schermata successiva devono essere sostituiti con tali codici (es. Dal 31 al 39) e poi cliccare su **Importa**.

**Esempio struttura piano dei conti utilizzato dall'Ente:**

[Schermata: CITY-FINANCING Piano dei conti - Struttura ad albero:
- 31 Attivo
- 32 Passivo
- 33 Conti d'ordine
- 35 Componenti positivi della gestione
- 36 Componenti negativi della gestione
- 37 Proventi e oneri finanziari
- 38 Rettifiche di valore di attività finanziarie
- 39 Proventi e oneri straordinari]

**Form aggiornamento Piano dei Conti:**

[Schermata: CITY-FINANCING Importazione Piano dei conti D.L.118
- Ricodifica 1° livello del codice piano dei conti - Parte Patrimoniale:
  - 1 - Attivo → 01
  - 2 - Passivo → 02
  - 3 - Conti d'ordine → 03
- Ricodifica 1° livello del codice piano dei conti - Parte Economica:
  - 1 - Componenti positivi della gestione → 05
  - 2 - Componenti negativi della gestione → 06
  - 3 - Proventi e oneri finanziari → 07
  - 4 - Rettifiche di Valore di attività Finanziarie → 08
  - 5 - Proventi e oneri straordinari → 09
- Avvertenza: Se si ripete l'importazione della tabella, a fine elaborazione viene generato un foglio di excel con l'elenco degli eventuali conti annullati o con descrizione annullati. L'operatore DEVE verificare tale elenco ed eventualmente apportare le necessarie correzioni ai capitoli di bilancio associati ai conti variati/annullati.
- Pulsanti: Importa, Chiudi]

> **ATTENZIONE:** si ribadisce che i codici specificati sopra indicati 01, 02, 03, ecc devono essere gli stessi di quelli presenti nella tabella **PIANO DEI CONTI** presente in **tabelle - contabilità** - nell'esercizio precedente.

Alla fine dell'elaborazione compare un'anteprima di stampa con delle eventuali anomalie che potrebbero riguardare annulli o variazioni di codici del PdC.

### 2) Importa tabelle titolazione bilancio

Lasciare le spunte presenti in schermata (vedere sotto) e cliccare su **IMPORTA**; l'elaborazione durerà alcuni minuti e produrrà un'elenco di anomalie (eventuali PF annullati) che dovranno essere verificati ed eventualmente cambiati su capitoli e/o accertamenti/impegni.

[Schermata: CITY-FINANCING Importa tabelle DL.118/2011
- ☑ Importa Tabella Missioni e Programmi
- ☑ Importa Tabella Classificazione COFOG
- ☑ Importa Tabella Correlazione Missioni\Programmi e COFOG
- ☑ Importa Tabella Piano finanziario
- ☑ Importa Matrice di correlazione Piano Finanziario-Piano dei conti
- Importa struttura valida per l'esercizio: 2020
- Avvertenza: Se si ripete l'importazione delle tabelle, a fine elaborazione viene generato un foglio di excel con l'elenco degli eventuali codici annullati o con descrizione annullati. L'operatore DEVE verificare tale elenco ed eventualmente apportare le necessarie correzioni ai capitoli di bilancio associati ai codici variati/annullati. L'importazione viene effettuata sempre per l'esercizio corrente. Modificando il valore del campo "Importa struttura valida per l'esercizio" è possibile importare la struttura valida per un esercizio diverso da quello corrente.
- Pulsanti: Importa, Chiudi]

---

## 5) QUINTA FASE: da eseguirsi dall'esercizio 2020: IMPOSTAZIONE TABELLE

Posizionarsi su **Tabelle - Personalizzazioni - Definizione e operabilità**

### A) Tab "ITER"

Valorizzare flag **"Controllo dispon.cassa in emissione mandati"**: serve affinchè, oltre alla disponibilità di competenza/residuo, il programma controlli anche quella di cassa in fase di emissione del mandato/reversale.

### B) Tab tesoriere / sezione 'personalizzazione modo valorizzazione campo'

Inserire la data entro la quale deve essere approvato il bilancio di previsione 2020 - 2022.

Con il decreto del 16 Dicembre 2019, la scadenza è stata prorogata al **31 Marzo 2020**.

[Schermata: Tab Tesoriere - Collegamento con tesoreria: 28 - TRACCIATO XML STANDARD - SIOPE. Sezione Firma Digitale: Crea Stoico Invii, Abilita variazione mandati inviati, Abilita variazione mandati eseguiti. Data termine e approv. bilancio: 31-03-2020. Iter invio flussi: 0 - Firma singola. Codice Boll Default: 0]

> È importante valorizzare la data per gli enti che non hanno approvato il bilancio per la corretta valorizzazione dell'OPI.

### C) TABELLA RITENUTE

Menù **Tabelle - Clienti-Fornitori - Ritenute**

- creare i nuovi accertamenti in competenza 2020;
- sostituirli a quelli presenti abbinati ai codici ritenuta: selezionare i codici ritenuta, andare in modifica, selezionare il foglio **"Reincasso/Pagamento automatico"** e sostituire gli accertamenti (e/o impegni) presenti con quelli appena creati nel 2020.

### D) TABELLE IVA: creazione numeratori 2020 (Iva e documenti)

Da **TABELLE - IVA - NUMERATORI DOCUMENTI PER ANNO**: cliccare su **"APRI ANNO"**, impostare **2020** e dare **OK**: vengono creati e impostati con ZERO tutti i numeratori di documenti e Iva del 2020.

### E) Creazione NUMERATORI PER ANNO

(mandati, reversali, documenti di entrata e spesa, ecc): da **Tabelle - Personalizzazioni - Progressivi Annuali**: nella schermata che appare cliccare sul pulsante **"GENERA"** e rispondere con **SI** alla successiva domanda.

---

## 6) SESTA FASE: da eseguirsi dall'esercizio 2020: AGGIORNAMENTO IMPORTI RESIDUI

**Aggiornamento RESIDUI** - da **APERTURA - APERTURA BILANCIO DL118 - APERTURA NUOVO ESERCIZIO - Ricalcolo importi a residuo**: impostare la schermata come da figura e cliccare su **RICALCOLA**: vengono ricalcolati tutti i castelletti dei residui presenti sui vari capitoli (voci di bilancio).

[Schermata: CITY-FINANCING Ricalcolo Stanziamento Residuo da Anno Precedente
- Natura Ente: 1 - COMUNI e UNIONI DI COMUNI
- Impostazioni x Elaborazione: Esercizio da aggiornare: 2020, Area di provenienza: F - SERVIZI ECONOMICI, Bilancio da aggiornare: D.L.118/2011
- Residuo su Bilancio: ☑ Stanziamento Residuo Iniziale, ☑ Totale impegnato a residuo, ☑ Verifica residuo calcolato
- Operazioni su Impegni/Accertamenti: ☑ Apertura schede con residuo da anno precedente, ☑ Chiusura impegni/accertamenti nell'anno precedente senza residuo
- Entrata - Voci di bilancio da elaborare (Tr, Tp.1, Tp.2, Cat, Liv.5)
- Spesa - Voci di bilancio da elaborare (Ms, Pro, Tr, Mac, Liv.3, Liv.4, Liv.5)
- Ordinamento stampa: 1 - Anno e Progressivo
- Pulsanti: Aggiungi, Modifica, Elimina, Visualizza rapporto, Ricalcola, Chiudi]

---

## SE L'ENTE HA GIÀ APPROVATO IL BILANCIO 2020-2022

**NON DEVE EFFETTUARE NESSUN'ALTRA OPERAZIONE:**

ricordarsi solamente dal 2020 di impostare i flag **BILANCIO INSERITO E CONFERMATO** in **tabelle - personalizzazioni - definizioni e operabilità parametri generali - foglio ITER**.

---

## ATTIVITÀ PER LA PREDISPOSIZIONE DEL BILANCIO DI PREVISIONE 2020-2022

### A - SOLO SE IL BILANCIO 2020-2022 NON È ANCORA STATO IMPOSTATO

(quindi non sono ancora stati inseriti gli importi di previsione): impostare gli importi di previsione (2020-2022) recuperando gli importi assestati del pluriennale 2019-2021 e aggiornare gli importi di residui, cassa e FPV (2020) sul bilancio altrimenti, passare al punto B.

La funzione si esegue da **APERTURA - APERTURA BILANCIO DL118 - APERTURA NUOVO ESERCIZIO - Ricalcolo importi di competenza**: impostare la schermata come da figura e cliccare su **RICALCOLA**.

[Schermata: CITY-FINANCING Ricalcolo Importi da Bilancio Anno Precedente
- Impostazione Anni di esercizio: Anno bilancio da aggiornare: 2020, Area di provenienza: F - SERVIZI ECONOMICI
- ☑ Elabora bilancio parte ENTRATA, ☑ Elabora bilancio parte SPESA
- Recupero importi da Esercizi precedenti:
  - ☑ Residui Presunti al Termine dell'Esercizio Precedente (importo da 2019)
  - ☑ Prev. Definitiva di Competenza dell'Anno Precedente (importo da 2019)
  - ☑ Prev. Definitiva di Cassa dell'Anno Precedente
  - ☑ Di Cui Prev. Definitiva Fondo Pluriennale Vincolato dell'Anno Precedente
  - ☑ Di Cui Già Impegnato/Accertato (2020/2021/2022)
- Entrata - Modalità calcolo importi Esercizio corrente:
  - 2020: Competenza Esigibile: 1 - Assestato 2020 (da plu...), Di Cui Entrate non riscosse: 1 - Assestato 2020 (da plu...)
  - 2021: 1 - Assestato 2021 (da plu...), 1 - Assestato 2021 (da plu...)
  - 2022: 1 - Assestato 2021 (da plu...), 1 - Assestato 2021 (da plu...)
- Spesa - Modalità calcolo importi Esercizio corrente:
  - 2020: Competenza Esigibile: 1 - Assestato 2020 (da plu...), Fondo Pluriennale Vincolato: 1 - Assestato 2020 (da plu...)
  - 2021: 1 - Assestato 2021 (da plu...), 1 - Assestato 2021 (da plu...)
  - 2022: 1 - Assestato 2021 (da plu...), 1 - Assestato 2021 (da plu...)
- Porzioni di Bilancio coinvolte nell'aggiornamento (Entrata e Spesa)
- Avvertenza: Se si effettua il ricalcolo dei residui presunti al termine dell'esercizio precedente, si consiglia poi di verificare che i nuovi importi soddisfino il controllo effettuato dalla BDAP (stanziamento di cassa minore o uguale alla somma dei residui presunti + previsione di competenza al netto del FPV). Tale verifica può essere effettuata mediante l'opzione "controlli quadratura" presente nella finestra di stampa del bilancio di previsione.
- Pulsanti: Aggiungi, Modifica, Elimina, Visualizza rapporto, Ricalcola, Chiudi]

### B) SE IL BILANCIO 2020-2022 È IN FASE DI IMPOSTAZIONE

(gli importi di previsione sono in fase di inserimento): aggiorna gli importi di residui, cassa e FPV (2019) sul bilancio.

- da **APERTURA - APERTURA BILANCIO DL118 - APERTURA NUOVO ESERCIZIO - Ricalcolo importi di competenza**: impostare la schermata come da figura **senza chiedere la valorizzazione degli importi relativi alla competenza 2020-2022** dall'esercizio precedente e cliccare su **RICALCOLA**.

[Schermata: CITY-FINANCING Ricalcolo Importi da Bilancio Anno Precedente
- Impostazione Anni di esercizio: Anno bilancio da aggiornare: 2020, Area di provenienza: F - SERVIZI ECONOMICI
- ☑ Elabora bilancio parte ENTRATA, ☑ Elabora bilancio parte SPESA
- Recupero importi da Esercizi precedenti:
  - ☑ Residui Presunti al Termine dell'Esercizio Precedente (importo da 2019)
  - ☑ Prev. Definitiva di Competenza dell'Anno Precedente (importo da 2019)
  - ☑ Prev. Definitiva di Cassa dell'Anno Precedente
  - ☑ Di Cui Prev. Definitiva Fondo Pluriennale Vincolato dell'Anno Precedente
  - ☑ Di Cui Già Impegnato/Accertato (2020/2021/2022)
- Entrata - Modalità calcolo importi Esercizio corrente:
  - 2020: 0 - Non aggiornare, 0 - Non aggiornare
  - 2021: 0 - Non aggiornare, 0 - Non aggiornare
  - 2022: 0 - Non aggiornare, 0 - Non aggiornare
- Spesa - Modalità calcolo importi Esercizio corrente:
  - 2020: 0 - Non aggiornare, 0 - Non aggiornare
  - 2021: 0 - Non aggiornare, 0 - Non aggiornare
  - 2022: 0 - Non aggiornare, 0 - Non aggiornare
- Porzioni di Bilancio coinvolte nell'aggiornamento (Entrata e Spesa)
- Avvertenza: Se si effettua il ricalcolo dei residui presunti al termine dell'esercizio precedente, si consiglia poi di verificare che i nuovi importi soddisfino il controllo effettuato dalla BDAP (stanziamento di cassa minore o uguale alla somma dei residui presunti + previsione di competenza al netto del FPV).
- Pulsanti: Aggiungi, Modifica, Elimina, Visualizza rapporto, Ricalcola, Chiudi]

> È IMPORTANTE **ABBINARE SEMPRE** la procedura spiegata sopra con il **ricalcolo importi a residuo** (punto successivo dello stesso menù) lasciando la schermata come compare sotto e cliccando su **RICALCOLA**.

> **SOPRATTUTTO** prima di stampare il bilancio di previsione in definitivo è bene eseguire la fase SOPRA INDICATA in modo di avere i valori del bilancio aggiornato al momento dell'esecuzione della stampa finale e in modo che il calcolo della cassa **(CMP+RES)** tramite apposita funzione (stesso menù) sia preciso e aggiornato alla data.

---

Si ricorda infine che dal 1 Gennaio il programma proporrà come default l'esercizio 2020 ma che si potrà comunque lavorare sul 2019 andando opportunamente a cambiare l'esercizio nelle maschere apposite: nel 2019 si potranno pertanto creare ancora sia impegni che accertamenti **che verranno poi trasferiti in automatico nell'esercizio successivo**.