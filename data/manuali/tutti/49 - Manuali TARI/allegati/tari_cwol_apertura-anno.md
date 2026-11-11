# TARI – Gestione della Tassa sui Rifiuti

## Manuale Operativo – Apertura Annualità

---

## Premessa

Il presente manuale è volto a permettere l'apertura dell'annualità/aliquote al cambio anno. Senza l'apertura delle tabelle e con essa l'inserimento di alcuni dati mancherebbero i parametri di calcolo.

I parametri che l'Ente deve configurare all'inizio di ogni annualità sono:

- Tipo cespite
- Classi
- Categorie d'uso
- Addizionali
- Tassi d'interesse

---

## 1.1 Apertura Anno

> **IMPORTANTE**
> Se la struttura del tariffario **NON** viene modificata dall'Ente tra un'annualità e l'altra, è sufficiente effettuare l'apertura dell'anno di cespiti, classi e categorie, selezionando il tipo cespite e usando il bottone **Apertura Anno**.
> *(sono escluse da questa funzione le addizionali, per cui occorre poi comunque procedere ad aprirle)*

### Procedura

Dal menù:

**Tributi → TARI → Parametri di Configurazione → Cespiti - Classi - Categorie**

[Schermata: percorso di menu a cascata con "70. Tributi" → "50. TARI" → "10. Parametri di Configurazione" → "40. Cespiti-Classi-Categorie"]

Selezionare il cespite e andare sul pulsante a destra **'Apertura Anno'**

[Schermata: griglia "Tipi Entrata" con riga TARES/TARI (Id 8, Tributo 3944, Anno 2025) e pulsante "Apertura Anno" evidenziato a destra]

Si aprirà la seguente videata, dove sarà sufficiente inserire l'anno di destinazione e confermare:

[Schermata: finestra "Apertura Anno" con campi: ID Tipo Cespite = 8, Descrizione Tipo Cespite = TARES/TARI, Anno Origine = 2025, Anno Destinazione = 2026, pulsante "Conferma Apertura Annualità"]

> **ATTENZIONE**
> L'operatività sopra descritta va eseguita **SOLO** dopo essersi assicurati che **NON** sia stata già aperta l'annualità successiva.
>
> **Esempio:** se andando sulla riga del cespite e pur essendoci l'anno corrente, sotto compaiono già gli usi e le classi dell'annualità successiva, significa che questa è già stata configurata.

[Schermata: griglia con Tipo Cespite TARES/TARI (Anno 2024) e sottostante sezione "Classi" con righe per anno 2025 (Classi 1 e 2) e sezione "Categorie" con usi per anno 2025]

In questo caso andrà modificato l'anno all'interno del tipo cespite (il pulsante **'Apertura anno' NON va usato**).

[Schermata: griglia "Tipi Entrata" con TARES/TARI, Anno = 2024, con campo Anno evidenziato]

Nella videata dei dati generali sostituire l'anno corrente con quello successivo e fare **"Aggiorna"**.

[Schermata: form "Dati Generali" con campi: Id = 8, Descrizione = TARES/TARI, Tributo = 3944 TARES/TARI, Descrizione Breve = TARES/TARI, Unità Misura = MQ, Cadenza di Iscrizione a Ruolo = 0 - Indeterminata, **Anno Riferimento = 2025** (evidenziato), Codice Tributo Addizionali = 0157 TRIB.COMUNALI MAGGIOR.ADDIZIONALE L.801/70, Tipo Tributo = 1 - Tassa Rifiuti, Servizio = 1 - TARI. Pulsante "Aggiorna" evidenziato a destra]

> **NB:** nel caso in cui ci fossero modifiche alla struttura del tariffario, occorre procedere con la configurazione sotto descritta.

---

## 1.2 Tipo Cespite

Per procedere all'apertura del nuovo anno è necessario cambiare l'annualità sul tipo cespite.

Dal menù: **Tributi → TARI → Parametri di Configurazione → Cespiti - Classi - Categorie**

[Schermata: percorso di menu a cascata con "70. Tributi" → "50. TARI" → "10. Parametri di Configurazione" → "40. Cespiti-Classi-Categorie"]

Comparirà la videata con i tipi cespite; andare su tipo cespite **TARES/TARI** ed entrare in modifica con la **matitina**.

[Schermata: griglia "Tipi Entrata" con riga TARES/TARI (Id 8, Tributo 3944, Anno 2025), icona matita evidenziata]

