"hello-bar": {
  friendlyName: 'Hello Bar',
  description: 'A small bar across the top of your page. Useful for announcements, guidance, offers, etc.',
  fields: [
       'CONTENT',
      { type: 'text', id: 'text', name: 'text', label: 'text', value: 'Black Friday sale is now on! Upto 50% off across the store.' },
      { type: 'color', id: 'bgcol', name: 'bgcol', label: 'Background Colour', value: '#242424' },
      { type: 'color', id: 'color', name: 'color', label: 'Text Colour', value: '#FFFFFF' },
      { type: 'text', id: 'fontsize', name: 'fontsize', label: 'Font Size', value: '14px' },
      //'CHECKBOXES',
      // { type: 'checkbox', id: 'makesticky', name: 'makesticky', label: 'Make sticky and push page down?', value: false },
      // { type: 'checkbox', id: 'haveclosebtn', name: 'haveclosebtn', label: 'Include close button?', value: true },
      'NAVS',
      { type: 'text', id: 'existingNavSelector', name: 'existingNavSelector', label: 'Existing Nav? Selector:', value: '' },
      { type: 'text', id: 'existingNavMethod', name: 'existingNavMethod', label: 'Existing Nav? Method:', value: '' },
      
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

var elHTML = '<div id="'+ elid +'" class="wto-widget--hellobar" style="padding: 10px; width: 100%; background: '+ settings.bgcol +'; color: '+ settings.color +'; z-index: 99999999; text-align: center; line-height: '+ (parseInt(settings.fontSize)*1.5) +'px; font-size: '+ settings.fontSize +'; top: 0; left: 0; position: fixed;">' + settings.text`;

if(widget.useCountdown){
str += ` + '<span id="'+ elid +'--clock" style="display: inline-block !important; margin-left: 10px !important; font-weight: 600 !important;"></span><span id="'+ elid +'--message"></span>'`;
}

str += `+ '</div>';
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
      timer.innerHTML = t.days + ' ' + t.hours + ':' + t.minutes + ':' + t.seconds;
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