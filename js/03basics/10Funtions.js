// console.log("A");
// console.log("s");
// console.log("i");
// console.log("m");

function saymyname() {
    console.log("A");
    console.log("s");
    console.log("i");
    console.log("m");
}
// saymyname()
// saymyname()

function addtwonumbers(number1 , number2){
    console.log(number1 + number2)
}
// addtwonumbers(20, 19)
// let resut  = addtwonumbers (12 ,21)
// console.log(result); // undefined cause we are not returnining anything
// we are just printing the parameters in added form so inorder to store 
// value in variable you have to return something in the function

function addnumbers(num1 , num2) {
    // let result = num1 + num2
    return  num1 + num2
}
let result = addnumbers(12 ,21)
// console.log("Result is :", result)


function loginuserMessage(username = "sam"){

    if(!username){
        console.log("please Enter the name");
        return 
    }

    return `${username} just logged in`
}
// console.log(loginuserMessage())
// so whatever the deafult parameters has 
// assigned values it will be override
// console.log(loginuserMessage("asim"))

// ...numb1 is rest operator spread bhi bholtahy hain issay 

function calculatecartPrice (val1 , val2 , ...numb1){
    return numb1
}
//val1 12 lay ga val2 21 aur baqi arraay ke form main numb1 
// console.log(calculatecartPrice(12 ,21 ,188 ,23 ,245, 454,34));

// how to pass object in a function 
const user  =  {
     username :"asim" ,
     price : "100" 
}
// anyobject is the keyword where then you can pass any object
function hadleobject(anyobject){
    console.log(`Username is ${anyobject.username}
     and price is : ${anyobject.price}`);
    
}
// hadleobject(user);

// we can also define it directly
// hadleobject({
//     username:"ali",
//     price:"1212"
// })



// same for the array 
const mynewarray = [10 , 29 ,22 ,11 ,18]
function getarr(getanyarray){
    return getanyarray[1]
}
// console.log(getarr(mynewarray));
// just like objects we can also decare the array directly
// console.log(getarr([90 , 12 ,12 ]))

