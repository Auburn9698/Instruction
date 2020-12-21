// @TODO: Complete the following sections to create a lottery number generator.


// Create an empty array to add the numbers.
var lotteryNumbers = [];

// Create a for loop to generate 5 random numbers between 1 and 59.
for (var i = 0; i < 5; i++) {
    lotteryNumbers.push(Math.floor(((Math.random() * 59) + 1)));
};

//  Check your numbers.
console.log(lotteryNumbers);

//Bonus: Add a 6th number to the array between 1 and 35.
lotteryNumbers.push(Math.floor(((Math.random() * 35) + 1)));

//  Check your numbers.
console.log(lotteryNumbers);


//  Additional bonus.
// How would you generate the random numbers using python?
