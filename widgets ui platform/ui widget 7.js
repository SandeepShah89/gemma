'widget 7': {
    friendlyName: 'Widget 7',
    description: 'Social 2 --join us',
    fields: [
        // { type: 'onpageposition', id: 'text', name: 'text', label: 'text' }, // placeholder so i know the markup.
        'BACKGROUND COLOUR',
        { type: 'color', id: 'bgcol', name: 'bgcol', label: 'Background Colour', value: '#FFFFFF' },
        'HEADER',
        { type: 'text', id: 'header', name: 'header', label: 'Header Text', value: 'Join our community today!'},
        { type: 'color', id: 'headercol', name: 'headercol', label: 'Header Text Colour', value: '#000000' },
        { type: 'text', id: 'headerfontsize', name: 'headerfontsize', label: ' Header Font Size', value: '26px' },
        'CONTENT',
        { type: 'color', id: 'txtcol', name: 'txtcol', label: 'Text Colour', value: '#363130' },
        { type: 'text', id: 'txtfontsize', name: 'txtfontsize', label: 'Content Font Size', value: '15px' },
        { type: 'text', id: 'content', name: 'content', label: 'Content Text', value: 'Follow us on Facbook to hear our offers!' },
        'FOREGROUND',
        { type: 'color', id: 'fgcol', name: 'fgcol', label: 'Line', value: '#757980' }
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
    headercol: '${widget.headercol}', // header colour
    bgcol: '${widget.bgcol}', // background colour   
    content: '${widget.content.replace('\'', '\\\'')}', // content txt
    txtcol: '${widget.txtcol}', // text colour 
    txtfontsize: '${widget.txtfontsize}', // content font size 
    fgcol: '${widget.fgcol}' // border colour
};
var elid = 'wto-widget--social_notification_2--${uniqueID}';
// Remove if exists - ensures no duplicates
document.querySelectorAll('.wto-widget--social_notification_2').forEach(function(node){
node.parentNode.removeChild(node);
});
var body = document.getElementsByTagName('body')[0];
var el = document.createElement('div');
body.insertAdjacentElement('afterBegin', el);
var elhtml = '\<div id="'+ elid +'" class="wto-widget--social_notification_2" style="box-sizing: unset; z-index: 9999; margin: 5px; padding: 8px; position: fixed; bottom: 5px; left: 10px; height: 200px; width: 400px; border-radius: 5px; background-color: '+ settings.bgcol +';">\
<span class="wto_closebtn_not_social2" style="margin-left: 15px; color: #757980;  position: absolute; bottom: 189px; left: 370px; font-size: 33px; line-height: 20px; cursor: pointer; transition: 0.3s; z-index: 9999;">×</span> \
<div class="wto_social_content" style="margin: 1px; padding: 5px; text-align: left; position: relative; bottom: 12px; border-bottom: 2px solid '+ settings.fgcol +';">\
    <h1 style="display: inline-block; margin-top: 21px; font-weight: bold; font-size: '+ settings.headerfontsize +'; font-family: monospace; color: '+ settings.headercol +'; width: 100%;">'+ settings.header +'</h1>\
    <p style="margin-top: 20px; text-align: center; font-size: '+ settings.txtfontsize +'; font-family: monospace; color: '+ settings.txtcol +';">'+ settings.content +'</p>\
</div>\
<div class="wto_social_icons" style="display: flex; flex-wrap: nowrap; margin-top: 6px">\
    <div style="position: relative; left: 34px; width: 121px; margin: 1px;">\
        <img src="https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/facebook-4.png" style="height: 80px; width: 80px;">\
    </div>\
    <div style="position: relative; left: 34px; width: 121px; margin: 1px;">\
        <img src="https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/instagram-2-1.png" style="height: 80px; width: 80px;">\
    </div>\
    <div style="position: relative; left: 34px; width: 121px; margin: 1px;">\
        <img src="https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/linkedin-icon-2.png" style="height: 80px; width: 80px;">\
    </div>\
</div>\
</div>\';
el.outerHTML = elhtml;

})();
//!-##${widget.widgetType}--END##`;
                
                return str;
            }
        },