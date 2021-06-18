'widget 20': {
    friendlyName: 'Widget 20',
    description: 'Also might be interested in pop up',
    fields: [
        'BACKGROUND COLOUR',
        { type: 'background-image', id: 'bgcol', name: 'bgcol', label: 'Background Colour', value: 'linear-gradient( 400deg, #ffffff,#ffffff,#ffffff, #ffffff, #008000, #15ff15)'},
        'BIG HEADER',
        { type: 'text', id: 'bigheadertxt', name: 'bigheadertxt', label: 'Big Header Text', value: 'Take a look at our most popular products before you go' },
        { type: 'color', id: 'bigheadercol', name: 'bigheadercol', label: 'Big Header Colour', value: '#000000' },
        { type: 'text', id: 'bigheaderfontsize', name: 'bigheaderfontsize', label: 'Big Header Font Size', value: '25px' },
        'SMALLER HEADER',
        { type: 'text', id: 'smlheadertxt', name: 'smlheadertxt', label: 'Smaller Header Text', value: 'You might also be interested in these' },
        { type: 'color', id: 'smlheadercol', name: 'smlheadercol', label: 'Smaller Header Colour', value: '#000000' },
        { type: 'text', id: 'smlheaderfontsize', name: 'smlheaderfontsize', label: 'Smaller Header Font Size', value: '20px' },
        'PRODUCT NAME',
        { type: 'text', id: 'pn1', name: 'pn1', label: 'Product Name 1', value: 'Product name' },
        { type: 'text', id: 'pn2', name: 'pn2', label: 'Product Name 2', value: 'Product name' },
        { type: 'text', id: 'pn3', name: 'pn3', label: 'Product Name 3', value: 'Product name' },
        { type: 'color', id: 'concol', name: 'concol', label: 'Product Name Colour', value: '#000000' },
        { type: 'text', id: 'confontsize', name: 'confontsize', label: 'Product Name Font Size', value: '15px' },
        'PRODUCT PRICE',
        { type: 'text', id: 'pp1', name: 'pp1', label: 'Product Price 1', value: '$20' },
        { type: 'text', id: 'pp2', name: 'pp2', label: 'Product Price 2', value: '$40' },
        { type: 'text', id: 'pp3', name: 'pp3', label: 'Product Price 3', value: '$80' }
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
    concol: '${widget.concol}', // content colour
    pn1: '${widget.pn1.replace('\'', '\\\'')}', // content txt
    pn2: '${widget.pn2.replace('\'', '\\\'')}', // content txt
    pn3: '${widget.pn1.replace('\'', '\\\'')}', // content txt
    pp1: '${widget.pp1.replace('\'', '\\\'')}', // content txt
    pp2: '${widget.pp2.replace('\'', '\\\'')}', // content txt
    pp3: '${widget.pp3.replace('\'', '\\\'')}', // content txt
    bgcol: '${widget.bgcol}' // background colour   
  };
  var elid = 'wto-widget--mitebinter--${uniqueID}';
  // Remove if exists - ensures no duplicates
  document.querySelectorAll('.wto-widget--mitebinter').forEach(function(node){
  node.parentNode.removeChild(node);
  });
  var css={add:function(c, id){if(c instanceof Array){c=c.join(' ')}var a=document.getElementsByTagName("head")[0],b=document.createElement('style');b.type="text/css";if(id){b.id=id;}if(b.styleSheet){b.styleSheet.cssText=c}else{b.appendChild(document.createTextNode(c))}a.appendChild(b)}, del:function(id){var el=document.getElementById(id); if(el){el.parentNode.removeChild(el)}}};
  css.add([
    ".wto-widget--mitebinter{ background-image: "+ settings.bgcol +"; margin: 5px; padding: 25px; position: fixed; top: 79px; right: 382px; height: 357px; width: 45%; border-radius: 41px; border: none; box-sizing: unset; z-index: 9999; }",
    ".wto_closebtn_not { font-size: 24px; line-height: 20px; cursor: pointer; transition: 0.3s; z-index: 9999; color: #ffffff; float: right; margin-top: -4px; margin-right: 9px; }",
    ".wto-smlheader { z-index: 999999; position: absolute; text-align: center; margin: 1px; margin-left: -4px; width: 672px; padding: 8px; font-size: "+ settings.smlheaderfontsize +"; font-family: Georgia; color: "+ settings.smlheadercol +"; border-radius: 6px; line-height: 1.1; letter-spacing: .5; box-sizing: unset; }",
    ".wto-bigheader { z-index: 999999; position: absolute; text-align: center; margin: 39px; margin-left: 0px; width: 674px; padding: 8px; font-size: "+ settings.bigheaderfontsize +"; font-weight: bold; font-family: Verdana; color: "+ settings.smlheadercol +"; border-radius: 6px; line-height: 1.7; letter-spacing: .5; box-sizing: unset; }",
    ".wto_product-image { display: flex; flex-wrap: nowrap; }",
    ".wto_product-image > div { position: relative; top: 153px; left: 92px; width: 163px; margin: 5px; padding: 9px; z-index: 9999; box-sizing: unset; }",
    ".wto_product-info { display: flex; flex-wrap: nowrap; }", 
    ".wto_product-info > div { position: relative; top: 128px; left: 128px; width: 165px; padding: 6px; margin: 5px; z-index: 9999; box-sizing: unset; }",
    "img { z-index: 9999; width: 95px; height: 95px; box-sizing: unset; }",
    "#wto-productname, #wto-productprice { text-align: left; margin-left: -32px; width: 94px; padding: 10px; box-sizing: unset; color: "+ settings.concol +"; font-size: "+ settings.confontsize +"; font-family: Georgia; line-height: 0.7; letter-spacing: 0; }",
    "#wto-productprice { font-weight: bold; }"
]);
  
var body = document.getElementsByTagName('body')[0];
var el = document.createElement('div');
body.insertAdjacentElement('afterBegin', el);
var elhtml = '\<div id="'+ elid +'" class="wto-widget--mitebinter">\
<span class="wto_closebtn_not">&times;</span>\
<div class="wto-smlheader">'+ settings.smlheadertxt +'</div>\
<div class="wto-bigheader">'+ settings.bigheadertxt +'</div>\
<div class="wto_product-image">\
    <div>\
        <img src="https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/hat.jpeg">\
    </div>\
    <div>\
        <img src="https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/pants.jpg">\
    </div>\
    <div>\
        <img src="https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/shoe.jpg">\
    </div>\
</div>\
<div class="wto_product-info">\
    <div id="wto-product"><p id="wto-productname">'+ settings.pn1 +'</p> <p id="wto-productprice">'+ settings.pp1 +'</p></div>\
    <div id="wto-product"><p id="wto-productname">'+ settings.pn2 +'</p> <p id="wto-productprice">'+ settings.pp2 +'</p></div>\
    <div id="wto-product"><p id="wto-productname">'+ settings.pn3 +'</p> <p id="wto-productprice">'+ settings.pp3 +'</p></div>\
    </div>\
</div>\
';
  el.outerHTML = elhtml;
  })();
  //!-##${widget.widgetType}--END##`;
                
                return str;
            }
        },