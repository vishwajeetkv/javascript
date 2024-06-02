// let myName = "vishwajeet    "
// let mychannel = "chai    "

// console.log(myName.trueLength);

let myHeroes = ["thor" , "ironman"]

let heroPower = {
    thor: "hammer",
    ironman: "suit",
    

    getironPower: function(){
        console.log(`iron power is ${this.ironman}`);
    }
    
}

Object.prototype.vishwajeet = function(){
    console.log(`vishwajeet is present in all objects`);
}

Array.prototype.heyvishwajeet = function (){
    console.log(`vishwajeet says hello`);
}

// heroPower.vishwajeet()
// myHeroes.vishwajeet()
// myHeroes.heyvishwajeet()

// heroPower is an object
// heroPower.heyvishwajeet()


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport ={
    isAvailable:false
}

const TASupport = {
mmakeAssignment: 'js Assignment',
fulltime: true,
__proto__:TeachingSupport
}

Teacher.__proto__= User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}



anotherUsername.trueLength()

"vishwajeet".trueLength()
"coffee".trueLength()
 