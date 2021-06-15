'widget 15': {
    friendlyName: 'Widget 15',
    description: 'Scratch game promo',
    fields: [
        'BACKGROUND COLOUR',
        { type: 'color', id: 'bgcol', name: 'bgcol', label: 'Background Colour', value: '#ebbcf3'},
        'HEADER',
        { type: 'text', id: 'headertxt', name: 'headertxt', label: 'Header Text', value: 'SCRATCH & WIN 30% OFF' },
        { type: 'color', id: 'headercol', name: 'headercol', label: 'Header Colour', value: '#ffff00' },
        { type: 'text', id: 'headerfontsize', name: 'headerfontsize', label: 'Header Font Size', value: '34px' },
        'CONTENT',
        { type: 'text', id: 'contxt', name: 'contxt', label: 'Content Text', value: 'Company name or logo' },
        { type: 'color', id: 'concol', name: 'concol', label: 'Content Colour', value: '#000000' },
        { type: 'text', id: 'confontsize', name: 'confontsize', label: 'Content Font Size', value: '18px' },
        { type: 'color', id: 'conbgcol', name: 'conbgcol', label: 'Content Background Colour', value: '#ffffff' },
        'BOTTOM TEXT',
        { type: 'text', id: 'bottxt', name: 'bottxt', label: 'Bottom Content Text', value: 'Scratch Picture' },
        { type: 'color', id: 'botcol', name: 'botcol', label: 'Bottom Content Colour', value: '#000000' },
        { type: 'text', id: 'botfontsize', name: 'botfontsize', label: 'Bottom Content Font Size', value: '30px' },
        { type: 'color', id: 'botbgcol', name: 'botbgcol', label: ' Bottom Content Background Colour', value: '#00b3ff' },
        'PROMO CODE',
        { type: 'text', id: 'promocodetxt', name: 'promocodetxt', label: 'Promo Code', value: 'STORE210' },
        { type: 'color', id: 'promocodecol', name: 'promocodecol', label: 'Promo Code Text Colour', value: '#000000' },
        { type: 'text', id: 'promocodefontsize', name: 'promocodefontsize', label: 'Promo Code Font Size', value: '50px' },
        { type: 'color', id: 'promocodebgcol', name: 'promocodebgcol', label: 'Promo Code Background Colour', value: '#9EE2FF' },
        'PROMO HEADER',
        { type: 'text', id: 'promoheadtxt', name: 'promoheadtxt', label: 'Promo Header Text', value: 'The secret code is:' },
        { type: 'color', id: 'promoheadcol', name: 'promoheadcol', label: 'Promo Header Text Colour', value: '#000000' },
        { type: 'text', id: 'promoheadfontsize', name: 'promoheadfontsize', label: 'Promo Header Font Size', value: '33px' },
        'EMAIL BORDER COLOUR',
        { type: 'color', id: 'emborcol', name: 'emborcol', label: 'Email Border Colour', value: '#ffff00' },
        'SCRATCH BORDER COLOUR',
        { type: 'color', id: 'scborcol', name: 'scborcol', label: 'Scratch Border Colour', value: '#2b2bf9' }
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
    conbgcol: '${widget.conbgcol}', // content background colour 
    botfontsize: '${widget.botfontsize}', //  bottom content font size  
    bottxt: '${widget.bottxt.replace('\'', '\\\'')}', // bottom content txt
    botcol: '${widget.botcol}', // bottom content colour 
    botbgcol: '${widget.botbgcol}', // botttom content background colour 
    promocodefontsize: '${widget.promocodefontsize}', //  promo code font size  
    promocodetxt: '${widget.promocodetxt.replace('\'', '\\\'')}', // promo code txt
    promocodecol: '${widget.promocodecol}', // promo code colour 
    promocodebgcol: '${widget.promocodebgcol}', // promo code background colour 
    promoheadfontsize: '${widget.promoheadfontsize}', //  promo header font size  
    promoheadtxt: '${widget.promoheadtxt.replace('\'', '\\\'')}', // promo headet txt
    promoheadcol: '${widget.promoheadcol}', // promo header colour 
    emborcol: '${widget.emborcol}', // email border colour 
    scborcol: '${widget.scborcol}', // scratch border colour 
    bgcol: '${widget.bgcol}' // background colour   
  };
  var elid = 'wto-widget--footerpromo--${uniqueID}';
  // Remove if exists - ensures no duplicates
  document.querySelectorAll('.wto-widget--footerpromo').forEach(function(node){
  node.parentNode.removeChild(node);
  });
  var css={add:function(c, id){if(c instanceof Array){c=c.join(' ')}var a=document.getElementsByTagName("head")[0],b=document.createElement('style');b.type="text/css";if(id){b.id=id;}if(b.styleSheet){b.styleSheet.cssText=c}else{b.appendChild(document.createTextNode(c))}a.appendChild(b)}, del:function(id){var el=document.getElementById(id); if(el){el.parentNode.removeChild(el)}}};
  css.add([
    ".wto-widget--scratchpromo { position: fixed; top: 88px; left: 443px; width: 613px; height: 355px; margin: 12px; padding: 20px; border: 3px solid #000000; border-radius: 15px; box-sizing: unset; z-index: 9999; background-color: "+ settings.bgcol +"; }",
    ".wto-header { font-size: "+ settings.headerfontsize +"; font-family: Gerogia; font-weight: bold; line-height: 1.3; letter-spacing: .5; position: inherit; left: 776px; margin: 10px; padding: 10px; width: 301px; text-align: center; color: "+ settings.headercol +"; text-shadow: 3px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 4px 1px 0 #000; }",
    ".wto_closebtn_not { float: right; font-size: 29px; margin-top: -8px; line-height: 20px; cursor: pointer; transition: 0.3s; z-index: 9999; }",
    ".wto-bottomcontent { font-size: "+ settings.botfontsize +"; font-family: Gerogia; font-weight: bold; line-height: 1; letter-spacing: 0; position: inherit; left: 800px; top: 424px; margin: 5px; padding: 10px; color: "+ settings.botcol +"; background-color: "+ settings.botbgcol +"; border-radius: 24px; width: 265px; text-align: center; }",
    "#email { border-radius: 8px; position: inherit; left: 807px; top: 354px; height: 40px; width: 265px; border: 6px solid "+ settings.emborcol +"; box-sizing: unset; margin: 0; padding: 2px; font-size: 15px; font-family: sans-serif; text-align: center; }",
    ".wto_content { position: inherit; left: 810px; top: 265px; text-align: center; margin: 0; padding: 15px; background-color: "+ settings.conbgcol +"; color: "+ settings.concol +"; font-size: "+ settings.confontsize +"; font-family: Gerogia; line-height: 1.4; letter-spacing: 0.3; width: 248px; }",
    " #bridge { display: block; margin: 0 auto; background-size: cover; width: 300px; max-width: 300px; height: auto; cursor: crosshair; position: inherit; border: 5px solid "+ settings.scborcol +"; border-radius: 6px; margin-top: 22px; z-index: 9999; }",
    "h1 { font-size: "+ settings.promoheadfontsize +"; font-family: Gerogia; font-weight: bold; line-height: 1; letter-spacing: 0; margin: 0; padding: 0; color: "+ settings.promoheadcol +"; width: 265px; text-align: center; margin-top: 99px; margin-left: 20px; }",
    "h2 { font-size: "+ settings.promocodefontsize +"; font-family: Gerogia; font-weight: bold; line-height: 1; letter-spacing: 0; margin: 0; padding: 9px; color: "+ settings.promocodecol +"; background: "+ settings.promocodebgcol +"; border-radius: 7px; width: 245px; text-align: center; margin-top: 59px; margin-left: 21px; position: fixed; }"
]);
  
  var body = document.getElementsByTagName('body')[0];
  var el = document.createElement('div');
  body.insertAdjacentElement('afterBegin', el);
  var elhtml = '\<div id="'+ elid +'"  class="wto-widget--scratchpromo">\
  <span class="wto_closebtn_not">&times;</span>\
  <div class="wto-header">'+ settings.headertxt +'</div>\
  <div class="wto_content">'+ settings.contxt +'</div>\
  <input type="email" id="email" placeholder="Enter email" name="email">\
  <div class="wto-bottomcontent">'+ settings.bottxt +'</div>\
  <canvas id="bridge" width="300" height="300"></canvas>\
  <form class="form">\
      <h1>'+ settings.promoheadtxt +'</h1>\
      <h2><code>'+ settings.promocodetxt +'</code></h2>\
    </form>\
  </div>\
  ';
  el.outerHTML = elhtml;
    var bridge = document.getElementById("bridge"),
    bridgeCanvas = bridge.getContext('2d'),
    brushRadius = (bridge.width / 100) * 5,
    img = new Image();
    if (brushRadius < 50) { 
      brushRadius = 50 
    }

    img.onload = function(){  
        bridgeCanvas.drawImage(img, 0, 0, bridge.width, bridge.height);
    }

    img.loc = '';
     img.filename = 'https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/greybg_1.jpg';
    if (window.devicePixelRatio >= 2) {
        var nameParts = img.filename.split('.');
        img.src = img.loc + nameParts[0]+"-2x"+"."+nameParts[1];
    }   
    else {
        img.src = img.loc + img.filename;
    }

    bridge.addEventListener("mousemove", function(e) {
    var brushPos = getBrushPos(e.clientX, e.clientY);
    var leftBut = detectLeftButton(e);
    if (leftBut == 1) {
        drawDot(brushPos.x, brushPos.y);
        }
    }, false);

    bridge.addEventListener("touchmove", function(e) {
        e.preventDefault();
        var touch = e.targetTouches[0];
        if (touch) {
            var brushPos = getBrushPos(touch.pageX, touch.pageY);
            drawDot(brushPos.x, brushPos.y);
        }
    }, false);

    function detectLeftButton(event) {
        if ('buttons' in event) {
            return event.buttons === 1;
        } 
        else if ('which' in event) {
            return event.which === 1;
        } 
        else {
            return event.button === 1;
        }
    }

    function getBrushPos(xRef, yRef) {
        var bridgeRect = bridge.getBoundingClientRect();
        return {
            x: Math.floor((xRef - bridgeRect.left) / (bridgeRect.right - bridgeRect.left) * bridge.width),
            y: Math.floor((yRef - bridgeRect.top) / (bridgeRect.bottom - bridgeRect.top) * bridge.height)
        };
    }

    function drawDot(mouseX,mouseY) {
        bridgeCanvas.beginPath();
        bridgeCanvas.arc(mouseX, mouseY, brushRadius, 0, 2*Math.PI, true);
        bridgeCanvas.fillStyle = '#000';
        bridgeCanvas.globalCompositeOperation = "destination-out";
        bridgeCanvas.fill();
    }

  })();
  //!-##${widget.widgetType}--END##`;
                
                return str;
            }
        },