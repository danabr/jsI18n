/**
  jsI18n library.
  Simple client side internationalization.
  Copyright (c) Daniel Abrahamsson 2010
**/

function JsI18n()
{
  this.locale = ""            //Current locale
  this.locales = new Array()  //Available locales

  /*
    Helper for translating a node
    and all its child nodes.
  */
  this.processNode = function(node)
  {
    if(node != undefined)
    {
      //Translate
      if(node.nodeType == 1) //Element node
      {
        var key = node.attributes["data-trans"]
        if(key != null)
          translateTag(node, key.nodeValue)
      }
    
      //Process child nodes
      var children = node.childNodes
      for(var i = 0; i < children.length; i++)
        this.processNode(children[i])
    } 

    /*
      Private helper for replacing
      the contents of the node with
      the translation identified by the
      given key. If no translation exists,
      the original content is used.
    */
    function translateTag(node, key)
    {
      var translation = jsI18n.t(key) //HACK! (this.t does not work)
      if(translation != undefined)
        node.innerHTML = translation
    }
  }
}

/*
  Adds a locale to the list,
  replacing the translations
  if the locale is already defined.
*/
JsI18n.prototype.addLocale = function(locale, translations)
{
  this.locales[locale.toString()] = translations 
}

/*
  Sets the locale to use when translating.
*/
JsI18n.prototype.setLocale = function(locale)
{
  this.locale = locale
}

/*
  Fetches the translation associated with the given key.
*/
JsI18n.prototype.t = function(key)
{
  var translations = this.locales[this.locale]
  if(translations != undefined)
  {
    return translations[key.toString()]
  }
  return undefined;
}

/*
  Alias for JsI18n.t
*/
JsI18n.prototype.translate = function(key)
{
  this.t(key)
}

/**
  Replaces the contents of all tags
  that have the data-trans attribute set.
**/
JsI18n.prototype.processPage = function()
{
  this.processNode(document.getElementsByTagName("html")[0])
}

//Global
jsI18n = new JsI18n
