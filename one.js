const playAgainBtn = document.getElementsByClassName('playAgain')

var highS = 0;
var chances = 100;
var randomNum = Math.floor((Math.random() * 100) + 1);
console.log(randomNum)

const checkBtn = document.getElementsByClassName('checkBtn')
const textD = document.getElementById('textDiv')
const chanceD = document.getElementById('chanceDiv')
const highD = document.getElementById('highDiv')
const body = document.getElementById('body')
const findNum = document.getElementById('findNum')

function fun2() {
    chances--;
    chanceD.innerText = chances
    const val = document.getElementById('inputF').value
    if (val == randomNum) {
        highS = Math.max(highS, chances);
        funWin()
    } else if (val < randomNum) {
        funLow()
    } else {
        funHigh();
    }
    console.log(randomNum)
    if (chances < 0) {
        window.alert("Game Over");
        fun1();
    }
}


function funWin() {
    textD.innerText = "Hurry! You Won.";
    body.style.background = 'green';
    highD.innerText = highS;
    document.getElementById('checkBtn').style.display = "none";
    findNum.innerText = randomNum;
    randomNum = Math.floor((Math.random() * 100) + 1);
}

function funHigh() {
    textD.innerText = "Your Guess is High";
}

function funLow() {
    textD.innerText = "Your Guess is Low";
}

function fun1() {
    textD.innerText = "Start Guessing Again..."
    chances = 100;
    chanceD.innerText = chances;
    document.getElementById('checkBtn').style.display = "inline-block";
    body.style.background = 'black';
    findNum.innerText = "?";
}