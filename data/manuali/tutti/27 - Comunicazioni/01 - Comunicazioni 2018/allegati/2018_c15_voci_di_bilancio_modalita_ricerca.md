# Comunicazione n. 15/2018

**Oggetto:** Uniformazione modalità di ricerca delle voci di bilancio

**Scopo:** Uniformità nella modalità di ricerca voci di bilancio

| Data | Oggetto Revisione | Versione |
|------|-------------------|----------|
| 30-12-2018 | Prima comunicazione | C15/2018 |

---

## Ricerca e gestione della voce di bilancio in tutte le videate di Cityware (CW)

In tutte le videate dell'applicativo Cityware (in futuro CW), la ricerca e gestione della voce del bilancio finanziario di Entrata ed Uscita è stata uniformata riportando in tutte le videate di gestione nel titolo del campo la dicitura inserita nella tabella personalizzazioni **Definizioni ed operabilità => parametri generali**.

[Immagine: Videata "Definizioni Comuni" con campi: Voce economica (Voce Economica / header / V.Ec.), Tipo numerazione voci di bilancio (Manuale), Descrizione Ente (Comune di F.), Descrizione Voce (Voce Bilancio ...)]

Quindi attualmente l'intero codice della voce di bilancio è indicato con la sola dicitura presente nella tabella di definizione sopra indicata.

### Operatività per la ricerca delle voci sul file del bilancio

L'operatività per la ricerca delle voci sul file del bilancio opera come di seguito illustrato.

È possibile inserire la parte iniziale della codifica della voce di bilancio come in precedenza.

[Immagine: Videata di ricerca con campo "Voce Bilancio" in cui è stato inserito il valore "0406" nel campo di ricerca parziale]

La ricerca produce la visualizzazione di tutte le voci del bilancio che iniziano con **0406** indipendentemente alla missione e programma di appartenenza (parte nera del codice voce).

[Immagine: Elenco risultati di ricerca con voci di bilancio che iniziano con 0406, es. 0406.12.200, 0406.12.400, 0406.13.051, 0406.13.301, 0406.13.330, 0406.13.400, con relative descrizioni e importi]

### Gestione degli impegni ed accertamenti

Similmente anche le form di gestione degli impegni ed accertamenti mostrano i riferimenti alla voce di bilancio come di seguito indicato.

[Immagine: Finestra "Dettaglio Impegno" con campo "Voce Bilancio" che mostra il codice 0406101 e la descrizione "ASSISTENZA SCOLASTICA - PERSONALE AMM.VO"]

L'accesso alla ricerca delle voci di bilancio appare come illustrato nella gestione degli impegni ed accertamenti.

[Immagine: Videata "CITY-FINANCING Impegni" con campo "Voce Bilancio" contenente il valore parziale "0406"]

### Procedura di ricerca con lente (icona di ricerca)

In questo caso, con la presenza parziale della voce di bilancio, cliccando sulla **lente** è possibile accedere alla consultazione delle voci di bilancio (**form 1 – paginazione bilancio e selezione voce**), quindi selezionando la singola voce di bilancio (**form 2 – voce scelta**) si accede alla visualizzazione degli impegni presenti sulla voce selezionata (**form 3 – paginazione impegni x voce selezionata**).

#### Form 1 – Paginazione bilancio e selezione voce

[Immagine: Videata di paginazione del bilancio con elenco voci (es. 0406.11.190, 0406.11.191) e relative descrizioni, con campo "Voce Bilancio" in alto]

#### Form 2 – Voce scelta

[Immagine: Finestra "CITY-FINANCING Impegni" con campo "Voce Bilancio" popolato con il codice completo "0406101" e i sotto-codici "0406", "11", "191"]

#### Form 3 – Paginazione impegni per voce selezionata

[Immagine: Videata "CITY-FINANCING Impegni" con elenco impegni filtrati per la voce selezionata, con colonne: Anno/Prog, Voce Bilancio, Importo, Disponibilità, Tipo, Oggetto]

---

## Variazioni di bilancio

Le funzioni di ricerca delle voci di bilancio sono identiche a quelle viste sugli impegni ed accertamenti.

[Immagine: Videata "CITY-FINANCING Variazioni stanziamenti alle Voci di Bilancio DL118" con campo "Voce Bilancio" e filtri di selezione (Parte: ENTRATA, Tipo variazione, ecc.)]

Ed il dettaglio delle singole voci di bilancio è rappresentato come illustrato.

[Immagine: Videata di dettaglio variazioni con tabella contenente: Dis., Parte, Piano Finanziario, Prog., colonne per anni di competenza (2017-F.Plus, 2018-F.Plus, 2019-F.Plus, 2017-Cassa, 2018-Cassa, 2019-Cassa) e riepiloghi per Delibera Variazione Bilancio e CASSA]

---

## Stampa partitario

La ricerca della voce di bilancio opera con la stessa metodologia indicata in precedenza.

[Immagine: Videata "CITY-FINANCING Stampa Partitario (Spese)" con parametri di selezione: Livello Voci x raggruppamento (3° Livello), Classificazione DL118/2011 (Missione, Programma, Titolo, Macro Aggregato, Livello 3-5), e campi "Voce di Bilancio Da/A" con valori di esempio (0406101 / 0406-11-120)]

---

## Rilascio implementazioni al software

- La modifica è disponibile a partire dalla **release 7.02** ed è stata distribuita con gli aggiornamenti di **dicembre 2018**.
- La modifica è disponibile a partire dalla **release 7.11** su **CWOL** – patch del **25.01.2023**.

**Eventuali vincoli:** *(nessuno)*

**Eventuali criticità:** *(nessuna)*