# Comunicazione n.05/2020 - Rendiconto 2019: Adeguamento prospetti e produzione dei quadri analitici da somme vincolate

**Data:** 24/03/2020

## Scopo del documento

Il documento illustra gli adeguamenti apportati nella produzione e stampa del rendiconto a partire dall'esercizio 2019 in riferimento alle modifiche normative introdotte con il DM 1 agosto 2019.

I prospetti oggetto dell'adeguamento e le implementazioni sono conformi alle specifiche descritte nel **'PRINCIPIO CONTABILE APPLICATO CONCERNENTE LA PROGRAMMAZIONE DI BILANCIO'** nell'allegato 4.1 valido per l'esercizio 2019 nel paragrafo 13 'Il rendiconto della gestione'.

### Gestione delle somme Vincolate:

- Allegato A/1 quadro analitico somme accantonate
- Allegato A/2 quadro analitico somme vincolate
- Allegato A/3 quadro analitico somme destinate ad investimenti

### Rendiconto di gestione:

- Rendiconto entrate, riepilogo entrate, rendiconto spese, riepilogo spese Titoli
- Riepilogo spese per missioni
- Quadro generale riassuntivo
- Equilibri di bilancio Enti Locali
- Allegato A risultato di amministrazione
- Allegato A/1 elenco analitico delle risorse accantonate
- Allegato A/2 elenco analitico delle risorse vincolate
- Allegato A/3 elenco analitico delle risorse destinate ad investimento
- ...

---

## Gestione delle somme Vincolate

La gestione vincoli è documentata per intero nella **comunicazione n. 6 del 2019**. La procedura è stata implementata con l'aggiunta della funzione **'Allegato Rendiconto'** che consente la gestione delle informazioni aggiunte ai riepiloghi e quadri riassuntivi che compongono il rendiconto della gestione e dei nuovi modelli 'Allegati A/1, A/2, A/3'. La nuova funzione è richiamabile da ogni riga dell'anagrafica vincoli con il tasto dx, e consente il calcolo e la visualizzazione delle stesse informazioni e degli stessi importi presenti nei modelli associati alle tre diverse tipologie di avanzo.

I valori gestiti nei quadri sono riportati nei modelli ufficiali del rendiconto di gestione e di conseguenza inviati alla BDAP. Per ottenere la compilazione corretta delle righe e colonne di ogni modello occorre rispettare la sequenza operativa indicata:

1. **Definire la struttura della tabella vincoli** avendo l'accortezza di dettagliare le tipologie elementari e collocarle nella sezione appropriata. Per le somme vincolate e destinate ad investimenti si consiglia di definire almeno un livello foglia al di sotto delle tipologie di legge previste dalla norma all'interno delle sezioni. Un valido esempio di come strutturare e dettagliare la gestione dei singoli vincoli è mostrato nella comunicazione nr.6/2019 che illustra tutta l'operatività.

2. **Collegare tutte le operatività dell'esercizio 2019** rilevanti per la determinazione della composizione dell'avanzo ai codici elementari dei vincoli sino ad ottenere per ognuno di esso i valori corretti mostrati nella 'Situazione'.

3. **Dopo l'aggiornamento dell'applicativo alla release 7.06 (marzo 2020)** occorre rivedere i movimenti di trasferimento tra vincoli per indicare la parte interessata (corrente o capitale). L'indicazione della parte va indicata nei movimenti manuali di tipo '6' e serve per determinare la quota annuale da indicare nelle nuove righe inserite tra la riga O1 e 'O2' e la riga 'Z1' e 'Z2' del prospetto degli Equilibri di Bilancio. La parte di spesa va specificata per indicare la provenienza delle somme trasferite manualmente alla sezione degli accantonamenti e alle diverse tipologie presenti nelle sezioni dei vincoli.

4. **È stato introdotto il movimento di tipo '17'** che serve per determinare gli importi delle somme vincolate e di quelle destinate agli investimenti che nell'anno sono destinate a finanziare gli accantonamenti da indicare nelle righe da M/1 a M/5 dell'allegato A/2 e la riga (g) dell'allegato A/3. Il tipo movimento '17' opera sul singolo vincolo similmente al movimento di tipo '7' e viene totalizzato nella riga 21 della 'Situazione' del vincolo ma consente di differenziare l'importo in uscita dal vincolo da quello di tipo '7' il cui uso rimane invariato.

