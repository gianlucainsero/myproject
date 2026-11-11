# Accesso alla suite Cityware Online

Questa è la pagina **ufficiale e unica** che descrive come accedere alla suite Cityware Online. Vale per **tutti i moduli** della piattaforma: le singole sezioni verticali rimandano a questa pagina anziché ripetere le istruzioni di accesso, così che il metodo di autenticazione sia documentato in un solo punto e sempre aggiornato.

## A cosa serve

Descrive la procedura con cui l'operatore entra nella piattaforma Cityware Online e le funzioni di sicurezza che possono intervenire durante l'accesso. È il punto di partenza comune a ogni modulo: una volta effettuato l'accesso, l'operatore raggiunge la propria scrivania e i verticali a cui è abilitato.

## Come si accede

### Raggiungere la pagina di accesso

Aprire nel browser l'indirizzo della piattaforma fornito dall'ente. Viene mostrata la pagina di **autenticazione**.

[Schermata della pagina di autenticazione Cityware Online: campo "Nome Utente", campo "Password", menu a tendina "Ente" (es. "Ambiente test ACN - ACN"), checkbox "Ricordami", pulsante "Entra" e link "Password dimenticata?"]

### Inserire le credenziali

1. Se è presente l'elenco degli **enti**, selezionare l'ente di appartenenza.
2. Inserire il **Nome Utente**.
3. Inserire la **Password**.
4. Facoltativamente spuntare **Ricordami** per conservare il nome utente sul dispositivo in uso.
5. Premere **Entra**.

### Accesso con identità digitale (SPID / sistema federato)

Se l'ente lo prevede, in cima alla pagina sono disponibili i pulsanti per accedere tramite **identità digitale** (es. SPID) o tramite il sistema di autenticazione federata dell'ente. In questi casi l'autenticazione avviene presso il fornitore di identità e non richiede l'inserimento di utenza e password nella piattaforma.

### Password dimenticata

Se non si ricorda la password, usare il collegamento **Password dimenticata?** presente nella pagina di accesso. La procedura di reimpostazione autonoma è descritta nella pagina **Recupero password self-service**.

## Cosa può succedere durante l'accesso

In base alle regole di sicurezza configurate dall'amministratore, dopo l'inserimento delle credenziali il sistema può richiedere un passaggio aggiuntivo prima di completare l'accesso:

- **Cambio password obbligatorio** — se la password è scaduta o non rispetta i requisiti di robustezza, viene richiesto di cambiarla. Vedi *Policy delle password*.
- **Verifica dell'indirizzo email** — se l'indirizzo email non è ancora verificato, può essere richiesto di verificarlo. Vedi *Verifica dell'indirizzo email*.
- **Codice del secondo fattore** — se è attiva l'autenticazione a due fattori, viene richiesto il codice generato dall'app o ricevuto via email. Vedi *Autenticazione a due fattori (MFA)*.
- **Account bloccato** — dopo ripetuti tentativi con password errata l'accesso può risultare temporaneamente bloccato. Vedi *Blocco dell'account dopo tentativi falliti*.

## Casi particolari

- **Più enti:** se l'utenza è abilitata su più enti, selezionare l'ente corretto prima di accedere; le funzioni disponibili dipendono dall'ente scelto.
- **Ricordami:** l'opzione conserva il solo nome utente per comodità; la password va sempre reinserita.
- **Credenziali non valide:** in caso di utenza o password errate viene mostrato un messaggio generico, senza indicare quale dei due dati sia errato, per non fornire informazioni utili a un eventuale attaccante.
- **Accesso tramite identità esterna:** con SPID o sistemi federati l'autenticazione è gestita dal fornitore di identità; le funzioni locali di blocco account e secondo fattore non si applicano a questi accessi.

> **Nota di conformità:** l'accesso descritto applica i requisiti ACN **PR.AC-01** (gestione delle identità e delle credenziali) e **PR.AC-03** (accesso protetto), integrandosi con le funzioni di sicurezza descritte nelle pagine successive della sezione.

---

**Sezione successiva:** [Policy delle password]