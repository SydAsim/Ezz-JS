// IIFE (Immediatly invoked function expression) jo function immidatly excute hojaye
//  Global scope kay polluation say problem hoti hai kia bar thou Global Scope kay 
// varibales ya jo bhi Pollution hain us ko hatanay kay liye we use IIFE


(function coffee () {
    console.log(`DB connected`);
})();
// yay dono ftns excute hongay magar isko pata nahi hain kay context rokna kaha hain that why 
// we use (;)
(function chai(){
console.log("welcome to the IIFE");
})();

// through arrow ftn 
//parameter name or anything
((name) => {
    console.log(`DB connected two  ${name}`);//parameter 
})("asim") // ENter what is the name

