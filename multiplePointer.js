function sumZero(arr1) {
    let left = 0
    let right = arr1.length - 1
    while (left < right) {
        let sum = arr1[left] + arr1[right]
        if (sum == 0) {
            console.log(arr1[left], arr1[right])
            return arr1[left], arr1[right];
        } else if (sum > 0) {
            right--;
        } else if (sum < 0) {
            left++;
        } else {
            return "we dont have a combo"
        }
    }
}

sumZero([-3, -2, -1, 0, 1, 2, 3])
sumZero([-4, -3, -2, -1, 0, 1, 2, 5])