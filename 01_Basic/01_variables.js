const accountId = 144553
let accountEmail = "yagnesh@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState

//accountId = 2 //not allowed
accountEmail = "hc@hc.com"
accountPassword = "2123451"
accountCity = "mumbai"

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])