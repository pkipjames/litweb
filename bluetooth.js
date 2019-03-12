function bluetoothConnect() {
  navigator.bluetooth.requestDevice({filters: [{services: ['generic_access']}]})
	  .then(function(){alert("Connected to: "+device.name);})
	  .catch(console.error);
}

function isBT(){
if(navigator.bluetooth){	
	setInterval(function(){
		if(navigator.bluetooth.checkAvaibility()){
			document.querySelector("#btIcon1").style.display="inline";

		}else{
			document.querySelector("#btIcon1").style.display="none";

			
		}
		
	},10000);
	
	
}else{
document.querySelector("#btIcon1").style.display="none";
	
	
}
}
