var version="2.0";
function checkForUpdates(){
if(localStorage.getItem("osVersion")){
var memory=localStorage.getItem("osVersion");
if(memory!=version){
if(window.confirm("Update avaible. Update now? (It only takes pretty much 1 page reload)")){localStorage.clear();location.reload();}
}else{
 console.log("System is running latest software :-)"); 
}
}else{
localStorage.clear();
localStorage.setItem("osVersion",version);
location.reload();
}
}

setTimeout(function (){checkForUpdates();},10000);
