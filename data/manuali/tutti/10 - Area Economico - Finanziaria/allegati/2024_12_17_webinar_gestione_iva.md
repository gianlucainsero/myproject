# Guida IVA – Cruscotto IVA, IVA Promiscua e LI.PE

## 1. Cruscotto IVA

### 1.1 Accesso e Obiettivo

**Percorso:** `180.Servizi economici → 20. IVA → 20. Cruscotto IVA`

**Obiettivo:** Raggruppare in un unico programma tutte le stampe IVA ed anche la gestione versamenti.

Caratteristiche principali:

- Aspetto **innovativo** e **intuitivo** (tutto è a portata di click)
- **3 tab distinte** per:
  - Registri IVA
  - Liquidazione IVA
  - Gestione versamenti
- Selettore del **mese/trimestre**
- **Icone interattive**: compaiono solo se utilizzabili

### 1.2 Funzionalità Generali

- **Information** su tutte le stampe
- Mostra le **date** di ultima stampa provvisoria/definitiva
- **Salvataggio stampe definitive** su Alfresco
- Gestione stampe **GLOBALI** e per **SINGOLO SETTORE**
- Colonna **provvisoria / definitiva**
  - L'icona di stampa compare in una o entrambe le colonne (provvisoria e definitiva) in modo intelligente. Se una determinata stampa non gestisce la stampa definitiva l'icona sarà presente soltanto nella colonna provvisoria.

### 1.3 Struttura della Tabella

Il Cruscotto IVA è una grande tabella:

- **Colonne:** i settori IVA (ed anche il GLOBALE)
- **Righe:** le varie tipologie di stampe

