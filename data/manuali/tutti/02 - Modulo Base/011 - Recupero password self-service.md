# Recupero password self-service

## A cosa serve

Permette all'utente che ha dimenticato la password di reimpostarla in autonomia, tramite un codice monouso inviato alla propria email verificata, senza attendere l'intervento dell'assistenza.

## Come si usa

1. Nella pagina di **accesso**, premere il collegamento **Password dimenticata?**.

   [Screenshot: pagina di accesso con campi "Nome Utente" (es. UTENTE_DEMO), "Password", "Ente" (es. Ambiente test ACN - ACN), checkbox "Ricordami", pulsante "Entra" e link "Password dimenticata?" evidenziato da una freccia verde]

2. Indicare l'utenza per cui recuperare la password. Il sistema invia un **codice monouso** all'indirizzo email verificato dell'utente, mostrato in forma mascherata per riservatezza.

   [Screenshot: finestra modale "Recupero password" con messaggio: "Hai richiesto il recupero della password per l'utente UTENTE_DEMO. Se l'account ha un indirizzo email associato e verificato, riceverai a breve un codice OTP da inserire nel campo sottostante. Altrimenti, scrivi una richiesta di reset della password all'amministratore di sistema: invia email". Campo di inserimento codice e pulsante "Prosegui"]

3. Inserire il codice ricevuto nell'apposita schermata.

4. Dopo la verifica del codice, impostare la **nuova password** (rispettando i requisiti di complessità) ed effettuare nuovamente l'accesso.

## Casi particolari

- **Codice a tempo:** il codice di recupero ha una validità limitata ed è **monouso**: una volta utilizzato non è più valido.
- **Limite di richieste:** è previsto un numero massimo di richieste in un dato intervallo, per evitare abusi.
- **Email non verificata:** se l'indirizzo email dell'utente non è ancora verificato, il recupero self-service non è disponibile e la richiesta viene indirizzata al Servizio Assistenza. Verificare prima l'indirizzo email rende disponibile il recupero autonomo.
- **Privacy:** l'indirizzo email a cui viene inviato il codice è sempre mostrato mascherato.

> **Nota di conformità:** la funzionalità contribuisce al requisito ACN **PR.AC-01** (gestione delle credenziali), consentendo il ripristino sicuro delle credenziali tramite un canale verificato.

---

**Sezione successiva:** Configurazione della sicurezza di accesso (amministratore)