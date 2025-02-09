// filter
const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums =  myNums.filter( (num) => num > 4)    writen as a implicite function 
// console.log(newNums);

const newNums =  myNums.filter( (num) => {  //  writen as a explicte function
    return num > 4
})  
//  console.log(newNums);


 const num1 = []

 myNums.forEach( (num) => {
    if (num > 4) {
        num1.push(num)
      
    } 
 })
 console.log(num1);

 const userBooks = [
    {title :" boookOne", gener : "science", published : 1991, edition : 2004},
    {title :" bookTwo", gener : "history", published : 1994, edition : 2001},
    {title :" bookthree", gener : "political", published : 1990, edition : 2009},
    {title :" bookFour", gener : "history", published : 1995, edition : 2003},
    {title :" bookFive", gener : "science", published : 1998, edition : 2007},
    {title :" bookSix", gener : "political", published : 1997, edition : 2004},
    {title :" bookSeven", gener : "history", published : 1996, edition : 2009},
    {title :" bookEight", gener : "political", published : 1995, edition : 2000},
    {title :" bookNine", gener : "science", published : 1993, edition : 2004}

 ]
 
 const book = userBooks.filter((bk) => bk.gener === "history"&& bk.published >= 1995)
 console.log(book);