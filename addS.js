// "Create a function addS that accepts a string and an array, and returns the third item of the array with the string added to the end."
function addS(string, array) {
    // find the third item of the array
    // add the string to the end
    return array[2]+= string;
}

console.log(addS('s', ['cat', 'dog', 'elephant', 'sloth'])); 