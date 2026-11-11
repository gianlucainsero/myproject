# Manuale Operativo Crediti Inesigibili

**Software:** CWOL

---

## 1. Introduzione e Finalità del Manuale

Il presente manuale operativo è destinato agli enti locali che si trovano a dover gestire crediti la cui riscossione si rivela difficoltosa o impossibile.

La corretta gestione dei crediti inesigibili rappresenta una delle sfide più complesse della finanza pubblica locale, in quanto tocca contemporaneamente aspetti giuridici, contabili, organizzativi e di controllo interno. Un'adeguata procedura consente di:

- tutelare l'integrità del bilancio, evitando sopravvalutazioni dell'attivo;
- rispettare i principi contabili armonizzati (D.Lgs. 118/2011 – *"9.1 La gestione dei Residui"*);
- adempiere agli obblighi di trasparenza verso organi di revisione e Corte dei conti;
- ridurre il contenzioso e l'esposizione patrimoniale dell'ente;
- ottimizzare le risorse destinate all'attività di recupero.

### 1.1 Crediti di Dubbia Esigibilità vs Crediti Inesigibili

| Tipologia | Caratteristiche | Trattamento |
|-----------|----------------|-------------|
| Credito esigibile | Creditore solvibile, obbligazione certa, scaduta e liquida | Accertamento e imputazione al bilancio ordinario |
| Credito di dubbia esigibilità | Possibilità di riscossione incerta (debitore in difficoltà, contestazione, ecc.) | Mantenimento in bilancio con accantonamento al FCDE |
| Credito inesigibile | Riscossione impossibile (debitore irreperibile, deceduto senza eredi solvibili, fallito ecc.) | Cancellazione dal bilancio previo formale accertamento |
| Credito prescritto | Diritto estinto per decorso del termine ex art. 2934 c.c. | Cancellazione obbligatoria con atto formale |

---

## 2. Registro Crediti Inesigibili

### 2.1 Gestione del Registro

Dal seguente passaggio si accede al registro dei crediti inesigibili, da cui è possibile gestire i movimenti presenti ed effettuare estrazioni e prospetti.

**Percorso:** `180. Servizi economici → 10. Finanziaria → 10. Bilancio e Variazioni → 70. Registro Crediti Inesigibili`

[Schermata: interfaccia del Registro Crediti Inesigibili con elenco dei crediti e pulsanti di gestione]

### 2.2 Come Viene Alimentato il Registro dei Crediti Inesigibili

Nel registro può essere presente una sola riga di testata (**FES_CRED**) riguardante un accertamento. Il primo movimento inserito è il movimento di testata e determina **ANNO INIZIO** del credito inesigibile.

Saranno poi presenti delle righe di dettaglio (**FES_CREDVA**) per gestire le future movimentazioni del credito in aumento o in diminuzione.

#### 2.2.1 Inserimento in automatico da Procedura di Riaccertamento

In fase di riaccertamento entrata, in gestione destinazione residuo per accertamenti a residuo, specifico variazione tipo **"Inesigibile"**.

La fase di elaborazione automaticamente inserisce il movimento nel registro dei crediti inesigibili.

Se l'accertamento risulta già presente nel registro, viene inserita una riga di dettaglio che **AUMENTA** il saldo del credito inesigibile.

[Schermata: Estrazione Servizio 9 - Gestione destinazione residuo con flag "Inesigibile" selezionato e campo "Eliminato" valorizzato con importo 27.000,00]

#### 2.2.2 Inserimento in automatico da variazione su accertamento

In inserimento di variazione su accertamento a residuo, con tipo variazione **"Inesigibilità"**, viene inserito il movimento nel registro.

Se l'accertamento risulta già presente nel registro, viene inserita una riga di dettaglio che **AUMENTA** il saldo del credito inesigibile.

[Schermata: Parametri per il Caricamento di una Nuova Variazione/Riduzione - Tipo Variazione impostato su "Inesigibilità", Solo Accertamenti a Residui]

> ⚠️ **Nota:** Devono essere valorizzati i flag per inserire il movimento nel registro dei crediti inesigibili.

[Schermata: Variazioni su Accertamenti - Dati Variazione con Tipo Variazione "Inesigibilità", Stato "Definitiva", e flag "Movimento nel registro inesigibile" spuntato]

