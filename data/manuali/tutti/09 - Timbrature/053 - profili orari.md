# Profili Orari

I profili Orari sono gli orari degli impiegati, ogni tipo di impiegato ha un suo tipo di orario, per configurare questi orari si utilizza questo programma.

Dall'anagrafica profili orari è possibile inserire un nuovo profilo orario, cercarne uno già esistente, elencare tutti i profili orari precedentemente immessi o duplicare un profilo orario già esistente.

Alla sua apertura l'applicativo si presenterà come segue:

[Schermata iniziale dell'anagrafica Profili Orari: campo "Codice", campo "Descrizione", pulsanti a destra "F2-Nuovo", "F4-Elenca", "Duplica"]

Un profilo può essere **cercato** per il suo codice, basterà inserire il codice da ricercare all'interno del suo campo e premere il pulsante **Invio**; da qui verremo portati all'interno del profilo orario ricercato. In caso che non esista nessun profilo con quel codice il programma resterà nella schermata iniziale.

## Inserire un nuovo profilo orario

Per **inserire** un nuovo profilo orario basterà fare click sul bottone **Nuovo**, ottenendo questa schermata:

[Schermata di configurazione nuovo Profilo Orario: campo "Codice" (es. 26), campo "Descrizione", menu a tendina "Giorno" (es. Lunedì), tabella con colonne "Da Ora", "A Ora", "Aut.", "Escl.", "Flessibilità", "Causali", righe multiple per fasce orarie, campi in basso "Ore per Giorno", "Ore per Assenza", "La differenza scarica sulla", "Causale fissa in caso di timbr.", "Causale in caso di assenza", pulsanti a destra "F5-Aggiungi", "F3-Altra ricerca"]

Da qui si **Configura** un Profilo Orario.

Nel caso non si voglia aggiungere un nuovo profilo orario basterà cliccare il bottone **Altra ricerca** nella parte destra del programma, invece per portare a termine l'operazione d'inserimento del nuovo profilo basterà premere il bottone **Aggiungi** nella parte destra del programma, ottenendo così una nuova schermata simile alla precedente ma con nuove funzionalità.

Ora potremo:

- **Aggiornare** il profilo orario dopo averlo modificato
- **Cancellare** il profilo orario
- **Duplicare il giorno corrente**
- Immettere **Altri Dati**
- **Bloccare/Sbloccare** il profilo orario

### Duplicare il giorno corrente

**Duplicare il giorno corrente** permette di velocizzare l'operazione di configurazione del profilo orario. Grazie a questo bottone potremo duplicare il giorno che stiamo configurando (ad esempio Lunedì) all'interno degli altri giorni della settimana a nostra scelta. Questo si rivelerà molto utile in caso di profili orario che presentano giorni della settimana uguali o molto simili tra loro.

> **Es:** l'orario di un impiegato potrebbe essere sempre lo stesso per tutti i giorni lavorativi, quindi basterà configurare 1 solo giorno e duplicarlo in tutti i giorni in cui questo impiegato lavora.

### Altri Dati

**Altri Dati** permette di configurare dei dati aggiuntivi per quel profilo orario; basterà configurare tali dati una sola volta e questi saranno validi per tutto il profilo. Con questo bottone otteniamo la seguente schermata:

[Finestra di dialogo "Altri Dati" con i seguenti campi: Tipo Orario (menu a tendina, es. "Flessibile"), Arrotondamento per fascia (checkbox), Causale ore in Difetto (es. 040 - MIN. IN - SU FLES.), Causale ore in eccesso (es. 048 - MIN. IN + SU FLESS.), Causale ore in eccesso fest. (es. 048 - MIN. IN + SU FLESS.), Segnala compresenza obbligh. (checkbox), Forza mezzanotte (menu a tendina), Causale in caso di fest. (es. 000), Causale per pausa, Tipologia di scarico, Ore da cui partire (es. 0, in min.), Valore della pausa (es. 0), Arrotonda timbrature (checkbox Sì / In Eccesso), Valore in minuti (es. 0), Turno (menu a tendina), Calcola Ind. su Eff. (menu a tendina, es. "Max Fascia"), Controllo terminali (checkbox), pulsante "Conferma"]

Da qui potremo definire:

- Se il profilo sia di tipo **Flessibile** / **non flessibile**, quindi se gode della flessibilità
- Le causali per le ore in **difetto** (le ore che non sono state lavorate) e per le ore in **eccesso** normali e di festività
- La possibilità di **forzare la mezzanotte** (per quegli orari che vanno da un giorno a quello successivo, Es: dalle ore 20:00 alle ore 02:00 del giorno successivo), permettendo l'esatto conteggio nella fase di *Gestione delle timbrature*
- Le causali in caso di **festa** e **pausa**
- Il tipo di **turno** che si sta definendo (notturno, mattutino, pomeridiano, serale)
- Ulteriori parametri di configurazione

## Elencare i profili orari

Per **Elencare** tutti i profili orari già immessi basterà cliccare sul bottone **Elenca**. Ci verrà richiesto quali tipi di orario vogliamo elencare:

[Finestra di dialogo "Scegli il tipo di Ricerca" con pulsanti: "Non Bloccate" (1), "Solo Bloccate" (2), "Tutte" (3), "Annulla" (4)]

Premendo su ogni bottone otterremo un tipo diverso di elencazione:

1. Verranno elencati solo i profili orario **non bloccati**
2. Verranno elencati solo i profili orario **bloccati**
3. Verranno elencati **tutti** i profili orario
4. Annullerà l'elencazione dei profili tornando alla schermata iniziale

Qualsiasi sia la scelta effettuata (tranne annulla) otterremo una schermata simile alla seguente:

[Schermata "Ricerca Profili Orari" con tabella contenente colonne "Codice" e "Descrizione", esempio di righe: 74 - 7,00-13,00 mattino vigili; 84 - 7,30-13,30 mattino vigili; 9 - ASSISTENTE SOCIALE; 12 - BIBLIOTECA; 20 - BIBLIOTECA; 76 - Capi Area; 3 - IMPIEGATI 5 GG 30 HH; 1 - IMPIEGATI 5 GG MAR. E GIO. In basso pulsanti numerati 1-10 e indicatore pagina "Pagina 1 di 9", "Visualizzati 9 - 16 di 41"]

Nel caso che si siano inseriti dati all'interno dei campi di ricerca della schermata iniziale, l'elencazione mostrerà solo quei profili contenenti tali dati.

> **Es.** Se su *Descrizione* si mette la scritta "Orario Vigili" poi si clicca il bottone *Elenca*, dopo aver scelto il tipo di elencazione verranno visualizzati solo i profili orari contenenti nella descrizione la scritta "Orario Vigili", rispettando sempre il tipo di elencazione scelto.

Basterà fare **Doppio click** sopra il profilo interessato per andare a vedere i suoi dati.

### Pulsanti della tabella di elencazione

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

Da questa schermata sarà anche possibile inserire un nuovo dipendente utilizzando il bottone **Nuovo** o ritornare alla schermata iniziale utilizzando il bottone **Altra Ricerca** nella parte destra del programma.

## Duplicare un profilo orario

Per **Duplicare** un profilo orario basterà cliccare il bottone **Duplica** nella schermata iniziale del programma. Utilizzando questo bottone duplicheremo tutto il contenuto di un profilo in un nuovo profilo. Facendo click sul pulsante otterremo la seguente schermata:

[Finestra di dialogo "Duplica Profilo" con campi: "Codice profilo da duplicare" (1), "Codice nuovo profilo" (2, es. 27), "Descrizione" (3), pulsanti "Conferma" e "Annulla"]

1. In questo campo va inserito il **codice del profilo che vogliamo duplicare**
2. In questo campo va inserito il **codice del nuovo profilo** che otterrà tutti i dati del profilo inserito nel campo 1. Il programma inserirà automaticamente il primo codice profilo disponibile, ma si potrà inserire un qualsiasi codice manualmente. In caso che il codice scelto per il nuovo profilo sia già occupato si visualizzerà un messaggio d'errore e si tornerà alla schermata iniziale
3. In questo campo va inserita la **Descrizione** per il nuovo profilo

L'operazione verrà completata facendo click sul bottone **Conferma**.