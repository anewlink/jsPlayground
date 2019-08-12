// Array.prototype.indexOf();

var family = ['Shane', 'Sally', 'Isaac', 'Kittie'];
console.log(family.indexOf('Sally'));
console.log(family.indexOf('Sally2'));

const kittieExists = family.indexOf('Kittie') > -1;
if (!kittieExists) {
  family.push('Kittie');
}

console.log(kittieExists, family);

var family2 = ['Shane', 'Kittie', 'Sally', 'Isaac'];
console.log(family2.indexOf('Kittie', 2));
console.log(family2.indexOf('Kittie', 1));

var shane = {
  name: 'Shane'
};
var sally = {
  name: 'Sally'
};
var kittie = {
  name: 'Kittie'
};

const family3 = [shane, sally, kittie];
console.log(family3, family3.indexOf(kittie));

var whitelist = ['.css', '.js'];

var events = [
  {
    file: 'css/core.css'
  },
  {
    file: 'js/app.js'
  },
  {
    file: 'index.html'
  }
];

var filtered = events.filter(event => {
    var ext = require('path').extname(event.file);
    return whitelist.indexOf(ext) > -1;
});

console.log(filtered);
