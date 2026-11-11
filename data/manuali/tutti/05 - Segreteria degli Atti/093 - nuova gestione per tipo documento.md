# Nuova Gestione per Tipo Documento

Con la presente guida viene mostrato come sia possibile attivare, impostare e gestire le funzioni riguardanti il campo **"Tipo Documento"** in riferimento alla gestione degli atti.

Se con la gestione tradizionale l'istruttore era obbligato a selezionare la tipologia di atto che si stava istruendo e l'iter più adatto al tipo di atto in questione, tramite la valorizzazione del campo **"Tipo Documento"** l'istruttore potrà impostare contestualmente sia la tipologia di atto, sia l'iter di riferimento.

Tale funzione è utile soprattutto laddove sia attiva la gestione degli iter multipli, per la quale si potrà consultare la guida raggiungibile cliccando sul seguente link:

* [Nuova Gestione degli Iter]

---

## Attivazione della funzionalità

L'attivazione delle funzionalità riguardanti il tipo documento all'interno della gestione atti potrà essere richiesta al presidio di assistenza di Cityware Online.

## Gestione dei Tipi Documento

Accedendo al menu **"Protocollo → Protocollo → Archivi → Tipo Documento"** e cliccando su **"Elenca"** si otterrà la visualizzazione ad elenco di tutti i tipi di documento creati:

