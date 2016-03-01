////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if(move == null){
      return getInput();
    }
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if(move == null){
      return randomPlay();
    }
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    var rock ='rock';
    var paper = 'paper';
    var scissors = 'scissors';
    console.log('Player move => ' +playerMove+ ' | Computer move => ' +computerMove);


    if( (playerMove == rock && computerMove == scissors) || (playerMove == paper && computerMove == rock) || (playerMove == scissors && computerMove == paper)){

      winner = 'Player';
    }
    else if ( (computerMove == rock && playerMove == scissors) || (computerMove == paper && playerMove == rock) || (computerMove == scissors && playerMove == paper)){
      winner = 'Computer';
    }
    else if ( (playerMove == computerMove)){
      winner = 'Tie';
      console.log('It was a tie!');
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var ties = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    do {
      console.log('Score: Player with '+playerWins+' wins. Computer with '+computerWins+' wins.');

      var playerMove = getPlayerMove(getInput());
      var computerMove = getComputerMove(randomPlay());
      var winner = getWinner(playerMove, computerMove);

      if(winner == 'Player'){
        playerWins++;
      }
      else if(winner == 'Computer'){
        computerWins++;
      }
      else {
        ties++;
      }
    }

    while (playerWins < 5 && computerWins < 5){
      if(playerWins>computerWins){
        console.log('Player has won the game!');
      }
      else{
        console.log('Computer has won the game!');
      }

    }
    return ['Player Wins '+playerWins, 'Computer Wins '+computerWins, 'Ties: '+ ties];
}

playToFive();
