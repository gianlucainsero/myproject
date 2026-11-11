# Cruscotto Atti e Ricerca Atti

La presente guida ha la finalità di mostrare la nuova funzionalità "Cruscotto Atti", introdotta all'interno del modulo Atti Amministrativi, e l'implementazione delle funzionalità relative alla funzione di ricerca degli atti.

## Cruscotto Atti

All'interno della Scrivania Atti è stata implementata una nuova funzionalità, accessibile tramite la nuova scheda "Cruscotto atti" che consente all'utente un accesso immediato agli atti da egli stesso creati/modificati o agli atti relativi ai propri uffici di appartenenza. Così da poter avere sempre sotto controllo il flusso di lavorazione degli atti di competenza.

All'accesso alla scheda "Cruscotto Atti", la modalità di estrazione è impostata di default per mostrare gli ultimi 100 atti inseriti/modificati dall'utente con il quale ho eseguito il login.

[Schermata della scheda "Cruscotto Atti" con barra dei filtri in alto (Ufficio, Limite) e tabella di elenco atti con colonne: Tipo Documento, N. Documento, Data, Tipo, Organo, Oggetto, Ufficio, Stato Iter, Passo Attuale, Evento]

Accedendo alla scheda "Cruscotto Atti", si ha quindi la possibilità di accedere alla lista degli atti di interesse per proseguirne la lavorazione o semplicemente consultarli. La scheda mostra in elenco anche gli atti per i quali non è stato ancora avviato l'iter di lavorazione, evitando di fatto di dover ricorrere alla ricerca degli atti tramite apposita funzione. È sufficiente accedere al dettaglio dell'atto di interesse con doppio clic.

All'interno della scheda "Cruscotto atti" è inoltre possibile visualizzare i provvedimenti in base all'esigenza:

- È possibile visualizzare tutti i provvedimenti in lavorazione che fanno capo a tutti gli uffici di appartenenza dell'utente (Opzione "I tuoi uffici");
- È possibile selezionare dall'elenco, uno specifico ufficio tra quelli di cui l'operatore fa parte, così da visualizzare i soli provvedimenti relativi all'ufficio selezionato.

### Filtri di estrazione dinamica

Oltre a quelli già presentati, è possibile avvalersi di diversi filtri atti a permettere una estrazione dinamica delle informazioni:

- Tramite il campo **"Limite"** è possibile impostare un range temporale oggetto dell'estrazione. Sono disponibili i valori:
  - Ultimi 100 atti;
  - Atti degli ultimi 30gg;
  - Atti degli ultimi 60gg;
  - Atti degli ultimi 90gg;
  - Atti degli ultimi 120gg;
  - Atti degli ultimi 150gg;
  - Atti da una specifica data;

- Tramite i vari campi presenti all'interno della tabella di estrazione dei dati:
  - **Stato Iter:** Permette di filtrare per uno specifico stato in cui l'iter dell'atto si trova (Lo stato può essere anche relativo all'iter non ancora avviato o annullato)
  - **Passo Attuale dell'iter:** Permette di filtrare per uno specifico passo di iter nel quale l'atto è in lavorazione
  - **Evento:** Permette di filtrare i dati sulla base di eventi come:
    - **Letto:** trasmissione letta dall'assegnatario;
    - **Lavorato:** Passo gestito dall'utente assegnatario;
    - **Interruzione Iter:** iter interrotto tramite la funzione "Interrompi iter"
    - **Letto in Acquisizione:** passo di iter preso in carico dall'assegnatario mediante il bottone "Gestisci richiesta", presente all'interno della trasmissione.

[Schermata con il menu a tendina del campo "Limite" aperto, che mostra le opzioni: Ultimi 100, Ultimi 30 giorni, Ultimi 60 giorni, Ultimi 90 giorni, Ultimi 120 giorni, Ultimi 150 giorni, Da Data Specifica. Sono inoltre evidenziati i filtri "Stato Iter", "Passo Attuale" e "Evento" nella barra della tabella]

### Dettaglio assegnatario del passo di iter

Per avere il dettaglio dell'utente o dell'ufficio assegnatario del passo di iter in gestione relativo allo specifico atto, è possibile passare con il puntatore del mouse (senza cliccare), sopra l'icona raffigurante un omino (penultima colonna a destra). Si apre un popup che indica il dettaglio dell'assegnazione del passo stesso. Il valore è presente solo se l'iter è stato avviato.

[Schermata con popup di dettaglio assegnazione: "IN CARICO ALL'UFFICIO: RAGIONERIA" visualizzato passando il mouse sull'icona dell'omino nella colonna Evento]

### Icona "i" per proposte trasformate

In caso di proposte trasformate in atto definitivo, compare l'icona **"i"**; il fumetto mostra i dettagli dell'iter dell'atto numerato. Cliccando sulla "i" si accede all'atto stesso.

[Schermata con icona "i" visibile nella colonna Evento e fumetto di dettaglio che mostra: "TRASFORMATA IN: GIUNTA N. 21 DEL 24/11/2025", "STATO ITER: ITER CONCLUSO", "PASSO ATTUALE: PUBBLICAZIONE DELIBERA", "IN CARICO A: RESPONSABILE AREA FINANZIARIA", "UFFICIO: AREA 3 - SERVIZI FINANZIARI", "EVENTO: LAVORATO"]

## Ricerca atti

La ricerca degli atti, accessibile sia direttamente dalla Scrivania Atti che dall'apposita funzione di menù, è stata implementata con l'aggiunta di ulteriori campi di ricerca e colonne relativi allo stato dell'iter:

- Passo Attuale
- Evento
- Stato Iter

Tali campi introdotti nella ricerca, saranno inoltre disponibili e selezionabili in fase di elaborazione di report in formato excel, in aggiunta ai campi già fruibili in precedenza.

[Schermata della sezione "Ricerca Iter" con i campi: Passo Attuale, Stato Ultimo Evento, Stato Iter, Iter Utilizzato, Resp Richiesta, Ufficio Richiesta, Esito Richiesta, Tipologia, Iter. Sotto, la tabella dei risultati con colonne evidenziate: Stato Iter, Passo Attuale, Evento]