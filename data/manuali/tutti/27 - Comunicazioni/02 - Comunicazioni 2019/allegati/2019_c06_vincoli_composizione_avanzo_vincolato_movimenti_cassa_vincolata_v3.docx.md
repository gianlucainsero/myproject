# Comunicazione n. 06/2019 - Vincoli Composizione avanzo vincolato e Movimenti di cassa

## Scopo della gestione

La gestione dei fondi vincolati consente di arrivare alla determinazione della composizione dell'avanzo dalla gestione dei movimenti sui singoli vincoli.

Quindi uno degli scopi è quello di avere gli importi della composizione suddivisi per tipologia con la stessa logica e classificazione riportata nel modulo che segue.

[Immagine: Form "CITY-FINANCING Dati complementari al Bilancio" con tabella di composizione dell'avanzo contenente: A) Risultato di Amministrazione, Parte accantonata (Fondo crediti di dubbia esigibilità, Altri Accantonamenti da specificare), Parte vincolata (Vincoli derivanti da leggi e da principi contabili, Vincoli derivanti da trasferimenti, Vincoli derivanti dalla contrazione di mutui, Vincoli formalmente attribuiti dall'ente, Altri vincoli da specificare), Parte destinata agli Investimenti, D) Totale destinata agli investimenti, E) Totale parte disponibile (A-B-C-D). Pulsanti: "Ricalcola da Vincoli" e "Anagrafica Vincoli".]

## Definizione

La prima operazione da impostare è la seguente:

[Immagine: Menu "Tabelle" → "Struttura Archivi" → "Definizioni e operabilità - Parametri Generali"]

[Immagine: Form "CITY-FINANCING Definizioni e operabilità" con campo evidenziato "Conto Tesoreria Obbligatorio" → "Gestione Avanzo" → "2=Da Vincoli" (sezione Tesoreria)]

## Definizione anagrafica vincoli

Per operare sui singoli vincoli in modo da ottenere una gestione simile a quella richiesta nella composizione dell'avanzo, l'anagrafica viene predisposta automaticamente in sede di impianto iniziale con la seguente codifica.

Le lettere iniziali dei codici da **B** a **E** rappresentano il primo livello della codifica e sono le stesse di quelle indicate nella form della composizione dell'avanzo.

Il codice di secondo livello indica la tipologia specifica, es. **B1** = accantonamento per FCDDE.

### Default anagrafica vincoli

La codifica rappresentata nell'immagine che segue è preimpostata in automatico alla prima apertura del programma Anagrafica Vincoli, poi la struttura può essere personalizzata aggiungendo ulteriori sottolivelli.

[Immagine: Albero "CITY-FINANCING Anagrafica Vincoli" con struttura gerarchica: AVANZO - B) PARTE ACCANTONATA (B1-B6), AVANZO - C) PARTE VINCOLATA (C1-C5), AVANZO - D) PARTE DESTINATA AGLI INVESTIMENTI (D1), AVANZO - E) PARTE DISPONIBILE (E_1), ALTRA DESTINAZIONE ESCLUSA DA COMPOSIZIONE AVANZO]

Per aggiungere sotto livelli, posizionarsi sulla voce per cui si vuole aggiungere il sotto livello, premere tasto destro:

[Immagine: Menu contestuale con opzione "Aggiungi Sottolivello" evidenziata]

Su alcune tipologie come la **B6 - Altri accantonamenti da dettagliare**, occorre definire obbligatoriamente le singole voci di accantonamento e tipologie di accantonamento per le quote vincolate.

[Immagine: Esempio di B6 con sotto-voci B6_1 (fine mandato del sindaco) e B6_2 (Fondo Rinnovo contrattuale)]

Si allega un esempio di codifica completa dell'anagrafico. La tabella è gestibile a livelli multipli e gerarchici, quindi su ogni ramo si possono definire tutti i livelli necessari per una gestione che rappresenti la realtà dell'ente.

I movimenti devono essere effettuati solo sull'ultimo elemento della tabella definito come **elemento foglia**.

### Esempio di codifica completa dell'anagrafica vincoli

[Immagine: Albero completo "CITY-FINANCING Anagrafica Vincoli" con struttura dettagliata:]

- **AVANZO - B) PARTE ACCANTONATA**
  - B1 - Accantonamento x FCDDE
  - B2 - Accantonamento residui perenti (solo per le regioni)
  - B3 - Fondo anticipazioni di liquidità D.L. 35/2013
  - B4 - Fondo perdite società partecipate
  - B5 - Fondo contenzioso
  - B6 - Altri accantonamenti da dettagliare in composizione avanzo
    - B6_1 - fine mandato del sindaco
    - B6_2 - Fondo Rinnovo contrattuale