[Diagramma: Screenshot dell'interfaccia Cruscotto IVA con tab "Registri", selettore mese/trimestre, colonne per settori IVA (GLOBALE, 02 Attività mensa scolastica, 03 Trasporto scolastico, 04 manifestazione sportive, 05 illuminazione votiva) e righe per tipologie di registri (A-Acquisti, S-Acquisti, 6-Autofatture da vendite in split/reverse, A-Acquisti estero (reverse), C-Commissivi da vendere, S-Commissivi da vendere, V-Vendite, 1-Vendite, 2-Autof. da Acquisti Split Paym. e R.Char, V-Autofattura vendite estero (reverse) com, S-Commissivi da scorporare, S-Commissivi di Incasso, Registri - riepilogo del settore, Riepilogo generale)]

### 1.4 Registri

#### Registri (stampa del registro IVA)

Il programma consente di effettuare la stampa del registro IVA.

**Gestione disponibile:**

- **Stampa provvisoria**
- **Stampa definitiva:** blocca i movimenti IVA, assegna il numero protocollo se previsto in fase di stampa e salva la stampa PDF del registro sul documentale Alfresco

**Due modalità operative:**

- **Stampa globale:** include tutti i settori IVA di un determinato registro
- **Stampa singolo settore**

#### Registri – riepilogo del settore

Il programma consente di effettuare la stampa di tutti registri di un determinato settore IVA.

**Gestione disponibile:**

- **Stampa provvisoria**
- **Stampa definitiva:** blocca i movimenti IVA, assegna il numero protocollo se previsto in fase di stampa e salva la stampa PDF del registro sul documentale Alfresco

**Una singola modalità operativa:**

- **Stampa singolo settore**

### 1.5 Riepilogo Generale

Il programma consente di effettuare la stampa riepilogativa del settore selezionato. Tale stampa **non effettua calcoli** e **non effettua salvataggi sul database**. Vengono mostrati i dati presenti nella tabella dei saldi IVA (valorizzata dalla stampa "Liquidazione sintetica") e nella tabella dei versamenti IVA (gestita dall'apposito programma "Versamenti").

> ⚠️ Si può eseguire questa stampa **soltanto dopo** avere eseguito la "Liquidazione sintetica"

**Gestione disponibile:**

- **Stampa provvisoria** (è una stampa riepilogativa, non esiste la definitiva)

**Due modalità operative:**

- **Stampa globale:** include tutti i settori IVA
- **Stampa singolo settore**

### 1.6 Liquidazione Sintetica

Il programma consente di effettuare la liquidazione mensile dei documenti rilevanti IVA (si individua il debito/credito mensile dell'Ente).

**Gestione disponibile:**

- **Stampa provvisoria**
- **Stampa definitiva** *(NEW)*: blocca i movimenti IVA e salva la stampa PDF della liquidazione sul documentale Alfresco

**Due modalità operative:**

- **Stampa globale:** include tutti i settori IVA che hanno almeno un registro valido per la liquidazione
- **Stampa singolo settore:** include i registri validi per la liquidazione di un singolo settore

> ⚠️ **Per la stampa provvisoria o definitiva si suggerisce vivamente di utilizzare la GLOBALE che include tutti i settori e mostra il Riepilogo generale con i totali mensili.**

#### Numerazione pagine *(NEW)*

- La numerazione è **indipendente** dalla stampa dei registri
- La numerazione è **progressiva** per singolo settore/mese
- La numerazione si **azzera ogni anno**

### 1.7 Movimenti Esigibili nel Periodo

Il programma mostra i documenti divenuti esigibili in un determinato periodo. Vengono inclusi i documenti:

- **Esigibilità differita:** i documenti che hanno una liquidazione pagata con ordinativo di pagamento nel mese/trimestre in esame
- **Esigibilità immediata:** i documenti registrati e quindi esigibili nel mese/trimestre in esame

**Gestione disponibile:**

- **Stampa provvisoria** (è una stampa analitica di controllo, non esiste la definitiva)

**Due modalità operative:**

- **Stampa globale:** include tutti i settori IVA di un determinato registro
- **Stampa singolo settore**

### 1.8 Movimenti Registrati e Non Interamente Esigibili

Il programma mostra i documenti registrati in IVA (ovvero quelli con data protocollo IVA ricadente nel mese in esame) che non sono interamente esigibili, ovvero che non sono stati totalmente pagati con ordinativo di pagamento.

**Gestione disponibile:**

- **Stampa provvisoria** (è una stampa analitica di controllo, non esiste la definitiva)

**Due modalità operative:**

- **Stampa globale:** include tutti i settori IVA di un determinato registro
- **Stampa singolo settore**

### 1.9 Liquidazione Riepilogativa Annuale

Il programma consente di effettuare la liquidazione riepilogativa annuale dei documenti rilevanti IVA.

**Gestione disponibile:**

- **Stampa provvisoria** (è una stampa riepilogativa, non esiste la definitiva)

**Due modalità operative:**

- **Stampa globale:** include tutti i settori IVA
- **Stampa singolo settore**

### 1.10 Tempistica di Attivazione

**Da quando è possibile utilizzare il Cruscotto IVA?**

**A partire dalle stampe di Gennaio 2025.**

Il Cruscotto IVA è già utilizzato da alcuni clienti, tuttavia per una questione di uniformità di stampa si consiglia di chiudere l'anno 2024 utilizzando le stampe di CW client-server (per coloro che non stanno già usando il Cruscotto IVA).

**Requisiti di aggiornamento:**

- Release minima: **8.02**
- Aggiornamento CWOL: **> 11-12-2024**

> ⚠️ Da Gennaio 2025 **non ci sarà più la manutenzione** del modulo IVA di CW client-server.

### 1.11 Versamenti IVA

[Diagramma: Screenshot della tab "Versamenti" del Cruscotto IVA con selettore mesi (Gennaio-Dicembre), pulsante "Salva Versamenti" e tabella con righe: Saldo precedente, Saldo periodo, Importi compensati, Altre variazioni, Versamenti effettuati, Saldo da riportare. Colonne: Descrizione, GLOBALE (Credito/Debito)]

### 1.12 Funzioni di Servizio

#### 1. Ripristino stampe definitive

**Percorso:** `180.Servizi economici → 20. IVA → 30. Funzioni di servizio → 10. Ripristino stampe definitive`

- Consente il ripristino delle stampe definitive di liquidazione sintetica e registri.

#### 2. Gestione saldi registri IVA

**Percorso:** `180.Servizi economici → 20. IVA → 30. Funzioni di servizio → 20. Gestione saldi registri IVA`

- Consente la visualizzazione dei saldi numerici dei registri IVA per mese/settore
- Consente di scaricare la stampa del registro IVA presente sul documentale Alfresco

#### 3. Gestione saldi settore IVA

**Percorso:** `180.Servizi economici → 20. IVA → 30. Funzioni di servizio → 20. Gestione saldi settori IVA`

- Consente la visualizzazione dei saldi numerici della liquidazione IVA per mese/settore
- Consente di scaricare la stampa della liquidazione IVA presente sul documentale Alfresco

---

## 2. Da CW a CWOL: Mappatura delle Stampe

### 2.1 Tab Registri

| CW | CWOL – tab Registri |
|---|---|
| **Stampa Registri IVA** | **Registri:** consente di stampare il registro IVA di un determinato settore (*stampa singolo settore*) oppure tutti i settori di un determinato registro (*stampa globale*) |
| | **Registri – riepilogo del settore:** consente di stampare tutti i registri associati ad un determinato settore |
| **Stampa Registro Riepilogativo** | **Riepilogo generale:** consente di stampare il saldo riepilogativo di un singolo settore (*stampa singolo settore*) oppure di tutti i settori (*stampa globale*). La stampa è possibile solo dopo aver fatto la Liquidazione sintetica |

### 2.2 Tab Liquidazione

| CW | CWOL – tab Liquidazione |
|---|---|
| **Stampa Liquidazione Iva Periodica** | **Liquidazione sintetica:** consente di effettuare la liquidazione IVA di un singolo settore (*stampa singolo settore*) oppure di tutti i settori (*stampa globale*) |
| **Stampa Movimenti inclusi in Liquidazione Iva** | **Movimenti esigibili nel periodo:** stampa di dettaglio che include tutti i documenti divenuti esigibili in un determinato periodo |
| **Stampa Movimenti Iva acquisti da liquidare** | **Movimenti registrati e non interamente esigibili:** stampa di dettaglio che include i documenti registrati in IVA che non sono interamente esigibili |
| **Stampa Liquidazione IVA Annuale** | **Liquidazione riepilogativa Annuale:** consente di effettuare la liquidazione riepilogativa annuale dei documenti rilevanti IVA |

---

## 3. IVA Promiscua

### 3.1 Definizione

**Cosa si intende per IVA promiscua?**

Si intende una fattura da imputare su **N servizi IVA**; si può parlare quindi di **multi-settore IVA**.

Non ci sono limiti sull'utilizzo massimo di settori per una determinata fattura **MA** deve essere presente **1 solo settore istituzionale**.

### 3.2 Attivazione della Gestione

Come si attiva la gestione dell'IVA promiscua?

1. **Parametri generali IVA**
   `180.Servizi economici → 90. Tabelle → 10.Configurazioni → 20. Def. e operab. CO.GE - CO.ANA- IVA`

2. **Definizione «gruppi ripartizione»**
   `180.Servizi economici → 90. Tabelle → 40.IVA → 80. Gruppi ripartizione IVA promiscua`

3. **Verifica esistenza numeratore (progressivo interno)**
   `180.Servizi economici → 90. Tabelle → 10.Configurazioni → 60.Progressivi`
   (basta verificare la presenza della linea «Progressivo IVA»)

### 3.3 Regole di Funzionamento

#### Caricamento dettaglio IVA

- Il dettaglio IVA deve essere caricato come avviene per le fatture mono-settore (ovvero con la stessa logica attuale).
- Attraverso il button **'Ripartisci'** il programma effettuerà la ripartizione della quota IVA secondo i criteri presenti nel **'Gruppo ripartizione'** selezionato.

[Diagramma: Screenshot della finestra "Movimenti IVA" con campo "Gruppo ripartizione IVA" evidenziato e pulsante "Ripartisci". Sotto, finestra "Ripartizione IVA" con tabella settori (03-Trasporto scolastico, 99-Settore istituzionale), colonne Imponibile, Assogg., % IVA, Importo IVA, % Ripart., Totale, Descrizione Assegnazione e pulsante "Conferma"]

#### Caricamento ritenute

- Le ritenute IVA sono proposte **in automatico** in base alla tipologia IVA (commerciale/istituzionale) del settore.
- Sono proposte **tante righe di ritenute quanti sono i settori IVA**

> **Esempio:** fattura con 2 settori IVA, di cui 1 istituzionale e 1 commerciale → di default sono proposte 2 righe di ritenute, 1 riga di ritenuta commerciale ed 1 riga di ritenuta istituzionale

[Diagramma: Screenshot della finestra "Ritenute" con 2 righe: codice 102 "Iva split commerciale" (imponibile 3,75, ritenuta 0,38) e codice 102 "Iva split commerciale" (imponibile 11,06, ritenuta 1,10), pulsante "Aggiorna"]

#### Caricamento assegnazioni

- Vengono inserite **automaticamente** tante righe di assegnazione quanti sono i settori IVA

> **Esempio:** fattura con 2 settori IVA, di cui 1 istituzionale e 1 commerciale → di default sono proposte 2 righe di assegnazione, ognuna collegata al proprio settore IVA

[Diagramma: Screenshot della tab "Assegnazione" con 2 righe (Num. Riga 0 e 0, Data Invio 16/12/2024, Esito "Inviata al servizio", Assegnato Ritenuta 4,13/0,38 e 12,16/1,10). Sotto, finestra dettaglio assegnazione con campo "Settore IVA" evidenziato]

#### Caricamento liquidazioni

- Le fatture promiscue possono essere liquidate in **N liquidazioni** indipendentemente da quante siano le assegnazioni.
- Ogni assegnazione quindi, se necessario, può essere liquidata in **N liquidazioni**.
- La liquidazione è possibile:
  - **Manualmente**
  - **Da atto di liquidazione**

#### IVA promiscua e stampe IVA

- Ogni fattura sarà presente **per quota parte** su tutti i settori che compongono il 'gruppo ripartizione' (quindi la fattura **non** compare in un unico settore)

---

## 4. LI.PE: Gestione ed Invii

### 4.1 Gestione del Modello VP

**Percorso:** `180.Servizi economici → 20. IVA → 40. Liquidazione periodica IVA → 10. Gestione Quadro VP`

[Diagramma: Screenshot della finestra "Comunicazioni Liquidazioni IVA" con tabella (Tipo Liquidazione: Mensile, Anno, Periodo, Debito IVA, Credito IVA, Codice, Utente mod.) e pulsanti "Stampa" e "Storico LI.PE". Sotto, finestra "COMUNICAZIONE LIQUIDAZIONI PERIODICHE IVA" con campi VP1-VP14 (Totale operazioni attive, Totale operazioni passive, IVA esigibile, IVA detratta, IVA dovuta, Debito periodo precedente, Credito periodo precedente, Credito anno precedente, Versamenti auto UE, Credito d'imposta, Interessi dovuti, Acconti dovuti, IVA da versare) e pulsanti "Aggiorna", "Cancella", "Torna Elenco"]

### 4.2 Creazione del Modello PDF/XML e Invio

**Percorso:** `180.Servizi economici → 20. IVA → 40. Liquidazione periodica IVA → 20. Gestione LI.PE. Trimestrale`

[Diagramma: Screenshot della finestra "Stampa LI.PE. Trimestrale" con sezioni: Dati Ente (Progressivo, Descrizione, Indirizzo, Cod. Istat, CAP, Provincia), Liquidazione di gruppo: Contribuente (Partita IVA della controllante, Ultimo mese, Liquidazione del gruppo), Dichiarante (se diverso dal contribuente) (Codice Fiscale, Codice Carica, Codice Fiscale della società dichiarante), Incaricato (impegno alla presentazione telematica) (Codice Fiscale dell'intermediario, Data dell'impegno), Periodo di Riferimento, Tipo Operazione. Pulsanti a destra: "Crea modello PDF", "Crea flusso XML", "Storico Stampe"]

### 4.3 Storico dei File XML Creati

**Percorso:** `180.Servizi economici → 20. IVA → 40. Liquidazione periodica IVA → 30. Storico LI.PE`

[Diagramma: Screenshot della finestra "Storico Liquidazioni IVA" con tabella (Id, Anno Esercizio, Trimestre, Uuid, Nome File, Utente mod., Data mod.) e pulsante "Altra Ricerca". Esempi di nomi file: IT00449500107_LI_00017.xml, IT00449500107_LI_0001F.xml, ecc.]