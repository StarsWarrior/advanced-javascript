const students = [
    {id: 21, name: 'wali ullah shuvo'},
    {id: 31, name: 'tonmoy ahmed tonu'},
    {id: 41, name: 'faizul islam fuad'},
    {id: 51, name: 'shariful islam'},
]

const names = students.map( s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter( s => s.id>40);
const bigger1 = students.find( s => s.id>40);
console.log(bigger1);