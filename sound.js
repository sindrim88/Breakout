
//===========
//SOUND STUFF
//===========
var mySound;
//Happy gilmore Clown laugh
mySound = new sound("Clown.mp3");
function sound(src) {
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}


var mySound2;
//Brick collision sound
mySound2 = new sound("Brick.mp3");
function sound(src) {
   
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}

var mySound3;
//Paddle collision sound
mySound3 = new sound("Paddle.mp3");
function sound(src) {
   
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}
var mySound4;
//Gun/rocket fire sound
mySound4 = new sound("Rocket.mp3");
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
  
     this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}
