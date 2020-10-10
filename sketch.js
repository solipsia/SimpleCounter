function setup() {
	createCanvas(windowWidth, windowHeight);
}

function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function draw() {
	background(0);
	let baseline=530000;
	let start = day();
	const date1 = new Date('8/1/2020');
	const date2 = new Date('8/1/2021');
	const now = new Date();
	let currentvalue = map(now,date1,date2,0,baseline)
	let outputstr = (Math.round(currentvalue*100)/100).toFixed(2);
	textSize(150);
	fill(255, 255, 255);
	textAlign(CENTER, CENTER);
	text(addCommas(outputstr),width/2, height/2);
}
