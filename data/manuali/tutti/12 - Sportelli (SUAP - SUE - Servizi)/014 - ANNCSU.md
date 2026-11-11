# ANNCSU

## Condizioni per ottenere il voucher

Tutti i civici presenti in ANNCSU devono essere geolocalizzati (avere una coordinata geografica) sul territorio e l'invio di questi civici/accessi con le loro coordinate ad ANNCSU, deve avvenire tramite l'e-client predisposto su PDND dalla stessa ANNCSU.

## Operazioni e configurazioni effettuate da Palitasoft

Il servizio Palitasoft ha già espletato tutte le configurazioni iniziali per procedere al lavoro di geolocalizzazione degli accessi ANNCSU; in particolare:

- Creazione e configurazione della "chiave pubblica" e del gateway per interoperabilità con PDND: `https://cwolcheck.nuvolapalitalsoft.it/wsrest/service.php/pdndEClients`
- Richiesta di fruizione e-client su PDND (**ANNCSU – Aggiornamento coordinate**) a nome di ogni comune su ambiente di produzione
- Configurazione parametri sul gateway (KID, PurpuseID, ClientID)
- Creazione ente CWOL.GIS.ANNCSU
- Importazioni dati STRADARIO e ACCESSI da ANNCSU
- Esecuzione del Geocode automatico

## Attività da svolgere

Espletare quanto illustrato nei capitoli successivi.

---

## GEOCODE DEGLI ACCESSI (CIVICI)

La funzione di menu da cui lavorare è **[40.Fascicoli Elettronici – 80. Cartografia – 40. ANNCSU]**

Entrando nella funzione si ha in evidenza la tab **"Dati"** (Fig. 1) che mostra la situazione sempre aggiornata dei dati; il bottone **[Aggiorna]** che si ha in alto a sinistra effettua un refresh della schermata (il suo utilizzo non dovrebbe essere necessario).

> [Fig. 1: Schermata di accesso alla funzione ANNCSU, in evidenza la tab "Dati"]

Nella parte alta ci sono i dati che riguardano lo stradario (aree di circolazione o odonimi); il numero totale di strade con i civici e il numero di quante ancora hanno accessi da geolocalizzare e relative %.

I dati riferiti ai Numeri civici (accessi) sono:

- **Civici totali in ANNCSU**
- **Geolocalizzati con qualità ottima**, sono quelli che provengono da un SIT, quindi avevano già una coordinata o erano già geolocalizzati in ANNCSU o vengono inseriti manualmente o spostati in mappa (v. prossimi capitoli);
- **Qualità ok**: Hanno un grado validissimo di individuazione tra la fonte (ANNCSU) e le banche dati usate per la codifica (google e osm);
- **Qualità sufficiente**: Hanno un grado accettabile di geolocalizzazione tra la fonte (ANNCSU) e le banche dati usate per la codifica (google e osm);
- **Qualità bassa**: In condizioni di urgenza rappresentano una valida soluzione di geolocalizzazione, una loro supervisione (spostamento in mappa) potrebbe migliorare il risultato;
- **Senza posizione**: Mostra il numero di civici senza coordinata, sono i numeri da geolocalizzare. Il suo valore deve essere 0 (tutti i civici messi in mappa);
- **N° Geocode possibile**: Inizialmente si mostra valorizzato a 0 e così dovrà essere;
- **Civici per fonte**: Indica la provenienza dai dati
- **Elenco note**: Assume valore di contorno, una nota esplicativa del geocoding.

Il riquadro in basso (Fig. 1) mostra due campi per fare l'upload rispettivamente dello stradario e degli accessi (civici) scaricati manualmente da **[Lavorazione offline]** da SISTER – Gestione ANNCSU. Questa evenienza si potrebbe rendere necessaria quando, dopo l'avvio di questo progetto e di questa lavorazione, qualcuno ha inserito altri civici in ANNCSU e quindi non sono presenti nel nostro db in CWOL. I nomi dei file csv che si devono caricare con l'icona del "floppy" 📁 descritti dal successivo capitolo sono:

- **Stradario**: `ANNCSU_codice catastale_STRADARIO_AAAAMMGG.csv` (nome di esempio: `ANNCSU_A947_STRADARIO_20251230.csv`)
- **Civici**: `ANNCSU_codice catastale_ACCESSI_AAAAMMGG.csv` (nome di esempio: `ANNCSU_A947_ACCESSI_20251230.csv`)

Cliccare il bottone **[Avvia aggiornamento]** per aggiornare i dati caricati.

> ⚠️ **ATTENZIONE**: Importare sempre sia stradario che accessi.

---

## Download da SISTER – ANNCSU – [Lavorazioni offline]

Accedere al portale SISTER e raggiungere la **[Lavorazione off-line]** e cliccare i due link evidenziati per ottenere il csv dal link delle aree di circolazione (Fig. 2) e un file zip da "Scarico elenco accessi".

> [Fig. 2: Schermata di SISTER – Lavorazione off-line]

---

## Aree di circolazione

