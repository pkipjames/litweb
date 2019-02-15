var version="1.0";
function checkForUpdates(){
if(localStorage.getItem("osVersion")){
var memory=localStorage.getItem("osVersion");
if(memory!=version){
if(window.confirm("Update avaible. Update now")){localStorage.clear();}
}
}else{
localStorage.clear();
localStorage.setItem("osVersion",version);
location.reload();
}
}
