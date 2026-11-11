# Ultimi Avvisi con SEND

In questa guida vedremo come stampare gli **ultimi avvisi** (anche dette lettere pre-ruolo o avvisi bonari) con il **bollettino PagoPA** e notificarli tramite **SEND**, dal caricamento della lista fino al recupero dello **IUN**.

> ⚠️ **E' la prima volta che inviate gli Ultimi Avvisi TRAMITE SEND?** Contattate il nostro servizio di assistenza per la configurazione iniziale e per supporto!

> ℹ️ *NON volevate spedirli con Send?*

---

## FASE 1: PREPARAZIONE E STAMPA

Dai **tre puntini** seguiamo il seguente percorso di menu:

▶ **Codice della Strada / Polizia Locale** ▶ **Codice della Strada** ▶ **Stampe** ▶ **Ultimi Avvisi**

[Schermata: menu a cascata con percorso Polizza Locale > Codice della Strada > Stampe > Ultimi Avvisi]

**Se abbiamo estratto in precedenza dei verbali per gli ultimi solleciti di pagamento** la schermata iniziale si presenterà con l'elenco panoramico di quei verbali caricati per la selezione. Altrimenti, sarà vuota.

---

### PASSO 1 - Carica la lista

Carica i verbali da sollecitare con i criteri abituali. Per estrarre un elenco di verbali, cliccare sul comando **[Carica]** che troveremo in alto a destra.

- Nel campo obbligatorio **Data Riscossione Ruolo**: inseriremo la data **ipotetica** in cui intendiamo trasmettere i verbali estratti per la riscossione al ruolo
- Nel campo obbligatorio **Data Ultimo Avviso**: inseriremo la data **ipotetica** in cui intendiamo spedire (inteso come stampare queste lettere bonarie). *E' possibile mettere la data del giorno in cui si sta creando la selezione.*

Da qui in poi ci saranno filtri per scremare il risultato dei verbali a cui potremmo mandare i solleciti, se rispetteranno le caratteristiche che abbiamo impostato nella fase di caricamento.

> Ad esempio, possiamo filtrare la ricerca per un intervallo di tempo:
> 1. Dalla **Data Infrazione** alla **Data Infrazione**
> 2. Dalla **Data Notifica** alla **Data Notifica**
> 3. Dalla **Data Esigibilità** alla **Data Esigibilità**

Una volta impostati tutti i filtri desiderati, cliccare su **[Conferma]** per estrarre il risultato.

[Schermata: finestra "Dati della variazione" con campi Data Riscossione Ruolo, Data Ultimo Avviso, filtri per date infrazione/notifica/esigibilità, spese postali, e pulsante Conferma]

Nella parte ingrigita, sopra l'elenco dei verbali estratti, ci sta il riepilogo dei dati che abbiamo inserito in fase di caricamento o modificato successivamente (tra cui spese di notifica e di procedura).

[Schermata: elenco verbali estratti con intestazione riepilogo dati (Date Notifica, Data Ult. Avv., Data Esigibilità, Spese Not., Altre Spese, ecc.)]

---

### PASSO 2 - Verifica

**Quali sono i controlli da fare?**

1. Verificare i verbali che hanno come destinatario le **ditte di noleggio** (che potrebbero essere stati selezionati in quanto il coobbligato non ha una data di notifica valida)
2. Verificare i verbali in cui risulta un **pagamento parziale**

> ⚠️ Se alcuni verbali **non** vanno notificati con SEND, toglili dalla lista **adesso**: nei passi successivi si lavora sempre su **tutta la lista**.

**Passo obbligatorio:** Esegui la **stampa di verifica** cliccando sul comando **[Verifica]** (a destra dello schermo) e controlla che non ci siano errori. Senza la verifica le stampe degli avvisi non partono.

[Schermata: pulsante "Verifica" evidenziato nella colonna di destra "Stampa"]

