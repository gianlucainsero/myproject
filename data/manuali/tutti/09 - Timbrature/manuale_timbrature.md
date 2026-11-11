# Manuale Gestione Timbrature

**Software:** Cityware CWOL - modulo Paghe → Timbrature

---

## 1. Introduzione

Questa guida descrive il modulo Timbrature di Cityware (percorso Paghe → Timbrature), ad uso di chi in ufficio del personale gestisce presenze, assenze, cartellini mensili e le richieste dei dipendenti. Copre le anagrafiche di base, il ciclo di lavoro mensile, le stampe e le funzioni di configurazione, nell'ordine in cui normalmente si usano.

Il modulo tiene insieme tre cose che in un ufficio del personale viaggiano spesso separate: gli orari contrattuali di ciascun dipendente (i profili orari), i codici che classificano ogni evento di presenza o assenza (le causali) e i dati che arrivano dai terminali di rilevazione o dalle timbrature. Il lavoro dell'operatore consiste soprattutto nel far quadrare questi tre elementi ogni mese, prima di stampare il cartellino in via definitiva.

> **Chi può fare cosa**
> Alcune funzioni (ad esempio Controllo Timbrature) sono abilitate solo per profili utente specifici: chi non ne ha diritto non riesce ad accedervi. Se una voce di menu risulta bloccata, il primo passo è verificare i permessi con l'amministratore di sistema, non presumere un guasto.

---

## 2. Accesso e struttura del modulo

**Menu principale → Paghe → Timbrature**

Il modulo si apre dal Menu principale di Cityware selezionando il riquadro Paghe e poi Timbrature. Da qui la barra del percorso in alto mostra sempre dove ci si trova, ed è cliccabile per risalire di livello in qualunque momento.

*(Barra dei menu del modulo Timbrature)*

All'interno di Timbrature i sottomenu sono organizzati per funzione, non per frequenza d'uso: le anagrafiche di base stanno sotto Anagrafiche, il lavoro di tutti i giorni sotto Gestione Mensile, le funzioni tecniche e le operazioni delicate (cancellazioni, sblocchi) sotto Funzioni, e la configurazione generale sotto Parametri. Questa guida segue lo stesso ordine, con un'attenzione in più al flusso di lavoro mensile, che attraversa più sottomenu.

*(Struttura completa dei sottomenu di Timbrature)*

- **Anagrafiche:** Dipendenti, causali, festività, profili orari e le altre tabelle di base.
- **Gestione Mensile:** Il cuore operativo: elaborazione, correzione e stampa dei cartellini.
- **Buoni Pasto:** Assegnazione e stampa dei buoni pasto legati alle presenze.
- **Legge Trasparenza:** Report per gli obblighi di pubblicazione per area, centro di costo o dipendente.
- **Grafici:** Rappresentazione grafica della distribuzione delle causali.
- **Funzioni:** Import da orologi marcatempo, cancellazioni, sblocco cartellini, calendario.
- **Storico:** Consultazione dei dati storici, tra cui lo storico causali per dipendente.
- **Servizi Web:** Le stesse informazioni viste dal dipendente e dal responsabile via web.
- **Parametri:** Configurazione generale: notifiche, soglie, visibilità dei cartellini.
- **Utilità:** Responsabili, sostituti, calcoli di controllo, invio anomalie.

---

## 3. Anagrafiche

**Paghe → Timbrature → Anagrafiche**

Le anagrafiche sono le tabelle che tutto il resto del modulo interroga: chi è il dipendente, quale causale usare per un'assenza, quale orario dovrebbe rispettare in un dato giorno. Vale la pena tenerle in ordine prima di iniziare a elaborare un mese: un profilo orario mal configurato o una causale mancante si ripercuote su ogni cartellino che la usa. Il sottomenu comprende 15 voci; questo capitolo le descrive tutte, nell'ordine in cui compaiono nel menu.

*(Sottomenu Anagrafiche)*

### 3.1. Dati Ente

**Anagrafiche → Dati Ente**

Raccoglie i dati identificativi dell'ente (denominazione, codice fiscale/partita IVA, indirizzo, codice catastale, dati del legale rappresentante e del responsabile del servizio) che il modulo riutilizza automaticamente in intestazione delle stampe ufficiali: cartellino, Legge Trasparenza, comunicazioni INAIL. È una scheda singola, non un elenco: si apre direttamente in modifica.

*(Scheda Dati Ente)*

> **Verificare a inizio collaborazione**
> Questi dati vanno controllati una volta all'attivazione del modulo e ogni volta che cambiano gli estremi anagrafici dell'ente o il nominativo del responsabile: un valore errato qui si ripercuote silenziosamente su tutte le stampe ufficiali che lo richiamano.

### 3.2. Centri di Costo

**Anagrafiche → Centri di Costo**

Definisce la suddivisione organizzativa dell'ente (settori, aree, uffici) usata come filtro in quasi tutte le maschere di ricerca e di stampa del modulo, oltre che come criterio di raggruppamento nei riepiloghi. Ogni dipendente in anagrafica (par. 3.3) viene associato a un centro di costo.

*(Elenco Centri di Costo)*

| Colonna | Contenuto |
| --- | --- |
| Codice · Descrizione | Identificativo del centro di costo e relativa etichetta. |

La toolbar della griglia mette a disposizione le funzioni standard di gestione elenco (inserimento nuova riga, modifica, eliminazione, esportazione in Excel, stampa, aggiornamento e scelta colonne visibili), comuni alla maggior parte degli elenchi di anagrafica descritti in questo capitolo. Il doppio click su una riga apre la scheda di dettaglio, ridotta ai soli due campi Codice e Descrizione.

*(Dettaglio di un Centro di Costo)*

### 3.3. Dipendenti

**Anagrafiche → Dipendenti**

La scheda di ricerca permette di trovare un dipendente per codice, nominativo, numero badge o responsabile. Confermando una ricerca vuota con F4 Elenca si ottiene l'elenco completo, ordinabile per ciascuna colonna.

*(Scheda di ricerca Dipendenti)*

| Colonna | Contenuto |
| --- | --- |
| Timbra | Indica se il dipendente è soggetto a rilevazione presenze (Sì/No). |
| Codice · Cognome · Nome | Identificativo interno e anagrafica. |
| Badge | Codice del badge o del transponder associato al terminale di rilevazione. |
| Turno | Codice del turno di riferimento, quando il dipendente segue una turnazione anziché un orario fisso. |
| Profilo | Il profilo orario assegnato (si veda par. 3.8 Profili Orari). |
| Gg Lav. | Giorni lavorativi settimanali previsti da contratto. |
| Compensaz. | Tabella di compensazione oraria/economica applicata in stampa cartellino (si veda par. 3.10 Compensazioni). |
| Ore Mensili | Monte ore mensile contrattuale, quando previsto (es. part-time). |
| Tipo Contratto | Es. tempo indeterminato, tempo determinato. |

*(Elenco Dipendenti)*

Il doppio click su una riga dell'elenco apre la scheda di dettaglio del dipendente — la vera anagrafica, con dati anagrafici completi, dati contrattuali, storico delle richieste, dotazioni/abilitazioni e parametri turno. È l'anagrafica più consultata dell'intero modulo, perché ogni altra funzione — dall'elaborazione mensile alle stampe — parte dal codice dipendente. La scheda si apre sulla scheda Dati Principali ed è organizzata in quattro sotto-schede (tab): Dati Principali, Elenco Richieste, Altri dati, Dati per turni.

La testata, comune a tutte e quattro le schede, riporta i dati identificativi essenziali del dipendente:

| Campo | Descrizione |
| --- | --- |
| Codice | Identificativo numerico univoco del dipendente, riutilizzato in tutte le altre funzioni del modulo (elaborazione mensile, stampe, servizi web). |
| Cognome · Nome | Anagrafica del dipendente (campi obbligatori, contrassegnati da asterisco). |
| Tipo Contratto | Es. Tempo Indeterminato, Tempo Determinato: incide sulle regole contrattuali applicate in elaborazione. |
| Codice Fiscale | Codice fiscale del dipendente, con pulsante Calcola per ricavarlo automaticamente da cognome, nome, sesso, data e comune di nascita già inseriti. |
| Invisibile | Casella di controllo che, se attivata, esclude il dipendente dalle ricerche e dagli elenchi standard pur mantenendone i dati in anagrafica — utile per posizioni cessate o casi particolari che non devono comparire nell'operatività quotidiana. |

