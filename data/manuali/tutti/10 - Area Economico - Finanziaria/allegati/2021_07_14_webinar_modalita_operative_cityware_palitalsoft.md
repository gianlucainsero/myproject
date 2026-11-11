# 2° Webinar informativo – 14 luglio

## Argomenti

- Modalità operative per la contabilizzazione delle note di credito con contestuale rimborso
- Modalità operative per contabilizzazione delle fatture TD01 negative
- Gestione data scadenza nelle fatture passive (Comunicazione 2020_C11)
- Ripasso impostazione tabelle per la fatturazione attiva

---

## 1. Contabilizzazione delle note di credito con contestuale rimborso

### Procedura precedente

In caso di ricezione di una nota di credito con contestuale **rimborso** della somma da riconciliare con provvisorio di entrata, fino ad ora, l'iter per la chiusura della nota di credito prevedeva:

- L'utilizzo della funzione **'abbuoni'** con successiva comunicazione del flusso degli abbuoni al portale della PCC
- In alternativa, l'accesso al portale della certificazione dei crediti per effettuare la chiusura manuale del documento

[Schermata: finestra "Abbuoni/Sospensioni" con campi Importo Lordo, Assegnato, Saldo da Assegnare, Importo Lordo, Liquidazione\Pagato, Saldo da Liquidare, Importo abbuono, Note, e pulsanti Conferma/Annulla]

### Nuova procedura (dal 5 Ottobre 2020)

A partire dal 5 Ottobre 2020, con le modifiche al Siope+ introdotte, tale operazione di chiusura **«può essere eseguita in modo automatico»** utilizzando i dati che sono specificati nel flusso delle reversali.

**Valorizzando il tag `utilizzo_nota_di_credito` in creazione del flusso xml per Siope**

### Valorizzazione del nodo `utilizzo_nota_di_credito` in creazione flusso xml per Siope

Come anticipato nella comunicazione n.2020/12, la modifica riportata nella scheda n.23, prevede una diversa valorizzazione del nodo `<utilizzo_nota_credito>` a seconda dei casi:

a) quando si riferisce ad un effettivo incasso o ad una compensazione, il tag `<utilizzo_nota_di_credito>` assumerà il valore **"INCASSO/COMPENSAZIONE"** (ad esempio per riaccredito di canone per utenza cessata, o per compensazione parziale su fattura avente oggetto differente)

b) quando si riferisce a ritenute per scissione contabile IVA - split payment (cd. reversale automatica), il tag `<utilizzo_nota_di_credito>` assumerà il valore **"SPLIT PAYMENT"**.

### Riferimento normativo: Scheda 23 – Gestione delle note di credito su PCC

**REQUISITO**

Al fine del perfezionamento della registrazione delle informazioni inerenti le note di credito sulla Piattaforma dei crediti commerciali (PCC), è necessario distinguere se l'importo della nota di credito indicato nella reversale sia relativo:

a) ad un effettivo incasso o ad una compensazione
b) a ritenute per scissione contabile IVA - split payment (cd reversale automatica)

#### 3.5.2 Gestione delle Note di Credito ai fini PCC

Ai fini del perfezionamento della registrazione automatica delle informazioni inerenti le note di credito sulla Piattaforma dei crediti commerciali (PCC), è necessario distinguere l'importo della nota di credito indicato nella reversale come segue:

- a) quando si riferisce ad un effettivo incasso o ad una compensazione, il tag `<utilizzo_nota_di_credito>` assumerà il valore **"INCASSO/COMPENSAZIONE"** (ad esempio per riaccredito di canone per utenza cessata, o per compensazione parziale su fattura avente oggetto differente)
- b) quando si riferisce a ritenute per scissione contabile IVA - split payment (cd reversale automatica), il tag `<utilizzo_nota_di_credito>` assumerà il valore **"SPLIT PAYMENT"**

### Tabella riepilogativa dei casi

