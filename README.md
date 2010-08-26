#jsI18n

jsI18n is a simple javascript library for putting I18n on the client side.

##Howto

###Setup

Include "jsI18n.js", and then all your locale files into your HTML document.
Set the locale to use by calling `jsI18n.setLocale(locale)`.

In case you use element translation, also make sure you call 
*jsI18n.processPage()* after the page has finished loading.

###Translating HTML element content

Simply add a "data-trans" attribute to all elements whose contents
you want translated. Like this:

    <div data-trans="cat">Default content</div>

jsI18n will replace the content of the div-tag with the text associated 
with the key "cat". If no applicable translation exists, the original 
element content will be preserved.

####Attribute translation

You can also translate the contents of multiple attributes by specifiying
`attribute=key` pairs in the *data-trans* attribute:

    <textarea alt="", data-trans="alt=altkey;html=contentkey">Default</textarea>

Note the special `html` key. It is used to specify the key for the content of
the tag when this notation is used.

###Translating with JS

    js1I8n.t("cat") == jsI18n.translate("cat") //Use the one you like (t is faster, though).

###Locale files

The locale files are plain javascript files that call 
`jsI18n.addLocale(locale, translations)`, where `locale`
is a user choosen locale identifier, and `translations`
is an associative array mapping keys (strings) to texts (strings).

An example:

    var translations = {"cat":"Katt", "dog":"Hund"}
    jsI18n.addLocale("sv", translations)

###Changing locale
    jsI18n.setLocale("sv")
    jsI18n.processPage() //Retranslate page

###Live example

A live example is provided in readme.html.

##Compatibility

jsI18n has been tested with the following browsers:

* Internet Explorer 8
* Mozilla Firefox 3.6
* Google Chrome 5.0
* Opera 10

It may very well function with older versions of these browsers, I just 
have not had the possibility to test it. If you have success using jsI18n
with another browser, or older versions of the ones listed here, please
report it so I can update the list.

##Bugs and feature requests

Please post all bugs and feature requests as Github issues.
