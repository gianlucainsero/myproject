# CWOL Financing – Vincoli

Guida operativa alla gestione dei vincoli (di competenza e di cassa) nell'applicativo CWOL Financing.

**Argomenti trattati:**
- Impostazioni applicativo
- Vincoli di competenza
- Vincoli di cassa
- Prospetti e consultazioni

---

## 1. Impostazioni applicativo

### 1.1 Percorso di configurazione

Per accedere alle configurazioni dei vincoli:

- **180. Servizi Economici** ->
- **90. Tabelle** ->
- **10. Configurazioni** ->
- **110. Vincoli e parametri** ->
  - 10. Tipologie Movimenti
  - 20. Definizione Allegati al Bilancio
  - 30. Destinazione Vincolo

### 1.2 Tipologie Movimenti

La maschera **Tipi Movimento** elenca le tipologie di movimento disponibili, distinte per competenza/cassa, con codice, descrizione, riga di destinazione, segno e data di modifica.

Esempi di tipologie presenti:

| Codice | Descrizione | Competenza/Cassa | Riga Dest. | Segno |
|--------|-------------|------------------|------------|-------|
| 1 | Utilizzato su Bilancio di Previsione Quota Corrente | 1 - Competenza | 3 | + |
| 2 | Utilizzato su Bilancio di Previsione Quota Capitale | 1 - Competenza | 3 | + |
| 3 | Conto consuntivo: Importo utilizzato per copertura disavanzo | 1 - Competenza | 23 | + |
| 4 | Conto consuntivo: Importo aggiunto per saldo FCDDE | 1 - Competenza | 24 | + |
| 5 | Conto consuntivo: Importo diminuito per saldo FCDDE | 1 - Competenza | 25 | + |
| 6 | Proviene da altri vincoli | 1 - Competenza | 22 | + |
| 7 | Trasferito ad altri vincoli | 1 - Competenza | 21 | + |
| 8 | Utilizzato su impegni promiscui | 1 - Competenza | 7 | + |
| 11 | Riduzione FCDDE applicate al bilancio a seguito eliminazione | 1 - Competenza | 25 | + |
| 17 | Somme Accantonate (fino al Rendiconto 2021) | 1 - Competenza | 21 | + |
| 18 | Minori Entrate | 1 - Competenza | 7 | + |
| 19 | Minori Spese | 1 - Competenza | 7 | - |
| 20 | Importo aggiunto - No Equilibri | 1 - Competenza | 24 | + |
| 21 | Importo diminuito - No Equilibri | 1 - Competenza | 25 | + |
| 22 | Quote accantonate nell'anno riguardanti le risorse vincolate | 1 - Competenza | 0 | + |
| 23 | Quote accantonate nel risultato di amm. riguardanti le risorse vincolate | 1 - Competenza | 0 | + |
| 89 | MOVIMENTO DIFFERENZA per Avanzo Libero | 1 - Competenza | 0 | + |
| 90 | MOVIMENTO SALDO FINALE COMP.ZA | 1 - Competenza | 0 | + |
| 100 | Cassa Proveniente da altri vincoli | 2 - Cassa | 4 | + |
| 101 | Cassa Trasferita ad altri vincoli | 2 - Cassa | 5 | - |
| 190 | MOVIMENTO SALDO FINALE CASSA | 2 - Cassa | 0 | + |
| 501 | Accantonamenti Competenza x Allegati | 1 - Competenza | 27 | + |
| 502 | Accantonamenti Residuo x Allegati | 1 - Competenza | 28 | + |
| 503 | Applicazione avanzo da previsione | 1 - Competenza | 3 | + |
| 504 | Avanzo applicato da variazione | 1 - Competenza | 4 | + |

#### Inserimento nuova tipologia

Per creare una nuova tipologia di movimento, compilare i campi:

- **Codice**
- **Descrizione**
- **Competenza-Cassa** (es. `1=Competenza`)
- **Riga Dest.** (es. `1 - Saldo Iniziale`)
- **Segno** (`+` / `-`)

### 1.3 Definizione Allegati al Bilancio

