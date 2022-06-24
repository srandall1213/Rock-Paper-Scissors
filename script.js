//Greeting - DONE

var greeting = "Lets play Rock, Paper, Scissors!";

alert(greeting);

//User enters R, P, S - DONE

var instructions = "Please enter R, P, or S to signify your choice of rock, paper, or scissors.";

prompt(instructions);

//Randomly generated computer response - DONE

var opponentResponse = ["Rock", "Paper", "Scissors"];

var pickOpponentResponse = opponentResponse[Math.floor(Math.random()*opponentResponse.length)];

alert("Opponent's response: " + pickOpponentResponse); 

//Conditional Loop Statement if user/opponent wins - START WORKING HERE!!!!

var declareWin = "You win!";
alert(win);

var declareLose = "You lose!";
alert(lose);

var stats = "Stats:\n Wins: X\n Ties: X\n Losses: X\n";
alert(stats);

var again = "Play again?";
confirm(again)




//Instructions

// As a user, I want to play Rock, Paper, Scissors against an automated opponent.

// As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.

// As a user, I expect the computer to choose R, P, or S in return.

// As a user, I want the option to play again whether I win or lose.

// As a user, I want to see my total wins, ties, and losses after each round.

// Specifications
// Must use the alert(), confirm(), and prompt() methods to collect user input and display information to the user.

// The computer's selection must be random to ensure a fair game.
