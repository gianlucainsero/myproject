# Vincoli: Composizione avanzo vincolato e Movimenti di cassa

**Comunicazione n. 06/2019**

**Scopo:** La gestione dei fondi vincolati consente di determinare la composizione del risultato di amministrazione dalla gestione dei movimenti sui singoli vincoli, presentando i risultati suddivisi per tipologia nel programma che mostra la composizione del risultato di amministrazione. Dalla gestione dei vincoli si producono gli allegati A/1, A/2 e A/3 per il rendiconto e il file da inviare alla BDAP.

---

## 1. Aggiornamento marzo 2020

- Implementazioni per prospetti rendiconto 2019

## 2. Aggiornamento maggio 2020

- Tipi di movimenti su vincoli, aggiunto movimento specifico (cod. 11) su vincolo FCDE che valorizza la Colonna b) All. A/1 utilizzata per evidenziare l'eliminazione dei residui attivi. (pag. 14)
- Elenco anomalie per allegati A/1 A/2 A/3 ed invio flussi BDAP (pag. 21)

Si riporta la form della composizione del risultato di amministrazione con i valori determinati dai singoli Vincoli.

[Immagine: Form "Ricalcolo da Vincoli" con sezioni Parte accantonata, Parte vincolata, Parte destinata agli investimenti e composizione del risultato di amministrazione con valori per Fondo crediti di dubbia esigibilità, Accantonamenti da specificare, Vincoli derivanti da leggi e principi contabili, Vincoli derivanti da trasferimenti, ecc.]

---

### 2.1 Definizione e parametrizzazioni iniziali

La prima operazione da impostare è la seguente:

[Immagine: Menu "Tabelle" → "Definizioni e operabilità - Parametri Generali"]

[Immagine: Form "Definizioni e operabilità" con campo "Gestione Avanzo" impostato su "2=Da Vincoli" evidenziato in rosso]

---

### 2.2 Definizione anagrafica vincoli

[Immagine: Menu "Tabelle" → "Struttura Archivi" → "Anagrafica Vincoli"]

Per operare sui singoli vincoli in modo da ottenere una gestione simile a quella richiesta nella composizione dell'avanzo, l'anagrafica viene predisposta automaticamente in sede di impianto iniziale con la seguente codifica.

Le lettere iniziali dei codici da **B** a **E** rappresentano il primo livello della codifica e sono le stesse di quelle indicate nella form della composizione dell'avanzo.

Il codice di secondo livello indica la tipologia specifica. Es. **B1** = accantonamento per FCDDE.

---

### 2.3 Default anagrafica vincoli

La codifica rappresentata nell'immagine che segue è preimpostata in automatico alla prima apertura del programma Anagrafica Vincoli, poi la struttura può essere personalizzata aggiungendo ulteriori sottolivelli.

[Immagine: Struttura ad albero dell'Anagrafica Vincoli con le seguenti voci:]

- **AVANZO - B) PARTE ACCANTONATA**
  - B1 – Accantonamento x FCDDE
  - B2 – Accantonamento residui perenti (solo per le regioni)
  - B3 – Fondo anticipazioni di liquidità D.L. 35/2013
  - B4 – Fondo perdite società partecipate
  - B5 – Fondo contenzioso
  - B6 – Altri accantonamenti da dettagliare in composizione avanzo
- **AVANZO - C) PARTE VINCOLATA**
  - C1 – Vincoli derivanti da leggi e da principi contabili
  - C2 – Vincoli derivanti da trasferimenti
  - C3 – Vincoli derivanti dalla contrazione di mutui
  - C4 – Vincoli formalmente attribuiti dall'ente
  - C5 – Altri vincoli da specificare
- **AVANZO - D) PARTE DESTINATA AGLI INVESTIMENTI**
  - D1 – Parte Destinata agli Investimenti
- **AVANZO - E) PARTE DISPONIBILE**
  - E_1 – Parte Disponibile
- **ALTRA DESTINAZIONE ESCLUSA DA COMPOSIZIONE AVANZO**

Per aggiungere sotto livelli, posizionarsi sulla voce per cui si vuole aggiungere il sotto livello, premere tasto destro:

[Immagine: Menu contestuale con opzione "Aggiungi Sottolivello" evidenziata]

Su alcune tipologie come la **B6** - Altri accantonamenti da dettagliare, occorre definire obbligatoriamente le singole voci di accantonamento e tipologie di accantonamento per le quote vincolate.

[Immagine: Esempio di sotto-livelli per B6: B6_1 – fine mandato del sindaco, B6_2 – Fondo Rinnovo contrattuale]

Si allega un esempio di codifica completa dell'anagrafico. La tabella è gestibile a livelli multipli e gerarchici, quindi su ogni ramo si possono definire tutti i livelli necessari per una gestione che rappresenti la realtà dell'ente.

I movimenti devono essere effettuati solo sull'ultimo elemento della tabella definito come **elemento foglia**.

