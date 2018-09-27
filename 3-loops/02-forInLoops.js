/*
For in loops
great for iterating over values in an object
*/

let student = {name: 'Christian', awesome: true, degree: 'JavaScript', week: 1};

for(let item in student) {
    console.log(item);
    console.log(student[item]);
}