| CASI | TIPO DOCUMENTO | LORDO | RITENUTE | MANDATO | RITENUTE | REVERSAL | NODO `<UTILIZZO_NOTA_CREDITO>` |
|------|---------------|-------|----------|---------|----------|----------|-------------------------------|
| **Caso 1** | Fattura professionista | 120 | 20 | | Erariali | 20 | Non valorizzato |
| | | | | Si | | | |
| | Nota di credito | -40 | -8 | | Erariali | -8 | INCASSO/COMPENSAZIONE |
| | **Totale** | **80** | **12** | | | **12** | |
| **Caso 2** | Fattura con split payment | 120 | 20 | | Split payment * | 20 | Non valorizzato |
| | | | | Si | | | |
| | N.C. con split payment | -40 | -8 | | Split payment * | -8 | SPLIT PAYMENT |
| | **Totale** | **80** | **12** | | | **12** | |
| **Caso 3** | N.C. con split payment | -40 | -8 | No (movimento solo iva) | Non presenti | 32 (Reversale a copertura provvisorio di rimborso) | INCASSO/COMPENSAZIONE |

### Note operative per i casi

**CASO 1-2:** Le reversali vengono emesse automaticamente e sono collegate con i relativi mandati.

**CASO 3:** Nota di credito con split payment che il fornitore rimborsa per l'imponibile (INCASSO PROVVISORIO). Il nodo dovrà essere valorizzato con `incasso/compensazione` e per far questo, si deve seguire la procedura descritta di seguito.

---

## 2. Modalità operative in Cityware per la contabilizzazione delle note di credito ricevute ed incassate e seguente invio alla PCC come standard OPI (scheda 23)

### FASE 1: Regolarizzazione provvisorio di entrata

#### Causale entrata

[Schermata: finestra "Tipi di documenti contabili e causali operative" con Tipo documento 250, Descrizione "Riscossione SIOPE+ (commerciale)", Documento di ENTRATA, Segno movimento POSITIVO. Moduli operativi: Valido per Finanziaria ✓, Valido per Co.Ge. ✓, Valido per Co.ANA ✓, Valido per IVA ✓. Tipo debito/credito (Siope +): Iva selezionato. Eente da Bollo ✓]

#### Inserimento documento entrata

[Schermata: finestra "Testata Documenti" con Dt.Registrazione 16-11-2020, Tipo Documento 250 "Riscossione SIOPE+ (commerciale)", Rilevanza: Fin ✓, Iva ✓, Co.ana ✓, CO.GE ✓, Rit. ✓, Econ. ✓. Anno & Progress 2020 6073. IMPORTO LORDO 726,67. Descrizione: "Provv. N° 4786 del 12-11-2020 - PAGAMENTO TOTALE NOTA DI CREDITO N. DEL 20/05/2020". Prg Modalità di Riscossione: 4 - "regolarizzazione PRE"]

#### Nel dettaglio della riscossione spuntare «Reversale a copertura»

[Schermata: finestra "Prg. Riscossione - 1" con Accertam. 2019 00043, Meccan. - Voci di Bilancio 6030101 - 9999 - 20 - 200, Codice Bollo 25, Eente da Bollo ✓. Campo "Reversale a copertura" spuntato (evidenziato in rosso). Importo Riscossione 726,67]

#### Inserire il n° di provvisorio da regolarizzare, cliccando nuova riga

[Schermata: finestra "Prg. Riscossione - 2" con tabella contenente colonne: Rg, N. Provvisorio, N. Bolletta, Data Provvisorio, Importo Provvisorio. Pulsanti "Nuova Riga" e "Cancella Riga" evidenziati. Campo "Numero provvisorio" con pulsante Cerca]

### FASE 2: Contabilizzazione della nota di credito nelle uscite sul registro acquisti

#### Causale di spesa valida solo per IVA

[Schermata: finestra "Tipi di documenti contabili e causali operative" con Tipo documento 30, Descrizione "Nota accredito solo IVA", Documento di SPESA, Segno movimento NEGATIVO. Moduli operativi: Valido per IVA ✓ (evidenziato in rosso). Tipo debito/credito (Siope +): Iva selezionato. Codice tipo documento (codifica SDI): TD04 - Nota di Credito]

[Schermata: tab IVA con Registro IVA 3 - Registro Acquisti, Movimento valido solo per importo IVA (non spuntato), Modalità protocollazione ai fini IVA: "1 - Assegnato in fase di stampa dal numeratore", Tipo importo immesso per calcolo IVA: "1 - Digitato imponibile => calcola l'IVA dall'aliquota", Tipo documento valido per allegati ✓, Codice numeratore x calcolo numero protocollo iva: IVA_A3 - registro IVA acquisti. Documento a esigibilità differita: non spuntato]

