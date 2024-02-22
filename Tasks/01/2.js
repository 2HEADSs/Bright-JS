/*
2. Sum First Last
Write a function that sums the first and the last numbers of an mixed array.
The input comes as an array of string elements holding numbers.
The output is the return value of your function and should be a number.

EXAMPLE
Param 1: ['a', 'b', {}, 1, undefined, null, 'abc', [1,2,3],2,'xyz']
Result: 60
*/
function solve(input) {
	let sum = 0;

	for (let i = 0; i < input.length; i++) {
		const type = typeof input[i];
		if (type == "number") {
			sum += Number(input[i]);
			break;
		}
	}

	for (let i = input.length - 1; i >= 0; i--) {
		const type = typeof input[i];
		if (type == "number") {
			sum += Number(input[i]);
			break;
		}
	}

	return sum;
}

console.log(
	solve(["a", "b", {}, 1, undefined, null, "abc", [1, 2, 3], 2, "xyz"])
);
