//function returns time once
function print_every_sec() { 
	let d = new Date();
	let time = d.toLocaleTimeString();
	console.log(time);
}

//above function is called every second
setInterval(print_every_sec,1000);


