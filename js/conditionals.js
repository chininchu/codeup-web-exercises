"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(colorName){
    if(colorName === "blue"){
        return("The sky is always blue");
    }

    else if(colorName === "red"){
        return("Apples are red");
    }

    else{
        return("I am not aware of this color");
    }

}
console.log(analyzeColor("pink"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
let colorName = prompt("What is your favorite color?");
switch (colorName){
    case "red":
        console.log("Apples are red");
        break;
    case "orange":
        console.log("Orange is my favorite color");
        break;
    default:
        console.log(colorName + " isn't my favorite color, but lets agree to disagree" );
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */
let UserColor = prompt("Insert your favorite color?");

alert(analyzeColor(UserColor));



/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNum,amount){

    if(luckyNum === 0){
        return("No Discount");
    }

    else if(luckyNum === 1){
        return(amount - (0.10 * amount)).toFixed(2);
    }

    else if(luckyNum === 2){
        return(amount - (0.25 * amount)).toFixed(2);
    }

    else if(luckyNum === 3){
        return(amount - (0.35 * amount)).toFixed(2);
    }

    else if(luckyNum === 4){
        return(amount - (0.50 * amount)).toFixed(2);
    }

    else{
        return("The Product is for free");

    }

}
console.log(calculateTotal(5,250));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
let luckyNumber = Math.floor(Math.random() * 6);

let TotalBill = Number(prompt("What is your total Bill?")).toFixed(2);

alert("Your Lucky Number is " + luckyNumber + ",  Price before discount" + " $" + TotalBill + ", Discounted Price " + calculateTotal(luckyNumber,TotalBill));
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number ive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

let isConfirm = confirm("Would you like to enter a random number?");
if(isConfirm){
    let UserInput = Number(prompt("Enter the number"));
    displayNum(UserInput);
}
function displayNum(UserInput){
    if(isNaN(UserInput)){
        alert("This is an incorrect input");
    }

    else if(UserInput % 2 === 0 && UserInput > 0){
        alert("This is an even and positive number" + ", The number plus a 100 would be " + (UserInput + 100));

    }

    else if(UserInput % 2 === 0 && UserInput < 0){
        alert("This is an even and negative number" + ", The number plus a 100 would be " + (UserInput + 100));

    }

    else if(UserInput % 2 !== 0 && UserInput > 0) {
        alert("This is an odd and a positive number" + ", The number plus a 100 would be " + (UserInput + 100));

    }

    else if(UserInput % 2 !== 0 && UserInput < 0) {
        alert("This is an odd and a negative  number" + ", The number plus a 100 would be " + (UserInput + 100));
    }


}









