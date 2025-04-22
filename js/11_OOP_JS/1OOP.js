// Object literals
const user =  {
    name :"asim",
    loginCount : 8 ,
    signedin : true ,

    userdetails : function  (){
        // console.log("User Loggedin to the DB");
        // this help us to define the context of the 
        //  variables ftns etc 
        console.log(`The name of the user is ${this.name}`);
        console.log(this);
        
        
    }

}
// console.log(user);
// console.log(user.name);
// console.log(user.userdetails());
// console.log(this);


// Constructors  we have already studied it 
// so the new is like making new Excution Context 
// thou construction ftn hamy har bar aik naya instace /copy 
// daitha hain jiss say hay hum kuch  hi kar saktay hain
// const PromiseOne = new Promise()
// const date  = new Date()


function UserOne(username , roll , isloggIn){
    // this means current context ka username
    this.username = username;
    this.roll = roll;
    this.isloggIn = isloggIn;
    this.getuserdetail = function(){
        console.log(`This is user name ${this.getuserdetail()}`);
        
    }

    // it is implicity returned by the JS
    // return this
}




const u1 = UserOne("Asim" , 231317 , true)
// but if we store the UserOne in diff variable then 
// it override the Values of the Previous declartion
const u2 = UserOne("Awais" , 231318 , false)


// console.log(u1);   // both will get these values ("Awais" , 231318 , false)
// console.log(u2);

// Now remeber thats why we ***new*** key word cause it gives us the copy of that instance 
// where we can play with that specific copy of the instance 

const u3 = new UserOne ("khan" , 121 ,true)
console.log(u3);

// 1st when we use new new oBject is created {} which is called instance 
//In 2nd step constructor is called through new and all the 
// arguments are packed in it 
// 3rd step main this keyword say wo arguments uss kay andhar pack hojatay
// hain
// 4th step main hamay wo arguments mil jayengey jo hamay chahiye 

console.log(UserOne.constructor); // it says that UserOne is a ftn 


function UserOne(username , roll , isloggIn){
    this.username = username;
    this.roll = roll;
    this.isloggIn = isloggIn;
    this.getuserdetail = function(){
        console.log(`This is user name ${this.getuserdetail()}`);
        
    }

    // it is implicity returned by the JS
    // return this
}

const u33 = UserOne("ali", 21 ,false ,getuserdetail)




// Instance of we can check weather particular variable is instance of ftn or not
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car("Honda", "Accord", 1998);
  
  console.log(auto instanceof Car);
  // Expected output: true
  
  console.log(auto instanceof Object);
  // Expected output: true
  


