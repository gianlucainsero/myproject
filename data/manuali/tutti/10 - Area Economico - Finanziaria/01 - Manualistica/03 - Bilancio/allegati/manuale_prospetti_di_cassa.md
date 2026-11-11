# Manuale per Variazione Adeguamento di Cassa (CP+RS)

## 1. Prospetti di Cassa

Il presente manuale illustra la funzione di creazione variazione di sola cassa per l'adeguamento con la competenza e i residui.

Tale funzione è disponibile al menu:

**180. Servizi Economici → 10. Finanziaria → 110. Bilancio e variazioni → 110. Prospetti di cassa**

### 1.1 Parametri di Selezione

È possibile innanzitutto selezionare **Parte Entrata** o **Spesa** e filtrare se si vuole uno specifico **Piano Finanziario**.

È inoltre possibile indicare la **Data Assestato al** da prendere come riferimento per gli importi dei capitoli e decidere se includere in questi anche eventuali **variazioni provvisorie**.

[Schermata: Pannello "Parametri di selezione" con campi Parte (Entrata/Spesa), Piano Finanziario, Data Assestato al, checkbox "Includi variazioni provvisorie", dropdown "Controllo disponibilità cassa" e checkbox "Crea variazione"]

#### 1.1.1 Controllo disponibilità cassa – Nessun controllo (0)

Impostando il controllo disponibilità di cassa su **"0 – Nessun controllo"** è possibile solamente esportare la situazione di cassa di tutti i capitoli alla data indicata in "Data Assestato al" tramite il bottone sulla destra **"Prospetto XLSX"**.

[Schermata: Configurazione con "Controllo disponibilità cassa" impostato su "0 - Nessun controllo" e pulsante "Prospetto XLSX" evidenziato]

[Schermata: Foglio Excel "PROSPETTO SITUAZIONE DI CASSA" con colonne: P.1.1, P.1.2, P.2.1, P.2.2, P.3.4, VOCE DI BILANCIO, DENOMINAZIONE, STANZIAMENTO COMPETENZA, STANZIAMENTO RESIDUI, STANZIAMENTO DI CASSA, VARIAZIONI POSITIVE COMPETENZA, VARIAZIONI NEGATIVE COMPETENZA, VARIAZIONI POSITIVE CASSA, VARIAZIONI NEGATIVE CASSA, STANZIAMENTO ASSESTATO COMPETENZA]

#### 1.1.2 Controllo disponibilità cassa – Solo capitoli con disponibilità a pagare/incassare negativa (1)

Impostando il controllo disponibilità di cassa su **"1 – Solo capitoli con disponibilità a pagare/incassare negativa"** è possibile estrarre i capitoli con cassa negativa alla data indicata in "Data Assestato al" tramite il bottone sulla destra **"Prospetto XLSX"**.

[Schermata: Configurazione con "Controllo disponibilità cassa" impostato su "1 - Solo capitoli con disponibilità a pagare/incassare negativa (stanziamento di cassa - pagati CP + RS)"]

[Schermata: Foglio Excel con colonne: VARIAZIONI NEGATIVE COMPETENZA, VARIAZIONI POSITIVE CASSA, VARIAZIONI NEGATIVE CASSA, STANZIAMENTO ASSESTATO COMPETENZA, STANZIAMENTO ASSESTATO RESIDUO, STANZIAMENTO ASSESTATO CASSA, DIFFERENZA CP + RS - CA, RISCOSSIONI COMPETENZA, RISCOSSIONI RESIDUO, RISCOSSIONI CASSA, DISPONIBILITA' A PAGARE CASSA (colonna evidenziata con valori negativi)]

#### 1.1.3 Controllo disponibilità cassa – Solo capitoli con stanziamento di cassa superiore allo stanziamento di CP+RS (2)

Impostando il controllo disponibilità di cassa su **"2 – Solo capitoli con stanziamento di cassa superiore allo stanziamento CP+RS"** è possibile:

**a)** Tramite apposito flag **"Accertato a residuo"** decidere di confrontare lo stanziamento di cassa con:
- La **competenza + residui iniziali** (senza flag), oppure
- La **competenza + residui effettivi** impegnati/accertati nel corso dell'anno (con flag)

> **Nota informativa:** Selezionando questo flag verrà considerato come "RS" l'impegnato a residuo invece dello stanziamento del residuo iniziale per adeguare la disponibilità di cassa.

[Schermata: Configurazione con "Controllo disponibilità cassa" su "2 - Solo capitoli con stanziamento di cassa superiore allo stanziamento di CP + RS" e checkbox "Accertato a residuo" evidenziato con messaggio informativo]

**b)** Inoltre, è possibile tramite altro flag **"Crea variazione"** decidere di:
- Fare la sola estrazione XLSX dei capitoli con stanziamento di cassa superiore allo stanziamento CP+RS (**senza flag**), oppure
- Fare in modo che il programma crei anche la **variazione di cassa** per l'adeguamento dello stanziamento di questi capitoli alla CP+RS (**con flag**)

