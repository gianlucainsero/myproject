# Manuale Gestione IVA

**Software:** CWOL – modulo IVA

---

## 1. Modulo CWOL-IVA

La suite Cityware.Online (CWOL) dispone di un modulo integrato alla contabilità dell'Ente che consente la gestione dell'IVA in molti degli adempimenti fiscali. In particolare il modulo IVA consente:

- Gestione movimenti IVA ciclo attivo e ciclo passivo
- Gestione stampe IVA:
  - Registri
  - Liquidazione mensile
  - Riepilogo mensile/annuale
- Gestione LI.PE:
  - Creazione quadro VP
  - Stampa quadro VP in formato PDF
  - Creazione file XML per invio ad AgE
- Importazione corrispettivi da file XML (su modello standard Agenzia delle Entrate)

---

## 2. Configurazioni e Parametrizzazioni IVA

### 2.1 Configurazioni Generali

Il modulo IVA di CWOL si attiva dalle tabelle generali:

> **180. Servizi Economici → 90. Tabelle → 10. Configurazioni → 10. Definizione e operabilità – Parametri Generali**

[Immagine: Tabella personalizzazioni modulo finanziaria – tab "Generale", con il checkbox "IVA" selezionato nella sezione "Collegamenti attivati con altri moduli applicativi"]

Inoltre è possibile effettuare alcune parametrizzazioni particolari dal menù alla tab "IVA":

> **180. Servizi Economici → 90. Tabelle → 10. Configurazioni → 20. Definizione e operabilità – CO.GE – CO.ANA – IVA**

[Immagine: Tab "IVA" con sezioni: Acquisti in esigibilità differita, Valorizzazione campo note su movimenti IVA, Personalizzazioni IVA, Stampe periodiche e annuali]

Nel dettaglio:

- **Acquisti in esigibilità differita:**
  - *Modalità registrazioni IVA acquisti:* consente di scegliere la modalità di registrazione dei documenti sul registro IVA:
    - Registrazione e stampa direttamente sul registro acquisti (il documento è incluso nella stampa del mese in cui è registrato)
  - *Gestione pagamenti parziali:* consente di scegliere come trattare i pagamenti parziali per la liquidazione mensile IVA

- **Verifica settore IVA con Bilancio:** consente di attivare un controllo di congruità tra il settore IVA presente nella voce di bilancio

- **Personalizzazioni IVA:**
  - *Attivazione IVA promiscua:* consente di attivare la gestione dell'IVA promiscua
  - *Modalità gestione versamenti IVA:* consente di scegliere la gestione dei versamenti IVA tra globale o distinta per singolo settore/servizio IVA

- **Stampe periodiche e annuali:** consente di personalizzare l'intestazione delle stampe IVA

### 2.2 Registri IVA

La gestione dei registri IVA avviene dal menù:

> **180. Servizi Economici → 90. Tabelle → 40. IVA → 10. Registri IVA generici**

Per inserire un nuovo registro generico cliccare su "Nuovo" ed indicare:

- **Codice:** a scelta tra le opzioni disponibili
- **Descrizione**
- **Tipo registro:** CWOL consente la gestione delle seguenti tipologie:
  - **A** – Acquisti
  - **B** – Acquisiti da autofatture split/reverse (si tratta di un registro acquisti da utilizzare a seguito di fatture di vendita effettuate in regime di split/reverse)
  - **V** – Vendite
  - **C** – Corrispettivi da ventilare
  - **S** – Corrispettivi da scorporare
  - **R** – Vendite da autofatture split/reverse (si tratta di un registro vendite da utilizzare a seguito di fatture di acquisto in regime di split/reverse)
- **Registro incluso in liquidazione IVA:** da flaggare se si vuole che le fatture registrate nel determinato settore sia incluse nella liquidazione IVA mensile/trimestrale

Una volta inserito il registro generico, devono essere inseriti i "Registri IVA per settore", ovvero deve essere associato il singolo registro al singolo settore IVA. L'associazione avviene tramite l'apposita gestione presente a:

