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
	input.sort();
	console.log(`${input[0]} ${input[1]}`);
}
solve([30, 15, 50, 5]);
