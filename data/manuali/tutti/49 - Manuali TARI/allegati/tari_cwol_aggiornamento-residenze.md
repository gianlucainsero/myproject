# TARI – Gestione della Tassa sui Rifiuti

## Manuale Operativo

---

## Premessa

La procedura di aggiornamento residenze permette di aggiornare l'indirizzo di residenza del contribuente con il dato presente in anagrafe.

In particolare, questo programma consente di aggiornare le residenze dei contribuenti Tributi reperendole dall'Anagrafe.

Per ogni contribuente che risponde ai criteri di selezione, viene testata la sua situazione in Anagrafe: se risulta residente e senza pratiche in corso, il suo indirizzo in Anagrafe viene confrontato con quello dell'Anagrafico Contribuenti, e se diverso lo va a sostituire, cessando il vecchio indirizzo che rimane nello storico residenze.

**Se si utilizza CWOL PEOPLE**, il dato è già a disposizione dell'ufficio tributi che può procedere direttamente ad aggiornare la residenza con la procedura di seguito descritta.

**Se si utilizza altro fornitore di anagrafe**, è necessario che sia avvenuto l'interscambio dati tra i due applicativi attraverso il popolamento, da parte del fornitore SW Anagrafe, dei file IMPANA e della relativa importazione in CWOL.

---

## 1.1 - Aggiornamento Residenze

### Definizione parametri

La procedura di aggiornamento residenze va eseguita dal menù:

**Tributi → TARI → Elaborazioni da Anagrafe → Aggiornamento residenza Contrib. Da Anagrafe**

[Schermata del menu di navigazione: Tributi > TARI > Elaborazioni da Anagrafe > Aggiornamento Residenza Contrib. da Anagrafe]

Si aprirà la seguente videata in cui impostare i parametri:

[Schermata "Aggiornamento Residenza Contribuenti da Anagrafe" con i campi: Modalità (Simulazione/Aggiornamento), Archivio Precompilato, Tipo Contribuenti, Tipo Cespite, Data Cessazione Limite, Residenza, Controllo Livello Ubicazione, Data Riferimento Anagrafe, Aggiorna Indirizzo Ditte Individuali, Aggiorna Indirizzo Emigrazione, Data Emigrazione Limite, Data Cessazione Limite, Esporta i risultati in formato Excel, pulsante Avvia Simulazione/Aggiornamento]

---

#### Simulazione/Aggiornamento

La **simulazione** produce solamente dei file di controllo, mentre l'**aggiornamento** aggiorna fisicamente i dati.

#### Archivio Precompilato

Permette di elaborare solamente alcune matricole individuate e incluse nell'archivio precompilato scelto. Indica quindi che i contribuenti per cui aggiornare le residenze vanno reperiti da un archivio di soggetti precaricati da una precedente selezione. In questo caso si sceglierà attraverso la lente l'archivio di soggetti precaricati.

Tra i soggetti presenti nell'archivio precompilato, verranno effettivamente elaborati solo quelli che risultano presenti nell'Anagrafico Contribuenti Tributi. Quindi, se l'estrazione che aveva generato l'archivio precompilato era avvenuta secondo criteri che includevano anche soggetti non Contribuenti, tali soggetti verranno ignorati.

#### Tipo Contribuenti

Indica i contribuenti relativamente a quale tipo imposta aggiornare la residenza (o eventualmente a tutti):

- **Tutti**: verranno controllati tutti i contribuenti presenti nell'Anagrafico Contribuenti.
- **Solo Tributi**: verranno controllati solo i contribuenti che hanno almeno una denuncia Tributi (TARI, CUP).
- **Solo IMU**: Verranno controllati solo i contribuenti che hanno almeno una denuncia o risultano contitolari nell'IMU.

#### Tipo Cespite

Indica il Tipo Cespite di un determinato Servizio di cui ai relativi intestatari della dichiarazione verranno aggiornate le residenze.

#### Data Cessazione Limite

Indica che verranno controllati solo i contribuenti che hanno denunce attive o cessate dopo questa data.

> **Es:** immettendo 31/12/2024, saranno aggiornati (oltre ovviamente ai contribuenti con denunce attive) i contribuenti che hanno denunce cessate dopo il 31/12/2024, mentre i contribuenti di quelle cessate entro quella data non saranno aggiornati. **Se non si indica nessuna data, saranno controllati tutti i contribuenti con denunce tributi, anche cessate.**

#### Residenza

- **Tutti**: verranno controllati tutti i contribuenti presenti nell'Anagrafico Contribuenti, indipendentemente dalla loro residenza.
- **Solo residenti**: verranno controllati solo i contribuenti che, nell'Anagrafico Contribuenti, risultano residenti nel Comune.
- **Solo non residenti**: verranno controllati solo i contribuenti che NON risultano residenti nel Comune.

#### Controllo Livello Ubicazione

