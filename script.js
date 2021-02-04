//https://www.youtube.com/watch?v=qWPtKtYEsN4 hjælp og inspiration til mathrandom herfra

window.addEventListener("load", start);

userSelection = "";
computerChoice = "";

function start() {
  console.log("start");
  getUserSelection();
}

function getUserSelection() {
  console.log("userselection");
  document.querySelector(".scissors").addEventListener("click", chooseScissor);
  document.querySelector(".rock").addEventListener("click", chooseRock);
  document.querySelector(".paper").addEventListener("click", choosePaper);
}

function chooseRock() {
  userSelection = "rock";
  makeRandomComputerChoice();
}

function choosePaper() {
  userSelection = "paper";
  makeRandomComputerChoice();
}

function chooseScissor() {
  userSelection = "scissors";
  makeRandomComputerChoice();
}

function makeRandomComputerChoice() {
  console.log("klik");

  const computerOptions = ["rock", "paper", "scissors"];

  myRandom = Math.floor(Math.random() * 3);
  computerChoice = computerOptions[myRandom];

  console.log(myRandom);

  showAnimations();
}

function showAnimations() {
  //eventlisteners click fjernet fra knapper
  document
    .querySelector(".scissors")
    .removeEventListener("click", showAnimations);
  document.querySelector(".rock").removeEventListener("click", showAnimations);
  document.querySelector(".paper").removeEventListener("click", showAnimations);

  //tilføjer shakeanimation på hånd
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");

  this.addEventListener("animationend", determineWinner);
}

function determineWinner() {
  //draw game
  if (userSelection === computerChoice) {
    showDraw();
  }
  //player wins by rock
  if (userSelection === "rock") {
    if (computerChoice === "scissors") {
      showWin();
    }
  }

  //player wins by paper
  if (userSelection === "paper") {
    if (computerChoice === "rock") {
      showWin();
    }
    document.querySelector("#player1").classList.add("playerpaper");
  }

  //player wins by scissors
  if (userSelection === "scissors") {
    if (computerChoice === "paper") {
      showWin();
    }
  }

  //computer wins by rock
  if (userSelection === "scissors") {
    if (computerChoice === "rock") {
      showLose();
    }
  }

  //computer wins by paper
  if (userSelection === "rock") {
    if (computerChoice === "paper") {
      showLose();
    }
  }

  //computer wins by scissors
  if (userSelection === "paper") {
    if (computerChoice === "scissors") {
      showLose();
    }
  }
}

function showWin() {
  console.log("Show win!");
  //show winner!
  document.querySelector("#win").classList.remove("hidden");
}

function showLose() {
  console.log("Show lose!");
  //show loser!
  document.querySelector("#lose").classList.remove("hidden");
}

function showDraw() {
  console.log("Show draw!");
  //show draw!
  document.querySelector("#draw").classList.remove("hidden");
}
