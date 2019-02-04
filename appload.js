var appArray=[
{name:"VistaSimulator",url:"http://vistasimulator.com/vista.php"},
{name:"Malone Browser",url:"malone.html"},
{name:"Jumper",url:"https://pkipjames.github.io/gameomatic/game1.html"},
{name:"Jumper 2",url:"https://pkipjames.github.io/gameomatic/game2.html"},
{name:"Alexa",url:"https://alexaweb.herokuapp.com/"},
  {name:"App Store",url:"install.html"}

];

function installApp(name,url){
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
alert(appArray);
var container=document.querySelector("#appsMenu");
if(localStorage.getItem("apps")){
appArray=JSON.parse(localStorage.getItem("apps"));
}else{
localStorage.setItem("apps",JSON.stringify(appArray));
}

alert(appArray);
appArray.forEach(function (item){container.appendChild(elt("li",null,elt("a",{href:item.url,target:"appwindow"},item.name)));});
}catch(err){alert(err);}

}
