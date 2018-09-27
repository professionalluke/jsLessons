/*
 FOR OF LOOPS
 better for Arrays, they grab the actual value, not the numerical value of 0,1,2,3,4.....
*/

// let student = {name: 'Emily', awesome: true, degree: 'JavaScript', week: 1};
// for (let key of student) {
//     console.log(key);
// }

let catArray =['tabby', 'british shorthair', 'burmese', 'maine coon'];

for(cat of catArray){
    console.log(cat, 'says meow');
}