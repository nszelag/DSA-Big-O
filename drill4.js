// What is the Big O of the following algorithm? Explain your answer

function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

/*
    O(n)
    The time complexity of this operation would be linear. It depends on the number of elements in the array.
*/