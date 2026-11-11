# Operazioni di apertura bilancio di previsione

**Oggetto:** Comunicazione n.05/2021

## Scopo del documento

Il documento illustra le fasi da seguire per effettuare l'apertura del bilancio di previsione relativo al triennio successivo.

---

## 1. Apertura tabelle nuovo Esercizio

Questa prima fase è da svolgere dall'anno corrente, l'anno che dovrà quindi essere chiuso.

È la fase che consente di generare le tabelle dei Servizi Economici necessarie per operare con un nuovo Esercizio Finanziario, partendo da uno già esistente. Per le modalità operative che vanno dalla Previsione del Bilancio alla Rendicontazione di fine anno.

Per poter effettuare questa fase, devono verificarsi le seguenti condizioni:

- **Bilancio Verbale Chiusura** non deve essere stampato.
- **Bilancio Conto Consuntivo** non deve essere stampato.

(Entrambi i flag sono presenti nella tabella **Definizioni ed Operabilità**)

[Schermata: percorso menu Apertura Bilancio (D.L.118) → Apertura nuovo esercizio → Apertura nuovo esercizio]

I campi della finestra di selezione sono i seguenti:

- **ESERCIZIO DA APRIRE:** È l'esercizio da aprire, generalmente è l'anno successivo a quello di provenienza ma può essere superiore (GESTIBILE MANUALMENTE)
- **COPIA DA ESERCIZIO:** È l'esercizio dal quale sono reperite le tabelle da trasportare nel nuovo anno. Corrisponde sempre all'esercizio corrente, e non è modificabile.

### ELENCO TABELLE DA APRIRE

[Schermata: finestra "CITY-FINANCING Apertura nuovo esercizio" con parametri generali (Esercizio da aprire: 2022, Copia da esercizio: 2021, Area di provenienza: F - SERVIZI ECONOMICI), sezione Tabelle generali e sezione Tabelle Bilancio]

Qui vengono elencate tutte le tabelle che devono essere riaperte nell'esercizio di destinazione. Queste sono suddivise in due gruppi:

- **Tabelle Generali** (comprende tutte le tabelle base dei Servizi Economici).
- **Tabelle Bilancio** (comprende le tabelle Bilancio Meccanografico e Voci di Bilancio, dove sono memorizzati gli importi di previsione).

Per ogni tabella da riaprire, se risulta già generata nel nuovo anno, compare la data di prima creazione. Quando, oltre alla prima creazione, sono state effettuate delle operazioni di allineamento, viene indicata la data dell'ultimo aggiornamento effettuato.

**Attenzione**, per quanto riguarda le Tabelle Bilancio, è possibile scegliere il tipo di aggiornamento per i movimenti già esistenti:

- **0 - Movimenti esistenti non aggiornati:** i record presenti nell'Esercizio di destinazione non vengono mai aggiornati.
- **1 - Aggiorna movimenti esistenti (importi di previsione esclusi):** i record presenti nell'esercizio di destinazione vengono aggiornati, tranne gli importi. Gli estremi di assunzione della voce vengono azzerati.
- **2 - Aggiorna movimenti esistenti (importi di previsione inclusi):** i record presenti nell'esercizio di destinazione vengono aggiornati, compresi gli importi di previsione, che vengono traslati (vedi Recupero Importi da Esercizio Precedente). Gli estremi di assunzione della voce vengono azzerati.

---

## 2. Ricalcolo importi da Bilancio anno precedente

È la fase che consente di determinare gli stanziamenti del Bilancio, partendo dall'Esercizio precedente, che saranno effettuati nell'esercizio da aggiornare.

[Schermata: percorso menu Apertura Bilancio (D.L.118) → Apertura nuovo esercizio → Ricalcolo importi competenza]

