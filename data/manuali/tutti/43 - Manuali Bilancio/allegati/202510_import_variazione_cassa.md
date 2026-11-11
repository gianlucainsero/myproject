# Importazione Variazione di Cassa da Foglio Excel

Il presente manuale illustra la funzione di importazione di una variazione di bilancio di **SOLA CASSA** tramite foglio xlsx preimpostato.

Tale funzione è disponibile al menu:

**180. Servizi Economici → 110. Utilità → 180. Importazioni → 20. Importazione Variazione di Cassa da foglio excel**

---

## 1.1 Modello preimpostato xlsx

È possibile innanzitutto scaricare il modello preimpostato xlsx dall'apposito bottone sulla destra **"SCARICA MODELLO XLSX"**. Nella info è inoltre riportata la corretta composizione delle colonne del modello, al fine di dare la possibilità all'utente di compilare correttamente il file da importare.

[Schermata: interfaccia "Importazione Variazione di Cassa da foglio excel" con campo "Tipo di elaborazione" impostato su "Simulazione", pulsante "Scarica modello xlsx" evidenziato in alto a destra, e finestra "Legenda" che elenca il formato corretto delle colonne A-N]

**Legenda formato colonne del modello:**

- **Colonna A:** E/S
- **Colonna B:** Codice voce di bilancio parte 1
- **Colonna C:** Codice voce di bilancio parte 2. La colonna C deve comprendere sia la codifica del capitolo che dell'articolo, senza l'indicazione del punto come separatore
- **Colonna D:** Descrizione voce di bilancio
- **Colonna E:** Importo variazione. Se si tratta di variazione di cassa negativa indicare l'importo con segno -. Per i capitoli per cui non si vuole creare la variazione non si deve indicare l'importo nella colonna E
- **Colonna F:** Stanziamento Assestato di Competenza
- **Colonna G:** Impegnato/Accertato a competenza
- **Colonna H:** Stanziamento Residuo iniziale
- **Colonna I:** Impegnato/Accertato a residuo
- **Colonna J:** Stanziamento Assestato di Cassa
- **Colonna K:** Pagato/riscosso a competenza
- **Colonna M:** Voce di bilancio formattata
- **Colonna N:** Progressivo interno

> Se il file non rispetterà il modello standard verrà scartato.

Non è possibile caricare un file xlsx al di fuori del modello xlsx. Qualora il file caricato non rispetterà il formato standard allora verrà scartato e comparirà l'apposito messaggio di errore:

[Schermata: finestra di errore con messaggio "Errore nel formato dati del file XLS"]

Procedendo a scaricare il modello xlsx è possibile scegliere il **Tipo di estrazione**:

[Schermata: finestra "Parametri di selezione" con menu a tendina "Tipo estrazione" con opzioni "Modello esemplificativo" e "Modello completo", e pulsante "Scarica"]

---

### 1.1.1 Modello esemplificativo

Nel file xlsx denominato **"Modello esemplificativo"** vengono riportati solamente alcuni capitoli di esempio (2 di entrata e 2 di uscita) per mostrare all'utente la corretta compilazione delle colonne presenti nel file.

L'utente dovrà compilare **obbligatoriamente** solamente le colonne **A, B, C ed E** dei capitoli da inserire nella variazione di cassa.

La colonna C, codice voce di bilancio parte 2, deve comprendere sia la codifica del capitolo che dell'articolo, **senza l'indicazione del punto come separatore**.

> **N.B.** – Per i capitoli oggetto di variazione l'importo variazione, se negativo, va indicato con segno **-**.

Le restanti colonne non sono obbligatorie.

[Schermata: foglio Excel "Modello esemplificativo" con colonne A-N, righe precompilate di esempio con capitoli di entrata e uscita, colonna E "Importo variazione" evidenziata]

Nelle righe precompilate, a titolo esemplificativo, se non si andrà a compilare la colonna E "Importo variazione" non costituiranno alcuna movimentazione; non è necessario quindi cancellarle prima dell'importazione.

---

### 1.1.2 Modello completo

Nel file xlsx denominato **"Modello completo"** vengono riportati tutti i capitoli presenti nel bilancio dell'ente.

L'utente dovrà compilare solamente la colonna **E "Importo Variazione"** nelle sole righe riguardanti i capitoli oggetto di variazioni. Gli altri capitoli vanno lasciati ad importo **0,00**.

> **N.B.** – Per i capitoli oggetto di variazione l'importo variazione, se negativo, va indicato con segno **-**.

