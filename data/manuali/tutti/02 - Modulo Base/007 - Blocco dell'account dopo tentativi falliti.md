# Blocco dell'account dopo tentativi falliti

## A cosa serve

Protegge gli account dai tentativi di indovinare la password: dopo una serie di accessi errati l'account (e, separatamente, l'indirizzo IP di provenienza) viene bloccato per un periodo di tempo, ostacolando gli attacchi automatizzati.

## Come si usa

### Cosa accade all'utente

1. Dopo un numero prefissato di tentativi di accesso con password errata, l'account viene **bloccato temporaneamente**.
2. Al successivo tentativo viene mostrato un messaggio che indica il blocco; l'accesso torna possibile allo scadere del periodo di blocco, oppure dopo lo sblocco da parte dell'amministratore.

### Gestione da parte dell'amministratore

1. Aprire la **gestione utenti** e selezionare l'utente interessato: il dettaglio mostra lo **stato di blocco** dell'account.

   [Screenshot: interfaccia di gestione utenti con il pulsante "Blocco manuale (admin)" evidenziato in alto a destra e un popup "Blocco Utente" che mostra il messaggio "Account UTENTE_BLOCCATO bloccato manualmente."]

2. Usare **Sblocca utente** per riabilitare immediatamente l'accesso, oppure **Blocco manuale** per impedire l'accesso indipendentemente dai tentativi.
3. Quando un account viene bloccato automaticamente, l'amministratore riceve una **notifica via email**.

### Blocco per indirizzo IP (amministratore)

Oltre al blocco del singolo account è disponibile un blocco per **indirizzo IP**, con soglie indipendenti (più alte, perché un IP può essere condiviso da più utenti). I parametri si impostano nella **configurazione dell'ente**.

[Screenshot: pagina di configurazione "Ambiente test ACN" nella sezione "Sicurezza" con i parametri evidenziati: "Blocco account abilitato per ente" (spuntato), "Tentativi prima del blocco" = 10, "Durata blocco (minuti)" = 5, "Blocco per IP abilitato per ente" (spuntato), "Tentativi prima del blocco IP" = 50, "Durata blocco IP (minuti)" = 5.]

## Casi particolari

- **Sblocco automatico:** il blocco temporaneo si risolve da solo allo scadere del tempo previsto, senza interventi.
- **Blocco manuale:** un blocco impostato manualmente dall'amministratore resta attivo finché non viene rimosso manualmente, anche dopo la scadenza del blocco temporaneo.
- **IP condivisi:** poiché più utenti possono presentarsi dallo stesso indirizzo (reti aziendali, proxy), le soglie del blocco per IP sono più alte di quelle del singolo account per ridurre i falsi positivi.
- **Accessi tramite identità esterna** (es. SPID o altri sistemi di autenticazione federata) non passano per questo controllo.

> **Nota di conformità:** la funzionalità contribuisce ai requisiti ACN **PR.AC-01** (gestione delle credenziali) e al monitoraggio degli accessi anomali (**DE.CM-01**).