# APPIO

Questo modulo permette di gestire le comunicazioni con il cittadino tramite l'app io. Quest'ultima è lo strumento più utile e sicuro dove il cittadino può consultare i messaggi direttamente sul suo smartphone. I servizi esposti dalle Pubbliche Amministrazioni possono essere consultati alla pagina [https://io.italia.it/enti/#locali](https://io.italia.it/enti/#locali) e possono essere configurati tramite un'apposita interfaccia.

L'integrazione che CWOL mette a disposizione permette di veicolare tutte le informazioni generate come Avvisi, Scadenze, Comunicazioni o istanze online al Cittadino in modo rapido e sicuro, con o senza l'intervento da parte dell'operatore, accorciando i tempi necessari allo svolgimento delle varie attività. Questo piano di integrazioni prevede:

- Invio a tutti i cittadini iscritti all'app IO dei messaggi di notifica relativi a nuove posizioni debitorie (gestite con PAGOPA…) che vengono generate o da CWOL o dal portale dei pagamenti
- Invio a tutti i cittadini iscritti all'app IO dei messaggi di notifica relativi a nuove posizioni debitorie (avvisi o fatture) generate tramite le funzionalità di avvisatura puntuale
- Invio a tutti i cittadini iscritti all'app IO dei messaggi di notifica relativi alle messaggistiche
- Invio a tutti i cittadini iscritti all'app IO dei messaggi di notifica relativi alle istanze online relative al modulo di Gestione dei Procedimenti
- Introduzione della possibilità di inviare comunicazioni massive ai cittadini iscritti all'app IO su iniziativa del backoffice dell'Ente (es. invio di una comunicazione a tutti i cittadini di una determinata via)
- Presenza di un'interfaccia in CWOL che mostri tutti i messaggi scambiati con l'app IO

Il modulo permette l'integrazione tramite API di tutti gli stakeholder dell'ente.

## Funzioni di Gestione

- **Gestione Servizi**
- **Archivio Notifiche**

## Comunicazione Massiva

- **Gestione Flussi** (Invio messaggio a più cittadini tramite elenco su Excel)

## Gestione Comunicazione Puntuale

- **Gestione Comunicazione Puntuale**

## Verticali Integrati

- **Codice della Strada:** Tramite SEND e PAGOPA
- **Anagrafe:** Comunicazione generiche ai cittadini attraverso l'AppIO
- **Anagrafe:** Avviso ai Cittadini per Carta di Identità in scadenza
- **Anagrafe:** Comunicazione ai cittadini per permesso di soggiorno scaduto
- **Elettorale:** Avviso agli elettori per il ritiro della tessera Elettorale
- **Elettorale:** Notifica per nomina Scrutatori
- **Tributi maggiori e minori:** Invio Messaggio tramite AppIO
- **SUAP/SUE/Servizi:** Trasmissione comunicazioni al cittadino

## Come creare un servizio su per IO

Per la creazione di un nuovo servizio disponibile nel [catalogo IO](https://io.italia.it/enti/#locali) puoi seguire le guide messe a disposizione da [developers italia](https://developers.italia.it/).