let arr = [0 ,1  , 2 ,3 , 4,5  ]
// console.log (arr[1])
// shallow copy 
// copy of an object whose whos properties share the same reference point 
// (as explained in stack and heap)

// Deep copy 
// copy of an object whose properties do not share the same reference point 

const array2 = new Array ( 1 ,24, 44) 


// Methods in Array
arr.push(6)
// console.log (arr)

arr.pop()
// console.log(arr)

// adds at the back of the array very time-consuming method  for computer
arr.unshift(90)
// console.log (arr)
arr.shift()//del last element 
// console.log (arr)

// console.log(arr.includes(9)) 
// console.log(arr.indexOf(2))

const newarr = arr.join() //chnages the types into string 
// console.log(arr)
// console.log( newarr)
// console.log( typeof newarr)


// Slice and Splice 
const arr01 = arr.slice(1 ,3)
// console.log("A",arr)
// console.log (arr01)


const arr02 = arr.splice(1, 3)
// console.log("B" , arr)
// console.log (arr02)

// what happned to the orignal array 
// console.log( "c" ,arr) // so we can say see that all the elements 
// from orignal array is removed when we  splice the array so it manipulates the orignal array  

const marvel_heros = ["Thor" , "Hulk" , "ironman"]
const dc_heros = ["superman" , "flash" , "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1])

// We can also use concat
const narr = marvel_heros.concat(dc_heros)
// console.log(narr);
// console.log(narr[4]);

// spread operation is just like taking a glass a droping it to break down into many pieces
const new_heros = [...marvel_heros  , ...dc_heros]
// console.log(new_heros);

const another_arr = [1 ,2 ,3 ,4 ,[5,6,7],8,9 ,[10 ,20 ,30 ,[40 , 50 ,60,70] ,99 ,22], 11]
console.log(another_arr.flat(2))

// console.log(Array.isArray("asim"))
console.log(Array.from("asim"))

// console.log(Array.from({name:"asim"})) // it always return an empty array casue it do not know 
// kis ko convert karo key ko ya value ko 

let a1 = 100 
let a2 = 200 
let a3 = 300 
console.log(Array.of(a1,a2 ,a3));
