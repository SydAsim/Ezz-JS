const Number_one = 100
// console.log(Number_one);

const Number_two = new Number (200)
// // console.log(Number_two)

//  console.log(Number_one.toString());//converted to string and ca perform string methods

 console.log(Number_two.toFixed(10))// adds number 0 after a number

// const num = 1123.847
// // console.log(num.toPrecision(3)); // precison method round off the number 

const sales = 1000000
 console.log(sales.toLocaleString('en-IN'))

// console.log(Math)
// console.log(Math.abs(-4)) //change jsut neg to pos
// console.log(Math.round(11.2)) //remove anything after . 
// console.log(Math.ceil(12.1)) //Even if 1 number crosses after . then increase 
// console.log(Math.floor(1.9)) // regardless of the number after point just give me the floor value
// console.log(Math.min(13,3,23,2,3,23,23,2)) 
// console.log(Math.max(13,3,23,2,3,23,23,2))


// In JavaScript, Math.random() is a method that generates a pseudo-random number between 0 (inclusive) and 1 (exclusive).

// Key Points:
// Range: The generated number is always in the range [0, 1). This means it can be 0, but it will never reach 1.
// Pseudo-randomness: The numbers generated by Math.random() are not truly random but are generated using an algorithm, which makes them pseudo-random. For most applications, this level of randomness is sufficient.
//Common Usage: It is often used to create random numbers within a specific range or for random selection in programs.

console.log(Math.random()) 
console.log((Math.random() * 10) + 1) 
console.log(Math.floor(Math.random() * 10) + 1) 


// some times we might min anss max so that why we are def min and max 
const min = 10
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
