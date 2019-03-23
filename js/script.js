var stage = document.getElementById('svs'); // Get the canvas element by Id

stage.width = window.innerWidth;
stage.height = window.innerHeight;
var ctx = stage.getContext('2d'); // Canvas 2d rendering context
var x = 10; //intial horizontal position of drawn rectangle
var y = stage.height - wid; //intial vertical position of drawn rectangle
var wid = 40; //width of the drawn rectangle
var height = 40; //height of the drawn rectangle

//Draw Rectangle function		
function drawRect(x,y,wid,hei) {
    ctx.fillStyle = '#666'; // Fill color of rectangle drawn
    ctx.fillRect(x, y, wid, hei); //This will draw a rectangle of 20x20
}

drawRect(x,y,wid,hei); //Drawing rectangle on initial load

//move rectangle inside the canvas using arrow keys
window.onkeydown = function(event) {
    var keyPr = event.keyCode; //Key code of key pressed
  
    if(keyPr === 39 && x<=460){ 
        x = x+20; //right arrow add 20 from current
    }
    else if(keyPr === 37 && x>10){
        x = x-20; //left arrow subtract 20 from current
    }
  	/*clearing anything drawn on canvas
     *comment this below do draw path */
    ctx.clearRect(0,0, 500, 500);
  
  	//Drawing rectangle at new position
    drawRect(x,y,wid,hei);
};
