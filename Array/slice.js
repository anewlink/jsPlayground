// Array.prototype.slice();
const person = { name: 'Shane' };
let items = [1, 2, 3, 4, 5, person];
let copy = items.slice();
copy[5].name = 'Sally';
copy.push(6);
copy[0] = 100;
console.log(items, copy);
let numbers = [1, 2, 3, 4, 5];
var copy2 = numbers.slice(0, 1);
var copy3 = numbers.slice(-2);
var copy4 = numbers.slice(1, -1);
console.log(numbers, copy2, copy3, copy4);

const parent = {
  name: 'shane-osbourne'
};

const filters = {
  'deslugify': x => x.replace('-', ' '),
  uppercase: x => x.toUpperCase()
};

const input = 'name | deslugify | uppercase';
const sections = input.split('|').map(x => x.trim());
console.log(sections);
const ref = parent[sections[0]];
console.log(ref);
const output = sections.slice(1).reduce((prev, next)=>{
  if(filters[next]){
    return filters[next].call(null, prev);
  }
  return prev;
}, ref);
console.log(output);
