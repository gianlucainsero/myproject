# TARI - Manuale Operativo

## 1.1 Creazione Flusso 290

Questo programma consente di estrarre i dati relativi agli atti **NOTIFICATI** con residui **SCADUTI** e **NON PAGATI**.

Il tracciato 290 riguarda gli atti emessi entro il **31/12/2019**.

Il programma di creazione flusso 290 è reperibile da:

**Tributi → Tari → Flussi verso Enti terzi → Creazione Flusso 290**

[Schermata del menu di navigazione: Tributi → 40. TARI → 130. Flussi verso Enti terzi → 50. Creazione Flusso 290]

---

### Impostazione parametri

Si aprirà la seguente videata, che permette di impostare i parametri:

[Schermata della maschera "Creazione Flusso290" con i campi: Tributo, Servizio Emittente, Cod.Ente Impositore, Cod.Comune iscrizione a ruolo, Identificativo documento, Archivio precompilato, Importo minimo iscrivibile, Percentuale addizionale provinciale, Controllo importo minimo, Includi le voci di addizionale, Sanzioni a defunti, Percentuale Sanzione Ridotta, Includi ruoli già inviati, Tipo creazione (Simulazione/Creazione), e sezione Riepilogo]

Per poter avviare la creazione del flusso, è necessario impostare i parametri di creazione:

#### Tributo

- **TARI** va indicato nel caso in cui l'Ente lavori esclusivamente su cityware
- **TARI-AVVISI** va indicato nel caso in cui l'Ente lavori già su cwol

#### Servizio Emittente

Scegliere con la lentina l'emissione contenente gli atti notificati e scaduti non pagati da inserire nel 290.

Quando l'emissione viene selezionata, si apre la maschera dei codici tributo da compilare manualmente con i codici tributo della TARI.

[Schermata della maschera "Inserisci i Codici Tributo" con i campi: TEFA, Sanzioni, Interessi, Eccedenze/Rimborsi, Sanzioni TEFA, Spese di notifica, Indennità, Maggiorazione statale, Addizionale MECA, Imponibile tassa, Altri Importi, Sanzione amministrativa, Arrotondamento, Interessi di rateazione, Interessi TEFA, Spese di rimozione e ripristino, Addizionale ECA]

Nell'esempio sotto, sono indicati i campi da valorizzare obbligatoriamente; i codici tributo sono a scelta dell'Ente (2S79-2S80-2S81):

| Campo | Codice Tributo |
|-------|---------------|
| TEFA | TEFA |
| Sanzioni | 2Y99 |
| Interessi | 2Y98 |
| Sanzioni TEFA | TEFA |
| Spese di notifica | 2Z01 |
| Imponibile tassa | 2S79 |
| Arrotondamento | 2S79 |
| Interessi TEFA | TEFN |

Cliccare quindi il pulsante **'Conferma'** in basso a sinistra della videata; apparirà il messaggio:

> **Codici Registrati**

Continuare con l'impostazione dei parametri nella maschera di 'Creazione Flusso290'.

#### Cod.Ente Impositore

Codice Ente impositore secondo la codifica CNC (va indicato dall'Ente).

#### Cod.Comune iscrizione a ruolo

Indicare **1**.

#### Identificativo documento

- **Numero Provvedimento**: scelta consigliata se è stato attivato il numeratore provvedimenti
- **Progressivo Provvedimento**: scegliere questa opzione se non è stato attivato il numeratore provvedimenti per evitare di passare il campo a zero

#### Archivio precompilato

Da scegliere se si vuole elaborare solo quanto caricato nell'archivio.

#### Importo minimo iscrivibile

Indicare l'importo minimo iscrivibile individuato all'interno del regolamento dell'Ente (di prassi **12,00**).

#### Percentuale addizionale provinciale

Indicare la percentuale addizionale provinciale individuata all'interno del regolamento dell'Ente (di prassi **5**).

#### Controllo importo minimo

- **Su importo totale avviso**: indicare questa voce se l'importo minimo va considerato sull'importo totale avviso
- **Su singola riga di dettaglio avviso**: indicare questa voce se l'importo minimo va considerato sulla singola riga di dettaglio avviso

#### Includi le voci di addizionale

Indicare **'SI'** per includere le voci di addizionale.

#### Sanzioni a defunti

Indicare **'NO'** per non applicare sanzioni ai defunti.

#### Percentuale Sanzione Ridotta

Questo campo deve essere valorizzato, indicando la sanzione, nel caso in cui si mandino a ruolo avvisi che abbiano una sanzione ridotta (OPV – OD); se questa opzione non è necessaria lasciare il campo vuoto.

#### Includi ruoli già inviati

Accendere il flag se si ha la necessità di includere dei ruoli già inviati.

#### Tipo creazione

Indicare se eseguire l'elaborazione in **'Simulazione'** o **'Creazione'**:

- Con la **Simulazione** viene generato un file di esempio
- Con la **Creazione** viene generato il file definitivo e viene aggiornato lo stato del provvedimento da 'Notificato' a 'Inviato a ruolo'

---

A questo punto, cliccando **'Vedi Documenti'** verranno visualizzati nella sezione 'Riepilogo', l'elenco dei soggetti che verranno inclusi nel flusso.

[Schermata della sezione "Riepilogo" con colonne: Cognome, Nome, Cod.Fiscale, Anno, Progr., Data Pr...]

L'elenco è esportabile in Excel con il tastino in basso a sinistra.

L'Excel verrà scaricato nella cartella **Download** (es. `DalnviareARuolo.xlsx`).

---

### Creazione flusso

Una volta controllati i dati nel riepilogo, si potrà procedere con il **'Crea Flusso'**.

A fine creazione comparirà il messaggio:

> **Creazione Flusso290 eseguita**

Qualora ci fossero degli scarti, il programma lo segnala con il seguente messaggio:

> **Attenzione: La creazione del flusso ha generato degli scarti. Verificare!**

Nella cartella del PC **Download** sarà presente il riepilogo e il tracciato (es. `riepilogo (1).xlsx` e `00902230.001 (1).txt`).

Nel riepilogo sono indicati tre sheet:

1. **'Riepilogo'**
2. **'Riepilogo per tipo voce'**
3. **'Errori'**

Cliccando su **'Errori'** sarà visualizzato l'elenco dei soggetti che il programma ha scartato con la relativa motivazione nella colonna E.

[Schermata dello sheet "Errori" in Excel con motivazioni tipo: "Data scadenza Minore o Uguale alla data creazione documento"]

Sistemare gli eventuali errori, rigenerare il tracciato seguendo la procedura dall'inizio, quindi inviare il tracciato all'organo competente.