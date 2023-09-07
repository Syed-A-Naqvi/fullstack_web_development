// double and triple equals signs are used for regular and strict comparisons

// double equals sign will convert the data type to match the other
// 3 == '3' would return true
console.log(3 == '3');

//triple equals signs will perform a literal comparison
// 3 === '3' would return false
console.log(3 === '3');

//for inequality, both regular and strict, use != and !== respectively


// all other comparison operators work as expected and the syntax for conditionals and branches is the same as in Java

var names = ["hole-in-one", "eagle", "birdie", "par", "bogey", "double bogey", "go home"];
function golfScore(par, strokes){
    if (strokes == 1){
        return names[0];
    } else if (strokes <= par - 2){
        return names[1];
    } else if (strokes == par - 1){
        return names[2];
    } else if (strokes == par){
        return names[3];
    } else if (strokes == par + 1){
        return names[4];
    } else if (strokes == par + 2){
        return names[5];
    } else if (strokes >= par + 3){
        return names[6];
    }
}

console.log(golfScore(5, 8));

// switch statements use strict equality and can be used to replace multiple if else statements
    // it is important to note that switch statements compare the value passed to the switch statement
    // with the case values using strict equality they do not perform a boolean test like if else statements
    // this means that the following is the operation that will ALWAYS be performed:
        // val === 1
        // val === 2
        // val === 3
        // etc...
    // so a conditional after the case keyword would be incorrect since for example (val>1) may evluate to true or false
    // but true or false are not equal to val and so each case would be skipped and the default case would be executed
function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1:
            answer = "alpha";
            // break statements are needed to prevent fall through, where the next case statement is executed even if the previous one is true
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        // default is the equivalent of the else statement, it will execute if none of the previous cases are true
        default:
            answer = "stuff";
            break;
    }
    return answer; 
}

console.log(caseInSwitch(1));

// multiple identical options in switch statements can be grouped together
function sequentialSizes(val){
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "high";
            break;
    }
    return answer;
}

//card counting function
var count = 0;
function cc(card){
    switch(card){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count += 1;
            break;
        case 7:
        case 8:
        case 9:
            count += 0;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count -= 1;
    }

    var holdbet = (count > 0) ? "Hold": "Bet";
    return holdbet
}

cc(2);
console.log(count);
cc(3);
console.log(count);
cc(7);
console.log(count);
cc('K');
console.log(count);
cc('A')
console.log(count);