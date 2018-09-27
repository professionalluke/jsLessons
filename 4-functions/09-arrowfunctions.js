//Arrow functions
function coffee() {
    console.log('coffee rules.');
}

let tea = () => {
    console.log("tea is awesome.");
}

coffee();
tea();


var cats = (kittens,  puppies) => {
    console.log(`I have ${kittens} cats, and ${puppies} dogs`);
}
cats(2,3);

//Arrow functions by Body styles
// concise
let apples = x => console.log(`There are ${x} apples.`)
apples(5);

//Block
let peaches =(x) => { console.log(`There are ${x} peaches.`)}

peaches (6);
