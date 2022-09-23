
const buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

// Jquery

// Detect buttons when click
$(".btn").click(function (e) {
    let userChosenColor = $(this).attr("id"); // use Jquery
    // let userChosenColor = e.target.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern)

    // click to play sound
    playSound(userChosenColor)

    animatePress(userChosenColor)

})


// Detect a Keyboard key has been pressed at the first time
$("body").keypress(function (e) {
    nextSequence()
})




// next Sequence func
function nextSequence() {
    // random number between 0 and 3;
    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)


    // button with the same Id as randomChosenColor
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)


    // Refactor the code in playSound(), it will work for both playing sound in nextSequence() and when the user clicks a button.
    playSound(userChosenColor)


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