**A che serve questa stampa di verifica?** Ci darà un elenco delle lettere, utile per una verifica di revisione prima della stampa definitiva.

> ⚠️ Se alcuni verbali **non** vanno notificati con SEND, toglili dalla lista **adesso**: nei passi successivi si lavora sempre su **tutta la lista**.

---

### PASSO 3 - Scrivi

> ⚠️ **NOTA:** Questo passaggio è obbligatorio **PRIMA** di creare gli IUV

Cliccando su **[Scrivi]** registreremo gli **importi** e le **spese** dell'ultimo avviso sui rispettivi verbali. Questo step serve anche per aggiornare lo stato degli iter in *"STAMPATO ULTIMO AVVISO"*.

[Schermata: finestra di controllo "AGGIORNAMENTO TABELLA VERBALI: Si Vuole Procedere?" con pulsanti Sì/No, e pulsante "Scrivi" evidenziato]

---

### PASSO 4. Utilità → Associa IUV

Rispondi **Sì** alla conferma e attendi il messaggio *«Allineamento completato»*. Il programma crea gli **IUV PagoPA** con l'importo dell'ultimo avviso, che verranno stampati sui bollettini e inviati a SEND.

> ⚠️ **NON SALTARE QUESTO PASSO:** gli IUV degli ultimi avvisi **non** vengono allineati di notte. Se non premi **[Associa IUV]**, i bollettini non avranno lo IUV corretto.

---

### PASSO 5. Avvisi + Bollettini

Usa **sempre** questo tasto: SEND richiede sia l'avviso sia il bollettino. Il tasto **[Avvisi]** da solo non produce mai stampe per SEND.

[Schermata: finestra "Attenzione - Vuoi stampare i file in formato SEND?" con pulsanti Sì/No, e pulsante "Avvisi + Bollettini" evidenziato]

Alle domande che compaiono rispondi così:

| Domanda | Risposta |
|---------|----------|
| Vuoi stampare i file in formato SEND? | **Sì** |
| Stampa ultimi avvisi già eseguita: si vuole ripeterla? | **Sì** |
| Vuoi effettuare la stampa per il solo verbale selezionato? *(se hai una riga selezionata)* | **No** — stampa tutti |
| Vuoi escludere i verbali già stampati, controllati, chiusi, inviati per pec? | **No** |
| Scelta del modello di stampa | il modello dell'ultimo avviso in uso |

Rispondendo **No** all'esclusione vengono stampati **tutti** i verbali in lista, come richiesto da SEND. Quelli da *non* inviare vanno tolti dalla lista al **PASSO 2. Verifica**.

Al termine viene scaricato uno **ZIP** con avviso e bollettino di ogni verbale, già in formato **PDF/A**.

> ℹ️ **NOTA:** lo ZIP serve solo per controllo e **non va inviato** a nessuno.

---

### PASSO 6. Invia SEND

> ⚠️ **Non vedi il tasto [Invia SEND]?** Quando hai fatto **[Avvisi + Bollettini]** non ti ha chiesto il formato **SEND**? Significa che non è ancora attivo l'invio degli ultimi avvisi con SEND. **Cosa posso fare?** Contatta l'assistenza per le configurazioni!

[Schermata: pulsante "Invia SEND" evidenziato nella colonna di destra, con messaggio "Hai Send ma non vedi il pulsante [Invia SEND]? contatta l'assistenza!"]

Cliccare su **[Invia SEND]** e alla domanda *«Vuoi inviare gli ultimi avvisi con SEND?»* rispondi con **[Sì]**. Prima di creare il flusso il programma controlla ogni verbale e produce un **PDF di riepilogo**.

Vengono verificati:

- **codice fiscale** o **partita IVA** presente e corretto (se manca, il programma prova a calcolarlo dai dati anagrafici);
- **nominativo** non più lungo del limite ammesso da SEND;
- verbale **non già presente** in un altro flusso SEND ultimi avvisi, e **non chiuso**;
- avviso e bollettino **stampati in formato SEND** (passaggio 5).

