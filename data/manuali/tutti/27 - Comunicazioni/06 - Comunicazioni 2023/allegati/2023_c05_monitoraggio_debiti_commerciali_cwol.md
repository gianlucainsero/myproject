# Monitoraggio debiti commerciali. Stock del debito

**Comunicazione n.05/2023**

**Scopo:** Il documento illustra le modalità per il confronto dello stock del debito tra Area RGS e CWOL al fine di procedere al monitoraggio dei debiti commerciali.

---

## 1. Operatività tra Area RGS e CWOL

### 1.1 Scarico dettaglio stock del debito da Area RGS

Di seguito riportato il percorso da seguire in Area RGS per procedere allo scarico del dettaglio dello stock del debito:

1. Accedere alla sezione **Crediti Commerciali**
2. Selezionare la tematica **Monitoraggio dei Crediti Commerciali**
3. Nella sezione **Servizi disponibili**, individuare e avviare **Stock del Debito**
4. Nella schermata **Stock dell'anno**, cliccare sul pulsante **SCARICA DETTAGLIO**
5. Nella finestra "Scegli la tipologia del report da generare", selezionare **DETTAGLIO STOCK DEI DEBITI**

[Schermata: percorso Area RGS → Crediti Commerciali → Monitoraggio dei Crediti Commerciali → Stock del Debito → SCARICA DETTAGLIO → DETTAGLIO STOCK DEI DEBITI]

Se il file non viene scaricato nell'immediato, lo si troverà una volta completato il download nella sezione **Elaborati**.

[Schermata: sezione Elaborati → Crediti Commerciali → Stock del Debito]

---

### 1.2 Caricamento stock del debito in CWOL e confronto

Una volta seguito il percorso indicato al paragrafo 1.1, verrà scaricato un file Excel con il dettaglio dello stock del debito che dovrà essere importato in procedura per il confronto.

In CWOL seguire il percorso sotto riportato:

**130. Servizi Economici → 10. Finanziaria → 60. Monitoraggio Debiti e PCC → 10. Cruscotto Monitoraggio Debiti Commerciali**

[Schermata: menu CWOL con percorso 130. Servizi Economici → 10. Finanziaria → 60. Monitoraggio Debiti e PCC → 10. Cruscotto Monitoraggio Debiti Commerciali]

Nella tab **Stock del debito** selezionare la data di confronto (solitamente **31/12/n**).

[Schermata: Cruscotto Monitoraggio Debiti Commerciali con tab "Stock del debito", campo "Calcolo Situazione al" impostato su 31/12/2022, e pulsante "Aggiorna Dati"]

A questo punto si ha indicazione dello stock presente in CWOL.

Per confrontare i due stock tra Area RGS e CWOL procedere prima attraverso il pulsante **Seleziona File PCC da Confrontare** e caricare il file precedentemente scaricato dall'Area RGS.

Dopo averlo caricato, procedere con il pulsante **Confronta con i dati STOCK del file XLSX Scaricato da PCC**.

---

### 1.3 Documenti da analizzare dopo il confronto

Una volta fatto il confronto verrà ripresentata la seguente tabella:

| Situazione | Contatore |
|---|---|
| Fatture in Calcolo ENTE e non in PCC | 91 |
| Fatture in Calcolo PCC e non in ENTE | 0 |
| Importo Calcolato Diverso tra Fatture in ENTE ed in PCC | 0 |
| Fatture in PCC non collegate in Ente | 192 |

È possibile attraverso il pulsante di download (evidenziato in rosso nella schermata) scaricare la lista delle fatture indicate.

[Schermata: tabella riepilogativa del confronto con pulsanti di download per ciascuna riga]

Analizzare le seguenti situazioni:

- **Fatture in Calcolo Ente e non in PCC:** significa che le fatture non rientrano nello stock della PCC ma rientrano nello stock di CWOL, quindi analizzare bene la situazione in applicativo.

- **Fatture in Calcolo PCC e non in Ente:** significa che le fatture non rientrano nello stock di CWOL ma rientrano nello stock in Area RGS, quindi analizzare bene la situazione in PCC.

- **Importo Calcolato Diverso tra Fatture in Ente ed in PCC:** solitamente la differenza deriva dal flag IVA split in Area RGS o per un mancato ricevimento della reversale di incasso riguardante lo split in Area RGS.

- **Fatture in PCC non collegate in Ente:** significa che le fatture presenti in PCC non trovano corrispondenza con fatture di CWOL (solitamente perché non contabilizzate in applicativo).

---

### 1.3.1 Rilascio implementazioni al software (titolo 4)

La modifica è disponibile a partire dalla **release 7.11 su CWOL – patch del 25.01.2023**.

**Eventuali vincoli:** *(nessuno)*

**Eventuali criticità:** *(nessuna)*