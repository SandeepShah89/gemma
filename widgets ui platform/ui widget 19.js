'widget 19': {
    friendlyName: 'Widget 19',
    description: 'Most popular items in a category',
    fields: [
        'BACKGROUND COLOUR',
        { type: 'color', id: 'bgcol', name: 'bgcol', label: 'Background Colour', value: '#000000'},
        'HEADER',
        { type: 'text', id: 'headertxt', name: 'headertxt', label: 'Header Text', value: 'Most popular products of this category' },
        { type: 'color', id: 'headercol', name: 'headercol', label: 'Header Colour', value: '#000000' },
        { type: 'text', id: 'headerfontsize', name: 'headerfontsize', label: 'Header Font Size', value: '32px' },
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
    headerfontsize: '${widget.headerfontsize}', // header font size  
    headertxt: '${widget.headertxt.replace('\'', '\\\'')}', // header txt
    headercol: '${widget.headercol}', // header colour 
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
  var elid = 'wto-widget--mostpopcat--${uniqueID}';
  // Remove if exists - ensures no duplicates
  document.querySelectorAll('.wto-widget--mostpopcat').forEach(function(node){
  node.parentNode.removeChild(node);
  });
  var css={add:function(c, id){if(c instanceof Array){c=c.join(' ')}var a=document.getElementsByTagName("head")[0],b=document.createElement('style');b.type="text/css";if(id){b.id=id;}if(b.styleSheet){b.styleSheet.cssText=c}else{b.appendChild(document.createTextNode(c))}a.appendChild(b)}, del:function(id){var el=document.getElementById(id); if(el){el.parentNode.removeChild(el)}}};
  css.add([
    ".wto-widget--mostpopcat { background-color: "+ settings.bgcol +"; margin: 5px; padding: 25px; position: fixed; top: 79px; left: 275px; height: 372px; width: 63%; border-radius: 41px; border: none; box-sizing: unset; z-index: 9999; }",
    "#backimg { margin: 5px; padding: 25px; position: fixed; top: 79px; left: 275px; height: 372px; width: 63%; border-radius: 41px; border: none; box-sizing: unset; z-index: 9999; }",
    ".wto-header { z-index: 9999; position: absolute; text-align: center; margin: 52px; margin-left: 149px; width: 672px; padding: 8px; font-size: "+ settings.headerfontsize +"; font-weight: bold; font-family: Georgia; color: "+ settings.headercol +"; line-height: 1.1; letter-spacing: .5; box-sizing: unset; }",
    ".wto_social_icons { display: flex; flex-wrap: nowrap;  }",
    ".wto_social_icons > div { position: relative; top: 156px; left: 99px; width: 163px; margin: 5px; z-index: 9999; box-sizing: unset; }",
    "img { z-index: 9999; width: 95px; height: 95px; border: 3px solid #000000; padding: 12px; border-radius: 6px; box-sizing: unset; }",
    "#wto-product { text-align: left; margin-left: -32px; width: 94px; padding: 10px; box-sizing: unset; color: "+ settings.concol +"; font-size: "+ settings.confontsize +"; font-family: Georgia; line-height: 0.7; letter-spacing: 0; }",
    "#wto-productprice { font-weight: bold; }"
]);
  
var body = document.getElementsByTagName('body')[0];
var el = document.createElement('div');
body.insertAdjacentElement('afterBegin', el);
var elhtml = '\<div id="'+ elid +'" class="wto-widget--mostpopcat">\
<img id="backimg" src="https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/backimg.jpg">\
<div class="wto-header">'+ settings.headertxt +'</div>\
<div class="wto_social_icons">\
    <div>\
        <img src="https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/ring.jpg">\
    </div>\
    <div id="wto-product"><p id="wto-productname">'+ settings.pn1 +'</p> <p id="wto-productprice">'+ settings.pp1 +'</p></div>\
    <div>\
        <img src="https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/necklace.jpg">\
    </div>\
    <div id="wto-product"><p id="wto-productname">'+ settings.pn2 +'</p> <p id="wto-productprice">'+ settings.pp2 +'</p></div>\
    <div>\
        <img src="https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/braclet.jpg">\
    </div>\
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