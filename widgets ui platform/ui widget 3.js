             
      'widget 3': {
        friendlyName: 'Widget 3',
        description: 'Quote pop up with button',
        fields: [
            // { type: 'onpageposition', id: 'text', name: 'text', label: 'text' }, // placeholder so i know the markup.
            'BACKGROUND COLOUR',
            { type: 'color', id: 'bgcol', name: 'bgcol', label: 'Background Colour', value: '#F3ECEC' },
            'QUOTE',
            { type: 'color', id: 'color', name: 'color', label: 'Text Colour', value: 'black' },
            { type: 'text', id: 'textfontsize', name: 'textfontsize', label: 'Font Size', value: '14px' },
            { type: 'text', id: 'content', name: 'content', label: 'Content Text', value: 'Happy days are her again!<br> The skies above are<br> clear again. Let us sing<br> a song of cheer again,<br> happy days are here again!' },
            'BUTTON',
            { type: 'text', id: 'buttonText', name: 'buttonText', label: 'Button Text', value: 'SEE MORE.' },
            { type: 'color', id: 'buttonTextColor', name: 'buttonTextColor', label: 'Button Text Colour', value: '#F3ECEC' },
            { type: 'color', id: 'buttonBackColor', name: 'buttonBackColor', label: 'Button Background Colour', value: 'black' },
            { type: 'text', id: 'buttonfontsize', name: 'buttonfontsize', label: 'Button Font Size', value: '13px' },
            'FOREGROUND',
            { type: 'color', id: 'foregroundcolor', name: 'foregroundcolor', label: 'Foreground', value: 'black' }
        ],
    
    
        js_build: function(widget){
            var uniqueID = Date.now();
            var str = `
            
    //!-##${widget.widgetType}--START##
    // ${JSON.stringify(widget)}
    (function(){
    var settings = {
        textfontsize: '${widget.textfontsize}', // header font size  
        content: '${widget.content.replace('\'', '\\\'')}', // content txt
        bgcol: '${widget.bgcol}', // background colour 
        color: '${widget.color}', // text colour 
        buttonText : '${widget.buttonText.replace('\'', '\\\'')}', //button txt
        buttonTextColor: '${widget.buttonTextColor}', //button txt colour
        buttonBackColor: '${widget.buttonBackColor}', //button colour
        buttonfontsize: '${widget.buttonfontsize}', //button font size
        foregroundcolor: '${widget.foregroundcolor}' //for quotes colour/ border colour
    };
    var elid = 'wto-widget--quote_box--${uniqueID}';
    // Remove if exists - ensures no duplicates
    document.querySelectorAll('.wto-widget--quote_box').forEach(function(node){
    node.parentNode.removeChild(node);
    });
    var body = document.getElementsByTagName('body')[0];
    var el = document.createElement('div');
    body.insertAdjacentElement('afterBegin', el);
    var elhtml = '\ <div id="'+ elid +'" class="wto-widget--quote_box" style="z-index: 9999; background-color: '+ settings.bgcol +'; width: 330px; height: 250px; margin: 10px; padding: 15px; box-shadow: 3px 6px 3px 6px grey; position: fixed; bottom: 10px; right: 10px">\
    <svg id="wto_widget3_open_quote" style="position: fixed; bottom: 180px; right: 285px; width: 30px;  height: 22px; -ms-transform: skewY(-18deg); /* IE 9 */ transform: skewY(-18deg);  background-color: '+ settings.bgcol +'; z-index: 9999; color: '+ settings.foregroundcolor +';" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-quote-left fa-w-16 fa-2x">\
        <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" class="">\
        </path>\
    </svg>\
    <p id="content"  style="text-align: center; color:'+ settings.color +'; font-family: sans-serif; font-size: '+ settings.textfontsize +'; font-weight: bold; font-style: italic; width: 240px; height: 150px; -ms-transform: skewY(-18deg); /* IE 9 */ transform: skewY(-18deg);  border-top: 3px solid '+ settings.foregroundcolor +'; border-bottom: 3px solid '+ settings.foregroundcolor +'; margin: 2px; padding: 12px;  position: fixed; bottom: 68px; right: 80px">'+ settings.content +'</p>\
    <svg id="wto_widget3_close_quote" style=" position: fixed; bottom: 86px; right: 90px; width: 30px; height: 22px; -ms-transform: skewY(-18deg); /* IE 9 */ transform: skewY(-18deg); background-color: '+ settings.bgcol+'; z-index: 9999; color: '+ settings.foregroundcolor +';" saria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-quote-right fa-w-16 fa-2x">\
        <path fill="currentColor" d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" class="">\
        </path>\
    </svg>\
    <button id="wto_widget3_see_more" style="font-family: sans-serif; font-size: '+ settings.buttonfontsize+'; font-weight: bold; color: '+ settings.buttonTextColor +'; background-color: '+ settings. buttonBackColor +'; text-align: center; position: absolute; bottom: 15px; right: 25px; border-radius: 10px; height: 25px; width: 100px;">'+ settings.buttonText +'</button>\
    </div> \';
    el.outerHTML = elhtml;
        var h = document.getElementById(elid).offsetHeight;
        body.style.marginTop = h + 'px';
        
    })();
    //!-##${widget.widgetType}--END##`;
                    
                    return str;
                }
            },