La tab **"Aree di circolazione"** (Fig. 3) mostra per default le strade che hanno ancora civici da geolocalizzare.

> [Fig. 3: Elenco delle aree di circolazione (odonimi) che hanno civici da posizionare in mappa]

Le opzioni di visualizzazione sono 3 e si possono gestire dal campo **"Filtro"** (Fig. 4):

- Mostra strade con civici da geolocalizzare
- Mostra strade con civici
- Mostra tutte

> [Fig. 4: Tipi di filtro delle strade]

I comandi disponibili su ogni riga (area di circolazione) della lista (Fig. 5) sono tre:

- 📌 **(PIN arancione)**: Consente di inserire un alias (Fig. 5), una descrizione alternativa all'area di circolazione che si visualizza nella colonna **[Nome alt.]**. Questo valore deve essere lo stesso che usa Google per individuare la strada, dal nostro esempio potrebbe essere `[VIA S. MARTNO]`, quindi valorizzare solo dopo aver verificato come Google Maps cerca (codifica) quell'indirizzo.
- 🗑️ **(cestino rosso)**: Previa domanda di conferma, **cancella le coordinate di tutti i civici dell'area di circolazione su cui si clicca il comando** (quindi porre la dovuta attenzione in caso di utilizzo); (ovviamente dopo tali civici dovranno nuovamente essere messi in mappa, geolocalizzati).
- ✏️ **(matita gialla)**: Posiziona in modo speditivo i civici dell'area di circolazione (Fig. 1.3.4), nell'esempio il civico con la spunta verde è quello già posizionato (VIA VALLONE 225). Il primo della lista, VIA VALLONE 41, è quello che sta per essere posizionato, basta cliccare un punto in mappa e la lista si aggiorna come in Fig. 6.

> [Fig. 5: Posizionamento speditivo per odonimo (2 da posizionare, 1 già in mappa)]

> [Fig. 6: Posizionamento speditivo per odonimo del civico 41 (1 ancora da posizionare, 2 già in mappa)]

Chiudendo la schermata si torna alla visualizzazione di Fig. 3.

I dati (aree di circolazione e accessi) che si vedono nelle rispettive tab, sono quelli che non sono state geolocalizzati in modo automatico; i motivi possono essere sostanzialmente 2:

1. Il civico o la strada non ci sono in Google
2. Il civico o la strada non sono stati trovati in Google

Se non ci sono (caso 1), il lavoro da fare è quello di sapere dove mettere in mappa (sul territorio) i civici che si hanno in elenco. Per fare questo si può conoscere il proprio territorio o si va a verificare dove si trovano quella strada/località e si apprende e si verifica dove piazzare i civici. Il modulo CWOL.ANNCSU funziona anche aprendolo l'applicativo da un tablet (basta che abbia una scheda di traffico internet o un segnale hot spot da un cellulare; *deve avere una copertura internet affinché il cloud su cui è installato sia raggiungibile*). Quindi l'intero lavoro di indagine sul territorio può essere supportato direttamente.

Il caso 2 è quello su cui si può lavorare preliminarmente prima di andare sul territorio (caso 1). Se un indirizzo non è stato trovato potrebbe significare e molto spesso è così, che la descrizione della strada (area di circolazione o odonimo) presente in Google sia scritta diversamente dalla codifica presente in ANNCSU. Quindi durante il lavoro tenere aperto Google Maps e cercare lo stesso indirizzo nel modo che Google stesso suggerisce; una volta individuata la stringa da usare per codificare la strada, tornare alla fig. 5 e valorizzare l'alias (scrivendo **TUTTO MAISCOLO**) con la stessa stringa usata da Google e poi cliccare il bottone **[Lancia Geocode]** e attendere che la lista dei civici senza coordinata diminuisca fino ad essere vuota. Questa secondo geocode fatto con la stringa "area di circolazione" modifica come è presente in Google dovrebbe trovare e geolocalizzare dei civici che al primo tentativo (automatico già fatto da Palitasoft) non erano strati trovati.

Ripetere più tentativi di modificare l'alias della strada, se necessario.

---

## Accessi

Questa tab **"Accessi"** mostra immediatamente i civici ancora da geolocalizzare (Fig. 7). Cambiando la selezione dal **[filtro]** si può scegliere una qualsiasi altra strada.

> [Fig. 7: Elenco dei civici da posizionare (senza geometria)]

I comandi disponibili su ogni riga (accesso/civico) della lista (Fig. 7) sono due:

- 📌 **(PIN arancione)**: Consente di posizionare il civico in mappa (Fig. 8); usare i comandi sulla barra della finestra grafica per spostarsi e zoomare sul punto in cui si deve mettere il civico.

  Cliccare il bottone della matita ✏️ e il puntatore del mouse diventa un "pallino celeste", cliccare in mappa e il civico si mostra selezionato.

> [Fig. 8: Mappa con molti civici già posizionati, aperta su VIA SAN MARTINO 29 (zoom estensione); in evidenza la barra dei comandi grafici (vedi capitolo "Mappa")]

