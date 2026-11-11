# Tabelle | Fasce Orarie

Per impostare una fascia oraria in un permesso, dai **tre puntini** seguire il percorso:

> **Gestione Permessi e ZTL** ▶ **Tabelle** ▶ **Fasce orarie**

La schermata iniziale funge da **Maschera di Ricerca**, sulla destra abbiamo due comandi:

- Con **[Nuova]** aggiungeremo una nuova fascia d'orario nell'elenco della Tabella.
- Con **[Elenca]** navigheremo all'interno della tabella delle fasce orarie (Possiamo eventualmente impostare prima dei filtri nella Maschera di Ricerca).

[Schermata della Maschera di Ricerca con campi "Codice" e "Descrizione" e pulsanti "F2:Nuova" e "F4:Elenca" sulla destra]

---

## Come inserire un nuovo orario

Per aggiungere una nuova fascia, impostare i seguenti dati obbligatori:

- Un **Codice** (una sigla di lettere) per identificarlo
- Una **Descrizione**, un nome

Se la fascia prevede un **Codice Lista Bianca**, impostarlo nel campo omonimo.

Per le fasce orarie che sono valide per tutto il giorno (lo dà in automatico):

- **Da Ora** 00:00 **A Ora** 23:59

Se, invece, la fascia prevede degli orari di applicazione più specifici, bisognerà specificare meglio gli orari (fino ad un massimo di **4**). Ad esempio: una fascia d'orario come *"Accompagnamento Scolastico"* la possiamo inserire con le sue iniziali (Codice **AS**).

[Modulo "Gestione Fasce Orarie" con campi: Codice, Descrizione, Codice Liste Bianche, Da Ora/A Ora (1-4), Escludi (1=Lun, 0=Dom) per ogni fascia, Escludi gen(1=Lun, 0=Dom)]

### Esempio: Fascia "Accompagnamento Scolastico" (Codice AS)

| Fascia | Da Ora | A Ora |
|--------|--------|-------|
| (1) | 07:00 | 09:00 |
| (2) | 11:30 | 14:00 |
| (3) | 15:00 | 18:00 |

Per tutte queste tre fasce: **NON** si applica il permesso nei giorni della settimana stabiliti (Domenica = 0, Sabato = 6).

> 💡 **Suggerimento:** Tieni premuto qui con il cursore e trascina per regolare la grandezza del campo.

### Esclusione giorni della settimana

Per escludere un giorno della settimana dalla fascia di applicazione possiamo specificare nel Campo **Escludi** il numero del giorno:

| Giorno | Valore |
|--------|--------|
| Domenica | 0 |
| Lunedì | 1 |
| Martedì | 2 |
| Mercoledì | 3 |
| Giovedì | 4 |
| Venerdì | 5 |
| Sabato | 6 |

Se vogliamo che tutte queste fasce d'orario abbiano un giorno libero che è uguale per tutti, quindi **GENERALE**, impostare il valore nel campo **"Escludi gen"**.

Per confermare l'inserimento, cliccare su **"Aggiungi"**.

---

## Come modificare una fascia

Per apportare delle modifiche ad una fascia oraria inserita:

1. Cliccare **due volte** sulla riga della fascia da correggere per aprirne il dettaglio
2. Infine, fare click sul bottone **"Aggiorna"** per salvare (Altrimenti l'intervento andrà perso!)

---

## Come cancellare una fascia

Per eliminare una fascia d'orario che abbiamo inserito, dopo aver aperto il dettaglio, cliccare sul pulsante **"Cancella"**, presente sulla destra, e confermare la scelta con **"Conferma"** (oppure fare **"Annulla"** per tornare indietro).

[Dialog di conferma "Cancellazione" con messaggio "Confermi la Cancellazione?" e pulsanti "F5:Conferma" e "F8:Annulla". Pulsanti visibili nella schermata: F6:Aggiorna, F7:Cancella, F3:Altra Ricerca]

> ⚠️ **ATTENZIONE: La cancellazione è irreversibile!**

Se abbiamo cancellato definitivamente un orario, ci ritroveremo nella **Maschera di Ricerca** in automatico ad operazione conclusa.

---

## Altre Informazioni Utili

- Cliccando sul pulsante **[Altra Ricerca]** torneremo nella schermata iniziale (ovvero la *maschera di ricerca*) per poter effettuare una nuova ricerca.