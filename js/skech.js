// JavaScript File


let circlex = 100;
let circley = 100;

let img;

function setup(){
    let x = window.innerWidth;
    let y = window.innerHeight;
    createCanvas(x, y);
    img = loadImage('/hackahon/js/garbage.png');
}

function draw(){
    background(0);
    statsBox();
    garbageCan();
    image(img, 100, 100)
    


    //strokeWeight(3)
    //fill("green")
    //triangle(600,735, 728,735, 664, 675)    
        
                        
    // if(keyIsDown(LEFT_ARROW)){
    //     x1 -= 10;
    //     x2 -= 10;
    //     x3 -= 10;
    // }
    // if(keyIsDown(RIGHT_ARROW)){
    //     x1 += 10;
    //     x2 += 10;
    //     x3 += 10;
        
    // }
    // if(x1 < 305){ 
    //     x1 = 923;
    //     x2 = 1023;
    //     x3 = 973;
    // }
    // if(x2 > 1023){
    //     x1 = 305;
    //     x2 = 405;
    //     x3 = 355;
    // }
    // strokeWeight(3)
    // fill("green")
    // triangle(x1,740, x2,740, x3, 680);
}

function garbageCan(){
}

function statsBox(){
    let oneFourthWidth = window.innerWidth / 4;
    fill(100)
    rect(0, 0, oneFourthWidth, window.innerHeight)
    rect(oneFourthWidth * 3, 0, oneFourthWidth, window.innerHeight);
    //Text Stuf
    fill(0)
    textSize(46)
    textSize(20)
}