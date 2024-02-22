// function solve(input) {
// 	let sum = 0;

// 	for (let i = 0; i < input.length; i++) {
// 		const type = typeof input[i];
// 		if (type == "number") {
// 			sum += Number(input[i]);
// 			break;
// 		}
// 	}

// 	for (let i = input.length - 1; i >= 0; i--) {
// 		const type = typeof input[i];
// 		if (type == "number") {
// 			sum += Number(input[i]);
// 			break;
// 		}
// 	}

// 	return sum;
// }

// console.log(
// 	solve(["a", "b", {}, 1, undefined, null, "abc", [1, 2, 3], 2, "xyz"])
// );
function sumFirstLast(arr) {
    // Filter out non-numeric elements from the array
    const numbers = arr.filter(element => typeof element === 'number');

    // Check if the filtered array is not empty
    if (numbers.length > 0) {
        // Sum the first and last elements of the filtered array
        return numbers[0] + numbers[numbers.length - 1];
    } else {
        // Return 0 if no numbers are found
        return 0;
    }
}

// Example usage:
const inputArray = ['a', 'b', {}, 1, undefined, null, 'abc', [1,2,3], 2, 'xyz'];
const result = sumFirstLast(inputArray);
console.log("00000000000");
console.log(result); // Output: 60
