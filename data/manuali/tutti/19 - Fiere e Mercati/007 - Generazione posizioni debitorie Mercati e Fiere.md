# Generazione posizioni debitorie Mercati e Fiere

Il programma consente la creazione massiva delle posizioni debitorie dei canoni, la creazione massiva delle lettere di accompagnamento e generazione del bollettino PagoPA; infine consente di inviare massivamente le comunicazioni al cittadino e protocollarle.

> **NOTE TECNICHE:** Va attivato il modulo con la Palitalsoft. L'ente deve comunicare l'intermediario PagoPA scelto dal comune e i dati di configurazione. Se si desidera procedere con l'invio massivo delle comunicazioni, va comunicato l'indirizzo PEC di spedizione da configurare oltre ai dati di configurazione del protocollo.

---

## 1) Verificare l'importo fisso della tassa

Verificare che sia presente l'importo fisso della tassa. Se non censito, procedere all'inserimento dal menù:

**Fiere e Mercati → Tabelle → Tariffe Cosap**

[Schermata: Form "Tipo Tariffe Cosap" con campi Codice (es. CR), Descrizione (es. Corrispettivo Rifiuti), Importo (es. 1.23) e pulsante "Parametri"]

---

## 2) Configurare le date scadenza dei bollettini PagoPA

Oltre quella data i bollettini che andremo a generare non saranno più pagabili.

Cliccare in alto a destra sull'icona utente e nel menù che si aprirà fare click su **Gestione Parametri**.

[Schermata: Pannello di Controllo con griglia di icone. L'icona "Gestione Parametri" (ingranaggio) è evidenziata con un cerchio rosso. L'icona utente in alto a destra è anch'essa cerchiata.]

### Configurazione parametri Fiere e Mercati

Usare i filtri e ricercare la dicitura **FIERE**.

[Schermata: Finestra "Configura Parametri" con campo filtro contenente "fiere" e risultato "PARAMETRI FIERE E MERCATI"]

Inserire la data scadenza scelta nei tre campi sotto evidenziati e fare click su **Conferma** per salvare.

[Schermata: Form di configurazione parametri con i campi evidenziati:
- Data Scadenza rata 1: 2022-11-18
- Data Scadenza rata 2: 2022-11-18
- Scadenza COSAP rata unica: 2022-11-18
- Pulsante F5-Conferma]

### Configurazione IVA

Se va applicata l'IVA, inserire l'importo (esempio: **10** nel caso di IVA al 10%). Se l'IVA non deve essere applicata, lasciare il campo vuoto.

[Schermata: Campo "Percentuale IVA corrente" con valore 10 evidenziato]

---

## 3) Creazione massiva delle posizioni debitorie

Procedere alla creazione massiva delle posizioni debitorie da:

**ANAGRAFICA → FIERA O MERCATO**

Entrando all'interno dell'anagrafica, fare click sul pulsante **"Crea Scadenze COSAP"**.

[Schermata: Dettaglio Mercato con tabella dei posti (Posto, Lett., Cod. Via, Descrizione, Zona, Tipo Posto, Lati, MQ, Licenza, Cod. Ditta). A destra, pulsante "Crea Scadenze COSAP" evidenziato con cerchio rosso.]

### Form "Crea Scadenze COSAP"

[Schermata: Dialog "Crea Scadenze COSAP" con i seguenti campi:
- **Anno***: 2022 — ANNO DI RIFERIMENTO PAGAMENTO
- **Rata***: 1 — INSERIRE 1 (CASO RATA UNICA)
- **Data***: 31/10/2022 — DATA SCADENZA
- **Giorni***: 3 — GIORNI DI MERCATO O FIERA
- **Tipo Tassa***: C1 — SELEZIONARE LA TASSA
- Pulsanti: Ok / Annulla]

### Formula applicata

$$\text{TOTALE DA PAGARE} = MQ \times \text{IMPORTO TASSA} \times \text{NUMERO GIORNI}$$

Le posizioni vengono create massivamente e sono gestibili nella sezione **COSAP/TOSAP**.