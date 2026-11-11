# Notifica Automatica nell'Avviso della Carica Presente in Anagrafica

## Prerequisito

Dopo aver inserito nell'anagrafica del contribuente la **Carica** (erede, rappresentante legale, ecc…):

[Schermata: Anagrafica Contribuente con tab "Legami del Contribuente" aperto, sezione "Rappresentanti Legali" che mostra una riga con Prog. 2, Rappresentante Legale "ZOPPETTI TOURS", periodo Dal 14/02/2024 Al 16/02/2024, Carica 1 "Erede"]

## Procedura

### 1. Accedere alle Regole di Notifica

Andare a impostare le **Regole di Notifica** dal menù:

**Percorso:** `70. Tributi` → `40. TARI` → `10. Parametri di Configurazione` → `110. Regole di Notifica`

[Schermata: Menù a cascata che mostra il percorso 70. Tributi > 40. TARI > 10. Parametri di Configurazione > 110. Regole di Notifica]

### 2. Selezionare il Tipo Avviso

Si aprirà l'elenco dei tipi avviso:

[Schermata: Tabella "TARI: Regole di Notifica" con colonne Id, Servizio, Tipo, Sottotipo, Data. Sono presenti righe con Id da 1 a 10, Servizio TARI, vari tipi come "Invito al Contraddittorio", "Cumulo Giuridico", "Avviso di Rimborso", "Avviso di Accertamento" con sottotipi vari. Pulsanti "Nuovo" e "Apri Dettagli" a destra.]

Posizionarsi sul tipo di interesse (riga gialla) e andare su **Apri Dettagli** (nel caso in cui non ci sia il tipo avviso desiderato, aggiungerlo con il tasto **'Nuovo'**).

[Schermata: Stessa tabella con la riga Id 10 "Invito al Contraddittorio" evidenziata in giallo e il pulsante "Apri Dettagli" evidenziato]

### 3. Aggiungere una Nuova Regola

Si aprirà la seguente videata, da lì fare **'Nuovo'**:

[Schermata: Videata "Dettaglio Regole" con tabella contenente colonne Id, Id, Carica, Notifica Carica, Notifica Intestatario. È presente una riga con Id 106, Id 10, Carica "Intestatario". Pulsante "Nuovo" evidenziato a destra.]

### 4. Compilare i Parametri

Compilare la videata con i parametri richiesti (scelta della carica dal menù a tendina):

[Schermata: Form "Dettaglio Regola" con campi: "Id Regola di Notifica" = 10, "Carica Denunciante" = menù a tendina aperto con opzioni: Senza Vincoli sul Credito, Intestatario, Co-Intestatario, Coobbligato, Rappresentante Legale, Socio, Liquidatore, **Erede** (selezionato), Incorporante, Tutore, Curatore Fallimentare. Campi "Validità regola per i soggetti con carica di rappresentanza" e "Validità regola per i soggetti intestatari".]

Mettere il flag in base a come si vuole configurare la notifica, poi fare **'Aggiungi'**:

[Schermata: Form "Dettaglio Regola" con Id Regola di Notifica = 10, Carica Denunciante = Erede, entrambi i checkbox "Validità regola per i soggetti con carica di rappresentanza" e "Validità regola per i soggetti Intestatari" spuntati. Pulsante "Aggiungi" evidenziato.]

### 5. Verifica

Risulterà la nuova riga nel dettaglio regole:

[Schermata: Tabella "Dettaglio Regole" con due righe: Id 122 (Id 10, Carica "Erede", Notifica Carica ✓, Notifica Intestatario ✓) e Id 106 (Id 10, Carica "Intestatario", Notifica Carica ✓, Notifica Intestatario ✓).]

## Funzionalità Abilitate

Attraverso questa configurazione sarà possibile:

- **Agganciare all'avviso** (in fase di elaborazione di un avviso), i soggetti con le cariche che si è scelto di gestire: questi saranno visibili al tab **"Coobbligati"** dell'avviso

- **Produrre l'avviso** indicando apposito valore di spesa di notifica per ogni soggetto a cui si è scelto di notificare (es. se intestatario ha carta vengono messe spese per € 7,83 al codice fiscale dell'intestatario, mentre se il coobbligato ha la PEC, vengono messe spese per € 2,00 al codice fiscale del coobbligato)

- **Produrre appositi bollettini PagoPa** per ogni coobbligato, con i "suoi" importi (ovvero la sua spesa di notifica)

- **Produrre appositi F24** per ogni coobbligato, con i "suoi" importi (ovvero la sua spesa di notifica)

- **Produrre apposite stampe** del documento indirizzate ad ogni soggetto con i "suoi" importi