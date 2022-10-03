const reverseString = function(string) {
    const stringIndex = string.length - 1;
    let reversedString = '';
    for (let i = stringIndex; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
