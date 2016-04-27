//Made by Carin Stegen carin.stegen@hyperisland.se*/
// JavaScript code goes here
    /*var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = 'Angry_trump_small.png';
    var x = canvas.width/2;
    var y = canvas.height/2;
    var imgHeight = 50;
    var imgWidth = 102; //Till hit ha med i början
    var dx = 2;
    var dy = -3;
    var paddleHeight = 10;
    var paddleWidth = 75;
    var paddleX = (canvas.width-paddleWidth)/2;
    var rightPressed = false;
    var leftPressed = false;
    var goalWidth = 60;
    var goal = (canvas.width-goalWidth)/2;
    var score = 0;
    var hasScored = false;
    var lives = 3;
    var gameOverState = true;*/

    var canvas, ctx, img, x, y, imgHeight, imgWidth, dx, dy,
        paddleHeight, paddleWidth, paddleX, rightPressed, leftPressed, goalWidth, goal, score, hasScored, lives, gameOverState;
    img = new Image();

//Initializing the game with all it contents

function initGame() {
    document.getElementById("start").className = "hidden";
    document.getElementById("restart").className = "hidden";
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    img.src = 'Graphics/Angry_trump_small.png';
    x = canvas.width/2;
    y = canvas.height/2;
    imgHeight = 50;
    imgWidth = 102;
    dx = 2;
    dy = -3;
    paddleHeight = 10;
    paddleWidth = 75;
    paddleX = (canvas.width-paddleWidth)/2;
    rightPressed = false;
    leftPressed = false;
    goalWidth = 60;
    goal = (canvas.width-goalWidth)/2;
    score = 0;
    hasScored = false;
    lives = 3;
    gameOverState = false;
    setInterval(draw, 10);
}

//Controls the paddle in the game with keypads and mousehandler

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);
    
function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
      paddleX = relativeX - paddleWidth/2;
    }
}    

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

//Different functions for drawing the elements in the game

function drawTrump() {
    ctx.drawImage(img, x, y, imgHeight, imgWidth);
    
    
}
    function drawLives() {
    ctx.font = "22pt Helvetica ";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Lives: "+Array(lives+1).join("❤︎"), 540, 35);
}
    
function drawScore() {
    ctx.font = "22pt Helvetica";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Score: "+score, 15, 35);
}
    
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#e61b23";
    ctx.fill();
    ctx.closePath();
}

 // Here comes the function which controls the actual game elements

function draw() {
    // drawing code

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTrump();
    if (!gameOverState) {
        drawPaddle();
    }
    drawScore();
    drawLives();
    if (gameOverState) {
        return;
    }
    if(x + dx + imgHeight > canvas.width || x + dx < 0) {
    dx = -dx;
}
    
    paddleWidth = 75 - score * 2;
   
    if(y + dy < 0) {

     if(x + imgHeight > goal && x <  goal + goalWidth &&
        !hasScored) {
       score++;
       hasScored = true;
    } else if (x + imgHeight > goal && x <  goal + goalWidth) {
        // pass
    } else {
     dy = -dy;
     y = 0;
     hasScored = false;
    }
} 
    else if(y + dy + imgWidth > canvas.height) {
    if(x + imgHeight > paddleX && x < paddleX + paddleWidth) {
        dy = -dy;
        dx = ((x + imgHeight / 2) -
              (paddleX + paddleWidth / 2)) / paddleWidth * 2;
    }
    else { 
       gameOverState = true;
       img.src = 'Graphics/Happy_trump_small.png';
       lives--;
       
if(!lives) {
    gameOverState = true;
    img.src = 'Graphics/gameover.png';
    imgWidth = 450;
    imgHeight = 720;
    x = (canvas.width - imgHeight) / 2 ;
    y = (canvas.height - imgWidth) / 2;
    document.getElementById("restart").className = "";
}
else {
    setTimeout(function() { gameOverState = false;
                               
    x = canvas.width/2;
    y = canvas.height/2;
    dx = 2;
    dy = -3;
    img.src = 'Graphics/Angry_trump_small.png';
}, 1000)};

    }

}
        
 if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    
    x += dx;
    y += dy;
}
