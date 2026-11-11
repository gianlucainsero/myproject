# Bollette CCP Senza Nome

Può capitare che venga effettuato un pagamento per un preavviso o per un verbale, ma che esso non venga associato in automatico dal programma per dati insufficienti o incompleti.

Questo tipo di bollettini possono essere trovabili andando in questa sezione del programma per poterli identificare e associare ad un numero di verbale/preavviso.

Dai **tre puntini** seguire il percorso:

▶ **Codice della Strada** ▶ **Altre Gestioni** ▶ **Bollette CCP Senza Nome**

[Immagine: menu a tendina del software con il percorso "Applicazioni > 30. Polizia Locale > 10. Codice della Strada > 40. Altre Gestioni > 10. Bollette CCP Senza Nome" evidenziato in arancione]

Dopo aver impostato eventuali filtri, per avviare la ricerca fare click sul tasto **[Elenca]** presente sulla destra.

Il comando **[Svuota]** permette di cancellare tutto l'elenco dei pagamenti senza identificativo.

> ⚠️ **Attenzione!** L'operazione è irreversibile una volta confermata.

[Immagine: schermata "Pagamenti Senza Identificazione" con campi di filtro (Contestazione, Preavviso, Targa, Nominativo, Tipo Quietanza, Ricerca Pagamento, Ricerca Riversamento) e pulsanti "Elenca" e "Svuota" sulla destra. Nota: "Qui potremmo impostare eventuali filtri di ricerca utili come, ad esempio, per Tipologia Pagamento (Tipo Quietanza)"]

## Elenco dei pagamenti senza identificativo

Il risultato verrà ordinato in una tabella dove ogni riga corrisponderà ad un pagamento senza identificativo differente.

In questo elenco possono anche esserci dei pagamenti PagoPA che non sono stati associati in automatico e probabilmente sono dei preavvisi (seleziona la riga e poi fare **[Controlla Preavvisi]**) e il programma ci aprirà in automatico il preavviso che risulta essere pagato con uno o più versamenti.

- Con **[Altra Ricerca]** torneremo indietro
- Con un primo controllo con **[Controlla Preavvisi]** se uno di questi pagamenti senza identificazione in questo elenco può essere già abbinato ad un preavviso, verrà abbinato in automatico a quel preavviso.
- I restanti potremmo controllare se possono essere associati ad un verbale che abbiamo in elenco con **[Controlla Verbali]**

```
Se i dati sono inequivocabili lo assocerà in automatico altrimenti ce lo
farà revisionare
```

**Se i dati non bastano per associare i pagamenti**, occorrerà aprirsi le immagini per cercare di ricavare altre informazioni utili per l'identificazione manuale (come numero di verbale/preavviso, numero di targa, denominativo, ecc)

Se abbiamo aperto uno dei pagamenti con un doppio click del mouse e abbiamo apportato modifiche di qualunque tipo occorrerà fare **[Salva]** per apportare le modifiche, altrimenti non verranno tenute in conto.

[Immagine: tabella "Pagamenti Senza Identificazione" con colonne Nome, Città, Targa, Data Pag, Quietan, Articolo, Sanzione, Data Riv, Bolletta, Preav, N. Preav, S. Contest, Contesto, anno, Annotazioni interne, Immagine. Pulsanti a destra: "Altra Ricerca", "Controlla Preavvisi", "Controlla Verbali". Nota: "Ogni riga di questa tabella ad elenco corrisponde ad un versamento diverso."]

[Immagine: finestra di dettaglio "Pagamenti" con campi: Città, Denominazione, Targa, Data Pagamento, Tipo Quietanza, Articolo, Comma, Sanzione, Provv. Numero, Provv. Serie, Verbale di Contestazione N., Cont. Serie, Anno, Note, Immagine. Pulsante "F6 Salva". Note: "Per aprire il dettaglio di uno, cliccare due volte con il mouse sulla riga corrispondente. Se abbiamo inserito dei dati fare poi [Salva] per apportare le modifiche (altrimenti non verranno registrate). Per cancellare un pagamento senza identificativo, fare click sulla [X]"]

## [Controlla Preavvisi]

Se lo identificherà con un preavviso possiamo associarlo facendo: **Vuoi conciliare il preavviso? > Sì**

[Immagine: scheda "Inserimento Preavviso" con messaggio pop-up "ATTENZIONE! Risultano uno o più versamenti nell'archivio Bollettini CCP senza identificazione. VUOI CONCILIARE IL PREAVVISO?" con pulsanti Sì/No. In basso: finestra "Pagamenti" con tabella dei versamenti associati al preavviso]

## [Controlla Verbali]

Se il programma non avrà abbastanza dati per associare il pagamento ad un verbale in elenco si aprirà la rispettiva scheda del verbale e, come da immagine sottostante, interagendo con il comando **[Registra]** e facendo poi **[Sì]** ci aprirà una schermata pop-up (simile a quella già riscontrata nei preavvisi) dove potremmo vedere il file del pagamento con i dati per poterlo controllare. Dopo aver controllato i dati, se volessimo associarlo a questo verbale possiamo cliccare due volte con il cursore per aprire il pagamento nella sezione "Pagamenti" del verbale (sarebbe la sezione **'Vai a' » 'Pagamenti'**).

[Immagine: scheda "Inserimento Verbale" con messaggio pop-up "ATTENZIONE! Risultano uno o più versamenti nell'archivio Bollettini CCP senza identificazione. VUOI CONCILIARE IL VERBALE?" con pulsanti Sì/No. Pulsante "Registra" evidenziato a destra. In basso: finestra "Pagamenti" con tabella e nota: "Se i dati corrispondono per confermare l'associazione di questo pagamento al verbale aperto: Cliccare due volte sulla riga gialla del pagamento. Verremo mandati in automatico alla sezione relativa ai Pagamenti all'interno del verbale"]

Si aprirà il dettaglio delle informazioni su quel pagamento e facendo **[Salva]** lo aggiungeremo al preavviso/verbale. Per cancellarlo, invece, cliccare sulla **[X]**

[Immagine: finestra "Conciliazione" con campi: Tipo Quietanza, Conc., Numero, Data, Somma Pag., Conciliatore, Incasso, Comando, Conto, Carico Ruolo, Note, Riferimento, Data Riversamento, Immagine, Data Inserimento. Pulsante "F6 Salva". Note: "Per cancellare il pagamento fare click sulla [X] a sinistra del campo Tipo Quietanza. Per salvare il pagamento e associarlo quindi al verbale fare [Salva]"]

## Segnalazione di oblazione incompleta

Se apparirà una schermata con una segnalazione su sfondo giallo che ci comunica che per quel verbale/preavviso ha un'oblazione incompleta per, ad esempio, LA SOMMA versata risulta inferiore alla sanzione, lo stato del verbale diventerà **CONCILIAZIONE PARZIALE**.

## Altre funzioni utili

- **Come inserire manualmente un bollettino senza identificazione?** Per farlo è sufficiente fare click sul bottone **+** presente in fondo alla tabella ed inserire i dati che si possiedono riguardo ogni pagamento.