La scheda Dati Principali si apre sulla sezione Dati Anagrafici (i dati della persona) e prosegue con la sezione Dati Generali (i parametri contrattuali e operativi che governano l'elaborazione delle timbrature del dipendente):

*(Dettaglio Dipendente — scheda Dati Principali)*

| Campo (Dati Anagrafici) | Descrizione |
| --- | --- |
| Comune Nascita · Provincia Nascita · Data Nascita | Luogo e data di nascita, usati anche dal pulsante Calcola della testata per determinare il codice fiscale. |
| Indirizzo · Comune · Provincia · Cap | Indirizzo di residenza del dipendente. |
| Telefono | Recapito telefonico. |
| Sesso | M oppure F, concorre anch'esso al calcolo del codice fiscale. |

| Campo (Dati Generali) | Descrizione |
| --- | --- |
| Conto Annuale | Posizione economica/profilo di accesso ai fini del Conto Annuale della spesa di personale (es. «POSIZ. ECON. D4 - PROFILI ACCESSO D1»). |
| Matricola | Numero di matricola interno del dipendente, spesso coincidente con il Codice. |
| Badge | Codice del badge/transponder attualmente assegnato; il pulsante Storico Badge apre l'elenco dei badge assegnati in precedenza, ad es. in caso di sostituzione. |
| Codice nelle Paghe | Codice di collegamento con l'anagrafica della procedura Paghe: è il valore richiesto, ad esempio, dalla consultazione Emolumenti nei Servizi Web (par. 10.2). |
| Comune Prov. | Campo di collegamento anagrafico comune/provincia per integrazioni particolari; nell'esempio non è valorizzato. |
| Timbra | Sì/No: ripete a livello di scheda l'indicatore già visto nella colonna omonima dell'Elenco Dipendenti. |

| Campo (Dati Anagrafici) | Descrizione |
| --- | --- |
| Data Assunzione · Data cessazione | Estremi temporali del rapporto di lavoro; Data cessazione resta vuota per il personale in servizio. |
| Qualifica | Qualifica professionale/contrattuale del dipendente, in campo libero. |
| Tipologia Turno | Normale quando il dipendente segue un profilo orario fisso (par. 3.8); diversamente indica che il dipendente è gestito a turni. |
| Codice Turno · Storico Turno | Codice del Turno Variabile (par. 3.9) assegnato quando la Tipologia Turno lo prevede, con relativa descrizione a fianco; Storico Turno apre l'elenco delle assegnazioni precedenti. |
| Flessibilità | Tabella di flessibilità oraria (par. 3.7) applicata alle timbrature di questo dipendente. |
| Timbratura | Modalità di timbratura del dipendente (es. Normale). |
| Giorni Lavorativi | Numero di giorni lavorativi settimanali e caselle Lu-Do che indicano quali giorni della settimana sono considerati lavorativi per il dipendente. |
| Legge 104 Personale | Indicatori dei permessi Legge 104 (Famigliare, Figlio) e Codice Fiscale del familiare assistito (C.F. Per 104), quando applicabili. |
| Centro di Costo | Centro di costo di appartenenza (par. 3.2), con codice e descrizione. |
| Compensazioni | Tabella di compensazione applicata in stampa cartellino (par. 3.10). |
| Ore per Divisore | Valore orario (ore e minuti) usato come divisore nei calcoli di conversione, ad esempio per ricavare il valore orario da un importo mensile. |
| Ore Mensili · Ore Settimanali · Ore Giornaliere | Monte ore contrattuale ai tre livelli, tipicamente valorizzato per il personale part-time. |
| Causale x Diff.Sup. · Causale x Diff.Inf. | Causali applicate automaticamente rispettivamente alle eccedenze (differenza superiore) e ai difetti (differenza inferiore) rispetto all'orario dovuto. |
| Servizio | Servizio di appartenenza (par. 3.12), come raggruppamento alternativo/complementare al Centro di Costo. |
| Causale Fissa | Causale applicata automaticamente indipendentemente dalle timbrature rilevate, ad es. per personale non soggetto a rilevazione presenze. |
| Buoni Pasto | Sì/No: se il dipendente matura il diritto ai buoni pasto. |
| Email | Indirizzo di posta elettronica del dipendente, usato per notifiche e comunicazioni. |
| Orologi abilitati | Elenco dei codici degli Orologi (par. 3.11) sui quali il dipendente è abilitato a timbrare. |
| Codice Reperibilita | Codice del turno di Reperibilità (par. 3.13) assegnato al dipendente. |
| Codice Fiscale ASL | Codice fiscale utilizzato nelle comunicazioni con l'ASL/Servizio Sanitario, quando diverso da quello anagrafico principale. |
| Timbrature Fest. | Casella che abilita la rilevazione delle timbrature del dipendente anche nei giorni festivi. |

La colonna comandi a destra della scheda mette a disposizione F6-Aggiorna, F3-Altra Ricerca, F12-Causali Fisse, Cambia Causali, F7-Cancella e Carica Note.

La scheda Elenco Richieste riporta lo storico delle richieste di autorizzazione presentate dal dipendente stesso (tipicamente via web, si veda par. 10.1):

*(Dettaglio Dipendente — scheda Elenco Richieste)*

| Colonna | Descrizione |
| --- | --- |
| N. Richiesta | Numero progressivo univoco della richiesta. |
| Data Registrazione · Ora Registrazione | Data e ora in cui la richiesta è stata inoltrata (tipicamente dal dipendente, via Servizi Web). |
| Dal Periodo · Al Periodo | Intervallo di date a cui la richiesta si riferisce (coincidenti per una richiesta di un solo giorno). |
| Da Ora · A Ora | Fascia oraria della richiesta; 00:00-00:00 quando la richiesta riguarda l'intera giornata anziché una fascia specifica. |
| Causale | Causale oggetto della richiesta, ad es. FERIE o TIMBRATURA MANUALE. |
| Stato della richiesta | Accettata, In attesa o Respinta. |
| Data elaborazione · Ora elaborazione | Quando la richiesta è stata evasa (accettata o respinta) da chi la gestisce. |

La scheda Altri dati raccoglie, in quattro ulteriori sotto-schede, informazioni accessorie sul dipendente: Dotazioni, Abilitazioni, Scheda Personale ed Extra. La sotto-scheda Dotazioni, la più ricca, gestisce annotazioni libere e la dotazione di vestiario/materiali del dipendente:

*(Dettaglio Dipendente — scheda Altri dati (sotto-scheda Dotazioni))*

| Campo | Descrizione |
| --- | --- |
| Note · Note Tesserino | Due editor di testo formattato per annotazioni libere, rispettivamente generali sul dipendente e specifiche sul tesserino di riconoscimento. |
| N° Patente · Data rilascio · Data scadenza | Estremi della patente di guida, per il personale che utilizza mezzi dell'ente. |
| Note Vestiario | Editor di testo formattato per annotazioni libere sul vestiario in dotazione. |
| Radio · Numero Scarpa · Taglia Camicia/Pantaloni/Maglione/Giacca/Guanti/Cappello | Matricola dell'apparato radio assegnato e taglie di vestiario, utili ai servizi che gestiscono la fornitura di divise (es. Polizia Locale, personale operaio). |
| Arma · Mat. Arma · N Decreto | Estremi dell'arma eventualmente in dotazione (matricola e decreto di autorizzazione), per il personale abilitato a portarla (tipicamente Polizia Locale). |

| Campo | Descrizione |
| --- | --- |
| Gruppo Sanguigno | Gruppo sanguigno del dipendente, annotato a scopo di sicurezza sul lavoro. |
| Tipo · Codice Dotazione · griglia Codice/Vestiario/Quantità | Riquadro per assegnare articoli di vestiario o materiali al dipendente: si seleziona il Tipo e il Codice Dotazione, e la griglia sottostante riepiloga gli articoli già consegnati con la relativa quantità. |

La sotto-scheda Abilitazioni elenca eventuali abilitazioni particolari associate al dipendente tramite una griglia Codice / Descrizione; nella configurazione osservata la griglia risulta vuota, pronta per essere valorizzata dall'operatore quando l'ente utilizza questa funzionalità.

La sotto-scheda Scheda Personale mette a disposizione un'area di testo libero (editor) in cui annotare informazioni aggiuntive sul dipendente non codificabili altrove: note, comunicazioni interne, promemoria legati alla posizione lavorativa.

La sotto-scheda Extra riporta invece una tabella che consente di associare al dipendente eventuali causali extra con i relativi limiti orari e il valore economico:

| Campo | Descrizione |
| --- | --- |
| Causale | Codice della causale extra associata al dipendente. |
| Descrizione | Descrizione testuale della causale extra. |
| Orario Minimo | Limite orario minimo previsto per la causale. |
| Orario Massimo | Limite orario massimo previsto per la causale. |
| Valore | Valore economico o parametrico associato alla causale extra. |

*(Dettaglio Dipendente — scheda Altri dati (sotto-scheda Extra))*

La scheda Dati per turni definisce come il dipendente si inserisce in una turnazione, in alternativa al profilo orario fisso: Tipo Turno, Tipo Ora, Data Partenza, il Settore e il Turno Variabile (par. 3.9) di riferimento, il campo Mai con (per escludere abbinamenti), Sequenza Dipendente e Squadra (par. 3.14) di appartenenza, con tre ulteriori sotto-schede — Turni Ordinari, Turni Sequenziali, Turni Particolari — per la matrice dei turni assegnati.

*(Dettaglio Dipendente — scheda Dati per turni)*

La griglia della scheda Dati per turni riporta, per ciascun turno configurabile, le seguenti colonne:

| Colonna | Descrizione |
| --- | --- |
| Attivo | Flag che indica se il turno è attivo per il dipendente. |
| Sequenza | Ordine di priorità con cui il turno viene proposto/applicato. |
| Cod.T. | Codice del turno. |
| Descrizione | Descrizione testuale del turno. |
| Lun…Dom | Colonne, una per ciascun giorno della settimana, che indicano su quali giorni il turno è applicabile. |
| N.gg tra 2 Turni | Numero minimo di giorni da rispettare tra due turni dello stesso tipo. |
| N.gg con T.Prec | Numero di giorni di vincolo rispetto al turno precedente. |
| N.gg con Altro gruppo | Numero di giorni di vincolo rispetto a turni di un gruppo diverso. |
| Pref. | Eventuale preferenza assegnata al turno. |
| Ultima Data | Data dell'ultima applicazione del turno al dipendente. |
| Num. | Contatore/numero progressivo di applicazioni del turno. |

Questi dati permettono di tenere traccia della rotazione dei turni assegnati al dipendente e dei vincoli di distanza tra un turno e l'altro, così da supportare una pianificazione corretta ed equilibrata.

### 3.4. Stampa Dipendenti

**Anagrafiche → Stampa Dipendenti**

Produce l'elenco anagrafico dei dipendenti in stampa, con gli stessi filtri disponibili nella ricerca di Dipendenti (centro di costo, servizio, stato) più le opzioni di formato e ordinamento della stampa. È utile come base per verifiche di organico o per condividere l'elenco del personale con altri uffici, senza dover aprire la maschera di gestione.

*(Maschera Stampa Dipendenti)*

### 3.5. Festività

**Anagrafiche → Festività**

La tabella festività associa a ciascuna data fissa dell'anno (giorno e mese, senza l'anno: si ripete automaticamente) una causale — tipicamente quella generale FESTIVITÀ — più eventuali festività locali come il santo patrono. Va verificata a inizio anno e ogni volta che cambia il calendario delle festività locali dell'ente.

*(Elenco Festività)*

| Colonna | Significato |
| --- | --- |
| Causale | Codice applicato automaticamente in quella data. |
| Descrizione | Es. Festività, S. Patrono. |
| Giorno / Mese | Data ricorrente, senza indicazione dell'anno. |
| Orario | Se la festività copre solo una fascia oraria anziché l'intera giornata. |

### 3.6. Causali

**Anagrafiche → Causali**

La causale è il codice che qualifica ogni ora o giornata registrata: lavoro ordinario, straordinario, ferie, malattia, permesso, e così via. È l'elemento singolo più importante dell'intera anagrafica, perché guida sia il calcolo del cartellino sia — quando previsto — lo scarico verso la procedura paghe.

La ricerca propone codice, descrizione e gruppo, oltre a una sezione Ricerca Particolare con filtri mirati: Causale di Retribuzione, Causale di Straordinario, Segnala in Visualizzazione, Causale di richiesta autorizzazioni (Web), Causale di Assenza. Confermando la ricerca viene chiesto se includere anche le causali Bloccate (disattivate ma non eliminate, per non perdere lo storico) — di norma conviene restringere a Non Bloccate per operare, e usare Tutte solo quando si cerca qualcosa nello storico.

*(Scheda di ricerca Causali)*

*(Richiesta di inclusione delle causali Bloccate)*

*(Elenco Causali)*

La scheda di dettaglio di una causale è ricca di parametri; i più rilevanti per l'uso quotidiano sono questi:

*(Dettaglio di una causale)*

