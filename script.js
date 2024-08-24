// Spiel Stein Schere Papier gegen Computer. 
// Computer returnd zufällig Stein, Schere oder Paper. mathRandom wird hier wichtig.
// Function getComputerChoice


// function start
// create math random. 0-2.
// if statemant wenn 0 dann Stein, wenn 1 dann Schere, 2 Papier
// ergebnis in variable abspeichern
// ergebnis returnen
// function mit console.log abspeichern

function getComputerChoice(){ 
    function getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
      }
    let random = getRandomIntInclusive(0,2);
    if (random === 0) {
        let pcStein = "Computer: Stein";
        console.log(pcStein);
    } else if (random === 1){
        let pcSchere="Compputer: Schere";
        console.log(pcSchere);
    } else if (random === 2){
        let pcPapier="Computer: Papier";
        console.log(pcPapier);
    };
};
getComputerChoice();



// Quick and dirty
// let randomly = 0;
//     do{randomly = getRandomIntInclusive(0,15);
//         console.log(randomly);
//     }
//     while(randomly>2);