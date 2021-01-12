
//============
//BULLET STUFF
//============


//Check if the bullet has hit a brick
function BulletBrickCollision(nextX, nextY) {
           
            // check if the current bullet posision is at a brick
            var brickX = Math.floor( (nextX - 0) / 25);
			var brickY = Math.floor( (nextY - 50) / 20);

          // check if the current bullet posision is at a brick
          if(brickY <= 4 && brickY >= 0 && brickX <= 19 && brickX >= 0 ){
            // check if the brick is there or not
            if(bricks[brickY][brickX].status === 1){

            	bricks[brickY][brickX].status = 0;
            	Score += 1;
            	g_bullets.xVel = 0;
            	g_bullets.cy = -10;
            
            }
           }
}

var KEY_BULLET  = 'B'.charCodeAt(0);

function Bullet(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}

var g_bullets = new Bullet({
    cx: g_paddle1.cx,
    cy: g_paddle1.cy + 5,
    radius: 4,
    xVel: 0,
    yVel: 0
});


// function to make the bullet go a little like a disfunctional rocket, 
// give it some samll random x-values for that.
 
 function BulletCX(ctx){
	var randomBullet = Math.floor((Math.random() * 5) + 1);
	var rand= Math.floor((Math.random() * 2) + 1);
	if(rand === 2){
		g_bullets.cx = g_bullets.cx - randomBullet;	
	}
	else{
		g_bullets.cx = g_bullets.cx + randomBullet;	
	}
}

// update the bullet position
Bullet.prototype.update = function (ctx){

	var prevBX = g_bullets.cx;
	var prevBY = g_bullets.cy;

	var nextBX = g_bullets.cx + g_bullets.xVel;
	var nextBY = g_bullets.cy + g_bullets.yVel;
	
    //play rocket sound and fire the bullet/rocket if 'B' is pressed
	if (eatKey(KEY_BULLET)) {
     	g_bullets.yVel = -12;
     	mySound4.play();
    }
	
    // If the bullet goes out of screen set it above the paddle
	if(g_bullets.cy < 0){
		g_bullets.cy = 380;
		g_bullets.cx = g_paddle1.cx;
		g_bullets.yVel = 0;
	}
    //Make the bullet track the paddle and have it ready for firing
	if(g_bullets.yVel === 0){
		g_bullets.cx = g_paddle1.cx;
	}
    // If the bullet has been fired then cotinue adding the yVel to cy potition
	if(g_bullets.yVel < 0){
		g_bullets.cy += g_bullets.yVel;

         // update bullets position
		 BulletCX(ctx);
	}
    //Go and check if bullet has hit any brick
	BulletBrickCollision(nextBX, nextBY); 
}
//Draw bullet
Bullet.prototype.render = function (ctx) {
    // (cx, cy) is the centre; must offset it for drawing
    ctx.fillStyle = "Red";
    ctx.arc(g_bullets.cx,g_bullets.cy,3.5,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
};