Nella videata dei dati generali sostituire l'anno corrente con quello successivo e fare **"Aggiorna"**.

[Schermata: form "Dati Generali" con campo "Anno Riferimento = 2025" evidenziato e pulsante "Aggiorna"]

---

## 1.3 Classi

Le Classi sono configurate sempre dal menù già indicato:

**Tributi → TARI → Parametri di Configurazione → Cespiti - Classi - Categorie**

Si aprirà la videata dove vengono mostrati tutti i tipi cespite definiti nell'applicativo.

[Schermata: griglia "Tipi Entrata" con TARES/TARI (Id 8, Tributo 3944, Anno 2025)]

Per visualizzare le Classi associate ad un Tipo Cespite, cliccare sul Tipo Cespite selezionandolo (deve evidenziarsi di colore giallo) e di default comparirà nell'area sottostante della finestra la sezione **"Classi"** dove è possibile visionare tutte le Classi associate al Tipo Cespite per ogni annualità.

[Schermata: griglia "Tipi Entrata" con TARES/TARI evidenziato in giallo e sezione "Classi" sottostante con righe: Anno 2025, Classe 1 = UTENZE DOMESTICHE; Anno 2025, Classe 2 = UTENZE NON DOMESTICHE]

Per visualizzare le categorie associate alla classe evidenziare la classe di interesse:

[Schermata: sezione "Classi" con Classe 1 (UTENZE DOMESTICHE) evidenziata in giallo e sezione "Categorie" a destra con: Anno 2025, Classe 1, Uso 1 = ABITAZIONI CIVILI; Uso 2 = CASE SPARSE LONTANE DAL PERIMETRO; Uso 3 = CASE SPARSE LONTANE DAL PERIMETRO; Uso 5 = GARAGE, AUTORIMESSE, ETC AD USO ABITATIVO; Uso 6 = CAPANNI BALNEARI USO PRIVATO]

### Duplicazione della Classe

Per duplicare la classe posizionarsi sulla classe di interesse e cliccare **duplica**:

[Schermata: griglia con pulsante "Duplica" evidenziato a destra]

Si aprirà la seguente videata: inserire l'anno di riferimento e fare **"Conferma Duplicazione"**.

[Schermata: form di duplicazione con campi: Tipo Cespite = 8 TARES/TARI, **Anno Riferimento = 2025** (evidenziato), Codice Classe = 3, Descrizione = UTENZE DOMESTICHE, Tipo Calcolo = Tariffa Utenze Domestiche a Giorni, Tipo Utenza = Domestica. Pulsante "Conferma Duplicazione" evidenziato]

> Eseguire la medesima operazione sia per la **classe domestica** che per quella **non domestica**.

---

## 1.4 Categorie d'Uso

Le Categorie sono configurate sempre dal menù già indicato:

**Tributi → TARI → Parametri di Configurazione → Cespiti - Classi - Categorie**

Si aprirà la videata dove vengono mostrati tutti i tipi cespite definiti nell'applicativo.

[Schermata: griglia "Tipi Entrata" con TARES/TARI (Id 8, Tributo 3944, Anno 2025)]

Come già descritto, per visualizzare le Classi associate ad un Tipo Cespite, cliccare sul Tipo Cespite selezionandolo (deve evidenziarsi di colore giallo) e di default comparirà nell'area sottostante della finestra la sezione "Classi" dove è possibile visionare tutte le Classi associate al Tipo Cespite per ogni annualità.

Per visualizzare le categorie associate alla classe evidenziare la classe di interesse (deve evidenziarsi di colore giallo):

[Schermata: sezione "Classi" con Classe 1 evidenziata e sezione "Categorie" a destra con 5 righe di usi per anno 2025]

### Duplicazione della Categoria

Per procedere alla duplicazione della categoria dal vecchio al nuovo anno posizionarsi sulla categoria di interesse e cliccare **duplica**.

[Schermata: griglia con pulsante "Duplica" evidenziato a destra]

Si aprirà una videata: inserire l'anno di riferimento e fare **"Conferma Duplicazione"**.

