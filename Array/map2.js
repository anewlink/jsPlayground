const items = [
    {
        active: true,
        firstName: 'Shane',
        lastName: 'Osbourne'
    },
    {
        active: true,
        firstName: 'Sally',
        lastName: 'Osbourne'
    },
    {
        active: false,
        firstName: 'Ben',
        lastName: 'Barker'
    }
];
const mapped = items
.filter(x => x.active)
.map(x => x.firstName);
console.log(createHtmlList(mapped));

function createHtmlList(items) {
    const listElements = items.map(x => ` <li>${x}</li>`).join('\n');
    return `<ul>\n${listElements}\n</ul>`;
}
