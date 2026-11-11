# Inserimento Classificazioni e Nuovo programma di stampa

## 1. Classificazioni

Di seguito si illustra l'iter per la parametrizzazione e l'inserimento delle classificazioni negli obiettivi; questa implementazione dà la possibilità all'utente di creare a proprio piacimento una serie di classificazioni, riguardanti ad esempio il PIAO o il PNRR, avendo poi la possibilità di inserirle nei singoli obiettivi.

### 1.1 Creazione e Parametrizzazione Classificazioni

#### 1.1.1 Creazione

Per creare nuove classificazioni, cliccare la funzione **50. Definizione elementi aggiuntivi (PIAO e Pr.Reg.)**:

[Schermata: percorso menu 170. Controllo di Gestione → 20. Controllo di Gestione → 10. Tabelle → 50. Definizione elementi aggiuntivi (PIAO e Pr. Reg.)]

Cliccare poi il simbolo **+** o il bottone **Nuovo** per inserire il primo livello della nuova classificazione, dopo di che, popolare i seguenti campi:

- **Elemento classificazione CdG**: titolo abbreviato del primo livello della classificazione.
- **Radice**: elemento comune a tutti i livelli della classificazione. **NB: questa dicitura comparirà in stampa.**
- **Descrizione classificazione aggiuntiva**: testo libero per inserire informazioni riguardo alla classificazione. **NB: questa dicitura comparirà in stampa.**
- **Data inizio**: data di inizio di validità della classificazione.
- **Data fine**: data di fine validità della classificazione.

Un esempio di compilazione del primo livello di classificazione:

[Schermata: form di compilazione con ID 12, Elemento classificazione CdG "PNRR_CLASS", Radice "PNRR_R", Descrizione "Primo livello della classificazione PNRR", Data inizio 01/01/2023, Data fine 31/12/2023]

Per creare i secondi livelli della classificazione cliccare il primo livello e poi sempre **+** o **Nuovo**, in automatico verranno già proposti la Radice che dev'essere la stessa per tutti i livelli e la data di inizio validità.

[Schermata: form di secondo livello con ID padre 12, Radice "PNRR_R" precompilata, Data inizio 01/01/2023]

Di seguito un esempio di come apparirà l'albero delle classificazioni con primo e secondo livello:

[Schermata: albero classificazioni aggiuntive con elementi: PNRR_CLASS (Prog. 12, Primo livello della classificazione PNRR), PNRR_SEMPL (Prog. 13, Prog. padre 12, Semplificazione), PNRR_DIGIT (Prog. 14, Prog. padre 12, Digitalizzazione), PNRR_FORM (Prog. 15, Prog. padre 12, Formazione), PNRR_ACESS (Prog. 16, Prog. padre 12, Accessibilità), AGENDA2030 (Prog. 18, AGENDA2030 dal 01-05-2023)]

#### 1.1.2 Parametrizzazione

Accedere alla funzione **60. Parametri classificazione per obiettivi**:

[Schermata: percorso menu 170. Controllo di Gestione → 20. Controllo di Gestione → 10. Tabelle → 60. Parametri classificazione per obiettivi]

Cliccare **+** o **Nuovo** e popolare i seguenti campi:

- **Descrizione classificazione**: testo libero per indicare la denominazione della classificazione.
- **Id.Radice**: cliccando il simbolo della lente di ingrandimento si apre la maschera delle classificazioni (par. 1.1.1.). Scegliere il primo livello della classificazione che si sta parametrizzando.
- **Modalità operativa**:
  - **Richiesta singola**: la classificazione verrà gestita manualmente direttamente all'interno degli obiettivi.
  - **Inclusione globale**: tutti i secondi livelli delle classificazioni verranno importati massivamente negli obiettivi, in modalità deselezionata.
  - **Inclusione dei selezionati**: tutti i secondi livelli delle classificazioni verranno importati massivamente negli obiettivi, in modalità selezionata.

Di seguito un esempio di parametrizzazione:

[Schermata: form con Id.Tabella 1, Descrizione classificazione "Classificazione PNRR", Id.Radice 12 (PNRR_R - Primo livello della classificazione PNRR), Modalità operativa "Inclusione globale"]

### 1.2 Classificazione negli obiettivi

