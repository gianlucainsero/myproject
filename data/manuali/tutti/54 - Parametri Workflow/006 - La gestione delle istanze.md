# La gestione delle istanze

## A cosa serve

È lo strumento di chi cura la manutenzione del workflow. Permette di cercare qualsiasi istanza, vedere a che punto è, chi ha lavorato cosa e quali interventi ha avuto; e, quando serve, di intervenire: sospendere o riattivare un'istanza, riassegnare un passo a un altro ufficio, correggere una distribuzione del lavoro, riportare l'istanza a un passo precedente, restituire un ramo o annullare l'istanza. Ogni intervento chiede una motivazione e resta registrato.

## Come si usa

### Aprire la gestione e cercare un'istanza

1. Aprire il menu **Workflow**, voce **Gestione istanze**. Si apre la finestra **Gestione istanza processo workflow**.
2. Nel riquadro **Selezione** indicare uno o più criteri: **ID Modello**, **ID Istanza**, **Stato**, **Procedimento**, **Chiave Riferimento**, **Tipo Riferimento**.
3. Premere **Elenca**. L'elenco mostra per ogni istanza **ID**, **Stato**, **Modello**, **Procedimento**, **Tipo Rif.**, **Chiave Rif.**, **Inizio** e **Ultima modifica**.

[Schermata: finestra Gestione istanza processo workflow con griglia di istanze e criteri di ricerca]

Per una nuova ricerca premere **Altra Ricerca**. I criteri usati più spesso si possono salvare e ricaricare dal riquadro **Parametri Ricerca** (**Salva**, **Carica**, **Reset**).

### Il dettaglio di un'istanza

Facendo doppio clic su una riga si apre il dettaglio dell'istanza, con il suo numero (**ID Istanza**) e il **Modello**. Le schede:

- **Dati di innesco processo** — i dati con cui l'istanza è partita;
- **Allegati di processo** — i documenti dell'istanza; il bottone **Carica allegato** ne aggiunge uno;
- **Nodi processo** — i passi del procedimento, con **Nodo**, **Tipo**, **Stato** e **Assegnatario**;
- **Storia Transizioni** — i passaggi da un passo all'altro, con **Azione**, **Da**, **A**, **Note**, **Concluso da** e le date;
- **Interventi** — il registro degli interventi di manutenzione (vedi sotto);
- **Dati di processo** — i dati raccolti dai passi, passo per passo;
- **Diagramma** — il disegno del procedimento, con il punto in cui si trova l'istanza.

[Schermata: dettaglio istanza con scheda Nodi processo, griglia dei passi e comandi a destra]

Fra i comandi ci sono **Torna Elenco**, **Ricarica** e **Mappa processo**, che apre la mappa (vedi *Consultare senza modificare*), e i comandi di intervento consentiti dal proprio livello.

## Che cosa si può fare, secondo il livello

L'accesso alla gestione delle istanze dipende dall'autorizzazione **BWF/2 — Abilita manutenzione istanze** (vedi *Rendere disponibili scrivania e menu*):

- livello **L**: solo consultazione;
- livello **G**: in più **Sospendi**, **Riattiva**, **Riassegna nodo** e **Gestione assegnazioni**;
- livello **C**: in più **Annulla**, **Sposta il token**, **Revoca assegnazioni** e **Restituisci ramo**, cioè gli interventi che non si possono annullare.

I comandi compaiono solo quando si possono usare su quell'istanza: per esempio **Riattiva** solo su un'istanza sospesa. Molti comandi agiscono su un passo: prima di premerli, selezionare il passo nella scheda **Nodi processo**; se non lo si fa, il sistema lo ricorda («Selezionare prima, nella griglia "Nodi del processo", …»).

Ogni intervento chiede una **motivazione**, che è obbligatoria e resta registrata.

## Sospendere e riattivare un'istanza

1. Premere **Sospendi**. La finestra **Sospendi istanza** chiede «Confermi la sospensione dell'istanza?».
2. Scrivere la motivazione e premere **Conferma**. Il sistema risponde «Istanza … sospesa.».

Le attività di un'istanza sospesa restano sulle scrivanie, ma non si possono lavorare finché l'istanza non viene riattivata. Per riattivarla premere **Riattiva**: la finestra **Riattiva istanza** chiede «Confermi la riattivazione dell'istanza?»; dopo la conferma il sistema risponde «Istanza … riattivata.».

[Schermata: finestra Riattiva istanza con campo Motivazione obbligatoria e pulsante Conferma]

## Riassegnare un passo

Per passare un'attività a un altro ufficio o a un'altra persona:

