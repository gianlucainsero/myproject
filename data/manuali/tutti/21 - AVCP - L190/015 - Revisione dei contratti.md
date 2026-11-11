# Revisione dei contratti

Gli aggiornamenti che, a norma di quanto indicato dall'ex AVCP ora ANAC, devono essere esportati e pubblicati nel flusso XML secondo le specifiche della L. 190/2012 sono:

- **Le procedure di scelta del contraente (i c.d. contratti) indette nell'anno solare precedente.** In questa categoria devono rientrare tutte quelle procedure che sono state avviate nell'anno; ovviamente a seconda dei casi alcune sezioni potrebbero non essere compilate. (ad es. una procedura avviata al 31/12 non avrà sicuramente la sezione "Aggiudicatari")

- **Le procedure di scelta del contraente che hanno subito un aggiornamento rispetto alla precedente pubblicazione.** In questo caso, rientrano quelle attività che hanno dato seguito o concluso un contratto pubblicato nel flusso esportato ad esempio nel 2015 (riferito quindi al 2014) e che nel corso del 2015 è stato liquidato.

E' importante precisare che la pubblicazione del flusso XML **non va a cancellare quello pubblicato in precedenza**.

La nuova pubblicazione (xml del 2016) conterrà quindi tutti i contratti che hanno avuto inizio nell'anno solare precedente (2015) e gli aggiornamenti di contratti pubblicati nel precedente flusso (xml del 2015).

## Creazione di una revisione del contratto per l'aggiornamento

Questa modalità prevede la creazione di una "copia" del contratto dall'anno precedente a quello attuale, che poi potrà essere aggiornata. Le modifiche andranno quindi applicate solo sulla copia dell'anno corrente e non sull'originale.

Le varie revisioni vengono distinte in base all'anno di riferimento riportato nel contratto.

Per generare una revisione, è sufficiente aprire in modifica un contratto (simbolo MATITA).

[Schermata: Finestra "Raccolta" con campi: Ufficio, Titolo, Abstract, Data prima pubb., Ente pubblicatore, Data ultimo agg., Anno, Licenza, note. In basso a destra i pulsanti "Aggiorna", "Crea revisione" ed "Elenco revisioni"]

Per visualizzare tutte le revisioni del contratto selezionare **"ELENCO REVISIONI"**.

Per generare una nuova revisione è sufficiente premere sulla voce **"Crea revisione"**.

[Schermata: Finestra "Crea revisione raccolta" con campo "Anno" (es. 2022) e due opzioni: "Crea revisione (Duplica solo la Raccolta senza Lotti)" e "Crea e duplica (Duplica la Raccolta e tutti i Lotti)", oltre al pulsante "Annulla"]

Il sistema può generare una copia della raccolta/contratto nell'anno corrente e copiare anche di tutti gli elementi ad esso associati (Lotti, soggetti partecipanti e aggiudicatari) oppure duplicare solo la raccolta/contratto.

La duplicazione della sola raccolta/contratto viene solitamente utilizzata quando ad essa sono associati tanti lotti, ma solo uno di questi ha subito aggiornamenti rispetto alla precedente pubblicazione (l'utente velocizza il lavoro non dovendo eliminare i restanti contratti che non hanno avuto aggiornamenti).

> **ATTENZIONE:** la revisione viene associata con l'**anno corrente**. Si raccomanda di verificare ed eventualmente modificare l'anno di riferimento.

E' importante ricordare che la procedura di generazione del flusso XML da pubblicare, seleziona ed esporta i contratti sulla base dell'anno di riferimento. Nel caso in cui si effettui un aggiornamento dei dati, **dovrà essere modificato necessariamente l'anno di riferimento**.

E' da precisare che l'utilizzo di questa modalità (creazione della revisione del contratto) **NON E' OBBLIGATORIA** in quanto l'Ente può tranquillamente procedere all'aggiornamento dei contratti pubblicati nel 2013, senza gestire le revisioni.

## Sovrascrittura del flusso XML

Nella fase di esportazione del flusso XML, è stato introdotto un controllo che verifica se, per una certa annualità il flusso XML è già stato generato.

In questo caso, per consentire la sovrascrittura del vecchio flusso, è necessario selezionare la **"Sovrascrivi flusso XML"**, indicando la voce **"si, sovrascrivi flusso"**.

[Schermata: Interfaccia "DEMO LAVORI PUBBLICI" con menu laterale (Home, Impostazioni, Raccolte correnti, Validazione contratti, Report esportazione, Esporta XML ANAC). Pannello centrale con "Parametri Esportazione" contenente: Data prima pubblicazione dell'indice, Imposta Data prima pubblicazione indice, Data di pubblicazione dell'indice, Imposta Data ultimo aggiornamento indice, Data di pubblicazione dell'indice, Esporta raccolte in unico dataset?, Pubblicare il CF nei file esportati?. A destra, riquadro rosso "Sovrascrivere flusso esistente?" con menu a tendina e pulsanti "GENERA XML L.190" e "ABILITA AUTO EXPORT". In basso, messaggio di attenzione: "Flusso già presente per l'anno selezionato. Confermare la sovrascrittura"]