/*
	Write a script to display hours and minutes in the browser console as a string format "14 hours 26 minutes.".
	If the value of the minutes variable is 0, then output the string "14 o'clock", without minutes.
*/

const hours = 14;
const minutes = 0;
let timestring;

if (minutes === 0) {
  timestring = `${hours} o'clock`;
} else {
  timestring = `${hours} h. ${minutes} m.`;
}
console.log(timestring);