- **AVANZO - C) PARTE VINCOLATA**
  - C1 - Vincoli derivanti da leggi e dai principi contabili
    - C1.1 - Fondo risorse umane
    - C1.2 - Violazione codice della strada
    - C1.3 - Depurazione e fognatura
    - C1.4 - Edilizia residenziale pubblica
    - C1.5 - Incentivi UT
    - C1.6 - Oneri di urbanizzazione
    - C1.7 - 10% alienazioni
  - C2 - Vincoli derivanti da trasferimenti
    - C2.1 - Contributo Statale SPRAR
    - C2.2 - Contr. in c/capitale abbattimento barriere architettoniche
    - C2.3 - Contr. Regionale borse di studio
    - C2.4 - Contributo Reg. morosità incolpevole
    - C2.5 - Contributo Regione, Protezione civile, antincendio boschivo
    - C2.6 - Contributo Stato Fondo Educazione/Istruzione
    - C2.7 - Contributo Regione interventi costieri L.R. 41/2013 art. 21
    - C2.8 - Contributo Città Metropolitana raccolta differenziata
  - C3 - Vincoli derivanti dalla contrazione di mutui
  - C4 - Vincoli formalmente attribuiti dall'ente
  - C5 - Altri vincoli da specificare
- **AVANZO - D) PARTE DESTINATA AGLI INVESTIMENTI**
  - D1 - Parte Destinata agli Investimenti
- **AVANZO - E) PARTE DISPONIBILE**
  - E_1 - Parte Disponibile
- **ALTRA DESTINAZIONE ESCLUSA DA COMPOSIZIONE AVANZO**

## Inserimento vincoli su impegni/accertamenti

Selezionare l'impegno ed andare in modifica:

[Immagine: Form "CITY-FINANCING Dettaglio Impegno" con tab "VINCOLI" evidenziata nella barra inferiore]

[Immagine: Tab "VINCOLI" con opzioni "Collegamento con vincoli" → "Non vincolato" / "Su unico vincolo", campo "Vincolo" (es. C1.2 - Violazione codice della strada), e sezione "Finanziato dai seguenti Accertamenti appartenenti allo stesso vincolo" con colonna "Acc. collegati"]

La stessa procedura può essere fatta per i residui.

È possibile impostare un vincolo anche sulla voce di bilancio.

## Scheda con operazioni della competenza

Tornando alla tabella su anagrafica vincoli, premendo il tasto destro e selezionando **'situazione'**, si genera la scheda che segue, dove vengono riepilogate le movimentazioni effettuate.

[Immagine: Form "CITY-FINANCING Situazione Vincoli" - AVANZO - D) PARTE DESTINATA AGLI INVESTIMENTI, Anno di Rif. 2018, COMPETENZA. Tabella con 26 righe: Titolo, Importi, Somme di Competenza. Riga 1: AVANZO DISPONIBILE AL 01-01-2018 (304.964,53), Riga 2: AVANZO APPLICATO AL BILANCIO (167.060,92), Riga 3: 2.1 - Da previsione iniziale, Riga 4: 2.2 - Da Variazione di Bilancio, Riga 5: AVANZO NON APPLICATO AL BILANCIO (137.903,61), Riga 6: IMPEGNI PLUR.LI COMP.ZA (CP,FP) Finanziati con AVANZO (156.410,59), Riga 7: UTILIZZATO su IMPEGNI PROMISCUI, Riga 8: AVANZO APPLICATO al BILANCIO e NON UTILIZZATO (10.650,33), Riga 9: ENTRATE da ACCERTAMENTI COMP.ZA (2.182,63), Riga 10: IMPEGNI PLUR.LI COMP.ZA (CP,FP) Finanziati da ENTRATE, Riga 11: ECONOMIE su IMPEGNI COMP.ZA senza VINCOLO, Riga 12: AVANZO DA STANZIAMENTO Missione 20, Riga 13: AVANZO GENERATO DALLA GESTIONE DI COMPETENZA (2.182,63), Riga 14: CANCELLAZIONE RESIDUI PASSIVI INSUSSISTENZA (2.283,84), Riga 15: CANCELLAZIONE RESIDUI ATTIVI VARIAZIONI NEGATIVE, Riga 16: INCREMENTO RESIDUI ATTIVI VARIAZIONI POSITIVE (34.844,16), Riga 17: AVANZO GENERATO dalla GESTIONE RESIDUI (37.128,00), Riga 18-20: ECONOMIE su IMPEGNI FPV per Titolo 1,2,3, Riga 21-25: MOVIMENTI di VARIAZIONE sui VINCOLI, Riga 26: AVANZO DISPONIBILE AL 31-12-2018 (239.421,62)]

Di seguito si illustrano come vengono calcolati gli importi sulle righe sopra evidenziate.

---

### RIGA 1 - AVANZO DISPONIBILE AL 01-01-2018

[Immagine: Riga 1 evidenziata con importo 304.964,53 e nota "Saldo da movimenti"]

Viene reperito dal **movimento 90** del Saldo Finale dell'anno precedente, se presente, altrimenti dal **Saldo iniziale** impostato sulle anagrafiche dei vincoli.

[Immagine: Form con "Anno Inizio - Fine: 2018 / 0", "Saldo iniziale Competenza: € 304.964,53", "Saldo iniziale Cassa: € 0"]

In pratica per il primo anno deve essere impostato il saldo iniziale su ogni vincolo, mentre per gli anni successivi, il saldo iniziale sarà recuperato dai movimenti di chiusura dell'anno precedente.

---

### RIGA 2, 3, 4 – AVANZO APPLICATO AL BILANCIO

