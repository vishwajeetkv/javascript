const user = {
    username: "vishwajeet",
    loginCount:9,
    signedIn:true,
    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username)
// console.log(user.loginCount)
// console.log(this)

function User (username,  loginCount, isLoggedIn){
    this.username = username;
    this.loginCount =loginCount;
    this.isLoggedIn = isLoggedIn;
    
    
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this

}


const userOne = new User("vishwajeet" , 45, true)
const userTwo = new User("chai" , 85 , false)
console.log(userOne.constructor);
console.log(userTwo);
console.log(userOne);
