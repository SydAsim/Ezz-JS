// For each loop most used loop of built in with in array we use to 
// access the key values of an array 
// Performs the specified action for each element in an array.

// @param callbackfn — A function that accepts up to three arguments.
// forEach calls the callbackfn function one time for each element in the array.


const coding = ["python" ,"Js", "cpp" ,"Ruby" ,"Go"]
coding.forEach(function (val) {
    // console.log(val);
    
} )

// coding.forEach(   (items) => {
// console.log(items);
// })

function printme(na) {
    console.log(na)
}
// we can also pass the function like this just pass the name reference of
// the function
// coding.forEach ( printme)

// is kay ilawa is kay pass item ,ind,aur poray array kay access bhi hoata hain  
coding.forEach ( (itm ,ind ,arr)=> {
    // console.log(itm , ind , arr);  
})


let mynewarr = [
    {
        Langname: "C++" ,
        filname : "cpp"
    },
    {
        Langname: "JavaScript" ,
        filname : "Js"
    },
    {
        Langname: "Python" ,
        filname : "py"
    }
]

// see just by declaring variable name item or any other name
// we can access all the properties of object in 1 loop
mynewarr.forEach(  (item)=> { 
    console.log(item.Langname);
}  )