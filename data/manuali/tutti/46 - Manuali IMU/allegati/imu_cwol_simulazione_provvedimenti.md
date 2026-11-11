# Simulazione Provvedimenti

Con questa simulazione si avrà l'elenco dei soggetti che non hanno pagato l'acconto o il saldo per poter poi eventualmente procedere con la creazione degli accertamenti.

## Percorso di navigazione

Da **Creazione automatica provvedimenti**

[Schermata: percorso menu → 70. Tributi → 30. IMU → 50. Evoluzione Avviso → 10. Creazione automatica Provvedimenti]

## Procedura

Si raccomanda di eseguire l'estrazione in **SIMULAZIONE**.

### Parametri di configurazione

Compilare i seguenti campi nella sezione **Filtri**:

| Parametro | Descrizione / Esempio |
|-----------|----------------------|
| **Modalità** | Selezionare `Simulazione` (radio button) |
| **Anno Riferimento** | Scrivere l'anno di riferimento (es. `2020`) |
| **Provvedimento** | Selezionare dal menù a tendina (es. `ICI/IMU`) |
| **Tipo Provv.** | Selezionare il tipo di provvedimento (es. `LIQ. - ACC. - Lettura di tutti i Quadri/Controllori attivi.`) |
| **Data Provv.** | Data del provvedimento (es. `23/04/2025`) |
| **Num. Provv.** | Numero provvedimento (es. `0`) |
| **Tipo calcolo sanzioni** | Selezionare il tipo di calcolo sanzioni in base alle esigenze (es. `SENZA assorb. 2007` oppure `3 - CON assorb. sanz.`) |
| **Includi Contribuenti Cessati** | Accendere il flag ☑ |

### Passaggi operativi

1. **Elenca** – Procedere cliccando sul bottone **`Elenca`** (pulsante in alto a destra).

2. **Calcola** – Verrà visualizzato un elenco nei **"Soggetti da elaborare"** (tabella con colonne: Cod. Fiscale - part. IVA, Cognome nome - Ragione sociale, TP, Fondo). Successivamente cliccare **`Calcola`** per avviare l'estrazione in **SIMULAZIONE**; la procedura richiederà qualche minuto.

3. **Visualizza Files Riepilogo** – Terminata l'elaborazione, cliccare su **`Visualizza Files Riepilogo`** per visualizzare/scaricare il file Excel creato.

## Output

Scaricando il file Excel è possibile controllare i dati estratti utilizzando i filtri secondo necessità.

[Schermata: Visualizzatore Documenti con elenco file "ProvvedimentiMassivissimo_2021_24042025_100450_SIMU.xlsx" e anteprima tabella con colonne: SAHZ_A_D, SAHZ_A_V, TOT_INTER, RID_SAN, IMP_SP_INT, ARROTONDAM, TOT_PROVVEDIMENTO, TOT_PROV_IN]

Il file contiene i dati riepilogativi dei soggetti non in regola con i pagamenti, con le relative sanzioni calcolate, pronti per un'eventuale creazione degli accertamenti.