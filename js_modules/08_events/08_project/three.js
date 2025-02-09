
    const randomVariable = function(){
    const hex = "123456789ABCDEF";
    let sign = "#";
    for( let i = 0;i<6;i++){
        sign += hex[Math.floor(Math.random()* 16)];
    }
    return sign;
};
console.log(randomVariable());
let interleave

 colorChange = document.querySelector("#start").addEventListener("click",function(){
 interleave = setInterval(contChange,1000) 
 function contChange(){
    contChange = document.body.style.backgroundColor = randomVariable()
 }
})

colorStop  =  document.querySelector("#stop").addEventListener("click",function(){
    clearInterval(interleave)
})


