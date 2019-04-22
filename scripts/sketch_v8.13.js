var bgCol;
var strCol

function setup() {
    createCanvas(800, 800);
	colorMode(HSB, 360, 100, 100);
    bgCol = color(0, 0, 0);
	strCol = color(0, 0, 100);

}

function draw() {
    background(bgCol);
	noFill();
    stroke(strCol);
	strokeCap(SQUARE);
	frameRate(60);
	translate(110, 200);

//	rotate(PI/4);
//	translate(0, -400);
	
//	translate(282.5, -200);
	var now = new Date();
	
//	var hou = now.getHours;
//
//	
//	var scl = map(hou, 0, 23, 0.1, 0.3);
//	scale(scl);
	
	scale(0.5);
	var hue = 10;
	var sat = 100;
	var bri = 100;
		
//	var wid = 1131.37/100;
	var wid = 1131.37/100;
    //heights
    var milX = wid*27.5;
    var secX = wid*42.5;   
    var minX = wid*57.5;
    var houX = wid*75;


	var milMargin = 221.45;
	var secMargin = 100.75;
	var minMargin = 100.75;
	var houMargin = 271.45;


	//millis 34
	var mil = now.getMilliseconds();
	var milY = map(mil, 0, 999, 0 + milMargin, height - milMargin);

	//sec 21
	var sec = now.getSeconds();
	var secY = map(sec, 0, 59, 0 + secMargin, height - secMargin);

	//min 13
	var min = now.getMinutes();
	var minY = map(min, 0, 59, 0 + minMargin, height - minMargin);
	
	//hour 8
	var hou = now.getHours();
	var houY = map(hou, 0, 23, 0 + houMargin, height - houMargin);
	
	var strW = map(hou, 0, 23, 0, 4);
	var strW2 = map(sec, 0, 59, 1, 24);

	
	var hueB = map(hou, 0, 59, 1, 360);
	var hueC = map(min, 0, 59, 60, 93);
	
	
	var cur = map(sec, 0, 69, 5, 100);
	curveTightness(cur);

	
//	strokeWeight(1);
////		
////	line(milX, height - milMargin, milX, 0 + milMargin);
////	
////    line(secX, height - secMargin, secX, 0 + secMargin);
////	
////    line(minX, height - minMargin, minX, 0 + minMargin);
////	
////    line(houX, height - houMargin, houX, 0 + houMargin);
	
	stroke(hueB, hueC, hueC);
	
	strokeWeight(strW);

	ellipse(wid*50, height/2, wid*55);
	noFill();

	strokeWeight(1);
	
	line(milX, height - milMargin, milX, milY);
	
    line(secX, height - secMargin, secX, secY);
	
    line(minX, height - minMargin, minX, minY);
	
    line(houX, height - houMargin, houX, houY);
	
	strokeWeight(1);
//	noFill();
    beginShape();
//	vertex(wid*-10, height/2);
//	vertex(wid*0, height/2);
//
	vertex(wid*10, height/2);
//	vertex(wid*22.5, height/2);

    curveVertex(milX, milY);
    curveVertex(secX, secY);
    curveVertex(minX, minY);
    curveVertex(houX, houY);

	vertex(wid*90, height/2);
//	vertex(wid*100, height/2);
//	vertex(wid*110, height/2);
    endShape();
	
	strokeWeight(strW2);
	beginShape();
//	vertex(wid*-10, height/2);
//	vertex(wid*0, height/2);
//
	vertex(wid*10, height/2);
//	vertex(wid*22.5, height/2);

    curveVertex(milX, milY);
    curveVertex(secX, secY);
    curveVertex(minX, minY);
    curveVertex(houX, houY);

	vertex(wid*90, height/2);
//	vertex(wid*100, height/2);
//	vertex(wid*110, height/2);
    endShape();
	
	
	noFill();

//	strokeWeight(4);
//		point(wid*10, height/2);
//		point(wid*90, height/2);
//	
	strokeWeight(0);
    point(milX, milY);
    point(secX, secY);
    point(minX, minY);
    point(houX, houY);

	
	point(milX, height - milMargin);
	point(milX, 0 + milMargin);
	
    point(secX, height - secMargin);
    point(secX, 0 + secMargin);
	
    point(minX, height - minMargin);
    point(minX, 0 + minMargin);
	
    point(houX, height - houMargin);
    point(houX, 0 + houMargin);

}

