// What is the Big O of the following algorithm? Explain your answer

function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

/*
    O(n*y) --> O(n)
    It is linear provided that the amount of elements in arr1 are not equal to the amount in arr2. Else would be O(n^2).
*/