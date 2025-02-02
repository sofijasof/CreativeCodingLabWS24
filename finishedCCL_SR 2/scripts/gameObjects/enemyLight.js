import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";


class enemyLight extends BaseGameObject {
    playerHealth;
    leftBounds = 0;
    rightBounds = 100;
    speed = 10;

    reactToCollision = function (collidingObject) {
        if (collidingObject.name === "Raccoon" && !global.isPosing) {
            console.log("kill")
            global.playerHealth = 0; }
           
    };

    update = function() {
        if(this.x <= this.leftBounds) {
            // Start moving right
            this.xVelocity = this.speed;
            console.log("start right")
        }

        if(this.x >= this.rightBounds) {
            // Start moving left
            this.xVelocity = this.speed * -1;
            console.log("start left")
        }


        this.x += this.xVelocity * global.deltaTime;

        this.draw()
        this.speed += 0.15; //the object gets faster every time it hits left or right bounds
        console.log(this.speed)

    
    }
    
    constructor (x, y, width, height, leftBounds, rightBounds, speed) {
        super(x, y, width, height);
       this.loadImages(["./images/light.png"]);

        this.xVelocity = speed;
        this.leftBounds = leftBounds;
        this.rightBounds = rightBounds;
        this.speed = speed;
    }
}



export {enemyLight};