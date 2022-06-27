//VARIABLES
var greeting = "Lets play Rock, Paper, Scissors!";
var instructions = "Please enter R, P, or S to signify your choice of rock paper or scissors.";
var nextTime= "Ok maybe next time!";
var invalidResponse = "You didn't enter R, P, or S!";
var declareTie = "Tie Game!";
var declareCompWins = "Computer Wins!";
var declareYouWin = "You win!";
var compResponse = ["R", "P", "S"];
var pickCompResponse = compResponse[Math.floor(Math.random()*compResponse.length)];
var playAgain = "Do you want to play again Y or N?"
var playerScore = 0;
var tieScore = 0;
var compScore = 0;

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
                    alert(declareTie);
                    alert(["WINS: " + playerScore, " LOSSES: " + compScore, " TIES: " + tieScore+1]);
                } else if (playerOne === "R" && pickCompResponse === "P") { 
                    alert(declareCompWins); 
                    alert(["WINS: " + playerScore, " LOSSES: " + compScore+1, " TIES: " + tieScore]);
                } else if (playerOne === "P" && pickCompResponse === "S") {
                    alert(declareCompWins); 
                    alert(["WINS: " + playerScore, " LOSSES: " + compScore+1, " TIES: " + tieScore]);
                } else if (playerOne === "S" && pickCompResponse === "R") {
                    alert(declareCompWins);
                    alert(["WINS: " + playerScore, " LOSSES: " + compScore+1, " TIES: " + tieScore]);
                } else {
                    alert(declareYouWin); 
                    alert(["WINS: " + playerScore+1, " LOSSES: " + compScore, " TIES: " + tieScore]);   
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

