/* data types:
undefined, null, boolean, string, symbol, number, and object
*/

// can be used throuought the whole program
var myName = "Beau";

// will be treted as a global variable 
myName = 8;

// can only be used in the scope of where you declared it
let ourName = "freeCodeCamp";

//constant, cannot be modified
const pi = 3.14;

//declaring is different from assigning, however both can be done at the same time
var a;
a = 7;

console.log(myName);
console.log(a);

//operations are performed based on the dynamically determined data type of variables
var a = 5;
var b = 10;
var sum = a + b;


console.log(sum);

// mathematical operations in js are as expected

// incrementing and decrementing: ++, --
// shorthand for adding, subtracting, multiplying or dividing a number:
number = 2;
a += number;
a -= number;
a *= number;
a /= number;

console.log(a);


