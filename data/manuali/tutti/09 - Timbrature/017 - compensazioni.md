# Anagrafica Compensazioni

Questo programma serve per gestire l'anagrafica delle Compensazioni.

Alla sua apertura l'applicativo si presenterà come segue:

[Schermata principale dell'Anagrafica Compensazioni: campo "Codice", campo "Descrizione", pulsanti "F2-Nuovo", "F4-Elenca" e "Duplica"]

Da qui sarà possibile:

1. **Cercare** una compensazione
2. **Inserire** una nuova compensazione
3. **Elencare** tutte le compensazioni esistenti
4. **Duplicare** una compensazione già esistente in un'altra

## Cercare una compensazione

Per **Cercare** una causale basterà inserire il codice nel campo **Codice** e premere il pulsante **Invio**. Se la causale esiste otterremo una schermata simile alla seguente:

[Schermata di ricerca compensazione: campo "Codice" con valore "1", campo "Descrizione" con valore "COMPENSAZIONI NORMALI", due colonne "Causale Assenza" e "Causali Straordin." con elenchi di codici e descrizioni (es. 040 - MIN. IN - SU FLES., 201 - ORE IN MENO, 048 - MIN. IN + SU FLESS., 200 - ORE IN PIU'), pulsanti "F6-Aggiorna", "F7-Cancella", "F3-Altra Ricerca" e "Blocca Compensazione"]

Da qui sarà possibile:

1. **Modificare** i dati della compensazione cercata e salvarli cliccando il bottone **Aggiorna**
2. **Cancellare** la compensazione cliccando sul bottone **Cancella**
3. **Tornare** alla schermata principale cliccando sul bottone **Altra Ricerca**
4. **Bloccare o Sbloccare** la compensazione cliccando sul bottone **Blocca/Sblocca Compensazione**

## Inserire una nuova compensazione

Per **Inserire** una nuova compensazione basterà cliccare sul bottone **Nuovo** nella schermata principale ottenendo la seguente schermata:

[Schermata di inserimento nuova compensazione: campo "Codice" con valore "3", campo "Descrizione" vuoto, due colonne "Causale Assenza" e "Causale Straordin." con campi vuoti, pulsanti "F5-Aggiorna" e "F3-Altra Ricerca"]

Da qui sarà possibile:

1. **Inserire** una nuova compensazione inserendone i dati e completando l'operazione cliccando sul bottone **Aggiorna**
2. **Tornare** alla schermata principale cliccando sul bottone **Altra Ricerca**

## Elencare tutte le compensazioni

Per **Elencare** tutte le compensazioni inserite basterà cliccare il bottone **Elenca** nella schermata principale ottenendo la seguente risposta:

[Finestra di dialogo "Scegli il tipo di Ricerca" con quattro pulsanti: "Non Bloccate" (1), "Solo Bloccate" (2), "Tutte" (3), "Annulla" (4)]

Premendo su ogni bottone otterremo un tipo diverso di elencazione:

1. Verranno elencati solo le compensazioni **non bloccate**
2. Verranno elencati solo le compensazioni **bloccate**
3. Verranno elencate **tutte** le compensazioni
4. Annullerà l'elencazione delle compensazioni tornando alla schermata principale

Per qualsiasi scelta otterremo la seguente schermata:

[Schermata "Ricerca Compensazioni": tabella con colonne "Codice" e "Descrizione" (es. 1 - COMPENSAZIONI NORMALI, 10 - TABELLA 10, 6 - PROVA COMP., 2 - PROVA TAB COMP), pulsanti "F2-Nuovo" e "F3-Altra Ricerca", barra inferiore con 10 icone di funzionalità e navigazione paginazione "Pagina 1 di 9", "Visualizzati 1 - 4 di 4"]

Basterà fare **Doppio click** sopra una compensazione per andare a vedere i suoi dati ottenendo una schermata simile a quella di ricerca.

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

1. **Inserire** una nuova compensazione cliccando sul bottone **Nuovo**
2. **Tornare** alla schermata principale cliccando sul bottone **Altra Ricerca**

## Duplicare una compensazione

Per **Duplicare** una compensazione basterà cliccare il bottone **Duplica** nella schermata principale, ottenendo la seguente schermata:

[Finestra di dialogo "Duplica Compensazione" con campi: "Codice compensazione da duplicare", "Codice nuova compensazione" (valore predefinito "3"), "Descrizione", pulsanti "Conferma" e "Annulla"]

Nel campo **Codice compensazione da duplicare** và immesso il codice della compensazione che intendiamo duplicare.

Nel campo **Codice nuova compensazione** và immesso il codice della nuova compensazione che otterrà i dati della compensazione con il codice presente nel campo precedente. Il programma inserisce automaticamente il primo codice disponibile che trova, ma è possibile inserire il codice manualmente.

Nel campo **Descrizione** và la descrizione della nuova compensazione.

Per completare l'operazione cliccare sul bottone **Conferma**.