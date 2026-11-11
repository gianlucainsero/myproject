# Manuale per Creazione Flusso OPI

**Software:** CWOL

---

## 1. Creazione Flusso OPI

### Percorso di menu

Andare al punto di menu:

- **180.** Servizi Economici
  - **10.** Finanziari
    - **40.** Uscita
      - **160.** Creazione flusso OPI per SIOPEPlus

In alternativa lo stesso percorso lo si ha da:

- **180.** Servizi Economici
  - **10.** Finanziari
    - **30.** Entrata
      - **140.** Creazione flusso OPI per SIOPEPlus

### Selezione dei mandati/reversali

Selezionare i mandati/reversali da includere nel flusso.

Selezionando il mandato viene selezionata in automatico anche la reversale collegata (sia a compensazione che le ritenute). Come visibile dalla seconda schermata del riquadro a sinistra.

(Specularmente, se si seleziona la reversale, viene selezionato in automatico il mandato collegato.)

Inoltre in basso sulla schermata è possibile vedere un riepilogo dei mandati e reversali selezionati così da visualizzare i totali divisi in:

- **Inserimenti**
- **Altre operazioni** (variazioni, sostituzioni, annullamento)

### Creazione del flusso

Una volta selezionati i mandati e le reversali da includere nel flusso, selezionare il bottone **CREA**.

A questo punto, se la creazione del flusso è andata a buon fine, appare un **pop-up giallo di riepilogo**.

Verranno scaricati:

- Un file **Excel** con gli ordinativi inclusi nel flusso (es. `20231005_111009_pacchetto_2577_ordinativi_inclusi.xlsx`)
- Il **flusso in formato XML** (es. `Flusso_OPI_2577.xml`)

---

## 2. Flusso con Errori di Validazione

Se al momento della creazione del flusso compare il **pop-up in rosso**, allora significa che il flusso **non ha passato la validazione del XSD**.

A questo punto verrà scaricato un file in formato **xlsx** con gli errori (es. `20231005_121057_validazione.xlsx`).

Aprendo l'Excel è possibile verificare gli errori e sistemarli.

---

## 3. Ricerca Flusso Creato

Una volta creato il flusso, è possibile ritrovarlo al punto di menu:

- **180.** Servizi Economici
  - **10.** Finanziaria
    - **50.** SiopePlus
      - **10.** Cruscotto

Nel Cruscotto SiopePlus è visibile la tabella **"Flussi da firmare"** con le seguenti colonne:

| Colonna | Descrizione |
|---------|-------------|
| Nr. Flusso | Numero identificativo del flusso |
| Nome Flusso | Nome del file XML (es. `Flusso_OPI_2580.xml`) |
| Nr. ord. | Numero ordinativi |
| Tot. reversali | Totale reversali |
| Tot. mandati | Totale mandati |
| Posizione | Stato del flusso (es. "Da inviare") |
| UUID | Identificativo univoco del flusso |
| Primo firmatario | Primo firmatario |

[Schermata del Cruscotto SiopePlus con tabella "Flussi da firmare" e widget "Flussi da firmare" con contatore]