////////////////////////////
//     Challenge 1
////////////////////////////

// http://csbin.io/cs-prep-recursion/Sandra

function repeater(char, n = 5) {

}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(repeater('g')); // -> 'ggggg'
// console.log(repeater('j'));// -> 'jjjjj'


////////////////////////////
//     Challenge 2
////////////////////////////


function isEven(n) {

}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(isEven(0)); // -> true
// console.log(isEven(5)); // -> false
// console.log(isEven(10)); // -> true



////////////////////////////
//     Challenge 3
////////////////////////////


function factorial(num) {

}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(factorial(4)); // -> 24
// console.log(factorial(6)); // -> 720
// console.log(factorial(0)); // -> 1




////////////////////////////
//     Challenge 4
////////////////////////////


function getLength(array, i = 0) {
    if(array[0] === undefined) return i;
    i++;
    return getLength(array.slice(1), i);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5


////////////////////////////
//     Challenge 5
////////////////////////////


function pow(base, exponent) {

}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(pow(2, 4)); // -> 16
// console.log(pow(3, 5)); // -> 243

////////////////////////////
//     Challenge 6
////////////////////////////


function flow(input, funcArray, i = 0) {

}

// To check if you've completed the challenge, uncomment this code!
// function multiplyBy2(num) { return num * 2; }
// function add7(num) { return num + 7; }
// function modulo4(num) { return num % 4; }
// function subtract10(num) { return num - 10; }
// const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
// console.log(flow(2, arrayOfFunctions)); // -> -7



////////////////////////////
//     Challenge 7
////////////////////////////


function fib(n) {

}

// To check if you've completed the challenge, uncomment this code!
// console.log(fib(1)); // -> 1
// console.log(fib(2)); // -> 1
// console.log(fib(7)); // -> 13

////////////////////////////
//     Challenge 8
////////////////////////////
////////////////////////////
//     Challenge 8
////////////////////////////

function headsOrTails(n) {		// returns all outcomes as an array of arrays
    //base case, math to calc number of outcomes 2^n
    const cache = [];
    //if(cache.length = 2**n) return cache;
    
    function flip(){	
      // returns one outcome array and pushes to cache
      let output=[];
      for(let i=0; i<n; i++){
        output.push("head");      
      }
     cache.push(output)
      
    }
   return cache;
  }
  
  // To check if you've completed the challenge, uncomment this code!
  //console.log(headsOrTails(2)); // -> [
  //	 ['heads', 'heads'], 
  //	 ['heads', 'tails'], [1]
  //	 ['tails', 'heads'], [0] [1]
  //	 ['tails', 'tails']] [1]
  // console.log(headsOrTails(3));
  // -> [
  //   ['heads', 'heads', 'heads'],  
  //   ['heads', 'heads', 'tails'],   [2]
  //   ['heads', 'tails', 'heads'],		[1] [2]
  //   ['heads', 'tails', 'tails'],		[2]	
  //   ['tails', 'heads', 'heads'],		[0] [1] [2]
  //   ['tails', 'heads', 'tails'],   [2] 
  //   ['tails', 'tails', 'heads'],   [1] [2]
  //   ['tails', 'tails', 'tails'],   [2]
  // ] 
  
  
  const getFlips2 = (n) => {
    if (n <= 0) {
      return ['']
    } else {
      const prev = getFlips2 (n - 1)
      console.log('prev: ', prev)
      return [...prev .map (r => 'Head ' + r), ...prev .map (r => 'Tail ' + r)]
    }
  }
  getFlips2(4)
  // console.log(getFlips2(3))

  
function headsOrTails(n) {

}

// To check if you've completed the challenge, uncomment this code!
// console.log(headsOrTails(2)); // -> [['heads', 'heads'], ['heads', 'tails'], ['tails', 'heads'], ['tails', 'tails']]
// console.log(headsOrTails(3));
// -> [
//   ['heads', 'heads', 'heads'],
//   ['heads', 'heads', 'tails'],
//   ['heads', 'tails', 'heads'],
//   ['heads', 'tails', 'tails'],
//   ['tails', 'heads', 'heads'],
//   ['tails', 'heads', 'tails'],
//   ['tails', 'tails', 'heads'],
//   ['tails', 'tails', 'tails'],
// ]

////////////////////////////
//     Challenge 9
////////////////////////////

function getAllCombos(arr) {

}

// To check if you've completed the challenge, uncomment this code!
// console.log(getAllCombos(['a', 'b'])); // -> [['a','b'], ['a'], ['b'], []]
// console.log(getAllCombos(['a', 'b', 'c']));
// -> [
//   ['a', 'b', 'c'],
//   ['a', 'b'],
//   ['a', 'c'],
//   ['a'],
//   ['b', 'c'],
//   ['b'],
//   ['c'],
//   [],
// ]
