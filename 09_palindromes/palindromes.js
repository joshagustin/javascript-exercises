const palindromes = function (str) {
    let tmp = str.split(/[\s,!.]+/).join('');
    let length = tmp.length;
    for (let head = 0, tail = length - 1; head < tail; head++, tail--) {
        if (tmp[head].toLowerCase() != tmp[tail].toLowerCase()) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
