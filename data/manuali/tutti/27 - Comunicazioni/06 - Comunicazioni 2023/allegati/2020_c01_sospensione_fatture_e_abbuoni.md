# Comunicazione n. 01/2020 - Gestione sospensioni e abbuoni su documenti passivi

> **Nota:** La presente comunicazione è stata sostituita dalla Comunicazione n. 03/2023.

**Data:** 02/01/2020

## Scopo della gestione

Il documento illustra le modalità di gestione degli abbuoni e delle sospensioni su documenti passivi.

Per i documenti commerciali entrambe le operazioni riducono il saldo dello stock del debito e vanno comunicate al portale di certificazione crediti con apposito flusso.

## Gestione abbuoni

La gestione degli abbuoni sostituisce la funzione "azzera saldo" e consente di ridurre in parte o totalmente l'importo da liquidare su un documento.

L'inserimento di un movimento di abbuono può essere utilizzato per:

- Chiudere un documento per l'eventuale quota priva di copertura finanziaria
- Chiudere una fattura e la relativa nota di credito nel caso in cui il fornitore non debba inviare altri documenti e non è possibile emettere ordinativo in quanto il saldo dei due documenti è uguale a zero.

L'inserimento di un movimento di abbuono può essere effettuato nel pannello evidenziato nell'immagine.

[Immagine: Pannello documento passivo con tab "Abbuoni/Sospensioni" evidenziato in rosso, contenente campi: Data Registrazione, Tipo Documento, Rilevanza, Anno & Progress, Dati Identificativi, Importo Lordo, Ritenute, Saldo, Fornitore, Dati Identificativi del fornitore, Protocollo, Codici Statistici, Autofattura, Split/Reverse, Tipo Documento Sispe Plus, Sospensione]

È possibile inserire uno o più movimenti di abbuono, ogni movimento viene salvato in apposito archivio per la successiva consultazione e comunicazione alla piattaforma di certificazione dei crediti.

[Immagine: Pannello di inserimento abbuono con campi: Tipo Azione (Abbuono), Data inserimento, Importo Lordo, Assegnato, Altri abbuoni, Saldo da Assegnare, Liquidazione/Pagato, Saldo da Liquidare, Importo abbuono, Note (Motivazione dell'abbuono), pulsanti Conferma e Annulla]

L'importo dell'abbuono non può essere superiore alla quota da assegnare e da liquidare, quindi prima dell'inserimento del movimento si deve eventualmente ridurre il totale dalle assegnazioni e delle liquidazioni.

Gli abbuoni su documenti commerciali vanno comunicati al portale di certificazione crediti come **"somme non liquidabili"** mediante il **modello 3**.

**Non è consentito modificare o cancellare un movimento di abbuono che risulta comunicato alla PCC.**

La comunicazione alla PCC di una somma non liquidabile a fronte di un documento residuo incide sullo stock del debito dell'esercizio precedente indipendentemente dalla data di invio.

Ad esempio, se a fronte di un documento emesso e ricevuto nel corso del 2019, si comunica nel corso del 2020 un abbuono, questo ha effetto anche sullo stock del debito 2019 (si ricorda che il calcolo dello stock viene aggiornato ogni sette giorni).

In fase di creazione della registrazione in contabilità generale e/o in contabilità analitica il movimento viene creato al netto degli importi dell'abbuono.

> A breve sarà rilasciata in CitywareOnline la funzione di creazione del flusso da inviare alla PCC.

## Gestione sospensioni

La sospensione di un documento può essere effettuata al verificarsi di una delle seguenti condizioni:

- Contenzioso
- Contestazione
- Verifica adempimenti normativi (verifica regolarità durc, etc…)

L'inserimento della sospensione può essere effettuato dal pannello principale del documento inserendo il tipo di sospensione e la data di inizio, è possibile inoltre inserire una nota aggiuntiva.

[Immagine: Pannello documento passivo con sezione "Sospensione" evidenziata in rosso, contenente campi: Motivo Sospensione (es. "Contestazione"), Data inizio (es. 20-02-2019), Note (es. "Richiesta nota di credito per errata fatturazione")]

Le sospensioni sui documenti commerciali vanno comunicate al portale di certificazione crediti mediante il **modello 3**.

**Non è consentito rimuovere una sospensione o modificare la data di inizio se questa risulta comunicata alla PCC.**

Nel caso di superamento del motivo di sospensione, è possibile procedere al pagamento della fattura.

Per evitare che la sospensione incida negativamente sull'indicatore di tempestività di pagamento, la PCC ha introdotto un nuovo flusso (**Modello 4**) per comunicare i giorni di sospensione a fronte di fatture sospese e successivamente pagate.

Nella documentazione presente sul portale della PCC viene indicato che i giorni di sospensione vanno calcolati sul periodo che intercorre tra la data di inizio sospensione e la data di emissione del mandato.

In fase di creazione del flusso di comunicazione alla PCC, il programma elenca i pagamenti visualizzando la data di emissione dell'ordinativo, l'operatore può indicare una data diversa (ad esempio la data del decreto di liquidazione) al fine di incidere sul calcolo dell'indicatore di tempestività.

### Esempio di calcolo tempestività pagamento

Se ad esempio si ha un documento con le seguenti caratteristiche:

| # | Voce | Valore |
|---|------|--------|
| 1) | Data ricezione | 05/02/2019 |
| 2) | Data scadenza | 07/03/2019 |
| 3) | Data sospensione | 20/02/2019 |
| 4) | Data pagamento | 10/12/2019 |
| 5) | Giorni dalla scadenza al pagamento (4-2) | 278 |
| 6) | Giorni sospensione (4-3) | 293 |
| | **Tempestività pagamento (5-6)** | **-15** |

Nel caso in cui l'esito del contenzioso o della contestazione sia favorevole all'ente è possibile chiudere il documento mediante un movimento di abbuono da comunicare alla PCC con la modalità descritta nella precedente sezione.

> A breve sarà rilasciata in CitywareOnline la funzione di creazione del flusso da inviare alla PCC.

## Rilascio implementazioni al software

La modifica è disponibile a partire dalla **release 7.05** sulla suite CW – patch del 23.12.2019.