// Find the smallest difference between any two numbers in an array

function smallestDiff(arr) {
    let diff = difference(arr[0], arr[1]);
    let indx = 1
    for (let i = 0; i < arr.length; i++) {
        for (let j = indx; j < arr.length; j++) {
            if ((difference(arr[i], arr[j])) < diff) {     // i = 0 = 4; j=1=1; diff = 3
                console.log(`arr[i] = ${arr[i]} and arr[j] = ${arr[j]}`)
                diff = difference(arr[i], arr[j]);
            }
        }
        indx++;
    }
    return diff;
}

function difference(a, b) {
    return Math.abs(a - b);
}


// To check if you've completed the challenge, uncomment these console.logs!
console.log(smallestDiff([4, 1, 3])); // -> 1
console.log(smallestDiff([10, 20, 30, 40, 50, 60])); // -> 10
console.log(smallestDiff([1, 2, 3, 4, 5, 6, 7])); // -> 1






  

// let diff = 100; //difference(arr[0], arr[1]);
//     for (let i = 0; i < arr.length; i++) { 
//         console.log(i);
//         for (let j = 1; j < arr.length -1; j++) { 
//             console.log(i)
//             if ((difference(arr[i], arr[j])) < diff) {     // i = 0 = 4; j=1=1; diff = 3
//                 console.log(`arr[i] = ${arr[i]} and arr[j] = ${arr[j]}`)
//                 diff = difference(arr[i], arr[j]);
//                 console.log(diff);
//             }
//         }
//     }
//     return diff;