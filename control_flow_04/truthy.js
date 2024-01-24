const userEmail = []

if (userEmail){
    console.log("Got user email");

}else{
    console.log("dont have user email");
}

//  Falsy values

// false , 0, -0, BigInt On ,"" , undefined, NaN

// truthy values
// "0" , 'false' , " ", [] , {} , function (){}


if (userEmail.length === 0){
    console.log("Array is empty");

}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

// Nullish coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// var1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);

// Terniary Operator
// consition ? true : false
const iceTeaPrice = 100 
iceTeaPrice <= 80 ? console.log("less than 80"): console.log(("more than 80"));









 
