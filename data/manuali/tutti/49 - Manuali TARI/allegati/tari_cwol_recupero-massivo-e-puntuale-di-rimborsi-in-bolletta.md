# TARI - Manuale Operativo

## Prerequisito

Per poter effettuare il recupero del rimborso in bolletta occorre innanzitutto che il Rimborso abbia impostato sull'istanza la modalità su **'Recupero su Dettaglio Avviso'**:

[Schermata: Pagina "Situazione Contribuente" con tab "Rimborsi" selezionato. Nella sezione "Istanze di Rimborso" sono visibili i campi: ID Istanza, Beneficiario Rimborso (Nominativo, Sesso M/Nato), Intestatario Credito (Nominativo, Cod.Fiscale, P.IVA), Dati Rimborso (Oggetto: RIMBORSO TARI, **Modalità rimborso: "Recupero su Dettaglio Avviso"**, Data Istanza, Data Reg. Istanza, Anno Prot., Num. Prot., Esito: Accolta, Stato: Atto rimborso emesso). Il campo "Modalità rimborso" è evidenziato con un riquadro rosso.]

> **N.B.:** i rimborsi IBAN con bonifico bancario **NON** vengono recuperati in bolletta.

---

## 1.1 Elaborazione Massiva Avvisi con Recupero

Nella bollettazione massiva, esce il bottone per richiamare le emissioni di cui si vogliono recuperare i rimborsi con istanza per recupero in bolletta.

Dal seguente menù:

[Schermata: Percorso di menu: 70. Tributi → 50. TARI → 80. Evoluzione Avviso → **10. Elaborazione Massiva Avvisi Bonari** (evidenziato con riquadro rosso)]

Andare sull'apposito bottone:

[Schermata: Pagina "TARI: Elaborazione Massiva Avvisi Bonari" con sezione "Recupero Rimborsi" contenente il pulsante **"Scegli Emissioni Rimborso"** (evidenziato con riquadro rosso). Sono visibili anche le sezioni: Filtri (Modalità: Simulazione/Creazione), Avvisi da creare (Servizio Emittente, Anno Emissione, Nr.Emissione), Archivio Precompilato.]

e scegliere l'emissione con doppio click sull'emissione in interesse o mettendo la spunta e usando il bottone **'Conferma selezione'**:

[Schermata: Pagina "Gestione Emissioni" con elenco Emissioni (colonna Descrizione). Esempio: "TEST CARICAMENTO NUOVA EMISSIONE", "rimborso test", **"rimborso tari"** (con spunta e riquadro rosso). A destra i pulsanti: Nuovo, Altra Ricerca, Duplica, **Conferma selezione** (evidenziato con riquadro rosso).]

È possibile mettere la spunta anche su più emissioni, facendo poi 'Conferma selezione':

[Schermata: Pagina "Gestione Emissioni" con più righe selezionate: "rimborso test" e "rimborso tari" entrambe con spunta.]

L'emissione scelta (o più emissioni) verrà riportata sulla videata dell'elaborazione massiva:

[Schermata: Pagina "TARI: Elaborazione Massiva Avvisi Bonari" con sezione "Recupero Rimborsi" che mostra sotto il pulsante "Scegli Emissioni Rimborso" la voce selezionata: **"1/2024/38 rimborso tari"** (evidenziata con riquadro rosso).]

Procedere poi con l'elaborazione degli avvisi, inserendo gli altri parametri.

---

## 2.1 Elaborazione Puntuale Avvisi e/o Ricalcoli

Nell'elaborazione puntuale di avviso o di ricalcolo, troviamo lo stesso pulsante, che permette di recuperare il rimborso, scegliendo la relativa emissione:

[Schermata: Pagina di elaborazione puntuale con tabella "Avvisi bonari" (colonne: tipo, servizio, descrizione, importo), sezione "Tipo Avviso" (Emissione, Data inizio calcoli, Data fine calcoli), sezione "Scadenze" (Numero Rate, Scadenze Rate 1-4, Percentuali Rate 1-4, Scadenza Rata Unica). In basso la sezione **"Recupero Rimborsi"** con pulsante **"Scegli Emissioni Rimborso"** (evidenziato con riquadro rosso).]

Scegliere l'emissione del rimborso da recuperare:

[Schermata: Stessa pagina con la sezione "Recupero Rimborsi" che ora mostra sotto il pulsante la voce selezionata: **"1/2024/38 rimborso tari"** (evidenziata con riquadro rosso).]

e poi procedere a generare l'avviso.

---

## Avviso

Quando è recuperato un rimborso in bolletta, l'avviso presenta voce **Eccedenze/Rimborsi**:

[Schermata: Pagina "TARI: Situazione Contribuente" con tab "Avvisi Bonari" selezionato. Dettagli avviso: Numero 20, Anno Riferimento 2025, Emissione 1, ricalcolo 2025, Data Avviso 10/03/2026, Data Stampa 23/03/2026, Data Scadenza Rata Unica 10/03/2026, Dovuto 52,00. Nella tabella "Voci" sono presenti le righe: Imponibile tassa (49,60€), TEFA (2,47€), Componente perequativa UR1 (0,00€), Componente perequativa UR2 (0,00€), **"Eccedenze/Rimborsi" (-12,00€)** (evidenziata con riquadro rosso), Arrotondamento (-0,07€).]