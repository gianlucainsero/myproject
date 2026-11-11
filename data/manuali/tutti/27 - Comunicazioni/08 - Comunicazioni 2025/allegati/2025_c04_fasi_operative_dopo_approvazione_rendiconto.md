# Azioni da Effettuare in Seguito all'Approvazione del Rendiconto

**Comunicazione n. 04/2025**

## Scopo

Le azioni di seguito illustrate mostrano le fasi operative da effettuare per rendere il rendiconto definitivo, per ricalcolare i residui nell'anno successivo e per effettuare la chiusura dei saldi dei vincoli.

---

## 1. Fasi Operative in Seguito ad Approvazione Rendiconto

### 1.1 Impostazioni Flag Esercizio Chiuso

Operando **nell'anno contabile da chiudere e bloccare**.

**Percorso:** Servizi Economici => Tabelle => Configurazioni => Definizione Operabilità – Parametri Generali

Valorizzare i flag come nell'immagine a fianco, in modo di bloccare l'operatività (in modifica) nella gestione dell'esercizio.

[Immagine: Schermata "Tabella personalizzazioni modulo finanziaria" con tab "Iter" attiva. Sezione "Flag generali" con i seguenti flag tutti spuntati: Bilancio previsione inserito, Bilancio previsione confermato, Assestamento effettuato, Verbale di chiusura Stampato, Riaccertamento in corso, Rendiconto chiuso, Esercizio chiuso. Pulsante "Info" evidenziato.]

**Gestione Iter – Descrizione dei Flag:**

| Flag | Descrizione |
|------|-------------|
| **BILANCIO PREVISIONE INSERITO** | Non e' possibile modificare gli importi delle voci di bilancio e non e' piu' possibile effettuare richieste di bilancio. In caso di inserimento del Flag e' fortemente consigliato effettuare il CONTROLLO QUADRATURA. |
| **BILANCIO PREVISIONE CONFERMATO** | L'importo assegnato sulla voce di bilancio diventa operativo. In caso di inserimento del Flag e' fortemente consigliato effettuare il CONTROLLO QUADRATURA. |
| **ASSESTAMENTO EFFETTUATO** | Non e' piu' possibile inserire variazioni di bilancio. |
| **VERBALE DI CHIUSURA STAMPATO** | Non e' consentito l'inserimento di impegni/accertamenti. |
| **RIACCERTAMENTO IN CORSO** | Non e' consentito l'inserimento di impegni/accertamenti e l'emissione di mandati/reversali. Sono consentite solo operazioni di riaccertamento ordinario (var. esigibilità, economie, insussistenze, perenzioni). |
| **RENDICONTO CHIUSO** | Sono consentite solo interrogazioni ed operazioni su movimenti IVA e ritenute per Mod. 770 e liquidazione IVA. In caso di inserimento del Flag e' fortemente consigliato effettuare il CONTROLLO QUADRATURA. |
| **ESERCIZIO CHIUSO** | Non e' possibile effettuare alcuna operazione di gestione. |

> **INFO:** Permette di ottenere le informazioni relative alle impostazioni dei vari iter.

---

### 1.2 Ricalcolo Stanziamenti Residuo da Bilancio Esercizio Precedente

In seguito alle operazioni effettuate per il rendiconto, sarebbe opportuno effettuare la funzione di ricalcolo degli stanziamenti a residuo in modo di allineare alla situazione aggiornata eventuali difformità.

**Percorso:** Operando dall'esercizio da aggiornare (quello successivo al rendiconto)

Servizi Economici => Utilità => Apertura Nuovo Esercizio => "Ricalcolo Stanziamenti Residuo da Bilancio Esercizio Precedente"

[Immagine: Schermata "Apertura Nuovo Esercizio" con struttura ad albero: Apertura Iniziale > Apertura Iniziale Tabelle; Ricalcolo Valori > Ricalcolo Importi Competenza da Bilancio esercizio precedente, Ricalcolo Stanziamento Residuo da Bilancio esercizio precedente (evidenziato), Ricalcolo Stanziamento Iniziale Cassa. Colonna "Elaborazione" con indicatori di stato.]

**Procedura:**

Impostare i flag come nell'immagine a fianco e procedere utilizzando la funzione **"Ricalcola"**.

