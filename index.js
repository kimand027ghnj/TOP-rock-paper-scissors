/* console.log("Welcome to Kim's Rock, Paper, Scissors Game!");

function getComputerChoice() {
    const myChoice = Math.floor(Math.random() * 3) + 1;
    const sum1 = myChoice;
    let gnOne = document.getElementById("gn1");
    let gnZero = document.getElementById("gn0");
    gnZero.innerText = sum1;
    gnOne.innerText = "You have generated " + sum1;

    function choicesHere() {
        if (myChoice === 1) {
            gnOne.innerText = "You have generated " + "rock" + "!";
        } else if (myChoice === 2) {
            gnOne.innerText = "You have generated " + "paper" + "!";
        } else if (myChoice === 3) {
            gnOne.innerText = "You have generated " + "scissors" + "!";
        }
    }
    choicesHere();
}

function getHumanChoice() {
    prompt("Please choose");
}

getHumanChoice();
; */

// xx how to get the computer to make a random choice between rock paper scissors?
// xx create a function that assigns 1 = rock 2 = paper 3 = scissors
// create another function randomNumber() that generates a random number between 1 and 3
// link randomNumber() to the first function so that when invoked, it will generate RPS choice;

// xx  generate random choice
// when clicking the button, it should generate the random choice + the string

/* let computer = function () {
    let x = Math.floor(Math.random() * 3) + 1;
    console.log(x)
}

let human = function () {
    let x = prompt("Enter your choice")
    console.log(x)
}

function playRound(human, computer) {
    if (computer === human) {
        alert("draw")
    } else if (human === "rock" && computer === 3 || human === "scissors" && computer === 2 || human === "paper" && computer === 1) {
        alert("HUMAN wins")
    } else {
        alert("computer WINS")
    }
}
let humanSelect = human();
let compSelect = computer();

/* playRound() */

/* function playRepeat() {
    playRound();
    playRound();
}

playRepeat()  */
let humanScore = 0
let computerScore = 0
let humanEl = document.getElementById('human-score')
let compEl = document.getElementById('computer-score')
let buttonEl = document.getElementById('play-again')
let tryEl = document.querySelector(".try-again")

buttonEl.addEventListener('click', function () {     //start the game again
    tryEl.textContent = "Play the game again";
    startGame()
})

function getComputerChoice2() {
    /* const x = Math.floor(Math.random() * 3) + 1;
    return x */
    let x = Math.floor(Math.random() * 3) + 1;
    console.log(x);
    if (x === 1) {
        return "rock"
    } else if (x === 2) {
        return "paper"
    } else if (x === 3) {
        return "scissors"
    }

}

function getHumanChoice2() {
    let x = prompt("Please type here").toLowerCase();
    console.log(x)
    return x;
}
//paper beats rock
//scissors beats paper
// rock beats scissors
let finalScore = 0;
let finalEl = document.querySelector('.final-score')

function startGame() {
    console.log("starting another round...")
    let x1 = getHumanChoice2();
    let x2 = getComputerChoice2();
    playRound2(x1, x2)

      if (humanScore === 3) {
          alert("The HUMAN wins after 3 rounds!")
          finalEl.textContent = "We have a WINNER" + computerScore + humanScore 
      }  else if (computerScore === 3) {
          alert("The COMPUTER wins 3 rounds!")
          finalEl.textContent = "We have a WINNER!" + " " + computerScore + " " + humanScore 
      }
    /* LOG FINAL SCORE */ /* finalEl.textContent += finalScore; */
/* resetGame() */

}

function resetGame() { // WHAT IS THIS????
    compEl.innerText = 0;
    humanEl.innerText = 0;
    console.log("resetting the game...")
    let x1 = getHumanChoice2();
    let x2 = getComputerChoice2();
    playRound2(x1, x2)
}

function playRound2(h1, c1) {

    if (h1 === "paper" && c1 === "rock" || h1 === "scissors" && c1 === "paper" || h1 === "rock" && c1 === "scissors") {
        alert("Human wins"); //HUMAN WINS!!!
        humanScore += 1;
        let x = humanScore;
        humanEl.innerText = "The human score is: " + x;
    } else if (h1 === "rock" && c1 === "rock" || h1 === "paper" && c1 === "paper" || h1 === "scissors" && c1 === "scissors") {
        alert("Draw");
        tryEl.textContent = "It's a DRAW"// DRAWWW
    } else if (c1 === "paper" && h1 === "rock" || c1 === "scissors" && h1 === "paper" || c1 === "rock" && h1 === "scissors") {
        alert("Computer wins"); //COMPUTER WINS!!!
        computerScore += 1;
        let x = computerScore;
        compEl.innerText = "The computer score is: " + x;
    }
    else {
        alert("Please type a valid choice")
        console.log("Invalid Human Choice")
    }
}
let humanSelect = getHumanChoice2()
let compSelect = getComputerChoice2()

playRound2(humanSelect, compSelect)

/* how to make the BUTTON retry the game 5 times
XXX how to case-insensitive the results from human player
xxx how to increment  the scores*/
