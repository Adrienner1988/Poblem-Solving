// Write a function that takes an array and returns a new array with duplicates removed.


// // Test Cases
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected output: [1, 2, 3, 4, 5]
// console.log(removeDuplicates(["apple", "banana", "apple"])); // Expected output: ["apple", "banana"]
// console.log(removeDuplicates([])); // Expected output: []

// Input array
// loop through array
// check if dupe
// If dupe remove
// Output new array, dupes removed

const removeDuplicates = (array) => {
    return array.reduce((accumulator, currentValue) => {
        if (!accumulator.includes(currentValue)) {
            accumulator.push(currentValue)
        }
        return accumulator
    }, [])
    }

    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
      
    