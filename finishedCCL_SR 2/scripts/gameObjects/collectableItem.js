import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

 let eatingSound = new Audio("/sounds/eat.wav");
 
class collectableItem extends BaseGameObject {

    reactToCollision = function (collidingObject) {
       

        if (collidingObject.name === "Raccoon") {
            this.active = false; // Mark the item as inactive
            global.itemScore++; 
            eatingSound.play();

        }
    }; 

 

    constructor (x, y, width, height) {
        super(x, y, width, height);


   // Array of image file paths
   const imageFiles = [
    "./images/itemApple.png", 
    "./images/itemJuice.png", 
    "./images/itemBone.png", 
    "./images/itemBanana.png"
];

        // Randomly select an image from the array
        const randomIndex = Math.floor(Math.random() * imageFiles.length);
        const selectedImage = imageFiles[randomIndex];

        this.loadImages([selectedImage]);


        setTimeout(() => {
        this.active = false; 
        }, 5000);
    }
}
    
 

export {collectableItem};