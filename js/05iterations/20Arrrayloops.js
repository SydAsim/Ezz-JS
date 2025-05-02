// for each loop provides additional function so that we can play witht the 
// array Returns: undefined; it does not create a new array.
// Best for: When you want to execute some logic for each element in the array, such as logging, updating, or performing actions.




// acha function aur arrow function main variables kay name kuch bhihosakatahy 
// hain jis kay through array ko access kia jata hain 

const coding = ["python" ,"Js", "cpp" ,"Ruby" ,"Go"]
coding.forEach(function (val) {
    // console.log(val);
    
} )

// coding.forEach(   (items) => {
// console.log(items);
// })

function printme(na) {
    // console.log(na)
}
// we can also pass the function like this just pass the name reference of
// the function
coding.forEach ( printme)

// is kay ilawa is kay pass item ,ind,aur poray array kay access bhi hoata hain  
coding.forEach ( (itm ,ind ,arr)=> {
    console.log(itm , ind , arr);  
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
    console.log(item);
})
