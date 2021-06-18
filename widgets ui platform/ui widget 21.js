'widget 21': {
    friendlyName: 'Widget 21',
    description: 'Full page push not promo',
    fields: [
        'BACKGROUND COLOUR',
        { type: 'background-image', id: 'bgcol', name: 'bgcol', label: 'Background Colour', value: 'linear-gradient(-45deg, #6863f3, #1703fc, #6863f3, #1703fc, #6863f3, #1703fc)'},
        'BIG HEADER',
        { type: 'text', id: 'bigheadertxt', name: 'bigheadertxt', label: 'Big Header Text', value: 'GET 10% OFF YOUR FIRST PURCHASE.' },
        { type: 'color', id: 'bigheadercol', name: 'bigheadercol', label: 'Big Header Colour', value: '#ffffff' },
        { type: 'text', id: 'bigheaderfontsize', name: 'bigheaderfontsize', label: 'Big Header Font Size', value: '40px' },
        'SMALLER HEADER',
        { type: 'text', id: 'smlheadertxt', name: 'smlheadertxt', label: 'Smaller Header Text', value: 'Why, hello there! :)' },
        { type: 'color', id: 'smlheadercol', name: 'smlheadercol', label: 'Smaller Header Colour', value: '#ffffff' },
        { type: 'text', id: 'smlheaderfontsize', name: 'smlheaderfontsize', label: 'Smaller Header Font Size', value: '18px' },
        'CONTENT',
        { type: 'text', id: 'contxt', name: 'contxt', label: 'Content Text', value: 'Plus, be the first to know about the sales, new arrivals and more. ' },
        { type: 'color', id: 'concol', name: 'concol', label: 'Content Colour', value: '#ffffff' },
        { type: 'text', id: 'confontsize', name: 'confontsize', label: 'Content Font Size', value: '16px' },
        'BUTTON',
        { type: 'text', id: 'btntxt', name: 'btntxt', label: 'Button Text', value: 'GET MY 10% OFF' },
        { type: 'color', id: 'btntxtcol', name: 'btntxtcol', label: 'Button Text Colour', value: '#3c2bfa' },
        { type: 'color', id: 'btnbgcol', name: 'btnbgcol', label: 'Button Background Colour', value: '#ffffff' },
        { type: 'text', id: 'btnfontsize', name: 'btnfontsize', label: 'Button Font Size', value: '14px' },
        'INPUT BACKGROUND COLOUR',
        { type: 'color', id: 'inputcol', name: 'inputcol', label: 'Input Background Colour', value: '#120da1' }
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
    bgcol: '${widget.bgcol}', // background colour 
    inputcol: '${widget.inputcol}'  //input bg col
  };
  var elid = 'wto-widget--fppromopushnot--${uniqueID}';
  // Remove if exists - ensures no duplicates
  document.querySelectorAll('.wto-widget--fppromopushnot').forEach(function(node){
  node.parentNode.removeChild(node);
  });
  var css={add:function(c, id){if(c instanceof Array){c=c.join(' ')}var a=document.getElementsByTagName("head")[0],b=document.createElement('style');b.type="text/css";if(id){b.id=id;}if(b.styleSheet){b.styleSheet.cssText=c}else{b.appendChild(document.createTextNode(c))}a.appendChild(b)}, del:function(id){var el=document.getElementById(id); if(el){el.parentNode.removeChild(el)}}};
  css.add([
    ".wto-widget--fppromopushnot { position: fixed; top: 12px; left: 318px; margin: 5px; z-index: 9999; box-sizing: unset; padding: 10px; border-radius: 9px; width: 898px; height: 501px; background-image: "+ settings.bgcol +"; }",
    ".wto_closebtn_not { font-size: 24px; line-height: 20px; cursor: pointer; transition: 0.3s; z-index: 9999; color: #ffffff; float: right; margin-top: 2px; margin-right: 10px; }",
    ".wto-smlheader { position: absolute; text-align: center; margin: 0px; top: 59px; font-size: "+ settings.smlheaderfontsize +"; font-weight: bold; font-family: Georgia; width: 424px; margin-left: 230px; z-index: 9999; line-height: 1.1; letter-spacing: 0; color: "+ settings.smlheadercol +"; box-sizing: unset; }",
    ".wto-bigheader { position: absolute; text-align: center; margin: 0px; top: 101px; font-size: "+ settings.bigheaderfontsize +"; font-weight: bold; font-family: Georgia; margin-left: 128px; width: 651px; z-index: 9999; line-height: 1.9; letter-spacing: 0; color: "+ settings.bigheadercol +"; box-sizing: unset; }",
    ".wto-content { z-index: 9999; top: 264px; margin-left: 317px; width: 300px; position: absolute; text-align: center; font-size: "+ settings.confontsize +"; font-family: Georgia; color: "+ settings.concol +"; line-height: 2; letter-spacing: 0; box-sizing: unset; }",
    "#wto-enteremail { z-index: 9999; bottom: 113px; padding: 2px; margin: 1px; left: 266px; width: 415px; height: 47px; border: none; border-radius: 8px; position: absolute; text-align: center; font-size: 17px; font-family: Georgia; background-color: "+ settings.inputcol +"; line-height: 1.6; letter-spacing: 0; box-sizing: unset; }",
    "#wto-promobtn { z-index: 9999; bottom: 50px; left: 270px; padding: 3px; width: 239px; height: 41px; border: none; border-radius: 8px; position: absolute; text-align: center; font-size: 14px; font-family: Georgia; color: "+ settings.btntxtcol +"; background-color: "+ settings.btnbgcol +"; line-height: 1.6; letter-spacing: 0; box-sizing: unset; }"
]);
  
var body = document.getElementsByTagName('body')[0];
var el = document.createElement('div');
body.insertAdjacentElement('afterBegin', el);
var elhtml = '\<div id="'+ elid +'" class="wto-widget--fppromopushnot">\
<span class="wto_closebtn_not">&times;</span>\
<div class="wto-smlheader">'+ settings.smlheadertxt +'</div>\
<div class="wto-bigheader">'+ settings.bigheadertxt +'</div>\
<div class="wto-content">'+ settings.contxt +'</div>\
<input type="email" id="wto-enteremail" placeholder="Your Email Address">\
<button type="button" id="wto-promobtn">'+ settings.btntxt +'</button>\
</div>\
';
  el.outerHTML = elhtml;
  })();
  //!-##${widget.widgetType}--END##`;
                
                return str;
            }
        },