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
var bottomColor = "#7fff62"

// Set number of rows and columns for the puzzle
var tileRows = 2;
var tileColumns = 2;

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
var winPath = ["up", "right"];

var winX = 330;
var winY = 130;

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
  else if(e.keyCode === 82){
	restart();
  }
	
  //check if the user won	
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
  draw2by2Tiles();

  draw2by2Flag();
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

function draw2by2Flag() {
  //topRow
  ctx.beginPath();
  ctx.rect(230, 30, 50, 50);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(280, 30, 50, 50);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(330, 30, 50, 50);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(380, 30, 50, 50);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();

  //2nd row
  ctx.beginPath();
  ctx.rect(230, 80, 50, 50);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(280, 80, 50, 50);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(330, 80, 50, 50);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(380, 80, 50, 50);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  // 3rd Row
  ctx.beginPath();
  ctx.rect(230, 130, 50, 50);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(280, 130, 50, 50);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(330, 130, 50, 50);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(380, 130, 50, 50);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();


  //4th row
  ctx.beginPath();
  ctx.rect(230, 180, 50, 50);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(280, 180, 50, 50);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(330, 180, 50, 50);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(380, 180, 50, 50);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();
}

function draw2by2Tiles() {
  //top left
  ctx.beginPath();
  ctx.rect(30, 30, 200, 200);
  ctx.fillStyle = rightColor;
  ctx.fill();
  ctx.closePath();

  //bottom right
  ctx.beginPath();
  ctx.rect(231, 231, 199, 199);
  ctx.fillStyle = bottomColor;
  ctx.fill();
  ctx.closePath();

  //lines to separate the tiles
  ctx.beginPath();
  ctx.rect(227, 30, 3, 400);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  //lines to separate the tiles
  ctx.beginPath();
  ctx.rect(30, 230, 400, 3);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();
}

// The draw function will be called ervery *refreshRate* milliseconds
setInterval(draw, refreshRate);