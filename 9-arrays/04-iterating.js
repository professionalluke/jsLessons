//iterating
let food= ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hot dog'];


// food.forEach(f => {console.log(f)})///

food.forEach((food, number) => {
    console.log(food);
    console.log(number);
})


let movies =['Iron Man', 'The Departed', 'Megamind', '42', 'Forgetting Sarah Marshall'];///made a list

movies.forEach((movies) => {////what was used to write out the list
    console.log(movies);
})
movies.push('Scary Movie');////what was used to add a movie to the list
    console.log(movies);

movies.splice(3,1,'The Internship');////what was used to replace '42' in the list
    console.log(movies);

let long =[1,2,3,4,5,6,7,8,9,10];
console.log(long.length);///shows how many places are in the array

    // let newArray = new Array(73);
    //     console.log(newArray.length);
    //     newArray.forEach(el => {
    //     console.log(el);
    //     })