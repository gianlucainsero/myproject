# CITYCREDIT - Manuale Operativo

## Visure Aci e preavvisi di Fermo massivi

### Visure ACI massive

Il Sistema di Gestione delle Visure ACI massive si attiva quando l'operatore seleziona il Preavviso di Fermo. Questo perché in realtà, la Visura ACI si pone come accessorio indispensabile all'atto di Preavviso.

Più precisamente, quando l'operatore va a fare la **'Creazione Massiva Provvedimenti'** e può selezionare in base all'Iter previsto, l'atto di **'Preavviso del Fermo Auto'**, il Sistema si prepara in Simulazione e accende il bottone in giallo sotto evidenziato **'Visure ACI'** per procedere con le attività propedeutiche all'invio del 'Preavviso di Fermo':

[Schermata: Pannello "CITYCREDIT Creazione Massiva Provvedimenti" con modalità recupero in Simulazione, selezione del flusso, elaborazione, e il bottone giallo "Visure ACI" evidenziato nella sezione "Tipo documento da creare"]

Il nuovo bottone in giallo **'VISURE ACI massive'** permette di avviare l'interrogazione massiva all'ACI per tutti i provvedimenti **scaduti**, su cui si sta avviando il preavviso di Fermo.

L'interrogazione all'ACI in realtà produce anche l'aggiornamento della situazione dei Veicoli, allo stato attualizzato e se l'esito dell'interrogazione all'ACI per Codice Fiscale è positivo, viene automaticamente caricato ogni veicolo risultante **Valido e attivo**, sull'apposita sezione dedicata (uno o più veicoli):

[Schermata: Finestra "CITY-CREDIT Veicoli" con tabella contenente colonne: Intestatario, Targa, Modello, Valido Prov. e pulsanti: Check, Aggiungi, Modifica, Cancella. Sotto la tabella i campi: Nominativo, Matricola, Data inizio proprietà, Data fine proprietà, Cerca]

Il Sistema **non** prende nativamente in considerazione beni merce intestati alle Partite Iva e pertanto si evita direttamente il costo della visura per queste posizioni, in quanto poi nella maggior parte dei casi non sono beni aggredibili poiché assimilabili a Strumenti di lavoro.

Se l'esito della Visura fosse negativo o non ci sono targhe attive sul soggetto, il Sistema carica una riga sul medesimo riquadro accessori dedicato ai Veicoli, a significare che in ogni caso la Visura è stata fatta con esito negativo.

Quando le Visure sono terminate con esito puntuale sui Codici Fiscali interessati, sarà possibile proseguire attivando il bottone **'Creazione'** dei preavvisi di fermo, per tutte le posizioni del flusso, che hanno ottenuto almeno una targa valida dalle Visure massive. Il Preavviso verrà quindi rappresentato elencando sul testo, tutti i Veicoli riscontrati, a vantaggio della massima deterrenza possibile dell'atto di Preavviso di Fermo Auto al Contribuente. Ciò non significa che tutti i Veicoli saranno poi posti in stato di Fermo Auto, in caso di mancato pagamento, ma il Contribuente viene a conoscenza che l'Amministrazione o il Concessionario è a conoscenza di tutte le Targhe in suo possesso.

Esiste la possibilità di predefinire la vetustà della Visura ACI, attraverso il campo **'Giorni scadenza informazioni'**:

[Schermata: Pannello di configurazione del documento "preavviso di fermo" (Codice 13) con sezione "Obbligatorietà informazioni accessori" contenente i campi: Veicoli, Riferimenti Bancari, Immobili, Occupazione, Locazione, Natura Nota, e il campo "Giorni scadenza informazioni" evidenziato in giallo con valore 0]

Il Sistema si accorge se dall'ultima Visura è trascorso il tempo di validità previsto:

- In caso **non** sia trascorso il tempo di validità della Visura, il Sistema **non** la rifà, evitando inutili costi all'Ente.
- Nel caso in cui il tempo di validità è trascorso, il Sistema aggiorna la Visura ACI e:
  - Carica le eventuali nuove targhe valide esistenti;
  - Disabilita le targhe che non sono più presenti con la Visura o risultano non più valide;

Aggiornando così la situazione delle targhe attive sul codice Fiscale.

---

### Preavvisi di Fermo Auto

La fase successiva alle Visure ACI massive è quella del Preavviso di Fermo che può essere attivata dal medesimo pannello che riportiamo per comodità espositiva:

[Schermata: Pannello "CITY-CREDIT Creazione Massiva Provvedimenti" in modalità Creazione, con Flusso 17, Elaborazione 6, Step 1-3, e il campo "Tipo documento da creare" impostato su "13 - preavviso di fermo". In basso la spunta "Esporta automaticamente i risultati in formato Excel" e il percorso del file di esportazione]

Valorizzare la spunta di creazione vera e propria degli atti di preavviso del Fermo auto.

> **Nota:** Non vengono creati preavvisi di Fermo per i coobligati.

La fase di Stampa ed invio è standard massiva o puntuale come per gli altri atti dell'Iter, con l'unica differenza che il Sistema **non** crea il doppio testo in presenza di coobligati.