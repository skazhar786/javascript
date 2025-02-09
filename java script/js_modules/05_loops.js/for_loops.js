
for (let index = 0; index <= 10; index++) {
    const element = index;

    if (index === 5){
        // console.log("5 IS THE BEST NUMBER");
    }
    // console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
// console.log(`outer loop : ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop: ${j}, inner loop is : ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`);
    }
    
}

const myArray = ["ironman","spiderman","thor"]
// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

// for (let i = 0; i <= 20; i++) {
//     if (i == 5){
//         console.log(`5 is detected`);
//         break
//     }
//     console.log(i);
    
// }
for (let i = 1; i <= 20; i++) {
    if (i == 5){
        console.log(`5 is detected`);
        continue
    }
    console.log(`value of i is :${i}`);
    
}







