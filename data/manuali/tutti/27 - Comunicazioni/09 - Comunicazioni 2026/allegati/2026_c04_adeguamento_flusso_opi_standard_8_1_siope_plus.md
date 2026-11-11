# Adeguamento Flusso OPI Standard 1.8.1 SIOPE+

**Comunicazione n. 04/2026**

| Data | Oggetto Revisione | Versione |
|------|-------------------|----------|
| 28/10/2026 | Prima comunicazione - adeguamento agli standard SIOPE+ | C04/2026 |

**Scopo:** Aggiornamenti sulle modifiche intervenute con le nuove regole tecniche OPI versione 1.8.1 - Verifica del beneficiario per le modalità di pagamento: Bonifico SEPA, Ordinario e Istantaneo

---

## 1. Standard OPI-SIOPE+

### 1.1 Modifiche Intervenute con Regole Tecniche OPI Versione 1.8.1

Il regolamento (UE) 2024/886 del 13 marzo 2024 prevede che tutti i Prestatori di Servizi di Pagamento (PSP) devono offrire il servizio di bonifico istantaneo a tutti i clienti, sia in entrata che in uscita, con un servizio disponibile 24 ore su 24 e 7 giorni su 7 con decorrenza dal 30.11.2026.

A seguito dell'entrata in vigore del servizio come previsto dal Regolamento (UE) 2024/886 (Instant Payments Regulation - IPR) che modifica il Regolamento (UE) n. 260/2012 (Regolamento SEPA), nonché dei connessi schemi VoP emanati da EPC (Consiglio europeo per i pagamenti) sarà attivo il nuovo **Servizio di Verifica del beneficiario (VoP – Verification of Payee)**, reso disponibile dalla Banca tesoriera che eseguirà la verifica di congruità tra il codice IBAN e il nominativo del beneficiario indicati nell'ordinativo di pagamento trasmesso dall'Ente.

Tale verifica riguarda i pagamenti da eseguirsi tramite bonifico SEPA, sia ordinario sia istantaneo, e può essere richiesta attraverso la piattaforma Siope+. La verifica è quindi svolta a valle della trasmissione dell'ordinativo (già autorizzato) in fase di acquisizione dello stesso e sulla base delle istruzioni presenti all'interno dell'ordinativo, al fine di garantire la continuità operativa e la corretta gestione dei flussi OPI.

#### 1.1.1 Spesa: Modalità di Pagamento

La nuova modalità operativa per la verifica del beneficiario (VoP) per le modalità di pagamento **'SEPA INSTANT CREDIT TRANSFER'** sarà attiva a partire dal **30/11/2026**.

Per la modalità operativa di verifica del beneficiario (VoP) vedere l'esempio al paragrafo 1.1.2.

#### 1.1.2 Esempio di Attivazione della Verifica Beneficiario (VoP) – Modalità di Pagamento SEPA e SEPA Instant

Per l'attivazione Verifica (VoP) procedere nel modo seguente:

