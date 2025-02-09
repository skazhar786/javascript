// const a = 10
// let b = 20
// var c = 30

// if(true){                //({}) the curly braces is known as scope 
//     let a  = 10
//     const b = 20
//     var c = 30
// }
// // console.log(a);


function one(){
    const username = "shekh"
    function two(){
        const website = "youtube"
        // console.log(username);
    }
    two()
     
}
one()

if(true){
    const website = " youtube"

    if (website === " youtube"){
        const username = "shekh"
        // console.log(username + website);
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////
      //one method of declaring function
function addOne(num){
    return num+1
}
console.log(addOne(3)) 

const addtwo = function(num){         //another method of declaring function
    return num+2
}
addtwo()



