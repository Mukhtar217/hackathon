// JavaScript File
var oneFourthWidth = window.innerWidth / 4;

let circlex = 100;
let circley = 100;
var garbageX = oneFourthWidth;
var garbageY = window.innerHeight - window.innerWidth / 10;

let garbageCanImg;
var garbageList;
var points = 0;

function preload(){
    garbageCanImg = loadImage("./js/garbage.png");
    let garbage = ["./js/straw.png", "./js/bottle.png"];
    for (var i = 0; i < garbage.length; i++){
        let garbageImg = loadImage(garbage[i])
        garbageList.push(garbageImg);
    }
};

var circles = [];

function setup(){
    let canvasX = window.innerWidth-2;
    let canvasY = window.innerHeight-2;
    createCanvas(canvasX, canvasY);
    
    // create and initialize the instances of the DrawCircle object
  // populate the circles array with all the instances.
  for (var i = 0; i < 1; i++) {
    var x = Math.random() * window.innerWidth / 2 + oneFourthWidth;
    var y = random(height/3);
    var d = random(20, 150);
    var c = color(random(255), random(255), 255);
    var s = random(0.2, 3);
  	circles[i] = new DrawCircle(x, y, d, c, s);
  }
    
}

function draw(){
    background(0);
    statsBox();
    garbageCan();
    // createGarbage();
    for (var i = 0; i < circles.length; i++) {
  	    circles[i].move();
        circles[i].display();
    }
    if(points == 10){
        window.href = "EndPage.html";
    }

}

function DrawCircle( x, y, d, c, s ) {
  // declare the properties
  this.xPos = x;
  this.yPos = y;
  this.diameter = d;
  this.color = c;
  this.speed = s;
}

DrawCircle.prototype = {
	constructor: DrawCircle,
  // *** Method: display the circle on the canvas *** 
  display: function() {
    fill(this.color);
    ellipse(this.xPos,this.yPos, this.diameter, this.diameter);
    
    // uncomment the lines below and start building your own shape here!
    // rect(this.xPos,this.yPos, this.diameter/2, this.diameter);
    // stroke(0);
    // strokeWeight(this.diameter/6);
    // point(this.xPos, this.yPos);
  },
  
  // *** Method: move the circle downwards ***
  move: function() {
		this.yPos += this.speed;
    // the circle is outside the canvas, retset its position at the top
    if (this.yPos - this.diameter/2 > height) {
    	this.yPos = -this.diameter/2;
    	this.xPos = Math.random() * window.innerWidth / 2 + oneFourthWidth;
    	if(this.xPos === garbageX){
    	    points++;
    	}
    }
	}
}

function garbageCan(){
    this.update = function(){
        if(keyIsDown(LEFT_ARROW)){
            if(garbageX > oneFourthWidth){
                garbageX -= window.innerWidth / 200;
            }
        } else if (keyIsDown(RIGHT_ARROW)){
            if(garbageX < window.innerWidth - oneFourthWidth - window.innerWidth / 10){
                garbageX += window.innerWidth / 200;
            }
        }
    }
    image(garbageCanImg, garbageX, garbageY, window.innerWidth / 10, window.innerWidth / 10);
    this.update();
    
}
var garbageDisplay =[];
function createGarbage(){
    let x = (Math.random() * window.innerWidth / 2 - window.innerWidth / 10) + oneFourthWidth;
    let y = 0;
    let garImg = garbageList[Math.floor(Math.random() * garbageList.length)];
    let dy = Math.floor(Math.random()) * window.innerHeight / 7 + 3;
    
    this.draw = function(){
        image(garImg, x, y, 10, 10);
    };
    
    this.update = function(){
        y += dy;
        this.draw();
    };
    
    
}

function statsBox(){
    
    fill(100)
    rect(0, 0, oneFourthWidth, window.innerHeight)
    rect(oneFourthWidth * 3, 0, oneFourthWidth, window.innerHeight);
    //Text Stuf
    fill(0)
    textSize(46)
    textSize(20)
    textSize(32);

};

// function countdown() {
//     	var seconds = 60;
// 	    function tick() {
// 	        var counter = document.getElementById("counter");
// 	        seconds--;
// 	        counter.innerHTML = (seconds < 10 ? "0" : "")  + String(seconds) + "S";
// 	        if( seconds > 0 ) {
// 	            setTimeout(tick, 1000);
// 	            draw();
// 	   			update();
// 	        } else {
// 	            alert("Game over");
// 	            clearInterval(runGame);
// 	        }
// 	    }
//     	tick();
// 	}

// countdown();
