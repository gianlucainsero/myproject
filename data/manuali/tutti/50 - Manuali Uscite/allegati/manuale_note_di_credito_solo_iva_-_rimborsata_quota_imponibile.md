# Note Credito Già Rimborsate Imponibile, da Recuperare Solo IVA

## Riferimento Normativo

**Risoluzione N. 79/E – 21/12/2020**

La Pubblica Amministrazione committente o cessionaria:

- Nel caso di acquisto effettuato in ambito commerciale, in considerazione delle modalità seguite per la registrazione dell'originaria fattura, dovrà provvedere alla registrazione della nota di variazione nel registro "IVA vendite" di cui agli artt. 23 e 24 del d.P.R. n. 633 del 1972, fermo restando la contestuale registrazione nel registro "IVA acquisti" di cui all'articolo 25 del medesimo decreto, al fine di stornare la parte di imposta precedentemente computata nel debito e rettificare l'imposta detraibile;

- Nel caso in cui l'acquisto sia stato destinato alla sfera istituzionale non commerciale, in relazione alla parte d'imposta versata in eccesso, rispetto all'IVA indicata nell'originaria fattura, potrà computare tale maggior versamento a scomputo dei successivi versamenti IVA da effettuare nell'ambito del meccanismo della scissione dei pagamenti.

---

## FASE 1 – Contabilizzazione della nota di credito nelle uscite sul registro acquisti

Nel caso la nota di credito sia già stata contabilizzata con la solita causale (fin.+iva), sarà possibile effettuare il cambio codice causale anche in un secondo momento.

**Cambio tipologia di causale: DA NOTA CREDITO CON ITER → A NOTA CREDITO SOLO IVA.**

- Per **IVA commerciale** non ci sono rilevanze, in quanto la nota di credito (solo IVA) viene registrata; quindi, sarà presente nei registri e nella liquidazione.
- Per **IVA istituzionale** nel mese successivo l'ente dovrà (potrà) recuperare la quota dell'imposta versata in seguito al pagamento della fattura.

---

## FASE 2 – Creare riscossione diretta e reversale per entrata

Viene creato un documento entrata diretto per creare la reversale solo dell'imponibile.

Il progressivo di tale documento entrata sarà poi inserito nella sezione **altri dati** della nota di credito.

**Associazione nella nota di credito (punto 1) con documento di entrata del provvisorio (punto 2):**

[Schermata: finestra "Provvisorio Entrate" con campi: Economato (Documento non iter inviato all'economato), Anno chiusura (0), Documento collegato (2024 / 74719), Importo lordo (3.424,11), Descrizione documento ("Rimborso imponibile Nota di Credito (buoni pasto) n. 7/PB."), Documenti di Riscossione collegati (Anno/Progressivo documento: 2024 / 74719 – "Rimborso imponibile Nota di Credito (buoni pasto) n. 7/PB.")]

- La nota di credito ricevuta ha soltanto valenza in termini di IVA e **non potrà essere collegata alla fattura** in quanto già pagata in precedenza.
- Il rimborso del fornitore, incassato con il provvisorio, permette di recuperare il solo importo dell'imponibile.

---

## FASE 3 – Suddivisione Versamento IVA

Al **16 del mese successivo** effettuare il versamento totale della parte IVA split istituzionale incassata.

Dal totale IVA da versare suddividere:

- Creare **liquidazione diretta** per Mandato per agenzia entrate, impegno IVA split, titolo 7
- Creare **liquidazione diretta** per Mandato intestato all'ente per la sola quota IVA da recuperare, impegno IVA split, titolo 7

---

- In ultimo creare **documento entrata** (riscossione diretta) intestato all'ente e relativa reversale di reincasso su accertamento nel **TIT. 3.05** per importo recuperato.

In questo modo abbiamo anche la quadratura in partite di giro, in quanto ciò che ho incassato in entrata nel TIT.9 viene pagato nel TIT.7.

---

## Esempio: Nota Credito di € 61.000,00 Importo Lordo e IVA 22% € 11.000

### FASE 1

Registriamo la nota di credito con la causale **solo IVA**.

### FASE 2

Creiamo documento entrata per la sola quota imponibile incassata **50.000 €** (o regolarizziamo provvisorio se c'è) e creiamo la relativa reversale.

Nel documento uscita solo IVA, in **altri dati** inseriamo il progressivo e l'anno di questo documento entrata creato precedentemente.

### FASE 3 – Al momento del versamento IVA

1. Creiamo la **liquidazione diretta** per fare il mandato della quota IVA intestato all'ente per **€ 11.000** con impegno legato all'IVA Split sul **titolo 7**.

2. Creiamo un'altra **liquidazione diretta** intestata all'Agenzia delle Entrate per il mandato della quota IVA da versare all'erario per la parte restante, escludendo l'importo dell'IVA della nota credito già creata al punto 1.

3. Creiamo la **riscossione diretta** per **€ 11.000** intestata all'ente sempre per l'importo IVA da recuperare nel **titolo 3.05** con accertamento correlato.