[Immagine: Finestra "Ricalcolo Importi residuo da Esercizio precedente" con: Impostazioni per elaborazione (Anno Bilancio da aggiornare: 2025, Area di provenienza: F - SERVIZI ECONOMICI), pulsante "Ricalcola" evidenziato. Sezione "Residuo su Bilancio" con flag: Stanziamento Residuo Iniziale, Totale impegnato a residuo, Verifica residuo calcolato. Sezione "Operazioni su Impegni/Accertamenti" con opzioni: Apertura schede con residui da anno precedente, Chiusura impegni/accertamenti nell'anno precedente senza residui. Sezioni "Entrate - Porzioni di Bilancio coinvolte nell'aggiornamento" e "Uscite - Porzioni di Bilancio coinvolte nell'aggiornamento" con classificatori bilancio.]

---

### 1.3 Allineamento Situazione Avanzo Libero e Utilità Chiusura Saldi Vincoli

In seguito all'approvazione del rendiconto (**operando da esercizio del rendiconto approvato**), va effettuata la funzione per riportare il saldo iniziale dei vincoli nell'annualità successiva.

I saldi finali dell'anno precedente verranno riportati come saldi iniziali dell'anno successivo, verrà creato anche un movimento di rettifica per allineare alla situazione del rendiconto la quota di **AVANZO LIBERO**.

**Percorso:** Dalla gestione anagrafica vincoli, attraverso il bottone **AVANZO LIBERO** è possibile visualizzare la situazione dettagliata della ripartizione delle tipologie di avanzo.

[Immagine: Schermata "Anagrafica Vincoli" con struttura ad albero dei vincoli (A - AVANZO: DA PARTE ACCANTONATA, DA PARTE VINCOLATA, DA PARTE DESTINATA AGLI INVESTIMENTI, DI PARTE ORDINARIA; C/F - ALTRA DESTINAZIONE ESCLUSA DA COMPOSIZIONE AVANZO). Pannello laterale destro con pulsanti: Nuovo Vincolo, Alta Vincolo, Selezione Competenza, Selezione Cassa, Selezione del Bilancio, Movimentazione Vincoli, **Avanzo Libero** (evidenziato), Stampa Vincoli e Bilancio, Ricalcolo/Requisiti Vincolati da Entrate, Ricalcolo/Requisiti Vincolati da Uscite, Progetti da Rendic. di Amministrazione, Cancellazione Vincolo.]

Una volta cliccato su **Avanzo Libero** il programma mostrerà la schermata di riepilogo dei totali di parte accantonata, vincolata, investimenti e disponibile così da avere la possibilità di confrontarli con quelli del risultato di amministrazione e, se corretti, procedere con la storicizzazione.

[Immagine: Finestra "Avanzo Libero" con tabella riepilogativa:

| Riga | Tipo | Valore | Accantonamenti | Netto |
|------|------|--------|----------------|-------|
| A | Risultato di Amministrazione | 5.385.227,77 | | 5.385.227,77 |
| B | Totale Parte Accantonata | 2.251.707,75 | | 2.251.707,75 |
| B1 | Accantonamento x FCDEE | 1.778.693,51 | | 1.778.693,51 |
| B2 | Accantonamento residui perenti (solo per le regioni) | 0,00 | | 0,00 |
| B3 | Fondo anticipazioni di liquidità D.L. 35/2013 | 0,00 | | 0,00 |
| B4 | Fondo perdite società partecipate | 17.000,00 | | 17.000,00 |
| B5 | Fondo contenzioso | 0,00 | | 0,00 |
| B6 | Altri accantonamenti da dettagliare in composizione avanzi | 356.014,24 | | 356.014,24 |
| B7 | Fondo garanzia debiti commerciali | 100.000,00 | | 100.000,00 |
| C | Totale Parte Vincolata | | 23,00 | 1.714.545,16 |
| C1 | Vincoli derivanti da leggi e dai principi contabili | 826.624,55 | 0,00 | 826.624,55 |
| C2 | Vincoli derivanti da trasferimenti | 842.301,62 | | 842.301,62 |
| C3 | Vincoli derivanti dalla contrazione di mutui | 45.518,99 | 23,00 | 45.518,99 |
| C4 | Vincoli formalmente attribuiti dall'ente | 100,00 | 0,00 | 100,00 |
| C5 | Altri vincoli da specificare | 0,00 | 0,00 | 0,00 |
| D | Totale Destinato agli Investimenti | 544.651,01 | 23,00 | 544.628,01 |
| E | Quota Avanzo Libero (A-B-C-D) | | | 874.346,85 |
| F | Avanzo da movimenti su scheda Comp. | | | -6.115.748,66 |
| G | Differenza Avanzo Libero (E-F) | | | 6.990.095,51 |
| H | Avanzo Libero Fine Esercizio con Mov. Diff. | | | 874.346,85 |

Pulsanti a destra: "Esporta Saldi in XLSX", "Storicizza Saldi".]

**Procedura di storicizzazione:**

Premere **STORICIZZA SALDI** e selezionare il tipo di operazione da effettuare, a scelta tra:

- Competenza e Cassa
- SOLO Competenza
- SOLO Cassa

È possibile procedere in modo disgiunto per la chiusura dei saldi di cassa rispetto a quelli di competenza.

[Immagine: Finestra "Avanzo Libero" con popup "Tipo chiusura Saldi" contenente il messaggio "Attenzione! Selezionare il tipo di chiusura" e tre pulsanti: "Competenza e Cassa", "Solo Competenza" (evidenziato), "Solo Cassa".]

> **Nota:** Una volta completata l'operazione si consiglia di confrontare i saldi iniziali nell'anno successivo con quelli presenti nei vincoli del Rendiconto appena approvato.