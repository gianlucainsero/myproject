# Importazione da Excel

Esistono due modi di poter effettuare l'importazione:

- **Una riga di Excel per pratica:** Ogni riga rappresenta una pratica. Specificando la colonna PATH verranno importati anche tutti gli allegati associati alla pratica
  `tracciato_importazione_excel_1-riga-per-pratica.xlsx`

- **Una riga di Excel per allegato:** Ogni riga rappresenta un allegato. In questa seconda modalità, tutte le colonne valorizzate (dati da recuperare) vanno ripetute in tutte le righe della stessa pratica
  `tracciato_importazione_excel_1-riga-per-allegato.xlsx`

## Tracciato file Excel

La prima riga del file, contiene l'intestazione con i nomi delle colonne e **NON DEVE ESSERE MODIFICATA**.

Per ogni colonna viene indicato se è **Obbligatoria** o **Alternativa** ad un'altra, le altre colonne sono opzionali e possono essere lasciate vuote.

Il file Excel non deve contenere formule, copiare ed incollare il testo come **"Incolla Valori"**.

Le lunghezze indicate come "Alfanumerico da N" sono il numero massimo di caratteri, spazi inclusi.

**Nota:** se la pratica esiste già nel gestionale, i campi obbligatori non vengono controllati (si stanno solo integrando dati o allegati).

| Nome colonna Excel | Note | Controllo |
|---|---|---|
| ANNO_PRATICA | Numerico da 4 | **Obbligatorio** - esattamente 4 cifre |
| NUMERO_PRATICA | Alfanumerico da 30 | **Obbligatorio** |
| CODICE_SPORTELLO | Numerico | **Obbligatorio - Palitalsoft** - deve corrispondere a uno sportello esistente |
| SIGLA_SERIE | Alfanumerico da 20 | |
| DATA_PROT | gg/mm/aaaa | |
| NUMERO_PROT | Numerico da 7 | I dati devono essere scritti puliti: (esempio 1) 0251 scriviamo 251 (esempio 2) 2,5 non scriviamo ⇒ log con anomalia segnalata |
| NOMINATIVO_RICHIEDENTE | Alfanumerico da 255 | Alternativo a COGNOME_RICHIEDENTE / NOME_RICHIEDENTE. Può contenere più nominativi separati da un carattere separatore: il limite di 255 vale per l'intera cella, separatori inclusi - Vedi specifiche |
| COGNOME_RICHIEDENTE | Alfanumerico da 50 | Alternativo a NOMINATIVO_RICHIEDENTE |
| NOME_RICHIEDENTE | Alfanumerico da 50 | Alternativo a NOMINATIVO_RICHIEDENTE |
| CF_PIVA_RICHIEDENTE | Alfanumerico da 16 | Massimo 16 caratteri per ogni codice; può contenere più valori separati - Vedi specifiche |
| OGGETTO | Alfanumerico da 255 | |
| UBICAZIONE | Alfanumerico da 80 | Vedi specifiche |
| N_CIVICO | Alfanumerico da 10 | |
| SEZ | Alfanumerico da 3 | |
| FOGLIO | Alfanumerico da 4 | |
| MAPPALE | Alfanumerico da 5 | |
| SUB | Alfanumerico da 3 | |
| DATI_CATASTALI | | **Alternativa alle singole colonne dei dati catastali**, viene analizzata secondo sintassi di caratteri separatori - Vedi specifiche |
| CODICE_PROCEDURA | Alfanumerico da 30 | Da usare per la [Posizione Edificio] chiamato anche [Codice edificio] |
| NUMERO_PROVVEDIMENTO | Numerico da 7 | |
| DATA_PROVVEDIMENTO | gg/mm/aaaa | |
| NOMINATIVO_PROGETTISTA | Alfanumerico da 80 | |
| CF_PIVA_PROGETTISTA | Alfanumerico da 16 | |
| IMPRESA_ESECUTRICE | Alfanumerico da 80 | |
| CF_PIVA_IMPRESA_ESECUTRICE | Alfanumerico da 16 | |
| DATA_INIZIO_LAVORI | gg/mm/aaaa | |
| DATA_FINE_LAVORI | gg/mm/aaaa | |
| DATA_AGIBILITA | gg/mm/aaaa | |
| STATO_PRATICA | Alfanumerico da 60 | |
| NOTE | Alfanumerico da 500 | |
| CODICE_PROCEDIMENTO | Alfanumerico da 6 | **Obbligatorio in alternativa a TIPO_PRATICA** (modalità *Una riga di Excel per pratica*) - **Palitalsoft**: deve corrispondere a un procedimento esistente |
| CODICE_ENDOPROCEDIMENTO | Alfanumerico da 6 | Palitalsoft: deve corrispondere a un procedimento esistente |
| CODICE_EVENTO | Alfanumerico da 6 | Palitalsoft: deve corrispondere a un evento del CODICE_PROCEDIMENTO indicato |
| NOME_ALLEGATO | | **Obbligatorio** se si crea una riga per ogni allegato della pratica |
| DESCRIZIONE_ALLEGATO | Alfanumerico da 500 | |
| PATH | Percorso relativo della cartella con i file da allegare: Es. `1985-0521_pratica di test` | **Obbligatorio** se si crea una riga per ogni allegato della pratica. Il percorso deve esistere - Vedi specifiche |
| TIPO_PRATICA | Alfanumerico da 255 | **Obbligatorio in alternativa a CODICE_PROCEDIMENTO** (modalità *Una riga di Excel per pratica*). Esempio: Permesso di Costruire; SCIA; Abitabilità, ecc. |
| COLONNE_AGGIUNTIVE | Alfanumerico | Vedi specifiche |

