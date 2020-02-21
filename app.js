let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    gussesLeft = 3;

//UI elements
const minimumNum = document.querySelector('.min-num'),
    maximumNum = document.querySelector('.max-num'),
    guessInput = document.querySelector('#guess-input'),
    guessBtn = document.querySelector('#guess-btn'),
    message = document.querySelector('.message'),
    game = document.querySelector('#game');

//assigning values 
minimumNum.innerText = min;
maximumNum.innerText = max;

//play agian even listner
game.addEventListener('mousedown',function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

//Liaten to guess
guessBtn.addEventListener('click',function(){
    let guess = parseInt(guessInput.value);
    console.log(guess);

    //validate input
    if(isNaN(guess) || guess < 1 || guess > 10){
        setErrorMessage(`Please enter a number between ${min} and ${max} `,'red');
    }

    //winning number
    if(guess === winningNum){
        // setErrorMessage(` Hurrey!, ${winningNum} is correct`,'green');
        // guessInput.disabled = true;
        // guessInput.style.borderColor = 'green';
        gameover(true,` Hurrey!, ${winningNum} is correct`,'green')
    } else {
        gussesLeft -= 1;
        if(gussesLeft === 0){
            // setErrorMessage(`Game Over, you lost. The correct number was ${winningNum} `,'red');
            // guessInput.disabled = true;
            // guessInput.style.borderColor = 'red';
            gameover(false,`Game Over, you lost. The correct number was ${winningNum} `,'red')
        } else {
            setErrorMessage(`${guess} is incorrect. ${gussesLeft} gusses left `,'red');
            guessInput.value= '';
            guessInput.style.borderColor = 'red';
        }
    }

})

function gameover(won,msg,color) {
    let color2;
    won === true ? color2 = 'green' : color2 = 'red';
    setErrorMessage(msg,color);
    guessInput.disabled = true;
    guessInput.style.borderColor = color2;

    guessBtn.value = 'Play Agian';
    guessBtn.className = 'play-again';
}


function setErrorMessage(msg,color){
    message.textContent = msg;
    message.style.color = color;
}

function getRandomNum(min,max){
    return Math.floor((Math.random()*max)+min);
}