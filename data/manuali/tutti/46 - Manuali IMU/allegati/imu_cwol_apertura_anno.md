# Parametri di Configurazione ICI/IMU

**Menù:** Tributi → IMU → Parametri di Configurazione

[Schermata del percorso di menu: Tributi → IMU → Parametri di Configurazione, con sottomenu che include: Fascie Detrazioni TASI, Causale Atti, Responsabile per Testi, Tassi di Interesse, Coltivatori Diretti, Sistema Sanzionatorio, Tipo aliquote differenziate ICI/IMU, Dati Annuali IMU, Dati Annuali TASI]

---

## 1.1 Dati Annuali IMU

**Percorso:** Parametri di Configurazione → Dati Annuali IMU

[Schermata: elenco dei Dati Annuali IMU con colonne: Anno, Aliq.ordl./Aliq.abit.pri., Detr.abit.pri./Esenz.Ab.Pri., DT.scaden., DT Accont., DT.scad.dichi., Terreni ES/Uso.alq.diff., Tipo calc.stor.pret.]

Vengono mostrati i dati annuali già definiti nell'Applicativo.

### Modalità di visualizzazione e modifica

- **Sola visualizzazione:** cliccare il pulsante 👁 (inibita ogni funzione di modifica).
- **Modifica:** cliccare il pulsante ✏ (possibile ogni funzione di modifica). Per confermare le eventuali modifiche apportate, cliccare il bottone **Aggiorna**.

