# Tributi – Bonus Sociale Rifiuti (Bonus TARI)

## Capitolo 1 – Premessa Normativa

### 1.1 Riferimenti legislativi e regolamentari

Il **Bonus Sociale Rifiuti** è una misura di sostegno economico nazionale destinata alle famiglie in condizioni di disagio economico-sociale, introdotta nel quadro dei bonus sociali già operativi nei settori dell'energia elettrica, del gas e del servizio idrico.

- **Art. 57-bis del D.L. n. 124/2019** Convertito dalla Legge n. 157/2019: estende le misure di tutela per utenti economicamente svantaggiati al settore rifiuti urbani.
- **D.P.C.M. 21 gennaio 2025, n. 24** Pubblicato in G.U. il 13 marzo 2025: definisce principi e criteri per le agevolazioni tariffarie, con decorrenza dal 1° gennaio 2025.
- **Delibera ARERA n. 133/2025/R/rif** Del 1° aprile 2025: avvia il procedimento attuativo e introduce la componente perequativa UR3 (6 €/utenza).
- **Delibera ARERA n. 355/2025/R/rif** Del 29 luglio 2025: approva il Testo Unico Bonus Rifiuti (TUBR) con le modalità operative.
- **Delibera ARERA n. 584/2025/R/rif** Del 23 dicembre 2025: ulteriori disposizioni attuative.
- **Delibera ARERA n. 2/2026/R/com** Del 20 gennaio 2026: aggiorna le soglie ISEE per il 2026.

### 1.2 Contenuto del Bonus

Il bonus consiste in una **riduzione del 25%** della TARI dovuta dall'utente domestico per l'anno di riferimento.

### 1.3 Requisiti di accesso

Riconosciuto **automaticamente** ai nuclei familiari con:

- ISEE ≤ 9.530 € (anno 2025; aggiornata a **9.796 €** dal 2026)
- ISEE ≤ 20.000 € per nuclei con almeno **4 figli a carico**

Ulteriori condizioni:

- Utenza intestata a un CF del nucleo ISEE trasmesso da SGAte
- Una sola volta per nucleo ISEE per anno

### 1.4 Meccanismo di erogazione

Nel 2026 viene applicato lo sconto relativo all'**anno 2025** (bonus calcolato sulla TARI 2025, erogato nell'avviso TARI 2026).

### 1.5 Flusso informativo

L'identificazione avviene tramite **SGAte** (gestito da ANCI), che riceve i dati ISEE dall'INPS.

### 1.6 Compensazione con morosità pregressa

