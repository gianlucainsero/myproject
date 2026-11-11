# Comunicazione n. 03/2023 – Gestione sospensioni e abbuoni su documenti passivi secondo le nuove regole area RGS

| Campo | Dettaglio |
|-------|-----------|
| **Oggetto** | Gestione sospensioni e abbuoni su documenti passivi secondo le nuove regole area RGS |
| **Riferimento** | Sostituisce/Segue la Comunicazione n. 01/2020 |
| **Scopo** | Il documento illustra le modalità di gestione degli abbuoni e delle sospensioni su documenti passivi |

| Data | Oggetto Revisione | Versione |
|------|-------------------|----------|
| 02.01.2020 | Prima comunicazione/Stesura iniziale | C01/2020 |
| 27.03.2023 | Revisione (Modificata con la nuova gestione da CWOL dopo patch del 25.01.2023) | C03/2023 |

---

## 1.1 Scopo della gestione

Il documento illustra le modalità di gestione degli abbuoni e delle sospensioni su documenti passivi; per i documenti commerciali entrambe le operazioni riducono il saldo dello stock del debito e vanno comunicate al portale dell'Area RGS con apposito flusso.

L'implementazione si è resa necessaria a seguito delle variazioni normative sotto indicate.

## 1.2 Riferimenti Normativi

Di seguito l'elenco dei riferimenti normativi:

- Legge 30 dicembre 2018, n. 145, all'articolo 1, comma 870
- Tutorial e nuove regole tecniche dell'Area RGS: https://area.rgs.mef.gov.it/canali/163/guide-e-faq

## 1.3 Operatività su CWOL

### 1.3.1 Gestione Abbuoni

La gestione degli abbuoni sostituisce la funzione "azzera saldo" e consente di ridurre in parte o totalmente l'importo da liquidare su un documento. L'inserimento di un movimento di abbuono può essere utilizzato per:

- Chiudere un documento per l'eventuale quota priva di copertura finanziaria.
- Chiudere una fattura e la relativa nota di credito nel caso in cui il fornitore non debba inviare altri documenti e non è possibile emettere ordinativo in quanto il saldo dei due documenti è uguale a zero.

[Schermata: Percorso menu → 180. Servizi Economici → 10. Finanziaria → 60. Uscita → 60. Documenti Uscita]

Una volta contabilizzato il documento, l'inserimento di un movimento di abbuono può essere effettuato dalla voce del menu **"Documenti Uscita"** selezionando il documento interessato e recandosi nella tab **Abbuoni/PCC**.

[Schermata: Scheda documento con tab "Abbuoni/PCC" evidenziata]

È possibile dal simbolo **"+"** inserire un abbuono parziale (SID) o un abbuono per l'intero importo (CH), ogni movimento viene salvato in apposito archivio per la successiva consultazione e comunicazione alla piattaforma di certificazione dei crediti.

[Schermata: Finestra "Abbuoni/PCC" con campi: Data richiesta, Importo Lordo, Saldo, Ritenute, Tipo Azione (Abbuono), Azione PCC (SID: Sospensioni e abbuoni parziali / CH: Chiusura), Importo abbuono, Riga assegnazione]

L'importo dell'abbuono non può essere superiore alla quota da assegnare e da liquidare.

- **Abbuono SID:** se si vuole chiudere solo una parte della fattura ed indicando l'importo da chiudere.
- **Abbuono CH:** se si vuole chiudere totalmente il documento o la parte rimasta aperta; in automatico la procedura proporrà la parte rimasta aperta.

Nel caso di inserimento dell'abbuono dopo aver scelto Azione in PCC occorre valorizzare la casella **Importo abbuono** e **Riga assegnazione**.

**La novità, in entrambi i casi, riguarda l'assegnazione:** se la fattura ha una o più assegnazioni, non sarà più necessario diminuirle o eliminarle prima di fare l'abbuono ma indicando la riga dell'assegnazione nel campo apposito e salvando l'abbuono verrà creato uno storno dell'importo indicato.

[Schermata: Finestra Abbuoni/PCC con Tipo Azione "Abbuono", Azione PCC "CH: Chiusura", Importo abbuono 2.281,78, Riga assegnazione 1]

