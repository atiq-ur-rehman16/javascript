const accoundId = 123456
let accountEmail = "test@gmail.com"
var accountPassword = "12345"
accountCity = "Lahore"


//accoundId = 234567 // not allowed
accountEmail = "test2@gmail.com"
accountPassword = "67890"
accountCity = "Karachi"
let accountState; // undefined

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table({accoundId, accountEmail, accountPassword, accountCity, accountState});
