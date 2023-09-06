// objects in javascript are like dictionaries
// they have key value pairs and can be accessed by the key
// they are formally called JSON objects (JavaScript Object Notation)

// create an object
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

// access the object
var dogname = ourDog.name; // Camper
var doglegs = ourDog['legs']; // 4

// update the object
console.log(ourDog.name); // Camper
ourDog.name = "Happy Camper";
console.log(ourDog.name); // Happy Camper

// add a new property to the object
ourDog.bark = "bow-wow";
console.log(ourDog.bark); // bow-wow

// delete a property from the object
delete ourDog.bark;

// check if a property exists in the object
console.log(ourDog.hasOwnProperty('name')); // true
console.log(ourDog.hasOwnProperty('bark')); // false

// iterate through all the keys in the object
// for (var key in ourDog) {
//     console.log(key); // name legs tails friends
// }

// iterate through all the values in the object
// for (var key in ourDog) {
//     console.log(ourDog[key]); // Happy Camper 4 1 [ 'everything!' ]
// }

//the following code will illustrate the use of objects in javascript

function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };

    result = lookup[val];

    // the following code is the same as the code above 
    // switch (val) {
    //     case "alpha":
    //         result = 'Adams';
    //         break;
    //     case "bravo":
    //         result = 'Boston';
    //         break;
    //     case "charlie":
    //         result = 'Chicago';
    //         break;
    //     case "delta":
    //         result = 'Denver';
    //         break;
    //     case "echo":
    //         result = 'Easy';
    //         break;
    //     case "foxtrot":
    //         result = 'Frank';
    //         break;
    // }

    return result;
}

console.log(phoneticLookup("charlie")); // Chicago

// we can also create an array of objects
var myMusic = [
    {
        "artist": "Billy Joel",
        "title ": "Pianio Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Beau Carnes",
        "title ": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "Youtube Video"
        ],
        "gold": true
    }
];

// iterate through the array of objects and print the objects
for (let i = 0; i < myMusic.length; i++){
    console.log("Object " + (i+1));
    for (let key in myMusic[i]){
        console.log(key + ": " + myMusic[i][key]);
    }
}

// we can also create an object of objects
var myGarage = {
    "car":{
        "make": "Toyota",
        "model": "Camry",
        "year": 2018,
        "storage":{
            "compartments": 3,
            "space": "medium"
        }
    },
    "truck":{
        "make": "Ford",
        "model": "F150",
        "year": 2019,
        "storage":{
            "compartments": 5,
            "space": "large"
        }
    },
    "motorcycle":{
        "make": "Harley Davidson",
        "model": "Sportster",
        "year": 2015,
        "storage":{
            "compartments": 0,
            "space": "none"
        }
    }
}

var vehicleSpace = [myGarage.car.storage.space, myGarage.truck.storage.space, myGarage.motorcycle.storage.space];
console.log(vehicleSpace); // [ 'medium', 'large', 'none' ]
console.log(myGarage); // prints the entire object including nested objects

// coding challenge

// Setup
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

//create a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    
    if(value === ""){
        delete collection[id][prop];
    }
    else if(prop === "tracks"){
        if(collection[id].hasOwnProperty("tracks")){
            collection[id][prop].push(value);
        }
        else{
            collection[id][prop] = [value];
        }
    }
    else{
        collection[id][prop] = value;
    }

    return collection;
}

console.log(collection);
console.log(updateRecords(5439, "tracks", "Unknown"));

//coding challenge
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop){
    for(let i = 0; i < contacts.length; i++){
        if(contacts[i].firstName === name){
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
};
console.log(lookUpProfile("Akira", "likes"));

//we can use destructuring assignment to assign individual variables from objects

const myObj = { x: '1', y: '2', z: '3'};
const { x: a, y: b, z: c } = myObj;
console.log(a + b + c);


const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
}
function getTempOfTmrw(avgTemperatures){
    "use strict";
    const {today: tempOfToday, tomorrow:tempOfTmrw} = avgTemperatures
    return tempOfTmrw;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));