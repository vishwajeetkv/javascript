// function sayMYName(){
//     console.log("v");
//     console.log("i");
//     console.log("s");
//     console.log("h");
//     console.log("w");
//     console.log("a");
//     console.log("j");
//     console.log("e");
//     console.log("e");
//     console.log("t");
//     }
    
//     sayMYName()

//     function addTwoNumbers(number1, number2){
//         console.log(number1 + number2);

//     }


//      function addTwoNumbers(number1, number2){
//         // let result = number1 + number2
//         // return result

//         return number1 + number2
        
//     }
//    const result = addTwoNumbers(3, 8)
// //  console.log("Result: " , result);

//  function loginUserMessage(username="vk"){
//     if(!username){
//         console.log("Please enter a username");
//         return 
//     }
    
//     return `${username} just Logged in`
//  }

//  console.log(loginUserMessage("vishwajeet"))

// console.log(loginUserMessage())


// console.log(calculateCarPrice(100, 200, 300 , 500))


// const user = {
//     username: "vk",
//     price: 122
// }

// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
// }
// // handleObject(user)
// handleObject({
//     username:"vkv",
//     price:123

// })


// const myNewArray = [45, 55, 500 , 600]
// function returnSecondValue(getArray){
//     return getArray[2]
// }


// console.log(returnSecondValue(myNewArray));




function updateBrand(obj) {
    // Mutating the object is visible outside the function
    obj.brand = "Toyota";
    // Try to reassign the parameter, but this won't affect
    // the variable's value outside the function
    obj = null;
  }
  
  const car = {
    brand: "Honda",
    model: "Accord",
    year: 1998,
    price:444545454,
  };
  
  console.log(car.brand); // Honda
  
  // Pass object reference to the function
  updateBrand(car);
  
  // updateBrand mutates car
  console.log(car.brand); // Toyota
  

  console.log(car.model);

  console.log(car.year);

  console.log(car.price);



  
   







