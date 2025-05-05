function convertTemp() {
	let celcius = document.getElementById("celcius").value;
	let farenheit = document.getElementById("farenheit").value;
	
	if (celcius !=="") { // converting c to farenheit
		farenheit=(parseFloat (celcius)*9/5)+32;
		document.getElementById("farenheit").value=farenheit.toFixed(2); //ambil f trs ke decimal
	}
	else if (farenheit !=="") { //converting f to celcius
		celcius=(parseFloat (farenheit)-32)*5/9; //parsefloat gabungin (string) sama number
		document.getElementById("celcius").value=celcius.toFixed(2); //ambil angka c trs ke decimal
	}
	else {
		alert("Masukin angka anj");
	}
}

function resetFields() {
	document.getElementById("celcius").value="";
	document.getElementById("farenheit").value="";
}