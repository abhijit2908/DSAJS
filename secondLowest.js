function secondLowest(arr) {
    if (arr.length === 1 || 0) {
        console.log("not enough numbers in array")
        return "not enough numbers in array"
    }
    console.log(arr)
    let minNum = arr[0]


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minNum) {
            minNum = arr[i]
        }
    }
    let secondMinNum = arr[1]
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > minNum && arr[j] < secondMinNum) {
            secondMinNum = arr[j]
        }
        console.log(minNum, secondMinNum)
    }
    console.log(minNum, secondMinNum)
}