const rock  = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const playAgain = document.querySelector('.playAgain');
const containerRPS = document.querySelector('#containerRPS');

let playerSelection;

function deleteMessagePlay(){
    if(document.querySelector('#deletePlay')){
        document.querySelector('#deletePlay').outerHTML = "";
    }
    if(document.querySelector('#scoreRPS')){
        document.querySelector('#scoreRPS').outerHTML = "";
    }
}

rock.addEventListener('click', function() {
    playerSelection = 'pierre';
    deleteMessagePlay();
    game();
});
paper.addEventListener('click', function() {
    playerSelection = 'papier';
    deleteMessagePlay();
    game();
});
scissors.addEventListener('click', function() {
    playerSelection = 'ciseaux';
    deleteMessagePlay();
    game();
});
playAgain.addEventListener('click', function(){
    resetGame();
})

function computerPlay(){
    let computerHand = Math.floor(Math.random() * 3);
    if (computerHand === 0){
        return "pierre";
    } else if (computerHand === 1) {
        return "papier";
    } else {
        return "ciseaux";
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "Tie!";
    } else if(playerSelection === "pierre" && computerSelection === "ciseaux"){
        return "User wins!";
    } else if(playerSelection === "ciseaux" && computerSelection === "papier"){
        return "User wins!";
    } else if(playerSelection === "papier" && computerSelection === "pierre"){
        return "User wins!";
    } else {
        return "Computer wins!"
    }
}

function consoleMatch(playerSelection, computerSelection){
    containerRPS.insertAdjacentHTML("beforeend", `<p>Vous jouez ${playerSelection} - L'ordinateur joue ${computerSelection}</p>`);
    containerRPS.insertAdjacentHTML("afterbegin", `<p id="scoreRPS">Score : Vous ${wonGame} - Ordinateur ${lostGame}</p>`);
}
let countRoundFive = 0;
function countRound(){
    countRoundFive++;
}
function resetGame() {
    containerRPS.innerHTML = `<p id="deletePlay">Jouez!!!</p>`;
    countRoundFive = 0;
    wonGame = 0;
    lostGame = 0;
    rock.removeAttribute('style', 'display: none;');
    paper.removeAttribute('style', 'display: none;');
    scissors.removeAttribute('style', 'display: none;');
    playAgain.setAttribute('style', 'display: none;');
}
function hideButtons() {
    rock.setAttribute('style', 'display: none;');
    paper.setAttribute('style', 'display: none;');
    scissors.setAttribute('style', 'display: none;');
    playAgain.setAttribute('style', 'display: inline-block;');
}
function countToFive(){
    if(countRoundFive >= 5){
        document.querySelector('#scoreRPS').outerHTML = "";
        if(wonGame > lostGame){
            containerRPS.insertAdjacentHTML("afterbegin", `</p>Score ${wonGame} : ${lostGame} - Vous gagnez</p>`);
            hideButtons();
        } else if(lostGame > wonGame) {
            containerRPS.insertAdjacentHTML("afterbegin", `</p>Score ${wonGame} : ${lostGame} - L'ordinateur gagne</p>`);
            hideButtons();
        } else {
            containerRPS.insertAdjacentHTML("afterbegin", `</p>Score ${wonGame} : ${lostGame} - Match nul</p>`);
            hideButtons();
        }
    }
}
let wonGame = 0;
let lostGame = 0;
let ties = 0;
function game(){
    let computerSelection = computerPlay();
    let round = (playRound(playerSelection, computerSelection));
    if (round === "User wins!"){
        wonGame++;
    } else if(round === "Computer wins!") {
        lostGame++;
    } else {
        ties++;
    }
    countRound(countRoundFive);
    consoleMatch(playerSelection, computerSelection);
    countToFive();
}