[Schermata: form di duplicazione categoria con campi: Tipo Cespite = 8 TARES/TARI, **Anno Riferimento = 2025** (evidenziato), Codice Classe = 1, Codice Categoria D'Uso = 7, Descrizione = ABITAZIONI CIVILI (evidenziato), Punto di Conferimento, Ruolo Ordinario con Tariffa Unitaria Parte Fissa = 1,00000 e Tariffa Unitaria Parte Variabile = 1,00000, sezione "Coefficiente Tariffa Per Componenti Famiglia" con tabella. Pulsante "Conferma Duplicazione" evidenziato]

> La medesima operazione dovrà essere ripetuta **per tutte le categorie** delle utenze domestiche e non domestiche.

---

## 2.1 Addizionali

Dal menù: **Tributi → TARI → Parametri di Configurazione → Addizionali**

[Schermata: percorso di menu a cascata con "70. Tributi" → "50. TARI" → "10. Parametri di Configurazione" → "10. Addizionali"]

Si visualizzeranno le addizionali degli anni pregressi; per aprire il nuovo anno andare sul pulsante **"Replica"**.

[Schermata: griglia "Codici Tributo" con riga Anno 2025, Addizionale 1 = ADDIZIONALI PROVINCIALI 5,00%, Addizionale 2 = MAGGIORAZIONE TARES 0,00%. Pulsante "Replica" evidenziato a destra]

Comparirà la seguente videata in cui di default ci sarà il tipo cespite, l'anno di origine e l'anno di destinazione, procedere con il tasto **"Replica"**.

[Schermata: finestra "Replica" con campi: Tipo Cespite = TARES/TARI, Anno Origine = 2025, Anno Destinazione = 2026. Pulsanti "Replica" (evidenziato) e "Annulla"]

L'addizionale della nuova annualità risulterà creata:

[Schermata: griglia con nuova riga Anno 2026, Addizionale 1 = ADDIZIONALI PROVINCIALI 5,00%, Addizionale 2 = MAGGIORAZIONE TARES 0,00%]

---

## 3.1 Tassi d'Interesse

Dal menù: **Tributi → Modulo Base → Tabelle Generali → Impostazioni contabili → Tassi interesse**

[Schermata: percorso di menu a cascata con "70. Tributi" → "160. Modulo Base" → "20. Tabelle Generali" → "30. Impostazioni contabili" → "70. Tassi interesse"]

Si aprirà la seguente videata:

[Schermata: griglia "Tassi Interesse" con righe: Servizio 1 = RSU, Descrizione = Giorni tasso legale; Servizio 2 = GIORNI A TASSO LEGALE, Descrizione = Giorni tasso legale]

Con la matita entrare in modifica, aggiungere la riga del tasso di interesse per l'anno in corso e fare **"Aggiorna"**.

[Schermata: form "Definizione Tassi Interesse" con campi: Progr. = 2, Descrizione = GIORNI A TASSO LEGALE, Data inizio Validità = 01/01/2004, Servizio Emittente = 2, Tipo calcolo = Giorni tasso legale. Sezione "Interessi" con tabella storico valori:

| Valore in % | Data Periodo |
|---|---|
| 2,50% | Dal 01/01/2004 Al 31/12/2006 |
| 5,50% | Dal 01/01/2007 Al 31/12/2007 |
| 6,00% | Dal 01/01/2008 Al 31/12/2009 |
| 4,00% | Dal 01/01/2010 Al 31/12/2010 |
| 4,50% | Dal 01/01/2011 Al 31/12/2011 |
| 2,50% | Dal 01/01/2012 Al 31/12/2013 |
| 1,00% | Dal 01/01/2014 Al 31/12/2014 |
| 0,50% | Dal 01/01/2015 Al 31/12/2015 |
| 0,20% | Dal 01/01/2016 Al 31/12/2016 |
| 0,10% | Dal 01/01/2017 Al 31/12/2017 |
| 0,30% | Dal 01/01/2018 Al 31/10/2018 |
| 0,80% | Dal 01/01/2019 Al 31/12/2019 |
| 0,05% | Dal 01/01/2020 Al 31/12/2020 |
| 0,01% | Dal 01/01/2021 Al 31/12/2021 |
| 1,25% | Dal 01/01/2022 Al 31/12/2022 |
| 5,00% | Dal 01/01/2023 Al 31/12/2023 |
| 2,50% | Dal 01/01/2024 Al 31/12/2024 |
| **2,00%** | **Dal 01/01/2025 Al 31/12/2025** |
| 0,00% | Dal — Al — |

Pulsante "Aggiorna" evidenziato a destra]