#### Esempio contabilizzazione della nota di credito

[Schermata: finestra "Testata Documenti" con Dt.Registrazione 21-05-2020, Tipo Documento 30 "Nota accredito solo IVA", Rilevanza: Iva ✓. Anno & Progress 2020 1504. IMPORTO LORDO 726,67, RITENUTE 0. Split/Reverse: Split selezionato. Tipo Documento Siope Plus: Analogica]

### FASE 3: Associazione nota di credito (punto 1) con documento di entrata del provvisorio (punto 2)

[Schermata: finestra "Testata Documenti" con Tipo Documento 30 "Nota accredito solo IVA", Anno & Progress 2020 1504. IMPORTO LORDO 726,67. Sezione "Provvisorio Entrate" con "Documento Collegato" 2020 6073 (evidenziato in rosso). Descrizione: "Provv. N° 4786 del 12-11-2020 - PAGAMENTO TOTALE NOTA DI CREDITO N. DEL 20/05/2020". IMPORTO LORDO 726,67. Tab "Altri Dati" selezionato]

### Cambio tipologia di causale

Nel caso la nota di credito sia già stata contabilizzata con solita causale (fin.+iva), sarà possibile effettuare il cambio codice causale.

[Schermata: finestra "Cambio Causale Documento" con pulsante "Cambia" evidenziato. Vecchia Causale: 4 - "Fatture differita art. 21 c 4 lett b 633/72 (Fin+Iva) TD25" con Registro IVA 5 - Acquisti. Nuova Causale: campo vuoto con Registro IVA vuoto. Rilevanza: Fin ✓, Iva ✓, Co.ana ✓, CO.GE ✓, Rit. ✓, Econ. ✓]

### FASE 4: Tracciato flusso xml della reversale

```xml
<numero_fattura_siope>████████</numero_fattura_siope>
<importo_siope>-726.67</importo_siope>
<data_scadenza_pagam_siope>2020-06-30</data_scadenza_pagam_siope>
<natura_spesa_siope>CORRENTE</natura_spesa_siope>
<utilizzo_nota_di_credito>INCASSO/COMPENSAZIONE</utilizzo_nota_di_credito>
</dati_fattura_siope>
```

Come indicato dalla scheda 23, il nodo `<utilizzo_nota_di_credito>` viene valorizzato come **INCASSO/COMPENSAZIONE**.

---

## 3. Considerazioni versamento IVA

### RISOLUZIONE N. 79/E – 21/12/2020

La Pubblica Amministrazione committente o cessionaria:

- **Nel caso di acquisto effettuato in ambito commerciale**, in considerazione delle modalità seguite per la registrazione dell'originaria fattura, dovrà provvedere alla registrazione della nota di variazione nel registro "IVA vendite" di cui agli artt. 23 e 24 del d.P.R. n. 633 del 1972, fermo restando la contestuale registrazione nel registro "IVA acquisti" di cui all'articolo 25 del medesimo decreto, al fine di stornare la parte di imposta precedentemente computata nel debito e rettificare l'imposta detraibile;

- **Nel caso in cui l'acquisto sia stato destinato alla sfera istituzionale non commerciale**, in relazione alla parte d'imposta versata in eccesso, rispetto all'IVA indicata nell'originaria fattura, potrà computare tale maggior versamento a scomputo dei successivi versamenti IVA da effettuare nell'ambito del meccanismo della scissione dei pagamenti.

### Operando nel modo descritto in precedenza:

- **Per IVA commerciale** non ci sono rilevanze, in quanto la nota di credito (solo iva) viene registrata, quindi sarà presente nei registri e nella liquidazione.

- **Per IVA istituzionale** nel mese successivo l'ente dovrà (potrà) recuperare la quota dell'imposta versata in seguito al pagamento della fattura.
  - La nota di credito ricevuta ha soltanto valenza in termini di iva e non potrà essere collegata alla fattura in quanto già pagata in precedenza.
  - Il rimborso del fornitore, incassato con il provvisorio permette di recuperare il solo importo dell'imponibile.

### Versamento IVA istituzionale

