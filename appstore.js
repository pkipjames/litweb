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
	{name:"Wood TV App",url:"https://www.woodtv.com",description:"Wood TV for LitWeb"},
	{name:"Virtual-Fireplace.net- the cosiest place online!",url:"http://www.virtual-fireplace.net",
	 description:"Virtual Fireplaces"},
{name:"Android Emulator",icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQahGOtHJtxGGD1nXogE03vOaxArAP7PpuSog6IhHwLdfBEytZuBQ:https://cnet4.cbsistatic.com/img/QJcTT2ab-sYWwOGrxJc0MXSt3UI%3D/2011/10/27/a66dfbb7-fdc7-11e2-8c7c-d4ae52e62bcc/android-wallpaper5_2560x1600_1.jpg",
url:"https://appetize.io/embed/standalone_05tnrmc2uh5vzuhq911b2z1qrg?device=nexus9&scale=75&orientation=landscape&osVersion=9.0&deviceColor=black",
description:"Android Emulator Application"},
  {name:"Photobarcelona",url:"http://elizabethcastro.com/html6ed/examples/styles-handheld/handheld-adjust.html",
   description:"Photos Of Barcelona"},
  {name:"Edgenuity For Students",url:"https://auth.edgenuity.com/Login/Login/Student",icon:"https://auth.edgenuity.com/Login/favicon_iPad144x144.png",description:"Edgenuity School Software, student login"},
  {name:"OS.JS 2.1.3 demo",url:"https://demo.os-js.org/",description:"OS.JS 2.1.3 demo. OS.JS 2.1.3 cloud os"},
	{name:"Virtual x86",url:"https://copy.sh/v86/",description:"VM software for x86 cpu"},
	{name:"VFD",url:"https://vfd.000webhostapp.com/",description:"VFD WebApp",icon:"https://vfd.000webhostapp.com/wp-content/uploads/2018/12/1257503_1-150x150.jpg"},
	{name:"Bing",url:"http://www.bing.com",description:"Bing"},
	{name:"Sarahsnotecards",url:"http://www.sarahsnotecards.com/",description:"Sarahs Notecards"},
	{name:"Clock Tab",url:"http://www.clocktab.com/",description:"Clock Application"},

{name:"Piskel App",url:"https://www.piskelapp.com/p/agxzfnBpc2tlbC1hcHByEwsSBlBpc2tlbBiAgKCgrLrjCAw/edit",description:"Piskel App image editor",icon:"https://www.piskelapp.com/static/resources/logo_transparent_small_compact.png"},

{name:"Metrognome Music",url:"http://www.itsmetrognome.com/music/",description:"Metrognome's music library"},

{name:"Metrognome",url:"http://www.itsmetrognome.com/",description:"Metrognome Home Page"},
{name:"BuildExplore",url:"https://pkipjames.github.io/buildexplore/",description:"BuildExplore Minecraft clone software"}


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
  var mainInstallBTN=elt("button",null,"Install");
	mainInstallBTN.addEventListener("click",function (event){installApp(window.prompt("Use App Name: ",item.name),item.url,item.icon,item.description);
								if(notify){notify("Installed "+item.name,item.name+" has been installed on this device. Please go to Apps>Reload LitWeb to see the app in the menu");}else{
								alert("Installed "+item.name+"\n\n"+item.name+" has been installed on this device. Please go to Apps>Reload LitWeb to see the app in the menu");
								}
								
								});
container.appendChild(elt("div",null,
elt("img",{height:100,alt:"icon",src:icon}),
                          elt("p",null,item.name),
                         
elt("p",null,item.description,mainInstallBTN)));

                      });}catch(err){alert(err);}

}

