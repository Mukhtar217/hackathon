// JavaScript File
var oneFourthWidth = window.innerWidth / 4;

let circlex = 100;
let circley = 100;
var garbageX = oneFourthWidth;
var garbageY = window.innerHeight - window.innerWidth / 10;

let garbageCanImg;
var garbageList = [];
var points = 15;
    var width = window.innerWidth - 2;
    let rx = 5;
    let ry = 100;
    let rw = width / 4;
    let rh = 100;

function preload(){
    garbageCanImg = loadImage("./js/garbage.png");
    let garbage = ["./js/straw.png", "./js/bottle.png", "./js/bag.png"];
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
  for (var i = 0; i < 5; i++) {
    var x = Math.random() * window.innerWidth / 2 + oneFourthWidth + 10;
    var y = random(height/3);
    var garbageImage = garbageList[Math.floor(Math.random() * 3)];
    var w = window.innerWidth / 10 / 2;
    var s = 2;
  	circles[i] = new DrawCircle(x, y, garbageImage, w, s);
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
    
    

    fill('green');
    rect(rx,ry,rw,rh)
    
    textSize(32);
    fill(50)
    text('Health',5,70,100,100)
    
   
}

function DrawCircle( x, y, garbageImage, w, s ) {
  // declare the properties
  this.xPos = x;
  this.yPos = y;
  this.garbageImage = garbageImage;
  this.width = w;
  this.speed = s;
}

DrawCircle.prototype = {
	constructor: DrawCircle,
  // *** Method: display the circle on the canvas *** 
  display: function() {
    // fill(this.color);
    // ellipse(this.xPos,this.yPos, this.diameter, this.diameter);
    image(this.garbageImage, this.xPos, this.yPos, this.width, this.width);
    
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
    if (this.yPos > window.innerHeight - window.innerWidth / 10) {
    	console.log(this.xPos, garbageX);
    	console.log(points);
    	if(garbageX < this.xPos && garbageX + window.innerWidth / 10 > this.xPos + this.width){
    	   if(points < 20){
    	      points++;
    	      
    	   } else if (points =18){
    	       window.location.href="WinPage.html";
    	    }
    	} else {
    	    if(points > 0){
    	        points--;
    	        rw = rw - 10;
    	    } else{
    	        window.location.href="EndPage.html"
    	    }
    	}
    	this.yPos = 0;
    	this.xPos = Math.random() * window.innerWidth / 2 + oneFourthWidth;
    }
   
    document.getElementById('scoreP').innerHTML = points;

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

function statsBox(){
    
    fill(100)
    rect(0, 0, oneFourthWidth, window.innerHeight)
    rect(oneFourthWidth * 3, 0, oneFourthWidth, window.innerHeight);
    //Text Stuf
    fill(0)
    textSize(46)
    textSize(20)
    textSize(32);
    
    
    // health

  

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