[Immagine: Struttura completa dell'Anagrafica Vincoli con tutti i sotto-livelli, tra cui:]

- **AVANZO - B) PARTE ACCANTONATA**
  - B1 – Accantonamento x FCDDE
  - B2 – Accantonamento residui perenti (solo per le regioni)
  - B3 – Fondo anticipazioni di liquidità D.L. 35/2013
  - B4 – Fondo perdite società partecipate
  - B5 – Fondo contenzioso
  - B6 – Altri accantonamenti da dettagliare in composizione avanzo
    - B6_1 – fine mandato del sindaco
    - B6_2 – Fondo Rinnovo contrattuale
- **AVANZO - C) PARTE VINCOLATA**
  - C1 – Vincoli derivanti da leggi e da principi contabili
    - C1.1 – Fondo risorse umane
    - C1.2 – Violazione codice della strada
    - C1.3 – Depurazione e fognatura
    - C1.4 – Edilizia residenziale pubblica
    - C1.5 – Incentivi UT
    - C1.6 – Oneri di urbanizzazione
    - C1.7 – 10% alienazioni
  - C2 – Vincoli derivanti da trasferimenti
    - C2.1 – Contributo Statale SPRAR
    - C2.2 – Contr. in c/capitale abbattimento barriere architettoniche
    - C2.3 – Contr. Regionale borse di studio
    - C2.4 – Contributo Reg. morosità incolpevole
    - C2.5 – Contributo Regione, Protezione civile, antincendio boschivo
    - C2.6 – Contributo Stato Fondo Educazione/Istruzione
    - C2.7 – Contributo Regione interventi costieri L.R. 41/2013 art. 21
    - C2.8 – Contributo Città Metropolitana raccolta differenziata
  - C3 – Vincoli derivanti dalla contrazione di mutui
  - C4 – Vincoli formalmente attribuiti dall'ente
  - C5 – Altri vincoli da specificare
- **AVANZO - D) PARTE DESTINATA AGLI INVESTIMENTI**
  - D1 – Parte Destinata agli Investimenti
- **AVANZO - E) PARTE DISPONIBILE**
  - E_1 – Parte Disponibile
- **ALTRA DESTINAZIONE ESCLUSA DA COMPOSIZIONE AVANZO**

---

### 2.4 Inserimento vincoli su impegni/accertamenti

Selezionare l'impegno ed andare in modifica:

[Immagine: Form "Dettaglio Impegno" con tab "Vincoli" evidenziata in rosso]

[Immagine: Tab "Vincoli" con campo "Vincolo" impostato su "C1.2 – Violazione codice della strada" e sezione "Finanziato dai seguenti Accertamenti appartenenti allo stesso vincolo"]

La stessa procedura può essere fatta per i residui.

È possibile impostare un vincolo anche sulla voce di bilancio.

---

## 3. Scheda con operazioni della competenza

Tornando alla tabella su anagrafica vincoli, premendo il tasto destro e selezionando **'situazione'**, si genera la scheda che segue, dove vengono riepilogate le movimentazioni effettuate.

[Immagine: Form "Situazione Vincoli" per "AVANZO - D) PARTE DESTINATA AGLI INVESTIMENTI" con Anno di Rif. 2018, colonna COMPETENZA, contenente le righe da 1 a 26 con importi e somme di competenza]

Di seguito si illustrano come vengono calcolati gli importi sulle righe sopra evidenziate.

---

### RIGA 1 - AVANZO DISPONIBILE AL 01-01-2018

[Immagine: Riga 1 con importo 304.964,53 e descrizione "Saldo da movimenti"]

Viene reperito dal movimento 90 del Saldo Finale dell'anno precedente, se presente, altrimenti dal Saldo iniziale impostato sulle anagrafiche dei vincoli.

[Immagine: Dettaglio anagrafica vincolo con "Saldo iniziale Competenza" = 304.964,53 e "Saldo iniziale Cassa" = 0]

In pratica per il primo anno deve essere impostato il saldo iniziale su ogni vincolo, mentre per gli anni successivi, il saldo iniziale sarà recuperato dai movimenti di chiusura dell'anno precedente.

---

### RIGA 2, 3, 4 – AVANZO APPLICATO AL BILANCIO

[Immagine: Righe 2, 3, 4 con importi: Riga 2 = 167.060,92; Riga 3 = 0,00; Riga 4 = 167.060,92]

L'AVANZO APPLICATO AL BILANCIO è dato da:

- **avanzo applicato da previsione iniziale** è dato dalla sommatoria dei movimenti di tipo 2 (Importo applicato al bilancio di previsione) collegati sull'anagrafica vincoli.
- **avanzo applicato da variazione di bilancio** è dato dalla sommatoria delle variazioni allo stanziamento di bilancio.

**Marzo 2020:** Le Variazioni di bilancio che utilizzano quote dell'avanzo devono essere granulate per tipologia di avanzo e ognuna di esse deve essere identificabile tramite un **codice di raggruppamento** che collega le somme di avanzo utilizzate con i capitoli di spesa finanziati. Questo al fine di individuare la destinazione delle somme e determinare i valori distinti per quota capitale e parte corrente da indicare negli equilibri di bilancio a far data dall'esercizio 2019.

