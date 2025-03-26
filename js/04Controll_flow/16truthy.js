// const useremail  = "" //[]
// if (useremail ){
//     console.log("got the email");
// }
// else {
//     console.log("dont have user email");
// }

// falsey values 
// fasle , 0 ,-0 ,BigInt ,"" ,null ,NaN, undefined , 0n

// Truthy values 
// truth ,[] ,"0", 'false', " " ,{} , function() {}

// if (useremail.length === 0 ){
//     console.log("array is empty");
// }

const myobject  = {} 

// if(Object.keys(myobject).length === 0){
//     console.log("object is empty");
// }

// NUllish coalescing Operator (??) : null undefined  fallback for erros and how to handle errors 
//  let val1  = 12 ?? 34
//  let val1  = null ?? 34
//  let val1  = undefined ?? 34
 let val1  =  undefined ?? 34 ?? 45
//  console.log(val1);
 
//  so basically this operator handles errors if we encounter situuation 
//  where if the value of 1 function is null or undefined then we 
//  NUllish coalescing Operator (??) and write complex functions 


// Ternairy Operator 
// condition ? true : false
// The ternary operator in JavaScript is a concise way to perform conditional operations. It's often used as a shorthand for an if-else statement. The syntax is:

// condition ? expression1 : expression2;
// let age = 20;
// let canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
// console.log(canVote); // Output: "Yes, you can vote."

// let score = 85;
// let grade = score >= 90 ? "A" : score >= 75 ? "B" : "C";
// console.log(grade); // Output: "B"

const tea = 108
tea <= 12 ? console.log("price is lesser than 12") : console.log
("price is higher than 12 ");

