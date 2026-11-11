# Acquisizione Check-In da Flussi ISTAT

Selezionando la voce di Menu **'Acquisizione Check-in da Flussi ISTAT'**, si apre la seguente pagina di Upload Flussi:

[Schermata: Pagina di Upload Flussi con campo "Scegli il file da importare", pulsante "Scegli file" e pulsante "Verifica"]

La Struttura ricettiva che possiede un proprio **Gestionale presenze**, può alimentare il Portale IDS del Comune attraverso un periodico Upload massivo delle presenze, utilizzando lo stesso Flusso destinato al Portale ISTAT della Regione (Ross1000).

Il Flusso accettato dal Sistema rispetta i due tracciati ISTAT:

- **Versione TXT** (Tracciato TXT_r4) — [Tracciato_TXT_r4.pdf]
- **Versione XML** (Tracciato XML_WS_2.4) — [TracciatoXML-WS-2.4.pdf]

Arrecano entrambe un indicatore dedicato all'Imposta di Soggiorno, che il Sistema utilizza per calcolare o meno l'Imposta.

In questa modalità operativa, l'Esercente, quando prepara il flusso ISTAT con il proprio Gestionale:

- lo carica sul portale della Regione;
- immediatamente dopo lo importa sul portale dell'Imposta di Soggiorno,

mantenendo così il perfetto allineamento tra il suo Gestionale ed i Sistemi esterni.

> **E' fortemente sconsigliabile manipolare i Flussi ISTAT o raggrupparli in periodicità diverse.**

Nella figura sopra rappresentata, il Sistema chiede di avere in input un Flusso ISTAT e riconosce da solo il Formato che viene fornito (TXT o XML).

E' possibile quindi avviare l'Elaborazione di Verifica attraverso l'omonimo pulsante **Verifica**.

Questa prima fase elaborativa è strategica e richiede all'Esercente la massima attenzione, prima di procedere con l'importazione massiva dei Soggiorni, poiché:

- Viene effettuato il **controllo formale** del flusso, che rispetti i valori previsti sul corrispondente tracciato di riferimento;
- Al termine della Verifica, viene indicato l'**importo totale** che verrebbe caricato a Sistema, applicando la tariffa prevista a tutti i Soggiorni sul flusso.
- Un elaborato Excel di dettaglio (**LogImportazioneSoggiorni**), viene emesso dal Sistema come risultato della fase di Verifica, ove sono riportati i singoli Ospiti/Soggiorni che verranno caricati, nonché le tariffe applicate ad ogni singolo Soggiorno.

## Dettaglio LogImportazioneSoggiorni

| Riga | CheckIn | CheckOut | Giorni | Tariffa | Imposta | Cognome | Nome | Codice Posizione | Segnalazione |
|------|---------|----------|--------|---------|---------|---------|------|------------------|--------------|
| 1 | 20/01/2023 | 25/01/2023 | 5 | 3,00 | 15,00 | | | 23006 | |
| 2 | 20/01/2023 | 25/01/2023 | 5 | 3,00 | 15,00 | | | 23015 | |
| 3 | 20/01/2023 | 24/01/2023 | 4 | 3,00 | 12,00 | | | 23016 | |
| 4 | 20/01/2023 | 25/01/2023 | 5 | 3,00 | 15,00 | | | 23020 | |
| 5 | 20/01/2023 | 25/01/2023 | 5 | 3,00 | 15,00 | | | 23021 | |
| 6 | 20/01/2023 | 25/01/2023 | 5 | 3,00 | 15,00 | | | 23022 | |
| 7 | 21/01/2023 | 23/01/2023 | 2 | 3,00 | 6,00 | | | 23085 | |
| 8 | 21/01/2023 | 23/01/2023 | 2 | 3,00 | 6,00 | | | 23086 | |
| 9 | 21/01/2023 | 23/01/2023 | 2 | 3,00 | 6,00 | | | 23087 | |
| 10 | 21/01/2023 | 23/01/2023 | 2 | 3,00 | 6,00 | | | 23088 | |
| 11 | 21/01/2023 | 22/01/2023 | 1 | 3,00 | 3,00 | | | 23094 | |
| 12 | 22/01/2023 | 25/01/2023 | 3 | 3,00 | 9,00 | | | 23129 | |

L'apposizione del Cognome/Nome su ogni riga di Ospite è subordinata alla conformazione del Flusso ISTAT proveniente dal gestionale di proprietà dell'Esercente (se presente viene riportato).

## Fase di Importazione

Se la fase di **VERIFICA** risulta formalmente corretta si accende il pulsante **'IMPORTA'**.

[Schermata: Pagina con pulsante "Importa" attivo e messaggio di conferma: "AVVISO! Il file non riscontra anomalie. L'imposta calcolata ammonta a 259,20 Euro. Proseguire confermando l'importazione."]

A questo punto, prima di procedere con l'Importazione massiva, l'Esercente ha tutti gli elementi per valutare la rispondenza del Flusso agli importi e ai dettagli attesi. Questa fase produce impatto sulle Rendicontazioni degli importi del bimestre, **quindi si raccomanda di controllare sempre il LogImportazioneSoggiorni Excel**, che risponda agli importi attesi, prima di procedere con il caricamento automatico e massivo dei soggiorni.

> Va sottolineato che queste importazioni massive debbono avvenire **prima del termine da Regolamento Comunale**, poiché fortemente correlate alla presentazione della Rendicontazione del periodo.

## Raccomandazioni per le Strutture che utilizzano un proprio Gestionale Presenze

1. Il **'Codice Identificativo Posizione'**, obbligatorio sul tracciato ai fini ISTAT verso la Regione, è strategico che sia memorizzato e reso visibile in corrispondenza ad ogni Soggiorno, **sul vostro Sistema di gestione presenze**.

   Questo, per rendervi possibile, in assenza del Nome e Cognome per motivi di privacy, ogni successivo riscontro puntuale dei Soggiorni trasmessi:
   - verso la Regione ai fini ISTAT,
   - verso il Comune ai fini dell'Imposta di Soggiorno.

2. Il Flusso ISTAT che ottenete nel formato **TXT** dal Vostro gestionale Presenze, **DEVE riportare sul campo 24** previsto dal tracciato, l'informazione di applicazione o meno dell'Imposta di Soggiorno:

   - **A.** Valore = 0 → IdS non applicata (esente)
   - **B.** Valore = 1 → IdS applicata

   > **L'assenza o l'errata valorizzazione di questo campo sul tracciato TXT impedisce il caricamento del flusso sul portale Imposta di Soggiorno del Comune, poiché comporterebbe errate attribuzioni od improprie omissioni dell'Imposta di Soggiorno calcolata, falsando conseguentemente la Rendicontazione periodica.**

3. Il Flusso ISTAT nel Formato **XML** deve essere nella **Versione XML_WS_2.4** che contiene il campo **'Tipo Esenzione'** necessario alla determinazione dell'Imposta. Se il Vs. Gestionale invia i dati ad ISTAT sfruttando il collegamento diretto WS, è bene sapere che prima di inviare i dati al Portale Ross1000, viene sempre prodotto il flusso XML nella versione sopra esposta. Sarebbe quindi sufficiente che tale flusso venisse scaricato in copia sul Vs. PC nell'apposita cartella **'Download'**, cosicchè lo possiate caricare anche sul portale IDS del Comune.

---

Premettendo che il portale Imposta di Soggiorno vi fornisce tutti gli elementi di controllo prima di caricare ogni flusso, **si suggerisce una attenta verifica preliminare dei tre aspetti sopra evidenziati, con la SW-House fornitrice del Prodotto di Gestione Presenze**.