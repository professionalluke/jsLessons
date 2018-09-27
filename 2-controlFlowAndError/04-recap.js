/*
recap
*/

let stringExample = 'string';
let numberExample = 0;
let boolExample = true;

let conditionExample = 0;

//if else example
if (typeof conditionExample === 'string') {
    console.log("this is a string");
} else if (conditionExample === 'number') {
    console.log('this is a number');
} else if (conditionExample === 'boolean');
    console.log('this is a boolean');


//switch

switch (typeof conditionExample){
    case 'string':
    console.log('this is a string');
    break;
    case 'number':
    console.log('this is a number');
    break;
    default:
    console.log('this is neither a string nor number');
}


///ternary
(typeof conditionExample === 'string') ? console.log('our variable is a string') :
(typeof conditionExample === 'number') ? console.log('our var is a number') :
(typeof conditionExample === 'undefined') ? console.log('our var is undefined') :
console.log('meh')