La maschera **Definizione Allegati** consente di configurare le righe degli allegati di bilancio, con campi: E/S, Descrizione Voce, Tipo Allegato (es. A/1, A/2, A/3), Colonna, Previsione, Rendiconto e Formula.

Esempi di formule: `+R1`, `-R2,-M11`, `+R26,-R12,-R1+R2+M11`, `+R12`, `+M1+M2`, `+R9`, `+R6+R10`, `-R17`, `+R23,-R24,-R25,-M7`, `+R22,-R11`, `+R18,-R19,+R20`.

### 1.4 Destinazione Vincolo

La tabella **Destinazioni Vincolo** definisce le destinazioni disponibili per tipo vincolo (1-P.Accantonata, 2-P.Vincolata), con descrizione, ordine e flag per totali previsione/rendiconto.

Esempi:

| Tipo Vincolo | Prog.Dest. | Descrizione | Ordine |
|--------------|-----------|-------------|--------|
| 1-P.Accantonata | 1 | Accantonamento x FCDDE | 40 |
| 1-P.Accantonata | 2 | Accantonamento residui parenti (solo per le regioni) | 60 |
| 1-P.Accantonata | 3 | Fondo anticipazioni di liquidità D.L.35/2013 | 10 |
| 1-P.Accantonata | 4 | Fondo perdite società partecipate | 20 |
| 1-P.Accantonata | 5 | Fondo contenzioso | 30 |
| 1-P.Accantonata | 6 | Altri accantonamenti da dettagliare in composizione avanzo | 70 |
| 1-P.Accantonata | 7 | Fondo garanzia debiti commerciali | 50 |
| 2-P.Vincolata | 1 | Vincoli derivanti da leggi e dai principi contabili | 10 |
| 2-P.Vincolata | 2 | Vincoli derivanti da trasferimenti | 20 |
| 2-P.Vincolata | 3 | Vincoli derivanti dalla contrazione di mutui | 30 |
| 2-P.Vincolata | 4 | Vincoli formalmente attribuiti dall'ente | 40 |
| 2-P.Vincolata | 5 | Altri Vincoli da specificare | 50 |

### 1.5 Anagrafica Vincoli

**Percorso:**

- **180. Servizi Economici** ->
- **10. Finanziaria** ->
- **10. Bilancio e Variazioni** ->
- **30. Vincoli**

L'anagrafica elenca i vincoli con descrizione e destinazione (es. B - Parte Accantonata, C - Parte Vincolata, D - Parte destinata agli investimenti, E - Parte disponibile, F - Altra destinazione esclusa da composizione avanzo).

#### Visualizzazione e modifica

È possibile **visualizzare** (icona occhio) o **modificare** (icona matita) un vincolo esistente.

#### Inserimento nuovo vincolo

Per inserire un nuovo vincolo, posizionarsi sul tipo vincolo e cliccare il pulsante **Nuovo Sottolivello**.

Nella maschera di dettaglio del vincolo, valorizzare in particolare:

- **Parte** (es. `1=Parte Corrente`)
- **Conto Tesoreria** (es. `03` - Contabilità Infruittifera Vincolata)

Altri campi: Codice del Vincolo, Descrizione, Descrizione per stampe, Dettaglio Destinazione Vincolo, Controllo su Gestionale, Anagrafica Operativa dal/al, Saldo Iniziale Competenza, Saldo Iniziale Cassa, Anno Inizio Competenza, Anno Inizio Cassa.

### 1.6 Collegamento del vincolo

#### Collegare il vincolo nella voce di bilancio

Nella maschera **Voci di Bilancio**, nel campo **Vincolo**, selezionare il vincolo dall'anagrafica.

#### Collegare il vincolo in accertamento

Nella scheda **Vincoli** dell'accertamento, scegliere il tipo di collegamento:

- **Su unico vincolo**
- **Frazionamento per intero**
- **Frazionamento parziale**

Nella griglia **Quota Parte (Frazionamento)** è possibile indicare più vincoli con relative quote e riscossi.

#### Collegare il vincolo in impegno

Nella scheda **Vincoli** dell'impegno, impostare **Collegamento con Vincoli** (es. `Su un Unico Vincolo`) e selezionare il vincolo.

#### Collegare impegno ad accertamento che lo finanzia

