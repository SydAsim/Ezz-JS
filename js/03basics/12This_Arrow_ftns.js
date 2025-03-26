// this Keyword 
const user = {
    username : "asim", 
    price : "1000",
    welcomeMessage : function (){
        console.log(`${this.username} is first user`);
        console.log(this);//isi scope main jo bhi values hain us kay butbiq (context) print karay ga
        
    }
}
// current context yani values kay mutabiq ya method kaam karay ga kis cheez kay baray main baat ho rahihai
// user.welcomeMessage()
// user.username = "awais" 
// user.welcomeMessage()

// it will print empty object cause there is no context in gloabal scope  
// but in browser Global object is  Window object
// console.log(this);

// const cod = function (){
//     let user = "Asim" 
//     console.log(this);
// }
// cod()

// Arrow function
// const cod = () => {
//     let user = "Asim" 
//     console.log(this);
// }
// cod()

// const add = (num1 ,num2) => {
//    return num1 + num2 
// }

// implict return 
// const add = (num1 ,num2) =>    num1 + num2 
// const add = (num1 ,num2) =>   (num1 + num2)
const add = (num1 ,num2) =>   ({username: "Asim"})
//so remeber if{} braces then we use return else if()paraenthsis we donot use return
console.log(add());







// More on this 
/*
To summarize what you've said:

this is a dynamic reference that changes its behavior (or "mode") based on where and how it is used.

In the browser's global context, this points to the window object (or undefined in strict mode).

In an object method, this refers to the object that owns the method, allowing access to its properties or methods.

In a standalone function, this can default to the global object, or be undefined in strict mode.

In arrow functions, this doesn't have its own value; it inherits this from its surrounding context.

When using the new keyword, this refers to the newly created object.

With explicit binding (call, apply, bind), you can control the value of this.

In short, this is like a shape-shifting tool that always adapts to the context of the code where it's used. It helps us dynamically work with objects and functions without explicitly naming them, making our code more flexible and reusable.

Examples of this in Action
1. Global Context
In the global scope, this refers to the global object (window in browsers or global in Node.js).

console.log(this); // window (in browsers)
What does it do here?

It points to the global object, allowing you to access global variables or functions.

2. Inside an Object (Method Context)
When this is used in a method, it refers to the object that "owns" the method.


const person = {
    name: "Alice",
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet(); // Hello, my name is Alice
What does it do here?

this allows the greet method to refer to the person object and access its name property.

3. Standalone Function
When this is used in a regular function (not a method), its value depends on whether strict mode is enabled.


function showThis() {
    console.log(this);
}

showThis(); 
// In non-strict mode: window (or global object)
// In strict mode: undefined
What does it do here?

In non-strict mode, it points to the global object.

In strict mode, this is undefined.

4. Arrow Functions
Arrow functions don’t have their own this. Instead, they inherit this from their surrounding (lexical) scope.

const person = {
    name: "Alice",
    greet: () => {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet(); // Hello, my name is undefined
What does it do here?

Arrow functions inherit this from where they are defined. In this case, this refers to the global object, not the person object.

5. With new Keyword (Constructor Context)
When using a constructor function, this refers to the newly created object.


function Person(name) {
    this.name = name;
}

const alice = new Person("Alice");
console.log(alice.name); // Alice
What does it do here?

this refers to the object being created (alice), allowing the constructor to assign values dynamically.*/



// ************************************************************
// ************************************************************
// ************************************************************
// ************************************************************
/*More on Arrow Function

 SUMMARAY 

Arrow functions:

Do not have their own this.

Inherit this from the surrounding context.

In strict mode, the global this becomes undefined, and arrow functions reflect this behavior when defined in the global scope.

Use arrow functions when you want to ensure that this remains tied to its defining context, avoiding unexpected changes in its value.


// case 1 Inheriting from the functions 
const arrowFunction = () => {
    console.log(this);
};
arrowFunction(); // undefined in strict mode because `this` inherits from the surrounding global scope

// If defined in the global scope, the this in the arrow function will match the global this. In strict mode, this is undefined.

// If defined inside an object or method, the this in the arrow function will inherit from its enclosing context.


// Case 2: Inheriting this from an Object

// const obj = {
//     name: "Code Wizard",
//     arrowFunc: () => {
//         console.log(this.name);
//     }
// };

// obj.arrowFunc(); // undefined
// Here:

// The arrow function arrowFunc doesn’t have its own this.

// It inherits this from the surrounding lexical scope, which in this case is the global object, not the obj.

// Since this.name in the global scope is undefined, the output is undefined.



// Case 3: Inheriting this from a Method
// If the arrow function is defined inside a method, it inherits the this from the method's parent.

// javascript
// Copy
// Edit
// const obj = {
//     name: "Code Wizard",
//     method: function () {
//         const arrowFunc = () => {
//             console.log(this.name);
//         };
//         arrowFunc();
//     }
// };

// obj.method(); // Code Wizard
// Here:

// The arrow function arrowFunc inherits this from its surrounding method method.

// Since method has this pointing to obj, the arrow function uses obj as this.

*/