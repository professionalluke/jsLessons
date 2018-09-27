/*
calling functions
works like PEMDAS
*/

function hi(){
    console.log('hi');
}
//hi->does nothing, turns into a variable
hi();//-->needs ();
console.log(hi);///undefined if call function inside console.log
console.log(hi());///really crazy trying to call a function inside of a function that is console.log'd