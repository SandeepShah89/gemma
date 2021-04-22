var settings = {
    backgroundColor ="white",
    foregroundColor ="black",
    content: "Happy days are here<br> again! The skies above<br> are clear again. Let us<br> sing a song of cheer<br> again, happy days are<br> here again!",
    buttonText : "See More.",
    buttonTextColor: "white",
    buttonBackColor: "black"
};
var elm = document.createElement('div');
document.getElemenstByTagName('body')[0].appendChild(elm);
elm.outerHTML = ' \
<link rel="stylesheet" href="C:\\Users\\gemma\\Desktop\\Web Trends\\widget 3\\stylesheet.css">\
<div class="box">\
    <svg id="wto_widget3_open_quote" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-quote-left fa-w-16 fa-2x">\
        <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" class="">\
        </path>\
    </svg>\
    <p id="content">'+ settings.content +'</p>\
    <svg  id="wto_widget3_close_quote" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-quote-right fa-w-16 fa-2x">\
        <path fill="currentColor" d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" class="">\
        </path>\
    </svg>\
    <button id="wto_widget3_see_more">'+ settings.buttonText +'</button>\
</div>\
';