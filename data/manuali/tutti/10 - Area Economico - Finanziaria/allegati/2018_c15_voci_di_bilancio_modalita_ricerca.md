# Comunicazione n. 15/2018 - Uniformazione modalità di ricerca delle voci di bilancio

**Data:** 30/12/2018

---

## Introduzione

In tutte le videate dell'applicativo Cityware (in futuro **CW**) la ricerca e gestione della voce del bilancio finanziario di Entrata ed Uscita è stata **uniformata**, riportando in tutte le videate di gestione nel titolo del campo la dicitura inserita nella tabella personalizzazioni:

> **Definizioni ed operabilità => parametri generali**

Quindi attualmente l'intero codice della voce di bilancio è indicato con la sola dicitura presente nella tabella di definizione sopra indicata.

[Schermata: Tabella "Definizioni Comuni" con campi: Voce economica, Tipo numerazione voci di bilancio, Descrizione Ente, Descrizione Voce. Il campo "Descrizione Voce" mostra la dicitura "Voce Bilancio ..."]

---

## Ricerca delle voci sul file del bilancio

L'operatività per la ricerca delle voci sul file del bilancio opera come di seguito illustrato.

È possibile inserire la **parte iniziale della codifica** della voce di bilancio come in precedenza.

[Schermata: Videata di ricerca con campo "Voce Bilancio" in cui è stato inserito il valore "0406". Il campo mostra il prefisso "xx.*" e i campi successivi per missione, programma e voce.]

La ricerca produce la visualizzazione di **tutte le voci del bilancio che iniziano con 0406** indipendentemente alla missione e programma di appartenenza (parte nera del codice voce).

[Schermata: Risultato della ricerca con elenco di voci di bilancio (es. 0406.12.200, 0406.12.400, 0406.13.051, 0406.13.301, 0406.13.330, 0406.13.400) con relative descrizioni, assegnatari e importi (CP-Assestato, CP-Impegnato, CP-Disp. Imp., CP-Pagato, RS-Assestato, RS-Impegnato, RS-Disp. Imp., RS-Pagato).]

---

## Gestione degli impegni ed accertamenti

Similmente anche le form di gestione degli impegni ed accertamenti mostrano i riferimenti alla voce di bilancio come di seguito indicato.

[Schermata: Form "Dettaglio Impegno" con intestazione "Impegno(sas/vi'n) 2017 00200". Il campo "Voce Bilancio" mostra il codice "0406101" con sotto-campi "0406", "11", "120" e descrizione "ASSISTENZA SCOLASTICA - PERSONALE AMM.VO V". Sono visibili anche i campi "Disp. Voce", "Disp. Voce (+/- Prov.vi)", "Tipo impegno", "Determinazione Dirigenziale", "Numero profilo".]

L'accesso alla ricerca delle voci di bilancio appare come illustrato nella gestione degli impegni ed accertamenti.

[Schermata: Videata "CITY-FINANCING Impegni" con campi di ricerca: Anno/n°, Competenza\Residuo, Oggetto, Voce Bilancio (con prefisso "xx.*" e valori "0406", "00", "000"), Provenienza.]

---

## Ricerca con presenza parziale della voce di bilancio

In questo caso, con la presenza parziale della voce di bilancio, cliccando sulla **lente** è possibile accedere alla consultazione delle voci di bilancio. La procedura è la seguente:

1. **Form 1 – Paginazione bilancio e selezione voce:** si accede alla consultazione delle voci di bilancio.
2. **Form 2 – Voce scelta:** si seleziona la singola voce di bilancio.
3. **Form 3 – Paginazione impegni per voce selezionata:** si accede alla visualizzazione degli impegni presenti sulla voce selezionata.

### Form 1 – Paginazione bilancio e selezione voce

[Schermata: Videata "CITY-FINANCING Impegni" con tabella del Piano Finanziario che elenca le voci di bilancio (es. 0406.11.190, 0406.11.191) con relative descrizioni, assegnatari e importi. La voce 0406.11.190 è evidenziata/selezionata.]

### Form 2 – Voce scelta

[Schermata: Videata "CITY-FINANCING Impegni" con campo "Voce Bilancio" popolato con il codice completo "0406101" e sotto-campi "0406", "11", "191".]

### Form 3 – Paginazione impegni per voce selezionata

[Schermata: Videata "CITY-FINANCING Impegni" con elenco degli impegni per la voce selezionata. Colonne: Anno/Prog, Voce Bilancio, Importo iniziale, Disponibilità operativa, Totale pagato, Disponibilità a pagare, Disponibilità residua, Tipo, Oggetto. Esempi di righe: 2017/01663 (0406101/0406.11.191, importo 660,00), 2017/01411 (9.337,26), 2017/08454 (5.500,04).]

---

## Variazioni di bilancio

Le funzioni di ricerca delle voci di bilancio sono **identiche** a quelle viste sugli impegni ed accertamenti.

[Schermata: Videata "CITY-FINANCING Variazioni stanziam.to alle Voci di Bilancio DL118" con campi di ricerca: Ordinamento, File di Selezione, Competenza variazione, Alti variazione competenza, Alti variazione cassa, Variazioni Competenza, Variazioni CASSA, Tipo variazione, Parte (ENTRATA), Tipo selezione (0-Voce di Entrata), Voce Bilancio (con prefisso "xx.*" e valori "0000", "00", "000").]

Il dettaglio delle singole voci di bilancio è rappresentato come illustrato.

[Schermata: Videata di dettaglio variazioni con "Parametri di selezione" (Delibera ass. Bil, Competenza variazione, Delibera ass. Cassa). Tabella con colonne: Dis., Parte, Piano Finanziario, Prog., 2017-Comp, 2017-F.Plus, 2018-Comp, 2018-F.Plus, 2019-Comp, 2019-F.Plus, 2017-Cassa, 2017-F.Cassa. In basso: "Riepilogo per Delibera Variazione Bilancio" (Av+Fpv, Entrata, Spesa, F.Plus) e "Riepilogo per Delibera Variazione CASSA" (Entrata, Spesa, Tot.E/S).]

---

## Stampa partitario

La ricerca della voce di bilancio opera con la **stessa metodologia** indicata in precedenza.

[Schermata: Videata "CITY-FINANCING Stampa Partitario (Spese)" con "Parametri di selezione". Campi: Livello Voce x raggruppamento (3° Livello), Classificazione DL118/2011 (Missione, Programma, Titolo, Macro Aggregato, Livello 3, Livello 4, Livello 5 con campi Da/A). Campi "Voce di Bilancio Da" (0406101, 0406, 11, 120) e "Voce di Bilancio A" (0000). Campi: Settore IVA, Assegnatario, Responsabile.]

---

## Rilascio implementazioni al software

La modifica è disponibile a partire dalla **release 7.02** ed è stata distribuita con gli aggiornamenti di **dicembre 2018**.