// ADD CODE HERE
function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  }
  
  function subtractTwo(num) {
    return num - 2;
  }
  
  function map(array, callback) {
    const newArray = [];
    newArray.push(forEach(array, callback));
    return newArray;
  }
  // Uncomment these to check your work!
  console.log(typeof forEach); // should log: 'function'
  forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
  console.log(typeof map); // should log: 'function'
  console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]