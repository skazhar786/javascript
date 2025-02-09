const value = " "
if (value){
    console.log("correct value");
}else{
    console.log("incorrect value");
}

// false value

// false, 0,-0,"",BIgint on,null,undefined,NaN

//truthy value

// "0",true," ",[],{},function(){}


const arr = []

if (arr.length === 0){
  console.log("array is empty");
}else{
    console.log("array is not empty");       // right process to check whether the array is empty or not
}


const myObj = {}

if (Object.keys(myObj).length === 0){
    console.log("object is empty");
}