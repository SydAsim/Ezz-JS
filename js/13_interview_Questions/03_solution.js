// 3. The Mirror Mirror:
// Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

let str1 = 'spiderman'
 let reversedstr = ""

function mirror (str1){
    for (let i = str1.length - 1; i >=0 ; i--) {
        reversedstr += str1[i];
    }
    return  reversedstr;
}
const result = mirror(str1)
console.log(result);