[Immagine: Righe 2-4 con Riga 2: AVANZO APPLICATO AL BILANCIO di cui: 167.060,92, Riga 3: 2.1 - Da previsione iniziale 0,00, Riga 4: 2.2 - Da Variazione di Bilancio 167.060,92]

L'**AVANZO APPLICATO AL BILANCIO** è dato da:

- **avanzo applicato da previsione iniziale** è dato dalla sommatoria dei movimenti di tipo 2 (Importo applicato al bilancio di previsione) collegati sull'anagrafica vincoli.
- **avanzo applicato da variazione di bilancio** è dato dalla sommatoria delle variazioni allo stanziamento di bilancio.

[Immagine: Dettaglio Riga 4 - "2.2 - Da Variazione di Bilancio" con tabella: Estremo att. (tipo n°-del), Variazione Positiva, Variazione Negativa. Esempi: CC 25 19-06-2018 → 85.060,92; CC 29 26-06-2018 → 10.000,00; GM 131 12-07-2018 → 72.000,00]

Dove il dettaglio del primo movimento è:

[Immagine: Dettaglio Vincolo D1 - Parte Destinata agli Investimenti, COMPETENZA, Atto Ass. Bil. CC 25 19-06-2018 Delibera di Consiglio. Tabella con colonne per anni 2018, 2019, 2020 (Comp.+/Comp.-/F.Plut.+/F.Plut.-). Valore: 85.060,92 in 2018 Comp.(+)]

---

### RIGA 5 - AVANZO NON APPLICATO AL BILANCIO

[Immagine: Riga 5 con importo 137.903,61 e formula "RIGA 1 - RIGA 2"]

L'avanzo non applicato al bilancio è dato dalla differenza tra l'avanzo disponibile ad inizio anno e l'avanzo applicato al bilancio.

$$\text{Riga 5} = \text{Riga 1} - \text{Riga 2}$$

---

### RIGA 6 – IMPEGNI PLUR.LI COMP.ZA (CP,FP) Finanziati con AVANZO

[Immagine: Riga 6 con importo 156.410,59]

La riga 6 si ottiene dalla sommatoria delle disponibilità operative al lordo di eventuali disimpegni di tutti gli impegni collegati al vincolo e finanziati con avanzo. Il dettaglio della riga è:

[Immagine: Dettaglio Riga 6 con tabella: Anno-Nr Impegno, Quota Vincolata, Descrizione, Disimpegno. Esempi: CP 2018/01057 → 10.000,00; CP 2018/01099 → 0,00; CP 2018/01099.001 → 0,00; CP 2018/01099.002 → 40.456,81; ecc.]

Con il bottone **Consulta Imp** è possibile consultare tutti gli impegni collegati al vincolo corrente.

Dalla paginazione impegni, con il bottone si accede alla situazione impegno.

---

### RIGA 7 – UTILIZZATO su IMPEGNI PROMISCUI

[Immagine: Riga 7 con importo 0,00 e nota "Importo annuale tipo 8"]

La riga 7 non è direttamente collegata ad impegni, ma viene impostata manualmente caricando dei **movimenti di tipo 8** (utilizzo su impegni promiscui) sull'anagrafica vincoli.

---

### RIGA 8 – AVANZO APPLICATO al BILANCIO e NON UTILIZZATO

[Immagine: Riga 8 con importo 10.650,33 e formula "RIGA 2 - RIGA 6 - RIGA 7"]

La riga 8 viene ottenuta dalla differenza tra l'avanzo applicato al bilancio e l'impegnato finanziato da avanzo.

$$\text{Riga 8} = \text{Riga 2} - \text{Riga 6} - \text{Riga 7}$$

---

### RIGA 9 – ENTRATE da ACCERTAMENTI COMP.ZA

[Immagine: Riga 9 con importo 2.182,63]

Sono le entrate di competenza collegate al vincolo. Il dettaglio della riga è:

[Immagine: Dettaglio Riga 9 con tabella: Anno-Nr Accertamento, Quota vincolata, Descrizione. Esempio: CP 2018/02102 → 2.182,63 → BENZI ALESSANDRA - TRASFORMAZIONE DIRITTO DI SUPER...]

#### INSERIMENTO SOTTO ACCERTAMENTI

In fase di inserimento di sotto accertamenti, se nell'accertamento padre è presente un **vincolo unico**, questo sarà ereditato nel sotto accertamento con possibilità di modificarlo.

Mentre se l'accertamento padre è **frazionato su più vincoli**, allora nel sotto accertamento è possibile reperire l'elenco dei vincoli del padre tramite il bottone evidenziato (rif pannello dettaglio accertamento):

[Immagine: Form "Quota Parte" con tabella: Anagrafica Vincolo, Descrizione Quota, Quota, Risorsa. Esempi: C3 → 5,00; C1.1 → 5,00. Pulsanti: "Recupera da Accertamento di RIF", "Nuova Riga", "Cancella Riga"]

Tramite il bottone **'Nuova Riga'** è possibile vincolare parte del sotto accertamento su altri vincoli non previsti nell'accertamento padre.

Mentre tramite il bottone **'Cancella Riga'** è possibile togliere dei vincoli.

---

### RIGA 10 – IMPEGNI PLUR.LI COMP.ZA (CP,FP) Finanziati da ENTRATE

[Immagine: Riga 10 con importo 165.911,31]

