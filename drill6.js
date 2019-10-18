// 6. Creating pairs:

// What is the Big O of the following algorithm? Explain your answer

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}

createPairs(["A", "B", "C", "D", "E", "F"]);

/*

    O(n^2-n) -> O(n^2)
    The true order of growth is O(n^2-n) but at scale it would be polynomial which can be represented by O(n^2) 

*/
