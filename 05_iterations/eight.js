const array = [1,2,3,4,5,6,7,8,9]
// const myTotal = array.reduce(function (acc, currval){
//     return (acc+currval)
// },0)
// console.log(myTotal);

const myTotal = array.reduce((acc,currval)=>{
    return (acc+currval)
},0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=>{
    return acc+item.price
},0)
console.log(priceToPay);
