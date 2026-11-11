# Comunicazione n.10A/2018

## Riservata per Responsabile Ufficio Ragioneria - Riepilogo operatività sull'Iter dei Decreti di liquidazione con firma digitale

**Scopo del documento:** Il documento illustra le operatività dell'iter dei Decreti di liquidazione con firma digitale.

| Data | Oggetto comunicazione /integrazione | Versione |
|------|--------------------------------------|----------|
| 18.09.2018 | Prima comunicazione | C10A V 0 |
| 03.05.2022 | Revisione con aggiunta indicata in giallo | C10A V 1 |

---

## 1. Fasi procedurali dell'iter

Le fasi procedurali di un Decreto di liquidazione dall'acquisizione del documento passivo elettronico da SDI sino all'emissione dell'ordinativo informatico sono definibili in funzione dell'organizzazione dell'Ente. Le funzioni supportate dal software sono elencate di seguito suddivise per fasi.

### Fase 1: Accettazione e/o Rifiuto del documento

| Iter | Funzione di Accettazione e o Rifiuto del documento | Posizione Decreto Liquid.ne | Operatore | Fase succ. |
|------|---------------------------------------------------|----------------------------|-----------|------------|
| 1 | Scarico automatico documenti da SDI con evidenza del codice ufficio di fatturazione elettronica indicato dal fornitore. | | Operazione schedulata interna | 2 |
| 2 | Accettazione o rifiuto fattura | | Operatore del servizio assegnato all'ufficio di fatturazione elettronica | 3 |
| 3 | Invio notifica accettazione o rifiuto al fornitore | | Operazione automatica di sistema | 4 / 5 |
| 4 | **Documento rifiutato** | | Fine iter -> | **21** |
| 5 | Documento accettato (alternativa fase 4) | | Operatore ragioneria | 6 |
| 6 | Inserimento documento nel sistema contabile City-financing con IVA e verifica data scadenza | | Operatore ragioneria | 7 |
| 7 | Assegnazione al servizio amministrativo con o senza indicazione dell'impegno di spesa | | Operatore ragioneria | 8 |

### Fase 2: Funzioni riservate al servizio che predispone il Decreto di Liquidazione (DL)

| Iter | Funzioni riservate al servizio che predispone il Decreto di Liquidazione (DL) | Posizione Decreto Liquid.ne | Operatore | Fase succ. |
|------|------------------------------------------------------------------------------|----------------------------|-----------|------------|
| 8 | Esame fattura ed accettazione per liquidazione | | Istruttore servizio periferico | 9/10 |
| 9 | Documento NON accettato dal servizio | | Istruttore servizio periferico | 7 (rinvia) |
| 10 | Documento accettato dal servizio (alternativa fase 9) | | Istruttore servizio periferico | 11 |
| 11 | Predispone decreto di liquidazione, assegna numero progressivo al decreto, associa tutti i documenti con assegnazione dell'impegno di spesa se non è stato assegnato dall'operatore di ragioneria, redige stampa provvisoria ed esegue tutte le modifiche o integrazioni richieste | Pos 10 o 20 | Istruttore servizio periferico | 12 /13 |
| 12 | Rinvia il decreto per correzioni o integrazioni all'istruttore del servizio che lo ha compilato | Pos.20 | Responsabile servizio | 11 |
| 13 | Conferma decreto e produzione versione informatica in formato pdf. | Pos. 30 | Responsabile servizio | 14 |
| 14 | Firma digitalmente il decreto di liquidazione (alternativa fase 12). Si memorizza il testo per conservazione | Pos. 40 | Responsabile servizio | 15 |

### Fase 3: Funzioni riservate al servizio ragioneria sul DL

| Iter | Funzioni riservate al servizio ragioneria sul DL | Posizione DL | Operatore | Fase succ. |
|------|--------------------------------------------------|--------------|-----------|------------|
| 15 | Verifica della ragioneria | Pos. 40 | Operatore ragioneria (1) | 16/17/18/19 |
| 16 | Annulla decreto e dissocia i documenti associati, il numero del decreto rimane annullato con il solo titolo | Pos. 90 | Operatore ragioneria (1) | 21 |
| 17 | Toglie firma digitale e rinvia Decreto al servizio per integrazioni o correzioni, viene cancellato testo associato | Pos. 30 | Operatore ragioneria (1) | 12 |
| 18 | Sospende decreto in attesa di documentazione. Il decreto sospeso non è modificabile. Un decreto sospeso può essere riattivato per la successiva verifica (passo 15) oppure può essere annullato (passo 16) | Pos. 80 | Operatore ragioneria (1) | 15/16 |
| 19 | Assegna visto al decreto per emissione ordinativo | Pos. 50 | Operatore ragioneria (2) | 20 |
| 20 | Emette ordinativo su decreti approvati | Pos. 60 | Operatore ragioneria (3) | 21 |
| 21 | Fine iter | | | |

---

## 2. Stati del decreto di Liquidazione ed autorizzazioni Utenti

### 2.1 Posizioni del decreto di liquidazione

I decreti di liquidazione nel loro iter formativo dall'inserimento all'emissione dell'ordinativo cui sono collegati assumono le seguenti posizioni:

[Diagramma: Elenco a tendina delle posizioni del decreto di liquidazione con i seguenti valori:]

- **00** - Tutti
- **10** - Proposta da Numerare
- **15** - Proposta Stampata da Numerare
- **20** - Proposta Numerata
- **30** - Proposta stampata in modo definitivo
- **40** - Atto Firmato Digitalmente dal Responsabile ed Inviato alla Ragioneria
- **45** - Atto Verificato dalla Ragioneria
- **50** - Atto Vistato dalla Ragioneria
- **60** - Atto con ordinativo emesso
- **80** - Proposta Sospesa
- **90** - Proposta Annullata

