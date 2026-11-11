# STORNO

## Requisiti Iniziali

- Connessione VPN attiva (Cisco AnyConnect)
- Programma **ITAUtilPunti** installato e collegato

[Icone: Cisco AnyConnect e ITAUtilPunti - collegamento]

---

## Come Effettuare lo Storno

Nel caso dovessimo restituire i punti decurtati a un utente, bisogna seguire la seguente procedura:

### PRIMO PASSO

Dai **tre puntini** andiamo nel **Registro Unico Verbali** per aprire la scheda del verbale interessato e da qui andiamo nella sezione **[Vai a »] 'Dati comunicazioni punti'** e interagiamo con il comando rosso **[Storno]** presente sull'elenco di comandi sulla destra.

[Schermata: Registro Unico Verbali con sezione "Dati comunicazioni punti", comando rosso "Storno" evidenziato sulla destra, e popup "Inserimento Vigile" con messaggio "Confermi lo STORNO dei punti?" e pulsanti "Conferma" / "Annulla"]

### SECONDO PASSO

Una volta confermato l'operazione per fare lo storno dei punti con **[Conferma]**, il numero dei punti andrà in negativo (Es.: da 6 a -6).

[Schermata: campo "Punti Totale Punti" mostra il valore -6 in evidenza]

### TERZO PASSO

Dai **tre puntini** ci sposteremo nella seguente sezione del gestionale:

**▶ Codice della Strada ▶ Patente e Punti ▶ Invio Comunicazione a MCTC**

[Schermata: menu di navigazione con percorso 10. Codice della Strada → 50. Patente e Punti → 20. Invio Comunicazione a MCTC evidenziato]

### QUARTO PASSO

Clicchiamo il pulsante **[Invio a MCTC]** per aprire la schermata pop-up sottostante e da qui interagiamo con **[Carica Storni]**.

[Schermata: finestra "Comunicazione M.C.T.C." con pulsante "Invio a MCTC" sulla destra, popup "Selezione Punti" con pulsante "Carica Storni" evidenziato]

Ci compariranno ad elenco una lista dei verbali a cui è possibile restituire i punti precedentemente decurtati.

### QUINTO PASSO

Dopo aver selezionato i verbali (tramite i **quadratini bianchi a sinistra sulla riga**, per selezionarli tutti cliccare sul quadratino bianco su sfondo azzurro!) che ci interessa da mandare alla MCTC per lo storno, poi cliccare su **[Creazione File]** per creare il tracciato.

[Schermata: finestra "Selezione Punti" con elenco verbali (Numero Tx, Verb, Anno, Data infrazione, Nominativo, Data Notifica, Data Quietanza, Dati Conducente, Articolo MCTC, Comma MCTC, Ipotesi MCTC, Punti), checkbox selezionate a sinistra e pulsante "Creazione File" in basso a destra evidenziato]

### SESTO PASSO

Con la **VPN collegata**, si apre il programma **ITAUtilPunti** dal collegamento sul proprio PC ed, infine, fare **[Trasmetti Punti]** per trasmettere il file dello storno appena creato.

(Se il file è stato mandato come da procedura comparirà la segnalazione **"Trasferimento Completato!"**)

[Schermata: programma "MCTC Punti" con pulsanti "Trasmetti Punti" e "Ricevi Esito", tabella "Servizio FTP" con server FTPRCDS e FTPMCTC, e popup "Trasferimento Completato!" con pulsante OK]

> ⚠️ **Si può fare una sola trasmissione al giorno.** Mandato il file, la MCTC lo elaborerà e dopo **24 ore** aver fatto questa operazione sarà possibile recuperare il file di risposta.

---

## Come Ricevere l'Esito dello Storno

Dopo almeno ventiquattr'ore potremmo provare ad importare il file di esito (**sempre collegando prima la VPN**), il procedimento è identico alla ricezione dell'esito dei punti (solo che sarà inerente allo storno dei punti).

---

## Altre Informazioni

### Perché non compare il verbale in selezione per la decurtazione dei punti?

Potrebbe esserci un **blocco** nella sezione **Generalità Contravventore / Dati Comunicazione Punti**.

### Come posso sbloccare un verbale per l'invio dei punti?

1. Aprire la scheda del verbale che vogliamo **sbloccare**.
2. Una volta qui, andare nella sezione **[Vai a »] [Dati Comunicazioni Punti]**.
3. Interagire con il comando **[SBLOCCA Invio Punti]** scritto in verde.
4. Confermare la scelta e poi salvare l'intervento con **[Registra]**, presente sulla destra.

[Schermata: pulsante verde "SBLOCCA Invio Punti" con barra rossa sottostante "Invio Punti a MCTC bloccato"]

[Schermata: menu "Vai A" con voce "Dati Comunicazione Punti" evidenziata, pulsante "Vai a >>", e popup "Attenzione" con messaggio "Confermi lo sblocco dell'invio punti alla MCTC?" e pulsanti "F5-Conferma" / "F8-Annulla"]