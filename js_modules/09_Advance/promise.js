//hre the promise is taken in a variable, it is not necessery to take the promise in a variable  
const promiseOne = new Promise(function(resolve,reject){
    //do any asyn tasks
 setTimeout(function(){
    console.log('done my asyn task');
    resolve()
 },1000)   
})

promiseOne.then(function(){
    console.log("promise consumed");
    
})

//now we see a code without using a variable 

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("pormise two");
        resolve()
    },1000)
}).then(function(){
    console.log("promise two consumed");
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({id:1234, name :"shekh", email:"example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({name:"shekh",id:123})
        } else{
            reject( console.log("error :something went wrong"))
                
        }
        
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.name
}).then(function(name){
    console.log(name);
    
}).catch(function(error){
    console.log("error");
    
}).finally(function(){
      console.log("the promise is either resolve or rejected");
      
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({name:"javaScript",id:123})
        } else{
            reject( console.log("error :js went wrong"))
                
        }
        
    },1000)
})
     
async function consumePromiseFive(){
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log("error occured at the time of fetching ");
    
   }
    
}
consumePromiseFive()