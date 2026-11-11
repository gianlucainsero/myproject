# Acquisizioni CIG ed Interoperabilità Determine Impegni

## Argomenti

- Nuova Form e modalità operative di interoperabilità per la prenotazione impegni, sub impegni, obbligazioni e variazioni
- Nuova modalità di acquisizione CIG con atto numerato
- Implementazioni all'iter per gestione CIG

---

## Nuova Form per la Prenotazione Impegni

[Schermata: finestra di dialogo "Scelta" con due opzioni: "Richiesta di Impegno / Sub-Impegno / Obbligazione / Variazione su Impegno" e "Richiesta di Sub-Impegno Contestuale ad Impegno Padre selezionato"]

## Nuova Form per la Prenotazione Accertamenti

[Schermata: finestra di dialogo "Scelta" con due opzioni: "Richiesta di Accertamento / Sub-Accertamento / Obbligazione / Variazione su Accertamento" e "Richiesta di Sub-Accertamento Contestuale ad Accertamento Padre selezionato"]

## Nuova Form per la Prenotazione Impegni e Accertamenti

### Richiesta di Impegno / Sub-Impegno / Obbligazione / Variazione su Impegno

Possiamo prenotare un impegno, un sub impegno, una obbligazione e una variazione positiva o negativa di impegno.

### Richiesta di Sub-Impegno Contestuale ad Impegno Padre selezionato

Possiamo prenotare contestualmente un sub impegno ad impegno padre creato sulla stessa proposta e precedentemente selezionato.

> **Nota:** Gli esempi proposti si riferiscono alla prenotazione lato impegni in quanto la procedura ha lo stesso funzionamento per la prenotazione lato accertamenti.

---

## Richiesta di Impegno/Sub-impegno/Obbligazione e Variazione

### Fase 1: Selezione iniziale

[Schermata: form "Interoperabilita' da Atti" con campi Anno della Richiesta, Tipo Operazione (dropdown con opzioni: Impegno, Subimpegno, Var.Pos. Impegno, Var.Neg. Impegno), Voce Bilancio, e pulsanti "Torna Elenco", "Azzera i Dati Proposti e/o Ereditati", "Visualizza Atto"]

Sarà possibile:

1. Cercare subito la voce di bilancio
2. Azzerare i dati proposti e/o ereditati per scegliere di prenotare impegno, variazione positiva o negativa

### Fase 2: Selezione del tipo di operazione

[Schermata: form con Tipo Operazione impostato su "Subimpegno" e campo aggiuntivo "Impegno Padre" con anno e codice]

Se si sceglie in questa fase di eseguire la prenotazione di un sub impegno, successivamente viene richiesto il dato relativo all'impegno padre.

### Fase 3: Inserimento dati e prenotazione

[Schermata: form completo con Voce Bilancio (0103.10335.0330), Missione-Programma, Piano Finanziario (5° livello), Cofog, Transazioni UE, Assegnatario, Disponibilità Reale, Importo Richiesto, Fornitore, Codice Fiscale, Partita IVA, Modalità di pagamento, Codice Unico Progetto, Codice Identificativo Gara, Motivo esclu.ne CIG, Provenienza, Scheda Programmazione, Bollo. Pulsanti laterali: Aggiungi, Torna Elenco, Azzera i Dati Proposti e/o Ereditati, Situazione Voce Bilancio, Navigatore, Visualizza Atto]

Una volta scelta la voce di bilancio è possibile:

- Inserire il **5° livello** del piano finanziario
- Verificare immediatamente la **disponibilità reale** anche comprese le richieste da confermare
- Prenotare l'**importo**
- Inserire il **codice cliente**
- Inserire il **CIG** o il **motivo di esclusione del CIG**
- Inserire il **CUP**

In ogni fase è comunque possibile:

1. Visualizzare la situazione della voce di bilancio
2. Cliccare sul navigatore
3. Visualizzare l'atto

### Fase 4: Prenotazioni multiple

[Schermata: vista elenco "Richieste da Atti" con colonne Anno, Tipo Oper., Impegno Padre, Stato, Operazione Crea, Voce Bilancio, Importo Richiesto, Cig. Pulsanti: Nuovo, Situazione Voce Bilancio, Navigatore, Visualizza Atto. Pulsante "+" in basso a sinistra]

Una volta confermata la prima richiesta è possibile inserire un'altra prenotazione per l'esercizio successivo e quello successivo ancora, e un'obbligazione o sub o variazione per gli esercizi successivi al triennio.

---

## Prenotazione di un Sub Impegno Contestuale ad Impegno Padre

Una delle novità di gestione è rappresentata dalla possibilità di poter prenotare un sub impegno contestuale ad impegno padre precedentemente prenotato.

> **Prerequisito:** È necessario prima aver selezionato un impegno padre su cui creare i contestuali.

[Schermata: vista "Prenotazione Impegni" con tab aperte (Dati Principali, Titolare e Facciatone, Omissis, Iser, Altri Dati, Pubblicazioni, Prenotazione Accertamenti, Prenotazione Impegni, Storico, Note). Elenco prenotazioni con riga "Creare Impegno" selezionata. Finestra "Scelta" con opzione "Richiesta di Sub-Impegno Contestuale ad Impegno Padre selezionato" evidenziata]

### Procedura