1. Nella scheda **Nodi processo** selezionare il passo e premere **Riassegna nodo**.
2. La finestra **Riassegna nodo** mostra il passo e il suo assegnatario attuale, e avverte che si sposta solo questo passo (i successivi restano a chi sono assegnati nel procedimento) e che le nuove destinazioni sostituiscono quella attuale.
3. Indicare la nuova destinazione, scrivere la motivazione e premere **Conferma**. Il sistema risponde «Nodo … riassegnato a … destinazione/i.».

## Riportare l'istanza a un passo: Sposta il token

Il **token** è il segnaposto che indica a che punto è l'istanza. Spostarlo vuol dire riportare l'istanza su un altro passo.

1. Nella scheda **Nodi processo** selezionare il passo su cui riportare l'istanza e premere **Sposta il token**.
2. La finestra avverte che i passi attualmente aperti vengono annullati e il loro lavoro andrà rifatto, e che l'intervento non è reversibile.
3. Scrivere la motivazione e premere **Conferma**. Il sistema risponde «Token riportato su ….».

Chi riceve l'attività sul passo di arrivo trova l'avviso **Riportato qui da una manutenzione**, con la motivazione.

## Correggere una distribuzione per conto di chi l'ha fatta

Se chi ha distribuito il lavoro non può correggerlo da sé (vedi *Distribuire il lavoro a più uffici e correggere le assegnazioni (VRE)*):

1. Selezionare nella scheda **Nodi processo** il passo con cui si è distribuito il lavoro e premere **Gestione assegnazioni**.
2. La finestra spiega che il passo torna lavorabile, che i rami già aperti non vengono toccati e che l'operazione viene registrata **a nome di chi aveva distribuito il lavoro**: il passo torna a lui.
3. Scrivere la motivazione e confermare. Il sistema risponde «Passo riaperto a nome di …», ricordando che da lì si possono anche revocare le assegnazioni.

Con **Revoca assegnazioni** si interrompono tutte le assegnazioni che si possono interrompere; il passo resta aperto e chi lo ha in carico dovrà ricomporre l'elenco.

## Restituire un ramo per conto di chi lo ha in carico

1. Nella scheda **Nodi processo** selezionare l'attività del ramo, che deve essere presa in carico da qualcuno, e premere **Restituisci ramo**.
2. La finestra spiega a chi torna il lavoro e che l'operazione viene registrata **per conto di** chi ha l'attività in mano; gli altri rami continuano.
3. Scrivere la motivazione, che è quello che leggerà chi rifà il lavoro, e confermare. Il sistema risponde «Ramo restituito per conto di …».

## Annullare un'istanza

1. Premere **Annulla**. La finestra **Annulla istanza** chiede «Confermi l'annullamento dell'istanza? L'operazione non e' reversibile.».
2. Se l'istanza ha già prodotto qualcosa fuori dal workflow, per esempio una fattura accettata o un atto creato, la finestra lo elenca e avverte che l'annullamento non lo disfa.
3. Scrivere la motivazione e premere **Conferma**. Il sistema risponde «Istanza … annullata.».

Un'istanza annullata ha lo stato **Annullata**: è diverso da una chiusura negativa, e le sue attività non si possono più lavorare.

## Il registro degli interventi

La scheda **Interventi** elenca le operazioni fatte sull'istanza, dalle scrivanie e dalla gestione delle istanze: prime aperture e prese in carico, ritiri, restituzioni, gestione delle assegnazioni e interventi di manutenzione. Per ciascuna riporta **Intervento**, **Oggetto**, **Eseguito da** (chi e quando), **Prima**, **Dopo** e **Motivazione**. Il filtro **Tipo intervento** mostra un tipo solo, per esempio solo gli interventi di manutenzione.

[Schermata: scheda Interventi con griglia contenente ID, Intervento, Oggetto, Eseguito da, Prima, Dopo, Motivazione e filtro Tipo intervento]

## Casi particolari

- **Livello mancante:** se si prova un'operazione per cui non si ha il livello, compare «Per questa operazione serve il livello … sull'autorizzazione BWF/2 (Abilita manutenzione istanze).».
- **Motivazione vuota:** gli interventi non partono senza motivazione («La motivazione e' obbligatoria per … un'istanza.»).
- **Interventi non annullabili:** annullare un'istanza, spostare il token, revocare le assegnazioni e restituire un ramo non si possono annullare. In caso di errore, si rimedia con un nuovo intervento.
- **Istanze concluse:** sulle istanze chiuse o annullate i comandi di intervento non compaiono.
- **Gli utenti vedono gli interventi:** chi riceve un'attività toccata da un intervento trova nell'area dei messaggi l'avviso corrispondente, con la motivazione (vedi *Cosa significano i messaggi*).