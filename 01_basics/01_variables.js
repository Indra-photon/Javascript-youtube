const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
accountEmail = "hc@gmail.com"
accountPassword = "212514"
accountCity = "Bangalore"

console.log(accountId)
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])

/* 
Prefer not to use var because of issue in block scope and functional scope
*/