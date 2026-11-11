# COM CLIENTI 2026 – Comunicazione n. 02/2026

**Oggetto:** Azioni da Effettuare in seguito all'approvazione del rendiconto

**Scopo:** Le azioni di seguito illustrate mostrano le fasi operative da effettuare per rendere il rendiconto definitivo, per ricalcolare i residui nell'anno successivo e per effettuare la chiusura dei saldi dei vincoli.

| Data | Oggetto Revisione | Versione |
|------|-------------------|----------|
| 11/04/2025 | Prima Stesura | C04/2025 |
| 21/04/2026 | Revisione esercizio contabile | C02/2026 |

---

## 1. Fasi Operative in seguito ad Approvazione Rendiconto

### 1.1 Impostazioni Flag Esercizio Chiuso

**INFO:**

`Servizi Economici => Tabelle => Configurazioni => Definizione Operabilità – Parametri Generali`

Operando **nell'anno contabile da chiudere (rendiconto approvato)**:

1. Navigare in: **Servizi Economici => Tabelle => Configurazioni => Definizione Operabilità – Parametri Generali**
2. Valorizzare il flag **Esercizio chiuso** come nell'immagine, in modo da bloccare l'operatività (in modifica) nella gestione dell'esercizio.

[Schermata: Tabella personalizzazioni modulo finanziaria – Flag generali con i flag: Bilancio previsione inserito, Bilancio previsione confermato, Assestamento effettuato, Verbale di chiusura Stampato, Riaccertamento in corso, Rendiconto chiuso, Esercizio chiuso – tutti valorizzati con spunta blu]

**Gestione Iter – Descrizione dei flag:**

- **BILANCIO PREVISIONE INSERITO:** Non è possibile modificare gli importi delle voci di bilancio e non è possibile effettuare richieste di bilancio. In caso di inserimento del Flag è fortemente consigliato effettuare il CONTROLLO QUADRATURA.
- **BILANCIO PREVISIONE CONFERMATO:** L'importo assegnato sulla voce di bilancio diventa operativo. In caso di inserimento del Flag è fortemente consigliato effettuare il CONTROLLO QUADRATURA.
- **ASSESTAMENTO EFFETTUATO:** Non è più possibile inserire variazioni di bilancio.
- **VERBALE DI CHIUSURA STAMPATO:** Non è consentito l'inserimento di impegni/accertamenti.
- **RIACCERTAMENTO IN CORSO:** Non è consentito l'inserimento di impegni/accertamenti e l'emissione di mandati/reversali. Sono consentite solo operazioni di riaccertamento ordinario (var. esigibilità, economie, inssistenze, perenzioni).
- **RENDICONTO CHIUSO:** Sono consentite solo interrogazioni ed operazioni su movimenti IVA e ritenute per Mod. 770 e liquidazione IVA. In caso di inserimento del Flag è fortemente consigliato effettuare il CONTROLLO QUADRATURA.
- **ESERCIZIO CHIUSO:** Non è possibile effettuare alcuna operazione di gestione.

**INFO:** Permette di ottenere le informazioni relative alle impostazioni dei vari iter.

---

### 1.2 Ricalcolo Stanziamenti Residuo da Bilancio Esercizio Precedente

In seguito alle operazioni effettuate per il rendiconto, sarebbe opportuno effettuare la funzione di ricalcolo degli stanziamenti a residuo in modo di allineare alla situazione aggiornata eventuali difformità.

**Procedura:**

Operando **dall'esercizio da aggiornare** (quello successivo al rendiconto):

1. Navigare in: **Servizi Economici => Utilità => Apertura Nuovo Esercizio**
2. Selezionare la funzione **"Ricalcolo Stanziamenti Residuo da Bilancio Esercizio Precedente"**

[Schermata: Apertura Nuovo Esercizio – sezione "Ricalcolo Valori" con le voci: Ricalcolo Importi Competenza da Bilancio esercizio precedente, Ricalcolo Stanziamento Residuo da Bilancio esercizio precedente, Ricalcolo Stanziamento Iniziale Cassa]

3. Impostare i flag come nell'immagine e procedere utilizzando la funzione **"Ricalcola"**

