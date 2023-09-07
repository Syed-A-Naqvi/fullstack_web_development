var c = "I am a";
var c = c + " String!";
console.log(c);

// escape characters
sentence = "I am a \"double quoted\" string inside \"double quotes\".";
//we can also use backticks, single quotes or double quotes around a string literal if we wanted to avoid using escape characters repeatedly
console.log(sentence);

/*****
Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	backspace
\f	form feed
*****/

//getting the lngth of a string
myName = 'Johnathan';
console.log(myName.length);
//indexing a string
console.log(myName[0]);

// individual characters of a string cannot be modified, but the whole string can be reassigned
//myName[0] = 's'; - this will not work
myName = 'Jennifer'; // this will work

// can return any character of a string using bracket notation
console.log(myName[myName.length - 1]); // returns the last character of the string
console.log(myName[myName.length - 2]); // returns the second to last character of the string
console.log(myName[0]); // returns the first character of the string