## Specifiche dei campi

Il programma di importazione riconosce se la pratica (riga) che si sta per importare esiste già nel gestionale CWOL - Palitalsoft e consente quindi di integrare nuovi dati alle pratiche già esistenti. Questa caratteristica risulta particolarmente utile per importare allegati per pratiche già esistenti.

Per poter riconoscere le pratiche in modo univoco, è necessario valorizzare le prime tre colonne (**ANNO**, **NUMERO** e **CODICE SPORTELLO**) che saranno confrontate con il numero pratica attualmente presente sui Fascicoli Elettronici già esistenti.

Esempio di un nostro numero pratica: **SUE/154/2010**.

- **SUE** = sigla che deriva dal CODICE_SPORTELLO (assegnazione fatta da Palitalsoft)
- **154** = NUMERO_PRATICA
- **2010** = ANNO_PRATICA

Questa combinazione di dati risulta quindi fondamentale per riconoscere le pratiche e anche per crearle dal file Excel.

**Se si sceglie la modalità *Una riga Excel per allegato* è necessario ripetere NUMERO, ANNO e CODICE_SPORTELLO per ogni riga della stessa pratica.**

### NOMINATIVO_RICHIEDENTE e CF_PIVA_RICHIEDENTE

Questi due campi possono contenere più valori separati da un carattere separatore.

Il carattere separatore va indicato nel campo **NOMINATIVO_RICHIEDENTE** della maschera di importazione: se non viene indicato, tutto il contenuto della cella viene importato come **un'unica anagrafica**.

Alcuni esempi utilizzando il carattere separatore `#@` (a sinistra il contenuto delle celle Excel, a destra le anagrafiche che verranno create):

| NOMINATIVO_RICHIEDENTE | CF_PIVA_RICHIEDENTE | Anagrafiche create |
|---|---|---|
| ROSSI MARIO#@ROSSI LUIGI | RSSMRA12A34B567C | ROSSI MARIO - RSSMRA12A34B567C<br>ROSSI LUIGI - (*nessun codice*)<br>**Solo la prima** ha il codice fiscale / P.IVA |
| ROSSI MARIO#@ROSSI LUIGI | #@RSSLGU98A76B543C | ROSSI MARIO - (*nessun codice*)<br>ROSSI LUIGI - RSSLGU98A76B543C<br>**Solo la seconda** ha il codice fiscale / P.IVA |
| ROSSI MARIO#@ROSSI LUIGI | RSSMRA12A34B567C#@RSSLGU98A76B543C | ROSSI MARIO - RSSMRA12A34B567C<br>ROSSI LUIGI - RSSLGU98A76B543C<br>**Entrambe** hanno il codice fiscale / P.IVA |

Per il NOMINATIVO_RICHIEDENTE è opportuno adottare un metodo omogeneo di inserimento dati (sempre "COGNOME NOME" o sempre "NOME COGNOME").

Il carattere separatore (negli esempi `#@`) è a libera scelta dell'operatore che compila il file Excel e deve essere lo stesso per tutte le righe della colonna NOMINATIVO_RICHIEDENTE.

**ATTENZIONE:**

- **NOMINATIVO_RICHIEDENTE: ampiezza massima 255 caratteri per l'intera cella, spazi e caratteri separatori inclusi** (non 255 per ogni nominativo).
- **CF_PIVA_RICHIEDENTE: massimo 16 caratteri per ogni singolo codice** (il controllo viene fatto dopo la separazione).

### UBICAZIONE

La colonna "UBICAZIONE" può contenere anche il numero civico, che va preceduto da un carattere separatore.

Esempio utilizzando la virgola "," come carattere separatore, ad esempio:

