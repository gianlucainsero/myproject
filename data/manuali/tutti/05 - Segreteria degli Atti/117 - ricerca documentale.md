# Ricerca Documentale

## Accesso alla Funzionalità

Si accede a **Ricerca documenti** attraverso il menù:

**Gestione Documentale → Gestioni → Ricerca documenti**

## Schermata Principale

Dalla schermata principale è possibile:

- Creare un nuovo record tramite il pulsante **"Nuovo"**
- Impostare un filtro di ricerca

[Schermata principale della Ricerca Documenti con campi: Tipo Documento, Da Numero, A Numero, Anno, Organo, Servizio, Oggetto, Emissione (Dalla Data / Alla Data), Scadenza (Dalla Data / Alla Data). Pulsanti: F2-Nuovo, F4-Elenca]

## Impostazione dei Filtri di Ricerca

Impostando più filtri di ricerca contemporaneamente è possibile operare **ricerche complesse**.

Una volta completata l'impostazione dei filtri di ricerca, basterà cliccare su **"Elenca"** per ottenere un elenco dei record filtrati.

> **Nota:** Cliccando sul pulsante "Elenca" senza aver impostato alcun filtro, il programma proporrà tutti i record presenti nel sistema.

### Filtro: Tipo Documento

Cliccando sul menu **"Tipo documento"** si potrà selezionare il tipo documento per il quale si intende filtrare la ricerca.

[Menu a tendina "Tipo Documento" con opzioni: Tutti, Proposta, Delibera, Ordine del giorno, Convocazione, Verbale, Determina, Ordinanza, Contratto, Bando, Documento generico, Documento, Testo Base, Documento Web, Comunicazione Capi Gruppo, Lettera, Decreto]

### Filtro: Organo

Cliccando sulla **lentina** in corrispondenza del campo **"Organo"** il programma proporrà un pannello da cui selezionare l'organo per il quale si intende filtrare la ricerca.

[Pannello "Risultato Ricerca - Elenco Organi" con colonne Codice e Descrizione. Esempi: C-CONSIGLIO, CA-COMUNICAZIONE CAPIGRUPPO, CU-COMUNICAZIONE UFFICI, D-DETERMINA, DL-ATTO DI LIQUIDAZIONE, G-GIUNTA, LD-DECRETO, OD-ORDINANZA DIRIGENZIALE, OS-ORDINANZA SINDACALE, RO-Relazioni Orali]

### Filtro: Servizio

Cliccando sulla **lentina** in corrispondenza del campo **"Servizio"** il programma proporrà un pannello da cui selezionare il servizio che ha proposto l'atto e per il quale si intende filtrare la ricerca.

[Pannello "Risultato Ricerca - Elenco Servizi" con colonne Codice e Descrizione. Esempi: 108-Settore Autonomia Polizia Locale, 106-Settore Assistenza Organi Istituzionali SUAP e Patrimonio, 107-Settore Avvocatura, 104-Settore Lavori Pubblici, 109-Settore Patrimonio e Demanio, 102-Settore Risorse, 101-Settore Servizi, 105-Settore Urbanistica, e altri]

### Filtro: Oggetto

Tramite il campo **oggetto** si potrà operare una ricerca in funzione di una o più parole chiave presenti nell'oggetto dei record che si intende filtrare.

Inserendo il simbolo **`%`** all'inizio ed alla fine della parola chiave, il sistema sarà in grado di ricercare tutti i record nel cui campo oggetto sia presente la parola chiave impostata, **indipendentemente dalla posizione** che essa occupa all'interno dell'oggetto.

**Esempio:** Per cercare tutti i record contenenti la parola "Raffilamento" nell'oggetto, inserire nel campo:

```
%Raffilamento%
```

[Schermata con campo Oggetto valorizzato con "%Raffilamento%"]

### Filtro: Date (Emissione e Scadenza)

Sarà possibile filtrare la ricerca anche in base ad un **intervallo di date** riferite a:

- **Emissione** del record (campi "Dalla Data" / "Alla Data")
- **Scadenza** del record (campi "Dalla Data" / "Alla Data")
- **Entrambe** le date contemporaneamente

[Schermata con campi Emissione e Scadenza e calendario a tendina per la selezione della data (es. Mag 2022)]

## Esecuzione della Ricerca

Cliccando sul tasto **"Elenca"** il sistema proporrà un elenco dei record filtrati in base a quanto impostato in uno o più campi tra quelli precedentemente descritti.

> La ricerca così impostata sarà tanto più **raffinata** quanto maggiore sarà il numero di filtri contemporaneamente valorizzati.

## Visualizzazione dei Risultati

[Elenco risultati ricerca con colonne: N. Documento, Tipo, Organo, Oggetto, Data, Servizio. Esempi di righe: 659-2022 DETERMINA DL, 3276 PROPOSTA DL, 3277 PROPOSTA DL, 110-2022 ORDINANZA OD, ecc. Pulsante F3-Altra Ricerca. Paginazione: Visualizzati 1-17 di 2.461]

Dalla lista proposta sarà possibile accedere al **dettaglio di un record** operando un **doppio click** sulla riga corrispondente, accedendo dunque a tutte le funzioni attive, o alla semplice visualizzazione, per il record stesso.

[Schermata di dettaglio record con: Numero, Anno, Tipo, Data Atto, Organo/Tipo Atto, Dip./Servizio Proponente, Classificazione/Servizio, Natura, Oggetto, Firmatario, Responsabile Procedimento. Tab: Dati Principali, Omissis, Destinatari, Iter, Pubblicazioni, Note. Menu Funzioni: Principali, Pubblica, Duplica Dati Principali, Altre, Componi Atto PDF, Pubblica in A.T. Sezione Elenco Documenti con file allegati]