
// {} these are called scope it maybe of (functions ,if, else or loops)

// Global Scope values are available for the Block Scope 
// var c = 300 
let a = 500 
const b  = 98 

if (true) {
    // Block Scope only available within the Block 
    let   a = 10 
    const b = 20 
    var   c = 30     
    // console.log("Inner :" , a );
    // console.log("Inner :" , b );
    
}

// console.log(a);
// console.log(b);
// console.log(c);


// parent function can be accessed
// by child but parent cannot access child 
function one() {
    const username = "awais"
    function two(){
        const website = "facebook"
        console.log(username);
    }
    // console.log(website);
    // two()
} 
one()

if(true) {
    const user= "asim" 
    if(user === "asim"){
        const website ="youtube"
        console.log("User name is " ,user,"and his channel is on" ,website);
    }
    // console.log(website);
    
}
// console.log(user);


// ***************************INTERSITING******hoisting concept

console.log(addone(4))
function addone(num) {
     return num + 1 
}

// but if we declare function through variable it cannot be done like
// the prev one

console.log(addtwo(23)); // will show eror 
const addtwo = function (numm) {
    return numm + 2
}


