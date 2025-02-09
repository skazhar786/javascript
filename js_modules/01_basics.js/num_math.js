const score = 100
const balance = new Number(400) 
console.log(score);

console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const num1 = 1000000
console.log(num1.toLocaleString('En-In'));

//*************************************  MATH  **********************************************************/
const num2 = (3,8,5,9)
console.log(Math.max(3,5,7,9,54))
console.log(Math.min(3,5,7,9,54))
const num3 = 23.5
console.log(Math.ceil(num3));
console.log(Math.floor(num3));
console.log(Math.random(num3));
console.log(Math.floor(Math.random()*10)+1);

const min = 20
const max = 40

console.log(Math.floor(Math.random()*(max-min+1))+min);