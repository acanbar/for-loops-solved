
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(bankAccounts) {
  const greaterThan100 = [];

  for (let x = 0; x < bankAccounts.length; x++) {
    const accMoneyIn = bankAccounts[x];

    if (accMoneyIn.deposits) {
      for (let y = 0; y < accMoneyIn.deposits.length; y++) {
        const deposit = accMoneyIn.deposits[y];

        if (deposit > 100) {
          greaterThan100.push(deposit);
        }
      }
    }
  }
  return greaterThan100;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
