const user ={
    userName : 'Hitesh',
    price : 999,
    welcomeMessage : function () {
        console.log(`${this.userName}, welcome to website`); 
 //       console.log(this);         
    }
}
user.welcomeMessage()
user.userName = "Sam"
user.welcomeMessage()

// This -> works inside object only in JS

// Basic arrow function
const chai =(num1, num2)=>{
    return (num1+num2)
}
console.log(chai(2,3));

// Advanced: Implicit Return
const addTwo =(num1, num2)=> (num1+num2)

// 1. If {} is used then we have to use return statement example: chai function
// 2. If () is used then return is not needed example: addTwo function



// If we want to return an object from a function we have to wrap the () by curly braces ({}) Example below
const addThree =(num1, num2)=> ({user: 'Hitesh'})
console.log(addThree(3,4))

const newName = () => {
    const name = 'Indranil'
    console.log(`Hi my name is ${name}`);   
}
newName()







