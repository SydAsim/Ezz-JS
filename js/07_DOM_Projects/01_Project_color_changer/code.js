const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function (button) {
    console.log(button)
    button.addEventListener( 'click' ,function(e){
    // e is evernt object and is just variable name can be anthing
        console.log(e)
// e.target means ya event a kaha say raha hain
        console.log(e.target);

        if(e.target.id ==='grey'){
            body.style.backgroundColor = e.target.id //or "grey"
        }

        if(e.target.id ==='white'){
            body.style.backgroundColor = e.target.id //or "grey"
        }

        if(e.target.id ==='blue'){
            body.style.backgroundColor = e.target.id //or "grey"
        }

        if(e.target.id ==='yellow'){
            body.style.backgroundColor = e.target.id //or "grey"
        }
        if(e.target.id ==='purple'){
            body.style.backgroundColor = e.target.id //or "grey"
        }
        
    });
    
});