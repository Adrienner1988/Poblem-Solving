// https://neetcode.io/problems/validate-parentheses?list=blind75
// You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

// The input string s is valid if and only if:
// Every open bracket is closed by the same type of close bracket.
// Open brackets are closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Return true if s is a valid string, and false otherwise.

// Example 1:
// Input: s = "[]"
// Output: true

// Example 2:
// Input: s = "([{}])"

// Output: true
// Example 3:

// Input: s = "[(])"
// Output: false
// Explanation: The brackets are not closed in the correct order.

// Constraints:
// 1 <= s.length <= 1000


// Edge Cases:
// Input: "" 
// Output: true

// Input: "(", ")", "{", "}", "[", "]"
// Output: false

// Input: "(])" 
// Output: false

// Approach:
// Use a stack to keep track of the opening brackets. const = stack = [];
// For each character in the string:
    // If it's an opening bracket
        // push it onto the stack.
    // If it's a closing bracket check if the stack is empty, if the top of the stack matches the corresponding opening bracket
        // pop the stack; 
    // Else, return false.
//If the stack is empty, return true; otherwise, return false. 


// Time O(n)
// Space O(n)

const isValid = (s) => {
    const stack = [];
    
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0) {
                return false;
            }
            const stackTop = stack.pop();
            if (
              (char === ")" && stackTop !== "(") ||
              (char === "}" && stackTop !== "{") ||
              (char === "]" && stackTop !== "[")
            ) {
              return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isValid("[]"));
console.log(isValid("(", ")", "{", "}", "[", "]"));
console.log(isValid("[(])"));
console.log(isValid(""));