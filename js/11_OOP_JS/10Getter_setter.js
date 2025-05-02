class User {
    constructor ( email , pass){
        this.email = email;
        this.pass = pass;
    }
    // Name jis property ka bana rahay hain woh same rahay ga 
    // so we have the power while setting the values we are setting
    // it as it is in the Database 
    set email(e){
        this._email = e
    }
    //But while getting it we are converting it to the uppercase
    get email(){
        return this._email.toUpperCase()
    }

    set pass (p){
        this._pass = p
    }
    get pass() {
        return console.log(`${this._pass.toUpperCase()}`);
    }
     

}

const u = new User("asim12912@gmail.com" ,'urehoweroieri')
console.log(u.email);
console.log(u.pass);