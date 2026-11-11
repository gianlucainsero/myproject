# Tipi Ruolo

Dall'applicativo **Tipi Ruolo** è possibile inserire un tipo di ruolo, cercarne uno già esistente o elencare tutti i tipi di ruolo precedentemente inseriti.

Alla sua apertura l'applicativo si presenterà come segue:

[Schermata iniziale dell'applicativo Tipi Ruolo con i campi di ricerca: Tipo, Codice, Descrizione, Ruolo Unico e i pulsanti F2-Nuovo e F8-Elenca]

## Ricerca del tipo di ruolo

Il tipo di ruolo può essere ricercato **Per**:

- **Tipo**: Inserendo il codice tipo otterremo la decodifica del tipo ruolo
- **Codice**: Inserendolo otterremo il ruolo che ha quel codice, o tutti quei ruoli che presentano una parte del loro codice equivalente a quello scritto
- **Descrizione**: Inserendola otterremo il ruolo che ha come descrizione quella scritta, o tutti i ruoli che presentano all'interno della loro descrizione la stessa parola scritta nella ricerca (Es. se in un ruolo una descrizione è **ACQUEDOTTO** e si inserisce nella ricerca della descrizione la parola **ACQUE** otterremo tutti quei ruoli che nella loro descrizione presentano la parola **ACQUE**)
- **Ruolo Unico**: Selezionandolo otterremo tutti i ruoli che hanno lo stesso valore della selezione

Per far partire la ricerca basterà premere il bottone **Elenca**.

Per elencare tutti i tipi di ruolo precedentemente caricati basterà premere il bottone **Elenca** senza inserire alcun valore nei campi di ricerca; otterremo una schermata con tutti i ruoli inseriti simile alla seguente:

[Schermata con tabella dei Tipi Ruolo e pulsanti di navigazione/paginazione]

## Tabella dei Tipi Ruolo

La tabella si divide in vari campi e presenta al suo interno tutti i **Tipi Ruolo** immessi. Per facilitare la ricerca di un tipo ruolo sono stati immessi i **Filtri**, campi di ricerca sotto ogni voce della tabella; inserendo all'interno dei Filtri i dati da ricercare, la tabella visualizzerà solo quel tipo ruolo che presenta i dati ricercati.

Per visualizzare tutti i dati di uno specifico tipo ruolo basterà fare **doppio click** sopra la sua riga nella tabella.

### Esempio di tabella

| Tipo | Codice Tributo | Descrizione | Ruolo Unico |
|------|---------------|-------------|-------------|
| SUDE | | LAMPADE VOTIVE | S |
| SUPC | 0455 | PASSI CARRABILI | S |
| OD | 0412 | SOPRAT.OMES.PRES.DEN.ICIAP | S |
| VU | 5242 | VIOLAZIONI CODICE STRADA | S |
| OV | 0414 | SOPRAT.OMESSO VERSAM.ICIAP | S |
| IC | 0411 | ICIAP | S |
| IM | 0416 | INTERESSI MORATORI ICIAP | S |
| ST | 0453 | OCCUPAZIONE SUOLO PUBBLICO | S |

### Bottoni di funzionalità

Alla fine della tabella è presente una serie di bottoni che svolgono diverse funzionalità:

1. Esporta la tabella su un file Excel
2. Stampa la tabella
3. Ricarica la tabella (Refresh)
4. Permette di decidere quali colonne visualizzare sulla tabella
5. Permette di tornare alla prima pagina della tabella
6. Permette di tornare alla pagina precedente della tabella
7. Permette di andare alla pagina successiva della tabella
8. Permette di andare all'ultima pagina della tabella

Da questa schermata sarà anche possibile inserire un nuovo ruolo utilizzando il bottone **Nuovo** o ritornare alla schermata iniziale utilizzando il bottone **Altra Ricerca**.

## Inserimento di un Nuovo Tipo Ruolo

Per inserire un Nuovo tipo Ruolo basterà premere il bottone **Nuovo** ottenendo la seguente schermata:

[Schermata di inserimento nuovo Tipo Ruolo con campi: Tipo, Codice, Descrizione, Ruolo Unico e pulsanti F5-Aggiungi e F3-Altra Ricerca]

### Spiegazione dei campi

| Campo | Descrizione |
|-------|-------------|
| **Tipo** | Codice di identificazione del ruolo (vedi legenda): |
| | **RI** Rifiuti |
| | **Ø?** Straordinario — Al posto del "?" inserire una lettera qualsiasi per identificare il tipo del ruolo (Es.: I CI o P ICIAP) |
| | **#?** Speciale |
| | **$?** Fallito |
| | **DE** Lampade Votive |
| | Se **SUPPLETIVO** inserire nelle prime due posizioni **SU** (Es.: SUR) |
| | Se **STRAORDINARIO**, **SPECIALE** o **FALLITO** oltre a inserire i tipi **Ø?** **#?** **$?** inserire anche **SUØ?** **SU#?** **SU$?** perché sono gestiti come i suppletivi |
| **Codice** | Codice TRIBUTO (Non più necessario) |
| **Ruolo unico** | Una "S" se bisogna emettere il ruolo |

Una volta inseriti i vari campi (seguendo la spiegazione) basterà premere il bottone **Aggiungi** per completare l'operazione e inserire il nuovo tipo ruolo. In caso non si volesse inserire un nuovo tipo ruolo basterà premere il bottone **Altra ricerca** per tornare alla schermata principale.