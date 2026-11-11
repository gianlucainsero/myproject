# App di autenticazione (Google Authenticator, Microsoft Authenticator, FreeOTP)

## A cosa serve

Un'app di autenticazione è un'applicazione gratuita da installare sullo smartphone che genera il **codice a 6 cifre** richiesto come secondo fattore all'accesso. Il codice cambia ogni 30 secondi ed è calcolato dal telefono: non arriva via SMS né via email e funziona anche senza connessione internet.

Questa pagina spiega, passo per passo, come installare una di queste app e come collegarla al proprio accesso a Cityware Online. Il funzionamento generale del secondo fattore è descritto nella pagina *Autenticazione a due fattori (MFA)*.

## Prima di iniziare

- Tenere a portata di mano lo **smartphone** (o tablet): l'app va installata lì.
- Verificare che sul telefono sia attiva l'**ora automatica** (data e ora impostate dalla rete). È il requisito più importante: i codici dipendono dall'orario e, se l'orologio del telefono è sfasato, i codici verranno rifiutati.
- Serve la connessione internet **solo per scaricare l'app**; dopo, la generazione dei codici funziona anche offline.
- Avere davanti, sul computer, la schermata di attivazione di Cityware Online con il **QR code** (dal proprio *Profilo* → configurazione dell'autenticazione a due fattori → *app di autenticazione*).

## Scegliere l'app

Le tre app seguenti sono **gratuite** e **funzionano tutte allo stesso modo**: è sufficiente sceglierne una.

| App | Note utili |
| --- | --- |
| **Google Authenticator** | La più diffusa e semplice. Buona scelta per chi vuole il minimo indispensabile. |
| **Microsoft Authenticator** | Comoda per chi usa già un account Microsoft/Office 365; offre il backup dei codici sul cloud. |
| **FreeOTP** | Leggera e open source, senza account da creare. |

> Non è necessario creare un account per usare queste app come generatore di codici (con Google e Microsoft può essere proposto l'accesso a un account personale: è **facoltativo** e serve solo per il backup, non per generare i codici).

## Dove scaricare l'app (link ufficiali)

Dal telefono, toccare il badge dello store corrispondente per aprire direttamente la scheda ufficiale dell'app. In alternativa, cercare l'app per nome nello store (vedi sezione successiva).

- **Google Authenticator** → [App Store] / [Google Play]
- **Microsoft Authenticator** → [App Store] / [Google Play]
- **FreeOTP** → [App Store] / [Google Play]

## Installare l'app

### Su Android (telefoni Samsung, Xiaomi, Huawei, ecc.)

1. Aprire l'applicazione **Play Store** (l'icona colorata a forma di triangolo).
2. Toccare la barra di ricerca in alto e digitare il nome dell'app scelta (es. *Google Authenticator*).
3. Individuare l'app corretta (controllare il nome e l'editore: *Google LLC*, *Microsoft Corporation* oppure *FreeOTP*) e toccare **Installa**.
4. Attendere il completamento e toccare **Apri**.

### Su iPhone / iPad

1. Aprire l'applicazione **App Store** (l'icona azzurra con la lettera "A" stilizzata).
2. Toccare **Cerca** in basso a destra e digitare il nome dell'app scelta.
3. Individuare l'app corretta (stesso controllo su nome ed editore) e toccare **Ottieni**, quindi confermare con Face ID, Touch ID o password Apple.
4. Al termine toccare **Apri**.

## Aggiungere l'accesso Cityware Online nell'app

L'operazione consiste nel far leggere all'app il **QR code** mostrato dal computer. La prima volta l'app chiederà il permesso di usare la fotocamera: concederlo.

### Google Authenticator

1. Alla prima apertura, toccare eventualmente **Inizia**. È possibile saltare l'accesso all'account Google (non è obbligatorio).
2. Toccare il pulsante **+** (in basso a destra) e scegliere **Scansiona un codice QR**.
3. Inquadrare con la fotocamera il QR code mostrato sullo schermo del computer.
4. L'account viene aggiunto e compare subito un codice a 6 cifre.

