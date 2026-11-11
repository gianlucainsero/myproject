# Comunicazione n.12/2025

**Oggetto:** Operazioni per modificare gestione vincolo avanzo accantonato "Fondo debiti commerciali"

**Scopo:** Il documento illustra le fasi da seguire per modificare l'impostazione del vincolo accantonato "Fondo debito commerciali" in modo da avere la sua rappresentazione nel prospetto risultato di amministrazione presunto.

---

## 1. Operatività su Prospetti al Bilancio di Previsione

### 1.1 Modifica Impostazione definizione vincolo

#### 1.1.1 Fondo garanzia debiti commerciali

**Percorso nel software:**

Servizio Economici
→ Tabelle
→ Configurazioni
→ Vincoli Parametri
→ Destinazione Vincolo

[Schermata: Tabella "Destinazioni Vincolo" con elenco dei vincoli di tipo "1-P.Accantonata" e "2-P.Vincolata". La riga evidenziata in rosso è il Prog.Dest. 7 – "Fondo garanzia debiti commerciali" con Ordine 50, con i flag di totalizzazione nelle colonne Tot1.Prev., Tot2.Prev., Tot1.Rend., Tot2.Rend.]

**Azione da eseguire:**

Togliere il flag in modo da non includere (totalizzare) il "fondo di garanzia debiti commerciali" nella riga "altri accantonamenti".

[Schermata: Dettaglio della "Destinazione vincolo" per Tipo Vincolo "1-P.Accantonata", Prog.Dest. 7, Descrizione "Fondo garanzia debiti commerciali", Ordine 50. Sono presenti i checkbox:
- **Totalizza Prev.1** – Totalizzazione per la Previsione su Allegati al Bilancio (su B6 se tipo1 - su CS se tipo2)
- **Totalizza Prev.2** – Totalizzazione per la Previsione su prospetto Risultato di Amministrazione (su B6 se tipo1 - su CS se tipo2) → *flag attivo*
- **Totalizza Rend.1** – Totalizzazione per il Rendiconto su Allegati al Bilancio (su B6 se tipo1 - su CS se tipo2)
- **Totalizza Rend.2** – Totalizzazione per il Rendiconto su prospetto Risultato di Amministrazione (su B6 se tipo1 - su CS se tipo2)]

---

## Risultato atteso

In questo modo viene gestita la riga del fondo garanzia debiti commerciali nel risultato di amministrazione presunto come da prospetto ministeriale.

[Schermata: Prospetto ministeriale "Allegato a) Risultato presunto di amministrazione" – TABELLA DIMOSTRATIVA DEL RISULTATO DI AMMINISTRAZIONE PRESUNTO (ALL'INIZIO DELL'ESERCIZIO N DI RIFERIMENTO DEL BILANCIO DI PREVISIONE). Nella sezione "2) Composizione del risultato di amministrazione presunto al 31/12 N-1", sotto "Parte accantonata", sono evidenziate in giallo le righe:
- **Fondo di garanzia debiti commerciali**
- **Fondo obiettivi di finanza pubblica**

Queste righe risultano ora separate e distinte dalla riga "Altri accantonamenti", confermando che il fondo non viene più totalizzato in quest'ultima.]