const items = [1, 2, 3, 4, 5];
let sum = items.reduce((prev, item) => {
    console.log('prev', prev, 'item', item);
    return prev + item
});
// fn(1, 2) -> 3
// fn(3, 3) -> 6
// fn(6, 4) -> 10
// fn(10, 5) -> 15
console.log(sum);
sum = items.reduce((prev, item) => {
    console.log('prev', prev, 'item', item);
    return prev + item
}, 100);
console.log(sum);

const albums = [
    {
        title: 'Holiday in Spain',
        images: ['01.jpg', '02.jpg']
    },
    {
        title: 'House renovation',
        images: ['03.jpg', '04.jpg', '05.jpg']
    }
]

/* const numImages = albums.reduce((prev, current) => prev.images.length + current.images.length);
console.log("img number: ", numImages); */
const numImages2 = albums.reduce((prev, current) => {return prev + current.images.length}, 0);
console.log("img2 number: ", numImages2);

const images = albums.reduce((prev, current) => {return prev.concat(current.images)}, []);
console.log(images);

const users = [
    {
        id: '01',
        name: 'Shane'
    },
    {
        id: '02',
        name: 'Sally'
    }
];

const newUsers = users.reduce((obj, user)=>{
   obj[user.id] = user;
   return obj;
}, {});

console.log(newUsers);
console.log(newUsers['02'].name);

