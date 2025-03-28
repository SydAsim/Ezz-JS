// for of loop
// ["" ,"" ,""]
// [{},{},{}]
// for (const element of object) {
    
// }


let arr = [1 ,2 ,3 ,4,5,6,7]

for (const num of arr) {
    // console.log(`Each value in the array is ${num}`);
}


let str = "Hello World!"

for(const name of str) {
    // console.log(`The characters in the String is ${name}`);

}

// MAPS just like objects in javascript but always store unique 
// and non repeated values 
let mymap = new Map()
mymap.set('PK','Pakistan')
mymap.set('tkr','turkey') 
mymap.set('Uk','United Kindom')
// console.log(mymap)
for(const [key,value] of mymap){
    // console.log(key, ':-', value); 
}



// same thing [key,value] will not work for the object 
// for that we use for in loop 
let myobj = {
    js : "JavaScript",
    cpp: "c++",
    Rb : "Ruby"
}

for (const key in myobj) {
//    console.log(`${key} short form of ${myobj[key]}`);
    }



// in array only indexes value will show not the values and that indecies 
// keys are also in number form so thats why Objects were introduce
let newarr = [2,34 ,3434, 23232,1232,3131,21,2]
for (const a in newarr) {
    // console.log(a);
}

// also Mop is not iteratable so thats why it cannot be written in a loop 
// let mymap2 = new Map()
// mymap.set('PK','Pakistan')
// mymap.set('tkr','turkey') 
// mymap.set('Uk','United Kindom')
// for (const key in object) {
//     console.log(key);
// }