Al 16 del mese successivo effettuare il versamento totale della parte iva split istituzionale incassata.

Dal totale da versare suddividere:

- Mandato per agenzia entrate
- Mandato intestato all'ente per la sola quota iva da recuperare
- Successiva reversale di reincasso nel TIT. 3.05 per importo recuperato

In questo modo abbiamo anche la quadratura in partite di giro, in quanto ciò che ho incassato in entrata nel TIT.9 viene pagato nel TIT.7.

### Movimento di sola rilevanza per ritenute

Nel caso si voglia avere traccia e memoria dell'importo da recuperare nel versamento iva del mese successivo, è possibile inserire manualmente un movimento di sola rilevanza per ritenute.

[Schermata: finestra "Tipi di documenti contabili e causali operative" con Tipo documento 129, Descrizione "Inserimento solo ritenute (negativo)", Documento di SPESA, Segno movimento NEGATIVO. Moduli operativi: Valido solo x RITENUTE ✓ (evidenziato in rosso)]

---

## 4. Contabilizzazione fatture negative e IVA split positiva

### Principio generale

Contabilizzazione documenti **TD01**, con segno negativo e imposta iva split positiva.

In questi casi la contabilizzazione va fatta con la causale utilizzata per registrare le note di credito, che ha tipo documento **TD04**.

**Interrogando in PCC vedrete che questo documento sarà presente come tipo TD04.**

Nel contabilizzare questa tipologia la procedura permette nella gestione delle ritenute di inserire – per l'importo delle ritenute (iva).

### Esempio documento TD01 con segno negativo

