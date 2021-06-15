'widget 18': {
    friendlyName: 'Widget 18',
    description: 'After purchase promo',
    fields: [
        'BACKGROUND COLOUR',
        { type: 'background-image', id: 'bgcol', name: 'bgcol', label: 'Background Colour', value: 'linear-gradient(-45deg, #120da1, #1703fc, #120da1, #1703fc, #120da1, #1703fc)'},
        'BIG HEADER',
        { type: 'text', id: 'bigheadertxt', name: 'bigheadertxt', label: 'Big Header Text', value: 'Want 20% off your next order?' },
        { type: 'color', id: 'bigheadercol', name: 'bigheadercol', label: 'Big Header Colour', value: '#ffffff' },
        { type: 'text', id: 'bigheaderfontsize', name: 'bigheaderfontsize', label: 'Big Header Font Size', value: '30px' },
        'SMALLER HEADER',
        { type: 'text', id: 'smlheadertxt', name: 'smlheadertxt', label: 'Smaller Header Text', value: 'Thank you for your purchase! ' },
        { type: 'color', id: 'smlheadercol', name: 'smlheadercol', label: 'Smaller Header Colour', value: '#ffffff' },
        { type: 'text', id: 'smlheaderfontsize', name: 'smlheaderfontsize', label: 'Smaller Header Font Size', value: '15px' },
        'CONTENT',
        { type: 'text', id: 'contxt', name: 'contxt', label: 'Content Text', value: 'Tell us about your purchase experience and we will give you a 20% discount code immediately.' },
        { type: 'color', id: 'concol', name: 'concol', label: 'Content Colour', value: '#ffffff' },
        { type: 'text', id: 'confontsize', name: 'confontsize', label: 'Content Font Size', value: '13px' },
        'BUTTON',
        { type: 'text', id: 'btntxt', name: 'btntxt', label: 'Button Text', value: 'YES, I WANT THE DISCOUNT!' },
        { type: 'color', id: 'btntxtcol', name: 'btntxtcol', label: 'Button Text Colour', value: '#120da1' },
        { type: 'color', id: 'btnbgcol', name: 'btnbgcol', label: 'Button Background Colour', value: '#ffffff' },
        { type: 'text', id: 'btnfontsize', name: 'btnfontsize', label: 'Button Font Size', value: '12px' }
    ],
  
    js_build: function(widget){
        var uniqueID = Date.now();
        var str = `
        
  //!-##${widget.widgetType}--START##
  // ${JSON.stringify(widget)}
  (function(){
  var settings = {
    bigheaderfontsize: '${widget.bigheaderfontsize}', // header font size  
    bigheadertxt: '${widget.bigheadertxt.replace('\'', '\\\'')}', // header txt
    bigheadercol: '${widget.bigheadercol}', // header colour 
    smlheaderfontsize: '${widget.smlheaderfontsize}', // header font size  
    smlheadertxt: '${widget.smlheadertxt.replace('\'', '\\\'')}', // header txt
    smlheadercol: '${widget.smlheadercol}', // header colour 
    confontsize: '${widget.confontsize}', //  content font size  
    contxt: '${widget.contxt.replace('\'', '\\\'')}', // content txt
    concol: '${widget.concol}', // content colour
    btntxt : '${widget.btntxt.replace('\'', '\\\'')}', // button txt
    btntxtcol: '${widget.btntxtcol}', // button txt colour
    btnbgcol: '${widget.btnbgcol}', // button colour
    btnfontsize: '${widget.btnfontsize}', // button font size
    bgcol: '${widget.bgcol}' // background colour   
  };
  var elid = 'wto-widget--afpurchasepromo--${uniqueID}';
  // Remove if exists - ensures no duplicates
  document.querySelectorAll('.wto-widget--afpurchasepromo').forEach(function(node){
  node.parentNode.removeChild(node);
  });
  var css={add:function(c, id){if(c instanceof Array){c=c.join(' ')}var a=document.getElementsByTagName("head")[0],b=document.createElement('style');b.type="text/css";if(id){b.id=id;}if(b.styleSheet){b.styleSheet.cssText=c}else{b.appendChild(document.createTextNode(c))}a.appendChild(b)}, del:function(id){var el=document.getElementById(id); if(el){el.parentNode.removeChild(el)}}};
  css.add([
    ".wto-widget--afpurchasepromo { position: fixed; top: 57px; left: 550px; margin: 5px; z-index: 9999; box-sizing: unset; padding: 10px; border-radius: 21px; width: 400px; height: 450px; background-image: "+ settings.bgcol +"; }",
    ".wto_closebtn_not { font-size: 24px; line-height: 20px; cursor: pointer; transition: 0.3s; z-index: 9999; color: #ffffff; float: right; margin-top: 2px; margin-right: 10px; }",
    "wto_closebtn_not:hover { color: #45474a; }",
    ".wto-smlheader { position: absolute; text-align: center; margin: 0px; top: 59px; font-size: "+ settings.smlheaderfontsize +"; font-weight: bold; font-family: Georgia; width: 400px; margin-left: 2px; z-index: 9999; line-height: 1.1; letter-spacing: 0; color: "+ settings.smlheadercol +"; box-sizing: unset; }",
    ".wto-bigheader { position: absolute; text-align: center; margin: 0px; top: 120px; font-size: "+ settings.bigheaderfontsize +"; font-weight: bold; font-family: Georgia; margin-left: 37px; width: 331px; z-index: 9999; line-height: 1.9; letter-spacing: 0; color: "+ settings.bigheadercol +"; box-sizing: unset; }",
    ".wto-content { z-index: 9999; top: 264px; margin-left: 75px; width: 245px; position: absolute; text-align: center; font-size: "+ settings.confontsize +"; font-family: Georgia; color: "+ settings.concol +"; line-height: 1.8; letter-spacing: 0; box-sizing: unset; }",
    "#wto-promocodebtn { z-index: 9999; bottom: 50px; margin-left: 65px; width: 270px; height: 42px; border: none; border-radius: 8px; position: absolute; text-align: center; font-size: "+ settings.btnfontsize +"; font-family: Georgia; color: "+ settings.btntxtcol +"; background-color: "+ settings.btnbgcol +"; line-height: 1.6; letter-spacing: 0; box-sizing: unset; }"
]);
  
var body = document.getElementsByTagName('body')[0];
var el = document.createElement('div');
body.insertAdjacentElement('afterBegin', el);
var elhtml = '\<div id="'+ elid +'" class="wto-widget--afpurchasepromo">\
<span class="wto_closebtn_not">&times;</span>\
<div class="wto-smlheader">'+ settings.smlheadertxt +'</div>\
<div class="wto-bigheader">'+ settings.bigheadertxt +'</div>\
<div class="wto-content">'+ settings.contxt +'</div>\
<button type="button" id="wto-promocodebtn">'+ settings.btntxt +'</button>\
</div>\
';
  el.outerHTML = elhtml;
  })();
  //!-##${widget.widgetType}--END##`;
                
                return str;
            }
        },