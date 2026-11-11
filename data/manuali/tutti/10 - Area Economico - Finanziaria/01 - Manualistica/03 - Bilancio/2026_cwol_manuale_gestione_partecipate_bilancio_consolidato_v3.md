# Manuale Gestione Partecipate e Bilancio Consolidato

**Software:** CWOL - modulo Gestione Partecipate

---

## 1. INTRODUZIONE E OBIETTIVI DEL MODULO

### 1.1 Finalità del Modulo

Il modulo "Gestione Partecipate" di CWOL consente all'Ente di censire e monitorare le proprie partecipazioni dirette e indirette in società, fondazioni, consorzi ed altri organismi partecipati, e di produrre, a partire dai dati così raccolti, il Bilancio Consolidato dell'Ente capogruppo.

Il modulo persegue quindi due obiettivi tra loro complementari:

- **Monitoraggio delle partecipate:** dati identificativi, quote di possesso dirette e indirette, organi e incarichi, compagine sociale, servizi erogati e affidati, eventuali procedure concorsuali, bilanci civilistici. Il modulo consente di adempiere alla revisione periodica, entro il 31-12, dell'assetto complessivo delle società in cui l'Amministrazione Pubblica detiene partecipazioni, come previsto dall'art. 20 del TUSP (Testo Unico Società a partecipazione Pubblica). Inoltre è prevista l'asseverazione crediti-debiti come previsto dall'art. 11 co. 6 del D.Lgs 118-2011.

- **Bilancio Consolidato dell'Ente:** determinazione del Gruppo Amministrazione Pubblica (GAP), definizione del perimetro di consolidamento, acquisizione dei bilanci dei soggetti inclusi, applicazione delle riduzioni proporzionali, elisione dei movimenti infragruppo, salvataggio del bilancio consolidato definitivo e generazione del relativo file XBRL.

I due ambiti sono strettamente collegati: i dati anagrafici e i bilanci raccolti nella sezione Partecipate costituiscono infatti la base di calcolo utilizzata dalle funzioni di Bilancio Consolidato descritte al par. 4.

### 1.2 Ambito Normativo di Riferimento

Le funzionalità del modulo fanno riferimento al D.Lgs. 118/2011 e, in particolare, all'Allegato n. 4/4 "Principio contabile applicato concernente il bilancio consolidato", che disciplina l'individuazione del Gruppo Amministrazione Pubblica (GAP), i criteri di inclusione/esclusione dei soggetti dal perimetro di consolidamento e le modalità di consolidamento (integrale o proporzionale). Il bilancio consolidato prodotto da CWOL viene redatto secondo lo schema di cui all'Allegato n. 11 al medesimo decreto.

---

## 2. GESTIONE PARAMETRIZZAZIONI E CONFIGURAZIONI INIZIALI

Le tabelle descritte in questo paragrafo sono raccolte nel menù:

> **180. Servizi economici → 160. Gestione Partecipate → 10. Archivi di sistema**

e vanno predisposte prima di avviare il censimento delle partecipate e la produzione del bilancio consolidato, in quanto costituiscono i parametri di calcolo utilizzati dalle funzioni descritte ai successivi paragrafi 3 e 4.

### 2.1 Tipi Partecipazione

> **180. Servizi economici → 160. Gestione Partecipate → 10. Archivi di sistema → 10. Tipi Partecipazione**

Archivio (Codice / Descrizione) che codifica le diverse tipologie di soggetto partecipato gestibili dall'Ente. Ogni partecipata censita in anagrafica (par. 3.1) viene associata a uno di questi tipi, che viene poi richiamato anche dai Parametri di calcolo GAP (par. 2.2) per differenziare le soglie di rilevanza in base alla natura del soggetto.

L'allegato 4/4 prevede 3 macro-tipologie di partecipazioni:

- **ENTI STRUMENTALI** (controllati o partecipati)
- **ORGANISMI STRUMENTALI** (privi di personalità giuridica)
- **SOCIETÀ** (controllate o partecipate)

