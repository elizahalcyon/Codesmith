/* 
Declare a function 'NumberedList', which returns a new instance of a 'NumberedList' object when invoked with the `new` keyword.
NumberedList objects should function similarly to arrays - i.e. they store values at number indexes, starting at 0. Any arguments passed into the 'NumberedList' constructor should be sequentially added to the NumberedList when it is instantiated.
NumberedList objects should also contain a length property, which keeps track of the number of elements in the list.

Example:
Creating a NumberedList from 'dog' --> { 0: 'dog', length: 1 }
Creating a NumberedList from 'dog', 'bird', 'cat' --> { 0: 'dog', 1: 'bird', 2: 'cat', length: 3 }
*/

function NumberedList() {

}

/* 

Declare a function called 'auction', which will help me keep track of bids on items I am trying to sell.
When invoked, 'auction' should return another function that's specific to a single item's auction. 
The returned function should take one argument, representing a bid on that item, and should keep track 
of the highest bid thus far. The auction for each item will end once five bids have been made. On the 
fifth bid, return a message stating how much it sold for. For any subsequent bid attempts after the 
auction has ended, return a message stating that the item has already been sold.   

Example:
const lamp = auction();
lamp(12);
lamp(15);
lamp(8);
lamp(17);
lamp(6); // --> 'Sold for 17!'
lamp(20); // --> 'Already sold!'
*/

function auction() {

}


/* 
Declare a recursive function 'reverseString' that takes at least one string as an argument. 
'reverseString' will return the reversed version of the string argument.
Once complete, write some code to test your 'reverseString' function.
*/

function reverseString(string, i = string.length) {
    // base case
    let result = ""
    if (i < 0) return result; 

    for (let i = string.length - 1; i >= 0; i--) { 
        result += string[i];                    
    }
    return reverseString(result, i); 
}

console.log(reverseString('hello'));



// function word(string) {
//     const words = string.split(" ")
//     let result = ""
//     for (const word of words) {
//       result += word[0].toUpperCase() + word.slice(1) + " ";
//     }
//     return result.trim();
//   }
  
//   console.log(word("The quick brown fox"));





/*
const reverseString = string => {
  if (!string) return string;
  return reverseString(string.slice(1)) + string[0];
}



console.log(reverseString("dog"))
*/