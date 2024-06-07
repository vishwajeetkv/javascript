class User {
    constructor(username){
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }


  static createId(){
    return`123`
}
}

const vishwajeet = new User("vishwajeet")
console.log(vishwajeet.createId())



class Teacher extends User {
    constructor ( username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher ("iphone, :i@phone.com")

console.log(iphone.createId);