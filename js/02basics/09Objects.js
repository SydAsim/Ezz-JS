// Singleton ->> only created in Constructor like 
// Object.create


// Object Literals 
// symbols asked in interviews that take a symbol and use it as a key in object
// so corrrect syntax  is 
const mysym = Symbol("key1");
const  JSobj = {
    name: "Asim",
    "full name" : "Syed Asim  Bacha",
    [mysym] : "Symbol accessed corrrectly",
    RollNo: 17 ,
    class: "BS-SE-A",
    email: "syedasim2021@apple.com",
    lastloggedin: ["Monday" ,"Tuesday" , "Wednesday"]
}
// console.log(JSobj.name);
// // other method to access data of obj 
// console.log(JSobj["name"]);
// console.log(JSobj [mysym]);


JSobj.name = "awais"
// console.log(JSobj.name)

// we can also freeze the Object so that it cannot be chnaged 
// Object.freeze(JSobj)
JSobj.name  = "ALi"
// console.log(JSobj)
// console.log(JSobj.name);

// Adding methods to the object
JSobj.greetings = function() {
    console.log("Welcome to jscript");
}

JSobj.greetingstwo = function() {
    console.log(`Welcome to jscript , ${this.name}`); // String interpulation
}

// Invoking method
// console.log(JSobj.greetings())
// console.log(JSobj.greetingstwo())




// singleton and More about Objects 

// const user = new Object()
const user = {}
// console.log(user);
user.number = "1289"
user.email = "email@apple.com"
user.islogged = true
// console.log(user ["number"]);

// Nested objects 
const newuser = {
    morningshift :{
        eveningshift:{
            name:"asim",
            fullname:"syed asim"
        }
    }
}
// console.log(newuser.morningshift.eveningshift.fullname);

// Merging 2 or more objects 
const target = {1: "a" , 2: "b" }
const src1 = {3: "a" , 4: "b" }
const src2 = {5: "a" , 6: "b" }
// const res = {target ,src1 , src2} same problem as in array so not good

// empty {} object means that if we are returning the merge object then 
// why not store in seprate object so adding more sources or objects will
// go to the {empty object not just specfic target} again optional step 
const res = Object.assign({}, target , src1 , src2)
// console.log(res);
// if {extra object{} used then flase else true} 
// console.log(target === res); // false


// easy method is spread method same as in array 
const newres = {...target , ...src1 , ...src2} 
// console.log(newres);

// Now how user data comes from data base in the form of array object

const userdata = [
    {
       id : "1",
       name: "asim"
    },

    {
        id :"2",
        name: "awais"
    } 
];
// console.log(userdata[1].id);
// console.log(userdata[1].name);

// console.log(Object.keys(JSobj));
// console.log(Object.values(JSobj));
// console.log(Object.entries(JSobj)); //har key value pairs ko array main show karya ga 

//console.log(JSobj.hasOwnProperty('email'));//chks id specfic property exists 
// in an object or not 



//OBJECT de-structure

const course =  {
    id : "909",
    email:"random@gmail.com" ,
    instructorname: "asim"
}
// console.log(course.instructorname);
const {instructorname : teacher} = course
// console.log(instructorname);
console.log(teacher);

// this is called de structuring same concept used in React 
// const navbar  = ({company}) => {

// }
// navbar (company = "asim")

// Api concept just like we order somthing in resturant 
// burgur kaha say laiga thats not our tension
// backend say kuch values ati hain us ko hum kaisay lekhtay hain 
// purany zamany main XML structure main values ati thi but now in JSON 
// JSON is nothing but an Object jab api ko call milti hain tou JSON say 
// data ata hain
// Java Script Object Notation  JSON  in wahtevr lang we work we have to send 
// data in JSON format

//  {
//      "name": "asim" ,
//      "coursename" : "Welcome to JS",
//      "price" : "999"
//  }

//  API sometime also may be in the form of array and inside it will be many 
// objects 
// [
//     {},
//     {},
//     {}
// ]


