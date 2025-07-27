// https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
// Reverse Polish Notation
// You are given an array of strings (tokens) that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:

// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.
 

// Example 1:

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// Example 2:

// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

// Example 3:

// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22
 

// Constraints:
// 1 <= tokens.length <= 10^4
// tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].


// Example 3:
// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// stack = [22]
// intermediate = 17,5 => 22


// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

// Approach
// Use a stack
// Iterate over input
// if its an operator
// pop last 2 vals from stack and perform operation
// push the completed operation back to the stack
// Otherwise its a number so push it onto the stack
// Return stack at the end


// Time O(n)
// Space O(n)

const evalRPN = tokens => {
	const stack = [];
	for (const c of tokens) {
	if (c === '+') {
	stack.push(stack.pop() + stack.pop())
} else if (c === '-') {
	const a = stack.pop();
	const b = stack.pop();
	stack.push(b - a);
} else if (c === '*') {
	stack.push(stack.pop() * stack.pop())
} else if (c === '/') {
	const a = stock.pop()
	const b = stack.pop()
	stack.push(Math.trunc(b/a))
} else {
	stack.push(parseInt(c))
}
}
return stack.pop();
}
