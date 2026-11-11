# Statistiche dei fascicoli

**Menu:** Fascicoli Elettronici → Statistiche → Grafici

**Destinatari:** responsabili di servizio e operatori SUAP/SUE

**A cosa serve:** sapere quante pratiche ci sono, quante sono ancora da gestire, quante ne sono entrate e uscite in un periodo, quanto durano, come si sono chiuse e come cambiano nel tempo. Ogni numero si può aprire per vedere le pratiche che conta.

**In breve:** filtri → **[F4 - Elenca]** → spunte nel riquadro Statistiche → **[Mostra statistiche]**

---

## Scegliere le pratiche (filtri)

I filtri sono quelli della ricerca dei fascicoli, in due gruppi: **Periodo e numero** (anno, numeri, date di registrazione, ricezione, chiusura e scadenza) e **Procedimento** (sportello, tipologia, settore, attività, procedimento, evento, tipologia di segnalazione, codice procedura).

Accanto alle date di ricezione ci sono tre **periodi rapidi** che compilano da soli *Da Data Ric.* e *A Data Ric.*:

| Pulsante | Periodo |
|---|---|
| **[Da inizio anno]** | dal 1° gennaio dell'anno in corso a oggi |
| **[Ultimi 90 giorni]** | gli ultimi 90 giorni, oggi compreso |
| **[Mese scorso]** | dal primo all'ultimo giorno del mese precedente |

[Immagine: pannello filtri "Periodo e numero" con i campi Dal Numero, Al Numero, Anno, Da/A Data Reg., Da/A Data Ric., Da/A Data Chiusura, Da/A Data Scadenza e i tre pulsanti rapidi evidenziati in rosso: "Da inizio anno", "Ultimi 90 giorni", "Mese scorso"]

> **Consiglio:** indicare sempre un **anno** o un **intervallo di date**. Senza un periodo non si possono calcolare il bilancio e il confronto con l'anno precedente, e il calcolo è molto più lento. Senza filtri le statistiche contano tutto l'archivio.

Il comando **[F2 - Svuota Ricerca]** cancella tutti i filtri. In *Tipologia Segnalazione* la voce **Nessuna** significa "nessun filtro".

---

## L'elenco delle pratiche

Con **[F4 - Elenca]** compare l'elenco delle pratiche che rispondono ai filtri e, a destra, il riquadro **Statistiche**. Le colonne sono come in Fascicoli Elettronici:

