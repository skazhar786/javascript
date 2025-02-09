class user {
    constructor(username,email,id){
        this.username = username
        this.email = email
        this.id = id
    }

    encryptPassword(){
        return`${this.id}abc`
    }

    changeName(){
       console.log(this.username.toUpperCase());
       }

    }

    const data  = new user("shekh","shekh@gamil",123)
    console.log(data.encryptPassword());
    console.log(data.changeName());
    
