
const buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

// console.log('Game pattern: ', gamePattern)
// console.log('User click pattern: ', userClickedPattern)

var started = false;
var level = 0;

// Jquery



// Detect buttons when click
$(".btn").click(function (e) {
    let userChosenColor = $(this).attr("id"); // use Jquery
    // let userChosenColor = e.target.id;
    userClickedPattern.push(userChosenColor);
    // console.log(userClickedPattern)

    // click to play sound
    playSound(userChosenColor)

    animatePress(userChosenColor)


    // index of the last answer
    checkAnswer(userClickedPattern.length - 1)

})


// Detect a Keyboard key has been pressed at the first time
$(document).keypress(function () {
    if (!started) {
        // h1 content change when keyboard press at the first time to start
        $("#level-title").text('Level ' + level)

        nextSequence()

        started = true

    }
})


// Check answer
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("Success")

        if (userClickedPattern.length === gamePattern.length) {
            // call NextSequence() after 1s delay
            setTimeout(function () {
                nextSequence()
            }, 1000)
        }
    } else {
        console.log("Wrong")
        playSound('wrong');

        $("body").addClass("game-over")
        setTimeout(function () {
            $("body").removeClass("game-over")
        }, 200)

        $("#level-title").text('Game Over, Press Any Key to Restart')

        startOver()
    }
}

// next Sequence func
function nextSequence() {

    // Inside nextSequence(), increase the level by 1 every time nextSequence() is called
    level++;

    // update the h1 with this change in the value of level.
    $("#level-title").text("Level " + level);


    // random number between 0 and 3;
    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)


    // button with the same Id as randomChosenColor
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)


    // Refactor the code in playSound(), it will work for both playing sound in nextSequence() and when the user clicks a button.
    playSound(randomChosenColor)




}

// Play Sound
function playSound(name) {
    var audio = new Audio("./sounds/" + name + ".mp3")
    audio.play()
}


// Animate function
function animatePress(currentColor) {
    var delayInMilliseconds = 100; //0.1 second
    $("#" + currentColor).addClass("pressed")

    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed")
    }, delayInMilliseconds);

}



// Start Over
function startOver() {
    // reset level
    level = 0;
    gamePattern = [];
    started = false;

    console.log('GamePattern: ', gamePattern)
    console.log('Started: ', started)
}

