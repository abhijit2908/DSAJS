function numberCount(string: String){

    string = string.split(" ");
    let frequencyCount:Map<String,Number> = new Map();

    for(let word of string){
        frequencyCount.set(word,(frequencyCount.get(word) || 0) +1);


    }
    console.log(frequencyCount)
    return frequencyCount

 
}

numberCount("apple banana apple orange banana apple")

function numberCount(nums: Number[]){

    
    let frequencyCount:Map<String,Number> = new Map();

    for(let num of nums){
        frequencyCount.set(num,(frequencyCount.get(num) || 0) +1);


    }
    let maxCount = 0;
    let mostFrequent = -1;
    console.log(frequencyCount)
    for (let [num, count] of frequencyCount) {
        if (count > maxCount) {
            maxCount = count;
            mostFrequent = num;
        }
    }
    console.log(mostFrequent)
    return mostFrequent;

 
}

numberCount([1, 3, 3, 2, 1, 3, 2, 2, 2])
