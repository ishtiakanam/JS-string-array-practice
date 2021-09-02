function addNumber(num1, num2){
    // console.log(arguments[1]);
    let result = 0;
    for(const num of arguments){
        result = result + num;
    }
    // const result = num1 + num2;
    return result;
}
const sum = addNumber(23,25,27,28,29);
console.log(sum);