// Primitive

// 7 types : String, Number, Boolean, null,undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// const bigNumber = 197397919794797791279n
//Reference (Non primitive)

// Array, Objects, Function

const heros = ["shaktiman", "naagraj", "doga"]
let myobj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function () {
    console.log("hello world");
}

console.log(typeof myFunction);
