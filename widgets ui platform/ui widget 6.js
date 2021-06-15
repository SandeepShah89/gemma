'widget 6': {
    friendlyName: 'Widget 6',
    description: 'Social 1 - Like us on ? pop up',
    fields: [
        'BACKGROUND COLOUR',
        { type: 'color', id: 'bgcol', name: 'bgcol', label: 'Background Colour', value: '#FFFFFF' },
        'HEADER',
        { type: 'text', id: 'headertxt', name: 'headertxt', label: 'Header Text', value: 'LIKE US<br> ON FACEBOOK' },
        { type: 'color', id: 'headercol', name: 'headercol', label: 'Header Colour', value: '#000000' },
        { type: 'text', id: 'headerfontsize', name: 'headerfontsize', label: 'Header Font Size', value: '26px' },
        'CONTENT',
        { type: 'color', id: 'txtcol', name: 'txtcol', label: 'Text Colour', value: '#363130' },
        { type: 'text', id: 'txtfontsize', name: 'txtfontsize', label: 'Content Font Size', value: '16px' },
        { type: 'text', id: 'content', name: 'content', label: 'Content Text', value: 'Follow us to get updates<br> about our events, seasonal<br> sales and more.' },
        'BUTTON',
        { type: 'text', id: 'btntxt', name: 'btntxt', label: 'Button Text', value: 'LIKE' },
        { type: 'color', id: 'btntxtcol', name: 'btntxtcol', label: 'Button Text Colour', value: '#FFFFFF' },
        { type: 'color', id: 'btnbgcol', name: 'btnbgcol', label: 'Button Background Colour', value: '#008DD5' },
        { type: 'text', id: 'btnfontsize', name: 'btnfontsize', label: 'Button Font Size', value: '15px' }
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
var elid = 'wto-widget--social_notification_1--${uniqueID}';
// Remove if exists - ensures no duplicates
document.querySelectorAll('.wto-widget--social_notification_1').forEach(function(node){
node.parentNode.removeChild(node);
});
var body = document.getElementsByTagName('body')[0];
var el = document.createElement('div');
body.insertAdjacentElement('afterBegin', el);
var elhtml = '\ <div id="'+ elid +'" class="wto-widget--social_notification_1" style="box-sizing: unset; z-index: 9999; margin: 5px; padding: 5px; position: fixed; bottom: 7px; left: 18px; height: 377px; width: 276px;">\
<img id="bg" src="https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/marble.jpg" style="margin: 5px; padding: 5px; position: fixed; bottom: -4px; left: 5px; height: 400px; width: 305px; border-radius: 3px;">\
<span class="wto_closebtn_not_social1" style="margin-left: 15px; color: #757980; font-weight: bold; position: fixed; bottom: 361px; left: 255px; font-size: 41px; line-height: 20px; cursor: pointer; transition: 0.3s; z-index: 9999;">×</span>\
<div class="wto_container" style="box-sizing: unset; position: absolute; height: 377px; width: 278px; background-color: '+ settings.bgcol +'; border-radius: 28px;">\
<div class="wto_fb_like_icon">\
<img id="svgbg" src="https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/svgbg.jpg" style="position: inherit; height: 165px; width: 278px;  background-color: #000000;  background-position: center;  background-repeat: no-repeat;  background-size: cover; border-top-left-radius: 28px; border-top-right-radius: 28px;">\
<img id="wto_fb_thumbup" src="https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/thumbs-up-facebook-logo-svgrepo-com__1_.png" style="z-index: 9999; left: 122px; bottom: 265px; position: fixed; width: 90px; height: 90px;">\
</div>\
    <div class="wto_social_content"  style="box-sizing: unset; bottom: 67px; position: inherit; width: 278px; height: 150px; text-align: center; line-height: 1.1;">\
        <h1 style="font-size: '+ settings.headerfontsize +'; font-weight: bold; font-family: sans-serif; color: '+ settings.headercol +';">'+ settings.headertxt +'</h1>\
        <p style="font-size: '+ settings.txtfontsize +'; font-family: Verdana; color: '+ settings.txtcol +';">'+ settings.content +'</p>\
    </div>\
    <div class="wto_lower_btn" style="box-sizing: unset; z-index: 9999; position: absolute; height: 60px; width: 278px; background-color: #D6E7FD; bottom: -2px; border-bottom-left-radius: 28px; border-bottom-right-radius: 28px;">\
        <button id="wto_likebtn_social" style="box-sizing: unset; background-color: '+ settings.btnbgcol +'; color: '+ settings.btntxtcol +'; border-radius: 10px; font-size: '+ settings.btnfontsize +'; font-weight: bold; border: none; width: 83px; height: 34px; position: relative; bottom: -13px; left: 96px;">'+ settings.btntxt +'</button>\
    </div>\
</div>\
</div>\';
el.outerHTML = elhtml;

})();
//!-##${widget.widgetType}--END##`;
                
                return str;
            }
        },