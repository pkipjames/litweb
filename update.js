var version="5.1";
function checkForUpdates(){
if(localStorage.getItem("osVersion")){
var memory=localStorage.getItem("osVersion");
 
if(memory!=version){
if(window.confirm("Update avaible. Update now? (It only takes pretty much 1 page reload)")){
  for (var i=0;i<localStorage.length;i++){
  var key=localStorage.key(i);
   if(key!="apps"){
    localStorage.removeItem(key);
   }else{
     /*While the rest are deleted normally, the apps are more delicate. No one wants to have to reinstall all their apps.*/
     if(appArray){
      for (var j=0;j<appArray.length;j++){
        var appsFromStorage=JSON.parse(localStorage.getItem("apps"));
        var item=appArray[j];
           if(!(item in appsFromStorage)){
             appsFromStorage.push(item);
           }
        
        
        
      }
     }
   }
   
  }
                                                                                            try{var appCache = window.applicationCache;

appCache.update(); /*this will attempt to update the users cache and changes the application cache status to 'UPDATEREADY'.*/

if (appCache.status == window.applicationCache.UPDATEREADY) {
  appCache.swapCache(); /*replaces the old cache with the new one.*/
}}catch(err3){}location.reload();}
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
