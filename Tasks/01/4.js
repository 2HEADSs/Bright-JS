/*
4. Even number with limit
Write a function that will print to the console only even numbers until a specific number
Param 1: Array of only numbers
Param 2: Limit number (the fn should only print even number below that one)

Example
Param 1: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
Param 2: 11
Result : 2,4,6,8,10
*/

function solve(input) {
	let specialNum = 11;
	let output = [];
	for (let i = 0; i < input.length; i++) {
		const el = input[i];
		if (el == specialNum) {
			break;
		}
		if (el % 2 == 0) {
			output.push(el);
		}
	}

	console.log(output.join(","));
}
solve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
