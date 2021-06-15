'widget 12': {
    friendlyName: 'Widget 12',
    description: 'Footer promo',
    fields: [
        'BACKGROUND COLOUR',
        { type: 'color', id: 'bgcol', name: 'bgcol', label: 'Background Colour', value: '#FFFFFF'},
        'HEADER',
        { type: 'text', id: 'headertxt', name: 'headertxt', label: 'Header Text', value: 'Dont forget your 10% OFF! ' },
        { type: 'color', id: 'headercol', name: 'headercol', label: 'Header Colour', value: '#000000' },
        { type: 'text', id: 'headerfontsize', name: 'headerfontsize', label: 'Header Font Size', value: '21px' },
        'CONTENT',
        { type: 'text', id: 'contxt', name: 'contxt', label: 'Content Text', value: 'Use Code:     ' },
        { type: 'color', id: 'concol', name: 'concol', label: 'Content Colour', value: '#000000' },
        { type: 'text', id: 'confontsize', name: 'confontsize', label: 'Content Font Size', value: '18px' },
        'PROMO CODE',
        { type: 'text', id: 'promocodetxt', name: 'promocodetxt', label: 'Promo Code', value: ' SHOP10 ' },
        { type: 'color', id: 'promocodecol', name: 'promocodecol', label: 'Content Colour', value: '#000000' },
        { type: 'text', id: 'promocodefontsize', name: 'promocodefontsize', label: 'Content Font Size', value: '14px' },
        { type: 'color', id: 'promocodeborcol', name: 'promocodeborcol', label: 'Content Colour', value: '#dad1d1' }
    ],
  
    js_build: function(widget){
        var uniqueID = Date.now();
        var str = `
        
  //!-##${widget.widgetType}--START##
  // ${JSON.stringify(widget)}
  (function(){
  var settings = {
    headerfontsize: '${widget.headerfontsize}', // header font size  
    headertxt: '${widget.headertxt.replace('\'', '\\\'')}', // header txt
    headercol: '${widget.headercol}', // header colour 
    confontsize: '${widget.confontsize}', //  content font size  
    contxt: '${widget.contxt.replace('\'', '\\\'')}', // content txt
    concol: '${widget.concol}', // content colour 
    promocodefontsize: '${widget.promocodefontsize}', //  promo code font size  
    promocodetxt: '${widget.promocodetxt.replace('\'', '\\\'')}', // promo code txt
    promocodecol: '${widget.promocodecol}', // promo code colour 
    promocodeborcol: '${widget.promocodeborcol}', // promo code border colour 
    bgcol: '${widget.bgcol}' // background colour   
  };
  var elid = 'wto-widget--footerpromo--${uniqueID}';
  // Remove if exists - ensures no duplicates
  document.querySelectorAll('.wto-widget--footerpromo').forEach(function(node){
  node.parentNode.removeChild(node);
  });
  var css={add:function(c, id){if(c instanceof Array){c=c.join(' ')}var a=document.getElementsByTagName("head")[0],b=document.createElement('style');b.type="text/css";if(id){b.id=id;}if(b.styleSheet){b.styleSheet.cssText=c}else{b.appendChild(document.createTextNode(c))}a.appendChild(b)}, del:function(id){var el=document.getElementById(id); if(el){el.parentNode.removeChild(el)}}};
  css.add([
    ".wto-widget--footerpromo { z-index: 9999; position: fixed; left: 187px; bottom: 10px; width: 75%; height: 5%; background-color: "+ settings.bgcol +"; box-sizing: unset; margin: 0; padding: 9px; border-radius: 3px; }",
    "h1 { z-index: 9999; font-size: "+ settings.headerfontsize +"; text-align: left; color: "+ settings.headercol +"; position: inherit; margin-top: 2px; margin-left: 164px; font-weight: bold; font-family: Georgia; line-height: 26px; letter-spacing: 0.5px; }",
    "#wto_content { z-index: 9999; font-size: "+ settings.confontsize +"; text-align: left; color: "+ settings.concol +"; position: inherit; margin-top: 2px; margin-left: 536px; font-family: Georgia; line-height: 26px; letter-spacing: 0.5px; }",
    "#wto_code_used { z-index: 9999; font-size: "+ settings.promocodefontsize +"; text-align: center; color: "+ settings.promocodecol +"; position: inherit; margin-top: -3px; margin-left: 730px; border: 1px solid "+ settings.promocodeborcol +"; padding: 6px; width: 79px; font-family: sans-serif; line-height: 26px; letter-spacing: 0.5px; }",
    ".wto_closebtn_not { color: #7d7272; font-size: 25px; line-height: 20px; cursor: pointer; transition: 0.3s; z-index: 9999; float: right; margin-right: 31px; margin-top: 4px; }",
    ".closebtn_not:hover { color: #45474a; }"
]);
  
  var body = document.getElementsByTagName('body')[0];
  var el = document.createElement('div');
  body.insertAdjacentElement('afterBegin', el);
  var elhtml = '\<div id="'+ elid +'" class="wto-widget--footerpromo">\
  <span class="wto_closebtn_not">×</span>\
  <h1>'+ settings.headertxt +'</h1>\
  <p id="wto_content">'+ settings.contxt +'</p>\
  <p id="wto_code_used">'+ settings.promocodetxt +'</p>\
  </div>\
  ';
  el.outerHTML = elhtml;

  })();
  //!-##${widget.widgetType}--END##`;
                
                return str;
            }
        },