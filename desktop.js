/*desktop javascript code*/
var desktopItems=[

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
function fixDesktopUp(){
 if(localStorage.getItem("desktopItems")){
   desktopItems=JSON.parse(localStorage.getItem("desktopItems"));
   
 }else{
  localStorage.setItem("desktopItems",JSON.stringify(desktopItems));
  
 }
}

function addToDesktop(item){
 desktopItems.push(item);
    localStorage.setItem("desktopItems",JSON.stringify(desktopItems));
}

function showDesktop(){
 fixDesktopUp();
  document.body.innerHTML="";
  for (var j=0;j<desktopItems.length;j++){
    var curItem=desktopItems[j];
   document.body.appendChild(elt("iframe",{style:"border:0px none;display:inline;",height:curItem.height,width:curItem.width,src:curItem.src},curItem.name+" widget"));
   
  }
}
