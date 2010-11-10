/*
  English translation file
*/
var translations = {
      "process-node": "Translating individual DOM nodes",
      "process-node-1":
        "You can translate individual nodes (parts of the page) by calling" +
        "<code>jsI18n.processNode(node)</code>, e.g. " +
        "<code>jsI18n.processNode(document.getElementById('to_translate'))</code>. " +
        "<a href=\"javascript:jsI18n.setLocale('sv'); " +
        "jsI18n.processNode(document.getElementById('process-node'))\">" +
        "Test it!</a>"
    }

//Add locale
jsI18n.addLocale("en", translations)
