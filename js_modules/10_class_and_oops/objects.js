function multiplyBy5(num){
    return num*5
} 
const result = multiplyBy5(5)
multiplyBy5.power = 2
console.log(result);
console.log(multiplyBy5.power);

function createUser(userName,score){
    this.userName = userName
    this.score= score
}

createUser.prototype.increment= function (){
    this.score++
    console.log(this.score);
    
}

createUser.prototype.printer = function (){
    console.log(`price is${this.score}`);
    
}
const userOne = new createUser("chai",25)
const userTwo = new createUser("tea",250)

userOne.printer()
userTwo.increment()