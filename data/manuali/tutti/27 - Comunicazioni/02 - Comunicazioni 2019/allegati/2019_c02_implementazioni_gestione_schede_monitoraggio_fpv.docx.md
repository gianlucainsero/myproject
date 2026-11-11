# Comunicazione n. 02/2018 - Implementazioni gestione schede monitoraggio Fondo Pluriennale Vincolato

**Data:** 05/02/2019

## Aggiornamento delle schede per il monitoraggio del fondo pluriennale

L'aggiornamento all'applicativo consiste nell'introduzione del **cronoprogramma delle spese**, nelle schede di monitoraggio FPV, tramite il quale sarà possibile generare le variazioni di bilancio durante l'esercizio. Questo è stato fatto in modo tale da concentrare tutta la gestione dell'FPV durante l'anno nella sezione del programma relativa al monitoraggio.

Inoltre le attuali schede di monitoraggio FPV sono state suddivise in due sezioni: una relativa alla **competenza** e una relativa al **consuntivo**. Questa suddivisione permette di avere in modo preciso la composizione della competenza, quindi se finanziata da fondo pluriennale vincolato e anche l'anno di provenienza.

Per ridurre il lavoro sulle schede già presenti sono state previste delle funzioni di utilità per poter aggiornare il cronoprogramma delle spese.

Per rendere più chiaro il funzionamento verrà esaminato un caso pratico il quale è stato suddiviso in 4 eventi della gestione:

1. Bilancio di previsione
2. Integrazione per nuovo finanziamento
3. Anticipazione di esigibilità
4. Posticipo esigibilità (Disimpegno)

---

## 1 - Bilancio di previsione

Si ipotizza un'opera per la realizzazione di una scuola elementare per un importo di **1.200.000,00 €** così finanziato:

- Mutuo di 900.000,00 €
- Avanzo vincolato per 200.000,00 €
- Avanzo libero per 100.000,00 €

Il cui cronoprogramma prevede una spesa pari a:

| Anno | Importo |
|------|---------|
| 2019 | 600.000,00 € |
| 2020 | 500.000,00 € |
| 2021 | 100.000,00 € |

Per prima cosa va inserita l'opera pubblica utilizzando il metodo consueto.

[Figura: Schermata di inserimento opera pubblica con identificativo "2019_SCUOLA_ELEMENTARE", tipo opera, descrizione, importo impegnato 1.200.000,00 € e anno iniziale 2019]

### Label andamento spese

Nella Label **andamento spese**, è possibile inserire le schede relative all'opera, le quali sono state suddivise in due sezioni: **Previsione** e **Consuntivo**.

Nella sezione **Previsione** le colonne presenti sono:

| Anno | Entrata (+) | Competenza Pura | FPV | Totale | FPV a Bilancio |
|------|-------------|-----------------|-----|--------|----------------|

Nella sezione **Consuntivo** le colonne presenti sono:

| Anno | Entrata (+) | Impegnato (±) | Di cui CP | Di cui FP | Di cui DC | Altri imp. impegnati | Economie (±) | Minori spese (±) | FPV fine anno |
|------|-------------|---------------|-----------|-----------|-----------|----------------------|--------------|------------------|---------------|

### Sezione Previsione

Accanto ad ogni anno è stata inserita un'icona dove si ha la possibilità di andare ad inserire i finanziamenti di entrata ed il relativo cronoprogramma di spesa.

