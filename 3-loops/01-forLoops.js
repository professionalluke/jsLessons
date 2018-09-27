/*
For Loops
*/

//Loop Variations
//For statement
//Do while statement
//while statement
//labeled statement
//break statement
//continue statement
//for in statement
//for of statement

for(let i =0; i< 10; i++) {
    console.log(i);
}

//count from 0 - 20, by 2's
for(let i = 0; i<= 20; i = i + 2) {
    console.log(i);
}

//10-0 down by 1s
for(let i = 10; i>= 0; i--) {
    console.log(i);
}

for(let i = 0; i >= -24; i= i-2){
    console.log(i);
}
//challenge using a for loop. go through a name and display each letter individualy
let name = 'Luke';
for(let i = 0; i  <= name.length; i++){
    console.log(name[i]);
}

/* challenge make a for loop where you add up all of the numbers from 1-50 (should equal 1275)
*/
let string = ''


for(let i = 1; i <=50; i++){
    string + i;
}   console.log(string);


for (let i = 0; i <= 100; i=i+1); {
    if (i&3 == 0 && i % 5 == 0) {
        console.log('Fizz Buzz');
    } else if (i&3 == 0) {
        console.log('Fizz');
    } else if (i&5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
