const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const x = numbers[i];
//     const result = x * x;
//     output.push(result);
// }

// function squar(element){
//     return element * element;
// }

// const square = element => element * element;
// const square = x => x * x;

// const result = numbers.map(function(element){
//     return element * element;
// })

// const result = numbers.map(x => x * x);

// console.log(result);

// const bigger = numbers.filter(x => x < 5);

const isThere = numbers.find(x => x < 5);

console.log(isThere);