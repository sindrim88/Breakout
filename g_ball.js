// ==========
// BALL STUFF
// ==========

var g_ball = {
    cx:  g_paddle1.cx,
    cy:  g_paddle1.cy + 5,
    radius: 4,

    xVel: 4,
    yVel: -5
};

g_ball.update = function (du) {
    // Remember my previous position
    var prevX = this.cx;
    var prevY = this.cy;
    
    // Compute my provisional new position (barring collisions)
    var nextX = prevX + this.xVel * du;
    var nextY = prevY + this.yVel * du;

    // Bounce off the paddle
    if (g_paddle1.collidesWith(prevX, prevY, nextX, nextY, this.radius+2)){
        this.yVel *= -1;
    }
    
    // Bounce off top edge 
    if (nextY < 0) {               
        this.yVel *= -1;
    }

    // Bounce off the side edges
    if (nextX < 0 || nextX > g_canvas.width) {   
        this.xVel *= -1;
    }
    // If the paddle missed the ball then I want the paddle to shoot it again 
     if (nextY >= g_paddle1.cy){
        this.reset();
    }
    //Has the ball hit a brick
    Brick.BallBrickCollision(prevX, prevY, nextX, nextY, this.radius);

    // *Actually* update my position 
    // ...using whatever velocity I've ended up with
    //
    this.cx += this.xVel * du;
    this.cy += this.yVel * du;
};


// If the paddle misses the ball then I want the paddle to shoot it again 

g_ball.reset = function () {
     //Play clown laugh if the paddle misses the ball
      if(Score !== 100){
        mySound.play();
    }
    var randomNumber = Math.floor(Math.random() * 2);
    this.cx = g_paddle1.cx;
    this.cy = g_canvas.height - 15;
    this.yVel *= -1;
    // randomly choose between two ways to shoot the ball if it has been missed 
    if(randomNumber === 0){
        this.xVel = -0.5;
    }
    if(randomNumber === 1){
        this.xVel = -5;
    }
 };

// render-draw ball
g_ball.render = function (ctx) {
    fillCircle(ctx, this.cx, this.cy, this.radius);
};