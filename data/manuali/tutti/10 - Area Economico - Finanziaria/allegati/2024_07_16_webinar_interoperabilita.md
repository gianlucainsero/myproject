# Acquisizioni CIG ed Interoperabilità Determine Impegni

## Argomenti

- Nuova Form e modalità operative di interoperabilità per la prenotazione impegni, sub impegni, obbligazioni e variazioni
- Nuova modalità di acquisizione CIG con atto numerato
- Implementazioni all'iter per gestione CIG

---

## Nuova Form per la Prenotazione Impegni

[Schermata: finestra di dialogo "Scelta" con due opzioni: "Richiesta di Impegno / Sub-Impegno / Obbligazione / Variazione su Impegno" e "Richiesta di Sub-Impegno Contestuale ad Impegno Padre selezionato"]

---

## Nuova Form per la Prenotazione Accertamenti

[Schermata: finestra di dialogo "Scelta" con due opzioni: "Richiesta di Accertamento / Sub-Accertamento / Obbligazione / Variazione su Accertamento" e "Richiesta di Sub-Accertamento Contestuale ad Accertamento Padre selezionato"]

---

## Nuova Form per la Prenotazione Impegni e Accertamenti

### Richiesta di Impegno / Sub-Impegno / Obbligazione / Variazione su Impegno

Possiamo prenotare un impegno, un sub impegno, una obbligazione e una variazione positiva o negativa di impegno.

### Richiesta di Sub-Impegno Contestuale ad Impegno Padre selezionato

Possiamo prenotare contestualmente un sub impegno ad impegno padre creato sulla stessa proposta e precedentemente selezionato.

> **Nota:** Gli esempi proposti si riferiscono alla prenotazione lato impegni in quanto la procedura ha lo stesso funzionamento per la prenotazione lato accertamenti.

---

## Richiesta di Impegno/Sub-Impegno/Obbligazione e Variazione

[Schermata: form "Interoperabilita' da Atti" con campi: Anno della Richiesta, Tipo Operazione (dropdown con opzioni: Impegno, Subimpegno, Var.Pos. Impegno, Var.Neg. Impegno), Stato, Richiesta Prenotazione, Ragguppam., Riga, Voce Bilancio]

Sarà possibile:

1. Cercare subito la voce di bilancio
2. Azzerare i dati proposti e/o ereditati per scegliere di prenotare impegno, variazione positiva o negativa

---

### Selezione del Sub-Impegno

[Schermata: form con campo "Impegno Padre" evidenziato in rosso, visibile quando si seleziona "Subimpegno" come Tipo Operazione]

Se si sceglie in questa fase di eseguire la prenotazione di un sub impegno, successivamente viene richiesto il dato relativo all'impegno padre.

---

### Inserimento Dati e Verifica Disponibilità

[Schermata: form completo con campi: Voce Bilancio, Missione-Programma, Piano Finanziario, Cofog, Transazioni UE, Assegnatario, Disponibilità Reale, Importo Richiesto, Oggetto, Fornitore, Codice Fiscale, Partita IVA, Modalità di pagamento, Codice Unico Progetto, Codice Identificativo Gara, Motivo esclu.ne CIG, Provenienza, Scheda Programmazione, Bollo]

Una volta scelta la voce di bilancio è possibile:

- Inserire il **5^ livello** del piano finanziario
- Verificare immediatamente la **disponibilità reale** anche comprese le richieste da confermare
- Prenotare l'importo
- Inserire il codice cliente, il CIG o il motivo di esclusione del CIG e il CUP

In ogni fase potete comunque:

1. Visualizzare la situazione della voce di bilancio
2. Cliccare sul navigatore
3. Visualizzare l'atto

---

### Prenotazioni su Esercizi Successivi

[Schermata: vista elenco "Richieste da Atti" con colonne: Anno, Tipo Oper., Impegno Padre, Stato, Operazione Crea, Voce Bilancio, Importo Richiesto, Cig. Pulsanti a destra: Nuovo, Situazione Voce Bilancio, Navigatore, Visualizza Atto]

È possibile, una volta confermata la prima richiesta, inserire un'altra prenotazione per l'esercizio successivo e quello successivo ancora, e un'obbligazione o sub o variazione per gli esercizi successivi al triennio.

---

## Prenotazione di un Sub-Impegno Contestuale ad Impegno Padre

Una delle novità di gestione è rappresentata dalla possibilità di poter prenotare un sub impegno contestuale ad impegno padre precedentemente prenotato.

> **Nota:** È necessario prima aver selezionato un impegno padre su cui creare i contestuali.

[Schermata: vista "Prenotazione Impegni" con tab aperte (Dati Principali, Titolare e Faccicolazione, Omissis, Iter, Altri Dati, Pubblicazioni, Prenotazione Accertamenti, Prenotazione Impegni, Storico, Note). Finestra di dialogo "Scelta" con opzione "Richiesta di Sub-Impegno Contestuale ad Impegno Padre selezionato" evidenziata]

---

### Aggiunta e Salvataggio dei Sub-Contestuali

[Schermata: finestra "Sub-Impegno Contestuale al Padre sullo stesso Atto" con campi: Impegno Padre: Anno, Riga, Progr. Interno, Importo Richiesto Padre, Importo Disponibile su Impegno Padre, Voce Bilancio, Piano Finanziario, Assegnatario, Fornitore, Ditta Ind., Modalità di pagamento, Cig. Sezione "Elenco dei Sub Contestuali relativi ad Impegno Padre sopra indicato" con colonne: Riga, Anno, Importo, Cig, Soggetto, Ditta Ind., Mod. Pag/Prov., Descrizione. Pulsanti: "Salva Sub Contestuali su Impegno Padre" e "Visualizza Richiesta Padre"]

