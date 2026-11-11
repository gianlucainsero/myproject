# Elabora Timbrature

Questo programma serve per elaborare i dati immessi all'interno della gestione timbrature. Il programma prende i vari orari delle timbrature per tutto il periodo selezionato per tutti i dipendenti selezionati e calcola le loro timbrature.

Alla sua apertura l'applicativo si presenterà come segue:

[Schermata del programma "Elaborazioni Timbrature" con i campi: Periodo, Servizio, Centro di costo, Dal Giorno, Al Giorno, Dipendente/i, Riassegna, e il pulsante Conferma. In basso è visibile un messaggio arancione "Ultima Elaborazione Automatica: 16/12/2014 alle ore 12:03:05"]

## Periodo

Nel campo **Periodo** va immesso il periodo che si intende elaborare (Es. 01/2014). Il programma proporrà automaticamente il mese e l'anno correnti. In caso che la data odierna sia il 1° del mese, il programma proporrà automaticamente il mese precedente.

## Servizio

Utilizzando il campo **Servizio** sarà possibile scegliere il tipo di servizio che si vorrà elaborare, quindi verranno elaborati solo i dipendenti legati a quel servizio. Per facilitare la ricerca è possibile consultare l'intero elenco dei servizi cliccando sul bottoncino con la lente d'ingrandimento vicino al campo: verrà presentata la lista dei servizi e facendo doppio click sulla riga interessata si inseriranno i dati di tale servizio.

## Centro di Costo

Utilizzando il campo **Centro di Costo** sarà possibile scegliere il centro di costo che si vorrà elaborare. Nella stampa verranno quindi elaborati solo i dipendenti legati a quel centro di costo. Per facilitare la ricerca è possibile consultare l'intero elenco dei centri di costo cliccando sul bottoncino con la lente d'ingrandimento vicino al campo: verrà presentata la lista dei centri di costo e facendo doppio click sulla riga interessata si inseriranno i dati di tale centro di costo.

## Dal giorno / Al giorno

Nei campi **Dal giorno** / **Al giorno** vanno immessi il giorno di partenza dell'elaborazione (Dal Giorno) e il giorno di fine dell'elaborazione (Al giorno). In caso si voglia elaborare tutto il mese si dovranno inserire il primo e l'ultimo giorno del mese.

Il programma proporrà automaticamente:

- Nel campo **Dal giorno**: il primo giorno del mese
- Nel campo **Al giorno**: il giorno precedente alla data odierna

In caso che la data odierna sia il 1° del mese, il programma proporrà:

- Nel campo **Dal giorno**: il primo del mese precedente
- Nel campo **Al giorno**: l'ultimo del mese precedente

## Dipendente/i

Nel campo **Dipendente/i** sarà possibile scegliere quali dipendenti elaborare. Se non si inserisce nulla, verranno elaborati tutti i dipendenti. Per facilitare la ricerca è possibile consultare l'intero elenco dei dipendenti cliccando sul bottoncino con la lente d'ingrandimento vicino al campo: verrà presentata la lista dei dipendenti e facendo doppio click sulla riga interessata si inseriranno i dati di tale dipendente.

## Riassegna

Mettendo la spunta nel campo **Riassegna**, il programma riassegnerà il profilo orario se la causale generale risulterà = `001`.

## Conferma

Per avviare l'operazione basterà cliccare sul pulsante **Conferma**.