### Microsoft Authenticator

1. Alla prima apertura, accettare le condizioni. È possibile saltare l'accesso a un account Microsoft.
2. Toccare il pulsante **+** (in alto a destra) e scegliere come tipo di account **Altro account (Google, Facebook, ecc.)**.
3. Inquadrare il QR code mostrato sullo schermo del computer.
4. L'account viene aggiunto e compare un codice a 6 cifre.

### FreeOTP

1. Alla prima apertura, toccare il pulsante **+** oppure l'icona del QR code (in alto).
2. Scegliere l'opzione di **scansione del QR code** (icona della fotocamera).
3. Inquadrare il QR code mostrato sullo schermo del computer.
4. L'account viene aggiunto all'elenco; toccandolo viene mostrato il codice a 6 cifre.

### Se il QR code non si legge (inserimento manuale)

Se la fotocamera non riesce a inquadrare il QR, Cityware Online consente di mostrare il **codice testuale equivalente** (una sequenza di lettere e numeri). In quel caso, nell'app:

1. Scegliere l'opzione di inserimento manuale: *Inserisci una chiave di configurazione* (Google), *Immetti codice manualmente* (Microsoft) o l'inserimento manuale di FreeOTP.
2. Come **nome account** indicare un'etichetta riconoscibile (es. "Cityware Online").
3. Nel campo **chiave** (o *segreto*) digitare esattamente il codice testuale mostrato dal computer, senza spazi.
4. Confermare: l'account viene aggiunto e compare il codice a 6 cifre.

## Leggere e inserire il codice

- L'app mostra un **codice a 6 cifre** accanto al nome dell'account.
- Un cerchietto o una barra che si svuota indica quanto tempo resta prima che il codice cambi (ogni 30 secondi circa).
- Per completare l'attivazione, digitare il codice mostrato nell'app nel campo di conferma di Cityware Online e confermare.
- Ai successivi accessi, dopo utenza e password, digitare il codice del momento letto dall'app.

> Il codice va digitato **senza spazi**. Se sta per scadere (cerchietto quasi vuoto), conviene attendere che ne compaia uno nuovo prima di inserirlo.

Al termine dell'attivazione Cityware Online mostra i **codici di recupero**: salvarli in un luogo sicuro. Servono ad accedere qualora lo smartphone con l'app non fosse disponibile.

## Casi particolari / errori comuni

- **Il codice viene rifiutato.** Nella quasi totalità dei casi l'**ora del telefono non è sincronizzata**. Attivare data e ora automatiche nelle impostazioni del telefono e riprovare. Verificare anche di leggere il codice *corrente* (cambia ogni 30 secondi).
- **Ho cambiato smartphone.** I codici non si trasferiscono automaticamente (salvo backup su Microsoft Authenticator o Google). Sul nuovo telefono va **rifatta l'attivazione** dal proprio *Profilo* di Cityware Online, generando un nuovo QR code.
- **Nell'app ho più account/righe.** È normale se l'app è usata anche per altri servizi. Individuare la riga con l'etichetta di Cityware Online (di norma riporta l'indirizzo del sistema e il nome utente).
- **Non ho lo smartphone con me.** Accedere usando uno dei **codici di recupero** salvati durante l'attivazione. Se anche quelli non sono disponibili, rivolgersi all'amministratore dell'ente.
- **Ho eliminato l'app per errore.** Reinstallarla e rifare l'attivazione dal *Profilo* (il vecchio collegamento non è più valido).

## In sintesi

1. Installare una delle tre app dallo store del telefono.
2. Aprire in Cityware Online la schermata con il QR code (*Profilo* → due fattori → app).
3. Nell'app, aggiungere un account scansionando il QR code.
4. Digitare in Cityware Online il codice a 6 cifre mostrato dall'app.
5. Salvare i codici di recupero.