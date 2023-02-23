// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
function showMultiplicationTable(Numb){
    for(let i = 1; i <= 10; i++){
        console.log(Numb * i);
    }

}
showMultiplicationTable(7);


// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:

for (let i = 0; i <= 10; i++ ){
    let RanNum = Math.floor((Math.random() * 180) + 20);

    if(RanNum % 2 === 0){
        console.log(RanNum + "is even");
     }
    else if(RanNum % 2 !== 0){
        console.log(RanNum + "is odd");

    }
}

