# Invio dei verbali all'albo pretorio al posto dell'ufficio messi

## A COSA SERVE

Alcuni uffici messi non riescono più a gestire tutte le richieste di notifica. Per questi comuni i verbali possono essere inviati **direttamente all'albo pretorio**, senza cambiare il modo di lavorare: si continua a usare la spedizione ai messi e si modifica solo l'anagrafica della ditta dei messi di quel comune.

Per il comune configurato:

- la PEC viene inviata all'indirizzo dell'albo pretorio;
- nella stampa del verbale si allega la lettera per l'albo al posto di quella per i messi;
- oggetto e testo della PEC sono quelli scritti nell'anagrafica della ditta.

Nell'esempio configuriamo per DEMO la ditta **6527 - Comune di Napoli**, che oggi invia all'ufficio protocollo del Comune di Napoli.

---

## 1. CREARE LA LETTERA PER L'ALBO

La lettera da allegare al verbale è un documento della procedura. Nell'esempio lo chiamiamo **RPT_LETTERA_ALBO**. *Se lo avete già configurata, passate al punto 2.*

1. Da **App Center** (o dai tre puntini) apri **Codice della Strada > Anagrafiche > Documenti**.

   [Screenshot: menu Anagrafiche con voci "Documenti" per la lettera e "Ditte/Enti CDS" per la ditta dei messi]

2. Premi **F2-Nuovo**, poi **Copia da…** e scegli **RPT_LETTERA_MESSI**: vengono copiati descrizione, classificazione, funzione e testo della lettera ai messi.

3. Nel campo **Codice** sostituisci il valore proposto con **RPT_LETTERA_ALBO** e indica una descrizione, per esempio **LETTERA ALBO**.

   [Screenshot: Nuovo documento con codice RPT_LETTERA_ALBO e, a destra, il pulsante "Copia da…". Il documento deve avere: Tipo: XHTML, Funzione: STAMPE VERBALI. Con il pulsante [Copia da…] si può copiare da un'altra lettera configurata la classificazione, la funzione e il testo. Ad esempio: prendere la "RPT_LETTERA_MESSI" ed usarla come base.]

4. Premi **F5-Aggiungi**, poi apri il documento e adatta il testo della lettera per l'albo pretorio.

---

## 2. CONFIGURARE LA DITTA DEI MESSI

Una volta che abbiamo configurato la lettera per l'Albo, possiamo configurare la Ditta.

**PASSO 1** Da App Center aprire **Codice della Strada > Anagrafiche > Ditte/Enti CDS**. Se conosciamo il codice della ditta, lo possiamo mettere filtro (nell'esempio abbiamo proceduto con la ditta 6527). Entrare nell'elenco con il tasto **"Elenca*"** e aprire la ditta.

[Screenshot: Anagrafica Ditte CDS con filtro Codice "6527" e pulsante "F6-Elenca"]

**PASSO 2** Controllare che **"Tipo Ditta"** sia **MESSI COMUNALI** e che **"Città"** sia il comune di residenza dei destinatari, scritto come nell'archivio (NAPOLI).

**PASSO 3** Nel campo **Email** sostituire l'indirizzo dell'ufficio messi con la PEC dell'albo pretorio. Per il Comune di Napoli è **urp@pec.comune.napoli.it** (Servizio Protocollo, URP e Albo Pretorio).

[Screenshot: Anagrafica Ditta 6527 con Tipo Ditta "MESSI COMUNALI", Città "NAPOLI", Email "urp@pec.comune.napoli.it"]

**PASSO 4** Scorrere fino al riquadro **Visure Estere** e compilare:

- **Lettera**: il codice del documento creato al punto 1, `RPT_LETTERA_ALBO`. Attenzione: è il campo Lettera del riquadro **Visure Estere**, non quello del riquadro **Notifiche Estere** che si trova subito sopra;
- **Oggetto email**: l'oggetto della PEC;
- **Corpo email**: il testo della PEC. Gli a capo vengono mantenuti.

[Screenshot: Riquadro "Visure Estere" con campi Lettera (RPT_LETTERA_ALBO), Oggetto email e Corpo email compilati]

**PASSO 5** Premere **F6-Aggiorna** per salvare ogni modifica apportata.

[Screenshot: Pulsanti F6-Aggiorna, F7-Cancella, F3-Torna Elenco, F8-Altra Ricerca]

---

## Esempio per il Comune di Napoli

- **Destinatario**: urp@pec.comune.napoli.it
- **Lettera**: RPT_LETTERA_ALBO
- **Oggetto della email**: `Richiesta di pubblicazione all'albo pretorio - Verbale n. @{$D4}@/@{$D5}@`
- **Corpo della email**:

```
Spett.le Comune di Napoli - Servizio Protocollo, URP e Albo Pretorio,
si trasmette in allegato il verbale n. @{$D4}@/@{$D5}@ intestato a @{$D145}@
per la pubblicazione all'albo pretorio.
Cordiali saluti
Polizia Locale / Municipale di DEMO
```

In **Oggetto email** e **Corpo email** si possono inserire dati del verbale con le variabili, come nei documenti della procedura. Le più utili:

| Variabile | Valore inserito |
|-----------|----------------|
| `@{$D4}@` | Numero del verbale |
| `@{$D5}@` | Anno del verbale |
| `@{$D145}@` | Nominativo del soggetto a cui è intestato il verbale |

> **NOTA:** Al salvataggio la procedura controlla come sono scritte le variabili: se una è scritta male, per esempio senza la chiusura `}@`, la ditta non viene salvata e compare un messaggio che indica il campo da correggere.

---

## DA SAPERE

- Se **Lettera**, **Oggetto email** o **Corpo email** restano vuoti, per quel campo si usa quello standard dei messi.
- La nuova PEC vale per i flussi creati **dopo** la modifica: i flussi già generati mantengono l'indirizzo precedente.
- Il codice indicato in **Lettera** deve esistere tra i Documenti, altrimenti la generazione del flusso si ferma con il messaggio *"modello di stampa … non trovato"*.
- Verificare sempre la PEC dell'albo pretorio sul sito istituzionale del comune.
- Per tornare all'invio all'ufficio messi basta rimettere la sua PEC nel campo **Email** e svuotare **Lettera**, **Oggetto email** e **Corpo email** del riquadro **Visure Estere**.