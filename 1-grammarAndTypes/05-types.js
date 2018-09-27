/*
TYPES
*/

//Booleans
let on = true;
console.log(on); //output was true

off = false;
console.log(off); //output was false

//Boolean can represent: true/false, on/off, yes/no

//Null
/*
Null is an empty value (not 0; not undefined)
It is like an empty container, nothing is in it, but it still exists as a space to fill
*/
let empty = null;
console.log(empty);

//undefined
/*
undefined = no value assigned (not even an empty container) 

undefined is not an error
*/
let undef = undefined;
console.log(undef);

/* think of undefined and null as packages in UPS
null-> package deliberatetly sent out from UPS as empty
undefined -> package that was forgotten, or a package that has not yet been used
*/

//Numbers
let degrees = 65;
console.log(degrees);

let precise = 999999999999999
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite.toFixed(2));

/////////////////////(2 + 1)/10
let numbersAreHard = (0.2 * 10 + 0.1 * 10) /10;
console.log(numbersAreHard);


//Strings
//Strings = any value within quotes; JS spit out the value within the quotes
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

//numbers vs strings
let first = 1050 + 100;
let second = '1050' + '100';

console.log(first); //number
console.log(second); //string

console.log(typeof first); //number
console.log(typeof second); //string

//What's going on here?
// The + does addition when given to numbers, concatenation when given to strings

let third = 1050 +'100';
console.log(third);

//classroom challenge is below

let firstname  = 'Luke';
let lastname = 'Cureton';
let housenumber = '9148';
let street = 'Anchor Mark Drive';
let city = 'Indianapolis';
let state = 'Indiana';
let zipcode = '46236';
console.log(firstname, lastname, housenumber, street, city, state, zipcode);

//Objects
/*
What is an object?

a container that can hold multiple datatypes

denoted by {}
has keys and values (color key): 'blue' (value)), separtaed with a colon
Each key separated with a coma
*/

let burritosNow = {
    size: 'large',
    quantity: 4,
    now: true,
}
console.log(burritosNow);
console.log(typeof burritosNow);

//Arrays
/*
Arrays are great for lists

deonoted by []
have values separated by commas -> ['blue', 'green', 'yellow']
*/

let burritos = ['large', 4, true];
console.log(burritos);
console.log(typeof burritos);