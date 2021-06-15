'widget 8': {
    friendlyName: 'Widget 8',
    description: 'Promo card 1',
    fields: [
        'BACKGROUND COLOUR',
        { type: 'color', id: 'bgcol', name: 'bgcol', label: 'Background Colour', value: '#2196F3' },
        'HEADER',
        { type: 'text', id: 'headertxt', name: 'headertxt', label: 'Header Text', value: 'Get ready for your return to Silicon Vally.' },
        { type: 'color', id: 'headercol', name: 'headercol', label: 'Header Colour', value: '#FFFFFF' },
        { type: 'text', id: 'headerfontsize', name: 'headerfontsize', label: 'Header Font Size', value: '27px' },
        'CONTENT',
        { type: 'color', id: 'txtcol', name: 'txtcol', label: 'Text Colour', value: '#fff' },
        { type: 'text', id: 'txtfontsize', name: 'txtfontsize', label: 'Content Font Size', value: '20px' },
        { type: 'text', id: 'content', name: 'content', label: 'Content Text', value: 'Book a tour at one of our bay area locations anf recieve 50% off your first two months' },
        'BUTTON',
        { type: 'text', id: 'btntxt', name: 'btntxt', label: 'Button Text', value: 'Book a tour' },
        { type: 'color', id: 'btntxtcol', name: 'btntxtcol', label: 'Button Text Colour', value: '#2196F3' },
        { type: 'color', id: 'btnbgcol', name: 'btnbgcol', label: 'Button Background Colour', value: '#FFFFFF' },
        { type: 'text', id: 'btnfontsize', name: 'btnfontsize', label: 'Button Font Size', value: '20px' }
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
    txtfontsize: '${widget.txtfontsize}', // content font size  
    content: '${widget.content.replace('\'', '\\\'')}', // content txt
    txtcol: '${widget.txtcol}', // text colour 
    btntxt : '${widget.btntxt.replace('\'', '\\\'')}', // button txt
    btntxtcol: '${widget.btntxtcol}', // button txt colour
    btnbgcol: '${widget.btnbgcol}', // button colour
    btnfontsize: '${widget.btnfontsize}', // button font size
    bgcol: '${widget.bgcol}' // background colour
};
var elid = 'wto-widget--grid-container_promo--${uniqueID}';
// Remove if exists - ensures no duplicates
document.querySelectorAll('.wto-widget--grid-container_promo').forEach(function(node){
node.parentNode.removeChild(node);
});
var css={add:function(c, id){if(c instanceof Array){c=c.join(' ')}var a=document.getElementsByTagName("head")[0],b=document.createElement('style');b.type="text/css";if(id){b.id=id;}if(b.styleSheet){b.styleSheet.cssText=c}else{b.appendChild(document.createTextNode(c))}a.appendChild(b)}, del:function(id){var el=document.getElementById(id); if(el){el.parentNode.removeChild(el)}}};
css.add([
    ".item1 { grid-area: close; }",
    ".item2 { grid-area: header; }",
    ".item3 { grid-area: content; }",
    ".item4 { grid-area: button; }",
    ".item5 { grid-area: image; }",
    ".wto-widget-grid-container_promo { display: grid; grid-template-areas: 'image image header header header close' 'image image content content content content' 'image image content content content content' 'image image button button button button'; grid-gap: 14px; background-color: '+ settings.bgcol +'; padding: 5px; width: 43%; border-radius: 5px; }",
    ".wto-widget-grid-container_promo > div { text-align: left; padding: 5px 8px; }",
    ".item3{ margin-top: -30px; }",
    ".wto_closebtn_not { color: #ffffff; font-weight: bold; font-size: 38px; line-height: 20px; cursor: pointer; transition: 0.3s; }",
    ".closebtn_not:hover { color: #45474a; }",
    "img { height: 170px; width: 170px; border-radius: 4px; }",
    "p { font-size: '+ settings.txtfontsize +'; font-family: Verdana; color: '+ settings.txtcol +'; }",
    "h1 { font-size: '+ settings.headerfontsize +'; font-family: Verdana; color: '+ settings.headercol +';}",
    "button { width: 430px; height: 50px; border: none; border-radius: 4px; background-color: '+ settings.btnbgcol +'; color: '+ settings.btntxtcol +'; font-family: Verdana; font-size: '+ settings.btnfontsize +'; }"
]);

var body = document.getElementsByTagName('body')[0];
var el = document.createElement('div');
body.insertAdjacentElement('afterBegin', el);
var elhtml = '\<div id="'+ elid +'" class="wto-widget-grid-container_promo">\
<div class="wto_grid-item item1">\
<span class="wto_closebtn_not">×</span></div>\
<div class="wto_grid-item item2">\
<h1>'+ settings.headertxt +'</h1>\
</div>\
<div class="wto_grid-item item3">\
<p>'+ settings.content +'</p>\
</div>\
<div class="wto_grid-item item4">\
<button>'+ settings.btntxt +'</button>\
</div>\
<div class="wto_grid-item item5">\
<img src"https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/wto_promo_icon.jpg">\
</div>\
</div>\
';
el.outerHTML = elhtml;
})();
//!-##${widget.widgetType}--END##`;
                
                return str;
            }
        },