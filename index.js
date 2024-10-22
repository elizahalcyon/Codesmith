// ADD CODE HERE 
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product = product * arr[i];  
  }
  return product;
}
// Uncomment these to check your work!
console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
console.log(multiplyAll(5, 5, 5, 3)) // should log: 375
/*
p = 1 * 9
p = 9 * 4
*/

