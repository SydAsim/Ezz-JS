let myName = "Asim       "

// console.log(myName.truelength);


let myhero  = ["Thor , Spiderman"]
let Heropower  = {
    Thor : "Hammer",
    Spiderman : "Sling",
    getuserpower : function(){
        console.log(`The heros power is ${this.Thor}`);
        
    }
}

// this method is not available so i want to be available in the 
// Object (ftns , arrays ,Strigs) so all have the acces of asim() method
Object.prototype.asim = function() {
    console.log(`asim is present in all objects `);   
}
// Heropower.asim()
myhero.asim() // so yes also available in arrays 

// but what if we declare the Array method will it be accessable in 
// Object method ?
Array.prototype.arrayname  = function(){
    console.log(`hello form the arrayname method`);
    
}
myhero.arrayname() // availble in array 
// Heropower.arrayname() // and No Objects has not access to 
//  array method declaration


// ````Prototypall_Inheritance in js ````
// 

const User = {
    name : "chai",
    email : "chai@email.com"
}
const Teacher =   {
    makevideo : true 
}
const Teachersupport = {
    isAvailable : true
}

const TAsupport = {
    assignment : "JS Assignment",
    fulltime : true ,
    __proto__: Teachersupport
}
// or we can also use  __proto__ outside like
// Teacher.__proto__= User;

// Modern Syntax of 
Object.setPrototypeOf(Teacher , Teachersupport);

// we can also now set true_length mehtod for  the Strings data type
let anotherusername = "Awais           "
Object.prototype.actual_length  = function(){
    console.log(`${this}`);
    console.log(`The actual length is ${this.trim().length}`);
}

anotherusername.actual_length()
myName.actual_length()
"Asim".actual_length()
"Awais".actual_length()
// it will print somthing like this cause in the method definition 
// we have declared the  console.log(`${this}`); which means that 
// whenever we actual_length() method is called also show him the 
// Conetext on which it is called  yani current context
// Asim
// The actual length is 4
// Awais
// The actual length is 5