function sayMyName(){
    console.log("I");
}
sayMyName()
// sayMyName: This is only reference, sayMyName(): this is execution

function addNumbers(num1, num2){
    let res = num1 + num2
    return res
}
const result = addNumbers(3,5)
console.log(`Result: ${result}`);

function loginUserMessage (userName){
    if (!userName){
        console.log("Please enter a username");
        return 
    }
    return `${userName} just logged in`
}
console.log(loginUserMessage("Indranil"))

// Default values
function loginUserMessage (userName = "Sam"){
    if (!userName){
        console.log("Please enter a username");
        return 
    }
    return `${userName} just logged in`
}
console.log(loginUserMessage())
console.log(loginUserMessage("Indranil"))

function calculateCartPrice (...num1){  // Spread operator (...)
    return num1
}
console.log(calculateCartPrice(100, 200, 500));


const user = {
    name: "Indra",
    age: 25
}

function handledObject (anyObject){
    console.log(`username is ${anyObject.name} and age is ${anyObject.age}`)
}
handledObject(user)
handledObject({
    name: "Sam",
    age: 25
})
