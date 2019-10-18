// 9. Random element

// What is the Big O of the following algorithm? Explain your answer

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/*

    * O(1)

    It's just constant as it returns the specific value of an array element once. Das it.

*/
