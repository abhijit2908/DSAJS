function sumPairs(nums: Number[],target:Number){
    let seen:Set<Number> = new Set();
    let maxPair: number[][] = [];
    
    for(let i= 0; i< nums.length; i++){
        let remainder = target - nums[i];
        
        if(seen.has(remainder)){
        maxPair.push([nums[i],remainder]);
        }
        seen.add(nums[i]);
    }
    console.log(maxPair);
    return maxPair;
    
    }
    
    console.log(sumPairs([2, 7, 11, 15, -2, 4], 9)); // Output: [[2, 7], [-2, 11]]
    console.log(sumPairs([1, 3, 5, 7, 9], 10)); // 
    
        