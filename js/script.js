let order = [];
let clickedOrder = [];
let score = 0;

//0 = green
//1 = red
//2 = yellow
//3 - blue

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

//Creates random order of colors
let shuffleOrder = () => {
    //Draw a number from 0 to 3
    let colorOrder = Math.floor(Math.random() * 4);

    order[order.length] = colorOrder;
    clickedOrder = [];

    //Turn on the color
    for (let i in order) {

        //Wheel according to order size
        let elementColor = createColorElement(order[i]);

        //Lights up so you can click on it
        lightColor(elementColor, Number(i) + 1);
        
    }
}


//Lights the next color
let lightColor = (element, number) =>{
    number = number * 500;
    
    //Insert class "selected" to show the color to click 
    setTimeout(() => {
       element.classList.add('selected');
    }, number - 250);

    //Remove a class "selected" 
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//Checks whether the buttons clicked are the same as the order generated in the game
let checkOrder = () =>{
    for(let i in clickedOrder){
        if (clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }

    if (clickedOrder.length == order.length){
        alert(`Score: ${score}\nYOU WON :)! Starting next level.`);
        nextLevel();
    }
}

//Click function
let click  = (color) =>{
    clickedOrder[clickedOrder.length] = color; // 0 or 1 or 2 or 3
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');

    //Compare if what was clicked is what was requested by the game
    checkOrder();
    }, 250);
}

//Function that returns color
let createColorElement = (color) =>{
    if(color == 0){
        return green;
    }
    else if(color == 1){
        return red;
    }
    else if(color == 2){
        return yellow;
    }
    else if(color == 3){
        return blue;
    }
}

//Function for the next level of the game
let nextLevel = () =>{
    score++;
    shuffleOrder();
}

//Game over function
let gameOver = () =>{
    alert(`Score: ${score}\nGAME OVER!!!\nClick Ok to start a new game`);
    order = [];
    clickedOrder = [];

    playGame();
}

//Game Start function
let playGame = () =>{
    alert(`Welcome to Genius! Starting a new game`);
    score = 0;

    nextLevel();
}

//Click events for colors
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//Beginning of the game
playGame();