Dall'icona sulla riga 4 si accede all'elenco delle variazioni. Selezionando una variazione si accede al suo dettaglio.

Ogni singolo prelievo da qualunque tipologia di avanzo deve essere contraddistinto da un **codice progressivo di raggruppamento**. La form che segue mostra la selezione delle voci di bilancio finanziate con la riga di avanzo vincolato.

[Immagine: Form con parametri di selezione, tipo variazione "4 - Aumento Entrata/Spesa", colonna "Raggruppamento" evidenziata con valore 8, e elenco delle voci di bilancio con importi per anno]

---

### RIGA 5 - AVANZO NON APPLICATO AL BILANCIO

[Immagine: Riga 5 con importo 137.903,61 e formula "RIGA 1 - RIGA 2"]

L'avanzo non applicato al bilancio (Riga1 - Riga2) è dato dalla differenza tra l'avanzo disponibile ad inizio anno e l'avanzo applicato al bilancio.

---

### RIGA 6 – IMPEGNI PLUR.LI COMP.ZA (CP,FP) Finanziati con AVANZO

[Immagine: Riga 6 con importo 156.410,59]

La riga 6 si ottiene dalla sommatoria delle disponibilità operative al lordo di eventuali disimpegni di tutti gli impegni collegati al vincolo e finanziati con avanzo. Il dettaglio della riga è:

[Immagine: Dettaglio Riga 6 con elenco impegni (CP 2018/01097, 01099, ecc.) con colonna "Quota Vincolata" e "Disponibilità Operativa"]

Con il bottone **Consulta Imp.** è possibile consultare tutti gli impegni collegati al vincolo corrente.

Dalla paginazione impegni, con il bottone si accede alla situazione impegno.

---

### RIGA 7 – UTILIZZATO su IMPEGNI PROMISCUI

[Immagine: Riga 7 con importo 0,00 e descrizione "Importo annuale tipo 8"]

La riga 7 non è direttamente collegata ad impegni, ma viene impostata manualmente caricando dei movimenti di tipo 8 (utilizzo su impegni promiscui) sull'anagrafica vincoli.

---

### RIGA 8 – AVANZO APPLICATO al BILANCIO e NON UTILIZZATO

[Immagine: Riga 8 con importo 10.650,33 e formula "RIGA 2 - RIGA 6 - RIGA 7"]

La riga 8 viene ottenuta dalla differenza tra l'avanzo applicato al bilancio e l'impegnato finanziato da avanzo. **(RIGA2 – RIGA6 – RIGA7)**

---

### RIGA 9 – ENTRATE da ACCERTAMENTI COMP.ZA

[Immagine: Riga 9 con importo 2.182,63]

Sono le entrate di competenza collegate al vincolo. Il dettaglio della riga è:

[Immagine: Dettaglio Riga 9 con accertamento CP 2018/02102, quota vincolata 2.182,63, descrizione "BENZI ALESSANDRA - TRASFORMAZIONE DIRITTO DI SUPER..."]

---

### 3.1 INSERIMENTO SOTTO ACCERTAMENTI

In fase di inserimento di sotto accertamenti, se nell'accertamento padre è presente un vincolo unico, questo sarà ereditato nel sotto accertamento con possibilità di modificarlo. Mentre se l'accertamento padre è frazionato su più vincoli, allora nel sotto accertamento è possibile reperire l'elenco dei vincoli del padre tramite il bottone evidenziato (rif pannello dettaglio accertamento):

[Immagine: Pannello "Quota Parte" con elenco vincoli (C3, C1.1) con quote e pulsanti "Recupera da Accertamento di Rif.", "Nuova Riga", "Cancella Riga"]

Tramite il bottone **'Nuova Riga'** è possibile vincolare parte del sotto accertamento su altri vincoli non previsti nell'accertamento padre.

Mentre tramite il bottone **'Cancella Riga'** è possibile togliere dei vincoli.

---

### RIGA 10 – IMPEGNI PLUR.LI COMP.ZA (CP,FP) Finanziati da ENTRATE

[Immagine: Riga 10 con importo 165.911,31]

Sono gli impegni di tipo CP ed FP finanziati da entrate. In pratica gli impegni conteggiati in questa riga, sono collegati con almeno un accertamento. Il collegamento avviene in questo modo:

[Immagine: Dettaglio impegno con tab "Vincoli", vincolo C1.2, sezione "Finanziato dai seguenti Accertamenti appartenenti allo stesso vincolo" con accertamento 2018/00093]

---

### RIGA 11 – ECONOMIE su IMPEGNI COMP.ZA senza VINCOLO

[Immagine: Riga 11 con importo 25.785,88]

Il dettaglio della riga è:

