# Comunicazione n.03/2024

**Oggetto:** Modalità operative per la contabilizzazione delle note di credito con contestuale rimborso e chiusura in Area RGS

**Riferimento:** Sostituisce/Segue il webinar del 14-07-2021

**Scopo:** In caso di ricezione di una nota di credito con contestuale rimborso della somma da riconciliare con provvisorio di entrata, a partire dal 5 Ottobre 2020, con le modifiche al Siope introdotte tale operazione di chiusura « può essere eseguita in modo automatico » utilizzando i dati che sono specificati nel flusso delle reversali. Valorizzando il tag `utilizzo_nota_di_credito` in creazione del flusso xml per Siope.

---

## 1.1 Fase 1: Documenti Entrata

Dal punto menu:

**180. Servizi Economici -> 10. Finanziaria -> 30. Entrata -> 50. Documenti Entrate**

Occorre procedere con il caricamento di un documento di entrata tipo « Riscossione diretta » per l'incasso del provvisorio.

### 1.1.1 Causale Entrata

La causale utilizzata per la registrazione del documento di entrata al fine di incassare il provvisorio deve avere le seguenti caratteristiche:

- **ENTRATA**
- **POSITIVO**
- **TIPO DEBITO/CREDITO (SIOPE+) COMMERCIALE**

[Immagine: Schermata "Tipi di documenti contabili e causali operative" con Codice tipo documento 45, Descrizione "Riscossione SIOPE+ (commerciale rimborso)", Documento di "Entrata", Segno movimento "Positivo", e nel tab IVA il campo "Tipo debito/credito (Siope+)" impostato su "Commerciale"]

### 1.1.2 Inserimento Documento Entrata

Dopo aver verificato l'esistenza di una causale idonea e corrispondente alle caratteristiche riportate al paragrafo 1.1.1, si può procedere al caricamento del documento di entrata.

Nella tab **Riscossione** occorre impostare come modalità di riscossione « **Regolarizzazione** » ed impostare il flag « **Reversale a copertura** ».

A questo punto si attiverà la tab **Provvisori** da dove sarà possibile scegliere il provvisorio per collegarlo alla riscossione.

[Immagine: Schermata "Documento Entrata" con tab Riscossione attivo. Nel pannello "Riscossione - Documento nr. 1 di 10,00 del 31/05/2024 del soggetto HERA COMM S.R.L.", si evidenziano i campi: Modalità di riscossione "3 % Regolarizzazione Provvisorio Banca Italia", flag "Reversale a copertura" spuntato, e Causale Bollo "4 % ESENTE BOLLO PER PROVVISORI".]

[Immagine: Schermata del pannello "Riscossione" con tab "Provvisori" attivo, contenente una riga con Riga 1, Numero provvisorio 3, Data provvisorio 03/01/2024, Importo provvisorio 10,00.]

> ⚠️ **ATTENZIONE!** PRIMA DI PROCEDERE CON L'EMISSIONE DELLA REVERSALE REGISTRARE LA NOTA CREDITO TRANSITATA PER LO SDI E COLLEGARE IL DOCUMENTO DI USCITA CON IL DOCUMENTO DI ENTRATA (vedi passaggi ai paragrafi successivi)

---

## 1.2 Fase 2: Contabilizzazione Nota Credito

Per chiudere il documento di uscita acquisito dallo SDI occorre registrarlo come **Nota credito** e **Movimento di Sola IVA**.

### 1.2.1 Causale Uscita – Movimento Solo IVA

Al fine di registrare il documento transitato per lo SDI occorre utilizzare una causale che abbia le seguenti caratteristiche:

- **USCITA**
- **NEGATIVO**
- **SOLO VALIDO PER IVA**
- **TIPO DEBITO/CREDITO (SIOPE+) COMMERCIALE**
- **REGISTRO ACQUISTI**
- **ESIGIBILITÀ IMMEDIATA**

[Immagine: Schermata "Tipi di documenti contabili e causali operative" con Codice tipo documento 32, Descrizione "Nota di credito (solo Iva)", Documento di "Uscita", Segno movimento "Negativo", Modulo "Valido per IVA" spuntato, e nel tab IVA: Registro IVA "5", Registro "Acquisti", Tipo debito/credito (Siope+) "Commerciale", "Da includere in flussi per SDI/PCC/Spesometro" spuntato, Codice tipo documento (codifica SDI) "TD04 - Nota di Credito".]

[Immagine: Dettaglio del tab IVA della causale con Codice tipo documento 32, Descrizione "Nota di credito (solo Iva)", Registro IVA "5", Registro "Acquisti", Documento ad esigibilità differita deselezionato, Causale entrata per registrazione automatica IVA Split/Reverse Charge "131 - Nota credito Autofattura split (solo iva)", Metodo gestione IVA Split/Reverse "Standard".]

### 1.2.2 Gestione Flussi SDI

Una volta verificato di avere in CWOL una causale che corrisponda alle caratteristiche descritte al paragrafo 1.2.1, procedere al menu **Gestione Flussi SDI** con la contabilizzazione della nota credito ricevuta utilizzando la causale descritta.

Nel procedere con la contabilizzazione nella tab « **Altri dati** » alla riga **Documento Collegato** occorre inserire il progressivo del Documento di Entrata registrato in precedenza.

[Immagine: Schermata "Documenti Uscita" con tab "Altri dati" attivo. Si evidenzia il campo "Documento collegato" con valore "2024 - 815 - Entrata" e descrizione "nota credito a rimborso".]

