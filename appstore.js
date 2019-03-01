var appArray;
function installApp(name,url,icon,description){
  appArray=JSON.parse(localStorage.getItem("apps"));
  console.log(JSON.stringify(appArray));
  localStorage.setItem("apps",JSON.stringify(appArray));
	var app={name:name,url:url};
	if(icon){app["icon"]=icon;}
	if(description){app["description"]=description;}
  appArray.push(app);
    console.log(JSON.stringify(appArray));

  localStorage.setItem("apps",JSON.stringify(appArray));
  
  console.log(JSON.stringify(appArray));

}

var newAppArray=[
{name:"iOS Emulator",icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuyb2tRjS8m3zgWIoxjsEjOB6jXXkrBBDtVlrN0BgvDAOgThcL:https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/IOS_logo.svg/300px-IOS_logo.svg.png",url:"https://appetize.io/embed/standalone_05tnrmc2uh5vzuhq911b2z1qrg?device=ipadair2&scale=75&orientation=landscape&osVersion=12.1&deviceColor=black",
description:"iOS Emulator Application"},
{name:"Android Emulator",icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQahGOtHJtxGGD1nXogE03vOaxArAP7PpuSog6IhHwLdfBEytZuBQ:https://cnet4.cbsistatic.com/img/QJcTT2ab-sYWwOGrxJc0MXSt3UI%3D/2011/10/27/a66dfbb7-fdc7-11e2-8c7c-d4ae52e62bcc/android-wallpaper5_2560x1600_1.jpg",
url:"https://appetize.io/embed/standalone_05tnrmc2uh5vzuhq911b2z1qrg?device=nexus9&scale=75&orientation=landscape&osVersion=9.0&deviceColor=black",
description:"Android Emulator Application"},
  {name:"Photobarcelona",url:"http://elizabethcastro.com/html6ed/examples/styles-handheld/handheld-adjust.html",
   description:"Photos Of Barcelona"},
  {name:"Edgenuity For Students",url:"https://auth.edgenuity.com/Login/Login/Student",icon:"https://auth.edgenuity.com/Login/favicon_iPad144x144.png",description:"Edgenuity School Software, student login"},
  {name:"OS.JS 2.1.3 demo",url:"https://demo.os-js.org/",description:"OS.JS 2.1.3 demo. OS.JS 2.1.3 cloud os"}


];
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

function runAppStore(){try{
var container=document.querySelector("#appStoreIcons");


newAppArray.forEach(function (item){
  var icon=item.icon||"placeholderapp.png";
  var mainInstallBTN=elt("button",{onclick:function (){installApp(window.prompt("Use App Name: ",item.name),item.url,item.icon,item.description);}},"Install");
container.appendChild(elt("div",null,
elt("img",{height:100,alt:"icon",src:icon}),
                          elt("p",null,item.name),
                         
elt("p",null,item.description,mainInstallBTN)));

                      });}catch(err){alert(err);}

}

