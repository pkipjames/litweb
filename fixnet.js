if (window.applicationCache&&navigator.onLine) {
  if(navigator.onLine!==null){
  /*"Naturally" reload when an update is available*/
  var reload = false

  window.addEventListener('load',function (){
    if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
      window.applicationCache.swapCache();
      reload = true;
    }
  }, false);

  setInterval(function(){
    try {
      /* There's nothing to update for first-time load, browser freaks out */
      window.applicationCache.update();
    } catch (err) {console.log(err);}
  }, 1000 * 60 * 60) /*Every hour*/
  }
}
