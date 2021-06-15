'widget 5': {
    friendlyName: 'Widget 5',
    description: 'push notification for sales. user enters email',
    fields: [
        'BACKGROUND COLOUR',
        { type: 'color', id: 'outerbgcol', name: 'outerbgcol', label: 'Outer Background Colour', value: '#FFFFFF' },
        { type: 'color', id: 'innerbgcol', name: 'innerbgcol', label: 'Inner Background Colour', value: '#F46C78' },
        { type: 'color', id: 'middlebgcol', name: 'middlebgcol', label: 'Middle Background Colour', value: '#FFE2DF' },
        //'IMAGE',
       // { type: 'image', id: 'imglink', name: 'imglink', label: 'Image', value: //'https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/clothes.jpg'},
        'X CLOSE COLOUR',
        { type: 'color', id: 'closepopupcol', name: 'closepopupcol', label: 'X Close Pop Up Colour', value: '#F46C78' },
        'TOP HEADER',
        { type: 'background-image', id: 'topheadercol', name: 'topheadercol', label: 'Text Colour', value: 'linear-gradient(to left, violet, indigo, blue)' },
        { type: 'text', id: 'topheaderfontsize', name: 'topheaderfontsize', label: 'Font Size', value: '36px' },
        { type: 'text', id: 'topheadertext', name: 'topheadertext', label: 'Header Text', value: 'Like Fun Emails?' },
        'MIDDLE HEADER',
        { type: 'color', id: 'middleheadercol', name: 'middleheadercol', label: 'Text Colour', value: '#EE82EE' },
        { type: 'text', id: 'middlefontsize', name: 'middlefontsize', label: 'Font Size', value: '25px' },
        { type: 'text', id: 'middleheadertext', name: 'middleheadertext', label: 'Middle Header Text', value: 'GET 10% OFF' },
        'CONTENT',
        { type: 'text', id: 'contentfontsize', name: 'contentfontsize', label: 'Font Size', value: '15px' },
        { type: 'text', id: 'contenttoptext', name: 'contenttoptext', label: 'Top Content', value: 'join out list and...' },
        { type: 'text', id: 'contentbottomtext', name: 'contentbottomtext', label: 'Bottom Content', value: 'your next order and a whole lot more!' },
        'BUTTON/Email',
        { type: 'text', id: 'buttontext', name: 'buttontext', label: 'Button Text', value: 'Submit' },
        { type: 'color', id: 'buttontextcol', name: 'buttontextcol', label: 'Button Text Colour', value: '#FFFFFF' },
        { type: 'color', id: 'buttonemailcol', name: 'buttonemailcol', label: 'Button Background Colour/ Email Border', value: '#FF8299' },
        { type: 'text', id: 'buttonfontsize', name: 'buttonfontsize', label: 'Button Font Size', value: '20px' }
    ],


    js_build: function(widget){
        var uniqueID = Date.now();
        var str = `
        
//!-##${widget.widgetType}--START##
// ${JSON.stringify(widget)}
(function(){
var settings = {
    outerbgcol:'${widget.outerbgcol}', // outer background colour 
    innerbgcol: '${widget.innerbgcol}', // inner background colour 
    middlebgcol: '${widget.middlebgcol}', // middle background colour    
    imglink: '${widget.imglink}', // image change
    closepopupcol: '${widget.closepopupcol}', // change x colour
    topheadertext: '${widget.topheadertext.replace('\'', '\\\'')}', // top header txt
    topheaderfontsize: '${widget.topheaderfontsize}', // header font size 
    topheadercol: '${widget.topheadercol}', // header text colour 
    middleheadercol: '${widget.middleheadercol}', // middle header text colour 
    middleheadertext: '${widget.middleheadertext.replace('\'', '\\\'')}', // middle header txt
    middlefontsize: '${widget.middlefontsize}', // middle header font size 
    contenttoptext: '${widget.contenttoptext.replace('\'', '\\\'')}', // top content txt
    contentbottomtext: '${widget.contentbottomtext.replace('\'', '\\\'')}', //  bottom content txt
    contentfontsize: '${widget.contentfontsize}', // content font size 
    buttontext : '${widget.buttontext.replace('\'', '\\\'')}', //button txt
    buttontextcol: '${widget.buttontextcol}', //button txt colour
    buttonemailcol: '${widget.buttonemailcol}', //button colour/ email border colour
    buttonfontsize: '${widget.buttonfontsize}' //button font size

};
var elid = 'wto-widget--push_notification2--${uniqueID}';
// Remove if exists - ensures no duplicates
document.querySelectorAll('.wto-widget--push_notification2').forEach(function(node){
node.parentNode.removeChild(node);
});
var body = document.getElementsByTagName('body')[0];
var el = document.createElement('div');
body.insertAdjacentElement('afterBegin', el);
var elhtml = '\ <div id="'+ elid +'" class="wto-widget--push_notification2">\
<style>@media all and (min-width: 768px) and (max-width: 1024px) { .outterbox { background-color: #FFFFFF; width: 350px; height: 350px; margin: 10px; padding: 15px; border-style: inset; position: fixed; top: 135px; left: 26px; z-index: 9999; } .innerbox { background-color: #F46C78; width: 300px; height: 300px; margin: 10px; padding: 15px; position: fixed; z-index: 9999; } .middle { background-color: #FFE2DF; width: 285px; height: 130px; margin: 3px; padding: 5px; position: fixed; z-index: 9999; } #email { position: inherit; top: 443px; border: 5px solid #FF8299; width: 221px; height: 36px; left: 48px; z-index: 9999; } button { position: inherit; top: 443px; width: 142px; height: 36px; left: 268px; background-color: #FF8299; border-color: #FF8299; color: #FFFFFF; font-weight: bold; font-size: 18px; font-family: sans-serif; z-index: 9999; } img { position: fixed; border-radius: 6px; width: 496px; height: 459px; top: 115px; left: 376px; } p { text-align: center; font-size: 15px; font-family: sans-serif; z-index: 9999; } h1 { font-weight: bold; font-size: 36px; font-family: sans-serif; text-align: center; background-image: linear-gradient(to left, violet, indigo, blue); -webkit-background-clip: text; color: transparent; z-index: 9999; } h2 { text-align: center; font-size: 25px; font-family: sans-serif; color: violet; z-index: 9999; } #close { position: inherit; z-index: 9999; top: 123px; left: 397px; color: #F46C78; font-size: 24px; font-family: sans-serif; font-weight: bold; }} @media all and (max-width: 767px) { .outterbox { background-color: #FFFFFF; width: 400px; height: 400px; margin: 10px; padding: 15px; border-style: inset; position: fixed; top: 0; left: 0; z-index: 9999; } .innerbox { background-color: #F46C78; width: 350px; height: 354px; margin: 10px; padding: 15px; position: fixed; z-index: 9999; } .middle { background-color: #FFE2DF; width: 333px; height: 158px; margin: 3px; padding: 5px; position: fixed; z-index: 9999; } #email { position: inherit; top: 350px; border: 5px solid #FF8299; width: 263px; height: 42px; left: 23px; z-index: 9999; } button { position: inherit; top: 350px; width: 144px; height: 42px; left: 285px; background-color: #FF8299; border-color: #FF8299; color: #FFFFFF; font-weight: bold; font-size: 18px; font-family: sans-serif; z-index: 9999; } img { display: none; } p { text-align: center; font-size: 16px; font-family: sans-serif; z-index: 9999; } h1 { font-weight: bold;font-size: 39px; font-family: sans-serif; text-align: center; background-image: linear-gradient(to left, violet, indigo, blue); -webkit-background-clip: text; color: transparent; z-index: 9999; } h2 { text-align: center; font-size: 33px; font-family: sans-serif; color: violet; z-index: 9999; } #close { position: inherit; z-index: 9999; top: -6px; left: 422px; color: #F46C78; font-size: 24px; font-family: sans-serif; font-weight: bold;}}</style>\
<img src="https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/clothes.jpg" style="position: fixed; border-radius: 6px; width: 594px; height: 459px; top: 73px; left: 615px; z-index: 9999;">\
<div class="outterbox" style="background-color: '+ settings.outerbgcol +'; width: 350px; height: 350px; margin: 10px; padding: 15px; border-style: inset; position: fixed; top: 99px; left: 281px; z-index: 9999; box-sizing: unset;">\
    <p id="close" style="position: fixed; z-index: 9999; top: 92px; left: 653px; color: '+ settings.closepopupcol +'; font-size: 24px; font-family: sans-serif; font-weight: bold; margin-top: 24px;">X</p>\
    <div class="innerbox" style="background-color: '+ settings.innerbgcol +'; width: 300px; height: 300px; margin: 10px; padding: 15px; position: fixed; z-index: 9999;">\
         <h1 style="font-weight: bold; font-size: '+ settings.topheaderfontsize +'; font-family: sans-serif; text-align: center; background-image: '+ settings.topheadercol +'; -webkit-background-clip: text; color: transparent; z-index: 9999; margin-top: 18px;">'+ settings.topheadertext +'</h1>\
   <div class="middle" style="background-color: '+ settings.middlebgcol +'; width: 285px; height: 130px; margin: 3px; padding: 5px; position: fixed; z-index: 9999; box-sizing: unset; margin-top: 25px;">\
        <p style="text-align: center; font-size: '+ settings.contentfontsize +'; font-family: sans-serif; z-index: 9999; margin-top: 18px;">'+ settings.contenttoptext +'</p>\
        <h2 style="text-align: center; font-size: '+ settings.middlefontsize +'; font-family: sans-serif; color: '+ settings.middleheadercol +'; z-index: 9999; font-weight: bold; margin-top: 18px;">'+ settings.middleheadertext +'</h2>\
        <p style="text-align: center; font-size: '+ settings.contentfontsize +'; font-family: sans-serif; z-index: 9999; margin-top: 18px;">'+ settings.contentbottomtext +'</p>\
   </div>\
   <input type="email" id="email" placeholder="Enter email" name="email" style="position: fixed; top: 406px; border: 3px solid '+ settings.buttonemailcol +'; width: 221px; height: 36px; left: 303px; z-index: 9999; font-family: sans-serif; font-size:10px;">\
   <button type="submit" style ="position: fixed; top: 406px; width: 128px; height: 36px; left: 519px; background-color: '+ settings.buttonemailcol +'; border-color: '+ settings.buttonemailcol +'; color: '+ settings.buttontextcol +'; font-weight: bold; font-size: '+ settings.buttonfontsize +'; font-family: sans-serif; z-index: 9999; box-sizing: unset;">'+ settings.buttontext +'</button>\
    </div></div>\
</div> \';
el.outerHTML = elhtml;
//closes popup by 
document.getElementById('close').addEventListener('click',function(){
    var elmToRemove = this.parentNode.parentNode;
    elmToRemove.parentNode.removeChild(elmToRemove);
        return false;
});
})();
//!-##${widget.widgetType}--END##`;
                
                return str;
            }
        },
        
    