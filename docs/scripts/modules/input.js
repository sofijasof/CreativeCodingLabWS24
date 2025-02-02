import { global } from "./global.js";

let posingSound = new Audio("/sounds/pose.wav");
posingSound.loop = true; 

function move(event) {
  

switch(event.key){

    case "d":
        if (global.isPosing) break;
        if (global.playerObject.xVelocity == 0)
            global.playerObject.switchCurrentSprites(27, 35);
        global.playerObject.xVelocity = 300;
        global.playerObject.yVelocity = 0;
        console.log("velocity set");
        break;

    case "a":
        if (global.isPosing) break;
        if (global.playerObject.xVelocity == 0)
                global.playerObject.switchCurrentSprites(9, 17);
        global.playerObject.xVelocity = -300;
        global.playerObject.yVelocity = 0;

        break;

    case "w":
        if (global.isPosing) break;
        global.playerObject.setJumpForce(.8);

        break;

    case "q":
        global.isPosing= true;
        global.playerObject.switchCurrentSprites(20,24);
        posingSound.play();


        break;
}
}

function stop (event){

    global.playerObject.xVelocity = 0;
    global.playerObject.yVelocity = 0;

    switch(event.key){

        case "q":
            global.isPosing= false;
            posingSound.pause();
            break;
}

}

document.addEventListener("keypress", move);

document.addEventListener("keyup", stop);