[Figura: Scheda monitoraggio con elenco anni dal 2019 al 2028, colonna Entrata, Competenza Pura, FPV, Totale, FPV a Bilancio. Icona evidenziata accanto all'anno 2019]

Cliccando sull'icona accanto al 2019 la nuova FORM per il caricamento del cronoprogramma di spesa si presenterà vuota.

Da questa schermata, l'operatore dovrà semplicemente caricare il cronoprogramma: la mascherina si presenta con la spunta sul campo **"Provenienza Finanziamento"** (in alto a dx); in questo modo si deve andare a specificare il dettaglio entrate nella label apposita.

[Figura: Form Cronoprogramma vuota con campo "Anno del Finanziamento: 2019", "Importo del Finanziamento", spunta "Provenienza Finanziamento" attiva, e label "Cronoprogramma Spesa" / "Dettaglio Entrate"]

#### Dettaglio Entrate

Selezionando la label **Dettaglio Entrate** è possibile inserire: il capitolo, tipo finanziamento, il vincolo e l'importo.

Nel caso esaminato inseriremo i dati relativi al mutuo per € 900.000,00:

[Figura: Dettaglio Entrate con riga 1 - Tipo Finanziamento "FIN.MUTUO CDP", Importo 900.000,00, Capitolo E- 6030104, Posizione 6301, 04, 751, Tipo Finanziamento "FIN.MUTUO CDP", Vincolo C3, Importo Entrata 900.000,00]

E in modo analogo le altre 2 tipologie di finanziamento relative all'avanzo libero e vincolato:

[Figura: Dettaglio Entrate con 3 righe: 1) FIN.MUTUO CDP - 900.000,00; 2) FIN.AVANZO VINC.MUTUI - 200.000,00; 3) FIN.avanzo_libero - 100.000,00. Importo totale finanziamento: 1.200.000,00 €]

In questo modo si ha tutto il dettaglio dell'entrata che ha finanziato l'opera.

#### Cronoprogramma Spese

Selezionando la Label **Cronoprogramma spese** è possibile inserirlo come evidenziato nella figura sottostante:

[Figura: Cronoprogramma Spesa con riga 1: Anno 2019 = 600.000,00; Anno 2020 = 500.000,00; Anno 2021 = 100.000,00. Totale Cronoprogramma Spese: 1.200.000,00. Differenza: 0]

Cliccando su **ok** la scheda relativa alla previsione verrà compilata in automatico evidenziando anche l'FPV a bilancio:

[Figura: Scheda Previsione compilata automaticamente: 2019 - Entrata 1.200.000,00, Competenza Pura 600.000,00, FPV 0, Totale 600.000,00, FPV a Bilancio 600.000,00; 2020 - FPV 500.000,00, FPV a Bilancio 500.000,00; 2021 - FPV 100.000,00, FPV a Bilancio 100.000,00]

Nella sezione della scheda a **consuntivo**, siccome non sono stati assunti gli impegni, il fondo pluriennale a fine anno sarà di **1.200.000,00**.

[Figura: Scheda Consuntivo con Entrata 1.200.000,00, Impegnato 0, FPV fine anno 1.200.000,00 per tutti gli anni]

### Aggiornamento importi di previsione sul bilancio

Gli importi di previsione vanno aggiornati manualmente sulla schermata del bilancio di previsione.

Nella schermata **"Importi di Previsione"** sono state aggiunte due icone:
- Una sopra la colonna **FPV** per accedere direttamente alle schede collegate al capitolo
- Una seconda sopra la colonna **competenza** per evidenziare la composizione della competenza

[Figura: Schermata "Importi (Previsione)" del bilancio con colonna "Competenza Esigibile" e "F.Pluriennale Vincolato" con icone aggiunte. Anno 2019: Competenza 600.000,00, FPV 0; Anno 2020: Competenza 500.000,00, FPV 100.000,00; Anno 2021: Competenza 100.000,00, FPV 0]

Cliccando sull'icona "pesetto" della colonna del **"Competenza Esigibile"** viene evidenziato che nel 2019 è tutta competenza pura mentre nel 2020 e 2021 è finanziata da F.P.V. proveniente dall'anno 2019.

[Figura: Finestra "Composizione della Competenza" - Parte SPESA, Meccanografico 0401202, Codice Voce 0401.22.101. ASSESTATO di Cui: 2019 = 600.000,00; 2020 = 500.000,00; 2021 = 100.000,00. Competenza Pura: 2019 = 600.000,00; 2020 = 0; 2021 = 0. Quota comp. da FPV: 2020 = 500.000,00; 2021 = 100.000,00. Di Cui: Anno 2019 - Quota comp. da FPV 2020 = 500.000,00; Quota comp. da FPV 2021 = 100.000,00]