Sono gli impegni di tipo CP ed FP finanziati da entrate. In pratica gli impegni conteggiati in questa riga, sono collegati con almeno un accertamento. Il collegamento avviene in questo modo:

[Immagine: Form "CITY-FINANCING Dettaglio Impegno" con tab VINCOLI: "Su unico vincolo" selezionato, Vincolo C1.2 - Violazione codice della strada. Sezione "Finanziato dai seguenti Accertamenti appartenenti allo stesso vincolo": CP 2018/00958 → DIVERSI FAMIGLIE - SANZIONI CDS NOTIFICATE DAL 01/01/2018 AL... → 75.604,96]

---

### RIGA 11 – ECONOMIE su IMPEGNI COMP.ZA senza VINCOLO

[Immagine: Riga 11 con importo 25.785,88]

Il dettaglio della riga è:

[Immagine: Dettaglio Riga 11 - ECONOMIE su IMPEGNI COMP.ZA senza VINCOLO. Tabella: Anno-Nr Impegno, Tipo Variazione, Importo, Descrizione Impegno, Descrizione Variazione. Esempi: CP 2018/00134 → 3-Economia → 90,00 → CONTRIBUTI SU STIPENDI ANNO 2018 → Vincolato per le risorse umane; ecc.]

Confluiscono in questa riga tutte le economie con vincolo, ma con impegno senza vincolo.

Con il bottone si accede alla situazione impegno.

---

### RIGA 12 - AVANZO DA STANZIAMENTO Missione 20

[Immagine: Riga 12 con importo 11.328,51 e nota "A richiesta su singola"]

Il dettaglio della riga è:

[Immagine: Dettaglio Riga 12 - AVANZO DA STANZIAMENTO Missione 20. Tabella: Voce di bilancio, Piano Finanziario, Descrizione, CP-Assestato. Esempi: 2003110 / 2003.110.04 / 1.10.01.39.999 / Altri fondi n.a.c. → 3.328,51; 2003110 / 2003.110.02 / 1.10.01.04.001 / Fondo Rinnovo contrattuale → 8.000,00]

Confluiscono in questa riga le voci di bilancio della missione 20 che hanno il flag per confluire nell'avanzo di competenza.

[Immagine: Form "CITY-FINANCING Voce Bilancio DL118" con campo "Vincolo: B6_2 - Fondo Rinnovo contrattuale" e checkbox "Influisce su Avanzo Comp.za" spuntata]

---

### RIGA 13 – AVANZO GENERATO DALLA GESTIONE DI COMPETENZA

[Immagine: Riga 13 con importo 11.328,51 e formula "RIGA 9 - RIGA 10 + RIGA 11 + RIGA 12"]

È l'avanzo della competenza ottenuto dalle entrate da accertamenti meno l'impegnato finanziato da accertamenti, più eventuali stanziamenti sulla missione 20.

$$\text{Riga 13} = \text{Riga 9} - \text{Riga 10} + \text{Riga 11} + \text{Riga 12}$$

---

### RIGA 14 – CANCELLAZIONE RESIDUI PASSIVI INSUSSISTENZA

[Immagine: Riga 14 con importo 2.283,84]

Il dettaglio della riga è:

[Immagine: Dettaglio Riga 14 - CANCELLAZIONE RESIDUI PASSIVI INSUSSISTENZA. Tabella: Anno-Nr Impegno, Tipo Variazione, Importo, Descrizione Impegno, Descrizione Variazione. Esempio: CP 2017/00833 → 5-Insussistenza → 2.283,84 → CAVIGLIA - ASS. RISORSE - INCARICHI REALIZZAZ... → N]

Rappresenta la **sommatoria delle variazioni negative** meno la **sommatoria delle variazioni positive** eseguite nell'anno di riferimento su **impegni a residuo**.

---

### RIGA 15 e 16 – VARIAZIONI RESIDUI ATTIVI

[Immagine: Riga 15: CANCELLAZIONE RESIDUI ATTIVI VARIAZIONI NEGATIVE → 1.560,00; Riga 16: INCREMENTO RESIDUI ATTIVI VARIAZIONI POSITIVE → 1.580,00]

Sono rispettivamente le **variazioni negative** e **variazioni positive** eseguite nell'anno di riferimento su **accertamenti e sotto accertamenti a residuo**.

Il dettaglio della riga 16 è:

