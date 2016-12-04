/*eslint-env browser */

/* ++++++++++++++ GlOBAL VARIABLES+++++++++++++++++*/
//Grab the canvas from the html doc
var canvas = document.getElementById("myCanvas");
//"Context" allows you to draw on the canvas
var ctx = canvas.getContext("2d");

// Define border/tile colors
var leftColor = "#fc98fd";
var rightColor = "#6fd4d6";
var topColor = "#feffa3";
var bottomColor = "#7fff62";
var mustEnterColor = "#197136";
var dontEnterColor = "#DE1919";

// Set number of rows and columns for the puzzle
var tileRows = 4;
var tileColumns = 4;

// Define starting variables for the piece
var pieceHeight = 50;
var pieceWidth = 50;
var initX = 30 + (400/tileColumns)/2;
var initY = 430 - (400/tileRows)/2;
var pieceX = 30 + (400/tileColumns)/2;
var pieceY = 430 - (400/tileRows)/2;



// Screen will refresh every *refreshRate* milliseconds
var refreshRate = 10;

//calculate tile width and height
//shouldn't need to edit this for general purposes
var tileWidth = 400 / tileColumns;
var tileHeight = 400 / tileRows;
/* ++++++++++++++ GAME FUNCTION ARRAYS +++++++++++++++++++*/
// This array stores the win condition.
/***** THIS MUST BE SET FOR EACH PUZZLE *****/
var winPath = ["up", "up", "up", "right", "right", "right"];

var winX = 380;
var winY = 80;

// This array stores the users path. We will check if this equals winPath
var userPath = [];

// function to check if paths are equal
function pathsAreEqual() {
  if (winPath.length !== userPath.length) {
    return false;
  }
  for (var i = 0; i < winPath.length; i++) {
    if (winPath[i] !== userPath[i]) {
      return false;
    }
  }
  return true;
}

/* ++++++++++++++ DEFINE MOVING FUNCTIONS+++++++++++++++++*/

// Setup handlers to listen for events
document.addEventListener("keydown", keyDownHandler, false);
//document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  // right
  if (e.keyCode === 39 && (pieceX + tileWidth) < 430) {
    pieceX += tileWidth;
    userPath.push("right");
  }
  // left
  else if(e.keyCode === 37 && (pieceX - tileWidth) > 0) {
    pieceX -= tileWidth;
    userPath.push("left");
  }
  // up
  else if (e.keyCode === 38 && (pieceY - tileHeight) > 0) {
    pieceY -= tileHeight;
    userPath.push("up");
  }
  // down
  else if(e.keyCode === 40 && (pieceY + tileHeight) < 430) {
    pieceY += tileHeight;
    userPath.push("down");
  }
  //r key
  else if(e.keyCode == 82){
  	restart();
  }

  if(pathsAreEqual()) {
    setTimeout(notify, 100);
    setTimeout(showNextButton, 100);
  }

  //check if the user is in the end square but reached there incorrectly
  else if(pieceX === winX && pieceY === winY && !pathsAreEqual() ){
    setTimeout(notifyLost, 100);
  }
}

// function to alert the user they won!
function notify() {
  alert("You win!!!!!! Press the Next Level button!!");
}

// function to alert the user they lost
function notifyLost(){
	alert("Incorrect path, to try again press the reset button");
}

//function to reset the peice to the starting position
function restart(){
	userPath = [];
  	pieceX = initX;
  	pieceY = initY;
}

//function to show the "Next Level" button when the user wins the level
function showNextButton(){
  document.getElementById("nextButton").style.visibility="visible";
}

/* ++++++++++++++ CALL DRAWING FUNCTIONS+++++++++++++++++*/
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBorder();
  drawTiles();
  drawPiece();
}

