
//================
//BACKGROUNDCOLOR
//===============

var colorCount = 1;
var colorCount2 = 100;

//Make the background change color with gradient from Top to Bottom of the canvas 
function drawCanvas(ctx){
    
    ctx.fillStyle = 'hsl('+ colorCount +',100%,50%)';
   // var random = Math.floor(Math.random() * 4);
    var grd = ctx.createLinearGradient(0,0,0,400);
    grd.addColorStop(0,'hsl('+ colorCount +',40%,70%)');
    grd.addColorStop(1,'hsl('+ colorCount2 +',40%,70%)');
    ctx.fillStyle = grd;
    ctx.rect(0,0, g_ctx.canvas.width, g_ctx.canvas.height);
    ctx.fill();       
    ctx.beginPath();
    colorCount += 0.5;
    colorCount2 += 0.5;
}