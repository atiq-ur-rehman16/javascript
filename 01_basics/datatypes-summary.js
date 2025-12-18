// Primitive data types: number, string, boolean, null, undefined, symbol,BigInt



const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('1234');
const anotherId = Symbol('1234');

// console.log(id === anotherId);


// const bigNumber = 9007199254741991n;

// Reference data types (Non primitive): object, array, function

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "atiq",
  age: 28,
}


const myFunction = function(){
  console.log("hello world");
} 

console.log(typeof anotherId);



//================================

// Stack  (Primitive), Heap (Non-Primitive)

let myYoutubename = "codewithatiq";

let anothername = myYoutubename;
anothername = "chaiaurcode"
console.log( myYoutubename);
console.log( anothername);

let userOne ={
  email: "user@gmail.com",
  upi: "user@upi"
}

let userTwo = userOne

userTwo.email = "atiq@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
