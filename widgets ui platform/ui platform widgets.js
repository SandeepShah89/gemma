window.s_widgets = {
    types: {
        "hello-bar": {
            friendlyName: 'Hello Bar',
            description: 'A small bar across the top of your page. Useful for announcements, guidance, offers, etc.',
            fields: [
                // { type: 'onpageposition', id: 'text', name: 'text', label: 'text' }, // placeholder so i know the markup. 
                
                { type: 'text', id: 'text', name: 'text', label: 'text', value: 'Black Friday sale is now on! Upto 50% off across the store.' },
                { type: 'color', id: 'bgcol', name: 'bgcol', label: 'Background Colour', value: '#242424' },
                { type: 'color', id: 'color', name: 'color', label: 'Text Colour', value: '#FFFFFF' },
                { type: 'text', id: 'fontsize', name: 'fontsize', label: 'Font Size', value: '14px' },
                // { type: 'checkbox', id: 'makesticky', name: 'makesticky', label: 'Make sticky and push page down?', value: false },
                // { type: 'checkbox', id: 'haveclosebtn', name: 'haveclosebtn', label: 'Include close button?', value: true },
                { type: 'text', id: 'existingNavSelector', name: 'existingNavSelector', label: 'Existing Nav? Selector:', value: '' },
                { type: 'text', id: 'existingNavMethod', name: 'existingNavMethod', label: 'Existing Nav? Method:', value: '' }
            ],
            
            js_build: function(widget){
                var uniqueID = Date.now();
                var str = `
                
//!-##${widget.widgetType}--START##
// ${JSON.stringify(widget)}
// Create a Hello Bar
(function(){
    
    var settings = {
        text: '${widget.text.replace('\'', '\\\'')}', // text in hello bar 
        bgcol: '${widget.bgcol}', // background colour 
        color: '${widget.color}', // text colour 
        fontSize: '${widget.fontsize}', // font size 
        existingNavToMoveDown: '${widget.existingNavSelector}', // If you have a fixed-position nav, use this to move it down 
        existingNav_method: '${widget.existingNavMethod}' // How you want it moved down
    };
    
    var elid = 'wto-widget--hellobar--${uniqueID}';
    
    // Remove if exists - ensures no duplicates
    document.querySelectorAll('.wto-widget--hellobar').forEach(function(node){
        node.parentNode.removeChild(node);
    });
    
    // Create hello bar
    var body = document.getElementsByTagName('body')[0];
    var el = document.createElement('div');
    
    body.insertAdjacentElement('afterBegin', el);
    
    var elhtml = '<div id="'+ elid +'" class="wto-widget--hellobar" style="padding: 10px; width: 100%; background: '+ settings.bgcol +'; color: '+ settings.color +'; z-index: 99999999; text-align: center; line-height: '+ (parseInt(settings.fontSize)*1.5) +'px; font-size: '+ settings.fontSize +'; top: 0; left: 0; position: fixed;">' + settings.text + '</div>';
    
    el.outerHTML = elhtml;
    
    var h = document.getElementById(elid).offsetHeight;
    body.style.marginTop = h + 'px';
    
    if(settings.existingNavToMoveDown && settings.existingNav_method){
        var el = document.querySelector(settings.existingNavToMoveDown);
        el.style[settings.existingNav_method] = h + 'px';
    }
    
})();
//!-##${widget.widgetType}--END##`;
                
                return str;
            }
        },
        
        /*"hello-bar-with-countdown": {
            friendlyName: 'Hello Bar with countdown',
            description: 'A hello bar, similar to the one on the left, but with a live countdown timer.',
            fields: [
                // { type: 'onpageposition', id: 'text', name: 'text', label: 'text' }, // placeholder so i know the markup. 
                'CONTENT',
                { type: 'text', id: 'text', name: 'text', label: 'text', value: 'Black Friday sale is now on! Upto 50% off across the store.' },
                
                'STYLING',
                { type: 'color', id: 'bgcol', name: 'bgcol', label: 'Background Colour', value: '#242424' },
                { type: 'color', id: 'color', name: 'color', label: 'Text Colour', value: '#FFFFFF' },
                { type: 'text', id: 'fontsize', name: 'fontsize', label: 'Font Size', value: '14px' },
                
                'COUNTDOWN END',
                { type: 'date-and-time', id: 'expiry', name: 'expiry', label: 'Expiration Date' },
                // { type: 'checkbox', id: 'makesticky', name: 'makesticky', label: 'Make sticky and push page down?', value: false },
                // { type: 'checkbox', id: 'haveclosebtn', name: 'haveclosebtn', label: 'Include close button?', value: true },
                
                'STICKY NAV?',
                { type: 'text', id: 'existingNavSelector', name: 'existingNavSelector', label: 'Selector:', value: '' },
                { type: 'text', id: 'existingNavMethod', name: 'existingNavMethod', label: 'Method:', value: '' }
            ],
            
            js_build: function(widget){
                var uniqueID = Date.now();
                var str = `
                
//!-##${widget.widgetType}--START##
// ${JSON.stringify(widget)}
// Create a Hello Bar
(function(){
    
    var settings = {
        text: '${widget.text}', // text in hello bar 
        bgcol: '${widget.bgcol}', // background colour 
        color: '${widget.color}', // text colour 
        fontSize: '${widget.fontsize}', // font size 
        existingNavToMoveDown: '${widget.existingNavSelector}', // If you have a fixed-position nav, use this to move it down 
        existingNav_method: '${widget.existingNavMethod}' // How you want it moved down
    };
    
    var elid = 'wto-widget--hellobar--${uniqueID}';
    
    // Remove if exists - ensures no duplicates
    document.querySelectorAll('.wto-widget--hellobar').forEach(function(node){
        node.parentNode.removeChild(node);
    });
    
    // Create hello bar
    var body = document.getElementsByTagName('body')[0];
    var el = document.createElement('div');
    
    body.insertAdjacentElement('afterBegin', el);
    
    var elhtml = '<div id="'+ elid +'" class="wto-widget--hellobar" style="padding: 10px; width: 100%; background: '+ settings.bgcol +'; color: '+ settings.color +'; z-index: 99999999; text-align: center; line-height: '+ (parseInt(settings.fontSize)*1.5) +'px; font-size: '+ settings.fontSize +'; top: 0; left: 0; position: fixed;">' + settings.text + '</div>';
    
    el.outerHTML = elhtml;
    
    var h = document.getElementById(elid).offsetHeight;
    body.style.marginTop = h + 'px';
    
    if(settings.existingNavToMoveDown && settings.existingNav_method){
        var el = document.querySelector(settings.existingNavToMoveDown);
        el.style[settings.existingNav_method] = h + 'px';
    }
    
})();
//!-##${widget.widgetType}--END##`;
                
                return str;
            }
        },*/
        
        'lightbox-1': {
            friendlyName: 'Lightbox 1',
            description: 'A simple lightbox with a heading, some text content and a button. Use for disruptive messaging.',
            fields: [
                'BACKGROUND',
                { type: 'color', id: 'bgcol', name: 'bgcol', label: 'Background Colour', value: '#000000' },
                { type: 'range', id: 'opacity', name: 'opacity', label: 'Opacity', value: 0.25, min: 0, max: 1, step: 0.05 },
                
                'CONTAINER',
                { type: 'color', id: 'container-bgcol', name: 'container-bgcol', label: 'Background Colour', value: '#FFFFFF' },
                { type: 'number', id: 'container-width', name: 'container-width', label: 'Width (px)', value: 700 },
                
                'CONTENT',
                { type: 'text', id: 'content-heading', name: 'content-heading', label: 'Heading', value: 'Heading' },
                { type: 'textarea', id: 'content-body', name: 'content-body', label: 'Content Body', value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
                
                'BUTTON',
                { type: 'text', id: 'button-text', name: 'button-text', label: 'Text', value: 'Request a demo' },
                { type: 'text', id: 'button-link', name: 'button-link', label: 'Link', value: '/request-a-demo' },
                { type: 'color', id: 'button-text-color', name: 'button-text-color', label: 'Text Colour', value: '#FFFFFF' },
                { type: 'color', id: 'button-color', name: 'button-color', label: 'Button Colour', value: '#000000' },
                
                'TRIGGER',
                { type: 'checkbox', id: 'trigger-immediately', name: 'trigger-immediately', label: 'Immediately', value: true },
                { type: 'checkbox', id: 'trigger-exitintent', name: 'trigger-exitintent', label: 'On Exit Intent', value: false, note: `<strong>Note:</strong> If using this option, we recommend building it with the "Immediately" trigger and then switching triggers when you're ready to test.` },
                { type: 'checkbox', id: 'trigger-delay', name: 'trigger-delay', label: 'On Delay', value: false },
                { type: 'number', id: 'trigger-delay-sec', name: 'trigger-delay-sec', label: 'Delay Time (s)', value: 0 }
                
            ],
            
            js_build: function(widget){
                
                var strTriggers = '';
                if(widget['trigger-immediately']){
                    strTriggers += `
    // Immediately
    createPopup();`;
                }
                
                var delaySec = parseInt(widget['trigger-delay-sec']);
                if(widget['trigger-delay'] && delaySec){
                    strTriggers += `
    // On delay
    setTimeout(createPopup, ${delaySec*1000});`;
                }
                
                if(widget['trigger-exitintent']){
                    strTriggers += `
    
    // Exit Intent Library 
    ${window.s_widgets.helpers.scripts.exitIntent}
    
    // Exit Intent Trigger 
    onExitIntent(createPopup);`;
                }
                
                // sort the underlay
                var bgcol = widget.bgcol;
                if(bgcol.match(/^\#/)){
                    var str = [];
                    bgcol.match(/\w{2}/g).forEach(function(part){
                        str.push( parseInt(part, 16) );
                    });
                    bgcol = str.join(', ');
                }
                
                // build HTML 
                var str = `
//!-##${widget.widgetType}--START##
// ${JSON.stringify(widget)}
(function(){
    
    var createPopup = function(){
        var el = document.getElementById('wto-widget--lightbox--wrapper');
        if(el) el.parentNode.removeChild(el);
        
        var el = document.createElement('div');
        document.querySelector('body').appendChild(el);
        el.outerHTML = ' \\
<div id="wto-widget--lightbox--wrapper"> \\
    <div id="wto-widget--lightbox--background" style="position: fixed; top: 0; left: 0; height: 100%; width: 100%; background: rgba(${bgcol}, ${widget.opacity}); z-index: 2147483647;"></div> \\
    <div id="wto-widget--lightbox--container" style="position: absolute; top: 50%; left: 50%; background: ${widget['container-bgcol']}; z-index: 2147483648; width: 100%; max-width: ${widget['container-width']}px; transform: translate(-50%, -50%);"> \\
        <div style="position: relative; height: 100%; width: 100%; padding: 15px; box-sizing: border-box;"> \\
            <span style="position: absolute;top: 10px;right: 10px;" onclick="javascript:window.temp_sw_lightbox=this.parentNode.parentNode.parentNode;temp_sw_lightbox.parentNode.removeChild(temp_sw_lightbox);delete window.temp_sw_lightbox;"> \\
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" style="width: 30px; cursor: pointer;"><path d="M1115 1024l690 691-90 90-691-690-691 690-90-90 690-691-690-691 90-90 691 690 691-690 90 90-690 691z"></path></svg> \\
            </span> \\
            \\
            <h3 style="text-align: center;">${widget['content-heading']}</h3> \\
            <p>${widget['content-body']}</p> \\
            \\
            <p style="text-align: center; margin-bottom: 0;"> \\
                <a href="${widget['button-link']}" style="display: inline-block; background: ${widget['button-color']}; color: ${widget['button-text-color']}; padding: 10px 20px; font-size: 16px; font-weight: 600;">${widget['button-text']}</a> \\
            </p> \\
        </div> \\
     </div> \\
</div> \\
        ';
    };
    
    // Triggers ${strTriggers}
    
    
})();
//!-##${widget.widgetType}--END##`;

                return str;
                
            }
        },
        
        "lower-corner-promo": {
            friendlyName: 'Lower Corner Promo',
            description: 'A small promotional box in the bottom-left corner of the page. Animates into view.',
            fields: [
                { type: 'text', id: 'image', name: 'image', label: 'Image URL', value: '' },

                { type: 'color', id: 'themeColor', name: 'themeColor', label: 'Theme Colour', value: '#000000' },
                
                'CONTENT',
                { type: 'text', id: 'headingText', name: 'headingText', label: 'Heading Text', value: 'YOUR SPECIAL OFFER IS HERE' },
                { type: 'text', id: 'bodyText', name: 'bodyText', label: 'Body Text', value: 'Free Delivery on all orders over &pound20.' },
                { type: 'text', id: 'buttonText', name: 'buttonText', label: 'Button Text', value: 'Get Offer' },
                { type: 'text', id: 'buttonLink', name: 'buttonLink', label: 'Button Link', value: '/somewhere-cool' },

            ],
            
            js_build: function(widget){
                var uniqueID = Date.now();
                
                var themecolor = widget.themeColor;
                if(themecolor.match(/^\#/)){
                    var themecolor_str = [];
                    themecolor.match(/\w{2}/g).forEach(function(part){
                        themecolor_str.push( parseInt(part, 16) );
                    });
                    themecolor = themecolor_str.join(', ');
                }
                
                var str = `
                
//!-##${widget.widgetType}--START##
// ${JSON.stringify(widget)}
// Create a Lower Corner Promo box
(function(){
    var el = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(el);
    el.outerHTML = ' \
    <div id="wto-widget--special-offer-1" style="position: fixed;bottom: -100%;left: 0;z-index: 999999999;width: 400px; max-width: 400px; background: white;box-shadow: 0 0 10px #666;"> \
        <div style="min-height: 175px; background: url(${widget.image}) grey top left no-repeat; background-size: cover; position: relative;"> \
            <div class="wto-widget--special-offer-1--close"><svg onclick="javascript:window.s_widgets__temp=this.parentNode.parentNode.parentNode;s_widgets__temp.parentNode.removeChild(s_widgets__temp);delete window.s_widgets__temp;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" style="width: 30px;cursor: pointer;position: absolute;top: 5px;right: 5px;fill: white;"><path d="M1115 1024l690 691-90 90-691-690-691 690-90-90 690-691-690-691 90-90 691 690 691-690 90 90-690 691z"></path></svg></div> \
        </div> \
        <div style="padding: 30px; font-size: 16px; background: rgba(${themecolor}, .1);"> \
            <h3 style="font-family: Helvetica,Arial,sans-serif; font-weight: 800; color: rgba(${themecolor}, 1);">${widget.headingText.replace(/\'/g, '\\\'')}</h3> \
            <p>${widget.bodyText.replace(/\'/g, '\\\'')}</p> \
            <p style="margin: 0;"> \
                <a href="${widget.buttonLink}" style="display: inline-block; padding: 10px 20px; background: rgba(${themecolor}, .75); color: white; cursor: pointer;">${widget.buttonText}</a> \
            </p> \
        </div> \
    </div> \
    ';
    document.getElementById('wto-widget--special-offer-1').style.bottom = 0;
})();
//!-##${widget.widgetType}--END##`;
                
                return str;
            }
        },
        
        "flash-sale": {
            keepHidden: true,
            friendlyName: 'Flash Sale',
            description: 'A high-visibility, animated, eye-catching box with a simple sales message.',
            fields: [
                { type: 'text', id: 'offer', name: 'offer', label: 'Offer Text', value: 'UPTO 20% OFF SITEWIDE', maxlength: 10 },
                
                'ANIMATION',
                { type: 'radio', id: 'animation', name: 'animation', 'label': 'Animation', options: ["None", "From Top", "From Middle"] },
                
                'TRIGGER',
                { type: 'checkbox', id: 'trigger-immediately', name: 'trigger-immediately', label: 'Immediately', value: true },
                // { type: 'checkbox', id: 'trigger-exitintent', name: 'trigger-exitintent', label: 'On Exit Intent', value: false }, // Release this when we release WT.on into tags.
                { type: 'checkbox', id: 'trigger-delay', name: 'trigger-delay', label: 'On Delay', value: false },
                { type: 'number', id: 'trigger-delay-sec', name: 'trigger-delay-sec', label: 'Delay Time (s)', value: 0 },
                
                'KEEP OPEN FOR',
                { type: 'number', id: 'keepOpenFor_sec', name: 'keepOpenFor_sec', label: 'Keep Open For (s)', value: 15 }
            ],
            
            js_build: function(widget){
                window.wid = widget;
                
                var uniqueID = Date.now();
                
                var strTriggers = '';
                if(widget['trigger-immediately']){
                    strTriggers += `
    // Immediately
    createPopup();`;
                }
                
                var delaySec = parseInt(widget['trigger-delay-sec']);
                if(widget['trigger-delay'] && delaySec){
                    strTriggers += `
    // On delay
    setTimeout(createPopup, ${delaySec*1000});`;
                }
                
                var animationCSS = '';
                if(widget.animation !== "None"){
                    var anim_height = widget.animation !== "From Middle" ? "" : " height: 100%;";
                    animationCSS += `\
@keyframes wto-widget--flash-sale--spin { \
            0% { transform: rotate(0deg); } \
            25% { transform: rotate(90deg); } \
            50% { transform: rotate(180deg); } \
            75% { transform: rotate(270deg); } \
            100% { transform: rotate(360deg); } \
        } \
        .wto-widget--flash-sale--animationContainer { animation: wto-widget--flash-sale--spin 25s infinite; animation-timing-function: linear; min-height: 50px; ${anim_height} }`;
                    
                }

                var str = `
                
//!-##${widget.widgetType}--START##
// ${JSON.stringify(widget)}
// Create a Flash Sale box 
(function(){
    var removePopup = function(){
        var el = document.getElementById('wto-widget--flash-sale--wrapper');
        if(el) el.parentNode.removeChild(el);  
    };
    
    var createPopup = function(){
        removePopup();
        var hrs = '';
        for(var i=1; i<13; i++){
            hrs += '<hr style="transform: translateX(-50%) rotate('+ (i*15) +'deg);">';
        }
        var str = ' \
        <div id="wto-widget--flash-sale--wrapper" style="position: fixed; bottom: 0; left: 0; z-index: 999999; background: red; height: 425px; width: 425px; box-shadow: 0 0 150px rgba(0, 0, 0, 0.1) inset;"> \
            <div id="wto-widget--flash-sale--container" style="position: relative; height: 100%; width: 100%; overflow: hidden;"> \
                <div onclick="javascript:this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);" style="cursor: pointer; position: absolute; top: 0; right: 0; background: rgba(255, 255, 255, .7); padding: 5px; height: 30px; width: 30px; "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" style="width: 20px;"><path d="M1115 1024l914 915-90 90-915-914-915 914-90-90 914-915L19 109l90-90 915 914 915-914 90 90-914 915z"></path></svg></div> \
                 \
                <div style="position: absolute; height: 290px; width: 290px; background: #BE1D2D; border-radius: 50%; top: calc(50% - 145px); left: calc(50% - 145px); transform: rotate3d(1, 0, 0, -28deg); box-shadow: 0 0 100px rgba(255, 255, 2555, .2), 0 0 50px rgba(0, 0, 0, 0.05) inset; z-index: 2;"></div> \
                \
                <div style="position: absolute; top: calc(50% - 63px); left: 50%; transform: translate(-50%, -50%) rotateZ(-5deg) skew(-9deg, -4deg) rotateX(28deg); font-size: 20px; font-family: Arial; font-weight: 400; color: #FBAF41; text-shadow: 0px 7px 0px #F15929; margin-left: -10px; z-index: 3; text-align: center;">-&nbsp;&nbsp;&nbsp;SPECIAL OFFER&nbsp;&nbsp;&nbsp;-</div> \
                \
                <div style="position: absolute; top: calc(50% + 63px); left: 50%; transform: translate(-50%, -50%) rotateZ(-5deg) skew(-9deg, -4deg) rotateX(28deg); font-size: 17px; font-family: Arial; font-weight: 400; color: #FBAF41; text-shadow: 0px 7px 0px #F15929; margin-left: 15px; width: 235px; text-align: center; z-index: 3;">${widget.offer}</div> \
                \
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) rotateZ(-5deg) skew(-9deg, -4deg) rotateX(28deg); font-size: 127px; font-family: Arial; font-weight: 800; color: #FBAF41; text-shadow: 0px 7px 0px #F15929; z-index: 3; margin-top: -8px;">SALE</div> \
                \
                <div class="wto-widget--flash-sale--animationContainer" style="width: 100%;">'+ hrs +'</div> \
                \
            </div> \
        </div> \
        ';
        var el = document.createElement('div');
        document.getElementsByTagName('body')[0].appendChild(el);
        el.outerHTML = str;
        
        var styleText = ' \
        #wto-widget--flash-sale--wrapper hr { margin: 0; position: absolute; top: 50%; left: 50%; width: 210%; background-color: rgb(251 175 65 / 0.8); height: 4px; z-index: 1; box-shadow: 0 0 2px rgba(0, 0, 0, .5) inset; } \
        ${animationCSS} \
        ';
        
        var a = document.createElement('style');
        a.type = 'text/css';
        if(a.styleSheet) a.styleSheet.cssText = styleText;
        else a.appendChild( document.createTextNode(styleText) );
        document.getElementById('wto-widget--flash-sale--wrapper').appendChild(a);
        
        setTimeout(removePopup, ${parseInt(widget.keepOpenFor_sec)*1000});
    };
    ${strTriggers}
})();
//!-##${widget.widgetType}--END##`;
                
                return str;
            }
        },
        
        "lower-corner-countdown": {
            comingSoon: true,
            friendlyName: 'Countdown Card',
            description: 'Coming Soon. A countdown timer in similar popup to the lower-corner promo.',
            fields: [],
            js_build: function(widget){}
        },
       
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
   <header style="text-align: left; background: '+ settings.bgcol +'; color: '+ settings.headercolor +'; font-family: sans-serif; font-size: '+ settings.headerfontsize +'; font-weight: bold;">'+ settings.header +'</header> \
   <p style="font-family: sans-serif; font-size: '+ settings.textfontsize +'; text-align: left; color: '+ settings.color +'; background-color: '+ settings.bgcol +'; " >'+ settings.content +'</p> \
  <p style="text-align: right; padding: 0px; margin:0;"> <button id="not"; style="font-family: sans-serif; font-size: '+ settings.buttonfontsize +'; font-weight: bold; color: '+ settings.buttonTextColor +'; background-color:'+ settings.buttonBackColor +'; text-align: center; border-radius: 2px; height: 45px; width: 110px;"> \
   '+ settings.buttonText +'</button></p> \
</div> \
</div>\';
el.outerHTML = elhtml;   
})();
//!-##${widget.widgetType}--END##`;
                
                return str;
            }
        },
        
        'widget 2': {
    friendlyName: 'Widget 2',
    description: 'Pop up with thumb icons for user to review. (Like/Dislike)',
    fields: [
        // { type: 'onpageposition', id: 'text', name: 'text', label: 'text' }, // placeholder so i know the markup.
        'BACKGROUND COLOUR',
        { type: 'color', id: 'bgcol', name: 'bgcol', label: 'Background Colour', value: '#F3ECEC' },
        'HEADER',
        { type: 'text', id: 'header', name: 'header', label: 'Header Text', value: 'How was your experience today? '},
        { type: 'color', id: 'headercolor', name: 'headercolor', label: 'Header Text Colour', value: 'black' },
        { type: 'text', id: 'headerfontsize', name: 'headerfontsize', label: ' Header Font Size', value: '15px' }
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
    bgcol: '${widget.bgcol}' // background colour  
};
var elid = 'wto-widget--Icon_Review_Box--${uniqueID}';
// Remove if exists - ensures no duplicates
document.querySelectorAll('.wto-widget--Icon_Review_Box').forEach(function(node){
node.parentNode.removeChild(node);
});
var body = document.getElementsByTagName('body')[0];
var el = document.createElement('div');
body.insertAdjacentElement('afterBegin', el);
var elhtml = ' \ <div id="'+ elid +'" class="wto-widget--Icon_Review_Box" style="z-index: 9999; position: fixed; top: 0; left: 0; background: '+ settings.bgcol +'; width: 310px; height: 140px; margin: 15px; box-shadow: 3px 6px 3px 6px grey">\
<div class="hea" style="padding: 25px;">\
    <header id="header" style="text-align: left; background: '+ settings.bgcol +'; color: '+ settings.headercolor +'; font-family: sans-serif; font-size: '+ settings.headerfontsize +'; font-weight: bold;">\
    '+ settings.header +'</header><br>\
    <svg id="wto_widget2_thumbsup" viewBox="0 0 128 128" style="position: absolute; top: 53px; left: 70px; width: 54px; height: 54px;" xmlns="http://www.w3.org/2000/svg">\
    <radialGradient id="e" cx="51.77" cy="31.401" r="87.039" gradientTransform="matrix(-.0021809 1 -.7873 -.001717 76.604 -20.315)" gradientUnits="userSpaceOnUse">\
    <stop stop-color="#FFCA28" offset=".6"/>\
    <stop stop-color="#FFB300" offset="1"/>\
    </radialGradient>\
    <path d="m85.52 121.67c-8.63-0.07-21.58-0.41-34.32-1.61-8.77-0.83-17.83-2.14-24.71-6.04-1.94-1.1-4.06-1.37-5.94-1.6-0.8-0.1-1.55-0.19-2.19-0.34-4.88-1.15-8.29-5.37-8.31-10.26l-0.07-32.75c-0.01-4.53 3.22-8.32 7.69-9.02 0.08-0.01 0.15-0.03 0.23-0.05 0.55-0.18 13.69-4.46 23.59-12.2 4.66-3.64 8.65-9.25 10.68-15 2.02-5.73 2.01-11.98 2-17 0-3.24-0.01-7.27 0.87-7.86 2.14-1.41 4.5-2.13 7.01-2.13 7.72 0 15.6 7.05 15.91 14.23 0.22 4.98-1.45 10.86-3.06 16.54-1.9 6.73-3.55 12.54-2.06 16.49 0.22 0.59 0.78 0.97 1.4 0.97 0.02 0 7.29-0.25 7.29-0.25h0.07c8.16 0 14.8 6.64 14.81 14.79l0.05 42.21c0 2.91-1.12 5.64-3.18 7.69-2.05 2.05-4.78 3.19-7.69 3.19h-0.07z" fill="url(#e)"/>\
    <path d="m62.05 7.31c6.86 0 14.13 6.46 14.41 12.79 0.21 4.74-1.42 10.5-3 16.07-1.98 6.98-3.68 13.01-2.02 17.42 0.44 1.17 1.56 1.94 2.81 1.94h0.11l7.2-0.25h0.06c7.33 0 13.3 5.96 13.31 13.3l0.05 42.21c0 2.5-0.97 4.86-2.74 6.63s-4.12 2.75-6.63 2.75h-0.08c-8.6-0.07-21.51-0.41-34.19-1.6-8.6-0.81-17.48-2.09-24.11-5.85-2.2-1.25-4.58-1.54-6.49-1.78-0.76-0.09-1.47-0.18-2.03-0.32-4.2-0.99-7.14-4.61-7.15-8.8l-0.08-32.75c-0.01-3.78 2.69-6.95 6.42-7.53 0.15-0.02 0.31-0.06 0.45-0.11 0.56-0.18 13.94-4.55 24.05-12.45 4.87-3.81 9.05-9.67 11.17-15.68 2.11-5.97 2.1-12.36 2.09-17.5 0-2.44-0.01-5.74 0.41-6.74 1.84-1.17 3.85-1.75 5.98-1.75m0-3c-2.65 0-5.33 0.72-7.84 2.38-3.24 2.14 0.27 15.02-3.46 25.6-2.24 6.35-6.51 11.45-10.19 14.32-9.8 7.66-23.12 11.96-23.12 11.96-5.17 0.81-8.97 5.27-8.96 10.51l0.08 32.75c0.02 5.64 3.97 10.41 9.46 11.71 2.22 0.52 5.25 0.38 7.73 1.79 6.63 3.76 15.13 5.26 25.31 6.22 12.6 1.19 25.4 1.54 34.45 1.62h0.1c6.83 0 12.38-5.54 12.37-12.38l-0.05-42.21c-0.01-9.01-7.32-16.29-16.31-16.29h-0.12l-7.24 0.25c-2.5-6.64 5.69-21.58 5.21-32.57-0.35-7.81-8.68-15.66-17.42-15.66z" fill="#EDA600"/>\
    <path d="m66.12 62.5c1.88 5 1.9 12.8 0 17.62-2.75 6.96-9.48 13.05-17.25 14.12-1.9 0.26-0.77 2.01 1.12 1.75 8.41-1.16 19.79-4.57 22.75-12.12 8.12-20.75-1.38-31.62-5.62-28.38-2.04 1.58-2.06 4.18-1 7.01z" fill="#EDA600"/>\
    <radialGradient id="d" cx="2459.4" cy="-319.18" r="20.331" gradientTransform="matrix(-1.3883 .0794 -.0374 -.6794 3505.4 -353.39)" gradientUnits="userSpaceOnUse"><stop stop-color="#FFCA28" offset=".5993"/>\
    <stop stop-color="#FFB300" offset="1"/>\
    </radialGradient>\
    <path d="m86.28 69.92c-8.36 0-18.41-1.55-18.84-8.96-0.12-2.12 0.52-3.9 1.96-5.43 3.79-4.02 13.1-6.23 26.22-6.23 4.76 0 8.23 0.31 8.27 0.31s0.09 0.01 0.13 0.01h0.09c0.14-0.01 0.27-0.01 0.41-0.01 4.25 0 7.8 3.83 8.09 8.72 0.3 5.06-3.03 9.38-7.42 9.63-0.07 0-0.15 0.01-0.22 0.03-0.09 0.01-9.35 1.93-18.69 1.93z" fill="url(#d)"/>\
    <path d="m95.63 50.8c4.68 0 8.1 0.3 8.13 0.3 0.09 0.01 0.18 0.01 0.27 0.01 0.06 0 0.12 0 0.17-0.01 0.11-0.01 0.22-0.01 0.32-0.01 3.45 0 6.35 3.21 6.59 7.3 0.12 2.12-0.48 4.13-1.69 5.67-1.13 1.44-2.67 2.28-4.32 2.38-0.15 0.01-0.3 0.03-0.44 0.06-0.09 0.02-9.22 1.91-18.38 1.91-5.32 0-9.54-0.62-12.53-1.84-4.11-1.68-4.72-4.06-4.81-5.7-0.1-1.71 0.4-3.08 1.56-4.32 3.45-3.65 12.61-5.75 25.13-5.75m0-3c-11.42 0-30.36 1.73-29.69 13.25 0.49 8.32 10.53 10.37 20.34 10.37 9.61 0 19-1.97 19-1.97 5.22-0.31 9.18-5.33 8.83-11.22-0.33-5.7-4.57-10.13-9.58-10.13-0.17 0-0.33 0-0.5 0.01 0 0-3.51-0.31-8.4-0.31z" fill="#EDA600"/>\
    <radialGradient id="c" cx="2557.2" cy="-508.52" r="18.753" gradientTransform="matrix(-1.6967 -.001885 .0029132 -.6804 4447.7 -263.06)" gradientUnits="userSpaceOnUse">\
    <stop stop-color="#FFCA28" offset=".5993"/>\
    <stop stop-color="#FFB300" offset="1"/>\
    </radialGradient>\
    <path d="m92.55 88.95c-10.91 0-23.91-1.83-23.91-10.57s13-10.57 23.91-10.57c9.25 0 17.68 1.35 17.76 1.36s0.16 0.02 0.24 0.02c4.41 0 7.48 4.66 7.48 8.84 0 4.41-3.27 9.53-7.48 9.53-0.08 0-0.16 0.01-0.24 0.02-0.09 0.02-8.52 1.37-17.76 1.37z" fill="url(#c)"/>\
    <path d="m92.55 69.32c9.12 0 17.44 1.33 17.52 1.34 0.16 0.03 0.32 0.04 0.48 0.04 3.42 0 5.98 3.88 5.98 7.34 0 3.61-2.76 8.03-5.98 8.03-0.16 0-0.32 0.01-0.48 0.04-0.08 0.01-8.41 1.34-17.52 1.34-6.83 0-12.26-0.72-16.15-2.15-5.61-2.06-6.26-4.94-6.26-6.92 0-1.99 0.65-4.86 6.26-6.92 3.88-1.42 9.32-2.14 16.15-2.14m0-3c-11.93 0-25.41 2.19-25.41 12.07s13.47 12.07 25.41 12.07c9.49 0 18-1.38 18-1.38 5.16 0 8.98-5.91 8.98-11.03s-3.82-10.34-8.98-10.34c0-0.01-8.52-1.39-18-1.39z" fill="#EDA600"/>\
    <radialGradient id="b" cx="2601.3" cy="-320.21" r="20.446" gradientTransform="matrix(-1.3069 -.0062595 .0045215 -.6804 3502.3 -88.992)" gradientUnits="userSpaceOnUse">\
    <stop stop-color="#FFCA28" offset=".5993"/>\
    <stop stop-color="#FFB300" offset="1"/>\
    </radialGradient>\
    <path d="m100.86 122.19c-4.21 0-25.54-0.33-32-6.8-1.13-1.13-1.67-2.35-1.67-3.73 0.02-5.25 9.01-8.26 24.66-8.26 5.58 0 9.9 0.4 9.95 0.4 0.04 0 0.09 0.01 0.13 0.01 2.34 0.01 4.55 0.96 6.2 2.69 1.67 1.74 2.58 4.06 2.58 6.52-0.02 5.05-3.97 9.15-8.81 9.15-0.07 0.02-0.42 0.02-1.04 0.02z" fill="url(#b)"/>\
    <path d="m91.86 104.91c5.49 0 9.76 0.39 9.8 0.4 0.09 0.01 0.18 0.01 0.27 0.01 1.93 0.01 3.75 0.8 5.12 2.23 1.4 1.46 2.17 3.41 2.16 5.48-0.01 4.22-3.29 7.66-7.34 7.66h-0.01-0.06c-0.02 0-0.36 0.01-0.95 0.01-18.15 0-28.01-3.43-30.94-6.36-1.11-1.11-1.23-2.05-1.23-2.66 0.03-4.18 8.9-6.77 23.18-6.77m0-3c-10.72 0-26.14 1.44-26.16 9.75-0.04 11.46 29.3 12.03 35.16 12.03 0.65 0 1.01-0.01 1.01-0.01h0.03c5.68 0 10.29-4.76 10.31-10.65 0.02-5.9-4.58-10.7-10.27-10.72 0 0.01-4.37-0.4-10.08-0.4z" fill="#EDA600"/>\
    <radialGradient id="a" cx="2578.2" cy="-485.68" r="18.611" gradientTransform="matrix(-1.6358 -.001885 .0028087 -.6804 4323.8 -229.31)" gradientUnits="userSpaceOnUse">\
    <stop stop-color="#FFCA28" offset=".5993"/>\
    <stop stop-color="#FFB300" offset="1"/>\
    </radialGradient>\
    <path d="m97.12 106.32c-8.99 0-29.89-1.02-29.89-10.47 0-7.94 15.07-9.12 24.06-9.12 7.95 0 14.8 0.88 14.87 0.89 0.06 0.01 0.13 0.01 0.19 0.01 4.17 0 9.03 2.06 9.03 7.87 0 5.5-4.3 10.5-9.03 10.5h-0.12c-0.04 0.01-3.89 0.32-9.11 0.32z" fill="url(#a)"/>\
    <path d="m91.29 85.24v3c7.83 0 14.61 0.87 14.67 0.88 0.13 0.02 0.26 0.02 0.39 0.02 3.64 0 7.53 1.67 7.53 6.37 0 4.63-3.66 9-7.53 9-0.08 0-0.16 0-0.25 0.01-0.04 0-3.83 0.31-8.99 0.31-5.45 0-13.24-0.35-19.41-1.99-5.95-1.59-8.97-3.94-8.97-6.97 0-0.93 0-3.76 6.34-5.75 3.95-1.24 9.4-1.87 16.21-1.87l0.01-3.01m0 0c-11.56 0-25.56 1.82-25.56 10.62 0 10.37 19.4 11.97 31.39 11.97 5.36 0 9.23-0.32 9.23-0.32 5.64 0 10.53-5.83 10.53-12s-4.89-9.37-10.53-9.37c0 0-6.93-0.9-15.06-0.9z" fill="#EDA600"/>\
    <polygon points="27.79 114.9 23 96 21 113" fill="#EDA600"/>\
    </svg>\
<svg  id="wto_widget2_thumbsdown" style="position: fixed; top: 70px; right: 1280px; width: 54px;  height: 54px;" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">\
    <radialGradient id="e" cx="51.77" cy="31.401" r="87.039" gradientTransform="matrix(-.0021809 -1 -.7873 .001717 76.604 148.32)" gradientUnits="userSpaceOnUse">\
    <stop stop-color="#FFCA28" offset=".6"/>\
    <stop stop-color="#FFB300" offset="1"/>\
</radialGradient>\
<path d="m62.05 122.19c-2.51 0-4.87-0.72-7.01-2.13-0.88-0.58-0.88-4.62-0.87-7.86 0.01-5.02 0.02-11.27-2-16.99-2.03-5.75-6.03-11.36-10.68-15-9.9-7.74-23.03-12.02-23.59-12.2-0.07-0.02-0.15-0.04-0.23-0.05-4.47-0.7-7.71-4.5-7.69-9.02l0.08-32.75c0.01-4.89 3.43-9.1 8.31-10.26 0.63-0.15 1.39-0.24 2.19-0.34 1.87-0.23 3.99-0.5 5.94-1.6 6.88-3.9 15.94-5.21 24.71-6.04 12.74-1.2 25.69-1.54 34.32-1.61 3 0 5.73 1.13 7.78 3.19 2.05 2.05 3.18 4.79 3.18 7.69l-0.05 42.21c-0.01 8.16-6.66 14.79-14.81 14.79h-0.13s-7.24-0.25-7.25-0.25c-0.62 0-1.18 0.39-1.4 0.97-1.49 3.95 0.16 9.76 2.06 16.49 1.61 5.69 3.27 11.57 3.06 16.54-0.32 7.18-8.2 14.22-15.92 14.22z" fill="url(#e)"/>\
<path d="m85.61 7.83c2.51 0 4.86 0.98 6.63 2.75s2.74 4.12 2.74 6.63l-0.05 42.21c-0.01 7.33-5.98 13.3-13.31 13.3h-0.06l-7.2-0.25h-0.11c-1.24 0-2.37 0.77-2.81 1.94-1.66 4.41 0.04 10.44 2.02 17.42 1.58 5.57 3.21 11.34 3 16.07-0.28 6.34-7.55 12.79-14.41 12.79-2.13 0-4.14-0.59-5.97-1.75-0.42-1-0.41-4.3-0.41-6.74 0.01-5.13 0.02-11.52-2.09-17.5-2.12-6.01-6.3-11.88-11.17-15.68-10.11-7.9-23.49-12.27-24.05-12.45-0.15-0.05-0.3-0.08-0.45-0.11-3.73-0.59-6.44-3.76-6.42-7.54l0.08-32.75c0.01-4.19 2.95-7.81 7.15-8.8 0.56-0.13 1.27-0.22 2.03-0.32 1.91-0.24 4.29-0.54 6.49-1.78 6.64-3.76 15.51-5.03 24.11-5.85 12.68-1.2 25.59-1.53 34.19-1.6l0.07 0.01m0-3h-0.1c-9.04 0.07-21.85 0.43-34.45 1.62-10.18 0.96-18.68 2.47-25.31 6.22-2.48 1.41-5.51 1.26-7.73 1.79-5.49 1.3-9.44 6.07-9.46 11.71l-0.08 32.76c-0.02 5.23 3.79 9.7 8.96 10.51 0 0 13.32 4.29 23.12 11.96 3.68 2.87 7.95 7.97 10.19 14.32 3.74 10.58 0.23 23.46 3.46 25.6 2.51 1.66 5.19 2.38 7.84 2.38 8.74 0 17.07-7.86 17.41-15.66 0.48-10.99-7.71-25.93-5.21-32.57l7.24 0.25h0.12c8.99 0 16.3-7.29 16.31-16.29l0.05-42.21c0.02-6.85-5.53-12.39-12.36-12.39z" fill="#EDA600"/>\
<path d="m66.12 65.5c1.88-5 1.9-12.8 0-17.62-2.75-6.96-9.48-13.05-17.25-14.12-1.9-0.26-0.77-2.01 1.12-1.75 8.41 1.16 19.79 4.57 22.75 12.12 8.12 20.75-1.38 31.62-5.62 28.38-2.04-1.58-2.06-4.18-1-7.01z" fill="#EDA600"/>\
    <radialGradient id="d" cx="2621.1" cy="-453.3" r="20.331" gradientTransform="matrix(-1.3883 -.0794 -.0374 .6794 3724.9 585.35)" gradientUnits="userSpaceOnUse">\
    <stop stop-color="#FFCA28" offset=".5993"/>\
    <stop stop-color="#FFB300" offset="1"/>\
</radialGradient>\
    <path d="m95.63 78.7c-13.12 0-22.44-2.21-26.22-6.23-1.45-1.53-2.09-3.31-1.96-5.43 0.43-7.41 10.49-8.96 18.84-8.96 9.34 0 18.6 1.92 18.69 1.94 0.07 0.02 0.15 0.03 0.22 0.03 4.39 0.26 7.72 4.58 7.42 9.63-0.29 4.89-3.84 8.72-8.09 8.72-0.14 0-0.27 0-0.41-0.01h-0.09c-0.04 0-0.09 0-0.13 0.01-0.04-0.01-3.51 0.3-8.27 0.3z" fill="url(#d)"/>\
    <path d="m86.28 59.58c9.16 0 18.29 1.89 18.38 1.91 0.14 0.03 0.29 0.05 0.44 0.06 1.66 0.1 3.19 0.94 4.32 2.38 1.21 1.54 1.81 3.56 1.69 5.67-0.24 4.09-3.13 7.3-6.59 7.3-0.11 0-0.22 0-0.32-0.01-0.06 0-0.12-0.01-0.17-0.01-0.09 0-0.18 0-0.27 0.01-0.03 0-3.45 0.3-8.13 0.3-12.52 0-21.68-2.1-25.13-5.76-1.16-1.23-1.66-2.61-1.56-4.32 0.1-1.64 0.7-4.02 4.81-5.7 3-1.21 7.21-1.83 12.53-1.83m0-3c-9.81 0-19.85 2.06-20.34 10.37-0.67 11.52 18.27 13.25 29.69 13.25 4.89 0 8.4-0.32 8.4-0.32 0.17 0.01 0.33 0.01 0.5 0.01 5.01 0 9.25-4.42 9.58-10.13 0.34-5.89-3.61-10.91-8.83-11.22 0 0.01-9.39-1.96-19-1.96z" fill="#EDA600"/>\
    <radialGradient id="c" cx="2719.2" cy="-648.52" r="18.753" gradientTransform="matrix(-1.6967 .001885 .0029133 .6804 4723 486.01)" gradientUnits="userSpaceOnUse">\
    <stop stop-color="#FFCA28" offset=".5993"/>\
    <stop stop-color="#FFB300" offset="1"/>\
</radialGradient>\
<path d="m92.55 60.18c-10.91 0-23.91-1.83-23.91-10.57 0-8.73 13-10.57 23.91-10.57 9.26 0 17.68 1.35 17.76 1.36s0.16 0.02 0.24 0.02c4.21 0 7.48 5.12 7.48 9.53 0 4.18-3.07 8.84-7.48 8.84-0.08 0-0.16 0.01-0.24 0.02-0.09 0.02-8.51 1.37-17.76 1.37z" fill="url(#c)"/>\
    <path d="m92.55 40.55c9.12 0 17.44 1.33 17.52 1.34 0.16 0.03 0.32 0.04 0.48 0.04 3.22 0 5.98 4.41 5.98 8.03 0 3.47-2.56 7.34-5.98 7.34-0.16 0-0.32 0.01-0.48 0.04-0.08 0.01-8.38 1.34-17.52 1.34-6.83 0-12.26-0.72-16.15-2.15-5.61-2.06-6.26-4.94-6.26-6.92 0-1.99 0.65-4.86 6.26-6.92 3.88-1.42 9.32-2.14 16.15-2.14m0-3c-11.93 0-25.41 2.19-25.41 12.07s13.47 12.07 25.41 12.07c9.49 0 18-1.38 18-1.38 5.16 0 8.98-5.23 8.98-10.34s-3.82-11.03-8.98-11.03c0-0.01-8.52-1.39-18-1.39z" fill="#EDA600"/>\
    <radialGradient id="b" cx="2763.2" cy="-460.57" r="20.446" gradientTransform="matrix(-1.3069 .0062595 .0045215 .6804 3714.6 311.48)" gradientUnits="userSpaceOnUse">\
    <stop stop-color="#FFCA28" offset=".5993"/>\
    <stop stop-color="#FFB300" offset="1"/>\
</radialGradient>\
    <path d="m91.85 24.59c-15.66 0-24.64-3.01-24.66-8.26 0-1.38 0.54-2.6 1.67-3.73 6.45-6.47 27.79-6.8 32-6.8 0.62 0 0.98 0.01 0.98 0.01 4.91 0 8.86 4.11 8.88 9.15 0.01 2.46-0.91 4.78-2.58 6.52-1.66 1.73-3.86 2.68-6.2 2.69-0.04 0-0.09 0-0.13 0.01-0.05 0.01-4.39 0.41-9.96 0.41z" fill="url(#b)"/>\
    <path d="m100.86 7.31c0.6 0 0.94 0.01 0.95 0.01h0.09c4.02 0 7.3 3.44 7.31 7.66 0.01 2.07-0.76 4.02-2.16 5.48-1.37 1.43-3.19 2.22-5.12 2.23-0.09 0-0.18 0-0.27 0.01-0.04 0-4.3 0.4-9.8 0.4-14.27 0-23.15-2.59-23.16-6.76 0-0.61 0.12-1.55 1.23-2.66 2.92-2.95 12.77-6.37 30.93-6.37m0-3c-5.86 0-35.2 0.57-35.16 12.03 0.03 8.31 15.45 9.75 26.16 9.75 5.71 0 10.08-0.41 10.08-0.41 5.69-0.02 10.29-4.82 10.27-10.72-0.02-5.89-4.63-10.65-10.31-10.65h-0.03-1.01z" fill="#EDA600"/>\
    <radialGradient id="a" cx="2740.2" cy="-625.68" r="18.611" gradientTransform="matrix(-1.6358 .001885 .0028087 .6804 4589.2 452.27)" gradientUnits="userSpaceOnUse">\
    <stop stop-color="#FFCA28" offset=".5993"/>\
    <stop stop-color="#FFB300" offset="1"/>\
</radialGradient><path d="m91.29 41.26c-8.98 0-24.06-1.19-24.06-9.12 0-9.45 20.9-10.47 29.89-10.47 5.23 0 9.07 0.31 9.11 0.31h0.12c4.73 0 9.03 5 9.03 10.5 0 5.81-4.87 7.87-9.03 7.87-0.06 0-0.13 0-0.19 0.01-0.07 0.03-6.94 0.9-14.87 0.9z" fill="url(#a)"/>\
    <path d="m97.12 23.18c5.15 0 8.95 0.31 8.99 0.31 0.08 0.01 0.16 0.01 0.25 0.01 3.87 0 7.53 4.37 7.53 9 0 4.7-3.89 6.37-7.53 6.37-0.13 0-0.26 0.01-0.39 0.02-0.07 0.01-6.85 0.88-14.68 0.88-6.81 0-12.27-0.63-16.21-1.87-6.34-2-6.34-4.82-6.34-5.75 0-3.04 3.02-5.38 8.97-6.97 6.16-1.66 13.96-2 19.41-2m0-3c-11.99 0-31.39 1.6-31.39 11.97 0 8.8 14 10.62 25.56 10.62 8.13 0 15.06-0.9 15.06-0.9 5.64 0 10.53-3.2 10.53-9.37s-4.89-12-10.53-12c0 0-3.88-0.32-9.23-0.32z" fill="#EDA600"/>\
    <polygon points="27.79 13.1 23 32 21 15" fill="#EDA600"/>\
</svg>\
</div> \
</div>\';
el.outerHTML = elhtml;  
})();
//!-##${widget.widgetType}--END##`;
                
                return str;
            }
        },
        
                  
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
})();
//!-##${widget.widgetType}--END##`;
                
                return str;
            }
        },
        
        'custom': {
            friendlyName: 'Custom',
            description: 'Created your own widgets? Insert your own Widget JSON here.',
            fields: [
                { type: 'text', id: 'widgetName', name: 'widgetName', label: 'Widget Name', value: 'My Custom Widget' },
                { type: 'textarea', id: 'widgetJson', name: 'widgetJson', label: 'Widget JSON', value: '' },
            ],
            js_build: function(widget){
                
                eval(`window.s_widgets.types["${widget.widgetName}"] = ${document.getElementById('widgetJson').value}`);
                
                var el = document.createElement('option');
                var container = document.getElementById('s-widgets--type');
                container.appendChild(el);
                el.outerHTML = `<option value="${widget.widgetName}" selected="selected">${widget.widgetName}</option>`;
                container.value = widget.widgetName;
                
                window.s_widgets.changeType();
                
                return '';
                
            }
        }
    },
    changeType: function(){
        var val = document.getElementById('s-widgets--type').value;
        // console.log(val);
        var fields = s_widgets.types[val].fields;
        var deleteButton = s_widgets.types[val].fromCode ? `<span title="Note: The widget will continue to be in view until the page reloads. This will be addressed in a future release." onclick="javascript:window.s_widgets.apply(true);" style="position: absolute; top: 0; right: 0; color: #d27977; cursor: pointer;"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14 fa-sm icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="margin-right: 3px;"><path fill="currentColor" d="M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z"></path></svg> DELETE WIDGET</span>` : ``;
        
        var str = '';
        str += `
        ${deleteButton}
        <input type="hidden" name="widgetType" value="${val}" />`;
        var hadFirstFormGroup = false;
        fields.forEach(function(field){
            
            var note = !field.note ? '' : `<p class="s-widgets-fieldnote">${field.note}</p>`;
                
            if((typeof field).toLowerCase() == "string"){
                if(hadFirstFormGroup) str += '</div>';
                hadFirstFormGroup = true;
                str += '<div class="s-widgets-formgroup" style=""><span class="s-widgets-formgroup--header">'+ field +':</span>';
            }
            
            else if(field.type == "text" || field.type == "number"){
                var maxlength = !field.maxlength ? '' : `maxlength="${field.maxlength}"`;
                str += `<div><label for="${field.id}">${field.label}:</label>${note}<input type="${field.type}" id="${field.id}" name="${field.name}" value="${field.value}" ${maxlength}></div>`;
            }
            
            else if(field.type == "date-and-time"){
                str += `
<div>
    <label for="${field.id}">${field.label}:</label>
    ${note}
    <input type="date" id="${field.id}-date" name="${field.name}-date">
    <input type="time" id="${field.id}-time" name="${field.name}-time">
</div>
    `;
            }
            
            else if(field.type == "textarea"){
                str += `<div><label for="${field.id}">${field.label}:</label>${note}<textarea id="${field.id}" name="${field.name}">${field.value.replace(/\<br\s?\/?\>/g, '\n')}</textarea></div>`;
            }
            
            else if(field.type == "color"){
                str += `<div><label for="${field.id}">${field.label}:</label>${note}<input type="color" id="${field.id}" name="${field.name}" value="${field.value}" /><label for="${field.id}" style="vertical-align: middle;"></label></div>`;
            }
            
            else if(field.type == "checkbox"){
                var checked = ``;
                if(field.value == true) checked = `checked="checked"`;
                str += `<div><label for="${field.id}" style="display: inline-block; margin-right: 20px;">${field.label}:</label><input type="checkbox" id="${field.id}" name="${field.name}" ${checked}>${note}</div>`;
            }
            
            else if(field.type == "radio"){
                var radios = ``;
                field.options.forEach(function(option){
                    var checked = radios.length ? '' : ' checked="checked"';
                    radios += `
                        <span style="display: block;">
                            <label><input type="radio" id="${field.id}" name="${field.name}" value="${option}" ${checked}> ${option}</label>
                        </span>
                    `;
                    
                });
                
                str += `
                    <div>
                        <label for="${field.id}" style="display: inline-block; margin-right: 20px;">${field.label}:</label>
                        ${note}
                        ${radios}
                    </div>`;
            }
            
            else if(field.type == "range"){
                
                
                str += `<div><label for="${field.id}">${field.label}:</label>${note}<div style="display: flex;"><input type="range" id="${field.id}" name="${field.name}" min="${field.min}" max="${field.max}" step="${field.step}" /><span style="vertical-align: middle;display: inline-block;margin-left: 15px;font-weight: 600;min-width: 35px;text-align: right;"></span></div></div>`
            }
            
            else if(field.type == "onpageposition"){
                
var makeAlignmentGrid = function(name){
    var str = '';
    ["tl", "tc", "tr", "cl", "cc", "cr", "bl", "bc", "br"].forEach(function(a){
        var checked = a == "cc" ? 'checked="checked"' : '';
        var icon = a == "cc" ? s_widgets.helpers.icons.alignCenter : s_widgets.helpers.icons.longarrow_tl;
        
        str += `
        <label class="alignment-position"><input type="radio" data-type="onpage-position" name="${name}" id="alignment-position-${a}" value="${name}-${a}" ${checked}><span>${icon}</span></label>`
    });
    return str;
};
                
                str += `
<div>
    <label>${field.label}:</label>
    ${note}
    <div style="display: grid; grid-template-columns: 40px 40px 40px; grid-template-rows: 40px 40px 40px;">
        ${makeAlignmentGrid(field.name)}
    </div>
</div>`
            }
            
            else {
                str += '<P>UNABLE TO FIND FIELD OF THIS TYPE</P>';
            }
        });
        if(hadFirstFormGroup) str += '</div>';
        
        str += `<div style="text-align: right;"><button id="s-widgets--apply" type="button" class="btn--wt with-text btn btn-lg btn-primary edit" onclick="javascript:window.s_widgets.apply();">Apply Widget</button></div>`;
        document.getElementById('s-widgets--fields').innerHTML = str;
        
        document.querySelectorAll('#s-widgets input[type="color"]').forEach(function(el){
            el.nextSibling.textContent = el.value.toUpperCase();
            el.onchange = function(){
                this.nextSibling.textContent = this.value.toUpperCase();
            };
        });
        
        document.querySelectorAll('#s-widgets input[type="range"]').forEach(function(el){
            // TODO: Find out how to pull the value and write it next to this.
            
            el.nextSibling.textContent = el.value;
            var f = function(){
                this.nextSibling.textContent = this.value;
            };
            el.onchange = f;
            el.oninput = f;
        });
    },
    
    removePanel: function(){
        var orig = document.getElementById('s-widgets');
        if(orig){
            orig.parentNode.removeChild(orig);
        }
    },
    
    getScriptsAndAddPanel: function(){
        // hide variations panel 
        window.s_widgets.helpers.hideVariationsModal();
        
        window.s_widgets.helpers.openVariationJS();
        var pollForCM = setInterval(function(){
            
            // grab code 
            var CMEL = WT.Sizzle('.CodeMirror')[0];
            if(!CMEL) return;
            clearInterval(pollForCM);
            
            var codeMirror = CMEL.CodeMirror;
            var cmDoc = codeMirror.getDoc();
            var curVal = cmDoc.getValue();

            var reg_str = '//!-##([\\w\\-]+)--START##\\n// (.+)';
            var reg = new RegExp(reg_str, 'g');
            var m = curVal.match(reg);
            var o = {};
            if(curVal && m && m.length){
                m.forEach(function(part){
                    var parts = part.match(reg_str);
                    if(parts.length == 3){
                        try {
                            o[ parts[1] ] = JSON.parse( parts[2] );
                        } catch(err){
                            // code has been tampered with
                            o[ parts[1] ] = 'ERROR';
                        }
                    }
                });
            }
            
            WT.Sizzle('.modal-footer button.primary.with-text:contains("Cancel")')[0].click();
            
            // remove variations panel hide on short delay.
            window.s_widgets.helpers.unhideVariationsModal();
            
            window.s_widgets.addPanel(o);
            
        }, 500);
    },
    
    addPanel: function(o){
        
        if(document.getElementById('s-widgets')) return;
        
        // Update the defaults.
        for(var key in o){
            var p = window.s_widgets.types[key];
            if(!p) continue;
            
            p.fromCode = true;
            
            var me = o[key];
            if(p.fields){
                p.fields.forEach(function(field){
                    
                    var fn = field.name;
                    if(typeof me[fn] !== "undefined") field.value = me[fn];
                    
                });
            }
            
        }
        
        // Render the panel 
        var el = document.createElement('div');
        document.body.appendChild(el);
        
        var widgetTypes = '';
        var widgetTypes_pretty = `
        <div class="s-widgets-formgroup" style="display: flex; flex-wrap: wrap;" id="widget-types-graphical-selection">
        <style>
        #s-widgets .hasScrollbar { width: 600px !important; }
        #s-widgets--type { display: none !important; }
        .widget-types-graphical-selection--item { border: 1px rgba(255, 255, 255, .2) solid; border-radius: 10px; margin-top: 15px; flex-basis: 40%; flex-grow: 1; cursor: pointer; }
        .widget-types-graphical-selection--item svg { display: block; margin: auto; }
        .widget-types-graphical-selection--item:nth-child(2n+1) { margin-left: 20px; } 
        .widget-types-graphical-selection--item:hover { background: rgba(255, 255, 255, .1); }
        .widget-types-graphical-selection--item.isComingSoon { pointer-events: none; }
        </style>
        `;
        
        for(var key in s_widgets.types){
            if(s_widgets.types[key].keepHidden) continue;
            
            var comingSoon = s_widgets.types[key].comingSoon ? 'isComingSoon' : '';
            
            widgetTypes += comingSoon ? `` : `<option value="${key}">${s_widgets.types[key].friendlyName}</option>`;
            
            widgetTypes_pretty += `
            <div class="widget-types-graphical-selection--item ${comingSoon}" data-key="${key}">
                <h3 style="text-align: center;background: rgba(255, 255, 255, .2);border-radius: 10px 10px 0 0;color: white;padding: 5px 0;">${s_widgets.types[key].friendlyName}</h3>
                <div style="padding: 0 20px 20px 20px;">
                    <p style="color: white;">${s_widgets.types[key].description}</p>
                    ${s_widgets.helpers.icons[key] || ""}
                </div>
            </div>`;
        }
        
        widgetTypes_pretty += '</div>';
        
        el.outerHTML = `
        <div id="s-widgets">
            <style>
            #s-widgets { position: fixed; height: calc(100% - 174px); top: 119px; width: 100%; transition: width .3s linear; }
            #s-widgets .hasScrollbar { transition: width .3s linear; }
            #s-widgets-close { position: absolute; top: 20px; right: 20px; font-weight: 300; font-size: 20px; line-height: 20px; cursor: pointer; }
            .s-widgets-formgroup { padding-bottom: 20px; margin-bottom: 20px; border-bottom: 1px solid rgba(255, 255, 255, 0.2); }
            #s-widgets label { display: block; font-weight: 300; text-transform: uppercase; }
            #s-widgets input[type="text"], #s-widgets input[type="number"], #s-widgets select, #s-widgets textarea { color: white; width: 100%; height: 30px; padding: 5px; background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, .5); }
            #s-widgets input[type="date"], #s-widgets input[type="time"] { color: white; height: 30px; padding: 5px; background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, .5); margin-right: 10px; }
            #s-widgets input::-webkit-calendar-picker-indicator { filter: invert(1); }
            #s-widgets textarea { min-height: 100px; width: 100% !important; }
            #s-widgets option { background: rgba(0, 0, 0, .9); }
            #s-widgets--fields { position: relative; }
            #s-widgets--fields > div.s-widgets-formgroup { padding: 10px; border: 1px rgba(255, 255, 255, 0.2) solid; position: relative; }
            .s-widgets-formgroup--header { display: inline-block; position: absolute; top: -10px; left: 10px; background: #121a22; font-size: 12px; font-weight: 600; color: rgba(255, 255, 255, 0.2); }
            #s-widgets--fields > div.s-widgets-formgroup > div, #s-widgets--fields > div { margin-bottom: 15px; }
            .s-widgets-fieldnote { margin: 0; font-weight: 300; font-size: 13px; font-style: italic; opacity: .6; }
            .s-widgets-fieldnote+input, .s-widgets-fieldnote+textarea { margin-top: 10px; }
            #s-widgets .hasScrollbar::-webkit-scrollbar { width: 10px; }
            #s-widgets .hasScrollbar::-webkit-scrollbar-track { background: rgba(0, 0, 0, .3);  }
            #s-widgets .hasScrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, .3); }
            #s-widgets .hasScrollbar::-webkit-scrollbar-thumb:hover { background: #555; }
            #s-widgets input[type="color"] { padding: 0; border: 0 none; outline: 0 none; background: none; height: 35px; width: 30px; vertical-align: middle; }
            #s-widgets input[type="color"] + label { margin-left: 10px; display: inline; }
#s-widgets--fields input[type="radio"][data-type="onpage-position"] { display: none; }
#s-widgets--fields input[type="radio"][data-type="onpage-position"]+span {
    display: inline-block;
    height: 30px;
    width: 30px;
    background-color: rgba(255, 255, 255, .04);
    border: 1px rgba(0, 0, 0, .5) solid;
    margin: 0 5px 5px 0;
    cursor: pointer;
}
#s-widgets--fields label.alignment-position { display: inline-block; }
#s-widgets--fields input[type="radio"][data-type="onpage-position"]+span svg { opacity: 0; }
#s-widgets--fields input[type="radio"][data-type="onpage-position"]+span:hover, #s-widgets--fields input[type="radio"][name="onpage-position"]:checked+span { background-color: rgba(255, 255, 255, .1); }
#s-widgets--fields input[type="radio"][data-type="onpage-position"]+span:hover svg, #s-widgets--fields input[type="radio"][data-type="onpage-position"]:checked+span svg { opacity: 1; fill: white; }
#s-widgets--fields #alignment-position-tl + span svg { transform: scale(.5) rotate(0deg); }
#s-widgets--fields #alignment-position-tc + span svg { transform: scale(.5) rotate(45deg); }
#s-widgets--fields #alignment-position-tr + span svg { transform: scale(.5) rotate(90deg); }
#s-widgets--fields #alignment-position-cl + span svg { transform: scale(.5) rotate(-45deg); }
#s-widgets--fields #alignment-position-cc + span svg { transform: scale(.5) }
#s-widgets--fields #alignment-position-cr + span svg { transform: scale(.5) rotate(135deg); }
#s-widgets--fields #alignment-position-bl + span svg { transform: scale(.5) rotate(-90deg); }
#s-widgets--fields #alignment-position-bc + span svg { transform: scale(.5) rotate(-135deg); }
#s-widgets--fields #alignment-position-br + span svg { transform: scale(.5) rotate(180deg); }
            </style>
            <div style="position: relative; height: 100%;">
                <div style="position: absolute; top: 0; left: 0; height: 100%; width: 100%; background: rgba(255, 255, 255, .3);"></div>
                <div class="hasScrollbar" style="position: absolute;top: 0;left: 0;height: 100%;background: #121a22;width: 450px;box-shadow: 0 0 20px rgba(0, 0, 0, .5) inset; padding: 20px; font-size: 14px; color: rgba(255, 255, 255, 0.7); overflow-y: auto;">
                    <h4 class="s-widgets-formgroup">WIDGETS
                    <br><span style="font-size: 12px; line-height: 18px; display: block;">Please note: This is <strong>PREVIEW</strong> functionality. It should be used in caution, on the understanding that it won't be fully functional. Bugs should be fed back to us at your earliest opportunity.</span>
                        <span id="s-widgets-close" onclick="javascript:s_widgets.removePanel();">x</span>
                    </h4>
                    
                    <div class="s-widgets-formgroup">
                        <label for="s-widgets--type">Widget Type:</label>
                        <select id="s-widgets--type" onchange="javascript:window.s_widgets.changeType();">
                            <option selected="selected" style="display: none;"></option>
                            ${widgetTypes}
                        </select>
                        
                        ${widgetTypes_pretty}
                    </div>
                    
                    <div id="s-widgets--fields"></div>
                </div>
            </div>
        </div>
        `;
        
        document.querySelectorAll('.widget-types-graphical-selection--item').forEach(function(el){
            
            el.addEventListener('click', function(){
                var el = this;
                var key = el.getAttribute('data-key');
                document.getElementById('s-widgets--type').value = key;
                
                var container = document.getElementById('widget-types-graphical-selection');
                container.parentNode.removeChild(container);
                
                window.s_widgets.changeType();                
            });
            
        });
    },
    
    apply: function(shouldDelete){
        var sel = 'select, input[type="text"], input[type="number"], input[type="hidden"], input[type="checkbox"], input[type="radio"]:checked, input[type="color"], input[type="range"], textarea';
        var parent = document.getElementById('s-widgets--fields');
        
        var o = {};
        WT.Sizzle(sel, parent).forEach(function(el){
            var nn = el.nodeName.toLowerCase();
            
            if(nn == "input" && el.type == "checkbox"){
                o[ el.name ] = el.checked;
            
            } else if(nn == "input" && el.type == "radio"){
                o[ el.name ] = el.value;
            
            } else {
                o[ el.name ] = el.value.replace(/\n/g, '<br>');
            }
        });
        
        var js_apply = shouldDelete ? '' : s_widgets.types[o.widgetType].js_build(o);
        
        if(o.widgetType !== "custom"){
            s_widgets.helpers.openVariationJS(o, function(){
                setTimeout(function(o){
                    
                    s_widgets.helpers.addVariationJS(js_apply, o.widgetType);
                }, 1000, o);
            });
            
        }
    },
    
    helpers: {    
        hideVariationsModal: function(){
            var id = 'wto-hide-variations-modal';
            if(document.getElementById(id)) return;
            WT.helpers.css.add('.edit-content-modal { display: none !important; }', id);
        },
        
        unhideVariationsModal: function(){
            setTimeout(function(){
                var id = 'wto-hide-variations-modal';
                var el = document.getElementById(id);
                if(!el) return;
                
                el.parentNode.removeChild(el);
            }, 1000);
        },
        
        openVariationJS: function(o, fn){
            // console.log("openVariationJS", o, fn);
            var intvl = setInterval(function(o, fn){
                var el = WT.Sizzle('.actionBar--variations button.primary:contains("Javascript") div')[0];
                if(!el){
                    return;
                }
                clearInterval(intvl);
                
                el.click();
                
                if(o) fn(o);
            }, 500, o, fn);
        },
        
        addVariationJS: function(str, sectionToRemove){
            var codeMirror = WT.Sizzle('.CodeMirror')[0].CodeMirror;
            var cmDoc = codeMirror.getDoc();
            var curVal = cmDoc.getValue();
            
            var reg = new RegExp(`\n//!-##${sectionToRemove}--START##[\n\S\s]+(\n|\S|.){1,}//!-##${sectionToRemove}--END##`, 'ig');
            
            cmDoc.setValue(curVal.replace(reg, ''));
            
            if(str){
                var cursor = cmDoc.getCursor(); // Gets the cursor position in the editor
                var line = cmDoc.getLine(cursor.line);
                cmDoc.replaceRange(str, {line: cmDoc.size,ch: 0}, {line: cmDoc.size,ch: 0});
            } else {
                // remove the widget from view. TODO this after we can more freely run JS. 
            }
            
            setTimeout(function(){
                WT.Sizzle('button.icon-button:contains("Update/Apply")')[0].click();
                
                setTimeout(function(){
                    WT.Sizzle('button.save.btn--wt.modal-footer__button:contains("SAVE")')[0].click();
                    
                    setTimeout(function(){
                        s_widgets.removePanel();
                    }, 1000);
                }, 2000);
            }, 2000);

        },
        
        icons: {
            
            'hello-bar': `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="174" viewBox="0 0 200 174" style="width: 100%; min-height: 200px; fill: white;"><defs><clipPath id="clip-ve-widgets--hellobar"><rect width="200" height="174"></rect></clipPath></defs><g id="ve-widgets--hellobar" clip-path="url(#clip-ve-widgets--hellobar)"><g id="visual-editor" transform="translate(-0.75)"><path id="Path_1" data-name="Path 1" d="M185.533,0H15.967A14.518,14.518,0,0,0,5.185,4.435,14.5,14.5,0,0,0,.75,15.217V158.7a14.518,14.518,0,0,0,4.435,10.783,14.518,14.518,0,0,0,10.783,4.435H185.533A15.142,15.142,0,0,0,200.75,158.7V15.217a14.518,14.518,0,0,0-4.435-10.783A14.5,14.5,0,0,0,185.533,0ZM196.4,158.7a10.626,10.626,0,0,1-10.87,10.87H15.967A10.621,10.621,0,0,1,5.1,158.7V25H196.4Z" transform="translate(0 0)"></path><text id="Save_15_on_our_Black_Friday_deals_" data-name="Save 15% on our Black Friday deals!" transform="translate(49.75 16)" fill="#fff" font-size="6" font-family="Poppins-Regular, Poppins" style="fill: black;"><tspan x="0" y="0">Save 75% on our Black Friday deals!</tspan></text></g><path id="close" d="M23.484,23.112l3.74,3.744-.368.368-3.744-3.74-3.744,3.74L19,26.855l3.74-3.744L19,19.368,19.368,19l3.744,3.74L26.855,19l.368.368Z" transform="translate(164 -10.224)" fill="#fff" style="fill: black;"></path></g></svg>`,
            
            'lightbox-1': `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="174" viewBox="0 0 200 174" style="width: 100%; min-height: 200px; fill: white;"><defs><clipPath id="clip-ve-widgets--lightbox-1"><rect width="200" height="174"></rect></clipPath></defs><g id="ve-widgets--lightbox-1" clip-path="url(#clip-ve-widgets--lightbox-1)"><g id="visual-editor" transform="translate(-0.75)"><path id="Path_2" data-name="Path 2" d="M185.625,0H15.975A14.525,14.525,0,0,0,5.187,4.437,14.512,14.512,0,0,0,.75,15.225v143.55a14.525,14.525,0,0,0,4.437,10.788A14.525,14.525,0,0,0,15.975,174h169.65a15.15,15.15,0,0,0,15.225-15.225V15.225a14.525,14.525,0,0,0-4.437-10.788A14.512,14.512,0,0,0,185.625,0ZM5.1,15.225A10.621,10.621,0,0,1,15.975,4.35H44.25v34.8H5.1Zm191.4,143.55a10.632,10.632,0,0,1-10.875,10.875H15.975A10.626,10.626,0,0,1,5.1,158.775L5.187,39.15H196.413Zm0-119.625H44.25V4.35H185.625A10.626,10.626,0,0,1,196.5,15.225Z" transform="translate(0 0)"></path></g><g id="Rectangle_1" data-name="Rectangle 1" transform="translate(32 52)" fill="#fff" stroke="#707070" stroke-width="1"><rect width="136" height="71" stroke="none"></rect><rect x="0.5" y="0.5" width="135" height="70" fill="none"></rect></g><g id="visual-editor-2" data-name="visual-editor" transform="translate(-0.75 47)" style="fill: black;"><text id="Save_15_on_our_Black_Friday_deals_" data-name="Save 15% on our Black Friday deals!" transform="translate(49.75 16)" font-size="6" font-family="Poppins-Regular, Poppins"><tspan x="0" y="0">Save 15% on our Black Friday deals!</tspan></text></g><path id="close" d="M22.043,21.79l2.537,2.54-.25.25-2.54-2.537L19.25,24.58,19,24.33l2.537-2.54L19,19.25l.25-.25,2.54,2.537L24.33,19l.25.25Z" transform="translate(138 38.776)" style="fill: black;"></path><g id="visual-editor-3" data-name="visual-editor" transform="translate(-0.75 58)" style="fill: black;"><text id="Lorem_ipsum_dolor_sit_amet_consectetur_adipiscing_elit_sed_do_eiusmod_tempor_incididunt_ut_labore_et_dolore_magna_aliqua._Ut_enim_ad_minim_veniam_quis_nostrud_exercitation_ullamco_laboris_nisi_ut_aliquip_ex_ea_commodo_consequat." data-name="Lorem ipsum dolor sit amet, consectetur adipiscing
elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat." transform="translate(100.75 16)" font-size="4" font-family="Poppins-Regular, Poppins"><tspan x="-51.03" y="0">Lorem ipsum dolor sit amet, consectetur adipiscing</tspan><tspan x="-50.104" y="5">elit, sed do eiusmod tempor incididunt ut labore et</tspan><tspan x="-47.942" y="10">dolore magna aliqua. Ut enim ad minim veniam,</tspan><tspan x="-46.864" y="15">quis nostrud exercitation ullamco laboris nisi ut</tspan><tspan x="-35.276" y="20">aliquip ex ea commodo consequat.</tspan></text></g><rect id="Rectangle_2" data-name="Rectangle 2" width="52" height="14" transform="translate(74 102)" style="fill: black;"></rect><g id="visual-editor-4" data-name="visual-editor" transform="translate(-4.75 95)"><text id="See_deals_" data-name="See deals!" transform="translate(89.75 16)" fill="#fff" font-size="6" font-family="Poppins-Regular, Poppins"><tspan x="0" y="0">See deals!</tspan></text></g></g></svg>`,

            'custom': `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="174" viewBox="0 0 200 174" style="width: 100%; min-height: 200px; fill: white;"><defs><clipPath id="clip-ve-widgets--code"><rect width="200" height="174"></rect></clipPath></defs><g id="ve-widgets--code" clip-path="url(#clip-ve-widgets--code)"><g id="visual-editor" transform="translate(-0.75)"><path id="Path_2" data-name="Path 2" d="M185.625,0H15.975A14.525,14.525,0,0,0,5.187,4.437,14.512,14.512,0,0,0,.75,15.225v143.55a14.525,14.525,0,0,0,4.437,10.788A14.525,14.525,0,0,0,15.975,174h169.65a15.15,15.15,0,0,0,15.225-15.225V15.225a14.525,14.525,0,0,0-4.437-10.788A14.512,14.512,0,0,0,185.625,0ZM5.1,15.225A10.621,10.621,0,0,1,15.975,4.35H44.25v34.8H5.1Zm191.4,143.55a10.632,10.632,0,0,1-10.875,10.875H15.975A10.626,10.626,0,0,1,5.1,158.775L5.187,39.15H196.413Zm0-119.625H44.25V4.35H185.625A10.626,10.626,0,0,1,196.5,15.225Z" transform="translate(0 0)" fill="#fff"></path></g><path id="code-curlybraces" d="M128,40.133a11.208,11.208,0,0,0,4.434-.9,11,11,0,0,0,3.628-2.464,12.772,12.772,0,0,0,2.464-3.628,10.656,10.656,0,0,0,.941-4.479q0-3.18-.134-6.36a42.263,42.263,0,0,1,.179-6.181,22.482,22.482,0,0,1,1.433-5.868,14.945,14.945,0,0,1,3.539-5.241,16.848,16.848,0,0,1,5.6-3.718A17.255,17.255,0,0,1,156.667,0V5.733a11,11,0,0,0-4.434.9A11.653,11.653,0,0,0,148.6,9.093a11.513,11.513,0,0,0-2.464,3.673A11.8,11.8,0,0,0,145.2,17.2q0,2.508.09,4.927t.045,4.793a28.206,28.206,0,0,1-.448,4.569,23.1,23.1,0,0,1-1.209,4.255,13.558,13.558,0,0,1-2.329,3.852,20.384,20.384,0,0,1-3.807,3.4,17.053,17.053,0,0,1,3.807,3.4,16.172,16.172,0,0,1,2.329,3.852,18.411,18.411,0,0,1,1.209,4.21,32.092,32.092,0,0,1,.4,4.569q.045,2.374,0,4.793T145.2,68.8a11,11,0,0,0,.9,4.434,11.612,11.612,0,0,0,10.571,7.032V86a17.255,17.255,0,0,1-6.584-1.3,16.848,16.848,0,0,1-5.6-3.718,14.936,14.936,0,0,1-3.494-5.241,24.431,24.431,0,0,1-1.433-5.823,38.831,38.831,0,0,1-.224-6.226q.134-3.225.134-6.36a11.208,11.208,0,0,0-.9-4.434,11,11,0,0,0-2.464-3.628,12.586,12.586,0,0,0-3.673-2.464A10.75,10.75,0,0,0,128,45.867ZM179.6,0a17.255,17.255,0,0,1,6.584,1.3,16.848,16.848,0,0,1,5.6,3.718,14.936,14.936,0,0,1,3.494,5.241,24.433,24.433,0,0,1,1.433,5.823,38.831,38.831,0,0,1,.224,6.226q-.134,3.225-.134,6.36a11,11,0,0,0,.9,4.434,11.612,11.612,0,0,0,10.571,7.032v5.733a11,11,0,0,0-4.434.9,11.653,11.653,0,0,0-3.628,2.464,11.513,11.513,0,0,0-2.464,3.673,11.8,11.8,0,0,0-.941,4.434q0,3.18.134,6.36a42.266,42.266,0,0,1-.179,6.181,22.482,22.482,0,0,1-1.433,5.868,14.944,14.944,0,0,1-3.539,5.241,16.848,16.848,0,0,1-5.6,3.718A17.255,17.255,0,0,1,179.6,86V80.267a11.208,11.208,0,0,0,4.434-.9,11,11,0,0,0,3.628-2.464,12.771,12.771,0,0,0,2.464-3.628,10.656,10.656,0,0,0,.941-4.479q0-2.508-.09-4.927t-.045-4.793a28.206,28.206,0,0,1,.448-4.569,23.1,23.1,0,0,1,1.209-4.255,13.558,13.558,0,0,1,2.329-3.852,20.384,20.384,0,0,1,3.807-3.4,17.053,17.053,0,0,1-3.807-3.4,16.173,16.173,0,0,1-2.329-3.852,18.41,18.41,0,0,1-1.209-4.21,32.092,32.092,0,0,1-.4-4.569q-.045-2.374,0-4.793t.09-4.972a11.208,11.208,0,0,0-.9-4.434,11,11,0,0,0-2.464-3.628,12.586,12.586,0,0,0-3.673-2.464,10.75,10.75,0,0,0-4.434-.941Z" transform="translate(-68 44)" fill="#fff"></path></g></svg>`,
            
            'lower-corner-promo': `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="174" viewBox="0 0 200 174">
  <defs>
    <clipPath id="clip-LOWER-CORNER-OFFER">
      <rect width="200" height="174"/>
    </clipPath>
  </defs>
  <g id="LOWER-CORNER-OFFER" clip-path="url(#clip-LOWER-CORNER-OFFER)">
    <g id="visual-editor" transform="translate(-0.75)">
      <path id="Path_2" data-name="Path 2" d="M185.625,0H15.975A14.525,14.525,0,0,0,5.187,4.437,14.512,14.512,0,0,0,.75,15.225v143.55a14.525,14.525,0,0,0,4.437,10.788A14.525,14.525,0,0,0,15.975,174h169.65a15.15,15.15,0,0,0,15.225-15.225V15.225a14.525,14.525,0,0,0-4.437-10.788A14.512,14.512,0,0,0,185.625,0ZM5.1,15.225A10.621,10.621,0,0,1,15.975,4.35H44.25v34.8H5.1Zm191.4,143.55a10.632,10.632,0,0,1-10.875,10.875H15.975A10.626,10.626,0,0,1,5.1,158.775L5.187,39.15H196.413Zm0-119.625H44.25V4.35H185.625A10.626,10.626,0,0,1,196.5,15.225Z" transform="translate(0 0)" fill="#fff"/>
    </g>
    <rect id="Rectangle_3" data-name="Rectangle 3" width="58" height="73" rx="3" transform="translate(4 98)" fill="#fff"/>
    <rect id="Rectangle_4" data-name="Rectangle 4" width="55" height="28" transform="translate(6 99)" fill="#d5d5d5"/>
    <path id="image-diff" d="M57.451,0V29.5H0V0ZM1.589,13.764H32.614L16.158,4.714Zm48.869,0L39.5,7.688,31.6,12.4l3.271,1.364ZM3.091,28.16l31.409.37L16.158,18.279Zm33.3.37H51.329L39.5,21.325l-7.9,4.5Zm19.474-13.8H1.589V28.16L16.158,17.3l14.363,7.865L39.5,20.232l13.325,8.3h3.037Zm0-.966V.97H1.589V12.4L16.158,3.533,30.521,11.4,39.5,6.467l13.325,7.3Z" transform="translate(4.561 98)"/>
    <path id="Path_3" data-name="Path 3" d="M0,0H57.55V42H0Z" transform="translate(4.55 127.55)" fill="#f2e2ef"/>
    <text id="A_GREAT_DEAL_FOR_YOU" data-name="A GREAT DEAL
FOR YOU" transform="translate(9 136)" fill="#71015e" font-size="5" font-family="Arial-Black, Arial" font-weight="800"><tspan x="0" y="0">A GREAT DEAL</tspan><tspan x="0" y="8">FOR YOU</tspan></text>
    <text id="Free_delivery_on_all_orders_over_20" data-name="Free delivery on all orders over £20" transform="translate(9 150)" font-size="3" font-family="ArialMT, Arial"><tspan x="0" y="0">Free delivery on all orders over £20</tspan></text>
    <rect id="Rectangle_5" data-name="Rectangle 5" width="32" height="8" transform="translate(9 154)" fill="#b46ea8"/>
    <text id="SHOW_MY_OFFER" data-name="SHOW MY OFFER" transform="translate(12 159)" fill="#fff" font-size="3" font-family="ArialMT, Arial"><tspan x="0" y="0">SHOW MY OFFER</tspan></text>
  </g>
</svg>
            `,
            
            'lower-corner-countdown': `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="174" viewBox="0 0 200 174">
  <defs>
    <clipPath id="clip-LOWER-CORNER-COUNTDOWN">
      <rect width="200" height="174"/>
    </clipPath>
  </defs>
  <g id="LOWER-CORNER-COUNTDOWN" clip-path="url(#clip-LOWER-CORNER-COUNTDOWN)">
    <g id="visual-editor" transform="translate(-0.75)">
      <path id="Path_2" data-name="Path 2" d="M185.625,0H15.975A14.525,14.525,0,0,0,5.187,4.437,14.512,14.512,0,0,0,.75,15.225v143.55a14.525,14.525,0,0,0,4.437,10.788A14.525,14.525,0,0,0,15.975,174h169.65a15.15,15.15,0,0,0,15.225-15.225V15.225a14.525,14.525,0,0,0-4.437-10.788A14.512,14.512,0,0,0,185.625,0ZM5.1,15.225A10.621,10.621,0,0,1,15.975,4.35H44.25v34.8H5.1Zm191.4,143.55a10.632,10.632,0,0,1-10.875,10.875H15.975A10.626,10.626,0,0,1,5.1,158.775L5.187,39.15H196.413Zm0-119.625H44.25V4.35H185.625A10.626,10.626,0,0,1,196.5,15.225Z" transform="translate(0 0)" fill="#fff"/>
    </g>
    <rect id="Rectangle_4" data-name="Rectangle 4" width="58" height="19" transform="translate(4.38 108)" fill="#2a0023"/>
    <path id="Path_3" data-name="Path 3" d="M0,0H58V42.55H0Z" transform="translate(4.38 127)" fill="#f2e2ef"/>
    <text id="OUR_BIG_SALE_IS_NOW_ON." data-name="OUR BIG SALE
IS NOW ON." transform="translate(9 136)" fill="#71015e" font-size="5" font-family="Arial-Black, Arial" font-weight="800"><tspan x="0" y="0">OUR BIG SALE</tspan><tspan x="0" y="8">IS NOW ON.</tspan></text>
    <text id="Free_delivery_on_all_orders_over_20" data-name="Free delivery on all orders over £20" transform="translate(9 150)" font-size="3" font-family="ArialMT, Arial"><tspan x="0" y="0">Free delivery on all orders over £20</tspan></text>
    <rect id="Rectangle_5" data-name="Rectangle 5" width="32" height="8" transform="translate(9 154)" fill="#b46ea8"/>
    <text id="SHOW_MY_OFFER" data-name="SHOW MY OFFER" transform="translate(12 159)" fill="#fff" font-size="3" font-family="ArialMT, Arial"><tspan x="0" y="0">SHOW MY OFFER</tspan></text>
    <text id="_01:00:50" data-name="01:00:50" transform="translate(33 120)" fill="#fff" font-size="11" font-family="Consolas-Bold, Consolas" font-weight="700" letter-spacing="0.024em"><tspan x="-25.115" y="0">01:00:50</tspan></text>
    <text id="HOURS" transform="translate(14 124)" fill="#fff" font-size="3" font-family="Consolas-Bold, Consolas" font-weight="700" letter-spacing="0.024em" opacity="0.4"><tspan x="-4.268" y="0">HOURS</tspan></text>
    <text id="MINUTES" transform="translate(33 124)" fill="#fff" font-size="3" font-family="Consolas-Bold, Consolas" font-weight="700" letter-spacing="0.024em" opacity="0.4"><tspan x="-5.989" y="0">MINUTES</tspan></text>
    <text id="SECONDS" transform="translate(52 124)" fill="#fff" font-size="3" font-family="Consolas-Bold, Consolas" font-weight="700" letter-spacing="0.024em" opacity="0.4"><tspan x="-5.989" y="0">SECONDS</tspan></text>
  </g>
</svg>
            `,
            
            "hello-bar-with-countdown": `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="174" viewBox="0 0 200 174">
  <defs>
    <clipPath id="clip-ve-widgets--hellobar-countdown">
      <rect width="200" height="174"/>
    </clipPath>
  </defs>
  <g id="ve-widgets--hellobar-countdown" clip-path="url(#clip-ve-widgets--hellobar-countdown)">
    <path id="Path_1" data-name="Path 1" d="M185.533,0H15.967A14.518,14.518,0,0,0,5.185,4.435,14.5,14.5,0,0,0,.75,15.217V158.7a14.518,14.518,0,0,0,4.435,10.783,14.518,14.518,0,0,0,10.783,4.435H185.533A15.142,15.142,0,0,0,200.75,158.7V15.217a14.518,14.518,0,0,0-4.435-10.783A14.5,14.5,0,0,0,185.533,0ZM196.4,158.7a10.626,10.626,0,0,1-10.87,10.87H15.967A10.621,10.621,0,0,1,5.1,158.7V25H196.4Z" transform="translate(-0.75 0)" fill="#fff"/>
    <text id="Save_15_on_our_Black_Friday_deals_" data-name="Save 15% on our Black Friday deals!" transform="translate(77 16)" font-size="6" font-family="Poppins-Regular, Poppins"><tspan x="0" y="0">Save 15% on our Black Friday deals!</tspan></text>
    <path id="close" d="M23.484,23.112l3.74,3.744-.368.368-3.744-3.74-3.744,3.74L19,26.855l3.74-3.744L19,19.368,19.368,19l3.744,3.74L26.855,19l.368.368Z" transform="translate(164 -10.224)" fill="#fff"/>
    <text id="_01:59:59" data-name="01:59:59" transform="translate(23 16)" font-size="6" font-family="Poppins-Bold, Poppins" font-weight="700"><tspan x="0" y="0">01:59:59</tspan></text>
  </g>
</svg>
`,
            
            longarrow_tl: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" class="svg_eb2f14dd"><path d="M1939 2029L128 219v933H0V0h1152v128H219l1810 1811-90 90z"></path></svg>`,
            alignCenter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" class="svg_eb2f14dd"><path d="M0 128h2048v128H0V128zm256 384h1536v128H256V512zm0 768h1536v128H256v-128zM0 1792v-128h2048v128H0zm0-768V896h2048v128H0z"></path></svg>`,
            
            dblQuoteRight: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 875 2048" class="svg_eb2f14dd"><path d="M0 66h332v343q0 51-7 105t-23 104-41 96-62 78-84 53T5 865V708q37 0 64-14t47-38 30-55 18-64 9-66 3-62H0V66zm875 0v343q0 78-16 159t-54 147-100 108-157 42V708q55 0 89-30t53-76 25-98 7-95H546V66h329z"></path></svg>`,
            dblQuoteLeft: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 875 2048" class="svg_eb2f14dd" style="transform: rotateY(180deg);"><path d="M0 66h332v343q0 51-7 105t-23 104-41 96-62 78-84 53T5 865V708q37 0 64-14t47-38 30-55 18-64 9-66 3-62H0V66zm875 0v343q0 78-16 159t-54 147-100 108-157 42V708q55 0 89-30t53-76 25-98 7-95H546V66h329z"></path></svg>`
            
        },
        
        scripts: {
            exitIntent: `var onExitIntent=function(o){var e,r=!1;navigator.userAgent.match( new RegExp('Trident|MSIE|Edge/', 'i') )&&((e=Element.prototype).matches||(Element.prototype.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;0<=--n&&t.item(n)!==this;);return-1<n}),document.addEventListener("focus",function(e){e.target&&e.target.matches("select")&&(r=!0)},!0),document.addEventListener("blur",function(e){e.target&&e.target.matches("select")&&(r=!1)},!0)),document.onmouseout=function(e){var t,n;(t=(e=null!=e?e:{e:window.event}).relatedTarget||e.toElement)&&"HTML"!==t.nodeName||(n=e.clientY||e.pageY,(!navigator.userAgent.match(/firefox|chrome/i)||navigator.userAgent.match(new RegExp('Edge/', 'i'))&&0===e.buttons)&&(n=0),n<10&&!r&&o())}};`
        }
    }
};