Durante il bilancio di previsione 2019 si prevedono € 10.000,00 da spendere in competenza sia nel 2020 che nel 2021; pertanto la scheda di bilancio viene modificata come di seguito:

[Figura: Importi Previsione aggiornati: 2019 - Competenza 600.000,00, FPV 0; 2020 - Competenza 510.000,00, FPV 100.000,00; 2021 - Competenza 110.000,00, FPV 0]

La composizione della competenza per gli anni 2020 e 2021 risulta come nell'immagine sottostante:

[Figura: Composizione della Competenza aggiornata: ASSESTATO di Cui: 2019 = 600.000,00; 2020 = 510.000,00; 2021 = 110.000,00. Competenza Pura: 2019 = 600.000,00; 2020 = 10.000,00; 2021 = 10.000,00. Quota comp. da FPV: 2020 = 500.000,00; 2021 = 100.000,00. Di Cui: Anno 2019 - Quota comp. da FPV 2020 = 500.000,00; Quota comp. da FPV 2021 = 100.000,00]

### Assunzione accertamenti e impegni di competenza

Confermato il bilancio di previsione si possono assumere gli **ACCERTAMENTI DI ENTRATA** e gli **IMPEGNI**. Con la gestione dei vincoli attiva, gli accertamenti che finanziano impegni di competenza vanno correlati con l'indicazione del vincolo.

Nell'esempio si evidenzia l'accertamento con l'indicazione del vincolo e degli impegni pluriennali finanziati dall'entrata del mutuo.

[Figura: Dettaglio Accertamento 2019/00011 - Voce di Bilancio 6030104, 6301, 04, 751 - Assunzione di mutui e prestiti a medio lungo termine. Importo iniziale 900.000,00. Tab "VINCOLI": Collegamento con vincoli "Su unico vincolo", Vincolo C3 "Vincoli derivanti dalla contrazione di mutui". Impegni collegati appartenenti allo stesso vincolo: Riga 1 - 2019/00154 - scuola elementare somme esigibili nell'anno 2019 - Disponibilità Operativa 600.000,00; Riga 2 - 2020/00040 - scuola elementare somme esigibili nell'anno 2020 FP 625 finanziato da accertamento per assunzione del mutuo - Disponibilità Operativa 300.000,00]

Durante l'anno vengono presi gli impegni per:
- **600.000,00 €** di competenza (CP) nel 2019
- **500.000,00 €** nel 2020 in tipo FP
- **100.000,00 €** nel 2021 in tipo FP

Gli impegni sono assunti collegati ai rispettivi vincoli che li finanziano.

[Figura: Elenco impegni: 2021/00015 FP 100.000,00; 2020/00041 FP 200.000,00; 2020/00040 FP 300.000,00; 2019/00154 CP 600.000,00]

> **IMPORTANTE:** durante l'assunzione degli impegni bisogna inserire l'**anno di provenienza FPV** (nel caso esaminato è il 2019) come riportato nella figura seguente.

[Figura: Dettaglio Impegno 2020/00032 - Capitolo 0401202, 0401, 22, 101 - Tipo impegno X - Importo iniziale 500.000,00 - Provenenza importo "FP - da Fondo Pluriennale in sede di Previsione" - Campo "Anno Provenienza FPV" valorizzato a 2019]

### Situazione schede FPV dopo l'assunzione degli impegni

Ora andremo ad analizzare le due schede FPV della relativa opera, **Situazione scheda Bilancio** e **Situazione scheda consuntivo**.

**Situazione scheda bilancio previsione:** non subisce nessuna variazione.

[Figura: Scheda Previsione invariata: 2019 - Entrata 1.200.000,00, Competenza Pura 600.000,00, FPV 0, Totale 600.000,00, FPV a Bilancio 600.000,00; 2020 - FPV 500.000,00, FPV a Bilancio 500.000,00; 2021 - FPV 100.000,00, FPV a Bilancio 100.000,00]

