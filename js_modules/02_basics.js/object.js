
const mySym = Symbol("key1")

const myObj = {
    name : "shekh azharuddin",
    email : "talktoskazhar786@gmail.com",
    [mySym]: "myOgKey",
    address : "khordha"
}
console.log(myObj.name);

//declaration of symbol


console.log(myObj[mySym]);
console.log(typeof mySym);

myObj.email= "skazhar.com";
// Object.freeze(myObj)            
myObj.email= "skazhar999.com";
console.log(myObj);

myObj.greeting=function(){
    console.log("hello i am shekh azharuudin");
}
console.log(myObj.greeting());

myObj.greetingtwo = function(){
    console.log(`this is me,${this.name}`)
}
console.log(myObj.greetingtwo())