Per classificare gli obiettivi basta entrare in gestione e recarsi nella sezione **Associativa class.**. A questo punto il popolamento della sezione avverrà in base a come si sono parametrizzate le classificazioni (par. 1.1.2):

- Se si è utilizzata l'opzione **Richiesta singola**, le classificazioni andranno aggiunte manualmente nella sezione dell'obiettivo cliccando **+**. Si aprirà la finestra delle classificazioni dove si potranno scegliere le classificazioni da associare agli obiettivi.
- Se si sono scelte le opzioni **Inclusione globale** o **Inclusione dei selezionati**, cliccando il bottone **Associa class.**, tutte le classificazioni saranno associate all'obiettivo; nel primo caso le classificazioni saranno deselezionate, nel secondo già selezionate.

Di seguito un esempio della sezione in questione:

[Schermata: tab "Associativa class." con elenco classificazioni associate (PNRR_R - Semplificazione, PNRR_R - Digitalizzazione, PNRR_R - Formazione, PNRR_R - Accessibilità) con colonne Peso, Perc. real., Descrizione monitoraggio, Monitoraggio, Data inser., Ultime mod., Data mod. e pulsante "Associa class."]

Nel caso fossero stati fatti degli errori in fase di inserimento basterà eliminare le singole righe, prima selezionandole e poi cliccando l'icona del **Cestino** oppure azzerando tutta la sezione cliccando **Cancella TUTTE le Assoc.cl.**.

## 2. Nuovo programma di stampa

Di seguito viene spiegato l'iter per utilizzare il nuovo programma di stampa e salvataggio dei prospetti relativi al Controllo di Gestione.

### 2.1 Parametrizzazione Prospetti

La prima operazione da effettuare è quella della parametrizzazione dei prospetti di stampa e per farlo bisogna recarsi nella funzione **10. Anagrafica Prospetti**:

[Schermata: percorso menu 170. Controllo di Gestione → 20. Controllo di Gestione → 80. Stampe → 10. Anagrafica Prospetti]

A questo punto cliccare **+** o **Nuovo** per creare una nuova anagrafica, compilando poi i seguenti campi:

- **Descrizione del prospetto**: testo libero per denominare la nuova anagrafica (es. Referto di Gestione dettagliato, Piano delle Performance sintetico, ecc.).
- **Data Inizio Validità del Prospetto**: data da cui è possibile utilizzare il nuovo prospetto.
- **Data Fine Validità del Prospetto**: data da cui non sarà più possibile utilizzare il nuovo prospetto.
- **Tipo Prospetto**: attualmente sono disponibili due prospetti, il **0 - PdO - Piano degli Obiettivi** e il **1 - Referto di Gestione**.
- **Modello Sintetico Dettagliato**: tipologia di modello da applicare all'anagrafica:
  - **1 - Sintetico**: quando si sceglierà un prospetto con questo modello sarà preselezionata la versione sintetica.
  - **2 - Dettagliato**: quando si sceglierà un prospetto con questo modello sarà preselezionata la versione dettagliata.
  - **3 - Libero**: quando si sceglierà un prospetto con questo modello l'operatore potrà selezionare liberamente le sezioni da stampare.
- **Note generiche sul Prospetto**: testo libero per aggiungere ulteriori informazioni all'anagrafica in questione.

Esempio di compilazione di un'anagrafica prospetti:

[Schermata: form con Descrizione "Piano delle Performance Dettagliato", Data Inizio Validità 01/01/2022, Data Fine Validità 31/12/2029, Tipo Prospetto "0 - PdO - Piano degli Obiettivi", Modello Sintetico Dettagliato "2 - Dettagliato", Note "Anagrafica che predispone la stampa del Piano delle Performance in forma dettagliata."]

Esempio di elenco di anagrafiche prospetti:

