unction bluetoothConnect() {
  navigator.bluetooth.requestDevice({filters: [{services: ['generic_access']}]})
	  .then(function(){alert("Connected to: "+device.name});})
	  .catch(console.error);
}
