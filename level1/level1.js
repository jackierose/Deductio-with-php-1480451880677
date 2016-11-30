/*eslint-env browser */
//Grab the canvas from the html doc
var canvas = document.getElementById("myCanvas");
//"Context" allows you to draw on the canvas
var ctx = canvas.getContext("2d");

//Draw a filled in red rectangle on the canvas.
ctx.beginPath();
ctx.rect(50, 80, 50, 50);
ctx.fillStyle = "#f25050";
ctx.fill();
ctx.closePath();

//making the left line in canvas
ctx.beginPath();
ctx.rect(0,30,30,400);
ctx.fillStyle = "#fc98fd";
ctx.fill();
ctx.closePath();
//extend the left line with a top triangle
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(30, 30);
ctx.lineTo(0, 30);
ctx.fillStyle = "#fc98fd";
ctx.fill();
ctx.closePath();
//extend the left line with a bottom triangle
ctx.beginPath();
ctx.moveTo(0,460);
ctx.lineTo(30, 430);
ctx.lineTo(0, 430);
ctx.fillStyle = "#fc98fd";
ctx.fill();
ctx.closePath();

// making the bottom line in canvas
ctx.beginPath();
ctx.rect(30,430,400,30);
ctx.fillStyle = "#7fff62";
ctx.fill();
ctx.closePath();

//making the right line in canvas
ctx.beginPath();
ctx.rect(430,30,30,400);
ctx.fillStyle = "#6fd4d6";
ctx.fill();
ctx.closePath();

//making the top line in canvas
ctx.beginPath();
ctx.rect(30,0,400,30);
ctx.fillStyle = "#feffa3";
ctx.fill();
ctx.closePath();
//extend the top line left with a triangle
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(30, 30);
ctx.lineTo(30, 0);
ctx.fillStyle = "#feffa3";
ctx.fill();
ctx.closePath();
//extend the top line right with a triangle
ctx.beginPath();
ctx.moveTo(460,0);
ctx.lineTo(430, 30);
ctx.lineTo(430, 0);
ctx.fillStyle = "#feffa3";
ctx.fill();
ctx.closePath();