5. **Dal prospetto del risultato di amministrazione** verificare la composizione dell'avanzo sino alla determinazione dell'avanzo libero calcolato sia con il metodo della differenza che dall'elaborazione dei singoli movimenti e provvedendo a sistemare eventuali differenze.

6. **Effettuare il calcolo dei valori per gli allegati A/1, A/2 e A/3** per ogni sezione della tabella e verificare la quadratura degli importi finali di ogni singolo quadro con la riga finale calcolata nella 'Situazione' della corrispondente scheda. I calcoli e confronti vanno eseguiti sui livelli padri delle singole sezioni e per le verifiche sui singoli vincoli. Le sezioni dove effettuare obbligatoriamente i calcoli sono:
   - a. Risorse accantonate
   - b. Per le specie di vincolo presenti nella sezione delle risorse vincolate e cioè:
     - i. Vincoli derivanti da leggi e principi contabili
     - ii. Vincoli derivanti da trasferimenti
     - iii. Vincoli derivanti da finanziamenti (contrazione di Mutui)
     - iv. Vincoli formalmente attribuiti all'Ente
     - v. Altri vincoli da specificare
   - c. Per le risorse destinate agli investimenti

7. **In caso di differenza o anomalie** sistemare i valori sui movimenti finanziari che confluiscono nella scheda della situazione del vincolo (variazioni di bilancio, impegni, accertamenti, economie) sino a quadrare la scheda della situazione del vincolo e **solo dopo** rieseguire il calcolo del quadro allegato.

8. **È possibile completare il dettaglio analitico** mostrato nel quadro modificando le descrizioni o completando i valori mostrati a livello di vincolo elementare (solo sul codice foglia). Su tutti i livelli superiori è possibile solo la visualizzazione. In sede di modifica è possibile compattare le righe inserendo i valori di entrata e le relative spese nella medesima riga con l'accortezza di valorizzare correttamente gli importi sui quadri.

9. **Si ricorda che in sede di ricalcolo vengono cancellate tutte le variazioni ed integrazioni inserite manualmente.** Eventuali sistemazioni manuali vanno effettuate per ultimo dopo le correzioni ed integrazioni nei movimenti finanziari.

10. **Dopo la conferma dell'esercizio contabile** (flag rendiconto stampato) non è più possibile modificare le righe degli allegati calcolate ma si può accedere solo in visualizzazione dei quadri compilati.

11. **La colonna capitolo di bilancio** presente nei moduli degli allegati è valorizzata con il piano finanziario di IV livello a cui la voce di bilancio utilizzata si riferisce. Le righe di riepilogo contengono quindi le somme raggruppate per piano finanziario e non le voci di bilancio interne all'Ente. La soluzione adottata rispecchia le indicazioni dell'allegato 4/1 del principio contabile 118 dove al comma 9.3 è riportato:

> *"I capitoli e gli eventuali articoli sono raccordati al quarto livello del piano dei conti finanziario".*

---

## Allegato A/1 quadro analitico somme accantonate

Si accede alla gestione del quadro dalle singole voci presenti nella **sezione B) parte accantonata**.

La finestra di gestione prevede apposito pulsante per l'estrazione automatica dei dati, è anche possibile integrare tali movimenti con modifiche manuali.

Il capitolo di spesa è riferito al IV livello del piano finanziario a cui appartengono le voci di bilancio collegate al fondo accantonato con le relative descrizioni.

Per consentire una migliore lettura dei dati è possibile modificare l'ordinamento delle righe mediante trascinamento delle stesse.

Dai livelli superiori dell'elenco degli accantonamenti è possibile richiamare la finestra che consente la sola visualizzazione aggregata dei movimenti.

Gli importi sono ricavati dai movimenti finanziari collegati alla voce di accantonamento similmente alla situazione rappresentata nella scheda riepilogativa. La tabella che segue illustra le relazioni presenti nelle due rappresentazioni:

### Tabella A/1

| Quadro analitico risorse accantonate | Riga scheda riepilogativa (Finestra Situazione) | Segno | Note |
|---|---|---|---|
| Colonna (a) | Riga 1 | + | Il saldo di inizio anno (1/1/N) |
| Colonna (b) | Riga 2 | - | Avanzo applicato al bilancio |
| Colonna (c) | Riga 12 | + | Stanz. miss. 20 |
| Colonna (d) | (d)=(e) – (a) – (b) – (c) | | Var acc. in sede di rendiconto |
| Colonna (e) | Riga 26 | + | Totale finale (risorse acc. al 31/12/N) |

Si allega la situazione riepilogativa della sezione B - parte accantonata.

