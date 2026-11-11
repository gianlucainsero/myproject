# IMU – GESTIONE DELL'IMPOSTA MUNICIPALE UNICA

## Manuale Operativo

---

## 1. Giornale delle Riscossioni

### Stampa Giornale delle Riscossioni

Dal menù:

**Tributi → IMU → Estrazioni → Stampa Giornale Riscossioni**

[Schermata del percorso di menu: Tributi > 30. IMU > 100. Estrazioni > 30. Stampa Giornale Riscossioni]

Si aprirà la seguente videata:

[Schermata del form "Giornale Riscossioni" con i seguenti campi:]

| Campo | Descrizione |
|-------|-------------|
| Tipo Riscossioni | Menu a tendina (es. ICI/IMU) |
| Anno Riferimento | Campo di testo |
| Rifer. Operatore | Campo di testo |
| Tipo Versamento | Menu a tendina |
| Proven. Versam. | Menu a tendina |
| Solo pagamenti Non Aggravati | Menu a tendina (es. NO) |
| Data Contabile | Intervallo di date (da / a) |
| Data Versamento | Intervallo di date (da / a) |
| Data Inserimento | Intervallo di date (da / a) |
| Data Fattura | Intervallo di date (da / a) |
| **Tipo Stampa** | Menu a tendina (Totale / Dettagliata) |
| **Versamenti** | Menu a tendina (Ordinari / Violazioni / Rateizzazioni / Tutti) |
| **Tipo File** | Menu a tendina (PDF / EXCEL) |

Pulsante: **Stampa**

---

### Opzioni di Stampa

È possibile, tra le varie scelte, selezionare dai menù a tendina il **Tipo Stampa**, i **Versamenti** e il **Tipo File**:

- **Tipo Stampa:**
  - Totale
  - Dettagliata

- **Versamenti:**
  - Ordinari
  - Violazioni
  - Rateizzazioni
  - Tutti

- **Tipo File:**
  - PDF
  - EXCEL

---

### Stampa Totale

La **Stampa totale** genera un file Excel con **6 fogli**, ognuno con una estrazione diversa per tipologia di riepilogo.

I fogli sono organizzati per:

| Foglio | Criterio di riepilogo |
|--------|----------------------|
| 1 | Tipo Versamento |
| 2 | Riferimento Operazione |
| 3 | Provenienza Versamento |
| 4 | Data Versamento |
| 5 | Data Contabile |
| 6 | Data Inserimento |

#### Esempio – Versamenti ordinari

| Tipo Versamento | Terreni | Aree Fab. | Ab. Princ. | Altri Fab. | Fab. Stru. | Imu D |
|-----------------|---------|-----------|------------|------------|------------|-------|
| Acconto | 752,12 | 65.531,19 | 1.665,00 | 878.534,74 | 0,00 | 100.057,59 |
| Saldo | 702,90 | 73.635,28 | 1.262,00 | 955.164,68 | 43,84 | 145.492,52 |
| Unico | 12,00 | 7.048,00 | 0,00 | 43.169,39 | 0,00 | 0,00 |
| Integrativo | 0,00 | 0,00 | 0,00 | 19.064,27 | 0,00 | 2.347,00 |

#### Esempio – Versamenti violazioni

| Tipo Versamento | Terreni | Aree Fab. | Ab. Princ. | Altri Fab. | Fab. Stru. | Imu D |
|-----------------|---------|-----------|------------|------------|------------|-------|
| Accertamento | 0,00 | 0,00 | 0,00 | 4.648,57 | 0,00 | 0,00 |
| Liquidazione | 0,00 | 0,00 | 0,00 | 2.653,00 | 0,00 | 0,00 |
| Ruolo Coattivo Pagato | 2.995,46 | 901,34 | 3,09 | 8,56 | 0,00 | 0,00 |

---

### Stampa Dettagliata

La **Stampa dettagliata** genera un file Excel o PDF in cui vengono elencati tutti i versamenti in base alle selezioni specificate a video.

#### Esempio di output dettagliato (Excel):

| Codice Fiscale | Anno | Data Versamento | Data Contabile | TERRENI | AREE | AB.PRINC | FABBD | COM_3930 | FABBD_STA_3925 | STRUMEN_3913 | BENMERCE_3939 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| C | 2021 | 04/05/2021 | 11/05/2021 | 0,00 | 0,00 | 762,00 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 |
| A | 2021 | 10/05/2021 | 17/05/2021 | 0,00 | 0,00 | 147,00 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 |
| 2 | 2021 | 10/05/2021 | 17/05/2021 | 0,00 | 0,00 | 93,00 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 |
| C | 2021 | 10/05/2021 | 17/05/2021 | 0,00 | 0,00 | 93,00 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 |
| E | 2021 | 11/05/2021 | 18/05/2021 | 0,00 | 0,00 | 147,00 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 |
| L | 2021 | 14/05/2021 | 21/05/2021 | 0,00 | 0,00 | 110,00 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 |