[Schermata: dettaglio Dati Annuali IMU con campi: Aliquota ordinaria, Aliq. abit. princ., Detrazione abit. princ., Aliq. Fabbricati Strumentali, Aliq. Aree Fabbricabili, Aliq. Uso Gratuito Parenti, Aliq. Terreni Conduzione Diretta, Aliq. Ben Merci, Aliq. Dovuta Stato, Aliq. Terreni Agricoli, Aliq. Canone Concordato, Aliq. IACP, Detrazione Figlio. Sezione "Impostazioni per Calcoli" con: Tipo Calcolo Acconto, Solo impo. dovuta calc. sulla base aliquote Anno in corso, Utiliz. Aliq. Differ., Impo. Min. Riscuotibile, Cod.Arrondata, Modalità Arrotondam., Gestione Pertinenze, Attiva Pertinenze IMU, Modalità Gestione Pertinenze, Mod.Calc.Avanzo Detraz. da Utilizzare, % Ridu.Canone Con., % Ridu. inagibilità, Esenzione Abitazione Principale, Reperimento dinamico Unità Geografiche Storicizzate, Utilizza aliquote specifiche tariffe d'estimo, Importo Deduzione IMIS, Importo Limite Rendita per Assimilati, Importo Limite ISEE per Assimilati, Reperimento Valore Aree, Tipo Immobile da esentare, Scadenze - Versamenti - Dichiarazioni (Italiani, Esteri, Terreni)]

### Duplicazione

Dalla videata dell'elenco dei dati annuali posizionarsi sull'anno e procedere con il tasto **"Duplica"**.

[Schermata: elenco Dati Annuali IMU con pulsante "Duplica" evidenziato a destra]

Si aprirà una videata con anno di origine e anno di destinazione (entrambi modificabili) e il tasto 'Duplica':

[Schermata: finestra "Duplicazione Dati Annuali" con campi: Anno Origine (2023), Anno Destinazione (2024), pulsanti "Duplica" e "Annulla"]

Duplicando otterremo una tabella dei dati annuali **IDENTICA** a quella dell'anno precedente (es: 2023).

Entrare in modifica nell'anno di destinazione (es: 2024).

**MODIFICARE**, mediante l'utilizzo della matita, le date di scadenza:

[Schermata: sezione "Scadenze - Versamenti - Dichiarazioni" con campi: DT scad.acconto (Italiani: 17/06/2024, Esteri: 16/06/2024, Terreni: —), DT scad.saldo (Italiani: 16/12/2024, Esteri: 16/12/2024, Terreni: —), DT scad.dichiaraz. (Italiani: 01/07/2023, Esteri: 01/07/2024)]

Con **'Aggiorna'** verranno memorizzate e salvate.

---

## 1.2 Tassi di Interesse

**Percorso:** Parametri di Configurazione → Tassi di Interesse

[Schermata: percorso di menu Tributi → IMU → Parametri di Configurazione → Tassi di Interesse]

Vengono mostrati i tassi di interesse già definiti nell'Applicativo.

[Schermata: tabella "Tassi di Interesse" con colonne: Anno, Tipo provvedimento ICI, Tip. calc. interessi, DT iniz. validità, Dis., Utente mod., Data mod., Ora mod., id. Esempi di righe: 2015/1-Liquidazione/3-"Giorni" tasso "legale"/01/01/2014, 2015/2-Accertamento/3-"Giorni" tasso "legale"/01/01/2014, ecc.]

### Modalità di visualizzazione e modifica

- **Sola visualizzazione:** cliccare il pulsante 👁 (inibita ogni funzione di modifica).
- **Modifica:** cliccare il pulsante ✏ (possibile ogni funzione di modifica). Per confermare le eventuali modifiche apportate, cliccare il bottone **Aggiorna**.

### Inserimento di una nuova annualità

Per censire a Sistema i Tassi di Interesse di una nuova annualità in apertura, cliccare il pulsante **"Nuovo"** presente nella sezione a destra della finestra di visualizzazione. Si aprirà la finestra vuota dove indicare i parametri di definizione dei nuovi tassi di interesse.

[Schermata: finestra "Tassi di interesse ICI" con campi: Anno*, Disabilitato, Data inizio validità*, Tipo provvedimento ICI (dropdown: "1 - Liquidazione"), Tipo calc. interessi (dropdown: "0 - Nessun calcolo interessi"). Sezioni: "Interessi rendite definitive" e "Interessi rendite presunte" con tabelle Valore in % / Data Periodo (dal/al). Pulsanti: Aggiungi, Nuova Aliquota, Nuova Aliquota per Anno, Altra Ricerca]

### Parametri da compilare

| Parametro | Descrizione |
|-----------|-------------|
| **Anno** | Anno di riferimento dell'imposta |
| **Data inizio validità** | Data a partire dalla quale è operativa la tabella. Il record precedente è cessato automaticamente con un altro record con data inizio superiore |
| **Tipo provvedimento IMU** | 1: liquidazione, 2: accertamento, 3: rimborso, 4: rateizzazione, 8: contradditorio |
| **Tipo calcolo degli interessi** | 0: nessun calcolo interessi, 1: calcolo a "semestri compiuti" con tasso per "periodo", 2: calcolo a "giorni" con tasso per "periodo", 3: calcolo a "giorni" con tasso "legale", 4: calcolo a "semestri compiuti" con tasso "legale" |

Salvare i dati censiti e confermare l'Aggiornamento con il bottone **"Aggiungi"**.

> ⚠️ **Attenzione:** Questa operazione di inserimento all'inizio di ogni anno **DEVE** essere fatta per **tutti i tipi di provvedimenti** presenti in tabella (1: liquidazione, 2: accertamento, 3: rimborso, 4: rateizzazione).

### Aggiunta interessi per anni accertabili

Inoltre bisogna aggiungere nelle righe degli anni accertabili anche gli interessi del nuovo anno che si sta aprendo. Per farlo andare in modifica (per ciascuna tipologia) sull'anno di riferimento e aggiungere la riga di interesse, poi andare su **"Aggiorna"**:

[Schermata: tabella "Tassi di Interesse" filtrata per Anno 2022 con righe: 2022/2-Accertamento/3-"Giorni" tasso "legale"/01/01/2017, 2022/1-Liquidazione/3-"Giorni" tasso "legale"/01/01/2017, 2022/3-Rimborso/3-"Giorni" tasso "legale"/01/01/2017]

[Schermata: dettaglio modifica Tassi di interesse ICI con id: 113, Anno: 2022, Data inizio validità: 01/01/2017, Tipo provvedimento ICI: 2 - Accertamento, Tipo calc. interessi: 3 - "Giorni" tasso "legale". Sezione "Interessi rendite definitive" con valori % e periodi: 0,10% dal 01/01/2017 al 31/12/2017, 0,30% dal 01/01/2018 al 31/12/2018, 0,80% dal 01/01/2019 al 31/12/2019, 0,05% dal 01/01/2020 al 31/12/2020, 0,01% dal 01/01/2021 al 31/12/2021, 1,25% dal 01/01/2022 al 31/12/2030, 0,00% dal — al —. Pulsante "Aggiorna" evidenziato]

---

## 1.3 Definizione Sistema Sanzionatorio

**Percorso:** Parametri di Configurazione → Sistema Sanzionatorio

[Schermata: percorso di menu Tributi → IMU → Parametri di Configurazione → Sistema Sanzionatorio]

Si aprirà la finestra dove vengono mostrati i sistemi sanzionatori già definiti nell'Applicativo.

[Schermata: tabella "Sistema Sanzionatorio" con colonne: Anno, Tip.Calc.Sans., % sanz.infe.denu., % sanz.omess.denu., Imp.min.sanz.omiss., % sanz.omess.vers., Spese Notif., Imp.min.riscuot., % riduz.defin.agger., Utente mod., Data mod., Ora mod. Esempi: 2024/CON assorb. sanz./50,00/100,00/51,00/30,00/7,60/12,00/75,00, 2024/SENZA assorb. sanz. Finanz. 2007/50,00/100,00/51,00/30,00/5,56/12,00/66,66, ecc.]

### Modalità di visualizzazione e modifica

- **Sola visualizzazione:** cliccare il pulsante 👁 (inibita ogni funzione di modifica).
- **Modifica:** cliccare il pulsante ✏ (possibile ogni funzione di modifica). Per confermare le eventuali modifiche apportate, cliccare il bottone **Aggiorna**.

### Duplicazione

Posizionarsi sulla riga dell'anno di origine e procedere con il tasto **"Duplica"**.

[Schermata: elenco Sistema Sanzionatorio con pulsante "Duplica" evidenziato a destra]

Verrà aperta una schermata che indicherà le seguenti voci:

[Schermata: finestra "Duplicazione Sistema Sanzionatorio" con campi: Anno Sistema Sanzionatorio Origine (2023), Tipo metodo calcolo sanzioni Origine (2), Anno Sistema Sanzionatorio Destinazione (2024), Tipo metodo calcolo sanzioni Destinazione (2). Pulsanti: "Duplica" e "Annulla"]

Fare **"Duplica"** per avere attivo l'anno di destinazione (nel nostro esempio 2024).

> Di prassi il sistema sanzionatorio è **con assorbimento** o **senza assorbimento**, pertanto bisognerà procedere con la duplicazione per **entrambi i sistemi**.

[Schermata: elenco Sistema Sanzionatorio con righe evidenziate per anno 2024: "2024 CON assorb. sanz." e "2024 SENZA assorb. sanz. Finanz. 2007"]

---

## 1.4 Tariffe di Estimo Catastale

**Percorso:** Tributi → Territorio e Catasto → Tabelle Unità Ecografiche → Tariffe estimo catastale

[Schermata: percorso di menu Tributi → Territorio e Catasto → Tabelle Unità Ecografiche → Tariffe estimo catastale]

Si aprirà una pagina con tutti gli anni.

Evidenziare l'anno da duplicare (nel nostro caso il 2023), scrivendolo nello sheet **'Anno'** e dando un invio, poi fare **"Duplica"**:

[Schermata: tabella "Tariffe d'Estimo Catastale" con colonne: Del. T., Cod. ISTAT, Anno, Cat. Catastale, Cla. di merito, Zona censuaria, Tariffa, Va. variati IC, Codice utente, Data operazione, Ora operazione. Esempi: 042048/2023/0/U/0,00/25,00, 042048/2023/A2/1/U/77,27/5,00, ecc. Pulsante "Duplica" evidenziato]

Si aprirà la videata con Anno di origine e Anno di destinazione:

[Schermata: finestra "Duplicazione per Anno" con campi: Anno Origine (2023), Anno Destinazione (2024). Pulsanti: "Duplica" e "Annulla"]

La tabella è ora stata duplicata:

[Schermata: tabella con riga duplicata per anno 2024 evidenziata]

---

## 1.5 Aliquote Differenziate per Anno

Se il Vs Ente si avvale di aliquote differenziate (non presenti sui dati annuali), andare dal menù dei parametri di Configurazione su **Tipo aliquote differenziate ICI/IMU**.

**Percorso:** Parametri di Configurazione → Tipo aliquote differenziate ICI/IMU

[Schermata: percorso di menu Tributi → IMU → Parametri di Configurazione → Tipo aliquote differenziate ICI/IMU]

Comparirà la lista delle aliquote differenziate utilizzate.

[Schermata: tabella "Tipo aliquote differenziate ICI" con colonne: Cod.Aliq., Descrizione, Seguito deter., Disabilitato, Utente mod., Data mod., Ora mod. Esempi: A/UNITA IMMOBILIARE LOCATA CON CONTRATTO/REGISTRATO A CITTADINO RESIDENTE, B/BOX CANTINE AUTONOMESE A SERVIZIO ABIT/LOCATA CON CONTR. REG. CITT. RES., ecc.]

Per vedere l'aliquota e l'anno di riferimento posizionarsi sulla riga desiderata con un click facendola diventare gialla e sotto comparirà l'elenco delle annualità:

[Schermata: tabella "Aliquote differenziate ICI per anno" con colonne: Cod.Aliq., Anno, Valore aliquota, Disabilitato, Utente mod., Data mod., Ora mod. Esempi: A/1997/6,00, A/1998/6,00, A/1999/6,00, A/2000/6,00]

Per aggiungere la medesima aliquota anche per l'anno successivo cliccare sul tasto **+** in basso.

[Schermata: barra strumenti in basso con pulsante "+" evidenziato]

Si aprirà la seguente videata in cui si dovrà mettere anno di riferimento e importo dell'aliquota, poi fare **'Aggiungi Aliquota per Anno'**:

[Schermata: finestra "Tipo aliquote differenziate ICI" con campi: Codice Aliquota ICI (A - UNITÀ IMMOBILIARE LOCATA CON CONTRATTO), Anno (0), Valore Aliquota ICI (0,00), Aliquota Annullata. Pulsante "Aggiungi Aliquota per Anno"]

---

## 1.6 Aliquote Aree Fabbricabili per Anno

Se il Vs Ente si avvale da Regolamento di aliquote specifiche divise per Zone rispetto alle aree fabbricabili, bisogna aprire anche l'annualità per queste aliquote.

**Percorso:** Tributi → Territorio e Catasto → Tabelle Unità Ecografiche → Tariffe zone fabbricabili

[Schermata: percorso di menu Tributi → Territorio e Catasto → Tabelle Unità Ecografiche → Tariffe zone fabbricabili]

Si aprirà il seguente menù con l'indicazione della tariffa:

[Schermata: tabella "Tariffe aree fabbricabili per zona e anno" con colonne: Dis., Microzona, Descrizione, Anno, Tariffa, Codice utente, Data operazione, Ora operazione. Esempi: C1/ZONA ESPANSIONE/2017/25,60, C1/ZONA ESPANSIONE/2018/25,60, C2/ZONA ESPANSIONE/2002/180,30, C2/ZONA ESPANSIONE/2017/225,30, C2/ZONA ESPANSIONE/2018/225,30. Pulsante "+" evidenziato in basso a sinistra]

Col tasto **+** evidenziato si aprirà la seguente maschera che andrà compilata indicando l'anno, la microzona e l'aliquota. Per memorizzare fare **'Aggiungi'**.

Alla microzona si accede tramite la **lentina** (icona ricerca) indicata.

[Schermata: finestra "Tariffe zone fabbricabili" con campi: Anno*, Codice microzona* (con icona lente di ricerca evidenziata), Tariffa Zona (0,00), Aliquota Annullata. Pulsanti: "Aggiungi", "Altra Ricerca"]