/*
3. Smallest Two Numbers

Write a function that prints the two smallest elements from an array of numbers.
The input comes as an array of number elements.
The output is printed on the console on a single line, separated by space.

EXAMPLES
Param 1: [30, 15, 50, 5]
Result: 5 15
*/

function solve(input) {
	let arr = input.sort((a, b) => a - b);
	console.log(`${arr[0]} ${arr[1]}`);
}
solve([30, 15, 50, 5]);
