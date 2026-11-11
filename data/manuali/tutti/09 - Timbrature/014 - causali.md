# Anagrafica Causali

Questo programma serve per gestire l'anagrafica delle Causali.

Alla sua apertura l'applicativo si presenterà come segue:

[Schermata principale dell'Anagrafica Causali: campo "Codice", campo "Descrizione", sezione "Ricerca Particolare" con opzioni radio (Causale di Retribuzione, Causale di Straordinario, Segnala in Visualizzazione, Causale di richiesta autorizzazioni (Web), Causale di Assenza), pulsanti F2-Nuovo, F4-Elenca, Elenca codici liberi]

Da qui sarà possibile:

1. **Cercare** una causale
2. **Inserire** una nuova causale
3. **Elencare** tutte le causali esistenti
4. **Elencare** tutti i codici liberi esistenti

Per **Cercare** una causale basterà inserire il codice nel campo **Codice** e premere il pulsante **Invio**. Se la causale non esiste verrà visualizzato un messaggio d'errore, se la causale esiste otterremo una schermata simile alla seguente:

[Schermata di dettaglio causale con campi: Codice, Descrizione, Gruppo, Minuti di partenza Minima, Minuti di incremento, Arrotondamento per eccesso, Massimale, Causale di Retribuzione, Causale di Straordinario, Rileva Festività e Domeniche, Indica ore in caso di Timbrature, Causale in caso di Festività, Causale in caso di Domenica, Azzera causali per festività, Causale su cui accumulare, Azzeramento di questa causale, Divisore causale, Non sommare all'ordinario in compens., Segnala in Visualizzazione, Causale su cui scaricare l'arrotond., Codice per registro presenze, Codice voce per procedura paghe, Scaricare su procedura paghe, Codice causale INPS, Stampare su carta, Massimale annuale in minuti, Codice voce su cui scaricare, Prima fascia di controllo in minuti, Seconda fascia di controllo in minuti, Azzera causale nella chiusura anno, Nuova causale in chiusura, Causale di richiesta autorizzazioni (Web), Usata, NON inserire causale nelle Timbrature, Causale con richiesta di Giustificativo, Formula, Tipo di assenza. Pulsanti: F6-Aggiorna, F7-Cancella, F3-Altra Ricerca, Duplica, Blocca Causale]

Da qui sarà possibile:

1. **Modificare** i dati della causale cercata e salvarli cliccando il bottone **Aggiorna**
2. **Cancellare** la causale cliccando sul bottone **Cancella**
3. **Tornare** alla schermata principale cliccando sul bottone **Altra Ricerca**
4. **Duplicare** la causale cliccando sul bottone **Duplica**
5. **Bloccare o Sbloccare** la causale cliccando sul bottone **Blocca/Sblocca Causale**

## Duplicare una Causale

Nel caso si decida di duplicare una causale cliccando sul bottone **Duplica** otterremo la seguente schermata:

[Finestra di dialogo "Duplica Causale" con campi Codice (precompilato con il primo codice libero, es. 39) e Descrizione, pulsanti Conferma e Annulla]

- Nel campo **Codice** va inserito il codice della nuova causale. Il programma propone automaticamente il primo codice libero che trova ma è possibile immettere il codice manualmente.
- Nel campo **Descrizione** va inserita la descrizione della nuova causale.

Cliccando sul bottone **Conferma** otterremo una schermata uguale alla precedente ma con il campo **Codice** e il campo **Descrizione** equivalenti a quelli scelti; tutti gli altri dati saranno equivalenti alla causale che abbiamo duplicato. Per completare l'operazione di duplicazione e inserimento della nuova causale premere sul bottone **Aggiungi**.

## Inserire una Nuova Causale

Per **Inserire** una nuova causale basterà cliccare sul bottone **Nuovo** nella schermata principale ottenendo la seguente schermata:

[Schermata di inserimento nuova causale con tutti i campi: Codice, Descrizione, Gruppo, Minuti di partenza Minima, Minuti di incremento, Arrotondamento per eccesso, Massimale, Causale di Retribuzione, Causale di Straordinario, Rileva Festività e Domeniche, Indica ore in caso di Timbrature, Causale in caso di Festività, Causale in caso di Domenica, Azzera causali per festività, Causale su cui accumulare, Azzeramento di questa causale, Divisore causale, Non sommare all'ordinario in compens., Segnala in Visualizzazione, Causale su cui scaricare l'arrotond., Codice per registro presenze, Codice voce per procedura paghe, Scaricare su procedura paghe, Codice causale INPS, Stampare su carta, Massimale annuale in minuti, Codice voce su cui scaricare, Prima fascia di controllo in minuti, Seconda fascia di controllo in minuti, Azzera causale nella chiusura anno, Nuova causale in chiusura, Causale di richiesta autorizzazioni (Web), Usata, NON inserire causale nelle Timbrature, Causale con richiesta di Giustificativo, Formula, Tipo di assenza. Pulsanti: F5-Aggiungi, F3-Altra Ricerca]

Da qui sarà possibile:

1. **Inserire** una nuova causale inserendone i dati e completando l'operazione cliccando sul bottone **Aggiungi**
2. **Tornare** alla schermata principale cliccando sul bottone **Altra Ricerca**

## Elencare Tutte le Causali

Per **Elencare** tutte le causali basterà cliccare sul bottone **Elenca** nella schermata principale ottenendo la seguente schermata:

[Finestra di dialogo "Scegli il tipo di Ricerca" con pulsanti: Non Bloccate (1), Solo Bloccate (2), Tutte (3), Annulla (4)]

Premendo su ogni bottone otterremo un tipo diverso di elencazione:

1. **Non Bloccate**: verranno elencati solo le causali non bloccate
2. **Solo Bloccate**: verranno elencati solo le causali bloccate
3. **Tutte**: verranno elencati tutte le causali
4. **Annulla**: annullerà l'elencazione delle causali tornando alla schermata principale

## Ricerche Particolari

Sarà anche possibile scegliere di effettuare delle elencazioni particolari selezionando una delle voci tra quelle elencate nelle **"Ricerche particolari"** nella schermata principale:

1. **Causale di Retribuzione**: permetterà l'elencazione solo delle causali di retribuzione
2. **Causale di Straordinario**: permetterà l'elencazione solo delle causali di straordinario
3. **Segnala in Visualizzazione**: permetterà l'elencazione solo delle causali che hanno il campo Segnala in visualizzazione differente da No
4. **Causale di richiesta autorizzazioni (Web)**: permetterà l'elencazione solo delle causali per la richiesta di autorizzazioni
5. **Causale di Assenza**: permetterà l'elencazione solo delle causali di assenza

Una volta messa la spunta su una di queste ricerche (si può effettuare l'elencazione anche senza aver scelto una "Ricerca particolare") basterà cliccare sul bottone **Elenca**. Per qualsiasi tipo di elencazione otterremo una schermata simile alla seguente:

[Schermata di elencazione causali con tabella contenente colonne "Codice" e "Descrizione" (es. 001 LAV.ORD., 002 FESTIVITA', 003 S.PATRONE, 004 FERIE, 016 CONGEDO STRAORDINARIO DUE ANNI, 017 fest.Festiva', 018 CONC. GIUDICE POPOLARE, 019 VISITA MEDICA, 020 DONAZIONE SANGUE, 021 CONCORSI ED ESAMI, 022 MALATTIA, 023 INFORTUNIO). Pulsanti a destra: F2-Nuovo, F3-Altra Ricerca. Pulsanti in basso numerati da 1 a 10 per le operazioni sulla tabella. Indicatore di pagina: Pagina 1 di 9, Visualizzati 1-23 di 72]

Basterà fare **Doppio click** sopra una causale per andare a vedere i suoi dati ottenendo una schermata simile a quella di ricerca.

## Operazioni sulla Tabella di Elencazione

Alla fine della tabella è presente una serie di bottoni che svolgono diverse funzionalità:

1. Permette di **modificare** la riga selezionata
2. Permette di **eliminare** la riga selezionata
3. **Esporta** la tabella su un file Excel
4. **Stampa** la tabella
5. **Ricarica** la tabella (Refresh)
6. Permette di decidere **quali colonne visualizzare** sulla tabella
7. Permette di tornare alla **prima pagina** della tabella
8. Permette di tornare alla **pagina precedente** della tabella
9. Permette di andare alla **pagina successiva** della tabella
10. Permette di andare all'**ultima pagina** della tabella

Da qui sarà anche possibile:

1. **Inserire** una nuova causale cliccando sul bottone **Nuovo**
2. **Tornare** alla schermata principale cliccando sul bottone **Altra Ricerca**

## Elencare i Codici Liberi

Per **Elencare i codici Liberi** basterà cliccare il bottone **Elenca Codici Liberi** nella schermata principale ottenendo la seguente schermata:

[Schermata "Codici Liberi" con tabella contenente colonna "Codice" con valori numerici (42, 43, 46, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 70, 71, 72, 73, 74, 75, 76, 79, 80...). Pulsanti a destra: F2-Nuovo, F3-Altra Ricerca. Indicatore di pagina: Pagina 1 di 41]

Da qui sarà possibile:

1. **Inserire** una nuova causale cliccando sul bottone **Nuovo**
2. **Inserire** una nuova causale facendo doppio click su uno dei codici elencati
3. **Tornare** alla schermata principale cliccando sul bottone **Altra Ricerca**