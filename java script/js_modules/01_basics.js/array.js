const myArray = [1,2,23,4,5,6]
console.log(myArray);
console.log(myArray[3]);
const newArray = new Array(1,2,3,4,5,6)
console.log(newArray);
console.log( typeof newArray);

//methods of array
newArray.push(7)

console.log(newArray);
newArray.pop()
console.log(newArray);
newArray.unshift(9)
console.log(newArray);
newArray.shift()
console.log(newArray);

//slice 
const Arr1 = [1,2,3,4,5]
console.log("A=", Arr1);
const myArr = Arr1.slice(0,3)
console.log(myArr);
//splice
console.log("B =", Arr1);
const Arr2 = Arr1.splice(1,3)
console.log(Arr2);
console.log(Arr1);

