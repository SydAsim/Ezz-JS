class user {
    constructor(username) {
        this.username = username;
    }

    logMe (){
        console.log(`Username is ${this.username}`);
    }
    // static Keyword wont give access to the every method which calls it 
    static createID(){
        return `123`
    }
}

const u1 = new user('asim')
// console.log(u1.createID()); cannot access createID()


class Teacher extends user {
    constructor (username , email){
        super(username)
        this.email = email;
    }
}
const T1 = new Teacher('aism', 'Hello@gmail.com')
// T1.createID() even in child class the static mthod cnt be accessed 
