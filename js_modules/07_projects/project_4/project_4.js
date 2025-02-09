let num = Math.round(Math.random()*100 + 1)
const submit = document.querySelector('#subt')
const userinput = document.querySelector('#guessField')
const guessSlot = document.querySelector('#guesses')
const lastguess = document.querySelector('#lastguess')
const lowOrHi = document.querySelector('#lowOrHi')
const startOver = document.querySelector('#result_parse')
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click',function(e){
   e.preventDefault();
   const guess = parseInt(userinput.value);
   console.log(guess);
   
   validateGuess(guess)
  })
}

function validateGuess(guess){
 if(isNaN(guess)){
    alert('please enter a valid number');
 }else if (guess < 1){
    alert('please enter a number more than 1');
 }else if (guess > 100){
    alert('please enter a number less than 100');
 }else{
    prevGuess.push(guess);
    if(numGuess === 11){
    displayGuess(guess)
    displayMessage(`Game over. The Random Number Is ${num}`)
    endGame(); 
}   else{
    displayGuess(guess)
    checkGuess(guess)
 }
}
}

function checkGuess(guess){
    if(guess === num){
        displayMessage(`Congratulation You Guess The Number`)
        endGame();
    }else if (guess < num){
        displayMessage(`Number is Too Low...`)
    }else if (guess > num){
        displayMessage(`Number is Too high...`)
    }
}

function displayGuess(guess){
    userinput.value = '';
    guessSlot.innerHTML += `${guess} ,`;
    numGuess++;
    lastguess.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame(){
    userinput.value = '';
    userinput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML =  `<a href="#" id="newGame">Start new Game</a>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    num = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    lastguess.innerHTML = `${11 - numGuess} `;
    userinput.removeAttribute('disabled','');
    startOver.removeChild(p);

    playGame = true;
  });
}