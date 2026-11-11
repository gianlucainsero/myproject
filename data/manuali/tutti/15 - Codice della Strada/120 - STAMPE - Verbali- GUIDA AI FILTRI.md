# STAMPE > Verbali: GUIDA AI FILTRI

## Introduzione

**Percorso:** ▶ Codice della Strada ▶ Stampe ▶ Verbali

Aprendo la sezione **Stampe dei verbali** si accede direttamente alla maschera in cui selezionare gli atti da inserire in un flusso di stampa (chiamata anche, più semplicemente, **"Selettore"**).

> **NOTA IMPORTANTE:** il software conserva **SEMPRE** l'ultima selezione eseguita con **Avvia Selezione**. Prima di generare un lotto di stampa, verifica quindi i filtri impostati nella maschera.

Se hai cambiato dei filtri o modificato i dati di un atto, ripeti la selezione con **[Avvia Selezione]**.

I filtri principali sono evidenziati in rosso.

[Schermata della maschera di ricerca "Selettore" con i filtri principali evidenziati in rosso: Estremi Verbale, Tipo Violazione, Località, Elaborazione Verbali, Selezioni Speciali. I flag "Aggiungi spese notifica" ed "Escludi Notificati" sono consigliati sempre attivi.]

---

## Filtri & Flag

> Filtri e flag possono essere combinati liberamente, in base alle necessità e senza limiti di numero!

Di seguito la funzione di ciascuna opzione della maschera di ricerca.

---

### Estremi Verbali

Permette di estrarre gli iter in base ai loro estremi:

- **Tipo Verbale:** dal menù a tendina scegli una specifica tipologia di verbali, oppure "Tutti" per non fare distinzioni.
- **Targa:** estrae un determinato veicolo tramite il suo numero di targa.
- **Naz. Targa:** mostra tutte le nazionalità, solo le targhe estere o solo quelle italiane.

In alternativa puoi delimitare un gruppo di verbali tramite:

- i **numeri progressivi di Registro** (detti anche di Protocollo): in questo caso va indicato anche l'anno di registro;
- l'**Anno di Registro**;
- un intervallo di **Date di Infrazione**.

[Schermata del riquadro "Estremi Verbale" con i campi: Tipo Verbale, Targa, Naz. Targa, Da N. Registro / A, Da Verb. Cont. / A, Da Data Infrazione / A Data Infrazione, Anno, Serie.]

---

### Tipo Violazione e Località

#### Tipo Violazione

- **Articolo:** dal menù a tendina selezioni i verbali di un certo articolo (es. solo il 142, qualsiasi comma).
- **Punti:** mostra solo i verbali con punti da decurtare o solo quelli senza; lascia "Tutti" per includerli entrambi.
- **Art e/o Comma:** digitali a mano nei rispettivi campi per una ricerca puntuale.

#### Località

- **Città:** con la lente d'ingrandimento accanto al campo scegli un comune.
- **Prov.:** indica una provincia specifica.
- **Nazione:** puoi includere o escludere uno Stato a tua scelta.

[Schermata dei riquadri "Tipo Violazione" (con campi Articolo, Punti, Art., Comma) e "Località" (con campi Città, Prov., Escludi/Includi, Nazione, Lander).]

---

### Elaborazione Verbali

Il riquadro **Elaborazione Verbali** contiene due opzioni:

- **Controlla Ditte**
- **Aggiungi Spese Notifica:** se attivo, include le spese di notifica nel flusso di stampa generato.

[Schermata del riquadro "Elaborazione Verbali" con i checkbox "Controlla ditte" (spento) e "Aggiungi spese notifica" (attivo, evidenziato in rosso).]

---

### Selezioni Speciali

Il riquadro **Selezioni Speciali** raccoglie flag dalla funzione corrispondente al nome:

- **Estrai anche verbali Conciliati con Punti:** estrae gli iter pagati per cui non sono state comunicate le generalità del conducente (solo se l'articolo prevede la decurtazione di punti dalla patente).
- **Stampa Sottoscritti:** estrae i verbali sottoscritti (cioè firmati).
- **Escludi Notificati:** esclude i soggetti già notificati e stampati.
- **Notifica Estera:**

Sono disponibili inoltre questi filtri:

- **SOLO DITTE:** considera esclusivamente le ditte. Un soggetto privo dei dati di nascita nella scheda del verbale viene trattato come ditta.
- **SOLO PEC:** estrae i verbali i cui soggetti hanno un indirizzo PEC, compilato nel campo "pec" della scheda.

[Schermata del riquadro "Selezioni Speciali" con i campi: Estrai anche Verbali Conciliati con Punti (menù a tendina), Ristampa, Stampa Sottoscritti, Stampa non conciliabili, Dite (Tutti), PEC (Tutti), Escludi Notificati (attivo), Notifica Estera, Gg Rimanenti, Ente (Tutti), Rinotifiche (Tutti), Area.]

[Schermata dei menù a tendina "Ditte" (opzioni: Tutti, Solo Ditte, Non Ditte) e "PEC" (opzioni: Tutti, Solo con PEC, Senza PEC).]

---

## Come attivare / disattivare un flag

I flag (le opzioni con la casella accanto) si attivano o disattivano secondo necessità.

| Stato | Aspetto |
|-------|---------|
| **Spento** (funzione disattivata) | Casella completamente bianca ☐ |
| **Acceso** (flag attivo) | Spunta bianca su sfondo blu ☑ |

---

## Casi Particolari

Da usare solo all'occorrenza:

- ⚠️ **Ristampa:** forza l'estrazione dei verbali già stampati e notificati.
- ⚠️ **Stampa non conciliabili:** estrae i verbali relativi ad articoli non conciliabili (es. guida in stato di ebbrezza), che, non potendo essere pagati, vanno trasmessi all'autorità competente.