/*
6. Order Processing System
Create a simple order processing system for a fictional online store. 
The system will track orders in an array, each represented by an object containing the order ID, customer name, and order status. 
Implement functions to add a new order, update the status of an existing order, and retrieve all orders for a specific customer.
You must expose three functions to performe the above operations. See below.

CURRENT STATE:
[
  { orderId: 1, customerName: "Ivan", status: "shipped" },
  { orderId: 2, customerName: "Petar", status: "processing" },
  { orderId: 3, customerName: "Maria", status: "delivered" }
];


INPUT DETAILS:
addOrder("Ana", "received");
getOrdersByCustomer("Ana");
updateOrderStatus(4, "processing");
getOrdersByCustomer("Ana");

EXPECTED RESULTS:
[
  { orderId: 1, customerName: "Ivan", status: "shipped" },
  { orderId: 2, customerName: "Petar", status: "processing" },
  { orderId: 3, customerName: "Maria", status: "delivered" },
  { orderId: 4, customerName: "Ana", status: "received" }
];
[
  { orderId: 1, customerName: "Ivan", status: "shipped" },
  { orderId: 2, customerName: "Petar", status: "processing" },
  { orderId: 3, customerName: "Maria", status: "delivered" },
  { orderId: 4, customerName: "Ana", status: "processinga" }
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
				console.log(order);
				return ;
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
