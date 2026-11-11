# Eliminare una Riscossione Inserita a Mano per Errore e già Associata (Procedura di STORNO)

Per 'eliminare' una riscossione inserita a mano e poi associata per errore, quindi movimentata, è necessario fare lo storno, possibile solo con i tipi di riscossioni di seguito:

- Manuale
- Tesoreria
- Fittizia/Agevolazione
- Bonifici

## Esempio di riscossione inserita manualmente ed erroneamente riconciliata ad un avviso

[Schermata: Dettaglio riscossione con ID 415363, Anno 2023, Importo 150,00, Data Pagamento 04/04/2023, Cod.Fiscale CC. Nella tabella Movimenti è presente un movimento di tipo "Riscossione, riconciliazione diretta" associato all'avviso 276017, scadenza 464339, numero rata 1, data scadenza 30/09/2023, dovuto 175,00€, riscosso 150,00€, residuo 25,00€, data conferma 04/04/2023]

## Procedura di Storno

Per effettuare lo storno:

1. Posizionarsi sulla riga di riscossione (evidenziandola in giallo) e andare sul pulsante a destra **"Storno"**

[Schermata: Riga di riscossione evidenziata in giallo con pulsante "Storno" evidenziato in rosso sulla destra]

2. Appare la seguente domanda alla quale rispondere **SÌ**

[Schermata: Finestra di dialogo "Attenzione" con messaggio: "Attraverso lo storno viene annullato il pagamento caricato manualmente per errore. Confermare l'operazione?" con pulsanti SÌ e NO]

## Risultato

Verrà creata la riga di annullamento della riscossione manuale e l'avviso tornerà disponibile per una nuova associazione.

[Schermata: Dettaglio riscossione dopo lo storno. Nella tabella Movimenti sono presenti due righe:]

| Id | Tipo movimento | Avviso | Scadenza | Numero rata | Data scadenza | Dovuto | Riscosso | Residuo |
|------|--------------------------------------|--------|----------|-------------|---------------|---------|----------|---------|
| 444176 | Riscossione, riconciliazione diretta | 276017 | 464339 | 1 | 30/09/2023 | 175,00€ | 150,00€ | 25,00€ |
| 444177 | Annullamento riscossione manuale | 276017 | 464339 | 1 | 30/09/2023 | 25,00€ | -150,00€ | 175,00€ |