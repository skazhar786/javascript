// const image = document.getElementById('images')
// image.addEventListener('click',function(e){
// console.log('clicked inside the images');
// },false)      

// const owl = document.getElementById('owl')
// owl.addEventListener('click',function(e){
//   console.log('clicked owl');
// },false)

document.querySelector("#images").addEventListener("click",function(e){
               console.log(e.target.tagName);
               if(e.target.tagName === "IMG"){
              let removeit= e.target.parentNode;
                  removeit.remove()
                     
               }
})

