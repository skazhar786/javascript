// syntax and example of for-of loop
const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}
const arr1 = "hello world!"

for (const num of arr1) {
    // console.log(num);
}


const val1 = new Map()

val1.set("in", "india")
val1.set("usa","united states of america")
val1.set("fr","france")

// console.log(val1);

for (const [ke,value] of val1) {
    console.log(ke,":-",value);
}