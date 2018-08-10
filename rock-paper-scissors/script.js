// 0 = rock, 1 = paper, 2 = scissors

//funciton used to play the game
function playGame(){
  for( i = 0; i < 5; i ++ )
  {
    computer = computerPlay();
    playerChoice = prompt( 'Rock, Paper, or Scissors?');
    console.log(playRound(playerChoice, computer));
  }
}

//return a number at random that describes the comp choice
function computerPlay()
{
  return Math.floor( (Math.random() * 10) % 3 );
}

//plays a round of rock paper scissors 
function playRound(playerChoice, computerChoice)
{
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
    return("Player wins!  Player: "+lowerPlayer+"  Comp: "+ computerText  + '\n' );
  }
  else
  {
    return("Computer Wins  Player: "+lowerPlayer+"  Comp: "+ computerText + '\n' );
  }
}

