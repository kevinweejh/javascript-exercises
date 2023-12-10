const reverseString = function(inputStr) {
    let strLettersArray = inputStr.split('');
    const strLength = strLettersArray.length;
    let reversedStrLettersArray = [];
    let poppedLetter;
    let outputStr;

    for (let i = 0; i < strLength; i++) {
        poppedLetter = strLettersArray.pop();
        reversedStrLettersArray.push(poppedLetter);
    }

    outputStr = reversedStrLettersArray.join('');
    return outputStr;
};

// Do not edit below this line
module.exports = reverseString;