[Schermata: Ricalcolo importi residuo da Bilancio precedente – con sezioni: "Residuo su Bilancio" (Stanziamenti Residuo Iniziale, Totale impegnato a residuo, Verifica residuo utilizzato), "Operazioni su Impegni/Riaccertamenti" (Riaccertato a residuo con residuo da anno precedente, Chiusura impegni/accertamenti nell'anno precedente senza residuo), e tabelle "Entrate – Residui di Bilancio corretti nell'aggiornamento" e "Uscite – Residui di Bilancio corretti nell'aggiornamento"]

---

### 1.3 Allineamento situazione Avanzo Libero e Utilità chiusura saldi vincoli

In seguito all'approvazione del rendiconto (**operando dall'esercizio del rendiconto approvato**), va effettuata la funzione per riportare il saldo iniziale dei vincoli nell'annualità successiva.

I saldi finali dell'anno precedente verranno riportati come saldi iniziali dell'anno successivo, verrà creato anche un movimento di rettifica per allineare alla situazione del rendiconto la quota di **AVANZO LIBERO**.

**Procedura:**

1. Dalla **gestione dei vincoli**, attraverso il bottone **AVANZO LIBERO** è possibile visualizzare la situazione dettagliata della ripartizione delle tipologie di avanzo.

[Schermata: Riepilogo Vincoli – elenco vincoli con destinazioni (B – AVANZO: DA PARTE ACCANTONATA, DA PARTE VINCOLATA, DA PARTE DESTINATA AGLI INVESTIMENTI, DA PARTE DISPONIBILE, ALTRA DESTINAZIONE ESCLUSA DA COMPOSIZIONE AVANZO) e pulsanti sulla destra: Nuovo Vincolo, Apri Vincolo, Situazione di Cassa, Situazione Competenza, Movimentazione Annuale, Avanzo Libero, Stampa Riepilogo Avanzo, Storicizzazione Saldi Avanzo, Prospetto del Risultato di Amministrazione, Confronto Bilancio]

2. Una volta cliccato su **Avanzo Libero**, il programma mostrerà la schermata di riepilogo dei totali di parte accantonata, vincolata, investimenti e disponibile, così da avere la possibilità di confrontarli con quelli del risultato di amministrazione e, se corretti, procedere con la storicizzazione.

[Schermata: Avanzo Libero – tabella con righe: A – Risultato di Amministrazione, B – Totale Parte Accantonata (B1 Accantonamento a FCDOE, B2 Accantonamento residui parenti, B3 Fondo anticipazioni di liquidità D.L. 35/2013, B4 Fondo perdite società partecipate, B5 Fondo contenzioso, B6 Altri accantonamenti da dettagliare in composizione avanzo, B7 Fondo garanzia debiti commerciali), C – Totale Parte Vincolata (C1 Vincoli derivanti da leggi e dai principi contabili, C2 Vincoli derivanti da trasferimenti, C3 Vincoli derivanti dalla contrazione di mutui, C4 Vincoli formalmente attribuiti dall'ente, C5 Altri vincoli da specificare), D – Totale Destinato agli Investimenti, E – Quota Avanzo Libero (A-B-C-D), F – Avanzo da movimenti su scheda Comp., G – Differenza Avanzo Libero (E-F), H – Avanzo Libero Fine Esercizio con Mov. Diff.]

3. Premere **STORICIZZA SALDI** e selezionare il tipo di operazione da effettuare, a scelta tra:
   - **Competenza e Cassa**
   - **SOLO Competenza**
   - **SOLO cassa**

[Schermata: Dialog "Tipo chiusura Saldi" – "Attenzione! Selezionare il tipo di chiusura" con tre pulsanti: Competenza e Cassa, Solo Competenza, Solo Cassa]

4. È possibile procedere in modo disgiunto per la chiusura dei saldi di cassa rispetto a quelli di competenza.

5. La storicizzazione della cassa è consigliata agli enti che gestiscono i vincoli di cassa dal Menu Vincoli. In questo caso va prima verificata la correttezza dei saldi finali di cassa.

6. **Una volta completata l'operazione si consiglia di confrontare i saldi iniziali nell'anno successivo con quelli presenti nei vincoli del Rendiconto appena approvato.**