[Immagine: Dettaglio Riga 11 con elenco economie (CP 2018/00134, 00136, 00139, 00140, 00144) con tipo variazione "3 - Economia" e descrizione "Vincolato per le risorse umane"]

Confluiscono in questa riga tutte le economie con vincolo, ma con impegno senza vincolo.

Con il bottone si accede alla situazione impegno.

---

### RIGA 12 - AVANZO DA STANZIAMENTO Missione 20

[Immagine: Riga 12 con importo 11.328,51 e descrizione "A richiesta su singola"]

Il dettaglio della riga è:

[Immagine: Dettaglio Riga 12 con voci di bilancio 2003110 (Altri fondi n.a.c., CP-Asssetto 3.328,51) e 2003110 (Fondo rinnovi contrattuali, CP-Asssetto 8.000,00)]

Confluiscono in questa riga le voci di bilancio della missione 20 che hanno il flag per confluire nell'avanzo di competenza.

[Immagine: Dettaglio voce di bilancio con flag "Influenza su Avanzo Comp.za" evidenziato]

---

### RIGA 13 – AVANZO GENERATO DALLA GESTIONE DI COMPETENZA

[Immagine: Riga 13 con importo 11.328,51 e formula "RIGA 9 - RIGA 10 + RIGA 11 + RIGA 12"]

E' l'avanzo della competenza ottenuto dalle **entrate da accertamenti** meno l'**impegnato finanziato da accertamenti**, più eventuali stanziamenti sulla missione 20. **(RIGA9 – RIGA10 + RIGA11)**

---

### RIGA 14 – CANCELLAZIONE RESIDUI PASSIVI INSUSSISTENZA

[Immagine: Riga 14 con importo 2.283,84]

Il dettaglio della riga è:

[Immagine: Dettaglio Riga 14 con impegno CP 2017/00833, tipo variazione "5 - Insussistenza", importo 2.283,84]

Rappresenta la **sommatoria delle variazioni negative** meno la **sommatoria delle variazioni positive** eseguite nell'anno di riferimento su **impegni a residuo**.

---

### RIGA 15 e 16 VARIAZIONI RESIDUI ATTIVI

[Immagine: Riga 15 con importo 1.560,00 e Riga 16 con importo 1.580,00]

Sono rispettivamente le **variazioni negative** e **variazioni positive** eseguite nell'anno di riferimento su **accertamenti e sotto accertamenti a residuo**.

Il dettaglio della riga 16 è:

[Immagine: Dettaglio Riga 16 con accertamenti CP 2017/00306 (tipo variazione "1 - Aumento con atto", importo 1.560,00) e CP 2017/10000 (importo 20,00, descrizione "Residuo 2017 inserito nell'esercizio 2018 prima del rendiconto (30-4-2018)")]

Inoltre nella riga 16, oltre alle variazioni in aumento si considerano anche eventuali accertamenti a residuo inseriti nell'anno di riferimento.

---

### RIGA 17 AVANZO GENERATO dalla GESTIONE RESIDUI

[Immagine: Riga 17 con importo 30,00 e formula "RIGA14 - RIGA15 + RIGA16"]

La riga 17 è l'avanzo totale dalla gestione residui. **(Riga14 - Riga15 + Riga16)**

---

### RIGA 18, 19, 20 ECONOMIE per Titolo 1, 2, 3

[Immagine: Riga 18 con importo 13,54; Riga 19 con importo 57.161,33; Riga 20 con importo 0,00]

Le righe 18, 19, 20 sono le economie suddivise per titolo, eseguite nell'anno di riferimento su impegni di tipo FP e DC assunti nell'anno di riferimento e caricati in anni precedenti.

Il dettaglio della riga 19 è:

[Immagine: Dettaglio Riga 19 con impegni DC 2018/00631 (importo 54.324,55), DC 2018/00631 (importo 56,42), DC 2018/00632 (importo 2.780,36)]

---

### RIGA 21, 22, 23, 24, 25 MOVIMENTI di VARIAZIONE sui VINCOLI

[Immagine: Righe 21-25 con importi: Riga 21 = 229.261,53; Riga 22 = 0,00; Riga 23 = 0,00; Riga 24 = 0,00; Riga 25 = 257.248,59]

Le righe dalla 21 alla 25 sono le somme caricate sull'anagrafica dei singoli vincoli con specifici tipi di movimento. Ogni tipologia va utilizzata per lo scopo predefinito come da legenda che segue:

