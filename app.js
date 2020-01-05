/* GAME FUNCTION
Player must guess a number between min and max
Player gets a certain amount of guesses
Notify player of guesses remaining
Notify player of the correct answer if lose
Let the player choose to play again
*/


// Game values
let min=1,
    max=10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

// UI elements
const game = document.querySelector('.game'),
minNum = document.querySelector('.min-num'),
maxNum = document.querySelector('.max-num'),
guessBtn = document.querySelector('#guess-btn'),
guessInput = document.querySelector('#guess-input'),
message = document.querySelector('.message');


// Assigning min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play Again Event Listner
game.addEventListener('mousedown',function(e){
  // mousedown - so that it stays to show the final result win or lose
  if(e.target.className === 'play-again')
  {
    window.location.reload();
  }
});


// Listen for guess
guessBtn.addEventListener('click',function(){
  // console.log(guessInput.value);// the output is a string but we have to compare numbers to display the result accordingly so

  let guess = parseInt(guessInput.value);

  // Validate
  if(isNaN(guess) || guess<min || guess>max){
    setMessage(`Like I said before, between ${min} and ${max}`,'red');
  }

  // Check if won
  if(guess==winningNum)
  {

    gameOver(true,`${winningNum} is correct, you are improving.`);

  }

  // if lose
  else{
    guessesLeft -=1;
    if(guessesLeft===0)
    {
      gameOver(false,`Game over. The correct number was ${winningNum}`);
    }
    else{
      // Game contiues - answer wrong

      guessInput.value = '';
      setMessage(`${guess} is incorrect, ${guessesLeft} chances left`,'red');
    }
  }
});

function setMessage(msg,color)
{
  message.textContent = msg;
  message.style.color = color;
}


function gameOver(won, msg)
{
  let color;

  if(won===true){color = 'green';}
  else{color = 'red';}

      guessInput.disabled = true;

      guessInput.style.borderColor = 'color';
  
      setMessage(msg,color)


      // Play Again
      guessBtn.value = 'Try Again';
      guessBtn.className += 'play-again';
}


//  Fet Random Winning number
function getRandomNum(min,max)
{
  return Math.floor(Math.random()*(max-min+1)+min);
}
