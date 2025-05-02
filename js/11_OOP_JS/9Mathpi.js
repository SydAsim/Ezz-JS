// .getOwnPropertyDescriptor shows us the hidden properties of the Object
const descriptor =  Object.getOwnPropertyDescriptor(Math,"PI")
// interview questions asked why cannot we add any number to math pi
console.log(descriptor);
// it will display this cause the in main JS Engine in C++ there are so many layer and 
// checks that you cant rewrite it 
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
Math.PI = 5
console.log(Math.PI);

//another way of creating an Object
// const myobj = Object.create(null);
const user = {
    name : "Gingertea",
    price: 398,
    Available : true,
    orderchai : function(){
        console.log("chai is not ready");
        
    }
}
console.log(user);
//usay ky andher jiss property ko chah rahay ho "name","price","Available" etc
console.log(Object.getOwnPropertyDescriptor(user,"name"));


// so by defineProperty you can also set your own property 
Object.defineProperty(user,"name" ,{
    value: "Adrak CHai",
    writable: false,
    enumerable: true, //if true only then object property is iterable means loop laga saktay hain
})
console.log(Object.getOwnPropertyDescriptor(user,"name"));


for (let [key, value] of Object.entries(user) ) {
    if(typeof value != 'function'){
    console.log(`${key} ,${value}`);
    }
}