Se invece si preme la stessa icona (📌) sul civico VIA VALLONE 41, si visualizza la stessa finestra grafica ma lo zoom è estremamente ravvicinato, in quanto il sistema riconosce che ci sono altri civici geolocalizzati (VIA VALLONE 225) e quindi effettua lo zoom nella stessa zona ipotizzando che il nuovo civico da posizionare possa essere lì vicino… (Fig. 9). Per geolocalizzare il civico, cliccare il bottone con la matita ✏️ e cliccare un punto sulla mappa.

> [Fig. 9: Zoom su VIA VALLONE 41]

- 🗑️ **(cestino rosso)**: Previa domanda di conferma, **cancella la coordinata del civico selezionato** (quindi porre la dovuta attenzione in caso di utilizzo); (ovviamente tale civico deve nuovamente essere messo in mappa, geolocalizzato).

> ⚠️ **ATTENZIONE**: Alla fine del lavoro la lista **[Accessi]** dovrà essere vuota, significa che tutti i civici sono stati geolocalizzati e quindi si può procedere con l'invio ad ANNCSU.

---

## Lancia Geocode

Il bottone di Fig. 7, può essere eseguito ogni volta che si vuole senza alcun limite o potenziale pericolo; il programma elabora e poi mostra un riepilogo con gli accessi lavorati, con quelli posizionati e quelli scartati (non trovati). Si consiglia di lanciare il geocode almeno ogni volta che si finisce di posizionare in mappa i civici di una strada.

---

## Mappa

Questa tab **"Mappa"** (Fig. 10) è una visualizzazione di riepilogo, mostra lo stato dell'arte, non serve per il posizionamento dei civici. Cambiando lo sfondo di visualizzazione (riquadro della legenda), nell'esempio si ha OSM (Open Street Map), viene memorizzato anche nei riquadri grafici descritti nei capitoli precedenti.

> [Fig. 10: finestra grafica della mappa, in evidenza la barra dei comandi grafici e la stringa di ricerca]

La barra dei comandi grafici (Fig. 10) consente rispettivamente (in ordine da sinistra):

- Zoom estensione
- Zoom indietro
- Zoom avanti
- Sposta (Pan) per spostare la porzione di mappa a video
- Zoom finestra: consente di fare lo zoom sulla porzione di territorio selezionato
- Stringa della scala, cliccare sul campo per aprire tutti i valori che si possono selezionare o scrivere direttamente il rapporto di scale
- Interrogazione semplice
- Interrogazione
- Pulisce la selezione degli elementi interrogati
- Misura linea
- Misura area
- Info (mostra le coordinate)
- StreetView (lo stesso fornito da Google)
- Stampa
- **ANNCSU (sposta civico ANNCSU)**: Selezionare un civico e si trasforma in "selezionato" per essere trascinato in un altro punto e poi cliccare il bottone **[Salva]** nella form che si ha per il civico selezionato

Il comando **[Cerca]** (Fig. 10) consente di cercare i civici geolocalizzati, editando area di circolazione + civico.

---

## INVIO DATI AD ANNCSU

Questa parte è di fatto la conclusione del lavoro, mandare le coordinate al servizio ANNCSU.

La tab **"Invia a ANNCSU"** (Fig. 11) è una visualizzazione di riepilogo che mostra lo stato dei civici inviati ad ANNCSU. La lista di sinistra (Invii – Fig. 11) riepiloga ogni volta che si preme il bottone, previa conferma di mandare tutto quanto fino ad ora si è messo in mappa inizia un'elaborazione che tramite i servi esposti su PDND spedisce i civici e le loro coordinate. Quindi nella lista [Invii] ci potrebbero essere anche più di una riga, se prima di terminare la geolocalizzazione di tutti gli accessi, si è premuto il comando. La lista di destra (Response – Fig. 11)) si valorizza con il "doppio click" su una riga della lista "Invii" e contiene il numero di righe (accessi) mostrato sulla colonna **"N. request"** della lista "Invii". Questo numero, se il comando viene eseguito una sola volta alla fine della geolocalizzazione, deve coincidere con il numero totale di accessi (tutti devono avere una coordinata ed essere stati inviati).

> [Fig. 11: Dati inviati ad ANNCSU (civici con le coordinate)]

Un aspetto importante è il valore della colonna **"Status code"** della lista "Response"; il valore **200** significa che l'invio è andato bene. Ogni altro valore è indice di errore e quindi l'invio va ripetuto.

---

## OPERAZIONI DI CHIUSURA SU SISTER

Accedere al proprio portale SISTER, sempre nella sezione "Comuni/Enti", gestione ANNCSU, e si ha una schermata simile in cui c'è il riepilogo per l'Attestazione Misura 1.3.1 PDND ANNCSU (Fig. 12).

L'operazione da fare è semplice, spuntare tutte le opzioni presenti e cliccare **[Conferma]**.

> [Fig. 12: Portale SISTER per l'attestazione dei dati mandati ad ANNCSU (civici con le coordinate)]