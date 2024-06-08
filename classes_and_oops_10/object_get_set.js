const User= {
    _email: "v@kv.com",


    _password: "abc",


    get email(){
        return this._email.toLocaleUpperCase()
    },

    set email(value){
        this._email = value
    },
    
    get password(){
        return this._password.toLocaleUpperCase()
    },

    set password(value){
        this._password = value
    }

}

const tea =Object.create(User)
console.log(tea.email);

console.log(tea.password);

