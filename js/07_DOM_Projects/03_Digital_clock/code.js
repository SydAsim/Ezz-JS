const clock  = document.getElementById('clock')

// setInterval method controls events of js 
// it says give me method and and interval kay kitany interval baad main iss ko 
// continus karta jaounga 
setInterval(function(){
    let date = new Date 
    // console.log(date.toLocaleString());
    clock.innerHTML = date.toLocaleTimeString()

},1000)