| Codice | Descrizione |
|--------|-------------|
| **1 e 2** | Quota avanzo libero o vincolato applicata direttamente al bilancio di previsione nella Parte Corrente e Capitale. |
| **3** | Quota avanzo libero destinata a finanziare il disavanzo di amministrazione. Solo sul libero. |
| **4** | Somma aggiunta al FCDE a seguito rideterminazione saldo di fine anno. Solo su FCDE. |
| **5** | Somma sottratta al FCDE a seguito rideterminazione saldo di fine anno. Solo su FCDE. |
| **6** | Somma aggiunta al vincolo proveniente da altro vincolo (usata sul vincolo di destinazione). |
| **7** | Somma sottratta ad un vincolo per destinazione ad altro vincolo o per azzeramento saldo (usata sul codice vincolo di provenienza della Somma). |
| **8** | Somma promiscue impegnate, usare SOLO quando non è possibile indicare il vincolo sui singoli impegni assunti a seguito applicazione avanzo. |
| **11** | Riduzione FCDE da eliminazione residui attivi che vanno ad alimentare la colonna b) dell'all. A/1. Usabile solo sul vincolo FCDE, per evidenziare l'applicazione al bilancio. Sulla scheda del vincolo viene riportato nella riga 25. |
| **17** | Da usare in sede di rendiconto per prelevare somme vincolate da destinare ad accantonamenti che vanno evidenziate nell'allegato A/2 nelle righe di tipo N. Sulla scheda del vincolo opera come il codice 7. |

Ogni riga riporta il dettaglio dei movimenti inseriti, ad esempio il dettaglio della riga 21 è:

[Immagine: Dettaglio Riga 21 "SOMME TRASFERITE ad ALTRI VINCOLI" con movimenti di tipo "Trasferito ad altri vincoli" e importi 216.116,00, 12.733,07, 412,46]

Detti movimenti si inseriscono e cancellano dalla gestione dell'anagrafico vincoli nella form movimenti annuali con la funzione **'Nuova riga'** o **'Cancella riga'**.

Le tipologie dei movimenti sono selezionabili dalla combo presente sul campo tipo variazione.

I tipi movimento **89 – 90 – 100 – 101 – 190** sono riservati per le operazioni di calcolo dei saldi annuali.

[Immagine: Form movimenti annuali con tipi movimento 90 e 190 riservati per saldi]

---

### RIGA 26 AVANZO DISPONIBILE AL 31-12-2018

[Immagine: Riga 26 con importo 6.001.698,44 e formula "RIGA1 - RIGA6 - RIGA..."]

La riga 26 è il saldo finale ottenuta in questo modo:

- **+** saldo iniziale
- **-** impegnato CP e FP finanziato da avanzo (riga 6 e riga 7)
- **+** avanzo dalla gestione competenza (riga 13)
- **+** avanzo dalla gestione residui (riga 17)
- **+** economie su impegni FPV (righe 18, 19, 20)
- **+/-** somme caricate con movimenti collegati all'anagrafica vincoli (es. trasferimento/acquisizione da altri vincoli)

---

### 3.2 PARTE DISPONIBILE DAL RISULTATO DI AMMINISTRAZIONE

L'anagrafica della parte disponibile deve essere codificata con un **solo codice foglia**:

[Immagine: Struttura ad albero con "AVANZO - E) PARTE DISPONIBILE" → "E_1 Parte Disponibile"]

**Nota marzo 2020.** Le somme accertate ed impegnate assegnate alla parte disponibile non devono essere collegate al vincolo tranne quelle impegnate, finanziate da variazioni di bilancio utilizzando le quote dell'avanzo disponibile.

La situazione vincoli della parte disponibile mostra due modalità di calcolo.

La colonna **'importi'** mostra il saldo reperito dall'uso del vincolo libero, il cui saldo finale è calcolato per differenza tra il risultato di amministrazione complessivo con le altre sezioni vincolate con la funzione specifica **Calcola Av.Lib.** La colonna **'somme competenza'** si ottiene effettuando il calcolo delle righe 9 e 10 con la funzione **Ric. da Movim.** Il calcolo dei valori dai movimenti di competenza va eseguito prima di quello per differenza in modo da avere l'importo valorizzato sulla riga 26.

Nella riga 26 del saldo finale tramite il bottone **Calcola Av.Lib.** presente, si accede a questo calcolo per la parte disponibile:

(Nota: Questa form è richiamabile anche dalla toolbar della situazione vincoli e dalla stampa del rendiconto annuale consuntivo)

[Immagine: Form "Determinazione Avanzo Libero" con sezioni "Calcolo Saldo per Differenza" (righe A-H) e "Calcolo Avanzo Libero da Movimenti" (righe I-L) e opzioni "Prospetto Saldi", "Prospetto e Storicizza Saldi", "Ristampa Saldi Elaborati"]

La **riga E**, è la Quota Avanzo Libero ottenuta per differenza tra il risultato di amministrazione (calcolato con il sistema classico) e le quote provenienti dalle componenti delle parti vincolate (parte accantonata, parte vincolata e parte investimenti).

Al fine di ottenere il saldo dell'avanzo libero uguale a quello calcolato dal programma di gestione, viene calcolato un movimento differenza come evidenziato nella **riga G**. Questo movimento viene memorizzato con **codice 89** sul vincolo foglia della parte disponibile. Di conseguenza si può calcolare il **saldo finale** su ogni vincolo foglia, che verrà memorizzato per l'anno di riferimento con **codice 90** su ogni vincolo foglia. Questi movimenti di tipo 90 verranno poi utilizzati per riaprire la situazione vincoli iniziale per l'anno successivo.

