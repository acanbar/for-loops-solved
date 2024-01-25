// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

export function getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) {
// Step 1: Create an empty array to store objects
 let lessThan2000 = [];
// Step 2: Create a for loop for bankAccounts
 for (let i = 0; i < bankAccounts.length; i++) {
// Step 3: Create a variable to store value of deposits
   let deposits = bankAccounts[i].deposits;
// Step 4: Store "deposits" values
// Step 5: Confirm if the account has a deposit at all using an IF conditional
   if (!deposits || deposits.length === 0) {
// If it has no deposit, store that object
     lessThan2000.push(bankAccounts[i]);
   } else {
// Step 6: Create a for loop to add deposit values
     let sumOfDeposits = 0;
     for (let j = 0; j < deposits.length; j++) {
// Step 7: Create a variable to store the sum of deposits values
       sumOfDeposits += deposits[j];
     }
// Step 8: Create an IF conditional to determine if the sum of deposits values per account is less than 2000
// Step 9: If it's less than 2000, store that object in the final results array
     if (sumOfDeposits < 2000) {
      lessThan2000.push(bankAccounts[i]);
     }
   }
 }
// Return the final results array
 return lessThan2000;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

// MY ALGORITHM:
// 1 create an empty array to store objects for deposits less than 2000
// 2 create a for loop for bankAccounts to go through each object in the array
// 3 create a variable to store value of deposits of each object
// 4 store "deposits" values in the previous variable
// 5 confirm is account has a deposit at all using an IF conditional, if it has no deposit, store that object, else...
// 6 create a for loop to add deposit values
// 7 create a variable to store sum of deposits values per account
// 8 create an IF conditional to determine if sum of deposits values per account is less than 2000
// 9 If it's less than 2000, store that object in final results array
// 10 END