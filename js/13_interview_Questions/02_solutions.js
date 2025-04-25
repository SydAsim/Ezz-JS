// 2. The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.


let array = [12,1,33,41,2,3,34,4,423,2,2,41,9]
for (let i = 0; i < array.length; i++) {
    
    const element = array[i];
    if (array[i] == array[i+1]){
        continue;
    }
    // double the array
    else
    {
        array[i] = array[i]*2;
    }
    
}
console.log(array);