**Situazione scheda consuntivo:** si ha evidenza del totale impegnato e della sua natura (CP, FP, DC) con conseguente ricalcolo dell'FPV di fine esercizio.

[Figura: Scheda Consuntivo: 2019 - Entrata 1.200.000,00, Impegnato 600.000,00, Di cui CP 600.000,00, FPV fine anno 600.000,00; 2020 - Impegnato 500.000,00, Di cui FP 500.000,00, FPV fine anno 100.000,00; 2021 - Impegnato 100.000,00, Di cui FP 100.000,00, FPV fine anno 0]

In questo modo l'analisi durante il bilancio di previsione è terminata; una volta che il bilancio verrà confermato si potranno verificare altri eventi che ora andremo a dettagliare.

---

## 2 - Integrazione per nuovo finanziamento

Nell'esercizio 2019 si ha una integrazione di **€ 500.000,00** proveniente da mutuo la cui spesa è prevista nel 2019 con la seguente programmazione: **€ 300.000,00 nel 2019** e **€ 200.000,00 nel 2020**.

Quindi, sempre nell'anno 2019, dovremo inserire la nuova entrata cliccando sul pulsante posto vicino all'icona dell'anno.

[Figura: Scheda Previsione con pulsante "+" evidenziato accanto all'icona dell'anno 2019]

Nella maschera che si apre andare nel **Dettaglio entrate**: siccome è una nuova entrata che deve produrre una variazione di bilancio, mettere la spunta **'Crea Variazione'** come evidenziato in figura.

[Figura: Dettaglio Entrate con nuova riga 4 - Tipo Finanziamento "FIN.MUTUO CDP", Importo 500.000,00, Capitolo E- 6030104, 6301, 04, 751, Tipo Finanziamento "FIN.MUTUO CDP", Importo Entrata 500.000,00, spunta "Crea Variazione" attiva. Importo del Finanziamento totale: 1.700.000,00 €]

Una volta inserita l'entrata cliccando su **"Cronoprogramma Spesa"** si inserisce lo stesso come di seguito illustrato. Viene effettuato il controllo della congruenza tra le entrate indicate e le spese programmate.

[Figura: Cronoprogramma Spesa con riga 2 nuova: Anno 2019 = 300.000,00; Anno 2020 = 200.000,00. Totale Cronoprogramma Spese: 1.700.000,00. Differenza: 0]

Facendo scorrere la scroll bar mettere la spunta su **'Crea Variazione'**:

[Figura: Riga 2 del cronoprogramma con colonna NOTE e spunta "Crea Variazione" attiva]

Cliccando su **ok** il cronoprogramma aggiorna la scheda del 'Bilancio' sommando 300.000,00 € a 600.000,00 € del 2019 impegnabili da competenza e 200.000,00 € sommati ai 500.000 finanziati da FPV:

[Figura: Scheda Previsione aggiornata: 2019 - Entrata 1.700.000,00, Competenza Pura 900.000,00, FPV 0, Totale 900.000,00, FPV a Bilancio 800.000,00; 2020 - Competenza Pura 0, FPV 700.000,00, Totale 700.000,00, FPV a Bilancio 100.000,00; 2021 - FPV 100.000,00, Totale 100.000,00, FPV a Bilancio 0]

Nella scheda a **consuntivo**, non essendo stati assunti gli impegni agli € 500.000,00 aggiunti, produce un FPV per tutti gli anni che verrà diminuito al momento dell'assunzione degli impegni.

[Figura: Scheda Consuntivo: 2019 - Entrata 1.700.000,00, Impegnato 600.000,00, Di cui CP 600.000,00, FPV fine anno 1.100.000,00; 2020 - Impegnato 500.000,00, Di cui FP 500.000,00, FPV fine anno 600.000,00; 2021 - Impegnato 100.000,00, Di cui FP 100.000,00, FPV fine anno 500.000,00; anni successivi FPV fine anno 500.000,00]

### Generazione automatica della variazione di bilancio

Ora, avendo messo la spunta **Crea variazione**, andando sul programma apposito sarà possibile generare in automatico la variazione di bilancio. Per fare questo bisogna andare sul menu:

**`Elaborazione periodiche` → `Andamento fondo pluriennale` → `Crea Variazioni da Cronoprogramma`**

[Figura: Menu a tendina "Elaborazione periodiche" con sottomenu "Andamento fondo pluriennale vincolato" e voce "Crea Variazioni da Cronoprogramma" evidenziata]

Si aprirà la maschera dove sarà possibile inserire i numeri della variazione e eseguire l'operazione prima in **simulazione** e poi in **Creazione** (definitivo):

[Figura: Finestra "Crea Variazioni da Cronoprogramma - Selezione parametri" con radio button "Creazione" / "Simulazione" (Simulazione selezionato), Stato variazione da creare "D - Definitiva", Estremi atto con campo "Alto ass. BIL(Tipo+n°)" valorizzato "DO 1 28-01-2019 Determinazione Dirigenziale"]

In **simulazione** vengono prodotte le stampe per verifica (l'FPV di entrata in simulazione non viene stampato):

[Figura: Stampa "Generazione variazioni di bilancio da Cronoprogramma - SIMULAZIONE" con tabella: E/6030104/6301.04.751 - Var.+ 500.000,00 (Anno 2019); E/0401202/0401.22.101 - Var.+ 300.000,00 (2019), Var.- 200.000,00 (2020), Var.+ 200.000,00 (2020 da cui FPV). Totale variazioni entrata: Var.+ 500.000,00. Totale variazioni uscita: Var.+ 300.000,00 (2019), 200.000,00 (2020), Var.- 200.000,00 (2020 da cui FPV). Differenza: 300.000,00 (2019), 200.000,00 (2020), 200.000,00 (2020 da cui FPV)]

Una volta verificato che la variazione sia corretta si può crearla in **definitivo**: così facendo viene inserita anche la variazione di FPV di entrata.

[Figura: Stampa "Generazione variazioni di bilancio da Cronoprogramma - CREAZIONE" con tabella: Fondo Pluriennale vincolato per spese in conto capitale - Var.+ 200.000,00 (2020 da cui FPV); E/0401202/0401.22.101 - Var.+ 300.000,00 (2019), Var.- 200.000,00 (2020), Var.+ 200.000,00 (2020 da cui FPV). Totale variazioni entrata: Var.+ 500.000,00 (2019), 200.000,00 (2020 da cui FPV). Totale variazioni uscita: Var.+ 300.000,00 (2019), 200.000,00 (2020), Var.- 200.000,00 (2020 da cui FPV). Differenza: 300.000,00 (2019), 200.000,00 (2020), 200.000,00 (2020 da cui FPV)]

Una volta terminata la creazione della variazione la possiamo verificare nel punto consueto di **"Gestione variazioni di bilancio"**:

[Figura: Elenco variazioni: E - FPV Spese C/Capitale - 2020-F.Plur (+) 200.000,00; E - 6.03.01.04.999 / 630104 / 6301.04.751 - 2019-Comp (+) 500.000,00; S - 2.02.01.09.003 / 0401202 / 0401.22.101 - 2019-Comp (+) 300.000,00, 2020-Comp (+) 200.000,00, 2020-F.Plur (-) 200.000,00]

La composizione della competenza varia così:

[Figura: Composizione della Competenza: ASSESTATO di Cui: 2019 = 900.000,00; 2020 = 710.000,00; 2021 = 110.000,00. Competenza Pura: 2019 = 900.000,00; 2020 = 10.000,00; 2021 = 10.000,00. Quota comp. da FPV: 2020 = 700.000,00; 2021 = 100.000,00. Di Cui: Anno 2019 - Quota comp. da FPV 2020 = 700.000,00; Quota comp. da FPV 2021 = 100.000,00]

---

## 3 - Anticipazione di esigibilità

Durante l'anno 2019, **10.000 euro** di lavori verranno anticipati dal 2021 al 2019. Basterà cliccare sull'anno del finanziamento.

[Figura: Scheda Previsione con icona evidenziata accanto all'anno 2019]

Quindi nel cronoprogramma va inserita semplicemente la variazione **-10.000 €** nell'anno 2021 e **+10.000 €** nell'anno 2019:

[Figura: Cronoprogramma Spesa con riga 3 nuova: Anno 2019 = 10.000,00; Anno 2021 = -10.000,00. Totale Cronoprogramma Spese: 1.700.000,00. Differenza: 0. Riga 1 (600.000,00 / 500.000,00 / 100.000,00) e Riga 2 (300.000,00 / 200.000,00) immodificabili]

La riga relativa alla precedente variazione è **immodificabile** perché risulta collegata ad una variazione di bilancio precedentemente illustrata.

Anche per questa operazione va indicata la spunta **'crea variazione'**:

[Figura: Riga 3 del cronoprogramma con spunta "Crea Variazione" attiva nella colonna NOTE]

Confermato il cronoprogramma la scheda varierà in questo modo:

[Figura: Scheda Previsione aggiornata: 2019 - Entrata 1.700.000,00, Competenza Pura 910.000,00, FPV 0, Totale 910.000,00, FPV a Bilancio 790.000,00; 2020 - FPV 700.000,00, Totale 700.000,00, FPV a Bilancio 90.000,00; 2021 - FPV 90.000,00, Totale 90.000,00, FPV a Bilancio 0]

### Generazione della variazione di bilancio

Avendo richiesto la 'Creazione della variazione', andando sul programma apposito sarà possibile generare in automatico la variazione di bilancio. Si consiglia di effettuare prima la **simulazione** che evidenzia la mancanza di disponibilità sulla riga dell'FPV nell'esercizio 2021.

> **Attenzione:** Con questa situazione tutto l'importo presente nella scheda risulta impegnato, quindi **prima di effettuare la variazione al bilancio occorre effettuare la diminuzione di pari importo sull'impegno collegato alla scheda con una variazione di tipo 'diminuzione con atto'**. Dopo la riduzione dell'impegno si libera la somma sulla scheda, quindi i valori indicati nel pannello 'consuntivo' sono analoghi a quelli della previsione e quindi è possibile effettuare la variazione.

Per effettuare la variazione andare sul menu:

**`Elaborazione periodiche` → `Andamento fondo pluriennale`**

[Figura: Menu a tendina "Elaborazione periodiche" con sottomenu "Andamento fondo pluriennale vincolato" e voce "Crea Variazioni da Cronoprogramma"]

Si aprirà la maschera dove sarà possibile inserire i numeri della variazione e eseguire l'operazione prima in simulazione e poi in definitiva.

[Figura: Stampa "Generazione variazioni di bilancio da Cronoprogramma - SIMULAZIONE" con tabella: S/0401202/0401.22.101 - Var.+ 10.000,00 (2019), Var.- 10.000,00 (2021 da cui FPV). Totale variazioni uscita: Var.+ 10.000,00 (2019), Var.- 10.000,00 (2021 da cui FPV). Differenza: 10.000,00 (2019), -10.000,00 (2021 da cui FPV)]

Una volta verificato che la variazione è corretta si può fare in **definitivo**, ora viene inserita anche la variazione di FPV di entrata:

[Figura: Stampa "Generazione variazioni di bilancio da Cronoprogramma - CREAZIONE" con tabella: Fondo Pluriennale vincolato per spese in conto capitale - Var.+ 10.000,00 (2020 da cui FPV), Var.- 10.000,00 (2021 da cui FPV); S/0401202/0401.22.101 - Var.+ 10.000,00 (2019), Var.- 10.000,00 (2021 da cui FPV). Totale variazioni entrata: Var.+ 10.000,00 (2020 da cui FPV), Var.- 10.000,00 (2021 da cui FPV). Totale variazioni uscita: Var.+ 10.000,00 (2019), Var.- 10.000,00 (2021 da cui FPV). Differenza: 10.000,00 (2019), -10.000,00 (2021 da cui FPV)]

Quindi troviamo la variazione in gestione variazioni:

[Figura: Elenco variazioni: E - FPV Spese C/Capitale - 2020-F.Plur (+) 10.000,00, 2021-F.Plur (-) 10.000,00; S - 2.02.01.09.003 / 0401202 / 0401.22.101 - 2019-Comp (+) 10.000,00, 2021-F.Plur (-) 10.000,00]

Quindi la composizione della competenza cambia come in figura:

[Figura: Composizione della Competenza: ASSESTATO di Cui: 2019 = 910.000,00; 2020 = 710.000,00; 2021 = 100.000,00. Competenza Pura: 2019 = 910.000,00; 2020 = 10.000,00; 2021 = 10.000,00. Quota comp. da FPV: 2020 = 700.000,00; 2021 = 90.000,00. Di Cui: Anno 2019 - Quota comp. da FPV 2020 = 700.000,00; Quota comp. da FPV 2021 = 90.000,00]

---

## 4 - Posticipo esigibilità (Disimpegno)

Durante il corso del 2019 è stato assunto l'impegno di competenza 'CP' (n. 2019/00154 nell'esempio iniziale) di **€ 600.000,00**. In sede di rendiconto finale o di posticipazione dell'esigibilità infraannuale si decide che **€ 200.000,00** devono essere re-imputati con la seguente modalità:

- € 180.000,00 nel 2020
- € 20.000,00 nel 2021

L'operatività non cambia rispetto a quello che si faceva finora.

[Figura: Dettaglio variazione/riduzione impegno - Tipo variazione "9 - Disimpegno", Impegno 2019/00076, Importo iniziale 600.000,00, Disponibilità residua 600.000,00, Opera Collegata "2019_SCUOLA_MEDIE", Importo variazione 200.000,00, Tipo "Disimpegno (Variazione Esigibilità)". Riga 2020: Importo su Imp. 180.000,00, FPV 20.000,00, Anno Nuovi Imp. 2020; Riga 2021: Importo su Imp. 20.000,00, FPV 0, Anno Nuovi Imp. 2021]

La scheda relativa al bilancio è cambiata in modo automatico:

[Figura: Scheda Previsione aggiornata: 2019 - Entrata 1.700.000,00, Competenza Pura 710.000,00, FPV 0, Totale 710.000,00, FPV a Bilancio 990.000,00; 2020 - Competenza Pura 0, FPV 890.000,00, Totale 890.000,00, FPV a Bilancio 110.000,00; 2021 - FPV 110.000,00, Totale 110.000,00, FPV a Bilancio 0]

Anche il cronoprogramma con l'operazione di disimpegno si è modificato:

[Figura: Cronoprogramma Spesa con riga 4 nuova: Anno 2019 = -200.000,00; Anno 2020 = 180.000,00; Anno 2021 = 20.000,00. Totale Cronoprogramma Spese: 1.700.000,00. Differenza: 0]

Anche la composizione della competenza varierà come mostrato nella figura sottostante:

[Figura: Composizione della Competenza: ASSESTATO di Cui: 2019 = 710.000,00; 2020 = 890.000,00; 2021 = 120.000,00. Competenza Pura: 2019 = 710.000,00; 2020 = 10.000,00; 2021 = 10.000,00. Da Disimpegno: 2020 = 180.000,00; 2021 = 20.000,00. Quota comp. da FPV: 2020 = 700.000,00; 2021 = 90.000,00. Di Cui: Anno 2019 - Quota comp. da FPV 2020 = 700.000,00; Quota comp. da FPV 2021 = 90.000,00. Prov FPV: Anno 2019 - 2020 = 890.000,00; 2021 = 110.000,00]

---

## Operazioni da fare sulle schede FPV esistenti

Prima di iniziare a lavorare su disimpegni e variazioni FPV tramite i cronoprogrammi, devono essere fatte **2 operazioni**:

1. Chiusura schede anni precedenti
2. Generazione cronoprogramma di previsione della spesa

### 1 - Chiusura schede anni precedenti

Andare nell'anno **2017**, nel menu:

**`Chiusura` → `Chiusura Schede di monitoraggio F.P.V.`**

[Figura: Menu "Chiusura" con voce "Chiusura Schede di monitoraggio F.P.V." evidenziata]

Il programma che si apre è il seguente:

[Figura: Finestra "Utility - chiusura schede FPV" con messaggio di avvertenza: "Il presente programma effettua la verifica delle schede di monitoraggio del FPV, e provvede a chiudere quelle il cui importo del FPV a fine esercizio consiste di successivi esercizi come seguito di anno. L'operazione di chiusura consiste nel valorizzare il campo Anno Fine Finanziamento uguale all'esercizio in cui tale operazione viene effettuata. A fine elaborazione vengono generati i seguenti report: elenco schede chiuse; elenco schede aperte in seguito di errore o valorizzazione manuale del campo Anno fine. Viene generato un report separato con l'elenco delle schede il cui esito dell'aggiornamento sia negativo." Pulsanti "Esegui" e "Chiudi"]

Basta cliccare sul bottone **Esegui**.

### 2 - Generazione cronoprogramma di previsione della spesa

Nell'esercizio **2018** andare nel menu:

**`Funzioni di servizio` → `Bilancio di Previsione` → `Segue funzioni di servizio D.L. 118` → `Genera Cronoprogramma di previsione della Spesa`**

[Figura: Menu a cascata "Funzioni di servizio" → "Bilancio di Previsione" → "Segue funzioni di servizio D.L. 118" → "Genera Cronoprogramma di previsione della Spesa"]

Il programma che si apre può essere eseguito in modalità **solo verifica**:

[Figura: Finestra "Utility - genera cronoprogramma delle schede" con messaggio: "Il presente programma effettua la creazione del Cronoprogramma di previsione della Spesa. Le eventuali schede scartate vengono elencate in apposito foglio di calcolo salvato nella cartella predefinita delle stampe. A fine elaborazione è possibile effettuare l'esportazione dell'elenco in excel delle schede aggiornate." Checkbox "Solo schede Aperte", radio button "Tipo Operazione: Solo Verifica / Aggiorna", pulsante "Esporta elenco schede create"]

Nella modalità **verifica** verrà generato un foglio Excel nella cartella stampe:

[Figura: Finestra "Elaborazione Terminata" con messaggio: "Nella cartella C:\Program Files (x86)\Cityware\STAMPE è stato salvato il file Generazione_Cronoprogramma_da_Schede_errori_riscontrati.xls. Verificare le segnalazioni, se necessario è possibile controllare l'esistenza di riferimento o l'Inol-line dei..."]

Il foglio Excel va analizzato (possibilmente insieme ai consulenti PAL): un esempio di foglio generato è il seguente:

| ID_OPCDRD | ANNO_INC | COD_OPE | ANOMALI |
|-----------|----------|---------|---------|
| 5 | 2013 | 4 | Totale Impegnato diverso da Importo Finanziamento Entrata - la scheda va modificata manualmente |
| 7 | 2013 | 8 | Totale Impegnato diverso da Importo Finanziamento Entrata - la scheda va modificata manualmente |
| 9 | 2013 | 104 | Totale Impegnato diverso da Importo Finanziamento Entrata - la scheda va modificata manualmente |
| 14 | 2015 | 16 | Totale Impegnato diverso da Importo Finanziamento Entrata - la scheda va modificata manualmente |

Una volta verificate le anomalie, i cronoprogrammi vanno creati manualmente.

Si esegue il programma precedente in modalità **aggiorna**; una volta eseguito l'aggiornamento è possibile (cliccando sul bottone **'Esporta elenco schede create'**) avere l'elenco delle opere dove è stato creato il cronoprogramma: il cronoprogramma è creato in base ai reali impegni collegati alle schede FPV.

[Figura: Finestra "Utility - genera cronoprogramma delle schede" in modalità Aggiorna con pulsante "Esporta elenco schede create" evidenziato]

Il cronoprogramma è creato in base ai reali impegni collegati alle schede F.P.V.

---

## Rilascio Implementazioni al software

La modifica è disponibile a partire dalla **patch del 04.02.2019**.