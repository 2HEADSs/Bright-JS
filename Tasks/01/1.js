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
