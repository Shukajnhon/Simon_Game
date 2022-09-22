
const buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];


function nextSequence() {
    // random number between 0 and 3;
    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)
}
nextSequence()


// Jquery
$("#green")



