
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(bankAccounts) {
// Step 1: Create an array to store clients' bank accounts with wrong balance
  let wrongBalanceAccounts = [];
// Step 2: Create a for loop to go through each object in bankAccounts
  for (let i = 0; i < bankAccounts.length; i++) {
// Step 3: Create a variable that stores the value of the sum of the deposits per account, then using an IF conditional and a FOR Loop
    let sumOfDeposits = 0;
    if (bankAccounts[i].deposits) {
      for (let j = 0; j < bankAccounts[i].deposits.length; j++) {
        sumOfDeposits += bankAccounts[i].deposits[j];
      }
    }
// Step 4: Create a variable that stores the value of the sum of the withdrawals per account, then using an IF conditional and a FOR Loop
    let sumOfWithdrawals = 0;
    if (bankAccounts[i].withdrawals) {
      for (let k = 0; k < bankAccounts[i].withdrawals.length; k++) {
        sumOfWithdrawals += bankAccounts[i].withdrawals[k];
      }
    }
// Step 5: Create a variable that stores the value of the total deposits minus total withdrawals
    let calculatedBalance = sumOfDeposits - sumOfWithdrawals;
// Step 6: Compare the value of the last variable with the value of the balance per account
// Step 7: If the value is different, store that account in the array of clients with wrong balance
    if (calculatedBalance !== bankAccounts[i].balance) {
      wrongBalanceAccounts.push(bankAccounts[i]);
    }
  }
  // Return the array of clients with wrong balance
  return wrongBalanceAccounts;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

//MY ALGORITHM:
// 1 create an array to store clients bank accounts with wrong balance
// 2 create a for loop to go through each object in bankAccounts
// 3 create a variable that stores the value of the sum of the deposits per account, then using an IF conditional and a FOR Loop
// 4 create a variable that stores the value of the sum of the withdrawals per account, then using an IF conditional and a FOR Loop
// 5 create a variable that stores the value of the total of the deposits per account minus the total of the withdrawals per account
// 6 compare the value of the last variable with the value of the balance per account
// 7 if value is different, store that account in the array of clients with wrong balance 