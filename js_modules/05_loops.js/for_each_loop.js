
const coding = ["js","rb","python","cpp","java"]
 
// coding.forEach( function (val){
//     console.log(val);

// })

coding.forEach(  (val)=>{
    // console.log(val);

})

coding.forEach( (item,index,arr) => {
        //    console.log(item,index,arr);
})


const myArr = [
{
    fileName : "javascript",
    fileShortName : "js"
},
{
    fileName : "java",
    fileShortName : "java"
},
{
    fileName : "python",
    fileShortName : "py"
}]

myArr.forEach( (val) => {
console.log(val.fileShortName);
})