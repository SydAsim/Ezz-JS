// Singleton ->> only created in Constructor like 
// Object.create


// Object Literals 
// symbols asked in interviews that take a symbol and use it as a key in object
// so corrrect syntax  is 
const mysym = Symbol ("key1");
const  JSobj = {
    name: "Asim",
    "full name" : "Syed Asim  Bacha",
    [mysym] : "Symbol accessed corrrectly",
    RollNo: 17 ,
    class: "BS-SE-A",
    email: "syedasim2021@apple.com",
    lastloggedin: ["Monday" ,"Tuesday" , "Wednesday"]
}
// console.log(JSobj.name);
// // other method to access data of obj 
// console.log(JSobj["name"]);
// console.log(JSobj [mysym]);


JSobj.name = "awais"
// console.log(JSobj.name)

// we can also freeze the Object so that it cannot be chnaged 
// Object.freeze(JSobj)
JSobj.name  = "ALi"
// console.log(JSobj)
// console.log(JSobj.name);

// Adding methods to the object
JSobj.greetings = function() {
    console.log("Welcome to jscript");
}

JSobj.greetingstwo = function() {
    console.log(`Welcome to jscript , ${this.name}`); // String interpulation
}

// Invoking method
JSobj.greetings()
JSobj.greetingstwo();




