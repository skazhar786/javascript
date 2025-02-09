const tinder_user = new Object()

console.log(tinder_user);

tinder_user.name = "shekh azharuddin"
tinder_user.address = "khordha"
tinder_user.isLoggedIn = "false"

console.log(tinder_user);

const regularUser = {
    email: "shekh azharuddin",
    address:{
       myAddress: { 
       firstName :" shekh",
       lastName: "azhar"
        }
    }
}
console.log(regularUser);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

const obj4 = {...obj1,...obj2,...obj3}; //spread operator(...) very useful to combine two object or array
console.log(obj4);

console.log(Object.keys(tinder_user))  //convert the object into a array imp*
console.log(tinder_user.hasOwnProperty("isLoggedIn"));