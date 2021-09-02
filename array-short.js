const numbers = [2,3,5,7,1,9,6,4,8];
const shortNumbers = numbers.sort();
// console.log(shortNumbers);
const reverseFriend = numbers.reverse()
// console.log(reverseFriend);
///string also same

//number sorting fun
const bigNumbers = [41,52,63,69,41,21,23,29];
const shortBigNumbers = bigNumbers.sort(function(a,b){
    return a-b;
});
console.log(shortBigNumbers);