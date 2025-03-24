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

