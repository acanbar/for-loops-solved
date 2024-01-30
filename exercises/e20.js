
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  let arrayWithA = [];
  let arrayNoA = [];
  let finalArray = [];

  // Determine if there is an 'a' or 'A' in every name:
  for (let i = 0; i < array.length; i++) {
    let containsA = false;

    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 'a' || array[i][j] === 'A') {
        containsA = true;
        break;
      }
    }
// If it containsA is true, then push to arrayWithA, else to arrayNoA:
    if (containsA) {
      arrayWithA.push(array[i]);
    } else {
      arrayNoA.push(array[i]);
    }
  }

// Push each array to finalArray:

  finalArray.push(arrayWithA);
  finalArray.push(arrayNoA);

  return finalArray;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
