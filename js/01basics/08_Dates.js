// DATES IN JAVA SCRIPT 

//creating and obj and instance of that obj 
// Basically Date() it self is an object in js just like Map()
let myDate = new Date() 
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());//Wed Dec 25 2024 11:32:04 GMT+0500 (Pakistan Standard Time)
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString('en-IN'));
console.log(myDate.toUTCString());
console.log(myDate.getTimezoneOffset());//Gets the difference in minutes between Universal Coordinated Time (UTC) and the time on the local computer.console.log(myDate.toUTCString());
console.log(typeof myDate); // it is an object \

// let myNewDate  = new Date (2023 ,0 ,22)
// let myNewDate  = new Date (2023 ,0 ,22 ,4 ,5) //if you want more specification like date 
let myNewDate  = new Date ("2024-01-25")
// console.log(myNewDate.toLocaleString());

let myTimestamp = Date.now()
// console.log(myTimestamp);//milli seconds sa values nikal saktay hain
// console.log(myNewDate.getTime()); //will convert to seconds 

// console.log(Math.floor(Date.now()/1000))

//now if want the any thing time hr , day mont specifically then
 let newDate = new Date ()
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getFullYear())
console.log(newDate.getHours())
console.log(newDate.getMilliseconds())
console.log(newDate.getTimezoneOffset())
console.log(newDate.get())

// if you want to define more the toLocaleString then u can do it 
console.log(newDate.toLocaleString('default', {
    weekday: 'long'
}));






