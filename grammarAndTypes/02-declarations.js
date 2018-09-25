/*
Variables

notes on variables
1) A variable must begin with a letter, underscore, or a dollar sign
2) you can use numbers buit they must follow one of the above
3) javascript is CASE sensitive--'hello' and 'Hello' are different
*/

var a= 1;
var b= 2;
console.log(a+b); //3

/*
DECLARATIONS

Declarations are the LEFT side of a variable
    It is simply the var x
    It is on the left side of the assignment operator (*)

    INitializations are the RIGHT side of a variable
        Set the value of the variable
        Includes the cariable name (x), the assih=gnment ioerator(*), and the value (10)=> x = 10
*/
var x;
console.log('Declaration', x);

x= 10;
console.log('Initialization 1:', x);

x=33;
console.log('Initialization 2', x);

/*
Var, Let, and Const:
var= 'old' js keyword for variables (introduce in ES6)
const = also 'new'; it declares uchangeable variables
Let = same as var
*/

let today = 'Great';
const elevenFifty = 'Wonderful';
console.log(today, elevenFifty);

today = "lovely";
console.log(today, elevenFifty);