[Immagine: Dettaglio Riga 16 - INCREMENTO RESIDUI ATTIVI VARIAZIONI POSITIVE. Tabella: Anno-Nr Accertamento, Tipo Variazione, Importo, Descrizione, Prog. Var. Esempi: CP 2017/00306 → 1-Aumento con atto → 1.560,00 → Prova Sfondamento; CP 2017/10000 → 20,00 → Residuo 2017 inserito nell'esercizio 2018 prima del rendiconto (30-4-2018)]

Inoltre nella riga 16, oltre alle variazioni in aumento si considerano anche eventuali **accertamenti a residuo inseriti nell'anno di riferimento**.

---

### RIGA 17 – AVANZO GENERATO dalla GESTIONE RESIDUI

[Immagine: Riga 17 con importo 30,00 e formula "RIGA14 - RIGA15 + Riga16"]

La riga 17 è l'avanzo totale dalla gestione residui.

$$\text{Riga 17} = \text{Riga 14} - \text{Riga 15} + \text{Riga 16}$$

---

### RIGA 18, 19, 20 – ECONOMIE per Titolo 1, 2, 3

[Immagine: Riga 18: ECONOMIE su IMPEGNI FPV (FP,DC) Titolo 1 → 13,54; Riga 19: ECONOMIE su IMPEGNI FPV (FP,DC) Titolo 2 → 57.161,33; Riga 20: ECONOMIE su IMPEGNI FPV (FP,DC) Titolo 3 → 0,00]

Le righe 18, 19, 20 sono le economie suddivise per titolo, eseguite nell'anno di riferimento su impegni di tipo **FP e DC** assunti nell'anno di riferimento e caricati in anni precedenti.

Il dettaglio della riga 19 è:

[Immagine: Dettaglio Riga 19 - ECONOMIE su IMPEGNI FPV (FP,DC) Titolo 2. Tabella: Anno-Nr Impegno, Tipo Variazione, Importo, Descrizione Impegno, Descrizione Variazione. Esempi: DC 2018/00631 → 3-Economia → 54.324,55 → DAMONTE - RISORSE PER MANUTENZIONE STRAD... → Proviene da Impegno 2018 C...; DC 2018/00631 → 3-Economia → 56,42; DC 2018/00632 → 3-Economia → 2.780,36 → SOMME A DISPOSIZIONE DA QUANDRO ECONOMICI...]

---

### RIGA 21, 22, 23, 24, 25 – MOVIMENTI di VARIAZIONE sui VINCOLI

[Immagine: Riga 21: SOMME TRASFERITE ad ALTRI VINCOLI → 229.261,53 (Importo annuale tipo 7); Riga 22: SOMME PROVENIENTI da ALTRI VINCOLI → 0,00 (Importo annuale tipo 6); Riga 23: SOMME UTILIZZATE per COPERTURA DIS.ZO di AMM.ZIONE → 0,00 (Importo annuale tipo 3); Riga 24: SOMME RECUPERATE da FCDDE → 0,00 (Importo annuale tipo 4); Riga 25: SOMME UTILIZZATE a COPERTURA SALDO FCDDE → 257.248,59 (Importo Annuale tipo 5)]

Le righe dalla 21 alla 25 sono le somme caricate sull'anagrafica dei singoli vincoli con specifici tipi movimento. Ad esempio il **tipo movimento 7** per trasferire somme ad un altro vincolo e il **tipo movimento 6** per acquisire somme da altri vincoli.

Ad esempio il dettaglio della riga 21 è:

[Immagine: Dettaglio Riga 21 - SOMME TRASFERITE ad ALTRI VINCOLI. Tabella: Anno, Tipo Variazione, Importo Variazione, Descrizione. Esempi: 2018 → Trasferito ad altri vincoli → 216.116,00 → Importo trasferito all'avanzo libero cod. E.1 perché la società è stata ricapitalizzata; 2018 → Trasferito ad altri vincoli → 12.733,07 → economie su accantonamento Fondo rinnovo contrattuale di euro 67.000,00 e trasferite su avanzo d...; 2018 → Trasferito ad altri vincoli → 412,46 → economia su Fondo rinnovo contrattuale - avanzo accantonato]

---

### RIGA 26 – AVANZO DISPONIBILE AL 31-12-2018

[Immagine: Riga 26 con importi 6.001.698,44 e 736.786,11 e formula "RIGA1 - RIGA6 - RIGA..."]

La riga 26 è il saldo finale ottenuta in questo modo:

$$\text{Riga 26} = \text{saldo iniziale} - \text{impegnato CP e FP finanziato da avanzo (riga 6 e riga 7)} + \text{avanzo dalla gestione competenza (riga 13)} + \text{avanzo dalla gestione residui (riga 17)} + \text{economie su impegni FPV (righe 18, 19, 20)} \pm \text{somme caricate con movimenti collegati all'anagrafica vincoli}$$

Dettaglio della formula:

- **+** saldo iniziale
- **-** impegnato CP e FP finanziato da avanzo (riga 6 e riga 7)
- **+** avanzo dalla gestione competenza (riga 13)
- **+** avanzo dalla gestione residui (riga 17)
- **+** economie su impegni FPV (righe 18, 19, 20)
- **+/-** somme caricate con movimenti collegati all'anagrafica vincoli (es. trasferimento/acquisizione da altri vincoli)

---

## PARTE DISPONIBILE DAL RISULTATO DI AMMINISTRAZIONE

L'anagrafica della parte disponibile deve essere codificata con un **solo codice foglia**:

[Immagine: Albero con "AVANZO - E) PARTE DISPONIBILE" → "E_1 Parte Disponibile"]

La situazione vincoli della parte disponibile mostra **due modalità di calcolo**. La colonna importi mostra i saldi reperiti dall'uso del vincolo libero, mentre l'altra colonna riporta il saldo calcolato per differenza.

Nella riga del saldo finale (riga 26) tramite il bottone presente, si accede a questo calcolo della parte disponibile:

(Nota: Questa form è richiamabile anche dalla toolbar della situazione vincoli e dalla stampa del conto consuntivo)

[Immagine: Form "CITY-FINANCING Determinazione Avanzo Libero" con sezioni: "Calcolo Saldo per Differenza" (A) RISULTATO DI AMMINISTRAZIONE: 9.772.699,49; B) Totale parte Accantonata: 2.300.276,80; C) Totale parte Vincolata: 1.231.302,63; D) Totale destinato agli Investimenti: 239.421,62; E) Quota Avanzo Libero (A-B-C-D): 6.001.698,44; F) Avanzo da Movimenti su scheda: 5.087.346,28; G) - Saldo calcolato per differenza (E-F): 914.352,16; H) Avanzo Libero Fine Esercizio: 6.001.698,44) e "Calcolo Avanzo Libero da Movimenti" (I) Avanzo da scheda Col. Comp.za: 6.144.326,04; L) Differenza con Riga E (E-I): -142.627,60). Sezione "Saldi Finali" con radio button: "Prospetto Saldi", "Prospetto e Storicizza Saldi", "Ristampa Saldi Elaborati". Pulsanti: "Elabora" e "Chiudi".]

