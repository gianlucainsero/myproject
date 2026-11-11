# VISURE CON MCTC VT

## Requisiti

1. Video terminale della motorizzazione **"MCTC_VTinfo"**
2. VPN Cisco

---

## Selezione e visura delle targhe

Dai **tre puntini** andare in:

> ▶ **Codice della Strada** ▶ **Preavvisi / Verbali** ▶ **Lettura Proprietari** ▶ **MCTC VT**

[Schermata: interfaccia di selezione targhe con pannello "Collegamento MCTC VT" a destra, pulsanti "Avvia Selezione", "Seleziona Tutti", "Visura" (evidenziato in arancione) e "Stampa". In alto a destra è visibile il file scaricato `TargheVTINFO_20240202-170250.txt` con indicazione "Completato — 220 byte".]

Scegliendo di fare la visura con il Video Terminale (VT) della motorizzazione e, dopo aver estratto la selezione delle targhe da visurare, cliccando su **[Visura]**, verrà fatto il download di un file in formato **.txt**.

---

## Come caricare il file txt sul Video Terminale

Dopo aver collegato la VPN, aprire il video terminale della motorizzazione **"MCTC_VTinfo"** e fare click sul bottone con l'icona della pagina **"Da File"**, carica quel file txt e confermare con **[Conferma]**.

[Schermata: programma MCTC_VT (detto "maggiolino verde") con barra dei pulsanti in basso: "Video Terminale", "Video Terminale", "Targa", "Patente", "Personale", **"Da File"** (evidenziato in giallo), "Accesso", "Disconnetti". A destra è aperta la finestra "Visura Multitarga" con campo "File di Richiesta" impostato su `C:\Users\...\Desktop\T...` e pulsante **"Carica"**. In basso a destra il pulsante **"Conferma"** (evidenziato in giallo). Tabella con colonne: Data, Tipo, Targa (es. 04/06/2022, A, DFGGG). Contatore: "Targhe Selezionate: 1".]

Il risultato di questa visura verrà salvato in un file di testo (formato txt) dentro una cartella, sarebbe il percorso che vi ha configurato uno dei nostri operatori al momento dell'installazione di questo programma.

> **NOTA:** Il nome della cartella e del foglio di testo potrebbe variare da quello dell'esempio!

---

## Come importare il file di esito

Conclusa l'operazione di visura, tornare a **itaEngine** ed aprire il menù:

> ▶ **Codice della Strada** ▶ **Preavvisi / Verbali** ▶ **Importa Targhe**

Qui selezionare la fonte **MCTC**, poi fare click sul bottone **'Leggi'**, presente sulla destra, e selezionare il file di destinazione della visura.

[Schermata: interfaccia "Importa Targhe" con intestazione "MCTC" in alto a destra. Pulsanti a destra: **"Leggi"** (evidenziato in arancione), "Importa", "Stampa Note", "Dati", "Cerca". È aperta una finestra di dialogo "Selezione" con titolo "Seleziona il tipo di lettura file" e tre opzioni: **DA FTP**, **DA VT220**, **DA WS**. In basso a destra riepilogo: "TOTALE RECORD: 1", "TARGHE TROVATE: 1", "TARGHE NON TROVATE: 0".]