window.addEventListener("wt-statechange", function(e) {
    
    e = e.detail;
    
    // console.log('VE Widgets - e: ', e);
    
    if(e.type == "state" && e.place == "ve" && e.state == "edit-variation-opened"){
        s_widgets.removePanel();

        function makeChange(){
            
            console.log('VE Widgets - Apply widgets to the action bar');
            
            var el = WT.Sizzle('.actionBar--variations .actionBar__item:contains("CSS")');
            if(!el){
                setTimeout(makeChange, 100); return;
            }
            
            if(document.getElementById('s-widgets-launch')) return;
            
            var newel = document.createElement('div');

            var el = WT.Sizzle('.actionBar--variations .actionBar__item:contains("CSS")')[0];
            el.insertAdjacentElement('beforeBegin', newel);

            newel.outerHTML = `<div id="s-widgets-launch" class="actionBar__item flex--content-around col-xs-2"><span class="bar-item flex-set flex--row flex--align-items-center"><button type="button" class="primary with-text btn btn-link" onclick="javascript:s_widgets.getScriptsAndAddPanel();"><div class="svg-wrapper__css icon bar-item__icon"><svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style="height: 18px;"><path fill="currentColor" d="M528.55 171.5l-146.37-21.3-65.43-132.39c-11.72-23.7-45.68-23.8-57.5 0L193.82 150.2 47.45 171.4c-26.25 3.8-36.77 36.1-17.73 54.6l105.9 103-25.05 145.46c-4.51 26.1 23 46 46.49 33.7L288 439.57l130.94 68.69c23.35 12.3 51-7.5 46.49-33.7l-25.05-145.48 105.9-103c19-18.48 8.52-50.78-17.73-54.58zM288 392a40 40 0 1 1 40.07-40A40 40 0 0 1 288 392zm40.17-223.38l-8 112a8 8 0 0 1-8 7.4h-48.11a8 8 0 0 1-8-7.4l-8-112a8 8 0 0 1 7.39-8.58H320.19a8 8 0 0 1 8 8v.63z" class="fa-secondary"></path></svg></div><div class="bar-item__title">Widgets</div></button></span></div>`;
            
        }
        makeChange();
    }
    
    if(e.state == 'edit-variation-closed'){
        s_widgets.removePanel();
    }
    
});
