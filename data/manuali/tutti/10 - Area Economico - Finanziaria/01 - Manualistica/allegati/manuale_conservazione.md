# Manuale Conservazione Sostitutiva Fatture Elettroniche e RUF

## 1. Release Cityware - Requisiti

### Premessa

In questo documento saranno illustrate le attività che riguardano la conservazione sostitutiva.

### Verifiche preliminari

Assicurarsi che l'Ente abbia:

- Aggiornamenti di Cityware (6.12)
- Aggiornamento SmartAgent (almeno rel. del 20.07.2016)
- Alfcity (almeno 1.2)
- Creazione indice documenti ciclo passivo

## 2. Stampa RUF Giornaliero o Annuale

### Stampa RUF

Per la conservazione presso il ParER è necessaria solo la stampa del RUF annuale, per la Regione Marche stampare sia il RUF giornaliero che il RUF annuale.

IMPORTANTE: Per produrre il RUF annuale è obbligatorio stampare prima il RUF giornaliero perché solo la stampa del RUF giornaliero assegno il numero di riga.

Per produrre la stampa del RUF è obbligatorio compilare la tabella con i dati del Provider per la conservazione.

[Immagine: videata del menu "Uscite" di City Finanziaria con percorso Adempimenti DL 66/2014 > Stampe > Stampa Registro Unico Fatture (R.U.F.)]

La stampa del RUF periodico definitiva valorizza il numero di riga con le modalità precedentemente descritte e il numero assegnato ad ogni fattura sul registro viene riportato su ogni singola fattura nel campo riga RUF (1) (Tabella FES_DOCTES).

Questo valore, con l'opzione aggiornamento metadati sull'archivio corrente, viene riportato su alfresco e inviato in conservazione, quindi l'operazione va eseguita obbligatoriamente prima di procedere a predisporre gli archivi per la conservazione.

[Immagine: videata "CITY-FINANCING Stampa Registro Unico Fatture (R.U.F.)" con campi Data Registrazione, Parte, Tipo Stampa (Provvisoria/Definitiva), Invia in conservazione, Tipo Modello (Periodica/Annuale), tabella tipi documento con causali e parametri di stampa]

### Aggiornamento metadati

La procedura di aggiornamento metadati va eseguita per tutte le unità documentaria che devono essere inviate in conservazione e consente di aggiornare sia i dati dell'archivio gestionale sull'archivio corrente (Alfresco) che i riferimenti dell'unità documentarie concordati tra l'ente e il conservatore.

Quindi va eseguita per:

- Fattura Attiva
- Fattura Passiva

#### Aggiornamento metadati Fattura Passiva

Di seguito un esempio di come andrebbe compilata la videata per la Fattura Passiva.

Attenzione la sigla Tipo Registro deve essere fornita dall'ente in base agli accordi con il conservatore.

Di seguito l'esempio della videata.

[Immagine: videata "CITY-FINANCING Aggiorna Metadati Documenti Ciclo Passivo" con Data Acquisizione flussi, Aggiorna Dati Fiscali, Estremi Unità Documentaria (Sigla TIPO REGISTRO = RUF.PROTO, Modo valorizzazione numero U.D.), Riferimento contabile (Anno e Numero Impegno / Codice Capitolo / Piano Finanziario), Altri metadati (Aggiorna Estremi Ruf, IVA, CIG, CUP)]

#### Aggiornamento metadati Fattura Attiva

Di seguito un esempio di come andrebbe compilata la videata per la Fattura Attiva.

Nella voce Modo Valorizzazione tipo registro si seleziona le modalità con cui si vuole numerare la documentazione da versare:

- Codice settore + codice registro: stringa composta dal codice del settore a cui fa riferimento la fattura e il codice registro iva in cui è registrata.
- Numeratore per protocollo iva: in base alla numerazione con il protocollo iva
- Sigla fissa: nei casi in cui si utilizza un unico settore iva

Attenzione la sigla Tipo Registro deve essere fornita dall'ente in base agli accordi con il conservatore.

Di seguito l'esempio della videata.

[Immagine: videata "CITY-FINANCING Aggiorna Metadati Documenti Ciclo Attivo" con Data Registrazione, Aggiorna Dati Fiscali, Estremi Unità Documentaria (Aggiorna ID unità documentaria, Modo Valorizzazione tipo registro con menu a tendina: 0 = non specificata, 1 = Codice settore + codice registro (formato xxx), 2 = Numeratore per protocollo iva (da causale documento), 3 = Sigla fissa (solo se gestito settore iva unico)), Sigla TIPO REGISTRO, Altri metadati (Aggiorna Esterni IVA)]

## 3. Versamento Fatture

Mediante la funzione disponibile nel menù "Funzioni di servizio" del Modulo Base.

[Immagine: videata del menu "Funzioni di servizio" di Citybase con voce "Riversamento massivo documenti" evidenziata]

[Immagine: videata "Riversamento massivo documenti" con campi Tipo documento, Data fine elaborazione, opzioni Invio / Simulazione Invio, pulsante "Effettua riversamento"]

Selezionare il Tipo documento che si vuole inviare in conservazione.

Inserire la data fine del periodo di riferimento.

### Esito invii

ESITO: POSITIVO

ESITO: WARNING (con avviso riportato)

ESITO: NEGATIVO (con errore riportato)

Nella cartella 'Stampe' di Cityware si creerà una cartella 'excelconservazione' con all'interno un file excel con gli esiti dell'invio effettuato in conservazione.

Nell'invio viene prodotto un foglio excel con l'esito.

Su tale foglio occorre obbligatoriamente verificare l'Esito su ogni singola riga.

Si potrebbero verificare 3 situazioni:

- **OK** = si può versare
- **OK con WARNING** (il documento verrebbe comunque versato ma con dei Metadati che seppur non obbligatori sarebbero mancanti). Situazione da evitare anche perché al momento non esite nessuna possibilità di aggiornare il doccumento inviato in conservazione
- **KO** con errori bloccanti (il documento non sarebbe comunque inviato in conservazione)

#### Esempio di excel

[Immagine: foglio Excel con colonne ANNO, PROGRESS, Versione, ID, Numero Prot, Data Prot, Numero, Data Emissione, Denominazione, Tipo, Identificativi, Tipo Modello, Oggetto, Importo, ESITO (con valori "OK con warning"), Dati Specifici, Fattura Passiva, Numero RUF (con note "non valorizzato, ma...")]

#### Esempio di videata

[Immagine: videata "Risultati versamento" con colonne Data, Esito, Descrizione del documento inviato e relativo esito (OK / KO con warning)]