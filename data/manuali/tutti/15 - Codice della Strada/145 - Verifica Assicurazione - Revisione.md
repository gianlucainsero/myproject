# Verifica Assicurazione / Revisione

## MODULO AGGIUNTIVO

### INTRODUZIONE

```
Art. 80 --- per Revisione
Art. 193 --- per Assicurazione
```

**Se non si ha ancora attivato il modulo, contattare l'assistenza tecnica o commerciale di riferimento per la richiesta di attivazione!**

Il sistema è configurabile per poter avere i seguenti comportamenti:

- Visura, generazione di avvisi bonari di presentazione documenti (raccomandata semplice). In caso di mancata presentazione del documento dopo **X giorni** viene generato il verbale art. 193 o 80.

- Visura, generazione di verbali **180 a somma 0, notificati con AG**. Dal un verbale di infrazione X (redatto dall'ufficio) viene generato il verbale Y con somma 0 art 180, dal verbale Y scaduti i termini di presentazione dell'assicurazione viene poi generato il verbale Z con art. 193, in tutti i verbali restano le indicazioni dell'infrazione originale, del documento, della visura e della scadenze.

- Si può configurare in maniera diversa per le revisioni e per le assicurazioni. Possiamo generare direttamente il verbale se la revisione è scaduta, mentre per le assicurazioni generare prima il verbale 180.

- Si può scegliere di controllare le revisioni e le assicurazioni insieme oppure singolarmente.

> **NOTE TECNICHE:** Il modulo aggiuntivo VA ATTIVATO. Contattare l'assistenza tecnica o commerciale di riferimento se non è stato ancora configurato per la richiesta di attivazione!

Per andare in questa sezione del programma, dai **tre puntini** seguire il percorso:

**PER I PREAVVISI**

▶ **Codice della Strada** ▶ **Preavvisi** ▶ **Lettura Proprietari** ▶ **Verifica Assicurazione/Revisione**

**PER I VERBALI**

▶ **Codice della Strada** ▶ **Verbali** ▶ **Lettura Proprietari** ▶ **Verifica Assicurazione/Revisione**

---

## DA QUI IN POI LA PROCEDURA È LA STESSA

### Ricerca e selezione

Si ricercano le targhe per le quali vogliamo verificare la copertura assicurativa e/o le revisioni utilizzando i vari filtri presenti nella maschera di ricerca, nella parte in alto.

Successivamente si estrae l'elenco con il bottone **[Avvia Selezione]**, situato a destra dello schermo.

È necessario **selezionare gli iter da visurare**, per selezionare/deselezionare un iter cliccare sullo spazio a sinistra, alla "testa" della riga.

Il bottone **'Seleziona Tutti'**, presente sempre a destra, ci permetterà di prenderli tutti in selezione (per le visure massive, consigliamo di fare selezioni non troppo grandi!). Per toglierli tutti dalla selezione cliccare su **'Deseleziona Tutti'**.

> **Nota:** possiamo anche selezionare/deselezionare manualmente!

✔ La presenza di una spunta nera, a sinistra della targa, indica che verrà presa in considerazione per la visura.

---

### Come effettuare la visura

Una volta estratto l'elenco delle targhe, cliccando su **[VISURA]** viene collegata in automatico la VPN con la Motorizzazione e verranno ricercate le assicurazioni e le revisioni.

L'esito delle visure viene confrontato con i dati che si è scelto di controllare (sia revisioni che assicurazioni, solo revisioni, solo assicurazioni, data di infrazione, data di scadenza se presente ecc).

Il programma verifica i dati che sono tornati dalla Motorizzazione. In caso di Assicurazione o di Revisione scaduta/assente si attiverà un flag per indicare se per questa targa bisogna seguire le procedure per il 193 e il 180.

> Nell'esempio è stato scelto di controllare sia le Assicurazioni, sia le Revisioni.

Cliccando su **"Importa"** il programma scriverà sul verbale di origine il documento (ASSICURAZIONE o REVISIONE o entrambi) che risulta mancante.

---

### GENERA INVITI 180 A SOMMA ZERO

Cliccando su **[Genera Inviti 180]** vengono generati i verbali **180 a somma 0**. L'articolo e la descrizione del nuovo verbale sono configurabili nei parametri.

> Sono lettere bonarie con importo zero, servono solo per le assicurazioni.

**GUIDA ALLE PARAMETRIZZAZIONI**

Nei verbali viene specificato il documento che si ha richiesto, oltre ai termini di presentazione relativi prima di generare il verbale 193.

---

### PROCEDURA GENERAZIONE VERBALI 80 A SEGUITO DI MANCATA REVISIONE

Se il programma è impostato per generare direttamente i verbali art. 80 a seguito di verifica mancata revisione, allora si può seguire la stessa procedura che al momento viene utilizzata per la generazione dei verbali 126bis (ovvero i [verbali automatici da scadenze]).

---

### PROCEDURA GENERAZIONE VERBALI 193 A SEGUITO DI MANCATA REVISIONE

#### CONFIGURAZIONE PER GENERAZIONE DIRETTA DEI VERBALI 193

Se il programma è impostato per generare direttamente i verbali art. 193 a seguito di verifica mancata assicurazione, allora si può seguire la stessa procedura che al momento viene utilizzata per la generazione dei verbali 126bis (ovvero i [verbali automatici da scadenze]).

---

#### CONFIGURAZIONE PER GENERAZIONE AVVISI PRESENTAZIONE ASSICURAZIONE

In questo caso il programma sarà configurato in modo da dare n giorni per la presentazione del documento al soggetto, scaduto il termine si può utilizzare la procedura descritta in precedenza. In questo caso bisogna cliccare su **"Stampa"** e poi **"STAMPA ASSICURAZIONE"**.

Verranno prodotti i pdf di invito alla presentazione documenti. Sul verbale originario vengono indicati i giorni concessi per la presentazione del documento e, al momento della notifica del verbale originario, parte il computo dei giorni.

---

#### CONFIGURAZIONE PER GENERAZIONE VERBALI 180 A SOMMA 0 CON INVITO PRESENTAZIONE ASSICURAZIONE

In questo caso si vuole notificare al soggetto un verbale secondo l'articolo 180 c. 8 senza alcuna sanzione amministrativa (importo 0), con il solo invito a presentare il documento di assicurazione. A seguito della mancata comunicazione da parte dell'obbligato allora si potrà generare il verbale 193 con le modalità descritte sopra.