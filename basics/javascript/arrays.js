// arrays work as expected although the console.log() function is able to print the array as a string without the need for any manual concatenation
//declaring arrays
let ourArray = ["John", 23];
let myArray = ["Quincy", 1, "cat"];
let yourArray = ["dog", 2, "cat"];
let nestedArray = [ourArray, myArray, yourArray];

console.log(ourArray);
console.log(nestedArray);

//accessing arrays
console.log(ourArray[0]);
console.log(nestedArray[1]);

//modifying arrays
//arrays are mutable and can be modified after their declaration using the index of the element to be modified
ourArray[1] = 5;
console.log(ourArray);

//consider accessing the following nested array
let myData = [ [1,2,3], [[4,5,6], 7, 8, 9] ];
console.log(myData[0]);
//we are accessing the number 4 which is the first element of an array that is nested in an array which is the first element of an array that is the second element of the myData array
console.log(myData[1][0][0]);

//push() is used to append data to the end of an array
myData.push(10);
console.log(myData);
//pop() is used to remove the last element of an array
let removed = myData.pop([10]);
console.log(myData);
console.log(removed);
//shift() is used to remove the first element of an array
let shifted = myData.shift();
console.log(myData);
console.log(shifted);
//unshift() is used to add an element to the beginning of an array
myData.unshift(123);
console.log(myData);

// we can use the spread operator to copy the contents of one array into another
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function(){
    //arr2 = arr1; //this will not work as it will only copy the reference to the array
    // instead, right side of the assignment returns 
    arr2 = [...arr1];
    arr1[0] = 'potato'; 
})();
console.log(arr2);

(function(){
    
    const obj1 = { name: 'John' };
    const obj2 = { name: 'Alice' };

    const arr1 = [obj1, obj2];
    const arr2 = [...arr1]; // Shallow copy

    arr2[0].name = 'Bob';
    arr1.push({ name: 'Mary' });

    console.log(arr1); // 'Bob' (change is reflected in arr1)
    console.log(arr2); // 'Bob'

})();