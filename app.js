let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const usrScore = document.querySelector("#usrScore");
const compScore = document.querySelector("#compScore");

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#afaf67";
};

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const showWinner = (usrWin, usrChoice, computerChoice) => {
    if(usrWin){
        userScore++;
        usrScore.innerText = userScore;
        msg.innerText = `You are Winner!! Computer selected ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        comScore++;
        compScore.innerText = comScore;
        msg.innerText = `Comp is Winner!! Computer selected ${computerChoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame = (value) => {
    const compChoice = getCompChoice();

    if (value === compChoice){
        drawGame();
    } else {
        let usrWin = true;
        if (value === "rock"){
            usrWin = compChoice === "paper" ? false : true;
        } else if (value === "paper") {
            usrWin = compChoice === "scissors" ? false : true;
        } else {
            usrWin = compChoice === "rock" ? false : true;
        }
        showWinner(usrWin, value, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    });
});