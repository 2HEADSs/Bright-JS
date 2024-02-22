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
Param 1: Alice/ Мисля че тук трябва да е "Ivan"
Param 2: 26
Param 3: painting

EXPECTED RESULT: 
[
  { name: "Ivan", age: 26, hobbies: ["painting", "reading", "hiking"] },
  { name: "Petar", age: 30, hobbies: ["cycling", "gaming"] },
  { name: "Maria", age: 35, hobbies: ["swimming", "coding"] }
];
*/
function solve(name, age, newHobby) {
	let startState = [
		{ name: "Ivan", age: 25, hobbies: ["reading", "hiking"] },
		{ name: "Petar", age: 30, hobbies: ["cycling", "gaming"] },
		{ name: "Maria", age: 35, hobbies: ["swimming", "coding"] },
	];
	//   You will implement a function to add a new hobby to a user's profile
	// and another function to update the user's age.??????
	startState.forEach((el) => {
		if (el.name == name) {
			el.age = age;
            el.hobbies.splice(0,0,newHobby)
		}
	});
    return startState;
}
console.log(solve("Ivan", 26, "painting"));

