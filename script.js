// DECISION MAKING EXERCISE
// 1a
/*
let randomNum = Math.floor(Math.random()*5)); 
randomNum++;
console.log(randomNum);
*/ 
// OR

// 1b
if (randomNum >= 4) {
    console.log("Greater than or equal to 4");
} else if (randomNum == 3 || randomNum === 2 ) {
    console.log("Equal to 2 or 3");
} else {
    console.log("Equal to 1");
}
// 1c
(randomNum !== 3) {
    console.log("Not equal to 3")
}


// 1e 
if (randNum == 2 || randNum === 4) {
    console.log("Equal to 2 or equal to 4");
}

// BONUS

// 2b
console.log(randomNum);

if (randomNum >= 4) {
    console.log("Greater than or equal to 4");
} else {
    console.log("Less than 4");
}

// 3 

switch (randNum) {
    case 1:
        console.log("One");
        //Break keywords are needed between each case so that the code for the case that follows does NOT also run
    break;
    case 2: console.log("Two");
    break;
    case 2: console.log("Three");
    break;
    case 3: console.log("Four");
    break;
    case 5;
    console.log("Five");
    //There is no need for a BREAK at the end of a switch statement since there are no other cases.
}

