"Widget 14": {
  friendlyName: 'Widget 14',
  description: 'A small bar across the top of your page. promo and countdown timer',
  fields: [
      'BACKGROUND COLOUR',
      { type: 'background-image', id: 'bgcol', name: 'bgcol', label: 'Background Colour', value: 'linear-gradient(40deg, green ,white, white, white, green)'},
      'HEADER',
      { type: 'text', id: 'headertxt', name: 'headertxt', label: 'Header Text', value: 'Only today! Dont miss out!' },
      { type: 'color', id: 'headercol', name: 'headercol', label: 'Header Colour', value: '#000000' },
      { type: 'text', id: 'headerfontsize', name: 'headerfontsize', label: 'Header Font Size', value: '30px' },
      'CONTENT',
      { type: 'text', id: 'contxt', name: 'contxt', label: ' Top Content Text', value: 'Happy Friday! 10% off shopwide.' },
      { type: 'color', id: 'concol', name: 'concol', label: ' Top Content Colour', value: '#000000' },
      { type: 'text', id: 'confontsize', name: 'confontsize', label: ' Top Content Font Size', value: '15px' },
      'PROMO TEXT',
      { type: 'color', id: 'promotxtcol', name: 'promotxtcol', label: 'Promo Text Colour', value: '#000000' },
      { type: 'text', id: 'promotxtfontsize', name: 'promotxtfontsize', label: 'Promo Text Font Size', value: '17px' },
      'PROMO TEXT',
      { type: 'text', id: 'promocodetxt', name: 'promocodetxt', label: 'Promo Code', value: 'LUCKYCHECKOUT' },
      { type: 'color', id: 'promocodebgcol', name: 'promocodebgcol', label: 'Promo Code Background Colour', value: '#d9d4c5' },
      'COUNTDOWN TIMER',
      { type: 'checkbox', id: 'useCountdown', name: 'useCountdown', label: 'Include Countdown?', value: false }, 
      { type: 'datetime-local', id: 'myDate', name: 'myDate', step:'2', label: 'End date & time', value: 'yyyy/mm/dd hh:mm:ss' }

  ],
  
  js_build: function(widget){
      
      console.log(widget);
      
      var uniqueID = Date.now();
      var str = `
      
//!-##${widget.widgetType}--START##
// ${JSON.stringify(widget)}
// Create a Hello Bar
(function(){

var settings = {
myDate: '${widget.myDate}',
bgcol: '${widget.bgcol}', // background colour 
headerfontsize: '${widget.headerfontsize}', // header font size  
headertxt: '${widget.headertxt.replace('\'', '\\\'')}', // header txt
headercol: '${widget.headercol}', // header colour 
confontsize: '${widget.confontsize}', //  content font size  
contxt: '${widget.contxt.replace('\'', '\\\'')}', // content txt
concol: '${widget.concol}', // content colour 
promocodetxt: '${widget.promocodetxt.replace('\'', '\\\'')}', // promo code txt
promocodebgcol: '${widget.promocodebgcol}', // promo code background colour 
promotxtfontsize: '${widget.promotxtfontsize}', //  promo txt font size  
promotxtcol: '${widget.promotxtcol}' // promo txt colour 
};

var elid = 'wto-widget--greencountdownbar--${uniqueID}';
// Remove if exists - ensures no duplicates
document.querySelectorAll('.wto-widget--greencountdownbar').forEach(function(node){
node.parentNode.removeChild(node);
});
var css={add:function(c, id){if(c instanceof Array){c=c.join(' ')}var a=document.getElementsByTagName("head")[0],b=document.createElement('style');b.type="text/css";if(id){b.id=id;}if(b.styleSheet){b.styleSheet.cssText=c}else{b.appendChild(document.createTextNode(c))}a.appendChild(b)}, del:function(id){var el=document.getElementById(id); if(el){el.parentNode.removeChild(el)}}};
css.add([
".wto-widget--greencountdownbar { padding: 38px; margin:0; width: 100%; background-image: "+ settings.bgcol +"; z-index: 99999999; line-height: '+ (parseInt(14px)*1.5) +'px; top: 0; left: 0; position: fixed; }",
"#wto_content { position: inherit; top: 0; font-size: "+ settings.confontsize +"; letter-spacing: 0; line-height: 1; font-family: sans-serif; color: "+settings.concol +"; left: 126px; margin-top: 15px; }",
"h1{ position: inherit; top: 5px; line-height: 1.5; letter-spacing: 0; left: 52px; font-family: sans-serif; color: "+ settings.headercol +"; font-weight: bold; font-size: "+ settings.headerfontsize +"; margin-top: 24px; }",
"#wto_promotxt { position: inherit; top: 2px; right: 95px; font-size: "+ settings.promotxtfontsize +"; font-family: sans-serif; line-height: 1; letter-spacing: 0; color: "+ settings.promotxtcol +"; margin-top: 27px; }",
".wto_promocode { padding: 10px; text-align: center; border-radius: 6px; background: "+ settings.promocodebgcol +"; font-weight: bold; }",
".wto_closebtn_not { color: #000000; font-weight: bold; font-size: 20px; line-height: 20px; cursor: pointer; transition: 0.3s; z-index: 9999; position: inherit; top: 4px; right: 12px; }",
".wto_closebtn_not:hover { color: #45474a; }"
]);

var body = document.getElementsByTagName('body')[0];
var el = document.createElement('div');
body.insertAdjacentElement('afterBegin', el);
var elHTML = '<div id="'+ elid +'" class="wto-widget--greencountdownbar"><span class="wto_closebtn_not">×</span><p id="wto_content">'+ settings.contxt +'</p><h1>'+ settings.headertxt +'</h1><p id="wto_promotxt">Hurry! Use code: <span class="wto_promocode">'+ settings.promocodetxt +'</span> at checkout</p>`;

if(widget.useCountdown){
str += `  <span id="'+ elid +'--clock" style="position: fixed;  top: 25px; left: 650px; font-size: 25px; font-weight: bold; font-family: sans-serif; text-align: center;"></span><span id="'+ elid +'--message"></span>`;
}

str += ` </div>';
el.outerHTML = elHTML;

var h = document.getElementById(elid).offsetHeight;
body.style.marginTop = h + 'px';

if(settings.existingNavToMoveDown && settings.existingNav_method){
var el = document.querySelector(settings.existingNavToMoveDown);
el.style[settings.existingNav_method] = h + 'px';
}

var getTimeRemaining = function(endtime) {
var t = Date.parse(endtime) - (new Date()).getTime();
console.log(t);

var seconds = Math.floor( (t/1000) % 60 );
var minutes = Math.floor( (t/(1000*60)) % 60);
var hours = Math.floor( (t/(1000*60*60)) % 24);
var days = Math.floor( t/(1000*60*60*24) );

return {
  'total': t,
  'days': days,
  'hours': hours,
  'minutes': minutes,
  'seconds': seconds
};
}

var initializeClock = function() {
var timer = document.getElementById(elid +'--clock');
var updateTimer = function(){
  var t = getTimeRemaining(settings.myDate);
  if(t.total<=0){
      clearInterval(countdownTimer);
      document.getElementById(elid+"--message").innerHTML = "ENDED";
      timer.innerHTML.style.display = "none";
  } else {
      timer.innerHTML = '<mark style="color: #545147; text-align: center; background-color: #ffffff; border-radius: 3px; border:1px solid #bab5a2; padding: 10px;"> ' + t.days + '</mark>' + ':' + '<mark style="color: #545147; text-align: center; background-color: #ffffff; border-radius: 3px; border:1px solid #bab5a2; padding: 10px;"> ' + t.hours + '</mark>' + ':' + '<mark style="color: #545147; text-align: center; background-color: #ffffff; border-radius: 3px; border:1px solid #bab5a2; padding: 10px;:"> ' + t.minutes + '</mark>' + ':' + '<mark style="color: #545147; text-align: center; background-color: #ffffff; border-radius: 3px; border:1px solid #bab5a2; padding: 10px;"> ' + t.seconds + '</mark>';
  }
};
updateTimer();

var intvl = setInterval(updateTimer, 1000);
};
initializeClock();

})();
//!-##${widget.widgetType}--END##`;
      
      return str;
  }
},