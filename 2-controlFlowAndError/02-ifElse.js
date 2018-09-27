/*
If Else
*/
weather = 75;

if (weather <70){
    console.log('Wear a Jacket');
} else{
    console.log('No jacket necessary!');
}

let Name = 'Luke Cureton';

if (Name == 'Luke Cureton'){
    console.log('Hello, my name is Luke Cureton');
} else{
    console.log('Hello, what is your name?');
}

//classroom challenge below was to capitalize only the first letter of the name
// what not to do below

let name = 'cRaZy';

if (name !== 'cRaZy'){
    console.log('Try again');
} else {
    console.log('Crazy');
}
// How to do it correctly using if, else statements

let name = 'LuKe';
if (name[0] == name[0].toUpperCase()){
    firstletter = name[0] +name.slice(1).toLowerCase();
} else{
    otherLetters = name.charAt(0).UpperCase() + name.slice(1).toLowerCase();
    console.log(otherLetters);
}

//// one way to do it in a complex real coding way
 function name (string){
     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
 }
 console.log(name('lUkE'));
 
/* Challenge:
Write a ternary that does the same thing as the age challenge

Age Challenge (if else):
*/
var age = 30;

if (age >= 25) {
	console.log("Yay! You can rent a car!");
} else if (age >= 21) {
	console.log("Yay! You can drink!");
} else if (age >= 18) {
	console.log("Yay! You can vote!");
} else {
	console.log("Sorry, you're too young to do anything fun.");
}
