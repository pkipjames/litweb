var appArray=[
{name:"VistaSimulator",url:"http://vistasimulator.com/vista.php"},
{name:"Malone Browser",url:"malone.html"},
{name:"Jumper",url:"https://pkipjames.github.io/gameomatic/game1.html"},
{name:"Jumper 2",url:"https://pkipjames.github.io/gameomatic/game2.html"},
{name:"Alexa",url:"https://alexaweb.herokuapp.com/"},
  {name:"App Store",url:"install.html"},
  {name:"Settings",url:"settings.html"},
  {name:"CB.VU terminal",url:"http://cb.vu"},
  {name:"Pixlr Image Editor",url:"https://pixlr.com/editor/"},
{name:"Web Dictaphone",url:"recordaudio.html"},
  {name:"Camera",url:"https://webcamera.io/"},
  {name:"Feedly RSS Reader",url:"https://feedly.com/"},
  {name:"Appetize.io Mobile Emulator",url:"https://appetize.io/"},
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
function importJS(url){
  var scr=document.createElement("script");
  scr.setAttribute("src",url);
  scr.setAttribute("type","text/javascript");
  document.head.appendChild(scr);
  return scr;
}
function enterTime(element) {try{
	function updateTime() {
		var date = new Date();
		var timeStr = date.toTimeString();
		timeStr = timeStr.substring(0, 8);
		element.textContent = timeStr;
	}
	updateTime();
	setInterval(updateTime, 600);
}catch(err){alert("enterTime\n\n"+err+"\n\n"+element);}
}

function statusBar(element) {try{
	function update() {try{
		var out = elt("span", null, "LitWeb ");
		if (navigator.getBattery) {
			var batObject = navigator.getBattery();
			var level = elt("span", null, batObject.level);

			var batteryIndicator = elt("span", null, elt("meter", {
				value: batObject.level,
				low: 25,
				min: 0,
				max: 100,
				optimum: 100
			}));
			
			if (batObject.charging) {
				level.style.color = "#00ff00";
				level.textContent += " (Charging)";
			}
			try{
			batteryIndicator.appendChild(level);
			}catch(err3){alert("statusbar update append level to battery: "+err3+level);}
			try{
			out.appendChild(batteryIndicator);
			}catch(err3){alert("statusbar update append batteryIndicator to out: "+err3+level);}
		}
		element.innerHTML="";
		element.appendChild(out);
	}catch(err2){alert("statusbar update: \n"+err2);}
	}
	update();

         setInterval(update, 700);
	}catch(err){alert("statusBar\n\n"+err+"\n\n"+element+"\n\n");}

}
function checkFS(){
  if(localStorage.getItem("autoFS")){if(localStorage.getItem("autoFS")=="true"){
    var game=document.body;game.requestFullScreen=game.requestFullScreen||game.webkitRequestFullScreen||game.mozRequestFullScreen||game.oRequestFullScreen||game.msRequestFullScreen;game.requestFullScreen();
  }}
}
function setBG(){
  if(localStorage.getItem("bgimg")){document.body.style.backgroundImage="url('"+localStorage.getItem("bgimg")+"')";
                                    document.body.style.backgroundSize="cover";document.body.style.backgroundPosition="center";}
                                    
}
function installApp(name,url){
  appArray=JSON.parse(localStorage.getItem("apps"));
  console.log(JSON.stringify(appArray));
  localStorage.setItem("apps",JSON.stringify(appArray));
  appArray.push({name:name,url:url});
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

appArray.forEach(function (item){if(item.js){container.appendChild(elt("li",null,elt("a",{href:item.url,onclick:item.js,target:"appwindow"},item.name)));}else{container.appendChild(elt("li",null,elt("a",{href:item.url,target:"appwindow"},item.name)));}});
}catch(err){alert(err);}

}
