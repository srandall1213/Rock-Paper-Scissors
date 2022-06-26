//INSTRUCTIONS

// As a user, I want to play Rock, Paper, Scissors against an automated opponent.

// As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.

// As a user, I expect the computer to choose R, P, or S in return.

// As a user, I want the option to play again whether I win or lose.

// **** As a user, I want to see my total wins, ties, and losses after each round.

// Specifications
// Must use the alert(), confirm(), and prompt() methods to collect user input and display information to the user.

// The computer's selection must be random to ensure a fair game.

//My Notes
// very helpful video: https://www.youtube.com/watch?v=C2_z34QFVjw
// StackOverflow helped with Play Again feature. Told me to put the whole game in a function so that I could put it in a while loop at the bottom.
// Need to figure out the stats alert.
// Need to figure out how to make the while loop not ask if a user wants to play again after hitting cancel.

//VARIABLES
var greeting = "Lets play Rock, Paper, Scissors!";
var instructions = "Please enter R, P, or S to signify your choice of rock, paper, or scissors.";
var nextTime= "Ok maybe next time!";
var invalidResponse = "You didn't enter R, P, or S!";
var tieGame = "Tie Game!";
var compWins = "Computer Wins!";
var youWin = "You win!";
var compResponse = ["R", "P", "S"];
var pickCompResponse = compResponse[Math.floor(Math.random()*compResponse.length)];
var playAgain = "Do you want to play again, Y or N?"

//GAME
function runGame() { //PUT THE WHOLE GAME IN A FUNCTION TO USE IN A WHILE LOOP FOR 'PLAY AGAIN?' AT THE BOTTOM
var playGame = confirm(greeting); //LET'S PLAY
if (playGame) {
    var playerChoice = prompt(instructions); //ENTER R,P,S
    if (playerChoice) {
        var playerOne = playerChoice;
        if (playerOne === "R" || playerOne === "P" || playerOne === "S") {

            var pickCompResponse = compResponse[Math.floor(Math.random()*compResponse.length)];
            alert("Computer's Response:  " + pickCompResponse); //RANDOM COMPUTER RESPONSE

            var result = function() { //WHO WINS OR LOSES LOGIC
                if (playerOne === pickCompResponse) {
                    alert(tieGame);
                } else if (playerOne === "R" && pickCompResponse === "P") {
                    alert(compWins);
                } else if (playerOne === "P" && pickCompResponse === "S") {
                    alert(compWins);
                } else if (playerOne === "S" && pickCompResponse === "R") {
                    alert(compWins);
                } else {
                    alert(youWin);
                }
            }
            result(); //TRIGGERS RESULT ALERT

             //**STATS GO HERE**

        } else {
            alert(invalidResponse); //IF USER ENTERS SOMETHING OTHER THAN R,P,S
        }
    } else {
        alert(nextTime); //IF USER HITS 'CANCEL'
    }
} else {
    alert(nextTime); //IF USER HITS 'CANCEL'
}
}
runGame();
//WHILE LOOP
while (prompt(playAgain)) {
runGame();
}

