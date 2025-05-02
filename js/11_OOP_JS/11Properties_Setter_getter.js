// it is just another way of assigning setter getter to the 
// user we will use function as an Object as we have discussed eariler
function user(email , pass) {
    this._email= email;
    this._pass= pass;

    Object.defineProperty(this, 'email',{
        get:function(){
            return this._email.toUpperCase()
            
        },
        set:function(value){
            this.email=value
        }
    })
    Object.defineProperty(this, 'pass',{
        get:function(){
            return this._pass.toUpperCase()
            
        },
        set:function(value){
            this.pass=value
        }
    })
}
const chai = new user("23123123","dfiuewgu30871")
console.log(chai.email);
console.log(chai.pass);
