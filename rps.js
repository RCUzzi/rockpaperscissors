function computerPlay()
{
  choice = Math.floor(Math.random()*3);
  if (choice == 0) {
    return 'rock';
  } else if (choice == 1) {
    return 'paper';
  } else if (choice == 2) {
    return 'scissors';
  }
}

function playRound(playerSelection, computerSelection)
{
  if((playerSelection == 'rock' && computerSelection == 'paper') ||
  (playerSelection == 'paper' && computerSelection == 'scissors') ||
  (playerSelection == 'scissors' && computerSelection == 'rock')) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    return 1;
  } else if (playerSelection == computerSelection) {
    console.log("You Tied.");
    return 2;
  } else {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);
    return 0;
  }
}

function playerResponse() {
  var player = "";
  while(player != "rock" && player != 'paper' && player != 'scissors') {
    player = prompt("Please choose Rock, Paper, or Scissors.").toLowerCase();
  }
  return player;
}

function game(){
  var pscore = 0; // player score
  var cscore = 0; // computer score

  while (pscore < 5 && cscore < 5) {
    var player = playerResponse();

    winner = playRound(player, computerPlay());
    if(winner == 0) {
      pscore++;
    } else if (winner == 1) {
      cscore++;
    }

    console.log(`Current score| Player: ${pscore} Computer: ${cscore}`);
  }
}

game();
