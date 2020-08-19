function setup() {
	createCanvas(windowWidth, windowHeight);
}

function formatMoney(number, decPlaces, decSep, thouSep) {
	decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
	decSep = typeof decSep === "undefined" ? "." : decSep;
	thouSep = typeof thouSep === "undefined" ? "," : thouSep;
	var sign = number < 0 ? "-" : "";
	var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
	var j = (j = i.length) > 3 ? j % 3 : 0;
	
	return sign +
		(j ? i.substr(0, j) + thouSep : "") +
		i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
		(decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : "");
	}
	
	document.getElementById("b").addEventListener("click", event => {
	  document.getElementById("x").innerText = "Result was: " + formatMoney(document.getElementById("d").value);
	});

function draw() {
	background(0);
	let annual=530000;
	let start = day();
	const date1 = new Date('8/1/2020');
	const date2 = new Date('8/1/2021');
	const now = new Date();
	let currentvalue = map(now,date1,date2,0,annual)
	let outputstr = (Math.round(currentvalue*100)/100).toFixed(2);
	textSize(100);
	fill(255, 255, 255);
	text(formatMoney(currentvalue,2,'.',','),width/2-250, height/2);
}