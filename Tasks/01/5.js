/*
5. Update User Profiles
Create a function to update user profiles stored in an array of objects.
Each user profile will include the user's name, age, and a list of hobbies. You will implement a function to add a new hobby to a user's profile
and another function to update the user's age.
These updates should be based on the user's name.
You must expose only one function for updating both age and hobby

CURRENT STATE: 
[
  { name: "Ivan", age: 25, hobbies: ["reading", "hiking"] },
  { name: "Petar", age: 30, hobbies: ["cycling", "gaming"] },
  { name: "Maria", age: 35, hobbies: ["swimming", "coding"] }
];

INPUT DETAILS: 
Param 1: Alice
Param 2: 26
Param 3: painting

EXPECTED RESULT: 
[
  { name: "Ivan", age: 26, hobbies: ["painting", "reading", "hiking"] },
  { name: "Petar", age: 30, hobbies: ["cycling", "gaming"] },
  { name: "Maria", age: 35, hobbies: ["swimming", "coding"] }
];
*/
(function () {
	let startState = [
		{ orderId: 1, customerName: "Ivan", status: "shipped" },
		{ orderId: 2, customerName: "Petar", status: "processing" },
		{ orderId: 3, customerName: "Maria", status: "delivered" },
	];

	function addOrder(name, status) {
		startState.push({
			orderId: startState.length + 1,
			customerName: name,
			status: status,
		});
		// console.log(startState);
	}

	function getOrdersByCustomer(name) {
		startState.forEach((order) => {
			if (order.customerName == name) {
				console.log("getOrdersByCustomer: ");
				console.log(order);
				console.log("---------------");
				return order;
			}
		});
	}

	function updateOrderStatus(orderId, newStatus) {
		startState.forEach((order) => {
			if (order.orderId == orderId) {
				order.status = newStatus;
				return;
			}
		});
	}
	addOrder("Ana", "received");
	getOrdersByCustomer("Ana");
	updateOrderStatus(4, "processing");
	getOrdersByCustomer("Ana");
})();
