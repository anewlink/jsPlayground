const items = [5, 1, 2, 3, 4];
const result = items.every(x => x < 10);
const result2 = items.every(x => {
    console.log(x);
    return x < 5;
});
console.log(result);
console.log(result2);

const items2 = ["01", "02", 3, "04", "05"];
const items3 = ["01", "02", "03", "04", "05"];
let onlyString = items2.every(x => x.length);
console.log(onlyString);
onlyString = items3.every(x => typeof x === 'string');
console.log(onlyString);

const fields = [
    {
        field: 'email',
        value: 'shane@example.com',
        errors: []
    },
    {
        field: 'name',
        value: '',
        errors: ['No name provided']
    }
];

const isValid = fields.every(field => field.errors.length === 0);
console.log("Is valid", isValid);

const videos = [
    {
        title: 'Array methods: concat',
        length: 310,
        viewed: 310
    },
    {
        title: 'Array methods: join',
        length: 420,
        viewed: 360
    }
];

function complete(x) {
  return x.length === x.viewed;
}


const isComplete = videos.every(complete);
const completed = videos.filter(complete);
console.log("complete: ", isComplete);
console.log("completed videos: ", completed);
