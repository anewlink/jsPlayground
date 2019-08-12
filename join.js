// Array.prototype.join();
const names = ['Shame', 'Alan', 'Osourne'];
console.log(names[0] + ' ' + names[1] + ' ' + names[2]);
console.log(names.join(' '));
console.log(names.join(''));
console.log(names.join());

const help = ['Usage', '    foo-app <inputs>'];
const process = {
  argv: [undefined, 'support', 'help']
};

if (process.argv[2] === 'help') {
  console.log(help.join('\n'));
}

const name = 'shane osbourne';
var upper = name.split(' ').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' ');
console.log(upper);