- **Con numero civico esterno**: il confronto tra residenza Tributi e residenza Anagrafe viene fatto basandosi su Via, Numero civico e Sottonumero.
- **Con nr. esterno e scala**: il confronto tra residenza Tributi e residenza Anagrafe viene fatto basandosi su Via, Numero civico, Sottonumero e Scala.
- **Con nr. esterno, scala e nr.interno**: il confronto tra residenza Tributi e residenza Anagrafe viene fatto basandosi su Via, Numero civico, Sottonumero, Scala e nr.interno.
- **Con nr. esterno e nr.interno**: il confronto tra residenza Tributi e residenza Anagrafe viene fatto basandosi su Via, Numero civico, Sottonumero e nr.interno.

#### Data Riferimento Anagrafe

È la data in base alla quale vengono reperiti i dati dagli archivi Anagrafe per il confronto con quelli dei contribuenti. **Il programma propone la data odierna**; se viene lasciata questa o non viene specificata nessuna data, i dati verranno reperiti dalla situazione attuale, mentre se si indica una data diversa, i dati verranno ricercati negli archivi della movimentazione storica.

#### Aggiorna Indirizzo Ditte Individuali

Indica se vanno aggiornati da Anagrafe anche gli indirizzi delle ditte individuali per quei contribuenti che hanno l'indirizzo della ditta individuale identico a quello di residenza come persona fisica.

#### Aggiorna Indirizzo Emigrazione

Indica se vanno aggiornate le residenze anche di quei contribuenti che in Anagrafe risultano non residenti nel Comune, ma che sono emigrati.

> **Si consiglia di eseguire questa funzione in sola simulazione** e di verificare gli indirizzi indicati nelle stampe prodotte; più in generale gli emigrati vengono gestiti manualmente in quanto l'indirizzo di emigrazione potrebbe non essere presente in anagrafe o il contribuente essere ulteriormente emigrato in un altro Comune ancora.

#### Data Emigrazione Limite

Se è stato messo il flag sull'aggiornamento dell'indirizzo emigrazione, gli indirizzi dei contribuenti emigrati verranno aggiornati solo se la data della loro emigrazione è uguale o posteriore a quella indicata.

> **È consigliabile impostare una data recente** (ad esempio quella odierna), in modo da NON aggiornare indirizzi di emigrazione che in Anagrafe sono molto vecchi, e che molto probabilmente nel frattempo non corrisponderebbero più a quelli di effettiva residenza del contribuente in altro Comune.

---

### Simulazione/Aggiornamento

Di seguito un esempio di parametrizzazione (in Aggiornamento):

[Schermata di esempio con parametri impostati: Modalità = Aggiornamento, Tipo Contribuenti = Solo Tributi, Tipo Cespite = TARES/TARI, Data Cessazione Limite = 31/12/2024, Residenza = Tutti, Controllo Livello Ubicazione = Con numero civico esterno, Data Riferimento Anagrafe = 06/10/2025, Aggiorna Indirizzo Ditte Individuali = spuntato, Aggiorna Indirizzo Emigrazione = non spuntato, Data Emigrazione Limite = 06/10/2025, Esporta i risultati in formato Excel = spuntato]

Andare su **'Avvia Simulazione'** (o **'Avvia Aggiornamento'**, in base alla scelta effettuata sopra).

[Schermata di elaborazione: "Elaborazione Indirizzi Anagrafici 14:02:54" con barra di avanzamento "659 / 7085 elaborati"]

Al termine della elaborazione la procedura restituisce dei file di controllo:

| File | Descrizione |
|------|-------------|
| `Soggetti_Indirizzi_Aggiornati_TBA_RESID.xlsx` | Indica i soggetti a cui sarà aggiornato il nuovo indirizzo, e indica il vecchio indirizzo |
| `Soggetti_Indirizzi_Inseriti_TBA_RESID.xlsx` | Indica i soggetti a cui sarà aggiornato il nuovo indirizzo, e indica il nuovo indirizzo e la data da cui decorre |
| `Soggetti_Pratica_in_corso.xlsx` | Indica i soggetti con la pratica in corso, se presenti |

---

### Verifica della residenza aggiornata

La residenza aggiornata è consultabile dal menù:

**Tributi → Anagrafico Contribuenti**

[Schermata del menu: Tributi > Anagrafico Contribuenti]

Cercare il contribuente specifico, fare **'Elenca'**, entrare in visualizzazione e visualizzare l'indirizzo al tab **'Contribuente'**.

[Schermata "Anagrafico Soggetti" con tab "Contribuente" selezionato, sezione "Residenza" evidenziata, mostra: Località = ANCONA, CAP = 60121, Indirizzo = via Cavour, Nr. = 23, Frazione = bronx, Decorrenza = 25/08/2023, pulsante "Resid.Da Anagrafe"]