- Per **creare un nuovo tipo documento** si dovrà cliccare sul pulsante **"Nuovo"** (evidenziato in rosso nell'immagine sottostante)
- Per **gestire un tipo documento già creato** basterà operare un doppio click sulla riga corrispondente

[Immagine: Elenco dei tipi di documento con pulsante "Nuovo" evidenziato in rosso e riga "1PNRR - PROPOSTA DI DETERMINA PNRR" evidenziata in verde]

## Dettaglio del Tipo Documento

Operando un doppio click sulla riga evidenziata in verde nell'immagine precedente si accederà al dettaglio del tipo documento che si intende gestire. Quanto indicato di seguito fa riferimento alla sezione **"Atti"** del tipo documento selezionato ed alla sotto-sezione **"Proprietà specifiche"**: questa sezione, con la relativa sotto-sezione, è presente solo attivando per gli atti la gestione del tipo documento, tramite i parametri generali del programma.

### Sezione "Atti"

#### Flag "Attiva negli atti"

Attivando il flag **"Attiva negli atti"**, sarà possibile associare il tipo documento che si sta gestendo come informazione di base durante la fase istruttoria di un atto.

#### Campo "Tipologia di Atto" e flag "Proposte"

Il campo **"Tipologia di Atto"** - combinato al flag **"Proposte"** - farà in modo che il tipo documento in questione venga reso disponibile per essere associato in fase istruttoria alla tipologia di atto selezionata ed alle relative proposte.

#### Campo "Iter di Partenza"

Col campo **"Iter di Partenza"** si potrà selezionare l'iter più adatto per il tipo documento in questione: in questo modo, nel momento in cui in fase istruttoria verrà selezionato il tipo documento, il sistema imposterà automaticamente per l'atto che si sta gestendo il relativo iter.

#### Campo "Organo"

Col campo **"Organo"** si potrà selezionare l'organo/tipo determina più adatto per il tipo documento in questione: in questo modo, nel momento in cui in fase istruttoria verrà selezionato il tipo documento, il sistema imposterà automaticamente per l'atto che si sta gestendo il relativo Organo/Tipo determina.

> **Nota:** Impostando il campo **"Iter di Partenza"** il sistema imposterà automaticamente il campo **"Organo"** in funzione dell'organo per il quale l'iter selezionato è stato creato (tramite il menu *"Gestione documentale → Gestione segreteria → Parametri → Iter Atti"*); diversamente sarà possibile impostare solo il campo **"Organo"**, in modo che in fase istruttoria - impostando il tipo documento in questione - il sistema carichi automaticamente il dato riguardante l'organo impostato, ma non un iter predefinito (che potrà essere impostato, di volta in volta, a seconda dei casi).

### Sotto-sezione "Proprietà specifiche"

Tramite la sotto-sezione **"Proprietà specifiche"**, mostrata in fondo all'immagine sottostante, si potrà impostare qualunque campo dell'atto in modo che:

- **Riporti automaticamente un dato predefinito** (ad esempio, si potrà impostare il campo "Natura Atto" in modo che - valorizzando il campo "Tipo Documento" in fase istruttoria - il sistema valorizzi in automatico il campo "Natura Atto" con un'indicazione predefinita)
- **Debba necessariamente essere valorizzato in fase istruttoria** (nel caso in esempio il campo "CUP" è impostato come non obbligatorio; impostandolo invece come obbligatorio, l'operatore che associa all'atto che sta istruendo il Tipo Documento "Proposta di determina PNRR", con codice "1PNRR", sarà obbligato a valorizzare il campo "CUP" per poter procedere al salvataggio)

[Immagine: Dettaglio del tipo documento con sezione "Atti" (Attiva negli atti, Tipologia di Atto: DETERMINA, Proposta, Iter di Partenza: 10 - ITER CON PNRR N. 1, Organo: D) e sotto-sezione "Proprietà specifiche" con campo ATTI_CUP_OBBLIGATORIO impostato su "NO"]

## Utilizzo in fase istruttoria

Nell'immagine sottostante viene mostrato il campo **"Tipo documento"** nella maschera di inserimento di un atto: cliccando sulla lente in corrispondenza del campo, il sistema proporrà un pannello da cui selezionare i tipi documento impostati per la tipologia di atto che si sta inserendo (nel caso in esempio la tipologia è quella relativa alle proposte di determina). Una volta valorizzato il campo "Tipo documento" il sistema caricherà automaticamente sull'atto che si sta istruendo tutte le impostazioni legate al **tipo documento** selezionato.

[Immagine: Maschera di inserimento atto con campo "Tipo Documento" evidenziato e pannello di ricerca "Risultato Ricerca" che mostra il tipo documento "1PNRR - PROPOSTA DI DETERMINA PNRR"]

---

## Esempi pratici

Per maggiore chiarezza vengono riportati di seguito due esempi circa il comportamento del programma, durante la fase istruttoria di un atto, in funzione delle varie impostazioni di base operate in riferimento al tipo documento associato all'atto: caso per caso verrà dunque riportata un'immagine che mostra le impostazioni di base per il tipo documento associato all'atto ed una serie di immagini che mostrano come varia la fase istruttoria di un atto in base a quanto impostato come default per il tipo documento associato all'atto.

### Primo caso di esempio: Tipo Documento completamente impostato

Nel **primo caso di esempio** il tipo documento **"PROPOSTA DI DETERMINA PNRR"** con codice **"1PNRR"** è stato impostato in ogni suo aspetto:

- Con la valorizzazione del flag **"Attiva in atti"**, è stato abilitato per essere associato ad un atto
- È stato associato alla **tipologia "Determine"**, in modo che il sistema proponga come associabili al tipo documento in questione (tramite il successivo campo **"Iter di partenza"**) solo gli iter associati alla tipologia selezionata (tramite il menu *"Gestione documentale → Gestione segreteria → Parametri → Iter Atti"*)
- Con la valorizzazione del flag **"Proposte"** si è indicato al programma come tale tipo documento debba poter essere associato in fase istruttoria anche alle proposte
- Nel campo **"Iter di partenza"** è stato impostato l'iter più adatto alla gestione del tipo documento in questione
- Nel campo **"Organo"** il sistema ha impostato in automatico l'organo a cui l'iter - precedentemente selezionato - è associato

[Immagine: Dettaglio tipo documento 1PNRR con Attiva negli atti ✓, Tipologia di Atto: DETERMINA, Proposta ✓, Iter di Partenza: 10 - ITER DETERMINA IMPEGNO PNRR CHECKLIST DI TIPO 1, Organo: D]

#### Fase istruttoria - Selezione del Tipo Documento

Creando una nuova proposta di atto e prima di operare qualunque altro tipo di impostazione, nell'immagine sottostante viene mostrato il pannello proposto dal sistema cliccando sulla lente in corrispondenza del campo **"Tipo documento"**: poiché si sta cercando di caricare una proposta, il sistema propone tutti i tipi documento per i quali sia stato impostato il flag **"Attiva in atti"** e per i quali sia stato valorizzato il flag **"Proposte"**. Poiché nel caso in esempio si sta istruendo una proposta di determina, andremo a selezionare con un doppio click il tipo documento **"PROPOSTA DI DETERMINA PNRR"**, con codice **"1PNRR"**.

[Immagine: Pannello "Risultato Ricerca" con elenco tipi documento disponibili: "1PNRR - PROPOSTA DI DETERMINA PNRR" e "G0001 - TIPO DOCUMENTO DELIBERA DI GIUNTA"]

#### Fase istruttoria - Valorizzazione automatica Organo/Tipo Atto

Nella seguente immagine viene mostrato come il campo **"Organo/Tipo Atto"** sia stato automaticamente valorizzato dal programma in funzione di quanto impostato nel campo **"Tipo documento"**.

[Immagine: Dati Principali dell'atto con Tipo Documento: 1PNRR PROPOSTA DI DETERMINA PNRR e Organo/Tipo Atto: D DETERMINA, entrambi valorizzati automaticamente]

#### Fase istruttoria - Scheda "Iter"

Una volta inseriti e salvati i dati essenziali dell'atto, il programma attiverà tutte le altre sezioni della schermata utili alla fase istruttoria, tra cui la scheda **"Iter"**: nell'immagine seguente viene mostrato come, accedendo alla scheda "Iter" e cliccando sul menu a tendina in corrispondenza del campo **"Iter da utilizzare"**, il sistema proporrà **un solo iter selezionabile**, che è quello impostato di default per il tipo documento "PROPOSTA DI DETERMINA PNRR".

[Immagine: Scheda "Iter" con campo "Iter da utilizzare" che mostra un solo iter disponibile: "ITER DETERMINA IMPEGNO PNRR CHECKLIST DI TIPO 1"]

---

### Secondo caso di esempio: Tipo Documento senza iter predefinito

Nel **secondo caso di esempio** il tipo documento **"PROPOSTA DI DETERMINA PNRR"** con codice **"1PNRR"** è stato impostato in ogni suo aspetto, **ad eccezione dell'iter**:

- Con la valorizzazione del flag **"Attiva in atti"**, è stato abilitato per essere associato ad un atto
- È stato associato alla **tipologia "Determine"**, in modo che il sistema proponga come associabili al tipo documento in questione (tramite il successivo campo **"Iter di partenza"**) solo gli iter associati alla tipologia selezionata (tramite il menu *"Gestione documentale → Gestione segreteria → Parametri → Iter Atti"*)
- Con la valorizzazione del flag **"Proposte"** si è indicato al programma come tale tipo documento debba poter essere associato in fase istruttoria anche alle proposte
- Nel campo **"Iter di partenza"** **non è stato impostato alcun iter**
- Nel campo **"Organo"** è stato impostato il valore **D**, che corrisponde all'organo "Determine"

[Immagine: Dettaglio tipo documento 1PNRR con Attiva negli atti ✓, Tipologia di Atto: DETERMINA, Proposta ✓, Iter di Partenza: vuoto, Organo: D]

#### Fase istruttoria - Selezione del Tipo Documento

Creando una nuova proposta di atto e prima di operare qualunque altro tipo di impostazione, nell'immagine sottostante viene mostrato il pannello proposto dal sistema cliccando sulla lente in corrispondenza del campo **"Tipo documento"**: poiché si sta cercando di caricare una proposta, il sistema propone tutti i tipi documento per i quali sia stato impostato il flag **"Attiva in atti"** e per i quali sia stato valorizzato il flag **"Proposte"**. Poiché nel caso in esempio si sta istruendo una proposta di determina, andremo a selezionare con un doppio click il tipo documento **"PROPOSTA DI DETERMINA PNRR"**, con codice **"1PNRR"**.

[Immagine: Pannello "Risultato Ricerca" con elenco tipi documento disponibili: "1PNRR - PROPOSTA DI DETERMINA PNRR" e "G0001 - TIPO DOCUMENTO DELIBERA DI GIUNTA"]

#### Fase istruttoria - Valorizzazione automatica Organo/Tipo Atto

Nella seguente immagine viene mostrato come il campo **"Organo/Tipo Atto"** sia stato automaticamente valorizzato dal programma in funzione di quanto impostato nel campo **"Tipo documento"**.

[Immagine: Dati Principali dell'atto con Tipo Documento: 1PNRR PROPOSTA DI DETERMINA PNRR e Organo/Tipo Atto: D DETERMINA, entrambi valorizzati automaticamente]

#### Fase istruttoria - Scheda "Iter"

Una volta inseriti e salvati i dati essenziali dell'atto, il programma attiverà tutte le altre sezioni della schermata utili alla fase istruttoria, tra cui la scheda **"Iter"**: nell'immagine seguente viene mostrato come, accedendo alla scheda "Iter" e cliccando sul menu a tendina in corrispondenza del campo **"Iter da utilizzare"**, il sistema proporrà di **selezionare un iter tra quelli associati all'organo "Determina"**.

[Immagine: Scheda "Iter" con campo "Iter da utilizzare" che mostra un menu a tendina con più iter disponibili: "ITER DI DETERMINA IMPEGNO PNRR CHECKLIST DI TIPO 1" e "ITER DI DETERMINA IMPEGNO GENERICA"]

---

## Riepilogo del comportamento del sistema

| Impostazione Tipo Documento | Comportamento in fase istruttoria |
|---|---|
| Flag "Attiva in atti" attivo | Il tipo documento è disponibile per l'associazione all'atto |
| Flag "Proposte" attivo | Il tipo documento è disponibile anche per le proposte |
| "Iter di Partenza" impostato | Il sistema propone **un solo iter** (quello predefinito) |
| "Iter di Partenza" vuoto + "Organo" impostato | Il sistema propone **tutti gli iter** associati all'organo selezionato |
| "Iter di Partenza" impostato | Il campo "Organo" viene valorizzato automaticamente |
| "Proprietà specifiche" con campo obbligatorio | L'operatore è obbligato a valorizzare quel campo per salvare |