- **VIA ROMA, 15/A**
  - Area di circolazione: VIA ROMA
  - Civico: 15/A
- **VIA TORINO, 2**
  - Area di circolazione: VIA TORINO
  - Civico: 2
- **VIA MILANO 5**
  - Area di circolazione: VIA MILANO 5
  - Civico: *(vuoto)*
  - Il numero civico non viene riportato in quanto il 5 viene associato come parte dell'area di circolazione

E' possibile in alternativa riportare il civico nell'apposita colonna **N_CIVICO**.

### DATI_CATASTALI

Nella colonna "DATI_CATASTALI" è necessario effettuare due operazioni:

- Identificare le informazioni (ad esempio distinguere tra foglio e mappale);
- Separare i valori dello stesso tipo

Tramite la configurazione di determinati caratteri, è possibile riconoscere le sintassi utilizzate e sistemare il dato di conseguenza, ad esempio inserendo come caratteri separatori/identificativi:

- **SEZ**: Carattere identificativo tra sezioni
- **FGL**: Carattere identificativo tra fogli
- **MAP**: Carattere identificativo delle particelle
- **SUB**: Carattere identificativo dei sub
- **,**: Carattere separatore tra particelle
- **-**: Carattere separatore tra sub
- **e**: Carattere separatore di sub tra diversi mappali

**Esempio 1: Unico foglio, unico mappale e più sub appartenenti allo stesso mappale**

`FGL 10 MAP 15 SUB 1,2,14,16`

- Foglio 10 Particella 15 Sub 1
- Foglio 10 Particella 15 Sub 2
- Foglio 10 Particella 15 Sub 14
- Foglio 10 Particella 15 Sub 16

**Esempio 2: Unico foglio, più mappali e sub appartenenti a più mappali**

`FGL 10 MAP 15,16, 270 SUB 1-2 e e 3`

- Foglio 10 Particella 15 Sub 1
- Foglio 10 Particella 15 Sub 2
- Foglio 10 Particella 16
- Foglio 10 Particella 270 Sub 3

**ATTENZIONE: Non è possibile utilizzare dati catastali che appartengono a più fogli.**

### PATH

La colonna "PATH" di ogni riga deve contenere il nome della "cartella" contenente i file allegati che fanno riferimento alla pratica di quella riga.

Il PATH di ogni riga viene concatenato al PATH specificato nel form di importazione. **Esempio in cui i files risultano posizionati nella directory `C:\nuovi-allegati\2010-14`:**

- PATH nel form: `C:\nuovi-allegati`
- PATH nella colonna del file Excel: `2010-14`

**Utilizzando la modalità *Una riga per allegato* è necessario valorizzare anche la colonna NOME_ALLEGATO.**

Se all'interno del PATH di colonna (ad esempio `[2010-14]`) si mettono altre cartelle con al loro interno altri file, l'importazione crea nel fascicolo elettronico dei "passi" che hanno come descrizione il nome delle sotto cartelle e carica i files al loro interno (Fig. 1).

[Fig. 1 - Struttura di cartelle nel file explorer: cartella principale "2010-14" contenente sottocartelle "1" e "1_Rossini Ezio", con file PDF (600041_010_rel5_ED_AG.pdf, ASSEVERAZIONE_SCIA_ED_AG.pdf, FI_20231013_CAMERANO.pdf) all'interno della sottocartella "1_Rossini Ezio"]

Si avranno 2 passi (con i file che si avranno dentro ogni cartella, **senza visibilità di pubblicazione**):

1. `1`
2. `1_Rossini Ezio`

I 3 file (pdf) si troveranno recuperati nella tab [Allegati] come allegati generali **con la visibilità di pubblicazione, sì**.

### COLONNE_AGGIUNTIVE

È possibile aggiungere ulteriori colonne per dati non codificati alla destra di quelle esistenti.

Il nome della colonna deve essere in **MAIUSCOLO** e **senza_spazi** (come tutte le altre colonne).

Le informazioni mappate in questo modo si potranno consultare nella tab **[Dati aggiuntivi]** di ogni pratica recuperata se si usa la modalità *Una riga di Excel per pratica* o nelle **Note** degli allegati importati se si usa la modalità *Una riga di Excel per allegato*.

## Esporta

Il comando **[Esporta]** nella form del programma di importazione estrae i dati (pratiche) esistenti, dopo aver indicato un offset in base all'anno che si può indicare. Il file excel prodotto ha già le colonne previste per un eventuale importazione con il grande vantaggio che le pratiche saranno riconosciute più facilmente e il lavoro necessario da fare sarà quello di valorizzare la colonna **[PATH]** per importare le scansioni.