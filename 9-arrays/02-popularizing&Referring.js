/*Arrays
Intro to Arrays

they have [], can hold multiple data types, and are good for listing
*/

//overview/calling
let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];
//index values    0          1         2       3     4   5       6        7
 console.log(typeof students); //object

 console.log(`Hello ${students[6][1]}, you look nice today.`);
 console.log('Hello,' + students[6][1] ,'you look nice today.');
 let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hot dog'];
 
 for(let f of food){

    console.log(f);
 }
 food.push('pizza');
    console.log(food);///adds a value to the string
 
 food.splice(1, 1, 'bananas');
    console.log(food);////replaces original value
 
    food.splice(2,0, 'sweet potato pie');
    console.log(food);

    food.pop();//remove last added file