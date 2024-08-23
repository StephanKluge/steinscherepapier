// Spiel Stein Schere Papier gegen Computer. 
// Computer returnd zufällig Stein, Schere oder Paper. mathRandom wird hier wichtig.
// Function getComputerChoice


// function start
// create math random. 0-2.
// if statemant wenn 0 dann Stein, wenn 1 dann Schere, 2 Papier
// ergebnis in variable abspeichern
// ergebnis returnen
// function mit console.log abspeichern

// function getComputerChoice(){

// };


function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }
console.log(getRandomIntInclusive(0, 2));