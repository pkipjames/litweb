function bluetoothConnect() {
  navigator.bluetooth.requestDevice({
  filters: [
    { name: '' },
    { namePrefix: '0' },
    { namePrefix: '1' },
    { namePrefix: '2' },
    { namePrefix: '3' },
    { namePrefix: '4' },
    { namePrefix: '5' },
    { namePrefix: '6' },
    { namePrefix: '7' },
    { namePrefix: '8' },
    { namePrefix: '9' },
    { namePrefix: 'a' },
    { namePrefix: 'b' },
    { namePrefix: 'c' },
    { namePrefix: 'd' },
    { namePrefix: 'e' },
    { namePrefix: 'f' },
    { namePrefix: 'g' },
    { namePrefix: 'h' },
    { namePrefix: 'i' },
    { namePrefix: 'j' },
    { namePrefix: 'k' },
    { namePrefix: 'l' },
    { namePrefix: 'm' },
    { namePrefix: 'n' },
    { namePrefix: 'o' },
    { namePrefix: 'p' },
    { namePrefix: 'q' },
    { namePrefix: 'r' },
    { namePrefix: 's' },
    { namePrefix: 't' },
    { namePrefix: 'u' },
    { namePrefix: 'v' },
    { namePrefix: 'w' },
    { namePrefix: 'x' },
    { namePrefix: 'y' },
    { namePrefix: 'z' },
    { namePrefix: 'A' },
    { namePrefix: 'B' },
    { namePrefix: 'C' },
    { namePrefix: 'D' },
    { namePrefix: 'E' },
    { namePrefix: 'F' },
    { namePrefix: 'G' },
    { namePrefix: 'H' },
    { namePrefix: 'I' },
    { namePrefix: 'J' },
    { namePrefix: 'K' },
    { namePrefix: 'L' },
    { namePrefix: 'M' },
    { namePrefix: 'N' },
    { namePrefix: 'O' },
    { namePrefix: 'P' },
    { namePrefix: 'Q' },
    { namePrefix: 'R' },
    { namePrefix: 'S' },
    { namePrefix: 'T' },
    { namePrefix: 'U' },
    { namePrefix: 'V' },
    { namePrefix: 'W' },
    { namePrefix: 'X' },
    { namePrefix: 'Y' },
    { namePrefix: 'Z' }
  ],
  optionalServices: ['generic_access']
}).then(function (device){alert("Connected to: "+device.name);})
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
