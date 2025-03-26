// if 
let islogged_in = true
let temperature = 80 

// if (temperature ===  80 ){
//     console.log("yes temp is equal to 80 ");
// }
// else {
//      console.log("No temp is greator than 80");
// }

// console.log("Excuted ");
// Operators in JS 
// < , > ,<= , >= , != , == ,  ===(also check type of the value)
// When to Use:
// Use !== and === in most cases to avoid unexpected behavior due to type coercion. These are considered best practices in JavaScript.
// Avoid using != and == unless you're certain type coercion is desirable.

console.log(5 != '5');  // false (because '5' is coerced to a number)
console.log(5 != 6);    // true  (because 5 is not equal to 6)
console.log(null != undefined); // false (because they are loosely equal)


console.log(5 !== '5');  // true  (because types are different: number vs string)
console.log(5 !== 5);    // false (both value and type are the same)
console.log(null !== undefined); // true (because types are different)


// const score = 900
// if (score > 500){
//     let power = "fly"
//     console.log(`superpower is ${power}`);
// }
// console.log(`super power is ${power}`);


// const balance = 1000 
// if (balance < 500) {
//     console.log("balance is  than 500 ");
// }
// else if (balance < 700) {
//     console.log("balance is lesser than 700");
// }

// else if (balance < 800) {
//     console.log("balance is lesser than 700");
// }

// else { 
//     console.log("balace is greator than 1200 ");
    
// }

const userloggedin = true 
const debitcard = true 

// if (userloggedin && debitcard) {
//     console.log("Thanks for the subscripption");
// }
const loggedinwithemail  = true 
const loggedinwithgoogle  = false 
if (loggedinwithgoogle || loggedinwithemail ) {
    console.log("Logged in completed ");
}