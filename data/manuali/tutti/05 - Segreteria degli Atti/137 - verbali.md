# Gestione Verbali

## Accesso alla funzione

Si accede a **Gestione Verbali** attraverso il menù:

**Gestione Documentale → Gestioni → Convocazioni → Gestione Verbali**

## Schermata principale

Dalla schermata principale è possibile:

- Creare un nuovo record tramite il pulsante **"Nuovo"** (F2 - Nuovo)
- Impostare un filtro di ricerca
- Elencare i record tramite il pulsante **"Elenca"** (F4 - Elenca)

[Schermata principale di Gestione Verbali con i campi di filtro: Dip./Servizio Proponente, Classificazione/Servizio, Da Numero, A Numero, Anno, Oggetto, Documento (Dalla Data / Alla Data), Stato Atti. Pulsanti a destra: F2 - Nuovo, F4 - Elenca]

## Ricerca e filtri

Impostando più filtri di ricerca contemporaneamente è possibile operare **ricerche complesse**.

Una volta completata l'impostazione dei filtri di ricerca, basterà cliccare su **"Elenca"** per ottenere un elenco dei record filtrati.

Cliccando sul pulsante **"Elenca"**, senza aver impostato alcun filtro, il programma proporrà tutti i record presenti nel sistema.

### Filtro: Dip./Servizio Proponente

Cliccando sulla **lentina** in corrispondenza del campo **"Dip./Servizio Proponente"** il programma proporrà un pannello da cui selezionare il servizio che ha proposto l'atto e per il quale si intende filtrare la ricerca.

[Finestra "Risultato Ricerca" con elenco servizi: Codice e Descrizione. Esempi: 108 - Servizio Autonomo Polizia Locale, 106 - Settore Assistenza Organi Istituzionali SUAP e Patrimonio, 107 - Settore Avvocatura, 104 - Settore Lavori Pubblici, 109 - Settore Patrimonio e Demanio, 102 - Settore Risorse, 101 - Settore Servizi, 105 - Settore Urbanistica, 23 - Assistenza Organi Istituzionali e C.u.c., 26 - Avvocatura Comunale, 20 - Ciclo Integrato dei Rifiuti, 94 - Comunicazione Istituzionale e URP, 21 - Demanio, 15 - Lavori Pubblici, 18 - Paesaggio, 25 - Patrimonio, 08 - Politiche Sociali, 16 - Protezione Civile, 22 - Protocollo, 12 - Ricognizione Patrimonio]

### Filtro: Oggetto

Tramite il campo **Oggetto** si potrà operare una ricerca in funzione di una o più parole chiave presenti nell'oggetto dei record che si intende filtrare.

Inserendo il simbolo **`%`** all'inizio ed alla fine della parola chiave, il sistema sarà in grado di ricercare tutti i record nel cui campo oggetto sia presente la parola chiave impostata, **indipendentemente dalla posizione** che essa occupa all'interno dell'oggetto.

**Esempio:** per cercare tutti i record contenenti la parola "giunta" nell'oggetto, inserire:

```
%giunta%
```

[Schermata con campo Oggetto valorizzato con "%giunta%" per ricerca con wildcard]

### Filtro: Stato Atti

Cliccando sul menu **"Stato Atti"** si potrà selezionare lo stato in cui il documento versa attualmente e per il quale si intende filtrare la ricerca.

Le opzioni disponibili sono:

- **Tutti**
- **Solo Definitivi**
- **Solo Non Definitivi**

[Menu a tendina "Stato Atti" con opzioni: Tutti, Solo Definitivi, Solo Non Definitivi]

### Esecuzione della ricerca

Cliccando sul tasto **"Elenca"** il sistema proporrà un elenco dei record filtrati in base a quanto impostato in uno o più campi tra quelli precedentemente descritti.

> La ricerca così impostata sarà tanto più raffinata quanto maggiore sarà il numero di filtri contemporaneamente valorizzati.

## Visualizzazione dei risultati

Dalla lista proposta sarà possibile accedere al dettaglio di un record operando un **doppio click** sulla riga corrispondente, accedendo dunque a tutte le funzioni attive, o alla semplice visualizzazione, per il record stesso.

[Elenco risultati "Ricerca Documenti" con colonne: Organo, Srv, N. Documento, Oggetto, Data, Ultima Modifica, Info, Cass., Pubblicazione. Esempi di record: Verbale della seduta di Giunta Comunale del 19 Maggio 2022, Verbale della seduta di Giunta Comunale del 13 Maggio 2022, ecc. Pulsanti a destra: F2 - Nuovo, F3 - Altra Ricerca, Stampa]

## Dettaglio del record

[Schermata di dettaglio record con campi: Numero (000000000018), Anno (2022), Riservato, Data Atto (01/04/2022), Tipo (VERBALE), Creato da (2019_Suap), Ultimo Mod. (2019_Suap). Tab: Dati Principali, Dati Seduta, Atti del Verbale, Iter, Note (0). Campo Oggetto: "Verbale della seduta di Giunta Comunale del 21 Aprile 2022". Campo Firmatario: 000367 - ALFREDO - 2019_Assistenza Organi Istituzion. Sezione "Elenco Documenti" con colonne: Pubbl., File, Descrizione Documento, Dati Sens. Menu Funzioni a destra: Principali, Sblocca, Duplica Dati Principali, Componi Atto PDF, Altre, Pubblica in A.T.]