La **riga F** è l'Avanzo Libero da scheda (Riga 26). Questa riga tiene conto solo dei movimenti su scheda, escludendo l'eventuale movimento differenza per Avanzo libero. (Mov. 89)

La **riga G** è la differenza tra l'avanzo libero ottenuto tramite il risultato di amministrazione (riga E) e l'avanzo libero da movimenti su scheda (riga F).

L'importo evidenziato dovrà essere memorizzato sul vincolo della parte Disponibile (mov. 89), come rettifica al fine di storicizzare la quota dell'avanzo libero per l'esercizio contabile di riferimento.

Questo importo è modificabile fino a quando non viene memorizzato il movimento differenza.

Sono previste queste opzioni di elaborazioni:

#### Prospetto Saldi

Esegue il calcolo e stampa dei saldi di fine anno per ogni vincolo.

#### Prospetto e storicizza saldi

Esegue il calcolo e stampa dei saldi finali per ogni vincolo ed inserisce i seguenti movimenti di chiusura:

- movimento differenza per Avanzo Libero (mov. 89) sul vincolo foglia della parte disponibile.
- movimenti di saldo finale (mov. 90) su ogni singolo vincolo foglia. Questi movimenti verranno utilizzati per mostrare la situazione iniziale dei vincoli nell'anno successivo.

**Va fatta come ultima operazione in sede di rendiconto.** Dopo questa operazione tutti i movimenti annuali sul vincolo e sugli elementi che hanno contribuito a determinare il saldo (impegni, accertamenti, economie) non sono modificabili.

#### Ristampa Saldi Elaborati

Esegue la stampa di tutti i vincoli riportando nei saldi finali i valori ottenuti dai movimenti di chiusura caricati dalla fase precedente.

---

### CALCOLO AVANZO LIBERO DA MOVIMENTI

Questa modalità di calcolo è in alternativa a quella descritta sopra, serve a verificare l'esatta operatività su tutti i movimenti finanziari operati nel corso dell'esercizio.

Per eseguirla effettuare il ricalcolo dei valori dai movimenti premendo il bottone **'Ric. da Movim.'** presente alla riga 26. Questa operazione va eseguita per prima in modo da avere l'importo calcolato valorizzato sulla riga 26 prima di procedere al prospetto con i valori riepilogativi.

Rif. Form della 'Determinazione Avanzo Libero':

[Immagine: Riga 26 con pulsanti "Calcola Av.Lib." e "Ric. da Movim."]

La funzione 'ricalcola da movimenti' oltre alla riga 26 valorizza le righe **'I'** ed **'L'** sotto evidenziate nel prospetto finale.

[Immagine: Sezione "Calcolo Avanzo Libero da Movimenti" con riga I = 0 e riga L = -53.757.477,13]

La **Riga I** riporta l'avanzo indicato nella seconda colonna della situazione vincoli per la parte disponibile.

La **riga L** è la differenza tra l'avanzo libero ottenuto tramite il risultato di amministrazione (riga E) e l'avanzo libero reperito dalla seconda colonna (riga I).

---

### Modalità di calcolo delle colonne Somme di Competenza della parte di avanzo disponibile

#### Formula per calcolo della riga 9 'entrate da accertamenti'

(dal bottone a fianco dell'importo)

[Immagine: Form "Situazione Vincoli - Parte Disponibile" con righe A-F e "Accertato Parte Libera (A-B-C-D-E-F)"]

- **A) Accertato Totale Titoli 1,2,3** = Accertato totale ottenuto dalle voci di bilancio filtrando per titoli 1,2,3.
- **B) FPV Spesa Tit.1 – FPV da Avanzo** = Si ottiene dalla differenza tra:
  - FPV Spesa Tit.1 = da schede di monitoraggio partendo dalle voci di bilancio del titolo 1.
  - FPV da Avanzo = impegni FP con vincolo ed imputati su esercizi successivi a quello di riferimento
- **C) Accertato Parte Accantonata Tit.1,2,3** = Accertato della parte accantonata per Tit.1,2,3. Sono incluse in questa voce anche le eventuali economie su impegni senza vincolo (riga 11 della situazione vincoli per la parte accantonata).
- **D) Accertato Parte Vincolata Tit.1,2,3** = Accertato della parte vincolata per Tit.1,2,3. Sono incluse in questa voce anche le eventuali economie su impegni senza vincolo (riga 11 della situazione vincoli per la parte vincolata).
- **E) Accertato Parte Investimenti Tit.1,2,3** = Accertato della parte investimenti per Tit.1,2,3. Sono incluse in questa voce anche le eventuali economie su impegni senza vincolo (riga 11 della situazione vincoli per la parte investimenti).
- **F) Somme Accantonate da Mis. 20** = Corrisponde alla riga 12 della situazione vincoli, sono il totale delle voci di bilancio che hanno il flag per influire su avanzo di competenza.
- **Accantonato Parte Libera** = Ottenuto per differenza tra l'accertato totale (tit 1,2,3) e tutte le quote da B a F.

