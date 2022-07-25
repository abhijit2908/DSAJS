function validAnagram(word1, word2) {
    // add whatever parameters you deem necessary - good luck!
    if (word1.length !== word2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let i = 0; i < word1.length; i++) {
        frequencyCounter1[word1[i]] = (frequencyCounter1[word1[i]] || 0) + 1;
        frequencyCounter2[word2[i]] = (frequencyCounter2[word2[i]] || 0) + 1;
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    for (const property in frequencyCounter1) {
        if (frequencyCounter1[property] !== frequencyCounter2[property]) {
            console.log(property);
            console.log(frequencyCounter1[property]);
            console.log(frequencyCounter2[property]);

            return false;
        }


    }
    return true;

}