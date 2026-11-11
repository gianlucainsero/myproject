# Gestione Rendicontazioni Periodiche

La Funzione attiva sempre una pagina di riepilogo, che elenca le Rendicontazioni per periodo, in ordine decrescente (il primo rigo espone il Periodo in corso).

[Schermata: Elenco Rendicontazioni Periodiche con colonne Anno, Periodo, Data Scadenza, Data Rendicontazione, Dovuto, Numero Documento, Pagato, Data Pagamento, Contabile, Status e pulsanti "Genera Rendicontazione" / "Completa Rendicontazione"]

Vengono elencati tutti i Periodi di Rendicontazione/Versamento, correlati alle date ufficiali di apertura della Struttura e nell'ordine è possibile procedere con:

## A. La GENERAZIONE della Rendicontazione del periodo

Il Sistema considera appartenenti al periodo di Rendicontazione, tutti i Soggiorni che **hanno data Check-Out che ricade nel periodo**, presupponendoli già trascorsi e ormai consolidati e quindi riscossi dall'Esercente.

Potrebbero a questo punto, esistere alcuni Soggiorni del periodo, non ancora portati in Status di Check-Out; il Sistema se ne accorge ed attiva la seguente segnalazione, propedeutica alla Rendicontazione:

[Schermata: Pop-up "Chiusura dei Soggiorni" con elenco dei soggiorni non chiusi e pulsanti "Esci" e "Forza Chiusura"]

Attraverso il bottone di **'Forza Chiusura'**, si procede d'ufficio con l'aggiornamento/consolidamento dei Soggiorni, così da poter proseguire direttamente con la fase di conferma della Rendicontazione.

---

Attraverso il bottone **Genera Rendicontazione**, è possibile richiedere al Portale di effettuare il conteggio dell'Imposta del periodo e predisporre il documento di Rendicontazione e Versamento.

Ne consegue un riepilogo generale dei pernottamenti degli ospiti, raggruppato per 'Numero Notti', seguito dal dettaglio delle Esenzioni/Riduzioni o Rifiuti da decurtare:

[Schermata: Riepilogo dei Pernottamenti con colonne Numero Notti, Numero Ospiti, Importo]

[Schermata: Dettaglio Esenzioni/Riduzioni con colonne Esenzione/Riduzione, Numero Notti, Numero Ospiti, Importo, e pop-up "Dettaglio Esenzione" con elenco dei singoli soggiorni esentati]

Il Sistema estrae tutti i Soggiorni aventi **Data-Check-Out compresa nel periodo** e pertanto, **se un Soggiorno inizia nel periodo ma si conclude nel successivo, verrà rendicontato con la Rendicontazione del periodo successivo.**

A seguire, nella parte bassa della pagina, viene enunciato l'**Estratto Conto Finale del Periodo**, che espone i tre precedenti riquadri **in somma algebrica** e determina quindi l'importo dell'Imposta di Soggiorno da versare nel periodo:

[Schermata: Estratto Conto del Periodo con righe: Totale Pernottamenti, Totale Esenzioni/Riduzioni, Totale Rifiuti, TOTALE GENERALE e pulsante "Conferma Dichiarazione"]

---

## Verifica del dettaglio dei Soggiorni

Nel caso di differenze da approfondire rispetto alle risultanze dell'Esercente, **prima di procedere con la Conferma**, è possibile risalire al dettaglio dei singoli Soggiorni registrati, attraverso il bottone **Export Soggiorni** disponibile in alto a dx, all'interno della pagina 'Gestione Check-in'.

Ne consegue la pagina di seguito descritta:

[Schermata: Elenco Periodi con colonne Numero, Periodo, Descrizione, Anno e pulsante "Seleziona" per ogni riga]

Attraverso il bottone **Seleziona** è possibile ottenere direttamente un elenco Excel con il dettaglio dei Soggiorni registrati nel periodo:

[Schermata: Foglio Excel con colonne Soggiorno, Provenienza, Checkin, Checkout, Giorni, Tariffa, Imposta C.Esenzione/Causale, Imposta P.Ricevute, Cognome, Nome, Codice Posizione, Numero Dichiarazione, Data Inserimento]

L'elenco Excel, ordinabile secondo necessità, permette di riscontrare il dettaglio degli Ospiti e l'imposta applicata ad ogni Ospite, che verrebbero inclusi sulla Rendicontazione del periodo.

Procedendo con il bottone **Conferma Dichiarazione** si consolida il Calcolo e la Rendicontazione del periodo.

