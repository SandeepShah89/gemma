

'widget 9': {
  friendlyName: 'Widget 9',
  description: 'Promo card 2 spinner wheel',
  fields: [
      'BACKGROUND COLOUR',
      { type: 'background-image', id: 'bgcol', name: 'bgcol', label: 'Background Colour', value: 'linear-gradient(90deg , rgba(60, 60, 242, 1) 0%, #62f5e6 52%, rgba(60, 60, 242, 1) 100%)'},
      'HEADER',
      { type: 'text', id: 'headertxt', name: 'headertxt', label: 'Header Text', value: 'Spin the wheel to win!' },
      { type: 'color', id: 'headercol', name: 'headercol', label: 'Header Colour', value: '#FFFFFF' },
      { type: 'text', id: 'headerfontsize', name: 'headerfontsize', label: 'Header Font Size', value: '43px' },
      'CONTENT',
      { type: 'color', id: 'txtcol', name: 'txtcol', label: 'Text Colour', value: '#FFFFFF' },
      { type: 'text', id: 'txtfontsize', name: 'txtfontsize', label: 'Content Font Size', value: '25px' },
      { type: 'text', id: 'content', name: 'content', label: 'Content Text', value: 'Enter your email address to spin the wheel for<br> a chance to win!' },
      'BUTTON',
      { type: 'text', id: 'btntxt', name: 'btntxt', label: 'Button Text', value: 'SPIN' },
      { type: 'color', id: 'btntxtcol', name: 'btntxtcol', label: 'Button Text Colour', value: '#FFFFFF' },
      { type: 'color', id: 'btnbgcol', name: 'btnbgcol', label: 'Button Background Colour', value: '#001aff' },
      { type: 'color', id: 'btnborcol', name: 'btnborcol', label: 'Button Border Colour', value: '#FFFFFF' },
      { type: 'text', id: 'btnfontsize', name: 'btnfontsize', label: 'Button Font Size', value: '37px' },
      'WHEEL',
      { type: 'text', id: 'wheeltxt1', name: 'wheeltxt1', label: 'Wheel Text 1', value: '10% Off' },
      { type: 'text', id: 'wheeltxt2', name: 'wheeltxt2', label: 'Wheel Text 2', value: 'Free Shipping' },
      { type: 'text', id: 'wheeltxt3', name: 'wheeltxt3', label: 'Wheel Text 3', value: 'Not Quite' },
      { type: 'text', id: 'wheeltxt4', name: 'wheeltxt4', label: 'Wheel Text 4', value: '20% Off' },
      { type: 'text', id: 'wheeltxt5', name: 'wheeltxt5', label: 'Wheel Text 5', value: 'Almost' },
      { type: 'text', id: 'wheeltxt6', name: 'wheeltxt6', label: 'Wheel Text 6', value: 'No Luck' },
      { type: 'text', id: 'wheeltxt7', name: 'wheeltxt7', label: 'Wheel Text 7', value: '5% Off' },
      { type: 'text', id: 'wheeltxt8', name: 'wheeltxt8', label: 'Wheel Text 8', value: 'Try Again' },
      { type: 'color', id: 'wheeltxtcol', name: 'wheeltxtcol', label: 'Wheel Text Colour', value: '#FFFFFF' },
      { type: 'text', id: 'wheeltxtfontsize', name: 'wheeltxtfontsize', label: 'Wheel Text Font Size', value: '24px' },
      { type: 'color', id: 'wheelcol1', name: 'wheelcol1', label: 'Wheel Colour 1', value: '#3c3cf2' },
      { type: 'color', id: 'wheelcol2', name: 'wheelcol2', label: 'Wheel Colour 2', value: '#62f5e6' },
      { type: 'color', id: 'wheelcol3', name: 'wheelcol3', label: 'Wheel Colour 3', value: '#0000d4' },
      { type: 'color', id: 'wheelcol4', name: 'wheelcol4', label: 'Wheel Colour 4', value: '#1be6d1' }
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
  btnborcol: '${widget.btnborcol}', // button border colour
  btnfontsize: '${widget.btnfontsize}', // button font size
  bgcol: '${widget.bgcol}', // background colour
  wheeltxt1: '${widget.wheeltxt1}', //promo spinner txt
  wheeltxt2: '${widget.wheeltxt2}',
  wheeltxt3: '${widget.wheeltxt3}',
  wheeltxt4: '${widget.wheeltxt4}',
  wheeltxt5: '${widget.wheeltxt5}',
  wheeltxt6: '${widget.wheeltxt6}',
  wheeltxt7: '${widget.wheeltxt7}',
  wheeltxt8: '${widget.wheeltxt8}',
  wheeltxtcol: '${widget.wheeltxtcol}', //wheel text colour
  wheeltxtfontsize: '${widget.wheeltxtfontsize}', //wheel text font size
  wheelcol1: '${widget.wheelcol1}', //wheel colour 1
  wheelcol2: '${widget.wheelcol2}', //wheel colour 2
  wheelcol3: '${widget.wheelcol3}', //wheel colour 3
  wheelcol4: '${widget.wheelcol4}' //wheel colour 4
};
var elid = 'wto-widget--spinner-promo--${uniqueID}';
// Remove if exists - ensures no duplicates
document.querySelectorAll('.wto-widget--spinner-promo').forEach(function(node){
node.parentNode.removeChild(node);
});
var css={add:function(c, id){if(c instanceof Array){c=c.join(' ')}var a=document.getElementsByTagName("head")[0],b=document.createElement('style');b.type="text/css";if(id){b.id=id;}if(b.styleSheet){b.styleSheet.cssText=c}else{b.appendChild(document.createTextNode(c))}a.appendChild(b)}, del:function(id){var el=document.getElementById(id); if(el){el.parentNode.removeChild(el)}}};
css.add([
  "* { box-sizing: border-box; padding: 0; margin: 0; outline: none; }",
  ".mainbox { position: relative; width: 500px; height: 500px; top: -115px; left: -10px; }",
  ".mainbox:after { position: absolute; content: ''; width: 32px; height: 43px; background: url(https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/arrow-left.png) no-repeat; background-size: 32px; top: 74%; transform: translateY(-50%); left: 116%; }",
  ".box { width: 100%; height: 100%; position: relative; font-weight: bold; border-radius: 50%; border: 10px solid #fff; overflow: hidden; transition: all ease 5s; top: 25%; left: 15%; }",
  ".wto-widget--spinner-promo { z-index: 9999; justify-content: center; align-items: center; overflow: hidden; background-image: "+ settings.bgcol +"; background-size: cover; height: 100%; width: 100%; position: fixed; }",
  "span { width: 50%; height: 50%; display: inline-block; position: absolute; }",
  ".span1 { clip-path: polygon(0 92%, 100% 50%, 0 8%); background-color: "+ settings.wheelcol1 +"; top: 120px; left: 0; }",
  ".span2 { clip-path: polygon(100% 92%, 0 50%, 100% 8%); background-color: "+ settings.wheelcol2 +"; top: 120px; right: 0;}",
  ".span3 { clip-path: polygon(50% 0%, 8% 100%, 92% 100%); background-color: "+ settings.wheelcol3 +"; bottom: 0; left: 120px; }",
  ".span4 { clip-path: polygon(50% 100%, 92% 0, 8% 0); background-color: "+ settings.wheelcol4 +"; top: 0; left: 120px; }",
  ".box1 .span3 b { transform: translate(-50%, -50%) rotate(-270deg); }",
  ".box1 .span1 b, .box2 .span1 b { transform: translate(-50%, -50%) rotate(185deg); }",
  ".box2 .span3 b { transform: translate(-50%, -50%) rotate(90deg); }",
  ".box1 .span4 b, .box2 .span4 b { transform: translate(-50%, -50%) rotate(-85deg); }",
  "span b { font-size: "+ settings.wheeltxtfontsize +"; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: "+ settings.wheeltxtcol +"; }",
  ".box2 { width: 100%; height: 100%; transform: rotate(-135deg); }",
  "#wto_middlewheel { position: absolute; top: 40%; left: 268px; width: 90px; height: 90px; border-radius: 50%; border: 4px solid "+ settings.btnborcol +"; box-shadow: 0 5px 20px #000; }",
  ".spin { position: absolute; top: 103%; left: 178%; width: 310px; height: 80px; border-radius: 5px; border: 4px solid "+ settings.btnborcol +"; background-color: "+ settings.btnbgcol +"; color: "+ settings.btntxtcol +"; box-shadow: 0 5px 20px #000; font-weight: bold; font-size: "+ settings.headerfontsize +"; cursor: pointer; }",
  ".spin:active { width: 310px; height: 80px; font-size: "+ settings.btnfontsize +"; }",
  ".mainbox.animate:after { animation: animateArrow 0.7s ease infinite; }",
  "@keyframes animateArrow { 50%{ right: -40px; } }",
  ".wto_logo { position: relative; top: -483px; left: 746px; }",
  "img { height: 150px; width: 600px; }",
  ".wto_content { position: relative; top: -490px; left: 685px; padding: 0px; margin: 0px; }",
  "h1 { font-size: "+ settings.headerfontsize +"; color: "+ settings.headercol +"; font-family: Lucida Handwriting; margin-bottom: 13px; border-bottom: 3px solid #ffffff; padding: 18px; }",
  "p { font-size: "+ settings.txtfontsize +"; color: "+ settings.txtcol +"; font-family: Monaco; padding: 15px; }",
  ".wto_closebtn_not {  color: #ffffff; font-weight: bold; position: fixed; top: 15px; left: 1470px; font-size: 41px; line-height: 20px; cursor: pointer; transition: 0.3s; z-index: 9999; }",
  ".closebtn_not:hover { color: #45474a; }"
]);

var body = document.getElementsByTagName('body')[0];
var el = document.createElement('div');
body.insertAdjacentElement('afterBegin', el);
var elhtml = '\<div id="'+ elid +'" class="wto-widget--spinner-promo">\
<span class="wto_closebtn_not">×</span> <div id="mainbox" class="mainbox">\
  <div id="box" class="box">\
    <div class="box1">\
      <span class="span1"><b>'+ settings.wheeltxt1 +'</b></span>\
      <span class="span2"><b>'+ settings.wheeltxt2 +'</b></span>\
      <span class="span3"><b>'+ settings.wheeltxt3 +'</b></span>\
      <span class="span4"><b>'+ settings.wheeltxt4 +'</b></span>\
    </div>\
    <div class="box2">\
      <span class="span1"><b>'+ settings.wheeltxt5 +'</b></span>\
      <span class="span2"><b>'+ settings.wheeltxt6 +'</b></span>\
      <span class="span3"><b>'+ settings.wheeltxt7 +'</b></span>\
      <span class="span4"><b>'+ settings.wheeltxt8 +'</b></span>\
    </div>\
  </div>\
  <button class="spin" onclick="rotateFunction()">'+ settings.btntxt +'</button>\
</div>\
<div class="wto_logo">\
  <img src="https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/logo.jpg">\
</div>\
<div class="wto_content">\
    <h1>'+ settings.headertxt +'</h1>\
  <p>'+ settings.content +'</p>\
</div>\
<div class="middle">\
    <img id="wto_middlewheel" src="https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/middlewheel.png">\
</div>\
</div>\
';
el.outerHTML = elhtml;
function rotateFunction(){
  var min = 1024;
  var max = 9999;
  var deg = Math.floor(Math.random() * (max - min)) + min;
  document.getElementById('box').style.transform = "rotate("+deg+"deg)";
};
var element = document.getElementById('mainbox');
  element.classList.remove('animate');
  setTimeout(function(){
    element.classList.add('animate');
  }, 5000);
})();
//!-##${widget.widgetType}--END##`;
              
              return str;
          }
      },