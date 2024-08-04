let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const showUserScore = document.querySelector(" #user-score");
const showCompScore = document.querySelector(" #comp-score");
const msgContainer = document.querySelector("#msg");
console.log(choices);

const genRandomChoice = ()=>{
    let options = ["rock" , "paper" , "scissors"];
    let indx = Math.floor(Math.random() * 3);
    return options[indx];
}
const drawGame = (userChoice , compChoice)=>{
    msgContainer.innerText = `You and comp both select ${userChoice} so it is draw.`;
    msgContainer.style.backgroundColor = "#081b31";
}
const showWinner = (userWin , userChoice , compChoice)=>{
    if(userWin){
        userScore++;
        showUserScore.innerText = userScore;
        msgContainer.innerText = `Your ${userChoice} beats the comp's choice that is ${compChoice}.`
        msgContainer.style.backgroundColor = "green";

    }
    else{
        compScore++;
        showCompScore.innerText = compScore;
        msgContainer.innerText = `Your ${userChoice} is beaten by comp's choice that is ${compChoice}. Try Again`
        msgContainer.style.backgroundColor = "red";

    }
}

const playGame = (userChoice)=>{
    const compChoice = genRandomChoice();
    if(userChoice == compChoice){
        drawGame(userChoice , compChoice);
    }
    else{
        let userWin = true;
        if(compChoice == "rock"){
            if(userChoice == "scissors"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        else if(compChoice == "paper"){
            if(userChoice == "rock"){
                userWin = false;

            }
            else{
                userWin = true;
            }
        }
        else{
            if(userChoice == "paper"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        showWinner(userWin , userChoice , compChoice );
    }


}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
 });

