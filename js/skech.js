// JavaScript File
var oneFourthWidth = window.innerWidth / 4;

let circlex = 100;
let circley = 100;
var garbageX = oneFourthWidth;
var garbageY = window.innerHeight - window.innerWidth / 10;

let garbageCanImg;

function preload(){
    garbageCanImg = loadImage("./js/garbage.png");
};

function setup(){
    let x = window.innerWidth-2;
    let y = window.innerHeight-2;
    createCanvas(x, y);
    
}

function draw(){
    background(0);
    statsBox();
    garbageCan();
    



}

function garbageCan(){
    this.update = function(){
        if(keyIsDown(LEFT_ARROW)){
            if(garbageX > oneFourthWidth){
                garbageX -= window.innerWidth / 200;
            }
        } else if (keyIsDown(RIGHT_ARROW)){
            if(garbageX < window.innerWidth - oneFourthWidth){
                garbageX += window.innerWidth / 200;
            }
        }
    }
    image(garbageCanImg, garbageX, garbageY, window.innerWidth / 10, window.innerWidth / 10);
    this.update();
    
}

function createGarbage(){
    
}

function statsBox(){
    
    fill(100)
    rect(0, 0, oneFourthWidth, window.innerHeight)
    rect(oneFourthWidth * 3, 0, oneFourthWidth, window.innerHeight);
    //Text Stuf
    fill(0)
    textSize(46)
    textSize(20)
};