> **180. Servizi Economici → 90. Tabelle → 40. IVA → 30. Registri IVA per settore**

[Immagine: Schermata "Registri IVA per settore" con campi: Anno, Settore IVA, Registro IVA, Data ult. stampa registri IVA, Registro incluso in liquidazione IVA, Inclusione in allegati IVA]

### 2.3 Settori IVA

L'inserimento e/o la gestione dei settori IVA (o servizi IVA) avviene dal menù:

> **180. Servizi Economici → 90. Tabelle → 40. IVA → 20. Settori rilevanti ai fini IVA**

[Immagine: Tabella "Settori Rilevanti ai fini IVA" con colonne: Sett., Descrizione, Data ult. riga provv., Data ult. riga def., Dic. IVA, Prorata IVA, Tipo IVA, Reg. x split, Gr. Elab., Reg. per liq., Cod. attiv., Partita IVA]

---

## 3. Cruscotto IVA – Gestione Stampe

### 3.1 Premessa

Il Cruscotto IVA rappresenta il fulcro della gestione IVA di CWOL in quanto è stato creato con l'obiettivo di raggruppare in un unico programma tutte le stampe IVA ed anche la gestione dei versamenti.

Il Cruscotto IVA ha un aspetto innovativo ed intuitivo (… tutto è a portata di click) ed è suddiviso in 3 tab distinte:

- Registri IVA
- Liquidazione IVA
- Gestione versamenti

In ogni tab è presente il selettore del mese/trimestre di cui si vuole predisporre la stampa.

[Immagine: Cruscotto IVA con tab "Registri", "Liquidazione", "Versamenti" e selettore "Mese di elaborazione: Luglio" e "Gruppo di elaborazione"]

Nelle **righe** sono presentati i registri IVA in uso presso l'Ente:

[Immagine: Elenco registri IVA nelle righe: A-Acquisti, 5-Acquisti, 6-Autofatture da vendite in split/reverse, A-Acquisti estero (reverse), C-Corrispettivi da ventilare, S-Corrispettivi da ventilare, V-Vendite, 1-Vendite, 2-Autof. da Acquisti Split Paym. e R.Char, V-Autofattura vendite estero (reverse) com, S-Corrispettivi da scorporare, 3-Corrispettivi di incasso, Registri - riepilogo del settore, Riepilogo generale]

Nelle **colonne** sono presentati i settori/servizi IVA in uso presso l'Ente, con l'aggiunta del settore "GLOBALE" che consente il riepilogo di tutti i settori:

[Immagine: Colonne del Cruscotto IVA con settori: GLOBALE, 02 Attività mensa scolastica, 03 Trasporto scolastico (T), 04 manifestazione sportive, 05 Illuminazione votiva, ecc.]

Ogni settore IVA, compreso il GLOBALE, è diviso in **due colonne**:

- **Colonna PROVVISORIA:** consente di effettuare una determinata stampa in modalità provvisoria, senza salvataggio della copia PDF
- **Colonna DEFINITIVA:** consente di effettuare una determinata stampa in modalità definitiva ed effettua automaticamente il salvataggio della copia PDF su Alfresco. La stampa definitiva blocca i movimenti IVA

