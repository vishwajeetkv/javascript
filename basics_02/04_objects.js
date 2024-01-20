const tinderUser ={}

tinderUser.id = "123abc"
tinderUser.name = "vk"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "vk2222@gmail.com",
    fullname:{
        userfullname:{
            firstname: " vishwajeet",
           lastname: "verma"

            }
        }

    }

    // console.log(regularUser.fullname.userfullname.firstname.lastname);

    const obj1 = {1: "a", 2: "b"}
    const obj2 = {3: "a", 4: "b"}
    const obj4 = {5: "a", 6: "b"}

    // const obj3 = {obj1, obj2, obj4}
    // const obj3 = object.assign({},obj1, obj2, obj4)
    // console.log(obj3);
    
    // const obj3 ={...obj1, ...obj2}
    // console.log(obj3);


    const User = [
        {
        id: 1, 
        email: "h@gmail.com"
    
    },
{
    id: 1,
    email: "h@gmail.com"
    
},

{
    
    id: 1,
    email: "h@gmail.com"
    

},

]


User[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));










































