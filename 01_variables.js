const userid = 123212
let usermail = "user21@google.com"
var useradress = "Mardan"
userdesign = "VC"
let user_dob 

usermail = "user2@microsoft.com"
useradress = "Peshawar"
userdesign = "AC"
user_dob 

/*userid = 2 this wont work cause it is already declared as const
-->> ALso we can not use the  var keyword the variable will change if we declare var a = 10 at line 4 and then declare var a= 90 in line 10 then it will change the a at line 4 chnages 
occur in code also bz of block scope and functional scope
*/
console.log(userdesign);
console.table([userid , usermail , useradress , userdesign , user_dob])
  