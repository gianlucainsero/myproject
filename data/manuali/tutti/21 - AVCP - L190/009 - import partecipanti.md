# Importazione partecipanti

## Tracciato

È possibile importare i partecipanti ad una gara tramite un tracciato in formato `.csv`.

**Il caricamento dei partecipanti fa riferimento ai lotti dell'anno precedente rispetto al corrente.**

Il tracciato deve presentare i seguenti campi:

| Campo | Descrizione |
|-------|-------------|
| `cig` | Il CIG del lotto per il quale si vogliono inserire i partecipanti. Si possono caricare quindi più partecipanti per più lotti. |
| `ragsoc` | Ragione sociale del soggetto partecipante |
| `cfditta` | Codice fiscale del soggetto |
| `cfestero` | Codice fiscale estero, se si tratta di soggetto estero |
| `raggruppamento` | Nome del raggruppamento di impresa |
| `ruolo` | Ruolo del soggetto in caso sia in un raggruppamento di imprese, secondo il seguente schema (indicare solo il codice numerico): 1) MANDANTE, 2) MANDATARIA, 3) ASSOCIATA, 4) CAPOGRUPPO, 5) CONSORZIATA |

## Caricamento del file

1) Recarsi in **L190/Contratti xml → Home**

[Schermata: menu di navigazione con la voce "200. L190/2012 - Contratti XML" evidenziata e il sottomenu con "10. Home" selezionato]

2) **Importazioni**

[Schermata: pagina Home con i pulsanti di navigazione: Importazioni, Raccolte contratti, Validazione contratti, Report esportazione, Esporta XML ANAC. Il pulsante "Importazioni" è evidenziato]

3) Caricare il file e premere **ESEGUI** per caricare il file da importare

[Schermata: form di importazione con campo "Tipo tracciato" impostato su "Flusso CSV caricamento partecipanti (CSVPartecipanti)", campo "Ufficio" e campo "File" con pulsante ESEGUI]

4) Selezionare la riga relativa al file caricato

[Schermata: tabella "Importazioni" con colonne Data, Tipo tracciato, Ufficio, Num. righe. Le righe mostrano i file caricati con tipo "Flusso CSV caricamento partecipanti (CSVPartecipanti)"]

5) Per ogni riga è possibile avere un prospetto dei dati che verranno caricati

[Schermata: dettaglio importazione con tabella "Record importati" contenente colonne: Selez., Identificativo, Esito import., OGGETTO. Pulsanti disponibili: Aggiungi, Nuovo, Seleziona visualizzati, Seleziona tutti, Importa selezionati, Torna alla lista dei flussi]

6) Selezionare le righe che si intendono caricare e premere **importa selezionati** in alto a destra

Al termine della procedura verrà mostrato l'esito dell'importazione.