Se ci sono errori **non viene creato nessun flusso**: correggi i dati segnalati e premi di nuovo **[Invia SEND]** per riprovare.

> ⚠️ Se correggi **nominativo** o **indirizzo**, ripeti prima la stampa del **passo 5 - Avvisi + Bollettini**, così i PDF riportano i dati giusti.

Se è tutto a posto compare a video il messaggio *«N documenti inseriti nel flusso FML…»*: **annota il codice del flusso**, ti servirà nella fase successiva.

---

## FASE 2: FIRMA E TRASMISSIONE

Ci spostiamo dai **tre puntini** in:

▶ **Codice della Strada** ▶ **Stampe** ▶ **Verbali**

[Schermata: menu a cascata con percorso Codice della Strada > Stampe > Verbali]

Da qui ci spostiamo nella scheda: **«Flussi di Stampa»**

[Schermata: scheda "Flussi di Stampa" evidenziata nella schermata "Stampa Verbali"]

---

### PASSO 7. Apri il flusso

Cerca il flusso con il nome annotato prima al passo 6 e aprilo con un **doppio clic** del cursore.

Questo tipo di lotti, avranno il testo **SEND - ULTIMI AVVISI** nella colonna **Tipo flusso** per riconoscerli a videata.

[Schermata: elenco flussi di stampa con colonna "Tipo flusso" che mostra "SEND - ULTIMI AVVISI" evidenziato]

---

### PASSO 8. Firma Doc SEND

Dopo aver premuto **'Seleziona Tutti'** e **[Stampe Ultimi Avvisi]** per scaricare lo ZIP dei PDF, scegliere una delle due modalità per firmare digitalmente gli atti:

- **Firma online con OTP**: firma direttamente dal programma;
- **Carica pdf firmati**:
  1. firmali con il tuo strumento di firma **senza rinominarli** (il suffisso `_signed` o `-signed` va bene);
  2. ricarica lo ZIP dei file firmati.

[Schermata: finestra "Selezione - Scegliere il tipo di firma" con opzioni "Firma online con OTP" e "Carica pdf firmati", e pulsanti "Firma Doc SEND" e "Trasmetti SEND" evidenziati]

---

### PASSO 9. Trasmetti SEND

Invia le notifiche a SEND. Se il programma lo chiede, inserisci prima la **data di postalizzazione prevista** (⚠️ niente sabati, domeniche o festivi ⚠️).

[Schermata: pulsante "Trasmetti SEND" evidenziato con annotazione "Quando siamo pronti per l'invio, fare [Trasmetti SEND]"]

---

### PASSO 10. Importa IUN

Nei giorni successivi recupera lo **IUN**, cioè il codice che SEND assegna a ogni notifica. Lo trovi nella colonna **IUN**; eventuali **scarti** di SEND compaiono nella colonna **Note**. Se dovessero mancare gli IUN, scrivere all'assistenza dedicata!

---

## RIEPILOGO DEI PASSI

**[Carica]** → **[Verifica]** → **[Scrivi]** → **[Associa IUV]** → **[Avvisi + Bollettini]** → **[Invia SEND]** → **[Firma]** → **[Trasmetti]** → **[Importa IUN]**

---

## Da ricordare

- La notifica SEND dell'ultimo avviso **non cambia la data di notifica del verbale**, che resta quella della notifica originale.
- La notifica SEND dell'ultimo avviso è indirizzata al **trasgressore** indicato sul verbale.
- Un verbale può stare in **un solo** flusso SEND ultimi avvisi. Per reinviarlo, annulla prima il flusso con **[Annulla Flusso]** nella scheda «Flussi di Stampa».
- Se il tasto **[Invia SEND]** non compare e **[Avvisi + Bollettini]** non chiede il formato SEND, l'invio SEND degli ultimi avvisi non è attivo o non è ancora configurato per l'ente: **contatta l'assistenza**.