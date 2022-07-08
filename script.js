'use strict';

// selcting Elements
const score_0_El = document.querySelector('#score--0');
const score_1_El = document.querySelector('#score--1');
const diceImg = document.querySelector('.dice');
const diceRollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');
const currScore0El = document.getElementById('current--0');
const currScore1El = document.getElementById('current--1');
const section1El = document.querySelector('.player--0');
const section2El = document.querySelector('.player--1');


/*                                  MY CODE

// starting Phase
score_0_El.textContent = 0;
score_1_El.textContent = 0;
diceImg.classList.add("hidden");
let currentScore = 0;
let activePlayer = 1
let player1points = 0;
let player2points = 0;


  // 1st sub-problem to tackle down
// roll start functionality
function rollingDice(){
    // generate random number
    let randomNum = Math.floor(Math.random() * 6 + 1)
    // show dice image
    diceImg.classList.remove("hidden");
    diceImg.src = `dice-${randomNum}.png`;
    if(randomNum == 1){
        // switch Active player
        if(activePlayer == 1){
            // switch to player 2
            let currAct = activePlayer;
            currentScore = 0;
            currScore0El.textContent = currentScore;
            activePlayer = 2;
            console.log("change " + currAct + " to " + activePlayer);
            
        }else if(activePlayer == 2){
            let currAct = activePlayer;
            currentScore = 0;
            currScore1El.textContent = currentScore;
            activePlayer = 1;
            console.log("change " + currAct + " to " + activePlayer);

            
        }
    }else{
        if(activePlayer == 1){
            currentScore += randomNum;
            currScore0El.textContent = currentScore;
        }else{
            currentScore += randomNum;
            currScore1El.textContent = currentScore;
        }
    }

} //////


diceRollBtn.addEventListener("click", rollingDice);


// in above 1st sub-prob, fix(by mean toggle class) the player--active class, and that below the line is 2nd sub-prob
function rollingDice(){
    // generate random number
    let randomNum = Math.floor(Math.random() * 6 + 1)
    // show dice image
    diceImg.classList.remove("hidden");
    diceImg.src = `dice-${randomNum}.png`;
    if(randomNum == 1){
        // switch Active player
        if(activePlayer == 1){
            // switch to player 2
            player1points = 0
            score_0_El.textContent = player1points
            let currAct = activePlayer;
            currentScore = 0;
            currScore0El.textContent = currentScore;
            activePlayer = 2;
            console.log("change " + currAct + " to " + activePlayer);
            section1El.classList.remove("player--active");
            section2El.classList.add("player--active");
            
        }else if(activePlayer == 2){
            player2points = 0;
            score_1_El.textContent = player2points;
            let currAct = activePlayer;
            currentScore = 0;
            currScore1El.textContent = currentScore;
            activePlayer = 1;
            console.log("change " + currAct + " to " + activePlayer);
            section2El.classList.remove("player--active");
            section1El.classList.add("player--active");

            
        }
    }else{
        if(activePlayer == 1){
            currentScore += randomNum;
            currScore0El.textContent = currentScore;
        }else{
            currentScore += randomNum;
            currScore1El.textContent = currentScore;
        }
    }

}



// now the 3rd sub-prob is Hold the current points

holdBtn.addEventListener('click',holdPoints);

function holdPoints(){
    if(activePlayer == 1){
        player1points += +currScore0El.textContent;
        score_0_El.textContent = player1points;
        activePlayer = 2;
        section1El.classList.remove("player--active");
        section2El.classList.add("player--active");
        currentScore = 0;
        currScore0El.textContent = currentScore;
    }else if(activePlayer == 2){
        player2points += +currScore1El.textContent;
        score_1_El.textContent = player2points;
        activePlayer = 1;
        section2El.classList.remove("player--active");
        section1El.classList.add("player--active");
        currentScore = 0;
        currScore1El.textContent = currentScore;
        
    }
}  
 */



// I want to rolling and dice button be clickable only while the game is not finished

/*
// here is one way by toggle through Listener method

// starting condition
let score, activePlayer, currentScore;
const newGame = function(){ 
    score_0_El.textContent = 0;
    score_1_El.textContent = 0;
    diceImg.classList.add("hidden");
    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    diceRollBtn.addEventListener('click', diceRoll);
    holdBtn.addEventListener('click', hold);
}

newGame();



function switchPlayer(){
    currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        activePlayer = activePlayer == 0 ? 1 : 0;
        section1El.classList.toggle("player--active");
        section2El.classList.toggle("player--active");
}

//Phase-1: rolling dice functionality

function diceRoll(){
    const dice = Math.floor(Math.random() * 6) + 1;
    diceImg.classList.remove("hidden");
    diceImg.src = `dice-${dice}.png`;

    if(dice !== 1){
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        switchPlayer();
    }

}

// diceRollBtn.addEventListener('click', diceRoll);


// Hold points functionality 

// holdBtn.addEventListener('click', hold);

function hold(){
    //1. add current score to active player's score
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer];
    
    if(score[activePlayer] >= 20){
        //2. finish the game
        document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        diceImg.classList.add("hidden");
        diceRollBtn.removeEventListener('click', diceRoll);
        holdBtn.removeEventListener('click', hold);
    }else{
        switchPlayer();
        
    }
    
}


// Restart Game functionality
newBtn.addEventListener('click',restartGame);
function restartGame(){
    console.log(activePlayer);
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner");
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    newGame();
    section1El.classList.add("player--active");
    
}
*/





// second way, By defining the game is actually in a playing state or not

// starting condition
let score, activePlayer, currentScore, playing;
const newGame = function () {
    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score_0_El.textContent = 0;
    score_1_El.textContent = 0;
    currScore0El.textContent = 0;
    currScore1El.textContent = 0;
    diceImg.classList.add('hidden');
    section1El.classList.remove('player--winner','player--active');
    section2El.classList.remove('player--winner', 'player--active');
    section1El.classList.add("player--active");
    
};

newGame();

function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer == 0 ? 1 : 0;
  section1El.classList.toggle('player--active');
  section2El.classList.toggle('player--active');
}

//Phase-1: rolling dice functionality

function diceRoll() {
  if (playing) {
    const dice = Math.floor(Math.random() * 6) + 1;
    diceImg.classList.remove('hidden');
    diceImg.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
}

diceRollBtn.addEventListener('click', diceRoll);

// Hold points functionality

holdBtn.addEventListener('click', hold);

function hold() {
  if (playing) {
    //1. add current score to active player's score
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer];

    if (score[activePlayer] >= 100) {
      //2. finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceImg.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
}

// Restart Game functionality
newBtn.addEventListener('click', newGame);
