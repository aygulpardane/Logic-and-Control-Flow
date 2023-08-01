/*
Pseudocode
Decleare a variable value and set it equal to 0
Write an if/else if statement
If the value (which means if it is true), console.log("true")
If the value === false, console.log("The boolean value false is falsy")
.
.
.
*/

let value = 0;
if (value) {
    console.log("true");
} else if (value === false) {
    console.log("The boolean value false is falsy");
} else if (value === null) {
    console.log("The null value is falsy");
} else if (value === undefined) {
    console.log("undefined is falsy");
} else if (value === 0) {
    console.log("The number 0 is falsy (the only falsy number");
} else if (value === "") {
    console.log("The empty string is falsy (the only falsy string)");
}

/*
Pseudocode
declare a variable num1 and num2 and set them equal to 0
declare sum and let it equal to the sum of num1 and num2
Write an if/else if statement
If the sum < -1000, console.log(sum+ " is less than -1000")
If the sum < 0, console.log(sum+ " is a negative number")
.
.
.
*/

let num1 = 0;
let num2 = 0;
let sum = num1 + num2;
if (sum < -1000) {
    console.log(sum + " is less than -1000");
} else if (sum < 0) {
    console.log(sum + " is a negative number");
} else if (sum === 0) {
    console.log(sum + " is equal to 0");
} else if (sum > 0 && sum < 100) {
    console.log(sum + " is larger than 0");
} else if (sum > 100) {
    console.log(sum + " is greater than 100");
}

/*
Pseudocode
Declare a variable num3 and set it equal to 0
Declare a variable num4 and set it equal to 0
Write and if/else statement
Inside the if, num1 >=5 && num2 >= 5
Console log true
Else console log false
*/

let num3 = 0;
let num4 = 0;
if (num3 >= 5 && num4 >= 5) {
    console.log('true');
} else {
    console.log('false');
}

/*
Pseudocode
Declare a variable param1A, param1B, param2A, param2B, and set them all equal to 0
Write and if/else statement
If param1A === param1B OR (||) param2A === param2B, print true
Else, print false
*/

let param1A = 0;
let param1B = 0;
let param2A = 0;
let param2B = 0;
if (param1A === param1B || param2A === param2B) {
    console.log("true");
} else {
    console.log("false");
}