- **Pratica** (serie, numero e anno; l'elenco parte dalla più recente), **Registrazione**, **Richiesta on-line**, **Ricezione** con l'ora;
- **Giorni**: per le chiuse quanti giorni sono durate; per le aperte, in grassetto, da quanti giorni sono aperte.

Un **doppio clic** su una riga apre il fascicolo. Per cambiare i filtri premere **[F3 - Altra Ricerca]**: i filtri restano compilati, le spunte del raggruppamento ripartono vuote.

[Immagine: elenco pratiche con colonne Pratica, Registrazione, Richiesta on-line, Ricezione, Giorni, Assegnatario, Sportello, Settore, Procedimento e riquadro Statistiche a destra con le checkbox di raggruppamento]

---

## Scegliere come raggruppare

Nel riquadro **Statistiche - raggruppa per (spunta in ordine)** si spuntano le voci per cui dividere i numeri: Sportello, Sportello aggregato, Settore, Servizio, Attività, Procedimento, Tipologia, Evento, Tipologia segnalazione, Responsabile, Assegnatario, Istruttore tecnico, amministrativo e ambientale, Anno.

- **Una spunta:** i numeri sono divisi per quella voce (es. per Settore).
- **Più spunte:** le voci si concatenano **nell'ordine in cui si spuntano**. Accanto a ogni voce compare il numero d'ordine e sotto la riga *Livelli* (es. `Settore › Procedimento`). Per cambiare l'ordine si tolgono le spunte e si rimettono.

Poi premere **[Mostra statistiche]**: la pagina delle statistiche compare sotto l'elenco e la pagina scende da sola.

[Immagine: riquadro "Statistiche - raggruppa per (spunta in ordine)" con checkbox Sportello, Sportello aggregato, Settore (spuntata, ordine 1), Servizio, Attività, Procedimento (spuntata, ordine 2), Tipologia, Evento, Tipologia segnalazione, Responsabile, Assegnatario, Istruttore tecnico, Istruttore amministrativo, Istruttore ambientale, Anno. Sotto: "Livelli: Settore › Procedimento" e pulsante "Mostra statistiche"]

### Spunte, nell'ordine

| Spunte, nell'ordine | Domanda a cui risponde |
|---|---|
| Settore | Quante pratiche ha ogni settore? |
| Assegnatario › Procedimento | Per ogni persona, quali procedimenti segue? |
| Procedimento › Assegnatario | Per ogni procedimento, chi lo segue? |
| Istruttore tecnico › Procedimento | Per ogni istruttore, quali procedimenti istruisce? |
| Anno › Settore | Come cambia ogni anno la distribuzione per settore? |

**Voci che scompaiono:** se un filtro fissa già un solo valore (es. lo Sportello, oppure un periodo dentro un solo anno per la voce Anno), raggruppare per quella voce darebbe una riga sola: la voce viene nascosta. *Assegnatario* compare solo se l'ente usa le assegnazioni; le voci degli *istruttori* solo se il ruolo è usato.

---

## Leggere le statistiche

In alto la **barra delle sezioni** porta direttamente a ogni blocco; sotto, la riga **Stai visualizzando** ricorda filtri e raggruppamento. I **riquadri** in testa riassumono la situazione, con la variazione rispetto allo stesso periodo dell'anno precedente (▲ in aumento, ▼ in calo; bordo rosso sugli indicatori critici).

[Immagine: barra di navigazione sezioni: Bilancio, Incrocio, Da gestire, Tempi, Esito, Confronto, Passi, Andamento, Dati da sistemare. Sotto: riga "Stai visualizzando: Data ricezione dal 01/01/2024 al 29/10/2026 - raggruppate per settore e procedimento". Riquadri: PRATICHE 140 (▼23%), APERTE 119 (▼25%), SOSPESI 1 (0%), SCADUTE 28 (▼42%), IN ATTESA DI PRESA IN CARICO 73 (▼22%), DURATA MEDIANA 90 gg (0%), CHIUSE ENTRO LA SCADENZA 0% (▼17 punti)]

---

## Bilancio del periodo

Cosa ha fatto l'ufficio nel periodo dei filtri, con numeri che tornano sempre:

$$\text{aperte all'inizio} + \text{ricevute} - \text{chiuse} = \text{aperte alla fine}$$

Le **chiuse** comprendono anche le pratiche ricevute prima del periodo e le chiusure dell'iter. Il **Saldo** dice di quanto l'arretrato è cresciuto (in rosso) o calato. Sotto, il grafico **Ricevute e chiuse per mese**.

[Immagine: sezione "Bilancio del periodo" con "Il periodo in numeri": APERTE AL 01/01/2024 = 2.323, + RICEVUTE = 140, - CHIUSE = 25, = APERTE AL 29/10/2026 = 2.438, SALDO = +115 (l'arretrato cresce). Sotto: grafico a linee "Ricevute e chiuse per mese" con legenda Ricevute (blu) e Chiuse (arancione), asse X con anni 2024, 2025, 2026]

---

## Incrocio (con due o più voci spuntate)

Due mappe di calore, **Pratiche** e **Aperte**: più il colore è scuro, più pratiche ci sono. In riga i primi livelli, in colonna l'ultimo; in fondo e a destra i totali. Le voci minori sono riunite in "Altri".

[Immagine: due mappe di calore affiancate: "Pratiche per settore e procedimento" e "Aperte per settore e procedimento". Righe: settori (COMMERCIO IN SEDE FISSA, SETTORE PER TEST, ALTRI SETTORI, Sanità e Sicurezza, EDILIZIA PRODUTTIVA, ecc.). Colonne: procedimenti. Celle colorate in scala di blu con numeri. Riga Totale in fondo, colonna Totale a destra. Legenda scala colori in basso]

---

## Pratiche da gestire

Le aperte divise per avanzamento dei passi: **senza passi**, **passi tutti da aprire**, **con un passo aperto**, **altre aperte**. Mostra dove si è fermato il lavoro.

[Immagine: grafico a barre orizzontali "Pratiche aperte: a che punto sono, per settore e procedimento". Legenda: Senza passi 33% (blu), Passi tutti da aprire 18% (arancione), Con un passo aperto 48% (verde), Altre aperte 2% (grigio). Barre per settore/procedimento con suddivisione a colori. Esempi: COMMERCIO IN SEDE FISSA - TEST ANCONA - Segnalazione Certificata di... = 40; SETTORE PER TEST - PROCEDIMENTO TEST 2 = 23; ecc.]

---

## Tempi ed esito

**Tempi:** la durata tipica (mediana, in giorni dalla ricezione alla chiusura) per ogni gruppo, dal più lento al più veloce, e la quota di chiuse entro o oltre la scadenza. **Esito:** come si sono chiuse (positivo, negativo, annullata, non estratta, chiusura iter).

[Immagine: sezione "Tempi di lavoro" - grafico a barre orizzontali "Quanto dura una pratica (giorni, mediana), per settore e procedimento". Legenda: Oltre la scadenza 29% (rosso), Senza scadenza 71% (grigio). Barre ordinate dal più lento al più veloce con etichette gg e n. chiuse. Esempi: (non indicato) = 791 gg - 1 chiusa; ALTRI SETTORI - Comunicazione Cessazione... = 380 gg - 1 chiusa; ecc.]

[Immagine: sezione "Esito delle pratiche chiuse" - grafico a barre orizzontali "Esito delle chiuse, per settore e procedimento". Legenda: Positivo 62% (blu), Annullata 10% (arancione), Non estratta 10% (giallo), Chiusura iter 19% (rosa). Barre per settore/procedimento con suddivisione a colori]

---

## Confronto con l'anno precedente

Ogni indicatore con due barre (periodo scelto in **blu**, anno precedente in **grigio**) e la variazione.

[Immagine: sezione "Confronto con l'anno precedente" - "Questo periodo a confronto con l'anno precedente". Legenda: Periodo selezionato (blu), Anno precedente (grigio). Indicatori con barre affiancate e valori numerici: Pratiche 140/182 (▼23%), Aperte (oggi) 119/158 (▼25%), Scadute (oggi) 28/48 (▼42%), Chiuse 21/24 (▼13%), Durata media (gg) 124.3/123.8 (≈0%), Durata mediana (gg) 90/90 (≈0%), Chiuse entro la scadenza 0/1 (▼1), Chiuse oltre la scadenza 5/5 (≈0%), Chiuse positivamente 13/13 (≈0%), Chiuse negativamente 0/0 (≈0%), Da richiesta on-line 13/44 (▼70%)]

> **Attenzione:** "Aperte (oggi)" e "Scadute (oggi)" sono la situazione **di oggi** delle pratiche di ciascun periodo, non quella di un anno fa.

---

## Passi in corso

I passi avviati e non chiusi, per **responsabile del passo** e per **settore e servizio**; in rosso la parte scaduta. "(non indicato)" raccoglie i passi senza responsabile o senza ufficio.

[Immagine: sezione "Passi in corso" con due grafici a barre orizzontali. Primo: "Per responsabile del passo" - barre blu (Non scaduti) e rosse (Scaduti) per nome: BIANCHI LUCA 46, Verdi Paolo 30, NERI GIULIA 27, Gatti Andrea 21, RESPONSABILE SERVIZIO 16, (non indicato) 12, FRANCO ESPOSITO 2, Russo Elena 2. Secondo: "Per settore e servizio (organigramma)" - barre per: TRIBUTI 44, AFFARI GENERALI 40, (non indicato) 35, RAGIONERIA 19, SUAP 17, URBANISTICA 1]

---

## Andamento mensile

Ricevute, registrate e chiuse mese per mese e quante restano aperte a fine mese. La **fascia azzurra** segna il periodo dei filtri.

[Immagine: sezione "Andamento mensile" con tre grafici. Primo: "Pratiche ricevute, registrate e chiuse per mese" - grafico a linee con legenda Ricevute (blu), Chiuse (arancione), Registrate (verde), asse X anni 2024-2026, fascia azzurra sul periodo dei filtri. Secondo: "Pratiche aperte a fine mese" - grafico ad area verde con andamento crescente. Terzo: "Ricevute per mese delle 5 combinazioni principali" - grafico a linee multiple per le 5 combinazioni settore/procedimento più frequenti]

---

## Dati da sistemare

Compare solo se ci sono pratiche con **date o stato in contrasto** (es. stato di chiusura senza data di chiusura). Queste pratiche falsano tempi, esiti e bilancio: vanno corrette nel fascicolo. Il numero apre l'elenco delle pratiche da sistemare.

[Immagine: sezione "Dati da sistemare" - "Pratiche con date o stato in contrasto". Tabella con colonne Motivo e Pratiche: "Stato di chiusura registrato, ma nessuna data di chiusura" = 3, Totale = 3]

In fondo alla pagina, la sezione **Come leggere i dati** spiega come sono calcolati i numeri.

---

## Dai numeri alle pratiche

I **numeri sottolineati** (riquadri, bilancio, celle delle mappe di calore, tabelle) si possono cliccare: aprono l'elenco delle pratiche che quel numero conta. Sopra l'elenco la riga **Stai vedendo** dice quale numero si è aperto e quante pratiche sono; **Mostra tutte le pratiche della ricerca** riporta l'elenco completo. Le statistiche restano sotto, invariate.

[Immagine: riga "Stai vedendo: Tutte le pratiche - Settore COMMERCIO IN SEDE FISSA - Procedimento TEST ANCONA - Segnalazione Certificata di inizio attività per l'esercizio di ec... — 62 pratiche" con link "Mostra tutte le pratiche della ricerca". Sotto: elenco pratiche con colonne Pratica, Registrazione, Richiesta on-line, Ricezione, Giorni, Assegnatario, Sportello, Settore, Procedimento, Tipologia segnalazione, Esito]

- Passando il mouse su una barra, una cella o un nome abbreviato si vede il valore o il nome completo.
- Sotto ogni grafico, **Tabella completa** apre la tabella con tutti i valori.
- "Altri" e "(non indicato)" sono in grigio: voci minori riunite e dati non compilati.

---

## Excel e stampa

### Per un solo blocco (in alto a destra di ogni riquadro):

- **[Excel]:** scarica i dati di quel blocco, con codice e descrizione in colonne separate;
- **[Stampa]:** stampa solo quel blocco con i filtri in testa; dalla finestra di stampa si può salvare in PDF.

### Per tutta la pagina (nel riquadro Statistiche, dopo *Mostra statistiche*):

- **[Esporta Excel]:** tutte le sezioni in un solo foglio, una riga per ogni combinazione;
- **[Esporta HTML]:** tutta la pagina con l'intestazione dell'ente e la data; il pulsante **Stampa** del documento apre la stampa (attivare *Grafica di sfondo* per avere colori e barre).

[Immagine: riquadro "Statistiche - raggruppa per (spunta in ordine)" con Settore (1) e Procedimento (2) spuntati, Livelli: Settore › Procedimento, pulsante "Mostra statistiche" e sotto i pulsanti "Esporta HTML" e "Esporta Excel" evidenziati in rosso]

Se il browser blocca la finestra di stampa, consentire le finestre di questo sito.

---

## Domande frequenti

**Non vedo il bilancio o il confronto con l'anno precedente.**
Indicare nei filtri un anno o un intervallo di date (anche con i periodi rapidi) e ricalcolare.

**Non trovo una voce da spuntare (es. Sportello o Anno).**
Nei filtri c'è già un solo valore per quella voce: togliere il filtro e premere di nuovo **[F4 - Elenca]**.

**Ho cambiato i filtri ma le statistiche sono le stesse.**
Dopo aver cambiato i filtri premere **[F4 - Elenca]**, rimettere le spunte e premere **[Mostra statistiche]**.

**I numeri del bilancio sono diversi da quelli dei riquadri in testa.**
È normale: i riquadri contano le pratiche dei filtri, il bilancio quelle entrate e uscite nel periodo, comprese le chiusure di pratiche ricevute prima.

**I totali dell'elenco non tornano con la tabella.**
Probabilmente è aperto il dettaglio di un numero (lo dice la riga **Stai vedendo**): usare **Mostra tutte le pratiche della ricerca**.