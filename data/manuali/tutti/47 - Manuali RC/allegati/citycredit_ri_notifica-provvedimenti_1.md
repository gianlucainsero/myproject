# CITYCREDIT – Manuale Operativo

## Gestione del secondo tentativo di Notifica

Gli Atti che hanno avuto un esito di Notifica Negativo, registrato a Sistema, possono essere trattati in CityCredit per un secondo tentativo di Notifica.

Di seguito viene descritta l'operatività di processo, con i vari richiami alla Manualistica cogente:

---

## A. Elenco Provvedimenti

[Schermata: Pannello di selezione "CITY-CREDIT Elenco Provvedimenti" con campi: Flusso, Elaborazione, Tipo Provvedimento, Tipo Documento, Esito Creditore, Pubblicazione, Data Provvedimento (da/a), Numero Provvedimento (da/a), Id. Provvedimento (da/a), Data Notifica (da/a), Data Pagamento (da/a), spunta "Senza notifica", sezione "Parametri per Aggiornamento" con "Esegui Aggiornamento: No/Sì", "Pubblicazione", spunta "Esporta automaticamente i Risultati in formato Excel", "Path Export", pulsante "Stampa"]

Dal presente pannello di selezione, è possibile estrapolare distintamente l'elenco dei:

1. **Tipo Notifica = 0** – Mai Tentata Notifica (Spuntare i 'Senza Notifica' senza altre selezioni)
2. **Tipo Notifica = 1** – Notifiche Positive (indicare il range di date esito Notifica lasciando vuota la spunta 'Senza Notifica')
3. **Tipo Notifica = 2** – Tentata Notifica Negativa (Spuntare i 'Senza Notifica' e indicare il range di date esito Notifica Negativa)

Seppur, in questo modo si semplificano le elaborazioni e si ottengono direttamente le porzioni di dati necessarie, si consiglia sempre un'estrapolazione massima per Flusso, così da poter organizzare e presidiare l'attività di ripresa della Notifica di atti con precedente esito negativo.

L'elenco dei provvedimenti presenterà il dettaglio delle posizioni in base alle selezioni poste in combinazione.

---

## B. Rivestizione Anagrafica

L'intero elenco delle Matricole ottenuto con la funzione sopra esposta (Selezione numero 3), in questo caso per totale dei flussi, verrà fornito alla funzione di **Aggiornamento Anagrafiche tramite SIATEL**.

[Schermata: Interfaccia Cityware con menu contestuale "Rivestizione Anagrafica" e opzioni: Invio Flussi Richiesti SIATEL, Gestione Flussi Richiesti SIATEL, Recupero Flussi Richiesti SIATEL, Gestione Flussi Risposta SIATEL, Conferma Flussi Richiesti con Dati SIATEL, Invio Flussi Richiesti con Dati SIATEL, Recupero Flussi Risposta SIATEL, Aggiornamento Anagrafiche, Gestione Flussi di Notifica non parametrati, Esito Flussi di Notifica, Aggiornamento Flussi ADEMP Risposta, Svuotamento Archivio Flussi di Notifica]

L'operatività standard deputata alle Rivestizioni Anagrafiche tramite SIATEL è rimandata all'apposito Manuale, già reso disponibile a Menù di Cityware:

> **MANUALE – Gestione interrogazioni massive**

Unico elemento da sottolineare riguarda il fatto che:

- L'invio a SIATEL può essere effettuato per l'intero elenco delle Matricole estrapolate;
- La rivestizione anagrafica in rientro da SIATEL verrà effettuata **solamente per le Anagrafiche NON Residenti**.

Questo perché l'anagrafe residenti in capo all'Ente viene aggiornata continuamente dall'Ufficio Anagrafe ed è quindi indubbiamente di miglior qualità rispetto a Punto Fisco.

---

## C. Rinotifica Provvedimenti

[Schermata: Finestra "CITY-CREDIT Rinotifica Provvedimenti" con campi: Flusso, Elaborazione, Matricole precaricate, Codifica testo, spunta "Interessi Aggiuntivi", pulsante "Elabora". Note: "Se non richiesti interessi agg. il programma risolve ed inserisce un nuovo testo per tutti i provv. in attesa di notifica da almeno 60 giorni e che sono allo stato 1. Il vecchio testo viene disabilitato e viene escluso nelle stampe. Se richiesti interessi aggiuntivi, viene eseguita la nuova pubblicazione e cancellati i bollettini. Di conseguenza i provvedimenti saranno di nuovo pubblicabili con l'importo ricalcolato."]

La funzione si attiva **obbligatoriamente per singolo Flusso o Elaborazione**, poiché la ristampa aggiornata dei provvedimenti richiede il testo correlato all'atto che si sta tentando di rinotificare.

Si procede quindi con l'estrazione dell'elenco Matricole precaricate, ottenuto con la funzione esposta al punto **A** (Selezione numero 3).

Di questo elenco Matricole precaricate, la suddetta funzione effettua la **Rigenerazione e stampa dei Provvedimenti attualizzata**, attraverso i seguenti passaggi automatici e massivi:

- Aggiornamento del Provvedimento, con gli interessi aggiuntivi fino alla data
- Creazione del nuovo Invio a Notifica
- Disabilitazione del vecchio testo utilizzato per il primo tentativo di notifica
- Cancellazione della pubblicazione PAGOPA precedentemente effettuata
- Cancellazione del vecchio bollettino PAGOPA
- Prenotazione automatica per la nuova pubblicazione

Per ogni Matricola in elenco, il Sistema verifica se è intervenuto l'**aggiornamento della Residenza successivamente al precedente tentativo di Notifica** (potrebbe essere intervenuto da SIATEL o da anagrafe residenti) e in tal caso procede con l'operatività automatica sopra descritta.

La nuova pubblicazione PAGOPA interviene con la **schedulazione automatica della prima notte utile**.

A fine elaborazione, esce un **prospetto Excel, da conservare**, che contiene il riepilogo dell'elaborazione, e distingue:

1. **Elenco dei Provvedimenti rigenerati** per il secondo tentativo di Notifica
2. **Elenco dei Provvedimenti non rigenerati** per rinotifica, perché non risulta alcuna variazione della residenza rispetto alla data del precedente esito negativo

I **provvedimenti rigenerati** potranno essere stampati massivamente con l'apposita funzione, successivamente all'avvenuta pubblicazione PAGOPA.

I **provvedimenti non rigenerati** saranno riscontrabili in elenco, poiché conterranno la causale sulle NOTE: `'Residenza non variata'`. Su queste posizioni, l'Ente avrà la possibilità di avviare i necessari approfondimenti, attraverso sopralluoghi o quant'altro ritenuto opportuno da mettere puntualmente in campo per chiarificare le specifiche situazioni in essere, che impediscono temporaneamente il proseguimento della Riscossione forzata.

La gestione degli esiti delle ritentate Notifiche, rimane invariata nonché analoga alla medesima attuata per gli esiti del primo tentativo di notifica.