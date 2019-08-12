var items = [1, 2, 3, 4, 5];
var hasThree = items.some(x => x === 3);

console.log(hasThree);

var tasks = [
    {
        title: 'Do laundry',
        completed: true
    },
    {
        title: 'Feed the cat',
        completed: true
    },
    {
        title: 'Watch the array lessons on egghead.io',
        completed: true
    }
];
/* var list = document.querySelector('.task-list');
list.classList.add(
    tasks.some(task => task.completed === false) ? 'task-list--umcompleted' :  'task-list--completed'
);
list.innnerHTML = tasks
  .map(x => x.completed ? `<s>${x.title}</s>` : x.title)
  .map(x => `<li>${x}</li>`)
  .join(''); */

function addTask(title) {
    if (tasks.some(task => task.title === title)) {
        return;
    }
    tasks.push({ title, completed: false });
}

addTask('Feed the Dog');
/* console.log(tasks, '\n'); */
addTask('Feed the cat');
console.log(tasks);