
function count() {
    let count  = 0 ;
   return  function increment(){
        count++;
        return count ;
    }
    
}

let cnn = count();
console.log(cnn());
console.log(cnn());
let cnm = count()
console.log(cnm())
console.log(cnm())