[Immagine: Finestra "Anagrafica Vincoli" con sezione AVANZO - B) PARTE ACCANTONATA e finestra "Situazione Vincoli" con elenco riepilogativo dei movimenti]

---

## Allegato A/2 quadro analitico somme vincolate

Si accede alla gestione del quadro dalle singole voci presenti nella **sezione C) parte vincolata**.

La finestra di gestione prevede apposito pulsante per l'estrazione automatica dei dati, è anche possibile integrare tali movimenti con modifiche manuali.

Il capitolo di spesa è riferito al IV livello del piano finanziario a cui appartengono le voci di bilancio collegate al vincolo con le relative descrizioni.

Per consentire una migliore lettura dei dati è possibile modificare l'ordinamento delle righe mediante trascinamento delle stesse.

Dai livelli superiori dell'elenco degli vincoli è possibile richiamare la finestra che consente la sola visualizzazione aggregata dei movimenti.

Eventuali discordanze vanno corrette nei movimenti finanziari (variazioni di bilancio, impegni, accertamenti, economie) collegate ai vincoli, solo in ultima analisi utilizzare la funzione di modifica presente nel quadro per eventuali sistemazioni o aggregazione di righe con piani finanziari di entrata e uscita. In alcune situazioni al fine di avere evidenza del saldo dalle operazioni finanziarie di entrate ed Uscite conviene definire nuove tipologie di vincoli e procedere a collegarci gli accertamenti ed impegni ad esso riferiti.

Gli importi sono ricavati dai movimenti finanziari collegati al vincolo similmente alla situazione rappresentata nella scheda riepilogativa. La tabella che segue illustra le relazioni presenti nelle due rappresentazioni:

### Tabella A/2

| Quadro analitico risorse vincolate | Riga Scheda riepilogativa corrispondente | Segno | Note |
|---|---|---|---|
| Colonna (a) | Riga 1 | + | Il saldo di inizio anno (1/1/N) |
| Colonna (b) | Riga 2 | + | Risorse vincolate app. bilancio |
| Colonna (c) | Riga 9 + riga 11 + riga 22 - riga 21(*) | + | Entrate vincolate accertate nell'esercizio N |
| Colonna (d) | Riga 6 + Riga 7 + Riga 10 (esclusi impegni FP e disimpegni) | + | Impegni esercizio N finanziate da entrate o da quote del risultato di amm.ne – comprende la quota indicata manualmente sui vincoli per gli impegni promiscui (Riga 7) (esclusi impegni FP e disimpegni) |
| Colonna (e) | Riga 6 + Riga 7 (imp. promiscui) + Riga 10 (solo impegni FP e disimpegni) | + | Impegni esercizio N finanziate da entrate o da quote del risultato di amm.ne (solo impegni FP e disimpegni) |
| Colonna (f) | - Riga 17 + Riga 23 – Riga 24 + Riga 25 (somme da altri vincoli) | - | Cancellazione residui attivi e passivi o eliminazione quote dal ris. amm.ne |
| Colonna (g) | Riga 18 + Riga 19 + Riga 20 | + | Economie su impegni FPV |
| Colonna (h) | (h)=(b)+(c)-(d)-(e)+(g) | | Risorse vincolate nel bilancio al 31/12/N |
| Colonna (i) | (i)=(a)+(c)-(d)-(e)-(f)+(g) | | Risorse vincolate nel risultato di amministrazione al 31/12/N |

(*) solo le variazioni di tipo 7 (trasferimento ad altri vincoli), vengono escluse le variazioni con tipo var. 17 (somme accantonate)

Le opzioni di modifica delle righe, cancellazione ed inserimento sono possibili solo a livello elementare, le righe mostrate sui livelli superiori sono ricavati dalla sommatoria di quelle presenti sui singoli vincoli.

[Immagine: Prospetto "ELENCO ANALITICO DELLE RISORSE VINCOLATE NEL RISULTATO DI AMMINISTRAZIONE" con colonne (a) fino a (i) e righe di dettaglio per vincolo]

[Immagine: Esempio del prospetto con i movimenti presenti su uno specifico vincolo - C1.6 Oneri di urbanizzazione]

---

## Allegato A/3 quadro analitico somme destinate ad investimenti

Si accede alla gestione del quadro dalle singole voci presenti nella **sezione D) parte destinata agli investimenti**.

La finestra di gestione prevede apposito pulsante per l'estrazione automatica dei dati, è anche possibile integrare tali movimenti con modifiche manuali.

