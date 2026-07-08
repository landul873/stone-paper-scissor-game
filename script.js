function getComputerChoice (computerChoice) {
    if (computerChoice >= 0 && computerChoice < 0.333){
        computerChoice = "stone";
    } 
    else if (computerChoice >= 0.333 && computerChoice < 0.666){
        computerChoice = "paper";
    } else{
        computerChoice = "scissor";
    }
    return computerChoice;
}

function getHumanChoice(HumanChoice) {
    if (HumanChoice === 1){
        HumanChoice = "stone"; 
    } else if (HumanChoice === 2){
        HumanChoice = "paper"; 
    } else if (HumanChoice === 3){
        HumanChoice = "scissor"; 
    } else {
        HumanChoice = "";
    }
    return HumanChoice;
}

function playRound(computerChoice,HumanChoice,SCORE){
    console.log(`you choose ${HumanChoice}, computer choose ${computerChoice}`);
    if (computerChoice == HumanChoice){
        SCORE[0] += 1;
        SCORE[1] += 1;
        console.log("DRAW");
    } else {
        if ((computerChoice === "stone" && HumanChoice === "paper") || (computerChoice === "paper" && HumanChoice === "scissor") || (computerChoice === "scissor" && HumanChoice === "stone")){
            SCORE[0] += 1;
            console.log("HUMAN WIN");
        } else {
            SCORE[1] += 1;
            console.log("COMPUTER WIN");
        }
    }
    console.log (`human score : ${SCORE[0]}\ncomputer score : ${SCORE[1]}`)
    return SCORE;
}

let SCORE = [0,0]; //[human_score, computer_score]
let HumanChoice = "";
let maxScore = 0;

//element in html
const putHumanChoice = document.getElementById("getChoice");
const startButton = document.getElementById("startGame");
const changeScoreButton = document.getElementById("changeScore");
const resetButton = document.getElementById("scoreReset");
const gameResultOutput = document.getElementById("gameResultOutput")
let HumanChoiceOutput = document.getElementById("human-choice");
let computerChoiceoutput = document.getElementById("computer-choice");
let humanScoreoutput = document.getElementById("human-score");
let computerScoreOutput = document.getElementById("computer-score");

humanScoreoutput.innerText = SCORE[0];
computerScoreOutput.innerText = SCORE[1];

startButton.addEventListener("click",function(){
    HumanChoice = Number(putHumanChoice.value);
    HumanChoice = getHumanChoice(HumanChoice);
    let computerChoice = getComputerChoice(Math.random())
    SCORE = playRound(computerChoice,HumanChoice,SCORE);
    computerChoiceoutput.innerText = computerChoice;
    HumanChoiceOutput.innerText = HumanChoice;
    humanScoreoutput.innerText = SCORE[0];
    computerScoreOutput.innerText = SCORE[1];
    if (SCORE[0] === maxScore){
        gameResultOutput.textContent = "YOU WIN!!";
        gameResultOutput.style.display = "block";
        startButton.style.display = "none";
    } else if(SCORE[1] === maxScore){
        gameResultOutput.textContent = "COMPUTER WIN!!";
        gameResultOutput.style.display = "block";
        startButton.style.display = "none";
    } 
})

changeScoreButton.addEventListener("click",function(){
    maxScore = Number(prompt("change max score (default max score is 5)"));
    console.log(`input succes, new maxScore is ${maxScore}`);
})

resetButton.addEventListener("click", function(){
    gameResultOutput.style.display = "none";
    SCORE = [0,0]
    humanScoreoutput.innerText = SCORE[0];
    computerScoreOutput.innerText = SCORE[1];
        console.log(`THE SCORE HAS BEEN RESET\nhuman score : ${SCORE[0]}\ncomputer score : ${SCORE[1]}`)
    startButton.style.display = "inline";
})

resetButton.onmouseenter = () => resetButton.style.backgroundColor = "black"
resetButton.onmouseleave = () => resetButton.style.backgroundColor = "rgb(53, 104, 87)"
changeScoreButton.onmouseenter = () => changeScoreButton.style.backgroundColor = "black"
changeScoreButton.onmouseleave = () => changeScoreButton.style.backgroundColor = "rgb(53, 104, 87)"
startButton.onmouseenter = () => startButton.style.backgroundColor = "black"
startButton.onmouseleave = () => startButton.style.backgroundColor = "rgb(53, 104, 87)"