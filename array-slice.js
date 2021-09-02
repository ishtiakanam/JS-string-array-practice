const numbers = [14,15,16,12,17,18,19,20,24,27,29];
const numberSlice = numbers.slice(5,9);
// console.log(numberSlice);

// const spliced = numbers.splice(5,2);
// console.log(spliced);
// console.log(number)

const spliced = numbers.splice(5,2,1999,199999999);
console.log(spliced);
console.log(numbers)