Anche per la creazione della variazione, in base a come è stato gestito il flag al punto a) di questo paragrafo, la variazione di cassa verrà creata considerando i **residui iniziali** o quelli **effettivi**.

[Schermata: Configurazione con checkbox "Crea variazione" attivo e sezione "Genera variazione di CASSA" con campi: Stato della Variazione (Definitiva/Provvisoria), Proposta di Variazione (n. e data), Atto di Assunzione (n. e data). Pulsante "Prospetto XLSX e Crea" evidenziato]

Nel caso in cui si scelga di procedere anche con la creazione della variazione allora occorre compilare gli **estremi della variazione** e lo stato **"Definitiva/Provvisoria"**.

Una volta inseriti gli estremi procedere tramite il bottone **"Prospetto XLSX e Crea variazione"**.

Questo creerà la variazione di cassa che sarà consultabile e gestibile come ogni altra variazione di bilancio dal menu **Variazioni di bilancio**.

Inoltre esporterà un file Excel con l'indicazione dei capitoli, dei loro stanziamenti e dell'importo variato.

[Schermata: Foglio Excel con colonne: VARIAZIONI POSITIVE CASSA, VARIAZIONI NEGATIVE CASSA, STANZIAMENTO ASSESTATO COMPETENZA, ACCERTATO A RESIDUO, STANZIAMENTO ASSESTATO CASSA, DIFFERENZA CP + RS - CA (colonna evidenziata con valori negativi), RISCOSSIONI COMPETENZA, RISCOSSIONI RESIDUO, RISCOSSIONI CASSA, DISPONIBILITA' A PAGARE CASSA]

#### 1.1.4 Controllo disponibilità cassa – Solo capitoli con stanziamento di cassa minore allo stanziamento di CP+RS (3)

Impostando il controllo disponibilità di cassa su **"3 – Solo capitoli con stanziamento di cassa minore allo stanziamento CP+RS"** è possibile:

**a)** Tramite apposito flag **"Accertato a residuo"** decidere di confrontare lo stanziamento di cassa con:
- La **competenza + residui iniziali** (senza flag), oppure
- La **competenza + residui effettivi** impegnati/accertati nel corso dell'anno (con flag)

[Schermata: Configurazione con "Controllo disponibilità cassa" su "3 - Solo capitoli con stanziamento di cassa minore allo stanziamento di CP + RS" e checkbox "Accertato a residuo" evidenziato]

**b)** Inoltre, è possibile tramite altro flag **"Crea variazione"** decidere di:
- Fare la sola estrazione XLSX dei capitoli con stanziamento di cassa minore allo stanziamento CP+RS (**senza flag**), oppure
- Fare in modo che il programma crei anche la **variazione di cassa** per l'adeguamento dello stanziamento di questi capitoli alla CP+RS (**con flag**)

Anche per la creazione della variazione, in base a come è stato gestito il flag al punto a) di questo paragrafo, la variazione di cassa verrà creata considerando i **residui iniziali** o quelli **effettivi**.

[Schermata: Configurazione con checkbox "Crea variazione" attivo e sezione "Genera variazione di CASSA" con campi: Stato della Variazione, Proposta di Variazione, Atto di Assunzione. Pulsante "Prospetto XLSX e Crea" evidenziato]

Nel caso in cui si scelga di procedere anche con la creazione della variazione allora occorre compilare gli **estremi della variazione** e lo stato **"Definitiva/Provvisoria"**.

Una volta inseriti gli estremi procedere tramite il bottone **"Prospetto XLSX e Crea variazione"**.

Questo creerà la variazione di cassa che sarà consultabile e gestibile come ogni altra variazione di bilancio dal menu **Variazioni di bilancio**.

Inoltre esporterà un file Excel con l'indicazione dei capitoli, dei loro stanziamenti e dell'importo variato.

[Schermata: Foglio Excel "PROSPETTO SITUAZIONE DI CASSA" con colonne: VARIAZIONI POSITIVE CASSA, VARIAZIONI NEGATIVE CASSA, STANZIAMENTO ASSESTATO COMPETENZA, STANZIAMENTO ASSESTATO RESIDUO, STANZIAMENTO ASSESTATO CASSA, DIFFERENZA CP + RS - CA (colonna evidenziata con valori positivi), RISCOSSIONI COMPETENZA, RISCOSSIONI RESIDUO, RISCOSSIONI CASSA, DISPONIBILITA' A PAGARE CASSA]

### 1.2 Creazione e Gestione Variazioni

Se si lanciano più operazioni del tipo **"Crea variazione"** e vengono indicati più volte gli stessi estremi, allora il programma **accorpa le operazioni** creando un'unica variazione di bilancio visibile dall'apposito menu.

Ogni variazione creata è gestibile (modifica, conferma, variazione estremi, ecc.) dal menu:

**Servizi economici → Finanziaria → Bilancio e variazioni → Variazioni di bilancio**