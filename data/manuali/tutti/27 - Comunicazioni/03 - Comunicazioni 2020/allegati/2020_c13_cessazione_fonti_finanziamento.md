# Comunicazione n.13/2020 - Cessazione utilizzo Fonti Finanziamento

## Scopo del documento

Il documento illustra l'operatività necessaria per sostituire il conto evidenza, presente nelle fonti di finanziamento utilizzato per la creazione del flusso siope+, con la relativa impostazione nel conto di tesoreria.

| Data | Oggetto comunicazione /integrazione | Versione |
|------|-------------------------------------|----------|
| 02/10/2020 | Prima comunicazione | C13 V0 |

---

## 1. Attuale impostazione presente in tabella

### 1.1 Impostazione gestione fonti finanziamento vincoli

Con lo sviluppo del software e attivazione dei vincoli, tutte le funzioni e le operatività presenti in procedura relative alla gestione delle fonti di finanziamento sono state eliminate, anche se nella tabella dei parametri generali è presente l'impostazione "1" (Da vincoli e font. Finanziamento).

A breve nella tabella potrà essere parametrizzato soltanto:

- **0** = importo Unico
- **1** = Da vincoli

[Schermata: finestra "CITY-FINANCING Definizioni e operabilità" con il campo "Conto Tesoreria Obbligatorio" impostato su "Gestione Avanzo" e il menu a tendina che mostra le opzioni: "1=Da Vincoli e Fonte di Fi.", "0=Importo Unico", "2=Da Vincoli"]

Di conseguenza non è possibile operare per inserire o variare la fonte di finanziamento nelle varie windows, dove è attiva la gestione del conto tesoreria e del vincolo:

- **Gestione voci di bilancio**

  [Schermata: campo "Conto tesoreria" con valore "1C" e descrizione "CONTO LIBERO FRUTTIFERO"]

- **Gestione impegni e accertamenti**

  [Schermata: campo "Conto tesoreria" con valore "1C" e descrizione "CONTO LIBERO FRUTTIFERO"]

- **Gestione liquidazione e riscossioni**

  [Schermata: campo "Conto Tesoreria" con valore "1C" e descrizione "CONTO LIBERO FRUTTIFERO"]

- **Gestione mandati e reversali**

  [Schermata: campo "C. Tesoreria" con valore "1C" e descrizione "CONTO LIBERO FRUTTIFERO"]

---

### 1.2 Dati tracciato XML flusso tesoreria

Attualmente in fase di creazione flusso mandati e reversali per l'invio in tesoreria (flusso siope+) il tag conto evidenza viene reperito dalla fonte finanziamento, se presente nel mandato, nel caso in cui la fonte di finanziamento non sia valorizzata l'informazione viene presa dal conto di tesoreria.

```xml
<mandato>
  <tipo_operazione>INSERIMENTO</tipo_operazione>
  <numero_mandato>0000062</numero_mandato>
  <data_mandato>2020-09-23</data_mandato>
  <importo_mandato>1000.00</importo_mandato>
  <conto_evidenza>100</conto_evidenza>
  <estremi_provvedimento_autorizzativo></estremi_provvedimento_autorizzativo>
  <ufficio_responsabile>.</ufficio_responsabile>
  <bilancio>
    <codifica_bilancio>04021</codifica_bilancio>
    <gestione>COMPETENZA</gestione>
    <importo_bilancio>1000.00</importo_bilancio>
  </bilancio>
</mandato>
```

> **Dal prossimo mese di novembre, in fase di creazione del flusso l'informazione sarà reperita soltanto dal conto di tesoreria presente nel mandato.**

Quindi sarà opportuno rivedere le impostazioni, spostando l'informazione presente nella fonte finanziamento al conto tesoreria e nell'esigenza creare nuovi conti tesoreria dettagliati con le relative descrizioni che erano presenti nelle fonti finanziamento.

---

## 2. Gestione tabelle

### 2.1 Modifica impostazioni tabelle

Di seguito riportiamo le tabelle su cui operare:

[Schermata: menu "Tabelle" con le voci evidenziate "Conti di Tesoreria" e "Fonte finanziamento" sotto il sottomenu "Struttura Archivi"]

In modifica di entrambe le tabelle trovate la window "tesoreria", dov'è presente l'informazione del conto evidenza.

**Impostazione dalla fonte finanziamento**

[Schermata: finestra "CITY-FINANCIG Fonte finanziamento" con campo "Conto Tesoreria" = "2V", descrizione "CONTO VINCOLATO INFRUTTIFERO", e nella sezione "Gestione Vincolamento" i campi "Conto evidenza: Entrata" = "100" e "Conto evidenza: Spesa" = "100"]

**Impostazione dal conto di tesoreria**

[Schermata: finestra "CITY-FINANCIG Conti di Tesoreria" con campo "Codice conto tesoreria" = "2C", descrizione "CONTO LIBERO INFRUTTIFERO", e nella sezione "Conto Tesoreria" i campi "Conto evidenza Entrata" e "Conto evidenza Spesa"]

Dovrete riportare il conto evidenza, presente nella fonte finanziamento, nella tabella del conto tesoreria.

Nel caso in cui esistano più fonti finanziamento con lo stesso conto tesoreria, dovrete aggiungere o duplicare il conto tesoreria facendo particolare attenzione alle impostazioni relative al conto (**Classe**: Fruttifera/Infruttifera **Tipo conto**: Libero/Vincolato)

---

### 2.2 Esempio operativo

Nella tabella sono presenti 3 fonti finanziamento collegate al conto 2V:

[Schermata: tabella "CITY-FINANCIG Fonte finanziamento" con le seguenti righe evidenziate:
- Cod. Fin. "2" → Descrizione: TRASFERIMENTI REGIONALI - PROVINCIALI-COMUNALI → Cont. tes: 2V → Descrizione conto tesoreria: CONTO VINCOLATO INFRUTTIFERO
- Cod. Fin. "3" → Descrizione: MUTUI CASSA DEPOSITI E PRESTITI → Cont. tes: 2V → Descrizione conto tesoreria: CONTO VINCOLATO INFRUTTIFERO
- Cod. Fin. "4" → Descrizione: TRASF. STATALE PER INVESTIMENTI → Cont. tes: 2V → Descrizione conto tesoreria: CONTO VINCOLATO INFRUTTIFERO]

Potrò inserire nella tabella conti tesoreria 3 nuovi conti identici al 2V, riportare le specifiche descrizioni che avevo nelle fonti finanziamento e il conto evidenza.

In questo modo ho sempre una suddivisione e un'informazione del tipo conto dato dalla descrizione:

[Schermata: tabella "CITY-FINANCIG Conti di Tesoreria" con le nuove righe evidenziate:
- Cod. "V2" → Descrizione: TRASFERIMENTI REGIONALI - PROVINCIALI-COMUNALI → F/I: I → L/V: V → Saldo iniz: 0,00000
- Cod. "V3" → Descrizione: MUTUI CASSA DEPOSITI E PRESTITI → F/I: I → L/V: V → Saldo iniz: 0,00000
- Cod. "V4" → Descrizione: TRASF. STATALE PER INVESTIMENTI → F/I: I → L/V: V → Saldo iniz: 0,00000]