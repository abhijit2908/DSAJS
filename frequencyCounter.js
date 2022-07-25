//[1,2,3], [4,1,9]
//[1,2,3], [1,9]
//[1,2,1], [4,4,1]

function same(arr1, aar2) {
    if (arr1.length != arr2.length) {
        return false;
    }

    let frequencyCounter1 = {}
    for (let i = 0; i < arr1.length; i++) {
        frequencyCounter1[i] = (frequencyCounter1[i] || 0) + 1
    }

    let frequencyCounter2 = {}
    for (let j = 0; j < arr2.length; i++) {
        frequencyCounter2[j] = (frequencyCounter2[j] || 0) + 1
    }

    for (const k in frequencyCounter1) {
        if (!(k ** 2 in frequencyCounter2)) {
            return false;
        }

        if (frequencyCounter1[k] != frequencyCounter2[k ** 2]) {
            return false;
        }
    }
    return true



}