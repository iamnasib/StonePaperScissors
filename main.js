let userScore=0;
let compScore=0;


let choices = document.querySelectorAll('.choice');

let msg = document.querySelector('#msg');

let userScorePara = document.querySelector('#user-score');
let compScorePara = document.querySelector('#comp-score');

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.textContent = "Game was draw, play again";
    msg.style.backgroundColor="#333";
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        msg.innerText="You Won!! Continue playing."
        msg.style.backgroundColor="green";
        userScorePara.innerText=userScore;
    }
    else{
        compScore++;
        msg.innerText="You Lost!! Continue playing."
        msg.style.backgroundColor="red";
        compScorePara.innerText=compScore;
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true ;
        }   
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true ;
        }
        else {
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener('click', () =>{
        let userChoice = choice.getAttribute('id');
        playGame(userChoice);
})
})