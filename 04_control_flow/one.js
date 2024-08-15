if (true) {
    console.log('hello');
}
// == equal to, === equal both value and type
if (2 === '2') {
    console.log('executed');
    
}

const balance = 1000

if (balance < 200) {
    console.log("less than");   
} else if (balance < 750){
    console.log("less than 750");
} else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false 
const loggedInFromEmail = true
if (userLoggedIn && debitCard) {
    console.log("allow to buy courses");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("Logged In");
    
}