//Primitive

//7 Types : string ,Number ,Boolean, null, undefined, Symbol, BigInt

//number
const Score = 100
const ScoreValue = 100.5

//console.log(ScoreValue)

//Boolean
const IsLoggedIn = false

//null
const outsidetemp = null

//undefined
let userId;

const id = Symbol ('123')
const anotherId = Symbol('123')


console.log(id === anotherId);


// const bigNumber = 3456543576654356754n





// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


//Stack (primitive), Heap (Non-Primitive)

let myYoutubename = "vkverma@gmail.com"

let anothername =  myYoutubename

anothername = "chaiaurcode"

console.log(myYoutubename)
console.log(anothername);








