//"use strict"; --> this makes it so that variables must be declared using either var, let or const which prevents scope errors
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

//small function for recursion practice
function printManyTimes(str){

    if(typeof str === "string"){
        if(str.length >= 100){
            console.log(str);
            return null;
        }
        else{
            str += 'hello world!'
            printManyTimes(str);
        }
    }

}
printManyTimes('me ');


// an array declaration using the const keyword prevents explicit reassigning of the array reference
// however, one can still mutate individual array elements using bracket notation
const s = [1,2,3];
console.log(s);
// s = [4,5,6] not allowed
s[0] = 4;
s[1] = 5;
s[2] = 6;
console.log(s);

// prevent mutation of constant arrays or objects using Object.freeze()
const values = {
    'name' : 'fred',
    'age' : 22,
    'sex' : 'male'
}

Object.freeze(values);
Object.freeze(s);

// nothing will be modified
s[0] = 7;
s[1] = 8;
s[2] = 9;
values.name = 'steve';

console.log(s);
console.log(values);