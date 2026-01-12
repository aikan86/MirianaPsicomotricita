# Come far apparire il logo ALEF nei risultati Google

## ✅ Cosa ho fatto:
Ho aggiornato il `favicon.ico` con il logo ALEF corretto.

## 📋 Cosa devi fare tu:

### 1. Sostituire il favicon sul server
Sostituisci il file `public/favicon.ico` sul server con quello nuovo che ti preparo.

### 2. Rifare il deploy del sito
- Se usi **Vercel/Netlify**: fai un nuovo deploy
- Se usi **hosting manuale**: carica il nuovo `favicon.ico` via FTP

### 3. Verificare che funzioni localmente
Dopo il deploy, vai su:
```
https://mirianaferro-psicomotricista.it/favicon.ico
```
Dovresti vedere il logo ALEF.

### 4. Forzare Google ad aggiornare (IMPORTANTE!)

#### Opzione A - Google Search Console (Raccomandato)
1. Vai su: https://search.google.com/search-console
2. Seleziona la proprietà `mirianaferro-psicomotricista.it`
3. Vai su **Controllo URL** in alto
4. Inserisci l'URL: `https://mirianaferro-psicomotricista.it`
5. Clicca su **Richiedi indicizzazione**
6. Aspetta 2-7 giorni

#### Opzione B - Forzare aggiornamento cache
1. Vai su: https://www.google.com/webmasters/tools/submit-url
2. Inserisci: `https://mirianaferro-psicomotricista.it`
3. Completa il captcha e invia

#### Opzione C - Cancella cache manualmente
Vai su questa URL (sostituendo il tuo sito):
```
https://www.google.com/search?q=cache:mirianaferro-psicomotricista.it
```
Poi cerca il link "versione corrente" per forzare un refresh.

### 5. Verifica il logo nei Social (Facebook/Twitter)
Se vuoi che anche Facebook/LinkedIn mostrino il logo corretto:

**Facebook Debugger:**
https://developers.facebook.com/tools/debug/
Inserisci il tuo URL e clicca "Scrape Again"

**Twitter Card Validator:**
https://cards-dev.twitter.com/validator
Inserisci il tuo URL

## ⏰ Tempi di aggiornamento
- **Sito reale**: immediato dopo deploy
- **Google Search**: 2-7 giorni (a volte anche 2-3 settimane)
- **Social media**: immediato dopo "scrape again"

## 🔍 Come verificare
Cerca su Google:
```
site:mirianaferro-psicomotricista.it
```
E controlla se il logo appare. Se non c'è ancora, è normale - aspetta qualche giorno!

## ❓ Serve aiuto?
Se dopo 2 settimane Google non ha aggiornato, contattami!

---
**Nota:** Google aggiorna i risultati quando vuole, non c'è un modo per forzarlo istantaneamente. Pazienza! 😊
