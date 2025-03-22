//Basic conversion < = > etc like best conversions casuse both size number compasrsion is done
// console.log(12<8);
// console.log(1<2);
// console.log(12>1);
// console.log(1==8);
// console.log(1<2);

console.log(12<=1) 
console.log(23>="23");//string will be converted to a number as soon as cheak


//Confusing result Best practice is to aviod 
// console.log(null>0)
// console.log(null==0)
// console.log(null>=0)
// //The unpredicticabililty reason is that the == cheaks and comparsion works
// //<> <= >= differently comparsions convert a null to a number treating it as 0
// //that is why null>=0 is true treating it as 0 
// //also there is confusion about the undefined below comapraison willl always give false answer 
// console.log(undefined==0)
// console.log(undefined>0)
// console.log(undefined<0)

//also there is a "Strict Cheak"  === 
//which cheaks for data types as well is it of my data type 
//  should i do comparsion or not thou conversion hoga hi nahi 
console.log("2" === 2);

