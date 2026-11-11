# Comunicazione n. 02/2018 - Presenza CIG o Motivo NO CIG

| Data | Oggetto comunicazione /integrazione | Versione |
|------|-------------------------------------|----------|
| 08.01.2018 | Prima comunicazione | C02 V 0 |

---

## 1. Presenza CIG o Motivo NO CIG

Come già comunicato, vista l'imminente introduzione del sistema **SIOPE+**, la PAL Informatica ha adeguato il software per superare i test propedeutici ai fini dell'ottenimento del collaudo per le comunicazioni con la piattaforma sopra citata.

Tra le varie novità si rammenta che per i **debiti di natura commerciale** è obbligatorio indicare sul flusso il codice **CIG** o in alternativa il **motivo della sua esclusione**.

L'informazione richiesta è descritta al paragrafo 9.2.5 del manuale *'REGOLE TECNICHE E STANDARD PER L'EMISSIONE DEI DOCUMENTI INFORMATICI RELATIVI ALLA GESTIONE DEI SERVIZI DI TESORERIA E DI CASSA DEGLI ENTI DEL COMPARTO PUBBLICO ATTRAVERSO IL SISTEMA SIOPE+'* consultabile al link:

http://www.agid.gov.it/sites/default/files/documenti_indirizzo/opi-regole_tecniche_v1_0_3.pdf

Allo scopo si riporta parzialmente il contenuto del paragrafo.

### 9.2.5 Classificazione dati SIOPE

Struttura in cui sono isolate tutte le informazioni d'interesse di SIOPE+, nonché quelle relative alla gestione dei bilanci ARCONET.

> **I dati contenuti in questa struttura sono ignorati dalla BT.**

**Tabella 6 - Struttura "Classificazione dati SIOPE"**

| dato | genere | o/f | Contenuto |
|------|--------|-----|-----------|
| classificazione_dati_siope | s | | Dati struttura. |
| tipo_debito_siope | an | o | Contiene il tipo di credito, può assumere i valori: "COMMERCIALE" / "NON_COMMERCIALE" |
| codice_cig_siope | an | f | Contiene il Codice CIG |
| motivo_esclusione_cig_siope | an | f | Obbligatorio in caso di assenza del Codice CIG, ne specifica il motivo dell'esclusione. Può assumere i seguenti valori: "ACQUISTO_LOCAZIONE": Acquisto o locazione di terreni, fabbricati esistenti o altri beni immobili o riguardanti diritti su tali beni / "ARBITRATO": Servizi d'arbitrato e di conciliazione / "SERVIZI BNKIT": Servizi finanziari forniti dalla Banca |

*… Omissis …*

---

Quanto sopra ha comportato il seguente arricchimento dell'applicativo:

## 1.1 Gestione Impegni

L'informazione del **"motivo_NO_CIG"** è stata inserita nel pannello **'dati aggiuntivi'** della gestione impegni in modo **facoltativo**; se indicata viene ereditata nella liquidazione.

I motivi della NON presenza, riportati nella Info, sono quelli previsti dalla normativa.

[Schermata: Pannello "Dettaglio Impegno" con tab "Dati aggiuntivi" attivo. Il campo "Motivo esclusione cig" (evidenziato con freccia rossa) mostra il valore "0=Non specificato". Il campo "Codice identificativo gara" mostra il valore "2011E59DD3". Sono visibili anche i campi: Assegnatario-Responsabile, Codice unico progetto, Codice Obiettivo C.d.G. 2018, Codice Bollo, e i riferimenti statistici.]

## 1.2 Dati Liquidazione

Sulla liquidazione nel pannello **'dettaglio'** il motivo esclusione CIG è **obbligatorio** se trattasi di **documento commerciale in assenza di CIG**.

[Schermata: Pannello "Dettaglio" della liquidazione (CITY-FINANCING Testata Documenti). Il campo "Motivo esclusione cig" (evidenziato con freccia rossa) mostra il valore "0=Non specificato". Il Tipo Documento è "Liquidazioni Diretta (Finanz & Co. Ana)" con codice 5. Sono visibili i campi: Impegno, Meccan.-Voce di Bilancio, Codice Siope, Codice unico progetto, Codice identificativo gara, Transazione U.E., Codice Cofog, Piano Finanziario, Importo Liquidazione, Ritenute.]

Il **tipo documento** usato definisce il tipo debito **'commerciale'** o **'non commerciale'**.

Di seguito si riporta un esempio della scelta effettuata nel pannello **'definizione'** della tabella **'personalizzazione tipo documenti contabili e causali operative.'**

[Schermata: Tabella "Tipi di documenti contabili e causali operative" (CITY-FINANCING). Il campo "Tipo documento" mostra il valore 5 (evidenziato con freccia rossa). La Descrizione è "Liquidazioni Diretta (Finanz & Co. Ana)". Il Documento di è "SPESA", Segno movimento "POSITIVO". Nella sezione "Moduli operativi" sono attivi i checkbox: Valido per Finanziaria, Valido per Co.Ge., Valido per Co.ANA. Il campo "Tipo debito/credito" (evidenziato con freccia rossa) mostra l'opzione selezionata "Non commerciale" (radio button).]

---

Si consiglia quindi di **rivedere le proprie tipologie di documenti utilizzati** considerando anche la tipologia del debito/credito a cui si riferiscono, dopo aver preso completa visione del paragrafo relativo alla struttura dati SIOPE e delle informazioni che devono essere inviate alla struttura SIOPE+ anche in funzione della tipologia **'elettronica'** od **analogica**.

Si ricorda che:

- Non corrisponde sempre a realtà definire commerciali i documenti arrivati attraverso SDI, mentre sono non commerciali le tipologie di documenti interni utilizzati per pagamento di stipendi, oneri etc.
- Il tutto ha lo scopo di rendere compatibili gli ordinativi 2018 con le informazioni necessarie alla piattaforma SIOPE+.