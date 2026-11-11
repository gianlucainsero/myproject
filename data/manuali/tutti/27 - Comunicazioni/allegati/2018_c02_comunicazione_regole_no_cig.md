# Presenza CIG o Motivo NO CIG

Come già comunicato, vista l'imminente introduzione del sistema **SIOPE+**, il software è stato adeguato per superare i test propedeutici ai fini dell'ottenimento del collaudo per le comunicazioni con la piattaforma sopra citata.

Tra le varie novità si rammenta che per i **debiti di natura commerciale** è obbligatorio indicare sul flusso il codice **CIG** o in alternativa il **motivo della sua esclusione**.

L'informazione richiesta è descritta al paragrafo **9.2.5** del manuale:

> *REGOLE TECNICHE E STANDARD PER L'EMISSIONE DEI DOCUMENTI INFORMATICI RELATIVI ALLA GESTIONE DEI SERVIZI DI TESORERIA E DI CASSA DEGLI ENTI DEL COMPARTO PUBBLICO ATTRAVERSO IL SISTEMA SIOPE+*

Consultabile al link:
http://www.agid.gov.it/sites/default/files/documenti_indirizzo/opi-regole_tecniche_v1_0_3.pdf

## Paragrafo 9.2.5 – Classificazione dati SIOPE

Struttura in cui sono isolate tutte le informazioni d'interesse di SIOPE+, nonché quelle relative alla gestione dei bilanci ARCONET.

> **I dati contenuti in questa struttura sono ignorati dalla BT.**

### Tabella 6 – Struttura "Classificazione dati SIOPE"

| dato | genere | o/f | Contenuto |
|------|--------|-----|-----------|
| `classificazione_dati_siope` | s | | Dati struttura. |
| `tipo_debito_siope` | an | o | Contiene il tipo di credito, può assumere i valori: **"COMMERCIALE"**, **"NON_COMMERCIALE"** |
| `codice_cig_siope` | an | f | Contiene il Codice CIG. |
| `motivo_esclusione_cig_siope` | an | f | Obbligatorio in caso di assenza del Codice CIG, ne specifica il motivo dell'esclusione. Può assumere i seguenti valori: **"ACQUISTO_LOCAZIONE"**: Acquisto o locazione di terreni, fabbricati esistenti o altri beni immobili o riguardanti diritti su tali beni. **"ARBITRATO"**: Servizi d'arbitrato e di conciliazione. **"SERVIZI BNKIT"**: Servizi finanziari forniti dalla Banca. |

---

## Gestione Impegni

L'informazione del **"motivo_NO_CIG"** è stata inserita nel pannello **'dati aggiuntivi'** della gestione impegni in modo **facoltativo**; se indicata viene **ereditata nella liquidazione**.

I motivi della NON presenza, riportati nella Info, sono quelli previsti dalla normativa.

[Schermata: Dettaglio Impegno – pannello "Dati aggiuntivi" con campi "Codice identificativo gara", "Motivo esclusione cig" (es. "0=Non specificato"), "Codice Obiettivo C.d.G. 2018", "Codice Bollo". Frecce rosse indicano i campi "Codice identificativo gara" e "Motivo esclusione cig".]

---

## Dati Liquidazione

Sulla liquidazione nel pannello **'dettaglio'** il **motivo esclusione CIG è obbligatorio** se trattasi di **documento commerciale in assenza di CIG**.

[Schermata: CITY-FINANCING – Testata Documenti. Documento di tipo "Liquidazioni Diretta (Finanz & Co. Ana)", tipo documento 5. Nel pannello dettaglio si evidenzia con freccia rossa il campo "Motivo esclusione cig" impostato a "0=Non specificato".]

### Tipo documento e tipo debito

Il **tipo documento** usato definisce il tipo debito **'commerciale'** o **'non commerciale'**.

Di seguito si riporta un esempio della scelta effettuata nel pannello **'definizione'** della tabella **'personalizzazione tipo documenti contabili e causali operative'**:

[Schermata: CITY-FINANCING – Tipi di documenti contabili e causali operative. Tipo documento "5", descrizione "Liquidazioni Diretta (Finanz & Co. Ana)". Nel campo "Tipo debito/credito" sono presenti due radio button: "Non commerciale" (selezionato) e "Commerciale". Frecce rosse indicano il tipo documento e la selezione del tipo debito.]

---

## Raccomandazioni

Si consiglia di **rivedere le proprie tipologie di documenti utilizzati** considerando anche la tipologia del debito/credito a cui si riferiscono, dopo aver preso completa visione del paragrafo relativo alla struttura dati SIOPE e delle informazioni che devono essere inviate alla struttura SIOPE+ anche in funzione della tipologia **'elettronica'** od **analogica**.

Si ricorda che:

- **Non corrisponde sempre a realtà** definire commerciali i documenti arrivati attraverso SDI, mentre sono non commerciali le tipologie di documenti interni utilizzati per pagamento di stipendi, oneri, etc.
- Il tutto ha lo scopo di rendere **compatibili gli ordinativi 2018** con le informazioni necessarie alla piattaforma SIOPE+.