//INSTRUCTIONS

// As a user, I want to play Rock, Paper, Scissors against an automated opponent.

// As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.

// As a user, I expect the computer to choose R, P, or S in return.

// **** As a user, I want the option to play again whether I win or lose.

// **** As a user, I want to see my total wins, ties, and losses after each round.

// Specifications
// Must use the alert(), confirm(), and prompt() methods to collect user input and display information to the user.

// The computer's selection must be random to ensure a fair game.

// **** very helpful video: https://www.youtube.com/watch?v=C2_z34QFVjw

//VARIABLES
var greeting = "Lets play Rock, Paper, Scissors!";
var instructions = "Please enter R, P, or S to signify your choice of rock, paper, or scissors.";
var nextTime= "Ok maybe next time!"
var invalidResponse = "You didn't enter R, P, or S!"
var tieGame = "Tie Game!"
var compWins = "Computer Wins!"
var youWin = "You win!"
var compResponse = ["R", "P", "S"]
var pickCompResponse = compResponse[Math.floor(Math.random()*compResponse.length)];

//GAME  
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
            };
            result (); //TRIGGERS RESULT ALERT

                // var stats = function () { //STATS LOGIC
                //     var x = compWins;
                //     var y = youWin;
                //     if (playerOne === 1 && compWins == 1) {
                //         alert("You: " + 1, "Computer: " + 1);
                //     }
                // };
                // stats (); //TRIGGERS STATS ALERT
                
                // var playAgain = confirm("Play Again?"); //PLAY AGAIN?
                // if (playAgain) {
                //     var playGame = confirm(greeting);//LOOP BACK UP TO GREETING
                //     for (var i = 0; i < playGame.length; i++) {
                //     }
                // } else {
                //     alert(nextTime);
                // };   

        } else {
            alert(invalidResponse); //IF USER ENTERS SOMETHING OTHER THAN R,P,S
        }
    } else {
        alert(nextTime); //IF USER HITS 'CANCEL'
    }
} else {
    alert(nextTime); //IF USER HITS 'CANCEL'
}