[Immagine: Dialog "CITY-FINANCING Info" con testo: "Nota - L'importo digitato viene memorizzato sul vincolo della parte Disponibile, come rettifica al fine di storicizzare la quota dell'Avanzo Libero per l'esercizio contabile di riferimento. E' presente un movimento differenza per l'Avanzo Libero pari a € 914.352,16"]

La **riga E**, è la **Quota Avanzo Libero** ottenuta per differenza tra il risultato di amministrazione (calcolato con il sistema classico) e le quote provenienti dalle componenti delle parti vincolate (parte accantonata, parte vincolata e parte investimenti).

Al fine di ottenere il saldo dell'avanzo libero uguale a quello calcolato dal programma di gestione, viene calcolato un **movimento differenza** come evidenziato nella **riga G**. Questo movimento viene memorizzato con **codice 89** sul vincolo foglia della parte disponibile. Di conseguenza si può calcolare il **saldo finale** su ogni vincolo foglia, che verrà memorizzato per l'anno di riferimento con **codice 90** su ogni vincolo foglia. Questi movimenti di tipo 90 verranno poi utilizzati per riaprire la situazione vincoli iniziale per l'anno successivo.

La **riga F** è l'**Avanzo Libero da scheda (Riga 26)**. Questa riga tiene conto solo dei movimenti su scheda, escludendo l'eventuale movimento differenza per Avanzo libero (Mov. 89).

La **riga G** è la **differenza** tra l'avanzo libero ottenuto tramite il risultato di amministrazione (riga E) e l'avanzo libero da movimenti su scheda (riga F).

$$\text{Riga G} = \text{Riga E} - \text{Riga F}$$

L'importo evidenziato dovrà essere memorizzato sul vincolo della parte Disponibile (mov. 89), come rettifica al fine di storicizzare la quota dell'avanzo libero per l'esercizio contabile di riferimento. Questo importo è modificabile fino a quando non viene memorizzato il movimento differenza.

### Opzioni di elaborazione

#### Prospetto Saldi
Esegue il calcolo e stampa dei saldi finali per ogni vincolo.

#### Prospetto e storicizza saldi
Esegue il calcolo e stampa dei saldi finali per ogni vincolo ed inserisce i seguenti movimenti di chiusura:

- **movimento differenza per Avanzo Libero (mov. 89)** sul vincolo foglia della parte disponibile.
- **movimenti di saldo finale (mov. 90)** su ogni singolo vincolo foglia. Questi movimenti verranno utilizzati per riaprire la situazione iniziale vincoli per l'anno successivo.

#### Ristampa Saldi Elaborati
Esegue la stampa di tutti i vincoli riportando nei saldi finali i valori ottenuti dai movimenti di chiusura caricati dalla fase precedente.

---

## CALCOLO AVANZO LIBERO DA MOVIMENTI

Questa modalità di calcolo è in alternativa a quella descritta sopra.

Per la gestione: effettuare il ricalcolo dei valori dai movimenti premendo il bottone **'Ric. da Movim.'** presente alla riga 26.

Quindi sempre dalla riga 26 selezionare il pulsante dopo la descrizione per accedere al calcolo dell'avanzo libero **'Calcola Av.lib'**.

[Immagine: Riga 26 con pulsanti "Calcola Av.Lib." e "Ric. da Movim." evidenziati]

Rif. Form della 'Determinazione Avanzo Libero':

[Immagine: Sezione "Calcolo Avanzo Libero da Movimenti" con: I) Avanzo da scheda Col. Comp.za → € 0; L) Differenza con Riga E (E-I) → € -53.757.477,13]

La funzione 'ricalcola da movimenti' valorizza le righe **'I'** ed **'L'** sotto evidenziate.

La **Riga I** riporta l'avanzo indicato nella seconda colonna della situazione vincoli per la parte disponibile.

La **riga L** è la differenza tra l'avanzo libero ottenuto tramite il risultato di amministrazione (riga E) e l'avanzo libero reperito dalla seconda colonna (riga I).

$$\text{Riga L} = \text{Riga E} - \text{Riga I}$$

Nella seconda colonna della situazione vincoli per la parte disponibile si applicano queste modalità di calcolo:

