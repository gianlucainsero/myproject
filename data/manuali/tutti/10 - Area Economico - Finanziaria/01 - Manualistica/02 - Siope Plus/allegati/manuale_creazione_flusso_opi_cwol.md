# Manuale per Creazione Flusso OPI

**Software:** CWOL

---

## 1. Creazione Flusso OPI

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

[Schermata: menu a tendina con percorso 180. Servizi Economici → 10. Finanziaria → 40. Uscita → 160. Creazione flusso OPI per SIOPEPlus evidenziato in rosso]

Selezionare i mandati/reversali da includere nel flusso. Selezionando il mandato viene selezionata in automatico anche la reversale collegata (sia a compensazione che le ritenute). Come visibile dalla seconda schermata del riquadro a sinistra.

(Specularmente se si seleziona la reversale viene selezionato in automatico il mandato collegato)

[Schermata: griglia "Elenco - ordinativi da inviare a SIOPEPlus" con colonne: Selez., Anno, Nr. ord., Data ord., Tipo ord., Soggetto, Importo ord., Tipo reversale, Descrizione reversale. In basso riepilogo con "Mandati selezionati" e "Reversali selezionati"]

Inoltre in basso sulla schermata è possibile vedere un riepilogo dei mandati e reversali selezionati così da visualizzare i totali divisi in:

- **Inserimenti**
- **Altre operazioni** (variazioni, sostituzioni, annullamento)

[Schermata: riepilogo in basso con "Mandati selezionati" (Nr. mandati: 1, Inserimenti: 1, Altre operazioni: 0) e "Reversali selezionati" (Nr. reversali: 1, Inserimenti: 1, Variazioni: 0, Sostituzioni: 0, Annullamenti: 0)]

Una volta selezionati i mandati e le reversali da includere nel flusso selezionare il bottone **CREA**.

A questo punto se la creazione del flusso è andata a buon fine appare un **pop up giallo** di riepilogo.

[Schermata: pop up giallo "INFO" con riepilogo: Nr. mandati: 1, Nr. reversali: 1, Nr. reversali a compensazione: 0, Nr. ritenute: 0, Totale mandati: 178,67, Totale reversali: 178,67]

Verranno scaricati:

- Un file **Excel** con gli ordinativi inclusi nel flusso (es. `20231005_111009_pacchetto_2577_ordinativi_inclusi.xlsx`)
- Il **flusso in formato XML** (es. `Flusso_OPI_2577.xml`)

---

## 2. Flusso con errori di validazione

Se al momento della creazione del flusso compare il **pop up in rosso** evidenziato nella schermata di sinistra, allora significa che il flusso **non ha passato la validazione del XSD**.

[Schermata: pop up rosso "ATTENZIONE" con messaggio di errore relativo alla validazione XSD]

A questo punto verrà scaricato un file in formato **xlsx** con gli errori (es. `20231005_121057_validazione.xlsx`).

Aprendo l'Excel è possibile verificare gli errori e sistemarli.

[Schermata: file Excel con colonne: Coordinata, Riga XML, Descrizione, Errore. Esempio di errore: "S08.00 Codice fiscale obbligatorio per Documenti non commerciali con Codice CIG e Alline esenzione CIG"]

---

## 3. Ricerca flusso creato

Una volta creato il flusso è possibile ritrovarlo al punto di menu:

- **180.** Servizi Economici
- **10.** Finanziaria
- **50.** SiopePlus
- **10.** Cruscotto

[Schermata: menu a tendina con percorso 180. Servizi Economici → 10. Finanziaria → 50. SiopePlus → 10. Cruscotto evidenziato in rosso]

[Schermata: "Cruscotto SiopePlus" con tab "Flussi da firmare". Griglia "Flussi da firmare" con colonne: Nr. Flusso, Nome Flusso, Nr. ord., Tot. reversali, Tot. mandati, Posizione, UUID, Primo firmatario. Esempio riga: 2580, Flusso_OPI_2580.xml, 2, 0,00, 11,00, Da inviare, UUID generato]

A destra è presente un riquadro **"Flussi da firmare"** con indicatore numerico (es. 30).