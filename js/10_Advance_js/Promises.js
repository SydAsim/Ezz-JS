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
            const error = true ;
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