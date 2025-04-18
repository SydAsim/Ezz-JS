// generate random color 
const randomcolor  = function(){
const hex = "123456789ABCDEF";
let color = "#";

// looping till 6 cause hexcolocrs have 6 numbersalphabets
for(let i = 0 ; i<6 ; i++){
    color += hex[Math.floor(Math.random()*16)];
}
return color;
};


// globally declare the setIntervalid so that both the ftns can access it 
let setIntervalid ;
const  changecolor = function(){
    if(!setIntervalid){
     setIntervalid =  setInterval(changeBgc,1000)
    }
    function changeBgc(){
    document.body.style.backgroundColor = randomcolor() 
   }
}

const stopchangingcolor = function(){
    clearInterval(setIntervalid);
    setIntervalid = null;

};



document.querySelector('#start').addEventListener(
    'click' , changecolor); 
document.querySelector('#stop').addEventListener(
    'click' , stopchangingcolor) 


