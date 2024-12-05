// Write a function that takes an array of numbers and returns the largest number in the array.

// Test Cases
// console.log(findLargest([3, 5, 7, 2, 8])); // Expected output: 8
// console.log(findLargest([-1, -4, -3, -10])); // Expected output: -1
// console.log(findLargest([100, 200, 50, 300])); // Expected output: 300

// Input an array
// Output largest int in the array

// Spread
const findLargest = (array) => {
    return Math.max(...array)
}

// Reduce Method
const findLargest2 = (array) => {
    return array.reduce((largestNum, currentNum) => (currentNum > largestNum ? currentNum : largestNum), array[0])
}

console.log(findLargest([3, 5, 7, 2, 8]));
console.log(findLargest([-1, -4, -3, -10]));

console.log(findLargest2([3, 5, 7, 2, 8]));
console.log(findLargest2([-1, -4, -3, -10]));