// Write a function that takes an array and returns it reversed.

// // Test Cases
// console.log(reverseArray([1, 2, 3, 4, 5])); // Expected output: [5, 4, 3, 2, 1]
// console.log(reverseArray(["a", "b", "c"])); // Expected output: ["c", "b", "a"]
// console.log(reverseArray([])); // Expected output: []

// Input array
// Reverse method
// for loop starting at end to reverse
// Output array in reverse

// Reverse Method
const reverseArray = (array) => {
    return array.reverse()
}

// For loop
const reverseArray2 = (array) => {
    let newArray = [];

    for (let i = array.length -1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray([]));

console.log(reverseArray2([1, 2, 3, 4, 5]));
console.log(reverseArray2([]));