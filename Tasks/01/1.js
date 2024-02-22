/*
1. Even Position Element
Write a function that finds the elements at even positions in an array.
The input comes as an array of string elements.
The output is printed on the console. Collect all elements in a string, separated by space.

EXAMPLE
Param 1: ['20', '30', '40', '50', '60']
Result: [20, 40, 60]
*/

function solve(input) {
	let outputArr = [];

	input.forEach((el) => {
		let elAsNumber = Number(el);

		if (elAsNumber % 2 == 0) {
			outputArr.push(el);
		}
	});

	console.log(outputArr);
}
solve(["20", "30", "40", "50", "60"]);