Il percorso guidato prosegue digitando il bottone di seguito evidenziato:

[Schermata: Elenco Dichiarazioni con status "Confermata" e pulsante "Completa Rendicontazione" evidenziato]

---

## B. Versamento dell'Imposta

Si apre nuovamente la pagina dei riepiloghi e in fondo si accendono i bottoni sotto rappresentati:

[Schermata: Estratto Conto del Periodo con pulsanti "Paga" e "Invia Dichiarazione"]

Il passaggio successivo è il Versamento dell'Imposta, attraverso l'omonimo bottone **PAGA** esposto nella figura sopra.

Digitando il bottone PAGA, il Sistema propone le modalità di pagamento possibili:

[Schermata: Pop-up "Modalità di Pagamento" con pulsanti "Esci", "F24" e "pagoPA"]

### Pagamento tramite F24

Selezionando il bottone **F24**, è possibile avvalersi di un Modello F24 precompilato, ad uso di un pagamento standard c/o Poste o Banca, o ad uso di un pagamento Online immediato, attraverso il proprio Home Banking.

[Schermata: Modello F24 precompilato con dati del contribuente, codice fiscale, sezione EL, codice tributo 3916, anno 2023, mese 01, importo a debito versare 159,00]

### Pagamento tramite PAGOPA

Selezionando il bottone **PAGOPA**, il Sistema attiva la chiamata al Nodo nazionale dei pagamenti e pubblica una scadenza di pagamento al **16 del mese successivo**, originando apposito **IUV**, indispensabile al pagamento. Sempre all'interno dello stesso automatismo, il Sistema produce e pone in stampa il **Bollettino PAGOPA** arrecante lo IUV pubblicato e tutti i dati di pagamento, ad uso dell'Esercente in qualsiasi Sportello abilitato.

[Schermata: Avviso di Pagamento PAGOPA con dati Ente Creditore, Destinatario, IUV, QR Code, e sezioni "Quanto e quando pagare", "Dove pagare", "Banche e altri canali", "Bollettino Postale PA"]

### Pagamento esterno tramite Bonifico Bancario

E' comunque possibile effettuare un pagamento esterno al Sistema, attraverso **Bonifico Bancario** dell'Importo Confermato sul rendiconto del Periodo.

---

## C. STAMPA del Modello A, di Rendicontazione bimestrale

Solamente **dopo aver effettuato il pagamento**, sarà possibile procedere, attraverso il bottone **Invia Dichiarazione**, con la Stampa della Rendicontazione, secondo il Modello A, ufficiale, che contempla al suo interno anche i dati di pagamento.

In questa fase, propedeuticamente alla Stampa, il Sistema chiederà:

- **Data pagamento;**
- **Numero ricevuta** (in base al tipo di pagamento effettuato);
- **Importo pagato.**

[Schermata: Pop-up "Dati Pagamento" con campi Data Pagamento, Importo Pagato, ID Operazione F24, Codice Avviso pagoPA e pulsante "Inserisci"]

> **Nota:** Si consiglia di inserire tutti i dati del Pagamento richiesti dal Sistema, indicando il **CRO** nel caso di pagamento esterno con Bonifico Bancario.

Dopo aver digitato i dati del pagamento, il Sistema procederà con la funzione di **INVIO/STAMPA** della Rendicontazione e opzionalmente sarà possibile, in base a quanto previsto su Regolamento Comunale:

- **Stampare** il Cartaceo della Rendicontazione, **Firmarlo** e consegnarlo materialmente in Comune;

[Schermata: Pop-up "Funzioni di Invio" con opzioni "Consegna a mano" e "Invio Telematico"]

- **Inviare** la Rendicontazione all'Ente, in modalità **Telematica**, attraverso la semplice mail di Servizio.

In questa modalità, l'Esercente risparmia tempo ed assolve agli obblighi dell'Agente Contabile, utilizzando gli strumenti digitali resi disponibili dall'Ente sul Portale Imposta di Soggiorno.

---

## D. INVIO telematico della Rendicontazione all'Ente

Attraverso il bottone **Invio Telematico** è possibile procedere con l'invio telematico della Rendicontazione all'Ente.

**Non è necessaria alcuna Firma da parte dell'Esercente**, perché l'invio avviene attraverso una funzione autenticata, ove è già nota l'identità digitale del mittente.

Il Sistema registra comunque l'avvenuto Invio e pertanto, in qualsiasi circostanza, ove l'Ente non riscontrasse la Rendicontazione Telematica, il Sistema ne attesterebbe comunque l'Invio, a favore dell'Esercente.