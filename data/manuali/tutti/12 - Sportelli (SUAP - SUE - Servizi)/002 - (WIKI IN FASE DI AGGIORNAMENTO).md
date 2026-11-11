# Variabili più utilizzate

## Numero e data di protocollo del fascicolo elettronico

```
@{$PRABASE.GESNPR_NM}@ del @{$PRABASE.DATA_PRT}@
```

## Numero e data di protocollo del fascicolo elettronico, con eventuale integrazione

```
@{$PRABASE.GESNPR_NM}@ del @{$PRABASE.DATA_PRT}@@{if $PRAPASSISEQ.PASSOTIP_900001.AR_COMPRT}@ e successivamente integrata in data @{$PRAPASSISEQ.PASSOTIP_900001.AR_COMDPR}@ prot. n. @{$PRAPASSISEQ.PASSOTIP_900001.AR_COMPRT}@@{/if}@
```

> Il tipo passo **900001** (si può utilizzare qualsiasi codice) deve essere creato tramite la funzione di menù **[40. Fascicoli Elettronici - 10. Archivi - 30. Tipi di Passo]**. Una volta creato deve essere assegnato ad ogni passo di ricezione integrazione tramite apposito campo presente nella tab *"Dati Principali"* del passo.

## Oggetto del Fascicolo Elettronico

```
@{$PRABASE.GESOGG}@
```

Se si desidera l'oggetto del fascicolo scritto in maiuscolo utilizzare la seguente variabile:

```
@{$PRABASE.GESOGG|strtoupper}@
```

## Ubicazione singola ed eventuale civico

```
@{$PRASOGGETTI.SOGGETTO0014.DESIND}@@{if $PRASOGGETTI.SOGGETTO0014.DESCIV}@ n. @{$PRASOGGETTI.SOGGETTO0014.DESCIV}@@{/if}@
```

## Ubicazioni presenti nella tab "Ubicazione" (Fascicolo Elettronico) ed eventuali civici

```
@{$PRAANAVAR.UBICAZIONI_PRATICA}@
```

Verificare che sia presente la variabile nella funzione di menù: **[40. Fascicoli Elettronici - 10. Archivi - 210. Gestione Variabili]**

Se non è presente aggiungere **UBICAZIONI_PRATICA** (guida: *Variabili personalizzate*), inserire una tabella con bordi nascosti (1 colonna e 1 riga) contenente il seguente testo:

```
@{$FASCICOLO_SOGGETTO.DESIND}@@{if $FASCICOLO_SOGGETTO.DESCIV}@ n. @{$FASCICOLO_SOGGETTO.DESCIV}@@{/if}@
```

## Identificativo catastale (eventuale Sezione, Foglio, Mappale, eventuale sub)

```
@{if $PRAAGGIUNTIVI.IMM_SEZIONE}@@{$PRAAGGIUNTIVI.IMM_SEZIONE}@, @{/if}@Foglio @{$PRAAGGIUNTIVI.IMM_FOGLIO}@,  Mappale @{$PRAAGGIUNTIVI.IMM_PARTICELLA}@@{if $PRAAGGIUNTIVI.IMM_SUBALTERNO}@, Sub @{$PRAAGGIUNTIVI.IMM_SUBALTERNO}@@{/if}@
```

## Identificativi catastali presenti nella tab "Ubicazione" (Fascicolo Elettronico)

```
@{$PRAANAVAR.IMMOBILI_PRATICA_1C}@
```

Verificare che sia presente la variabile nella funzione di menù: **[40. Fascicoli Elettronici - 10. Archivi - 210. Gestione Variabili]**

Se non è presente aggiungere **IMMOBILI_PRATICA_1C** (guida: *Variabili personalizzate*), inserire una tabella con bordi nascosti (1 colonna e 1 riga) contenente il seguente testo:

```
@{if $PRAAGGIUNTIVI.IMM_SEZIONE}@@{$PRAAGGIUNTIVI.IMM_SEZIONE}@, @{/if}@Foglio @{$PRAAGGIUNTIVI.IMM_FOGLIO}@, Mappale @{$PRAAGGIUNTIVI.IMM_PARTICELLA}@@{if $PRAAGGIUNTIVI.IMM_SUBALTERNO}@, Sub @{$PRAAGGIUNTIVI.IMM_SUBALTERNO}@@{/if}@;
```