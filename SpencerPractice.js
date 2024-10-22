
/* 
Declare a function 'record', which takes a callback function as an argument and returns another function.
The returned function takes in a number, and when invoked, will run the callback on this number. The function should keep a record of all previous results of running the callback (and if it is invoked more than once with the same argument, it should not run the callback again on that argument). 
On each invocation, it should return the *highest value so far* among all previous calls. Once complete, make sure to test your function.

// Example:*/

// function record(cb) {
//   const cache = {};
//   let highest = -Infinity;
//   return function(num) {
//     if (cache[num]) {
//       console.log(highest);
//       return;
//     }
//     const result = cb(num);
//     cache[num] = result;
//     if (result > highest) highest = result;
//     console.log(highest);
//     return;
//   }
// }

// const multiplyBy2 = record((n) => n * 2);
// // multiplyBy2(2) // --> 4;
// multiplyBy2(10) // --> 20;
// multiplyBy2(5) // --> 20;
// multiplyBy2(15) // --> 30;
// multiplyBy2(2) // --> 30;



// Declare a function 'charFactory' that takes a string 'str' as its argument and returns a closure. The closure should accept a single positive integer 'K' as input. When invoked, it should return the next 'K' characters from the string 'str'. If there are not enough characters remaining, it should return the message 'Not enough characters left!'.

// function charFactory(str) {
//   // accepts a single positive integer 'K' as input
//   // return the next K characters from the string
//   // if there are not enough characters remaining, return 'Not enough characters left!'
//   return function(K) {
//     // return first K letters
//     // save the rest of the string
//     if (str.length < K) return 'Not enough characters left!';
//     const returnedStr = str.slice(0, K)
//     str = str.slice(K)
//     return returnedStr;
//   }
// }

// const nextChars = charFactory('abcdefghijklmnopqrstuvwxyz');
// console.log(nextChars(1));	// 'a'
// console.log(nextChars(4));	// 'bcde'
// console.log(nextChars(2));	// 'fg'
// console.log(nextChars(6));	// 'hijklm'
// console.log(nextChars(21));	// 'Not enough characters left!'
// console.log(nextChars(3));	// 'nop'



// Declare a recursive function ‘findIndex’, which takes in at least two arguments (an array and a value).
// ‘findIndex’ should search the array for the passed-in value. If found, it should return the first index number at which the value appears. If not, it should return -1.
// Example: findIndex([1, 2, 3, 4, 5, 3], 3) --> 2






// Challenge: cascade

// Write a function cascade that takes a positive integer and prints a cascade of this integer. Hint - this very challenging problem can be solved with and without string manipulation!


// function cascade(value) {
//   console.log(value);
//   if (value < 10) return;
//   cascade(Math.floor(value / 10));
//   console.log(value);
// }

// cascade(12345)




// function cascade(number, remainder = 0, dir = "desc", cache = []) {
//   if (number === undefined) return;
//   cache.push(number);
   
// 	// Your code here!
//   if (dir === "asc") {
//     if (cache[0] === cache[cache.length - 1]) return;
//     remainder = Math.floor(remainder / 10) 
//     number = (number * 10) + (remainder % 10) 
//     console.log(number)
//     return cascade(number, remainder, dir, cache);
//   }
  
//   if (dir === "desc") {
//     console.log(number)
//     remainder = (remainder * 10) + (number % 10);
//     number = Math.floor(number / 10)
//     if (number <= 0) {
//       dir = "asc";
//     	number = (number * 10) + (remainder % 10) 
//     }
//     return cascade(number, remainder, dir, cache)
//   }
// }



// Uncomment to test your work!
// cascade(4321)




// mean = average
// mode = highest frequency #, if there's a tie return the higher #

// Given an array of numbers, determine if the mode and mean of the array are equivalent
// Caveats:
//     Math.floor the mean
//     If there are multiple modes, use the max of the modes
// Return true or false.

function modemean(array) {
    let sum = 0;
    const cache = {};
    for (const el of array) {
      cache[el] ??= 0;
      sum += el;
      cache[el] += 1
    }
    const mean = Math.floor(sum / array.length);
    
    // calculating mode
    let highest = -Infinity
    let mode = -Infinity
    for (const key in cache) {
      if (cache[key] > highest) {
        highest = cache[key]
        mode = Number(key)
      }
      
      if (cache[key] === highest && Number(key) > mode) mode = Number(key);
    
          } else if (frequency[num] === maxFreq && num > mode) {
      if (value >= maxFreq && Number(key) > mode || value > maxFreq) {
  
            
    }
    console.log({mean}, {mode})
    return mode === mean ? true : false;
  }
  
  console.log(modemean([3, 3, 3, 3]));   // max mode: 3, testing max mode with > 1 mode
  
  console.log(modemean([2, 2, 3, 3]));   // max mode: 3, testing max mode with > 1 mode
  console.log(modemean([4, 4, 3, 3]));   // max mode: 4, testing order dependence with highest mode at lower index than a lower mode 
  console.log(modemean([2, 2, -3, -2, -3, -3, -2, -2]));   // max mode: -2, testing negative modes and order dependence of negatives
  