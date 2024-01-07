// singleton
// Object.create

// object literls

const mysym = Symbol("Key1")


const JsUser = {
    name: "vishwajeet",
    "full name" : "vishwaajeet verma",
     [mysym]: "mykey1",
     age: 19,
     location:"patna",
     email:"contactme@google.com",
     isLoggedIn: false,
     lastLogin : ["monday , saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser.name);
// console.log(JsUser.lastlogin);
// console.log(["full name"]);
// console.log(JsUser[mysym]);

JsUser.email = "vkverma@microsoft.com"
// Object.freeze(JsUser)

JsUser.email = "vk@gamil.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello world");

}

JsUser.greetingTwo = function(){
    console.log(`hello world, ${this.name}`);

}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
