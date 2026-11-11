# Halley Informatica: Messaggi di errore

## Errore (1) Casella email istituzionale non configurata

Errore che si verifica in fase di protocollazione. Dalla nostra esperienza sembrerebbe che nella configurazione della casella nel gestionale di Halley Informatica manchi un'impostazione nella casella di posta che si dovrebbe chiamare **"flag istituzionale"**. Verificare con l'assistenza Halley Informatica.

## Errore (4) Operatore non abilitato al protocollo

Il bottone **[Carica da Protocollo]** presente anche all'interno di un passo, consente di importare il contenuto del protocollo appunto nel passo o creare una nuova pratica (la si trova anche nella funzione di ricerca standard). Può capitare che venga restituito il messaggio di errore riportato nel titolo:

[Fig. 1: messaggio di errore restituito dal ws Halley – Screenshot dell'interfaccia Cityware.Online con il messaggio "KO Operatore non abilitato al protocollo" evidenziato in rosso]

Il problema può essere dovuto a più casistiche:

1. Il protocollo che si sta cercando di importare appartiene ad un ufficio diverso da quello in cui è codificato l'utente virtuale di protocollazione (utente fittizio che Halley codifica per creare un protocollo tramite ws di interoperabilità)
2. L'utente virtuale non appartiene all'ufficio a cui il protocollo è assegnato
3. L'accesso al protocollo è limitato ai componenti dell'ufficio (Fig. 2) (l'utente virtuale di protocollazione non appartiene all'ufficio) e non è quindi visibile a "Tutti"

[Fig. 2: schermata di configurazione Halley – "Uffici mittenti" con campo "accessi prot." impostato su "Tutti" e "comunicazioni" su "Componenti dell'ufficio", evidenziati in rosso]

Per poter procedere con l'importazione:

- Accedere al Protocollo Halley
- Cercare il protocollo
- Modificarlo rendendolo consultabile da tutti gli operatori (anche quelli virtuali)
- In Cityware.Online importare il protocollo nel passo
- In Halley riassegnare al protocollo la precedente modalità di consultazione.

## Errore (8) Classificazione non trovata

Errore che si verifica quando un tecnico esterno non riesce a inviare un'integrazione dal portale. Verificare se è presente un codice di classificazione errato nella pratica o nella pratica padre.

## Errore (10) Casella email non configurata nel Protocollo Informatico

L'indirizzo PEC che viene passato al web service non è configurato tra gli account autorizzati alla protocollazione su Halley Informatica.

## Verifica Invio Mail

Il bottone **[Verifica Invio Mail]** presente anche all'interno della tab **"Comunicazioni"** di un passo, consente di consultare le ricevute di accettazione e consegna di una PEC. Può capitare che venga restituito il messaggio di errore:

> "La versione del Protocollo Informatico potrebbe non essere aggiornata, impossibile verificare la consegna e l'accettazione della PEC"

Occorre attendere per permettere al protocollo Halley di scaricare e mettere a disposizione del nostro gestionale le ricevute della PEC. Si prega quindi di riprovare successivamente.