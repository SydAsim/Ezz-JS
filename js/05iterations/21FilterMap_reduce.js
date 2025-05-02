// Why Use filter Instead of forEach for Filtering?
// Purpose-Built:
// filter is designed specifically for creating a new array based on a condition.
// Using it improves code clarity and readability.

// Less Code:
// With filter, there’s no need to manually manage a new array (evenNumbers in the example above).

// Immutable:
// filter ensures that the original array remains untouched, adhering to functional programming principles.

// Chainability:
// filter can be chained with other methods like map or reduce. For example:

// const result = numbers.filter((num) => num % 2 === 0).map((num) => num * 2);
// console.log(result); // Outputs: [4, 8]


const coding = ["python" ,"Js", "cpp" ,"Ruby" ,"Go"]
const values = coding.forEach( (item)=>{
    // console.log(item);
})
// console.log(values);
// so foreach loop always return undefined at the end when tery to access 
// or print through a variable so thats why we use filter


const arr  = [1,2,3,4,5,6,7,8,9,10]

const greaternumber = arr.filter( (num)=> (num > 4))
// or we can also use curely braces 
// const greaternumber = arr.filter( (num)=> {
//     return num > 4;
// })
console.log(greaternumber)


// using for each loop 
// let newarr = []
// arr.forEach( (myarr)=> {
//     if (myarr >4){
//         newarr.push(myarr)
//     }
// })
// console.log(newarr);




// Now below is real project example ofobject and we have to access the 
// specific value from the object (actually used in data base)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   just like we have studied chaining is allowed in filter 
let mybook = books.filter( (bk) => bk.genre === 'History' && bk.publish ===  1986)
// console.log(mybook);
mybook = books.filter((bk) => { return bk.publish > 1995})
// console.log(mybook);


//Now maps method 
let num = [1,2,3,4,5,6,7,8,9,10]
let a = num.map( (it) => {return it + 10})
console.log(a);

// now chaining concept 
let mynum = num
                .map((n) => n*2) //num currently is [2,4,6,8...]
                .map((n) => n+1)  //num currently is [3,5,7,9...]
                .filter((n) => n >10) 
// console.log(mynum);
// isi tarah hum bhuht sari chaining karsaktay hain 



// Now we will study reducer method usied  in shoping carts
// which intially take the value as 0 like the intial sum as 0 
let a1 = [1,2,3,4,5]
let total = a1.reduce(function (acc ,curval) {
    // console.log(`acc value is ${acc} and the total value is ${curval}`);
   return  acc+curval

}, 0 )//0 means the intial val is 0 
console.log(total);

let shoppingcart  = [
    {
        course : 'javascript',
        price : 3999
    },
    {
        course : 'Python',
        price : 999
    },
    {
        course : 'Mobile dev course',
        price : 9999
    }

]
let totalbill = shoppingcart.reduce( (accmulator ,pp)=> accmulator + pp.price,0 )
console.log(totalbill);
