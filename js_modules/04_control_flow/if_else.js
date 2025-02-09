const tempreture = 52

if (tempreture >= 52){
    console.log("less than 52 ");
} 
else{
    console.log("tempreture is more than 52 degree");
}



const balance = 1000

if (balance <= 500){
  console.log("less than 500");
}
else if (balance >= 10000){
    console.log("less to 1000");
}
else{
    console.log("greater than 1000");
}


const isLoggedIn = true
const logedInFromGoogle = false
const LogedInfromEmail = true

if (logedInFromGoogle || LogedInfromEmail){
    console.log("execute");
}