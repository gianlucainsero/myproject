# Comunicazione n. 07/2018

**Oggetto:** Flussi BDAP – certificato al rendiconto al bilancio

| Data | Oggetto Revisione | Versione |
|------|-------------------|----------|
| 18-05-2018 | Prima comunicazione | C07/2018 |

---

## 1. Flussi BDAP

Le modifiche riguardano la comunicazione dei dati derivanti dalla contabilità economico/patrimoniale (conto economico, conto del patrimonio, costi per missione, dati analitici per conto).

I nuovi flag vanno impostati in funzione dell'anno di riclassificazione del conto del patrimonio secondo le regole del D.L.118:

### Riclassificazione effettuata nel 2016 o negli esercizi precedenti

Riguarda gli enti che hanno effettuato la riclassificazione dello stato patrimoniale dal DPR/94 al DL118 nell'esercizio 2016 o precedenti.

I flag vanno lasciati con l'impostazione presentata all'apertura del programma.

[Schermata: Finestra "CITY-FINANCING Creazione flussi in formato XBRL x invio Rendiconto della gestione alla BDAP" con sezione "Parametri aggiuntivi" mostrante i flag "SDB/DCA: Non valorizzare prospetti del conto economico, conto del patrimonio, costi per missione e dati analitici per conto" (non spuntato) e "SDB: Modo valorizzazione colonna 2 Conto del patrimonio" con opzione "Stato patrimoniale anno prec." selezionata]

### Riclassificazione effettuata nel 2017

Riguarda gli enti che hanno effettuato la riclassificazione dello stato patrimoniale dal DPR/94 al DL118 nell'esercizio 2017.

Modificare il flag come evidenziato nell'immagine:

[Schermata: Sezione "Parametri aggiuntivi" con il flag "SDB: Modo valorizzazione colonna 2 Conto del patrimonio" impostato su "Stato patrimoniale apertura" (evidenziato in rosso)]

### Riclassificazione non effettuata a seguito di delibera di rinvio dell'adozione dei nuovi prospetti

Modificare il flag evidenziato nell'immagine:

[Schermata: Sezione "Parametri aggiuntivi" con il flag "SDB/DCA: Non valorizzare prospetti del conto economico, conto del patrimonio, costi per missione e dati analitici per conto" spuntato (evidenziato in rosso)]

### Stampe di controllo dati analitici

[Schermata: Finestra "CITY-FINANCING Stampe di controllo valori inseriti nel flusso DCA per rendiconto" con sezione "Contabilità economico/patrimoniale" e opzione "Totale registrazioni conto economico per missione, programma e conto" selezionata]

Stampa di controllo movimenti contabilità generale: modificato ordinamento della stampa secondo le componenti del conto economico:

A. componenti positivi della gestione
B. componenti negativi della gestione
C. proventi e oneri finanziari
D. rettifiche di valore attività finanziarie
E. proventi e oneri straordinari

Con questa modalità è molto più agevole confrontare i valori estratti con il prospetto del conto economico e con l'interrogazione dei dati analitici presente sul portale della BDAP.

> **Nota:** Si ricorda che nei componenti negativi viene inclusa anche la voce dell'IRAP che nel conto economico viene evidenziata nel rigo delle imposte.

---

## 2. Certificato al rendiconto

Il decreto del 17 aprile 2018 (pubblicato in G.U. 99 del 30/04/2018) contiene l'approvazione del modello del certificato al rendiconto 2017.

[Schermata: Finestra "Certificato al Conto di bilancio D.L.118" con pulsanti: "Importa da bilancio", "Inserimento manuale quadri certificato", "Verifica Controlli Incrociati", "Stampa certificato", "Creazione file", e sezione "Funzioni di servizio" con "Ricalcolo totali"]

Per la compilazione del prospetto occorre effettuare le seguenti fasi:

1. **Eseguire l'importazione da bilancio.** Tale funzione compila il certificato reperendo i dati dagli archivi cityware utilizzati per la stampa dei prospetti ufficiali.
   - Nel primo pannello della videata sono richiesti i dati extra-bilancio da inserire manualmente (firmatari, delibera di approvazione del bilancio, etc.).
   - La fase *Importa da bilancio* può essere eseguita più volte, si ricorda però che i dati inseriti manualmente vengono persi e quindi vanno ricaricati.

2. **Effettuare l'inserimento manuale dei valori** del certificato non estratti dalla procedura al punto 1.

3. **Effettuare la verifica dei controlli incrociati** previsti dal decreto.

4. **Effettuare la stampa del certificato** per effettuare il controllo sui valori estratti.

5. **Effettuare la creazione del flusso in formato xml** da inviare al ministero come da indicazioni presenti nel decreto ministeriale.

### Inserimento manuale dei dati

L'inserimento manuale dei dati riguarda i quadri **1 bis, 8, 9, 9 bis, 10, 14, 16 e 19**.

In particolare:

- I dati richiesti dai quadri **1 bis, 9 e 10** sono relativi agli enti appartenenti ad unioni di comuni.

  [Schermata: "QUADRO 1 bis - APPARTENENZA AD UNIONI DI COMUNI AL 2017" con campi: 1050 "L'ente appartiene all'Unione di comuni avente codice", 1060 "L'appartenenza all'Unione di comuni è antecedente al 01-01-2017" (No/Sì), 1070 "L'appartenenza è intervenuta in corso d'anno in data", 1080 "L'appartenenza è cessata in corso d'anno in data"]

  Nel caso in cui l'ente appartiene (o ha cessato la sua appartenenza nel corso del 2017) si deve inserire il codice dell'unione (mediante il pulsante di ricerca è possibile ottenere l'elenco delle unioni presenti nella provincia dell'ente).

- Nel **quadro 9** sono richiesti i dati relativi ad IMU, TARI, TARSU e TARES. Poiché nel piano finanziario non c'è la corrispondenza puntuale a tali tasse, occorre verificare se gli importi estratti sono corretti o se vanno ripartiti facendo attenzione a **non variare il totale della voce 90010**.

  [Schermata: "QUADRO 9 - PROSPETTO DELLE ENTRATE PER TITOLI TIPOLOGIE E CATEGORIE" con colonne TOTALI (Accertamenti, di cui non risc.) e RISCOSSIONI (c'vo Competenza, c'vo Residui). Righe: 90010 Imposte, tasse e proventi assimilati; 90030 Imposta municipale propria (IMU); 90101 Tassa sui rifiuti (TARI); 90130 Tassa per la raccolta e lo smaltimento dei rifiuti solidi urbani (TARSU); 90180 Tributo comunale sui rifiuti e sui servizi (TARES) (esercizi precedenti)]

### Verifica controlli incrociati

Il pulsante **Verifica controlli incrociati** esegue la verifica che tutti i controlli previsti dal ministero siano superati, le eventuali anomalie vengono segnalate in apposita stampa.

In presenza di errori l'operatore deve sistemare i valori a partire dalle finestre di gestione dei dati del rendiconto, quindi occorre effettuare nuovamente la fase di importazione da bilancio.

---

## Distribuzione implementazioni

Le implementazioni sopra indicate sono in distribuzione con l'aggiornamento al modulo **cityfinancing** (patch) pubblicato nella settimana che termina il **18.05.2018**.

### 2.1.1.1 Rilascio implementazioni al software (titolo4)

La modifica è disponibile a partire dalla **release 7.11 su CWOL – patch del 25.01.2023**.