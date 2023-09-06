// will return a random floating point value between 0 and 1 inclusive of 0 but not 1
function randomFraction(){
    return Math.random();
}

// will return a random whole number between 0 and passed parameter
function randomWholeNum(num){
    return Math.floor(Math.random() * num);
}

//returns a random whole number in [1,9] inclusive
function ourRandomRange(minValue, maxValue){
    // find the difference in the range and then add one before multiplying by math.random()
    // this ensures that the upper bound is included as a possible return value after math.floor is applied since math.random() returns values in [0,1)
    return Math.floor(Math.random() * (maxValue-minValue+1)) + minValue;
}

console.log(ourRandomRange(1,9))

//converts a string to an integer using parseInt()
function convertToInteger(str){
    if(typeof str != "string"){
        return "Enter a string representing an integer please.";
    }
    return parseInt(str);
}

// javascript supports anonymous functions which can be defined where they are used and do not always need identifiers
// the following are all various anonymous funcitons

let magic = function () {
    return new Date();
}

magic = () =>{
    return new Date();
}

// since the function is doing nothing but returning a value the syntax can be simplified further
magic = () => new Date();

// arrow function that concatenates two arrays 
let concatenate = (arr1, arr2) => arr1.concat(arr2);
let a = [1,2,3];
let b = [4,5,6];
console.log(concatenate(a,b));

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squireList = (arr) => {
    const squaredIntegers = arr.filter( num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
}

console.log(realNumberArray);
console.log(squireList(realNumberArray));

const increment = (function(){
    return function increment(number, value = 1){
        return number + value;
    };
})();
console.log(increment(5,2));
console.log(increment(5));

// Reason 2) Private Variables and Methods from Closure
const incr = (() => {
    let counter = 0;
    console.log(counter);
    const credits = (num) => console.log('I have ' + num + ' credit(s).');
    return () => { counter++; credits(counter); }
})();
incr();
incr();
incr();

// the following function can sum any number of arguments
const sum = (function(){
    return function sum(...args){
        return args.reduce((a,b)=> a+b, 0);
    }
})();
console.log(sum(1,2,3,4,5,6,7,8,9,10));