### Formula per calcolo dell'accertato disponibile

(dal bottone a fianco dell'importo)

[Immagine: Form "CITY-FINANCING Situazione Vincoli - Parte Disponibile" con: A) Accertato Totale Titoli 1,2,3 → € 16.679.065,29; B) FPV Spesa Tit.1 - FPV da Avanzo → € 169.775,56 (con checkbox FPV_Spesa e FP Imp); C) Accertato Parte Accantonata Tit.1,2,3 → € 0; D) Accertato Parte Vincolata Tit.1,2,3 → € 444.751,65; E) Accertato Parte Investimenti Tit.1,2,3 → € 0; F) Somme Accantonate da Mis. 20 → € 944.934,39; Accertato Parte Libera (A-B-C-D-E-F) → € 15.119.603,69]

**A) Accertato Totale Titoli 1,2,3** = Accertato totale ottenuto dalle voci di bilancio filtrando per titoli 1,2,3.

**B) FPV Spesa Tit.1 – FPV da Avanzo** = Si ottiene dalla differenza tra:
- FPV Spesa Tit.1 = da schede di monitoraggio partendo dalle voci di bilancio del titolo 1.
- FPV da Avanzo = impegni FP con vincolo ed imputati su esercizi successivi a quello di riferimento

Premendo sulle icone degli fogli excel, è possibile scaricare il file excel con il riepilogo di tutti i movimenti utilizzati per il calcolo.

Esempio estrazione Impegni FP rispetto all'esercizio 2018:

[Immagine: Foglio Excel con colonne: Anno, N. Impegni, Descrizione Impegno, Disponibilità operativ. Esempi: 2019/00386 → CONTRATTO DECEN... → 129,69; 2019/00387 → 4.165,51; ecc.]

Esempio estrazione su excel per FPV spesa:

[Immagine: Foglio Excel con colonne: Codice Voce, Descrizione Voce, Importo FPV. Esempi: 1404 101 06 → Indennità ed altri compensi → 3.671,42; 0101 101 06 → 675,00; 0301 101 08 → Contributi obbligatori per il → 4.819,00; ecc.]

**C) Accertato Parte Accantonata Tit.1,2,3** = Accertato della parte accantonata per Tit.1,2,3. Sono incluse in questa voce anche le eventuali economie su impegni senza vincolo (riga 11 della situazione vincoli per la parte accantonata).

**D) Accertato Parte Vincolata Tit.1,2,3** = Accertato della parte vincolata per Tit.1,2,3. Sono incluse in questa voce anche le eventuali economie su impegni senza vincolo (riga 11 della situazione vincoli per la parte vincolata).

**E) Accertato Parte Investimenti Tit.1,2,3** = Accertato della parte investimenti per Tit.1,2,3. Sono incluse in questa voce anche le eventuali economie su impegni senza vincolo (riga 11 della situazione vincoli per la parte investimenti).

**F) Somme Accantonate da Mis. 20** = Corrisponde alla riga 12 della situazione vincoli, sono il totale delle voci di bilancio che hanno il flag per influire su avanzo di competenza.

**Accantonato Parte Libera** = Ottenuto per differenza tra l'accertato totale (tit 1,2,3) e tutte le quote da B a F.

$$\text{Accertato Parte Libera} = A - B - C - D - E - F$$

### Formula per calcolo dell'impegnato disponibile

(dal bottone a fianco dell'importo)

[Immagine: Form "CITY-FINANCING Situazione Vincoli - Parte Disponibile" con: A) Impegnato Totale Titolo 1,4 → € 15.041.898,26; B) Impegni Finanziati da FPV Tit.1,4 → € 150.004,51; C) Economie su Impegni da FPV Tit.1,4 → € 12.464,72; D) Impegni Finanziati da Avanzo di Amm. Tit.1 → € 18.316,96; E) Impegnato Parte Accantonata Tit.1,4 → € 0; F) Impegnato Parte Vincolata Tit.1,4 → € 150.777,24; G) Impegnato Parte Investimenti Tit.1,4 → € 0; H) Impegni Promiscui Totale → € 50.864,47; Impegnato Parte Libera (A-B-C-D-E-F-G-H) → € 14.659.450,36]

**A) Impegnato Totale Titolo 1,4** = Impegnato totale ottenuto dalle voci di bilancio filtrando per titoli 1 e 4.

**B) Impegni Finanziati da FPV Tit.1,4** = Impegni FP e DC, titoli 1,4 assunti e caricati nell'anno di riferimento. Quota calcolata senza filtro sui vincoli.

**C) Economie su Impegni da FPV Tit.1,4** = Economie su Impegni FP, DC. Quota calcolata senza filtro sui vincoli.

**D) Impegni Finanziati da Avanzo di Amm. Tit.1** = Impegni CP solo Titolo 1 non collegati ad accertamenti. Quota calcolata senza filtro sui vincoli.

**E) Impegnato Parte Accantonata Tit.1,4** = Include Impegni CP finanziati da Avanzo e da Accertamenti collegati alla parte accantonata. Corrisponde alla somma delle righe 6 e 10 della situazione parte accantonata, ma senza considerare gli impegni FP assunti in anni successivi.

