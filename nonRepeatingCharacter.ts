function nonRepeatingCharacter (word:String) {
    let characterCount: Map <string,number> = new Map();
    for(let i =0;i<word.length;i++){
        characterCount.set(word[i], (characterCount.get(word[i]) || 0) + 1);
    }
    console.log(characterCount);
    for(let j=0;j<word.length;j++){
        if(characterCount.get(word[j]) === 1){
            console.log(word[j])
            return word[j];

        }
    }
    console.log(null)
    return null;

}

