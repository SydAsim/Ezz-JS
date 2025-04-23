class user {
    constructor (username){
        this.username = username;
    }
    LoggedMe(){
        console.log(`The username is ${this.username}`);
    }

}
// Now i want user but he is a Teacher 
class Teacher extends user {
    constructor (username ,  email , pass) {
        // super key words goes to the extended part of the class constructor
        // and automatically sets the user or other varibale we want ot access
        super(username)
        this.email = email;
        this.pass = pass;
    }
    addUser (){
        console.log(`The added username is ${this.username}`);
    }
}

const test1  = new Teacher ("asim" , "Asim@gmail.com" , '232308921u9')
test1.addUser()
test1.LoggedMe()



const test2 = new user ("awais")
test2.LoggedMe()
// test2.addUser()  cause it is defined in Teacher class not user 
console.log(test1 === Teacher);//false 
console.log(test1 instanceof user)