**F) Impegnato Parte Vincolata Tit.1,4** = Include Impegni CP finanziati da Avanzo e da Accertamenti collegati alla parte vincolata. Corrisponde alla somma delle righe 6 e 10 della situazione parte vincolata, ma senza considerare gli impegni FP assunti in anni successivi.

**G) Impegnato Parte Investimenti Tit.1,4** = Include Impegni CP finanziati da Avanzo e da Accertamenti collegati alla parte investimenti. Corrisponde alla somma delle righe 6 e 10 della situazione parte investimenti, ma senza considerare gli impegni FP assunti in anni successivi.

**H) Impegni Promiscui Totale** = Si ottiene dalla riga 7 della situazione vincoli, totalizzando tutte le schede.

**Impegnato Parte Libera** = Ottenuto per differenza tra l'impegnato totale e tutte le altre quote da B a H.

$$\text{Impegnato Parte Libera} = A - B - C - D - E - F - G - H$$

Nelle righe 14, 15, 16 per la gestione dei residui, nella colonna competenza vengono considerati sia i movimenti con vincolo libero o senza vincolo.

[Immagine: Righe 14-17 con colonna competenza evidenziata: Riga 14: 505,35 / 16.955,83; Riga 15: 0,00 / 103.173,30; Riga 16: 0,00 / 540.935,19; Riga 17: 505,35 / 454.717,72]

---

## PROSPETTO RIEPILOGATIVO DELLA COMPOSIZIONE DELL'AVANZO

Questo prospetto si ottiene tramite il bottone **cruscotto** presente in ogni scheda della situazione vincoli.

[Immagine: Barra toolbar della Situazione Vincoli con pulsante "Cruscotto" evidenziato]

Il prospetto riepilogativo evidenzia la situazione valida a fine anno precedente e i valori calcolati alla data odierna. In particolare la prima riga riporta il totale del risultato di amministrazione a fine anno precedente e alla data odierna. Le rispettive componenti (accantonato, vincolato, investimenti e libero) sono indicate nelle righe sottostanti.

[Immagine: Form "CITY-FINANCING Avanzo Libero al 12-11-2019" con due colonne: "Al 31-12-2018" e "Al 12-11-2019". Risultato di Amministrazione: 9.772.699,49 / 5.308.197,97. di cui: Quota Accantonata: 2.300.276,80 / 3.431.010,27; Quota Vincolata: 1.231.302,63 / 1.329.776,29; Quota Investimenti: 239.421,62 / 267.253,34; Quota Av. Libero: 6.001.698,44 / 280.158,07. Ogni riga ha un'icona di gauge/indicatore.]

---

## Funzione di servizio per ereditare il vincolo dal capitolo all'impegno/accertamento

[Immagine: Menu "Funzioni di servizio" → "Utility riclassificazione (Bilancio e Impegni/Accertamenti)" → "Normalizzazione Archivi"]

[Immagine: Form "CITY-FINANCING Normalizzazione Bilancio/Impegni e Accertamenti" con "Selezione archivio: 2 - Impegni e Accertamenti DL118 (PES_IMP)". Pulsanti: "Imposta" / "Eredita", "Aggiornamento" / "Simulazione". Tabella con campi: Servizio Assegnatario, Conto Co.Ge., Conto Co.An., Centro di Costo, Conto Tesoreria, Tipo finanziamento, Aliquota IVA, cod_stat_1, cod_stat_1, cod_stat_1, Atto assunzione, Vincolo. Colonne: Sel, Campo, Tipo Aggiornamento, Vecchio Codice, Nuovo Codice. Pulsante "Normalizza".]

Se si seleziona **tutti**, vengono aggiornati e quindi sovrascritti i vincoli già esistenti, invece utilizzando la funzione **non presenti**, vengono aggiornati solo gli impegni/accertamenti che non hanno vincoli.

Andando sulla finestra **'selezione'** è possibile impostare diversi filtri, al fine di operare solo sugli impegni/accertamenti che si vogliono aggiornare.

La funzione è possibile impostarla prima in **simulazione** poi in **aggiornamento**.

[Immagine: Form Normalizzazione con modalità "Eredita" selezionata e campo "Nuovo Codice" evidenziato per il campo Vincolo]

Se si sceglie **'imposta'**, permette di impostare il vincolo sugli impegni/accertamenti che si vogliono selezionare attraverso la finestra **'altri parametri'**.

### Ereditare vincoli da impegni/accertamenti a liquidazioni/riscossioni

Seguendo il percorso precedentemente indicato, si seleziona l'archivio **6**:

[Immagine: Form "CITY-FINANCING Normalizzazione Bilancio/Impegni e Accertamenti" con "Selezione archivio: 6 - Aggiornamento Vincolo su Liquidazioni/Riscossioni DL118 (PES_DOCUO)". Pulsante "Eredita" selezionato. Tabella con campo "Vincolo" → "Non presenti".]

Attraverso questa funzione è possibile ereditare sulle liquidazioni/riscossioni il vincolo presente negli impegni/accertamenti, andando a selezionare le liquidazioni/riscossioni da aggiornare.

---

## Rilascio Implementazioni al software

La modifica è disponibile a partire dalla **release 7.03 patch successive al 19.03.2019**.