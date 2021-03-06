var elm = document.createElement('div');
document.getElemenstByTagName('body')[0].appendChild(elm);
elm.outerHTML = '\ <div id="formdiv"> \
<input id="myDate" type="datetime-local" step="2">\
<button onclick="window.initializeClock('clockdiv', 'myDate', 'message')">Start</button>\
</div>\
<div id="clockdiv"></div>\
<div id="message"></div>\';

window.getTimeRemaining = function(endtime) {
    var t = Date.parse(endtime) - (new Date()).getTime();
    console.log(t);
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60);
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
  
  window.initializeClock = function(clockId, dateId) {
      var timer = document.getElementById(clockId);
      var deadline = document.getElementById(dateId).value;
      var countdownTimer = setInterval(function(){
        var t = getTimeRemaining(deadline);
        timer.innerHTML = 'Days: ' + t.days + '<br>' + 'Hours: ' + t.hours + '<br>' + 'Minutes: ' + t.minutes + '<br>' + 'Seconds: ' + t.seconds;
        if(t.total<=0){
          clearInterval(countdownTimer);
          document.getElementById("message").innerHTML = "Expired";
        }
      }, 1000);
  }