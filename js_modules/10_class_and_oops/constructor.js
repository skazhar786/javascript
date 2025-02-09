const data  = {
    name:"shekh",
    id: 123,
    email:"example.com",
    greeting : function () {
        //console.log("get user details")
    console.log(`username: ${this.name}`);
    console.log(this)
    
     }
}
console.log(data.name);
console.log(data.greeting());
console.log(this)

function user(name,loginCount,email){
   this.name = name ;
   this.loginCount = loginCount;
   this.email = email ;
//    return this;
}

const userOne =  new user("shekh",23,"shekh@gamil.com")
const userTwo =  new user("azhar",23,"azhar@gamil.com")
console.log(userOne);
console.log(userTwo);


