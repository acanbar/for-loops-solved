
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(bankAccounts) {
let greatestBalance = 0;
let topAccount = [];
for (let i = 0; i < bankAccounts.length; i++) {
  if (bankAccounts[i].balance > greatestBalance) {
    greatestBalance = bankAccounts[i].balance;
  }
}
for (let i = 0; i < bankAccounts.length; i++) {
  if (bankAccounts[i].balance === greatestBalance) {
    topAccount.push(bankAccounts[i]);
  }
}
return topAccount;

}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