Nella stampa del registro IVA la stampa definitiva assegna il numero protocollo (soltanto se la causale prevede l'assegnazione del numero protocollo in fase di stampa).

Il flag **"Escludi settore istituzionale"** consente di escludere dalla stampa GLOBALE il settore istituzionale.

Il selettore **"Gruppo di elaborazione"** consente di selezionare un determinato gruppo di elaborazione (= gruppo di settori IVA); una volta selezionato il gruppo di elaborazione verrà effettuata una stampa cumulativa che contiene i settori IVA appartenenti al gruppo di elaborazione.

Da dove gestire il "Gruppo di elaborazione"? Dai settori IVA.

Nell'esempio di cui sotto il settore 03 ed il settore 06 appartengono allo stesso Gruppo elaborazione, il numero 1.

[Immagine: Tabella settori IVA con colonna "Gr. Elab." evidenziata – settori 03 e 06 con valore "1"]

Il Cruscotto IVA si presenterà così, qualora venga scelto il gruppo elaborazione numero 1:

[Immagine: Cruscotto IVA con "Gruppo di elaborazione: 1" selezionato – mostra solo i settori 03 e 06]

### 3.2 Registri

#### 3.2.1 Registri IVA

Il programma consente di effettuare la stampa del registro IVA.

Sono a disposizione due stampe che hanno lo stesso significato ma raggio di azione differente:

- **Registri:** stampa provvisoria/definitiva del singolo registro-settore IVA selezionato
- **Registri – riepilogo del settore:** stampa provvisoria/definitiva di tutti registri di un determinato settore IVA

[Immagine: Cruscotto IVA tab "Registri" con righe "Registri" e "Registri - riepilogo del settore" evidenziate]

#### 3.2.2 Riepilogo generale

Il programma consente di effettuare la stampa riepilogativa del settore selezionato. Tale stampa non effettua calcoli e non effettua salvataggi sul database. Vengono mostrati i dati presenti nella tabella dei saldi IVA (valorizzata dalla stampa "Liquidazione sintetica") e nella tabella dei versamenti IVA (gestita dall'apposito programma "Versamenti").

Si può eseguire questa stampa soltanto dopo avere eseguito la "Liquidazione sintetica".

E' possibile gestire soltanto la stampa **provvisoria** (è una stampa riepilogativa, non esiste la definitiva).

Due modalità operative:

- **Stampa globale:** include tutti i settori IVA
- **Stampa singolo settore**

[Immagine: Cruscotto IVA con riga "Riepilogo generale" evidenziata]

### 3.3 Liquidazione

#### 3.3.1 Liquidazione sintetica

Il programma consente di effettuare la liquidazione mensile dei documenti rilevanti IVA (…si individua il debito/credito mensile dell'Ente).

E' possibile gestire:

- **Stampa provvisoria**
- **Stampa definitiva:** blocca i movimenti IVA e salva la stampa PDF della liquidazione sul documentale Alfresco

Due modalità operative:

- **Stampa globale:** include tutti i settori IVA che hanno almeno un registro valido per la liquidazione
- **Stampa singolo settore:** include i registri validi per la liquidazione di un singolo settore

> ⚠️ **Per la stampa provvisoria o definitiva si suggerisce vivamente di utilizzare la GLOBALE che include tutti i settori e mostra il Riepilogo generale con i totali mensili.**

Come vengono numerate le pagine della "Liquidazione sintetica"?

- La numerazione è indipendente dalla stampa dei registri IVA
- La numerazione è progressiva per singolo settore/mese
- La numerazione si azzera ogni anno

[Immagine: Cruscotto IVA tab "Liquidazione" con riga "Liquidazione sintetica" evidenziata]

#### 3.3.2 Movimenti esigibili nel periodo

Si tratta di una stampa analitica dove sono mostrati i documenti divenuti esigibili in un determinato periodo. Vengono quindi inclusi i documenti:

- **esigibilità differita:** i documenti che hanno una liquidazione pagata con ordinativo di pagamento nel mese/trimestre in esame;
- **esigibilità immediata:** i documenti registrati e quindi esigibili nel mese/trimestre in esame

E' possibile gestire soltanto la stampa **provvisoria** (è una stampa analitica di controllo, non esiste la definitiva).

Due modalità operative:

- **Stampa globale:** include tutti i settori IVA di un determinato registro
- **Stampa singolo settore**

[Immagine: Cruscotto IVA tab "Liquidazione" con riga "Movimenti esigibili nel periodo" evidenziata]

#### 3.3.3 Movimenti registrati e non interamente esigibili

Si tratta di una stampa analitica dove sono mostrati i documenti registrati in IVA (ovvero quelli con data protocollo IVA ricadente nel mese in esame) che non sono interamente esigibili, ovvero che non sono stati totalmente pagati con ordinativo di pagamento.

E' possibile gestire soltanto la stampa **provvisoria** (è una stampa analitica di controllo, non esiste la definitiva).

Due modalità operative:

- **Stampa globale:** include tutti i settori IVA di un determinato registro
- **Stampa singolo settore**

[Immagine: Cruscotto IVA tab "Liquidazione" con riga "Movimenti registrati e non interamente esigibili" evidenziata]

#### 3.3.4 Liquidazione riepilogativa Annuale

Il programma consente di effettuare la liquidazione riepilogativa annuale dei documenti rilevanti IVA. **Non si tratta della "Dichiarazione Iva annuale"**.

E' possibile gestire soltanto la stampa **provvisoria** (è una stampa riepilogativa, non esiste la definitiva).

Due modalità operative:

- **Stampa globale:** include tutti i settori IVA
- **Stampa singolo settore**

---

## 4. Gestione IVA Promiscua

### 4.1 Premessa

Contabilizzare un documento con IVA promiscua significa registrarlo imputandolo su N settori/servizi IVA; si può quindi parlare di multi-settore IVA.

Non vi sono limiti nell'utilizzo massimo di settori commerciali posto che deve essere presente sempre e solo un settore Istituzionale.

### 4.2 Parametrizzazioni

#### 4.2.1 Attivazione

L'attivazione della gestione dell'IVA promiscua si effettua dalla tabella delle parametrizzazioni generali:

> **180. Servizi Economici → 90. Tabelle → 10. Configurazioni → 20. Definizione e operabilità – CO.GE – CO.ANA – IVA**

[Immagine: Tab "IVA" con checkbox "Attivazione IVA promiscua" selezionato]

#### 4.2.2 Gruppi di ripartizione

> **180. Servizi economici → 90. Tabelle → 40. IVA → 80. Gruppi ripartizione IVA promiscua**

Il **gruppo di ripartizione** è un gruppo di N settori IVA in cui si vuole ripartire un determinato documento.

Il gruppo di ripartizione rappresenta il fulcro dell'intera gestione dell'IVA promiscua.

E' possibile inserire N gruppi di ripartizione in quanto non esiste un numero massimo predeterminato.

[Immagine: Schermata "Gruppi ripartizione IVA" con Id gruppo, Descrizione, Data inizio e dettaglio settori con percentuali imponibile/esente]

#### 4.2.3 Numeratore progressivi IVA

Prima di registrare il primo documento con IVA promiscua verificare l'esistenza del numeratore indicato sotto.

> **180. Servizi economici → 90. Tabelle → 10. Configurazioni → 60. Progressivi**

[Immagine: Tabella progressivi con riga "Progressivo IVA" evidenziata]

### 4.3 Contabilizzazione Fatture Singole da Gestione Flussi SDI

> **180. Servizi Economici → 10. Finanziaria → 40. Uscita → 50. Gestione flussi SDI**

#### 4.3.1 Contabilizzazione documento

Nella finestra di contabilizzazione delle fatture da SDI è stato introdotto il flag **"IVA promiscua"**; dopo aver inserito tale flag indicare il gruppo di ripartizione con cui si vuole contabilizzare il documento.

[Immagine: Finestra di contabilizzazione con campi "Tipo IVA: Split", "Iva Promiscua" flaggato, "Gruppo promiscuità: 2 - Gruppo 1"]

#### 4.3.2 Dettaglio IVA

Successivamente il dettaglio IVA deve essere caricato esattamente come per le fatture mono-settore, con la stessa logica attuale.

Attraverso il button **"Ripartisci"** il programma effettuerà la ripartizione della quota IVA secondo i criteri presenti nel "Gruppo di ripartizione" selezionato.

[Immagine: Finestra "Movimenti IVA" con campo "Gruppo ripartizione IVA: 12" e pulsante "Ripartisci" evidenziato]

La ripartizione proposta in automatico non è modificabile, quindi:

- se è corretta: cliccare su **"Conferma"**
- se è errata: cliccare su **"Annulla"** ed il programma tornerà alla sezione precedente dove si potrà modificare o il gruppo ripartizione o il dettaglio IVA (imponibile, assoggettamento e aliquota)

[Immagine: Finestra "Ripartizione IVA" con tabella settori (03 - Trasporto scolastico, 98 - Acquisti Istituzionali) e pulsanti "Conferma" e "Annulla"]

#### 4.3.3 Dettaglio ritenute

Le ritenute relative alla gestione dell'IVA split payment vengono proposte in automatico in base alla tipologia IVA (commerciale/istituzionale) del settore.

Sono proposte tante righe per quanti sono i settori IVA.

*Esempio:* fattura con 2 settori IVA, di cui 1 istituzionale e 1 commerciale → di default vengono proposte 2 righe di ritenute iniziali: 1 riga di ritenuta commerciale e 1 riga di ritenuta istituzionale.

[Immagine: Finestra "Ritenute" con 2 righe: codice 30 (NEW - Split Commerciale 10%) e codice 101 (Iva split istituzionale)]

#### 4.3.4 Dettaglio assegnazioni

Vengono inserite automaticamente tante righe di assegnazione quanti sono i settori IVA.

*Esempio:* fattura con 2 settori IVA, di cui 1 Istituzionale e 1 Commerciale → di default sono proposte 2 righe di assegnazione, ognuna collegata al proprio settore IVA.

[Immagine: Tab "Assegnazione" con 2 righe di assegnazione collegate ai rispettivi settori IVA]

Da Giugno 2025 è possibile inserire nuove assegnazioni rispetto a quelle inserite automaticamente rispettando il vincolo di indicare tassativamente il settore IVA a cui sono collegate.

[Immagine: Finestra "Assegnazione" con campo "Settore IVA: 03 Trasporto scolastico" evidenziato]

Il programma in sede di aggiornamento effettua una verifica di quadratura tra gli importi IVA ed i totali delle assegnazioni:

[Immagine: Errore di validazione: "Il valore delle assegnazioni non è uguale per il Settore IVA: 03 – Totale IVA: 30.90 – Totale Assegnazioni per Settore: 20.00 – Differenza: 10.9"]

#### 4.3.5 Dettaglio liquidazione

Le fatture promiscue possono essere liquidate in N liquidazioni indipendentemente da quante siano le assegnazioni.

Ogni assegnazione quindi, se necessario, può essere liquidata in N liquidazioni.

La fase di liquidazione, come da standard per le fatture in IVA normale, è gestibile in un duplice modo:

- **Manualmente** (dal programma "Documenti Uscita")
- **Tramite Atto di Liquidazione** (dal programma "Liquidazione documenti")

### 4.4 Contabilizzazione Fatture Singole Manualmente

> **180. Servizi Economici → 10. Finanziaria → 40. Uscita → 60. Documenti Uscita**

#### 4.4.1 Premessa

L'inserimento di documenti puntuali si può rendere necessario in caso di fatture cartacee pervenute da soggetti che non hanno l'obbligo di fatturazione elettronica (es: operatori in "regime di vantaggio", operatori in "regime forfettario", "piccoli produttori agricoli", etc..)

#### 4.4.2 Inserimento documento

Dal programma "Documenti Uscita", dopo aver cliccato su "Nuovo", selezionare il flag **"IVA promiscua"** ed indicare il gruppo di ripartizione con cui si vuole contabilizzare il documento.

[Immagine: Schermata "Documenti Uscita" con campi: Data di registrazione, Tipo documento: 21, Tipo IVA: Split, "Iva Promiscua" flaggato, "Gruppo promiscuità: 14 - Palestra scuola media"]

#### 4.4.3 Dettaglio IVA

Successivamente il dettaglio IVA deve essere caricato esattamente come per le fatture mono-settore, con la stessa logica attuale.

Attraverso il button **"Ripartisci"** il programma effettuerà la ripartizione della quota IVA secondo i criteri presenti nel "Gruppo di ripartizione" selezionato.

[Immagine: Finestra "Movimenti IVA" con campo "Gruppo ripartizione IVA: 12" e pulsante "Ripartisci"]

La ripartizione proposta in automatico non è modificabile, quindi:

- se è corretta: cliccare su **"Conferma"**
- se è errata: cliccare su **"Annulla"** ed il programma tornerà alla sezione precedente dove si potrà modificare o il gruppo ripartizione o il dettaglio IVA (imponibile, assoggettamento e aliquota)

[Immagine: Finestra "Ripartizione IVA" con tabella e pulsanti "Conferma" / "Annulla"]

#### 4.4.4 Dettaglio ritenute

Le ritenute relative alla gestione dell'IVA split payment vengono proposte in automatico in base alla tipologia IVA (commerciale/istituzionale) del settore.

Sono proposte tante righe per quanti sono i settori IVA.

*Esempio:* fattura con 2 settori IVA, di cui 1 istituzionale e 1 commerciale → di default vengono proposte 2 righe di ritenute iniziali: 1 riga di ritenuta commerciale e 1 riga di ritenuta istituzionale.

[Immagine: Finestra "Ritenute" con 2 righe di ritenute]

#### 4.4.5 Dettaglio assegnazioni

Vengono inserite automaticamente tante righe di assegnazione quanti sono i settori IVA.

*Esempio:* fattura con 2 settori IVA, di cui 1 Istituzionale e 1 Commerciale → di default sono proposte 2 righe di assegnazione, ognuna collegata al proprio settore IVA.

[Immagine: Tab "Assegnazione" con 2 righe]

Da Giugno 2025 è possibile inserire nuove assegnazioni rispetto a quelle inserite automaticamente rispettando il vincolo di indicare tassativamente il settore IVA a cui sono collegate.

[Immagine: Finestra "Assegnazione" con campo "Settore IVA" evidenziato]

Il programma in sede di aggiornamento effettua una verifica di quadratura tra gli importi IVA ed i totali delle assegnazioni:

[Immagine: Errore di validazione con messaggio di quadratura non raggiunta]

#### 4.4.6 Dettaglio liquidazione

Le fatture promiscue possono essere liquidate in N liquidazioni indipendentemente da quante siano le assegnazioni.

Ogni assegnazione quindi, se necessario, può essere liquidata in N liquidazioni.

La fase di liquidazione, come da standard per le fatture in IVA normale, è gestibile in un duplice modo:

- **Manualmente** (dal programma "Documenti Uscita")
- **Tramite Atto di Liquidazione** (dal programma "Liquidazione documenti")

### 4.5 Contabilizzazione Fatture Massive Utenze (cd. Grandi Utenze)

#### 4.5.1 Parametrizzazioni

> **180. Servizi Economici → 90. Tabelle → 10. Configurazioni → 80. Tabella Gestione Parametri per creazione automatica movimenti**

Accedere al record **"7 = Flussi di fatturazione utenze"** e cliccare su **"Definizione raggruppamento movimenti"**.

[Immagine: Schermata "Parametri per creazione Automatica movimenti" con Progressivo 7, pulsante "Definizione raggruppamento movimenti" evidenziato]

Nel raggruppamento movimento è stato implementato il campo **"gruppo promiscuità"**:

[Immagine: Schermata "Definizione raggruppamento movimenti" con campo "Gruppo promiscuità: 4 - Palestra scuola media" evidenziato]

La valorizzazione del "gruppo promiscuità" è **alternativa** alla valorizzazione del "settore IVA" (presenza controllo bloccante).

[Immagine: Errore di validazione: "Non è possibile valorizzare sia il settore iva che il gruppo di promiscuità"]

Se viene valorizzato il gruppo promiscuità tutte le fatture relative al determinato codice raggruppamento movimenti (e quindi al determinato POD/PDR) saranno contabilizzate con la ripartizione negli N settori IVA contenuti nel gruppo promiscuità.

#### 4.5.2 Contabilizzazione massiva

L'iter da seguire per la contabilizzazione massiva è il medesimo utilizzato per le fatture con mono-settore IVA; la suddivisione negli N settori IVA contenuti nel gruppo promiscuità sarà effettuata in automatico dal programma.

Per la contabilizzazione massiva si rinvia all'apposito manuale:

> https://wiki.nuvolaitalsoft.it/lib/exe/fetch.php?media=guide:manuali_uscite:20240802_manuale_grandi_utenze.pdf

---

## 5. Gestione LI.PE

### 5.1 Premessa

I soggetti passivi IVA devono presentare il modello "Comunicazione delle liquidazioni periodiche IVA" (d'ora in avanti **LI.PE**) per comunicare i dati contabili riepilogativi delle liquidazioni periodiche dell'imposta (art. 21-bis del decreto legge 78/2010).

Il modello deve essere presentato esclusivamente per via telematica, direttamente dal contribuente o tramite intermediari abilitati, entro l'ultimo giorno del secondo mese successivo a ogni trimestre.

CWOL consente la gestione del quadro VP ed il successivo invio telematico.

### 5.2 Parametrizzazioni

In primis deve essere configurata la tabella presente al seguente menù indicando:

- **Tipo liquidazione:** mensile/trimestrale
- **Modalità invio telematico:** PEC/SFTP
- **Dati contribuente**
- **Dati dichiarante**

> **180. Servizi Economici → 90. Tabelle → 10. Configurazioni → 20. Definizione e operabilità – CO.GE – CO.ANA – IVA**
>
> tab **"Comun. Liq. IVA"**

[Immagine: Tab "Comun. Liq. IVA" con campi: Tipo Liquidazioni: Mensile, Modo invio: FTP, Ultimo progressivo file: 8, Ultimo progressivo flusso: 11, Dati Frontespizio, Liquidazione di gruppo, Dichiarante, Incaricato]

### 5.3 Gestione Quadro VP

Per la gestione e la compilazione del "Quadro VP" accedere al seguente menù:

> **180. Servizi Economici → 20. IVA → 40. Liquidazione Periodica IVA → 10. Gestione quadro VP**

Successivamente cliccare su **"Nuovo"** per compilare un nuovo quadro mensile. Una volta aperta la finestra del quadro selezionare il periodo di riferimento e cliccare successivamente su **"Calcola"** per ricalcolare in automatico i valori presenti nel database dell'Ente.

[Immagine: Schermata "Comunicazione Liquidazioni Periodiche IVA" con righe VP1-VP14 e pulsante "Calcola" evidenziato]

**LEGENDA COLORI CELLE:**

| Colore cella | Significato |
|---|---|
| Bianco | Importo da valorizzare in modo manuale |
| Giallo | Importo calcolato automaticamente e **non** modificabile |
| Verde | Importo calcolato automaticamente e modificabile |

Una volta verificati attentamente i dati cliccare su **"Aggiungi"** per salvare i dati periodici del quadro VP.

### 5.4 Stampa Quadro VP

CWOL consente la stampa PDF della Liquidazione periodica. Il template viene periodicamente aggiornato a seguito di modifiche da parte dell'Agenzia delle Entrate.

Per eseguire la stampa in formato PDF accedere al menù:

> **180. Servizi Economici → 20. IVA → 40. Liquidazione Periodica IVA → 20. Gestione LI.PE trimestrale**

Successivamente selezionare il **"Periodo di riferimento"** e cliccare sul button **"Crea modello PDF"**.

[Immagine: Schermata "Stampa LI.PE Trimestrale" con dati Ente, pulsante "Crea modello PDF" evidenziato]

### 5.5 Invio Telematico LI.PE

Per inviare telematicamente la LI.PE accedere al menù:

> **180. Servizi Economici → 20. IVA → 40. Liquidazione Periodica IVA → 20. Gestione LI.PE trimestrale**

Successivamente selezionare il **"Periodo di riferimento"**, indicare la modalità operativa (**"Tipo operazione"**) e cliccare sul button **"Crea flusso XML"**.

[Immagine: Schermata "Stampa LI.PE Trimestrale" con "Periodo di Riferimento: 2° Trimestre", "Tipo Operazione: Crea il File XML Firmato e lo INV", pulsante "Crea flusso XML" evidenziato]

> ⚠️ **NOTA BENE:** l'invio della LI.PE tramite il canale SFTP comporta alcune configurazioni e test di interoperabilità con l'Agenzia delle Entrate. Per tali configurazioni è necessario prendere un appuntamento con il personale Palitalsoft.