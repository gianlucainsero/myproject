# Gestione Documenti

## Accesso alla funzione

Si accede a **Gestione documenti** attraverso il menù:

**Gestione Documentale → Gestioni → Gestione Testi → Gestione documenti**

## Schermata principale

Dalla schermata principale è possibile:

- Creare un nuovo record tramite il pulsante **"Nuovo"** (tasto funzione `F2`)
- Impostare un filtro di ricerca
- Elencare i record tramite il pulsante **"Elenca"** (tasto funzione `F4`)

[Schermata principale di Gestione Documenti con i campi: Dip./Servizio Proponente, Classificazione/Servizio, Da Numero, A Numero, Anno, Oggetto, Documento (Dalla Data / Alla Data), Stato Atti, e i pulsanti F2-Nuovo e F4-Elenca]

## Ricerca e filtri

Impostando più filtri di ricerca contemporaneamente è possibile operare **ricerche complesse**.

Una volta completata l'impostazione dei filtri di ricerca, basterà cliccare su **"Elenca"** per ottenere un elenco dei record filtrati.

> Cliccando sul pulsante "Elenca", senza aver impostato alcun filtro, il programma proporrà tutti i record presenti nel sistema.

### Filtro per Servizio

Cliccando sulla **lentina** in corrispondenza del campo **"Servizio"**, il programma proporrà un pannello da cui selezionare il servizio che ha proposto l'atto e per il quale si intende filtrare la ricerca.

[Pannello "Risultato Ricerca" con elenco servizi: Codice e Descrizione (es. 108 - Servizio Autonomia Polizia Locale, 106 - Settore Assistenza Organi Istituzionali SUAP e Patrimonio, 107 - Settore Avvocatura, 104 - Settore Lavori Pubblici, ecc.)]

### Filtro per Oggetto

Tramite il campo **Oggetto** si potrà operare una ricerca in funzione di una o più parole chiave presenti nell'oggetto dei record che si intende filtrare.

Inserendo il simbolo **`%`** all'inizio ed alla fine della parola chiave, il sistema sarà in grado di ricercare tutti i record nel cui campo oggetto sia presente la parola chiave impostata, **indipendentemente dalla posizione** che essa occupa all'interno dell'oggetto.

**Esempio:** per cercare tutti i record contenenti la parola "concessione" nell'oggetto, inserire nel campo Oggetto:

```
%concessione%
```

[Schermata con campo Oggetto valorizzato con "%concessione%" per ricerca con jolly]

### Filtro per Stato Atti

Cliccando sul menu **"Stato Atti"** si potrà selezionare lo stato in cui il documento versa attualmente e per il quale si intende filtrare la ricerca.

Le opzioni disponibili sono:

- **Tutti**
- **Solo Definitivi**
- **Solo Non Definitivi**

[Menu a tendina "Stato Atti" con le tre opzioni: Tutti, Solo Definitivi, Solo Non Definitivi]