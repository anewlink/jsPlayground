const pets = ["Cat", "Dog"];

console.log(pets);

/* pets.push("Hamster", "Horse");

console.log(pets); */

const wishlist = ["Hamster", "Horse", "Snake"];

pets.push.apply(pets, wishlist);
console.log(pets);