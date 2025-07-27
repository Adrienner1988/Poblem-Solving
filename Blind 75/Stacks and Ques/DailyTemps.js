// https://leetcode.com/problems/daily-temperatures/description/
// https://neetcode.io/problems/daily-temperatures

// Daily Temps
// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

// Example 1:
// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

// Example 2:
// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]

// Example 3:
// Input: temperatures = [30,60,90]
// Output: [1,1,0]
 

// Constraints:
// 1 <= temperatures.length <= 10^5
// 30 <= temperatures[i] <= 100

// Example 4:
// Input: temp = [90,88,77,65,50]
// Output: [0,0,0,0,0]

// Example 5:
// Input: temp = [90,90,90,90,90]
// Output: [0,0,0,0,0]


// Example 1:
// Input: temperatures = [73,74,75,71,69,72,76,73]
// 	 			          0  1  2  3  4  5  6  7

// Output: [1,1,4,2,1,1,0,0]
// Res = [1,1,4,2,1,1,0,0]
// Stack = [[76,6], [73,7]]


// Approach:
// Create a result array for the output and fill it with zeros
// Initialize a stack
// Iterate over temps
// On each iteration
// While the current temp is > prev temp on top of stack
// pop the stack and update the result by taking the current index & subtracting the prev temps index
// Push on the current temp & its index to the stack as a pair
// Return the result array at the end

// Input: temperatures = [73,73,73,73,73,73,73,75]

// Time: n+n+n => 3n => O(n)
// Space: n+n => 2n => O(n)

// const dailyTemps = temps => {
// 	const result = new Array(temps.length).fill(0); 
// 	const stack = [];

// 	for (let i = 0; i < temps.length; i++) { 
// 	const currTemp = temps[i];
// 	while (stack.length > 0 && 
// currTemp > stack[stack.length-1][0]) {

// 	const [prevTemp, prevTempIndex] = stack.pop()
// 	res[prevTempIndex] = i - prevTempIndex;
// }
// stack.push([currTemp, i]);
// }
// return result;
// }

// console.log(dailyTemps([90, 88, 77, 65, 50]));
// console.log(dailyTemps([90, 90, 90, 90, 90]));
// console.log(dailyTemps([30, 40, 50, 60]));