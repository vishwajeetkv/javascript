class User {
    constructor(email, passsword){
        this.email = email;
        this.password = passsword
    }

    get email (){
        return this._email.toUpperCase()

    }

    set email(value){
        this._email= value 
    }

    get password(){
        // return this._password.toUpperCase()
         
        return `${this._password}vkvkvkvk`


    }

    set password (value){
        this._password = value
    }



}

    const vishwajeet = new  User("vk@kv.ai", "abcd")

// console.log(vishwajeet.email);
console.log(vishwajeet.password);