Il capitolo di spesa è riferito al IV livello del piano finanziario a cui appartengono le voci di bilancio collegate agli investimenti con le relative descrizioni.

Per consentire una migliore lettura dei dati è possibile modificare l'ordinamento delle righe mediante trascinamento delle stesse.

Dai livelli superiori dell'elenco degli investimenti è possibile richiamare la finestra che consente la sola visualizzazione aggregata dei movimenti.

Gli importi sono ricavati dai movimenti finanziari collegati agli investimenti similmente alla situazione rappresentata nella scheda riepilogativa. La tabella che segue illustra le relazioni presenti nelle due rappresentazioni:

### Tabella A/3

| Quadro analitico risorse destinate ad investimenti | Riga Scheda riepilogativa corrispondente | Segno | Note |
|---|---|---|---|
| Colonna (a) | Riga 1 | + | Il saldo di inizio anno (1/1/N) |
| Colonna (b) | Riga 9 + riga 11 + riga 22 – riga 21(*) | + | Entrate destinate agli investimenti |
| Colonna (c) | Riga 6 + Riga 7 (imp. Promiscui) + Riga 10 (esclusi impegni FP e disimpegni) | + | Impegni esercizio N finanziate da entrate o da quote del risultato di amm.ne (esclusi impegni FP e disimpegni) |
| Colonna (d) | Riga 6 + Riga 10 (solo impegni FP e reimputazioni) | + | Impegni esercizio N finanziate da entrate o da quote del risultato di amm.ne (solo impegni FP e reimputazioni) |
| Colonna (e) | - Riga 17 - Riga 18 - Riga 19 - Riga 20 + Riga 23 - Riga 24 + Riga 25 | - | Cancellazione residui attivi e passivi o eliminazione quote dal risultato di amministrazione |
| Colonna (f) | (f)=(a)+(b)-(c)-(d)-(e) | | Risorse destinate agli investim. al 31/12/N |

(*) solo le variazioni di tipo 7 (trasferimento ad altri vincoli), vengono escluse le variazioni con tipo var. 17 (somme accantonate)

---

## Rendiconto di gestione

Dal menu del rendiconto di gestione si effettuano le stampe previste nell'allegato 10. Dalla form della gestione dei quadri del rendiconto è possibile richiamare direttamente la gestione dei vincoli.

Il richiamo della gestione dei vincoli a lato degli allegati A/1, A/2 e A/3 apre la gestione direttamente nella sezione relativa al quadro selezionato.

[Immagine: Finestra "Quadri Riassuntivi" con opzioni: Quadro Generale Riassuntivo, Verifica Equilibri, All. a) Prospetto dimostrativo del risultato di amministrazione, All. a/1) Risultato di amministrazione - quote accantonate, All. a/2) Risultato di amministrazione - quote vincolate, All. a/3) Risultato di amministrazione - quote destinate]

Di seguito le modifiche introdotte ai prospetti per l'adeguamento ai nuovi modelli dal DM del 01/08/2019.

---

### Rendiconto entrate, riepilogo entrate titoli (Solo adeguamenti descrittivi)

Per "Utilizzo avanzo di amministrazione" si intende "l'avanzo applicato al bilancio: indicare pertanto l'importo dello stanziamento definitivo di bilancio.

---

### Quadro generale riassuntivo

Le implementazioni sono riportate in giallo sui modelli Arconet.

**GESTIONE DEL BILANCIO**

- a) Avanzo di competenza (+) /Disavanzo di competenza (-)
- b) Risorse accantonate stanziate nel bilancio dell'esercizio N (+)⁽⁸⁾
- c) Risorse vincolate nel bilancio (+)⁽⁹⁾
- d) Equilibrio di bilancio (d=a-b-c)

**GESTIONE DEGLI ACCANTONAMENTI IN SEDE DI RENDICONTO**

- d) Equilibrio di bilancio (+)/(-)
- e) Variazione accantonamenti effettuata in sede di rendiconto(+)/(-)⁽¹⁰⁾
- f) Equilibrio complessivo (f=d-e)

Gli importi delle righe b), c), e) vengono calcolati automaticamente dai corrispondenti valori dei nuovi allegati A/1 e A/2 al risultato di amministrazione.

Di seguito le note presenti nell'allegato 10 in formato excel che può essere scaricato dalla sezione schemi di bilancio del sito ufficiale Arconet:

