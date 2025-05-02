const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
 // so e.preventDefault jo hain woh default actions koprevent kartha hain
//  jaisa kay default form submission
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
    return ;
  }
   if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
    return ;
  } 
  
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    
    let message = `Your bmi is ${bmi}`
    results.innerHTML = `<span>${bmi} </span>`;


    if (bmi <18.6){
      message+=`  You are under weight`
      
    }
    else if( bmi <= 24.9){
      message+=`    You are fit `
      
    }
    else{
      message+= `You are Over weight   `
  }
  // so after the above coditions one codition might met. and it will be 
  // given to the result 
  results.innerHTML = message
});

