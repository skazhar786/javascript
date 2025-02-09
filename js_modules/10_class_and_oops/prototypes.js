const myHeros = ["thor","spiderman"]

const herosPower = {
    thor:"hammer",
    spiderman:"sling",
   
    getSpidermanPower: function(){
        console.log(`spidey power is :${this.spiderman}`);
        
    } 
}

Object.prototype.Azhar = function (){
    console.log("Azhar is present in everywhere");
    
}

Array.prototype.HiAzhar = function(){
    console.log("Azhar says hello");
    
}
herosPower.Azhar()
myHeros.HiAzhar()

