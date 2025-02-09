function myName(){
    // console.log("hello world");
} 
myName()

//example of function adding two number
function addTwoNumber(number1,number2){
    //    console.log(number1+number2); //one way to execute function 
    // let result = number1 + number2   //another way to execute function 
        return number1+number2       //another and short way to execute function
}
//  const result =addTwoNumber(3,5)
//   console.log( "result : ",result);
console.log(addTwoNumber(3,4));


function justLoggedIn(username){
    return `${username}  just logged in`
}
console.log(justLoggedIn("Shekh"));


function shopingcart(val1,val2,...num1){ //(...)the three dot represent rest operator it is also used as spread operator in differnt condition after the value store by val1 and val2 the remaining value is goes to the rest operator 
      return num1
}
// console.log(shopingcart(200,300,400,1000))


function objectHandeling(anyObject){
    console.log(`hello my name is ${anyObject.username} and i am a ${anyObject.job}`)
}
objectHandeling({
    username:"shekh Azharuddin",
    job:"software Engineer"
})
