var oldcookie=Cookies.get();

function checkForNotifications(){
if(Cookies.get()!=oldcookie){
var newcookies=Cookies.get();
for (var item in newcookies){
if(!oldcookie[item]){
displayNotification(item,newcookies[item]);


}
}
oldcookie=newcookies;
}
requestAnimationFrame(checkForNotifications);
}

function notify(name,value){
Cookies.set(name, value, { expires: 7,domain:"github.io"});




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

function displayNotification(name,value){
var out=document.querySelector("#notifcationHolder");
var elemento=elt("div",{style:"background-color:rgba(0,0,0,0.3);color:#ffffff"},elt("b",null,name),elt("p",null,value));
function closeNotifcation(){elemento.parentNode.removeChild(elemento);}
element.onclick=closeNotifcation;
setTimeout(closeNotifcation,10000);
out.appendChild(elemento);

}