A questo punto avrete la possibilità di:

- Aggiungere con il **+** i contestuali
- Salvare i sub contestuali su impegno padre

---

### Risultato della Gestione Sub-Contestuali

[Schermata: finestra "Risultato Gestione Sub Contestuali ad Impegno Padre" con messaggio: "Gestione Sub-Impegni Contestuali su Padre di euro 5.000,00 (Riga su Atto: 5)"]

| Riga | Anno | Importo | Stato | Progr. Int. |
|------|------|---------|-------|-------------|
| 6 | 2024 | 2.000,00 | Aggiunto | 1694 |
| 7 | 2024 | 3.000,00 | Aggiunto | 1695 |

> Quando verranno create le Operazioni in Finanziaria, verrà generato prima l'Impegno Padre e contestualmente questi Sub-Impegni.

---

## Prenotazione di un'Obbligazione

[Schermata: form "Interoperabilita' da Atti" con Tipo Operazione impostato su "Obbligazione" e dropdown con opzioni: Obbligazione, SubObbligazione, Var.Pos. Obbligazione, Var.Neg. Obbligazione. Anno della Richiesta: 2027. Vista elenco con riga: Anno 2027, Tipo Oper. Obbligazione, Voce Bilancio 0301.02100.2525, Importo Richiesto 250,00, Cig "CIG Escluso"]

Prima di procedere alla creazione di un'obbligazione, scegliere l'**anno di creazione della richiesta** che deve essere **superiore agli anni di competenza del bilancio di previsione**.

---

## Novità Gestione CIG

### Modalità di Richiesta

La richiesta di CIG per procedure assoggettate al **D.Lgs. 36/2023**, pubblicate a partire dal **01/01/2024**, avviene attraverso le **piattaforme di approvvigionamento digitale certificate** mediante interoperabilità con i servizi erogati dalla PCP attraverso la **Piattaforma Digitale Nazionale Dati (PDND)**.

[Diagramma: Ciclo di vita del Nuovo Codice degli Appalti (D.Lgs. n. 36/2023) con "Nuove funzioni su Acquisti in Rete". Fasi: Accedi esclusivamente tramite Identità Digitale → Pubblica sulla GUUE grazie all'integrazione con la Piattaforma Contratti Pubblici → Crea e carica il Documento di Gara Unico Europeo (DGUEESPD) → Richiedi iCIG direttamente all'interno della Procedura di acquisto (es. 98XHD45Y) → Scarica e consulta il Fascicolo Virtuale dell'Operatore Economico → Crea e consulta il Fascicolo di Gara]

---

### Obbligatorietà del CIG

L'acquisizione del CIG è **obbligatoria** per qualunque procedura di affidamento nei settori ordinari e speciali disciplinata dal codice, inclusi gli **affidamenti diretti di importo inferiore ai 5000 €**, per i quali prima bastava richiedere lo SmartCIG.

> **Non esiste più lo SmartCIG**, ora tutti i contratti sono gestiti mediante acquisizione del CIG.

---

### Inserimento del Motivo di Esclusione CIG in Fase di Prenotazione

[Schermata: form prenotazione impegno con campo "Motivo esclu.ne CIG" impostato su "98 - Cig in acquisizione" evidenziato in rosso. Altri campi visibili: Voce Bilancio 0102.00100.0021, Fornitore ABOCA S.P.A., Codice Fiscale, Partita IVA, Modalità di pagamento, Codice Unico Progetto, Codice Identificativo Gara, Provenienza CP-Da competenza pura]

Già nella fase di prenotazione impegno è possibile inserire, in attesa del CIG effettivo, un codice nel campo del **motivo di esclusione CIG**, per poter gestire l'iter e associare in un secondo momento il CIG agli impegni di un determinato soggetto anche dopo la pubblicazione dell'atto.

---

### Associazione del CIG agli Impegni

[Schermata: percorso di menu: Applicazioni → 180. Servizi Economici → 10. Finanziaria → 90. Tabelle → 50. Codici Identificativi Gara CIG. Pulsante "Associa ad impegni" evidenziato]

Dalla funzione a menù relativa alla **tabella dei codici identificativi Gara**, siamo in grado una volta acquisito il CIG, di associarlo all'impegno e/o impegni di riferimento, attraverso il tasto:

**Associa ad impegni**

---

### Maschera di Associazione CIG-Impegni

[Schermata: tabella "Codici Identificativi Gara" con colonne: Codice CIG, Descrizione breve, Area, Sezione, Servizio, Ufficio, Servizio Richiedente, RUP, Esito CIG, Soggetto, Importo/Importo Aggiunt., Data inizio, Data fine, Importo Gara, Provenienza. Pulsanti a destra: Nuovo, Altra Ricerca, Dati ANAC (ex AVCP), Prenota SmartCIG, Situazione CIG, Riepilogo CIG, **Associa ad impegni** (evidenziato). Sotto: finestra "Elenco impegni da associare al CIG" con colonna "Conferma selezione" evidenziata]

Cliccando sul tasto **Associa ad Impegni** si aprirà la maschera che identifica gli impegni inseriti con **codice di esclusione 98** associato allo stesso soggetto del CIG. Confermando la selezione avremo la **sostituzione del codice di esclusione 98 con il CIG effettivo**.