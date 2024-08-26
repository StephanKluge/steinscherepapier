let humanChoice = "";
let computerChoice = "";
function getComputerChoice(){ 
    function getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
      }
    let random = getRandomIntInclusive(0,2);
    if (random === 0) {
        let pcStein = "Stein";
        return computerChoice = pcStein;
    } else if (random === 1){
        let pcSchere="Schere";
        return computerChoice = pcSchere;
    } else if (random === 2){
        let pcPapier="Papier";
        return computerChoice = pcPapier;
    };
};
function getHumanChoice(){
    let getChoice = prompt("Wähle Stein, Schere oder Papier: ", "");
    let theChoice = getChoice;
    if (theChoice === "Stein" || theChoice === "stein" || theChoice==="STEIN"){
        return humanChoice = theChoice;
    } else if (theChoice === "Schere" || theChoice === "schere" || theChoice==="SCHERE"){
        return humanChoice = theChoice;
    } else if (theChoice === "Papier" || theChoice === "papier" || theChoice === "PAPIER"){
        return humanChoice = theChoice;
    } else {
        console.log("Fehler: Bitte achten Sie auf die richtige Schreibweise und/oder wählen Sie nur aus den drei gegebenen Auswahlmöglichkeiten!")
    }
    
};
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice,){
        if(humanChoice==="Stein" && computerChoice ==="Schere"){
            humanScore++;
            console.log("Stein schlägt Schere! Spieler erhält einen Punkt!")
        } else if (humanChoice==="Schere" && computerChoice ==="Papier"){
            humanScore++;
            console.log("Schere schlägt Papier! Spieler erhält einen Punkt!");
        } else if (humanChoice==="Papier" && computerChoice==="Stein") {
            humanScore++;
            console.log("Papier schlägt Stein! Spieler erhält einen Punkt!")
        } else if (computerChoice==="Stein" && humanChoice==="Schere"){
            computerScore++;
            console.log("Stein schlägt Schere! Computer erhält einen Punkt!")
        } else if (computerChoice==="Schere" && humanChoice==="Papier"){
            computerScore++;
            console.log("Schere schlägt Papier! Computer erhält einen Punkt!")
        } else if (computerChoice==="Papier" && humanChoice==="Stein"){
            computerScore++;
            console.log("Papier schlägt Schere! Computer erhält einen Punkt!")
        }   else {
            console.log("Unentschieden! Kein Punkt!");
        }
    };
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    if (humanScore > computerScore){
        console.log("Der Spieler erreicht " + humanScore +" Punkte" + "." + "Der Computer erreicht "+ computerScore+ " Punkte." + " Der Spieler gewinnt!" )
    } else if (computerScore > humanScore){
        console.log("Der Computer erreicht " + computerScore + " Punkte" + "." + "Der Spieler erreicht "+ humanScore+ " Punkte." + " Der Computer gewinnt!" )
    } else {
        ("Der Spieler erreicht " + humanScore +" Punkte" + "." + "Der Computer erreicht "+ computerScore+ " Punkte." + " Unentschieden!" )
    }
}
playGame();