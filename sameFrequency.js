function sameFrequency(num1, num2) {
    // good luck. Add any arguments you deem necessary.
    if (num1 < 0 || num2 < 0) {
        return false;
    }
    const number1 = num1.toString();
    const number2 = num2.toString();
    if (number1.length != number2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let i = 0; i < number1.length; i++) {
        frequencyCounter1[number1.charAt(i)] = (frequencyCounter1[number1.charAt(i)] || 0) + 1;
        frequencyCounter2[number2.charAt(i)] = (frequencyCounter2[number2.charAt(i)] || 0) + 1;
    }
    for (const key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }
    return true;
}