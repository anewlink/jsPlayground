var items = ['Shane', 'Kittie', 'Sally', 'Isaac'];
var numbers = [10, 30, 20];
var numbers2 = [10, 30, 2, 20];
var numbers3 = [10, 30, 2, 20];
var lessons = [
    {
        title: 'Javascript array methods in depth - concat',
        views: 1000
    },
    {
        title: 'Javascript array methods in depth - slice',
        views: 1050
    },
    {
        title: 'Javascript array methods in depth - join',
        views: 1025
    }
]

items.sort();
console.log(items);
items.sort((a, b) => { b.length - a.length });
console.log("length descendant", items);
numbers.sort();
console.log(numbers);
numbers2.sort((a, b) => a - b);
console.log(numbers2);
numbers3.sort((a, b) => {
    console.log(a - b);
    if (a - b === 0) {
        return 0;
    }
    if (a - b < 0) {
        return -5000;
    }
    if (a - b > 0) {
        return 5000;
    }
});
console.log(numbers3);
numbers3.sort((a, b) => b - a);
console.log(numbers3);

var list = lessons
    .sort((a, b) => b.views - a.views)
    .map(x => `  <li>${x.title} (${x.views})</li>`)
    .join('\n');
var output = `<ul>\n${list}\n</ul>`;    
console.log(output);
