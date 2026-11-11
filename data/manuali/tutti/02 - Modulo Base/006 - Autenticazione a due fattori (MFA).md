# Autenticazione a due fattori (MFA)

## A cosa serve

Aggiunge un secondo livello di sicurezza all'accesso: oltre alla password serve un codice temporaneo, generato da un'app di autenticazione o ricevuto via email. Anche se la password venisse scoperta, l'accesso resterebbe protetto.

## Come si usa

### Attivare il secondo fattore

1. Dal proprio **Profilo** avviare la **configurazione dell'autenticazione a due fattori**. Per sicurezza, può essere richiesta la conferma della password attuale.
2. Scegliere il tipo di secondo fattore: **app di autenticazione** (consigliato) oppure **email**.

[Schermata: finestra "Dati Utente" con il pannello "Autenticazione a due fattori" attivo, che mostra le opzioni "Chiudi", "App Authenticator (TOTP)" e "OTP via Email". Sul lato destro sono visibili i pulsanti "Aggiorna", "Configura autenticazione a due fattori" e "Rigenera codici di recupero".]

1. **App di autenticazione:** viene mostrato un **QR code**. Inquadrarlo con un'app come *Google Authenticator*, *Microsoft Authenticator* o *FreeOTP*, quindi inserire il codice a 6 cifre per confermare. Per l'installazione e la configurazione dell'app passo per passo, vedere *App di autenticazione*.

[Schermata: finestra "Autenticazione a due fattori" con istruzione "Scansiona il QR Code con la tua app authenticator (Google Authenticator, Microsoft Authenticator, FreeOTP) e inserisci il codice generato dall'app nel campo sottostante." È visibile un QR code, un pulsante "Visualizza il codice segreto", un campo di input e i pulsanti "Indietro" e "Conferma e attiva".]

2. **Email:** ricevere un codice all'indirizzo verificato e inserirlo per confermare.

3. Al termine dell'attivazione vengono mostrati i **codici di recupero**: salvarli in un luogo sicuro. Servono ad accedere se il secondo fattore non è disponibile.

[Schermata: finestra "Autenticazione a due fattori" con messaggio "Salva questi codici di recupero in un luogo sicuro! Usali se perdi l'accesso all'app o all'email. Ogni codice e' valido una sola volta." Sono visibili 8 codici alfanumerici di 10 caratteri (es. QUYV6A7G9A, BZZ9CK8URN, ecc.), con pulsanti "Copia", "Stampa" e "Ho salvato i codici - Chiudi".]

### Accedere con il secondo fattore

1. Inserire come di consueto utenza e password.
2. Viene quindi richiesto il **codice del secondo fattore**: inserire il codice dall'app (o quello ricevuto via email).

[Schermata: finestra "Accesso SSO" con pannello "Autenticazione a due fattori" che richiede "Inserisci il codice a 6 cifre mostrato dalla tua app di autenticazione. In alternativa puoi usare uno dei codici di recupero (10 caratteri)." È visibile un campo con codice di esempio "741225", una checkbox "Non richiedere più su questo dispositivo" e il pulsante "Conferma".]

3. In alternativa, se non si ha accesso al secondo fattore, inserire uno dei **codici di recupero**.
4. Se si accede da un **dispositivo personale e attendibile**, è possibile spuntare **Non richiedere più su questo dispositivo** (quando la funzione è attiva). Ai successivi accessi da quel dispositivo, per un periodo limitato, il secondo fattore non verrà più richiesto: basteranno utenza e password.

### Ricordare il dispositivo (dispositivo fidato)

Spuntando *Non richiedere più su questo dispositivo* al momento della verifica, il dispositivo in uso viene riconosciuto come **fidato** e il secondo fattore non viene più chiesto per un periodo prestabilito. È una comodità da usare **solo su dispositivi personali**, mai su computer condivisi o pubblici.

### Gestire il secondo fattore dal profilo

Nel profilo è indicato lo **stato** dell'autenticazione a due fattori. Da qui è possibile **configurare** il metodo, **rigenerare** i codici di recupero e **dimenticare i dispositivi fidati** (con il pulsante *Dimentica dispositivi fidati*, presente quando esiste almeno un dispositivo riconosciuto): da quel momento il secondo fattore tornerà a essere richiesto su tutti i dispositivi.

[Schermata: finestra "Dati Utente" con indicatore "Autenticazione a due fattori attiva (App Authenticator)" evidenziato in verde, e sul lato destro i pulsanti "Aggiorna", "Configura autenticazione a due fattori" e "Rigenera codici di recupero".]

## Casi particolari

- **QR non leggibile:** è possibile mostrare il codice testuale equivalente da inserire manualmente nell'app.
- **Codici di recupero monouso:** ogni codice di recupero può essere usato una sola volta. Quando stanno per esaurirsi (o sono esauriti) il sistema avvisa all'accesso e invita a rigenerarli dal profilo.
- **Rigenerazione:** rigenerando i codici di recupero, quelli precedenti non sono più validi.
- **Cambio metodo:** è possibile riconfigurare l'autenticazione scegliendo un metodo diverso; la disattivazione completa è riservata all'amministratore.
- **Secondo fattore smarrito senza codici:** rivolgersi all'amministratore, che può azzerare la configurazione dell'utente (vedi pagina *Configurazione della sicurezza di accesso*).
- **Dispositivo fidato e codici di recupero:** se si è entrati usando un **codice di recupero**, il dispositivo non viene mai ricordato come fidato; l'opzione si applica solo a un accesso completato con il secondo fattore vero e proprio.
- **Durata e numero limitati:** il riconoscimento del dispositivo **scade** dopo un periodo prestabilito (impostato dall'amministratore) e va poi rinnovato; il numero di dispositivi ricordati è limitato e, raggiunto il massimo, i meno usati vengono dimenticati automaticamente.
- **Notifica di nuovo dispositivo:** quando un dispositivo viene riconosciuto come fidato, l'utente riceve una **email di avviso**; se non lo si riconosce, accedere al profilo e usare *Dimentica dispositivi fidati*.
- **Reset da amministratore e recupero password:** l'azzeramento del secondo fattore da parte dell'amministratore dimentica tutti i dispositivi fidati dell'utente; lo stesso avviene quando la password viene reimpostata tramite il **recupero password** (*Password dimenticata?*), così che un eventuale accesso non autorizzato non resti agganciato a un dispositivo già riconosciuto.

> **Nota di conformità:** la funzionalità copre i requisiti ACN **PR.AC-07** (autenticazione a più fattori commisurata al rischio) e **PR.AC-03** (accesso remoto protetto da MFA). Il riconoscimento del dispositivo fidato è una misura **commisurata al rischio**: riduce le richieste del secondo fattore solo su dispositivi personali riconosciuti, per un periodo limitato e revocabile, senza indebolire la protezione della password.

---

**Sezione successiva:** [App di autenticazione](#)