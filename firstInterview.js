/* 
Declare a variable 'words' and set it to an array containing the words 'apple', 'almond', 'artichoke', and 'avocado'.
*/
const words = ['apple', 'almond', 'artichoke', 'avocado'];
// console.log(words);



/* 
Declare a function 'startsWithA' that takes in a string as an argument. It should return true if the provided string starts with the letter A, and false otherwise.
The function should be case-insensitive.
*/

// Declare a function takes a string as an argument
// return boolean 

// case insensitive

function startsWithA(string) {
  // evaluate the string - if first letter is A, return true, else false
  let firstLetter = string[0].toLowerCase();
  if (firstLetter === 'a') {
    return true;
  } else return false;
  
}

// console.log(startsWithA('Hello'));
// console.log(startsWithA('Apple'));

/* 
Declare another function 'allElementsPass', which takes an array and a callback as arguments.
The callback function will be expected to return a boolean. When 'allElementsPass' is called, it will run the callback function on each item in the array, and return a boolean depending on whether the callback returns true for all items.
In other words, if the callback returns true when called on ALL array items, 'allElementsPass' should also return true. However, if the callback returns false for ANY items, 'allElementsPass' should return false.
'*/


function allElementsPass(array, callback) {
  for (const num of array) {
    console.log(num);
    if (callback(num) === false) {
      return false;
    } 
  }
  return true;
}

// create a callback function that returns a boolean
function returnZero(num) {
  if (num === 0) {
    return true;
  } else return false;
}

const num1 = [1, 1, 1, 0, 1]; // => return false
const num2 = [0, 0, 0, 0]; // => true
const num3 = [0, 0, 0, 1, 1]; // => false

// console.log(allElementsPass(num1, returnZero));
// console.log(allElementsPass(num2, returnZero));
// console.log(allElementsPass(num3, returnZero));

// allElementsPass will run a callback on each item - need to iterate through array (loop)
// if callback function returns all true, allElementsPass returns true
// if any iteration returns false, allElementsPass returns false
// create test case



/* 
Declare a function 'record', which takes a callback function as an argument and returns another function.
The returned function takes in a number, and when invoked, will run the callback on this number. The function should keep a record of all previous results of running the callback (and if it is invoked more than once with the same argument, it should not run the callback again on that argument). 
On each invocation, it should return the *highest value so far* among all previous calls. Once complete, make sure to test your function.

Example:*/

function record(callback) {
  const storedValues = [];
  return function multiplyBy2(num) {
  	let result = callback(num);
    
	}	
}

// const multiplyBy2 = record((n) => n * 2);
// multiplyBy2(2) // --> 4;
// multiplyBy2(10) // --> 20;
// multiplyBy2(5) // --> 20;
// multiplyBy2(15) // --> 30; 
// multiplyBy2(2) // --> 30;


// multiplyBy2 take a number as input, when invoked runs the callback on this number 
// keep a record of returned values from running the callback (store in an array)
// if returned value is in the array, skip 
// return the highest value SO FAR in the array
// create object with 