[Schermata: finestra "CITY-FINANCING Ricalcolo importi da Bilancio Anno Precedente" con sezioni: Impostazione Anni di esercizio, Recupero importi da Esercizi precedenti, Modalità calcolo importi Esercizio corrente (Entrata e Spesa), Porzioni di Bilancio coinvolte nell'aggiornamento]

Questa funzione **non è eseguibile** se nelle tabelle dei parametri il bilancio risulta confermato con la spunta.

### Recupero importi da esercizio precedente:

[Schermata: sezione "Recupero importi da Esercizi precedenti" con checkbox: Residui Presunti al Termine dell'Esercizio Precedente (repertio da 2018), Prev. Definitive di Competenza dell'Anno Precedente (repertio da 2018), Prev. Definitive di Cassa dell'Anno Precedente, Di Cui: Prev. Definitive Fondo Pluriennale Vincolato dell'Anno Precedente, Di Cui: Già Impegnato/Accentato (2019/2020/2021)]

Tutti i tipi di importi (selezionati con la spunta) sono aggiornati al momento in cui viene lanciato il ricalcolo, quindi fare attenzione di **non eseguire la procedura** quando è stata fatta la stampa per l'approvazione del bilancio di previsione, ma il bilancio non è ancora stato approvato in consiglio.

Gli importi del residuo presunto saranno poi utilizzati per creare automaticamente gli stanziamenti della cassa.

### Modalità calcolo importi Esercizio precedente:

Dopo la fase 1 gli importi presenti nel bilancio sono quelli traslati dall'esercizio precedente del bilancio di previsione.

È possibile aggiornare gli importi con quelli presenti nel bilancio assestato pluriennale, procedendo a selezionare la combo con la selezione **"1 – Assestato"** (come esempio sotto riportato)

[Schermata: dropdown "Modalità calcolo importi Esercizio corrente" con opzioni: 0 - Non aggiornare, 1 - Assestato 2022 (da plu...), 2 - Assestamento 2022 (da plu...)]

Valutare se valorizzare gli importi dell'anno 2024 con gli stessi valori dell'anno 2023.

> ⚠️ **Attenzione** a non eseguire questa fase di ricalcolo su importi dopo avere caricato i dati del bilancio di previsione, o iniziato a lavorare al caricamento del bilancio di previsione.

È possibile utilizzare le funzioni 0, 1, 2 solo per alcune parti del bilancio, selezionabili dalle box sotto. Se non viene inserito nulla nelle box, verrà considerato l'intero bilancio.

> ⚠️ **Non effettuare i ricalcoli** da "Recupero anni da Esercizi precedenti" dopo aver consegnato la stampa del bilancio di previsione in Giunta, altrimenti le stampe saranno differenti.

---

## 3. Verifica importi in stampa bilancio di previsione

Per effettuare una verifica degli importi posso mettere a confronto la situazione che stampo dagli equilibri (da anno contabile n) e la stampa del bilancio di previsione (da anno contabile n+1).

La prima e la seconda colonna della stampa del bilancio di previsione **"residui presunti"** e **"Previsioni definitive dell'anno precedente"** con importi degli equilibri.

Dall'anno contabile attuale seguire questo percorso:

[Schermata: percorso menu Bilancio → Bilancio D.L.118 → Equilibri di Bilancio]

[Schermata: finestra "CITY-FINANCING Equilibri di Bilancio" con sezioni Entrata e Spesa, flag selezionati: Seleziona Entrate, Seleziona Spese, Includi avanzo, Includi FPV parte Corrente, Includi FPV parte Capitale, Includi fondo cassa, Assestato, Assestato 2022, Assestato 2023, Residui generali, Assestato (Importi di Cassa)]

Dopo aver selezionato i flag indicati nell'immagine precedente, verrà effettuata una stampa dove sono indicati i seguenti valori:

| | Competenza | Residuo | Totale (CP+RS) |
|---|---|---|---|
| **Assestato** | 21.296.173,06 | 0,00 | |
| **Residui generati** | 1.948.829,58 | 8.076.758,69 | 10.025.587,27 |
| **Assestato di Cassa** | 0,00 | 0,00 | 23.010.636,45 |
| Accertato/Assestato | 10,40% | 0,00% | |
| Disponibilità Incassare/Assestato | 89,60% | 0,00% | |
| Riscosso/Assestato | 1,25% | 0,00% | |
| Riscosso/Accertato | 12,00% | 0,21% | |

Le verifiche andranno fatte sia per la **parte entrata** che per la **parte spesa**.

Questi valori dovranno essere confrontati con quelli derivanti dalla seconda stampa, che va effettuata dal nuovo anno che è stato appena aperto, seguendo il percorso sotto indicato:

[Schermata: percorso menu Apertura → Apertura Bilancio (D.L.118) → Stampa Bilancio di Previsione su Modelli Enti Locali (Allegato 9 al D.Lgs 118/2011)]

[Schermata: finestra "CITY-FINANCING Stampa Bilancio di Previsione" con flag selezionati: Quadro delle Entrate per Titolo, Quadro delle Spese per Titolo, e pulsante "Controllo Quadratura"]

Dalla stampa ottenuta, possiamo confrontare l'importo evidenziato con quello della stampa precedente.

L'importo della stampa evidenzia le **"previsioni definitive dell'anno precedente quello cui si riferisce il bilancio"** che corrisponde con l'assestato dell'anno precedente.

[Schermata: tabella di stampa bilancio con colonne: TITOLO, DENOMINAZIONE, RESIDUI PRESUNTI AL TERMINE DELL'ESERCIZIO PRECEDENTE QUELLO CUI SI RIFERISCE IL BILANCIO, PREVISIONI DEFINITIVE DELL'ANNO PRECEDENTE QUELLO CUI SI RIFERISCE IL BILANCIO, PREVISIONE 2022, PREVISIONE 2023, PREVISIONE 2024. Valori evidenziati: 10.025.587,27 e 21.296.173,06]

L'importo dei residui presunti (prima colonna) corrisponderà con la stampa precedente **solo al momento in cui si fa l'apertura**, perché qualsiasi operazione (su accertamenti/impegni o incassi/pagamenti) effettuata nell'anno in corso porterà una variazione dei valori.

Al contrario, gli importi di **assestato dell'anno corrente** e quello della **previsione definitiva** della stampa effettuata nel 2022 dovranno **sempre coincidere**.

---

## 4. Quadratura entrate – spese

### 4.1 Controllo equilibri dall'anno corrente

Effettuare il controllo quadratura entrate spese dall'anno corrente attraverso gli equilibri di bilancio.

Seguire il seguente percorso:

[Schermata: percorso menu Bilancio → Bilancio D.L.118 → Equilibri di Bilancio]

È fondamentale inserire i flag evidenziati (**includi avanzo**, **FPV corrente** e **capitale**) altrimenti la quadratura non può esserci.

[Schermata: finestra "CITY-FINANCING Equilibri di Bilancio" con flag evidenziati: Includi avanzo, Includi FPV parte Corrente, Includi FPV parte Capitale, Includi fondo cassa, Assestato, Assestato 2022, Assestato 2023, tab "Confronto Entrata-Spesa", pulsante "Anteprima risultati"]

[Schermata: finestra "CITY-FINANCING Anteprima Risultati" con tabella ANTEPRIMA RISULTATI]

| Risultati | Importo | Entrate | Spese | Differenza (En - Sp) |
|---|---|---|---|---|
| **Assestato** | | 26.894.468,65 | 26.894.468,65 | 0 |
| **Assestato 2022** | | 22.261.689,29 | 22.261.689,29 | 0 |
| **Assestato 2023** | | 20.375.933,04 | 20.375.933,04 | 0 |

Eventuali squadrature potrebbero essere dovute a variazioni di bilancio: effettuare un **ricalcolo dei progressivi** per avere gli importi aggiornati.