[Schermata: foglio Excel "Modello completo" con tutti i capitoli del bilancio, colonna E "Importo variazione" evidenziata con valori 0,00 per la maggior parte delle righe]

Solamente nel modello completo il programma compila automaticamente anche le altre colonne che possono agevolare l'utente nella predisposizione del file xlsx e degli importi di variazione, tra cui:

- **Colonna D:** Descrizione Capitolo
- **Colonna F:** Assestato Competenza
- **Colonna G:** Residuo Iniziale
- **Colonna H:** Impegnato/Accertato a residuo
- **Colonna I:** Assestato cassa
- **Colonna J:** Impegnato/Accertato a competenza
- **Colonna K:** Pagato/riscosso a competenza
- **Colonna L:** Pagato/Riscosso a residuo
- **Colonna M:** Voce di bilancio formattata
- **Colonna N:** Progressivo interno della voce

---

## 1.2 Importazione del file xlsx

Una volta compilato il file excel è possibile scegliere il tipo di elaborazione **"Simulazione/Esecuzione"** e successivamente tramite il bottone **ESEGUI** caricare il file xlsx compilato.

[Schermata: interfaccia "Importazione Variazione di Cassa da foglio excel" con campo "Tipo di elaborazione" impostato su "Simulazione" e pulsante "Esegui" evidenziato a destra; finestra di apertura file per selezionare il file da caricare]

---

### 1.2.1 Simulazione

L'operazione in simulazione consentirà di effettuare dei controlli sulle righe di variazione riportate nel file xlsx **senza apportare effettivamente alcun inserimento** all'interno di CWOL.

Qualora siano presenti errori, il programma scaricherà in automatico un file excel contenente i capitoli da controllare e la segnalazione riscontrata.

[Schermata: finestra di risultato "Importazione Variazione di cassa da fogli..." con riepilogo: "SIMULAZIONE – Risultato Importazione: Totale Voci lette da file Excel: 1, Totale Voci azionate su Database: 0, Totale Voci con errori: 1". Sotto, foglio Excel con colonna "Errore" evidenziata contenente messaggi di errore]

---

### 1.2.2 Elaborazione

L'operazione in Elaborazione andrà a **creare effettivamente** la variazione di bilancio.

Nel momento in cui si sceglierà "Elaborazione" comparirà infatti la possibilità di selezionare lo **Stato della variazione** "Provvisoria/Definitiva" e compilare gli **estremi dell'atto di variazione**.

[Schermata: interfaccia con "Tipo di elaborazione" impostato su "Elaborazione" e sezione "CASSA" con campi: "Stato della Variazione" (menu a tendina: Provvisoria/Definitiva), "Proposta di Variazione" (con campi n. e data), "Atto di Assunzione" (con campi n. e data)]

È possibile procedere anche direttamente in Elaborazione. Qualora in Elaborazione siano presenti voci con errore il programma inserirà comunque la variazione di cassa per i capitoli che non presentano errori. Per le altre invece scaricherà il file excel con le segnalazioni bloccanti.

È possibile poi procedere con una nuova elaborazione. Al momento dell'Elaborazione se vengono inseriti gli **stessi estremi** il programma accorperà la nuova importazione alla variazione di bilancio già presente con quell'atto di assunzione.

---

### 1.2.3 Simulazione e Elaborazione dello stesso file

Se si è proceduto prima in Simulazione e successivamente si vuol procedere in Elaborazione comparirà il seguente messaggio:

[Schermata: finestra "Attenzione" con messaggio: "Si vuole procedere con l'elaborazione dell'ultimo file caricato in simulazione senza apportare modifiche? Se si conferma verrà preso lo stesso file caricato in precedenza" – pulsanti "Conferma" e "Annulla"]

- Se si preme **Conferma**, il programma prenderà l'ultimo file caricato in simulazione per creare la variazione di cassa in elaborazione.
- Occorre quindi premere **Conferma** solamente se si vuole procedere con lo stesso file senza aver apportato alcuna modifica.
- Altrimenti premendo **Annulla** ricomparirà il riquadro per selezionare il nuovo file da importare.

---

## 1.3 Gestione variazione di cassa importata

Le variazioni di cassa importate tramite foglio excel saranno visibili e gestibili dal menu **"Variazioni di Bilancio"** come qualsiasi altra variazione inserita manualmente:

- Modifica variazione
- Conferma variazione
- Modifica estremi atto assunzione
- ecc.

[Schermata: interfaccia menu "Variazioni di Bilancio" con elenco delle variazioni importate e relative opzioni di gestione]