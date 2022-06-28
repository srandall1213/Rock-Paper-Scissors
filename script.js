//VARIABLES
var playerScore = 0;
var tieScore = 0;
var compScore = 0;
var greeting = "Lets play Rock, Paper, Scissors!";
var instructions = "Please enter R, P, or S to signify your choice of rock paper or scissors.";
var nextTime= "Ok maybe next time!";
var invalidResponse = "You didn't enter R, P, or S!";
var compResponse = ["R", "P", "S"];
var pickCompResponse = compResponse[Math.floor(Math.random()*compResponse.length)];
var playAgain = "Do you want to play again Y or N?"


//GAME
function runGame() { //PUT THE WHOLE GAME IN A FUNCTION TO USE IN A WHILE LOOP FOR 'PLAY AGAIN?
var playGame = confirm(greeting); //LET'S PLAY
if (playGame) {
    var playerChoice = prompt(instructions); //ENTER RPS
    if (playerChoice) {
        var playerOne = playerChoice;
        if (playerOne === "R" || playerOne === "P" || playerOne === "S") {

            //RANDOM COMPUTER RESPONSE
            var pickCompResponse = compResponse[Math.floor(Math.random()*compResponse.length)];
            alert("Computer's Response:  " + pickCompResponse); 

            //WHO WINS OR LOSES LOGIC
            var result = function() { 
                if (playerOne === pickCompResponse) {
                    tieScore++;
                    var tieGame = "Tie Game! " + ["WINS: " + playerScore, " LOSSES: " + compScore, " TIES: " + tieScore];
                    alert(tieGame);
                } else if (playerOne === "R" && pickCompResponse === "P") {
                    compScore++;
                    var compWins = "Computer Wins! " + ["WINS: " + playerScore, " LOSSES: " + compScore, " TIES: " + tieScore]; 
                    alert(compWins); 
                } else if (playerOne === "P" && pickCompResponse === "S") {
                    compScore++;
                    var compWins = "Computer Wins! " + ["WINS: " + playerScore, " LOSSES: " + compScore, " TIES: " + tieScore];
                    alert(compWins);
                } else if (playerOne === "S" && pickCompResponse === "R") {
                    compScore++;
                    var compWins = "Computer Wins! " + ["WINS: " + playerScore, " LOSSES: " + compScore, " TIES: " + tieScore];
                    alert(compWins);
                } else {
                    playerScore++
                    var youWin = "You win! " + ["WINS: " + playerScore, " LOSSES: " + compScore, " TIES: " + tieScore];
                    alert(youWin);  
                }
            }
            result();
    
            // PLAY AGAIN - WHILE LOOP - why does it sometimes ask twice on "N" click??  
            while (prompt(playAgain) == "Y") { 
                runGame();
                }  

        } else {
            alert(invalidResponse); //IF USER ENTERS SOMETHING OTHER THAN RPS
        }
    } else {
        alert(nextTime); //IF USER HITS 'CANCEL'
    }
} else {
    alert(nextTime); //IF USER HITS 'CANCEL'
}
}
runGame(); //CALLED FUNCTION CODED AT THE TOP ON ORDER TO RUN THE GAME

