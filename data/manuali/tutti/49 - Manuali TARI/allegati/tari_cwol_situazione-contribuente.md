# TARI - Manuale: Situazione Contribuente

## 1.1 Situazione Contribuente

L'intera posizione di un contribuente relativa alla Tassa Rifiuti ed alle rispettive denunce, è riepilogata e schematizzata da CWOL attraverso la funzione di visione della Situazione Contribuente.

La Situazione Contribuente Tari è gestita dal menù **Tributi -> TARI -> Situazione Contribuente**:

[Schermata del menu CWOL con percorso: Tributi > TARI > 40. Situazione Contribuente]

Si aprirà la finestra di CWOL di definizione dei parametri di ricerca del contribuente per cui visualizzare la Situazione.

[Schermata della finestra "TARI: Situazione Contribuente" con sezione "Soggetto" contenente i campi Nominativo, Cod.Fisc./P.IVA, Matricola e i pulsanti di ricerca]

La selezione del contribuente è effettuata dalla sezione **"Soggetto"**.

Deve essere scelto il soggetto cui ricercare la situazione, indicando **Nominativo** o **Codice Fiscale/P.IVA** o **Matricola**.

Il programma, digitando anche solo un parametro (es. Cognome), di default propone i soggetti censiti in anagrafica da scegliere per visionare la situazione.

Una volta scelto il soggetto, dall'elenco proposto, tutti i campi relativi sono automaticamente compilati da CWOL in base alle informazioni presenti in anagrafica.

Verranno mostrati i dati relativi al contribuente selezionato.

---

## Denunce

[Scheda "Denunce" con barra dei pulsanti: Visualizza non attive, Recupero Evasione, Cartografia, Google Maps, Unità Ecografica, DOCFA, Stampa Testo, Invia Comunicazione]

La scheda **"Denunce"** mostra per il contribuente e per tutti gli anni, tutta la storia delle denunce, sia quelle attive che cessate.

Per visualizzare solo le denunce attive, utilizzare il pulsante **"Nascondi non attive"**.

Attraverso il bottone di aggiunta **"+"**, è possibile caricare a sistema una nuova denuncia.

Su **Recupero Evasione**, attraverso il tasto **"+"** è possibile inserire una nuova denuncia omessa o infedele.

[Schermata con pulsante "Recupero Evasione" evidenziato e tabella "Denunce Attuali" con colonne: Prog, Tipo Cespite, Classe, Uso, Ubicazione, Quantità, Periodo Validità, ID Catasto, Comp. Fam., Comp. Estr., Riduzione, Data Occupazione, Data Dichiarazione, Data Iscrizione Ruoli, Data Cessazione]

### Cartografia

Selezionando una denuncia e andando su **Cartografia**:

[Pulsante "Cartografia" evidenziato nella barra dei pulsanti]

è possibile visualizzare la zona in base agli identificativi catastali (foglio, numero e sub).

[Schermata cartografica con mappa catastale e legenda dei layer: Catasto, Toponimi, Frazioni, Municipi, Acque, Concessioni, Particelle, Fogli]

### Google Maps

Andando su **Google Maps**:

[Pulsante "Google Maps" evidenziato]

è possibile visualizzare la mappa relativa alla via:

[Schermata di Google Maps con vista satellitare e mappa stradale del Comune]

### Unità Ecografica

Andando su **Unità Ecografica**:

[Pulsante "Unità Ecografica" evidenziato]

è possibile spostarsi direttamente sull'UE relativa:

[Schermata "Unità Ecografiche" con tabella contenente: Prog. Org., Prog. U.E., Progressivo U.E., Sezione Foglio, Numero, Categoria, Zona, Consistenza, Efficacia Iniz., Metri Quadri, Id Immobile, Prog. Cata, Metri cubi, Cod A1400, Rendita, Cod.ice U., Data Opa, Ora Oper.]

### DOCFA

Andando su **DOCFA** è possibile visualizzare le forniture DOCFA, quando presenti:

[Pulsante "DOCFA" evidenziato]

### Stampa Testo

Andando su **Stampa Testo** è possibile effettuare le stampe.

[Pulsante "Stampa Testo" evidenziato]

### Invia Comunicazione

Andando su **Invia Comunicazione** è possibile inviare una comunicazione generica (senza allegato) al contribuente selezionato, attraverso un lotto:

[Pulsante "Invia Comunicazione" evidenziato]

### Filtri

**NB:** sono inoltre presenti dei filtri da poter utilizzare per selezionare il progressivo della denuncia, il Tipo Tariffa, Classe e uso, ecc.

