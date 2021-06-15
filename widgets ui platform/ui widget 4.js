             
    'widget 4': {
        friendlyName: 'Widget 4',
        description: 'Quote pop up more design',
        fields: [
            // { type: 'onpageposition', id: 'text', name: 'text', label: 'text' }, // placeholder so i know the markup.
            'BACKGROUND COLOUR',
            { type: 'background-image', id: 'bgimg', name: 'bgimg', label: 'Background Colour', value: 'linear-gradient(45deg, purple, white)'},
            'QUOTE',
            { type: 'color', id: 'color', name: 'color', label: 'Text Colour', value: '#F3ECEC' },
            { type: 'text', id: 'content', name: 'content', label: 'Content Text', value: '<br>Happy days are here<br> again! The skies above are<br> clear again. Let us<br> sing a song of cheer<br> again, happy days are<br> here again!<br>' },
            'FOREGROUND',
            { type: 'color', id: 'fgColor', name: 'fgColor', label: 'Foreground', value: '#F3ECEC' }
        ],
    
    
        js_build: function(widget){
            var uniqueID = Date.now();
            var str = `
            
    //!-##${widget.widgetType}--START##
    // ${JSON.stringify(widget)}
    (function(){
    var settings = { 
        content: '${widget.content.replace('\'', '\\\'')}', // content txt
        bgimg: '${widget.bgimg}', // background colour 
        color: '${widget.color}', // text colour 
        fgColor: '${widget.fgColor}' //for quotes colour/ border colour
    };
var elid = 'wto-widget--quote_box2--${uniqueID}';
// Remove if exists - ensures no duplicates
document.querySelectorAll('.wto-widget--quote_box2').forEach(function(node){
node.parentNode.removeChild(node);
});

var body = document.getElementsByTagName('body')[0];
var el = document.createElement('div');
body.insertAdjacentElement('afterBegin', el);

var elhtml = '\<div id="'+ elid +'" class="wto-widget--quote_box2" style="z-index: 9999; background-image: '+ settings.bgimg +'; width: 300px; height: 400px; margin: 10px; padding: 25px; position: fixed;">\
<svg id="wto_widget3_open_quote" style="position: fixed; top: 100px; left: 122px; width: 30px; height: 25px; z-index: 9999; color: '+ settings.fgColor +';" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-quote-left fa-w-16 fa-2x">\
<path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>\
</svg>\
<div class="leftborder" style="border-left: 3px solid '+ settings.fgColor +'; height: 48.3%; position: fixed; top:0; left: 90px;"></div>\
<div class="botborder" style="border-bottom: 3px solid '+ settings.fgColor +'; width: 55%; position: relative; top: 303px; left: 50px;"></div>\
<div class="topborder" style="border-bottom: 3px solid '+ settings.fgColor +'; width: 52%; position: relative; top: 64px; left: 122px"></div>\
<div class="rightborder" style="border-right: 3px solid '+ settings.fgColor +'; height: 50%; position: fixed; top: 110px; left: 320px"></div>\
<h1 style="text-align: center; color:'+ settings.color +'; font-family: sans-serif; font-size: 25px; font-weight: bold; font-style: italic; width: 160px; height: 75px; margin: 5px; padding: 30px; position: fixed; top: 95px; left: 75px;">Quote</h1>\
<p id="content" style="text-align: center; color:'+ settings.color +'; font-family: sans-serif; font-size: 15px; font-weight: bold; font-style: italic; width: 160px; height: 75px; margin: 5px; padding: 25px; position: fixed; top: 120px; left: 75px; ">'+ settings.content +'</p><br>\
<h2 style="text-align: center; color:'+ settings.color +'; font-family: sans-serif; font-size: 35px; font-weight: bold; width: 160px; height: 75px; margin: 5px; padding: 30px; position: fixed; top: 250px; left: 75px;">. . .</h2>\
<svg  id="wto_widget3_close_quote" style="position: fixed; top: 334px; left: 270px; width: 30px; height: 25px; z-index: 9999; color: '+ settings.fgColor +';" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-quote-right fa-w-16 fa-2x">\
<path fill="currentColor" d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>\
</svg></div>\
';
    el.outerHTML = elhtml;

})();
//!-##${widget.widgetType}--END##`;
                    
        return str;
        }
    },