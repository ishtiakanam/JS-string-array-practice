const anthem = "Ishtiak Ashraful Ishraful Kairul Abdul Shirin";
const words = anthem.split(" ");
const withoutA = anthem.split("a")
// console.log(withoutA);

//slice
const smallSlice = anthem.slice(5,13);
// console.log(smallSlice);0000

//substr
const anotherPart = anthem.substr(11,8);
// console.log(anotherPart);

//substring
const substring = anthem.substring(11,15);
// console.log(substring);

//concat 
const first = 'Amader';
const second = 'Bangladesh'
const fullString = first.concat(second).concat("I love this country");
// console.log(fullString);

//join
const join = ['Nabil','Nowshad','Fahim',"Tafhim"];
const joinAll = join.join(', ');
console.log(joinAll)