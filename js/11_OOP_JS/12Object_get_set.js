// now using Objects
// (_) means i defining a private Property normal user kay use main 
// nahi aye gi 
// getters and setters Special methods hain jo Properties kay upper hum rakh rahay
// hain yani bascially for Overidding Js give us get setters methods 
const user = {
    _email : "email@gmail.com",
    _pass : "13424dsa" ,
    
    // get means us ko memory say ley kay ao 
    get email(){
        return this._email.toUpperCase()
    },
    set email(vale){
        this._email = vale
    }
}

// instead of new keyword we can use factory function which means kis
//  Object kay bases pay aik naya function createkar kay do 
const u1 = Object.create(user) //user kay base aik object create karo aur usko u1 main refer karo 
console.log(u1.email);
