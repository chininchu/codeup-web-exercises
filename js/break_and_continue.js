
// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
let isNotValid;
let userInput;
do{
    userInput = Number(prompt("Enter and Odd Number between 1 and 50"));

    if(userInput > 50 || userInput < 1 || userInput % 2 === 0){
        isNotValid = true;
        console.log(isNotValid);
    }
    else{
        break;
    }
} while(isNotValid);
console.log(isNotValid);





// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

console.log(userInput);

for(let i = 1; i <= 50; i += 2){
    if(i === userInput){
        console.log(("Number to skip is: " + userInput));
        continue;
    }
    console.log("Here is an odd number: " + i);
}


