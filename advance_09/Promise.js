const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls , cryptograhy, network
    setTimeout(function(){
console.log('Asyn task is complete');
resolve()
    } ,1000)

})

promiseOne.then(function(){
    console.log("Promise consumed");
})



new Promise(function(resolve , reject){

setTimeout(function(){
    console.log("Asyn task is complete 2");
    resolve()
},1000)

})



const promisethree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "vishwajeet" , email: "vk@example.com"})
    },1000)

})

promisethree.then(function(user){
    console.log(user);
})



const promisefour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "vishwajeet", pass:"1213"})
        } else {
            reject ("Error; Something went wrong")
        
        }
    },1000)
})


promisefour.then((user)=>{
    console.log(user);
    return user.username
})

.then((username)=> {
    console.log(username);

})
.catch(function(error){
    console.log(error);


}) 
.finally(()=> console.log("The promise is either resolved or rejected"))



const promisefive = new Promise (function (resolve, reject){
setTimeout(function(){
let error = false
if(!error){
    resolve({username:"javascript" , pass:"1114"})
}
    else{
reject("error; js went wrong")
    
}

}, 1000)

})

async function consumepromisefive(){
    try{
        const response = await promisefive
        console.log(response);

    }

catch(error){
    console.log(error);
 }
}

consumepromisefive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     console.log(response);
//         const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E:", error );
        
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))