### 2.2 Utenti che operano con i decreti di liquidazione

| Tipologie di utente | Operazione | Posizione DL | Passi Iter parag. 1.1 |
|---------------------|-----------|--------------|----------------------|
| Istruttore servizio periferico | Redige l'atto di liquidazione | 10-20-30 | 8-9-10-11-13 |
| Responsabile del servizio che firma il DL | Verifica e controlla l'atto di liquidazione. Firma digitalmente l'atto di liquidazione | 30-40 | 12-14 |
| Operatore ragioneria (1) | Controlla, verifica, sospende, annulla gli atti di liquidazione | 40-80-90 | 15-16-7-18 |
| Operatore ragioneria (2) | Appone il visto | 50 | 19 |
| Operatore ragioneria (3) | Emette il mandato di pagamento | 60 | 20 |

> **Nota:** L'operatore ragioneria (1) e l'operatore ragioneria (2) può essere rappresentato dalla stessa figura.

> **Nota:** I passi dell'iter dal punto 1 sino al punto 11 vengono eseguiti automaticamente dal software di gestione automatizzata delle **grandi utenze** per le tipologie di documenti e soggetti definiti in apposite tabelle (Illuminazione elettrica, telefonia, canoni acqua Etc) che possono essere acquisiti, assegnati al servizio ed inseriti nei Decreti di Liquidazione con apposita procedura automatica.

### 2.3 Autorizzazioni utente per fasi ITER

| Utente | Azione | Posizione input | Posizione output | Note | Autorizzazione |
|--------|--------|-----------------|------------------|------|----------------|
| Istruttore Servizio Periferico | Redige proposta decreto | 10 -- | 15 | Arriva alla 15 se il respons. del Servizio esegue la stampa definitiva | 14g 15p |
| " | Effettua la numerazione | 10/15 | 20 | | 14c |
| " | Esegue la visione dei sospesi | 80 | 80 | Non modifica stato | 14c 15p |
| " | Redige ed esegue la stampa definitiva (PDF) | 10 -20 | 30 | Arriva alla pos.30 quando il respons. del servizio esegue il controllo e la firma digitale | 14c 15p |
| Responsabile del servizio | Firma il decreto | 30 | 40 | Esame testo | 19G 14c 15p |
| " | Genera la versione definitiva del decreto e lo firma (decreto non modificabile) | 20 | 40 | Esame testo | 19G 14c 15p |
| " | Rinvia decreto all'istruttore periferico | 30 | 20 | Cancella pdf e rimuove firma digitale | 19G 14c 15p |
| " | Visualizza i decreti annullati | 90 | 90 | Solo verifica note e nessuna modifica | 19G 14c 15p |
| " | **Elimina firma su atto** | 40 | 30 | Rimuove pdf firmato | **19r** |
| Operatore Ragioneria | Esamina decreti di liquidazione ed appone il visto e può rimuoverlo | 40 | 50 | Verifica il decreto | 20c |
| " | Sospende l'atto che rimane firmato !! | 40 | 80 | Sospende inserendo le note | 20c |
| " | Riabilita i decreti sospesi | 80 | 50 | Ok toglie Note | 20g |
| " | Annulla il decreto e scollega automaticamente i documenti associati | 40 | 90 | Si procede con nuovo decreto per liquidare | 20g |
| " | Annulla un sospeso | 80 | 90 | | 20g |
| " | Verifica ed appone il visto | 40 | 50 | | 20g |
| " | Toglie visto | 50 | 40 | Azzera data verifica | 20c |
| " | **Elimina firma su atto** | 40 | 20 | Rimuove pdf firmato | **19r** |
| Operatore Ragioneria | Emette ordinativo | 50 | 60 | Emette ordinativo solo se in posizione 50 | 17g 16g |
| " | Atto non pagabile | 80 | | Blocco | 17g |
| " | Atto annullato con documenti di spesa dissociati | 90 | | Blocco | 17g |

### 2.4 Riepilogo autorizzazioni

| Autorizzazione FES_Finanziaria | Funzione permessi | Note |
|-------------------------------|-------------------|------|
| **14G** | Consente di associare/dissociare i documenti al decreto di liquidazione e di gestire le fasi 10 e 15 *(decisione del 03.05.2022)*. Può creare allegati con firma digitale o immagine della propria firma | |
| **14C** | Oltre alle funzioni della 14G permette di effettuare la numerazione del decreto di liquidazione. Non firma il documento finale ma può creare allegati con firma digitale o immagine della firma elettronica | |
| **15p** | Permette di modificare solo le liquidazioni proprie FES_DOCLIQ (inserite dallo stesso operatore). Indipendentemente da 15p o 15c l'utente può modificare sempre solo e solo i decreti di liquidazione FES_LIQAT che sono di competenza in base al funz ut o uteord | C= permette la modifica di liquidazioni inserite da altri utenti |
| **16C** | Permette di gestire le funzioni di emissione modifica e cancellazione dei mandati emessi automaticamente | G=solo modifica |
| **17C** | Permette di gestire l'emissione, modifica, cancellazione dei mandati | G=solo modifica |
| **19G** | Gestione delle fasi del decreto di liquidazione per le posizioni 30 40 80 90 | |
| **19R** | Oltre alle funzioni consentite dalla 19G consente di rimuovere la firma digitale (autorizzazione speciale da assegnare ai soli responsabili) | |
| **20G** | Assegna il visto dell'ufficio ragioneria | |
| **20C** | Oltre alle funzioni consentite dalla 20G consente di rimuovere il visto. | |