'widget 1': {
    friendlyName: 'Widget 1',
    description: 'A small pop up box which gives user option to sign up for notifications',
    fields: [
        // { type: 'onpageposition', id: 'text', name: 'text', label: 'text' }, // placeholder so i know the markup.
        'BACKGROUND COLOUR',
        { type: 'color', id: 'bgcol', name: 'bgcol', label: 'Background Colour', value: '#F3ECEC' },
        'HEADER',
        { type: 'text', id: 'header', name: 'header', label: 'Header Text', value: 'Dont miss out on our new drops and promotions! Turn on notification:'},
        { type: 'color', id: 'headercolor', name: 'headercolor', label: 'Header Text Colour', value: '#000000' },
        { type: 'text', id: 'headerfontsize', name: 'headerfontsize', label: ' Header Font Size', value: '15px' },
        'CONTENT',
        { type: 'color', id: 'color', name: 'color', label: 'Text Colour', value: '#000000' },
        { type: 'text', id: 'textfontsize', name: 'textfontsize', label: 'Font Size', value: '15px' },
        { type: 'text', id: 'content', name: 'content', label: 'Content Text', value: 'To turn on notification on:<br> 1. <strong>Click on the icon </strong>like shown in the example.<br> 2.<strong> Allow</strong> notification.' },
        'BUTTON',
        { type: 'text', id: 'buttonText', name: 'buttonText', label: 'Button Text', value: 'OK, GOT IT.' },
        { type: 'color', id: 'buttonTextColor', name: 'buttonTextColor', label: 'Button Text Colour', value: '#F3ECEC' },
        { type: 'color', id: 'buttonBackColor', name: 'buttonBackColor', label: 'Button Background Colour', value: '#EE1B2E' },
        { type: 'text', id: 'buttonfontsize', name: 'buttonfontsize', label: 'Button Font Size', value: '13px' }
    ],


    js_build: function(widget){
        var uniqueID = Date.now();
        var str = `
        
//!-##${widget.widgetType}--START##
// ${JSON.stringify(widget)}
(function(){
var settings = {
    header: '${widget.header.replace('\'', '\\\'')}', // text in header
    headerfontsize: '${widget.headerfontsize}', // header font size 
    headercolor: '${widget.headercolor}', // header colour 
    content: '${widget.content.replace('\'', '\\\'')}', // content txt
    bgcol: '${widget.bgcol}', // background colour 
    color: '${widget.color}', // text colour 
    textfontsize: '${widget.textfontsize}', // content font size 
    buttonText : '${widget.buttonText.replace('\'', '\\\'')}', //button txt
    buttonTextColor: '${widget.buttonTextColor}', //button txt colour
    buttonBackColor: '${widget.buttonBackColor}', //button colour
    buttonfontsize: '${widget.buttonfontsize}' //button font size
};
var elid = 'wto-widget--notification_box--${uniqueID}';
// Remove if exists - ensures no duplicates
document.querySelectorAll('.wto-widget--notification_box').forEach(function(node){
node.parentNode.removeChild(node);
});
var body = document.getElementsByTagName('body')[0];
var el = document.createElement('div');
body.insertAdjacentElement('afterBegin', el);
var elhtml = '\ <div  id="'+ elid +'" class="wto-widget--notification_box" style="z-index: 9999; line-height:2.0em; position: fixed; top: 0; left: 0; background: '+ settings.bgcol +'; width: 286px; margin: 15px;  box-shadow: 3px 6px 3px 6px grey;"> \
<div id="headerimg"> \
   <header> <img src="https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/headerimgv1.png"> </header> \
</div> \
<div style="padding: 10px; margin:0;"> \
   <header style="line-height:2.0em; text-align: left; background: '+ settings.bgcol +'; color: '+ settings.headercolor +'; font-family: sans-serif; font-size: '+ settings.headerfontsize +'; font-weight: bold;">'+ settings.header +'</header> \
   <p style="line-height:2.0em; font-family: sans-serif; font-size: '+ settings.textfontsize +'; text-align: left; color: '+ settings.color +'; background-color: '+ settings.bgcol +'; " >'+ settings.content +'</p> \
  <p style="line-height:2.0em; text-align: right; padding: 0px; margin:0;"> <button id="not"; style="font-family: sans-serif; font-size: '+ settings.buttonfontsize +'; font-weight: bold; color: '+ settings.buttonTextColor +'; background-color:'+ settings.buttonBackColor +'; text-align: center; border-radius: 2px; height: 45px; width: 110px;"> \
   '+ settings.buttonText +'</button></p> \
</div> \
</div>\';
el.outerHTML = elhtml;
document.getElementById("not").onclick = function(){
    var elmToRemove = this.parentNode.parentNode;
    elmToRemove.parentNode.removeChild(elmToRemove);
        return false;
        };  
})();
//!-##${widget.widgetType}--END##`;
                
                return str;
            }
        },