Nella scheda **Vincoli** dell'impegno, usare la sezione **Collega un Nuovo Accertamento con lo stesso Vincolo**, inserendo Anno/Numero dell'accertamento e cliccando **Aggiungi**.

---

## 2. Vincoli di competenza

### 2.1 Situazione di competenza

Selezionare il vincolo tramite il pulsante **Situazione Competenza**. La maschera mostra, per l'anno di riferimento, le righe di competenza (Valore iniziale, Avanzo applicato al bilancio, Impegni pluriennali, Utilizzo su impegni promiscui, Entrate da accertamenti, Economie, Avanzo da stanziamento, Cancellazione residui, Incremento residui, Somme trasferite/provenienti da altri vincoli, Somme aggiunte/sottratte da saldo FCDDE, Valore competenza) con colonne Importi, Parte Corrente, Parte Capitale e Provenienza/Formula.

### 2.2 Dettaglio riga

L'icona **Det** permette di visualizzare il dettaglio della riga.

### 2.3 Tipo movimenti accantonamenti

Per i movimenti di tipo accantonamento è disponibile la maschera **Gestione Accantonamenti**, con campi:

- **Accantonamenti Competenza**
- **Accantonamenti al 31-12-YYYY**

con pulsante **Aggiorna**.

Il dettaglio mostra l'**Elenco analitico delle risorse vincolate nel risultato di amministrazione**, con colonne: Id. Vincolo, Capitolo di Entrata, Capitolo di Spesa, Risorse vincolate nel Risultato di Amm. al 01-01, Risorse vincolate applicate al bilancio dell'esercizio, Entrate vincolate accertate, Impegni emessi da entrate accertate, Fondo Pl.Vin., Cancellazione residui, Cancellazione impegni da FPV, Risorse vincolate nel bilancio al 31-12, Risorse vincolate nel Risultato di Amm. al 31-12.

Selezionando un anno successivo (es. 2024), il **Valore iniziale** riporta il saldo finale dell'anno precedente, con indicazione "di cui accantonato".

### 2.4 Dettaglio impegni

La finestra **Dettaglio Vincoli** (riga impegni pluriennali) mostra le schede **Impegni** e **Economie**, con colonne Anno, Numero Impegno, Disponibilità, Mov.Annuale, Reimputazioni, Piano Finanziario, Capitolo. In basso i totali: Disponibilità e Mov.Annuali (A), Reimputazioni (B), Economie (C), Totale (A+B+C). Pulsanti: **Esporta Dati**, **Collega Accertamento**.

### 2.5 Dettaglio variazioni

La finestra **Dettaglio Vincoli** (riga variazioni di bilancio) elenca le variazioni con colonne T.Del., Num., Data, Det., Variazione Pos., Variazione Neg., Mov.Annuale, Descrizione, e il totale (V.Pos - V.Neg). Pulsante **Esporta Dati**.

### 2.6 Inserimento movimenti annuali

Tramite il pulsante **Movimentazioni Annuali** si accede alla griglia **Importi Annuali** (Anno, Tipo Variazione, Descrizione Variazione, Importo Variazione, Parte, Comp/Cass, Conto).

Per inserire un nuovo movimento, cliccare **Nuovo** e compilare:

- **Anno**
- **Tipo Variazione** (es. `8 - Utilizzato su impegni promiscui`)
- **Descrizione**
- **Importo**
- **Parte** (es. `2=Parte Capitale`)
- **Conto Tesoreria**
- **Entrata/Uscita**
- **Piano Finanziario**
- **Capitolo**
- **Impegno**

È possibile selezionare E/U e gestire l'informazione su **voce bilancio** e **Impegno/accertamento**. Pulsanti **Aggiungi** ed **Elenco**.

---

## 3. Vincoli di cassa

### 3.1 Situazione di cassa

Selezionare il vincolo tramite il pulsante **Situazione di Cassa**. La maschera mostra le righe: Cassa disponibile al 01-01, Incassato da Reversale, Pagato da Ordinativo, Somme positive/provenienti da altri vincoli, Somme negative/trasferite ad altri vincoli, Saldo Cassa, con colonne Totale Vincolo, Saldo su conto vincolato, Saldo su conto libero, Provenienza/Formula.

