 function createUser (username){
    this.userName = username
    console.log("called");
    
 }

 function empDetail (username,email,id){
    createUser.call(this,username)
    this.email = email
    this.id = id
 }

 const data = new empDetail("Azhar","azhar@gmial.com",123)
 console.log(data);
 