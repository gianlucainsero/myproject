# Manutenzione Documenti

## Accesso alla funzione

Si accede a **Manutenzione Documenti** attraverso il menù:

**Gestione Documentale → Utilità → Manutenzione Documenti**

## Schermata principale

Dalla schermata principale è possibile creare un nuovo record tramite il pulsante **"Nuovo"**; dalla stessa schermata è possibile impostare un filtro di ricerca.

[Schermata principale di Manutenzione Documenti con i campi di filtro: Tipo Documento, Da Numero, A Numero, Anno, Organo, Servizio, Oggetto, Emissione (Da/Alla Data), Scadenza (Da/Alla Data) e pulsante "Elenca"]

## Ricerca e filtri

Impostando più filtri di ricerca contemporaneamente è possibile operare ricerche complesse.

Una volta completata l'impostazione dei filtri di ricerca, basterà cliccare su **"Elenca"** per ottenere un elenco dei record filtrati.

> **Nota:** Cliccando sul pulsante "Elenca", senza aver impostato alcun filtro, il programma proporrà tutti i record presenti nel sistema.

### Filtro per Tipo documento

Cliccando sul menu **"Tipo documento"** si potrà selezionare il tipo documento per il quale si intende filtrare la ricerca.

Le opzioni disponibili nel menu a tendina sono:

- Tutti
- Proposta
- Delibera
- Ordine del giorno
- Comunicazione
- Verbale
- Determina
- Ordinanza
- Contratto
- Bando
- Documento generico
- Documento
- Testo Base
- Documento Web
- Comunicazione Capi Gruppo
- Lettera
- Decreto

### Filtro per Organo

Cliccando sulla **lentina** in corrispondenza del campo **"Organo"** il programma proporrà un pannello da cui selezionare l'organo per il quale si intende filtrare la ricerca.

[Finestra di ricerca "Elenco Organi" con colonne Codice e Descrizione. Esempi di valori: C – CONSIGLIO, CA – COMUNICAZIONE AI CAPIGRUPPO, CU – COMUNICAZIONE UFFICI, D – DETERMINA, DR – DETTIVA, G – GIUNTA, OS – ORDINANZA]

### Filtro per Dip./Servizio Proponente

Cliccando sulla **lentina** in corrispondenza del campo **"Dip./Servizio Proponente"** il programma proporrà un pannello da cui selezionare il servizio che ha proposto l'atto e per il quale si intende filtrare la ricerca.

[Finestra di ricerca "Elenco Servizi" con colonne Codice e Descrizione. Esempi di valori: 1 – AFFARI GENERALI E SERVIZI INFORMATIVI, 2 – SERVIZI FINANZIARI E RISORSE UMANE, 3 – SERVIZI ALLA POPOLAZIONE E ALLE IMPRESE, 4 – SERVIZI SOCIALI, 5 – POLIZIA LOCALE E PROTEZIONE CIVILE, 6 – LAVORI PUBBLICI - PATRIMONIO - AMBIENTE, 7 – EDILIZIA E URBANISTICA, 96 – SEGRETARIO GENERALE, SI – SINDACO]

### Filtro per Oggetto

Tramite il campo **Oggetto** si potrà operare una ricerca in funzione di una o più parole chiave presenti nell'oggetto dei record che si intende filtrare.

Inserendo il simbolo **`%`** all'inizio ed alla fine della parola chiave, il sistema sarà in grado di ricercare tutti i record nel cui campo oggetto sia presente la parola chiave impostata, indipendentemente dalla posizione che essa occupa all'interno dell'oggetto.

**Esempio:** per cercare tutti i record contenenti la parola "Regolamentazione" nell'oggetto, inserire nel campo:

```
%Regolamentazione%
```

## Visualizzazione dei risultati

Cliccando sul tasto **"Elenca"** il sistema proporrà un elenco dei record filtrati in base a quanto impostato in uno o più campi tra quelli precedentemente descritti: la ricerca così impostata sarà tanto più raffinata quanto maggiore sarà il numero di filtri contemporaneamente valorizzati.

[Elenco risultati di ricerca con colonne: N. Documento, Tipo, Organo, Oggetto, Data, Servizio. Esempio di righe: 63-2022 / ORDINANZA / OS / PROVA ORDINANZA / 11/05/2022 / 1; 581 / PROPOSTA / DR / RICHIESTA GRADUAZIONE DA PARTE DI ALTRI ENTI... / 14/04/2022 / 2; ecc.]

## Accesso al dettaglio del record

Dalla lista proposta sarà possibile accedere al dettaglio di un record operando un **doppio click** sulla riga corrispondente, accedendo dunque a tutte le funzioni attive, o alla semplice visualizzazione, per il record stesso.

[Schermata di dettaglio record "Gestione Ordinanza" con intestanti: Numero, Anno, Data Atto, Tipo, Riservato, N. Generale, Organo/Tipo Atto, Dip./Servizio Proponente, Classificazione/Servizio, Natura, Oggetto, Firmatario, Responsabile Procedimento. Tab disponibili: Dati Principali, Titolo e Fascicolazione, Omissis, Destinatari, Iter, Pubblicazioni, Note. Menu laterale: F6-Aggiorna, F3-Altra Ricerca, Ritorna, Menu Principale (Principali, Blocca, Estensori di Pubblicazione, Duplica Dati Principali), Componi Atto PDF, Altre]