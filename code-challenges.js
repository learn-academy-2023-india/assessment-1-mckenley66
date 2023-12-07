// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"
 
// concat represents the operation of combining two arrays, and length represents the operation of finding the length of an array
The combineAndReturnLength function takes two arrays as Parameters, concat them into a new array, and then returns the length of the combined array
function combine_ arrays(array1, array20){
    const combined_array = array1. concat (array2) ;
    return combined_array. length;
}
// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:function `reverse_string`that takes an input string, splits it into an array of characters,reverses the array, and then joins it back into a string.The result is then printed using` console.log


//console.log(reverse_string("LEARN 2023"));
// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "LEARN 2023"
// Expected output: "3202 NRAEL"

// Pseudo code:
// function log_odd_numbers(array){
    for (let i = 0; i < arr.length; itt){
        if (array{i}) % 2 !== 0) {
            console.log(array{i};)
        }
    }
}
// -------------------3) Use a for loop to log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code:In this code the `%` operator is used tocheck if a number is odd or even.
   if `test` is `true`,it logs odd numbers; if `test` is false it logs even numbers
   The loop iterates through each element in  the stockExchange array, and the condition inside the loop checks whether the current
   satisfies the specified criteria