---

## 1.3 Fase 3: Emissione Reversale

Una volta contabilizzato il documento di uscita e collegato con il documento di entrata si può procedere con l'emissione della reversale dal seguente punto di menu:

**180. Servizi Economici -> 10. Finanziaria -> 30. Entrata -> 100. Emissione reversali**

---

## 1.4 Fase 4: Creazione Flusso OPI

Una volta emessa la reversale dal punto menu:

**180. Servizi Economici -> 10. Finanziaria -> 30. Entrata -> 140. Creazione flusso OPI per SIOPEPlus**

Si può selezionare la reversale per la creazione del flusso OPI.

[Immagine: Schermata "Creazione flusso dei mandati e reversali" con una reversale selezionata (Anno 2024, Nr 8, Data 03/06/2024, Tipo "Da Incasso", Soggetto "HERA COMM S.R.L.", Importo 10,00, Causale "nota credito a rimborso").]

[Immagine: Finestra di dialogo "INFO" con messaggio "Flusso_OPI_2910.xml creato correttamente." e tabella riepilogativa: Inserimenti Reversali, Nr 1, Lordo 10,00, Netto 10,00, Di cui a copertura 10,00.]

Il flusso verrà creato con le caratteristiche sotto riportate al **Caso 3**.

Sotto si riporta quanto presente nelle Regole OPI alla voce: **Valorizzazione del nodo `utilizzo_nota_di_credito` in creazione flusso xml per Siope**

- **CASO 1-2:** le reversali vengono emesse automaticamente e sono collegate con i relativi mandati
- **CASO 3:** Nota di credito con split payment che il fornitore rimborsa per l'imponibile (INCASSO PROVVISORIO) il nodo dovrà essere valorizzato con `incasso/` e per far questo, si deve seguire la procedura descritta nel punto sotto riportato

### Tabella riepilogativa dei casi OPI

| CASI | TIPO DOCUMENTO | LORDO | RITENUTE | MANDATO | RITENUTE | REVERSALE | NODO `<UTILIZZO_NOTA_CREDITO>` |
|------|---------------|--------|----------|---------|----------|-----------|-------------------------------|
| **Caso 1** | Fattura professionista | 120 | 20 | Si | Erariali | 20 | Non valorizzato |
| | Nota di credito | -40 | -8 | | Erariali | -8 | INCASSO/COMPENSAZIONE |
| | **Totale** | **80** | **12** | | | **12** | |
| **Caso 2** | Fattura con split payment | 120 | 20 | Si | Split payment * | 20 | Non valorizzato |
| | N.C con split payment | -40 | -8 | | Split payment * | -8 | SPLIT PAYMENT |
| | **Totale** | **80** | **12** | | | **12** | |
| **Caso 3** | N.C. con split payment | -40 | -8 | No (movimento solo iva) | Non presenti | 32 (Reversale a copertura provvisorio di rimborso) | INCASSO/COMPENSAZIONE |

### Esempio di XML generato (Caso 3)

```xml
<codifica_bilancio>10101</codifica_bilancio>
<gestione>COMPETENZA</gestione>
<importo_bilancio>10.00</importo_bilancio>
</bilancio>
<informazioni_versante>
  <progressivo_versante>1</progressivo_versante>
  <importo_versante>10.00</importo_versante>
  <tipo_riscossione>REGOLARIZZAZIONE_ACCREDITO BANCA D'ITALIA</tipo_riscossione>
  <tipo_entrata>FRUTTIFERO</tipo_entrata>
  <destinazione>LIBERA</destinazione>
  <classificazione>
    <codice_cge>1010106002</codice_cge>
    <importo>10.00</importo>
    <classificazione_dati_siope_entrata>
      <tipo_debito_siope_c>COMMERCIALE</tipo_debito_siope_c>
    </classificazione_dati_siope_entrata>
  </classificazione>
  <fattura_siope>
    <codice_ipa_ente_siope>F0SH70</codice_ipa_ente_siope>
    <tipo_documento_siope>ELETTRONICO</tipo_documento_siope>
    <identificativo_lotto_sdi_siope>10953531843</identificativo_lotto_sdi_siope>
    <dati_fattura_siope>
      <numero_fattura_siope>422310415586</numero_fattura_siope>
      <importo_siope>-10.00</importo_siope>
      <data_scadenza_pagam_siope>2023-11-25</data_scadenza_pagam_siope>
      <motivo_scadenza_siope>CORRETTA_SCAD_FATTURA</motivo_scadenza_siope>
      <natura_spesa_siope>CORRENTE</natura_spesa_siope>
      <utilizzo_nota_di_credito>INCASSO/COMPENSAZIONE</utilizzo_nota_di_credito>
      <mese_vettore_siope></mese_vettore_siope>
    </dati_fattura_siope>
  </fattura_siope>
```

> Il tag evidenziato `<utilizzo_nota_di_credito>INCASSO/COMPENSAZIONE</utilizzo_nota_di_credito>` è il nodo chiave per la corretta valorizzazione nel Caso 3.

---

## 1.5 Fase 5: Situazione in Area RGS

Con l'invio del flusso OPI anche in Area RGS la nota credito verrà chiusa e quindi registrata allo stato **"lavorata"** e con il pagamento.

Anche nello stock in CWOL non sarà più visibile se pagata entro la scadenza.

### Eventuali Vincoli

*(Nessun vincolo specifico indicato)*

### Eventuali Criticità

*(Nessuna criticità specifica indicata)*