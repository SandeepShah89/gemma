'widget 10': {
  friendlyName: 'Widget 10',
  description: 'Social 3 - different social platforms',
  fields: [
      'BACKGROUND COLOURS',
      { type: 'color', id: 'fbbgcol', name: 'fbbgcol', label: 'Facebook Background Colour', value: '#3b5998'},
      { type: 'color', id: 'twitbgcol', name: 'twitbgcol', label: 'Twitter Background Colour', value: '#00aced'},
      { type: 'color', id: 'linkbgcol', name: 'linkbgcol', label: 'LinkedIn Background Colour', value: '#007bb6'},
      { type: 'color', id: 'utubebgcol', name: 'utubebgcol', label: 'Youtube Background Colour', value: '#bb0000'},
      'PLACEHOLDER TEXT',
      { type: 'text', id: 'placetxt', name: 'placetxt', label: 'Placeholder Text', value: 'Your User Name' },
      { type: 'color', id: 'placetxtcol', name: 'placetxtcol', label: 'Placeholder Text Colour', value: '#FFFFFF' },
      { type: 'text', id: 'placefontsize', name: 'placefontsize', label: 'Placeholder Font Size', value: '18px' } 
  ],


  js_build: function(widget){
      var uniqueID = Date.now();
      var str = `
      
//!-##${widget.widgetType}--START##
// ${JSON.stringify(widget)}
(function(){
var settings = { 
  placetxt: '${widget.placetxt.replace('\'', '\\\'')}', // placeholder txt
  placetxtcol: '${widget.placetxtcol}', // placeholder text colour
  placefontsize: '${widget.placefontsize}', // placeholder font size
  fbbgcol: '${widget.fbbgcol}', // facebook background colour 
  twitbgcol: '${widget.twitbgcol}', // twitter background colour 
  linkbgcol: '${widget.linkbgcol}', // linkedin background colour 
  utubebgcol: '${widget.utubebgcol}' // youtube background colour 
};
var elid = 'wto-widget--social3--${uniqueID}';
// Remove if exists - ensures no duplicates
document.querySelectorAll('.wto-widget--social3').forEach(function(node){
node.parentNode.removeChild(node);
});
var css={add:function(c, id){if(c instanceof Array){c=c.join(' ')}var a=document.getElementsByTagName("head")[0],b=document.createElement('style');b.type="text/css";if(id){b.id=id;}if(b.styleSheet){b.styleSheet.cssText=c}else{b.appendChild(document.createTextNode(c))}a.appendChild(b)}, del:function(id){var el=document.getElementById(id); if(el){el.parentNode.removeChild(el)}}};
css.add([
  "*, :after, :before { box-sizing: unset; }",
  ".wto-widget--social3 { position:fixed; z-index: 9999; box-sizing: unset; }",
  ".wto-widget--fb { position: fixed; bottom: 221px; left: 5px; display: inline-block; background-color: "+ settings.fbbgcol +"; border-radius: 43px; height: 40px; padding: 15px; margin: 5px; width: 240px; border: none; z-index: 9999; box-sizing: unset; }",
  "#wto_fbusername { display: inline-block; background-color: "+ settings.fbbgcol +"; border-radius: 43px; height: 30px; padding: 15px; margin: 5px; width: 170px; position: inherit; bottom: 223px; left: 64px; border: none; }",
  "::placeholder { color: "+ settings.placetxtcol +"; font-size: "+ settings.placefontsize +"; font-weight: bold; text-align: left; }",
  "#wto_fbicon-img { height: 60px; width: 60px; position: absolute; top: 1px; left: 4px; z-index: 9999; border: 3px solid #fff; border-radius: 38px; }",
  ".wto-widget--twit { position: fixed; bottom: 149px; left: 5px; display: inline-block; background-color: "+ settings.twitbgcol +"; border-radius: 43px; height: 40px; padding: 15px; margin: 5px; width: 240px; border: none; z-index: 9999; box-sizing: unset; }",
  "#wto_twitusername { display: inline-block; background-color: "+ settings.twitbgcol +"; border-radius: 43px; height: 30px; padding: 15px; margin: 5px; width: 170px; position: inherit; bottom: 153px; left: 64px; border: none; }",
  "#wto_twiticon-img { height: 60px; width: 60px; position: absolute; top: 1px; left: 4px; z-index: 9999; border: 3px solid #fff; border-radius: 38px; }",
  ".wto-widget--link { position: fixed; bottom: 77px; left: 5px; display: inline-block; background-color: "+ settings.linkbgcol +"; border-radius: 43px; height: 40px; padding: 15px; margin: 5px; width: 240px; border: none; z-index: 9999; box-sizing: unset; }",
  "#wto_linkusername { display: inline-block; background-color: "+ settings.linkbgcol +"; border-radius: 43px; height: 30px; padding: 15px; margin: 5px; width: 170px; position: inherit; bottom: 79px; left: 64px; border: none; }",
  "#wto_linkicon-img { height: 60px; width: 60px; position: absolute; top: 1px; left: 4px; z-index: 9999; border: 3px solid #fff; border-radius: 38px; }",
  ".wto-widget--utube{ position: fixed; bottom: 5px; left: 5px; display: inline-block; background-color: "+ settings.utubebgcol +"; border-radius: 43px; height: 40px; padding: 15px; margin: 5px; width: 240px; border: none; z-index: 9999; box-sizing: unset; }",
  "#wto_utubeusername { display: inline-block; background-color: "+ settings.utubebgcol +"; border-radius: 43px; height: 30px; padding: 15px; margin: 5px; width: 170px; position: inherit; bottom: 6px; left: 64px; border: none; }",
  "#wto_utubeicon-img { height: 60px; width: 60px; position: absolute; top: 1px; left: 4px; z-index: 9999; border: 3px solid #fff; border-radius: 38px; }"
]);

var body = document.getElementsByTagName('body')[0];
var el = document.createElement('div');
body.insertAdjacentElement('afterBegin', el);
var elhtml = '\<div id="'+ elid +'" class="wto-widget--social3">\
<div class="wto-widget--fb">\
<a href="https://www.facebook.com/"></a>\
    <img id="wto_fbicon-img" src="https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/wto_social3_fbicon.jpg">\
</a>\
<input type="username" id="wto_fbusername" placeholder="'+ settings.placetxt +'" name="username">\
</div>\
<div class="wto-widget--twit">\
<a href="https://twitter.com/login?lang=en-gb">\
    <img id="wto_twiticon-img" src="https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/wto_social3_twiticon.jpg">\
</a>\
<input type="username" id="wto_twitusername" placeholder="'+ settings.placetxt +'" name="username">\
</div>\
<div class="wto-widget--link">\
<a href="https://www.linkedin.com/login?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Flinkedin&fromSignIn=true&trk=organization_guest_nav-header-signin">\
    <img id="wto_linkicon-img" src="https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/wto_social3_linkicon.jpg">\
</a>\
<input type="username" id="wto_linkusername" placeholder="'+ settings.placetxt +'" name="username">\
</div>\
<div class="wto-widget--utube">\
<a href="https://www.youtube.com/">\
    <img id="wto_utubeicon-img" src="https://c.webtrends-optimize.com/acs/accounts/2cb00c79-4e9d-44ea-9ca0-bb1338a5998c/manager/wto_social3_utubeicon.jpg">\
</a>\
<input type="username" id="wto_utubeusername" placeholder="'+ settings.placetxt +'" name="username">\
</div>\
</div>\
';
el.outerHTML = elhtml;
})();
//!-##${widget.widgetType}--END##`;
              
          return str;
      }
  },