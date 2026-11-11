# Località

## Accesso alla sezione

Per accedervi: **Servizi Demografici → Modulo Base → Tabelle Generali → Stati e Paesi → Località**

[Schermata della schermata di ricerca Località con campi: Descrizione località, Codice Provincia, Codice località, Sigla Provincia, Codice Belfiore, Codice Consolato, Numero Regione, Codice C.N.C., Codice Catastale. A destra checkbox: Solo attive, Solo Validati ANPA, Comuni Italiani, Località Estere, Luogo eccezionale]

## Ricerca delle località

Da qui è possibile effettuare una ricerca delle località sia Italiane che Estere.

- **Località italiane**: raggruppate per provincia, e quindi in ordine alfabetico di comune.
- **Località straniere**: raggruppate per stato di appartenenza secondo la codifica fornita dall'ISTAT per gli stati stranieri.

Entrambe le tabelle sono presenti anche sul data base fornito a corredo dell'applicativo. In caso di importazione sul data base utilizzato da Cityware Online, l'Ente deve inserire le singole località straniere.

> **Nota:** Le località italiane vanno inserite con il codice fornito dall'ISTAT mentre per le località straniere prima è obbligatorio inserire la Nazione poi le singole località all'interno dello stato stesso.

## Inserimento di una nuova località

Per inserire una nuova località basta cliccare sul bottone → **Nuovo**.

### Esempio di inserimento nuovo comune estero

[Schermata del form di inserimento località con tab "Italiani" e "Esteri" selezionata. Campi visibili: Codice Nazione, Cod.ISTAT, Progr. Stato, Progr. Località, Luogo Eccezionale, Descr. Località, P.O., Sigla Stato, Cod. Belfiore, Cod.Stato e local. attuali, Cod. Rurale, Cod.Terr.Estero, Cod. Tribunale, Cod. Consolato, situato in, Data inizio, Data cessazione, Disabilitato]

Come prima cosa bisogna inserire la **Nazione**, andandola a ricercare per poi inserirla con il doppio click. Il programma compilerà i campi obbligatori in automatico, come:

- **COD. NAZIONE**: Quello già inserito nella tabella delle Nazioni che va da 200 a 999.
- **PROGR. STATO**: Che di default corrisponde al codice Nazionalità.
- **PROGR. LOCALITÀ**: È proposto automaticamente dal programma come valore progressivo a fronte di ogni stato, di cui è possibile la modifica da parte dell'operatore.
- **CODICE BELFIORE**: Codice utilizzato per il calcolo del codice fiscale. È il codice che appare da posizione 12 a posizione 15 del codice fiscale obbligatorio sia per le località italiane che estere è assegnato dal ministero delle Finanze a livello di provincia o di stato estero. Per le località straniere viene riproposto quello indicato nello stato.

[Schermata con esempio compilato: Codice Nazione 206 BELGIO, Cod.ISTAT 206, Progr. Stato 206, Progr. Località 291, Sigla Stato B, Cod. Belfiore Z103, Cod.Terr.Estero 206, Cod. Tribunale 147 ROMA]

Dopo di che inserire la **Località** desiderata, con annesso **Codice Postale (P.O.)** che per le località italiane deve essere un valore numerico, mentre per le località estere assume valore alfanumerico senza alcun controllo.

[Schermata con esempio: Descr. Località "BAELEN", P.O. "4837" evidenziati in giallo]

### Inserimento del Codice Consolato

Dopo di che andare a ricercare il **Cod. Consolato** (disponibile nelle tabelle tecniche del ministero) al seguente link: **Tabelle di decodifica**, ricercando la voce → **Settore Territori Consolati** (dove scarica una tabella in excel con tutti i codici delle Ambasciate o Consolati).

[Schermata della tabella "Stati Territori Consolati" del Ministero dell'Interno con colonne: Codice Stato/Territori, Denominazione Stato/Territorio, Codice Consolati, Rango, Sede, Codice Stato di appartenenza, Denominazione stato di appartenenza. Esempio evidenziato: 206 BELGIO → 2230100 AMBASCIATA D'ITALIA → BRUXELLES → 223 BELGIO]

Una volta compilati tutti i campi → **Aggiungi**

[Schermata con campo Cod. Consolato compilato: 2230100 AMBASCIATA D'ITALIA, situato in BRUXELLES]

## Verifica dell'inserimento

Per essere certi che la nuova località sia stata inserita correttamente, è possibile andarla a ricercare in località, scrivendone il nome e cliccando il tasto → **Elenca**.

[Schermata del risultato della ricerca con tabella: Codice ISTAT 206, Descrizione Località BAELEN, Prov. B, Cod. Belfiore Z103, Data inizio 01/01/1900, CAP 4837, Cod. Località 206291]