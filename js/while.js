// Create a while loop that uses console.log() to create the output shown below.
let i = 1;
while(i < 65536){
    i*=2;
    console.log(i);
}

// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

// This is how you get a random number between 50 and 100

// This expression will generate a random number between 1 and 5

let allCones = Math.floor(Math.random() * 50) + 50;
let soldCones;
do{
    soldCones = Math.floor(Math.random() * 5) + 1;

    if(allCones < soldCones){
        console.log("Cannot sell you " + soldCones + " cones, I only have " + allCones);
        continue;
    }
    allCones -= soldCones;
    console.log(soldCones + " cones sold...");

}while(allCones > 0)
console.log("Yay! I sold them all!");


// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones











