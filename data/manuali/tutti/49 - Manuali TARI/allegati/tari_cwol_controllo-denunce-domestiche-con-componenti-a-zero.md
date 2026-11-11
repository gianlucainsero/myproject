# TARI - Manuale Operativo

## 1.1 Premessa

Prima di effettuare una bollettazione TARI è opportuno verificare se all'interno dell'applicativo ci sono delle denunce di Utenze Domestiche con componenti a zero per capire se è un errore o se è una scelta voluta dall'Ente.

---

## Controllo denunce con componenti a zero

Dal menù:

**Tributi → TARI → Gestione Utenze → Denunce**

[Schermata: percorso di menu a cascata - 70. Tributi > 50. TARI > 50. Gestione Utenze > 10. Denunce]

Si aprirà la videata di ricerca delle denunce: impostare i parametri come di seguito e fare **Elenca**.

[Schermata: videata di ricerca denunce con i seguenti campi impostati:]

- **Tipo Tariffa**: `8 - TARES/TARI`
- **Anno Riferimento**: `2025`
- **Classi**: `1 - UTENZE DOMESTICHE` (selezionata)
- **Usi**: tutti selezionati (1. ABITAZIONI CIVILI, 2. CASE SPARSE LONTANE DAL PERIMETRO, 3. CASE SPARSE LONTANE DAL PERIMETRO, 4. GARAGE, AUTORIMESSE, ETC AD USO ABITATIVO, 5. CAPANNI BALNEARI USO PRIVATO)
- **Solo Attive**: ☑ (spuntato)
- Pulsante **Elenca** evidenziato

Con un click su **Componenti famiglia**, essi verranno ordinati in ordine crescente:

[Schermata: griglia risultati "TARI: Contribuenti e Dichiarazioni" con colonna "Comp. Fam." ordinata in modo crescente. Le prime righe mostrano denunce con 0 componenti famiglia, evidenziate in rosso. Esempi di righe con: Contribuente, Prog. Denuncia/Cod.Utenza, Tipo Tariffa (es. 8-TARI 1 - UTENZE DOMESTICHE 1 - ABITAZIONI CIVILI), Comp. Fam. = 0, Ubicazione Dati catastali, Quantità, Dispos., Occupazione/Dichiarazione/ISC/Ruolo]

---

## Controllo tariffe

Dal menù:

**Tributi → TARI → Parametri di Configurazione → Cespiti-Classi-Categorie**

[Schermata: percorso di menu a cascata - 70. Tributi > 50. TARI > 10. Parametri di Configurazione > 40. Cespiti-Classi-Categorie]

Controllare tutte le categorie e vedere se per i componenti a zero c'è la tariffa:

[Schermata: tabella con due pannelli affiancati:]

**Classi:**

| Anno | Classe | Descrizione |
|------|--------|-------------|
| 2025 | 1 | UTENZE DOMESTICHE |
| 2025 | 2 | UTENZE NON DOMESTICHE |

**Categorie:**

| Anno | Classe | Uso | Descrizione |
|------|--------|-----|-------------|
| 2025 | 1 | 1 | ABITAZIONI CIVILI |
| 2025 | 1 | 2 | CASE SPARSE LONTANE DAL PERIMETRO |
| 2025 | 1 | 3 | CASE SPARSE LONTANE DAL PERIMETRO |
| 2025 | 1 | 4 | ABITAZIONI CIVILI RID. DEL 30% X ULTRASENNI |
| 2025 | 1 | 5 | GARAGE, AUTORIMESSE, ETC AD USO ABITATIVO |
| 2025 | 1 | 6 | CAPANNI BALNEARI USO PRIVATO |

Visualizzare la tariffa:

[Schermata: dettaglio tariffa con sezioni "Ruolo Ordinario" e "Ruolo Straordinario" e tabella "Definizione Tariffe Per Componenti Famiglia":]

| Nr.Comp. | Descrizione | Tariffa Fissa | Tariffa Variabile |
|----------|-------------|---------------|-------------------|
| **0** | ABITAZIONI CIVILI | 0.73686 | 177.67819 |
| 1 | ABITAZIONI CIVILI | 0.58662 | 77.25139 |
| 2 | ABITAZIONI CIVILI | 0.65818 | 83.43150 |
| 3 | ABITAZIONI CIVILI | 0.73686 | 177.67819 |
| 4 | ABITAZIONI CIVILI | 0.78694 | 231.75417 |

> **Nota:** La riga con Nr.Comp. = 0 è evidenziata in rosso, indicando che la tariffa per zero componenti è presente.

---

## Esito del controllo

- **Se la tariffa per zero componenti è presente** (come nell'esempio sopra, con Nr.Comp. = 0): i componenti a zero sono una scelta voluta dall'Ente e non richiedono correzione.

- **Se la tariffa per zero componenti NON è prevista** e l'elenco parte da 1: siamo in presenza di **errore numero componenti**, per cui andranno corretti.