Inserendo la riga assegnazione verrà quindi stornata come si può verificare dalla schermata sotto riportata.

[Schermata: Tab "Assegnazione" con due righe: Riga 1 "Movimento stornato" (Importo 2.281,78 / 87,76) e Riga 2 "Movimento di storno" (Importo -2.281,78 / -87,76)]

La comunicazione alla PCC di una somma non liquidabile a fronte di un documento residuo incide sullo stock del debito dell'esercizio precedente indipendentemente dalla data di invio.

Ad esempio, se a fronte di un documento emesso e ricevuto nel corso del 2019, si comunica nel corso del 2020 un abbuono, questo ha effetto anche sullo stock del debito 2019 (si ricorda che il calcolo dello stock viene aggiornato ogni sette giorni).

### 1.3.2 Inserimento sospensioni

La sospensione di un documento può essere effettuata al verificarsi di una delle seguenti condizioni:

- Contenzioso
- Contestazione
- Verifica adempimenti normativi (verifica regolarità durc, etc…)

[Schermata: Finestra "Abbuoni/PCC" con Tipo Azione "Sospensione", Azione PCC "SID: Sospensioni e abbuoni parziali", campo "Sospeso per", "Importo sospeso", "Data inizio sosp.", "Data fine sosp."]

L'inserimento della sospensione in CWOL **deve essere effettuato sempre dalla tab Abbuoni/PCC** come visto prima in gestione abbuoni. Al momento dell'inserimento della sospensione occorre indicare:

- **Tipo Azione:** Sospensione
- **Azione PCC:** SID Sospensione e abbuoni parziali
- **Motivo sospensione:** Sospeso per…
- **Importo sospeso:** al max per l'importo imponibile
- **Data inizio sospensione**
- **Data fine sospensione** se conosciuta

### 1.3.3 Modifica abbuoni o sospensioni

Se si deve modificare l'abbuono o la sospensione **non è possibile in CWOL modificarne una già inserita** ma occorre eliminare quella già presente e rinserirla nuovamente secondo le caratteristiche corrette.

### 1.3.4 Invio flusso in area RGS

La modifica dei flussi da inviare presso l'Area RGS si è resa necessaria a causa delle novità normative vigenti ed è conforme al dettato delle nuove regole tecniche come già indicato al paragrafo 1.2.

Per generare il flusso da inviare in area RGS occorre andare nella seguente voce del Menù:

**180. Servizi Economici → 10. Finanziaria → 60. Monitoraggio Debiti e PCC → 40. Comun. Oper. Su Fatture a PCC/Mod. Gestione Importi Documenti**

[Schermata: Percorso menu evidenziato]

Cliccare innanzitutto il bottone **Applica filtri** dopo aver valorizzato la data.

A questo punto avremo l'elenco dei documenti da inviare e dei documenti scartati. Andando nella tab **documenti scartati** è possibile visualizzarli e verificare il motivo dello scarto attraverso la colonna **Vis.errori**.

Nel caso i documenti scartati devono essere effettivamente esclusi dal flusso si può procedere attraverso il bottone **Genera flusso CSV** mentre se sono anche essi da inviare occorre procedere alla sistemazione degli errori e poi rigenerare il flusso.

[Schermata: Scheda "Comun.Oper. Su Fatture a PCC/Mod. Gestione Importi Documenti" con tab "Documenti DA INVIARE" e "Documenti SCARTATI", colonna Vis.errori, bottone "Genera flusso CSV"]

Una volta generato il flusso occorre andare nella seguente voce del menu:

**180. Servizi Economici → 10. Finanziaria → 60. Monitoraggio Debiti e PCC → 60. Storico Flussi inviati alla PCC**

[Schermata: Percorso menu evidenziato]

Dopo di che una volta selezionato il flusso cliccare il bottone **Scarica il flusso**. A questo punto verrà scaricato nel proprio PC il flusso da caricare nell'area RGS.

[Schermata: Scheda "Storico Flussi inviati alla PCC" con elenco flussi, colonna "Esito da RGS", e pulsante "Scarica il flusso" evidenziato]

#### 1.3.4.1 Rilascio implementazioni al software

La modifica è disponibile a partire dalla **release 7.11 su CWOL – patch del 25.01.2023**.