//old way or normal way of adding up a string
let name = "asim" 
let seat_number = 12
//console.log(name + seat_number + "BS-SE-A");
console.log(`${name} ${seat_number}BS-SE-A`);

//modern way of writing strings this is called String interpulation more readable
//console.log(`hello may name is ${name} and my seatnumber is ${seat_number}`)

console.log(`hellomy name is ${name} and my seat_number is ${seat_number}`)
const playername = new String ("King");
console.log(playername);
//console.log(playername[0]);//this is not indexing rather it is 
// key value pairs like at 0 key K is present
console.log(playername.__proto__) 
console.log(playername.length)//=length is a method or function of a string 
//like length method there are alot of methods and ftns
console.log(playername.toUpperCase()); 
console.log(playername.charAt(2)); //char at index 2  
console.log(playername.indexOf('n')); // what is the index of char n 

const newplayername = playername
console.log(newplayername.substring(0,3)); // if you want to access specific range of string

//Slice can take neg values as well 
const anotherply = playername
console.log(anotherply.slice( -3, 3));

//trim method to trim spaces in strings 
const newpl = "    asim   "
console.log(newpl)
console.log(newpl.trim())
console.log(newpl.trimStart())
console.log(newpl.trimEnd())

//anoter method is replace which replace whatever we want in a Given string 
//if u give any space in the url the the browser convert it into %20 so we can easily replace it by 
//replace method 
let url = "https://hitesh.com/hitesh%20/hiteshchoudry"
console.log(url.replace('%20','--'))
//also if we want to find somthing in the string then we use include method 
console.log(url.includes("hitesh"))

//if we want to convert any string in array  based on any thing present in the array we use Split 

const  bobby = "King-is-back"
console.log(bobby.split('-'));
console.log(bobby.at(3));
// console.log(bobby.charCodeAt(3)); Returns the Unicode value of the character at the specified index.

// 128522
console.log("😊".codePointAt(0));

console.log("hello".concat(" ", "world")) // "hello world"


console.log("hello".endsWith("lo")) 
console.log("hello".lastIndexOf("l")) // return where last was seen first 
console.log("hello".isWellFormed()) // true cheaks if the string is well formed unicode /bascixlly is the string ture or not 

// *******************************************
// Utility Methods
// These methods perform string transformations and operations:

console.log("D".localeCompare("M"))//-1 cause A comes Before M

console.log("\u00E9".normalize("NFD")) // "é" (decomposed form) normalize unicode

console.log("hello".padEnd(8, "*")) // "hello***" adds ANYthing upto specific lengh
console.log("ha".repeat(3)) // "hahaha"



// Search and Replace
// match(regexp): Matches the string against a regular expression.
console.log("hello".match(/l/g) )// ["l", "l"] )
console.log([..."hello".matchAll(/l/g)])// Output: [Array with matchdetails] )
console.log("hello".replace("l", "w")) // "hewlo"
console.log( "hello".replaceAll("l", "w"))// "hewwo replaces all the word

//CASE conversions 
//Use Case
// Use toLocaleLowerCase() when:

// Your application supports multiple languages.
// You want to ensure correct text processing for users in specific locales.
// Locale-Specific Behavior (Turkish Example)
// In Turkish, the uppercase "I" has a different lowercase equivalent than in English

const turkishText = "Istanbul";
console.log(turkishText.toLowerCase());// "istanbul" (English default)
console.log(turkishText.toLocaleLowerCase("tr"));// "ıstanbul" 
// (Turkish-specific lowercase "I")


const turkishTexts = "istanbul";
console.log(turkishTexts.toUpperCase());// "ISTANBUL" (Default Eng-behavior)
console.log(turkishTexts.toLocaleUpperCase("tr"));  // "İSTANBUL" (Turkish-specific uppercase "i")


//Normal lower and uppercases
console.log("HELLO".toLowerCase()) // "hello"
console.log("hello".toUpperCase()) // "hello"
 