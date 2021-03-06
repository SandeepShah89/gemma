'widget 11': {
    friendlyName: 'Widget 11',
    description: 'Extended hellobar with message/button',
    fields: [
        'BACKGROUND COLOUR',
        { type: 'color', id: 'bgcol', name: 'bgcol', label: 'Background Colour', value: '#FFFFFF'},
        'HEADER',
        { type: 'text', id: 'headertxt', name: 'headertxt', label: 'Header Text', value: 'Due to COVID-19, we are experiencing long delays<br> in shipment. We truly appreciate your understanding' },
        { type: 'color', id: 'headercol', name: 'headercol', label: 'Header Colour', value: '#424874' },
        { type: 'text', id: 'headerfontsize', name: 'headerfontsize', label: 'Header Font Size', value: '17px' },
        'BUTTON',
        { type: 'text', id: 'btntxt', name: 'btntxt', label: 'Button Text', value: 'Read the full update' },
        { type: 'color', id: 'btntxtcol', name: 'btntxtcol', label: 'Button Text Colour', value: '#FFFFFF' },
        { type: 'color', id: 'btnbgcol', name: 'btnbgcol', label: 'Button Background Colour', value: '#424874' },
        { type: 'text', id: 'btnfontsize', name: 'btnfontsize', label: 'Button Font Size', value: '15px' },
        'ICON COLOUR',
        { type: 'color', id: 'iconcol', name: 'iconcol', label: 'Icon Colour', value: '#424874' },
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
    btntxt : '${widget.btntxt.replace('\'', '\\\'')}', // button txt
    btntxtcol: '${widget.btntxtcol}', // button txt colour
    btnbgcol: '${widget.btnbgcol}', // button colour
    btnfontsize: '${widget.btnfontsize}', // button font size
    bgcol: '${widget.bgcol}', // background colour
    iconcol: '${widget.iconcol}' // icon colour
   
  };
  var elid = 'wto-widget--extendedhellobar--${uniqueID}';
  // Remove if exists - ensures no duplicates
  document.querySelectorAll('.wto-widget--extendedhellobar').forEach(function(node){
  node.parentNode.removeChild(node);
  });
  var css={add:function(c, id){if(c instanceof Array){c=c.join(' ')}var a=document.getElementsByTagName("head")[0],b=document.createElement('style');b.type="text/css";if(id){b.id=id;}if(b.styleSheet){b.styleSheet.cssText=c}else{b.appendChild(document.createTextNode(c))}a.appendChild(b)}, del:function(id){var el=document.getElementById(id); if(el){el.parentNode.removeChild(el)}}};
  css.add([
    ".wto-widget--extendedhellobar { padding: 10px; width: 70%; height: 10%; background: "+ settings.bgcol +"; z-index: 99999999; top: 0; left: 0; position: fixed; box-sizing: unset; }",
    "h1 { color: "+ settings.headercol +"; font-weight: bold; font-size: "+ settings.headerfontsize +"; font-family: Verdana; text-align: center; margin-left: -189px; margin-top: 4px; letter-spacing: 0px; line-height: 23.2px; }",
    "#wto_widget--update { background-color: "+ settings.btnbgcol +"; color: "+ settings.btntxtcol +"; font-size: "+ settings.btnfontsize +"; font-family: Verdana; font-weight: bold; text-align: center; border: none; border-radius: 4px; position: absolute; top: 18px; right: 115px; width: 215px; height: 40px; }",
    ".wto_closebtn_not { color: #7d7272; font-size: 41px; line-height: 20px; cursor: pointer; transition: 0.3s; z-index: 9999; float: right; margin-right: 22px; margin-top: 9px; }",
    ".closebtn_not:hover { color: #45474a; }",
    "#wto_widget_truckicon { position: absolute; top: -3px; left: 40px; z-index: 9999; }"
]);
  
  var body = document.getElementsByTagName('body')[0];
  var el = document.createElement('div');
  body.insertAdjacentElement('afterBegin', el);
  var elhtml = '\<div id="'+ elid +'" class="wto-widget--extendedhellobar">\
  <span class="wto_closebtn_not">??</span>\
  <h1>'+ settings.headertxt +'</h1>\
  <button type="button" id="wto_widget--update">'+ settings.btntxt +'</button>\
  <svg id="wto_widget_truckicon" height="70px" width="70px" enable-background="new 0 0 128 128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">\
      <linearGradient id="b" x1="64.039" x2="64.039" y1="39" y2="101.26" gradientUnits="userSpaceOnUse">\
      <stop stop-color="#FFF8E1" offset=".0074201"></stop>\
      <stop stop-color="#FFF6DA" offset=".1774"></stop>\
      <stop stop-color="#FFF2C8" offset=".4164"></stop>\
      <stop stop-color="#FFEAAA" offset=".6962"></stop>\
      <stop stop-color="#FFE082" offset=".9948"></stop>\
      </linearGradient>\
      <path d="M124.19,53.28c0-5.11-4.18-9.28-9.28-9.28H17.33c-5.11,0-9.28,4.18-9.28,9.28L3.88,91.5 h120.31V53.28z" fill="#424874"></path>\
      <path d="M3.88,91.5v11.22c0,5.11,4.18,9.28,9.28,9.28h101.74c5.11,0,9.28-4.18,9.28-9.28V91.5H3.88z" fill="#424874"></path>\
      <g opacity=".2">\
      <path d="m18.41 47 97.5 0.5c3.45 0 5.49 2.12 5.49 5.51l-0.4 38.49v10.79c0 3.84-3.32 6.64-5.1 6.64l-101.74 0.11c-6.05 0-7.3-3.81-7.3-6.99l0.04-10.63 4.13-38.09 0.02-0.1c0.37-5.15 4.21-6.23 7.36-6.23m0.01-3c-5.62 0-9.92 2.92-10.36 9l-4.15 38.25-0.03 10.79c0 5.11 2.82 10 10.32 10l101.69-0.11c3.58 0 8.1-4.27 8.1-9.64v-10.79l0.4-38.47c0-5.11-3.44-8.53-8.54-8.53l-97.43-0.5z" fill="#424242"></path>\
      </g>\
      <path d="m29.9 75.34h-14.59c-1.65 0-2.85-1.31-2.67-2.92l1.75-15.51c0.18-1.61 1.67-2.92 3.33-2.92h12.93c1.65 0 2.85 1.31 2.67 2.92l-0.1 15.51c-0.18 1.62-1.67 2.92-3.32 2.92z" fill="#FFFFFF"></path>\
      <linearGradient id="a" x1="80.097" x2="80.097" y1="29.333" y2="90.334" gradientUnits="userSpaceOnUse">\
      <stop stop-color="#BCAAA4" offset=".0048889"></stop>\
      <stop stop-color="#AC958E" offset=".3916"></stop>\
      <stop stop-color="#8D6E63" offset=".9986"></stop>\
      </linearGradient>\
      <path d="M124.19,91.65H36v-59.3c0-2.21,1.79-4,4-4h80.19c2.21,0,4,1.79,4,4V91.65z" fill="#424874"></path>\
      <g opacity=".2">\
      <path d="m30.65 56c0.24 0 0.43 0.07 0.55 0.21 0.11 0.12 0.15 0.28 0.13 0.48-0.01 0.07-0.01 0.14-0.01 0.21l-0.1 15.38c-0.11 0.57-0.72 1.06-1.33 1.06h-14.58c-0.24 0-0.43-0.07-0.55-0.21-0.11-0.12-0.15-0.28-0.13-0.48l1.75-15.51c0.07-0.6 0.71-1.14 1.34-1.14h12.93m0-2h-12.93c-1.65 0-3.14 1.31-3.33 2.92l-1.75 15.51c-0.18 1.61 1.01 2.92 2.67 2.92h14.59c1.65 0 3.14-1.31 3.33-2.92l0.1-15.51c0.17-1.61-1.02-2.92-2.68-2.92z" fill="#424242"></path>\
      </g>\
      <rect x="76.33" y="28.35" width="11.29" height="23.65" fill="#424874"></rect>\
      <rect x="76.33" y="68.84" width="11.29" height="22.81" fill="#424874"></rect>\
      <g opacity=".2">\
      <path d="m120.19 31.35c0.55 0 1 0.45 1 1v56.3h-82.19v-56.3c0-0.55 0.45-1 1-1h80.19m0-3h-80.19c-2.21 0-4 1.79-4 4v59.3h88.19v-59.3c0-2.21-1.79-4-4-4z" fill="#424242"></path>\
      </g>\
      <circle cx="30" cy="110" r="14" fill="#424874"></circle><g opacity=".2">\
      <path d="m30 98c6.62 0 12 5.38 12 12s-5.38 12-12 12-12-5.38-12-12 5.38-12 12-12m0-2c-7.73 0-14 6.27-14 14s6.27 14 14 14 14-6.27 14-14-6.27-14-14-14z" fill="#eee"></path>\
      </g>\
      <circle cx="30" cy="110" r="6" fill="#FFFFFF"></circle>\
      <circle cx="102" cy="110" r="14" fill="#424874"></circle>\
      <g opacity=".2">\
      <path d="m102 98c6.62 0 12 5.38 12 12s-5.38 12-12 12-12-5.38-12-12 5.38-12 12-12m0-2c-7.73 0-14 6.27-14 14s6.27 14 14 14 14-6.27 14-14-6.27-14-14-14z" fill="#eee"></path>\
      </g>\
      <circle cx="102" cy="110" r="6" fill="#FFFFFF"></circle>\
  </svg>\
</div>\
';
  el.outerHTML = elhtml;
  var h = document.getElementById(elid).offsetHeight;
  body.style.marginTop = h + 'px';
  })();
  //!-##${widget.widgetType}--END##`;
                
                return str;
            }
        },