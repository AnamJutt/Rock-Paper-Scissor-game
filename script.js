let userScore=0;
let compScore= 0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const genCompChoice= () => {
    const options= ["rock", "paper", "scissors"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];
    
};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText= "Game was draw! Play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner= (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText= userChoice;
        console.log("You win!");
        msg.innerText= `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText= compChoice;
        console.log("You lose");
        msg.innerText= `You lose!  ${compChoice} beats your ${userChoice}`;;
        msg.style.backgroundColor = "red";

    }
};

const playGame= (userChoice) => {

    //generate computer choice
    const compChoice= genCompChoice();

    if(userChoice === compChoice) {
        drawGame();
    }
    else{
        let userWin = true;

        if(userChoice === "rock"){
            //paper or scissors 
            userWin= compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
        // rock or scissors
            userWin= compChoice === "scissors" ? false : true;
        }
        else{
            userWin= compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);

    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
       const userChoice= choice.getAttribute("id")
        playGame(userChoice);

    }); 
});