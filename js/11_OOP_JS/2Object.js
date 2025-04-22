// Yes, prototypes in JavaScript are a way to create methods and properties that can be shared across instances of objects. Using prototypes is particularly useful for memory efficiency because methods defined on the prototype are shared by all instances, rather than creating a new copy of the method for each instance.
function multiplyby5(num){
    return num*5;
}

multiplyby5.power = 2
console.log(multiplyby5.power);
console.log(multiplyby5(5));
console.log(multiplyby5.prototype); //it will give us object {}
// so function object bhi hain aur ftn bhi hain 





const user = function(name ,score){
    this.name = name;
    this.score =score;
}

// creating method through prototype for user ftn just like 
// we the build in ftns for the array Strings etc 
user.prototype.increment = function(){
    this.score++;
}
// ab issi mthod ko use karnay kayliye hum use method main 
// this  keyword ka use karty hain

user.prototype.display = function(){
    console.log(`THe price is ${this.score}`);
}

// new keyword help the user that i have made new methods and accept 
const chai  = new user("chai" ,20)
const code  = new user("code" ,200)

chai.display()

//  will not until the new keyword is not displayed 
// before the user definitionm

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


