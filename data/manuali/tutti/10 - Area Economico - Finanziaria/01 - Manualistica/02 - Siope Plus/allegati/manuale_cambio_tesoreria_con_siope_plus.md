# Operatività su SIOPE PLUS in caso di cambio della tesoreria

**Software:** CWOL

---

## 1. Cambio tesoreria

In merito al cambio di tesoreria con il sistema SIOPE PLUS, queste sono le attività da eseguire.

### 1.1 Attività a carico dell'ente

#### 1.1.1 Richiesta dei dati

Alla nuova Banca tesoriera devono essere richiesti i seguenti dati:

- Il Codice A2A
- Il codice Iban
- Il codice Ente (viene attribuito dalla banca tesoreria)

#### 1.1.2 Comunicazioni

I dati richiesti alla nuova Banca Tesoriera devono essere comunicati a Palitalsoft che li utilizzerà successivamente, per procedere con le configurazioni necessarie.

Inoltre, alla nuova banca tesoriera devono essere comunicati i seguenti dati:

- Codice IPA
- Codice ISTAT SIOPE
- Codice A2A intermediario ente di produzione

Queste informazioni sono reperibili nella tabella di configurazione dei dati (Cityware) per la tesoreria.

### 1.2 Operazioni preliminari Ente

#### 1.2.1 Firma digitale

L'ente deve far censire le attuali firme digitali utilizzate, alla nuova Banca tesoriera.

#### 1.2.2 Provvisori

Definire con la banca tesoriera il numero progressivo dei provvisori in quanto, non può ripartire dal n. 1 ma deve obbligatoriamente ripartire con un numero progressivo, successivo all'ultimo provvisorio gestito con la precedente Banca tesoriera. La numerazione dei provvisori deve essere progressiva in quanto, la procedura (Cityware) non gestisce una doppia numerazione nell'anno contabile.

#### 1.2.3 Esiti ordinativi

Prima dell'avvio delle operazioni con la nuova banca tesoriera, devono essere scaricati tutti gli esiti degli ordinativi inviati con il MIF3, in modo che tutte le operazioni eseguite con la vecchia banca tesoriera e generano esiti, siano concluse.

#### 1.2.4 Giornali di cassa

Scaricare tutti i giornali di cassa dal Mif3 prima dell'avvio delle operazioni con la nuova banca tesoriera ed eseguire l'importazione sulla procedura Cityware.

#### 1.2.5 Regolarizzazione dei provvisori

Devono essere regolarizzati tutti i provvisori che sono rimasti aperti.

#### 1.2.6 Invio dei flussi

È necessario concordare con la nuova banca tesoriera la data di partenza per l'invio dei flussi OPI e comunicarla a Palitalsoft.

#### 1.2.7 Termine delle operazioni

Con la conclusione delle precedenti attività ed operazioni, Palitalsoft può procedere con l'impostazione delle nuove configurazioni del MIF3, nelle tabelle di configurazione di Cityware, per essere attivi con l'invio dei flussi OPI.

### 1.3 Attività a carico di Palitalsoft

#### 1.3.1 Configurazione SIOPE+

Impostazione nelle tabelle SIOPE+ (Cityware) dei dati comunicati dalla nuova banca tesoriera:

- Codice A2a (Banca Tesoriera)
- Il Codice Iban (Banca Tesoriera)
- Il codice Ente (attribuito dalla Banca Tesoriera)

Le operatività sono supportate utilizzando il modulo Siope plus interno a CWOL.

---

## 2. Effort

Le attività indicate al paragrafo precedente vengono fornite in accordo con le operatività degli operatori dell'Ente e delle due tesorerie: quella che lascia e quella che subentra.

Per la sostituzione è necessario concordare le operatività tra tutte le figure in campo.

### Interfacce organizzative e tecniche

| Previsione impegni per attività | Impegno | GG |
|---|---|---|
| Attività di configurazione presso BKIT, Tesoreria e test di dialogo | | 2 |
| Supporto e verifiche con gli operatori dell'Ente | | 1 |
| **Totale** | | **3** |

### Piano dei controlli necessari per assicurare la conformità della fornitura

| Voce | Dettaglio |
|---|---|
| **Caso di test** | Simulazione con BKIT come previsto nelle linee guida |
| **Database** | Cityware |
| **Libreria** | Applicativo SOLO CWOL Financing |
| **Specifiche dei test (norme e leggi)** | — |