#### 2.2.3 Inserimento in modo manuale del movimento

Dalla paginazione di gestione, clicco **"nuovo"** e procedo all'inserimento manuale del movimento all'interno del registro dei crediti inesigibili, inserisco il record (di testata).

> ⚠️ **Attenzione:** La procedura **NON** permette l'inserimento di un accertamento già presente nel registro crediti. In tal caso va inserito un movimento di variazione, nella testata di accertamento già presente.

[Schermata: Form "Crediti dubbia esigibilità" con campi: Descrizione Credito, Anno inizio, Accertamento, Riga variazione, Importo inesigibile, Assegnatario, Voce di bilancio, Piano Finanziario, Descrizione accertamento]

#### 2.2.4 Inserimento automatico da variazione aumento accertamento

Se l'ente deve effettuare un incasso sull'accertamento presente nel registro (chiuso in precedenza), il movimento di variazione **"aumento con atto"** fatto dalle variazioni su accertamenti, può essere riportato in automatico nel dettaglio del credito presente nel registro.

[Schermata: Parametri per il Caricamento di una Nuova Variazione/Riduzione - Tipo Variazione "Aumento con Atto"]

> ⚠️ **Nota:** Devono essere valorizzati i flag per inserire il movimento nel registro dei crediti inesigibili.

[Schermata: Variazioni su Accertamenti - Dati Variazione con Tipo Variazione "Aumento con Atto", Importo Variazione (+) 33,00, flag "Movimento nel registro inesigibile" spuntato]

> ⚠️ **ATTENZIONE:** Questo movimento nel registro **DIMINUISCE** il saldo del credito inesigibile finale (visto che l'ente incassa).

[Schermata: Dettaglio credito dubbia esigibilità con elenco variazioni (Stralcio prova, prova altra inesigibilità, Aumento con atto per incasso) e form di dettaglio con Tipo movimento "Incasso", Importo 33,00, Saldo 247,00]

#### 2.2.5 Inserimento manuale variazioni

Dall'elenco utilizzo **modifica** di un record già presente.

[Schermata: Dettaglio credito dubbia esigibilità - elenco con colonne Progressivo, Anno inizio, Accertamento, Descrizione accertamento, Descrizione, Importo credito, Saldo. Pulsante "MODIFICA" evidenziato]

Il tasto **+** permette di gestire il dettaglio, e inserire movimenti in aumento e diminuzione del saldo.

> ⚠️ **Attenzione** nel valorizzare la **data della variazione**, che influisce in modo fondamentale alla rappresentazione del movimento in estrazione o stampa.

[Schermata: Form di inserimento dettaglio con campi: Tipo movimento (Incasso), Data variazione, Accertamento, Riga variazione, Descrizione, Importo, Saldo. Pulsante "Aggiungi" evidenziato]

### 2.3 Reportistica

In base all'anno contabile:

> ℹ️ **Informazioni:** I movimenti estratti o stampati saranno rappresentati nel registro in relazione all'anno in cui si sta effettuando l'estrazione o la stampa. I movimenti dell'anno saranno l'importo inesigibile iniziale per nuovi accertamenti, delle variazioni per quelli già presenti di anni precedenti.

Dalla paginazione utilizzo la funzione **"Esporta Excel"** o **"Stampa PDF"**.

#### Excel

[Schermata: Prospetto Crediti Inesigibili in formato Excel con colonne: Voce di Bilancio, Descrizione Voce di Bilancio, Numero Accertamento, Anno Accertamento, Note, Oggetto Accertamento, Assegnatario, Descrizione Assegnatario, Anno Inizio, Importo Inesigibile, Rimanenza Iniziale, Variazioni Credito, Nota Variazione, Data Variazione, Rimanenza Finale. Include righe TOTALI]

#### PDF

[Schermata: Registro Crediti Inesigibili in formato PDF intestato "Città di Arenzano", Esercizio 2026, Stampa del 13/07/2026. Tabella con colonne: Voce di Bilancio Anno/N° Acc./Anno Inizio, Oggetto Accertamento/Motivo Inesigibilità, Importo Inesigibile/Rimanenza Iniziale, Variazioni Credito/Nota Variazione, Rimanenza Finale. Raggruppato per voce di bilancio con subtotali]