const myNums = [1,2,3,4,5,6,7,8,9,10]

const myNumbers = myNums.map( (num) => num + 10)
console.log(myNumbers);

const myNums1 = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums1
        .map( (num) => num * 10 )
        .map( (num) => num + 2)            // this is called chaining method where we can use multiple  methods like map and filter as it is used in the code and the value of the first method doesn't print instead of it directly goes to the second method and the second method have the output of the first method not the initial value  
        .filter ( (num) => num >= 40 )

        console.log(newNums);