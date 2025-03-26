// for loop 
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 4){
        // console.log(`four is best number`);
    }
    // console.log(element);
}

// inner for loops 
for (let i = 0; i <= 10; i++) {
    // console.log(`Outer for loop value is ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value is ${j} and parent value is ${i}`);
        // ;console.log(i + "*" + j + "=" + i*j);
        
    }
}


let myArray = [90 ,19 ,80 ,12 ,34 ,232,10 ,19 ,99]


for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}



let newarray = ["asim" , "ali" ,"awais"]

// console.log(newarray.length);

for(let i = 0 ; i < newarray.length; i++) {
    let res = newarray[i];
    // console.log(res);
}

// Break and continue

// for (let index = 1; index <= 20 ; index++) {
//     if (index == 5 ) {
//         console.log("5 detected");
//         break
//     }
//     console.log(`the value of i is ${index}`);
// }



// Continue skips for once  aik bar maaf kardo 
for (let index = 1; index <= 20 ; index++) {
    if (index == 5 ) {
        console.log("5 detected");
        continue
    }
    console.log(`the value of i is ${index}`);
}