[Schermata: fattura TIM S.p.A. – Fattura periodo 4° 2021: Aprile – Maggio. Numero Fattura: 7X02068088, Data Emissione: 10/06/2021. Importo: €-18,11. Scissione pagamenti Importo TIM S.p.A: €-112,26. Scadenza: 09 Agosto 2021. Riepilogo IVA: Imponibile IVA in addebito 427,96€ (Rif. IVA 22%), IVA in addebito 94,15€, Importo Fuori Campo IVA -540,22€ (F.C. IVA). Calcolo dell'importo fattura: -18,11€]

### Dati di riepilogo per aliquota IVA e natura

| Aliquota IVA (%) | Natura operazioni | Totale imponibile/importo | Totale imposta | Esigibilità IVA | Riferimento normativo |
|------------------|-------------------|--------------------------|---------------|-----------------|----------------------|
| 0.00 | N.2.2 (non soggette - altri casi) | -540.22 | 0.00 | | F.C. IVA |
| 22.00 | | 427.96 | 94.15 | S (scissione dei pagamenti) | 22% |

### Procedura di contabilizzazione

[Schermata: finestra di contabilizzazione con IMPORTO LORDO 18,11, RITENUTE -94,15 +/- (evidenziato in rosso), SALDO 0. Fornitore: TELECOM ITALIA SPA O TIM S.P.A. Split/Reverse: Split selezionato. Tipo Documento Siope Plus: Fattura Elettronica]

[Schermata: tab IVA con Tipo Documento 129 "N. Accr.Ric.Iva Differita (F+I+C)", Registro 2 - Registro Acquisti, Tipo esigibilità: "1 - Registrazione e stampa direttamente sul registro degli acquisti", Settore IVA: 80 - "Piattaforma - fatture istituzionali". Riga 1: Imponibile 540,22, Assog. N, %IVA FC, Importo IVA 0, Descrizione "FUORI CAMPO IVA". Riga 2: Imponibile -427,96, Assog. 3, %IVA 22, Importo IVA -94,15, Descrizione "IVA SPLIT ISTITUZIONALE". Tot imponibile 112,26, Tot IVA -94,15]

[Schermata: tab "Ritenute Iniz." con Riepilogo Ritenute Iniziali Sul Documento: TOTALE IRPEF: 0, TOTALE IVA SPLIT/REV: 18,11 / -94,15, TOTALE ALTRO: 0, TOTALI: 18,11 / -94,15, DIFFERENZA: 0. Dettaglio ritenute: Riga 1, Cd.Rit. 99, Descrizione "Quota Iva da versare ad Era...", Imponibile -427,96, Rit.a carico Ben -94,15, Iva -94,15. Nota "RITENUTA INSERITA"]

[Schermata: tab "Assegnazione" con Area-Settore-Servizio 24 03 20 00 - Economato, Utente Assegnatario, Impegno 2021 00913 "Spese telefonia mobile uffici vari", Meccan. - Voci di Bilancio 0103103 - 0103 - 13 - 380, Piano Finanziario 1 3 2 5 2 "Telefonia mobile". IMPORTO ASS. 18,11, Ritenute -94,15]

[Schermata: tab "Liquidazione" con Impegno 2021 00913, Meccan. - Voci di Bilancio 0103103 - 0103 - 13 - 380, Codice identificativo gara Z9426E4073 "Adesione alla Convenzione di Telefonia Mobile 7", Transazione U.E: "8 - per le spese non correlate ai finanziamenti dell'Unione europea", Codice Cofog 1 3 "Servizi generali", Piano Finanziario 1 3 2 5 2 "Telefonia mobile". Importo Liquidazione 18,11, Ritenute -94,15]

[Schermata: tab "Liquidazione" con dettaglio liquidazioni: Riga 1, Imp. 2021 00913, Importo Liquidato 18,11, Beneficiario 295597, Data Conferma 02-07-2021, Anno-N° Mandato-Riga 2021 9287 3, Data Mandato 02-07-2021. Riga 2: 2021 "Spese telefonia mobile uffici vari", Importo Liquidato -94,15, Beneficiario TELECOM ITALIA SPA O TIM S.P., "Inviato alla Tesoreria", Data Mandato 02-07-2021. Tot.Liquidato/Ritenute: 18,11 / -94,15]

[Schermata: finestre "Reversali" e "Riscossioni". Reversale 10943 del 02-07-2021, Importo 144,70, Descrizione "Quota Iva da versare ad Erario serv.istituzionali mese di 02-07-2021 su man.n 9287", Conto 01, Num. Imp. Acc. 2021/00055, Titolo 9.01.00, Voce di Bilancio 9100.01.015. Riscossioni: Nr. 1 - 2021 29249, TELECOM ITALIA SPA O TIM S.P.A., Importo 50,55, "Quota Iva da versare ad Erario serv.istituzionali mese di 02-07-2021 su man.n 9287", 2021/00055, "2021 - IVA (99) - RIT. SPLIT PAYMEN". Nr. 2 - 2021 29250, TELECOM ITALIA SPA O TIM S.P.A., Importo 94,15, stessa descrizione]

---

## 5. Comunicazione data scadenza documenti alla Piattaforma Siope+

### Riferimenti normativi

L'art 50 "Disposizioni in materia di tempi di pagamento dei debiti commerciali della P.A." del recente DL 124/2019 prevede che:

> «3. Entro il 1° gennaio 2021 le amministrazioni pubbliche di cui all'articolo 1, comma 2, della legge 31 dicembre 2009, n. 196, che si avvalgono dell'Ordinativo Informatico di Pagamento (OPI) di cui all'articolo 14, comma 8-bis, della medesima legge n. 196 del 2009, sono tenute ad inserire nello stesso Ordinativo la data di scadenza della fattura. Conseguentemente, a decorrere dalla suddetta data, per le medesime amministrazioni viene meno l'obbligo di comunicazione mensile di cui all'articolo 7-bis, comma 4, del decreto-legge 8 aprile 2013, n. 35, convertito, con modificazioni, dalla legge 6 giugno 2013, n. 64.».

La data di entrata in vigore della norma in questione è stata anticipata al **1° luglio 2020**, come previsto dall'articolo 1, comma 855 della Legge di bilancio 2020.

Si ricorda che l'applicativo Cityware a partire dal **01/01/2018** comunica tramite flusso OPI la data scadenza dei documenti del ciclo passivo divenuta poi obbligatoria a partire dal **01/07/2020**.

### Gestione in sede di contabilizzazione

In sede di contabilizzazione viene mostrata la data presente nel documento con possibilità di cancellazione e ricalcolo.

La scelta della data di scadenza da utilizzare è molto importante e va effettuata nel rispetto degli obblighi assunti con il fornitore (es. utenze con scadenze fisse) e nel rispetto delle regole dettate dalla PCC.

[Schermata: "Dati relativi al pagamento" con Condizioni di pagamento: TP02 (pagamento completo), Dettaglio pagamento: Modalità MP05 (bonifico), Data scadenza pagamento: 2019-04-26 (26 Aprile 2019), Importo: 48,30, Codice IBAN: IT45T0306984561100000004236. Tabella sottostante con Modalità pagamento MP05 - bonifico, Importo 48,30, Data scadenza 26/04/2019]

### Priorità di valorizzazione della data di scadenza

La data di scadenza è obbligatoria e viene valorizzata con le seguenti priorità:

- Se presente nel documento elettronico importato viene presentata quella indicata dal fornitore
- Se viene cancellata la data indicata dal fornitore o se non è presente viene calcolata dal programma secondo le regole impostate nella modalità di pagamento
- Se inserita manualmente viene accettata quella indicata dall'utente
- Per le fatture non elettroniche viene sempre calcolata in funzione della modalità di calcolo indicata nella modalità di pagamento in quanto non è recuperabile quella indicata dal fornitore

### Modalità di pagamento/riscossione

[Schermata: finestra "Pagamento e Riscossione" con Tipologia: Pagamento, Descrizione: "Bon. con Scadenza Fissa". Tab "Scadenziario" con campo "Partenza per calc. scadenza" impostato su "Scadenza fissa presente nel documento in ingresso da SDI" (evidenziato in rosso). Parametri: Scadenziario "0 = Non previsto", Numero di rate, Giorni di scadenza tra rate, Gg da aggiungere x rata 1, Percentuale x rata 1, Gg Fisso 1, Mese Fisso 1, ecc.]

### Esempio documento con data acquisizione, data protocollo e data scadenza

[Schermata: finestra di contabilizzazione con Data di registrazione 30/06/2020, Tipo Documento 107 "Doc. Acq. Norm. o Split Esigib. Diff. NO lte", Anno/Progressivo documento 2020 79. Dati Identificativi: Documento Nr. 1, Data 25/06/2020, Descrizione "Test - fattura originaria". Importo lordo 30.500,00, Ritenute 5.500,00. Fornitore: ENEL ENERGIA SPA, P.Iva 06655971007. Protocollo Nr. 5 del 25/06/2020, Data Acquisizione: 25/06/2020, **Data Scadenza: 25/07/2020** (evidenziato in rosso)]

[Schermata: finestra "Testata Documenti" con Dt.Registrazione 30-06-2020, Tipo Documento 107 "Doc. Acq. Norm. o Split Esigib. Diff. NO Iter (f.I.C.)", Rilevanza: Fin ✓, Iva ✓, Co.ana ✓, CO.GE ✓. Anno & Progress 2020 79. IMPORTO LORDO 30.500,00, RITENUTE 5.500,00. Fornitore: ENEL ENERGIA SPA. Protocollo Nr. 5 del 25-06-2020, Dt. Acquisizione 25-06-2020, **Dt. Scadenza 25-07-2020** (evidenziato in rosso). Split/Reverse: Split selezionato]

### Tag `motivo_scadenza_siope` nel flusso XML

A partire dal 01/01/2018 all'interno del flusso xml inviato alla Piattaforma SIOPE+ viene valorizzato il tag con il valore **"CORRETTA_SCAD_FATTURA"** che consente di aggiornare la scadenza in PCC con quella inserita dall'utente nell'applicativo Cityware o Cityware Online (campo "data scadenza").

**Regole Tecniche v. 1.5, pag. 40:**

| Rif. | Tag | an | 0..1 | Descrizione |
|------|-----|----|----|-------------|
| 4.7.7.3.2.7.4 | `motivo_scadenza_siope` | an | 0..1 | Indica la ragione che determina la scadenza del pagamento. Può assumere i seguenti valori: **"SCAD_FATTURA"**: se la scadenza coincide con quella indicata o ricavabile dalla fattura; **"CORRETTA_SCAD_FATTURA"**: se la data è stata variata perché nella fattura è stata indicata una non corretta; **"SOSP_DECORRENZA_TERMINI"**: se la data è stata variata a seguito di sospensione dei termini di scadenza indicati nella fattura |

### Modalità di calcolo della data di scadenza

Le modalità di calcolo della data di scadenza sono ereditate dalle gestioni che si sono alternate nel tempo; attualmente le modalità di determinazione delle scadenze sono individuate attraverso la scelta di vari parametri presenti nella tabella pagamenti/riscossioni e sono state adeguate alle esigenze del momento.

Di seguito si illustrano le modalità che si sono alternate nel tempo (e quindi presenti nelle tabelle storiche) e quelle attualmente utilizzabili nell'applicativo CWOL.

Si ricordi infatti che sono utilizzabili dall'utente soltanto le modalità attualmente valide e non tutte quelle che si sono susseguite negli anni.

Tabella riassuntiva delle "modalità di calcolo della scadenza" con rata unica nel ciclo passivo e rate multiple nell'attivo.

Le modalità di partenza prevedono dei parametri aggiuntivi (giorni o date) presenti nella tabella dei pagamenti.

| Nr. (FTA_PAGAM) | Modalità | CWOL ciclo attivo | CWOL Ciclo passivo | CW |
|-----------------|----------|-------------------|--------------------|----|
| 0 | Data emissione documento con gg aggiunti | Sì | Sì | Sì |
| 1 | Calcolo scadenza a decorrere da fine mese dalla data documento | No | No | Sì |
| 2 | Calcolo scadenza a decorrere dalla data documento e forzatura a fine mese della scadenza calcolata | Sì | No | Sì |
| 3 | Calcolo scadenza a decorrere da data protocollo (pec inviata da SDI) | No | **Sì** | Sì |
| 4 | Calcolo scadenza a decorrere da fine mese data protocollo | No | No | Sì |
| 5 | Calcolo scadenza a decorrere dalla data protocollo e forzatura a fine mese della scadenza calcolata | No | **Sì** | Sì |
| 6 | Calcolo scadenza a decorrere dalla data di registrazione | Sì | **Sì** | Sì |
| 7 | Calcolo scadenza a decorrere da fine mese data di registrazione | No | No | Sì |
| 8 | Calcolo scadenza a decorrere dalla data registrazione forzatura a fine mese della scadenza calcolata | Sì | **Sì** | Sì |
| 9 | Calcolo scadenza con giorno e mese fisso (solo entrate) ** | Sì | **Sì** | Sì |
| 10 | Calcolo scadenza con giorno e mese fisso e 1ª rata = data docum. (solo entrate) | No | No | Sì |
| 11 | Data scadenza da Data Lavori dell'impegno | No | No | No |
| 12 | Calcolo scadenza a decorrere dalla data acquisizione | No | **Sì** | Sì |
| 13 | Calcolo scadenza a decorrere da fine mese della data acquisizione | No | No | Sì |
| 14 | Calcolo scadenza a decorrere dalla data acquisizione e forzatura a fine mese della scadenza calcolata | No | No | Sì |
| 15 | Scadenza fissa presente nel documento in ingresso da SDI **(NEW – rilasciata a Settembre 2020)** | No | **Sì** | Sì |
| 16 | Nessun calcolo automatico → inserita manualmente dall'operatore **(NEW e non utilizzabile dei documenti da modulo esterno – rilasciata a Settembre 2020)** | Sì | **Sì** | Sì |

---

## 6. Impostazione tabelle base per la fatturazione attiva

### Creazione tipo movimento

**Percorso:** `170. Servizi Economici` → `90. Tabelle` → `80. Fatturazione Attiva` → `20. Tipo movimenti`

[Schermata: menu a cascata con percorso 170. Servizi Economici → 90. Tabelle → 80. Fatturazione Attiva → 20. Tipo movimenti]

[Schermata: finestra "Tipo movimenti" con tabella contenente: Cod. 2, Validità "Fatturazione Entrate", Descrizione "SERVIZI VARI Fattura", Tipo Documento "Fattura", Causale "93 - FATTURA (ITER)", Settore "Servizi vari resi a privati". Pulsanti: Nuovo, **Duplica** (evidenziato in rosso), Altra Ricerca]

[Schermata: finestra "Tipo movimenti Fatturazione Attiva" con tab "Definizione Tipi" attiva. Campi: Validità tipo movimento "Fatturazione entrate", Descrizione "SERVIZI VARI Fattura", Tipo documento "Fattura", Causale documento 93 "FATTURA (ITER)", Modo num. doc. Fatt. Entrate "Numero protocollo Iva = numero documento", Tipo movimento per conferma 0, Settore IVA 06 "Servizi vari resi a privati", Numeratore Documento, Testo 28 "Fatturazione da gest. Entrate", Ragione sociale "Soggetto". Sezione "Fatturazione Entrate": Modo incasso "Mediante tesoreria". Sezione "Atto di riscossione": Nuovo, Default. Sezione "Accertamento per IVA": Accertamento 0]

[Schermata: finestra "Tipo movimenti Fatturazione Attiva" con tab "Assoc. con Voci" selezionata (evidenziata in rosso). Sezione "Voci" con Riga 1, Descrizione "SERVIZI VARI". Finestra "Voci Documento": Codice Voce 2, Descrizione Voce "SERVIZI VARI", Quantità di default 1,00, Importo unitario di default 1,00, Assoggettamento IVA "A - IVA NORMALE ACQ. E VENDITE" (Aliquota IVA 22), Assoggettamento IVA Split "SV - IVA SPLIT VENDITE" (Aliquota IVA Split 22), Assoggettamento IVA Reverse "A - IVA NORMALE ACQ. E VENDITE" (Aliquota IVA Reverse 22), Assogg. IVA per mov. in Esenz./Agev. (Alig. IVA Esenz./Agev.), Validità per "Fatturazione entrate", Controllo Accertamento "Importo prestabilito (non superabile)", Tipo Voce T. Sanitaria "Non specificato", Gestione Cod. Statistico "Non previsto". Sezione "Fatturazione Entrate Anno 2021": Accertamento modificabile ✓, Gestione accertamento "Accertamento unico presente nella voce"]

### Creazione causale contabile

**Percorso:** `170. Servizi Economici` → `90. Tabelle` → `20. Strutturali` → `120. Tipi di documenti contabili e causali operative`

[Schermata: menu a cascata con percorso 170. Servizi Economici → 90. Tabelle → 20. Strutturali → 120. Tipi di documenti contabili e causali operative]

[Schermata: finestra "Tipi di documenti contabili e causali operative" con Codice tipo documento 93, Descrizione "FATTURA (ITER)", Documento di Entrata, Segno movimento Positivo. Moduli: Valido per finanziaria ✓, Valido per Co.ANA ☐, Valido per IVA ✓, Valido per economato ☐, Valido solo per ritenute ☐, Valido per Co.Ge. "Prevista apertura ed eventuale chiusura (in funzione della causale chiusura)". Tab "Definizione": Attiva iter per liquidazione da servizio periferico ✓, Tipo debito/credito (Siope+) "Non commerciale". Esportazione a piattaforma SDI/PCC/Spesometro: Codice tipo documento (codifica SDI) "TD01 - Fattura". Registro unico documenti: Modo calcolo numero protocollo "Al momento dell'inserimento del documento"]

[Schermata: finestra "Tipi di documenti contabili e causali operative" con tab "IVA" selezionata. Codice tipo documento 93, Descrizione "FATTURA (ITER)", Documento di Entrata, Segno movimento Positivo. Moduli: Valido per finanziaria ✓, Valido per IVA ✓. Tab IVA: Registro IVA 1 "Vendite", Registro IVA acquisti per ventilazione (vuoto), Movimento valido per il solo importo IVA ☐, Quadratura IVA ☐, Tipo importo immesso per calcolo IVA "Digitato imponibile => calcola l'IVA dall'aliquota", Modalità protocollazione ai fini IVA "Assegnato automaticamente in fase d'inserimento dal numeratore associato alla causale", Tipo documento valido per gli allegati ☐, Totalizza documenti per allegati riepilogo "Somma", Codice numeratore per calcolo protocollo IVA "IVAVEN - NUMERATORE FATTURE SU REGISTRO VENDITE". Esigibilità differita: Documento ad esigibilità differita ☐, Tipo documento per storno IVA provvisorio (Tipo esigibilità 3) 0, Tipo documento per addebito IVA pagata (Tipo esigibilità 3) 0. Causale spesa per registrazione automatica IVA Split/Reverse Charge 0, Escludi da comunicazione liquidazione periodica IVA ☐, Metodo gestione IVA Split/Reverse "Standard"]