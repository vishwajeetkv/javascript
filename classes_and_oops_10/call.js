function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called");

}

function createUser(username, email, password){
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}


const chai = new createUser ("Goa", "chai@google.com", "15544")

console.log(chai);
