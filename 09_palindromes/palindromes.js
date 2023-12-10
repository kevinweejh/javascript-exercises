const palindromes = function (str) {
    // Convert all char in str to lowercase
    // Use regex to match only alphabets a-z
    // Split str into arr
    let testRegex = /[a-z0-9]/g;
    let matchedStr = str.toLowerCase().match(testRegex);

    // Create a copy of the arr    
    // Reverse the copy of the arr
    let reversedMatchedStr = matchedStr.slice().reverse();
    
    // Iterate through both arr to compare
    // const arrLength = matchedStr.length;
    // console.log(matchedStr.join(""));
    // console.log(reversedMatchedStr.join(""));
    // for (let i = 0; i < arrLength; i++) {
    //     if (matchedStr[i] === reversedMatchedStr[i]) {
    //         continue;
    //     } else {
    //         return false;
    //     }
    // }
    // return true;
    return matchedStr.join("") == reversedMatchedStr.join("");
};

// Do not edit below this line
module.exports = palindromes;
