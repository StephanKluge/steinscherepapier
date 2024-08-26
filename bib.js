// Random ganze Zahl inklusive kleinste und größte

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  // Quick and dirty
// let randomly = 0;
//     do{randomly = getRandomIntInclusive(0,15);
//         console.log(randomly);
//     }
//     while(randomly>2);