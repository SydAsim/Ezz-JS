// 1. The Magical Sorting Hat:
//  Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

const names = ["Syedawaisalishah" ,'Syedasimbacha' ,'kingming' ,
    'akramrazabacha' ,'fiaq' ,'Nasirkhan' ,'Syedmanzoor']

let houses = []

for (const name of names) {
    if (name.length < 6){
        houses.push('Gryffindor')
    }
    else if(name.length < 8){
        houses.push('Hufflepuff')
    }
    else if(name.length < 12){
        houses.push('Ravenclaw')
    }
    else if(name.length >= 12 ){
        houses.push('Slytherin')
    }

}
console.log(houses);