In basso, il **Dettaglio Conti di Tesoreria** con Conto, Descrizione, Saldo iniziale, Entrate, Uscite, Saldo.

### 3.2 Dettaglio movimenti e riepilogo conti tesoreria

- L'icona **Det** (dettaglio movimenti) visualizza i singoli movimenti di cassa.
- Il **Riepilogo per conti tesoreria** mostra i saldi per ciascun conto (es. `01 - L` Contabilità Infruittifera Libera, `03 - V` Contabilità Infruittifera Vincolata).

### 3.3 Controlli in emissione ordinativi

#### Conto tesoreria in impegno

Nella situazione impegni, il campo **Conto Tesoreria** dell'impegno riporta il conto associato al vincolo (es. `03` Contabilità Infruittifera Vincolata).

#### Gestione del conto in liquidazione

In emissione ordinativo è possibile gestire il conto tesoreria e impostarne uno **diverso** da quello presente nel vincolo (es. conto `01` in liquidazione a fronte di vincolo `C2.02`).

#### Verifica saldo conto tesoreria

In emissione ordinativo per vincolo, la procedura verifica il saldo del conto tesoreria presente. In caso di anomalie viene mostrato un messaggio **NON BLOCCANTE**, ad esempio:

> **Attenzione – Riscontrati errori non bloccanti:**
> Emissione Mandati - controllo:
> Conto in Liquidazione diverso da quello presente nel vincolo
> Saldo del conto minore o uguale a 0 (0)
> Proseguire? [Conferma] [Annulla]

### 3.4 Inserimento movimenti annuali

Tramite **Movimentazioni Annuali**, per i vincoli di cassa si inseriscono movimenti **+ e -** indicando il **Conto Tesoreria**. Esempi di tipo variazione: `100 - Cassa Proveniente da altri vincoli`, `101 - Cassa Trasferita ad altri vincoli`.

---

## 4. Prospetti e consultazioni

### 4.1 Prospetti

Per produrre le stampe dei prospetti devono essere valorizzati gli allegati. Dalla situazione di competenza sono disponibili i pulsanti:

- **Allegato al Bilancio di Previsione**
- **Allegato al Rendiconto**

### 4.2 Valorizzare il prospetto

Nella finestra dell'elenco analitico delle risorse vincolate, cliccare **Ricalcola Importi** per aggiornare i valori del prospetto.

### 4.3 Stampa prospetti

Tramite **Stampa Allegati al Bilancio** si seleziona:

- **Bilancio**: Previsione / Rendiconto
- **Tipo Allegato**: Quote Accantonate / ecc.
- **Versione Ufficiale** (flag)

con output **Esporta in XLSX** o **Crea Report PDF**.

I prospetti generati includono:

- **Allegato a2) Risultato di amministrazione - quote vincolate**: Elenco analitico delle risorse vincolate nel risultato di amministrazione presunto, con colonne Capitolo di Entrata, Descrizione, Capitolo di Spesa, Descrizione e le colonne (a)-(i) delle risorse vincolate.
- **Allegato a) Risultato di amministrazione**: Prospetto dimostrativo del risultato di amministrazione (Fondo Cassa al 1° gennaio, Riscossioni, Pagamenti, Saldo di Cassa, Residui Attivi/Passivi, Fondo Pluriennale Vincolato, Risultato di Amministrazione).
- **Allegato a) Risultato presunto di amministrazione**: Tabella dimostrativa del risultato di amministrazione presunto.

### 4.4 Stampa ordinativo per vincolo

Tramite **Stampa Ordini per Vincolo** si selezionano il vincolo, il periodo di emissione e la data di stampa, con opzione **Solo ordinativi con conto su vincolo**. L'output **Ordinativi per Vincolo** elenca, per ciascun vincolo: Cod Vincolo, Descrizione, Conto Vincolo, Altri Conti, Saldo Iniziale, Riscossioni, Pagamenti, Rettifica (+/-), Saldo Conti Vincolo/Altro, Saldo Finale.

Dalla situazione di cassa sono inoltre disponibili i pulsanti **Stampa Ordini** ed **Estrazione Cassa per Vincolo**.