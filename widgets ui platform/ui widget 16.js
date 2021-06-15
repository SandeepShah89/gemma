'widget 16': {
    friendlyName: 'Widget 16',
    description: 'emoji feedback',
    fields: [
        'BACKGROUND COLOUR',
        { type: 'background-image', id: 'bgcol', name: 'bgcol', label: 'Background Colour', value: 'linear-gradient(400deg, #ffffff,#ffffff,#ffffff, #ffffff, #008000, #15ff15)'},
        'BIG HEADER',
        { type: 'text', id: 'bigheadertxt', name: 'bigheadertxt', label: 'Big Header Text', value: 'Before you leave, wed love to hear your feedback!' },
        { type: 'color', id: 'bigheadercol', name: 'bigheadercol', label: 'Big Header Colour', value: '#000000' },
        { type: 'text', id: 'bigheaderfontsize', name: 'bigheaderfontsize', label: 'Big Header Font Size', value: '21px' },
        'SMALLER HEADER',
        { type: 'text', id: 'smlheadertxt', name: 'smlheadertxt', label: 'Smaller Header Text', value: 'Thank you for your purchase! ' },
        { type: 'color', id: 'smlheadercol', name: 'smlheadercol', label: 'Smaller Header Colour', value: '#000000' },
        { type: 'text', id: 'smlheaderfontsize', name: 'smlheaderfontsize', label: 'Smaller Header Font Size', value: '13px' },
        'CONTENT',
        { type: 'text', id: 'contxt', name: 'contxt', label: 'Content Text', value: 'How would you rate your shopping experience?' },
        { type: 'color', id: 'concol', name: 'concol', label: 'Content Colour', value: '#000000' },
        { type: 'text', id: 'confontsize', name: 'confontsize', label: 'Content Font Size', value: '14px' },
        'EMOJI COLOUR',
        { type: 'color', id: 'outercol', name: 'outercol', label: 'Emoji Outer Colour & Facial Feature Colour', value: '#008000' },
        { type: 'color', id: 'innercol', name: 'innercol', label: 'Emoji Inner Colour', value: '#FFFFFF' }
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
    innercol: '${widget.innercol}', // emoji outer colour
    outercol: '${widget.outercol}', // emoji inner colour 
    bgcol: '${widget.bgcol}' // background colour   
  };
  var elid = 'wto-widget--emojifeedback--${uniqueID}';
  // Remove if exists - ensures no duplicates
  document.querySelectorAll('.wto-widget--emojifeedback').forEach(function(node){
  node.parentNode.removeChild(node);
  });
  var css={add:function(c, id){if(c instanceof Array){c=c.join(' ')}var a=document.getElementsByTagName("head")[0],b=document.createElement('style');b.type="text/css";if(id){b.id=id;}if(b.styleSheet){b.styleSheet.cssText=c}else{b.appendChild(document.createTextNode(c))}a.appendChild(b)}, del:function(id){var el=document.getElementById(id); if(el){el.parentNode.removeChild(el)}}};
  css.add([
    ".wto-widget--emojifeedback { position: fixed; bottom: 10px; right: 10px; margin: 5px; z-index: 9999; box-sizing: unset; padding: 10px; border-radius: 21px; width: 320px; height: 340px; background-image: "+ settings.bgcol +"; }",
    ".wto_closebtn_not { font-size: 24px; line-height: 20px; cursor: pointer; transition: 0.3s; z-index: 9999; color: #ffffff; position: inherit; bottom: 348px; right: 33px; }",
    ".wto-smlheader { position: inherit; text-align: center; margin: 0px; bottom: 300px; font-size: "+ settings.smlheaderfontsize +"; font-weight: bold; font-family: Verdana; margin-left: 50px; z-index: 9999; line-height: 1.1; letter-spacing: 0; color: "+ settings.smlheadercol +"; box-sizing: unset; }",
    ".wto-bigheader { position: inherit; text-align: center; margin: 0px; bottom: 209px; font-size: "+ settings.bigheaderfontsize +"; font-weight: bold; font-family: Verdana; margin-left: 18px; width: 280px; z-index: 9999; line-height: 1.1; letter-spacing: 0; color: "+ settings.bigheadercol +"; box-sizing: unset; }",
    ".wto-content { z-index: 9999; bottom: 125px; margin-left: 40px; width: 243px; position: absolute; text-align: center; font-size: "+ settings.confontsize +"; font-family: Verdana; color: "+ settings.concol +"; line-height: 1.6; letter-spacing: 0; box-sizing: unset; }",
    "svg { height: 65px; width: 65px; border: 4px solid "+ settings.outercol +"; border-radius: 44px; }",
    ".wto-goodemoji { position: absolute; bottom: 34px; margin-left: 23px; box-sizing: unset; }",
    ".wto-okayemoji { position: absolute; margin-left: 125px; bottom: 34px; box-sizing: unset; }",
    ".wto-bademoji { position: absolute; margin-left: 225px; bottom: 34px; box-sizing: unset; }"
]);
  
var body = document.getElementsByTagName('body')[0];
var el = document.createElement('div');
body.insertAdjacentElement('afterBegin', el);
var elhtml = '\<div id="'+ elid +'" class="wto-widget--emojifeedback">\
<span class="wto_closebtn_not">&times;</span>\
<div class="wto-smlheader">'+ settings.smlheadertxt +'</div>\
<div class="wto-bigheader">'+ settings.bigheadertxt +'</div>\
<div class="wto-content">'+ settings.contxt +'</div>\
<div class="wto-emoji-icons">\
    <div class="wto-goodemoji">\
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128;" xml:space="preserve">\
            <g id="gold">\
                    <radialGradient id="face_1_" cx="63.6" cy="216.9" r="56.9597" gradientTransform="matrix(1 0 0 1 0 -154)" gradientUnits="userSpaceOnUse">\
                    <stop offset="0.5" style="stop-color:'+ settings.innercol +'"></stop>\
                    <stop offset="0.92" style="stop-color:'+ settings.innercol +'"></stop>\
                    <stop offset="1" style="stop-color:'+ settings.outercol +'"></stop>\
                </radialGradient>\
                <path id="face" style="fill:url(#face_1_);" d="M63.6,118.8c-27.9,0-58-17.5-58-55.9S35.7,7,63.6,7c15.5,0,29.8,5.1,40.4,14.4 c11.5,10.2,17.6,24.6,17.6,41.5s-6.1,31.2-17.6,41.4C93.4,113.6,79,118.8,63.6,118.8z"></path>\
                <path style="fill:'+ settings.outercol +';" d="M111.49,29.67c5.33,8.6,8.11,18.84,8.11,30.23c0,16.9-6.1,31.2-17.6,41.4 c-10.6,9.3-25,14.5-40.4,14.5c-18.06,0-37-7.35-48.18-22.94c10.76,17.66,31,25.94,50.18,25.94c15.4,0,29.8-5.2,40.4-14.5 c11.5-10.2,17.6-24.5,17.6-41.4C121.6,50.16,118.13,38.84,111.49,29.67z"></path>\
            </g>\
            <g id="facial_expressions">\
                <g id="smiling-eyes-grinning-face">\
                    <g id="eyes">\
                        <path style="fill:'+ settings.outercol +';" d="M49,56.89l-0.15-0.2l-0.43-0.55l-0.53-0.57c-0.22-0.25-0.48-0.49-0.73-0.75s-0.56-0.51-0.84-0.72 c-0.26-0.2-0.54-0.39-0.84-0.54c-0.2-0.11-0.42-0.2-0.65-0.25c-0.07-0.01-0.14-0.01-0.21,0c0,0-0.06,0-0.09,0h-0.08 c0.12,0-0.27,0,0.27,0h-0.55c-0.15,0-0.05,0,0,0h0.08c0.08,0,0,0,0,0h-0.11c-0.23,0.05-0.45,0.13-0.66,0.25 c-0.29,0.16-0.58,0.34-0.84,0.54c-0.29,0.22-0.57,0.46-0.83,0.72c-0.53,0.51-1,1-1.3,1.39l-0.52,0.6l-0.23,0.27 c-1.44,1.61-3.87,1.87-5.62,0.61c-1.12-0.78-1.69-2.13-1.47-3.48c0,0,0.07-0.4,0.26-1.11c0.3-1.01,0.72-1.99,1.25-2.91 c0.85-1.5,2-2.81,3.38-3.85c0.91-0.7,1.92-1.26,3-1.65c0.3-0.12,0.61-0.21,0.92-0.29c0.33-0.1,0.66-0.17,1-0.23l0.61-0.09 l0.51-0.06h0.55h0.79h0.51c0.34,0,0.67,0.09,1,0.14c0.64,0.11,1.28,0.28,1.89,0.51c1.08,0.39,2.09,0.95,3,1.65 c1.38,1.04,2.53,2.35,3.38,3.85c0.31,0.52,0.58,1.07,0.8,1.63c0.19,0.45,0.35,0.9,0.48,1.37c0.07,0.24,0.13,0.48,0.16,0.72v0.25 c0.3,2.04-1.12,3.94-3.16,4.24c-0.05,0.01-0.1,0.01-0.15,0.02C51.39,58.61,49.93,58.03,49,56.89z"></path>\
                        <path style="fill:'+ settings.outercol +';" d="M88.46,56.89l-0.16-0.2l-0.43-0.55l-0.53-0.57c-0.22-0.25-0.48-0.49-0.73-0.75 s-0.56-0.51-0.84-0.72c-0.26-0.2-0.54-0.39-0.84-0.54c-0.2-0.11-0.42-0.2-0.65-0.25c-0.07-0.01-0.14-0.01-0.21,0 c0,0-0.06,0-0.09,0H83.9c0.12,0-0.27,0,0.27,0h-0.55c-0.15,0-0.05,0,0,0h0.08c0.08,0,0,0,0,0h-0.11 c-0.23,0.05-0.45,0.13-0.66,0.25c-0.29,0.15-0.57,0.34-0.83,0.54c-0.3,0.22-0.58,0.46-0.84,0.72c-0.53,0.51-1,1-1.3,1.39 l-0.52,0.6l-0.22,0.27c-1.45,1.61-3.87,1.87-5.63,0.61c-1.12-0.78-1.69-2.13-1.47-3.48c0,0,0.07-0.4,0.27-1.11 c0.3-1.02,0.71-2,1.25-2.91c0.85-1.5,1.99-2.81,3.37-3.85c0.91-0.7,1.92-1.26,3-1.65c0.3-0.12,0.61-0.21,0.92-0.29 c0.33-0.1,0.66-0.17,1-0.23l0.62-0.09l0.5-0.06h0.55h0.79h0.51c0.34,0,0.67,0.09,1,0.14c0.65,0.11,1.28,0.28,1.89,0.51 c1.08,0.39,2.09,0.95,3,1.65c1.38,1.04,2.53,2.35,3.38,3.85c0.31,0.52,0.58,1.07,0.8,1.63c0.19,0.44,0.35,0.89,0.48,1.35 c0.07,0.24,0.13,0.48,0.16,0.72v0.25c0.32,2.04-1.08,3.95-3.12,4.27c-0.03,0-0.06,0.01-0.09,0.01 C90.91,58.65,89.4,58.07,88.46,56.89z"></path>\
                    </g>\
                </g>\
                <path style="fill:'+ settings.outercol +';" d="M102.07,71.62c-1.4-2.53-4.44-3.64-7.14-2.62c-10.26,2.99-20.9,4.48-31.59,4.43 C52.65,73.48,42.01,71.99,31.75,69c-2.69-1.02-5.73,0.08-7.13,2.6c-1.36,2.51-0.38,5.42,0.77,7.93 c6.42,14.1,20.57,22.54,37.87,22.59h0.16c17.3,0,31.45-8.49,37.88-22.59C102.44,77,103.43,74.13,102.07,71.62z"></path>\
                <path style="fill:'+ settings.outercol +';" d="M63.42,100.89"></path>\
                <path style="fill:'+ settings.outercol +';" d="M63.49,74.7"></path>\
                <path style="fill:'+ settings.outercol +';" d="M63.49,74.7"></path>\
                <path style="fill:'+ settings.outercol +';" d="M63.42,100.89"></path>\
                <path style="fill:'+ settings.outercol +';" d="M79.35,98.14c-0.37-0.34-0.75-0.65-1.13-1c-4.08-3.59-9.36-5.52-14.8-5.41 C57.82,91.64,52.37,93.5,48,97c-0.38,0.31-0.78,0.61-1.15,1s-0.57,0.67-0.81,1c5.5,2.15,11.36,3.25,17.27,3.22h0.16 c5.66,0,11.27-1.01,16.57-3C79.84,98.84,79.61,98.48,79.35,98.14z"></path>\
                <path style="fill:'+ settings.outercol +';" d="M94.93,69c-10.26,2.99-20.9,4.48-31.59,4.43C52.65,73.48,42.01,71.99,31.75,69 c-2.69-1.02-5.73,0.08-7.13,2.6c-0.2,0.38-0.36,0.78-0.46,1.19c0.33,0.17,0.71,0.34,1.16,0.52c12.04,6.03,25.35,9.09,38.81,8.93 c12.91,0.15,25.67-2.66,37.33-8.2c0.47-0.2,0.86-0.39,1.21-0.57c-0.08-0.65-0.29-1.29-0.6-1.87C100.67,69.08,97.63,67.97,94.93,69z"></path>\
                <path style="fill:'+ settings.outercol +';" d="M102.11,71.63c-1.42-2.53-4.47-3.65-7.19-2.63c-10.26,2.99-20.9,4.48-31.58,4.43 C52.65,73.48,42.01,71.99,31.75,69c-2.69-1.02-5.73,0.08-7.13,2.6c-1.36,2.51-0.38,5.42,0.77,7.93c0.51,1.13,1.08,2.24,1.71,3.31 c0,0-2.1-7.78-0.28-10.04c0.62-0.96,1.66-1.56,2.8-1.62c0.47,0,0.93,0.08,1.38,0.22c10.44,3.07,21.27,4.62,32.16,4.6h0.35 c10.89,0.02,21.72-1.53,32.16-4.6c0.45-0.14,0.91-0.22,1.38-0.22c1.14,0.06,2.19,0.66,2.81,1.62c1.85,2.26-0.28,10.07-0.28,10.07 c0.62-1.07,1.24-2.17,1.76-3.31C102.48,77.05,103.47,74.15,102.11,71.63z"></path>\
            </g>\
            </svg>\
    </div>\
    <div class="wto-okayemoji">\
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128;" xml:space="preserve">\
            <g id="gold">\
                <radialGradient id="face_1_" cx="63.6" cy="2584.8999" r="56.9597" gradientTransform="matrix(1 0 0 1 0 -2522)" gradientUnits="userSpaceOnUse">\
                <stop offset="0.5" style="stop-color:'+ settings.innercol +'"></stop>\
                <stop offset="0.92" style="stop-color:'+ settings.innercol +'"></stop>\
                <stop offset="1" style="stop-color:'+ settings.outercol +'"></stop>\
            </radialGradient>\
            <path id="face" style="fill:url(#face_1_);" d="M63.6,118.8c-27.9,0-58-17.5-58-55.9S35.7,7,63.6,7c15.5,0,29.8,5.1,40.4,14.4 c11.5,10.2,17.6,24.6,17.6,41.5s-6.1,31.2-17.6,41.4C93.4,113.6,79,118.8,63.6,118.8z"></path>\
            <path style="fill:'+ settings.outercol +';" d="M111.49,29.67c5.33,8.6,8.11,18.84,8.11,30.23c0,16.9-6.1,31.2-17.6,41.4 c-10.6,9.3-25,14.5-40.4,14.5c-18.06,0-37-7.35-48.18-22.94c10.76,17.66,31,25.94,50.18,25.94c15.4,0,29.8-5.2,40.4-14.5 c11.5-10.2,17.6-24.5,17.6-41.4C121.6,50.16,118.13,38.84,111.49,29.67z"></path>\
            <path style="fill:'+ settings.outercol +';" d="M111.49,29.67c5.33,8.6,8.11,18.84,8.11,30.23c0,16.9-6.1,31.2-17.6,41.4 c-10.6,9.3-25,14.5-40.4,14.5c-18.06,0-37-7.35-48.18-22.94c10.76,17.66,31,25.94,50.18,25.94c15.4,0,29.8-5.2,40.4-14.5 c11.5-10.2,17.6-24.5,17.6-41.4C121.6,50.16,118.13,38.84,111.49,29.67z"></path>\
            </g>\
            <g id="facial_expressions">\
            <g id="neutral-face">\
        <path id="mouth" style="fill:'+ settings.outercol +';" d="M89,88H39c-2.21,0-4-1.79-4-4s1.79-4,4-4h50c2.21,0,4,1.79,4,4S91.21,88,89,88z"></path>\
    </g>\
    <path style="fill:'+ settings.outercol +';" d="M44.67,45.94L44.67,45.94c-4.19,0-8,3.54-8,9.42s3.81,9.41,8,9.41l0,0c4.19,0,8-3.54,8-9.41 S48.86,45.94,44.67,45.94z"></path>\
    <g id="peepers">\
        <path style="fill:'+ settings.outercol +';" d="M44.28,49.87L44.28,49.87c-1.42-0.68-3.13-0.08-3.82,1.34c-0.53,1.11-0.29,2.44,0.6,3.3l0,0 c1.42,0.68,3.13,0.08,3.82-1.34C45.41,52.06,45.17,50.73,44.28,49.87z"></path>\
    </g>\
    <path style="fill:'+ settings.outercol +';" d="M83,45.94L83,45.94c-4.19,0-8,3.54-8,9.42s3.81,9.41,8,9.41l0,0c4.19,0,8-3.54,8-9.41 S87.21,45.94,83,45.94z"></path>\
    <g id="peepers-2">\
        <path style="fill:'+ settings.outercol +';" d="M82.63,49.87L82.63,49.87c-1.42-0.68-3.13-0.08-3.82,1.34c-0.53,1.11-0.29,2.44,0.6,3.3l0,0 c1.42,0.68,3.13,0.08,3.82-1.34C83.76,52.06,83.52,50.73,82.63,49.87z"></path>\
    </g>\
</g>\
</svg>\
    </div>\
    <div class="wto-bademoji">\
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128;" xml:space="preserve">\
            <g id="gold">\
                    <radialGradient id="face_1_" cx="63.6" cy="1400.9" r="56.9597" gradientTransform="matrix(1 0 0 1 0 -1338)" gradientUnits="userSpaceOnUse">\
                    <stop offset="0.5" style="stop-color:'+ settings.innercol +'"></stop>\
                    <stop offset="0.92" style="stop-color:'+ settings.innercol +'"></stop>\
                    <stop offset="1" style="stop-color:'+ settings.outercol +'"></stop>\
                </radialGradient>\
                <path id="face" style="fill:url(#face_1_);" d="M63.6,118.8c-27.9,0-58-17.5-58-55.9S35.7,7,63.6,7c15.5,0,29.8,5.1,40.4,14.4 c11.5,10.2,17.6,24.6,17.6,41.5s-6.1,31.2-17.6,41.4C93.4,113.6,79,118.8,63.6,118.8z"></path>\
                <path style="fill:'+ settings.outercol +';" d="M111.49,29.67c5.33,8.6,8.11,18.84,8.11,30.23c0,16.9-6.1,31.2-17.6,41.4 c-10.6,9.3-25,14.5-40.4,14.5c-18.06,0-37-7.35-48.18-22.94c10.76,17.66,31,25.94,50.18,25.94c15.4,0,29.8-5.2,40.4-14.5 c11.5-10.2,17.6-24.5,17.6-41.4C121.6,50.16,118.13,38.84,111.49,29.67z"></path>\
            </g>\
            <g id="facial_expressions">\
                <path style="fill:'+ settings.outercol +';" d="M44,40.94L44,40.94c-4.19,0-8,3.54-8,9.42s3.81,9.41,8,9.41l0,0c4.2,0,8-3.54,8-9.41 S48.24,40.94,44,40.94z"></path>\
                <g id="peepers">\
                    <path style="fill:'+ settings.outercol +';" d="M43.65,44.87L43.65,44.87c-1.42-0.68-3.13-0.08-3.82,1.34c-0.53,1.11-0.29,2.44,0.6,3.3l0,0 c1.42,0.68,3.13,0.08,3.82-1.34C44.78,47.06,44.54,45.73,43.65,44.87z"></path>\
                </g>\
                <path style="fill:'+ settings.outercol +';" d="M82.4,40.94L82.4,40.94c-4.19,0-8,3.54-8,9.42s3.81,9.41,8,9.41l0,0c4.19,0,8-3.54,8-9.41 S86.59,40.94,82.4,40.94z"></path>\
                <g id="peepers-2">\
                    <path style="fill:'+ settings.outercol +';" d="M82,44.87L82,44.87c-1.42-0.68-3.13-0.08-3.82,1.34c-0.53,1.11-0.29,2.44,0.6,3.3l0,0 c1.42,0.68,3.13,0.08,3.82-1.34C83.13,47.06,82.89,45.73,82,44.87z"></path>\
                </g>\
                <path id="mouth" style="fill:'+ settings.outercol +';" d="M64.18,78.19c9.07-0.08,17.75,3.74,23.82,10.48c0.46,0.53,0.57,1.28,0.28,1.92 c-0.29,0.65-0.93,1.07-1.64,1.08l0,0c-0.32,0-0.64-0.09-0.92-0.25c-4.82-2.77-12.88-6.21-21.52-6.21h-0.14 c-8.63,0-16.7,3.44-21.51,6.21c-0.28,0.16-0.6,0.25-0.92,0.25l0,0c-0.71-0.01-1.34-0.43-1.63-1.08c-0.3-0.64-0.19-1.39,0.28-1.92 c6.07-6.74,14.74-10.56,23.81-10.48"></path>\
            </g>\
            </svg>\
    </div>\
</div>\
</div>\
';
  el.outerHTML = elhtml;

  })();
  //!-##${widget.widgetType}--END##`;
                
                return str;
            }
        },