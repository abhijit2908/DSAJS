function areThereDuplicates(...arr) {

    let dupCounter = {}

    for (let i = 0; i < arr.length; i++) {
        dupCounter[arr[i]] = (dupCounter[arr[i]] || 0) + 1;
    }
    console.log(dupCounter)
    for (const val in dupCounter) {
        if (dupCounter[val] > 1) {
            console.log("True")
            return true
        }
    }
    console.log("False")
    return false

}



areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true