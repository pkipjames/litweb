if (window.applicationCache&&navigator.onLine) {
  // "Naturally" reload when an update is available
  var reload = false

  window.applicationCache.addEventListener('updateready', () => {
    if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
      window.applicationCache.swapCache()
      reload = true
    }
  }, false)

  setInterval(() => {
    try {
      /* There's nothing to update for first-time load, browser freaks out */
      window.applicationCache.update()
    } catch (e) { }
  }, 1000 * 60 * 60) // Every hour
}
