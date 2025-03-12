function subString(word: String) {

    let charIndexMap: Map < String, Number > = new Map();
    let left = 0;
    let maxLength = 0;
    let startIndex = 0;
    for (let i = 0; i < word.length; i++) {
        if (charIndexMap.has(word[i])) {
            left = Math.max(left, charIndexMap.get((word[i] !+1)));
            }
            charIndexMap.set(word[i], i);

            if (i - left + 1 > maxLength) {
                maxLength = i - left + 1;
                startIndex = left;
            }
        }
        console.log(maxLength);
        console.log(word.slice(startIndex, startIndex + maxLength));
        return word.slice(startIndex, startIndex + maxLength);


    }

    subString("abcabcbb")