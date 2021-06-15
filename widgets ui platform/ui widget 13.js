"widget 13": {
  friendlyName: 'widget 13',
  description: 'promo countdown pop up',
  fields: [
      'HEADER',
       { type: 'text', id: 'headertxt', name: 'headertxt', label: 'Header Text', value: '20% OFF %<br> Free Shipping' },
       { type: 'color', id: 'headercol', name: 'headercol', label: 'Header Colour', value: '#FFFFFF' },
      { type: 'text', id: 'headerfontsize', name: 'headerfontsize', label: 'Header Font Size', value: '30px' },
      ' TOP CONTENT',
      { type: 'text', id: 'contxt', name: 'contxt', label: ' Top Content Text', value: 'When you complete your order in...' },
      { type: 'color', id: 'concol', name: 'concol', label: ' Top Content Colour', value: '#FFFFFF' },
      { type: 'text', id: 'confontsize', name: 'confontsize', label: ' Top Content Font Size', value: '15px' },
      ' BOTTOM CONTENT',
      { type: 'text', id: 'bcontxt', name: 'bcontxt', label: 'Bottom Content Text', value: 'No thanks, Ill pay full price' },
      { type: 'color', id: 'bconcol', name: 'bconcol', label: 'Bottom Content Colour', value: '#FFFFFF' },
      { type: 'text', id: 'bconfontsize', name: 'bconfontsize', label: 'Bottom Content Font Size', value: '10px' },
      'BUTTON',
      { type: 'text', id: 'btntxt', name: 'btntxt', label: 'Button Text', value: 'GET MY 20% OFF' },
      { type: 'color', id: 'btntxtcol', name: 'btntxtcol', label: 'Button Text Colour', value: '#30B6DF' },
      { type: 'color', id: 'btnbgcol', name: 'btnbgcol', label: 'Button Background Colour', value: '#FFFFFF' },
      { type: 'text', id: 'btnfontsize', name: 'btnfontsize', label: 'Button Font Size', value: '15px' },
      'COUNTDOWN TIMER',
      { type: 'checkbox', id: 'useCountdown', name: 'useCountdown', label: 'Include Countdown?', value: false }, 
      { type: 'datetime-local', id: 'myDate', name: 'myDate', label: 'End date & time', value: 'yyyy/mm/dd hh:mm:ss' }

  ],
  
  js_build: function(widget){
      
      console.log(widget);
      
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
  bconfontsize: '${widget.bconfontsize}', //  content font size  
  bcontxt: '${widget.bcontxt.replace('\'', '\\\'')}', // content txt
  bconcol: '${widget.bconcol}', // content colour 
  btntxt : '${widget.btntxt.replace('\'', '\\\'')}', // button txt
  btntxtcol: '${widget.btntxtcol}', // button txt colour
  btnbgcol: '${widget.btnbgcol}', // button colour
  btnfontsize: '${widget.btnfontsize}', // button font size
  myDate: '${widget.myDate}'
};
var elid = 'wto-widget--countdowntimerpromo--${uniqueID}';
// Remove if exists - ensures no duplicates
document.querySelectorAll('.wto-widget--countdowntimerpromo').forEach(function(node){
node.parentNode.removeChild(node);
});
var css={add:function(c, id){if(c instanceof Array){c=c.join(' ')}var a=document.getElementsByTagName("head")[0],b=document.createElement('style');b.type="text/css";if(id){b.id=id;}if(b.styleSheet){b.styleSheet.cssText=c}else{b.appendChild(document.createTextNode(c))}a.appendChild(b)}, del:function(id){var el=document.getElementById(id); if(el){el.parentNode.removeChild(el)}}};
css.add([
  ".wto-widget--countdowntimerpromo { z-index: 9999; margin: 5px; padding: 25px; position: fixed; bottom: 10px; left: 10px; border: none; box-sizing: unset; }",
  "#bg { z-index: 9999; margin: 5px; padding: 25px; position: fixed; bottom: 10px; left: 10px; height: 320px; width: 300px; border-radius: 41px; border: none; box-sizing: unset; }",
  "h1 { z-index: 9999; font-size: "+ settings.headerfontsize +"; font-weight: bold; font-family: Georgia; color: "+ settings.headercol +"; bottom: 249px; left: 61px; position: inherit; text-align: center; line-height: 1.1; margin: 17px; }",
  "#wto_content { z-index: 9999; font-size: "+ settings.confontsize +"; font-weight: bold; font-family: Georgia; color: "+ settings.concol +"; bottom: 229px; margin-left: 16px; position: inherit; text-align: center; line-height: 1.1; margin-bottom; 1px; }",
  "#wto_endmessage { z-index: 9999; font-size: "+ settings.bconfontsize +"; font-weight: bold; font-family: Georgia; color: "+ settings.bconcol +"; bottom: 52px; margin-left: 77px; position: inherit; text-align: center; line-height: 1.1; }",
  "#wto_cd_btn { z-index: 9999; font-size: "+ settings.btnfontsize +"; font-family: Georgia; color: "+ settings.btntxtcol +"; bottom: 90px; margin-left: 45px; position: inherit; text-align: center; line-height: 1.1; background: "+ settings.btnbgcol +"; border: none; border-radius: 3px; height: 30px; width: 209px; }",
  ".wto_closebtn_not { color: #FFFFFF; font-size: 25px; line-height: 20px; cursor: pointer; transition: 0.3s; z-index: 9999; position: inherit; bottom: 330px; left: 310px; }",
  ".wto_closebtn_not:hover { color: #45474a; }"
]);

var body = document.getElementsByTagName('body')[0];
var el = document.createElement('div');
body.insertAdjacentElement('afterBegin', el);
var elHTML = '<div id="'+ elid +'" class="wto-widget--countdowntimerpromo"><img id="bg" src="https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/bluebg.jpg"><span class="wto_closebtn_not">×</span><h1>'+ settings.headertxt +'</h1><p id="wto_content">'+ settings.contxt +'</p><button type="button" id="wto_cd_btn">'+ settings.btntxt +'</button><p id="wto_endmessage">'+ settings.bcontxt+'</p>`;

if(widget.useCountdown){
str += ` + <span id="'+ elid +'--clock" style="font-size: 35px; font-weight: bold; font-family: Georgia; color: #000000; position: fixed; bottom: 162px; left: 57px; z-index: 9999;"></span><span id="'+ elid +'--message"></span>`;
}

str += `+ </div>';
el.outerHTML = elHTML;

var getTimeRemaining = function(endtime) {
var t = Date.parse(endtime) - (new Date()).getTime();
console.log(t);

var seconds = Math.floor( (t/1000) % 60 );
var minutes = Math.floor( (t/(1000*60)) % 60);
var hours = Math.floor( (t/(1000*60*60)) % 24);
var days = Math.floor( t/(1000*60*60*24) );
var totalhrs = hours+ (days*24);
return {
  'total': t,
  'days': days,
  'hours': hours,
  'minutes': minutes,
  'seconds': seconds,
  'totalhrs': totalhrs
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
      timer.innerHTML = '<mark style="background-color: #ffffff; border-radius: 5px; padding: 7px">'+ t.totalhrs + ' Hr'+ '</mark>' + ':' + '<mark style="background-color: #ffffff; border-radius: 5px; padding: 7px">' + t.minutes + ' Min' +'</mark>';
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