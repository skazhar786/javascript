const helloWorld = {
    userName: "shekh",
    price: 999,
    myCode:function(){
    console.log(`hello i am ${this.userName} `)
console.log(this);
   }
   
}
helloWorld.myCode()

helloWorld.userName = "azharuddin"
helloWorld.myCode()


const omg = () => {
  console.log(this);
}
omg()


const addtwo = (num1,num2) =>({username:"shekh"})   // wraping the functio in the parenthisis makes it a block 

console.log(addtwo())