# Firma remota

## Attivazione firma remota

Al completamento della pratica, riceverete una mail automatica di Aruba, contenente il nome utente e il codice utente, e un SMS con la password temporanea.

> **ATTENZIONE:** conservare la mail con il codice, che in caso di smarrimento non è più recuperabile. Senza codice utente la firma diventa inutilizzabile.

1. Aprire la mail: è presente un link per impostare la password. **Cliccare sul link**. Sarete reindirizzati al Pannello di gestione Aruba.

2. Seguire la procedura mostrata per il **reset della password**.
   La nuova password deve rispettare le caratteristiche indicate da Aruba.

3. Procedere infine con la sincronizzazione del dispositivo (paragrafo 3).

> **ATTENZIONE:** se il cambio password non va a buon fine o se non avete ricevuto la password temporanea via SMS, potete passare direttamente alla procedura di **recupero password** presente nel Pannello di gestione Aruba (paragrafo 2).

## Recupero password

1. Accedere al link: https://selfcare.firma-remota.it.

2. Cliccare **Recupero password**.

   [Screenshot: Pannello di gestione Aruba – Pagina di Login con campi "Nome utente" e "Password", pulsanti "Login", "Recupero nome utente" e "Recupero password"]

3. Inserire il **Codice utente** e il **Nome utente** (indicati nella mail di attivazione), selezionare la casella *Non sono un robot* e infine **Prosegui**.

   [Screenshot: Pagina "Recupero password" con campi "Codice utente", "Nome utente", checkbox "Non sono un robot" e pulsante "Prosegui"]

4. Verrà chiesto un codice: selezionare l'opzione **via SMS**. Inserire il codice ricevuto per SMS.

5. Verrà inviata una mail di verifica. Aprire la mail ricevuta e cliccare il link contenuto.

6. Impostare la nuova password.
   La nuova password deve rispettare le caratteristiche indicate da Aruba.

7. Procedere infine con la sincronizzazione del dispositivo (paragrafo 3).

## Sincronizzazione del dispositivo

1. Accedere al link: https://selfcare.firma-remota.it.

2. Fare l'accesso col proprio *nome utente* e *password* di firma.

3. Selezionare **Sincronizzazione dispositivo OTP**.

   [Screenshot: Pannello "Gestione utenza" con menu laterale (Informazioni profilo, Cambio password, Telefono, Email, Codice Utente, Test dispositivo OTP, Cambia o riconfigura smartphone o dispositivo OTP, Sincronizzazione dispositivo OTP) e sezione "Informazioni profilo" con Dati Generali e Dispositivi Associati]

4. Selezionare dalla tendina il seriale del *Dispositivo fisico* (codice numerico di 13 cifre presente sul retro del token),
   inserire un *Codice OTP* generato dal dispositivo stesso
   e cliccare **Sincronizza dispositivo**.

   [Screenshot: Pagina "Sincronizzazione dispositivo" con campo a tendina "Dispositivo fisico - seriale", campo "Codice OTP 1" e pulsante "Sincronizza dispositivo"]

   Alla conclusione dell'operazione, cliccare **Esci** in alto a destra.

## Salvataggio credenziali in CWOL

Le credenziali della propria firma possono essere memorizzate in Cityware online.

1. Da *Impostazioni e Utilità* si accede al **Pannello di controllo**. Cliccare **Gestisci il tuo Profilo**.

   [Screenshot: Pannello di Controllo di Cityware Online con icone: Gestisci il tuo Profilo, Firma un Documento, Permessi Menù, Gestione Portlet, Verifica un Documento, Gestione Parametri, Gestione parametri sessione, Poste Comunicazioni Elettroniche, Elenco Report]

2. Inserire il **nome utente** e la **password** della firma remota nella sezione *Utente Firma Remota*.
   I campi *Dominio di Firma* e *Tipo Firma* **non** sono da configurare per le firme standard.
   Cliccare **Aggiorna** per salvare i dati.

   [Screenshot: Finestra "Dati Utente" con sezione "Utente Firma Remota" contenente campi Utente, Password, Dominio di Firma, Tipo Firma e pulsante "Aggiorna"]

## Firmare in CWOL

1. Accedere a Cityware online.

2. Da *Impostazioni e Utilità* si accede al **Pannello di controllo**. Cliccare **Firma un Documento**.

   [Screenshot: Pannello di Controllo con pulsante "Firma un Documento" evidenziato]

3. Selezionare dal proprio pc il file da firmare.

   [Screenshot: Finestra "Acquisizione File" con pulsante "Carica il file da firmare" e dialog di selezione file di Windows]

4. Viene aperta la maschera di firma.
   In alto è riportato il documento che si andrà a firmare.
   I campi *Certificatore*, *Tipo di Firma*, *Dominio Autenticazione* sono già impostati e non vanno cambiati.
   Inserire il **nome utente** e la **password** (se non ancora memorizzati nel proprio profilo) e un **codice OTP** generato dal dispositivo.
   Cliccare **Conferma**.

   [Screenshot: Finestra "Autenticazione Firma Remota" con tabella "Documenti da firmare" (Nome File, Dim.), campi: Certificatore (ArubaSign), Tipo di Firma (Firma Digitale remota in standard CAdES (p7m)), Dominio Autenticazione (firma), Nome Utente, Password, OTP (One Time Pass) e pulsante "Conferma"]

   Se la firma va a buon fine, viene salvato in locale il file in formato **p7m**.

## Sostituzione del dispositivo

Nel caso in cui il dispositivo di firma smetta di funzionare e la procedura di sincronizzazione (paragrafo 3) non sia andata a buon fine, si può richiedere la sostituzione del vecchio dispositivo fisico con uno nuovo.

Dopo aver ricevuto il nuovo dispositivo, bisogna:

1. Accedere al link: https://selfcare.firma-remota.it.

2. Fare l'accesso col proprio *nome utente* e *password* di firma.

3. Selezionare **Cambia o riconfigura smartphone o dispositivo OTP**.

   [Screenshot: Pannello "Selfcare di firma" con menu laterale e sezione "Gestione dispositivi" con voce "Cambia o riconfigura smartphone o dispositivo OTP" evidenziata. Pagina principale con titolo "Cambia o riconfigura smartphone o dispositivo OTP", Step 1 "Seleziona il dispositivo che vuoi sostituire" e Step 2 "Inserisci password"]

4. Inserire la password e **Prosegui**.

5. Inserire il codice ricevuto via SMS e **Prosegui**.

   [Screenshot: Dialog "Inserisci codice OTP temporaneo" con campo di inserimento e pulsante "Prosegui"]

6. Completare la procedura inserendo il nuovo seriale del dispositivo (codice numerico di 13 cifre presente sul retro del token).

7. Procedere infine con la sincronizzazione del dispositivo (paragrafo 3).