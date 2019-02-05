var appArray=[
{name:"VistaSimulator",url:"http://vistasimulator.com/vista.php"},
{name:"Malone Browser",url:"malone.html"},
{name:"Jumper",url:"https://pkipjames.github.io/gameomatic/game1.html"},
{name:"Jumper 2",url:"https://pkipjames.github.io/gameomatic/game2.html"},
{name:"Alexa",url:"https://alexaweb.herokuapp.com/"},
  {name:"App Store",url:"install.html"},
  {name:"Settings",url:"settings.html"},
  {name:"CB.VU terminal",url:"http://cb.vu"}

];
function checkFS(){
  if(localStorage.getItem("autoFS")){if(localStorage.getItem("autoFS")=="true"){
    var game=document.body;game.requestFullScreen=game.requestFullScreen||game.webkitRequestFullScreen||game.mozRequestFullScreen||game.oRequestFullScreen||game.msRequestFullScreen;game.requestFullScreen();
  }}
}
function installApp(name,url){
  localStorage.setItem("apps",JSON.stringify(appArray));
  appArray.push({name:name,url:url});
  localStorage.setItem("apps",JSON.stringify(appArray));

}
function elt(name, attributes) {
  var node = document.createElement(name);
  if (attributes) {
    for (var attr in attributes)
      if (attributes.hasOwnProperty(attr))
        node.setAttribute(attr, attributes[attr]);
  }
  for (var i = 2; i < arguments.length; i++) {
    var child = arguments[i];
    if (typeof child == "string")
      child = document.createTextNode(child);
    node.appendChild(child);
  }
  return node;
}
function runAppMenu(){try{
var container=document.querySelector("#appsMenu");
if(localStorage.getItem("apps")){alert(localStorage.getItem("apps"));
appArray=JSON.parse(localStorage.getItem("apps"));
}else{alert(localStorage.getItem("apps"));
localStorage.setItem("apps",JSON.stringify(appArray));alert(localStorage.getItem("apps"));
}

appArray.forEach(function (item){container.appendChild(elt("li",null,elt("a",{href:item.url,target:"appwindow"},item.name)));});
}catch(err){alert(err);}

}
