const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Hitesh"
tinderUser.isLoggedIn = false
// console.log(tinderUser);
const regularUser = {
    email: "some@example.com",
    fullName: {
        userfullName: {
            firstName: "Hitesh",
            lastName: "Choudhury"
        }
    }
}

console.log(regularUser.fullName.userfullName);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

console.log(Object.assign({}, obj1, obj2));
console.log({...obj1, ...obj2}); //spread 

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    }
]

console.log(users[0].email)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
