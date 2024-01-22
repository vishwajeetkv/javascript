// const user = {
//     username: "vishwajeet",
//     price: 265,
    
//     welcomeMessage: function() {
//         console.log(`${this.username}, wlcome to website`);
//         // console.log(this);
//     }


// }

// user.welcomeMessage()
// user.username = "kumar"
// user.welcomeMessage()

// console.log(this);


function chai (){
    let username = "vishwajeet"
    console.log(this);

}

// chai()

// const chai = function () {
//         let username = "hitesh"
//         console.log(this.username);

// }

// chai()


// const chai =  () => {
//     let username = "vishwajeet"
//     console.log(this);
// }

// // chai()




// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(5, 4))

// const addTwo = (num1 , num2) => (num1 +num2)

const addTwo = (num1 , num2 ) => ({username: "vk"})



console.log(addTwo(5, 4))