Premendo sulle icone degli fogli excel, è possibile scaricare il file excel con il riepilogo di tutti i movimenti utilizzati per il calcolo.

Esempio estrazione Impegni FP rispetto all'esercizio 2018:

[Immagine: Foglio Excel con colonne Anno, N. Impegni, Descrizione Impegno, Disponibilità operativa]

Esempio estrazione su excel per FPV spesa:

[Immagine: Foglio Excel con colonne Codice Voce, Descrizione Voce, Importo FPV]

---

#### Formula per calcolo della riga 10 'impegni pluriennali competenza'

(dal bottone a fianco dell'importo)

[Immagine: Form "Situazione Vincoli - Parte Disponibile" con righe A-H e "Impegnato Parte Libera (A-B-C-D-E-F-G-H)"]

- **A) Impegnato Totale Titolo 1,4** = Impegnato totale ottenuto dalle voci di bilancio filtrando per titoli 1 e 4.
- **B) Impegni Finanziati da FPV Tit.1,4** = Impegni FP e DC, titoli 1,4 assunti e caricati nell'anno di riferimento. Quota calcolata senza filtro sui vincoli.
- **C) Economie su Impegni da FPV Tit.1,4** = Economie su Impegni FP, DC. Quota calcolata senza filtro sui vincoli.
- **D) Impegni Finanziati da Avanzo di Amm. Tit.1** = Impegni CP solo Titolo 1 non collegati ad accertamenti. Quota calcolata senza filtro sui vincoli.
- **E) Impegnato Parte Accantonata Tit.1,4** = Include Impegni CP finanziati da Avanzo e da Accertamenti collegati alla parte accantonata. Corrisponde alla somma delle righe 6 e 10 della situazione parte accantonata, ma senza considerare gli impegni FP assunti in anni successivi.
- **F) Impegnato Parte Vincolata Tit.1,4** = Include Impegni CP finanziati da Avanzo e da Accertamenti collegati alla parte vincolata. Corrisponde alla somma delle righe 6 e 10 della situazione parte vincolata, ma senza considerare gli impegni FP assunti in anni successivi.
- **G) Impegnato Parte Investimenti Tit.1,4** = Include Impegni CP finanziati da Avanzo e da Accertamenti collegati alla parte investimenti. Corrisponde alla somma delle righe 6 e 10 della situazione parte investimenti, ma senza considerare gli impegni FP assunti in anni successivi.
- **H) Impegni Promiscui Totale** = Si ottiene dalla riga 7 della situazione vincoli, totalizzando tutte le schede.
- **Impegnato Parte Libera** = Ottenuto per differenza tra l'impegnato totale e tutte le altre quote da B a H.

Nelle righe 14, 15, 16 per la gestione dei residui, nella colonna competenza vengono considerati sia i movimenti con vincolo libero o senza vincolo.

[Immagine: Righe 14-17 con valori nella colonna competenza: Riga 14 = 16.955,83; Riga 15 = 103.173,30; Riga 16 = 540.935,19; Riga 17 = 454.717,72]

---

### 3.3 FUNZIONI PRESENTI NELLA SIDE BAR SINISTRA DELLA GESTIONE VINCOLI

#### Stampa saldi

Esegue la stampa dei Saldi Finali di ogni vincolo, che in sede di rendiconto, a chiusura dell'esercizio contabile, vengono memorizzati tramite la funzione **elabora**, richiamabile dal calcolo dell'avanzo libero con la scelta **'storicizza saldi'**:

[Immagine: Form "Saldi Finali" con opzioni radio "Prospetto Saldi", "Prospetto e Storicizza Saldi" (selezionata), "Ristampa Saldi Elaborati" e pulsanti "Elabora" e "Chiudi"]

Questa operazione serve a cristallizzare le componenti del risultato di amministrazione.

Su ogni vincolo foglia viene caricato un movimento di tipo **90** per il saldo finale di competenza e **190** per il saldo finale di cassa:

[Immagine: Form movimenti annuali con movimenti tipo 90 "MOVIMENTO SALDO FINALE COMP.ZA" e tipo 190 "MOVIMENTO SALDO FINALE CASSA"]

Sulla parte disponibile viene caricato un movimento di rettifica (**89**) per storicizzare la quota dell'Avanzo Libero per l'esercizio contabile di riferimento per memorizzare il valore indicato nella riga G (nel quadro Determinazione Avanzo Libero).

I movimenti di chiusura (90 e 190) verranno utilizzati per calcolare la riga del saldo iniziale della situazione vincoli dell'anno successivo.

In assenza dei movimenti di chiusura, la riga del saldo iniziale della situazione vincoli verrà calcolata in funzione di quanto indicato nel saldo iniziale del dettaglio anagrafica vincoli:

[Immagine: Dettaglio anagrafica vincolo con "Saldo iniziale Competenza" = 1.585.235,32 e "Saldo iniziale Cassa" = 0]