| Id | Descrizione | Data Inizio Valid. | Data Fine Valid. | Tipo Prospetto | Modello Sintetico Dettagliato | Codice del Testo | Note |
|----|-------------|-------------------|-----------------|----------------|-------------------------------|-----------------|------|
| 4 | Piano delle Performance Dettagliato | 01/01/2022 | 31/12/2029 | PdO - Piano degli Obiettivi | Dettagliato | | Anagrafica che predispone la stampa del Piano delle Performance in forma dettagliata. |
| 5 | Referto Sintetico | 01/01/2023 | 01/01/2030 | Referto di Gestione | Sintetico | | |
| 6 | Referto Libero | 01/01/2023 | 01/01/2030 | Referto di Gestione | Libero | | |
| 7 | Piano delle Performance Sintetico | 01/01/2023 | 31/12/2030 | PdO - Piano degli Obiettivi | Sintetico | | |
| 8 | Piano delle Performance Libero | 01/01/2022 | 01/01/2029 | PdO - Piano degli Obiettivi | Libero | | |
| 9 | Referto Dettagliato | 01/01/2021 | 31/12/2030 | Referto di Gestione | Dettagliato | | |

### 2.2 Nuovi prospetti e repository

#### 2.2.1 Repository

Per gestire prospetti già salvati o per crearne di nuovi cliccare la funzione **20. Prospetti**:

[Schermata: percorso menu 170. Controllo di Gestione → 20. Controllo di Gestione → 80. Stampe → 20. Prospetti]

Nella funzione si avrà l'elenco delle anagrafiche prospetti create precedentemente (par. 2.1) e per ognuna di esse i prospetti che si è deciso di salvare:

- Cliccando sulle icone del **PDF** o della **Cartellina** sarà possibile consultare (i PDF) o consultare e modificare (gli RTF) dei prospetti salvati, senza quindi dover rilanciare la selezione degli obiettivi e la procedura di stampa come nel vecchio programma.
- Per dare un titolo o una denominazione e distinguere i prospetti l'uno dall'altro sarà possibile anche utilizzare il campo **Note**, selezionando la riga di un prospetto e cliccando il simbolo della **matitina**.
- La colonna **Nuovo/Modificato** indica se il prospetto è stato modificato (**M**) o meno (**N**).

Ecco un esempio di come si presenta un elenco di prospetti salvati:

[Schermata: elenco prospetti con colonne Classificazione, Prospetto, Anno Produzione, Data Produzione, Utente Produzione, Nuovo/Modificato, UUID, Utente Ultima Variazione, Data Ultima Operazione, Note. Esempi: "4 - Piano delle Performance Dettagliato" con sotto "O 5 - PdO - Piano degli Obiettivi" (2023, 26/10/2023, CED, M), "O 3 - PdO - Piano degli Obiettivi" (2023, 10/10/2023, CED, N), ecc.]

#### 2.2.2 Nuovo Prospetto

Sempre dalla funzione **20. Prospetti**, cliccando su **Nuovo**, sarà possibile creare e decidere e salvare o meno un nuovo prospetto:

- Dopo aver cliccato **Nuovo** si aprirà infatti la maschera di selezione degli obiettivi da stampare.
- Una volta selezionati gli obiettivi e cliccato **Conferma la selezione** si aprirà la maschera di scelta delle anagrafiche prospetti.
- In **Tipo stampa** infatti saranno presenti tutte le anagrafiche prospetti (par. 2.1) valide nel periodo in cui si sta creando il prospetto.
- Cliccando poi **Stampa RTF** o **Stampa PDF** si creerà il nuovo prospetto che di default verrà salvato nel repository ma volendo, togliendo il flag da **Salvare in Prospetti**, si creerà il nuovo prospetto in consultazione o modifica senza essere salvato.

Riassumendo ecco gli step da seguire:

**Primo step:**

[Schermata: elenco prospetti con pulsante "Nuovo" evidenziato in alto a destra]

**Secondo step:**

[Schermata: finestra "Stampe CdG (selezione)" con elenco obiettivi (Stato, Codice, Numero, Titolo, Tipo Obiettivo, Grado Strateg., Data dal, al, Attiv., Ind.) e pulsante "Conferma la Selezione" evidenziato]

**Terzo step:**

[Schermata: finestra "Stampe CdG" con Tipo Stampa a tendina (Referto Sintetico, Referto Libero, Piano delle Performance Libero, Referto Dettagliato, Piano delle Performance Sintetico, Piano delle Performance Dettagliato), opzioni Sintetico/Dettagliato per varie sezioni (Attività, Indicatori, Risorse finanziarie, Risorse umane, Classificazioni, Azioni Correttive, Stati d'attuazione), checkbox "Salvare in Prospetti" e pulsanti "Stampa RTF" e "Stampa PDF"]