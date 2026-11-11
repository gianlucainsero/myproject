# Policy delle password

## A cosa serve

Garantisce che le password degli operatori rispettino requisiti minimi di robustezza e vengano rinnovate periodicamente, riducendo il rischio di accessi non autorizzati per password deboli o compromesse.

## Come si usa

### Cambiare la password (utente)

1. Dal proprio **Profilo** aprire la funzione di **cambio password**.
2. Inserire la nuova password nel campo dedicato: durante la digitazione il sistema mostra, per ciascun requisito, se è soddisfatto o mancante, e indica il livello di robustezza raggiunto.

   [Screenshot: finestra "Gestione Password" con campi "Nuova Password" e "Conferma Password", pulsante "Genera password", indicatore di robustezza (es. "Debole") e pannello requisiti per l'utente corrente con checklist: Lunghezza minima 12 caratteri, Lunghezza massima 64 caratteri, Almeno una lettera maiuscola (A-Z), Almeno una lettera minuscola (a-z), Almeno un numero (0-9), Almeno un carattere speciale, Forza password: Accettabile o superiore, Le password inserite coincidono. Messaggio in rosso: "La password non soddisfa tutti i requisiti".]

3. In alternativa premere **Genera password** per ottenere automaticamente una password conforme.
4. Ripetere la password nel campo di conferma. Il pulsante di salvataggio si attiva solo quando tutti i requisiti sono soddisfatti e le due password coincidono.
5. Salvare: la nuova password viene applicata immediatamente.

I requisiti richiesti sono:

- almeno **12 caratteri**;
- almeno una lettera **maiuscola** e una **minuscola**;
- almeno un **numero**;
- almeno un **carattere speciale**;
- robustezza complessiva adeguata (l'indicatore deve raggiungere il livello richiesto);
- corrispondenza tra password e conferma.

### Impostare scadenza e criteri (amministratore)

L'amministratore può configurare, per l'installazione o per il singolo ente:

- la **scadenza periodica** della password (numero di giorni dopo i quali viene chiesto il rinnovo);
- l'opzione per **forzare il cambio** della password al successivo accesso quando quella in uso non rispetta i criteri di complessità.

La configurazione è descritta nella pagina **Configurazione della sicurezza di accesso**.

## Casi particolari

- **Caratteri non ammessi:** sono accettati solo caratteri standard (lettere senza accenti, numeri e simboli). Lettere accentate o caratteri speciali non standard vengono rifiutati.
- **Riutilizzo:** non è possibile reimpostare una password già usata di recente; in tal caso sceglierne una diversa.
- **Password scaduta:** all'accesso, se la password è scaduta o non conforme, viene richiesto di cambiarla prima di poter proseguire.

> **Nota di conformità:** la funzionalità contribuisce ai requisiti ACN **PR.AC-01** (gestione delle credenziali) e **PR.AC-07** (autenticazione commisurata al rischio).

---

**Sezione successiva:** Blocco dell'account dopo tentativi falliti