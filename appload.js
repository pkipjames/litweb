var appArray=[
{name:"VistaSimulator",url:"http://vistasimulator.com/vista.php"},
{name:"Malone Browser",url:"malone.html"},
{name:"Jumper",url:"https://pkipjames.github.io/gameomatic/game1.html"},
{name:"Jumper 2",url:"https://pkipjames.github.io/gameomatic/game2.html"},
{name:"Alexa",js:"window.open('alexaapp','https://alexaweb.herokuapp.com/','height=100,width=100,location=no,status=no,titlebar=yes,resizable=no,menubar=no');",url:"javascript:void(0);"},
  {name:"App Store",url:"install.html"},
  {name:"Settings",url:"settings.html"},
  {name:"CB.VU terminal",url:"http://cb.vu"},
  {name:"Pixlr Image Editor",url:"https://pixlr.com/editor/"},
  {name:"Web Dictaphone",url:"recordaudio.html"},
  {name:"Camera",url:"http://cam-recorder.com/"},
  {name:"Plyr Media Player",url:"plyr.html"},
  {name:"Mail.com",url:"http://www.mail.com"}
	

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
function convertToPercent(fraction) {
return (fraction * 100);
}
function importJS(url){
  var scr=document.createElement("script");
  scr.setAttribute("src",url);
  scr.setAttribute("type","text/javascript");
  document.head.appendChild(scr);
  return scr;
}
function enterTime(element) {
	function updateTime() {
		var date = new Date();
		var timeStr = date.toTimeString();
		timeStr = timeStr.substring(0, 8);
		element.textContent = timeStr;
	}
	updateTime();
	setInterval(updateTime, 500);
}

function statusBar(element) {
	function update() {try{
		if (navigator.getBattery) {
			 navigator.getBattery().then(function (batObject){
			var level = document.querySelector("#batText");
      var batteryIndicator = document.querySelector("#batMeter");
batteryIndicator.value=batObject.level;
      level.textContent=convertToPercent(batObject.level)+"%";
			if (batObject.charging) {
				level.style.color = "#ffff00";
				level.textContent += " (Charging)";
      }else{	
        level.style.color = "#ffffff";
           }
    
		
						     });
    }else{document.querySelector(".statusBarForOS").style.display="none";}
	}catch(err2){alert("statusbar update: \n"+err2);}
	}
	update();

         setInterval(update, 600);

}
function checkFS(){
  if(localStorage.getItem("autoFS")){if(localStorage.getItem("autoFS")=="true"){
    var game=document.body;game.requestFullScreen=game.requestFullScreen||game.webkitRequestFullScreen||game.mozRequestFullScreen||game.oRequestFullScreen||game.msRequestFullScreen;game.requestFullScreen();
  }}
}

function setBG(){
  if(localStorage.getItem("bgimg")){document.body.style.backgroundImage="url('"+localStorage.getItem("bgimg")+"')";
                                    document.body.style.backgroundSize="cover";document.body.style.backgroundPosition="center";}else{
					    doSetBG("wallpaper1.jpg");
				    }
                                    
}
function doSetBG(url){
localStorage.setItem("bgimg",url);	
}
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


function runAppMenu(){try{
var container=document.querySelector("#appsMenu");
if(localStorage.getItem("apps")){console.log(localStorage.getItem("apps"));
appArray=JSON.parse(localStorage.getItem("apps"));
}else{console.log(localStorage.getItem("apps"));
localStorage.setItem("apps",JSON.stringify(appArray));console.log(localStorage.getItem("apps"));
}

appArray.forEach(function (item){var icon=item.icon||"placeholderapp.png";if(item.js){container.appendChild(elt("li",{style:"list-style-image:url(\""+icon+"\");list-style-position:inside;"},elt("a",{href:item.url,onclick:item.js,target:"appwindow"},item.name)));}else{container.appendChild(elt("li",null,elt("img",{height:20,alt:"icon",src:icon}),elt("a",{href:item.url,target:"appwindow"},item.name)));}});
}catch(err){alert(err);}

}
