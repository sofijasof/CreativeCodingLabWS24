import { global } from "./global.js";
import { Raccoon } from "../gameObjects/Raccoon.js";
import { collectableItem } from "../gameObjects/collectableItem.js";
import { enemyLight } from "../gameObjects/enemyLight.js";

let loosingSound = new Audio("/sounds/whompwhomp.wav");


function playLoosingSound(){
    loosingSound.play();
}


function gameLoop(totalRunningTime){
    global.deltaTime = totalRunningTime - global.prevTotalRunningTime; 
   

    global.deltaTime /= 1000; 
    global.prevTotalRunningTime = totalRunningTime; 
    global.ctx.clearRect(0,0, global.canvas.width, global.canvas.height); 


 
        
    if (global.playerHealth <= 0) {
        playLoosingSound();

        showGameOver();
       return;  // Exit the game loop if the game is over
    }
    
    for(var i = 0; i < global.allGameObjects.length; i++){

        if(global.allGameObjects[i].active == true){
            global.allGameObjects[i].storePositionOfPreviousFrame();
            global.allGameObjects[i].update();
            global.checkCollisionWithAnyOther(global.allGameObjects[i]);
            global.allGameObjects[i].applyGravity();
            global.allGameObjects[i].draw();


            
        }
    }
    drawScore();
    requestAnimationFrame(gameLoop);

}



function drawScore() {

    global.ctx.font = "40px 'Jersey 10', sans-serif"; 
      
    global.ctx.fillStyle = "white";        
    global.ctx.fillText(`Score: ${global.itemScore}`, 20, 50); 
   
}

function hideElemment(elementId){
    document.getElementById(elementId).style.display = 'none';
}

function showElemment(elementId){
    document.getElementById(elementId).style.display = '';
}


function setupGame(){
    global.playerObject = new Raccoon(300, 0, 64, 64);

    console.log(global.canvas.width)
    const blockSize = 64*2.3;
    new enemyLight(
        600, 
        300, 
        blockSize, 
        blockSize, 
        blockSize, 
        global.canvas.width - (blockSize*2), 
        200);

    setInterval(() => {
        const x = Math.max(0, Math.min(global.canvas.width - 50, Math.random() * (global.canvas.width - 50)));

        const minSpawnHeight = 100;
        const maxSpawnHeight = global.canvas.height-100;
        const generatedY = maxSpawnHeight * Math.random();
        const y = Math.max(minSpawnHeight, generatedY);

        new collectableItem(x, y, 50, 50);
    }, 3000);


   
}

function showMainMenu() {
    hideElemment('game-over');
    hideElemment('how-to-play');
    hideElemment('story');
    hideElemment('game-container');

    showElemment('game-screen');
}

showMainMenu();


function showGame() {

  

    if (global.gameStarted) return;

    global.gameStarted = true;

    // Hide other screens

    hideElemment('game-screen');
    hideElemment('how-to-play');
    hideElemment('story');
    hideElemment('game-over');

    // Show the game container (canvas and background)
    showElemment('game-container');

    // Start the game loop
    setupGame();
    requestAnimationFrame(gameLoop);
}
window.showGame = showGame;


  // Show the Game Over screen
function showGameOver() {
    let score = global.itemScore;

    console.log("Game Over triggered. Final score:", score);

    // Stop the game loop (pointer events prevent further interactions)
    document.getElementById('game-container').style.pointerEvents = 'none';

    // Show the Game Over screen

    hideElemment('game-screen');
    hideElemment('game-container');

    showElemment('game-over');

    // Update the score
    document.getElementById('finalScore').textContent = score;
}
window.showGameOver = showGameOver;


function showHowToPlay() {
    hideElemment('game-over');
    hideElemment('story');
    hideElemment('game-container');

    showElemment('how-to-play');
}

window.showHowToPlay = showHowToPlay;

function showStory() {
    hideElemment('game-over');
    hideElemment('how-to-play');
    hideElemment('game-container');

    showElemment('story');
}



window.showStory = showStory;



window.goBackToGame = showMainMenu;

