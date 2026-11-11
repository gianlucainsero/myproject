# Gestione Decreti

## Accesso al modulo

Si accede a **Gestione Decreti** attraverso il menù:

**Gestione Documentale → Gestioni → Gestione Testi → Gestione Decreti**

## Schermata principale

Dalla schermata principale è possibile:

- Creare un nuovo record tramite il pulsante **"Nuovo"** (F2)
- Impostare un filtro di ricerca
- Elencare i record tramite il pulsante **"Elenca"** (F4)

[Schermata principale di Gestione Decreti con campi: Dip./Servizio Proponente, Classificazione/Servizio, Da Numero, A Numero, Anno, Oggetto, Documento (Dalla Data / Alla Data), Pubblicazione (Dalla Data / Alla Data), Stato Atti, Tipo di Decreto. Pulsanti: F2 - Nuovo, F4 - Elenca]

## Ricerca e filtri

### Ricerca complessa

Impostando più filtri di ricerca contemporaneamente è possibile operare ricerche complesse.

Una volta completata l'impostazione dei filtri di ricerca, basterà cliccare su **"Elenca"** per ottenere un elenco dei record filtrati.

> **Nota:** Cliccando sul pulsante "Elenca", senza aver impostato alcun filtro, il programma proporrà tutti i record presenti nel sistema.

### Filtro: Dip./Servizio Proponente

Cliccando sulla lente d'ingrandimento in corrispondenza del campo **"Dip./Servizio Proponente"** il programma proporrà un pannello da cui selezionare il servizio che ha proposto l'atto e per il quale si intende filtrare la ricerca.

[Pannello "Risultato Ricerca" con elenco servizi: es. 108 - Servizio Autonomo Polizia Locale, 106 - Settore Assistenza Organi Istituzionali SUAP e Patrimonio, 107 - Settore Avvocatura, 104 - Settore Lavori Pubblici, 109 - Settore Patrimonio e Demanio, 102 - Settore Risorse, 101 - Settore Servizi, 105 - Settore Urbanistica, ecc.]

### Filtro: Oggetto

Tramite il campo **Oggetto** si potrà operare una ricerca in funzione di una o più parole chiave presenti nell'oggetto dei record che si intende filtrare.

Inserendo il simbolo **`%`** all'inizio ed alla fine della parola chiave, il sistema sarà in grado di ricercare tutti i record nel cui campo oggetto sia presente la parola chiave impostata, indipendentemente dalla posizione che essa occupa all'interno dell'oggetto.

**Esempio:** per cercare tutti i record contenenti la parola "nomina", inserire nel campo Oggetto:

```
%nomina%
```

[Schermata con campo Oggetto valorizzato con "%nomina%"]

### Filtro: Stato Atti

Cliccando sul menu **"Stato Atti"** si potrà selezionare lo stato in cui il documento versa attualmente e per il quale si intende filtrare la ricerca.

Opzioni disponibili:
- **Tutti**
- **Solo Definitivi**
- **Solo Non Definitivi**

[Menu a tendina "Stato Atti" con opzioni: Tutti, Solo Definitivi, Solo Non Definitivi]

### Filtro: Tipo Decreti

Cliccando sul menu **"Tipo Decreti"** si potrà selezionare il tipo di decreto in funzione della sua scadenza e filtrare dunque la ricerca in base a tale dato.

Opzioni disponibili:
- **Tutte**
- **Scadute**
- **Scadute da Controllare**

[Menu a tendina "Tipo di Decreto" con opzioni: Tutte, Scadute, Scadute da Controllare]

## Visualizzazione dei risultati

Cliccando sul tasto **"Elenca"** il sistema proporrà un elenco dei record filtrati in base a quanto impostato in uno o più campi tra quelli precedentemente descritti: la ricerca così impostata sarà tanto più raffinata quanto maggiore sarà il numero di filtri contemporaneamente valorizzati.

[Elenco risultati "Ricerca Documenti" con colonne: Tipo, Sig., N. Documento, Oggetto, Data, Ultima Modifica, Info, Cons., Pubblicazione. Esempi di righe: LD 105 8-2022 "autorizzazione attivazione canile rifugio comunale", LD 101 7-2022 "Designazione Segretario Sottocommissione Elettorale Circondariale", ecc.]

## Accesso al dettaglio del record

Dalla lista proposta sarà possibile accedere al dettaglio di un record operando un **doppio click** sulla riga corrispondente, accedendo dunque a tutte le funzioni attive, o alla semplice visualizzazione, per il record stesso.

[Schermata di dettaglio decreto con campi: Numero, Anno, Riservato, Data Atto, Tipo (DECRETO), Creato da, Ultima Mod. Dip./Servizio Proponente, Classificazione/Servizio, Data Esecutività, Non richiede visto/parere contabile, Oggetto, Firmatario, Class. Amm. Trasparente. Tab: Dati Principali, Omissioni (0), Par., Pubblicazioni. Menu Funzioni: Principali, Pubblica, Dati Principali, Componi Atto PDF, Altre, Pubblica in A.T. Elenco Documenti con colonne: Pubbl., File, Descrizione Documento]