[Schermata: form "Sub-Impegno Contestuale al Padre sullo stesso Atto" con dati dell'impegno padre (Voce Bilancio, Importo Richiesto Padre, Importo Disponibile su Impegno Padre) e sezione "Elenco dei Sub Contestuali relativi ad Impegno Padre sopra indicato". Pulsanti: "Salva Sub Contestuali su Impegno Padre", "Visualizza Richiesta Padre". Pulsante "+" per aggiungere contestuali]

A questo punto si ha la possibilità di:

1. Aggiungere i contestuali con il pulsante **+**
2. Salvare i sub contestuali su impegno padre con il pulsante **"Salva Sub Contestuali su Impegno Padre"**

### Risultato

[Schermata: finestra "Risultato Gestione Sub Contestuali ad Impegno Padre" con messaggio "Gestione Sub-Impegni Contestuali su Padre di euro 5.000,00 (Riga su Atto: 5)" e tabella:]

| Riga | Anno | Importo | Stato | Progr. Int. |
|------|------|---------|-------|-------------|
| 6 | 2024 | 2.000,00 | Aggiunto | 1694 |
| 7 | 2024 | 3.000,00 | Aggiunto | 1695 |

> Quando verranno create le Operazioni in Finanziaria, verrà generato prima l'Impegno Padre e contestualmente questi Sub-Impegni.

---

## Prenotazione di un'Obbligazione

[Schermata: form "Interoperabilita' da Atti" con Tipo Operazione impostato su "Obbligazione" (dropdown con opzioni: Obbligazione, SubObbligazione, Var.Pos. Obbligazione, Var.Neg. Obbligazione) e Anno della Richiesta impostato su 2027. Vista elenco con riga: Anno 2027, Tipo Oper. Obbligazione, Voce Bilancio 0301.02100.2525, Importo 250,00, Cig "CIG Escluso"]

> **Regola:** Prima di procedere alla creazione di un'obbligazione, scegliere l'anno di creazione della richiesta che deve essere **superiore agli anni di competenza del bilancio di previsione**.

---

## Novità Gestione CIG

### Nuovo quadro normativo (D.Lgs. 36/2023)

[Diagramma: flusso circolare "Nuove funzioni su Acquisti in Rete" con il Nuovo Codice degli Appalti (D.Lgs. n. 36/2023) come input. Nodi del flusso: Accedi esclusivamente tramite Identità Digitale → Pubblica sulla GUUE grazie all'integrazione con la Piattaforma Contratti Pubblici → Crea e carica il Documento di Gara Unico Europeo (DGUEESPD) → Richiedi iCIG direttamente all'interno della Procedura di acquisto → Scarica e consulta il Fascicolo Virtuale dell'Operatore Economico → Crea e consulta il Fascicolo di Gara]

La richiesta di CIG per procedure assoggettate al **D.Lgs. 36/2023**, pubblicate a partire dal **01/01/2024**, avviene attraverso le **piattaforme di approvvigionamento digitale certificate** mediante interoperabilità con i servizi erogati dalla **PCP** attraverso la **Piattaforma Digitale Nazionale Dati (PDND)**.

### Obbligatorietà del CIG

L'acquisizione del CIG è **obbligatoria** per qualunque procedura di affidamento nei settori ordinari e speciali disciplinata dal codice, inclusi gli affidamenti diretti di importo inferiore ai **5.000 €**, per i quali prima bastava richiedere lo SmartCIG.

> **Non esiste più lo SmartCIG.** Ora tutti i contratti sono gestiti mediante acquisizione del CIG.

### Inserimento del motivo di esclusione CIG in fase di prenotazione

[Schermata: form prenotazione impegno con campo "Motivo esclu.ne CIG" impostato su "98 - Cig in acquisizione" evidenziato in rosso. Altri campi visibili: Voce Bilancio 0102.00100.0021, Fornitore ABOCA S.P.A., Codice Fiscale, Partita IVA, Codice Identificativo Gara, Codice Unico Progetto]

Già nella fase di prenotazione impegno è possibile inserire, in attesa del CIG effettivo, un codice nel campo del **motivo di esclusione CIG**, per poter gestire l'iter e associare in un secondo momento il CIG agli impegni di un determinato soggetto anche dopo la pubblicazione dell'atto.

### Associazione del CIG agli impegni

Dalla funzione a menù relativa alla **tabella dei codici identificativi Gara**, è possibile una volta acquisito il CIG associarlo all'impegno e/o impegni di riferimento.

**Percorso menu:** `180. Servizi Economici` → `10. Finanziaria` → `90. Tabelle` → `20. Strutturali` → `50. Codici Identificativi Gara CIG`

[Schermata: menu ad albero con percorso evidenziato fino a "50. Codici Identificativi Gara CIG". Pulsante "Associa ad impegni"]

### Procedura di associazione

Cliccando sul tasto **"Associa ad Impegni"** si aprirà la maschera che identifica gli impegni inseriti con **codice di esclusione 98** associato allo stesso soggetto del CIG.

[Schermata: tabella "Codici Identificativi Gara" con colonne Codice CIG, Descrizione breve, Area, Sezione, Servizio, Ufficio, Servizio Richiedente, RUP, Esito CIG, Soggetto, Importo/Importo Aggiunt., Data inizio, Data fine, Importo Gara, Provenienza. Pulsanti laterali: Nuovo, Altra Ricerca, Dati ANAC (ex AVCP), Prenota SmartCIG, Situazione CIG, Riepilogo CIG, **Associa ad impegni** (evidenziato). Sotto: finestra "Associa impegni da CIG" con elenco impegni e pulsante "Conferma selezione"]

Confermando la selezione si avrà la **sostituzione del codice di esclusione 98 con il CIG effettivo**.