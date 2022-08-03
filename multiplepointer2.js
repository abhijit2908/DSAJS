function countUniqueValues(arr1) {
    if (arr1.length === 0) {
        return 0;
    }
    let i = 0
    let j = i + 1
    while (j < arr1.length) {
        if (arr1[i] !== arr1[j]) {
            i++;
            arr1[i] = arr1[j]
        }
        j++;
    }
    console.log(i + 1)
    return i + 1;
}

countUniqueValues([1, 1, 1, 1, 2])