- **(8)** Inserire il totale della colonna c) dell'allegato a/1 "Elenco analitico delle risorse accantonate nel risultato di amministrazione" al netto dell'accantonamento al Fondo anticipazioni di liquidità, già considerato ai fini della determinazione dell'avanzo/disavanzo di competenza. (Totale della colonna c dell'allegato a/1)

- **(9)** Inserire l'importo della prima colonna della riga n) dell'allegato a/2 "Elenco analitico delle risorse vincolate nel risultato di amministrazione" (Totale risorse vincolate al netto di quelle che sono state oggetto di accantonamenti Allegato a/1) (n=l-m)

- **(10)** Inserire il totale della colonna d) dell'allegato a/1 "Elenco analitico delle risorse accantonate nel risultato di amministrazione" al netto dell'accantonamento al Fondo anticipazioni di liquidità, già considerato ai fini della determinazione dell'avanzo/disavanzo di competenza. (Totale colonna d dell'allegato a/1)

---

### Equilibri di bilancio Enti Locali

La voce relativa al fondo di cassa iniziale è stata rimossa.

Si raccomanda di verificare l'esatta valorizzazione delle righe sotto evidenziate e che concorrono a determinare il risultato della competenza (riga W1) in quanto sono valorizzate dalla lettura dei movimenti presenti sui vincoli come indicato nelle tabelle sottostanti. Il calcolo delle somme destinate alla parte corrente distinte da quelle in Conto capitale si effettua con la definizione dei raggruppamenti nelle variazioni di bilancio che utilizzano somme vincolate o accantonate per finanziare le spese. In tali variazioni è stata resa obbligatoria la gestione del codice di raggruppamento. Per le modalità d'uso consultare la comunicazione n6.2019 sui vincoli.

#### Parte corrente

**O1) RISULTATO DI COMPETENZA DI PARTE CORRENTE (O1=G+H+I+M)**

- -Risorse accantonate di parte corrente stanziate nel bilancio dell'esercizio N → (-)
- -Risorse vincolate di parte corrente nel bilancio → (-)

**O2) EQUILIBRIO DI BILANCIO DI PARTE CORRENTE** → (-)

- -Variazione accantonamenti di parte corrente effettuata in sede di rendiconto(+)/(-) → (-)

**O3) EQUILIBRIO COMPLESSIVO DI PARTE CORRENTE**

La tabella illustra le modalità di calcolo dei valori e le relazioni con 'situazione vincoli' e 'Quadri allegati'.

| Righe per determinazione valore O1, O2 e O3 | Riga Scheda riepilogativa corrispondente | Quadro allegato A/1 e A/2 | Note |
|---|---|---|---|
| Risorse accantonate di parte corrente nel bilancio | + Riga 12 | Allegato A1, totale colonna C (parte corrente) | |
| Risorse vincolate di parte corrente nel bilancio | + Riga 2 + Riga 9 + Riga 11 + Riga 22 - Riga 21 - Riga 6 - Riga 7 - Riga 10 + Riga 17 - Riga 23 + Riga 24 - Riga 25 + Riga 18 + Riga 19 + Riga 20 | Allegato A2, totale colonna H al netto degli accantonamenti (parte corrente) | |
| Variazione accantonamenti di parte corrente | - Riga 21 + Riga 22 - Riga 23 + Riga 24 - Riga 25 | Allegato A1, totale colonna D (parte corrente) | |

#### C/capitale

**Z1) RISULTATO DI COMPETENZA IN C/CAPITALE (Z1) = P+Q+R-C-I-S1-S2-T+L-M-U-U1-U2-V+8**

- Z/1) Risorse accantonate in c/capitale stanziate nel bilancio dell'esercizio N → (-)
- -Risorse vincolate in c/capitale nel bilancio → (-)

**Z/2) EQUILIBRIO DI BILANCIO IN C/CAPITALE** → (-)

- -Variazione accantonamenti in c/capitale effettuata in sede di rendiconto(+)/(-) → (-)

**Z3) EQUILIBRIO COMPLESSIVO IN CAPITALE**

La tabella illustra le modalità di calcolo dei valori e le relazioni con 'situazione vincoli' e 'Quadri allegati'.

