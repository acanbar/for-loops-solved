
// EXERCISE 15
// Please, read the exercise-info/concat.md to get the initial data of what is the expected result of this exercise.
// concatArrays(['d', 'r', 'a'], ['f', 'y']) => ['d', 'r', 'a', 'f', 'y']
// NOTE: You can NOT use the array.concat() method in your code

export function concatArrays(arr1, arr2) {
  let finalSingleArray = [];
  for (let i = 0; i < arr1.length; i++) {
    finalSingleArray.push(arr1[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    finalSingleArray.push(arr2[j]);
  }
  return finalSingleArray;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-15"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

// MY ALGORITHM:
// 1 create an array to store all the values of the 2 arrays (parameters)
// 2 create a FOR loop to go through every value of array #1
// 3 push each value of array #1 to the new array
// 4 create a FOR loop to go through every value of array #2
// 5 push each value of array #2 to the new array
