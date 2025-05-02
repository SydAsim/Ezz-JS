// on the basis of how datat is stored in the memeoryy there are 2 Types
//  1:primitive : Primitive datatypes which creates a copy of them in the
// memory address when we try to change it -->>call by value
// number , string , Boolean , bigint  ,null , undefined ,symbol
const numvar = 1281
const strvar = "kinng"
let boolvar = true
let bigintvar = 3134342342342344n
let nullvar = null
let variable_undefined ;
let id1 = Symbol("17") // symbol data type is for uniquness of variable 
let id2 = Symbol("17")//they mybe same
console.log(id1===id2) // will returnfalse casue the are both are unique 
console.log(typeof numvar);
console.log(typeof strvar);
console.log(typeof boolvar);
console.log(typeof bigintvar);
console.log(typeof nullvar); //null mean nothing and is of type obj
console.log(typeof variable_undefined);//havenot assigned any value to it 


// // JAVA SCRIPT  DYNAMICALLY TYPED  LANGUAGE
// we do not specify the datatype it on the run time assumes it 
// const score = 100
// const score_points = 99.9
// const islogged_in = true
// //so we did not mentioned that the variable  is if this data type or this it Dynamically tells us on the go

// // (non primitive)
// // they are called by reference chnages occurs in the orginal array obj ftn
// // arrays , objects  and functions  data types maybe of object object_ftns or ftns
// const students =["ali" , "ahmed" , "awais", "asim"];

// const student_details = {
//     name : "asim",
//     rollno : 231317,
//     class : "SE",
// }

// const  my_ftn  = function () {
//     console.log("hello World!")
// } 

// console.log(students)
// console.log(student_details)
// console.log(my_ftn)
 
// console.log(typeof students)// this is of data type object 
// console.log(typeof student_details)//this is of data type object 
// console.log(typeof my_ftn) // basically it is called ftn object type  all other are called object

// *******************************************************************
// stack and Heap Memeory allocation
// stack(used by all Primitive dt)  Heap(used by all Non-Primitive dt)

//Stack Exapmle
let user1 = "syed Asim Bacha"
let user2 = user1
user2 = "syed awais Ali Shah"
console.log(user1)
console.log(user2) //so changes occurs in the copy of the user1 and the orginal user1 
//reamains the same 

// heap Example
let userdetails1 = {
    username : "Ahmed",
    user_id  : 317,
    email  : "Ahmed@microsoft.com"
}
let userdetails2 = userdetails1
userdetails2.user_id = 318
console.log(userdetails1.user_id); //chnages will occur in both of the object
console.log(userdetails2.user_id);//cause the userdetail1 was reference  to userdetails2
//and in the values will change in the orignal heap 

