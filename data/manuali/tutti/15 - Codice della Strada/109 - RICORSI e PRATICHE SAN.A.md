# RICORSI e PRATICHE SAN.A.

## Introduzione

Il modulo base del gestionale permette di gestire i dati principali dei ricorsi.

È disponibile anche un modulo aggiuntivo per una gestione più dettagliata delle pratiche di ricorso, con integrazione del sistema SAN.A.

---

## RICORSI

Alla sezione "Ricorsi" di un verbale si accede in due modi.

### METODO 1

Dai **tre puntini** aprire il Registro Unico Verbali e cercare l'iter su cui inserire il ricorso. Nella scheda del verbale cliccare su **[Vai a »]** e poi su **[Ricorsi]**.

[Immagine: menu "Vai A" con le opzioni Info Verbali, CCP Senza Identificativo, Notifiche, Pagamenti, Ricorsi (evidenziato), Dati Comunicazione Punti, Varia Proprietario/Locatario, Archiviazione, Documenti Vari, Stampe Varie, Blocco Temporaneo. Il pulsante "Vai a >>" è evidenziato a destra.]

### METODO 2

Dai **tre puntini** seguire il percorso:

▶ **Codice della Strada** ▶ **Verbali** ▶ **Ricorsi** ▶ **Ricorsi**

[Immagine: percorso di navigazione nell'interfaccia: 30. Polizia Locale → 10. Codice della Strada → 30. Verbali → 130. Ricorsi → 10. Ricorsi]

La schermata iniziale è una maschera di ricerca in cui si possono impostare dei filtri. Cliccare su **[ELENCA]** per avviare la ricerca (anche senza filtri) e visualizzare l'elenco dei verbali, come nella voce "Aggiorna/Inserisci verbali".

[Immagine: maschera di ricerca con campi: Verbale, Anno, Preav. N., Preav. Serie, Contestaz. N., Contestaz. Serie. Pulsante "Elenca" a destra. Nota: "Maschera di ricerca per impostare eventuali filtri per una prima scrematura (combinabili a piacere!)"]

I risultati sono mostrati in una tabella con le informazioni principali: ogni riga corrisponde a un verbale. Con un doppio clic su una riga si apre la scheda del verbale, direttamente nella sezione "Ricorsi".

[Immagine: tabella elenco ricorsi con colonne: N° Reg. Verb., Anno, Cat., Doc., Rif. Verbale, Data, Ora, Targa, Naz., Contestatario/Propr., Not., Cat., Stato. Pulsanti "Altra Ricerca" a destra.]

Con entrambi i metodi si arriva alla stessa schermata.

- Con **[TORNA A ELENCO]** si torna all'elenco dei verbali
- Con **[ALTRA RICERCA]** si torna alla maschera iniziale per modificare o rimuovere i filtri

---

## COME INSERIRE UN RICORSO

Cliccare su **[Nuovo]**, sempre presente sulla destra: si apre una scheda vuota da compilare con i dati disponibili.

- **CASO PARTICOLARE:** se il verbale dovesse risultare senza una data di notifica, ci verrà chiesto di confermare l'operazione (sia in fase di inserimento, sia in fase di modifica). Con **SI** proseguiremo.

[Immagine: finestra di dialogo "Controllo" con messaggio "VERBALE SENZA NOTIFICA: Confermi l'inserimento?" e pulsanti Sì/No. Il pulsante "Nuovo" è evidenziato a destra.]

I campi obbligatori sono: **data di presentazione**, **tipo di ricorso** e **nominativo del ricorrente** (chi ha presentato il ricorso).

Al termine cliccare su **Salva**.

[Immagine: scheda "Ricorso" con campi: N. Pratica, Tipo, Data Inserimento, Data, Nominativo, Avvocato Controded., Data Lavorazione, Presentata in Comando, Presentata in Prefettura, Trasmeso alla Prefettura, Iter Concluso, Giudice, Data Udienza, Ora, Ruolo Generale, Esito, Sanzione Riformata, Provvedimento, Data Notifica, Ricalcola Termini Punti, Gg Esig., Del, Somma, Comprende spese, Spese 1, Spese 2, Note, Immagine. Pulsante "F6-Salva" in basso. Pulsanti a destra: Leggi File, Nuovo, Vai a >>, Torna a Elenco, Altra Ricerca.]

Se dovessero mancare delle informazioni essenziali, comparirà a schermo un avviso scritto in rosso che ci indicherà quale dato manca. Una volta compilato il dato mancante potremmo riprovare a confermare l'inserimento del nuovo ricorso con **"F6 - Salva"**.

Dopo l'inserimento, lo stato dell'iter riporta il tipo di ricorso impostato.

> Esempio: lo stato `RICORSO PACE` indica un ricorso al Giudice di Pace.

[Immagine: scheda verbale con stato "RICORSO GIUDICE DI PACE" in alto. Nota: "In alto, invece, lo stato dell'iter viene aggiornato con il tipo di ricorso inserito." In basso: "Se l'inserimento è andato a buon fine, il ricorso compare come nuova riga nella tabella in basso, insieme ai suoi dati principali." Tabella "Elenco Ricorsi" con colonne: Data Ricorso, Tipo, Provvedimento, Esito, Immagine.]

Finché il ricorso è in corso, il verbale **non viene selezionato** per la stampa del verbale e dell'ultimo avviso e **non viene iscritto a ruolo**.

---

## COME INSERIRE L'ESITO DI UN RICORSO

Quando si riceve l'esito, riaprire il dettaglio del ricorso per completarne i dati.

Aprire il dettaglio con un doppio clic sulla riga del ricorso, cliccare sulla freccia accanto a "Esito" e selezionare una delle opzioni: **vuoto** (non specificato), **INGIUNZIONE**, **ACCOLTO** o **RESPINTO**.

[Immagine: scheda "Ricorso" con campo "Esito" a tendina aperto che mostra le opzioni: ACCOLTO, RESPINTO, INGIUNZIONE. Il campo Esito è evidenziato con un riquadro rosso.]

> **NOTA:** dopo ogni modifica cliccare sempre su **Salva**, altrimenti i dati non vengono registrati.

### Ricorso accolto

Impostare l'esito **ACCOLTO**. Il verbale viene archiviato automaticamente.

### Ricorso respinto

Impostare l'esito **RESPINTO** e inserire i dati del provvedimento e la somma rivalutata.

> **NOTA IMPORTANTE:** in caso di ricorso respinto la sanzione viene riformata, quindi occorre:
> - inserire l'**importo della somma rivalutata** (ad esempio 450,00 euro);
> - impostare **COMPRENDE SPESE**:
>   - **'S'** se la somma inserita comprende già le spese;
>   - **'N'** se la somma **non** comprende le spese, che vanno indicate nei campi **Spese 1** e **Spese 2**.

[Immagine: scheda "Ricorso" con Esito: RESPINTO, Sanzione Riformata spuntato. Campi evidenziati: Provvedimento (NUMERO DI PROVVEDIMENTO), Data Notifica (22/07/2025), Somma (475,00), Comprende spese (S), Spese 1 (0,00), Spese 2 (0,00), Del (22/07/2025), Gg Esig. (60).]

### Ricorso parzialmente accolto

Impostare l'esito **INGIUNZIONE** o **RESPINTO** e inserire l'importo stabilito (per le spese vedi sopra).

### Ricorso inammissibile

Caricare il documento che comunica l'inammissibilità nella sezione "Documenti Vari" del verbale.

---

## Altre informazioni utili

- Il flag **Sospen. Pagamenti** è attivo di default perché, di norma, la presentazione del ricorso sospende il pagamento della sanzione fino all'esito. Si può disattivare manualmente per i ricorsi che non sospendono il pagamento.

- Il flag **Ricalcola Termini Punti** si attiva o disattiva manualmente, in base a come l'ente gestisce la decurtazione dei punti in caso di ricorso (solo se l'articolo violato prevede punti). Se attivo, vengono ricalcolati i termini per la presentazione dei dati della patente del conducente/trasgressore.

