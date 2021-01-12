// A generic constructor which accepts an arbitrary descriptor object
function Paddle(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}

// Add these properties to the prototype, where they will server as
// shared defaults, in the absence of an instance-specific overrides.

Paddle.prototype.halfWidth = 50;
Paddle.prototype.halfHeight = 10;

Paddle.prototype.update = function (du) {
    if (g_keys[this.GO_LEFT]) {
        if(this.cx > +this.halfWidth){
            this.cx -= 7;
        }
    }
    else if (g_keys[this.GO_RIGHT]) {
        if(this.cx < g_canvas.width-this.halfWidth){
            this.cx += 7;
        }
    }  
};

Paddle.prototype.render = function (ctx) {
    // (cx, cy) is the centre; must offset it for drawing
    ctx.fillStyle = "black";
    ctx.fillRect(this.cx - this.halfWidth,
                 this.cy - this.halfHeight,
                 this.halfWidth * 2,
                 this.halfHeight * 2);
};

Paddle.prototype.collidesWith = function (prevX, prevY, 
                                          nextX, nextY, 
                                          r) {
    


    /// Lets break the paddle up into five smaller paddles and bounce the ball off
    //them in different directions depending on wich part of the paddle it hits.

    //    X1    X2    x3    x4    x5    paddleedge
    //    ==============================
    var paddleEdge = this.cx;
    var paddleX1 = this.cx - this.halfWidth;
    var paddleX2 = paddleX1 + 20;
    var paddleX3 = paddleX2 + 20;
    var paddleX4 = paddleX3 + 20;
    var paddleX5 = paddleX4 + 20;
    var paddleXEdge = paddleX5 +20;
    var OddEven = 0;
 
    //check if the paddle hits the ball
    if(nextY + 10 >= g_paddle1.cy){

        //check which part of the paddle hits the ball...
        // then give the ball some xVel values depending on where it is hit
        if(nextX >= paddleX1 && nextX <= paddleX2){
            g_ball.xVel = -7;
            mySound3.play();
            return true;   
        }
        else if(nextX >= paddleX2 && nextX <= paddleX3){
            g_ball.xVel = -3;
            mySound3.play();
            return true;   
        }
        //If the middle part of the paddle is hit then choose between two xVel values
        else if(nextX >= paddleX3 && nextX <= paddleX4){
            
            if(OddEven % 2 === 0){
                g_ball.xVel = -0.5;
                OddEven += 1;
                mySound3.play();
                return true;
            }
            else{
                g_ball.xVel = 0.5;
                OddEven += 1;
                mySound3.play();
                return true;
            }   
        }
        else if(nextX >= paddleX4 && nextX <= paddleX5){
            g_ball.xVel = 3;
            mySound3.play();
            return true;   
        }
        else if(nextX >= paddleX5 && nextX <= paddleXEdge){
            g_ball.xVel = 7;
            mySound3.play();
            return true;   
        }
    }
    else{
        return false;
    }
};
