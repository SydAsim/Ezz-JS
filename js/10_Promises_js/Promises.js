// // fetch('https://somthing.com').then().catch().finally()
// // in Older versions of the Js the Promise Key word was not available
// // so we have to use libraries like Bluebird and Q
// // Now it native Means comes along with core JS in Node 

// // creating Promise using Promise Keyword 
const PromiseOne = new Promise(function(resolve,reject){
    // Do Async task like 
    // DB calls , Networks, Cryptography

setTimeout(function(){
    console.log("Async task completed");
    resolve()
},1000)

})

// Consuming the Promise  using then . then should be connected to the 
// resolve() method in the Promise .first wait for the Promise to complete
PromiseOne.then(function(){
    console.log("Promised consumed ");
})


new Promise (function(resolve ,reject){
    setTimeout(function(){
        console.log("Promised consumed 2");
        resolve()
        
    },1000)
    
}).then(function(){
    console.log("promise 2 consumed ");
    
})

// now we will pass paramete maybe object or array or ftns  in the 
// resolve and we can access it in the consumption .then 
const PromisThree = new Promise(function(resolve, reject){
    setTimeout( function(){
        resolve({user:"Asim",email:"syedasime2021@gmail.com",cnt:"023223"})
    },1000)
})

PromisThree.then(function(user){
    console.log(user);
    // so the user Object is accessed through uset variable defined
    // in resolve
})



const PromiseFour = new Promise(function(resolve, reject) {
 setTimeout(function() {
       const error = false ;
       if (!error) {
        // this might be the data from the DB 
          resolve({ name: "asim", rollno: "1212", class: "14" });
       } else {
          reject("Error: Something went wrong");
       }
    }, 1000);
 });
 
//  we can access the specific data through chaining
 PromiseFour
    .then((user) => {
       console.log(user);
       return user.name;
    })
    .then((name) => {
       console.log(name);
    })
    .catch((error) => {
       console.log(error);
    })
    .finally(()=>{
        console.log("The promised is either rejeted or solved ");
    })
 

   const Promisefive = new Promise(function(resolve,reject){
       setTimeout(function() {
            const error = false ;
            if (!error) {
             // this might be the data from the DB 
               resolve({ name: "javsScript", rollno: "1212", class: "14" });
            } else {
               reject("Error: Something went wrong");
            }
         }, 1000);
    });

// Other  methods of using async ftn and await instead .then() .catch() 

    // if the promise is not handled through  catch() then it will show
    // error to handle this error we can use try catch
     async function consumPromisefive() {
        // so using try catch we have Gracefully handled the catch error
        try {
            const response  = await Promisefive;
            console.log(response);
        } 
        catch (error) {
            console.log(error);
            
        }
       
    }
consumPromisefive()


// async function getallusers() {
//     try {
//         // using fetch/library method 
//         const  response = await fetch("https://jsonplaceholder.typicode.com/users")
//         // convert response to json format and the conversion also take time 
//         // so we have to await this as well
//         const data = await response.json()
//         console.log(data);
   
//     } 
//     catch (error) {
//         console.log("E :" ,error); 
//     }
// }
// getallusers()

// We can do same theen in then() and catch()

fetch("https://api.github.com/users/sydasim")
.then((response)=>{
return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})


// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
// The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options occur, the associated handlers queued up by a promise's then method are called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.

// A promise is said to be settled if it is either fulfilled or rejected, but not pending.

// Flowchart showing how the Promise state transitions between pending, fulfilled, and rejected via then/catch handlers. A pending promise can become either fulfilled or rejected. If fulfilled, the "on fulfillment" handler, or first parameter of the then() method, is executed and carries out further asynchronous actions. If rejected, the error handler, either passed as the second parameter of the then() method or as the sole parameter of the catch() method, gets executed.

// You will also hear the term resolved used with promises — this means that the promise is settled or "locked-in" to match the eventual state of another promise, and further resolving or rejecting it has no effect. The States and fates document from the original Promise proposal contains more details about promise terminology. Colloquially, "resolved" promises are often equivalent to "fulfilled" promises, but as illustrated in "States and fates", resolved promises can be pending or rejected as well. For example: