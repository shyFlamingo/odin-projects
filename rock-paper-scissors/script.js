// 0 = rock, 1 = paper, 2 = scissors

//funciton used to play the game
function playGame(){
  for( i = 0; i < 5; i ++ )
  {
    //computer = computerPlay();
    //playerChoice = prompt( 'Rock, Paper, or Scissors?');
    //console.log(playRound(playerChoice, computer));
  }
}

//return a number at random that describes the comp choice
function computerPlay()
{
  return Math.floor( (Math.random() * 10) % 3 );
}

//plays a round of rock paper scissors 
function playRound(playerChoice )
{
  let computerChoice = computerPlay();
  var player, computerText;
  let lowerPlayer = playerChoice.toLowerCase();

  //assign a numerical value to players choice
  switch(lowerPlayer)
  {
    case "rock":
      player = 0;
      break;
    case "paper":
      player = 1;
      break;
    case "scissors":
      player = 2;
      break;
    default:
      console.log('error in user input');
      break;
  }

  //assign text value to computer choice
  if( computerChoice == 0)
  {
    computerText = 'rock';
  }
  else if( computerChoice == 1 )
  {
    computerText = 'paper';
  }
  else{
    computerText = 'scissors';
  }

  //calculate who wins and output to console
  if( player == computerChoice )
  {
    return("Draw  Player: "+lowerPlayer+"  Comp: "+ computerText  + '\n' );
  }
  else if( player == ((computerChoice + 1) % 3))
  {
    playerScore = playerScore + 1;
    return("Player wins!  Player: "+lowerPlayer+"  Comp: "+ computerText  + '\n' );
  }
  else
  {
    computerScore = computerScore + 1;
    return("Computer Wins  Player: "+lowerPlayer+"  Comp: "+ computerText + '\n' );
  }
}

const rockButton = document.querySelector('#RockButton');
const paperButton = document.querySelector('#PaperButton');
const scissorsButton = document.querySelector('#ScissorsButton');
//var htmlPlayerScore = document.getElementById("#playerScore");
//var htmlComputerScore = document.getElementById("#computerScore");
var playerScore = 0;
var computerScore = 0;

rockButton.addEventListener('click', Rock);
paperButton.addEventListener('click', Paper);
scissorsButton.addEventListener('click', Scissors);

function Rock()
{
  console.log(playRound("rock"));
  console.log(playerScore + "   "+computerScore);
  PrintScore();
}

function Paper()
{
  console.log(playRound("Paper"));
  console.log(playerScore + "   "+computerScore);
  PrintScore();
}

function Scissors()
{
  console.log(playRound("Scissors"));
  console.log(playerScore + "   "+computerScore);
  PrintScore();
}

function PrintScore()
{
  document.getElementById("computerScore").innerHTML = "Computer Score: " + computerScore.toString();
  document.getElementById("playerScore").innerHTML = "Player Score: " + playerScore.toString();
}