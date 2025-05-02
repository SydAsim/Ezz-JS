const SetUsername  =  function (username){
    // Complex DB call
    this.username = username;
    console.log("SetUsername Called"); 
}


const createUsername = function (name , emil, password){
SetUsername.call(this ,name) //is ka siraf refrence giya  hay call horaha hain 
// lakin Reference nahi araha jo arguments aur parameters hain woh 
// so thats why we .call(this,name) means current context ka this lay lo
  this.email = emil;
  this.password = password;
}


const chai = new  createUsername("Asim" , "syedasim2021@gmail.com" ,"12!@!12")
console.log(chai);
