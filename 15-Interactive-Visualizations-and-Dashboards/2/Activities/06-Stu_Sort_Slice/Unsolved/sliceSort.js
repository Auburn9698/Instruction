// An unsorted array
numArray = [9.9, 6.1, 17.1, 22.7, 4.6, 8.7, 7.2];

// Sort the array in descending order and assign the results to a variable
var sortedArray = numArray.sort(function compareFunction(a, b) {
    // resulting order is (1, 2, 3)
    return b - a;
  });

// Print the results to the console
console.log(sortedArray)
// Sort the sarray in descending order using an arrow function
// and assign the results to a variable and print to the console

var sortArrow = numArray.sort((a, b) => b -a);
console.log(sortArrow);


// Reverse the array order
var reverseArray = sortArrow.reverse()
console.log(reverseArray);


// Sort the array in ascending order using an arrow function
var sortAscending = numArray.sort((a, b) => a - b);
console.log(sortAscending);

// Slice the first five elements of the sortedAscending array, assign to a variable
var slice = sortAscending.slice(0, 5);
console.log(slice)

