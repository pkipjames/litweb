var litwebversion = "1.7";

function checkForUpdates() {
    if (localStorage.getItem("osVersion")) {
        var memory = localStorage.getItem("osVersion");

        if (memory != litwebversion) {
            if (window.confirm("Update avaible.\n\nAn update is avaible. Install now?")) {
               localStorage.clear();
                try {
                    var appCache = window.applicationCache;

                    appCache.update(); /*this will attempt to update the users cache and changes the application cache status to 'UPDATEREADY'.*/

                    if (appCache.status == window.applicationCache.UPDATEREADY) {
                        appCache.swapCache(); /*replaces the old cache with the new one.*/
                    }
                } catch (err3) {}
                     localStorage.setItem("osVersion", litwebversion);

                location.reload();
            }
        } else {
            console.log("System is running latest software :-)");
        }
    } else {
        localStorage.clear();
        localStorage.setItem("osVersion", litwebversion);
        location.reload();
    }
}

setTimeout(function() {
    checkForUpdates();
}, 10000);