/* ++++++++++++++ DEFINE DRAWING FUNCTIONS+++++++++++++++++*/
function drawPiece() {
  ctx.beginPath();
  ctx.arc(pieceX, pieceY, 40, 0, Math.PI*2, false);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawTiles() {
  /* Adding colors */

  //(1, 1)
  ctx.beginPath();
  ctx.rect(30, 30, 100, 100);
  ctx.fillStyle = rightColor;
  ctx.fill();
  ctx.closePath();

  //(1, 3)
  ctx.beginPath();
  ctx.rect(30, 230, 100, 100);
  ctx.fillStyle = topColor;
  ctx.fill();
  ctx.closePath();

  //(2,3)
  ctx.beginPath();
  ctx.rect(130, 230, 100, 100);
  ctx.fillStyle = topColor;
  ctx.fill();
  ctx.closePath();

  //(2, 4)
  ctx.beginPath();
  ctx.rect(130, 330, 100, 100);
  ctx.fillStyle = rightColor;
  ctx.fill();
  ctx.closePath();

  //(3, 1)
  ctx.beginPath();
  ctx.rect(230, 30, 100, 100);
  ctx.fillStyle = rightColor;
  ctx.fill();
  ctx.closePath();

  //(3, 3)
  ctx.beginPath();
  ctx.rect(230, 230, 100, 100);
  ctx.fillStyle = dontEnterColor;
  ctx.fill();
  ctx.closePath();

  //(3, 4)
  ctx.beginPath();
  ctx.rect(230, 330, 100, 100);
  ctx.fillStyle = rightColor;
  ctx.fill();
  ctx.closePath();

  //(4, 3)
  ctx.beginPath();
  ctx.rect(330, 230, 100, 100);
  ctx.fillStyle = topColor;
  ctx.fill();
  ctx.closePath();

  //(4, 4)
  ctx.beginPath();
  ctx.rect(330, 330, 100, 100);
  ctx.fillStyle = topColor;
  ctx.fill();
  ctx.closePath();

  // 2 x 2 grid
  if (tileRows === 2 && tileColumns === 2) {
    //vertical lines to separate the tiles
    ctx.beginPath();
    ctx.rect(229, 30, 2, 400);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();

    //horizontal lines to separate the tiles
    ctx.beginPath();
    ctx.rect(30, 229, 400, 2);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
  }
  // 4 x 4 grid
  if (tileRows === 4 && tileColumns === 4) {
    draw4by4Tiles();
    //Finish checkered flag
    draw4by4Flag();
  }
}

function drawBorder() {
  //making the left line in canvas
  ctx.beginPath();
  ctx.rect(0,30,30,400);
  ctx.fillStyle = leftColor;
  ctx.fill();
  ctx.closePath();
  //extend the left line with a top triangle
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(30, 30);
  ctx.lineTo(0, 30);
  ctx.fillStyle = leftColor;
  ctx.fill();
  ctx.closePath();
  //extend the left line with a bottom triangle
  ctx.beginPath();
  ctx.moveTo(0,460);
  ctx.lineTo(30, 430);
  ctx.lineTo(0, 430);
  ctx.fillStyle = leftColor;
  ctx.fill();
  ctx.closePath();

  // making the bottom line in canvas
  ctx.beginPath();
  ctx.rect(30,430,400,30);
  ctx.fillStyle = bottomColor;
  ctx.fill();
  ctx.closePath();
  // extend the bottom line with a left triangle
  ctx.beginPath();
  ctx.moveTo(0,460);
  ctx.lineTo(30, 430);
  ctx.lineTo(30, 460);
  ctx.fillStyle = bottomColor;
  ctx.fill();
  ctx.closePath();
  // extend the bottom line with a right triangle
  ctx.beginPath();
  ctx.moveTo(460,460);
  ctx.lineTo(430, 430);
  ctx.lineTo(430, 460);
  ctx.fillStyle = bottomColor;
  ctx.fill();
  ctx.closePath();

  //making the right line in canvas
  ctx.beginPath();
  ctx.rect(430,30,30,400);
  ctx.fillStyle = rightColor;
  ctx.fill();
  ctx.closePath();
  // extend the right line with a bottom triangle
  ctx.beginPath();
  ctx.moveTo(460,460);
  ctx.lineTo(430, 430);
  ctx.lineTo(460, 430);
  ctx.fillStyle = rightColor;
  ctx.fill();
  ctx.closePath();
  // extend the right line with a top triangle
  ctx.beginPath();
  ctx.moveTo(460, 0);
  ctx.lineTo(430, 30);
  ctx.lineTo(460, 30);
  ctx.fillStyle = rightColor;
  ctx.fill();
  ctx.closePath();

  //making the top line in canvas
  ctx.beginPath();
  ctx.rect(30,0,400,30);
  ctx.fillStyle = topColor;
  ctx.fill();
  ctx.closePath();
  //extend the top line left with a triangle
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(30, 30);
  ctx.lineTo(30, 0);
  ctx.fillStyle = topColor;
  ctx.fill();
  ctx.closePath();
  //extend the top line right with a triangle
  ctx.beginPath();
  ctx.moveTo(460,0);
  ctx.lineTo(430, 30);
  ctx.lineTo(430, 0);
  ctx.fillStyle = topColor;
  ctx.fill();
  ctx.closePath();

  /* Draw the black border between the "border" and the tiles*/
  //left black line
  ctx.beginPath();
  ctx.rect(26, 26, 4, 404);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  //top black line
  ctx.beginPath();
  ctx.rect(30, 26, 404, 4);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  //bottom black line
  ctx.beginPath();
  ctx.rect(26, 430, 408, 4);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  //lines to separate the tileRows
  ctx.beginPath();
  ctx.rect(430, 30, 4, 400);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();
}

function draw4by4Flag() {
  //topRow
  ctx.beginPath();
  ctx.rect(330, 30, 25, 25);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(355, 30, 25, 25);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(380, 30, 25, 25);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(405, 30, 25, 25);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();

  //2nd row
  ctx.beginPath();
  ctx.rect(330, 55, 25, 25);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(355, 55, 25, 25);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(380, 55, 25, 25);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(405, 55, 25, 25);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  // 3rd Row
  ctx.beginPath();
  ctx.rect(330, 80, 25, 25);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(355, 80, 25, 25);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(380, 80, 25, 25);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(405, 80, 25, 25);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();

  //4th row
  ctx.beginPath();
  ctx.rect(330, 105, 25, 25);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(355, 105, 25, 25);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(380, 105, 25, 25);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(405, 105, 25, 25);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();
}

function draw4by4Tiles() {
  // vertical lines to separate the tiles
  ctx.beginPath();
  ctx.rect(229, 30, 2, 400);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(129, 30, 2, 400);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(329, 30, 2, 400);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  //horizontal lines to separate the tiles
  ctx.beginPath();
  ctx.rect(30, 229, 400, 2);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(30, 129, 400, 2);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(30, 329, 400, 2);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();
}
// The draw function will be called ervery *refreshRate* milliseconds
setInterval(draw, refreshRate);
