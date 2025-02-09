class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME:${this.username}`);
        
    }
}

class teacher extends user{
    constructor(username,email,id){
    super(username)
    this.email = email
    this.id = id
}

  addCourse(){
    console.log(`A new javascript was added by ${this.username}`);
    
  }
}

const value = new teacher("shekh","example@gmail.com",123)
value.addCourse()
value.logMe()