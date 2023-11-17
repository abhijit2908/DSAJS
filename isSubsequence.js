function isSubsequence(arr1,arr2){
    let i = 0
    let j = 0
    while(j < arr2.length){
        if(arr1.charAt(j) == arr2.charAt(i)){
            i++;
        }
        if(i === arr1.length ){
            return true;
        }
        j++;
    }
    return false
}





isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)