//variables declared outside fucntion or blocks are global variables and can be accessed anywhere in the program
var myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal Here
    // var keyword would make this variable local to the function
    // let keyword would make this variable local to the block
    // no keyword would make this variable global implicitly, considered bad practice
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();

function myLocalScope() {
    var myVar = "Hello";
    console.log(myVar);
}
myLocalScope();
//console.log(myVar); // ReferenceError: myVar is not defined

// local variables take precedence over global variables
var outerWear = "T-Shirt";
function myOutfit() {
    var outerWear = "sweater";
    return outerWear;
}
console.log(myOutfit());
// accessing the outerWear variable directly without the funciton myOutfit() would return the global variable
console.log(outerWear);

function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));