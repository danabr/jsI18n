/*
  Swedish translation file
*/
var translations = {
    "title":"jsI18n - L�s mig",
    "change-lang":"Byt spr�k",
    "intro":
      "jsI18n �r ett enkelt javaskript-bibliotek f�r internationalsering"+
      " p� klientsidan.",
    "howto-html":"Hur �vers�tter jag mina HTML-sidor?",
    "howto-html-1":
      "Det �r enkelt. L�nka till \"jsi18n.js\" och dina " + 
      "spr�kfiler. L�ggs sedan till <em>data-trans</em> attributet till de " +
      "element vars inneh�ll skall �vers�ttas:",
    "howto-html-2":
      "Anropa sedan <em>jsI18n.processPage</em> n�r sidan har " +
      "laddats f�rdigt. Du kan till exempel placera det i body-taggens onload"+
      "-attribut.",
    "howto-html-3":
      "<em>processPage</em> hittar texten associerad med nyckel" +
      "ordet \"cat\" i �vers�ttningstabellen f�r valt spr�k och ers�tter " +
      "taggens inneh�ll med denna. Om ingen �vers�ttning finns, eller om " +
      "inget spr�k har valts anv�nds ursprungsv�rdet.",
    "howto-html-4":"Se k�llkoden till denna sida f�r ett fungerande exempel!",
    "howto-js":"Kan jag �vers�tta text fr�n ett skript?",
    "howto-change-locale":"Hur byter jag spr�k",
    "change-locale-content":
      "Anropa <em>jsI18n.setLocale(locale)</em>. Det " +
      " �r upp till dig hur du lagrar spr�kv�rdet (locale).",
    "locale-files":"Spr�kfiler",
    "locale-files-1":
      "Spr�kfilerna �r javaskriptfiler som anropar funktionen "+
      "<em>jsI18n.addLocale(locale, translations)</em>, d�r <em>locale</em> " +
      "identifierar spr�ket, och <em>translations</em> �r en associativ array"+
      " som mappar nycklar till �vers�ttningar.",
    "locale-files-2":"V�rt katt-exempel skulle kunna anv�nda f�ljande kod:",
    "locale-files-3":
      "<strong>Obs!</strong> Inkludera spr�kfilerna i din HTML" +
      " <em>efter</em> \"jsI18n.js\".",
    "pros-cons":"F�rdelar och nackdelar",
    "pros-cons-1":
      "Du b�r bet�nka f�ljande saker innan du anv�nder jsI18n f�r " + 
      "internationalisering",
    "pros-cons-2":
      "Med tanke p� ovanst�ende (m�jliga) begr�sningar, varf�r anv�nda " +
      "jsI18n �verhuvudtaget?",
    "js-turned-off":"Vad h�nder med anv�ndare med javaskript avst�ngt?",
    "js-turned-off-1":
      "Om din sida redan kr�ver javaskript har du f�rmodligen redan hanterat" +
      " detta.<br><br/>Om inte, kommer s�dana anv�ndare enbart kunna anv�nda" +
      " sidan p� originalspr�ket (eftersom taggarnas urpsrungstext visas).",
    "slower-download":"L�ngre nedladdningstid" ,
    "slower-download-1":
      "N�r du anv�nder jsI18n kommer klienten beh�va ladda ner �tminstone en "+
      "ytterligare fil. Om din sida �r mycket stor, �r dina �vers�ttningsfiler"+
      " mest troligt detsamma, vilket resulterar i l�ngsammare sidnedladdning.",
    "no-sss":"Ingen server side scripting",
    "no-sss-1":
      "Om du inte �r i behov av server side scripting och inte vill hantera " +
      "flera HTML-sidor per spr�k, s� �r jsI18n en trevlig l�sning.",
    "simple":"Det �r enkelt och elegant!",
    "simple-1":
      "Med hj�lp av jsI18n �r det enkelt att l�gga till nya spr�k och �ndra " +
      "�vers�ttningar utan att f�rst�ra din HTML. Ut�ver detta kr�ver inte " +
      "jsI18n n�gra fulhack, det �r helt vanlig HTML och javaskript." 
    }

//Add locale
jsI18n.addLocale("sv", translations)
