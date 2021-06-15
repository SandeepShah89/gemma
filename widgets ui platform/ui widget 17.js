'widget 17': {
    friendlyName: 'Widget 17',
    description: 'VIP sign up 3 step',
    fields: [
        "SAME FOR ALL",
        { type: 'color', id: 'headercol', name: 'headercol', label: 'Header Colour', value: '#3030a2' },
        { type: 'text', id: 'headerfontsize', name: 'headerfontsize', label: 'Header Font Size', value: '30px' },
        { type: 'color', id: 'concol', name: 'concol', label: 'Content Colour', value: '#3030a2' },
        { type: 'text', id: 'confontsize', name: 'confontsize', label: 'Content Font Size', value: '19px' },
        { type: 'color', id: 'bgcol', name: 'bgcol', label: 'Background Colour', value: '#ffffff'},
        { type: 'color', id: 'borcol', name: 'borcol', label: 'Border Colour', value: '#ffffff'},
        "STEP 1",
        'HEADER',
        { type: 'text', id: 'headertxt1', name: 'headertxt1', label: 'Header Text', value: 'Join our VIP Club!' },
        'CONTENT',
        { type: 'text', id: 'contxt1', name: 'contxt1', label: 'Content Text', value: 'Company content & information' },
        "YES BUTTON",
        { type: 'text', id: 'yesbtntxt', name: 'yesbtntxt', label: 'Button Text', value: 'YES' },
        { type: 'color', id: 'yesbtntxtcol', name: 'yesbtntxtcol', label: 'Button Text Colour', value: '#FFFFFF' },
        { type: 'color', id: 'yesbtnbgcol', name: 'yesbtnbgcol', label: 'Button Background Colour', value: '#3030a2' },
        { type: 'text', id: 'yesbtnfontsize', name: 'yesbtnfontsize', label: 'Button Font Size', value: '25px' },
        { type: 'text', id: 'yesbtnsmltxt', name: 'yesbtnsmltxt', label: 'Button Small Text', value: 'I want to become a VIP member!' },
        { type: 'text', id: 'yesbtnsmlfontsize', name: 'yesbtnsmlfontsize', label: 'Button Small Text Font Size', value: '8px' },
        "NO BUTTON",
        { type: 'text', id: 'nobtntxt', name: 'nobtntxt', label: 'Button Text', value: 'NO' },
        { type: 'color', id: 'nobtntxtcol', name: 'nobtntxtcol', label: 'Button Text Colour', value: '#3030a2' },
        { type: 'color', id: 'nobtnbgcol', name: 'nobtnbgcol', label: 'Button Background Colour', value: '#FFFFFF' },
        { type: 'text', id: 'nobtnfontsize', name: 'nobtnfontsize', label: 'Button Font Size', value: '25px' },
        { type: 'text', id: 'nobtnsmltxt', name: 'nobtnsmltxt', label: 'Button Small Text', value: 'Not right now thanks!' },
        { type: 'text', id: 'nobtnsmlfontsize', name: 'nobtnsmlfontsize', label: 'Button Small Text Font Size', value: '8px' },
        "STEP 2",
        'HEADER',
        { type: 'text', id: 'headertxt2', name: 'headertxt2', label: 'Header Text', value: 'Enter your email' },
        'CONTENT',
        { type: 'text', id: 'contxt2', name: 'contxt2', label: 'Content Text', value: 'Company content & information' },
        "JOIN NOW BUTTON",
        { type: 'text', id: 'jnbtntxt', name: 'jnbtntxt', label: 'Button Text', value: 'Join now' },
        { type: 'color', id: 'jnbtntxtcol', name: 'jnbtntxtcol', label: 'Button Text Colour', value: '#FFFFFF' },
        { type: 'color', id: 'jnbtnbgcol', name: 'jnbtnbgcol', label: 'Button Background Colour', value: '#3030a2' },
        { type: 'text', id: 'jnbtnfontsize', name: 'jnbtnfontsize', label: 'Button Font Size', value: '23px' },
        "INPUT BORDER COLOUR",
        { type: 'color', id: 'inborcol', name: 'inborcol', label: 'Input Border Colour', value: '#3030a2' },
        "STEP 3",
        'HEADER',
        { type: 'text', id: 'headertxt3', name: 'headertxt3', label: 'Header Text', value: 'Welcome to the VIP!' },
        'CONTENT',
        { type: 'text', id: 'contxt3', name: 'contxt3', label: 'Content Text', value: 'Company content & information' },
        'EXTRA CONTENT',
        { type: 'text', id: 'xrcontxt', name: 'xrcontxt', label: 'Extra Content Text', value: 'More information of VIP stuff' },
        { type: 'text', id: 'xrconfontsize', name: 'xrconfontsize', label: 'Extra Content Font Size', value: '14px' },
        "JOIN NOW BUTTON",
        { type: 'text', id: 'morebtntxt', name: 'morebtntxt', label: 'Button Text', value: 'Ill have a look' },
        { type: 'color', id: 'morebtntxtcol', name: 'morebtntxtcol', label: 'Button Text Colour', value: '#FFFFFF' },
        { type: 'color', id: 'morebtnbgcol', name: 'morebtnbgcol', label: 'Button Background Colour', value: '#3030a2' },
        { type: 'text', id: 'morebtnfontsize', name: 'morebtnfontsize', label: 'Button Font Size', value: '15px' }
    ],
  
    js_build: function(widget){
        var uniqueID = Date.now();
        var str = `
        
  //!-##${widget.widgetType}--START##
  // ${JSON.stringify(widget)}
  (function(){
  var settings = {
    bgcol: '${widget.bgcol}', // background colour
    borcol: '${widget.borcol}', // border colour
    headercol: '${widget.headercol}', // header colour 
    headerfontsize: '${widget.headerfontsize}', // header font size  
    concol: '${widget.concol}', // content colour 
    confontsize: '${widget.confontsize}', // content font size 
    headertxt1: '${widget.headertxt1.replace('\'', '\\\'')}', // header 1 txt
    contxt1: '${widget.contxt1.replace('\'', '\\\'')}', // content 1 txt
    yesbtntxt: '${widget.yesbtntxt.replace('\'', '\\\'')}', // yes button txt
    yesbtntxtcol: '${widget.yesbtntxtcol}', // button txt colour
    yesbtnbgcol: '${widget.yesbtnbgcol}', // button background colour
    yesbtnfontsize: '${widget.yesbtnfontsize}', // button font size
    yesbtnsmltxt: '${widget.yesbtnsmltxt.replace('\'', '\\\'')}', // yes button smaller txt
    yesbtnsmlfontsize: '${widget.yesbtnsmlfontsize}', // button smaller text font size
    nobtntxt: '${widget.nobtntxt.replace('\'', '\\\'')}', // no button txt
    nobtntxtcol: '${widget.nobtntxtcol}', // button txt colour
    nobtnbgcol: '${widget.nobtnbgcol}', // button background colour
    nobtnfontsize: '${widget.nobtnfontsize}', // button font size
    nobtnsmltxt: '${widget.nobtnsmltxt.replace('\'', '\\\'')}', // no button smaller txt
    nobtnsmlfontsize: '${widget.nobtnsmlfontsize}', // button smaller text font size
    headertxt2: '${widget.headertxt2.replace('\'', '\\\'')}', // header 2 txt
    contxt2: '${widget.contxt2.replace('\'', '\\\'')}', // content 2 txt
    jnbtntxt: '${widget.jnbtntxt.replace('\'', '\\\'')}', // join button txt
    jnbtntxtcol: '${widget.jnbtntxtcol}', // button txt colour
    jnbtnbgcol: '${widget.jnbtnbgcol}', // button background colour
    jnbtnfontsize: '${widget.jnbtnfontsize}', // button font size
    inborcol: '${widget.inborcol}', // input border colour
    headertxt3: '${widget.headertxt3.replace('\'', '\\\'')}', // header 3 txt
    contxt3: '${widget.contxt3.replace('\'', '\\\'')}', // content 3 txt
    xrcontxt: '${widget.xrcontxt.replace('\'', '\\\'')}', // content 3 txt
    xrconfontsize: '${widget.xrconfontsize}', //extra content font size
    morebtntxt: '${widget.morebtntxt.replace('\'', '\\\'')}', // yes button txt
    morebtntxtcol: '${widget.morebtntxtcol}', // button txt colour
    morebtnbgcol: '${widget.morebtnbgcol}', // button background colour
    morebtnfontsize: '${widget.morebtnfontsize}' // button font size
  };
  var elid = 'wto-widget--vipsignup--${uniqueID}';
  // Remove if exists - ensures no duplicates
  document.querySelectorAll('.wto-widget--vipsignup').forEach(function(node){
  node.parentNode.removeChild(node);
  });
  var css={add:function(c, id){if(c instanceof Array){c=c.join(' ')}var a=document.getElementsByTagName("head")[0],b=document.createElement('style');b.type="text/css";if(id){b.id=id;}if(b.styleSheet){b.styleSheet.cssText=c}else{b.appendChild(document.createTextNode(c))}a.appendChild(b)}, del:function(id){var el=document.getElementById(id); if(el){el.parentNode.removeChild(el)}}};
  css.add([
    ".wto-join { position: fixed; padding: 20px; margin: 5px; border: 2px solid "+ settings.borcol +"; border-radius: 6px; width: 310px; height: 300px; top: 170px; left: 170px; z-index: 9999; box-sizing: unset; background: "+ settings.bgcol +"; }",
    ".wto_closebtn_not { font-size: 24px; line-height: 20px; cursor: pointer; transition: 0.3s; z-index: 9999; color: #968c8c; float: right; margin-top: -13px; margin-right: -7px; }",
    ".wto-header { position: inherit; top: 217px; margin-left: 5px; font-size: "+ settings.headerfontsize +"; font-weight: bold; font-family: Verdana; width: 311px; color: "+ settings.headercol +"; margin: 0; line-height: 1.2; letter-spacing: 0; box-sizing: unset; }",
    ".wto-content { position: inherit; margin-top: 89px; margin-left: 13px; font-size: "+ settings.confontsize +"; font-weight: bold; font-family: Verdana; width: 285px; color: "+ settings.concol +"; text-align: center; line-height: 1.7; letter-spacing: 0; box-sizing: unset; }",
    ".wto-moreinfo { position: inherit; margin-top: 169px; margin-left: 133px; font-size: "+ settings.xrconfontsize +"; font-weight: bold; font-family: Verdana; width: 145px; color: "+ settings.concol +"; text-align: center; line-height: 1.7; letter-spacing: 0; box-sizing: unset; }",
    "#wto-comlogo { position: inherit; height: 55px; width: 146px; z-index: 9999; margin-top: -47px; margin-left: -77px; }",
    "#wto-yesjoin { width: 138px; height: 100px; border: none; border-radius: 9px; box-sizing: unset; position: absolute; bottom: 15px; background: "+ settings.yesbtnbgcol +"; color: "+ settings.yesbtntxtcol +"; padding: 8px; left: 18px; }",
    "#wto-nojoin { width: 138px; height: 100px; border: none; border-radius: 9px; box-sizing: unset; position: absolute; bottom: 16px; left: 179px; background: "+ settings.nobtnbgcol +"; color: "+ settings.nobtntxtcol +"; box-shadow: 0px 3px 3px 0px grey; padding: 8px; }",
    "#wto-answerno { font-size: "+ settings.nobtnfontsize +"; font-weight: bold; font-family: Verdana; line-height: 3em; margin: -61px; position: absolute; left: 115px; }",
    "#wto-nextn { font-size: "+ settings.nobtnsmlfontsize +"; font-family: Verdana; line-height: 3em; position: absolute; left: 25px;}",
    "#wto-answeryes { font-size: "+ settings.yesbtnfontsize +"; font-weight: bold; font-family: Verdana; line-height: 3em; margin: -59px; position: absolute; left: 105px; }",
    "#wto-nexty { font-size: "+ settings.yesbtnsmlfontsize +"; font-family: Verdana; line-height: 3em; position: absolute; left: 9px; }",
    ".wto-step2 { position: fixed; padding: 20px; margin: 5px; border: 2px solid "+ settings.borcol +"; border-radius: 6px; width: 310px; height: 300px; top: 171px; left: 582px; z-index: 9999; box-sizing: unset; background: "+ settings.bgcol +"; }",
    "input { position: absolute; bottom: 76px; padding: 3px; height: 46px; width: 304px; border: 5px solid "+ settings.inborcol +"; border-radius: 8px; text-align: center; box-sizing: unset; margin-left: -5px; left: 16px; }",
    "#wto-joinnow { position: absolute; bottom: 15px; padding: 3px; height: 50px; width: 313px; border: none; border-radius: 8px; text-align: center; background: "+ settings.jnbtnbgcol +"; color: "+ settings.jnbtntxtcol +"; font-size: "+ settings.jnbtnfontsize +"; font-weight: bold; font-family: Verdana; box-sizing: unset; margin-left: -5px; left: 16px; }",
    ".wto-final { position: fixed; padding: 20px; margin: 5px; border: 2px solid "+ settings.borcol +"; border-radius: 6px; width: 310px; height: 300px; top: 171px; right: 170px; z-index: 9999; box-sizing: unset; background: "+ settings.bgcol +"; }",
    "#wto-viplogo { position: absolute; height: 100px; width: 105px; margin-top: 200px; left: 12px }",
    "#wto-more { position: absolute; bottom: 15px; padding: 2px; left: 137px; height: 59px; width: 190px; border: none; border-radius: 8px; text-align: center; background: "+ settings.morebtnbgcol +"; color: "+ settings.morebtntxtcol +"; font-size: "+ settings.morebtnfontsize +"; font-weight: bold; font-family: Verdana; box-sizing: unset; }"
]);
  
var body = document.getElementsByTagName('body')[0];
var el = document.createElement('div');
body.insertAdjacentElement('afterBegin', el);
var elhtml = '\<div id="'+ elid +'" class="wto-widget--vipsignup">\
<div class="wto-join">\
    <img id="wto-comlogo" src="https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/logo.jpg">\
    <span class="wto_closebtn_not">&times;</span>\
    <div class="wto-header">'+ settings.headertxt1 +'</div>\
    <div class="wto-content">'+ settings.contxt1 +'</div>\
    <button type="button" id="wto-yesjoin"><p id="wto-answeryes">'+ settings.yesbtntxt +'</p><p id="wto-nexty">'+ settings.yesbtnsmltxt +'</p></button>\
    <button type="button" id="wto-nojoin"><p id="wto-answerno">'+ settings.nobtntxt +'</p><p id="wto-nextn">'+ settings.nobtnsmltxt +'</p></button>\
</div>\
<div class="wto-step2">\
    <img id="wto-comlogo" src="https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/logo.jpg">\
    <span class="wto_closebtn_not">&times;</span>\
    <div class="wto-header">'+ settings.headertxt2 +'</div>\
    <div class="wto-content">'+ settings.contxt2 +'</div>\
    <input type="email" id="wto-email" placeholder="Enter Email">\
    <button type="button" id="wto-joinnow">'+ settings.jnbtntxt +'</button>\
</div>\
<div class="wto-final">\
    <img id="wto-comlogo" src="https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/logo.jpg">\
    <span class="wto_closebtn_not">&times;</span>\
    <div class="wto-header">'+ settings.headertxt3 +'</div>\
    <div class="wto-content">'+ settings.contxt3 +'</div>\
    <div class="wto-moreinfo">'+ settings.xrcontxt +'</div>\
    <img id="wto-viplogo" src="https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/viplogo.png">\
    <button type="button" id="wto-more">'+ settings.morebtntxt +'</button>\
</div>\
</div>\
';
  el.outerHTML = elhtml;

  })();
  //!-##${widget.widgetType}--END##`;
                
                return str;
            }
        },