| Righe per determinazione valori Z1, Z2 e Z3 | Riga Scheda riepilogativa corrispondente | Quadro allegato A/1 e A/2 | Note |
|---|---|---|---|
| Risorse accantonate in C/capitale nel bilancio | + Riga 12 | Allegato A1, totale colonna C (parte capitale) | |
| Risorse vincolate in c/capitale nel bilancio | + Riga 2 + Riga 9 + Riga 11 + Riga 22 - Riga 21 - Riga 6 - Riga 7 - Riga 10 + Riga 17 - Riga 23 + Riga 24 - Riga 25 + Riga 18 + Riga 19 + Riga 20 | Allegato A2, totale colonna H al netto degli accantonamenti (parte capitale) | |
| Variazione accantonamenti in c/capitale | - Riga 21 + Riga 22 - Riga 23 + Riga 24 - Riga 25 | Allegato A1, totale colonna D (parte capitale) | |

#### Risultato di competenza e saldo corrente per copertura investimenti

I tre valori sono calcolati sommando le quote di parte corrente e capitale dei rispettivi importi (sezioni O e Z), quindi si avrà la seguente corrispondenza:

| Righe per determinazione valori W2 e W3 | Corrispondenza allegato A/1 e A/2 |
|---|---|
| Risorse accantonate stanziate nel bilancio dell'esercizio N | Allegato A1, totale colonna C |
| Risorse vincolate nel bilancio | Allegato A2, totale colonna H al netto degli accantonamenti |
| Variazione accantonamenti effettuata in sede di rendiconto | Allegato A1, totale colonna D |

I valori vengono recuperati dalle corrispondenti righe precedenti del prospetto, il valore finale viene calcolato sottraendo dal rigo O1 tutte le righe successive.

---

### Allegato A risultato di amministrazione (Solo adeguamenti descrittivi)

Le modifiche riguardano solo la parte descrittiva.

---

### Allegato A/1 elenco analitico delle risorse accantonate

**Nuovo prospetto.** Il report riproduce il modello dell'allegato A/1 ricavato da Arconet. Le informazioni sia a livello descrittivo che di importi sono gestibili nella funzione 'allegato al rendiconto' richiamabile da tutte le righe della sezione B della gestione vincoli. Le righe sono riportate esattamente come appaiono e come sono state completate manualmente nella gestione del modello sui vincoli.

La prima volta che si opera se si sono sistemati i saldi sui singoli vincoli prima di produrre il prospetto è obbligatorio effettuare la funzione di calcolo dell'allegato al rendiconto operando su ogni singolo vincolo o più semplicemente sulla riga corrispondente al totale della sezione. Il ricalcolo del quadro non va fatto dopo aver effettuato le sistemazioni manuali in quanto vengono cancellate e le righe sono ricalcolate dai valori presenti nella scheda del vincolo. Le relazioni tra le colonne del prospetto e la scheda della situazione del vincolo sono dettagliate nella **'Tabella A/1'**.

---

### Allegato A/2 elenco analitico delle risorse vincolate

**Nuovo prospetto.** Il report riproduce il modello dell'allegato A/2 ricavato da Arconet. Le modalità operative sono identiche a quelle dell'allegato A/1. Le relazioni tra le colonne del prospetto e la scheda della situazione vincoli sono dettagliate nella **'Tabella A/2'**.

L'allegato A/2 differisce dall'allegato A/1 per il numero delle colonne che lo rappresentano. In calce al prospetto le righe del gruppo da M/1 a M/5 sono valorizzate in automatico dalla lettura dei trasferimenti in uscita inseriti nelle singole tipologie di vincoli con il tipo movimento '17'. Tali movimenti di uscita sulle somme vincolate devono essere compensati con i movimenti di entrata di tipo '6' che vanno inseriti sui singoli accantonamenti destinatari delle somme. Le ulteriori righe presenti nel modulo sono calcolate come da formule presenti nel modello Arconet.

---

### Allegato A/3 elenco analitico delle risorse destinate ad investimento

**Nuovo prospetto.** Il report riproduce il modello dell'allegato A/3 ricavato da Arconet. Le modalità operative sono identiche a quelle dell'allegato A/1 ed A/2. Le relazioni tra le colonne del prospetto e la scheda della situazione vincoli sono dettagliate nella **'Tabella A/3'**.

L'allegato A/3 differisce dall'allegato A/1 per il numero delle colonne che lo rappresentano. In calce al prospetto la riga (g) è valorizzata in automatico dalla lettura dei trasferimenti in uscita inseriti nei vincoli destinati agli investimenti con il tipo movimento '17'. Tali movimenti di uscita sulle somme destinate agli investimenti devono essere compensati con i movimenti di entrata di tipo '6' che vanno inseriti sui singoli accantonamenti destinatari delle somme. La riga (h) viene calcolata come da formula presente nel modello Arconet.