#### Stampa scheda

Esegue la stampa dei prospetti della situazione vincoli. Riporta, sotto forma di report, il prospetto della situazione vincoli, evidenziando tutte le righe importi dal saldo iniziale (riga 1) fino al saldo finale (riga 26). E' possibile eseguire la stampa dei prospetti di tutti i vincoli tramite bottone nella toolbar, oppure si può stampare solo la situazione di uno o più vincoli, eseguendo la stampa tramite la funzione del tasto destro, posizionandosi sul ramo di interesse.

#### Stampa allegati (nota maggio 2020)

Ha lo scopo di evidenziare eventuali anomalie che saranno segnalate successivamente in sede di invio del rendiconto alla BDAP in quanto effettua i controlli effettuati dalla BDAP in sede di acquisizione del flusso sul rendiconto. I prospetti riportano stessi valori presenti negli allegati, si possono richiedere sia i prospetti completi di tutti i movimenti o il solo elenco delle anomalie presenti nei movimenti che comportano lo scarto del flusso da parte della BDAP. Va eseguita prima di procedere con le stampe del quadro generale riassuntivo e degli equilibri di bilancio in quanto la loro sistemazione ha riflessi su tali prospetti.

[Immagine: Form "Stampa Allegati" con campo "Tipo Elenco" impostato su "Solo anomalie" e pulsante "Stampa"]

---

### 3.4 PROSPETTO RIEPILOGATIVO DELLA COMPOSIZIONE DELL'AVANZO

Questo prospetto si ottiene tramite il bottone **cruscotto** presente in ogni scheda della situazione vincoli.

[Immagine: Barra toolbar della Situazione Vincoli con pulsante "Cruscotto" evidenziato]

Il prospetto riepilogativo evidenzia la situazione valida a fine anno precedente e i valori calcolati alla data odierna. In particolare la prima riga riporta il totale del risultato di amministrazione a fine anno precedente e alla data odierna. Le rispettive componenti (accantonato, vincolato, investimenti e libero) sono indicate nelle righe sottostanti.

[Immagine: Form "Avanzo Libero al 12-11-2019" con due colonne "Al 31-12-2018" e "Al 12-11-2019" contenenti: Risultato di Amministrazione (9.772.699,49 / 5.308.197,97), Quota Accantonata (2.300.276,80 / 3.431.010,27), Quota Vincolata (1.231.302,63 / 1.329.776,29), Quota Investimenti (239.421,62 / 267.253,34), Quota Av. Libero (6.001.698,44 / 280.158,07), con indicatori a quadrante colorati]

---

### 3.5 Funzione di servizio per ereditare il vincolo dal capitolo all'impegno/accertamento

[Immagine: Menu "Funzioni di servizio" → "Normalizzazione Archivi" → "Utility riclassificazione Bilancio e Impegni/Accertamenti"]

[Immagine: Form "Normalizzazione Bilancio/Impegni e Accertamenti" con "Selezione archivio" = "2 - Impegni e Accertamenti DL118 (FES_IMP)", opzioni "Imposta" e "Eredita" (selezionata), "Aggiornamento" e "Simulazione", e tabella con campo "Vincolo" evidenziato]

Se si seleziona **tutti**, vengono aggiornati e quindi sovrascritti i vincoli già esistenti, invece utilizzando la funzione **non presenti**, vengono aggiornati solo gli impegni/accertamenti che non hanno vincoli.

Andando sulla finestra **'selezione'** è possibile impostare diversi filtri, al fine di operare solo sugli impegni/accertamenti che si vogliono aggiornare.

La funzione è possibile impostarla prima in **simulazione** poi in **aggiornamento**.

[Immagine: Form con campo "Nuovo Codice" evidenziato in rosso per l'impostazione del vincolo]

Se si sceglie **'imposta'**, permette di impostare il vincolo sugli impegni/accertamenti che si vogliono selezionare attraverso la finestra **'altri parametri'**.

---

### 3.6 Ereditare i vincoli da impegni/accertamenti a liquidazioni/riscossioni

Seguendo il percorso precedentemente indicato, si seleziona l'archivio **6**:

[Immagine: Form "Normalizzazione Bilancio/Impegni e Accertamenti" con "Selezione archivio" = "6 - Aggiornamento Vincolo su Liquidazioni/Riscossioni DL118 (FES_DOCUOG)" e campo "Vincolo" con opzione "Non presenti"]

Attraverso questa funzione è possibile ereditare sulle liquidazioni/riscossioni il vincolo presente negli impegni/accertamenti, andando a selezionare le liquidazioni/riscossioni da aggiornare.

---

### 3.6.1.1 Rilascio Implementazioni al software

La modifica è disponibile a partire dalla **release 7.03 patch successive al 19.03.2019**

### 3.6.1.2 Rilascio implementazioni al software (titolo 4)

La modifica è disponibile a partire dalla **release 7.11 su CWOL – patch del 25.01.2023**