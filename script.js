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

function playRound(HumanChoice,SCORE){
    let computerChoice = getComputerChoice(Math.random());computerChoice
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

const putHumanChoice = document.getElementById("getChoice");
const saveButton = document.getElementById("putChoice");
const startButton = document.getElementById("startGame");
const resetButton = document.getElementById("scoreReset");

saveButton.addEventListener("click", function(){
    HumanChoice = Number(putHumanChoice.value);
    HumanChoice = getHumanChoice(HumanChoice);
})

startButton.addEventListener("click",function(){
    SCORE = playRound(HumanChoice,SCORE);
})

resetButton.addEventListener("click", function(){
    SCORE = [0,0]
        console.log(`THE SCORE HAS BEEN RESET\nhuman score : ${SCORE[0]}\ncomputer score : ${SCORE[1]}`)
})

