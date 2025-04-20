// fetch('https://somthing.com').then().catch().finally()
// // in Older versions of the Js the Promise Key word was not available
// // so we have to use libraries like Bluebird and Q
// // Now it native Means comes along with core JS in Node 

// // creating Promise using Promise Keyword 
// const PromiseOne = new Promise(function(resolve,reject){
//     // Do Async task like 
//     // DB calls , Networks, Cryptography

// setTimeout(function(){
//     console.log("Async task completed");
//     resolve()
// },1000)

// })

// // Consuming the Promise  using then . then should be connected to the 
// // resolve() method in the Promise .first wait for the Promise to complete
// PromiseOne.then(function(){
//     console.log("Promised consumed ");
// })


// new Promise (function(resolve ,reject){
//     setTimeout(function(){
//         console.log("Promised consumed 2");
//         resolve()
        
//     },1000)
    
// }).then(function(){
//     console.log("promise 2 consumed ");
    
// })

// // now we will pass paramete maybe object or array or ftns  in the 
// // resolve and we can access it in the consumption then 
// const PromisThree = new Promise(function(resolve, reject){
//     setTimeout( function(){
//         resolve({user:"Asim",email:"syedasime2021@gmail.com",cnt:"023223"})
//     },1000)
// })

// PromisThree.then(function(user){
//     console.log(user);
//     // so the user Object is accessed through uset variable defined
//     // in resolve
// })