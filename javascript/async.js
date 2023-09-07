// synchronous---------------------------

// console.log(" I ");
// console.log(" eat ");
// console.log(" ice cream ");
// console.log(" with ");
// console.log(" a ");
// console.log(" spoon ");

// asynchronous--------------------------

// setTimeout(() => {
//     console.log(" spoon ");
// }, 4000)
// console.log(" I ");
// console.log(" eat ");
// console.log(" ice cream ");
// console.log(" with ");
// console.log(" a ");

// function one(call_two) {
//     console.log("step 1 complete. Please call step 2.");
//     call_two();
// }

// function two() {
//     console.log("step 2");
// }

// one(two);

let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}


let order = (Fruit_name, call_production) => {
    
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} was selected.`);
    }, 2000);

    console.log("Order placed. Please call production to start");

    call_production();
};

let production = () => {
    console.log("Order received. Production has started.");
};

order(0, production);