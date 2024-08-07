//object literals
const mySym = Symbol("key1") 
const jsUser = {
    name: "Hitesh",
    age: 25,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "mykey1"
 }

 console.log(jsUser["name"]);
 console.log(jsUser[mySym]);
 