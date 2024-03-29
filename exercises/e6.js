// EXERCISE 6
// Return an array of bank account holders' names with a balance of 0
// Array example: bankAccounts in /data/data.js
// getClientWithNoMoney(bankAccounts) => ['Kevin', 'Jon']

export function getClientWithNoMoney(bankAccounts) {
  let accountHolders = [];
  for (let i = 0; i < bankAccounts.length; i++) {
    if (bankAccounts[i].balance === 0) {
      accountHolders.push(bankAccounts[i].name);
    }
  }
  return accountHolders;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-6"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