[Immagine: dettaglio del campo "Ricalcola Termini Punti" con spunta blu attiva, accanto al campo "Gg Esig."]

> **Nota:** la spunta bianca su sfondo blu ☑ indica che il flag è attivo. Per disattivarlo cliccarci sopra una volta e salvare.

---

## COME ELIMINARE UN RICORSO

Per eliminare un ricorso, aprire la sezione "Ricorsi" del verbale, aprire il dettaglio del ricorso e cliccare su **[Ripristina]** (il pulsante compare sulla destra solo dopo aver aperto il dettaglio).

- Con **[SI]** lo stato del verbale torna a quello precedente al ricorso.
- Con **[NO]** l'operazione viene annullata.

[Immagine: scheda "Ricorso" con pulsante "Ripristina" evidenziato a destra. Finestra di dialogo "Controllo" con messaggio: "SI VUOLE PROCEDERE AL RIPRISTINO DELLA SITUAZIONE DEL VERBALE ALLO STATO PRECEDENTE IL RICORSO RELATIVAMENTE ALLA SANZIONE pari a Euro 42 SPESE DI NOTIFICA - Euro 0 PER UN TOTALE DI Euro 42 ?" con pulsanti Sì/No.]

---

## PRATICHE SAN.A.

Se l'ente ha l'integrazione con **SAN.A.** (il sistema sanzionatorio amministrativo della Prefettura), è possibile inserire dati aggiuntivi in una sezione dedicata del gestionale.