/**         Game Stone - Scissor - Paper
 *  Played in the console.
 * In the fact of that I'm a german developer, some Variables and Strings are in german. 
 * The english translation are in the comments next to it.
 */
let humanChoice = "";                                                           // Variable for the Choice of the Player
let computerChoice = "";                                                        // Variable for the Choice of te Computer
function getComputerChoice(){                                                   // Start of the Function to get the ComputerChoice
    function getRandomIntInclusive(min, max) {                                  // Start of the Function to get a random number with an min and max argument
        const minCeiled = Math.ceil(min);                                       // Math.ceil to round up on a integer
        const maxFloored = Math.floor(max);                                     // Math.floor to round off on a integer
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);  //to stay in the middle of the given numbers
      }
    let random = getRandomIntInclusive(0,2);                                    // Variable to set the random numbers to 0, 1 or 2
    if (random === 0) {                                                         // start if, else if to assign 0, 1 and 2 to Stone, Scissor and Paper
        let pcStein = "stein";                                                  // Stein is german for Stone
        return computerChoice = pcStein;                                        // return the variable pcStein to the global variable computerChoise
    } else if (random === 1){
        let pcSchere="schere";                                                  // Schere is german for Scissor
        return computerChoice = pcSchere;                                       // return the variable pcSchere to the global variable computerChoise
    } else if (random === 2){
        let pcPapier="papier";                                                  // Papier is german for Paper
        return computerChoice = pcPapier;                                       // return the variable pcPapier to the global variable computerChoise
    };
};
function getHumanChoice(){                                                      // Start Function for humanChoice
    let getChoice = prompt("Wähle Stein, Schere oder Papier: ", "");            // generate a prompt to choose between stone, scissor or paper
    let promptCaseSensitive = getChoice.toLowerCase();                          // make the prompt case-sensitiv. so the user can write Stone, STONE oder StoNE and the game will run 
    if (promptCaseSensitive == "stein"){                                        // say if user choose stein (german for stone) return "stein" to the global variable humanChoice
        return humanChoice = promptCaseSensitive;
    } else if (promptCaseSensitive == "schere"){                                // say if user choose schere (german for scissor) return "schere" to the global variable humanChoice
        return humanChoice = promptCaseSensitive;
    } else if (promptCaseSensitive == "papier"){                                // say if user choose papier (german for paper) return "papier" to the global variable humanChoice
        return humanChoice = promptCaseSensitive;
    } else {                                                                    // else send an error-message that say that the user should choose from the three given options.
        console.log("Fehler: Bitte achten Sie auf die richtige Schreibweise und/oder wählen Sie nur aus den drei gegebenen Auswahlmöglichkeiten!")
    }
    
};
function playGame(){                                                            // start Function of playing games
    let humanScore = 0;                                                         // variable to set the Score of the Player
    let computerScore = 0;                                                      // variable to set the Score of the Computer
    function playRound(humanChoice, computerChoice,){                           // function for playing a round
        if(humanChoice==="stein" && computerChoice ==="schere"){                // if player choose Stein (german for stone) and the PC choose Schere (german for scissor), Player win.
            humanScore++;                                                       // increment the Player-score at 1 Point.
            console.log("Stein schlägt Schere! Spieler erhält einen Punkt!")    // console.log that say the player who is the winner of the round
        } else if (humanChoice==="schere" && computerChoice ==="papier"){       // if player choose Schere (german for scissor) and the PC choose Papier (german for paper), Player win.
            humanScore++;                                                       // increment the Player-score at 1 Point.
            console.log("Schere schlägt Papier! Spieler erhält einen Punkt!");  // console.log that say the player who is the winner of the round
        } else if (humanChoice==="papier" && computerChoice==="stein") {        // if player choose Papier (german for paper) and the PC choose Stone (german for stone), Player win.
            humanScore++;                                                       // increment the Player-score at 1 Point.
            console.log("Papier schlägt Stein! Spieler erhält einen Punkt!")    // console.log that say the player who is the winner of the round
        } else if (computerChoice==="stein" && humanChoice==="schere"){         // if player choose Schere (german for scissor) and the PC choose Stein (german for stone), Computer win.
            computerScore++;                                                    // increment the Player-score at 1 Point.
            console.log("Stein schlägt Schere! Computer erhält einen Punkt!")   // console.log that say the player who is the winner of the round
        } else if (computerChoice==="schere" && humanChoice==="papier"){        // if player choose Papier(german for paper) and the PC choose Schere (german for scissor),  Computer win.
            computerScore++;                                                    // increment the Player-score at 1 Point.
            console.log("Schere schlägt Papier! Computer erhält einen Punkt!")  // console.log that say the player who is the winner of the round
        } else if (computerChoice==="papier" && humanChoice==="stein"){         // if player choose Stein (german for stone) and the PC choose Papier (german for paper), Computer win.
            computerScore++;                                                    // increment the Player-score at 1 Point.
            console.log("Papier schlägt Stein! Computer erhält einen Punkt!")   // console.log that say the player who is the winner of the round
        }   else {                                                              // else there is a tie
            console.log("Unentschieden! Kein Punkt!");                          // console.log that say there was a tie
        }
    };
    playRound(getHumanChoice(), getComputerChoice());                           // take the Function playRound  with the functions getHumanChoice and getComputerChoice as the arguemnts five time, to play five rounds.
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    if (humanScore > computerScore){                                            // after five rounds if the humonScore is higher than the computerScore -> Player win
        console.log("Der Spieler erreicht " + humanScore +" Punkte" + "." + "Der Computer erreicht "+ computerScore+ " Punkte." + " Der Spieler gewinnt!" )
    } else if (humanScore < computerScore){                                     // if the computerScore is higher than the humanScore -> Computer win
        console.log("Der Computer erreicht " + computerScore + " Punkte" + "." + "Der Spieler erreicht "+ humanScore+ " Punkte." + " Der Computer gewinnt!" )
    } else {                                                                    // else humanScore and computerScore is equal -> there is a tie!
        console.log("Der Spieler erreicht " + humanScore +" Punkte" + "." + " Der Computer erreicht "+ computerScore+ " Punkte." + " Unentschieden!" )
    }
}
playGame();                                                                     // execute the Game!

