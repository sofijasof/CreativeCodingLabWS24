import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class Raccoon extends BaseGameObject {
    name = "Raccoon";
    xVelocity = 0;
    yVelocity = 0;
    useGravityForces = true;

    getBoxBounds = function () {
        let bounds = {
            left: this.x + 18,
            right: this.x + this.width - 22,
            top: this.y + 14,
            bottom: this.y + this.height - 3
        }
        return bounds;
    }

    update = function() {
        this.x += this.xVelocity * global.deltaTime;
        this.y += this.yVelocity * global.deltaTime;
    
        // Prevent moving outside the canvas width
        if (this.x < 0) {
            this.x = 0; // Stop at the left edge
        } else if (this.x + this.width > global.canvas.width) {
            this.x = global.canvas.width - this.width; // Stop at the right edge
        }
    
        // Ensuring the sprite updates correctly if velocity is zero
        if (this.xVelocity === 0) {
            global.playerObject.switchCurrentSprites(this.animationData.firstSpriteIndex, this.animationData.firstSpriteIndex);
        }
    };



    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.width = width*4
        this.height = height*4

        this.x = Math.min(x, global.canvas.width - this.width);
        


        this.loadImagesFromSpritesheet("./images/BODY_raccoon.png", 9, 4);
    }
    
}



export {Raccoon}