[Immagine: Screenshot dell'archivio Tipi Partecipazione con i codici ES, OS, SC]

### 2.2 Parametri Calcolo GAP

> **180. Servizi economici → 160. Gestione Partecipate → 10. Archivi di sistema → 20. Parametri calcolo GAP**

Questa tabella definisce, per Codice e Descrizione, le soglie minime di possesso al di sotto delle quali una partecipazione è considerata irrilevante ai fini dell'inclusione nel Gruppo Amministrazione Pubblica. Ogni riga è associata a un Tipo Partecipazione (par. 2.1) e a un flag "Quotata", in modo da poter differenziare la soglia minima (Valore) a seconda che il soggetto sia quotato o meno su mercati regolamentari (ad es. il codice ES-PM0 "Enti Strumentali - Partecipazione Minima" riferito al tipo "Società" non quotata).

[Immagine: Screenshot della tabella Parametri calcolo GAP con codici ES-PM0, OS-PM0, SC-PM0, SC-PM01]

### 2.3 Parametri Calcolo Perimetro

> **180. Servizi economici → 160. Gestione Partecipate → 10. Archivi di sistema → 30. Parametri calcolo Perimetro**

Definisce le percentuali (Valore) utilizzate dal controllo dei parametri di rilevanza in fase di determinazione del perimetro di consolidamento (par. 4.2.2). I codici pre-forniti sono:

- **P1, P2, P3:** soglie ordinarie (3%) applicate rispettivamente a Totale Attivo, Patrimonio Netto e Ricavi della gestione caratteristica.
- **PI:** soglia di "partecipazione irrilevante" (1%).
- **PT1, PT2, PT3:** soglie maggiorate (10%) applicate agli stessi tre aggregati nel caso di soggetti altrimenti esclusi.

[Immagine: Screenshot della tabella Parametri Perimetro con valori 3,00 per P1/P2/P3, 1,00 per PI, 10,00 per PT1/PT2/PT3]

Il confronto tra l'incidenza percentuale di ciascuna partecipata rispetto a questi parametri e i corrispondenti valori dell'Ente determina l'inclusione o l'esclusione del soggetto dal perimetro di consolidamento (par. 4.2.2).

### 2.4 Parametri Calcolo Soglia

> **180. Servizi economici → 160. Gestione Partecipate → 10. Archivi di sistema → 40. Parametri calcolo Soglia**

Per ciascun esercizio contabile è necessario indicare quali righe dei prospetti ministeriali dell'Ente (par. 2.5) rappresentano il Totale Attivo, il Totale Patrimonio Netto e il Totale Ricavi della gestione caratteristica: sono questi i tre aggregati di riferimento (denominatori) sui quali vengono calcolate le incidenze percentuali descritte al paragrafo precedente.

[Immagine: Screenshot della tabella Parametri Soglia con esercizio 2025 e riferimenti alle righe dei prospetti]

### 2.5 Prospetti

> **180. Servizi economici → 160. Gestione Partecipate → 10. Archivi di sistema → 50. Prospetti**

Elenco dei prospetti ministeriali predefiniti e utilizzati dal modulo, tra cui il Conto Economico e lo Stato Patrimoniale Attivo/Passivo secondo l'Allegato n. 11 al D.Lgs. 118/2011 richiamati nella gestione dei bilanci delle partecipate e dell'Ente (par. 3.2 e 3.3). Per ciascuna riga dei prospetti di Contabilità Generale è definito il collegamento con la corrispondente riga del prospetto del bilancio consolidato: tale collegamento viene utilizzato dall'importazione dei dati CO.GE. nel bilancio dell'Ente (par. 3.3).

**Si tratta di una tabella precaricata e non modificabile dall'Ente.**

### 2.6 Raggruppamenti

> **180. Servizi economici → 160. Gestione Partecipate → 10. Archivi di sistema → 60. Raggruppamenti**

Archivio libero (Codice / Descrizione) predisposto per raggruppare le partecipate secondo criteri definiti dall'Ente (ad es. per settore di attività o per area amministrativa).

### 2.7 Tipi Incarico

> **180. Servizi economici → 160. Gestione Partecipate → 10. Archivi di sistema → 70. Tipi Incarico**

Archivio libero utilizzato per codificare le tipologie di incarico (ad es. Amministratore Unico, Presidente del CdA, Sindaco) da associare ai soggetti censiti nella sezione Incarichi Partecipata (par. 3.2).

### 2.8 Tipologie Compensi

> **180. Servizi economici → 160. Gestione Partecipate → 10. Archivi di sistema → 80. Tipologie compensi**

Archivio libero utilizzato per classificare le voci di compenso corrisposte agli organi delle partecipate, anch'esso richiamabile dalla sezione Incarichi Partecipata.

### 2.9 Servizi Pubblici

> **180. Servizi economici → 160. Gestione Partecipate → 10. Archivi di sistema → 90. Servizi pubblici**

Archivio libero utilizzato per codificare i servizi pubblici erogati o affidati dall'Ente alle proprie partecipate, richiamato dalle sezioni Servizi Erogati e Servizi Affidati dell'anagrafica partecipata (par. 3.2).

### 2.10 Forme Giuridiche

> **180. Servizi economici → 160. Gestione Partecipate → 10. Archivi di sistema → 100. Forme Giuridiche**

Archivio (Codice / Descrizione) precaricato con le principali forme giuridiche delle imprese in Italia (S.p.A., S.r.l., S.r.l.s., S.a.p.a., Società Europea, S.n.c., S.a.s., S.s., APS, ODV, ETS, Fondazione ETS, Impresa Sociale, Impresa individuale/familiare, ecc.), richiamato dal campo Forma Giuridica dell'anagrafica partecipata (par. 3.1). L'archivio è implementabile dall'Ente in base a specifiche esigenze: i codici inferiori a 500.000 sono riservati alle forme giuridiche inserite dall'Ente, mentre i codici superiori a 500.000 identificano i record precaricati e gestiti dal software.

### 2.11 Parametri Generali

> **180. Servizi economici → 160. Gestione Partecipate → 10. Archivi di sistema → 110. Parametri Generali**

Archivio dei parametri generali del modulo (Codice Parametro, Valore, Valore default, Note, Sequenza). Per ciascun parametro, se il campo Valore non è compilato viene utilizzato il Valore default. I parametri attualmente utilizzati dal modulo sono:

- **CONTO_QUAD_PP:** conto del piano dei conti sul quale viene registrata la differenza di quadratura delle scritture infragruppo tra due partecipate (par. 4.3);
- **CONTO_QUAD_EXT:** conto di contropartita della scrittura di quadratura, sul quale la stessa differenza viene registrata in segno opposto.

I conti indicati devono essere esistenti, attivi, di ultimo livello (foglia) e coerenti con la normativa di riferimento: in caso contrario il salvataggio delle scritture infragruppo tra partecipate viene bloccato.

I parametri non sono precaricati: se la tabella risulta vuota, l'Ente deve inserirli con il pulsante "Nuovo", indicando come Codice Parametro esattamente `CONTO_QUAD_PP` e `CONTO_QUAD_EXT` e come Valore il codice del conto da utilizzare (in alternativa può essere valorizzato il Valore default). Se un parametro manca, oppure il suo valore (e il relativo valore default) è vuoto, il salvataggio delle scritture infragruppo tra partecipate viene bloccato.

> **N.B.** Gli archivi "Tipi partecipazioni", "Parametri calcolo GAP", "Parametri calcolo perimetro", "Parametri calcolo soglia" e "Forme giuridiche" sono precaricati di default; l'Ente può comunque implementare l'archivio in base a specifiche esigenze.
>
> Gli archivi "Raggruppamenti", "Tipi Incarico", "Tipologie compensi" e "Servizi pubblici" sono forniti vuoti e devono essere valorizzati a cura dell'Ente in base alle proprie esigenze di classificazione, prima di compilare le relative sezioni dell'anagrafica partecipata.
>
> L'archivio "Parametri Generali" deve essere verificato e, se necessario, valorizzato dall'Ente prima di registrare scritture infragruppo tra partecipate (par. 2.11 e 4.3).

---

## 3. GESTIONE PARTECIPATE

Le funzioni descritte in questo paragrafo si trovano nel menù:

> **180. Servizi economici → 160. Gestione Partecipate → 20. Partecipate**

### 3.1 Anagrafica Partecipate

> **180. Servizi economici → 160. Gestione Partecipate → 20. Partecipate → 10. Anagrafiche Partecipate**

L'elenco riporta tutte le partecipate censite (Codice / Ragione Sociale) indipendentemente dal fatto che siano incluse o meno nel GAP e/o perimetro di consolidamento. Da qui è possibile inserire una nuova partecipata oppure aprire in modifica una scheda esistente.

[Immagine: Screenshot dell'elenco Anagrafiche Partecipate con codici da 01 a 08]

La scheda anagrafica di dettaglio raccoglie i dati identificativi e le informazioni di possesso del soggetto:

- **Codice, Ragione Sociale, Codice Fiscale, Partita Iva:** dati identificativi del soggetto.
- **Tipo Partecipazione:** richiama l'archivio di cui al par. 2.1.
- **Forma Giuridica:** richiama l'archivio Forme giuridiche (par. 2.10).
- **Sito Internet, Email, Recapito telefonico, Sede legale:** dati di contatto.
- **% Possesso diretta / % Possesso indiretta / % Possesso totale:** quote di possesso dell'Ente, gestite fino a 5 cifre decimali. La % Possesso diretta è digitabile; la % Possesso indiretta deriva dalle catene di possesso indiretto (partecipazioni detenute per il tramite di altri soggetti) censite con il pulsante "Gestione indirette"; la % Possesso totale è in sola visualizzazione ed è calcolata automaticamente come somma della % Possesso diretta e della % Possesso indiretta.
- **Totale partecipazione pubblica, Quotata su mercati Regolamentari, Società/Organismo in House, Soggetto Controllato:** flag qualificanti utilizzati anche in fase di determinazione del GAP e del perimetro di consolidamento (par. 4.2).
- **Descrizione:** campo libero di note.
- **Ulteriori dati anagrafici:** Descrizione sintetica, Attività consentite ai sensi del D.Lgs. 175/2016, N° dipendenti, Tipo, Capitale sociale, Data di costituzione, Stato di attività.

### 3.2 Gestione della Partecipata

Dalla scheda anagrafica, il pulsante "Gestione Partecipata" apre l'accesso a una serie di sottosezioni dedicate al monitoraggio del singolo soggetto:

- **Incarichi Partecipata:** Cognome e Nome del soggetto, Tipo Incarico e Compenso, riferiti agli organi di amministrazione e controllo della partecipata (richiama gli archivi Tipi Incarico e Tipologie compensi di cui ai par. 2.7 e 2.8).
- **Compagine Sociale:** Codice, Descrizione, Quota detenuta e Tipologia compagine dei restanti soci della partecipata.
- **Servizi Erogati:** Codice, Descrizione, Codice Ateco e Percentuale delle attività effettivamente svolte dalla partecipata (richiama l'archivio Servizi pubblici, par. 2.9).
- **Servizi Affidati:** Servizio pubblico, Missione, Data inizio, Data fine e Attività, relativi agli affidamenti disposti dall'Ente nei confronti della partecipata.
- **Procedure Concorsuali:** Codice, Descrizione, Data Inizio e Data Fine di eventuali procedure concorsuali (es. concordato preventivo) a carico della partecipata; questa informazione viene utilizzata automaticamente come motivo di esclusione dal GAP (par. 4.2.1).
- **Bilancio Partecipata:** dati di bilancio della partecipata, organizzati in Bilanci Civilistici e Bilanci Consolidati (Conto Economico e Stato Patrimoniale Attivo/Passivo secondo il D.Lgs. 118/2011); i valori possono essere digitati direttamente nella griglia oppure importati da un file Excel predisposto con l'apposito modello, tramite i pulsanti "Importa da XLSX" e "Scarica Modello".
- **Dati Consolidati:** apre la funzione Visualizzazione dati consolidati (par. 4.5) già filtrata sulla partecipata, per verificare i valori con cui il soggetto concorre al bilancio consolidato.

### 3.3 Gestione Bilancio Ente

> **180. Servizi economici → 160. Gestione Partecipate → 20. Partecipate → 20. Gestione Bilancio Ente**

Analogamente al bilancio delle singole partecipate, anche l'Ente capogruppo deve valorizzare il proprio bilancio nei medesimi prospetti (secondo lo schema dell'Allegato n. 11 al D.Lgs 118/2011). A differenza delle partecipate, per l'Ente è disponibile il pulsante **"Importa dati CO.GE."**, che riprende automaticamente i saldi già presenti nella Contabilità Generale armonizzata dell'Ente. La funzionalità è disponibile soltanto se l'Ente ha utilizzato l'applicativo CWOL per la redazione della CO.GE. In alternativa è possibile inserire gli importi manualmente o importando un file XLSX.

L'importazione dei dati CO.GE. riporta gli importi dell'esercizio e dell'esercizio precedente sulle righe del prospetto consolidato collegate alle righe dei prospetti di Contabilità Generale (par. 2.5). Le righe prive di collegamento non vengono importate e sono elencate in una segnalazione non bloccante al termine dell'elaborazione.

---

## 4. BILANCIO CONSOLIDATO

Le funzioni descritte in questo paragrafo, che costituiscono il cuore del processo di consolidamento, si trovano nel menù:

> **180. Servizi economici → 160. Gestione Partecipate → 30. Bilancio consolidato**

e vanno eseguite, nell'ordine, secondo la sequenza descritta nei paragrafi seguenti.

### 4.1 Iter Operativo per il Bilancio Consolidato

Si riepiloga di seguito, in sintesi, l'iter operativo completo per la produzione del bilancio consolidato, con richiamo ai paragrafi e ai percorsi di menù dove le singole funzioni sono descritte nel dettaglio:

- **1ª fase — Caricamento e verifica degli archivi di sistema:** controllare che le tabelle di configurazione propedeutiche siano complete e coerenti, in particolare Tipi Partecipazione, Parametri calcolo GAP, Parametri calcolo Perimetro, Parametri calcolo Soglia e Parametri Generali (par. 2).
  *(180. Servizi economici → 160. Gestione Partecipate → 10. Archivi di sistema)*

- **2ª fase — Inserimento anagrafica partecipate:** censire ciascuna partecipata (par. 3.1) e, per ognuna, inserirne il bilancio nella forma riclassificata secondo l'Allegato n. 10 al D.Lgs. 118/2011 (par. 3.2 - Bilancio Partecipata). Il caricamento può avvenire in due modi: inserimento manuale degli importi oppure import da file XLSX secondo il modello standard.
  *(180. Servizi economici → 160. Gestione Partecipate → 20. Partecipate → 10. Anagrafiche Partecipate)*

- **3ª fase — Import dati bilancio dell'Ente capogruppo:** se l'Ente tiene la Contabilità Generale su CWOL è sufficiente il pulsante "Importa dati CO.GE.", che riprende automaticamente i saldi già presenti; in alternativa sono disponibili le stesse due modalità della fase precedente, inserimento manuale o import da file XLSX secondo il modello standard (par. 3.3).
  *(180. Servizi economici → 160. Gestione Partecipate → 20. Partecipate → 20. Gestione Bilancio Ente)*

- **4ª fase — Definizione del GAP e del Perimetro di consolidamento:** il software calcola in automatico sia il GAP sia il Perimetro, sulla base delle configurazioni presenti negli archivi di sistema; l'utente può comunque intervenire e modificare manualmente gli esiti proposti (par. 4.2).
  *(180. Servizi economici → 160. Gestione Partecipate → 30. Bilancio consolidato → 10. Definizione GAP e Perimetro)*

- **5ª fase — Inserimento delle scritture di preconsolidamento/infragruppo:** registrazione delle scritture di preconsolidamento e delle scritture di elisione dei rapporti di credito/debito e di costo/ricavo reciproci tra l'Ente e le partecipate e tra le partecipate stesse (par. 4.3).
  *(180. Servizi economici → 160. Gestione Partecipate → 30. Bilancio consolidato → 20. Gestione movimenti infragruppo)*

- **6ª fase — Calcolo delle riduzioni proporzionali:** funzione automatica che applica le percentuali di possesso ai bilanci dei soggetti a consolidamento Proporzionale, tenendo conto delle scritture di preconsolidamento (par. 4.4); i valori risultanti possono essere verificati per singolo soggetto con la funzione Visualizzazione dati consolidati (par. 4.5).
  *(180. Servizi economici → 160. Gestione Partecipate → 30. Bilancio consolidato → 30. Riduzioni proporzionali)*

- **7ª fase — Verifica e salvataggio del bilancio consolidato:** completate le fasi precedenti si verifica il dettaglio del bilancio consolidato riga per riga e per singolo soggetto con la funzione "Bilancio consolidato per soggetto" (par. 5.1), dalla quale si procede al salvataggio definitivo con il pulsante "Salva" (par. 4.6).
  *(180. Servizi economici → 160. Gestione Partecipate → 40. Utilità → 10. Bilancio consolidato per soggetto)*

- **8ª fase — Creazione del file XBRL per BDAP:** generazione del file XBRL del bilancio consolidato definitivo, da trasmettere alla Banca Dati delle Amministrazioni Pubbliche (par. 4.8).
  *(180. Servizi economici → 160. Gestione Partecipate → 30. Bilancio consolidato → 70. Creazione XBRL)*

### 4.2 Definizione GAP e Perimetro

> **180. Servizi economici → 160. Gestione Partecipate → 30. Bilancio consolidato → 10. Definizione GAP e Perimetro**

La funzione si articola in due schede, GAP e Perimetro di Consolidamento, ed è comandata dai pulsanti **Calcola GAP** e **Calcola Perimetro** presenti sulla destra; il pulsante **Spiegazione Calcolo** permette di visualizzare il dettaglio dei criteri applicati dalla procedura per ciascun soggetto.

#### 4.2.1 Scheda GAP

Per ciascuna partecipata censita, la scheda riporta la % Part. Indiretta, la % Part. Diretta, la % Part. Totale e la Tipologia Partecipazione, e determina, tramite il pulsante Calcola GAP, il Motivo di Inclusione nel Gruppo Amministrazione Pubblica oppure il Motivo di Esclusione. La procedura valuta ciascun soggetto secondo il seguente ordine di priorità, assegnando il primo motivo che risulta verificato:

1. Se il soggetto è interessato da una procedura concorsuale attiva (par. 3.2 - Procedure Concorsuali) → esclusione **"Soggetto coinvolto in procedure concorsuali attive"**;
2. Se il soggetto risulta controllato dall'Ente (flag Soggetto Controllato in anagrafica, par. 3.1) → inclusione **"Soggetto sottoposto a controllo e coordinamento"**;
3. Se il soggetto è un organismo in house (flag Società/Organismo in House, par. 3.1) → inclusione **"Soggetto affidatario diretto di servizi pubblici"**;
4. Se nessuna delle condizioni precedenti è verificata, si confronta la % Possesso totale con la soglia minima definita nei Parametri calcolo GAP (par. 2.2) per il Tipo Partecipazione/flag Quotata del soggetto: se il possesso è pari o superiore alla soglia → inclusione **"Partecipazione rilevante"**, altrimenti → esclusione **"Partecipazione non rilevante o assenza di affidi diretti di servizi pubblici"**.

[Immagine: Screenshot della scheda GAP con elenco soggetti, percentuali di partecipazione e motivi di inclusione/esclusione]

#### 4.2.2 Scheda Perimetro di Consolidamento

Il pulsante **Calcola Perimetro** elabora, con la stessa logica a priorità decrescente, solo i soggetti risultati inclusi nel GAP (par. 4.2.1). Oltre a determinare il Motivo di inclusione/esclusione dal perimetro, la procedura propone anche la Tipologia di Consolidamento (Integrale o Proporzionale): i soggetti controllati sono proposti a consolidamento Integrale, quelli in house o inclusi per solo superamento dei parametri di rilevanza a consolidamento Proporzionale. La scheda è suddivisa in tre viste:

- **Controllo Parametri:** per ciascun soggetto, confronta l'incidenza percentuale di Totale Attivo, Patrimonio Netto e Ricavi della gestione caratteristica del soggetto rispetto ai corrispondenti valori di bilancio dell'Ente (par. 2.4) con le soglie P1/P2/P3 definite nei Parametri calcolo Perimetro (par. 2.3): se almeno uno dei tre rapporti supera la propria soglia e la % Possesso totale supera la soglia PI, il soggetto è incluso con motivo "Parametri superiori al minimo"; se invece tutti e tre i rapporti risultano inferiori alle rispettive soglie, il soggetto è escluso con motivo "Irrilevanti per parametri inferiori al minimo".

- **Partecipazione Irrilevante:** elenco dei soggetti esclusi dal perimetro con motivo "Irrilevante per % partecipazione", perché la % Possesso totale è inferiore alla soglia PI (par. 2.3) — condizione verificata prima del controllo sui parametri P1/P2/P3. Un ulteriore motivo di esclusione, "Impossibilità nel reperire i dati", viene assegnato automaticamente quando per il soggetto manca il bilancio (par. 3.2 - Bilancio Partecipata) necessario al calcolo.

- **Perimetro di Consolidamento:** elenco definitivo dei soggetti da consolidare, con l'indicazione della Tipologia Consolidamento (Integrale o Proporzionale) e del relativo Motivo di inclusione.

[Immagine: Screenshot della scheda Perimetro di Consolidamento con viste Controllo Parametri, Partecipazione Irrilevante e Perimetro di Consolidamento]

> **N.B.** La tipologia di consolidamento (Integrale o Proporzionale) proposta dalla procedura è modificabile dall'utente direttamente nella griglia; da questa scelta dipende l'applicazione delle riduzioni proporzionali descritte al par. 4.4.

### 4.3 Gestione Movimenti Infragruppo

> **180. Servizi economici → 160. Gestione Partecipate → 30. Bilancio consolidato → 20. Gestione movimenti infragruppo**

Prima di consolidare i bilanci occorre elidere i rapporti di credito/debito e di costo/ricavo reciproci tra l'Ente e le partecipate (ad es. contributi, trasferimenti, crediti e debiti commerciali). La funzione richiama la maschera Movimenti Prima Nota già utilizzata dalla Contabilità Generale (*si tratta di un programma simile, ma non lo stesso*), dalla quale è possibile individuare e registrare le scritture di prima nota.

Nella testata della registrazione il campo "Tipologia scrittura" consente di scegliere tra tre tipologie di movimenti:

- **Scritture preconsolidamento** = incidono per il 100% dell'importo della registrazione; sono le uniche considerate dal programma Riduzioni proporzionali (colonna "Scritture Preconsolidamento", par. 4.4).

- **Scritture infragruppo – Ente/Partecipata** = scritture tra l'Ente capogruppo e una partecipata; incidono in base alla % di possesso rispetto all'importo della registrazione (colonna "Scritture Infragruppo" della funzione Visualizzazione dati consolidati, par. 4.5, e dettaglio della funzione Bilancio consolidato per soggetto, par. 5.1).

- **Scritture infragruppo – Partecipata/Partecipata** = scritture tra due partecipate; ciascuna riga incide in base alla % di possesso della partecipata a cui è intestata. In questa tipologia non sono ammesse righe intestate all'Ente capogruppo.

Al salvataggio della registrazione vengono effettuati i seguenti controlli:

- **Soggetti della registrazione:** nelle scritture di preconsolidamento e nelle scritture infragruppo Ente/Partecipata le righe possono riferirsi all'Ente capogruppo e a una sola partecipata; nelle scritture infragruppo Partecipata/Partecipata devono essere indicate esattamente due partecipate diverse.

- **Conti:** ogni riga deve riportare un conto del piano dei conti di ultimo livello (foglia), coerente con la normativa di riferimento.

- **Quadratura delle scritture Partecipata/Partecipata:** se le due partecipate hanno percentuali di possesso diverse, la scrittura, pur quadrando in valore nominale, produrrebbe una differenza nel bilancio consolidato (ad esempio, una scrittura di 1.000,00 tra una società posseduta al 30% e una posseduta al 55% incide per 300,00 in dare e per 550,00 in avere, con una differenza di 250,00). In questo caso il programma mostra un avviso con l'importo della differenza e, confermando, genera automaticamente una scrittura di preconsolidamento a carico dell'Ente che registra la differenza sul conto di quadratura (parametro `CONTO_QUAD_PP`) e, in segno opposto, sul conto di contropartita (parametro `CONTO_QUAD_EXT`) definiti nei Parametri Generali (par. 2.11). La scrittura di quadratura viene ricalcolata ad ogni modifica della registrazione; se i due conti non sono configurati o non sono validi, il salvataggio viene bloccato.

[Immagine: Screenshot della maschera Inserimento Registrazione Prima Nota con il campo "Tipologia scrittura" che mostra le tre opzioni: Scritture preconsolidamento, Scritture infragruppo - Ente/Partecipata, Scritture infragruppo - Partecipata/Partecipata]

### 4.4 Riduzioni Proporzionali

> **180. Servizi economici → 160. Gestione Partecipate → 30. Bilancio consolidato → 30. Riduzioni proporzionali**

Per i soggetti inclusi nel perimetro con tipologia "Proporzionale" è necessario applicare ai valori di bilancio la percentuale di possesso totale dell'Ente, anziché consolidarli per l'intero importo come avviene per i soggetti a consolidamento "Integrale". La funzione, disponibile per Conto Economico, Stato Patrimoniale Attivo e Stato Patrimoniale Passivo, richiede di selezionare la Partecipata (viene proposta la relativa % Possesso Totale) e riporta, per ciascuna voce di bilancio (Lettera / Rif. 1 / Rif. 2 / Rif. 3), l'Importo di Bilancio, le eventuali Scritture di Preconsolidamento, la Riduzione Proporzionale calcolata e il conseguente Valore da Consolidare.

Il pulsante **"Calcola"** avvia l'elaborazione, che per ogni riga applica la formula:

- **Importo Bilancio** = Importo desunto dal bilancio inserito in Anagrafica Partecipate
- **Scritture di Preconsolidamento** = sommatoria delle scritture di preconsolidamento (100% dell'importo inserito in reg. prima nota)
- **Valore da Consolidare** = (Importo di Bilancio + Scritture di Preconsolidamento) × % Possesso Totale della partecipata

Le scritture di Preconsolidamento sono con segno positivo o negativo a seconda della natura Dare/Avere della riga.

- **Riduzione Proporzionale** = (Importo di Bilancio + Scritture di Preconsolidamento) − Valore da Consolidare (la quota non di competenza dell'Ente, esclusa dal consolidato).

Nella colonna Scritture di Preconsolidamento sono considerate esclusivamente le registrazioni con tipologia "Scritture preconsolidamento" (par. 4.3).

[Immagine: Screenshot della funzione Riduzioni proporzionali con griglia di calcolo per Conto Economico]

### 4.5 Visualizzazione Dati Consolidati

> **180. Servizi economici → 160. Gestione Partecipate → 30. Bilancio consolidato → 40. Visualizzazione dati consolidati**

[Immagine: Screenshot della funzione Visualizzazione dati consolidati con selezione soggetto e griglia dei valori]

Funzione di sola consultazione, speculare alle Riduzioni proporzionali (par. 4.4), che consente di verificare per ciascun soggetto del perimetro di consolidamento, compreso l'Ente capogruppo, i valori con cui concorre al bilancio consolidato. Selezionato il Soggetto, vengono proposti la tipologia di Consolidamento e la % Possesso Totale; la griglia, disponibile per Stato Patrimoniale Attivo, Stato Patrimoniale Passivo e Conto Economico, riporta per ciascuna voce (Lettera / Rif. 1 / Rif. 2 / Rif. 3):

- **Importo Bilancio:** importo desunto dal bilancio del soggetto (par. 3.2 e 3.3);
- **Scritture Preconsolidamento:** sommatoria delle scritture di preconsolidamento (par. 4.3);
- **Scritture Infragruppo:** movimenti con tipologia "Scritture infragruppo – Ente/Partecipata" e "Scritture infragruppo – Partecipata/Partecipata" (par. 4.3);
- **Riduzione Proporzionale:** quota calcolata dalla funzione Riduzioni proporzionali (par. 4.4);
- **Valore da Consolidare:** valore con cui il soggetto concorre al bilancio consolidato.

Tutte le colonne sono in sola visualizzazione. La funzione può essere richiamata anche dall'anagrafica della partecipata, con il pulsante "Dati Consolidati" (par. 3.2), che la apre già filtrata sulla partecipata. Dalla funzione Bilancio consolidato per soggetto (par. 5.1), cliccando su una cella della colonna di un soggetto, si apre il dettaglio delle fonti che compongono il valore di quella cella (Bilancio Ente, Riduzione Proporzionale, Bilancio Integrale, Scritture di Preconsolidamento, Scritture Infragruppo, Rettifica manuale).

### 4.6 Salvataggio Bilancio Consolidato

> **180. Servizi economici → 160. Gestione Partecipate → 40. Utilità → 10. Bilancio consolidato per soggetto → pulsante "Salva"**

Completate le fasi precedenti (definizione del perimetro, caricamento registrazioni di prima nota per preconsolidamento e movimenti infragruppo, riduzioni proporzionali ed elisione dei movimenti infragruppo), il pulsante "Salva" della funzione Bilancio consolidato per soggetto (par. 5.1) consente il salvataggio definitivo del bilancio consolidato dell'esercizio, rendendo i dati disponibili per le stampe ufficiali e per la generazione del file XBRL. Prima di procedere, il sistema verifica che tutte le partecipate a consolidamento Proporzionale presenti nel perimetro abbiano già le riduzioni calcolate (par. 4.4): in caso contrario il salvataggio viene bloccato e viene mostrato l'elenco dei soggetti mancanti.

> **ATTENZIONE:** se per l'esercizio corrente è già presente un bilancio consolidato definitivo, il sistema chiede conferma prima di procedere: confermando, il bilancio esistente viene cancellato e ricreato con i valori aggiornati. Si raccomanda di verificare i dati di dettaglio (par. 5.1) prima di confermare il salvataggio.

### 4.7 Stampe Prospetti

> **180. Servizi economici → 160. Gestione Partecipate → 30. Bilancio consolidato → 60. Stampe prospetti**

Consente di stampare i tre prospetti ufficiali del Bilancio Consolidato, secondo lo schema di cui all'Allegato n. 11 al D.Lgs. 118/2011: Stampa Stato patrimoniale Attivo, Stampa Stato patrimoniale Passivo e Stampa Conto Economico. Le stesse stampe sono disponibili anche con il pulsante "Stampa PDF" della funzione Bilancio consolidato per soggetto (par. 5.1).

### 4.8 Creazione XBRL

> **180. Servizi economici → 160. Gestione Partecipate → 30. Bilancio consolidato → 70. Creazione XBRL**

Genera il file XBRL del Bilancio Consolidato a partire dai dati del bilancio consolidato definitivo (par. 4.6). È necessario indicare l'Esercizio di lavoro e selezionare la Tassonomia XBRL di riferimento tra quelle disponibili, quindi confermare con il pulsante **Genera XBRL**. Tra le tassonomie disponibili è presente la tassonomia 2025.

---

## 5. UTILITÀ

Le funzioni di supporto e verifica descritte in questo paragrafo si trovano nel menù:

> **180. Servizi economici → 160. Gestione Partecipate → 40. Utilità**

### 5.1 Bilancio Consolidato per Soggetto

> **180. Servizi economici → 160. Gestione Partecipate → 40. Utilità → 10. Bilancio consolidato per soggetto**

Fornisce una vista di dettaglio dei tre prospetti consolidati (Conto Economico, Stato Patrimoniale Attivo, Stato Patrimoniale Passivo) nella quale, per ciascuna voce, viene riportato il valore Totale consolidato affiancato dalla scomposizione per singolo soggetto incluso nel perimetro: l'Ente capogruppo è sempre riportato nella colonna immediatamente successiva al Totale, seguito dalle partecipate. La formattazione delle righe (grassetto, corsivo, allineamento) riprende quella dei prospetti ministeriali (par. 2.5). La funzione è particolarmente utile in fase di verifica e controllo, per individuare rapidamente da quale soggetto proviene un determinato importo del bilancio consolidato.

Sulla destra sono disponibili i pulsanti:

- **Dati consolidati:** estrae in un unico file zip i dati del bilancio consolidato dell'esercizio, con un file XLSX per ciascun prospetto (Stato Patrimoniale Attivo, Stato Patrimoniale Passivo, Conto Economico). Ogni file contiene un foglio "Consolidato" (valore Totale e una colonna per ciascun soggetto), un foglio per ciascun soggetto (riepilogo per voce di prospetto, scritture di consolidamento e riduzioni proporzionali) e un foglio "Note" con fonti dei dati e legenda. L'estrazione legge i dati salvati, non le modifiche della griglia ancora da salvare;
- **Salva:** esegue il salvataggio definitivo del bilancio consolidato (par. 4.6);
- **Stampa PDF:** stampa i prospetti ufficiali del bilancio consolidato (par. 4.7).

[Immagine: Screenshot della funzione Bilancio consolidato per soggetto con vista dello Stato Patrimoniale Consolidato (Attivo) e i pulsanti Dati consolidati, Salva, Stampa PDF sulla destra]

Cliccando su una cella di un soggetto si apre il dettaglio delle fonti che compongono il valore di quella cella: Bilancio Ente, Riduzione Proporzionale, Bilancio Integrale, Scritture di Preconsolidamento, Scritture Infragruppo e Rettifica manuale.

### 5.2 Gestione Consolidato Manuale

> **180. Servizi economici → 160. Gestione Partecipate → 40. Utilità → 20. Gestione consolidato Manuale**

Consente di intervenire manualmente sui valori del bilancio consolidato definitivo (Conto Economico, Stato Patrimoniale Attivo e Passivo): per ciascuna voce sono riportati l'importo dell'esercizio corrente e quello dell'esercizio precedente (anno N-1), con la stessa formattazione delle righe dei prospetti ministeriali. Il pulsante "Proponi anno precedente" permette di riproporre automaticamente i dati dell'esercizio precedente come base di partenza, agevolandone il confronto e l'aggiornamento. Tale funzionalità è disponibile solo con un'autorizzazione ad hoc.

> **N.B.** Se il bilancio consolidato è stato salvato in definitivo (par. 4.6), i valori proposti coincidono con quelli della colonna Totale della funzione Bilancio consolidato per soggetto (par. 5.1). Un nuovo salvataggio definitivo cancella e ricrea il bilancio consolidato: le eventuali modifiche manuali effettuate con questa funzione vengono quindi perse.