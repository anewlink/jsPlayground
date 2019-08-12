const items = [1, 2, 3, 4, 5];
const mapped = items.map(item => item * 2);

console.log(items);
console.log(mapped);
const items2 = ["1", "2", "3", "4", "5"];
const mapped2 = items.map(item => Number(item));
console.log(items2);
console.log(mapped2);

const names = ["   Shane", "Sally "];
const mappedNames = names
    .map(name => name.trim())
    .map(name => {
        return {
            firstname: name
        }
    });

console.log(mappedNames);
mappedNames.forEach((person) => {
    console.log(person.firstname);
})

const names2 = [
    {
        firstName: 'Shane',
        lastName: 'Osbourne'
    },
    {
        firstName: 'Sally',
        lastName: 'Osbourne'
    }
];
const mappedNames2 = names2.map(name => {
    return { firstName: name.firstName, lastname: name.lastName, fullName: `${name.firstName} ${name.lastName}` };
});
console.log(names2, "---------------");
console.log(mappedNames2);

const mappedFirstNames = mappedNames2.map(x => x.firstName); 
console.log(mappedFirstNames);
