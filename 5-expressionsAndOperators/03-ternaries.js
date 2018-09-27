//Ternaries

var x = 6;
(x> 0) ? console.log("x is greater than 0.") : console.log("x is not greater than 0")

//Takes the place of this below

if (x >0){
    console.log("greater")
} else {
    console.log("lesser")
}
/// this is a new and separate example

let x = 10;

(x == 0) ? console.log("hello") : (x < 0) ? console.log("x is less than zero") : console.log("x is greater than 0")

let age = 30;

(age >=25) ? console.log("Yay! you can rent a car") : (age >= 21) ? 
console.log("Yay! You can drink!") : (age >= 18) ? console.log("You can vote!") : (age <= 17) ?
 console.log("sorry, you can not do anything") : console.log("meh");