const myNums = [1 , 2 , 3 , 4 , 5 , 6]

// const myTotal = myNums.reduce(function (acc , currval) {
    
//     console.log(`acc: ${acc} and currval: $ {currval}`);
//     return acc + currval
// }, 0 )

const myTotal = myNums.reduce ( (acc , curr ) => acc+curr ,0 )

console.log(myTotal);

 
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 1455
    },

    {
        itemName: "java course",
        price: 5999
    },

]

const priceTopay = shoppingCart.reduce((acc , item) => acc + item.price, 0 )

console.log(priceTopay);




