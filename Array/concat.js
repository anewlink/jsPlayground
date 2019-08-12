// Array.prototype.concat();

var items = [1, 2];

var newItems = items.concat(3);
newItems = items.concat(4, 5, 6, 7, '8', undefined, [9, 10]);

console.log(newItems);

var people = [{ name: 'Shane' }, { name: 'Sally' }];
var people2 = [{ name: 'Simon' }, { name: 'Ben' }];
people.concat(people2).forEach(person => {
  console.log(person.name);
});
