# Configurare un Profilo Orario

Questa è la schermata nella quale si configura un profilo Orario:

[Screenshot della schermata "Profili Orari" con campi: Codice, Descrizione, Giorno, e una tabella con colonne: Da Ora, A Ora, Aut., Escl., Flessibilità, Causali. In basso i campi: Ore per Giorno, Ore per Assenza, La differenza scaricala sulla, Causale fissa in caso di timbr., Causale in caso di assenza. A destra i pulsanti: F6-Aggiorna, F7-Cancella profilo, F3-Altra Ricerca, Duplica Giorno Corrente, Altri Dati, Blocca Profilo]

## Campi principali

- **Codice**: per il nuovo profilo verrà automaticamente proposto dal programma, ma sarà possibile inserire un codice manualmente. In caso che il codice sia già utilizzato verrà visualizzato un messaggio d'errore.

- **Descrizione**: è la spiegazione di cosa rappresenta quel profilo orario (Es: *Orario Vigili*). Potrà essere inserita quando stiamo creando un nuovo profilo o modificata in uno già esistente.

- **Giorno**: rappresenta il giorno della settimana che stiamo configurando per quel profilo. Tutti i giorni della settimana **devono** essere configurati, tenendo a mente due regole fondamentali:

  1. All'interno del giorno non devono mai essere presenti buchi d'orario, quindi si dovranno configurare tutte le 24 ore.
  2. All'interno del giorno non devono essere presenti ripetizioni d'orario.

## Ore per giorno e Ore per assenza

In fondo si dovranno immettere:

- **Ore per giorno**: il numero di ore che il lavoratore dovrebbe coprire per quel giorno di lavoro.
- **Ore per assenza**: il numero di ore che verranno conteggiate in caso che il lavoratore non vada a lavoro. Le ore per assenza **devono** essere immesse per tutti i giorni, lavorativi o non, e anche per la domenica.

---

## Esempio pratico: ORARIO VIGILI MATTINA

Prendiamo per esempio un orario che chiameremo **ORARIO VIGILI MATTINA**: i vigili che lavorano in questo orario svolgono le loro mansioni dalle **08:00 alle 14:00**.

Seguendo le regole fondamentali citate sopra, configuriamo l'orario nel seguente modo:

[Screenshot della configurazione del giorno Lunedì con tre fasce orarie: 00:00–08:00 (Aut. spuntato, Flessibilità 0, Causale: MIN. IN + EXTRA F.), 08:00–14:00 (Aut. spuntato, Flessibilità 5, FLESSIBILITÀ 10 MIN, Causale: LAV.ORD.), 14:00–24:00 (Aut. spuntato, Flessibilità 0, Causale: MIN. IN + EXTRA F.). Ore per Giorno: 06:00, Ore per Assenza: 06:00]

Il procedimento che sta per essere spiegato dovrà essere ripetuto per tutti i giorni della settimana in cui il lavoratore svolgerà le sue mansioni.

### Dettaglio della configurazione

Non dovendo essere presenti buchi d'orario, si devono configurare anche le ore in cui il lavoratore non svolge le proprie mansioni:

| Da Ora | A Ora | Aut. | Flessibilità | Causale |
|--------|-------|------|--------------|---------|
| 00:00 | 08:00 | ✓ | 0 | MIN. IN + SU FLESS |
| 08:00 | 14:00 | ✓ | 5 (FLESSIBILITÀ 10 MIN) | LAV.ORD. |
| 14:00 | 24:00 | ✓ | 0 | MIN. IN + SU FLESS |

> **Nota:** La causale è puramente esemplare, può essere cambiata a seconda del profilo che si sta configurando.

- **00:00 – 08:00**: impostate come **MIN. IN + SU FLESS** (ore in cui il lavoratore non svolge le proprie mansioni).
- **08:00 – 14:00**: impostato come **LAV.ORD.** (lavoro ordinario, quindi il normale lavoro che si dovrebbe svolgere giornalmente).
- **14:00 – 24:00**: configurate come **MIN. IN + SU FLESS** (anche qui la causale può cambiare a seconda del profilo da configurare).

