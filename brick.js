
// ===========
// BRICK STUFF
// ===========


var buildBricks = false;

var brickRowCount = 16;
var brickColumnCount = 5;
var brickWidth = 25;
var brickHeight = 20;
var brickPadding = 0;
var brickOffsetTop = 50;
var brickOffsetLeft = 0;
var bricks = [];

var X = g_canvas.width/2;
var Y = g_canvas.height;

// Make the wall/bricks
for(var c = 0; c<brickColumnCount; c++){
    bricks[c] = [];
    for(var k = 0; k < brickRowCount; k++){
        bricks[c][k] = { x: k*brickWidth, y: (c*brickHeight)+brickOffsetTop, status: 1 };
    }
}




var hitTopBrick = false;
// update the bricks
// this is called from g_ball to update/check if the ball hits the bricks
Brick.prototype.BallBrickCollision = function (prevX, prevY, 
                                          nextX, nextY, 
                                          r) {
          
      var brickX = Math.floor( (nextX - 0) / 25);
			var brickY = Math.floor( (nextY - 50) / 20);
  
        //check if the ball is within a brick
        if(brickY <= 4 && brickY >= 0 && brickX <= 15 && brickX >= 0 && bricks[brickY][brickX].status === 1){
         	
           	exploded = true;
       			frameCount = 0;
       			brickPaddingCount = 0;

            //check if ball is coming from the sides into the brick 
            //If so then only switch the xVel of the ball
            if(prevX <= brickX*25 || prevX >= (brickX*25)+25){
            		g_ball.xVel *= -1;
            }
            else{
            		g_ball.yVel *= -1;
            }
                    mySound2.play();
                    bricks[brickY][brickX].status = 0;
                    Score += 1;
                    // hitTopBrick = Flag to check if the ball has been set to faster speed 
                    if(hitTopBrick === false && bricks[0][brickX].status === 0){
                            hitTopBrick = true;
                            g_ball.yVel *= 1.2;
                    }
           
       }

}

//
//   Unfinished Brick/wall object...
//
function Brick(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}

var Brick = new Brick({
    bricks: [],
   
});


// colors for the gradient on the wall/bricks
var colors = ["#f986d5","#f28537","#f2dc37","#baf237","#82f237","#1fefe5"];
var count = 0;

// tried to make the bricks look similar to the original breakout, made them a little bigger so side collision is more noticable
function drawBricks(ctx){
    for(var c = 0; c < brickColumnCount; c++){
        for(var k = 0; k < brickRowCount; k++){
           if(bricks[c][k].status == 1){
                var brickX = (k*(brickWidth+brickPadding)+brickOffsetLeft);
                var brickY = (c*(brickHeight+brickPadding)+brickOffsetTop);
                bricks[c][k].X = brickX;
                bricks[c][k].Y = brickY;
                if(c === 0){
                    //Set the gradient from the top of the brick to the bottom of the brick (not the whole wall)
                    var grd = ctx.createLinearGradient(0,50+c*brickHeight,0,50+(c*brickHeight)+brickHeight);
                    grd.addColorStop(0,"#f986d5");
                    grd.addColorStop(1,"#f28537");
                    ctx.fillStyle = grd;
                    ctx.rect(brickX, brickY, brickWidth, brickHeight);
                    ctx.fill();       
                    ctx.beginPath();
                }
                else if(c >= 1){
                  //Set the gradient from the top of the brick to the bottom of the brick (not the whole wall)
                    var grd = ctx.createLinearGradient(0,50+c*brickHeight,0,50+(c*brickHeight)+brickHeight);
                    grd.addColorStop(0,colors[c]);
                    grd.addColorStop(1,colors[c+1]);
                    ctx.fillStyle = grd;
                    ctx.rect(brickX, brickY, brickWidth, brickHeight);
                    ctx.fill();       
                    ctx.beginPath();
                }
                
                else if(c === 5){
                  //Set the gradient from the top of the brick to the bottom of the brick (not the whole wall)
                    var grd = ctx.createLinearGradient(0,50+c*brickHeight,0,50+(c*brickHeight)+brickHeight);
                    grd.addColorStop(0,colors[c-1]);
                    grd.addColorStop(1,colors[c]);
                    ctx.fillStyle = grd;
                    ctx.rect(brickX, brickY, brickWidth, brickHeight);
                    ctx.fill();       
                    ctx.beginPath();
                }
            }
        }
        // counter to check where in the array we are and set the color accordingly  
        count += 1;
        if(count >= 5){
            count = 0;
        }
    }
}

//=====================
//BRICK/WALL SIZE STUFF
//=====================
// If a Brick has been hit then draw the bricks/wall bigger for a moment.
// I wantet to get some reaction from the bricks
//

var exploded = false;
var frameCount = 0;
var brickPaddingCount = 0;
// if the brick has been hit then make them expand a little , or rather just add some padding
function brickExplosion(ctx){
    //if the brick is hit then increase the balls radius to make it expand
    if(exploded || frameCount < 4){
     
        ctx.fillStyle ="black";
        fillCircle(ctx, g_ball.cx,g_ball.cy,g_ball.radius+2);
        ctx.fill();
        ctx.beginPath();
        exploded = false;
    }
    if(brickPaddingCount > 13){
      brickPadding = 0;
    }
    else{
      brickPadding += 0.07;
    }
    
    brickPaddingCount += 1;
    frameCount += 1;
}