| Campo | A cosa serve |
| --- | --- |
| Codice · Descrizione · Gruppo | Identificativo, etichetta leggibile e raggruppamento per famiglie di causali affini. |
| Causale di Retribuzione / di Straordinario / di Assenza | Qualificano la natura della causale ai fini del calcolo e degli obblighi (es. le assenze rilevano ai fini della Legge Trasparenza). |
| Rileva Festività e Domeniche | Se la causale, quando cade su un giorno festivo, va gestita in modo differenziato. |
| Causale in caso di Domenica / di Festività | Sostituzione automatica della causale nei giorni non lavorativi. |
| Massimale / Massimale mensile / annuale | Tetti orari oltre i quali la causale segnala un'anomalia (utile ad es. per i permessi a monte ore). |
| Segnala in Visualizzazione | Colore con cui la causale viene evidenziata nei prospetti (es. Rosso per richiamare l'attenzione). |

| Campo | A cosa serve |
| --- | --- |
| Causale di richiesta autorizzazioni (Web) | Rende la causale selezionabile dai dipendenti nelle richieste online (si veda par. 10.1), con tipo di richiesta e frequenza d'uso. |
| Causale con richiesta di Giustificativo | Obbliga a un giustificativo collegato prima che la causale sia considerata regolare. |
| Conferma da Responsabile Personale | Subordina l'accettazione della causale all'approvazione di un responsabile. |
| Stampare su carta | Se la causale compare nella stampa del cartellino cartaceo. |

> **Alcune causali sono di sistema**
> Nell'elenco compaiono causali tecniche riconoscibili dagli asterischi, ad es. ** ANOMALIA **, ** TIMBRATURA VIETATA **, ** NON AUTORIZZATO **: sono assegnate automaticamente dal sistema per segnalare situazioni da verificare, non vanno usate manualmente né eliminate.

### 3.7. Flessibilità

**Anagrafiche → Flessibilità**

Definisce tabelle di flessibilità oraria — combinazioni di minuti di anticipo/posticipo tollerati in entrata e in uscita — riutilizzabili da più profili orari (par. 3.8) senza doverle ridefinire ogni volta. Associare una tabella di flessibilità a un profilo evita che un ritardo entro la soglia configurata generi un'anomalia.

*(Elenco Flessibilità)*

| Colonna | Contenuto |
| --- | --- |
| Codice · Descrizione | Identificativo della tabella di flessibilità e relativa etichetta. |
| Minuti | Tolleranza espressa in minuti applicata al confronto tra timbratura reale e orario teorico. |

### 3.8. Profili Orari

**Anagrafiche → Profili Orari**

Il profilo orario è la «regola» che dice, per ciascun giorno della settimana, quali fasce orarie sono previste e con quale causale vanno lette le timbrature che cadono in ciascuna fascia. È l'anagrafica più delicata da editare perché un profilo condiviso da più dipendenti va cambiato con cautela: una modifica si applica a tutti gli assegnatari a partire dal ricalcolo successivo.

*(Elenco Profili orari)*

Aprendo un profilo si seleziona il giorno della settimana e si vede l'elenco delle fasce, ciascuna con:

*(Dettaglio delle fasce orarie di un profilo)*

| Campo | Descrizione |
| --- | --- |
| Da Ora · A Ora | Estremi della fascia oraria. |
| Aut. | Se le timbrature in questa fascia sono considerate autorizzate di default. |
| Esclusione | Esclude la fascia dal calcolo (es. pausa non retribuita). |
| Flessibilità | Tabella di flessibilità (par. 3.7) applicata alla fascia, in alternativa a un valore fisso. |
| Causali | Fino a due causali associabili alla fascia (es. lavoro ordinario in una, straordinario notturno nell'altra). |

Un profilo tipico spezza la giornata in più fasce consecutive — ad esempio notte, ingresso con tolleranza, orario ordinario, uscita con eventuale straordinario diurno, notte — ciascuna con la propria causale, così che un'unica sequenza di timbrature (entrata/uscita) generi automaticamente le causali corrette senza intervento manuale.

Nella parte superiore della maschera Profili Orari è disponibile una colonna di comandi rapidi che consente di operare sul profilo corrente:

| Comando | Funzione |
| --- | --- |
| F6 - Aggiorna | Salva le modifiche apportate al profilo orario corrente. |
| F7 - Cancella profilo | Elimina il profilo orario corrente. |
| F3 - Altra Ricerca | Avvia una nuova ricerca di un profilo orario tramite codice o descrizione. |
| Elenca codici liberi | Mostra i codici profilo non ancora utilizzati, disponibili per la creazione di un nuovo profilo. |
| Duplica Giorno Corrente | Copia la configurazione oraria del giorno selezionato sugli altri giorni della settimana, velocizzando l'impostazione di profili con orario uguale su più giornate. |
| Altri Dati | Apre una maschera di dettaglio con ulteriori configurazioni del profilo, descritta di seguito. |
| Blocca Profilo | Blocca il profilo orario impedendone la modifica accidentale. |

Il pulsante Altri Dati apre una finestra di dettaglio suddivisa in tre sotto-schede (Generali, Buoni Pasto, Turni) che raccolgono configurazioni aggiuntive del profilo orario, particolarmente utili per gli enti con esigenze specifiche di gestione della presenza:

*(Profili Orari — Altri Dati, sotto-scheda Generali)*

La sotto-scheda Generali raccoglie i parametri generali di funzionamento del profilo, quali eventuali arrotondamenti, tolleranze e opzioni di calcolo applicate a chi utilizza il profilo orario.

*(Profili Orari — Altri Dati, sotto-scheda Buoni Pasto)*

La sotto-scheda Buoni Pasto consente di definire le regole di maturazione del buono pasto per i dipendenti che utilizzano questo profilo orario (ad esempio l'orario minimo di presenza necessario per maturare il buono).

*(Profili Orari — Altri Dati, sotto-scheda Turni)*

La sotto-scheda Turni raccoglie le configurazioni aggiuntive relative alla gestione dei turni per il profilo orario, complementari a quanto impostato nella scheda Dati per turni della Anagrafica Dipendenti.

Queste configurazioni aggiuntive del profilo orario sono importanti per numerosi enti che gestiscono regole particolari di arrotondamento, buoni pasto o turnazione, e vanno impostate con attenzione insieme al referente dell'ente.

### 3.9. Turni Variabili

**Anagrafiche → Turni Variabili**

Mentre un profilo orario ripete lo stesso schema settimana dopo settimana, un turno variabile descrive una turnazione che cambia su base pianificata — ad esempio una rotazione mattina/pomeriggio/notte su più settimane, tipica di servizi continuativi (vigilanza, personale scolastico ausiliario, reperibilità operativa). La ricerca propone codice e descrizione del turno.

*(Scheda di ricerca Turni Variabili)*

*(Elenco Turni Variabili)*

Il doppio click su una riga apre il turno in modifica, sotto la testata Codice turno/Descrizione: la griglia di dettaglio definisce, per ciascuna riga (N°), fino a due movimenti — tipicamente un'uscita e un'entrata — ciascuno con la propria fascia oraria e il Profilo Orario (par. 3.8) da cui la fascia viene ripresa. È in pratica una sequenza di configurazioni analoghe a quelle di un profilo orario, ma che si alternano automaticamente ciclo dopo ciclo (una riga per ciclo) anziché restare fisse. Il turno viene poi richiamato dal campo Turno della scheda Dipendenti (par. 3.3, scheda Dati per turni) in alternativa al profilo orario.

*(Dettaglio di un Turno Variabile)*

| Colonna | Descrizione |
| --- | --- |
| N° | Numero progressivo della riga, cioè del ciclo del turno: ogni riga rappresenta un giorno/passaggio della rotazione. |
| Num. Tim. (1° movimento) · Entrata=0/Uscita=1 | Progressivo del primo movimento della riga e relativo indicatore, mostrato in chiaro come ENTRATA o USCITA. |
| Dalle Ore · Alle Ore (1° movimento) | Fascia oraria del primo movimento. |
| E/O | Stesso indicatore Entrata/Uscita del primo movimento, in forma sintetica (E oppure O). |

| Colonna | Descrizione |
| --- | --- |
| Num. Tim. (2° movimento) · Entrata=0/Uscita=1 · Dalle Ore · Alle Ore | Stessa struttura del primo movimento, per un eventuale secondo movimento nella stessa riga (le righe non usate riportano 0 e fasce 00:00-00:00). |
| Profilo Orario | Codice del Profilo Orario (par. 3.8) da cui la fascia della riga viene ripresa. |
| Descrizione | Etichetta libera della riga, spesso ripresa dalla descrizione del Profilo Orario collegato. |

### 3.10. Compensazioni

**Anagrafiche → Compensazioni**

Le tabelle di compensazione convertono ore o eccedenze in importi economici oppure in riposi compensativi, secondo regole configurabili per fasce (ad es. le prime ore di straordinario retribuite, le successive convertite in riposo). Vengono richiamate sia dalla scheda Dipendenti (campo Compensaz., par. 3.3) sia in fase di Stampa Cartellino (par. 4.8).

*(Scheda di ricerca Compensazioni)*

*(Elenco Compensazioni)*

| Colonna | Contenuto |
| --- | --- |
| Codice · Descrizione | Identificativo della tabella di compensazione. |
| Fasce/Scaglioni | Intervalli orari o soglie a cui è associato un trattamento differenziato (retribuzione, riposo, o combinazione dei due). |

Il doppio click su una riga apre la tabella in modifica: sotto la testata con Codice e Descrizione, una griglia elenca — in ordine (colonna Ordine) — le coppie Causale Assenza / Causale Straordinario che la tabella associa, cioè con quale causale di straordinario va compensata ciascuna causale di assenza incontrata.

*(Dettaglio di una tabella di Compensazioni)*

| Colonna | Descrizione |
| --- | --- |
| Ordine | Posizione della riga nella sequenza di verifica: le associazioni vengono valutate in quest'ordine. |
| Causale Assenza | Causale di assenza/anomalia da compensare (es. 069 - ORE MANCANTI, 013 - PERMESSI BREVI). |
| Causale Straordinario | Causale di straordinario con cui la relativa causale di assenza viene coperta (es. 106 - STR.AUTORIZZABILE, 118 - BANCA ORE ANNO PRECEDENTE). |

Una stessa Causale Assenza può comparire su più righe con Causale Straordinario diversa: la tabella di compensazione applica la prima corrispondenza utile scorrendo le righe nell'ordine indicato, così da poter prevedere criteri di compensazione differenziati (ad es. per fascia o per residuo disponibile) per la medesima assenza.

### 3.11. Orologi

**Anagrafiche → Orologi**

Anagrafica dei terminali di rilevazione presenze (marcatempo) fisicamente installati presso l'ente: ciascun orologio è identificato da un codice che le timbrature importate riportano, così da poter risalire al varco/terminale di origine in caso di verifica. È la tabella richiamata dalle funzioni di importazione dati (Leggi dati da scarico, par. 8.1, e Scarica Orologi, par. 8.3).

*(Scheda di ricerca Orologi)*

*(Elenco Orologi)*

| Colonna | Contenuto |
| --- | --- |
| Codice · Descrizione | Identificativo del terminale e relativa etichetta (es. ubicazione). |
| Indirizzo/Parametri di connessione | Dati tecnici per il collegamento al terminale, quando l'importazione avviene via rete/FTP. |

Il doppio click su una riga apre la scheda di dettaglio del singolo orologio, con i parametri di collegamento veri e propri.

*(Dettaglio di un Orologio)*

| Campo | Descrizione |
| --- | --- |
| Codice Orologio · Descrizione | Identificativo del terminale e relativa etichetta. |
| Porta COM · Indirizzo IP · Porta | Parametri di collegamento al terminale, valorizzati quando l'importazione avviene via seriale o rete/FTP (si vedano anche Leggi dati da scarico, par. 8.1, e Scarica Orologi, par. 8.3). |
| Codice Sistema | Codice tecnico del sistema/modello di terminale, quando previsto. |

### 3.12. Servizi

**Anagrafiche → Servizi**

Il servizio è un secondo livello di raggruppamento organizzativo, alternativo o complementare al centro di costo (par. 3.2): utile quando l'ente vuole filtrare stampe e ricerche per un criterio diverso dalla struttura formale degli uffici, ad esempio per servizio erogato anziché per settore amministrativo.

*(Scheda di ricerca Servizi)*

*(Elenco Servizi)*

| Colonna | Contenuto |
| --- | --- |
| Codice · Descrizione | Identificativo del servizio e relativa etichetta. |

Il doppio click su una riga apre la scheda di dettaglio: oltre a Codice e Descrizione, la scheda propone un riquadro Valori per reperibilità, usato quando il servizio è collegato a turni di reperibilità (par. 3.13):

*(Dettaglio di un Servizio)*

| Campo | Descrizione |
| --- | --- |
| Tariffa Oraria maggiorata del ... % per ore comprese tra ... e ... | Prima soglia di maggiorazione: percentuale di maggiorazione applicata alla reperibilità nella fascia oraria indicata (es. serale). |
| Ore feriali oltre ... — Tariffa Oraria maggiorata ... % | Percentuale di maggiorazione applicata oltre un certo numero di ore di reperibilità prestate in giorno feriale. |
| Ore festivi oltre ... — Tariffa Oraria maggiorata ... % | Percentuale di maggiorazione applicata oltre un certo numero di ore di reperibilità prestate in giorno festivo. |
| Codice voce da imputare nelle paghe | Codice voce economica a cui vengono imputati, nella procedura Paghe, i compensi di reperibilità calcolati per questo servizio. |

### 3.13. Reperibilità

**Anagrafiche → Reperibilità**

Gestisce i turni di reperibilità del personale, cioè i periodi in cui un dipendente non è in servizio ma deve restare raggiungibile per un eventuale richiamo. La ricerca propone dipendente e intervallo di date; l'elenco riporta i turni pianificati e consente di inserirne di nuovi.

*(Scheda di ricerca Reperibilità)*

*(Elenco Reperibilità)*

Il doppio click su una riga apre la tabella in modifica: sotto Codice e Descrizione, la griglia Orari elenca le fasce (Dalle ore/Alle ore) con la relativa Descrizione e il numero di ore (N. Ore) che ciascuna fascia vale ai fini del calcolo della reperibilità — ad esempio reperibilità notturna feriale, notturna festiva, pomeridiana festiva, serale.

*(Dettaglio di un turno di Reperibilità)*

| Colonna | Descrizione |
| --- | --- |
| Dalle ore · Alle ore | Estremi della fascia oraria di reperibilità. |
| Descrizione | Etichetta della fascia, che ne indica tipicamente il regime (es. notturna feriale/festiva, pomeridiana festiva, serale). |
| N. Ore | Numero di ore che la fascia vale ai fini del calcolo del compenso/riposo di reperibilità, indipendentemente dalla sua durata in orologio. |

### 3.14. Squadre

**Anagrafiche → Squadre**

Raggruppa i dipendenti in squadre — insiemi di persone che condividono lo stesso turno, cantiere o attività — utile per le stampe e le elaborazioni collettive che agiscono su un gruppo di lavoro anziché sul singolo dipendente o sull'intero centro di costo.

*(Scheda di ricerca Squadre)*

*(Elenco Squadre)*

La scheda di dettaglio, raggiungibile in inserimento con F2-Nuovo, si riduce anch'essa a due soli campi:

*(Scheda di inserimento — Anagrafica Squadre)*

| Campo | Descrizione |
| --- | --- |
| Codice | Identificativo della squadra. |
| Descrizione | Etichetta della squadra, richiamata poi dal campo Squadra della scheda Dipendenti (par. 3.3, scheda Dati per turni). |

---

## 4. Gestione Mensile

**Paghe → Timbrature → Gestione Mensile**

È il sottomenu che si usa ogni giorno: qui si elaborano le timbrature grezze, si correggono le anomalie, si inseriscono i giustificativi e infine si stampa il cartellino. Le funzioni sono elencate nel menu per famiglia più che per sequenza d'uso — questa guida le riordina secondo il flusso di lavoro reale, riassunto anche al par. 13 (Procedura mensile consigliata).

*(Sottomenu Gestione Mensile)*

### 4.1. Predisposizione Mese

**Gestione Mensile → Predisposizione Mese**

È il primo passo del ciclo mensile, da eseguire non appena si apre un nuovo periodo (in genere a inizio mese, anche in anticipo se si vuole già predisporre il mese successivo): crea, per ciascun dipendente compreso nei filtri, il «contenitore» vuoto in cui confluiranno le timbrature man mano che arrivano da terminale, da file o dai Servizi Web. Richiede il Periodo (obbligatorio, formato mese/anno); Centro Costo, Ditta e codice dipendente sono filtri opzionali che restringono l'operazione a un sottoinsieme di personale — utile, ad esempio, se un ufficio è già pronto a partire mentre un altro ha ancora dati da sistemare sul mese precedente.

Confermando con il pulsante Conferma il sistema predispone i cartellini vuoti del periodo per tutti i dipendenti selezionati: da quel momento Gestione Timbrature (par. 4.7) ed Elabora Timbrature (par. 4.5) trovano un contenitore già pronto ad accogliere le causali. Se il mese non viene predisposto in anticipo, Elabora Timbrature crea comunque il cartellino al primo utilizzo per i dipendenti che ne sono privi; predisporlo prima resta comunque la prassi più ordinata, soprattutto quando il numero di dipendenti da elaborare è alto.

*(Maschera Predisposizione Mese)*

> **Da eseguire una sola volta per periodo**
> Ripetere la predisposizione su un mese già avviato non cancella dati esistenti, ma non è comunque un'operazione da lanciare «per sicurezza»: se il mese ha già dei cartellini in lavorazione, verificare prima con Gestione Timbrature (par. 4.7) che non sia già stato predisposto.

### 4.2. Presenti/Assenti

**Gestione Mensile → Presenti/Assenti**

Produce, per una singola data, l'elenco dei dipendenti presenti oppure di quelli assenti — la scelta si fa con il campo Tipo stampa — filtrabile per servizio, centro di costo, singolo dipendente o per l'intero personale di un responsabile, e raggruppabile per servizio con l'apposita casella. Il campo Dalle ore restringe ulteriormente l'elenco dei presenti a chi è entrato dopo un determinato orario, utile per isolare i ritardi senza dover controllare cartellino per cartellino. È una fotografia puntuale, indipendente dallo stato di elaborazione del mese — si basa sulle timbrature già lette per quel giorno, non sul cartellino elaborato — quindi resta utile anche a mese non ancora elaborato: un controllo rapido «chi c'è oggi» senza dover aprire Gestione Timbrature (par. 4.7) dipendente per dipendente.

*(Maschera Stampa Presenze e Assenze)*

| Campo | Descrizione |
| --- | --- |
| Data | Giorno di riferimento per il quale calcolare presenze/assenze (obbligatorio). |
| Servizio · Centro di costo | Filtri opzionali per restringere l'elenco a un gruppo di dipendenti. |
| Dipendente / Responsabile | Filtro puntuale su un singolo dipendente o su tutti i dipendenti di un responsabile. |
| Raggruppa per Servizio | Casella di controllo per organizzare l'elenco risultante in blocchi per servizio anziché in lista unica. |
| Dalle ore | Filtro opzionale sull'orario di ingresso: limita l'elenco dei presenti a chi è entrato dopo l'ora indicata. |
| Tipo stampa | Seleziona se produrre l'elenco dei Presenti o quello degli Assenti. |

### 4.3. Controllo Timbrature

**Gestione Mensile → Controllo Timbrature**

Espone, per un singolo giorno (campo Giorno, obbligatorio — la ricerca è puntuale, non sull'intero periodo), l'elenco di tutte le timbrature rilevate quel giorno: Cognome, Nome, Centro Costo, Servizio, Ora, tipo E/U (Entrata o Uscita), Terminale e Chiave di rilevazione, e la Causale assegnata a ciascuna battuta. L'elenco si può restringere per Centro Costo o per Responsabile, per limitarlo ai soli dipendenti di un ufficio; Altra Ricerca permette di ripetere la ricerca con parametri diversi ed Esporta File di scaricare l'elenco. Scorrendo la griglia, ordinata per centro di costo, si individuano a colpo d'occhio le timbrature che meritano attenzione: un'Entrata senza la corrispondente Uscita (o viceversa), un orario isolato, o una battuta assegnata a una causale diversa da quella ordinaria. È il passaggio di controllo da eseguire subito dopo Elabora Timbrature (par. 4.5), giorno per giorno o a campione, prima di procedere con giustificativi e variazioni causali.

*(Maschera Controllo Timbrature)*

> **Visibilità legata al profilo utente**
> Questa funzione può non essere visibile a tutti gli utenti: la sua abilitazione dipende dal profilo/abilitazione assegnato. Se non compare nel proprio menu, rivolgersi all'amministratore del sistema.

### 4.4. Giustificativi

**Gestione Mensile → Giustificativi**

Serve a inserire in blocco un'assenza autorizzata che non deriva da una timbratura — ferie, malattia, un permesso — su uno o più dipendenti e su un intervallo di giorni, evitando di doverla registrare giorno per giorno da Gestione Timbrature (par. 4.7). Si usa tipicamente dopo aver ricevuto la richiesta del dipendente (a voce, su carta o tramite i Servizi Web — par. 10.1) e prima di rilanciare Elabora Timbrature (par. 4.5) sul periodo interessato, così che il cartellino tenga conto della causale giustificativa insieme alle timbrature effettive. Per una singola giornata di un solo dipendente è comunque più immediato intervenire direttamente da Gestione Timbrature con il comando Reg. Giustificativo, senza passare da questa schermata.

*(Maschera Giustificativi)*

| Campo | Descrizione |
| --- | --- |
| Servizio · Centro di costo | Filtro opzionale sul gruppo di dipendenti coinvolti. |
| Dal Giorno · Al Giorno | Intervallo di date interessato dal giustificativo (obbligatorio). |
| Dipendente/i da elaborare | Uno o più dipendenti destinatari. |
| Causale Giustificativa | La causale da applicare (obbligatoria) — es. FERIE, MALATTIA, PERM. BREVE. |
| Tipo | Giornaliera (tutto il giorno) oppure Oraria. |
| Dalle ore · Alle ore | Fascia oraria, quando il tipo è Oraria. |

> **Operazione massiva: verificare prima il filtro**
> Giustificativi agisce su tutti i dipendenti e i giorni compresi nei filtri indicati: prima di confermare, rileggere intervallo di date e lista dipendenti — un filtro troppo largo modifica più cartellini del previsto.

### 4.5. Elabora Timbrature

**Gestione Mensile → Elabora Timbrature**

Una volta che le timbrature grezze sono state importate (da terminale, da file o da web — vedi par. 8 Funzioni), vanno «elaborate»: il sistema le legge giorno per giorno, le confronta con il profilo orario del dipendente in quel giorno (par. 3.8) o con il turno assegnato (par. 3.9), calcola gli intervalli di presenza risultanti e assegna automaticamente le causali di conseguenza — lavoro ordinario, straordinario, credito o debito su flessibilità, secondo le regole del profilo. È un'operazione ripetibile: rielaborare un giorno o un periodo già elaborato non duplica nulla, ma ricalcola da capo sulla base delle timbrature e dei giustificativi presenti in quel momento, sostituendo il risultato precedente. Per questo conviene rilanciarla ogni volta che si registra un Giustificativo (par. 4.4) o si corregge una timbratura, limitando con Dal Giorno/Al Giorno l'intervallo ai soli giorni toccati dalla modifica, invece di rielaborare l'intero mese.

*(Maschera Elabora Timbrature)*

| Campo | Descrizione |
| --- | --- |
| Periodo | Mese/anno da elaborare (obbligatorio). |
| Servizio · Centro di costo · Ditta | Filtri opzionali per limitare l'elaborazione a un sottoinsieme di personale. |
| Dal Giorno · Al Giorno | Intervallo di giorni del periodo da rielaborare (utile per rielaborare solo pochi giorni dopo una correzione). |

| Campo | Descrizione |
| --- | --- |
| Dipendente/i | Uno o più codici per limitare l'elaborazione a specifici dipendenti. |
| Riassegna profilo orario se causale generale = 001 | Casella di controllo: forza la riassegnazione del profilo orario sui giorni con causale ordinaria (001), utile dopo un cambio di profilo in corso di mese. |

Subito dopo l'elaborazione conviene passare a Controllo Timbrature (par. 4.3, dove abilitato per il proprio profilo utente) e alla verifica delle Timbrature non Valide (par. 8.9), per intercettare timbrature doppie, mancanti o fuori sequenza prima di proseguire con giustificativi e variazioni causali.

### 4.6. Variazioni Causali

**Gestione Mensile → Variazioni Causali**

Risolve il caso in cui una causale già presente sulle timbrature vada sostituita con un'altra, su uno o più dipendenti e in un intervallo di giorni — ad esempio quando una giornata è stata letta come lavoro ordinario ma andava registrata come permesso. Si può operare per singola giornata (Varia Causale Giornaliera, indicando causale di partenza e di arrivo più l'eventuale quantità di ore da spostare) oppure con Varia Causale Globale, che assegna direttamente la causale tecnica 666 (manuale) all'intervallo indicato. Le due modalità rispondono a esigenze diverse: Varia Causale Giornaliera è la scelta più sicura quando si conosce esattamente la causale di partenza e quella di arrivo, perché agisce solo sulle giornate che hanno effettivamente quella causale; Varia Causale Globale, non distinguendo la causale di partenza, è più rapida ma anche più invasiva — da riservare ai casi in cui serve azzerare e ridefinire manualmente un blocco di giornate, ad esempio dopo un errore di elaborazione estesa. In entrambi i casi conviene rilanciare Elabora Timbrature (par. 4.5) solo se si desidera un nuovo calcolo automatico sulle stesse giornate; la causale variata manualmente resta comunque quella indicata finché non viene sovrascritta da una nuova elaborazione.

*(Maschera Variazioni Causali)*

> **Operazione massiva: verificare prima il filtro**
> Come Giustificativi, anche Variazioni Causali agisce su tutti i dipendenti e i giorni compresi nei filtri indicati: prima di confermare, rileggere intervallo di date e lista dipendenti.

### 4.7. Gestione Timbrature

**Gestione Mensile → Gestione Timbrature**

È la schermata per intervenire su un singolo dipendente, giorno per giorno: si cerca per codice dipendente, nominativo o matricola, si indica il periodo (mese/anno) ed eventualmente il giorno, quindi F4-Elenca Timbrature mostra il cartellino completo del mese, una riga per giorno, con le colonne Vi, Bi, Auto (un pallino blu segnala che la causale del giorno è stata assegnata automaticamente dall'elaborazione, non inserita a mano) e Rep., il codice della Causale principale della giornata e, a seguire, fino a quattro coppie di colonne Entrata/Uscita per le timbrature effettive, con la descrizione delle causali calcolate (lavoro ordinario, credito o debito su flessibilità, straordinario autorizzabile e simili) nell'ultima colonna. Le giornate festive o domenicali sono evidenziate in rosso; un asterisco accanto al codice causale segnala una causale inserita da Giustificativi (par. 4.4) o da Variazioni Causali (par. 4.6) piuttosto che calcolata dall'elaborazione. Un doppio clic su un orario di Entrata o Uscita lo rende modificabile direttamente in griglia, per una correzione puntuale senza passare da Variazioni Causali. Se il mese richiesto non ha ancora cartellini elaborati per il dipendente, la ricerca non restituisce alcuna riga: in tal caso conviene verificare con Trova Mesi quali periodi esistono, oppure eseguire prima Elabora Timbrature (par. 4.5) per quel mese.

*(Scheda di ricerca Gestione Timbrature)*

Una volta aperto il cartellino di un dipendente, la colonna di comandi a destra mette a disposizione, oltre alla navigazione (Altro Dipendente per tornare alla ricerca, ◂ Mese ▸ e ◂ Dip ▸ per scorrere mese o dipendente senza uscire dalla schermata), il seguente Menu Funzioni:

*(Colonna comandi del cartellino)*

| Comando | Uso |
| --- | --- |
| ◂ Dip ▸ | Passa al dipendente precedente/successivo senza tornare alla ricerca. |
| Tot. Anno Mese prec. | Riepilogo dei totali dell'anno fino al mese precedente, utile per verificare progressivi (ferie residue, monte ore). |
| Anomalie Mensili | Elenco delle anomalie rilevate nel mese per quel dipendente. |
| Dati Anagrafici | Richiama la scheda anagrafica del dipendente senza uscire dal cartellino. |
| Trova Mesi | Elenca i mesi per cui esistono dati per quel dipendente, utile quando la ricerca su un mese specifico non trova nulla. |
| Visualizza / Aggiungi Riporti | Consulta o inserisce riporti (es. ore o giorni residui portati da un periodo precedente). |

| Comando | Uso |
| --- | --- |
| Totali Mese | Riepilogo delle ore e delle causali totalizzate nel mese corrente. |
| Totali Anno | Riepilogo dei totali dall'inizio dell'anno. |
| Campi di Accumulo | Consulta i campi di accumulo del dipendente — ferie, permessi, banca ore e simili. |
| Cambia Profilo | Assegna al dipendente, per il periodo, un profilo orario diverso da quello di default. |
| Consulta Cartellino | Visualizza il cartellino in sola consultazione, senza il rischio di una modifica accidentale. |
| Reg. Giustificativo | Registra un giustificativo per questo dipendente direttamente dal cartellino, senza passare da Giustificativi (par. 4.4). |
| Variazione causale | Applica al dipendente una variazione di causale (par. 4.6) senza uscire dal cartellino. |
| Calcola Mese | Rilancia l'elaborazione (par. 4.5, Elabora Timbrature) sul mese corrente per questo dipendente. |
| Esporta su Excel | Scarica il cartellino visualizzato in un foglio Excel. |
| Stampa Cartellino | Genera la stampa del cartellino (par. 4.8) senza uscire dalla schermata. |
| Sblocco Mese | Riapre, dove abilitato, un mese già chiuso in stampa definitiva (par. 4.8) per poterlo correggere. |

*(Dettaglio cartellino di un dipendente)*

> **Cartellino non ancora disponibile**
> Se per il mese indicato il dipendente non ha ancora timbrature elaborate, verificare con Trova Mesi quali periodi sono disponibili, oppure eseguire prima Elabora Timbrature (par. 4.5) per quel mese.

Alcuni dei comandi della colonna a destra aprono una finestra dedicata; le più utilizzate nella gestione quotidiana del cartellino sono descritte di seguito.

**Cambia Profilo** assegna al dipendente un profilo orario diverso da quello di default, a partire da una data (ed eventualmente fino a un'altra): utile quando cambia il regime orario di una persona nel corso del mese, senza dover intervenire sull'anagrafica.

*(Gestione Timbrature — finestra Cambia Profilo)*

**Reg. Giustificativo** registra, direttamente dal cartellino, un giustificativo per il dipendente corrente: si indicano il periodo (dal/al giorno), la causale giustificativa e, per le causali orarie, la fascia oraria interessata, senza dover passare dalla funzione Giustificativi (par. 4.4).

*(Gestione Timbrature — finestra Reg. Giustificativo (Giustificativi Timbrature))*

**Variazione causale** applica al dipendente corrente una variazione di causale (par. 4.6) senza uscire dal cartellino: si può variare la causale di una singola giornata (Varia Causale Giornaliera) oppure, selezionando Varia Causale Globale, sostituire una causale con un'altra su tutto l'intervallo di date indicato.

*(Gestione Timbrature — finestra Variazione Causali)*

**Visualizza Riporti** e **Aggiungi Riporti** consentono rispettivamente di consultare e di inserire riporti per il dipendente, cioè ore o minuti residui da un periodo precedente da far confluire nel mese corrente; la finestra di inserimento richiede solo l'eventuale codice e la quantità in ore e minuti da riportare.

*(Gestione Timbrature — finestra Aggiungi Riporti)*

**Totali Mese** riepiloga, causale per causale, le ore maturate nel mese dal dipendente, distinguendo la quota Compensata (già confluita in causali che generano voci in busta paga o riposi) dalla quota Non Compensata: è il modo più rapido per controllare a colpo d'occhio il quadro del mese prima di procedere con Elabora Timbrature o con la stampa del cartellino.

*(Gestione Timbrature — finestra Totali Mese)*

### 4.8. Stampa Cartellino

**Gestione Mensile → Stampa Cartellino**

È il punto d'arrivo del ciclo mensile, da lanciare quando Controllo Timbrature (par. 4.3), i Giustificativi (par. 4.4) e le eventuali Variazioni Causali (par. 4.6) sono stati sistemati e il cartellino risulta corretto. Oltre a periodo, servizio, centro di costo e filtro dipendenti, propone la Tabella compensazioni da applicare (par. 3.10) e una serie di opzioni di stampa (solo riepilogo, riepilogo annuale, riepilogo buoni pasto, bianco e nero) e soprattutto il Tipo Stampa:

| Tipo stampa | Effetto |
| --- | --- |
| Stampa prova | Anteprima senza chiudere il periodo: ripetibile quante volte serve durante le verifiche. |
| Stampa definitiva | Blocca il cartellino del periodo: da questo momento richiede Sblocca Cartellino (par. 8.11) per essere ulteriormente corretto. |
| Stampa definitiva con INAIL | Come sopra, includendo i dati richiesti ai fini della comunicazione INAIL. |

Accanto al pulsante principale, Solo Timbrature produce l'elenco delle sole timbrature senza il resto del cartellino, e Ristampa Cartellino Definitivi permette di riottenere una copia di un cartellino già chiuso in definitivo, senza doverlo sbloccare.

*(Stampa Cartellino — riepilogo mensile)*

### 4.9. Riepilogo Causali

**Gestione Mensile → Riepilogo Causali**

Somma, per intervallo di date, quante ore/giorni di ciascuna causale sono stati registrati per ciascun dipendente; è esportabile ed è la base per il conto annuale e per le verifiche di congruità delle assenze rispetto ai residui.

*(Maschera Riepilogo Causali (Stampa causali per dipendenti))*

### 4.10. Stampa Turni

**Gestione Mensile → Stampa Turni**

Riepiloga i turni assegnati nel periodo, per servizio o centro di costo — utile per verificare a consuntivo l'effettiva applicazione delle turnazioni pianificate in Turni Variabili (par. 3.9).

*(Maschera Stampa Turni (Stampa Riepilogo Turni))*

### 4.11. Riepilogo Timbrature

**Gestione Mensile → Riepilogo Timbrature**

Riepiloga le timbrature su più mesi (Dal mese / Al mese), con possibilità di Esporta Excel — comodo per analisi fuori dal gestionale che coprano un arco di tempo più ampio del singolo periodo.

*(Maschera Riepilogo Timbrature (Riepilogo Trimbrature))*

### 4.12. Stampa 48 Ore

**Gestione Mensile → Stampa 48 Ore**

Verifica il rispetto dei limiti di legge su riposo giornaliero e orario settimanale massimo (le «48 ore»), per periodo e centro di costo, incrociando i turni e le timbrature elaborate nel mese.

*(Maschera Stampa 48 Ore (Riepilogo Turni Mensile - 48 ore))*

---

## 5. Buoni Pasto

**Paghe → Timbrature → Buoni Pasto**

*(Sottomenu Buoni Pasto)*

Tre funzioni: Assegna Buoni Pasto collega manualmente dei buoni a un dipendente (per codice); Stampa Buoni Pasto produce la stampa dei buoni maturati in base alle presenze elaborate; Stampa Registro Buoni restituisce il registro complessivo per la rendicontazione. Il calcolo dei buoni maturati dipende dalle causali marcate come rilevanti a questo fine nell'anagrafica Causali (par. 3.6) e dalle regole di presenza minima configurate a livello di ente.

### 5.1. Assegna Buoni Pasto

**Buoni Pasto → Assegna Buoni Pasto**

Associa manualmente un pacchetto di buoni a un dipendente, individuato tramite il campo Codice (con icona di ricerca) che ne richiama la descrizione anagrafica. Si usa in casi puntuali che il calcolo automatico non copre: un dipendente non soggetto a rilevazione presenze (causale fissa, par. 3.3) che ha comunque diritto al buono, un'integrazione a un'assegnazione risultata incompleta dopo l'elaborazione del mese, o una correzione singola prima di Stampa Buoni Pasto (par. 5.2). Per il resto del personale, che timbra regolarmente, i buoni vengono invece calcolati automaticamente in base alle presenze elaborate in Gestione Mensile (par. 4), senza bisogno di intervenire qui.

*(Maschera Assegna Buoni Pasto (titolo scheda: «Buoni Pasto»))*

### 5.2. Stampa Buoni Pasto

**Buoni Pasto → Stampa Buoni Pasto**

Produce la stampa dei buoni pasto maturati in un dato periodo, in base alle presenze già elaborate in Gestione Mensile (par. 4) e alle causali marcate come rilevanti ai fini buoni pasto. Va lanciata dopo aver chiuso l'elaborazione del periodo (Elabora Timbrature, par. 4.5), perché il calcolo si basa sulle causali già assegnate a ciascuna giornata: una timbratura non ancora elaborata, o un giustificativo non ancora registrato, non genera il buono corrispondente. Le eventuali assegnazioni manuali fatte con Assegna Buoni Pasto (par. 5.1) confluiscono nella stessa stampa.

*(Maschera di stampa Buoni Pasto)*

### 5.3. Stampa Registro Buoni

**Buoni Pasto → Stampa Registro Buoni**

Restituisce il registro complessivo dei buoni assegnati/stampati in un intervallo di date (Dalla data / Alla data, entrambi obbligatori) — il documento di riepilogo da conservare per la rendicontazione verso il fornitore dei buoni. A differenza di Stampa Buoni Pasto (par. 5.2), che produce il documento operativo mese per mese, questo registro serve come riepilogo consuntivo su un arco di tempo a scelta: utile, ad esempio, per verificare il totale dei buoni erogati in un trimestre o in un anno prima di confrontarlo con la fattura del fornitore.

*(Maschera Stampa Registro Buoni (titolo scheda: «Registro Buoni Pasto»))*

---

## 6. Legge Trasparenza

**Paghe → Timbrature → Legge Trasparenza**

*(Sottomenu Legge Trasparenza)*

Tre report pensati per gli obblighi di pubblicazione dei dati di presenza previsti dalla normativa sulla trasparenza: Per centro di Costo, Per Area e Per Dipendente. Attingono agli stessi dati elaborati in Gestione Mensile, quindi vanno prodotti dopo aver chiuso l'elaborazione del periodo di riferimento, non prima. I tre report condividono la stessa scheda e gli stessi filtri di periodo: cambia solo il livello con cui il personale viene aggregato in stampa, dal blocco più ampio (Centro di Costo o Area) al singolo dipendente, a seconda che serva una pubblicazione d'insieme o la verifica di una posizione specifica.

### 6.1. Per centro di Costo

**Legge Trasparenza → Per centro di Costo**

Apre la scheda «Assenze ( Legge sulla Trasparenza )» con il personale in servizio ordinato per Centro di Costo (par. 3.2). Impostare l'intervallo Dal / Al e confermare per ottenere la stampa raggruppata: un blocco per ciascun Centro di Costo, con l'elenco dei dipendenti che vi appartengono e il riepilogo delle rispettive assenze nel periodo — utile per un controllo d'insieme per struttura, prima di scendere al singolo nominativo.

*(Assenze (Legge sulla Trasparenza) — ordinamento per Centri di Costo)*

### 6.2. Per Area

**Legge Trasparenza → Per Area**

Stessa scheda del punto precedente, con il personale ordinato per Area anziché per Centro di Costo: da usare quando l'organizzazione interna, o l'ambito di pubblicazione richiesto, segue le aree funzionali dell'ente piuttosto che i centri di costo contabili.

*(Assenze (Legge sulla Trasparenza) — ordinamento per Aree)*

### 6.3. Per Dipendente

**Legge Trasparenza → Per Dipendente**

Stessa scheda, con il personale elencato singolarmente per dipendente anziché aggregato per struttura organizzativa: il livello da usare per verificare o rispondere su una singola posizione, senza dover isolarla da un elenco più ampio raggruppato per Centro di Costo o Area.

*(Assenze (Legge sulla Trasparenza) — ordinamento per Dipendenti)*

---

## 7. Grafici

**Paghe → Timbrature → Grafici**

Contiene un'unica voce, il Grafico Causali: una rappresentazione visiva della distribuzione delle causali nel periodo scelto, utile in colloquio con la direzione più che nel lavoro quotidiano di sportello, per mostrare a colpo d'occhio il peso relativo di straordinari, ferie o assenze per malattia.

### 7.1. Grafico Causali

**Grafici → Grafico Causali**

Genera il grafico a partire da periodo, servizio/centro di costo e causali selezionate, con possibilità di scegliere il tipo di rappresentazione (tipicamente a torta o a barre). È un modo rapido per confrontare visivamente il peso delle diverse causali senza dover leggere i valori numerici del Riepilogo Causali (par. 4.9) — utile soprattutto per una presentazione o un colloquio, più che per il controllo operativo di dettaglio.

*(Maschera Grafico Causali)*

---

## 8. Funzioni

**Paghe → Timbrature → Funzioni**

Sono le funzioni tecniche che alimentano il ciclo mensile a monte (import dei dati dai terminali) e quelle da usare con cautela a valle (cancellazioni, sblocchi). Non fanno parte dell'operatività quotidiana di sportello, ma è qui che si risolvono i casi fuori dall'ordinario. Il sottomenu comprende 14 voci, elencate di seguito una per una nell'ordine in cui compaiono nel programma.

*(Sottomenu Funzioni)*

### 8.1. Leggi dati da scarico

**Funzioni → Leggi dati da scarico**

Importa un file di scarico timbrature già prodotto dal terminale (ad esempio consegnato su supporto esterno), in alternativa al collegamento diretto via FTP o rete. Si usa tipicamente quando il terminale non è raggiungibile in rete — una sede distaccata, un terminale isolato — e i dati vengono invece scaricati su chiavetta o disco e portati fisicamente in ufficio. Una volta importato, il file segue lo stesso percorso delle timbrature scaricate via FTP (par. 8.2): resta comunque necessario eseguire Elabora Timbrature (par. 4.5) per trasformarle in cartellino.

*(Maschera Leggi dati da scarico)*

### 8.2. Scarica orologi FTP

**Funzioni → Scarica orologi FTP**

Recupera i dati direttamente via FTP dai terminali collegati in rete, secondo l'indirizzo configurato in Parametri (par. 11.1). È l'operazione da lanciare regolarmente — spesso più volte al giorno — per portare nel sistema le timbrature rilevate ai terminali; da sola non genera ancora il cartellino, che richiede comunque Elabora Timbrature (par. 4.5) sul periodo interessato.

*(Maschera Scarica orologi FTP)*

### 8.3. Scarica Orologi

**Funzioni → Scarica Orologi**

*(Funzione di scarico dati dai terminali di rilevazione; vedi anche par. 3.11 Orologi per i parametri di collegamento.)*

### 8.4. Caricamento Cartellino

**Funzioni → Caricamento Cartellino**

Permette il caricamento manuale di un determinato cartellino dipendente, la maschera appare simile a quella della gestione timbrature.

*(Maschera Carica Cartellino)*

### 8.5. Scarico Dati per Paghe

**Funzioni → Scarico Dati per Paghe**

Esporta i dati elaborati verso la procedura paghe, tipicamente a fine ciclo mensile dopo la stampa definitiva del cartellino (par. 4.8). È il passaggio che chiude il ciclo mensile del modulo Timbrature verso l'ufficio paghe: conviene lanciarlo una sola volta per periodo, perché ripeterlo dopo un'ulteriore correzione del cartellino può generare un doppio invio se la procedura paghe non gestisce la sovrascrittura.

*(Maschera Scarico Dati Timbrature)*

### 8.6. Copia Dati Timbrature

**Funzioni → Copia Dati Timbrature**

Duplica i dati di un periodo, ad esempio come base di partenza per correzioni successive o per replicare uno schema di timbrature ricorrente. Utile, ad esempio, per un dipendente con un orario molto regolare: si copia un mese già corretto come base per il successivo, per poi intervenire solo sulle eccezioni con Variazioni Causali (par. 4.6) o Giustificativi (par. 4.4), invece di ripartire da zero.

*(Maschera Duplicazione Timbrature)*

### 8.7. Cancellazione Mese

**Funzioni → Cancellazione Mese**

Elimina le timbrature e il cartellino elaborato di un dipendente per un dato mese, azzerandolo per poterlo ricostruire da capo — ad esempio dopo un'importazione difettosa che ha inquinato l'intero periodo.

> **Cancellazione, non archiviazione**
> «Questo programma cancella i dati del mese selezionato» — richiede codice dipendente, mese/anno ed eventualmente il giorno da cui cancellare. Non è un'operazione recuperabile dall'interfaccia: prima di confermare, assicurarsi di avere già una stampa cartellino del periodo.

*(Maschera Cancellazione Mese)*

### 8.8. Cancellazione Anno

**Funzioni → Cancellazione Anno**

Stessa logica di Cancellazione Mese (par. 8.7), ma applicata all'intera annualità di un dipendente invece che a un solo mese.

> **Come sopra, sull'intera annualità**
> Stessa natura della Cancellazione Mese (par. 8.7) ma riferita all'intero anno: va considerata solo in fase di bonifica dati, non come rimedio a un errore mensile. Da non confondere con l'omonima voce Cancellazione Anno presente nel sottomenu Storico (par. 9.6), che agisce su un archivio diverso.

*(Maschera Cancellazione Anno)*

### 8.9. Timbrature non Valide

**Funzioni → Timbrature non Valide**

Individua, su un intervallo di periodi, le timbrature scartate dall'elaborazione (indicando causale per festività e per patrono come riferimento) e permette di stamparle prima di deciderne l'eliminazione. Va consultata dopo ogni elaborazione mensile, insieme a Controllo Timbrature (par. 4.3), per intercettare timbrature doppie, mancanti o fuori sequenza.

*(Maschera Timbrature non Valide)*

### 8.10. Gestione Calendario

**Funzioni → Gestione Calendario**

Genera il calendario di riferimento per un dato anno, alla base del calcolo di festività e giorni lavorativi usato da tutte le elaborazioni del modulo. Richiede di inserire il solo anno di pertinenza e la conferma, genererà in automatico il calendario. È buona norma generarlo per l'anno successivo con un discreto anticipo, in modo che festività e giorni lavorativi siano già disponibili quando si esegue la prima Predisposizione Mese (par. 4.1) di gennaio.

*(Maschera Gestione Calendario)*

### 8.11. Sblocca Cartellino

**Funzioni → Sblocca Cartellino**

> **Riporta in lavorazione un mese già chiuso**
> «Questo programma sblocca i cartellini stampati in Definitivo» — è l'avviso che compare in apertura. Richiede mese e, opzionalmente, il codice dipendente: usarlo solo quando è certo che il cartellino definitivo contiene un errore da correggere, perché riapre alla modifica dati già considerati chiusi (e potenzialmente già trasmessi alle paghe).

*(Maschera Sblocca Cartellino)*

### 8.12. Importazione File Malattie

**Funzioni → Importazione File Malattie**

Importa in blocco i certificati di malattia da flusso esterno (ad esempio INPS), evitando l'inserimento manuale in Giustificativi (par. 4.4). Una volta importati, i certificati compaiono come giustificativi già assegnati: conviene verificarli con Controllo Timbrature (par. 4.3) o direttamente sul cartellino (par. 4.7) prima di procedere con Elabora Timbrature (par. 4.5).

*(Maschera Malattie da File)*

### 8.13. Conto Annuale

**Funzioni → Conto Annuale**

Riepilogo annuale ai fini del conto annuale del personale, elaborato a partire dai dati storicizzati (par. 9). Richiede che lo storico dell'anno di riferimento sia già stato consolidato con Calcolo Storico (par. 9.1) e, se il ciclo è concluso, chiuso con Chiusura Anno (par. 9.4): è un adempimento annuale, da produrre a consuntivo.

*(Maschera Conto Annuale)*

---

## 9. Storico

**Paghe → Timbrature → Storico**

*(Sottomenu Storico)*

Raccoglie le funzioni di consolidamento e consultazione dei dati storici del modulo: sei voci, dal calcolo dello storico fino alle cancellazioni di fine ciclo.

### 9.1. Calcolo Storico

**Storico → Calcolo Storico**

Consolida nello storico i dati del periodo elaborato, rendendoli disponibili per le consultazioni aggregate (Gestione Storico, par. 9.2) anche quando il dettaglio giornaliero non è più immediatamente accessibile da Gestione Timbrature (par. 4.7).

*(Maschera Calcolo Storico)*

### 9.2. Gestione Storico

**Storico → Gestione Storico**

Per ciascun dipendente e anno, mostra i totali aggregati (ore/giorni) maturati per ciascuna causale nell'intera annualità. È utile come vista di controllo rapido anche quando non sono disponibili, per quel dipendente o periodo, i dati di dettaglio giornaliero consultabili da Gestione Timbrature (par. 4.7): i totali storici per causale restano infatti disponibili anche in assenza del dettaglio puntuale.

*(Storico delle Causali per dipendente)*

### 9.3. Stampa Storico

**Storico → Stampa Storico**

Produce la stampa dei dati storicizzati per dipendente e anno, nella stessa logica di aggregazione di Gestione Storico (par. 9.2).

*(Maschera Stampa Storico)*

### 9.4. Chiusura Anno

**Storico → Chiusura Anno**

> **Operazione di fine ciclo annuale**
> Chiude formalmente l'annualità nello storico, rendendo definitivi i totali consolidati con Calcolo Storico (par. 9.1). Da eseguire solo a consuntivo, dopo aver verificato i dati con Gestione Storico (par. 9.2) e Stampa Storico (par. 9.3).

*(Maschera Chiusura Annuale)*

### 9.5. Cancellazione Voce

**Storico → Cancellazione Voce**

> **Cancellazione puntuale non recuperabile**
> Elimina una singola voce di accumulo dallo storico di un dipendente. Operazione mirata ma irreversibile dall'interfaccia: da usare solo per correggere un errore di consolidamento circoscritto, verificato in anticipo con Gestione Storico (par. 9.2).

*(Maschera Cancellazione Voce di Accumulo)*

### 9.6. Cancellazione Anno

**Storico → Cancellazione Anno**

> **Cancellazione dell'intero storico annuale**
> Rimuove dallo storico tutti i dati consolidati di un'intera annualità. Come per Cancellazione Voce (par. 9.5), va considerata solo in fase di bonifica dati, con una copia di sicurezza dei dati storicizzati già effettuata a monte.

*(Maschera Cancellazione Anno Storico)*

---

## 10. Servizi Web

**Paghe → Timbrature → Servizi Web**

È la vetrina self-service dello stesso patrimonio dati: quello che il dipendente e il suo responsabile vedono e possono fare da web, senza passare dall'ufficio del personale per ogni richiesta. Il sottomenu comprende sei viste.

*(Sottomenu Servizi Web)*

### 10.1. Richiesta Autorizzazioni

**Servizi Web → Richiesta Autorizzazioni**

La schermata più usata di questa sezione, organizzata in tre viste (sotto-schede): Richieste Personali (le proprie), Richieste Dipendenti (quelle da approvare come responsabile) e Richieste Straordinari Dipendenti (le richieste di lavoro straordinario dei propri dipendenti). La prima è disponibile per qualunque utente; Richieste Dipendenti e Richieste Straordinari Dipendenti mostrano dati solo per gli utenti configurati come responsabili di un ufficio/settore in Utilità › Responsabili (par. 12.1) — un utente senza incarichi di responsabile vede quelle due sotto-schede sempre vuote. Ogni richiesta riporta numero, data e ora di registrazione, il periodo dal/al e l'eventuale fascia oraria, la causale richiesta e lo stato: Accettata, In attesa/In Valutazione o Respinta/Annullata, insieme a data e ora dell'elaborazione, quando già avvenuta.

La sotto-scheda Richieste Personali elenca le richieste presentate in prima persona dall'utente collegato, con lo storico completo di tutte le richieste già presentate. F2-Nuovo apre la scheda di inserimento per presentarne una nuova.

*(Richiesta Autorizzazioni — scheda di inserimento di una nuova richiesta (F2-Nuovo))*

| Campo | Descrizione |
| --- | --- |
| Dal giorno · Al giorno | Estremi del periodo per cui si richiede l'autorizzazione; entrambi obbligatori. |
| Da Ora · A Ora | Fascia oraria della richiesta: si compila solo per le richieste orarie, abilitate dalla spunta «Richieste orarie»; per una richiesta a giornata intera restano vuoti. |
| N° Giorni | Numero di giorni del periodo, calcolato automaticamente sulla base di Dal giorno / Al giorno. |
| Causale | Motivo della richiesta, da scegliere in un elenco che comprende, tra le altre, ferie, permessi ex L.104/92, permessi brevi, donazione sangue, mancata timbratura, lavoro da remoto/smart working, congedo parentale e recupero di straordinario o di formazione; le causali effettivamente proposte dipendono dalla configurazione dell'ente. Nell'elenco compare anche una causale dedicata, Annulla Richiesta, da usare per ritirare una richiesta già presentata e non più necessaria. |
| Spunta per richieste orarie | Se selezionata, trasforma la richiesta da giornata intera a fascia oraria e abilita i campi Da Ora / A Ora. |
| Motivazione della richiesta | Testo libero obbligatorio in cui si indica il motivo della richiesta. |

F5-Aggiungi conferma l'inserimento e invia la richiesta in valutazione al responsabile; Torna a Elenco chiude la scheda senza salvare e riporta all'elenco delle Richieste Personali, dove la nuova richiesta compare con stato In attesa/In Valutazione fino a quando non viene evasa.

#### Richieste Dipendenti — la gestione del responsabile

È la vista con cui il responsabile di un ufficio/settore valuta le richieste presentate dai propri dipendenti tramite i Servizi Web. I filtri in testata permettono di restringere l'elenco: Vedi Tutte Richieste (in assenza di spunta, la griglia mostra solo un sottoinsieme ridotto), Per Anno (anno di riferimento del periodo richiesto) e Ricarica per eseguire la ricerca con i filtri correnti.

*(Richiesta Autorizzazioni — scheda Richieste Dipendenti (vista del responsabile))*

| Colonna | Descrizione |
| --- | --- |
| Dipendente | Nominativo del dipendente autore della richiesta (oscurato nell'immagine). |
| Causale | Causale richiesta, ad es. FERIE, MANCATA TIMBRATURA, LAVORO DA REMOTO, PERM. giornaliero Art.33 L.104/92. |
| Stato della richiesta | Accettata, Respinta o Annullata; quando l'elaborazione è stata effettuata manualmente dal responsabile anziché in automatico, lo stato riporta tra parentesi il nome utente di chi ha deciso, ad es. «Accettata (nome utente)». |
| Data elaborazione · Ora elaborazione | Quando la richiesta è stata evasa; rimangono vuote finché la richiesta è in attesa di valutazione. |

I comandi della colonna a destra operano sulla richiesta selezionata in griglia: F2-Nuovo inserisce una richiesta anche per conto del dipendente, utile quando arriva a sportello anziché da web; Forza Autorizzazione consente al responsabile di inserire una richiesta scavalcando controlli/blocchi che ne impedirebbero l'accettazione ordinaria; Sostituisci responsabile permette di delegare temporaneamente la valutazione delle richieste a un altro utente, ad esempio in caso di assenza del responsabile titolare — la stessa funzionalità configurabile in modo strutturato in Utilità › Sostituti (par. 12.2); Stampa Richieste Dipendenti produce un report stampabile dell'elenco corrente.

#### Richieste Straordinari Dipendenti

Analoga alla precedente ma dedicata alle richieste di autorizzazione al lavoro straordinario dei propri dipendenti, con le stesse colonne di base (N. Richiesta, date e ore di registrazione, periodo, Causale, Dipendente, Stato della richiesta, Stato Giust.) più la colonna Causale richiesta. Anche qui sono disponibili i comandi F2-Nuovo, Forza Autorizzazione e Sostituisci responsabile.

*(Richiesta Autorizzazioni — scheda Richieste Straordinari Dipendenti)*

### 10.2. Emolumenti

**Servizi Web → Emolumenti**

Consultazione web dei dati economici collegati alle presenze, verso il portale ente configurato in Parametri (par. 11.1). Richiede che l'anagrafica del dipendente abbia il Codice nelle Paghe compilato (par. 3.3): senza quel collegamento la consultazione non può recuperare i dati economici dal portale. È una vista di sola consultazione, complementare — non sostitutiva — del cedolino vero e proprio (par. 10.5).

### 10.3. Cartellino Timbrature

**Servizi Web → Cartellino Timbrature**

Versione consultabile via web del cartellino, corrispondente a quanto visto in Gestione Timbrature (par. 4.7), pensata per la consultazione diretta da parte del dipendente. Il dipendente vede solo il proprio cartellino, in sola lettura: le eventuali correzioni restano di competenza dell'ufficio del personale, tramite Gestione Timbrature, Giustificativi (par. 4.4) o Variazioni Causali (par. 4.6). La visibilità dei cartellini non ancora definitivi rispetto a quelli già chiusi in stampa definitiva si configura in Parametri Vari (par. 11.1).

*(Vista web del cartellino)*

La ricerca si imposta con Periodo (mese/anno) e, quando il profilo utente vede il cartellino di più persone — ad esempio un responsabile — con il menu Dipendenti per scegliere il nominativo da consultare; Consulta carica il cartellino del periodo selezionato, con la stessa struttura a giorni vista in Gestione Timbrature (par. 4.7). La barra superiore mette a disposizione alcuni comandi aggiuntivi:

| Comando | Descrizione |
| --- | --- |
| Totali Mese | Apre una finestra con il riepilogo del mese corrente per causale (Causale, Descrizione, Compensato, Non Compensato) — la stessa base dati della stampa definitiva mensile. |
| Totali Anno | Stessa vista di Totali Mese, estesa a tutto l'anno del periodo consultato. |
| Campi di Accumulo | Apre una finestra con la situazione dei campi ad accumulo del dipendente (ferie, banca ore e simili): per ciascuna causale mostra il tetto corrente, il valore dell'anno precedente, il valore maturato e, dove previsto, gli stessi dati rapportati a giorni. |
| Stampa | Genera la stampa del cartellino del periodo consultato. |
| Tetti | Richiama i tetti (i limiti) configurati per le causali ad accumulo del dipendente. |

### 10.4. Controllo Timbrature

**Servizi Web → Controllo Timbrature**

Vista di controllo lato web, analoga alla funzione omonima disponibile in Gestione Mensile (par. 4.3): offre lo stesso elenco delle timbrature rilevate in un giorno, ma in versione consultabile via web dal responsabile, senza dover accedere alla parte gestionale del modulo.

*(Maschera Controllo Timbrature (vista web))*

La ricerca richiede il Giorno* da consultare (obbligatorio) ed è ulteriormente filtrabile per Centro Costo o per Responsabile, entrambi con ricerca guidata; Lista per nome avvia la ricerca. Il risultato è un elenco, ordinabile per colonna, con Cognome, Nome, Centro di Costo, Servizio, Ora della timbratura, tipo E/U (Entrata/Uscita), Terminale e Chiave di rilevazione, Causale; Esporta File consente di scaricare l'elenco così ottenuto.

### 10.5. Cedolini

**Servizi Web → Cedolini**

Consultazione dei cedolini paga, quando integrata con il portale, riservata ai profili utente abilitati. A differenza di Emolumenti (par. 10.2), che riepiloga i dati economici legati alle presenze, questa vista mostra il cedolino stipendiale completo prodotto dalla procedura paghe: la disponibilità dipende dall'effettiva integrazione tra i due sistemi, configurata a livello di ente.

L'elenco si presenta come una griglia con le colonne Tipo, Mese, Anno e File: un rigo per ogni cedolino reso disponibile sul portale, con il collegamento al file per aprirlo o scaricarlo. L'elenco resta vuoto se il profilo dell'utente non è abilitato alla consultazione oppure se, a livello di ente, l'integrazione con il portale cedolini non è ancora attiva: in entrambi i casi occorre rivolgersi all'ufficio del personale.

### 10.6. Storico Campi d'accumulo

**Servizi Web → Storico Campi d'accumulo**

Mostra l'andamento storico dei campi ad accumulo (ad esempio monte ferie, banca ore) nel tempo, per la stessa consultazione self-service delle altre viste di questa sezione. È l'equivalente self-service di Gestione Storico (par. 9.2): permette al dipendente o al responsabile di seguire l'evoluzione di ferie residue, banca ore e simili senza dover passare dall'ufficio del personale per un semplice controllo di saldo.

*(Maschera Storico Campi d'accumulo)*

La consultazione si avvia impostando l'Anno* e confermando con F4-Elenca; F3-Altra Ricerca permette di impostare ulteriori filtri, ad esempio per singolo dipendente. L'elenco riporta, per ciascun dipendente e per ciascuna causale ad accumulo, il Tetto Corrente, il valore dell'Anno Precedente, il Valore maturato nel periodo, lo stesso tetto e valore rapportati a giorni e la Differenza risultante — la stessa base dati richiamabile anche dal singolo cartellino tramite il comando Campi di Accumulo (par. 10.3).

---

## 11. Parametri

**Paghe → Timbrature → Parametri**

La configurazione generale del modulo, divisa in quattro schede. Sono impostazioni che riguardano l'intero ente, non un singolo dipendente: da toccare con consapevolezza e in genere riservate a un numero ristretto di persone.

### 11.1. Parametri Vari

**Parametri → Parametri Vari**

Raccoglie di tutto un po': i collegamenti al portale emolumenti (identificativo, indirizzo e credenziali dell'ente), le regole di notifica via mail (dal dipendente al responsabile e viceversa, con eventuale copia nascosta a un indirizzo di controllo), chi vede cosa (Il Responsabile vede: Tutte le Autorizzazioni o un sottoinsieme), la visibilità dei cartellini personali definitivi/non definitivi lato web, l'indirizzo FTP per l'import dagli orologi, il numero massimo di giorni consentiti per le richieste web e il controllo dell'orario settimanale.

*(Scheda Parametri Vari)*

### 11.2. Parametri Straordinari

**Parametri → Parametri Straordinari**

Definisce se controllare un tetto di gruppo sullo straordinario, se verificare lo straordinario già al momento dell'accettazione della richiesta e l'ordinamento delle richieste in elenco. Due sotto-tabelle elencano rispettivamente le causali ammesse per la richiesta di straordinario e quelle da sottoporre a controllo nelle richieste web.

*(Scheda Parametri Straordinari)*

### 11.3. Parametri Gestione

**Parametri → Parametri Gestione**

Regole di comportamento della gestione mensile: da consultare quando un comportamento del sistema in Gestione Mensile (par. 4) non corrisponde alle aspettative, prima di considerarlo un'anomalia. Non essendo impostazioni che si toccano di routine, conviene annotare — quando si modifica un parametro qui — cosa è stato cambiato e perché, per poterlo ricondurre più facilmente a un comportamento osservato successivamente in Gestione Mensile.

*(Scheda Parametri Gestione)*

### 11.4. Parametri Visualizzazione

**Parametri → Parametri Visualizzazione**

Preferenze di visualizzazione delle schermate del modulo — ad esempio come vengono presentate le griglie o quali colonne compaiono di default. Non incidendo su calcoli o dati salvati, questa scheda si può modificare più liberamente delle altre tre di Parametri, per adattare l'interfaccia alle abitudini dell'ufficio.

*(Scheda Parametri Visualizzazione)*

> **Prima di cambiare un parametro**
> I parametri sono globali per tutto l'ente: una modifica qui incide su ogni dipendente e su ogni responsabile che usa i Servizi Web, non solo sul caso che si sta cercando di risolvere. In caso di dubbio, verificare prima con chi presidia la configurazione del sistema.

---

## 12. Utilità

**Paghe → Timbrature → Utilità**

*(Sottomenu Utilità)*

Nove funzioni di supporto trasversale, dalla gestione dei responsabili alle calcolatrici di servizio. Alcune etichette di menu, come si vedrà, contengono refusi propri dell'applicazione (non della documentazione).

### 12.1. Responsabili

**Utilità → Responsabili**

Associa a ciascun ufficio/settore un utente responsabile, con validità nel tempo (dal/al) e l'indicazione se si tratta di un responsabile con visibilità limitata o esteso all'intero ente. È la tabella che determina chi vede quali richieste di autorizzazione da approvare (par. 10.1).

*(Elenco Responsabili)*

### 12.2. Sostituti

**Utilità → Sostituti**

Permette di designare, per un intervallo di date, chi sostituisce un responsabile nell'approvazione delle richieste — utile per ferie o assenze del responsabile stesso, così che le richieste dei suoi dipendenti non restino bloccate in attesa.

*(Elenco Sostituti)*

### 12.3. Attivazione periodi per straordinari

**Utilità → Attivazione periodi per straordinari**

Apre o chiude, per periodo, la possibilità di richiedere straordinari dai Servizi Web (par. 10.1).

*(Maschera Gestione Mesi Straordinari)*

### 12.4. Differenza Date-Ore

**Utilità → Differenza Date-Ore**

Calcolatrice di supporto: ore o giorni intercorrenti tra due date/orari, per verifiche rapide fuori da qualunque elaborazione di periodo.

*(Maschera Differenza date e orari)*

### 12.5. Riepilogo Mese

**Utilità → Riepilogo Mese**

Vista di sintesi mensile per dipendente, con campi Periodo, Data della stampa e Dipendenti da stampare (per codice, con ricerca); esportabile in Excel oltre alla stampa diretta.

*(Maschera Stampa Mensilità (voce di menu: «Riepologo Mese»))*

### 12.6. Scarico orologio su file

**Utilità → Scarico orologio su file**

Esporta su file i dati letti da un terminale in un intervallo di date (Dal Giorno / Al Giorno), ad esempio per condividerli con l'assistenza tecnica.

*(Maschera Scarico Orologio)*

### 12.7. Importazioni

**Utilità → Importazioni**

Punto di accesso alle importazioni dati non coperte dalle funzioni dedicate del sottomenu Funzioni (par. 8).

*(Voce di menu Importazioni)*

### 12.8. Controllo calcoli

**Utilità → Controllo calcoli**

Verifica di coerenza tra i totali calcolati e i dati sorgente, tramite una Funzione selezionabile e un intervallo Dal / Al: utile prima di una stampa definitiva massiva del cartellino (par. 4.8).

*(Maschera Controllo)*

### 12.9. Invio Anomalie

**Utilità → Invio Anomalie**

Invia una notifica (tipicamente via mail, secondo i destinatari configurati in Parametri, par. 11.1) delle anomalie rilevate nel periodo. La schermata riporta un'icona di invio dedicata; trattandosi di un'azione di invio dati verso l'esterno, non è stata attivata in fase di cattura di questa guida.

*(Maschera Invio anomalie)*

---

## 13. Procedura mensile consigliata

Non tutte le funzioni viste finora entrano in ogni ciclo mensile — dipende da come l'ente ha configurato la rilevazione. Questa è la sequenza tipica per un ente con terminali di rilevazione e richieste web attive.

1. **Predisposizione Mese** — se il flusso dell'ente lo prevede, predispone i cartellini vuoti del periodo (Gestione Mensile, par. 4.1).
2. **Import dei dati di rilevazione** — durante tutto il mese, con cadenza regolare: da terminale in rete (Scarica orologi FTP) o da file (Leggi dati da scarico) — Funzioni, par. 8.1-8.2.
3. **Elabora Timbrature** — applica i profili orari alle timbrature importate e assegna le causali (Gestione Mensile, par. 4.5).
4. **Controllo** — verifica Timbrature non Valide e le Anomalie Mensili dei singoli dipendenti, correggendo alla fonte quanto possibile prima di intervenire sulle causali.
5. **Giustificativi** — inserisce in blocco le assenze autorizzate (ferie, malattia, permessi) non derivanti da timbratura (par. 4.4).
6. **Variazioni Causali** — corregge in blocco le causali assegnate erroneamente dall'elaborazione automatica (par. 4.6).
7. **Gestione Timbrature** — interviene caso per caso sui dipendenti che richiedono una correzione puntuale non gestibile in blocco (par. 4.7).
8. **Stampa Cartellino — prova** — verifica il risultato prima di chiudere il periodo, ripetendo i passaggi precedenti finché necessario (par. 4.8).
9. **Stampa Cartellino — definitiva** — chiude il periodo. Da qui in avanti una correzione richiede Sblocca Cartellino (par. 8.11).
10. **Riepiloghi e trasmissione** — Riepilogo Causali, Stampa 48 Ore, Buoni Pasto e, quando previsto, Scarico Dati per Paghe verso la procedura stipendi.

---

## 14. Domande frequenti

**Una funzione risulta bloccata per il mio utente: è un guasto?**
Nella maggior parte dei casi no: alcune funzioni (ad esempio Controllo Timbrature nel menu Gestione Mensile) sono abilitate solo per determinati profili utente. Verificare con l'amministratore di sistema se il proprio utente ha i permessi necessari prima di segnalare un malfunzionamento.

**In Gestione Timbrature la ricerca sul cartellino di un dipendente non restituisce nulla**
Significa che per quel dipendente non ci sono ancora dati elaborati nel mese cercato. Usare il comando Trova Mesi per vedere quali periodi hanno dati disponibili, oppure eseguire prima Elabora Timbrature sul periodo desiderato (par. 4.5).

**Devo correggere un cartellino già stampato in definitivo**
Serve prima Sblocca Cartellino (par. 8.11), indicando mese e, se si vuole limitare l'effetto, il singolo dipendente. Solo dopo lo sblocco il cartellino torna modificabile da Gestione Timbrature, Giustificativi o Variazioni Causali.

**Un dipendente ha più giorni di ferie/permesso consecutivi da registrare**
Usare Giustificativi (par. 4.4) indicando l'intervallo Dal/Al Giorno e la causale corretta, invece di inserire una causale alla volta da Gestione Timbrature.

**Devo spostare una giornata da una causale sbagliata a quella corretta, per più dipendenti insieme**
È il caso d'uso di Variazioni Causali (par. 4.6): indicare causale di partenza e di arrivo, l'intervallo di giorni e i dipendenti coinvolti.

**Come verifico il rispetto del riposo giornaliero e del limite settimanale?**
La stampa Stampa 48 Ore (par. 4.12, Gestione Mensile) confronta i turni del periodo con i limiti di legge su riposo giornaliero e orario settimanale massimo.

---

## 15. Glossario

| Termine | Definizione |
| --- | --- |
| Causale | Codice che classifica un'ora o una giornata: lavoro ordinario, straordinario, ferie, malattia, permesso e così via. Governa sia il calcolo del cartellino sia, quando previsto, lo scarico verso le paghe. |
| Profilo orario | La regola settimanale che definisce, fascia per fascia, l'orario teorico di un dipendente e le causali da assegnare alle timbrature in ciascuna fascia. |
| Centro di costo | Suddivisione organizzativa (settore, ufficio) usata come filtro trasversale in quasi tutte le funzioni del modulo. |
| Cartellino | Il prospetto mensile delle presenze di un dipendente, dalle timbrature grezze alle causali elaborate, fino alla stampa in prova o definitiva. |
| Cartellino definitivo | Stato di un cartellino chiuso in stampa: da questo momento è protetto da modifica e richiede uno sblocco esplicito per essere corretto. |
| Giustificativo | Registrazione di un'assenza autorizzata (ferie, malattia, permesso) non derivante da una timbratura effettiva. |
| Anomalia | Segnalazione automatica che una timbratura o un giorno non rispettano le regole attese (orario, sequenza, tetto ore) e richiedono verifica. |
| Compensazione | Tabella che converte ore in importi o riposi compensativi, applicata in fase di stampa cartellino. |
| Responsabile | Utente abilitato ad approvare le richieste di autorizzazione dei dipendenti del proprio ufficio/settore nei Servizi Web. |
| Servizi Web | L'accesso self-service allo stesso patrimonio dati, riservato a dipendenti e responsabili, senza passare dall'ufficio del personale. |

Manuale operativo del modulo Timbrature (Cityware · Paghe). Percorso di riferimento: Menu principale → Paghe → Timbrature.