# Validazione Contratti

Il punto di menù **"Validazione Contratti"** consente di verificare che tutti i dati presenti in archivio siano conformi con le specifiche tecniche previste dalla norma.

Dopo la validazione è possibile controllare la correttezza dei dati inseriti direttamente dalla maschera **"Raccolte contratti"**.

[Schermata della maschera "Raccolte Contratti" con colonna "Validazione" che mostra lo stato di validazione per ogni contratto: VALIDO (verde), VALIDO CON ANOMALIE (giallo), NON VALIDO (rosso)]

Premendo con il mouse sulla riga in prossimità della colonna **Validazione** verranno visualizzati gli errori che il software ha rilevato nei dati. Come anticipato gli errori possono essere di 2 tipi:

- **ERRORI BLOCCANTI** – Sono gli errori che violano le specifiche tecniche predisposte dall'Autorità che quindi renderebbero **NON VALIDO** il tracciato XML esportato. Per tale ragione, tali dati sono automaticamente esclusi dal software al momento della generazione del file XML.

- **ANOMALIE NON BLOCCANTI** – Sono valori che il software identifica come "anomale" e per questo invita l'utente a prendere visione dell'eventuale errore. Ad esempio, se il valore indicato come **IMPORTO LIQUIDATO** è zero, il software segnala questa anomalia.

L'utente può **ACCETTARE** questo tipo di errori premendo sul bottone **"Accetta anomalie non bloccanti"**.

Il software manterrà tale impostazione anche nelle successive operazioni di validazione dei dati; nel caso in cui si presentasse una nuova anomalia, la segnalazione delle anomalie verrà nuovamente visualizzata.

> **In ogni caso, i dati con anomalie VENGONO COMUNQUE INCLUSI NEL FLUSSO XML ESPORTATO.**

I vari errori sono suddivisi per il singolo affidamento, identificato tramite il codice **CIG**.

---

[Schermata della finestra "Esito validazione raccolta" che mostra:
- Titolo: "Esito validazione della raccolta: CURE SOMMINISTRATE A UN CANE RITROVATO SUL TERRITORIO IL 12.07.2018"
- Sezione **ERRORI BLOCCANTI** con dettaglio per LOTTO CIG Z18246A06F, contenente errori su PARTICIPANTI e AGGIUDICATARI relativi a CODICE FISCALE non valido (valore non di 16 o 11 caratteri) e CODICE FISCALE ESTERO non impostato
- Sezione **ANOMALIE NON BLOCCANTI**
- Pulsante "Accetta anomalie non bloccanti"]

---

> ⚠️ **ATTENZIONE:** Per verificare che le correzioni siano state eseguite senza errori, **È NECESSARIO ESEGUIRE LA VALIDAZIONE** PER CONSENTIRE AL SOFTWARE DI VERIFICARE TUTTI I DATI.

Per ripristinare la normale visualizzazione delle **"Accetta anomalie non bloccanti"**, è sufficiente premere il relativo pulsante nella finestra di visualizzazione delle anomalie.