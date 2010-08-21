/*
  Swedish translation file
*/
var translations = {
    "title":"jsI18n - Läs mig",
    "change-lang":"Byt språk:",
    "intro":
      "jsI18n är ett enkelt javaskript-bibliotek för internationalsering"+
      " på klientsidan.",
    "howto-html":"Hur översätter jag mina HTML-sidor?",
    "howto-html-1":
      "Det är enkelt. Länka till \"jsi18n.js\" och dina " + 
      "språkfiler. Läggs sedan till <em>data-trans</em> attributet till de " +
      "element vars innehåll skall översättas:",
    "howto-html-2":
      "Anropa sedan <code>jsI18n.processPage</code> när sidan har " +
      "laddats färdigt. Du kan till exempel placera det i body-taggens onload"+
      "-attribut.",
    "howto-html-3":
      "<em>processPage</em> hittar texten associerad med nyckel" +
      "ordet \"cat\" i översättningstabellen för valt språk och ersätter " +
      "taggens innehåll med denna. Om ingen översättning finns, eller om " +
      "inget språk har valts används ursprungsvärdet.",
    "howto-html-4":"Se källkoden till denna sida för ett fungerande exempel!",
    "trans-attr":"Attributöversättningar",
    "trans-attr-1":
      "Ibland vill man översätta attributvärden, så som <em>alt</em> och <em>" +
      "title</em> för input-element. Detta åstadkommer du att ange <em>" + 
      "attributnamn</em>=<em>nyckel</em> i <em>data-trans</em>-attributet." +
      "Du kan översätta flera attribut genom att separera dem med semikolon:",
    "trans-attr-2":
      "Detta fungerar för alla typer av element, inte bara " +
      "input- och img-element.<br/><br/><strong>Obs!</strong> Med denna " +
      "notation anges nyckel för att översätta elementets innehåll med " +
      "<code>html=key</code> i <em>data-trans</em>.",
    "howto-js":"Kan jag översätta text från ett skript?",
    "howto-change-locale":"Hur byter jag språk",
    "change-locale-content":
      "Anropa <code>jsI18n.setLocale(locale)</code>. Det " +
      " är upp till dig hur du lagrar språkvärdet (locale).",
    "locale-files":"Språkfiler",
    "locale-files-1":
      "Språkfilerna är javaskriptfiler som anropar funktionen "+
      "<em>jsI18n.addLocale(locale, translations)</em>, där <em>locale</em> " +
      "identifierar språket, och <em>translations</em> är en associativ array"+
      " som mappar nycklar till översättningar.",
    "locale-files-2":"Vårt katt-exempel skulle kunna använda följande kod:",
    "locale-files-3":
      "<strong>Obs!</strong> Inkludera språkfilerna i din HTML" +
      " <em>efter</em> \"jsI18n.js\".",
    "pros-cons":"Fördelar och nackdelar",
    "pros-cons-1":
      "Du bör betänka följande saker innan du använder jsI18n för " + 
      "internationalisering",
    "pros-cons-2":
      "Med tanke på ovanstående (möjliga) begräsningar, varför använda " +
      "jsI18n överhuvudtaget?",
    "js-turned-off":"Vad händer med användare med javaskript avstängt?",
    "js-turned-off-1":
      "Om din sida redan kräver javaskript har du förmodligen redan hanterat" +
      " detta.<br><br/>Om inte, kommer sådana användare enbart kunna använda" +
      " sidan på originalspråket (eftersom taggarnas urpsrungstext visas).",
    "slower-download":"Längre nedladdningstid" ,
    "slower-download-1":
      "När du använder jsI18n kommer klienten behöva ladda ner åtminstone en "+
      "ytterligare fil. Om din sida är mycket stor, är dina översättningsfiler"+
      " mest troligt detsamma, vilket resulterar i långsammare sidnedladdning.",
    "no-sss":"Ingen server side scripting",
    "no-sss-1":
      "Om du inte är i behov av server side scripting och inte vill hantera " +
      "flera HTML-sidor per språk, så är jsI18n en trevlig lösning.",
    "simple":"Det är enkelt och elegant!",
    "simple-1":
      "Med hjälp av jsI18n är det enkelt att lägga till nya språk och ändra " +
      "översättningar utan att förstöra din HTML. Utöver detta kräver inte " +
      "jsI18n några fulhack, det är helt vanlig HTML och javaskript." 
    }

//Add locale
jsI18n.addLocale("sv", translations)