Il gestore ha la **facoltà** (non l'obbligo) di trattenere il bonus a compensazione di debiti pregressi, nel rispetto dei termini di prescrizione.

### 1.7 Componente perequativa UR3

Il bonus è finanziato dalla **UR3**, applicata a tutte le utenze (6 €/utenza per il 2025), aggiornabile annualmente da ARERA.

---

## Capitolo 2 – Quadro Riepilogativo del Processo Operativo

Il processo si articola nelle seguenti fasi, **da eseguire nell'ordine indicato**:

| # | Fase | Percorso |
|---|------|----------|
| 1 | Importazione flusso dati SGAte | Tributi → Utenze Esterne → Importazione Utenze Esterne |
| 2 | Configurazione Definizione Bonus | Tributi → TARI → ARERA → Bonus TARI → Regole definizione Bonus |
| 3 | Gestione Bonus TARI | Tributi → TARI → ARERA → Bonus TARI → Gestione Bonus |
| 4 | Importazione dati da flusso SGAte | Funzionalità → 1 - Importazione dati da Flusso SGAte |
| 5 | Normalizzazione indirizzi | Utility → Normalizzazione vie |
| 6 | Ricerca utenze agevolabili | Funzionalità → 2 - Cerca Utenze Agevolabili |
| 7 | Calcolo residui | Funzionalità → 3 - Calcolo Residui |
| 8 | Calcolo Bonus | Funzionalità → 4 - Calcolo Bonus |
| 9 | Conferma riconoscimento Bonus | Funzionalità → 5 - Conferma riconoscimento Bonus |
| 10 | Verifica agevolazioni generate | TARI Agevolazioni |
| 11 | Emissione avviso con Bonus Sociale | Gestione Avvisi → Emissione |
| 12 | Riepilogo applicazione Bonus | TARI Riepilogo Applicazione Bonus |

> ⚠️ **IMPORTANTE:** Le fasi da 1 a 5 vanno eseguite **rigorosamente nell'ordine**. Ogni fase dipende dal completamento della precedente.

---

## Capitolo 3 – FASE 1: Importazione del flusso dati SGAte (Utenze Esterne)

### Descrizione

Importa nel sistema CWOL il file dei nuclei familiari aventi diritto, scaricato dal portale SGAte.

### Procedura operativa

Accedere al menù: **70. Tributi → 150. Utenze Esterne → 30. Importazione Utenze Esterne**.

Nella schermata compilare:

- **Utenza Esterna:** Bonus TARI
- **File:** percorso del file SGAte
- **Descrizione:** es. "Bonus TARI 2025 da emettere 2026"

Cliccare **Importa**.

Al termine si visualizzerà il messaggio di **Conclusione Positiva**.

[Schermata: Albo Rendicontazioni Async con messaggio "Bonus TARI importato con successo. Totale utenze importate: 188"]

### Storico Importazioni

Una volta fatto Importa, andando su **Storico Importazioni** si possono visualizzare i file importati.

### Visualizzazione dati importati

Posizionandosi su un file e cliccando **Visualizza Dettaglio** si apre l'**Importazione Tracciati Generica** con i singoli record dei beneficiari (CODICE_PRATICA_SII, CF_DICHIARANTE, NOME/COGNOME, ANNO_VALIDITA, INDIRIZZO..).

---

## Capitolo 4 – FASE 2: Configurazione della Definizione Bonus TARI

Accedere al menù: **70. Tributi → 50. TARI → 70. ARERA → 20. Bonus TARI → 10. Regole definizione Bonus**

### Descrizione

Configura la regola che definisce i parametri del bonus (anno, aliquota, causale). Da effettuare **una sola volta per annualità**.

### Compilazione del form

| Campo | Valore | Note |
|-------|--------|------|
| Descrizione | Bonus TARI 2025 calcolato 2026 | Testo libero |
| Anno Riferimento | 2025 | Anno TARI (considera le denunce attive nel 2025, comprese quelle attivate in corso di anno 2025 o cessate in corso di anno 2025). |
| Anno Emissione | 2026 | Anno erogazione |
| Causale | 1003 – Bonus TARI | Lookup 🔍 |
| Tipo Calcolo | calcolo con base al netto o al lordo delle riduzioni sociali | |
| Aliquota % | 25,00 | Fissata da ARERA |
| Anno Inizio Verifica | 2021 | Verifica morosità |
| Servizio | TARI | Menu a tendina |
| Tipo Cespite | TARES/TARI | Menu a tendina |
| Disabilitato | ☐ | Lasciare deselezionato |

> ⚠️ **ATTENZIONE:** L'aliquota del 25% è fissata da ARERA ed è un valore definito dalla norma (modificabile, a prevenzione se in futuro la norma dovesse essere rivista). L'anno inizio verifica definisce da quando controllare i residui.

---

## Capitolo 5 – FASE 3: Gestione Bonus TARI: creazione flusso e impostazione parametri

### Descrizione

Console principale per impostare il flusso di lavoro ed eseguire tutte le operazioni successive.

Accedere al menù: **70. Tributi → 50. TARI → 70. ARERA → 20. Bonus TARI → 20. Console di generazione e controllo bonus**

### Compilazione

| Campo | Valore | Note |
|-------|--------|------|
| Flusso | 1905 – Bonus TARI 2025 da emettere 2026 | Lookup 🔍 |
| Definizione Bonus | 1 – Bonus TARI 2025 calcolato 2026 | Lookup 🔍 |
| Tipo Cespite | 8 – TARES/TARI | Menu a tendina |
| Classe | 1 – UTENZE DOMESTICHE | Menu a tendina |
| Usi | Tutti | Menu a tendina |
| Ricerca denunce su altri indirizzi in presenza di iscrizioni o cessazioni in corso d'anno | | Permette di cercare nel corso dell'anno di riferimento, denunce con indirizzo diverso dall'indirizzo DSU, se il contribuente ha cessato e riaperto nel territorio del comune. (flag facoltativo) |
| Ricerca denunce su coincidenza tra indirizzo DSU e residenza | | Effettua un controllo in caso di discrepanza, a parità di via, tra il civico della denuncia e il civico in DSU. Aggancia l'utenza agevolabile per via; verifica in anagrafe ed aggancia per analogia solo della via, se la via in anagrafe coincide con DSU. (flag facoltativo) |

---

## Capitolo 6 – FASE 4: Importazione dati da Flusso SGAte

### Descrizione

Importa i beneficiari dal flusso SGAte (caricato nella Fase 1) nel modulo Bonus TARI. Operazione asincrona.

Verificare che tutti i campi siano compilati.

Cliccare **"1 – Importazione dati da Flusso SGAte"**.

Monitorare su **Rendicontazioni Async** e attendere fino al completamento.

Posizionandosi sulla prima riga comparirà sotto il messaggio di conclusione positiva:

[Schermata: Dettaglio Evento – "Bonus TARI - Fine importazione flusso. Totale record importati: 188"]

---

## Capitolo 7 – FASE 5: Normalizzazione Indirizzi

### Descrizione

Normalizza gli indirizzi SGAte per associarli allo stradario comunale e permettere l'abbinamento alle utenze TARI.

Rimanendo sulla stessa schermata della **Console di generazione e controllo bonus**, andare su **'Normalizzazione vie'**

Compariranno gli indirizzi **"Via Non Decodificata"** (in rosso) che richiedono intervento manuale tramite pulsante **Decodifica Via Manuale**.

Completare **tutti** gli indirizzi prima di proseguire.

> ⚠️ **ATTENZIONE:** Una normalizzazione incompleta impedirà di individuare correttamente le utenze agevolabili.

---

## Capitolo 8 – FASE 6: Ricerca Utenze Agevolabili

### Descrizione

Abbinamento automatico tra beneficiari SGAte e utenze TARI in banca dati.

Rimanendo sempre sulla stessa schermata della **Console di generazione e controllo bonus**

Cliccare **"2 – Cerca Utenze Agevolabili"**.

Monitorare su **Rendicontazioni Async** e attendere fino al completamento.

Posizionandosi sulla prima riga comparirà sotto il messaggio di conclusione positiva:

[Schermata: Dettaglio Evento – "Bonus TARI - Fine ricerca utenze. Totale record aggiornati: 188. Totale record inseriti: ..."]

Chiudere il monitoraggio degli eventi con la crocetta e andare su **"Visualizza Bonus"**

Verrà visualizzato sotto l'elenco dei soggetti con i bonus individuati (codice fiscale, nominativo, importi bonus/residuo/compensazione).

La colonna **info** mostra la logica usata per associare l'utenza agevolabile. (la stessa dicitura verrà mostrata anche nel dettaglio bonus alla voce info)

### Dettaglio singolo Bonus

Con doppio click su una riga dei vari record si possono visualizzare le sezioni:

- **Dati Flusso** (Cod Bonus, Cod DSU, CF Famiglia)
- **Utenza Agevolata** (indirizzo, MQ, uso, classe)
- **Importi** (Bonus 68,14 €, Residuo 9.282,00 €, Compensazione 0,00 €, Agevolazione 8577)

[Schermata: Dettaglio Bonus TARI con sezioni Dati Flusso, Ricerca Denunce - Info, Utenza Agevolata, Importi]

> Esempio messaggio di errore: "Codice Via non trovato per l'indirizzo CORSO NAZIONALE CALAVORNO. Procedere con la normalizzazione Vie Ricerca Utenze per il Denunciante Flusso: DPCNTN68H18A110Z Contribuente"

---

## Capitolo 9 – FASE 7: Calcolo Residui

### Descrizione

Calcola la morosità pregressa di ciascun beneficiario (dall'anno inizio verifica, es. 2021) per l'eventuale compensazione del bonus riconosciuto su pendenze precedenti.

Rimanendo sempre sulla stessa schermata della **Console di generazione e controllo bonus**

Cliccare **"3 – Calcola Residui"**.

Monitorare su **Rendicontazioni Async** e attendere fino al completamento.

Posizionandosi sulla prima riga comparirà sotto il messaggio di conclusione positiva:

[Schermata: Dettaglio Evento – "Bonus TARI - Fine calcolo residui. Totale record aggiornati: ..."]

Chiudere il monitoraggio degli eventi con la crocetta.

Il campo **"Importo Residuo"** sarà valorizzato per ogni bonus.

---

## Capitolo 10 – FASE 8: Calcolo Bonus

### Descrizione

Calcola l'importo del bonus (25% della TARI 2025) per ciascun beneficiario.

Rimanendo sempre sulla stessa schermata della **Console di generazione e controllo bonus**

Cliccare **"4 – Calcola Bonus"**.

Monitorare su **Rendicontazioni Async** e attendere fino al completamento.

Posizionandosi sulla prima riga comparirà sotto il messaggio di conclusione positiva:

[Schermata: Dettaglio Evento – "Bonus TARI - Fine calcolo importi. Totale record aggiornati: ..."]

---

## Capitolo 11 – FASE 9: Conferma Riconoscimento Bonus

### Descrizione

Ultima fase: consolida i dati e **genera le agevolazioni TARI** per ciascun beneficiario.

Rimanendo sempre sulla stessa schermata della **Console di generazione e controllo bonus**

Cliccare **"5 – Conferma riconoscimento Bonus"**.

Il sistema mostra la finestra **'Compensazioni'**:

- **SI:** trattiene il bonus a **compensazione debiti pregressi**, creando una **riscossione** di tipo "Bonus compensazione sociale".
- **NO:** eroga il bonus integralmente **senza compensazioni**, creando un'**agevolazione**.

> ⚠️ **NOTA:** La compensazione è facoltà del gestore, non obbligo (art. 10 TUBR).

Monitorare su **Rendicontazioni Async** e attendere fino al completamento.

Posizionandosi sulla prima riga comparirà sotto il messaggio di conclusione positiva.

Una volta ultimato, chiudere con la crocetta e andare a verificare la conferma del bonus dal menù:

**70. Tributi → 50. TARI → 70. ARERA → 70. Altri Importi → 20. Gestione Altri Importi**

Immettere il soggetto interessato e fare **'Elenca'**

oppure dalla situazione contribuente al tab **agevolazioni**

Entrando sulla riga si possono visualizzare i dettagli:

[Schermata: TARI Agevolazioni con righe Bonus TARI – Codice Tributo 3944, Anno Emissione 2026, Anno Rif. 2025, Servizio TARI, Valori -68,14 e -32,58]

### Dettaglio singola agevolazione

Sezioni: **Soggetto** (dati anagrafici), **Dati Agevolazione** (importo fisso da stornare es. -32,58 €, codice tributo 3944, causale atto 1903 Bonus TARI).

> **NOTA BENE:** Nel caso in cui si è optato per la compensazione, il bonus sarà visualizzato come una **riscossione**.

[Schermata: Situazione Contribuente – Tab Riscossioni con "Compensazione bonus sociale" – Importo Riscossione 51,00€]

✅ **COMPLETATO:** Bonus confermati e agevolazioni TARI generate per ogni beneficiario.

---

## Capitolo 12 – FASE 10: Verifica Agevolazioni Generate e Riscossioni in compensazione

### Descrizione

Verificare che le **agevolazioni** siano correttamente generate nella **situazione contribuente** dei beneficiari.

### Dettaglio singola agevolazione

Sezioni: **Soggetto** (dati anagrafici), **Dati Agevolazione** (importo fisso da stornare es. -32,58 €, codice tributo 3944, causale atto 1903 Bonus TARI).

### Verifica riscossione in compensazione

Verificare che la **riscossione in compensazione** sia correttamente imputata negli avvisi con **residuo scaduto e non pagato** di cui al calcolo dei residui.

[Schermata: Tab Riscossioni – "Compensazione bonus sociale" – Importo Riscossione 51,00€ – Riconciliato su Avviso 51,00€]

---

## Capitolo 13 – FASE 11: Emissione Avviso con Bonus Sociale ARERA

### Descrizione

L'avviso bonario TARI 2026 include automaticamente il bonus. Configurare i parametri di emissione.

Accedere al menù: **70. Tributi → 50. TARI → 10. Parametri di Configurazione → 50. Emissioni**

### Configurazione emissione e sezione "Bonus Sociale ARERA"

| Parametro | Valore |
|-----------|--------|
| Tipo Scadenza | 301/0 – TARI |
| Tipo Emissione | Riscossione diretta gestita dall'ente con denuncia |
| Modulo / Ente | TDE / Comune di Sirolo |
| Anno | 2026 |
| Tipo Avviso | Avviso Bonario Unico |
| Recuperi bonus sociale | Sì |
| Anno riferimento recupero | 2025 |
| Modalità ripartizione | Sulla prima rata utile |

### Avviso generato – Dettaglio voci

| Voce | Dovuto | Residuo | Anno |
|------|--------|---------|------|
| TARI – Tassa sui Rifiuti | 526,88 € | 526,88 € | 2026 |
| TARI – Raccolta Puntuale | 16,20 € | — | 2026 |
| TEFA (5%) | 26,34 € | 26,34 € | 2026 |
| UR1, UR2, UR3 | vari | vari | 2026 |
| Bonus sociale rifiuti | -100,72 € | -100,72 € | 2025 |
| Arrotondamento | 0,10 € | 0,10 € | 2026 |
| **TOTALE** | **478,00 €** | **478,00 €** | |

### Esempio di Avviso Bonario Unico – Tab Dettaglio, Tab Voci e Estrazione Dati

[Schermata: Avviso Bonario Unico con tab Voci – dettaglio TARI, TEFA, UR1, UR2, UR3, Bonus Sociale Rifiuti, Arrotondamento]

### Estrazione Dati Emissione

Accedere al menù: **70. Tributi → 50. TARI → 150. Estrazioni → 10. Estrazione Dati Emissione**

[Schermata: Estrazione Dati Emissione con filtri Servizio Emittente, Anno Emissione, Nr Emissione, e pulsante "Estrai Dati Emissione"]

### Documento di pagamento stampato

Riporta: totale 478,00 €, scadenze (15/03 e 30/11/2026), riepilogo voci con Bonus -100,72 €, dettaglio catastale e "Riepilogo Applicazione Bonus Sociale Rifiuti" con codici pratica e importi compensati.

[Schermata: Documento di pagamento con intestazione SERVIZIO TRIBUTI, TOTALE DA PAGARE €478,00, scadenze, riepilogo addebiti/accrediti, e RIEPILOGO APPLICAZIONE BONUS SOCIALE RIFIUTI con dettaglio pratica e importi trattenuti in compensazione]

> ⚠️ **NOTA:** Saranno distribuiti nuovi testi 2026 per gli avvisi bonari, che contengono:
> - Voci Bonus sociale
> - Tabella di riepilogo applicazione bonus, con dettaglio pratica DSU e importi trattenuti in compensazione su altri avvisi (e quindi non inclusi nel bonario corrente)

---

## Capitolo 14 – FASE 12: Riepilogo Applicazione Bonus

Accedere al menù: **70. Tributi → 50. TARI → 70. ARERA → 30. Rendicontazione e Monitoraggio → 20. Riepilogo e applicazione Bonus**

### Descrizione

Riepilogo complessivo **con possibilità di esportazione Excel**.

Impostare l'Anno di riferimento del bonus e cliccare **"Estrai Riepilogo"**.

### Tab "Riepilogo generale"

| Sezione | Tipo Voce | Importo |
|---------|-----------|---------|
| UR3 perequativa | Contributo perequativo bonus sociale rifiuti | Dovuto 48,00 € / Riscosso 24,00 € / Residuo 24,00 € |
| Bonus su avviso | Bonus sociale rifiuti (2025 → 2026) | -100,72 € |
| Bonus a compensazione | Bonus sociale (2025 → 2024) | 51,00 € |

### Tab "Dettaglio Bonus su avviso"

| Tipo Voce | Importo | Classe | Uso | MQ |
|-----------|---------|--------|-----|-----|
| Bonus sociale rifiuti | -68,14 € | UT. DOMESTICHE | ABITAZIONI CIVILI | 300 |
| Bonus sociale rifiuti | -32,58 € | UT. DOMESTICHE | GARAGE/AUTORIM. | 198 |
| **Totale** | **-100,72 €** | | | |

### Tab "Dettaglio Bonus in compensazione"

Espone il dettaglio delle voci che, per via della compensazione, sono state coperte dal bonus sociale.

**ESPORTAZIONE:** Cliccare **"Esporta Excel"** nel pannello destro per esportare i dati.

---

## Capitolo 15 – Note Operative Finali

### Cancellazione e rielaborazione

In caso di errore, rimanendo sempre sulla stessa schermata della **Console di generazione e controllo bonus** usare il pulsante **"Cancellazioni"** (Utility) per eliminare i dati e ricominciare.

Mettere le spunte desiderate e fare **Conferma**:

- 1 - Agevolazioni in bolletta
- 2 - Compensazioni riconosciute
- 3 - Azzera importazione da flusso SGATE

### Ordine delle operazioni

🔴 Le 5 funzionalità vanno eseguite **tassativamente nell'ordine**:

1. Importazione SGAte
2. Cerca Utenze
3. Calcolo Residui
4. Calcolo Bonus
5. Conferma

### Monitoraggio asincrono

Tutte le operazioni sono asincrone: attendere il completamento nell'**Albero Rendicontazioni Async** prima di procedere alla fase successiva.