[Schermata con i campi filtro "Prog. Denuncia Cod.Utenza" e "Tipo Tariffa" evidenziati]

Per utilizzare i filtri occorre servirsi del segno meno (**-**) che identifica i valori dei campi presenti.

#### Esempio 1:

Per selezionare la **denuncia nr. 84** (senza il codice utenza) mettere **84** nel campo del filtro (campo a 2 valori) seguito dal segno meno:

```
84-
```

[Schermata con campo filtro "Prog. Denuncia Cod.Utenza" contenente "84-"]

#### Esempio 2:

Per selezionare il **Tipo Tariffa 8** (senza niente altro) mettere **8** nel campo del filtro (campo a 3 valori) e aggiungere per due volte il segno meno:

```
8--
```

[Schermata con campo filtro "Tipo Tariffa" contenente "8--"]

#### Esempio 3:

Per selezionare oltre al **Tipo Tariffa 8** anche l'**utenza** (domestica o non domestica e niente altro) mettere **8-1** nel campo del filtro (campo a 3 valori) e aggiungere per una volta il segno meno:

```
8-1-
```

[Schermata con campo filtro "Tipo Tariffa" contenente "8-1-"]

---

## Evoluzione

In questa scheda si può vedere lo stato dell'evoluzione annuale del tributo riferito all'annualità prescelta (Es: se si è fatto solo il bonario o se si è fatto il bonario e poi l'accertamento ecc…).

[Scheda "Evoluzione" con barra degli anni (2020-2025) e tabella "Avvisi" con colonne: Nominativo C.F./Iva ProgSogg, Tributo, Tipo Avviso, Stato, Anno Num. Doc., PagoPA, Dovuto, Riscosso, Residuo, Eccedenza, Compensato/Rimborsato, Data Avviso, Note/ifiche, ID Avviso. Pulsanti in alto: Stampa, Visualizza Doc., Evoluzione Avviso, Rateizza]

Selezionando (riga gialla) un documento, è possibile scegliere il tipo di avviso da stampare:

[Schermata con riga selezionata in giallo e pulsante "Stampa" evidenziato]

Cliccando su **"Stampa"** sarà possibile stampare il documento e il modello F24:

[Schermata "Stampa allo Sportello" con tabella "Coobbligati" (Id Coobb, Id Interno, Id Avviso, Intestatario) e pulsanti "Stampa Documento" e "Stampa F24"]

Cliccando **"Visualizza Doc."** è possibile visualizzare il documento:

[Schermata "Gestione Documenti" con tabella "Allegati" (Tipo, Matricola, Nominativo, Nome, Formato, Data Inserim., Disattivato) e pulsanti: Visualizza Documento, Carica Documento, Firma, Protocolla]

Cliccando **"Evoluzione Avviso"** è possibile scegliere il tipo avviso da emettere puntualmente:

[Schermata con finestra "Seleziona TIPO AVVISO" e menu a tendina contenente:
- Avviso Bonario Acconto
- Avviso Bonario Saldo
- Avviso Bonario Unico
- Sollecito
- Avviso di Accertamento Parziale o Mancato Pagamento
- Avviso di Accertamento Omessa Denuncia
- Avviso di Accertamento Infedele Denuncia
- Avviso di Accertamento Tardiva Denuncia]

Selezionando l'avviso o gli avvisi dello stesso tipo e andando sul bottone **"Rateizza"** è possibile emettere l'avviso di rateizzazione:

[Schermata con avvisi selezionati e pulsante "Rateizza" evidenziato]

---

## Avvisi bonari

Mostra gli avvisi bonari TARI emessi nei confronti del contribuente in tutta la sua storia.

[Scheda "Avvisi Bonari" con tabella "Avvisi" e pulsanti: Stampa, Visualizza Doc., Rateizza]

La finestra di visualizzazione mostra per ogni avviso bonario in particolar modo:

- Anno di riferimento
- Numero documento
- Il dovuto
- Il riscosso
- Il residuo
- La data Avviso
- La data emissione
- La data scadenza

Evidenziando la denuncia e cliccando su **"Stampa"** si può stampare il documento, con **"Visualizza Doc."** si può visualizzare il documento e con **"Rateizza"** si può rateizzare.

---

## Solleciti e Accertamenti

Mostra gli avvisi di sollecito e/o accertamento TARI emessi nei confronti del contribuente.

[Scheda "Solleciti e Accertamenti" con tabella "Avvisi" contenente avvisi di accertamento con stati: Creato, Annullato, Perduto]

La finestra di visualizzazione mostra per ogni avviso in particolar modo:

- Anno di riferimento
- Numero documento
- Il dovuto
- Il riscosso
- Il residuo
- La data Avviso
- La data emissione
- La data scadenza

---

## Rateizzazioni

Mostra tutti gli avvisi di rateizzazioni del contribuente.

---

## Rimborsi

Mostra gli eventuali rimborsi del contribuente.

---

## Riscossioni

Mostra le riscossioni TARI del contribuente scelto (riconciliate e non).

[Scheda "Riscossioni" con due tab: "Riscossioni Riconciliate" e "Riscossioni Non Riconciliate". Tabella con colonne: Id, Tipo imposta, Stato, Cognome Nome - Ragione Sociale, Codice Fiscale - Partita IVA, Emissione, Tipo Cespite, Anno Riferim., Numero Documento, Tipo Avviso, Data Pagamento, Data Contabile]

---

## Contribuente

Mostra i dati anagrafici del contribuente.

[Scheda "Contribuente" con sezione "Anagrafica Tributi" contenente: Tipo Persona, Codice Fiscale, Nominativo, Data e Luogo di nascita, Indirizzo Residenza, Comune di Residenza, Situazione]

---

## Dettaglio Lotti

Mostra tutta la corrispondenza che è stata inviata al contribuente (mail, pec, ecc…).

[Scheda "Dettaglio Lotti" con tabella "Dettaglio Lotto Invio" contenente: Descrizione Lotto, Nominativo, Mail PEC, Stato, Firma Digitale]

---

## Rilevazioni per Soggetto

Mostra se presenti, le utenze (gas, luce, idriche, locazioni, ecc..) in capo al soggetto.

[Scheda "Rilevazioni per Soggetto" con tab: Utenze Elettriche, Utenze Gas, Locazioni Ufficio, Locazioni Abitazione, Atti Contratti Locazione, Bonifici Bancari, Utenze Idriche, Successioni, Dichiarazioni Redditi, Ubicazione Fornitura]

---

## Documenti

Mostra i documenti in capo al contribuente.

[Scheda "Documenti" con tabella "Allegati" (Tipo, Nome, Formato, Data Inserimento) e pulsanti: Carica Documento, Visualizza Disattivati]

Con doppio click è possibile visualizzarli:

[Schermata con anteprima documento in ONLYOFFICE: "SERVIZIO RIFIUTI URBANI E ASSIMILATI - TARI (TASSA SUI RIFIUTI) - Codice utente: 23696" e pulsanti: Protocolla, Scarica, Salva in file-box, Modifica Documento]

---

## Estratto Conto

Mostra tutto ciò che c'è di emesso in capo al contribuente (con il dovuto e il riscosso):

[Scheda "Estratto Conto" con campi "Anno DA" e "A", pulsante "Elenca" e tabella con colonne: Riferimento Avviso, Anno Riferimento, Importo Dovuto, Importo Riscosso, Fittizio a Storno, Importo Residuo]

Scegliendo l'intervallo di annualità in interesse e facendo **"Elenca"** si può visualizzare l'estratto conto e stamparlo tramite l'iconcina della stampante in basso a sinistra.

[Schermata con intervallo anni selezionato (es. DA 2020 A 2025), pulsante "Elenca" e tabella estratto conto con righe TOTALI]

### Esempio di Estratto Conto stampato:

| Riferimento Avviso | Anno Riferimento | Importo Dovuto | Importo Riscosso | Fittizio a Storno | Importo Residuo |
|---|---|---|---|---|---|
| Avviso Bonario Unico n. 1 del 03/04/2024 - Stampato | 2024 | 428,00 | 0,00 | 0,00 | 428,00 |
| Avviso Bonario Unico n. 1 del 02/08/2024 - Stampato | 2024 | 114,00 | 84,00 | 0,00 | 30,00 |
| Avviso Bonario Ricalcolo n. 170 del 14/07/2025 - Creato | 2024 | 508,00 | 492,00 | 0,00 | 16,00 |
| Avviso di Accertamento Omessa Denuncia n. 1 del 19/02/2024 - Stampato | 2023 | 1.675,00 | 0,00 | 0,00 | 1.675,00 |
| Avviso di Accertamento Omessa Denuncia n. 8 del 18/07/2025 - Creato | 2023 | 7.848,71 | 0,00 | 0,00 | 7.848,71 |
| **TOTALE** | | **10.573,71** | **576,00** | **0,00** | **9.997,71** |