
//===========
//SOUND STUFF
//===========
var mySound;
//Happy gilmore Clown laugh
mySound = new sound("laugh.mp3");
function sound(src) {
    this.play = function(){
        var noSleep = new NoSleep();
        noSleep.enable();
        this.sound = document.createElement("audio");
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}


var mySound2;
//Brick collision sound
mySound2 = new sound("brick.mp3");
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
mySound3 = new sound("./paddle.mp3");
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
mySound4 = new sound("shot.mp3");
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