### Voce Aut. (Autorizzato)

Su tutti gli orari configurati è presente la spunta sulla voce **Aut.** (Autorizzato). Questo significa che quel lavoratore è autorizzato a entrare a lavoro durante quegli orari, anche se non tutti sono LAV.ORD.

### Flessibilità

La **Flessibilità** è la possibilità di entrare/uscire in anticipo/ritardo (per il valore impostato, per esempio con Flessibilità 10 Min si potrà entrare/uscire in anticipo/ritardo di 10 minuti) durante il proprio Orario. Quindi questa voce va **solo** impostata durante l'orario di lavoro e non durante tutta la giornata.

### Impostazione ore in fondo

In fondo si devono impostare:

- **Ore per giorno**: equivalenti alle ore di lavoro giornaliero che vengono svolte (es. 06:00).
- **Ore per assenza**: il numero di ore che verranno conteggiate in caso il lavoratore non vada a lavoro nel giorno designato (es. 06:00).

---

## Configurazione dei giorni non lavorativi

Le giornate in cui il lavoratore **non deve** svolgere le sue mansioni (come ad esempio la Domenica) devono comunque essere configurate seguendo questo schema:

[Screenshot della configurazione del giorno Domenica con una singola fascia: 00:00–24:00 (Aut. spuntato, Flessibilità 0, Causale: MIN. IN + EXTRA F.). Ore per Giorno: 00:00, Ore per Assenza: 06:00]

- Sono state configurate tutte le 24 ore come **MIN. IN + SU FLESS** (anche qui la causale può cambiare a seconda del profilo da configurare).
- La voce **Aut.** deve essere spuntata in caso che il lavoratore possa entrare a lavoro in quei giorni.
- **Non deve** essere immessa alcuna **Flessibilità**.
- In fondo si devono solo impostare le **Ore per assenza**.

---

## Sezione "Altri dati"

In fine si configura la parte **Altri dati** che si visualizza premendo sull'omonimo bottone ottenendo la seguente schermata:

[Screenshot della finestra "Altri Dati" con i campi: Tipo Orario (Flessibile), Arrotondamento per fascia, Causale ore in Difetto (040 - MIN. IN + SU FLESS.), Causale ore in eccesso (048 - MIN. IN + SU FLESS.), Causale ore in eccesso fest. (048 - MIN. IN + SU FLESS.), Segnala compresenza obblig., Forza mezzanotte, Causale in caso di fest. (000), Causale per pausa, Tipologia di scarico, Ore da cui partire (0 in min.), Valore della pausa (0), Arrotonda timbrature (Sì/In Eccesso), Valore in minuti (0), Turno, Calcola Ind. su Eff. (Max Fascia), Controllo terminali. Pulsante: Conferma]

### Tipo Orario

Il tipo Orario andrà impostato su:

- **Flessibile** → in caso sia impostata una **Flessibilità** all'interno dell'Orario.
- **Non Flessibile** → se non ci sono **Flessibilità** impostate.

### Causali obbligatorie

Le causali **Ore in Difetto**, **Ore in eccesso** e **Ore in eccesso fest.** devono **sempre** essere impostate. Anche qui la causale può cambiare a seconda del profilo da configurare.

### Forza Mezzanotte

**Forza Mezzanotte** deve essere impostato solo se il profilo orario conteggia delle ore relative al giorno successivo ad esso (Es. dalle 20:00 alle 02:00). In questo caso impostare questo campo su:

- **Forza 24:00** → per ottenere l'aggiunta automatica delle 24:00 nella gestione timbrature.
- **Leggi giorno successivo** → per leggere le ore del giorno successivo nella gestione timbrature.
- **Leggi giorno successivo ma non dividi fasce** → per leggere le ore del giorno successivo senza la divisione in fasce nella gestione timbrature.