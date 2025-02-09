const  myNums = [1,2,3,4,5]

const newNums = myNums.reduce( (acc,currval) => {
    console.log(`acc value :${acc} nad currval value :${currval}`);
    return acc + currval
 }, 0)

// console.log(newNums);


const items = [{
    itemName : "js course ",
    price : 2999
},
{
    itemName : "ai/ml course ",
    price : 4999
},
{
    itemName : " python course",
    price  : 5999
},
{
    itemName : "data science course ",
    price : 10999
}
]

const priceToPay = items.reduce( (acc,items) => acc + items.price,0)
console.log(priceToPay);