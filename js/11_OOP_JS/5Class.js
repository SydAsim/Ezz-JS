// ES-6 
class Employee {
    constructor (username,email,pass){
        this.username = username;
        this.email = email;
        this.pass = pass;
    }
    
    Encreyptedpass(){
        console.log(`${this.pass}341~#@!@#`);
        
    }

    CapitalLetterusername(){
        console.log(`Name in Capital letter is ${this.username.toUpperCase()}`);
        
    }
}
const emp = new Employee('ali' ,'ali121@gmail.com' , 123123)
console.log(emp);
console.log(emp.Encreyptedpass());
console.log(emp.CapitalLetterusername());


// This is Done through the Class now 
// Behind the scene it will be done through Function / prototype
 function user(username,email,pass){
    this.username = username;
    this.email = email;
    this.pass = pass;
}

user.prototype.passw = function(){
    console.log(`${this.pass}3249u8234`);
}
user.prototype.toupperletters = function(){
    console.log(`${this.username.toUpperCase()}`);
}

const code = new user('asim','32jsdf@gmail.com','@!#!#!')
console.log(code);
console.log(code.passw())
console.log(code.toupperletters())