[Schermata: Percorso di navigazione nel menu dell'applicativo: MENU → 180. Servizi Economici → 60. Finanziaria → 60. Clienti/Fornitori → 50. Modalità riscossione e pagamento]

Dopo aver selezionato il soggetto fornitore nella sezione **"Albo Pagamenti"**, l'attivazione del servizio VoP verifica del beneficiario viene gestita con i due nuovi campi, **'Verifica beneficiario'** e **'id beneficiario'**.

L'esempio mostra come attivare la verifica (VoP) per la modalità di pagamento SEPA ordinario e istantaneo.

[Schermata: Finestra "Albo Pagamenti" con tab "Beneficiario" attiva. Campi visibili: IBAN, Paese, CHK, CIN, ABI, CAB, Conto, Codice SWIFT. I nuovi campi evidenziati in rosso sono: "Verifica beneficiario" (con menu a tendina che mostra: SI, SI CLOSE MATCH, NO) e "Id Beneficiario".]

Selezionando l'icona **ⓘ** presente nel campo **'verifica beneficiario'** viene visualizzata l'informativa per i valori che possono essere selezionati.

[Schermata: Pop-up informativo "Verifica del beneficiario (VoP) per Bonifici ordinari e istantanei" con tabella dei valori e descrizioni: NO, SI, SI Close Match, Id_Beneficiario]

#### 1.1.3 Il Campo 'Verifica Beneficiario'

Il campo **"Verifica Beneficiario"** può assumere i seguenti valori:

- **"SI"**: la verifica del beneficiario è richiesta e l'ordinativo è avviato al pagamento dalla BT solo se la verifica restituisce l'esito di "esatta corrispondenza" (match).

- **"SI CLOSE MATCH"**: la verifica del beneficiario è richiesta e l'ordinativo è avviato al pagamento dalla BT sia se la verifica restituisce l'esito di "esatta corrispondenza" (match), sia se la verifica restituisce l'esito di "parziale corrispondenza" (close match).

- **"NO"**: la verifica del beneficiario non è richiesta (opt-out).

Pertanto:

- Quando il dato per la verifica beneficiario è valorizzato a **"NO"** la BT **non effettua** la VoP.

- Quando il dato per la verifica beneficiario è valorizzato con **"SI"** o con **"SI CLOSE MATCH"**, la BT effettua la verifica di corrispondenza tra il nominativo e l'IBAN del beneficiario con i dati associati all'intestatario di quel conto di pagamento, inviando apposita richiesta VoP al PSP presso il quale è detenuto il conto di pagamento del beneficiario, in conformità con quanto previsto dallo schema del Consiglio Europeo dei pagamenti (EPC).

In base ai diversi possibili esiti della VoP, la BT gestisce l'ordinativo di pagamento.

#### 1.1.4 Campo 'id Beneficiario'

Nel caso di **beneficiario persona giuridica**, l'ente può richiedere alla propria BT - in qualità del PSP del pagatore - che il servizio di verifica sia effettuato tra il codice IBAN e un **codice identificativo del beneficiario** (es. codice fiscale, partita IVA) anziché sulla sua anagrafica, a condizione che esso sia supportato dal PSP del beneficiario. Il codice deve essere inserito nel campo **'id beneficiario'** dell'albo dei pagamenti del soggetto fornitore.

### 1.2 Verifiche Ambiente

- Per i clienti che hanno attivo l'aggiornamento automatico delle patch le modifiche saranno attive dal **02/11/2026**.
- Per i clienti che non hanno attivo l'aggiornamento automatico delle patch devono fare richiesta al proprio servizio di CED interno altrimenti inviare una richiesta di prenotazione per l'aggiornamento delle patch al seguente indirizzo: cityfinancing@palitalsoft.it
- Per i clienti la cui data di aggiornamento dell'applicativo (consultabile nel modo sottoindicato) è precedente alla data del **28/09/2026** devono fare richiesta al proprio servizio di CED interno altrimenti inviare una richiesta di prenotazione per l'aggiornamento al seguente indirizzo: sistemi@cityware.online

[Schermata: Pannello di Controllo dell'applicativo CWOL. L'icona utente (in alto a destra, evidenziata in rosso) apre il pannello che mostra: "Pannello di controllo per l'utente: CED", "Terminale: NB-FCALAMITA APRA IT - PHP: 7.4.33", "Versione build: test-20190521 del 2019-06-10 12:47:40 (elenco patch)". La data della build è evidenziata in rosso come esempio di verifica.]

### 1.3 Vincoli

| VINCOLI |
|---------|
| • Modifiche disponibili sulla **release 8.4 di CWOL** |
| • A partire dal **01/01/2025** non è più possibile utilizzare l'applicativo CW (Client Service) per inviare i flussi. |
| • È raccomandato usare il nuovo applicativo **CWOL** anche per emettere i mandati |

### 1.4 Criticità

| CRITICITÀ |
|-----------|
| • Necessità aggiornamento release al db di CWOL alla data del **28/09** |
| • Si raccomanda di verificare la versione in uso sull'applicativo CWOL. |