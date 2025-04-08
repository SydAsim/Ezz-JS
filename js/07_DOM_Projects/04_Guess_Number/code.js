// for random number generation
let  randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver  = document.querySelector('.resultParas')

const  p = document.createElement('p')

let  prevGuess = []
let  numGuess =  1

let playGame = true 

if(playGame){
    submit.addEventListener('click' ,function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess); 
        // pass the guess value to the validateGuess ftn 
        validateGuess(guess)
    });
}

// ftn to chk is value there and is between 1 and 100
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid Number')
    }
    else if(guess < 1 ){
        alert('Please enter a number Greater than 1 ')
    }
    else if(guess > 100 ){
        alert('Please enter a number lessor than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over. Random number was ${randomNumber}`)
            endGame()
            }
            else{
                displayGuess(guess)
                checkGuess(guess)
            }
        }
    }



// is that value == to the random number or not 
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You Guessed it Right. You have Won the Game`)
        endGame()
    }
    else if(guess < randomNumber){
     displayMessage(`Number is TOO low`)
    }
    else if(guess > randomNumber){
     displayMessage(`Number is TOO High `)
    }

}

// clean the guess yani dosaray number ka liye 
// and the prev guess and the remaing guess changes
function displayGuess(guess){
    userInput.value = '' //clean it up
    guessSlot.innerHTML += `${guess}  ` //push tthe values to display
    numGuess++ ; // increment the numGuess
    remaining.innerHTML = `${12 - numGuess}`// Update remaining guesses

}

// simple we will pass the display message 
function displayMessage(message){
  lowOrHi.style.color = 'red'
  lowOrHi.innerHTML = `<h2 style >${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '') // disabled input field

    p.classList.add('button')
    p.style.backgroundColor = 'green'

    p.innerHTML =  '<h2 id="newGame">Start New Game</h2>'
    startOver.appendChild(p) // start the game again 
    playGame = false ; // make the playGame false
    newGame()

}

function newGame() {
     const newGamebutton =  document.querySelector('#newGame')
     newGamebutton.addEventListener('click' ,function(e) {
     randomNumber = parseInt(Math.random() * 100 + 1);
     prevGuess = []
     numGuess = 1
     guessSlot.innerHTML = ''
     remaining.innerHTML = `${ 11- numGuess}`
     userInput.removeAttribute('disabled')
     startOver.removeChild(p)

     playGame = true;
     });
     

}