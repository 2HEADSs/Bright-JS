/*
1. Even Position Element
Write a function that finds the elements at even positions in an array.
The input comes as an array of string elements.
The output is printed on the console. Collect all elements in a string, separated by space.

EXAMPLE
Param 1: ['20', '30', '40', '50', '60']
Result: [20, 40, 60]
*/

/*
2. Sum First Last
Write a function that sums the first and the last numbers of an mixed array.
The input comes as an array of string elements holding numbers.
The output is the return value of your function and should be a number.

EXAMPLE
Param 1: ['a', 'b', {}, 1, undefined, null, 'abc', [1,2,3],2,'xyz']
Result: 60
*/

/*
3. Smallest Two Numbers

Write a function that prints the two smallest elements from an array of numbers.
The input comes as an array of number elements.
The output is printed on the console on a single line, separated by space.

EXAMPLES
Param 1: [30, 15, 50, 5]
Result: 5 15
*/

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