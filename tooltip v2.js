
var settings = {
    header: "Don't miss out on our new drops and promotions! Turn on notification:",
    content: "To turn on notification on:<br> 1. <strong>Click on the icon </strong>like shown in the example.<br> 2.<strong> Allow</strong> notification.",
    buttonText : "OK, GOT IT.",
    buttonTextColor: "white",
    buttonBackColor: "#EE1B2E"
};

var elm = document.createElement('div');
document.getElemenstByTagName('body')[0].appendChild(elm);
elm.outerHTML = ' \
<div style="position: fixed; \
top: 0; \
left: 0; \
background: white; \
width: 286px; \
height: 380px; \
margin: 15px; \
box-shadow: 3px 6px 3px 6px grey;"> \
 <div id="headerimg"> \
    <header> <img src="C:\\Users\\gemma\\Desktop\\Web Trends\\headerimgv1.png"> </header> \
</div> \
<br> \
<div style="padding: 15px;"> \
    <header style=" \
    text-align: left; \
    background: white; \
    color: #2d2e30; \
    font-family: sans-serif; \
    font-size: 15px; \
    font-weight: bold;">'+ settings.heading +'</header> \
    <p style=" \
        font-family: sans-serif; \
        font-size: 15px; \
        text-align: left;">'+ settings.content +'</p> \
    <button id="not"; style=" \
    font-family: sans-serif; \
    font-size: 13px; \
    font-weight: bold; \
    color:'+ settings.buttonTextColor+'; \
    background-color:'+ settings.buttonBackColor +' ; \
    text-align: center; \
    position: absolute; \
    right: 10px; \
    border-radius: 2px; \
    height: 45px; \
    width: 110px;">'+ settings.buttonText +'</button> \
</div> \
';


document.getElementById('not').onclick = function(){
    var elmToRemove = this.parentNode.parentNode;
    elmToRemove.parentNode.removeChild(elmToRemove);
        return false;
        };
