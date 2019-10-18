// 10. What Am I?

// What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

function isWhat(n) {
  if (n < 2 || n % 1 != 0) {
    return false;
  }
  for (let i = 2; i < n; ++i) {
    if (n % i == 0) return false;
  }
  return true;
}

/*
 
    O(n)
    The time complexity of this operation would be linear. It depends on the value of n.

*/
