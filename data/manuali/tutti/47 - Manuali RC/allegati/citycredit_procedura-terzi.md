# CITYCREDIT - Manuale Operativo: Procedura C/O Terzi

Il procedimento c/o Terzi in Citycredit si svolge secondo quanto di seguito descritto, previa definizione dei Testi da inviare:

1. Caricamento del Terzo sulle Info Accessorie
2. Invio Lettera Stragiudiziale al Terzo (facoltativa)
3. Creazione e Stampa dell'atto di pignoramento
4. Produzione della copia dell'Atto da inviare al Terzo
5. Creazione Lotti di Stampa e Invio
6. Firma Digitale massiva remota
7. Invio massivo tramite PEC
8. Annotazioni

---

## 1. Caricamento del Terzo sulle Info Accessorie

La premessa generale per avviare il corretto caricamento dei riferimenti bancari in questa sezione è l'aggiornamento delle tabelle ABI/CAB, di cui si include l'apposita documentazione:

> **Manuale aggiornamento abi-ca**

Tale attività, propedeutica all'avvio della procedura Terzi, permette di avere in procedura gli ultimi aggiornamenti dalle tabelle ABI/CAB Nazionali.

Si procede quindi, entrando nella fase operativa, con l'acquisizione e il caricamento puntuale delle Info accessorie:

[Screenshot: Schermata City-Credit Bancari con menu contestuale "Info Accessorie" aperto, che mostra le opzioni: Info Accessorie, Locazioni, Occupazione in affitto, Note specifiche, Informazioni per soggetto, Riferimenti bancari. In basso è visibile la griglia dei provvedimenti con colonne Prov, Tipo documento, Numero, Importo, Data Notifica, Stato.]

Come si evince dalle selezioni rappresentate nella figura sopra, è possibile caricare diverse tipologie tra le Info accessorie ad uso della procedura Terzi (locazioni, Occupazioni lavorative, ecc…).

Nel caso dei riferimenti bancari, avremo:

[Screenshot: Schermata City-Credit con finestra "Soggetto" aperta per l'istituto bancario (INTESA SANPAOLO GROUP SERVICES), con campi ABI, CAB, Numero Conto, Nome Banca, IBAN e dati di intestazione del conto.]

---

## 2. Invio Lettera Stragiudiziale al Terzo (facoltativa)

L'invio della lettera Stragiudiziale al terzo, può essere effettuato in procedura, abilitando un apposito testo, all'atto 'Dichiarazione Stragiudiziale al Terzo':

[Screenshot: Finestra "CITY-CREDIT - Definizione Tipi Documento" con Codice 27, Descrizione "Dichiarazione stragiudiziale del terzo", Step 7. Campi visibili: Notifica (1 - Documento notificato), Tipologia (4 - Procedura semplice), Giorni scadenza pagamento (30), Giorni mora (0), Giorni attivazione documento successivo (30), Anni prescrizione (0), Giorni per decorrenza interessi (0). Tab "Documenti successivi" attiva.]

Concatenando all'atto, i passi di procedura successivi in base al riscontro ottenuto:

[Screenshot: Finestra "CITY-CREDIT - Definizione Tipi Documento" - tab "Documenti successivi" con sezione "Definizione Documenti successivi per creazione massiva provvedimenti (dichiarazione negati)":
- Documento successivo 1: 29 - pignoramento mobiliare (dichiarazione negati)
- Documento successivo 2: 30 - pignoramento presso terzi ex art 72 bis DPR 6
- Documento successivo 3: 33 - pignoramento presso terzi ex art 543 cpc
- Documento successivo 4: (vuoto)
- Documento successivo 5: (vuoto)]

In diversi casi, questo atto preliminare viene effettuato extra procedura e si procede quindi direttamente con i pignoramenti, tuttavia, per la completa tracciatura della procedura terzi, è consigliabile.

---

## 3. Creazione dell'atto di pignoramento

Dopo aver effettuato gli step precedenti, avendo un Testo già predisposto e caricato in procedura, ad uso del Pignoramento, si può procedere con la Creazione del Provvedimento in procedura:

[Screenshot: Schermata City-Credit Bancari con menu contestuale "Nuovo Provvedimento da TER" aperto, che mostra le opzioni: Informazioni sul addebito e pignoramento MOBILIARE.]

Il Sistema crea il provvedimento di Pignoramento Mobiliare in questo caso:

[Screenshot: Finestra "CITY-CREDIT Provvedimento" con:
- Nominativo: NUOVO MANOVOLSA N. DI TEST
- Id. Provv.: 20505
- Tipo Documento: 19 - pignoramento MOBILIARE
- Num. 3941 del 10-06-2024
- Totale documento aggiornato: 1.391,00
- Totale documento: 1.391,00
- Stato: 1 - Stampato e inviato Not...
- Riepilogo Interessi e Spese: Interessi 1.241,00 / Spese not. 18,70 / Arrotondamento -0,29 / Spese Risc. 37,18 / Spese Not. Aggi 2,00
- Dettaglio interessi: Tipo 0 calcolato a 4,53% Importo 1.241,00 / Tipo 3 calcolato a 13,77% Importo 1.241,00]

Calcolando le spese di procedura e gli interessi aggiuntivi.

Sarà necessario quindi, pubblicare la scadenza sul PAGOPA:

[Screenshot: Finestra "CITY-CREDIT Provvedimento" - tab "Scadenze" con sezione Pubblicazione (3 - Solo PagoPA), pulsante "Dati Contabili", Stato Pubbl. "Pubblicato con IUV", pulsante "Esegui Pubblicazione", pulsante "Rimuovi Pubblicazione".]

La Stampa dell'Atto è indispensabile e pertanto si procederà con l'apposita funzione di 'Stampa Provvedimenti' Standard, ottenendo così il testo risolto e il bollettino PAGOPA annesso.

A questo punto si deve predisporre la copia conforme per il Terzo, prima di procedere con l'invio definitivo.

---

## 4. Produzione della copia dell'Atto da inviare al Terzo

La produzione della copia conforme per il Terzo (L'istituto bancario, nel nostro caso), può essere effettuata utilizzando la funzione di 'Rigenera con nuovo Invio':

[Screenshot: Schermata City-Credit con menu laterale (FLUSSI, CREDITI, ELABORAZIONI, PROVVEDIMENTI, RISCOSSIONI, PROCEDURE, ANAGRAFICHE SOGGETTI). Nella griglia dei provvedimenti è selezionato il pignoramento MOBILI (Id Provv 20505). Menu contestuale aperto con opzioni: Apri Testo, Firma Digitale, Notifica, **Rigenera con Nuovo Invio** (evidenziato), Elimina Testo.]

Per procedere con questa funzione, è propedeuticamente necessario che:

- Il Terzo sia caricato in Anagrafe per poterlo referenziare automaticamente;
- Il Terzo abbia la PEC già presente, per poter calcolare le spese di Notifica.

Procedendo quindi, si apre la finestra di seguito descritta:

[Screenshot: Finestra "CITY-CREDIT Rigenerazione Invio" con:
- Soggetto: 270175 - INTESA SANPAOLO GROUP SERVICES
- Cod. testo: 2452 - Andreani PTER_ENTRA PATR_ING ente rif e post rif
- Spese di Notifica: FLAF, Racco, **PEC** (selezionata), AT. Giu, Meso, P.sem, Racco.Ett
- Nominativo sped: INTESA SANPAOLO GROUP SERVICES
- Indirizzo sped: P.zza San Carlo 156
- CAP: 10100, Comune: TORINO, Prov: TO
- Calcola interessi aggiuntivi: No/Si
- Spese di notifica aggiuntive: 0,00
- Spese di riscossione aggiuntive: 0,00
- Bottone "Rigenera invio"]

ove sarà possibile referenziare il Soggetto terzo destinatario dell'atto.

L'eventuale mancanza della PEC, viene evidenziata dal Sistema, come in figura precedente, rendendo NON valorizzabile l'omonima spunta e pertanto si dovrà procedere con l'aggiornamento della PEC in Anagrafica del Terzo.

Altro elemento fondamentale, trattandosi di copia conforme, è quello di mantenere i seguenti campi valorizzati come segue:

| Campo | Valore |
|-------|--------|
| Calcola interessi aggiuntivi | No / Si (impostato su No) |
| Spese di notifica aggiuntive | 0,00 |
| Spese di riscossione aggiuntive | 0,00 |

Procedendo quindi con il bottone **Rigenera Invio**, si otterrà:

- Il Testo in copia conforme per il Terzo
- L'invio a Notifica per registrare la Notifica del Terzo.
- Nessun bollettino (e quindi nessuna pubblicazione PAGOPA), perché il Terzo non è chiamato a rispondere in solido, ma solamente a farsi da garante sulle disponibilità del Contribuente.

---

## 5. Creazione Lotti di Stampa e Invio

A fine giornata, tutti i procedimenti caricati possono essere Inviati massivamente, tutti insieme una volta sola.

Si passa quindi a **CWOL** per la fase di Invio massivo tramite la 'Gestione Lotti':

[Screenshot: Menu CWOL - percorso: 70. Tributi → 100. Gestione Lotti → 10. Creazione Lotti (evidenziato).]

Il Sistema si attiva richiedendo le opzioni generali da utilizzare per l'invio, come di seguito rappresentate:

[Screenshot: Pagina "Creazione Lotto" con campi:
- Tipo Lotto: Mail e/o Pec
- Archiviazione Digitale
- Flusso verso terzi
- Servizio: Tari e altri tributi / IMU / Recupero Crediti
- Tipo Documento: Recupero Crediti
- Opzioni: Maila Opzionale / Da Protocollare
- Tipo Allegato: Comunicazione / Modalità di Pagamento (Provvedimento) / Allegato Aggiuntivo
- Bottone "Avanti" in alto a dx]

E con il bottone **'Avanti'** si procede con la successiva griglia di selezione, da cui sarà sufficiente indicare, opzionalmente il **Flusso** e indubbiamente il **tipo Documento** e la **data di Stampa** dei Documenti da Inviare:

[Screenshot: Pagina di selezione con campi:
- Selezione: 120 - Recupero Crediti - TOSAP 2023
- Ente: Tutti
- Tipo Provvedimento: pignoramento MOBILIARE
- Tipo Documento: Tutti
- Data Provvedimento da / a
- N. Provvedimento da / a
- Is. Registro: da 11/06/2024 a 11/06/2024
- Archivio precompilato
- Griglia con colonne: N.ro, Tipo, Tipo PEC, Ragione Sociale, Ragione Sociale, N. Provvedimento, Importo
- Bottone "Avanti"]

Proseguendo con il bottone **'Avanti'** si crea il lotto di Stampa:

[Screenshot: Pagina di creazione lotto con campi:
- Mail e/o Pec - Recupero Crediti - Da Firmare - Comunicazione - Modalità Pagamento
- Testo: (campo obbligatorio evidenziato in giallo)
- Tipo Comunicazione: Selezionare...
- Descrizione: (campo obbligatorio evidenziato in giallo)
- Mittente: Selezionare...
- Oggetto: (campo obbligatorio evidenziato in giallo)
- Nome Allegato:
- Editor di testo con barra di formattazione
- Bottone "Avanti" e "Variabili Disponibili"]

**Obbligatori:**

- i campi evidenziati in giallo;
- digitare un semplice `'.'` Sullo spazio del Testo libero sotto,

poi confermare la Creazione con l'omonimo bottone in alto a dx della pagina.

[Screenshot: Pagina "Creazione Lotto" con messaggio di conferma "Creazione Lotto Completata con Successo".]

Si ritorna al menu generale di CWOL:

[Screenshot: Menu CWOL - percorso: 70. Tributi → 100. Gestione Lotti → **20. Gestione Lotti** (evidenziato).]

Si apre la consueta pagina di selezione ove poter indicare la data del giorno:

[Screenshot: Pagina di selezione con campo "Data Inizio Invio" impostato su 09/06/2024 e pulsante "Avvia".]

Seguito dal bottone **'Elenca'** in alto a dx.

Si apre la pagina con il lotto appena creato:

[Screenshot: Pagina "Gestione Lotti" con griglia dei lotti (colonne: Descrizione, Nome, Aggiornato Lotto, Aggiornato Lotto, Tipo, Data Digione, Stato, Data Digione, N. Doc). In basso la sezione "Dettaglio Lotto Lotto" con i provvedimenti del lotto selezionato, colonne: Nominativo, Mail PEC, Tipo, Data Digione, Prov, Mitt, Stato, N. Doc. Bottone "Firma" evidenziato nella bottoniera a dx.]

Posizionando il cursore con un solo click, sulla riga del lotto, questa si evidenzia in giallo e nella sezione in basso si aprono i dettagli dei provvedimenti che compongono il Lotto.

In questa fase è possibile verificare se tutti i Provvedimenti portati sul Lotto di Invio, presentano le specifiche necessarie e sufficienti a procedere (colonna **Stato**).

Potrebbe mancare l'allegato o la PEC su un provvedimento e in tal caso sarà necessario correggere il Lotto se manca solo la PEC o rifarlo se manca il testo correlato da inviare.

---

## 6. Firma Digitale massiva remota

A questo punto, si può procedere con la Firma Digitale massiva remota di tutti i provvedimenti presenti sul Lotto interessato, digitando il bottone **'Firma'** sulla bottoniera a dx:

[Screenshot: Pagina "Gestione Lotti" con finestra modale "Inserisci Credenziali" aperta, contenente:
- Tipo Firma: Firma Digitale remota in standard CADES (p7m)
- Dominio Autenticazione: (dropdown)
- Nome Utente: (campo)
- Password: (campo)
- OTP (One Time Password): (campo)
- Pulsanti "Conferma" e "Annulla"]

Di seguito:

- E' gestita sia la Firma digitale di tipo **PADES** che **CADES**,
- dovrà essere selezionato il dominio di autenticazione del dispositivo con cui si procederà alla Firma digitale dell'intero lotto di provvedimenti
- Userid
- Password
- OTP di riferimento

Bottone **'Conferma'** e si procederà massivamente con la Firma Digitale.

---

## 7. Invio massivo tramite PEC

A seguire comparirà il bottone **'CONVALIDA LOTTO'** sempre sulla bottoniera a DX, che dovrà essere digitato per confermare preventivamente la volontà di procedere con l'invio delle PEC.

Infine, dopo che il Lotto è convalidato si accende il bottone **'INVIA LOTTO'** che dovrà essere digitato per procedere con l'invio materiale delle PEC, dall'indirizzo mail del Mittente indicato precedentemente, a tutti gli indirizzi PEC dei destinatari.

---

## 8. Annotazioni

Il Sistema cattura in tempo reale gli esiti delle PEC e carica automaticamente le Notifiche su tutte le posizioni del Lotto inviato. Questo comporta una significativa accelerazione dei tempi di lavorazione.