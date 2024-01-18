//prima prendiamo i contenitori che ci servono

//computer:
const computer = document.getElementById("computer");
//utente:
const player = document.getElementById("player");
//risultato:
const result = document.getElementById("result");
//prendiamo le immagini
const playerRock = document.getElementById("player_rock");
const playerPaper = document.getElementById("player_paper");
const playerScissors = document.getElementById("player_scissors");

const computerRock = document.getElementById("computer_rock");
const computerPaper = document.getElementById("computer_paper");
const computerScissors = document.getElementById("computer_scissors");

//prendiamo anche le immagini placeholder
const playerPlaceholder = document.getElementById("player_placeholder");
const computerPlaceholder = document.getElementById("computer_placeholder");

const playerWins = document.getElementById("player_wins");
const computerWins = document.getElementById("computer_wins");
const draws = document.getElementById("draws");

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

//funzione che ci permetta di generare un numero randomico tra 0 e 2
function randomNum() {
    return Math.floor(Math.random() * 3);
}

function resetGame() {
    playerRock.style.display = "none";
    playerPaper.style.display = "none";
    playerScissors.style.display = "none";
    playerPlaceholder.style.display = "block";

    computerRock.style.display = "none";
    computerPaper.style.display = "none";
    computerScissors.style.display = "none";
    computerPlaceholder.style.display = "block";
}

//funzione che ci permetta di tradurre il numero in una stringa
function numToString(num) {
    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function setImages(playerChoice, computerChoice) {
    if (playerChoice === "rock") {
        playerRock.style.display = "block";
        playerPlaceholder.style.display = "none";
    } else if (playerChoice === "paper") {
        playerPaper.style.display = "block";
        playerPlaceholder.style.display = "none";
    } else {
        playerScissors.style.display = "block";
        playerPlaceholder.style.display = "none";
    }

    if (computerChoice === "rock") {
        computerRock.style.display = "block";
        computerPlaceholder.style.display = "none";
    } else if (computerChoice === "paper") {
        computerPaper.style.display = "block";
        computerPlaceholder.style.display = "none";
    } else {
        computerScissors.style.display = "block";
        computerPlaceholder.style.display = "none";
    }
}

//funzione che ci permetta di confrontare i due valori e di stampare il risultato
function compare(player, computer) {
    if (player === computer) {
        result.innerHTML = "It's a draw!";
        drawScore++;
        draws.innerHTML = "Draw: " + drawScore;
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        result.innerHTML = "You win!";
        playerScore++;
        playerWins.innerHTML = "Player: " + playerScore;
    } else {
        result.innerHTML = "You lose!";
        computerScore++;
        computerWins.innerHTML = "Computer: " + computerScore;
    }
}


//prendiamo tutti i bottoni con classe playerbtn
const playerBtn = document.querySelectorAll(".playerbtn");
//per ogni bottone aggiungiamo un event listener
playerBtn.forEach((btn) => {
    //l'event listener reaggio al click, la funzione sottostante viene eseguita quando il bottone viene cliccato
    btn.addEventListener("click", () => {
        //resetta il gioco
        resetGame();
        //prendiamo il valore del bottone cliccato
        const playerChoice = btn.getAttribute("data-choice")
        //generiamo un numero randomico
        const computerChoice = randomNum();
        //traduciamo il numero in stringa
        const computerChoiceString = numToString(computerChoice);
        //stampiamo le immagini
        setImages(playerChoice, computerChoiceString);
        //stampiamo la scelta del computer
        compare(playerChoice, computerChoiceString);
    });
});
