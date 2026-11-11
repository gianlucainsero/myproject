# Tipologia Atti

In questa sezione è possibile definire le tipologie degli atti che verranno inseriti in pubblicazione.

È possibile definire una descrizione della tipologia, un periodo di pubblicazione di default in giorni e il flag per regolare la data di inizio pubblicazione (la stessa di registrazione o il giorno successivo a quello di registrazione).

È possibile definire anche un legame con gli organi in Segreteria, in modo da associare automaticamente la tipologia di pubblicazione nel passo specifico dell'iter di un Atto.

## Campi del form di configurazione

[Schermata del form "Tipologia Atti" con i seguenti campi:]

| Campo | Descrizione | Esempio |
|-------|-------------|---------|
| **Codice*** | Codice identificativo della tipologia (campo obbligatorio) | `4` |
| **Descrizione*** | Nome/descrizione della tipologia (campo obbligatorio) | `Determina` |
| **Legame Organi in SEGRETERIA** | Associazione con gli organi di segreteria (con pulsanti elimina e cerca) | `.D.` |
| **Tipo Documento in SEGRETERIA** | Tipo di documento associato in segreteria (con pulsanti cerca ed elimina) | — |
| **Giorni di Pubblicazione** | Periodo di pubblicazione di default in giorni | `15` |
| **Inizio dal giorno successivo** | Flag per regolare la data di inizio pubblicazione (☑ attivo = giorno successivo alla registrazione; ☐ disattivo = stessa data di registrazione) | ☑ |
| **Periodo in giorni per Storico** | Periodo in giorni per la conservazione storica | — |
| **Email di destinazione pubblicazione** | Indirizzo email di destinazione per la pubblicazione | — |

> **Nota:** I campi contrassegnati con `*` sono obbligatori.