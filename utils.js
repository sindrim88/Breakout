// =====
// UTILS
// =====

function clearCanvas(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function fillCircle(ctx, x, y, r) {
    //Some ball wobbble effect off paddle
    if(y >= g_paddle1.cy-60){
        r += 0.7;
    }
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.beginPath();
}

function fillBox(ctx, x, y, w, h, style) {
    var oldStyle = ctx.fillStyle;
    ctx.fillStyle = style;
    ctx.fillRect(x, y, w, h);
    ctx.fillStyle = oldStyle;
}

// ==========
// SORE STUFF
// ==========
//check if all the bricks have been hit, if so set the status of them all to 1.
var Score = 0;
function whatIsScore(ctx){
		for(var i = 1; i<100; i++){
            if(Score === i*80){
                for(var c = 0; c < brickColumnCount; c++){
        	        for(var k = 0; k < brickRowCount; k++){
			         	bricks[c][k].status = 1;
			        }
            	}
	       }
        }
}

function drawscore(ctx){
    ctx.beginPath();
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + Score,10,30);
    ctx.beginPath();
}

