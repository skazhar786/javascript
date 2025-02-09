// example of stack memory
let stack1 = "hello"
let stack2 = stack1
console.log(stack2);
stack2 = "helloWorld"
console.log(stack2);

// example of heap memory
 
let heap1 = {
    Email : "skazhar@gmail.com",
    city : "khordha"
}

let heap2 = heap1
heap2.Email = "bablu@gmail.com"
console.log(heap1.Email);
console.log(heap2.Email);