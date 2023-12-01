/*
	Write a script that will ask for login using prompt and log result in browser console.

	If the visitor enters "Admin", then prompt prompts for a password
	If nothing is entered or the Esc key is pressed - print the line "Canceled"
	Otherwise print the string "I don't know you"
	Check password like this:

	If the password is "I'm an admin", then output the string "Hello!"
	Else output the string "Wrong password"
*/

const adminUsername = "Admin";
const adminPassword = "I'm an admin";
const login = prompt("Enter login:");

if (login === adminUsername) {
	const password = prompt("Enter password:");
	if (password === adminPassword) {
		console.log("Hello!");
	}
	else {
		console.log("Wrong password!");
	}
} else if (login === null) {
	console.log("Canceled");
}
else {
	console.log("I don't know you");
}