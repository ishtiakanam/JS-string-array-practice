const products = [
    'dell laptop',
    'Hp laptop',
    "Hawai Laptop",
    'Ipad',
    'Galaxy phone',
    'Note pad laptop',
     'dell',
     'dell'
]
const searching = "Laptop";
//indexOf()
const outPut = [];
for (const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) !== -1){
        // outPut.push(product)
    }
}
// console.log(outPut)

//includes
for (const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase()) !== -1){
    //    outPut.push(product)
    }
}
// console.log(outPut)

//startWith
for (const product of products){
    if(product.toLowerCase().startsWith(searching.toLowerCase()) !== -1){
    //    outPut.push(product)
    }
}
//  console.log(outPut)

 //endsWith
 for (const product of products){
    if(product.toLowerCase().endsWith(searching.toLowerCase())){
       outPut.push(product)
    }
}
 console.log(outPut)