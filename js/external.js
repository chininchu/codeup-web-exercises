'use strict';
console.log("this is my external js file");

console.log("Hello from external Javascript");
alert("Welcome to my Website!");
let UserResponse = prompt("What is your favorite color");

alert("Great, " + UserResponse + " is my favorite color too!");

// Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.
//
//     You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
//     A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.


// Movies

let Mermaid = prompt("Number of Days");
let Bear = prompt("Number of Days");
let Hercules = prompt("Number of Days");

Mermaid = Number(Mermaid)
Bear = Number(Bear)
Hercules = Number(Hercules)

let TotalCost = "$" + 3 * (Mermaid + Bear + Hercules);

alert(TotalCost);

// Jobs

let Google = prompt("Google: " + "Number of hours");
let Facebook = prompt("Facebook: " + "Number of hours");
let Amazon = prompt("Amazon " + "Number of hours");

Google = Number(Google) * 400
Facebook = Number(Facebook) * 350
Amazon = Number(Amazon) * 380

let NetAmount = "$" + (Google + Facebook + Amazon);

alert(NetAmount);

// Student Schedule

let claSS = confirm("Select Ok if the class is not full and select cancel if the class is full");

let classSchedule = confirm(" Select Ok if the schedule does not conflict and Cancel if it does");

let studentEnroll = classSchedule && claSS;

alert("Student is enrolled");

// Product
let twoItems = confirm("Did you buy more than 2 items");

let expiration = confirm("Select Ok if the product is not expired");

let PremiumNumber = confirm("Select Ok if Premium Member");

alert(twoItems && expiration || PremiumNumber );