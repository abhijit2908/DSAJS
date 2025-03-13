function longestConsecNumber(nums: Number[]){
    if (nums.length === 0) return 0;

let numSet:Set<number> = new Set(nums)
let maxLength = 0;

for (let num of numSet){
    if(!numSet.has(num-1)){
        let currentNum = num;
        let currentLength = 1
    
    while(numSet.has(currentNum+1)){
        currentNum++;
        currentLength++;

        maxLength = Math.max(maxLength,currentLength);
    }
}


}
return maxLength;
}

console.log(longestConsecNumber([100, 4, 200, 1, 3, 2])); // Output: 4
console.log(longestConsecNumber([0, 3, 7, 2, 5, 8, 4, 6, 1, 9])); // Output: 10
console.log(longestConsecNumber([9, 1, 4, 7, 3, 2, 8, 6, 5])); // Output: 9
console.log(longestConsecNumber([1, 2, 0, 1])); // Output: 3

